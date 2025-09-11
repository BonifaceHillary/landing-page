// import React from 'react'
import './Background.css'
import video1 from '../../assets/video1.mp4'
import image1 from '../src/assets/image1.jpg'
import image2 from '../../assets/image2.jpg'
import image3 from '../../assets/image3.jpg'

const Background = ({playStatus,heroCount}) => {

  if (playStatus) {
    return(
      <video className='background' autoPlay loop muted>
        <source src={video} type='video/mp4' />

      </video>
    )
  }
  else if (heroCount===0){
    return <image src={image1} className='background' alt=""/>
  }
  else if(heroCount===1){
    return <image src={image2} alt=""/>
  }
  else if (heroCount===2){
    return <image src={image3} alt=""/>
  }


}

export default Background
