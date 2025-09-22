/*
 * 프로그래머스 - 교점에 별 만들기
 * https://school.programmers.co.kr/learn/courses/30/lessons/87377
 * Level 2
 *
 * ## 문제 설명
 *
 * Ax + By + C = 0으로 표현할 수 있는 n개의 직선이 주어질 때, 이 직선의 교점 중 정수 좌표에 별을 그리려 합니다.
 *
 * 예를 들어, 다음과 같은 직선 5개를
 *
 * 2x - y + 4 = 0
 * -2x - y + 4 = 0
 * -y + 1 = 0
 * 5x - 8y - 12 = 0
 * 5x + 8y + 12 = 0
 *
 * 좌표 평면 위에 그리면 아래 그림과 같습니다.
 *
 * ![example1.png](https://grepp-programmers.s3.ap-northeast-2.amazonaws.com/files/production/f39e633b-4933-4269-a360-3530839de8c3/example1.png)
 *
 * 이때, 모든 교점의 좌표는 (4, 1), (4, -4), (-4, -4), (-4, 1), (0, 4), (1.5, 1.0), (2.1, -0.19), (0, -1.5), (-2.1, -0.19), (-1.5, 1.0) 입니다. 이 중 정수로만 표현되는 좌표는 (4, 1), (4, -4), (-4, -4), (-4, 1), (0, 4) 입니다.
 *
 * 만약 정수로 표현되는 교점에 별을 그리면 다음과 같습니다.
 *
 * ![example2.png](https://grepp-programmers.s3.ap-northeast-2.amazonaws.com/files/production/23a4053c-3321-4b37-9399-a80b67d230a2/example2.png)
 *
 * 위의 그림을 문자열로 나타낼 때, 별이 그려진 부분은 `*`, 빈 공간(격자선이 교차하는 지점)은 `.`으로 표현하면 다음과 같습니다.
 *
 * ![example3.png](https://grepp-programmers.s3.ap-northeast-2.amazonaws.com/files/production/5358356f-9923-4c24-a51e-210c13324c32/example3.png)
 *
 * 이때 격자판은 무한히 넓으니 모든 별을 포함하는 최소한의 크기만 나타내면 됩니다. 따라서 정답은 ["....*....", ".........", ".........", "*.......*", ".........", ".........", ".........", ".........", "*.......*"] 입니다.
 *
 * 직선 A, B, C에 대한 정보가 담긴 배열 line이 매개변수로 주어집니다. 이때 모든 별을 포함하는 최소 사각형을 return 하도록 solution 함수를 완성해주세요.
 *
 * ## English Description
 *
 * Given `n` lines represented by the equation Ax + By + C = 0, you need to draw stars at the integer coordinate intersection points of these lines.
 *
 * For example, if 5 lines (2x - y + 4 = 0, -2x - y + 4 = 0, -y + 1 = 0, 5x - 8y - 12 = 0, 5x + 8y + 12 = 0) are drawn on a coordinate plane, the intersection points are (4, 1), (4, -4), (-4, -4), (-4, 1), (0, 4), (1.5, 1.0), (2.1, -0.19), (0, -1.5), (-2.1, -0.19), (-1.5, 1.0). Among these, the integer coordinate points are (4, 1), (4, -4), (-4, -4), (-4, 1), (0, 4).
 *
 * If stars are drawn at these integer intersection points, it looks like the provided image. When representing the above image as a string, a star is represented by `*` and an empty space (intersection of grid lines) is represented by `.`. Since the grid is infinitely wide, you only need to represent the minimum size that includes all stars.
 *
 * Therefore, the answer is ["....*....", ".........", ".........", "*.......*", ".........", ".........", ".........", ".........", "*.......*"].
 *
 * An array `line` containing information about lines A, B, C is given as a parameter. Complete the `solution` function to return the minimum rectangle containing all stars.
 *
 * ## 제한사항
 *
 * - line의 세로(행) 길이는 2 이상 1,000 이하인 자연수입니다.
 *   - line의 가로(열) 길이는 3입니다.
 *   - line의 각 원소는 [A, B, C] 형태입니다.
 *   - A, B, C는 -100,000 이상 100,000 이하인 정수입니다.
 *   - 무수히 많은 교점이 생기는 직선 쌍은 주어지지 않습니다.
 *   - A=0, B=0인 경우는 주어지지 않습니다.
 * - 정답은 1,000 * 1,000 크기 이내에서 표현됩니다.
 * - 정답은 별이 하나 이상 그려지는 입력만 주어집니다.
 *
 * ## 입출력 예
 *
 * | line                                                          | result                                                                                                                             |
 * | ------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
 * | `[[2, -1, 4], [-2, -1, 4], [0, -1, 1], [5, -8, -12], [5, 8, 12]]` | `["....*....", ".........", ".........", "*.......*", ".........", ".........", ".........", ".........", "*.......*"]`           |
 * | `[[0, 1, -1], [1, 0, -1], [1, 0, 1]]`                           | `["*.*"]`                                                                                                                          |
 * | `[[1, -1, 0], [2, -1, 0]]`                                      | `["*"]`                                                                                                                            |
 * | `[[1, -1, 0], [2, -1, 0], [4, -1, 0]]`                          | `["*"]`                                                                                                                            |
 *
 */

function solution(line: number[][]): string[] {
  const points: { x: number; y: number }[] = [];

  // 모든 정수 교점 찾기
  for (let i = 0; i < line.length; i++) {
    for (let j = i + 1; j < line.length; j++) {
      const [A1, B1, C1] = line[i];
      const [A2, B2, C2] = line[j];

      const denominator = BigInt(A1) * BigInt(B2) - BigInt(A2) * BigInt(B1);
      if (denominator === 0n) continue;
      const xNumerator = BigInt(B1) * BigInt(C2) - BigInt(B2) * BigInt(C1);
      const yNumerator = BigInt(C1) * BigInt(A2) - BigInt(C2) * BigInt(A1);

      if (xNumerator % denominator !== 0n || yNumerator % denominator !== 0n) {
        continue; // 정수 교점이 아님
      }

      points.push({
        x: Number(xNumerator / denominator),
        y: Number(yNumerator / denominator),
      });
    }
  }

  // 최소 사각형 경계 찾기
  let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
  points.forEach(({ x, y }) => {
    minX = Math.min(minX, x);
    maxX = Math.max(maxX, x);
    minY = Math.min(minY, y);
    maxY = Math.max(maxY, y);
  });

  // 격자 생성 및 별 찍기
  const width = maxX - minX + 1;
  const height = maxY - minY + 1;
  const grid = Array.from({ length: height }, () => Array(width).fill('.'));

  points.forEach(({ x, y }) => {
    const gridX = x - minX;
    const gridY = maxY - y;
    grid[gridY][gridX] = '*';
  });

  // 문자열 배열로 변환하여 반환
  return grid.map(row => row.join(''));
}

// --- 테스트 코드 ---
const testCases = [
  {
    line: [[2, -1, 4], [-2, -1, 4], [0, -1, 1], [5, -8, -12], [5, 8, 12]],
    result: ["....*....", ".........", ".........", "*.......*", ".........", ".........", ".........", ".........", "*.......*"],
  },
  {
    line: [[0, 1, -1], [1, 0, -1], [1, 0, 1]],
    result: ["*.*"],
  },
  {
    line: [[1, -1, 0], [2, -1, 0]],
    result: ["*"],
  },
  {
    line: [[1, -1, 0], [2, -1, 0], [4, -1, 0]],
    result: ["*"],
  },
];

function runTests() {
  testCases.forEach((testCase, index) => {
    const { line, result } = testCase;
    const solutionResult = solution(line);
    const isCorrect = JSON.stringify(solutionResult) === JSON.stringify(result);
    console.log(
      `테스트 ${index + 1}: ${isCorrect ? '통과' : '실패'}`
    );
    if (!isCorrect) {
      console.log('  - 기대값:', result);
      console.log('  - 실제값:', solutionResult);
    }
  });
}

runTests();

export {};
