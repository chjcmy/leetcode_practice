/*
 * 프로그래머스 - 방문 길이
 * https://school.programmers.co.kr/learn/courses/30/lessons/49994
 * Level 2
 */

/*
  문제 설명:
  게임 캐릭터를 4가지 명령어를 통해 움직이려 합니다. 명령어는 다음과 같습니다.
  - U: 위쪽으로 한 칸 가기
  - D: 아래쪽으로 한 칸 가기
  - R: 오른쪽으로 한 칸 가기
  - L: 왼쪽으로 한 칸 가기

  캐릭터는 좌표평면의 (0, 0) 위치에서 시작합니다. 
  좌표평면의 경계는 왼쪽 위 (-5, 5), 왼쪽 아래 (-5, -5), 오른쪽 위 (5, 5), 오른쪽 아래 (5, -5)로 이루어져 있습니다.

  이때, 우리는 게임 캐릭터가 지나간 길 중 캐릭터가 처음 걸어본 길의 길이를 구하려고 합니다.

  제한사항:
  - dirs는 string형으로 주어지며, 'U', 'D', 'R', 'L' 이외의 문자는 주어지지 않습니다.
  - dirs의 길이는 500 이하의 자연수입니다.
  - 좌표평면의 경계를 넘어가는 명령어는 무시됩니다.
*/

function solution(dirs: string): number {
  let answer = 0;
  // 문제 풀이
  return answer;
}

// 예제 테스트
console.log(`예제 1: ${solution("ULURRDLLU")} `); // 7
console.log(`예제 2: ${solution("LULLLLLLU")} `); // 7
