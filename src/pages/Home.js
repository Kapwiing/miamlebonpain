import logo from '../pain_logo.png';
import '../style/Home.css';
import Alpine from 'alpinejs'
import { useState, useEffect } from 'react';

function Home() {

  useEffect(() => {
    Alpine.start()
  }, [])

  const [buttonText, setButtonText] = useState('Commander');

  useEffect(() => {
    const texts = ['Commander', 'Order Now', '주문하려면'];
    let index = 0;

    const interval = setInterval(() => {
      index = (index + 1) % texts.length;
      setButtonText(texts[index]);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="Home">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <h1>
            L'excellence du pain Français, façonné à la main avec passion.
            <br/>
            ❤️ 🇫🇷🥖 ❤️
          </h1>
        </div>
        <div>
          <h3>
            The excellence of French bread, handcrafted with passion.
            <br/>
            열정으로 빚어낸 프랑스 빵의 품격.
          </h3>
        </div>
      <button id="order_button" onClick={() => window.location.href = '/order'}>{buttonText}</button>
      <div id="about_link" onClick={() => window.location.href = '/about'}>
        About me
      </div>
      </header>
    </div>
  );
}

export default Home;