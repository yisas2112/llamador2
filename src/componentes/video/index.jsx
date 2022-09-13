import React, { useRef } from 'react';
import { useEffect } from 'react';


const Media = (src) => {    
    const reference = useRef(null)
    
    const attemptPlay = () => {
        reference &&
        reference.current &&
        reference.current.play().catch(error => {
            console.error("Error attempting to play", error);
          });
      };


    useEffect(()=>{
        attemptPlay()
    },[]);
  return <>
        <video src={src.src} controls 
        width='65%'
        height='100%'
        playsInline
        autoPlay
        ref={reference}
        loop
        muted>
        </video>
    </>
};

export default Media
