/**
 * 913. Cat and Mouse (Hard)
 * 
 * A game on an undirected graph is played by two players, Mouse and Cat, who alternate turns.
 * The graph is given as follows: graph[a] is a list of all nodes b such that ab is an edge of the graph.
 * The mouse starts at node 1 and the cat starts at node 2. Both start the game at turn 0.
 * Mouse and Cat alternate turns, starting with the mouse on turn 0, 2, 4, ... and the cat on turn 1, 3, 5, ...
 * The mouse wins if it reaches node 0. The cat wins if it catches the mouse (i.e., if the cat and mouse are on the same node at any turn after the start of the game). The game can also end in a draw.
 * Given a graph, and assuming both players play optimally, return:
 * - 1 if the mouse wins the game,
 * - 2 if the cat wins the game, or
 * - 0 if the game ends in a draw.
 * 
 * Example:
 * Input: graph = [[2,5],[3],[0,4,5],[1,4,5],[2,3],[0,1,2,3]]
 * Output: 0
 * 
 * Example:
 * Input: graph = [[1,3],[0],[3],[0,2]]
 * Output: 1
 */

/**
 * 913. 고양이와 쥐 (Hard)
 *
 * 무방향 그래프에서 두 플레이어, 쥐와 고양이가 번갈아 가며 게임을 합니다.
 * 그래프는 다음과 같이 주어집니다: graph[a]는 그래프의 간선 ab가 되도록 하는 모든 노드 b의 목록입니다.
 * 쥐는 노드 1에서 시작하고 고양이는 노드 2에서 시작합니다. 둘 다 0턴에 게임을 시작합니다.
 * 쥐와 고양이는 턴을 번갈아 가며, 쥐는 0, 2, 4, ... 턴에, 고양이는 1, 3, 5, ... 턴에 시작합니다.
 * 쥐가 노드 0에 도달하면 쥐가 이깁니다. 고양이가 쥐를 잡으면(즉, 게임 시작 후 어느 턴에서든 고양이와 쥐가 같은 노드에 있으면) 고양이가 이깁니다. 게임은 무승부로 끝날 수도 있습니다.
 * 그래프가 주어지고 두 플레이어가 최적으로 플레이한다고 가정할 때 다음을 반환합니다:
 * - 쥐가 이기면 1,
 * - 고양이가 이기면 2,
 * - 게임이 무승부로 끝나면 0.
 *
 * 예시:
 * 입력: graph = [[2,5],[3],[0,4,5],[1,4,5],[2,3],[0,1,2,3]]
 * 출력: 0
 *
 * 예시:
 * 입력: graph = [[1,3],[0],[3],[0,2]]
 * 출력: 1
 */

function catMouseGame(graph: number[][]): number {
    // 여기에 구현하세요
    return 0;
}

// Test cases
console.log(catMouseGame([[2,5],[3],[0,4,5],[1,4,5],[2,3],[0,1,2,3]])); // Expected: 0
console.log(catMouseGame([[1,3],[0],[3],[0,2]])); // Expected: 1