import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Order from './pages/Order';

function App() {
  return (
    <>
      <div style={{ position: 'fixed', top: '1.2em', right: '1.2em' }}>
        <button
          style={{
            backgroundColor: '#050048',
            color: 'white',
            fontSize: '1.4em',
            fontWeight: 'bold',
            padding: '0.5em 0.5em',
            border: 'none',
            borderRadius: '15px',
            cursor: 'pointer',
            boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)',
            transition: 'background-color 0.3s ease, transform 0.3s ease',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          onClick={() => window.location.href = '/'}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
            width="2em"
            height="2em"
          >
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
          </svg>
        </button>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/order" element={<Order />} />
      </Routes>
    </>
  );
}

export default App;
