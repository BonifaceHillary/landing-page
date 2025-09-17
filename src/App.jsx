
 import { useState } from "react"
import Background from "./Components/Background/Background.jsx"
import Navbar from "./Components/Navbar/Navbar.jsx";
import Hero from "./Components/Hero/Hero.jsx";


let heroData = [
  {text1: "Dive into", text2: "what you love"},
  {text1: "Dive into", text2: "what you love"},
  {text1: "Dive into", text2: "what you love"},
]
const App = () => {
const [heroCount, setHeroCount] = useState(1);
const [playStatus, setPlayStatus] = useState(false)
  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount} />

      <Navbar />

      <Hero
      setPlayStatus={setPlayStatus}
      heroData={heroData [heroCount]}
      setHeroCount={setHeroCount}
      playStatus={playStatus}

      />
      
    </div>
  )
}

export default App
