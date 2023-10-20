import React from 'react'


export const CoverImage = ({ images }) => {
  return (
    <div>
      {images.map((image)=>{

      if (image.width===300){

       return(
         <img
          key={image.url} 
          src={image.url} 
          alt={`AlbumImage-${image.url}`} 
          /> 
      )
    }

      return null
      })}
            <p>This is the CoverImage</p>
    </div>
  );
};