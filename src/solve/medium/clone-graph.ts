/**
 * 133. Clone Graph (Medium)
 * 
 * Given a reference of a node in a connected undirected graph.
 * Return a deep copy (clone) of the graph.
 * Each node in the graph contains a value (int) and a list (List[Node]) of its neighbors.
 * 
 * Example:
 * Input: adjList = [[2,4],[1,3],[2,4],[1,3]]
 * Output: [[2,4],[1,3],[2,4],[1,3]]
 */

/**
 * 133. 그래프 복제 (Medium)
 *
 * 연결된 무방향 그래프의 노드에 대한 참조가 주어집니다.
 * 그래프의 깊은 복사(복제)를 반환합니다.
 * 그래프의 각 노드에는 값(int)과 이웃 목록(List[Node])이 포함되어 있습니다.
 *
 * 예시:
 * 입력: adjList = [[2,4],[1,3],[2,4],[1,3]]
 * 출력: [[2,4],[1,3],[2,4],[1,3]]
 */

class GraphNode {
    val: number
    neighbors: GraphNode[]
    constructor(val?: number, neighbors?: GraphNode[]) {
        this.val = (val===undefined ? 0 : val)
        this.neighbors = (neighbors===undefined ? [] : neighbors)
    }
}

function cloneGraph(node: GraphNode | null): GraphNode | null {
    // 여기에 구현하세요
    return null;
}

// Test cases
const node1 = new GraphNode(1);
const node2 = new GraphNode(2);
const node3 = new GraphNode(3);
const node4 = new GraphNode(4);

node1.neighbors = [node2, node4];
node2.neighbors = [node1, node3];
node3.neighbors = [node2, node4];
node4.neighbors = [node1, node3];

console.log(cloneGraph(node1)); // Should return cloned graph