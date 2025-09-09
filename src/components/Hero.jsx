import { useEffect, useState } from 'react'
import { asset } from '../utils/asset'

export default function Hero() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    // Inicializa com o tema atual
    setIsDark(document.body.classList.contains('dark'))

    // Observa mudanças na classe do body
    const observer = new MutationObserver(() => {
      setIsDark(document.body.classList.contains('dark'))
    })

    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="grid md:grid-cols-2 gap-10 items-center pt-10 md:pt-20">
      <div className="space-y-5">
        <h1 className="text-4xl md:text-6xl font-extrabold">Michelle Marcondes</h1>
        <p className="max-w-xl text-gray-600 dark:text-dark-200">
          Sou aspirante às Ciências Contábeis, com formação técnica em Análise e Desenvolvimento de Sistemas. 
          Tenho interesse em contabilidade e busco oportunidades que me permitam aprender, crescer e contribuir para o ambiente corporativo.
        </p>
        <div className="space-y-2 text-sm">
          {/* Localização */}
          <div className="flex items-center gap-2">
            <img 
              src={isDark ? asset('localizacao escuro icone.png') : asset('localizacao claro icone.png')} 
              alt="Localização" 
              className="w-5 h-5" 
            />
            <span>Campinas, Brasil</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 inline-block"></span>
            Disponível para novos projetos
          </div>
        </div>

        {/* Ícones sociais */}
        <div className="flex items-center gap-4 pt-2">
          {/* GitHub */}
          <a href="https://github.com/" target="_blank" className="hover:opacity-80">
            <img 
              src={isDark ? asset('git escuro icon.png') : asset('git claro icon.png')} 
              alt="GitHub" 
              className="w-6 h-6" 
            />
          </a>

          {/* Instagram */}
          <a href="https://instagram.com/" target="_blank" className="hover:opacity-80">
            <img 
              src={isDark ? asset('instagram escuro.png') : asset('instagram claro.png')} 
              alt="Instagram" 
              className="w-6 h-6" 
            />
          </a>

          {/* LinkedIn */}
          <a href="https://linkedin.com/" target="_blank" className="hover:opacity-80">
            <img 
              src={isDark ? asset('linkedin escuro icon.png') : asset('linkedin claro icon.png')} 
              alt="LinkedIn" 
              className="w-6 h-6" 
            />
          </a>
        </div>
      </div>

      {/* Foto de perfil */}
      <div className="flex justify-center md:justify-end">
        <div className="relative">
          <img 
            src={asset('perfil img.jpg')} 
            alt="Foto" 
            className="w-72 h-72 object-cover rounded-lg shadow-xl" 
          />
          <div className="absolute -right-6 -bottom-6 w-48 h-6 bg-gray-600/40 rounded"></div>
        </div>
      </div>
    </div>
  )
}
