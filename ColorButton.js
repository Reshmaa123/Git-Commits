import React from 'react'
import $ from 'jquery'
import { useState } from 'react';
import { Icon } from 'semantic-ui-react'
const Mahesh = () => {
        
    const[borderColor,setColor]=useState("black");
   const changecolor =(color)=>{
    setColor(color)
   }
const Yellow1=()=>{
    setColor("yellow")
}
  return (
    <div>
        
      <p id="img1" style={{ borderColor: "black", borderWidth: "2px", borderStyle: "solid", backgroundColor:borderColor}} >Hgfello</p>
< Icon className='circle outline' style={{backgroundColor:borderColor}}/>
<button  onClick={()=>changecolor("green")} id="img1">green</button>
<button onClick={Yellow1}>yellow</button>
<button  onClick={()=>changecolor("blue")} id="img1">blue</button>
<button  onClick={()=>changecolor("pink")} id="img1">pink</button>
    </div>
  )
}

export default Mahesh