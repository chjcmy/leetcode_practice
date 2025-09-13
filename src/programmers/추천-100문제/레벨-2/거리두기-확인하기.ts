/*
 * 프로그래머스 - 거리두기 확인하기
 * https://school.programmers.co.kr/learn/courses/30/lessons/81302
 * Level 2
 */

function solution(places: string[][]): number[] {
  let answer: number[] = [];
  // 문제 풀이
  return answer;
}

// 예제 테스트
const places1 = [["POOOP", "OXXOX", "OPXPX", "OOXOX", "POXXP"], ["POOPX", "OXPXP", "PXXXO", "OXXXO", "OOOPP"], ["PXOPX", "OXOXP", "OXPOX", "OXXOP", "PXPOX"], ["OOOXX", "XOOOX", "OOOXX", "OXOOX", "OOOOO"], ["PXPXP", "XPXPX", "PXPXP", "XPXPX", "PXPXP"]];
console.log(`예제 1: ${solution(places1)}`); // [1, 0, 1, 1, 1]
