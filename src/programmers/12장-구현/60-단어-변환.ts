/*
 * 프로그래머스 - 단어 변환
 * https://school.programmers.co.kr/learn/courses/30/lessons/43163
 * Level 3
 */

function solution(begin: string, target: string, words: string[]): number {
  let answer = 0;
  // 문제 풀이
  return answer;
}

// 예제 테스트
const begin1 = "hit";
const target1 = "cog";
const words1 = ["hot", "dot", "dog", "lot", "log", "cog"];
console.log(`예제 1: ${solution(begin1, target1, words1)}`); // 4

const begin2 = "hit";
const target2 = "cog";
const words2 = ["hot", "dot", "dog", "lot", "log"];
console.log(`예제 2: ${solution(begin2, target2, words2)}`); // 0
