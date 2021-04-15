import React, { useEffect, useState } from "react";

import "./styles.css";
import "./colors";
import colors from "./colors";

function TimeComplexityVisualizer(props) {
  const [array, setArray] = useState([]);

  let bars = document.getElementsByClassName("bars");

  useEffect(() => {
    resetArray();
  }, []);

  const MIN = 1;
  const MAX = 500;
  const SPEED = 10;

  let resetArray = () => {
    let newArray = [];
    for (let i = 0; i < 300; i++) {
      newArray.push(Math.floor(Math.random() * (MIN + MAX) + MIN));
      resetColor();
    }
    setArray(newArray);
  };

  let resetColor = () => {
    for (let i = 0; i < bars.length; i++) {
      let compareBar = bars[i].style;
      compareBar.backgroundColor = colors.default;
    }
  };

  // time complexity O(n)
  let findMax = () => {
    let [max, maxIndex] = [0, 0];
    let [temp, tempIndex] = [max, maxIndex];

    for (let i = 0; i < array.length; i++) {
      let maxBarStyle = bars[maxIndex].style;
      let compareBarStyle = bars[i].style;
      let tempBarStyle = bars[tempIndex].style;

      if (max < array[i]) {
        [temp, tempIndex] = [max, maxIndex];
        [max, maxIndex] = [array[i], i];
      }

      setTimeout(() => {
        maxBarStyle.backgroundColor = colors.primary;
        compareBarStyle.backgroundColor = colors.secondary;
        tempBarStyle.backgroundColor = colors.secondary;
      }, i * SPEED);
    }
  };

  let styles = {
    bar: {
      backgroundColor: colors.primary,
      display: "inline-block",
      margin: "0 1px",
      width: "1.5px",
    },
    container: {
      margin: "auto",
    },
  };

  return (
    <>
      <div className="container" style={styles.container}>
        {array.map((value, index) => (
          <div
            className="bars"
            key={index}
            style={{
              backgroundColor: colors.default,
              display: "inline-block",
              height: `${value}px`,
              margin: "1px",
              marginTop: "10px",
              width: "4px",
            }}
          />
        ))}
      </div>
      <div>
        <button onClick={() => resetArray()}>New Array</button>
        <button onClick={() => findMax()}>O(n) - Find Max</button>
      </div>
    </>
  );
}

export default TimeComplexityVisualizer;
