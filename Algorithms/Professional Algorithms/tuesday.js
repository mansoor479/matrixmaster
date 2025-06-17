                      //Magic Squares
// A magic square is a square matrix in which the sum of every row, column, and both main diagonals are the same.
// Write a function that checks if a given square matrix is a magic square.
// The function should return true if it is a magic square, and false otherwise.
// For example, the following matrix is a magic square:
// // [
// //   [2, 7, 6],
// //   [9, 5, 1],
// //   [4, 3, 8]
// // ]
// The sum of each row, column, and diagonal is 15.


function magicSquare(matrix) {
    const n = matrix.length;
    let sum = 0;
    for (let j = 0; j < n; j++) {
        sum += matrix[0][j];
    }

    for (let i = 1; i < n; i++) {
        let rowSum = 0;
        for (let j = 0; j < n; j++) {
            rowSum += matrix[i][j];
        }
        if (rowSum !== sum) {
            return false;
        }
    }

    for (let j = 0; j < n; j++) {
        let columnSum = 0;
        for (let i = 0; i < n; i++) {
            columnSum += matrix[i][j];
        }
        if (columnSum !== sum) {
            return false;
        }
    }
    let diagonalSum = 0;
    for (let i = 0; i < n; i++) {
        diagonalSum += matrix[i][i];
    }
    if (diagonalSum !== sum) {
        return false;
    }

    diagonalSum = 0;
    for (let i = 0; i < n; i++) {
        diagonalSum += matrix[i][n - i - 1];
    }
    if (diagonalSum !== sum) {
        return false;
    }

    return true;
}

const matrix = [
    [2, 7, 6],
    [9, 5, 1],
    [4, 3, 8]
];

console.log(magicSquare(matrix));                      


/* function magicSquare(matrix)
{
    const n = matrix.length;
    const expectedSum = n * (n * n + 1) / 2; 
    let rowSum = 0, colSum = 0, mainDiagSum = 0;
    for (let i = 0; i < n; i++) {
        rowSum = 0;
        colSum = 0;
        for (let j = 0; j < n; j++) {
            rowSum += matrix[i][j];
            colSum += matrix[j][i];
        }
        if (rowSum !== expectedSum || colSum !== expectedSum)
        {
            return false;
        }
        mainDiagSum += matrix[i][i];
    }
    
    let secondaryDiagSum = 0;
    for (let i = 0; i < n; i++) {
        secondaryDiagSum += matrix[i][n - i - 1];
    }
    if (secondaryDiagSum !== expectedSum || mainDiagSum !== expectedSum) {
        return false;
    }
    
    return true;
}
const matrix = [
    [2, 7, 6],
    [9, 5, 1],
    [4, 3, 8]
];

console.log(magicSquare(matrix)); */
