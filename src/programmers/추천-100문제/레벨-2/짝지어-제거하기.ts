/*
 * 프로그래머스 - 짝지어 제거하기
 * https://school.programmers.co.kr/learn/courses/30/lessons/12973
 * Level 2
 */

/*
  문제 설명:
  알파벳 소문자로 이루어진 문자열이 주어집니다. 
  이 문자열에서 같은 알파벳이 2개 붙어 있는 짝을 찾아 제거합니다. 
  짝을 제거한 뒤에는 앞뒤 문자열을 이어 붙이며, 이 과정을 더 이상 제거할 짝이 없을 때까지 반복합니다.

  주어진 문자열 S가 짝지어 제거하기를 성공적으로 수행하여 문자열을 모두 제거할 수 있는지 판단하는 함수를 완성해야 합니다. 
  성공적으로 수행할 수 있으면 1을, 그렇지 않으면 0을 반환합니다.

  제한사항:
  - 문자열의 길이: 1,000,000 이하의 자연수
  - 문자열은 모두 소문자로 이루어져 있습니다.
*/

function solution(s: string): number {
  let answer = 0;
  // 문제 풀이
  return answer;
}

// 예제 테스트
console.log(`예제 1: ${solution("baabaa")} `); // 1
console.log(`예제 2: ${solution("cdcd")} `); // 0
