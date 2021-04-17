import React, { useEffect, useState } from "react";

import "./styles.css";
import "./colors";
import colors from "./colors";
import logn2SortAlgorithm from "./algorithms/logn2SortAlgorithm";

function TimeComplexityVisualizer(props) {
  const [array, setArray] = useState([]);

  let bars = document.getElementsByClassName("bars");

  useEffect(() => {
    resetArray();
  }, []);

  const MIN = 50;
  const MAX = 500;
  const SPEED = 1;

  let resetArray = () => {
    let newArray = [];
    for (let i = 0; i < 100; i++) {
      newArray.push(Math.floor(Math.random() * (MIN + MAX) + MIN));
      resetColor();
    }
    //clearTimeout();
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
    let tempIndex = maxIndex;

    for (let i = 0; i < array.length; i++) {
      let maxBarStyle = bars[maxIndex].style;
      let compareBarStyle = bars[i].style;
      let tempBarStyle = bars[tempIndex].style;

      if (max < array[i]) {
        tempIndex = maxIndex;
        [max, maxIndex] = [array[i], i];
      }

      setTimeout(() => {
        maxBarStyle.backgroundColor = colors.primary;
        compareBarStyle.backgroundColor = colors.secondary;
        tempBarStyle.backgroundColor = colors.secondary;
      }, i * SPEED);
    }
  };

  // time complexity O(log n)

  // time complexity O(n log n)
  let mergeSort = () => {
    return;
  };

  // time complexity O(n^2)
  let logn2Sort = () => {
    let animationArray = logn2SortAlgorithm(array);

    for (let i = 0; i < animationArray.length; i++) {
      let changeColor = i % 2 === 0;
      if (changeColor) {
        let [barOne, barTwo] = animationArray[i];
        let barOneStyle = bars[barOne].style;
        let barTwoStyle = bars[barTwo].style;
        let color = i % 4 === 0 ? colors.primary : colors.secondary;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * SPEED);
      } else {
        setTimeout(() => {
          let [barOne, swapHeight] = animationArray[i];
          let barOneStyle = bars[barOne].style;
          barOneStyle.height = `${swapHeight}px`;
        }, i * SPEED);
      }
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
        <button onClick={() => resetArray()}>Reset</button>
        <button onClick={() => findMax()}>O(n) - Find Max</button>
        <button onClick={() => logn2Sort()}>O(n2) - Log N Sort</button>
        <button onClick={() => mergeSort()}>O(n log n) - Merge Sort</button>
      </div>
    </>
  );
}

export default TimeComplexityVisualizer;
