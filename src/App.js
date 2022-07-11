import React from 'react'
import Cards from './Components/Cards'
import MainPage from './Components/MainPage'
import NavBar from './Components/NavBar'
import "./App.css"
import Movieinfo from "./Components/Movieinfo"
import { Action,Romance,Horror, Comedy, Doc, Tr } from './Components/Url'
import { BrowserRouter, Route, Routes,Link } from 'react-router-dom'




function App() {
  return (


    
    

  
    

    <div>




<NavBar/>
 
<MainPage/>


<Cards   title={'Trending'} url={Tr}  />
<Cards isSmall  title={'Action'} url={Action} />


<Cards isSmall  title={'Horror'} url={Horror} />
<Cards  isSmall title={'Comedy'} url={Comedy} />
<Cards  isSmall title={'Documentary'} url={Doc} />


<Cards isSmall title={'Romance'} url={Romance} />


    </div>
  
  )
}

export default App