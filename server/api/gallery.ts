import fs from 'node:fs/promises' // Use the async version of fs
import path from 'node:path'

// defineCachedEventHandler caches the response in the server's RAM
export default defineCachedEventHandler(async (_event) => {
  const possiblePaths = [
    path.resolve(process.cwd(), 'public', 'gallery'),
    path.resolve(process.cwd(), '.output', 'public', 'gallery'),
    path.resolve(process.cwd(), '..', 'public', 'gallery')
  ]

  let targetPath = ''

  // Use a standard loop for the paths
  for (const p of possiblePaths) {
    try {
      await fs.access(p) // Check if folder exists asynchronously
      targetPath = p
      break
    } catch {
      continue
    }
  }

  try {
    if (!targetPath) throw new Error('Nu am găsit folderul gallery.')

    // 1. Read directory asynchronously (does not block the main thread!)
    const files = await fs.readdir(targetPath)

    // 2. Filter images
    const images = files.filter(file => file.match(/\.(jpg|jpeg|png|webp)$/i))

    // 3. Get stats asynchronously and sort (Newest First)
    const filesWithStats = await Promise.all(
      images.map(async (file) => {
        const stats = await fs.stat(path.join(targetPath, file))
        return { file, mtimeMs: stats.mtimeMs }
      })
    )

    const sortedImages = filesWithStats
      .sort((a, b) => b.mtimeMs - a.mtimeMs)
      .map(item => `/gallery/${item.file}`)

    return sortedImages
  } catch (error: unknown) {
    console.error('\n🔴 [Gallery API] Eroare:', error instanceof Error ? error.message : error)
    return []
  }
}, {
  maxAge: 60 * 60, // Cache the result for 1 hour
  swr: true, // Serve stale-while-revalidate (keeps response instant even when updating)
  name: 'gallery-cache'
})
