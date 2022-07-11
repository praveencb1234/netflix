import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import "./Model.css"
import { Image_Url } from './Image_Url';
import {useNavigate} from 'react-router-dom'
import { color } from '@mui/system';
import StarsTwoToneIcon from '@mui/icons-material/StarsTwoTone';
import { Api_Key } from './Api-Key/Api_Key';
import StarBorderPurple500Icon from '@mui/icons-material/StarBorderPurple500';
import StarBorderPurple500 from '@mui/icons-material/StarBorderPurple500';
import { useState } from 'react';
import axios from 'axios';
import YouTube from 'react-youtube'
const style = {

  
  position: 'absolute',
  top: '60%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  bgcolor: 'background',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};



const opts = {
  height: '400',
  
  width: '100%',
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 0,
  },
};

export default function BasicModal({Array}) {

  
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
const [trailer,setTrailer]=useState([])
const handleClick=(id)=>{

  axios.get (`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${Api_Key}&language=en`).then((response)=>{

    
    
    if(response.data.results.length !==0 ){
    
    
      setTrailer(response.data.results[0])

      console.log(trailer)
    }
    
    })

  

}

  return (<>
    <div >
      <Button onClick={handleOpen}><h6>Results</h6></Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography  className='a' id="modal-modal-title" variant="h6" component="h2">

           {Array.map((obj)=>
           <div>
           <h6> Rating: {  obj.vote_average  ? obj.vote_average:""} { obj.vote_average>6 ? <StarsTwoToneIcon/>:<StarBorderPurple500/> }</h6> 
            
            <img  onClick={()=>handleClick(obj.id)} className="img" src={ obj.poster_path?  Image_Url+ obj.poster_path:"image not found"} ></img>
            <div className="rate">
              <div className="summary">
              

              </div>
            </div>
            
            </div>
           )}
           </Typography>
           <div className="vedio">
           </div>
      
          <Typography className='b' id="modal-modal-description" sx={{ mt: 2 }}>
       
           
       
       </Typography>
        </Box>
      </Modal>
    </div>
    </>
  );
}
