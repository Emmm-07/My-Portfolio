import './index.css';
import Navbar from './components/Navbar';
import { BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
function App() {

  return (
    <div className="App">
      <Navbar />
      <Home />
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
