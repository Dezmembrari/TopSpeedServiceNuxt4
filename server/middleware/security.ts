export default defineEventHandler((event) => {
  // 1. Prevent Clickjacking (stops other sites from embedding your site in an iframe to steal clicks)
  setResponseHeader(event, 'X-Frame-Options', 'DENY')

  // 2. Prevent MIME-sniffing (stops browsers from executing malicious hidden scripts)
  setResponseHeader(event, 'X-Content-Type-Options', 'nosniff')

  // 3. Strict Transport Security (forces browsers to ONLY use HTTPS for the next year)
  setResponseHeader(event, 'Strict-Transport-Security', 'max-age=31536000; includeSubDomains')

  // 4. Cross-Site Scripting (XSS) Protection
  setResponseHeader(event, 'X-XSS-Protection', '1; mode=block')
})
