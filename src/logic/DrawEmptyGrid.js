const numRows = 50
const numCols = 50

const DrawEmptyGrid = () => {
    const rows = []
    for (let i = 0; i < numRows; i++) {
      rows.push(Array.from(Array(numCols), () => 0))
    }
    return rows
  }

  export default DrawEmptyGrid;