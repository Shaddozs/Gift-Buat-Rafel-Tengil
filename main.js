onload = () =>{
        document.body.classList.remove("container");
};
import React from 'react';

function MusicVideo() {
  return (
    <div>
      
      <iframe
        src="https://www.youtube.com/watch?v=6POZlJAZsok"
        frameborder="0"
        allow="autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default MusicVideo;
