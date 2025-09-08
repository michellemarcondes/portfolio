import Header from './components/Header'
import Hero from './components/Hero'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Work from './components/Work'
import Certificates from './components/Certificates'
import Contact from './components/Contact'
import Footer from './components/Footer'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 dark:bg-dark-900 dark:text-dark-100">
      <Header />
      <main className="container-base space-y-28 md:space-y-40">
        <section id="home"><Hero /></section>
        <section id="sobre"><AboutMe /></section>
        <section id="skills"><Skills /></section>
        <section id="work"><Work /></section>
        <section id="certificates"><Certificates /></section>
        <section id="contact"><Contact /></section>
      </main>
      <Footer />
    </div>
  )
}

export default App
