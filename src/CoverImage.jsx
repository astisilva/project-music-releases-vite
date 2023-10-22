import React from 'react'
import './index.css';


export const CoverImage = ({ images }) => {

  return (
    <div className='cover-images'>
      {images.map((image) => {
        if (image.width === 300) {
          return (
            <img
              key={`${image.id}-${image.url}`}
              src={image.url}
              alt={`AlbumImage-${image.url}`}
              className='cover-image'
            />
          );
        }
        return null;
      })}
    </div>
  );
};