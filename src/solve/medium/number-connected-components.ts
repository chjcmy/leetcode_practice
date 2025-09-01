/**
 * 323. Number of Connected Components in an Undirected Graph (Medium)
 * 
 * You have a graph of n nodes. You are given an integer n and an array edges where edges[i] = [ai, bi] indicates that there is an edge between ai and bi in the graph.
 * Return the number of connected components in the graph.
 * 
 * Example:
 * Input: n = 5, edges = [[0,1],[1,2],[3,4]]
 * Output: 2
 */

/**
 * 323. 무방향 그래프의 연결된 구성 요소 수 (Medium)
 *
 * n개의 노드 그래프가 있습니다. 정수 n과 간선 배열 edges가 주어지며, 여기서 edges[i] = [ai, bi]는 그래프에서 ai와 bi 사이에 간선이 있음을 나타냅니다.
 * 그래프의 연결된 구성 요소 수를 반환합니다.
 *
 * 예시:
 * 입력: n = 5, edges = [[0,1],[1,2],[3,4]]
 * 출력: 2
 */

function countComponents(n: number, edges: number[][]): number {
    // 여기에 구현하세요
    return 0;
}

// Test cases
console.log(countComponents(5, [[0,1],[1,2],[3,4]])); // Expected: 2
console.log(countComponents(5, [[0,1],[1,2],[2,3],[3,4]])); // Expected: 1