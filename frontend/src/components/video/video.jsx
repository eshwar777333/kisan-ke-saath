import React from 'react'
import './video.css'
import myVideo from './page3.mp4'

const Video = () => {
  return (
    <div className='home'>
        <div className="video-container">
          <video autoPlay loop muted id='videobcg'>
            <source src={myVideo} type="video/mp4" />
          </video>
          <div className="text-overlay">
            <h1 className='brand'>Grow Connect</h1>
            <p className='caption'>we connect you with healthiness</p>
          </div>
          </div></div>
  )
}

export default Video