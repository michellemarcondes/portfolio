import { useEffect, useState } from 'react'

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
          <a href="/Curriculo Michelle.pdf" download className="px-3 py-1.5 rounded-full bg-gray-900 text-gray-50 dark:bg-dark-50/20 dark:text-dark-100 border border-gray-900 dark:border-dark-50/40 text-sm">Download CV</a>
          <button aria-label="Toggle theme" onClick={toggleTheme} className="w-9 h-9 grid place-items-center rounded-full border border-gray-200 dark:border-dark-50/40">
            {isDark ? (
              <img src="/luz icon.png" alt="Light" className="w-5 h-5" />
            ) : (
              <img src="/lua.png" alt="Dark" className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>
    </header>
  )
}
