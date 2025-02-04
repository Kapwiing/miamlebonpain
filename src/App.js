import logo from './pain_logo.png';
import './App.css';
import Alpine from 'alpinejs'
import { useState, useEffect } from 'react';

window.Alpine = Alpine

function App() {

  useEffect(() => {
    Alpine.start()
  }, [])

  const [buttonText, setButtonText] = useState('Commander');

  useEffect(() => {
    const texts = ['Commander', 'Order', '주문하려면'];
    let index = 0;

    const interval = setInterval(() => {
      index = (index + 1) % texts.length;
      setButtonText(texts[index]);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div id="catchphrase">
            L'excellence du pain Français, façonné à la main avec passion.
            <br/>
            ❤️ 🇫🇷🥖 ❤️
        </div>
        <div id="eng_catchphrase">
            The excellence of French bread, handcrafted with passion.
          <br/>
            열정으로 빚어낸 프랑스 빵의 품격.
        </div>
      <button id="order_button">{buttonText}</button>
      </header>
    </div>
  );
}

export default App;
