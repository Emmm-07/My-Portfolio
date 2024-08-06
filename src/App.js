import './index.css';
import Navbar from './components/Navbar';
import { BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import Skills from './components/Skills';
import Test from './components/Test';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Skills/>
    
    </div>
  );
}

export default App;
