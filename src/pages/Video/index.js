import React from 'react'
import { useState, useEffect } from 'react'

const Video = ( {currentpage} ) => {
  useEffect(() => {
    if (currentpage === "Video") {
        document.getElementById("Video").style.color = "red";
        document.getElementById("About").style.color = "Black";
        document.getElementById("Home").style.color = "Black";
        document.getElementById("Contact").style.color = "Black";
    }
  }, []);
  return (
   <div> 
    THIS IS THE Videos PAGE
    </div>
  )
}

export default Video