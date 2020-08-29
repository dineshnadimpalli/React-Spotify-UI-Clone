import React from "react";
import "./songRow.styles.css";

function SongRow({ track }) {
  return (
    <div className="songRow">
      <img 
        className='songRow_album'
        src={track.album.images[0].url} 
        alt={track.name} 
      />
      <div className="songRow_info">
        <h1>{track.name}</h1>
        <p>
          {track.artists.map((artist) => artist.name).join(', ')}
          {track.album.name}
        </p>
      </div>
    </div>
  );
}

export default SongRow;
