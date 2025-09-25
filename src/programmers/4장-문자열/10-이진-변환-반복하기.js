/*
 * 프로그래머스 - 이진 변환 반복하기 (JavaScript)
 * https://school.programmers.co.kr/learn/courses/30/lessons/70129
 * Level 2
 */

function solution(s) {
  let time = 0;
  let count = 0;
  let newS;

  while (s !== '1') {
    time++;
    newS = s.replace(/0/g, '');
    count += s.length - newS.length;
    s = newS.length.toString(2);
  }

  return [time, count];
}

// 예제 테스트
console.log(`예제 1: ${solution("110010101001")} `); // [3,8]
console.log(`예제 2: ${solution("01110")} `); // [3,3]
console.log(`예제 3: ${solution("1111111")} `); // [4,1]
