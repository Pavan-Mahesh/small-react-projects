import React from "react";

import TenziesCss from "./tenzies.module.css";

import die1 from "./assets/die-1.svg";
import die2 from "./assets/die-2.svg";
import die3 from "./assets/die-3.svg";
import die4 from "./assets/die-4.svg";
import die5 from "./assets/die-5.svg";
import die6 from "./assets/die-6.svg";

const dieImages = {
  1: die1,
  2: die2,
  3: die3,
  4: die4,
  5: die5,
  6: die6,
};

export default function Die(props) {
  const styles = {
    filter: `brightness(${props.isHeld ? 0.75 : 1})`,
    transform: props.isHeld && "scale(0.95)",
  };

  return (
    <button
      className={TenziesCss["die"]}
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
      <img src={dieImages[props.value]} alt={props.value} />
    </button>
  );
}
