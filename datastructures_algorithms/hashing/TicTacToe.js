function checkWin(board) {

    const winningCombinations =
    [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]              // Diagonals
    ];

    for (let combination of winningCombinations)
    {
        const [a, b, c] = combination;

        if (board[a] !== "" && board[a] === board[b] && board[b] === board[c])
        {
            return true; // Win state found
        }
    }

    return false; // No win state found
}

// Example usage:
const board1 = ["X", "O", "X", "O", "X", "O", "", "", ""];
console.log(checkWin(board1));  // Output: true

const board2 = ["X", "O", "X", "", "", "", "", "", ""];
console.log(checkWin(board2));  // Output: false

