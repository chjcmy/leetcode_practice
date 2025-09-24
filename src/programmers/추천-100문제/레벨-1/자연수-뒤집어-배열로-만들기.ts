/*
 * 프로그래머스 - 자연수 뒤집어 배열로 만들기
 * https://school.programmers.co.kr/learn/courses/30/lessons/12932
 * Level 1
 */

function solution(n: number): number[] {
    return String(n).split('').reverse().map(Number);
}

// 예제 테스트
console.log(`예제 1: ${solution(12345)}`); // [5,4,3,2,1]
