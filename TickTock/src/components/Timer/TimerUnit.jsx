import "./Timer.css"

import upArrow from "/src/assets/up-arrow.svg"
import downArrow from "/src/assets/down-arrow.svg"

export default function TimerUnit({ state, maxValue, setState }) {
  function increment() {
    setState(prev => {
      if (prev === maxValue)
        return prev

      return (parseInt(prev, 10) + 1).toString().padStart(2, "0")
    })
  }

  function decrement() {
    setState(prev => {
      if (prev === "00")
        return prev

      return (parseInt(prev, 10) - 1).toString().padStart(2, "0")
    })
  }

  function updateValue(event) {
    let input = event.target.value.replace(/\D/g, "");
    let num = parseInt(input, 10) % 100;

    setState(num.toString().padStart(2, "0"));
  }

  function applyValueBounds() {
    setState(prev => {
      let num = Math.min(parseInt(prev, 10), parseInt(maxValue, 10))
      return num.toString().padStart(2, "0")
    })
  }

  return (
    <div className="timer-unit">

      <button onClick={increment} className="up-arrow">
        <img src={upArrow} alt="up arrow" />
      </button>

      <input
        type="text"
        className="value"
        value={state}
        disabled={false}

        onChange={updateValue}
        onBlur={applyValueBounds}
      />

      <button
        onClick={decrement}
        className="down-arrow"
      >
        <img src={downArrow} alt="down arrow" />
      </button>

    </div>
  )
}