import './index.css'
import { About } from './components/about/About'
import { Contact } from './components/contact/Contact'
import { Nav } from './components/nav/Nav'
import { Header } from './components/header/Header'
import { Experience } from './components/experience/Experience'
import { Portfolio } from './components/portfolio/Portfolio'
import { Footer } from './components/footer/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
