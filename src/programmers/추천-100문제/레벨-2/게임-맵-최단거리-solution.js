/**
 * Solution 2: Bidirectional BFS (JavaScript Version)
 * 시작점과 도착점에서 동시에 BFS를 시작하여 중간에서 만나는 지점을 찾는 방식입니다.
 * 단방향 BFS에 비해 탐색 범위를 크게 줄일 수 있어 훨씬 효율적입니다.
 * 이 풀이는 별도의 visited 배열을 사용하여 원본 maps 배열을 수정하지 않습니다.
 *
 * - 시간 복잡도: O(N * M)
 *   - 이론적으로는 단방향보다 훨씬 빠르지만, 최악의 경우 모든 칸을 방문해야 할 수 있으므로 Big-O 표기법상으로는 동일합니다.
 *   - 평균적인 탐색 속도는 훨씬 빠릅니다.
 * - 공간 복잡도: O(N * M)
 *   - 2개의 큐와 2개의 방문 배열을 사용하므로, 공간 복잡도는 O(2 * N * M)이며, 상수를 제외하면 O(N * M)입니다.
 */
function solution2(maps) {
  const n = maps.length;
  const m = maps[0].length;

  // 시작점 또는 도착점이 벽인 경우
  if (maps[0][0] === 0 || maps[n - 1][m - 1] === 0) {
    return -1;
  }
  
  // 시작점과 도착점이 같은 경우
  if (n === 1 && m === 1) {
      return 1;
  }

  const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];

  // 1. 각 방향의 큐와 방문 배열 초기화
  const queue_start = [[0, 0]];
  const visited_start = Array.from({ length: n }, () => Array(m).fill(0));
  visited_start[0][0] = 1;

  const queue_end = [[n - 1, m - 1]];
  const visited_end = Array.from({ length: n }, () => Array(m).fill(0));
  visited_end[n - 1][m - 1] = 1;

  let head_start = 0;
  let head_end = 0;

  // 2. 양방향 BFS 탐색
  while (head_start < queue_start.length && head_end < queue_end.length) {
    // 더 작은 큐를 확장하여 효율을 높입니다.
    if (queue_start.length - head_start > queue_end.length - head_end) {
      // 2-1. 도착점 기준 탐색
      const current_end = queue_end[head_end++];
      const dist_end = visited_end[current_end[0]][current_end[1]];

      for (const [dy, dx] of directions) {
        const ny = current_end[0] + dy;
        const nx = current_end[1] + dx;

        if (ny >= 0 && ny < n && nx >= 0 && nx < m && maps[ny][nx] === 1) {
          // 시작점 기준 탐색과 만난 경우
          if (visited_start[ny][nx] > 0) {
            return dist_end + visited_start[ny][nx];
          }
          // 아직 방문하지 않은 곳인 경우
          if (visited_end[ny][nx] === 0) {
            visited_end[ny][nx] = dist_end + 1;
            queue_end.push([ny, nx]);
          }
        }
      }
    } else {
      // 2-2. 시작점 기준 탐색
      const current_start = queue_start[head_start++];
      const dist_start = visited_start[current_start[0]][current_start[1]];

      for (const [dy, dx] of directions) {
        const ny = current_start[0] + dy;
        const nx = current_start[1] + dx;

        if (ny >= 0 && ny < n && nx >= 0 && nx < m && maps[ny][nx] === 1) {
          // 도착점 기준 탐색과 만난 경우
          if (visited_end[ny][nx] > 0) {
            return dist_start + visited_end[ny][nx];
          }
          // 아직 방문하지 않은 곳인 경우
          if (visited_start[ny][nx] === 0) {
            visited_start[ny][nx] = dist_start + 1;
            queue_start.push([ny, nx]);
          }
        }
      }
    }
  }

  // 3. 도착할 수 없는 경우
  return -1;
}

// 예제 테스트
const maps1 = [[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,1],[0,0,0,0,1]];
console.log(`예제 1: ${solution2(maps1.map(row => [...row]))} `); // 11

const maps2 = [[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,0],[0,0,0,0,1]];
console.log(`예제 2: ${solution2(maps2.map(row => [...row]))} `); // -1
