import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./Cards.css"
import { Api_Key } from './Api-Key/Api_Key'
import { Image_Url } from './Image_Url'
import YouTube from 'react-youtube'
function Cards(props) {

  const [movie, setMovie] = useState([])
const [trailer, setTrailer] = useState('')
  useEffect(() => {
  axios.get(props.url).then((response)=>{
    
    setMovie(response.data.results)

  })

  
  }, [])
  

  ////handle movies
const HandleMovie=(id)=>{

axios.get (`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${Api_Key}&language=en`).then((response)=>{

console.log(response.data.results[0])

if(response.data.results.length !==0 ){


  setTrailer(response.data.results[0])
}

})

}


  const opts = {
    height: '290',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };
  
  return (


        <div className="Cards">
          
        <h2 className='title'>{props.title}</h2>

<div className="dir">


  {movie.map((obj)=>


    <img  key={obj.id} onClick={()=>HandleMovie(obj.id)}src={ obj? Image_Url+obj.backdrop_path:""} alt="card" className={ props.isSmall ?"small":"card" }/>

    )}

        <div>
    
        </div>
        
        </div>
{     trailer&& <YouTube   videoId={trailer.key} opts={opts} />}    </div>
  )
}

export default Cards