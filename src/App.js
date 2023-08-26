import React, { useState } from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import ImageGallery from './Components/ImageGallery';
import BestSeller from './Components/BestSeller';

function App() {

  const [images,setImages] = useState([]);

  return (
    <div className='bg-primary'>
      <main>
        <div>
        <NavBar  setImages={setImages}/>
        </div>
        <div className='bg-lightBlack'>
          <BestSeller />
        </div>
      <div>
      <ImageGallery images={images}/>
      </div>

      </main>
    </div>
  );
}

export default App;
