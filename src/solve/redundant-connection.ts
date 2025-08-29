/**
 * 684. Redundant Connection (Medium)
 * 
 * In this problem, a tree is an undirected graph that is connected and has no cycles.
 * You are given a graph that started as a tree with n nodes labeled from 1 to n, with one additional edge added. The added edge has two different vertices chosen from 1 to n, and was not an edge that already existed. The graph is represented as an array edges of length n where edges[i] = [ai, bi] indicates that there is an edge between nodes ai and bi in the graph.
 * Return an edge that can be removed so that the resulting graph is a tree of n nodes. If there are multiple answers, return the answer that occurs last in the input.
 * 
 * Example:
 * Input: edges = [[1,2],[1,3],[2,3]]
 * Output: [2,3]
 */

/**
 * 684. 중복 연결 (Medium)
 *
 * 이 문제에서 트리는 연결되어 있고 주기가 없는 무방향 그래프입니다.
 * 1에서 n까지 레이블이 지정된 n개의 노드가 있는 트리로 시작하여 하나의 추가 간선이 추가된 그래프가 주어집니다. 추가된 간선은 1에서 n까지 선택된 두 개의 다른 정점을 가지며 이미 존재하지 않았던 간선입니다. 그래프는 길이가 n인 배열 간선으로 표시되며, 여기서 edges[i] = [ai, bi]는 그래프의 노드 ai와 bi 사이에 간선이 있음을 나타냅니다.
 * 결과 그래프가 n개의 노드 트리가 되도록 제거할 수 있는 간선을 반환합니다. 답이 여러 개인 경우 입력에서 마지막에 나타나는 답을 반환합니다.
 *
 * 예시:
 * 입력: edges = [[1,2],[1,3],[2,3]]
 * 출력: [2,3]
 */

function findRedundantConnection(edges: number[][]): number[] {
    // 여기에 구현하세요
    return [];
}

// Test cases
console.log(findRedundantConnection([[1,2],[1,3],[2,3]])); // Expected: [2,3]
console.log(findRedundantConnection([[1,2],[2,3],[3,4],[1,4],[1,5]])); // Expected: [1,4]