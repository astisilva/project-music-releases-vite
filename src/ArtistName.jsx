import React from 'react'

export const ArtistName = ({ artists }) => {
  return (

    <div><h2>Artist name:</h2>
      <ul>
      {artists.map((artist) => (
        <li key={artist.id}>{artist.name}</li>
      ))}
    </ul>
    </div >
  )
}
