import "./Title.css"
import leftArrow from "../../assets/left-arrow.svg"
import rightArrow from "../../assets/right-arrow.svg"

export default function Title({ selected, updateSelected }) {
  return (
    <div className="title">

      {
        selected === "Timer" &&
        <button
          title="Stopwatch"
          className="left-arrow"
          onClick={updateSelected}
        >
          <img src={leftArrow} alt="left arrow" />
        </button>
      }

      <h1>{selected}</h1>

      {
        selected === "Stopwatch" &&
        <button
          title="Timer"
          className="right-arrow"
          onClick={updateSelected}
        >
          <img src={rightArrow} alt="right arrow" />
        </button>
      }

    </div>
  )
}