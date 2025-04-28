import React from "react";

export default function Die(props) {
  // const color = "#00b894"
  // const color = "#26de81"; //✅
  const color = "#10b981";

  // const color = "#a29bfe";
  // const color = "#ffeaa7";
  // const color = "#fd79a8";

  const styles = {
    // backgroundColor: props.isHeld ? "#00cc66" : "#000000",
    // backgroundColor: props.isHeld ? color : "#000000",
    filter: `brightness(${props.isHeld ? 0.75 : 1})`,
    transform: props.isHeld && "scale(0.95)",
  };

  return (
    <button
      className="die"
      style={styles}
      key={props.rollsCount}
      data-roll={!props.isHeld}
      onClick={props.handleClick}
      aria-pressed={props.isHeld}
      aria-label={`Die with value ${props.value} and is ${
        props.isHeld ? "held" : "not held"
      } `}
    >
      {/* {props.value} */}
      <img
        src={`/src/tenzies/assets/die-${props.value}.svg`}
        alt={props.value}
      />
    </button>
  );
}
