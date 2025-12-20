/*
 * 프로그래머스 - 소수 만들기
 * https://school.programmers.co.kr/learn/courses/30/lessons/12977
 * Level 2
 */

/*
  문제 설명:
  주어진 숫자 배열 nums에서 서로 다른 숫자 3개를 골라 더했을 때, 그 합이 소수가 되는 경우의 개수를 찾는 문제입니다.

  제한사항:
  - nums에 들어있는 숫자의 개수는 3개 이상 50개 이하입니다.
  - nums의 각 원소는 1 이상 1,000 이하의 자연수이며, 중복된 숫자가 들어있지 않습니다.
*/

function solution(nums: number[]): number {
  const isPrime = (n:number) : boolean => {
    if (n < 2) return false;
    for (let i = 2; i < Math.sqrt(n); i++) {
      if(n % i === 0) return false;
    }
    return true;
  }

  let count = 0;
  const len = nums.length;

  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      for (let k = j + 1; k < len; k++) {
        if(isPrime(nums[i] + nums[j] + nums[k])) count++;
      }
    }
  }
  return count;
}

// 예제 테스트
console.log(`예제 1: ${solution([1, 2, 3, 4])} `); // 1
console.log(`예제 2: ${solution([1, 2, 7, 6, 4])} `); // 4
