/**
 * 79. Word Search (Medium)
 * 
 * Given an m x n grid of characters board and a string word, return true if word exists in the grid.
 * The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring.
 * The same letter cell may not be used more than once.
 * 
 * Example:
 * Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
 * Output: true
 */

function exist(board: string[][], word: string): boolean {
    // 여기에 구현하세요
    return false;
}

// Test cases
const board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]];
console.log(exist(board, "ABCCED")); // Expected: true
console.log(exist(board, "SEE")); // Expected: true
console.log(exist(board, "ABCB")); // Expected: false