import Slider from 'react-slick'
import { asset } from '../utils/asset'

const projects = [
  {
    title: 'Empower Tech',
    description: 'O Empower Tech foi desenvolvido em 2023 pelo grupo 5 do projeto PESQ da Fundação Bradesco Campinas, reunindo alunos da 1ª, 2ª e 3ª série do Ensino Médio. A iniciativa consistiu na criação de um bracelete inteligente capaz de se comunicar com um aplicativo móvel para acionar contatos de emergência em situações de risco. O 2º ano foi responsável pela parte física (robótica), o 3º ano pelo desenvolvimento do app, enquanto minha contribuição no 1º ano envolveu a identidade visual e a presença digital do projeto. Atuei na criação de mídias sociais, banners, panfletos, logo e no desenvolvimento de uma landing page para a divulgação do produto.',
    images: [asset('banner.png'), asset('panfleto.png')],
    techs: ['React', 'Next.js', 'Typescript', 'Node.js', 'PostgreSQL', 'Tailwindcss', 'Figma', 'Cypress', 'Storybook', 'Git'],
    link: 'https://example.com'
  },
  {
    title: 'Another',
    description: 'Project description goes here.',
    images: [asset('perfil img.jpg'), asset('sobre mim img.jpg')],
    techs: ['React', 'Vite', 'TailwindCSS'],
    link: 'https://example.com'
  }
]

export default function Work() {
  const settings = { dots: true, arrows: true, infinite: true, speed: 500, slidesToShow: 1, slidesToScroll: 1 }

  return (
    <div>
      <div className="text-center mb-6">
        <span className="px-3 py-1 rounded-full bg-gray-100 dark:bg-dark-50/20 text-sm">Work</span>
        <p className="mt-3 text-gray-600 dark:text-dark-200">Some of the noteworthy projects I have built:</p>
      </div>
      <div className="space-y-10">
        {projects.map((p) => (
          <div key={p.title} className="grid md:grid-cols-2 gap-6 card p-4 md:p-6">
            <div>
              <Slider {...settings}>
                {p.images.map((img, i) => (
                  <div key={i} className="px-2">
                    <img src={img} className="rounded-lg" />
                  </div>
                ))}
              </Slider>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="text-gray-600 dark:text-dark-200">{p.description}</p>
              <div className="flex flex-wrap gap-2">
                {p.techs.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-dark-50/20">{t}</span>
                ))}
              </div>
              <div>
                <a href={p.link} target="_blank" className="inline-flex items-center gap-2 text-sm underline">Visitar projeto <span>↗</span></a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
