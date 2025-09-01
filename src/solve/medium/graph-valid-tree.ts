/**
 * 261. Graph Valid Tree (Medium)
 * 
 * You have a graph of n nodes labeled from 0 to n - 1. You are given an integer n and a list of edges where edges[i] = [ai, bi] indicates that there is an undirected edge between nodes ai and bi in the graph.
 * Return true if the edges of the given graph make up a valid tree, and false otherwise.
 * 
 * Example:
 * Input: n = 5, edges = [[0,1],[0,2],[0,3],[1,4]]
 * Output: true
 */

/**
 * 261. 유효한 그래프 트리 (Medium)
 *
 * 0에서 n-1까지 레이블이 지정된 n개의 노드 그래프가 있습니다. 정수 n과 간선 목록이 주어지며, 여기서 edges[i] = [ai, bi]는 그래프의 노드 ai와 bi 사이에 무방향 간선이 있음을 나타냅니다.
 * 주어진 그래프의 간선이 유효한 트리를 구성하면 true를, 그렇지 않으면 false를 반환합니다.
 *
 * 예시:
 * 입력: n = 5, edges = [[0,1],[0,2],[0,3],[1,4]]
 * 출력: true
 */

function validTree(n: number, edges: number[][]): boolean {
    // 여기에 구현하세요
    return false;
}

// Test cases
console.log(validTree(5, [[0,1],[0,2],[0,3],[1,4]])); // Expected: true
console.log(validTree(5, [[0,1],[1,2],[2,3],[1,3],[1,4]])); // Expected: false