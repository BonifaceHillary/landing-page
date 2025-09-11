// import React from 'react'
import Background from "./Components/Background/Background"
import { useState } from "react"

let heroData = [
  {text1: "Dive into", text2: "what you love"},
  {text1: "Dive into", text2: "what you love"},
  {text1: "Dive into", text2: "what you love"},
]

const [heroCount, setHeroCount] = useState(2);
const [playStatus, setPlayStatus] = useState(false)
const App = () => {
  return (
    <div>
      <Background/>
      
    </div>
  )
}

export default App
