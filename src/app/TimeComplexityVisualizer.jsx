import React, { useEffect, useState } from "react";

import "./colors";
import colors from "./colors";
import findMaxLogN from "./algorithms/findMaxLogN";
import logn2SortAlgorithm from "./algorithms/logn2SortAlgorithm";
import presortArrayLogN from "./algorithms/presortArrayLogN";
import nlognSortAlgorithm from "./algorithms/nlognSortAlgorithm";

function TimeComplexityVisualizer(props) {
  const [array, setArray] = useState([]);

  useEffect(() => {
    resetArray();
  }, []);

  const MIN = 50; // set minimum array height
  const MAX = 400; // set maximum array height
  const ARRAY_LENGTH = 100; // set length of bars to be shown / sorted
  const SPEED = 3; // set delay speed of animation in ms

  let bars = document.getElementsByClassName("bars"); // returns an array-like object of all child elements
  let clear = []; // creating an array to store set timeouts

  let resetArray = () => {
    let newArray = [];
    for (let i = 0; i < ARRAY_LENGTH; i++) {
      newArray.push(Math.floor(Math.random() * (MAX - MIN) + MIN));
      resetColor();
    }
    clear.forEach((timer) => clearTimeout(timer));
    setArray(newArray);
  };

  let resetColor = () => {
    for (let i = 0; i < bars.length; i++) {
      bars[i].style.backgroundColor = colors.default;
    }
  };

  let animations = (i1, r1, i2, r2, algorithm) => {
    let animationArray = algorithm;

    for (let i = 0; i < animationArray.length; i++) {
      let changeColor = i % i1 === r1;
      if (changeColor) {
        let [barOne, barTwo] = animationArray[i];
        let color = i % i2 === r2 ? colors.primary : colors.secondary;
        clear.push(
          setTimeout(() => {
            bars[barOne].style.backgroundColor = color;
            bars[barTwo].style.backgroundColor = color;
          }, i * SPEED)
        );
      } else {
        clear.push(
          setTimeout(() => {
            let [barOne, swapHeight] = animationArray[i];
            let barOneStyle = bars[barOne].style;
            barOneStyle.height = `${swapHeight}px`;
          }, i * SPEED)
        );
      }
    }
  };

  // time complexity O (log n) -- LOG N ASSUMES ARRAY IS ALREADY SORTED
  let getMaxLogN = () => {
    let sortedArray = presortArrayLogN(array);
    let maxValue = sortedArray[sortedArray.length - 1];
    for (let i = 0; i < sortedArray.length; i++) {
      bars[i].style.height = `${sortedArray[i]}px`;
    }
    let animations = findMaxLogN(sortedArray);

    for (let i = 0; i < animations.length; i++) {
      clear.push(
        setTimeout(() => {
          bars[animations[i]].style.backgroundColor = colors.secondary;
        }, i * SPEED)
      );

      if (sortedArray[animations[i]] === maxValue)
        clear.push(
          setTimeout(() => {
            bars[animations[i]].style.backgroundColor = colors.primary;
          }, animations.length * SPEED)
        );
    }
  };

  // time complexity O(n)
  let findMax = () => {
    let max = 0;
    let maxIndex = 0;

    for (let i = 0; i < array.length; i++) {
      if (max < array[i]) {
        max = array[i];
        maxIndex = i;
      }
      clear.push(
        setTimeout(() => {
          bars[i].style.backgroundColor = colors.secondary;
        }, i * SPEED)
      );
      clear.push(
        setTimeout(() => {
          bars[maxIndex].style.backgroundColor = colors.primary;
        }, ARRAY_LENGTH * SPEED)
      );
    }
  };

  // time complexity O(n log n)
  let mergeSort = () => {
    let animationArray = nlognSortAlgorithm(array);
    for (let i = 0; i < animationArray.length; i++) {
      let changeColor = i % 3 !== 2;
      if (changeColor) {
        let [barOne, barTwo] = animationArray[i];
        let color = i % 3 === 0 ? colors.primary : colors.secondary;
        clear.push(
          setTimeout(() => {
            bars[barOne].style.backgroundColor = color;
            bars[barTwo].style.backgroundColor = color;
          }, i * SPEED)
        );
      } else {
        clear.push(
          setTimeout(() => {
            let [barOne, swapHeight] = animationArray[i];
            bars[barOne].style.height = `${swapHeight}px`;
          }, i * SPEED)
        );
      }
    }
  };

  // time complexity O(n^2) -- not using an established O(n^2) method because this method allowed more bars to be swapped for better visualization
  let swapSort = () => {
    animations(2, 0, 4, 0, logn2SortAlgorithm(array));
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
    findMaxButton: {
      backgroundColor: colors.secondary,
      borderRadius: 0,
      justifyContent: "center",
      alignItems: "center",
      padding: 20,
      width: "20%",
    },
    getMaxLogNButton: {
      backgroundColor: colors.secondary,
      borderRadius: 0,
      justifyContent: "center",
      alignItems: "center",
      padding: 20,
      width: "20%",
    },
    mergeSortButton: {
      backgroundColor: colors.secondary,
      borderRadius: 0,
      justifyContent: "center",
      alignItems: "center",
      padding: 20,
      width: "20%",
    },
    resetButton: {
      backgroundColor: colors.reset,
      borderRadius: 0,
      justifyContent: "center",
      alignItems: "center",
      padding: 20,
      width: "20%",
    },
    swapSortButton: {
      backgroundColor: colors.secondary,
      borderRadius: 0,
      justifyContent: "center",
      alignItems: "center",
      padding: 20,
      width: "20%",
    },
  };

  return (
    <>
      <div>
        <button style={styles.resetButton} onClick={() => resetArray()}>
          Reset Array
        </button>
        <button style={styles.getMaxLogNButton} onClick={() => getMaxLogN()}>
          O(log n) - Find Max
        </button>
        <button style={styles.findMaxButton} onClick={() => findMax()}>
          O(n) - Find Max
        </button>
        <button style={styles.mergeSortButton} onClick={() => mergeSort()}>
          O(n log n) - Merge Sort
        </button>
        <button style={styles.swapSortButton} onClick={() => swapSort()}>
          O(n ** 2) - Sort
        </button>
      </div>

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
    </>
  );
}

export default TimeComplexityVisualizer;
