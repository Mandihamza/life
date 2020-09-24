import React, { useState, useCallback, useRef } from 'react'
import produce from 'immer'

const numRows = 50
const numCols = 50

const operations = [
  [0, 1],
  [0, -1],
  [1, -1],
  [-1, 1],
  [1, 1],
  [-1, -1],
  [1, 0],
  [-1, 0],
]

// initialize empty grid
const DrawEmptyGrid = () => {
  const rows = []
  //builds 2d array of 0's
  for (let i = 0; i < numRows; i++) {
    rows.push(Array.from(Array(numCols), () => 0))
  }
  return rows
}

export const DrawGrid = () => {
  // initialize and store empty grid in useState hook
  const [grid, setGrid] = useState(() => {
    return DrawEmptyGrid()
  });

  // store simulation status in state
  const [running, setRunning] = useState(false);

  // track current simulation state in useRef hook
  const runningRef = useRef(running);
  runningRef.current = running;

  //function to begin running simulation (useCallback hook prevents rerunning the function on each render)
  const runSimulation = useCallback(() => {
    if (!runningRef.current) {
      return;
    }
    // make a copy of the grid that can be mutated
    setGrid((currentGrid) => {
      return produce(currentGrid, (gridCopy) => {
        for (let i = 0; i < numRows; i++) {
          for (let j = 0; j < numCols; j++) {
            // count number of neighbors around each cell
            let neighbors = 0
              operations.forEach(([x, y]) => {
              const newI = i + x
              const newJ = j + y
              // check bounds of grid
              if (newI >= 0 && newI < numRows && newJ >= 0 && newJ < numCols) {
                neighbors += currentGrid[newI][newJ]
              }
            })
            // logic for if cell lives or dies in next generation
            if (neighbors < 2 || neighbors > 3) {
              gridCopy[i][j] = 0
            } else if (currentGrid[i][j] === 0 && neighbors === 3) {
              gridCopy[i][j] = 1
            }
          }
        }
      })
    })

    // recursivly call runSimulation to advance to the next state at 100ms interval
    setTimeout(runSimulation, 100)
  }, [])

  return (
    <>
      <button
        onClick={() => {
          setRunning(!running)
          if (!running) {
            // prevent race conditions
            runningRef.current = true
            runSimulation()
          }
        }}
      >
        {running ? 'Stop' : 'Start'}
      </button>
      <button
        onClick={() => {
          setGrid(DrawEmptyGrid())
        }}
      >
        Clear
      </button>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${numCols}, 20px)`,
        }}
      >
        {grid.map((rows, i) =>
          rows.map((col, j) => (
            <div
              key={`${i}-${j}`}
              onClick={() => {
                const newGrid = produce(grid, (gridCopy) => {
                  gridCopy[i][j] = grid[i][j] ? 0 : 1
                })
                setGrid(newGrid)
              }}
              style={{
                width: 20,
                height: 20,
                backgroundColor: grid[i][j] ? 'hotpink' : undefined,
                border: 'solid 1px black',
              }}
            />
          ))
        )}
      </div>
    </>
  )
}
