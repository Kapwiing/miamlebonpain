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
      <footer className='App-footer'>
        <div id="about_us">
          <h1>About me :</h1>
          <p>
            I'm a French student who loves to bake and share my passion for bread with the world.
            I make simple but authentic French bread using baker yeast and the best quality ingredients possible.
            I hope you enjoy my website and don't hesitate to place an order !
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
