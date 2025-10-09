/*
 * 프로그래머스 - 124 나라의 숫자
 * https://school.programmers.co.kr/learn/courses/30/lessons/12899
 * Level 2
 */

/*
  문제 설명:
  124 나라에서는 10진법이 아닌 자신들만의 특별한 규칙으로 숫자를 표현합니다.
  - 124 나라에는 자연수만 존재합니다.
  - 모든 수를 표현할 때 오직 숫자 1, 2, 4만을 사용합니다.

  자연수 n이 매개변수로 주어질 때, n을 124 나라에서 사용하는 숫자로 바꾼 값을 return 하도록 solution 함수를 완성해야 합니다.

  제한 사항:
  - n은 50,000,000 이하의 자연수입니다.
*/

function solution(n: number): string {
  let answer = "";
  const numbers = ["4", "1", "2"];

  while (n > 0) {
    const remainder = n % 3;
    answer = numbers[remainder] + answer;
    if (remainder === 0) {
      n = Math.floor(n / 3) - 1;
    } else {
      n = Math.floor(n / 3);
    }
  }

  return answer;
}

// 예제 테스트
console.log(`예제 1: ${solution(1)} `); // "1"
console.log(`예제 2: ${solution(2)} `); // "2"
console.log(`예제 3: ${solution(3)} `); // "4"
console.log(`예제 4: ${solution(4)} `); // "11"
