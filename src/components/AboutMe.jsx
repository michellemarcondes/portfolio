import { asset } from '../utils/asset'

export default function AboutMe() {
  return (
    <div className="grid md:grid-cols-2 gap-10 items-start">
      <div className="card p-4 md:p-6">
        <img src={asset('sobre mim img.jpg')} alt="About" className="rounded-lg" />
      </div>
      <div className="space-y-4">
        <span className="px-3 py-1 rounded-full bg-gray-100 dark:bg-dark-50/20 text-sm">Sobre mim</span>
        <h2 className="section-title">Curioso(a) sobre mim? O'que você vai encontrar:</h2>
        <p className="text-gray-600 dark:text-dark-200">Tenho 17 anos e sou estudante de Ciências Contábeis, com formação técnica em Análise e Desenvolvimento de Sistemas pelo Senac Campinas. Minha trajetória acadêmica é marcada pela participação em diversos projetos que uniram tecnologia, inovação e trabalho em equipe, como a tutoria voluntária de 2023, o desenvolvimento do site e redes sociais do projeto Empower Tech, a programação e montagem do robô de batalha George Russel (PESQ 2024), além do desenvolvimento dos projetos TeskByte, um sistema de gestão de estoque, e EcôFinanças, um aplicativo mobile de educação financeira.
        Possuo habilidades técnicas em programação (JavaScript, Node.js, React, SQL, MongoDB, SQL Server, HTML, CSS), design de interfaces (Figma) e domínio básico do pacote Office. Também conquistei certificações relevantes, como a 2ª fase da Olimpíada Brasileira de Informática (2025), o curso CC50 de Harvard, Excel 2016, pesquisa científica (APICE) e cursos em HTML, CSS e JavaScript.</p>
        <p className="text-gray-600 dark:text-dark-200">Me destaco pela organização, pontualidade, capacidade de comunicação e facilidade em trabalhar em equipe. Tenho interesse especial pela área contábil, motivada tanto pelos desafios trazidos pela reforma tributária de 2026 quanto pela possibilidade de auxiliar empresas e pessoas na gestão de seus processos financeiros.
        Busco oportunidades na área administrativa e contábil, onde possa adquirir experiência prática, consolidar meu aprendizado e dar os primeiros passos rumo ao meu objetivo de me formar em Ciências Contábeis e atuar em escritórios contábeis ou grandes empresas.</p>
        <ul className="grid grid-cols-2 gap-2 text-sm list-disc pl-5">
          <li>Estudante de TDS</li>
          <li>Estudante de Ciências contabeis</li>
        </ul>
      </div>
    </div>
  )
}
