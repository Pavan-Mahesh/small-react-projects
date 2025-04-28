import React from "react"
import Title from "./components/Title/Title.jsx"
import Timer from "./components/Timer/Timer.jsx"
import Stopwatch from "./components/Stopwatch/Stopwatch.jsx"

import "./App.css"

export default function App() {
  const [selected, setSelected] = React.useState("Stopwatch")

  function updateSelected() {
    setSelected(prev => (
      prev === "Stopwatch" ? "Timer" : "Stopwatch"
    ))
  }

  return (
    <div className="container">
      
      <Title selected={selected} updateSelected={updateSelected} />
      
      {
        selected === "Stopwatch"
          ? <Stopwatch changeOption={updateSelected} />
          : <Timer changeOption={updateSelected} />
      }

    </div>
  )
}