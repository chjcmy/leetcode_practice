/*
 * 프로그래머스 - JadenCase 문자열 만들기
 * https://school.programmers.co.kr/learn/courses/30/lessons/12951
 * Level 2
 */

/*
  문제 설명:
  JadenCase란 모든 단어의 첫 문자가 대문자이고, 그 외의 알파벳은 소문자인 문자열을 의미합니다. 
  단, 첫 문자가 알파벳이 아닐 경우에는 이어지는 알파벳은 소문자로 작성해야 합니다.

  문자열 s가 주어졌을 때, s를 JadenCase로 변환한 문자열을 return 하는 solution 함수를 완성하세요.

  제한 조건:
  - s는 길이가 1 이상 200 이하인 문자열입니다.
  - s는 알파벳과 숫자, 공백 문자(" ")로 이루어져 있습니다.
  - 숫자는 단어의 첫 문자로만 나타납니다.
  - 숫자로만 이루어진 단어는 없습니다.
  - 공백 문자가 연속해서 나올 수 있습니다.
*/

function solution(s: string): string {
  let answer = "";
  // 문제 풀이
  return answer;
}

// 예제 테스트
console.log(`예제 1: ${solution("3people unFollowed me")} `); // "3people Unfollowed Me"
console.log(`예제 2: ${solution("for the last week")} `); // "For The Last Week"
