import Slider from 'react-slick'
import { asset } from '../utils/asset'

const projects = [
  {
    title: 'Empower Tech',
    description:
      'O Empower Tech foi criado em 2023 no âmbito do projeto PESQ da Fundação Bradesco Campinas, envolvendo a colaboração de alunos da 1ª, 2ª e 3ª séries do Ensino Médio. O objetivo era desenvolver um dispositivo de apoio à segurança das mulheres, unindo tecnologia e responsabilidade social. O resultado foi um bracelete inteligente, capaz de se conectar a um aplicativo móvel via Bluetooth e Wi-Fi, enviando alertas para contatos de emergência quando o botão fosse pressionado três vezes. O desenvolvimento foi dividido entre as séries: o 2º ano ficou responsável pela parte física e eletrônica do bracelete, enquanto o 3º ano cuidou da programação do aplicativo. Já no 1º ano, minha função foi voltada à comunicação e identidade visual do projeto. Atuei no design de banners, panfletos e logotipo, além de gerenciar as redes sociais e estratégias de divulgação. Também fui responsável pela criação de uma landing page funcional, desenvolvida em HTML, CSS e JavaScript puro, com foco em clareza, navegação simples e apresentação do produto. Essa experiência permitiu alinhar tecnologia, design e comunicação em um projeto com propósito social, destacando o poder da inovação colaborativa.',
    images: [asset('banner.png'), asset('panfleto.png')],
    techs: [
      'HTML',
      'CSS',
      'JavaScript',
      'Trabalho em equipe',
      'UX',
      'Desing',
      'Figma',
      'Social Midia'
    ],
    link: 'https://example.com'
  },
  {
    title: 'Sensor de Presença com Ultrassônico e Buzzer',
    description:
      'Este circuito utiliza o módulo HC-SR04, um sensor ultrassônico capaz de medir distâncias a partir do tempo de resposta de ondas sonoras, e um buzzer que emite um alerta sonoro quando um objeto é detectado dentro de uma distância configurada no código do Arduino. O microcontrolador processa o tempo de ida e volta do pulso sonoro, calcula a distância e, caso seja menor que o limite estabelecido, aciona o alarme.\n\nAplicação: Muito utilizado em sistemas de segurança (alarmar presença em um ambiente restrito), tecnologia automotiva (sensores de estacionamento), robótica (desvio de obstáculos em robôs móveis) e até mesmo em automação residencial (ativação de luzes ou travas automáticas quando alguém se aproxima).',
    images: [asset('sensor.png'), asset('sensor.png')],
    techs: ['Arduino', 'HC-SR04', 'Buzzer', 'Eletrônica', 'Automação'],
    link: 'https://example.com'
  },
  {
    title: 'Robô Seguidor de Linha com Sensores LDR e LM393',
    description:
      'O circuito utiliza sensores LDR que variam sua resistência conforme a intensidade luminosa refletida no solo. Esses sinais são comparados pelo LM393, que gera saídas digitais para controlar os motores DC. Quando o sensor identifica a linha escura contrastando com o fundo claro, o circuito ajusta a rotação de cada motor para manter o robô sobre o trajeto.\n\nAplicação: Fundamental em protótipos de veículos autônomos e sistemas industriais automatizados, como esteiras transportadoras que seguem trajetos pré-definidos. Também é muito aplicado em competições de robótica educacional, permitindo compreender princípios de controle automático, sensores e lógica embarcada.',
    images: [asset('robocircuito.png'), asset('robocircuito.png')],
    techs: ['Arduino', 'Sensores LDR', 'LM393', 'Motores DC', 'Robótica'],
    link: 'https://example.com'
  },
  {
    title: 'Exibição de Mensagens em Display LCD (16x2)',
    description:
      'Esse circuito conecta o Arduino a um display LCD 16x2, permitindo exibir caracteres e mensagens programadas. Um potenciômetro ajusta o contraste da tela para melhor visualização. O Arduino envia comandos para o LCD através de sinais digitais que controlam a escrita nas duas linhas e 16 colunas disponíveis.\n\nAplicação: A base para sistemas de interface homem-máquina (IHM), como em relógios digitais, estações meteorológicas, painéis informativos, contadores de produção industrial e em projetos de automação residencial, onde mensagens de status e comandos são exibidos em tempo real.',
    images: [asset('mensagem.png'), asset('mensagem.png')],
    techs: ['Arduino', 'Display LCD 16x2', 'Potenciômetro', 'Interface Digital'],
    link: 'https://example.com'
  },
  {
    title: 'Controle de Servo Motor com Potenciômetro',
    description:
      'Neste circuito, o potenciômetro funciona como um divisor de tensão que fornece valores analógicos lidos pelo Arduino. Esses valores são convertidos em sinais PWM (Pulse Width Modulation), controlando o ângulo de rotação do servo motor. Assim, a posição do potenciômetro define diretamente a posição do eixo do servo.\n\nAplicação: Muito utilizado em protótipos de robôs com braços articulados, portas automáticas, catracas eletrônicas, sistemas de modelismo (aviões, barcos, carros) e em automação residencial para controle de válvulas ou persianas. É um conceito essencial em mecatrônica e controle de movimento.',
    images: [asset('servo.png'), asset('servo.png')],
    techs: ['Arduino', 'Servo Motor', 'Potenciômetro', 'PWM', 'Mecatrônica'],
    link: 'https://example.com'
  },
  {
    title: 'Jogo de Ping Pong no Display LCD com Arduino',
    description:
      'Este circuito simula um jogo simples de ping pong, onde dois jogadores controlam, por meio de botões, o movimento representado no display LCD 16x2. O Arduino gerencia toda a lógica do jogo: movimentação, pontuação e efeitos sonoros com um buzzer para dar feedback ao jogador. Um potenciômetro auxilia na calibração da tela.\n\nAplicação: Exemplo prático de lógica de programação aplicada a entretenimento digital. Demonstra como o Arduino pode ser usado para criar interfaces interativas, sistemas de pontuação e jogos educativos. Serve como base para desenvolver protótipos de games eletrônicos e sistemas de treinamento cognitivo, além de reforçar conceitos de algoritmos e estruturas de repetição.',
    images: [asset('pingpong.png'), asset('pingpong.png')],
    techs: ['Arduino', 'Display LCD 16x2', 'Botões', 'Buzzer', 'Jogos'],
    link: 'https://example.com'
  }
]

export default function Work() {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }

  return (
    <div>
      <div className="text-center mb-6">
        <span className="px-3 py-1 rounded-full bg-gray-100 dark:bg-dark-50/20 text-sm">
          Work
        </span>
        <p className="mt-3 text-gray-600 dark:text-dark-200">
          Some of the noteworthy projects I have built:
        </p>
      </div>
      <div className="space-y-10">
        {projects.map((p) => (
          <div
            key={p.title}
            className="grid md:grid-cols-2 gap-6 card p-4 md:p-6"
          >
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
              <p className="text-gray-600 dark:text-dark-200 whitespace-pre-line">
                {p.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {p.techs.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-dark-50/20"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div>
                <a
                  href={p.link}
                  target="_blank"
                  className="inline-flex items-center gap-2 text-sm underline"
                >
                  Visitar projeto <span>↗</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
