/*
 * 프로그래머스 - 자물쇠와 열쇠
 * https://school.programmers.co.kr/learn/courses/30/lessons/60059
 * Level 3
 */

/*
  문제 설명:
  잠겨있는 자물쇠는 격자 한 칸의 크기가 1x1인 N x N 크기의 정사각 격자 형태이고, 
  특이한 모양의 열쇠는 M x M 크기인 정사각 격자 형태로 되어 있습니다. (M은 항상 N 이하입니다.)

  key와 lock 배열의 원소는 0 또는 1로 이루어져 있습니다.
  - 0은 홈 부분을 나타냅니다.
  - 1은 돌기 부분을 나타냅니다.

  열쇠로 자물쇠를 열기 위해서는 열쇠의 돌기 부분이 자물쇠의 홈 부분을 정확히 채워야 합니다.
  - 열쇠는 시계 방향으로 90도, 180도, 270도 회전할 수 있습니다.
  - 열쇠는 자물쇠 위에서 자유롭게 이동(평행 이동)할 수 있습니다.
  - 열쇠의 돌기(1)와 자물쇠의 돌기(1)가 만나서는 안 됩니다.
  - 자물쇠의 모든 홈(0)은 열쇠의 돌기(1)로 채워져야 합니다.

  key와 lock이 매개변수로 주어질 때, 열쇠로 자물쇠를 열 수 있으면 true를, 열 수 없으면 false를 return 하도록 solution 함수를 완성해야 합니다.

  제한사항:
  - key는 M x M 크기 2차원 배열입니다. (3 ≤ M ≤ 20, M은 자연수)
  - lock은 N x N 크기 2차원 배열입니다. (3 ≤ N ≤ 20, N은 자연수)
  - M은 항상 N 이하입니다.
  - key와 lock의 원소는 0 또는 1로 이루어져 있습니다.
*/

function rotate(matrix: number[][]): number[][] {
  const n = matrix.length;
  const rotated = Array.from({ length: n }, () => Array(n).fill(0));
  for (let r = 0; r < n; r++) {
    for (let c = 0; c < n; c++) {
      rotated[c][n - 1 - r] = matrix[r][c];
    }
  }
  return rotated;
}

function check(newLock: number[][], M: number, N: number): boolean {
  for (let r = 0; r < N; r++) {
    for (let c = 0; c < N; c++) {
      if (newLock[r + M - 1][c + M - 1] !== 1) {
        return false;
      }
    }
  }
  return true;
}

function solution(key: number[][], lock: number[][]): boolean {
  const M = key.length;
  const N = lock.length;

  // 자물쇠를 확장하여 키를 이동시킬 공간 확보
  const paddedLockSize = N + 2 * (M - 1);
  const paddedLock = Array.from({ length: paddedLockSize }, () => Array(paddedLockSize).fill(0));

  // 확장된 자물쇠 중앙에 기존 자물쇠 배치
  for (let r = 0; r < N; r++) {
    for (let c = 0; c < N; c++) {
      paddedLock[r + M - 1][c + M - 1] = lock[r][c];
    }
  }

  // 4가지 회전 방향에 대해 시도
  let rotatedKey = key;
  for (let rot = 0; rot < 4; rot++) {
    // 키를 이동시키면서 확인
    for (let r = 0; r < paddedLockSize - M + 1; r++) {
      for (let c = 0; c < paddedLockSize - M + 1; c++) {
        // 자물쇠에 키를 끼워넣기
        const currentLock = paddedLock.map(row => [...row]); // 깊은 복사
        for (let kr = 0; kr < M; kr++) {
          for (let kc = 0; kc < M; kc++) {
            currentLock[r + kr][c + kc] += rotatedKey[kr][kc];
          }
        }

        // 자물쇠가 열리는지 확인
        if (check(currentLock, M, N)) {
          return true;
        }
      }
    }
    rotatedKey = rotate(rotatedKey); // 키 회전
  }

  return false;
}

// 예제 테스트
console.log(`예제 1: ${solution([[0, 0, 0], [1, 0, 0], [0, 1, 1]], [[1, 1, 1], [1, 1, 0], [1, 0, 1]])} `); // true
