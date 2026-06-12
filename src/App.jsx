import { ThemeProvider } from './contexts/ThemeContext'
import Navbar           from './components/Navbar'
import Hero             from './components/Hero'
import About            from './components/About'
import Skills           from './components/Skills'
import Experience       from './components/Experience'
import Portfolio        from './components/Portfolio'
import PackagingGallery from './components/PackagingGallery'
import Education        from './components/Education'
import Contact          from './components/Contact'
import Footer           from './components/Footer'

function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Portfolio />
          <PackagingGallery />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
