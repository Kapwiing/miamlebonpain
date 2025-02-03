import logo from './pain_logo.png';
import './App.css';
import Alpine from 'alpinejs'
import { useEffect } from 'react';

window.Alpine = Alpine

function App() {

  useEffect(() => {
    Alpine.start()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Kill yourself.
        </p>
      </header>
    </div>
  );
}

export default App;
