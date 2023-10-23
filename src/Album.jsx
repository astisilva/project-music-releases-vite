import React from 'react';
import { AlbumName } from './AlbumName';
import { ArtistName } from './ArtistName';
import { CoverImage } from './CoverImage';
import { Button } from './Button';
import './index.css';
import heartIcon from "./assets/icons/heart.svg";
import playIcon from "./assets/icons/play.svg";
import shareIcon from "./assets/icons/dots.svg";

export const Album = ({ album }) => {
  console.log('Album data', album);

  const albumExternalUrl = album.external_urls?.spotify;

  return (
<div className='wrapper'>
  <div className='album'>
  <CoverImage className='albums-cover' images={album.images} />

  <span className='album-buttons'>
    <Button onClick={() => console.log('Heart button was clicked')} icon={heartIcon} />
    <Button onClick={() => console.log('Play button was clicked')} icon={playIcon} />
    <Button onClick={() => console.log('Share button was clicked')} icon={shareIcon} />
  </span>

  
</div>
<div className='text-info-container'>
    {albumExternalUrl && (
      <a href={albumExternalUrl} target="_blank" className='album-link'>
        <AlbumName name={album.name} />
      </a>
    )}
    {album.artists[0]?.external_urls?.spotify && (
      <a href={album.artists[0].external_urls.spotify} target="_blank" className='artist-link'>
        <ArtistName artists={album.artists} />
      </a>
    )}
  </div>
  </div>
  );
};
