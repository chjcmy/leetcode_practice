/*
 * 프로그래머스 - 이상한 문자 만들기
 * https://school.programmers.co.kr/learn/courses/30/lessons/12930
 * Level 1
 */

function solution(s: string): string {
    let result = '';
    let wordIndex = 0;
  // 문제 풀이
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        
        if (char === ' ') {
            result += char;
            wordIndex = 0;  
        } else {
            if (wordIndex % 2 === 0) {
                result += char.toUpperCase();  
            } else {
                result += char.toLowerCase();  
            }
            wordIndex++;
        }
    }
    
    return result;
}

// 예제 테스트
console.log(`예제 1: ${solution("try hello world")} `); // "TrY HeLlO WoRlD"
