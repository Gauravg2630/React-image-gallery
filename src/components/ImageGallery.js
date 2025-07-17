import React from 'react';

function ImageGallery({ images }) {
  if (!images.length) return <p>No images found.</p>;

  return (
    <div className="gallery">
      {images.map((img) => (
        <div key={img.id} className="image-card">
          <img src={img.urls.small} alt={img.alt_description} />
        </div>
      ))}
    </div>
  );
}

export default ImageGallery;
