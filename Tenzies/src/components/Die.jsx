import React from "react";

export default function Die(props) {
  const styles = {
    backgroundColor: props.isHeld ? "#59e391" : "#000000",
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
      <img src={`./src/assets/die-${props.value}.svg`} alt={props.value} />
    </button>
  );
}
