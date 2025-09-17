// import React from 'react'
import './Hero.css'
import arrow from '../../assets/arrow-icon.png'

import play from '../../assets/play-icon.jpg'

import pause from '../../assets/pause-icon.jpg'

const Hero = ({heroData, setHeroCount, heroCount, setPlayStatus, playStatus}) => {
  return (
    <div className='hero'>
      <div className="hero-text">
        <p>{heroData.text1}</p>
        <p>{heroData.text2}</p>
      </div>

      <div className="hero-explore">
        <p>explore the features</p>
        <img src={arrow} alt="" />
      </div>

      <div className="hero-dot-play">
        <ul className="hero-dots">
          <li onClick={()=>setHeroCount(0)} className={heroCount===0?"hero-dot orange":"hero-dot"}></li>
          <li onClick={()=>setHeroCount(1)} className={heroCount===1?"hero-dot orange":"hero-dot"}></li>
          <li onClick={()=>setHeroCount(2)} className={heroCount===2?"hero-dot orange":"hero-dot"}></li>
        </ul>
      </div>
      
    </div>
  )
}

export default Hero
