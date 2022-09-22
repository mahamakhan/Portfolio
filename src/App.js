import './App.css'
// import { Routes, Route } from 'react-router-dom'
import About from './components/About'
import Project from './components/Project'
import Skills from './components/Skills'
import Nav from './components/Nav'
import Contact from './components/Contact'
import Resume from './components/Resume'
import Home from './components/Home'

function App() {
  return (
    <div className="App">
      <header className="header">
        <Nav />
      </header>
      <main>
        {/* <Routes>
          <Route path="/" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes> */}
        <section className="home">
          <Home />
        </section>
        <section>
          <About />
        </section>
        <section>
          <Project />
        </section>
        <section>
          <Skills />
        </section>
        <section>
          <Resume />
        </section>
        <section>
          <Contact />
        </section>
      </main>
    </div>
  )
}

export default App
