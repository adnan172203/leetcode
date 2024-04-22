function isValidSudoku(board) {
  // Create sets to store numbers for each row, column, and 3x3 box.
  const rows = new Array(9).fill(null).map(() => new Set());
  const cols = new Array(9).fill(null).map(() => new Set());
  const boxes = new Array(9).fill(null).map(() => new Set());

  // Iterate over each cell in the Sudoku board.
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const cell = board[i][j];
      // If the cell is not empty ('.'), check if it violates any Sudoku rule.
      if (cell !== '.') {
        if (
          rows[i].has(cell) || // Check if the number exists in the same row.
          cols[j].has(cell) || // Check if the number exists in the same column.
          boxes[Math.floor(i / 3) * 3 + Math.floor(j / 3)].has(cell) // Check if the number exists in the same 3x3 box.
        ) {
          return false; // If any rule is violated, return false.
        }
        // Add the number to respective sets to mark its presence.
        rows[i].add(cell);
        cols[j].add(cell);
        boxes[Math.floor(i / 3) * 3 + Math.floor(j / 3)].add(cell);
      }
    }
  }

  // If all cells pass the rules, return true (valid Sudoku).
  return true;
}

// Example usage:
const board1 = [
  ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
];

// const board2 = [
//   ['8', '3', '.', '.', '7', '.', '.', '.', '.'],
//   ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
//   ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
//   ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
//   ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
//   ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
//   ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
//   ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
//   ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
// ];

console.log(isValidSudoku(board1)); // Output: true
// console.log(isValidSudoku(board2)); // Output: false

// Math.floor(i / 3) calculates the floor division of i by 3. It gives us the row number of the box in boxes that the cell might belong to.

// Math.floor(j / 3) calculates the floor division of j by 3. It gives us the column number of the box in boxes that the cell might belong to.

// [Math.floor(i / 3) * 3 + Math.floor(j / 3)] is accessing the box element from the boxes array. It calculates the index of the box element in the boxes array based on the row and column number.

//--- ------------- ------

// The multiplication by 3 in the expression Math.floor(i / 3) * 3 is used to calculate the starting index of each subgrid or box within the boxes array.

// Each row of the Sudoku puzzle is divided into three equal-sized subgrids or boxes, and each column is also divided into three equal-sized subgrids or boxes. The expression Math.floor(i / 3) gives us the row index of the subgrid or box that the cell i belongs to, and multiplying it by 3 gives us the starting index of that subgrid or box within the boxes array.

// For example, when i is 0, 1, or 2 (representing the first row of the puzzle), Math.floor(i / 3) will be 0, and Math.floor(i / 3) * 3 will also be 0. This means that the starting index of the first box in the boxes array for the first row is 0.

// Similarly, when i is 3, 4, or 5 (representing the second row of the puzzle), Math.floor(i / 3) will be 1, and Math.floor(i / 3) * 3 will be 3. This means that the starting index of the first box in the boxes array for the second row is 3.

// By multiplying Math.floor(i / 3) by 3, we ensure that the starting index of each subgrid or box in the boxes array is aligned properly with the Sudoku puzzle grid.
