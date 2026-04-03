import { useState, useEffect } from 'react'
import {Routes, Route} from 'react-router-dom'
import { ThemeContext } from './ThemeContext'
import Hero from './components/Hero'
import About from './components/About'
import './App.css'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import Whatsapp from './components/Whatsapp'
import HireModal from './components/HireModal'
import BackToTop from './components/BackToTop'

function App() {

  const [theme, setTheme] = useState("dark")
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    document.body.className = theme
  }, [theme]) //re-runs when theme changes

  function openModal() {
    setIsModalOpen(true)
  }

  function closeModal() {
    setIsModalOpen(false)
  }

  return (
      <ThemeContext.Provider value={{theme, setTheme}}>
          <NavBar />
          <main>
            <Hero title={"Frontend Web Developer"} stack={"HTML, CSS, JavaScript, Reactjs, TailwindCSS, Git"} openModal={openModal} />
            <About />
            <Skills />
            <Projects />
            <Education />
            <Contact />
          </main>
          <HireModal isModalOpen={isModalOpen} closeModal={closeModal} />
          <BackToTop />
          <Footer />
          <Whatsapp />
      </ThemeContext.Provider>
  )
}

export default App
