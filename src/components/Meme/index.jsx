import React from 'react'

import memes from '../../data/memes'

function Meme() {

  function handleClick() {
    document.querySelector('#sample').innerHTML = 'I Clicked'
  }

  return (
    <div className='container p-7'>
      <div className="flex justify-center gap-10 mb-7">
        <input type="text" name="topText" id="topText" placeholder='Top text' className='border border-black rounded w-1/2 h-10 text-center' />
        <input type="text" name="bottomText" id="bottomText" placeholder='Bottom text' className='border border-black rounded w-1/2 h-10 text-center' />
      </div>
      <button onClick={handleClick} className='w-full bg-gradient-to-r from-purple-900 to bg-purple-600 text-white p-2 rounded-lg hover:bg-purple-900'>Get a new meme image</button>
      <p id='sample'>Sample</p>
    </div>
  );
}

export default Meme;
