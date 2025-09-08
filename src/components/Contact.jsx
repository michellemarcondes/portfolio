export default function Contact() {
  return (
    <div className="text-center">
      <span className="px-3 py-1 rounded-full bg-gray-100 dark:bg-dark-50/20 text-sm">Entre em contato!</span>
      <p className="mt-4 max-w-2xl mx-auto">Meu perfil te interessou? Então entre em contato </p>
      <div className="mt-6 space-y-3">
        <a href="mailto:reachsagarshah@gmail.com" className="text-lg underline">mpinheiromarcondes@gmail.com</a>
        <div>
          <a href="tel:+5519997123081" className="underline">+55 19 99712-3081</a>
        </div>
      </div>
      <div className="flex items-center justify-center gap-4 mt-6">
        <a href="https://github.com/" target="_blank" aria-label="GitHub" className="underline">GitHub</a>
        <a href="https://instagram.com/" target="_blank" aria-label="Instagram" className="underline">Instagram</a>
        <a href="https://linkedin.com/" target="_blank" aria-label="LinkedIn" className="underline">LinkedIn</a>
      </div>
    </div>
  )
}
