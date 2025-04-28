import React from "react"
import StopwatchUnit from "./StopwatchUnit.jsx"
import "../TimeContainer.css"

export default function StopWatch() {
  const [hours, setHours] = React.useState("00")
  const [minutes, setMinutes] = React.useState("00")
  const [seconds, setSeconds] = React.useState("00")

  return (
    <>
      <div className="time-container">
        <StopwatchUnit state={hours} maxValue={"99"} setState={setHours} />
        <span style={{ fontSize: "60px" }}>:</span>
        <StopwatchUnit state={minutes} maxValue={"59"} setState={setMinutes} />
        <span style={{ fontSize: "60px" }}>:</span>
        <StopwatchUnit state={seconds} maxValue={"59"} setState={setSeconds} />
      </div>

      <div className="button-container">
        <button>Reset</button>
        <button>Start</button>
      </div>
    </>
  )
}