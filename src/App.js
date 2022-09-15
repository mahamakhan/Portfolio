import './App.css';
import About from './components/About';
import Project from './components/Project'
import Skills from './components/Skills'
import Nav from './components/Nav'
import Contact from './components/Contact'
// import Header from './components/Header';



function App() {
  return (
    <div className="App">
      <header className="header">
        <Nav/> 
      </header> 
      <main>
      <About/>
      {/* <Header/>
      <Footer/> */}
      <Project/>
      <Skills/>
      <footer className="footer">
  <Contact/> 
      </footer >
      
      
      </main>
    </div>
  );
}

export default App;
