export default function Contact() {
  return (
    <div className="text-center">
      <span className="px-3 py-1 rounded-full bg-gray-100 dark:bg-dark-50/20 text-sm">Get in touch</span>
      <p className="mt-4 max-w-2xl mx-auto">What's next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect.</p>
      <div className="mt-6 space-y-3">
        <a href="mailto:reachsagarshah@gmail.com" className="text-lg underline">reachsagarshah@gmail.com</a>
        <div>
          <a href="tel:+5581999999999" className="underline">+55 81 99999-9999</a>
        </div>
      </div>
      <div className="flex items-center justify-center gap-4 mt-6">
        <a href="https://github.com/" target="_blank"><img src="/git icon escuro.png" className="w-5" /></a>
        <a href="https://twitter.com/" target="_blank"><img src="/instagram escuro.png" className="w-5" /></a>
        <a href="https://linkedin.com/" target="_blank"><img src="/linkedin escuro icon.png" className="w-5" /></a>
      </div>
    </div>
  )
}
