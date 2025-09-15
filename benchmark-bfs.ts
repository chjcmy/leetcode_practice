import { solution as solution1 } from './src/programmers/추천-100문제/레벨-2/게임-맵-최단거리-solution.ts';
import { solution2 as solution2 } from './src/programmers/추천-100문제/레벨-2/게임-맵-최단거리-solution.ts';

// 맵 생성 함수 (복잡한 경로)
function createComplexMap(size: number): number[][] {
  const map = Array.from({ length: size }, () => Array(size).fill(0)); // 모든 칸을 벽으로 초기화

  // 시작점과 도착점은 항상 통과 가능
  map[0][0] = 1;
  map[size - 1][size - 1] = 1;

  // 시작점에서 도착점까지 지그재그 경로 생성
  let x = 0;
  let y = 0;
  let direction = 0; // 0: right, 1: down, 2: left, 3: up

  while (x < size - 1 || y < size - 1) {
    map[y][x] = 1; // 현재 위치를 길로 만듦

    if (direction === 0) { // 오른쪽으로 이동
      if (x < size - 1) {
        x++;
      } else if (y < size - 1) {
        y++;
        direction = 1; // 아래로 방향 전환
      } else {
        break;
      }
    } else if (direction === 1) { // 아래로 이동
      if (y < size - 1) {
        y++;
      } else if (x < size - 1) {
        x++;
        direction = 0; // 오른쪽으로 방향 전환
      } else {
        break;
      }
    }
    // 간단화를 위해 오른쪽과 아래로만 이동하는 경로를 만듭니다.
    // 실제 복잡한 맵은 더 다양한 방식으로 생성될 수 있습니다.
  }
  map[size - 1][size - 1] = 1; // 도착점 보장
  return map;
}

const MAP_SIZE = 100; // 맵 크기 설정
const largeMap = createComplexMap(MAP_SIZE);

console.log(`
--- BFS 성능 비교 (맵 크기: ${MAP_SIZE}x${MAP_SIZE}) ---
`);

// Solution 1 (Standard BFS) 벤치마크
// solution 함수가 maps를 수정하므로, 매번 맵을 복사해서 사용합니다.
const mapForSol1 = JSON.parse(JSON.stringify(largeMap));
console.time('Solution 1 (Standard BFS)');
const result1 = solution1(mapForSol1);
console.timeEnd('Solution 1 (Standard BFS)');
console.log(`Solution 1 결과: ${result1}`);

// Solution 2 (Bidirectional BFS) 벤치마크
// solution2 함수도 maps를 수정하지 않지만, 공정한 비교를 위해 복사해서 사용합니다.
const mapForSol2 = JSON.parse(JSON.stringify(largeMap));
console.time('Solution 2 (Bidirectional BFS)');
const result2 = solution2(mapForSol2);
console.timeEnd('Solution 2 (Bidirectional BFS)');
console.log(`Solution 2 결과: ${result2}`);