/**
 * 212. Word Search II (Hard)
 * 
 * Given an m x n board of characters and a list of strings words, return all words on the board.
 * Each word must be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once in a word.
 * 
 * Example:
 * Input: board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]], words = ["oath","pea","eat","rain"]
 * Output: ["eat","oath"]
 */

/**
 * 212. 단어 검색 II (Hard)
 *
 * m x n 문자 보드와 문자열 목록 words가 주어지면 보드의 모든 단어를 반환합니다.
 * 각 단어는 순차적으로 인접한 셀의 문자로 구성되어야 하며, 여기서 인접한 셀은 가로 또는 세로로 이웃합니다. 동일한 문자 셀은 한 단어에서 두 번 이상 사용할 수 없습니다.
 *
 * 예시:
 * 입력: board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]], words = ["oath","pea","eat","rain"]
 * 출력: ["eat","oath"]
 */

function findWords(board: string[][], words: string[]): string[] {
    // 여기에 구현하세요
    return [];
}

// Test cases
const board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]];
const words = ["oath","pea","eat","rain"];
console.log(findWords(board, words)); // Expected: ["eat","oath"]