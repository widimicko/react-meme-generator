import React, { useState, useEffect } from 'react'

function Meme() {
  const [formData, setFormData] = useState({
    topText: '',
    bottomText: '',
    randomImage: '',
  })
  
  const [memesData, setMemesData] = useState([])

  useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
      .then(res => res.json())
      .then(response => setMemesData(response.data.memes))
  }, [])

  function handleChange(event) {
    const {name, value} = event.target
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: value
      }
    })
  }

  function formSubmit() {
    let randomNumber = Math.floor(Math.random() * memesData.length)
    setFormData((prev) => {
      return {
        ...prev,
        randomImage: memesData[randomNumber].url
      }
    })
  }

  return (
    <div className='container p-7'>
      <div className="flex justify-center gap-10 mb-7">
        <input type="text" name="topText" id="topText" placeholder='Top text' value={formData.topText} onChange={handleChange} className='border border-black rounded w-1/2 h-10 text-center' />
        <input type="text" name="bottomText" id="bottomText" placeholder='Bottom text' value={formData.bottomText} onChange={handleChange} className='border border-black rounded w-1/2 h-10 text-center' />
      </div>
      <button onClick={formSubmit} className='w-full bg-gradient-to-r from-purple-900 to bg-purple-600 text-white p-2 rounded-lg hover:bg-purple-900 mb-5'>Get a new meme image</button>
      
      <div className='relative'>
        <img src={formData.randomImage} alt="" className='w-full'/>
        <h2 className='absolute top-0 left-1/2 text-white font-bold text-4xl shadow-lg'>{formData.topText}</h2>
        <h2 className='absolute bottom-0 left-1/2 text-white font-bold text-4xl shadow-lg'>{formData.bottomText}</h2>
      </div>
    </div>
  );
}

export default Meme;
