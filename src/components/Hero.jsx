import { asset } from '../utils/asset'

export default function Hero() {
  return (
    <div className="grid md:grid-cols-2 gap-10 items-center pt-10 md:pt-20">
      <div className="space-y-5">
        <h1 className="text-4xl md:text-6xl font-extrabold">Michelle Marcondes</h1>
        <p className="max-w-xl text-gray-600 dark:text-dark-200">
          I'm a full stack developer (React.js & Node.js) with a focus on creating exceptional digital experiences that are fast, accessible, and responsive.
        </p>
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2"><img src={asset('localizacao escuro.png')} alt="loc" className="w-5 h-5" /><span>Campinas, Brasil</span></div>
          <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-green-500 inline-block"></span>Disponível para novos projetos</div>
        </div>
        <div className="flex items-center gap-4 pt-2">
          <a href="https://github.com/" target="_blank" className="hover:opacity-80"><img src={asset('git claro icon.png')} alt="GitHub" className="w-6 h-6" /></a>
          <a href="https://instagram.com/" target="_blank" className="hover:opacity-80"><img src={asset('instagram escuro.png')} alt="Instagram" className="w-6 h-6" /></a>
          <a href="https://linkedin.com/" target="_blank" className="hover:opacity-80"><img src={asset('linkedin claro icon.png')} alt="LinkedIn" className="w-6 h-6" /></a>
        </div>
      </div>
      <div className="flex justify-center md:justify-end">
        <div className="relative">
          <img src={asset('perfil img.jpg')} alt="Foto" className="w-72 h-72 object-cover rounded-lg shadow-xl" />
          <div className="absolute -right-6 -bottom-6 w-48 h-6 bg-gray-600/40 rounded"></div>
        </div>
      </div>
    </div>
  )
}
