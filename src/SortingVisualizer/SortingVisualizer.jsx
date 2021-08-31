import React from "react";
import "./SortingVisualizer.css";
import { performMergeSort } from "../SortingAlgorithms/SortingAlgorithms";

export default class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      array: [],
      bars: 200,
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

  bubbleSort() {}

  render() {
    const { array } = this.state;
    let max = Math.max(...array);

    return (
      <div className="array-container">
        {array.map((value, idx) => (
          <div
            className="array-bar"
            style={{
              height: `${(value / max) * 87}vh`,
              // The margin between bars is considered as well
              width: `${(97 - 0.1 * this.state.bars) / this.state.bars}vw`,
            }}
          ></div>
        ))}
        <div>
          <button
            class="button_slide slide_down"
            onClick={() => this.resetArray()}
          >
            NEW ARRAY
          </button>
          <select
            id="select_box"
            class="box slide_down"
            onChange={() => this[document.getElementById("select_box").value]()}
          >
            <option value="bubbleSort">BUBBLE SORT</option>
            <option value="quickSort" selected>
              QUICK SORT
            </option>
            <option value="heapSort">HEAP SORT</option>
            <option value="mergeSort">MERGE SORT</option>
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
