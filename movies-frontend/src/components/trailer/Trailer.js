import {useParams} from 'react-router-dom';
import ReactPlayer from 'react-player';
import './Trailer.css';

import React from 'react'

const Trailer = () => {

    const { ytTrailerId } = useParams();

  return (
    <div className="react-player-container">
       {console.log(`https://www.youtube.com/watch?v=${ytTrailerId}`)}
      
      { ytTrailerId != null ?
        (<ReactPlayer controls="true" playing={true} url={`https://www.youtube.com/watch?v=${ytTrailerId}`} 
        width = '100%' height='100%' />)
      :null}

       
      
    </div>
  )
}

export default Trailer;