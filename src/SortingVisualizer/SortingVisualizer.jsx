import React from "react";
import "./SortingVisualizer.css";

export default class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      array: [],
      bars: 100,
      maximum: 1000,
    };
  }

  // Function invoked as soon as a component is mounted
  componentDidMount() {
    this.resetArray();
  }

  // Creates an array of 100 values from 10 to 1000
  resetArray() {
    const array = [];
    for (let i = 0; i < this.state.bars; i++) {
      // Start from 10 so to make it visible
      array.push(randomIntFromInterval(10, this.state.maximum));
    }
    this.setState({ array: array });
  }

  render() {
    const { array } = this.state;
    let max = Math.max(...array);

    return (
      <div className="array-container">
        {array.map((value, idx) => (
          <div
            className="array-bar"
            key={idx}
            style={{
              height: `${(value / max) * 87}vh`,
              // The margin between bars is considered as well
              width: `${(97 - 0.1 * this.state.bars) / this.state.bars}vw`,
            }}
          ></div>
        ))}
        <div id="outer">
          <button
            class="button_slide slide_down"
            onClick={() => this.resetArray()}
          >
            NEW ARRAY
          </button>
        </div>
      </div>
    );
  }
}

// Function to generate random numbers from min to max, both inclusive
function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
