import React from 'react'
import Meme from './components/Meme';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Meme />
      </main>
    </div>
  );
}

export default App;
