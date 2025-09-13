/*
 * 프로그래머스 - x만큼 간격이 있는 n개의 숫자
 * https://school.programmers.co.kr/learn/courses/30/lessons/12954
 * Level 1
 */

/*
  문제 설명:
  함수 solution은 정수 x와 자연수 n을 입력 받아, x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트를 return 해야 합니다.

  제한 조건:
  - x는 -10,000,000 이상, 10,000,000 이하인 정수입니다.
  - n은 1,000 이하인 자연수입니다.
*/

function solution(x: number, n: number): number[] {
  let answer: number[] = [];
  // 문제 풀이
  return answer;
}

// 예제 테스트
console.log(`예제 1: ${solution(2, 5)} `); // [2,4,6,8,10]
console.log(`예제 2: ${solution(4, 3)} `); // [4,8,12]
console.log(`예제 3: ${solution(-4, 2)} `); // [-4, -8]
