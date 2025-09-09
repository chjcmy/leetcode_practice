/**
 * 문제: 9935 - 문자열 폭발
 * 등급: Gold 4
 * 링크: https://www.acmicpc.net/problem/9935
 */

/*
문제 요약:
상근이는 문자열에 폭발 문자열을 심어 놓았다. 폭발 문자열이 폭발하면 그 문자열은 문자열에서 사라지게 되며, 남은 문자열은 합쳐지게 된다.
폭발은 연쇄적으로 일어날 수 있다.
남아있는 문자가 없는 경우엔 "FRULA"를 출력한다.

입력:
첫째 줄에 문자열이 주어진다. (길이 1 ≤ |S| ≤ 1,000,000)
둘째 줄에 폭발 문자열이 주어진다. (길이 1 ≤ |T| ≤ 36)

출력:
남아있는 문자열을 출력한다. 남아있는 문자가 없는 경우엔 FRULA를 출력한다.

예제 입력 1:
mirkovC4nizCC44
C4

예제 출력 1:
mirkovniz

예제 입력 2:
12ab112ab2ab
12ab

예제 출력 2:
FRULA
*/

// --- 백준 제출용 코드 ---
// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function solution(input) {
    const str = input[0];
    const bomb = input[1];
    const stack = [];

    for (let i = 0; i < str.length; i++) {
        stack.push(str[i]);
        if (stack.length >= bomb.length) {
            const lastPart = stack.slice(stack.length - bomb.length).join('');
            if (lastPart === bomb) {
                for (let j = 0; j < bomb.length; j++) {
                    stack.pop();
                }
            }
        }
    }

    const result = stack.join('');
    return result.length > 0 ? result : 'FRULA';
}

/*
// --- 로컬 테스트용 ---
const exampleInput1 = ['mirkovC4nizCC44', 'C4'];
console.log(solution(exampleInput1)); // mirkovniz

const exampleInput2 = ['12ab112ab2ab', '12ab'];
console.log(solution(exampleInput2)); // FRULA
*/