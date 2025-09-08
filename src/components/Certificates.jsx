import { useState } from 'react'

const certs = [
  { src: '/Certificado Apice.pdf', title: 'Apice' },
  { src: '/Certificado CSS.pdf', title: 'CSS' },
  { src: '/Certificado HTML.pdf', title: 'HTML' },
  { src: '/Certificado JS.pdf', title: 'JS' },
  { src: '/certificado OBI 2023.pdf', title: 'OBI' },
]

export default function Certificates() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(null)

  function openModal(item){ setActive(item); setOpen(true) }

  return (
    <div>
      <div className="text-center mb-6">
        <span className="px-3 py-1 rounded-full bg-gray-100 dark:bg-dark-50/20 text-sm">Certificates</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {certs.map((c) => (
          <button key={c.title} onClick={() => openModal(c)} className="card p-3 text-left">
            <div className="h-40 grid place-items-center text-sm">{c.title}</div>
          </button>
        ))}
      </div>

      {open && (
        <div className="fixed inset-0 z-50 bg-black/60 grid place-items-center p-4" onClick={() => setOpen(false)}>
          <div className="bg-white dark:bg-dark-900 rounded-lg max-w-3xl w-full p-4" onClick={(e)=>e.stopPropagation()}>
            <div className="flex justify-between items-center mb-3">
              <h4 className="font-semibold">{active?.title}</h4>
              <button onClick={() => setOpen(false)} className="px-2 py-1 border rounded">Fechar</button>
            </div>
            <iframe src={active?.src} className="w-full h-[70vh]"></iframe>
          </div>
        </div>
      )}
    </div>
  )
}
