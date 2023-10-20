import React from 'react'
import { AlbumName } from './AlbumName'
import { ArtistName } from './ArtistName'
import { CoverImage } from './CoverImage'

export const Album = ({ album }) => {
  console.log('Album data', album)
  return (

    <div>
      <AlbumName name={album.name} />
      <ArtistName artists={album.artists} />
      <CoverImage images={album.images} />
    </div>
  )
}
