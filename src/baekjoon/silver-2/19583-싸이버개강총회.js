/**
 * 문제: 19583 - 싸이버개강총회
 * 등급: Silver 2
 * 링크: https://www.acmicpc.net/problem/19583
 */

/*
문제 요약:
싸이버개강총회는 채팅 기록을 통해 누가 출석했는지 확인한다.
개강총회 시작 시간 S, 개강총회 종료 시간 E, 스트리밍 종료 시간 Q가 주어진다.
채팅 기록은 '시간 닉네임' 형식으로 주어진다.
개강총회 시작 전에 채팅을 시작하고, 개강총회 종료 시간부터 스트리밍 종료 시간 사이에 채팅을 끝낸 학회원의 수를 구하시오.

입력:
첫째 줄에 S, E, Q가 공백으로 구분되어 주어진다. (HH:MM 형식)
둘째 줄부터는 채팅 기록이 시간 순서대로 주어진다. (시간 닉네임)

출력:
조건을 만족하는 학회원의 수를 출력한다.

예제 입력:
22:00 23:00 23:30
21:30 mumu
22:00 baejun
22:00 jason
23:00 mumu
23:00 baejun
23:00 jason
23:00 coo
23:00 choi
23:30 coo
23:30 choi

예제 출력:
5
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
22:00 23:00 23:30
21:30 mumu
22:00 baejun
22:00 jason
23:00 mumu
23:00 baejun
23:00 jason
23:00 coo
23:00 choi
23:30 coo
23:30 choi
`.trim().split('\n');
console.log(solution(exampleInput)); // 5
*/
