import logo from './logo.svg';
import './App.css';
import React from 'react';
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}

function App() {
  return (
    <div>
      <div className="box">
        <h2 style={{marginBottom: '20px'}}>Welcome to "Escape from Disaster"!</h2>
          <p>In this game, you will be given different circumstances where something unknown might happen.</p>
          <p>Your aim is to survive.</p>
          <p>You have to make choices. </p>
          <p>Your ending will depend on your choices,</p>
          <p>so make sure to make wise choices. </p>
        <h2 style={{marginTop: '20px', marginBottom: '20px'}}>Now, choose a theme to start your adventure!</h2>
          
          <button>Earthquake</button>
          <button>Flood(TBD)</button>
          <button >Hurricane(TBD)</button>
        
      </div>
    
    </div>
  );
}

export default App;
