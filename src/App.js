import React, { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import ImageGallery from './components/ImageGallery';

function App() {
  const [images, setImages] = useState([]);

  const fetchImages = async (query) => {
    try {
      const res = await fetch(
        `https://api.unsplash.com/search/photos?query=${query}&client_id=${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`
      );
      const data = await res.json();
      setImages(data.results);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  return (
    <div className="app">
      <h1>🖼️ Image Gallery</h1>
      <SearchBar onSearch={fetchImages} />
      <ImageGallery images={images} />
    </div>
  );
}

export default App;
