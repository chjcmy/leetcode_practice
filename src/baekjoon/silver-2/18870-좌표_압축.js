/**
 * 문제: 18870 - 좌표 압축
 * 등급: Silver 2
 * 링크: https://www.acmicpc.net/problem/18870
 */

/*
문제 요약:
수직선 위에 N개의 좌표 X1, X2, ..., XN이 있다. 이 좌표에 좌표 압축을 적용하려고 한다.
Xi를 좌표 압축한 결과 X'i의 값은 Xi > Xj를 만족하는 서로 다른 좌표의 개수와 같아야 한다.
X1, X2, ..., XN에 좌표 압축을 적용한 결과 X'1, X'2, ..., X'N를 출력하는 프로그램을 작성하시오.

입력:
첫째 줄에 N이 주어진다. (1 ≤ N ≤ 1,000,000)
둘째 줄에 X1, X2, ..., XN이 주어진다. (-10^9 ≤ Xi ≤ 10^9)

출력:
첫째 줄에 X'1, X'2, ..., X'N을 공백 한 칸으로 구분해서 출력한다.

예제 입력:
5
2 4 -10 4 -9

예제 출력:
2 3 0 3 1
*/

// --- 백준 제출용 코드 ---
// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function solution(input) {
    // 여기에 정답을 구현해주세요.
}

/*
// --- 로컬 테스트용 ---
const exampleInput = `
5
2 4 -10 4 -9
`.trim().split('\n');
console.log(solution(exampleInput)); // 2 3 0 3 1
*/
