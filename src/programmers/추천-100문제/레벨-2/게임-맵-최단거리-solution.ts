/*
 * 프로그래머스 - 게임 맵 최단거리
 * https://school.programmers.co.kr/learn/courses/30/lessons/1844
 * Level 2
 */

/*
 * 문제 설명
 * ROR 게임은 두 팀으로 나누어서 진행하며, 상대 팀 진영을 먼저 파괴하면 이기는 게임입니다. 따라서, 각 팀은 상대 팀 진영에 최대한 빨리 도착하는 것이 유리합니다.
 * 지금부터 당신은 한 팀의 팀원이 되어 게임을 진행하려고 합니다. 다음은 5 x 5 크기의 맵에, 당신의 캐릭터는 (1, 1) 위치에 있고, 상대 팀 진영은 (5, 5) 위치에 있는 경우의 예시입니다.
 * (Image: 최단거리1_sxuruo.png)
 * 위 그림에서 검은색 부분은 벽으로 막혀있어 갈 수 없는 길이며, 흰색 부분은 갈 수 있는 길입니다. 캐릭터가 움직일 때는 동, 서, 남, 북으로 한 칸씩 이동하며, 게임 맵을 벗어난 길은 갈 수 없습니다.
 * 다음은 캐릭터가 상대 팀 진영으로 가는 두 가지 방법을 나타내고 있습니다.
 * 첫 번째 방법은 11개의 칸을 지나서 상대 팀 진영에 도착했습니다.
 * (Image: 최단거리2_hnjd3b.png)
 * 두 번째 방법은 15개의 칸을 지나서 상대 팀 진영에 도착했습니다.
 * (Image: 최단거리3_ntxygd.png)
 * 위 예시에서는 첫 번째 방법보다 더 빠르게 상대 팀 진영에 도착하는 방법은 없으므로, 이 방법이 상대 팀 진영으로 가는 가장 빠른 방법입니다.
 * 만약, 상대 팀이 당신의 팀 진영 주위에 벽을 세워두었다면 상대 팀 진영에 도착하지 못할 수도 있습니다. 예를 들어, 다음과 같은 경우에 당신의 캐릭터는 상대 팀 진영에 도착할 수 없습니다.
 * (Image: 최단거리4_of9xfg.png)
 * 게임 맵의 상태 maps가 매개변수로 주어질 때, 캐릭터가 상대 팀 진영에 도착하기 위해서 지나가야 하는 칸의 개수의 최솟값을 return 하도록 solution 함수를 완성해주세요. 단, 상대 팀 진영에 도착할 수 없을 때는 -1을 return 해주세요.
 *
 * 제한사항
 * maps는 n x m 크기의 게임 맵의 상태가 들어있는 2차원 배열로, n과 m은 각각 1 이상 100 이하의 자연수입니다.
 * n과 m은 서로 같을 수도, 다를 수도 있지만, n과 m이 모두 1인 경우는 입력으로 주어지지 않습니다.
 * maps는 0과 1로만 이루어져 있으며, 0은 벽이 있는 칸을, 1은 벽이 없는 칸을 나타냅니다.
 * 처음에 캐릭터는 게임 맵의 좌측 상단인 (1, 1) 위치에 있으며, 상대 팀 진영은 게임 맵의 우측 하단인 (n, m) 위치에 있습니다.
 */

/**
 * Solution 1: Standard BFS
 * 시작점에서부터 한 방향으로만 BFS를 진행하여 도착점을 찾습니다.
 * 이 풀이는 입력으로 받은 maps 배열을 직접 수정하여 방문 처리를 합니다.
 *
 * - 시간 복잡도: O(N * M)
 *   - N x M 크기의 맵의 모든 칸을 최대 한 번씩 방문합니다.
 * - 공간 복잡도: O(N * M)
 *   - 큐에 최악의 경우 맵의 많은 부분이 담길 수 있습니다.
 */
export function solution(maps: number[][]): number {
  const n = maps.length; // 행
  const m = maps[0].length; // 열

  // 1. 탐색을 위한 큐와 방향 배열 초기화
  const queue: [number, number, number][] = [];
  const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]]; // 상, 하, 좌, 우

  // 2. 시작점 설정
  queue.push([0, 0, 1]); // y, x, distance
  maps[0][0] = 0; // 시작점 방문 처리

  let head = 0;
  // 3. BFS 탐색 시작
  while (head < queue.length) {
    const [y, x, dist] = queue[head++];

    // 4. 도착점에 도달했는지 확인
    if (y === n - 1 && x === m - 1) {
      return dist;
    }

    // 5. 4방향으로 다음 칸 탐색
    for (const [dy, dx] of directions) {
      const ny = y + dy;
      const nx = x + dx;

      // 맵을 벗어나지 않고, 벽이 아니며, 아직 방문하지 않은 곳이라면
      if (ny >= 0 && ny < n && nx >= 0 && nx < m && maps[ny][nx] === 1) {
        maps[ny][nx] = 0; // 방문 처리
        queue.push([ny, nx, dist + 1]); // 큐에 다음 상태 추가
      }
    }
  }

  // 6. 큐가 모두 비었는데 도착하지 못했다면 -1 반환
  return -1;
}

/**
 * Solution 2: Bidirectional BFS
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
export function solution2(maps: number[][]): number {
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
  const queue_start: [number, number][] = [[0, 0]];
  const visited_start = Array.from({ length: n }, () => Array(m).fill(0));
  visited_start[0][0] = 1;

  const queue_end: [number, number][] = [[n - 1, m - 1]];
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
console.log("--- Solution 1: Standard BFS ---");
const maps1_sol1 = [[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,1],[0,0,0,0,1]];
console.log(`예제 1: ${solution(maps1_sol1)} `); // 11
const maps2_sol1 = [[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,0],[0,0,0,0,1]];
console.log(`예제 2: ${solution(maps2_sol1)} `); // -1

console.log("\n--- Solution 2: Bidirectional BFS ---");
const maps1_sol2 = [[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,1],[0,0,0,0,1]];
console.log(`예제 1: ${solution2(maps1_sol2)} `); // 11
const maps2_sol2 = [[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,0],[0,0,0,0,1]];
console.log(`예제 2: ${solution2(maps2_sol2)} `); // -1