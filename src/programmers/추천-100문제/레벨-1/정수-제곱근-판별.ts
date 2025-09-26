/*
 * 프로그래머스 - 정수 제곱근 판별
 * https://school.programmers.co.kr/learn/courses/30/lessons/12934
 * Level 1
 */

/*
  문제 설명:
  임의의 양의 정수 n에 대해, n이 어떤 양의 정수 x의 제곱인지 아닌지 판단합니다.
  - n이 양의 정수 x의 제곱이라면 x+1의 제곱을 return 합니다.
  - n이 양의 정수 x의 제곱이 아니라면 -1을 return 하는 함수를 완성하세요.

  제한 조건:
  - n은 1 이상, 50000000000000 이하인 양의 정수입니다.
*/

function solution(n: number): number {
    const sqrt = Math.sqrt(n);
    
    if (Number.isInteger(sqrt)) {
        return (sqrt + 1) ** 2;
    } else {
        return -1;
    }
}

// 예제 테스트
console.log(`예제 1: ${solution(121)} `); // 144
console.log(`예제 2: ${solution(3)} `); // -1
