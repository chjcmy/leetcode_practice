/*
 * 프로그래머스 - 이진 변환 반복하기
 * https://school.programmers.co.kr/learn/courses/30/lessons/70129
 * Level 2
 */

function solution(s: string): number[] {
  let answer: number[] = [];
  // 문제 풀이

  let time: number = 0;

  let count: number = 0;

  let result: number = 0;

  let newS: string;

  while(s !== '1') {
    // time 추가
    time++;
    // 0을 제거한다
    newS = s.replace(/0/g, '');
    // 0제거 갯수를 구한다
    count += s.length - newS.length;
    
    s = newS.length.toString(2);
  }

  return [time, count];
}

// 예제 테스트
console.log(`예제 1: ${solution("110010101001")} `); // [3,8]
console.log(`예제 2: ${solution("01110")} `); // [3,3]
console.log(`예제 3: ${solution("1111111")} `); // [4,1]
