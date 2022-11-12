import {React, useState, useRef, useEffect} from "react";
import "./SortingVisualizer.css";
import { performMergeSort } from "../SortingAlgorithms/MergeSort";
import { performBubbleSort } from "../SortingAlgorithms/BubbleSort";
import { performSelectionSort } from "../SortingAlgorithms/SelectionSort";
import { performInsertionSort } from "../SortingAlgorithms/InsertionSort";
import { performQuickSort } from "../SortingAlgorithms/QuickSort";
import { performHeapSort } from "../SortingAlgorithms/HeapSort";
import { performShellSort } from "../SortingAlgorithms/ShellSort";


export default function SortingVisualizer() {
  const [array, setArray] = useState([]);
  const [bars, setBars] = useState(100);
  let max = Math.max(...array);
  // UseRef to maintain value across various re-renders
  let timeIDs = useRef([])
  let time = useRef(10)
  let running = useRef(false)
  let algo = useRef(null)
  const maximum = 1000

  // Creates an array of 100 values from 10 to 1000
  const resetArray = () => {
    const array = [];
    for (let i = 0; i < bars; i++) {
      let new_value = randomIntFromInterval(10, maximum);
      if (!array.includes(new_value)) {
        // Start from 10 so to make it visible
        array.push(new_value);
      } else i--;
    }
    setArray(array);
  }

  // Ensure that all the bars at the beginning are yellow
  const recoverBars = () => {
    const arrayBars = document.getElementsByClassName("array-bar");
    for (let i = 0; i < arrayBars.length; i++) {
      arrayBars[i].style.backgroundColor = 'yellow';
      arrayBars[i].style.height = `${(array[i] / max) * 87}vh`;
    }
  }

  // Stop the execution of the animation
  const stopExecution = () => {
    running.current = false;
    changeButtonText();
    for (let i=0; i<timeIDs.current.length; i++){
      clearTimeout(timeIDs.current[i]);
    }
    timeIDs.current = [];
  }

  const playButtonLogic = () => {
    if (running.current){ 
      stopExecution(); 
      setArray(array);
      recoverBars();
    } else {
      if (algo.current!==null & algo.current>=0) {
        running.current = true;
        changeButtonText();
        algos[algo.current]();
      }
    }
  }

  // When changing parameters it stops the animation and recreates the arrayBars 
  useEffect(() => {
    stopExecution();
    resetArray();
    recoverBars();
    //eslint-disable-next-line
  }, [bars])

  const changeButtonText = () => {
    const btn = document.getElementById("btn");
    btn.innerText = running.current ? 'STOP' : 'RUN';
  }

  const changeSpeedText = () => {
    time.current = document.getElementById("speed").value;
    const spn = document.getElementById("speed_txt");
    spn.innerText = "SPEED: " + time.current + " ms"
  }
  
  const displaySimpleAnimation = (arrayBars, animations) => {
    for (let i = 0; i < animations.length; i++) {
      const [barOneIdx, barTwoIdx, swap] = animations[i];
      const firstBarStyle = arrayBars[barOneIdx].style;
      const secondBarStyle = arrayBars[barTwoIdx].style;
      // Colour the compared bars in red
      timeIDs.current.push(setTimeout(() => {
        firstBarStyle.backgroundColor = "red";
        secondBarStyle.backgroundColor = "red";
      }, i * time.current));
      // Swap the bars only if required
      if (swap) {
        timeIDs.current.push(setTimeout(() => {
          [firstBarStyle.height, secondBarStyle.height] = [
            secondBarStyle.height,
            firstBarStyle.height,
          ];
        }, (i + 0.5) * time.current));
      };
      // Convert the bars colour to the original state
      timeIDs.current.push(setTimeout(() => {
        firstBarStyle.backgroundColor = "yellow";
        secondBarStyle.backgroundColor = "yellow";
      }, (i + 1) * time.current));
    };
    timeIDs.current.push(setTimeout(()=>{
      running.current = false;
      changeButtonText();
    }, animations.length * time.current))
  }

  const mergeSort = () => {
    const arrayBars = document.getElementsByClassName("array-bar");
    const animations = performMergeSort(array.slice());
    for (let i = 0; i < animations.length; i++) {
      let animation = animations[i];
      if (animation[2]) {
        const [barOneIdx, newHeight] = animation;
        timeIDs.current.push(setTimeout(() => {
          arrayBars[barOneIdx].style.backgroundColor = "red";
          arrayBars[barOneIdx].style.height = `${(newHeight / max) * 87}vh`;
        }, i * time.current));
        timeIDs.current.push(setTimeout(() => {
          arrayBars[barOneIdx].style.backgroundColor = "yellow";
        }, (i + 1) * time.current));
      } else {
        timeIDs.current.push(setTimeout(() => {
          arrayBars[animation[0]].style.backgroundColor = "red";
          arrayBars[animation[1]].style.backgroundColor = "red";
        }, i * time.current));
        timeIDs.current.push(setTimeout(() => {
          arrayBars[animation[0]].style.backgroundColor = "yellow";
          arrayBars[animation[1]].style.backgroundColor = "yellow";
        }, (i + 1) * time.current));
      }
    }
    timeIDs.current.push(setTimeout(()=>{
      running.current = false;
      changeButtonText();
    }, animations.length * time.current))
  }

  const quickSort = () => {
    const arrayBars = document.getElementsByClassName("array-bar");
    const animations = performQuickSort(array.slice());
    displaySimpleAnimation(arrayBars, animations);
  }

  const heapSort = () => {
    const arrayBars = document.getElementsByClassName("array-bar");
    const animations = performHeapSort(array.slice());
    displaySimpleAnimation(arrayBars, animations);
  }

  const bubbleSort = () => {
    const arrayBars = document.getElementsByClassName("array-bar");
    const animations = performBubbleSort(array.slice());
    displaySimpleAnimation(arrayBars, animations);
  }

  const selectionSort = () => {
    const arrayBars = document.getElementsByClassName("array-bar");
    const animations = performSelectionSort(array.slice());
    displaySimpleAnimation(arrayBars, animations);
  }

  const insertionSort = () => {
    const arrayBars = document.getElementsByClassName("array-bar");
    const animations = performInsertionSort(array.slice());
    displaySimpleAnimation(arrayBars, animations);
  }

  const shellSort = () => {
    const arrayBars = document.getElementsByClassName("array-bar");
    const animations = performShellSort(array.slice());
    displaySimpleAnimation(arrayBars, animations);
  }

  const algos = [mergeSort, quickSort, heapSort, bubbleSort, selectionSort, insertionSort, shellSort]

  return (
    <>
      <div id="container">
        <div className="array-container">
          {array.map((value, idx) => (
            <div
              className="array-bar"
              key={idx}
              style={{
                height: `${(value / max) * 87}vh`,
                // The margin between bars is considered as well
                width: `${(87 - 0.15 * bars) / bars}vw`,
              }}
            ></div>
          ))}
        </div>

        <div>
          <div style={{ display: "inline-block" }}>
            <span className="rangeValue">BARS: {bars}</span>
            <input
              className="range"
              id="n_bars"
              type="range"
              min="5"
              step="5"
              defaultValue="100"
              max="200"
              onChange={() => setBars(document.getElementById("n_bars").value)}
            ></input>
          </div>

          <div style={{ display: "inline-block" }}>
            <span className="rangeValue" id='speed_txt'>SPEED: 10 ms</span>
            <input
              className="range"
              id="speed"
              type="range"
              min="1"
              step="1"
              defaultValue="10"
              max="1000"
              onChange={() => {stopExecution(); recoverBars(); changeSpeedText();}}
            ></input> 
          </div>

          <button
            className="button_slide slide_down"
            onClick={() => {stopExecution(); resetArray(); recoverBars();}}
          >
            NEW ARRAY
          </button>

          <select
            id="select_box"
            className="box slide_down"
            onChange={() => {algo.current = document.getElementById("select_box").value;}}
          >
            <option value={-1}>ALGORITHM</option>
            <option value={3}>BUBBLE SORT</option>
            <option value={1}> QUICK SORT </option>
            <option value={2}>HEAP SORT</option>
            <option value={0}>MERGE SORT</option>
            <option value={4}>SELECTION SORT</option>
            <option value={5}>INSERTION SORT</option>
            <option value={6}>SHELL SORT</option>
          </select>

          <button id='btn'
            className="button_slide slide_down"
            onClick={playButtonLogic}
          >
            RUN
          </button>

        </div>
      </div>
    </>
  );
}

// Function to generate random numbers from min to max, both inclusive
function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
