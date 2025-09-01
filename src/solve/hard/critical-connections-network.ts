/**
 * 1192. Critical Connections in a Network (Hard)
 * 
 * There are n servers numbered from 0 to n - 1 connected by undirected server-to-server connections forming a network where connections[i] = [ai, bi] represents a connection between servers ai and bi. Any server can reach other servers directly or indirectly through the network.
 * A critical connection is a connection that, if removed, will make some servers unable to reach some other server.
 * Return all critical connections in the network in any order.
 * 
 * Example:
 * Input: n = 4, connections = [[0,1],[1,2],[2,0],[1,3]]
 * Output: [[1,3]]
 * Explanation: [[3,1]] is also accepted.
 * 
 * Example:
 * Input: n = 2, connections = [[0,1]]
 * Output: [[0,1]]
 */

/**
 * 1192. 네트워크의 중요 연결 (Hard)
 *
 * 0에서 n - 1까지 번호가 매겨진 n개의 서버가 있으며, connections[i] = [ai, bi]가 서버 ai와 bi 간의 연결을 나타내는 무방향 서버 대 서버 연결로 네트워크를 형성합니다. 모든 서버는 네트워크를 통해 직접 또는 간접적으로 다른 서버에 도달할 수 있습니다.
 * 중요 연결은 제거하면 일부 서버가 다른 서버에 도달할 수 없게 만드는 연결입니다.
 * 네트워크의 모든 중요 연결을 순서에 상관없이 반환합니다.
 *
 * 예시:
 * 입력: n = 4, connections = [[0,1],[1,2],[2,0],[1,3]]
 * 출력: [[1,3]]
 * 설명: [[3,1]]도 허용됩니다.
 *
 * 예시:
 * 입력: n = 2, connections = [[0,1]]
 * 출력: [[0,1]]
 */

function criticalConnections(n: number, connections: number[][]): number[][] {
    // 여기에 구현하세요
    return [];
}

// Test cases
console.log(criticalConnections(4, [[0,1],[1,2],[2,0],[1,3]])); // Expected: [[1,3]]
console.log(criticalConnections(2, [[0,1]])); // Expected: [[0,1]]