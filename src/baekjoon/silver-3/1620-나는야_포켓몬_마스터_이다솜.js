/**
 * 문제: 1620 - 나는야 포켓몬 마스터 이다솜
 * 등급: Silver 3
 * 링크: https://www.acmicpc.net/problem/1620
 */

/*
문제 요약:
N개의 포켓몬 도감과 M개의 맞혀야 하는 문제가 주어진다.
문제는 두 가지 유형이다:
1. 포켓몬 번호가 주어지면 포켓몬 이름을 맞혀야 한다.
2. 포켓몬 이름이 주어지면 포켓몬 번호를 맞혀야 한다.

입력:
첫째 줄에 포켓몬의 개수 N과 내가 맞춰야 하는 문제의 개수 M이 주어진다. (1 <= N, M <= 100,000)
둘째 줄부터 N개의 줄에 포켓몬 번호 1부터 N까지 순서대로 포켓몬 이름이 주어진다.
그 다음 줄부터 M개의 줄에 내가 맞춰야 하는 문제가 주어진다. 문제가 알파벳으로만 들어오면 포켓몬 이름이고, 숫자로만 들어오면 포켓몬 번호이다.

출력:
M개의 줄에 각각의 문제에 대한 답을 출력한다.

예제 입력:
26 5
Bulbasaur
Ivysaur
Venusaur
Charmander
Charmeleon
Charizard
Squirtle
Wartortle
Blastoise
Caterpie
Metapod
Butterfree
Weedle
Kakuna
Beedrill
Pidgey
Pidgeotto
Pidgeot
Rattata
Raticate
Spearow
Fearow
Ekans
Arbok
Pikachu
Raichu
25
Pikachu
Raichu
3
Venusaur

예제 출력:
Pikachu
25
26
Venusaur
3
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
26 5
Bulbasaur
Ivysaur
Venusaur
Charmander
Charmeleon
Charizard
Squirtle
Wartortle
Blastoise
Caterpie
Metapod
Butterfree
Weedle
Kakuna
Beedrill
Pidgey
Pidgeotto
Pidgeot
Rattata
Raticate
Spearow
Fearow
Ekans
Arbok
Pikachu
Raichu
25
Pikachu
Raichu
3
Venusaur
`.trim().split('\n');
console.log(solution(exampleInput));
*/
