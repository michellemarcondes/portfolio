export function asset(path) {
  const base = import.meta.env.BASE_URL || '/'
  const clean = path.replace(/^\/+/, '')
  const encoded = clean.split('/').map(encodeURIComponent).join('/')
  return `${base}${encoded}`
}
