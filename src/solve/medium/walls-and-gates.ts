/**
 * 286. Walls and Gates (Medium)
 * 
 * You are given an m x n grid rooms initialized with these three possible values:
 * -1 A wall or an obstacle.
 * 0 A gate.
 * INF Infinity means an empty room.
 * Fill each empty room with the distance to its nearest gate.
 * If it is impossible to reach a gate, it should be filled with INF.
 * 
 * Example:
 * Input: rooms = [[2147483647,-1,0,2147483647],[2147483647,2147483647,2147483647,-1],[2147483647,-1,2147483647,-1],[0,-1,2147483647,2147483647]]
 * Output: [[3,-1,0,1],[2,2,1,-1],[1,-1,2,-1],[0,-1,3,4]]
 */

function wallsAndGates(rooms: number[][]): void {
    // 여기에 구현하세요
}

// Test cases
const INF = 2147483647;
const rooms = [[INF,-1,0,INF],[INF,INF,INF,-1],[INF,-1,INF,-1],[0,-1,INF,INF]];
wallsAndGates(rooms);
console.log(rooms); // Expected: [[3,-1,0,1],[2,2,1,-1],[1,-1,2,-1],[0,-1,3,4]]