/**
 * 743. Network Delay Time (Medium)
 * 
 * You are given a network of n nodes, labeled from 1 to n. You are also given times, a list of travel times as directed edges times[i] = (ui, vi, wi), where ui is the source node, vi is the target node, and wi is the time it takes for a signal to travel from source to target.
 * We will send a signal from a given node k. Return the time it takes for all n nodes to receive the signal. If it is impossible for all n nodes to receive the signal, return -1.
 * 
 * Example:
 * Input: times = [[2,1,1],[2,3,1],[3,4,1]], n = 4, k = 2
 * Output: 2
 */

/**
 * 743. 네트워크 지연 시간 (Medium)
 *
 * 1에서 n까지 레이블이 지정된 n개의 노드 네트워크가 주어집니다. 또한 소스 노드 ui, 대상 노드 vi, 신호가 소스에서 대상으로 이동하는 데 걸리는 시간 wi인 방향성 간선 times[i] = (ui, vi, wi)의 이동 시간 목록인 times가 주어집니다.
 * 주어진 노드 k에서 신호를 보냅니다. 모든 n개의 노드가 신호를 수신하는 데 걸리는 시간을 반환합니다. 모든 n개의 노드가 신호를 수신하는 것이 불가능하면 -1을 반환합니다.
 *
 * 예시:
 * 입력: times = [[2,1,1],[2,3,1],[3,4,1]], n = 4, k = 2
 * 출력: 2
 */

function networkDelayTime(times: number[][], n: number, k: number): number {
    // 여기에 구현하세요
    return -1;
}

// Test cases
console.log(networkDelayTime([[2,1,1],[2,3,1],[3,4,1]], 4, 2)); // Expected: 2
console.log(networkDelayTime([[1,2,1]], 2, 1)); // Expected: 1
console.log(networkDelayTime([[1,2,1]], 2, 2)); // Expected: -1