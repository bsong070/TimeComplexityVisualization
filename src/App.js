import "./App.css";
import React from "react";
import TimeComplexityVisualizer from "./app/TimeComplexityVisualizer";

function App() {
  let styles = {
    note: {
      fontWeight: "bold",
      marginVertical: 15,
      padding: 20,
    },
    title: {
      fontSize: "24px",
      fontWeight: "bold",
      padding: 10,
    },
  };

  return (
    <div className="App">
      <TimeComplexityVisualizer></TimeComplexityVisualizer>
      <div style={styles.title}>Time Complexity Visualizer</div>

      <div>
        All methods share the same time delay to get a feel of how fast or slow
        each time complexity is
      </div>
      <div style={styles.note}>
        NOTE: O(log n) assumes the array is already sorted so the array will be
        sorted beforehand and the visualization will only show log n sorting
        operation for finding the max value. To visualize O(log n), "SPEED"
        needs to be increased since the operation occurs very quickly
      </div>
    </div>
  );
}

export default App;
