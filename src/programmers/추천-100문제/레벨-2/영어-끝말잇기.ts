/*
 * 프로그래머스 - 영어 끝말잇기
 * https://school.programmers.co.kr/learn/courses/30/lessons/12981
 * Level 2
 */

/*
  문제 설명:
  1부터 n까지 번호가 붙어있는 n명의 사람이 영어 끝말잇기를 하고 있습니다. 
  영어 끝말잇기는 다음과 같은 규칙으로 진행됩니다.

  1. 1번부터 번호 순서대로 한 사람씩 차례대로 단어를 말합니다.
  2. 마지막 사람이 단어를 말한 다음에는 다시 1번부터 시작합니다.
  3. 앞사람이 말한 단어의 마지막 문자로 시작하는 단어를 말해야 합니다.
  4. 이전에 등장했던 단어는 사용할 수 없습니다.
  5. 한 글자인 단어는 인정되지 않습니다.

  사람의 수 n과 사람들이 순서대로 말한 단어 words가 매개변수로 주어질 때, 
  가장 먼저 탈락하는 사람의 번호와 그 사람이 자신의 몇 번째 차례에 탈락하는지를 [번호, 차례] 형태로 return 하도록 solution 함수를 완성해주세요.

  만약 주어진 단어들로 탈락자가 생기지 않는다면 [0,0]을 return 해주세요.

  제한 사항:
  - 게임에 참가하는 사람의 수 n: 2 이상 10 이하의 자연수
  - words는 끝말잇기에 사용한 단어들이 순서대로 들어있는 배열이며, 길이는 n 이상 100 이하입니다.
  - 단어의 길이는 2 이상 50 이하입니다.
  - 모든 단어는 알파벳 소문자로만 이루어져 있습니다.
*/

function solution(n: number, words: string[]): number[] {
  let answer: number[] = [];
  // 문제 풀이
  return answer;
}

// 예제 테스트
console.log(`예제 1: ${solution(3, ["tank", "kick", "know", "wheel", "land", "dream", "mother", "robot", "tank"])} `); // [3, 3]
console.log(`예제 2: ${solution(5, ["hello", "observe", "esprss", "esprss", "esprss", "esprss", "esprss", "esprss", "esprss", "esprss"],)} `); // [0, 0]
