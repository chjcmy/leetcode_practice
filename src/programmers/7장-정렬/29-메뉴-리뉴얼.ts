/*
 * 프로그래머스 - 메뉴 리뉴얼
 * https://school.programmers.co.kr/learn/courses/30/lessons/72411
 * Level 2
 */

function solution(orders: string[], course: number[]): string[] {
  let answer: string[] = [];
  // 문제 풀이
  return answer;
}

// 예제 테스트
console.log(`예제 1: ${solution(["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"], [2,3,4])} `); // ["AC", "ACDE", "BCFG", "CDE"]
console.log(`예제 2: ${solution(["ABCDE", "AB", "CD", "ADE", "XYZ", "XYZ", "ACD"], [2,3,5])} `); // ["ACD", "AD", "ADE", "CD", "XYZ"]
console.log(`예제 3: ${solution(["XYZ", "XWY", "WXA"], [2,3,4])} `); // ["WX", "XY"]
