/*
 * 프로그래머스 - 행렬의 곱셈
 * https://school.programmers.co.kr/learn/courses/30/lessons/12949
 * Level 2
 */

function solution(arr1: number[][], arr2: number[][]): number[][] {
  let answer: number[][] = [];
  // 문제 풀이
  return answer;
}

// 예제 테스트
const arr1 = [[1, 4], [3, 2], [4, 1]];
const arr2 = [[3, 3], [3, 3]];
console.log(`예제 1: ${solution(arr1, arr2)}`); // [[15, 15], [15, 15], [15, 15]]

const arr3 = [[2, 3, 2], [4, 2, 4], [3, 1, 4]];
const arr4 = [[5, 4, 3], [2, 4, 1], [3, 1, 1]];
console.log(`예제 2: ${solution(arr3, arr4)}`); // [[22, 22, 11], [36, 28, 18], [29, 20, 14]]
