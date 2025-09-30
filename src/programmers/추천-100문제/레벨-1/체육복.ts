/*
 * 프로그래머스 - 체육복
 * https://school.programmers.co.kr/learn/courses/30/lessons/42862
 * Level 1
 */

/*
  문제 설명:
  점심시간에 도둑이 들어 일부 학생들이 체육복을 도난당했습니다. 
  다행히 여벌 체육복을 가져온 학생들이 도난당한 학생들에게 체육복을 빌려주려고 합니다.

  학생들의 번호는 체격 순으로 매겨져 있습니다.
  체육복은 바로 앞 번호의 학생이나 바로 뒷 번호의 학생에게만 빌려줄 수 있습니다. 
  예를 들어, 4번 학생은 3번 학생이나 5번 학생에게만 체육복을 빌려줄 수 있습니다.

  전체 학생의 수 n, 체육복을 도난당한 학생들의 번호가 담긴 배열 lost, 
  여벌 체육복을 가져온 학생들의 번호가 담긴 배열 reserve가 매개변수로 주어질 때, 
  체육 수업을 들을 수 있는 학생의 최댓값을 return 하도록 solution 함수를 작성해주세요.

  제한사항:
  - 전체 학생의 수는 2명 이상 30명 이하입니다.
  - lost 배열의 길이는 1 이상 n 이하입니다.
  - reserve 배열의 길이는 1 이상 n 이하입니다.
  - 여벌 체육복이 있는 학생이 체육복을 도난당했을 수도 있습니다. 
    이때 이 학생은 체육복을 하나만 도난당했다고 가정하며, 
    남은 체육복이 하나이므로 다른 학생에게는 체육복을 빌려줄 수 없습니다.
*/

function solution(n: number, lost: number[], reserve: number[]): number {
    const actualLost = lost.filter(l => !reserve.includes(l));
    const actualReserve = reserve.filter(r => !lost.includes(r));

    let count = n - actualLost.length;

    actualLost.sort((a, b) => a - b);
    actualReserve.sort((a, b) => a - b);
    
      for (const lostStudent of actualLost) {
        const canBorrow = actualReserve.findIndex(r => 
            Math.abs(r - lostStudent) === 1
        );
        
        if (canBorrow !== -1) {
            count++;
            actualReserve.splice(canBorrow, 1); 
        }
    }
    
    return count;
}

// 예제 테스트
console.log(`예제 1: ${solution(5, [2, 4], [1, 3, 5])} `); // 5
console.log(`예제 2: ${solution(5, [2, 4], [3])} `); // 4
console.log(`예제 3: ${solution(3, [3], [1])} `); // 2
