import Slider from 'react-slick'
import { asset } from '../utils/asset'

const projects = [
  {
    title: 'Empower Tech',
    description: 'O Empower Tech foi criado em 2023 no âmbito do projeto PESQ da Fundação Bradesco Campinas, envolvendo a colaboração de alunos da 1ª, 2ª e 3ª séries do Ensino Médio. O objetivo era desenvolver um dispositivo de apoio à segurança das mulheres, unindo tecnologia e responsabilidade social. O resultado foi um bracelete inteligente, capaz de se conectar a um aplicativo móvel via Bluetooth e Wi-Fi, enviando alertas para contatos de emergência quando o botão fosse pressionado três vezes. O desenvolvimento foi dividido entre as séries: o 2º ano ficou responsável pela parte física e eletrônica do bracelete, enquanto o 3º ano cuidou da programação do aplicativo. Já no 1º ano, minha função foi voltada à comunicação e identidade visual do projeto. Atuei no design de banners, panfletos e logotipo, além de gerenciar as redes sociais e estratégias de divulgação. Também fui responsável pela criação de uma landing page funcional, desenvolvida em HTML, CSS e JavaScript puro, com foco em clareza, navegação simples e apresentação do produto. Essa experiência permitiu alinhar tecnologia, design e comunicação em um projeto com propósito social, destacando o poder da inovação colaborativa.',
    images: [asset('banner.png'), asset('panfleto.png')],
    techs: ['HTML', 'CSS', 'JavaScript', 'Trabalho em equipe', 'UX', 'Desing', 'Figma', 'Social Midia'],
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
