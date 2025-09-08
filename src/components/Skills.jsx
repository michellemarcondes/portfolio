import { asset } from '../utils/asset'

const items = [
  { src: asset('JS icon.png'), label: 'Javascript' },
  { src: asset('html icon.png'), label: 'HTML' },
  { src: asset('exel icon.png'), label: 'Exel' },
  { src: asset('react icon.png'), label: 'React' },
  { src: asset('logo modo escuro.png'), label: 'Node.js' },
  { src: asset('sql icon.png'), label: 'PostgreSQL' },
  { src: asset('mongo icon.png'), label: 'MongoDB' },
  { src: asset('figma icon.png'), label: 'Figma' },
  { src: asset('power bi icon.png'), label: 'Power Bi' },
  { src: asset('git icon escuro.png'), label: 'Git' },
]

export default function Skills() {
  return (
    <div className="text-center">
      <span className="px-3 py-1 rounded-full bg-gray-100 dark:bg-dark-50/20 text-sm">Skills</span>
      <p className="mt-3 text-gray-600 dark:text-dark-200">The skills, tools and technologies I am really good at:</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 mt-8">
        {items.map((it) => (
          <div key={it.label} className="flex flex-col items-center gap-2">
            <img src={it.src} alt={it.label} className="h-12" />
            <span className="text-sm">{it.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
