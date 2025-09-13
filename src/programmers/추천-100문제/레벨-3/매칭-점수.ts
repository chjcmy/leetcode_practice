/*
 * 프로그래머스 - 매칭 점수
 * https://school.programmers.co.kr/learn/courses/30/lessons/42893
 * Level 3
 */

/*
  문제 설명:
  주어진 검색어와 웹페이지 HTML 목록을 바탕으로 각 웹페이지의 매칭 점수를 계산하고, 
  가장 높은 매칭 점수를 가진 웹페이지의 인덱스를 return 하는 solution 함수를 작성해주세요.

  매칭 점수는 다음 규칙에 따라 계산됩니다:
  1. 기본 점수: 해당 웹페이지의 텍스트에서 검색어가 등장하는 횟수입니다. 대소문자는 구분하지 않습니다.
  2. 외부 링크 수: 해당 웹페이지에서 다른 외부 페이지로 연결된 링크의 개수입니다.
  3. 링크 점수: 해당 웹페이지로 링크가 걸린 다른 웹페이지들의 "(기본 점수 \div 외부 링크 수)"를 모두 합한 값입니다.
  4. 매칭 점수: 기본 점수와 링크 점수의 합으로 계산됩니다.

  가장 높은 매칭 점수를 가진 웹페이지가 여러 개라면, 그 중 가장 작은 인덱스를 return 해야 합니다.

  제한사항:
  - word는 1 이상 10 이하의 알파벳 소문자로만 이루어진 문자열입니다.
  - pages는 1 이상 20 이하의 문자열 배열입니다.
  - 각 페이지의 길이는 1 이상 10,000 이하입니다.
*/

function solution(word: string, pages: string[]): number {
  let answer = 0;
  // 문제 풀이
  return answer;
}

// 예제 테스트
console.log(`예제 1: ${solution("blind", ["<html lang=\"ko\" xml:lang=\"ko\">
<head>
  <meta charset=\"utf-8">
  <meta property=\"og:url\" content=\"https://a.com"/>
</head>
<body>
Blind Lorem Blind ipsum dolor Blind test sit amet, consectetur adipiscing elit. 
<a href=\"https://b.com\">Link to b</a>
</body>
</html>", "<html lang=\"ko\" xml:lang=\"ko\">
<head>
  <meta charset=\"utf-8">
  <meta property=\"og:url\" content=\"https://b.com"/>
</head>
<body>
Suspendisse potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
<a href=\"https://c.com\">Link to c</a>
</body>
</html>", "<html lang=\"ko\" xml:lang=\"ko\">
<head>
  <meta charset=\"utf-8">
  <meta property=\"og:url\" content=\"https://c.com"/>
</head>
<body>
Ut condimentum urna ut dolor consectetur interdum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
<a href=\"https://a.com\">Link to a</a>
</body>
</html>"])} `); // 0
