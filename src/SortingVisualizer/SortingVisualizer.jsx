import React from "react";
import "./SortingVisualizer.css";
import { performMergeSort } from "../SortingAlgorithms/MergeSort";
import { performBubbleSort } from "../SortingAlgorithms/BubbleSort";
import { performSelectionSort } from "../SortingAlgorithms/SelectionSort";
import { performInsertionSort } from "../SortingAlgorithms/InsertionSort";

export default class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      array: [],
      bars: 100,
      maximum: 1000,
      time: 10,
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

  resetBars() {
    const newBars = document.getElementById("n_bars").value;
    this.setState({ bars: newBars }, () => {
      this.resetArray();
    });
  }

  mergeSort() {
    let max = Math.max(...this.state.array);
    const arrayBars = document.getElementsByClassName("array-bar");
    const animations = performMergeSort(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      let animation = animations[i];
      if (animation[2]) {
        const [barOneIdx, newHeight] = animation;
        setTimeout(() => {
          arrayBars[barOneIdx].style.backgroundColor = "red";
          arrayBars[barOneIdx].style.height = `${(newHeight / max) * 87}vh`;
        }, i * this.state.time);
        setTimeout(() => {
          arrayBars[barOneIdx].style.backgroundColor = "yellow";
        }, (i + 1) * this.state.time);
      } else {
        setTimeout(() => {
          arrayBars[animation[0]].style.backgroundColor = "red";
          arrayBars[animation[1]].style.backgroundColor = "red";
        }, i * this.state.time);
        setTimeout(() => {
          arrayBars[animation[0]].style.backgroundColor = "yellow";
          arrayBars[animation[1]].style.backgroundColor = "yellow";
        }, (i + 1) * this.state.time);
      }
    }
  }

  quickSort() {}

  heapSort() {}

  bubbleSort() {
    const arrayBars = document.getElementsByClassName("array-bar");
    const animations = performBubbleSort(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const [barOneIdx, barTwoIdx, swap] = animations[i];
      const firstBarStyle = arrayBars[barOneIdx].style;
      const secondBarStyle = arrayBars[barTwoIdx].style;
      // Colour the compared bars in red
      setTimeout(() => {
        firstBarStyle.backgroundColor = "red";
        secondBarStyle.backgroundColor = "red";
      }, i * this.state.time);
      // Swap the bars only if required
      if (swap) {
        setTimeout(() => {
          const temp = firstBarStyle.height;
          firstBarStyle.height = secondBarStyle.height;
          secondBarStyle.height = temp;
        }, (i + 0.5) * this.state.time);
      }
      // Convert the bars colour to the original state
      setTimeout(() => {
        firstBarStyle.backgroundColor = "yellow";
        secondBarStyle.backgroundColor = "yellow";
      }, (i + 1) * this.state.time);
    }
  }

  selectionSort() {
    const arrayBars = document.getElementsByClassName("array-bar");
    const animations = performSelectionSort(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const [barOneIdx, barTwoIdx, swap] = animations[i];
      const firstBarStyle = arrayBars[barOneIdx].style;
      const secondBarStyle = arrayBars[barTwoIdx].style;
      // Colour the compared bars in red
      setTimeout(() => {
        firstBarStyle.backgroundColor = "red";
        secondBarStyle.backgroundColor = "red";
      }, i * this.state.time);
      // Swap the bars only if required
      if (swap) {
        setTimeout(() => {
          const temp = firstBarStyle.height;
          firstBarStyle.height = secondBarStyle.height;
          secondBarStyle.height = temp;
        }, (i + 0.5) * this.state.time);
      }
      // Convert the bars colour to the original state
      setTimeout(() => {
        firstBarStyle.backgroundColor = "yellow";
        secondBarStyle.backgroundColor = "yellow";
      }, (i + 1) * this.state.time);
    }
  }

  insertionSort() {
    const arrayBars = document.getElementsByClassName("array-bar");
    const animations = performInsertionSort(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const [barOneIdx, barTwoIdx, flag] = animations[i];
      const firstBarStyle = arrayBars[barOneIdx].style;
      const secondBarStyle = arrayBars[barTwoIdx].style;
      // Colour the compared bars in red
      setTimeout(() => {
        firstBarStyle.backgroundColor = "red";
        secondBarStyle.backgroundColor = "red";
      }, i * this.state.time);
      // Swap the bars only if required
      if (flag) {
        setTimeout(() => {
          const temp = firstBarStyle.height;
          firstBarStyle.height = secondBarStyle.height;
          secondBarStyle.height = temp;
        }, (i + 0.5) * this.state.time);
      }
      // Convert the bars colour to the original state
      setTimeout(() => {
        firstBarStyle.backgroundColor = "yellow";
        secondBarStyle.backgroundColor = "yellow";
      }, (i + 1) * this.state.time);
    }
  }

  render() {
    const { array } = this.state;
    let max = Math.max(...array);

    return (
      <div id="array-container">
        {array.map((value, idx) => (
          <div
            className="array-bar"
            key={idx}
            style={{
              height: `${(value / max) * 87}vh`,
              // The margin between bars is considered as well
              width: `${(87 - 0.15 * this.state.bars) / this.state.bars}vw`,
            }}
          ></div>
        ))}
        <div>
          <div style={{ display: "inline-block" }}>
            <span className="rangeValue">BARS: {this.state.bars}</span>
            <input
              className="range"
              id="n_bars"
              type="range"
              min="10"
              step="10"
              defaultValue="100"
              max="200"
              onChange={() => this.resetBars()}
            ></input>
          </div>
          <div style={{ display: "inline-block" }}>
            <span className="rangeValue">SPEED: {this.state.time} ms</span>
            <input
              className="range"
              id="speed"
              type="range"
              min="1"
              step="1"
              defaultValue="10"
              max="500"
              onChange={() =>
                this.setState({ time: document.getElementById("speed").value })
              }
            ></input>
          </div>
          <button
            className="button_slide slide_down"
            onClick={() => this.resetArray()}
          >
            NEW ARRAY
          </button>
          <select
            id="select_box"
            className="box slide_down"
            onChange={() => this[document.getElementById("select_box").value]()}
            defaultValue="quickSort"
          >
            <option value="bubbleSort">BUBBLE SORT</option>
            <option value="quickSort"> QUICK SORT </option>
            <option value="heapSort">HEAP SORT</option>
            <option value="mergeSort">MERGE SORT</option>
            <option value="selectionSort">SELECTION SORT</option>
            <option value="insertionSort">INSERTION SORT</option>
          </select>
        </div>
      </div>
    );
  }
}

// Function to generate random numbers from min to max, both inclusive
function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
