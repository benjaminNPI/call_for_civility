import React from 'react'
import { useState, useEffect } from 'react'


const Contact = ( {currentpage} ) => {
  useEffect(() => {
    if (currentpage === "Contact") {
        document.getElementById("Contact").style.color = "red";
        document.getElementById("About").style.color = "Black";
        document.getElementById("Video").style.color = "Black";
        document.getElementById("Home").style.color = "Black";
    }
  }, []);
  return (
   <div> 
    THIS IS THE Contact PAGE
    </div>
  )
}

export default Contact