/**
 * ## 괄호 회전하기
 *
 * @see https://school.programmers.co.kr/learn/courses/30/lessons/76502
 */

// 올바른 괄호 문자열인지 확인하는 헬퍼 함수
const isValid = (str: string): boolean => {
  const stack: string[] = [];
  const map: { [key: string]: string } = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  for (const char of str) {
    if (char === "(" || char === "[" || char === "{") {
      stack.push(char);
    } else {
      if (stack.length === 0) {
        return false; // 닫는 괄호가 먼저 나온 경우
      }
      const lastOpen = stack.pop()!;
      if (map[lastOpen] !== char) {
        return false; // 괄호 짝이 맞지 않는 경우
      }
    }
  }

  return stack.length === 0; // 모든 괄호가 짝을 이뤘는지 확인
};

function solution(s: string): number {
  // 문자열의 길이가 홀수이면 절대 올바른 괄호 문자열이 될 수 없음
  if (s.length % 2 !== 0) {
    return 0;
  }

  let answer = 0;
  const n = s.length;
  let rotatedS = s;

  for (let i = 0; i < n; i++) {
    if (isValid(rotatedS)) {
      answer++;
    }
    // 문자열을 왼쪽으로 한 칸 회전
    rotatedS = rotatedS.substring(1) + rotatedS[0];
  }

  return answer;
}

// 테스트 실행
console.log(solution("[](){}"));

export {};