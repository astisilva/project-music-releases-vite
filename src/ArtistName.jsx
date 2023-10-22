import React from 'react'
import './index.css';

export const ArtistName = ({ artists }) => {
  return (

    <div>

      {artists.map((artist, index) => (
        <span key={artist.id} className='artist-name'>
          {artist.name}
          {/*  to include the comma and space (', ') conditionally after each artist's name, but not after the last artist. */} 
          {index<artists.length-1 && ', '}
          </span>

      ))}

    </div >
  )
}
