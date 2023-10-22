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
    
    <div className='album'>
      <CoverImage className='albums-cover' images={album.images} /> 
      <div className='album-buttons'>
          <Button onClick={() => console.log('Heart button was clicked')} icon={heartIcon} />
          <Button onClick={() => console.log('Play button was clicked')} icon={playIcon} />
          <Button onClick={() => console.log('Share button was clicked')} icon={shareIcon} />
        </div>

        <div className='text-info-container'>
  {albumExternalUrl && (
    <a href={albumExternalUrl} target="_blank"  className='artist-link'>
      <AlbumName name={album.name} />
    </a>
  )}
  {album.artists[0]?.external_urls?.spotify && (
    <a href={album.artists[0].external_urls.spotify} target="_blank" className='album-link'>
      <ArtistName artists={album.artists} />
    </a>
  )}
</div>

    </div>
  );
};
