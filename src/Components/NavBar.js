import React, { useState ,useEffect} from 'react'
import "./NavBar.css"
import Model from './Model'
import {Api_Key} from "./Api-Key/Api_Key"
import ImageSearchSharpIcon from '@mui/icons-material/ImageSearchSharp';
import { fontSize } from '@mui/system';
import axios from 'axios';

import Cards from "./../Components/Cards"
import { clear } from '@testing-library/user-event/dist/clear';
function NavBar() {

  const handleClick=(e)=>{
e.preventDefault()

axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${Api_Key}&query=${search}`).then((response)=>{


setData(response.data.results)


})

  }

  const [data, setData] = useState([])

  const [search, setSearch] = useState('') 
//console.log(search)


                                 








  return (
    <div className='top'>


        <div className='head' >
<img src="/avatars.png" alt="avatar" className="avatar" />
            <img src="/logo.png" alt="netflix-logo" className="logo" />
          <input onChange={(e)=>setSearch(e.target.value)} className='input' placeholder='search movies' type="text"></input>
       <button  className="btn" onClick={handleClick} >search</button>






{  data.length!==0 && search.length !==0 ? <Model  Array={data} />:""}
        </div>

    </div>
  )
}

export default NavBar