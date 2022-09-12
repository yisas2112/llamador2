import React, { useRef } from 'react';
import { useState } from 'react';
import Video from '../../images/video.mp4'
import ReactPlayer from 'react-player'
import { useEffect } from 'react';


const Media = (src) => {
    console.log(src.src)
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
