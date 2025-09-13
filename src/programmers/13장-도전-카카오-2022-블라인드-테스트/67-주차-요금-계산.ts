/*
 * 프로그래머스 - 주차 요금 계산
 * https://school.programmers.co.kr/learn/courses/30/lessons/92341
 * Level 2
 */

function solution(fees: number[], records: string[]): number[] {
  let answer: number[] = [];
  // 문제 풀이
  return answer;
}

// 예제 테스트
console.log(`예제 1: ${solution([180, 5000, 10, 600], ["05:34 5961 IN", "06:00 0000 IN", "06:34 0000 OUT", "07:59 5961 OUT", "07:59 0148 IN", "18:59 0000 IN", "19:09 0148 OUT", "22:59 5961 IN", "23:00 5961 OUT"])} `); // [14600, 34400, 5000]
console.log(`예제 2: ${solution([120, 0, 60, 591], ["16:00 3908 IN", "18:00 3908 OUT", "07:00 4200 IN", "07:10 4200 OUT", "07:20 4200 IN", "07:50 4200 OUT", "08:00 4200 IN", "08:30 4200 OUT"])} `); // [0, 591]
console.log(`예제 3: ${solution([1, 461, 1, 10], ["00:00 1234 IN"])} `); // [14600]
