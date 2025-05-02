import React from "react";

export default function Die(props) {
  const styles = {
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
