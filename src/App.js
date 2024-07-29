import './index.css';
import Navbar from './components/Navbar';
import { BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
