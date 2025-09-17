
 import { useState } from "react"
import Background from "./Components/Background/Background.jsx"


let heroData = [
  {text1: "Dive into", text2: "what you love"},
  {text1: "Dive into", text2: "what you love"},
  {text1: "Dive into", text2: "what you love"},
]
const App = () => {
const [heroCount, setHeroCount] = useState(0);
const [playStatus, setPlayStatus] = useState(false)
  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount} />
      
    </div>
  )
}

export default App
