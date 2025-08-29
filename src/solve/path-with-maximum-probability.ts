/**
 * 1514. Path with Maximum Probability (Medium)
 * 
 * You are given an undirected weighted graph of n nodes (0-indexed), represented by an edge list where edges[i] = [a, b] is an undirected edge connecting the nodes a and b with a probability of success of traversing that edge succProb[i].
 * Given two nodes start and end, find the path with the maximum probability of success to go from start to end and return its success probability.
 * If there is no path from start to end, return 0. Your answer will be accepted if it differs from the correct answer by at most 1e-5.
 * 
 * Example:
 * Input: n = 3, edges = [[0,1],[1,2],[0,2]], succProb = [0.5,0.5,0.2], start = 0, end = 2
 * Output: 0.25000
 * Explanation: There are two paths from start to end, one having a probability of success 0.2 and the other has 0.5 * 0.5 = 0.25.
 */

/**
 * 1514. 최대 확률 경로 (Medium)
 *
 * n개의 노드(0-인덱스)로 구성된 무방향 가중 그래프가 주어지며, 간선 목록으로 표현됩니다. 여기서 edges[i] = [a, b]는 해당 간선 succProb[i]를 통과할 성공 확률로 노드 a와 b를 연결하는 무방향 간선입니다.
 * 두 노드 start와 end가 주어지면, start에서 end로 가는 최대 성공 확률 경로를 찾아 성공 확률을 반환합니다.
 * start에서 end까지 경로가 없으면 0을 반환합니다. 답이 정답과 최대 1e-5만큼 차이가 나면 정답으로 인정됩니다.
 *
 * 예시:
 * 입력: n = 3, edges = [[0,1],[1,2],[0,2]], succProb = [0.5,0.5,0.2], start = 0, end = 2
 * 출력: 0.25000
 * 설명: start에서 end까지 두 개의 경로가 있으며, 하나는 성공 확률이 0.2이고 다른 하나는 0.5 * 0.5 = 0.25입니다.
 */

function maxProbability(n: number, edges: number[][], succProb: number[], start: number, end: number): number {
    // 여기에 구현하세요
    return 0;
}

// Test cases
console.log(maxProbability(3, [[0,1],[1,2],[0,2]], [0.5,0.5,0.2], 0, 2)); // Expected: 0.25
console.log(maxProbability(3, [[0,1],[1,2],[0,2]], [0.5,0.5,0.3], 0, 2)); // Expected: 0.3