import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./MainPage.css"
import { Api_Key } from './Api-Key/Api_Key'

import { Image_Url } from './Image_Url'
function MainPage() {



  const [movie, setMovie] = useState([])
  useEffect(() => {

    axios.get(
    `https://api.themoviedb.org/3/trending/all/day?api_key=${Api_Key}`).then((response)=>{

//console.log(response.data)

setMovie(response.data.results.sort(function (a, b) { return 0.5 - Math.random() })[0])




    })

  }, [setMovie])
  
  return (
    <div>
        

        
    
<div className="ban">
  <div className="banners">



  <img src= {Image_Url+movie.backdrop_path}alt="movie" className="banner" />
 
  </div>
    
</div>





    </div>
  )
}

export default MainPage