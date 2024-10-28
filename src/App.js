import './App.css';
import React from 'react';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <div className="box">
        <h1 style={{ marginBottom: '20px' }}>Welcome to "Escape from Disaster"!</h1>
        <p style={{ fontSize: '20px' }}>In this game, you will face unexpected challenges at every turn.</p>
        <p style={{ fontSize: '20px' }}>Your mission: make the right choices to endure and escape.</p>
        <p style={{ fontSize: '20px' }}>Each decision changes your story, leading to different endings.</p>
        <p style={{ fontSize: '20px' }}>Choose wisely- and may your instincts guide you to safety.</p>
        <h2 style={{ marginTop: '20px', marginBottom: '50px' }}>Now, choose a theme to start your adventure!</h2>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
          <Link to="/earthquake" className='link'>Earthquake</Link>
          <Link className='link'>Flood</Link>
          <Link className='link'>Hurricane</Link>
        </div>
      </div>
    </div>
  );
}

export default App;
