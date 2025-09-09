/**
 * 문제: 2252 - 줄 세우기
 * 등급: Gold 5
 * 링크: https://www.acmicpc.net/problem/2252
 */

/*
문제 요약:
N명의 학생들을 키 순서대로 줄을 세우려고 한다. 두 학생의 키를 비교한 결과의 일부가 주어져 있다.
이때, N명의 학생들을 앞에서부터 순서대로 줄을 세운 결과를 출력하는 프로그램을 작성하시오.

입력:
첫째 줄에 학생의 수 N(1 ≤ N ≤ 32,000), 키를 비교한 횟수 M(1 ≤ M ≤ 100,000)이 주어진다.
다음 M개의 줄에는 키를 비교한 두 학생의 번호 A, B가 주어진다. 이는 학생 A가 학생 B의 앞에 서야 한다는 의미이다.

출력:
첫째 줄에 학생들을 앞에서부터 줄을 세운 결과를 출력한다. 답이 여러 가지인 경우에는 아무거나 출력한다.

예제 입력:
3 2
1 3
2 3

예제 출력:
1 2 3
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
3 2
1 3
2 3
`.trim().split('\n');
console.log(solution(exampleInput)); // 1 2 3
*/