import React from 'react';
import { Link } from 'react-router-dom';

export default function Earthquake() {
  return (
    <div className="earthquake" style={{color: 'white'}}>
      <p style={{ marginTop: '130px'}}>You are a young photographer living in a small town, passionate about nature and exploring the unknown.</p>
      <p style={{ marginTop: '20px'}}>Your apartment is located on a high point in the city, offering views of the vast ocean and continuous mountain ranges through the window.</p>
      <p style={{marginTop: '20px'}}>One day, you wake up early in the morning and want to take some pictures in the forest.</p>
      <p style={{marginTop: '20px'}}>In the forest, you encounters an elderly man observing the birds. he says to you that these birds are flying really low in a chaotic way.</p>
      <h2>You: </h2>
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
        <Link to="/p1-1" className='link' style={{color: 'black'}}>Feeling wired, and decide to go back to where you live</Link>
        <Link to="/p1-2" className='link' style={{color: 'black'}}>Feeling unsafe but deepen into the forest for further exploration</Link>
      </div>
    </div>
  );
}
