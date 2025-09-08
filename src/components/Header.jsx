import { useEffect, useState } from 'react'
import { asset } from '../utils/asset'

const navItems = [
  { id: 'sobre', label: 'Sobre mim' },
  { id: 'work', label: 'Projetos' },
  { id: 'certificates', label: 'Certificados' },
  { id: 'contact', label: 'Contato' },
]

export default function Header() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const current = document.body.classList.contains('dark')
    setIsDark(current)
  }, [])

  function toggleTheme() {
    const next = !isDark
    setIsDark(next)
    document.body.classList.toggle('dark', next)
    localStorage.setItem('theme', next ? 'dark' : 'light')
  }

  return (
    <header className="sticky top-0 z-50 bg-gray-50/80 dark:bg-dark-900/80 backdrop-blur border-b border-gray-200/60 dark:border-dark-50/20">
      <div className="container-base flex items-center justify-between h-16">
        <a href="#home" className="font-semibold text-xl">Logo</a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {navItems.map((item) => (
            <a key={item.id} href={`#${item.id}`} className="hover:text-gray-600 dark:hover:text-dark-100">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a href={asset('Curriculo Michelle.pdf')} download className="px-3 py-1.5 rounded-full bg-gray-900 text-gray-50 dark:bg-dark-50/20 dark:text-dark-100 border border-gray-900 dark:border-dark-50/40 text-sm">Download CV</a>
          <button aria-label="Toggle theme" onClick={toggleTheme} className="w-9 h-9 grid place-items-center rounded-full border border-gray-200 dark:border-dark-50/40">
            {isDark ? (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M12 3.1a1 1 0 0 1 1 1V6a1 1 0 1 1-2 0V4.1a1 1 0 0 1 1-1ZM5.1 5.1a1 1 0 0 1 1.4 0L7.8 6.4A1 1 0 1 1 6.4 7.8L5.1 6.5a1 1 0 0 1 0-1.4ZM3.1 12a1 1 0 0 1 1-1H6a1 1 0 1 1 0 2H4.1a1 1 0 0 1-1-1ZM5.1 18.9a1 1 0 0 1 0-1.4l1.3-1.3a1 1 0 1 1 1.4 1.4L6.5 18.9a1 1 0 0 1-1.4 0ZM12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm7.9-6a1 1 0 0 1-1 1H18a1 1 0 1 1 0-2h1.9a1 1 0 0 1 1 1ZM17.6 7.8a1 1 0 1 1-1.4-1.4l1.3-1.3a1 1 0 0 1 1.4 1.4L17.6 7.8ZM12 17.9a1 1 0 0 1 1 1V20a1 1 0 1 1-2 0v-1.1a1 1 0 0 1 1-1ZM17.5 18.9a1 1 0 0 1-1.4 0l-1.3-1.3a1 1 0 1 1 1.4-1.4l1.3 1.3a1 1 0 0 1 0 1.4Z"/></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z"/></svg>
            )}
          </button>
        </div>
      </div>
    </header>
  )
}
