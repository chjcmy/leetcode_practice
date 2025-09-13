/*
 * 프로그래머스 - 파일명 정렬
 * https://school.programmers.co.kr/learn/courses/30/lessons/17686
 * Level 2
 */

/*
  문제 설명:
  주어진 파일명 목록을 특정 규칙에 따라 정렬하는 문제입니다.

  파일 이름은 다음과 같이 세 부분으로 구성됩니다.
  - HEAD: 숫자가 아닌 문자로 이루어진 파일명의 앞부분입니다.
  - NUMBER: HEAD 바로 뒤에 오는 숫자 부분입니다. 최대 5자리까지의 숫자로 구성되며, 숫자 비교 시 앞의 0은 무시됩니다 (예: "0012"와 "12"는 같은 숫자로 간주).
  - TAIL: NUMBER 부분 이후의 나머지 문자열입니다.

  정렬 규칙은 다음과 같은 우선순위를 따릅니다.
  1. HEAD 부분: 대소문자를 구분하지 않고 사전 순으로 정렬합니다. (예: "muzi"와 "MUZI"는 동일하게 취급됩니다.)
  2. NUMBER 부분: HEAD 부분이 같을 경우, NUMBER 부분의 숫자 값을 기준으로 오름차순 정렬합니다.
  3. 원래 입력 순서: HEAD와 NUMBER 부분이 모두 같을 경우, 원래 입력으로 주어진 파일들의 순서를 유지합니다.

  이 규칙에 따라 정렬된 파일명 배열을 return 하도록 solution 함수를 작성해주세요.

  제한사항:
  - 파일명은 1000개 이하입니다.
  - 파일명은 100자 이하의 문자열입니다.
  - 파일명은 영문 대소문자, 숫자, 공백, 마침표(.), 빼기(-)로만 이루어져 있습니다.
*/

function solution(files: string[]): string[] {
  let answer: string[] = [];
  // 문제 풀이
  return answer;
}

// 예제 테스트
console.log(`예제 1: ${solution(["img12.png", "img10.png", "img02.png", "img1.png", "IMG01.GIF", "img2.JPG"])} `); // ["img1.png", "IMG01.GIF", "img02.png", "img2.JPG", "img10.png", "img12.png"]
console.log(`예제 2: ${solution(["F-5 Freedom Fighter", "B-50 Superfortress", "A-10 Thunderbolt II", "F-14 Tomcat"])} `); // ["A-10 Thunderbolt II", "B-50 Superfortress", "F-5 Freedom Fighter", "F-14 Tomcat"]
