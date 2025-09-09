/**
 * 문제: 11725 - 트리의 부모 찾기
 * 등급: Silver 2
 * 링크: https://www.acmicpc.net/problem/11725
 */

/*
문제 요약:
루트 없는 트리가 주어진다. 이 트리의 루트를 1이라고 정했을 때, 각 노드의 부모를 구하는 프로그램을 작성하시오.

입력:
첫째 줄에 노드의 개수 N (2 ≤ N ≤ 100,000)이 주어진다. 
둘째 줄부터 N-1개의 줄에 트리 상에서 연결된 두 정점이 주어진다.

출력:
첫째 줄부터 N-1개의 줄에 각 노드의 부모 노드 번호를 2번 노드부터 순서대로 출력한다.

예제 입력:
7
1 6
6 3
3 5
4 1
2 4
4 7

예제 출력:
4
6
1
3
1
4
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
7
1 6
6 3
3 5
4 1
2 4
4 7
`.trim().split('\n');
console.log(solution(exampleInput));
*/