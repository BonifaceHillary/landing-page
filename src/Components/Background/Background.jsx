
import './Background.css'
import video1 from '../../assets/video1.mp4'
import car4 from '../../assets/car4.webp'
import car5 from '../../assets/car5.jpg'
import car3 from '../../assets/car3.jpg'

const Background = ({playStatus,heroCount}) => {

  if (playStatus) {
    return(
      <video className='background' autoPlay loop muted>
        <source src={video1} type='video/mp4' />

      </video>
    )
  }
  else if (heroCount === 0) {
    return <img src={car4} className='background' alt=""/>
  }
  else if(heroCount===1){
    return <img src={car5} alt=""/>
  }
  else if (heroCount===2){
    return <img src={car3} alt=""/>
  }


}

export default Background
