import './App.css'
import { Routes, Route } from 'react-router-dom'
import About from './components/About'
import Project from './components/Project'
import Skills from './components/Skills'
import Nav from './components/Nav'
import Contact from './components/Contact'
import Resume from './components/Resume'

function App() {
  return (
    <div className="App">
      <header className="header">
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
        <About />
        {/* <Header/>
      <Footer/> */}
        <Project />
        <Skills />
        <footer className="footer">
          <Resume />
          <Contact />
        </footer>
      </main>
    </div>
  )
}

export default App
