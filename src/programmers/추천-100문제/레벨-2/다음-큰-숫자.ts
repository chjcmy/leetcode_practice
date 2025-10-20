/*
 * 프로그래머스 - 다음 큰 숫자
 * https://school.programmers.co.kr/learn/courses/30/lessons/12911
 * Level 2
 */

/*
  문제 설명:
  자연수 n이 주어졌을 때, n의 다음 큰 숫자는 다음과 같이 정의합니다.
  - 조건 1. n의 다음 큰 숫자는 n보다 큰 자연수입니다.
  - 조건 2. n의 다음 큰 숫자와 n은 2진수로 변환했을 때 1의 개수가 같습니다.
  - 조건 3. n의 다음 큰 숫자는 조건 1, 2를 만족하는 수 중 가장 작은 수입니다.

  예를 들어서 78(2진수: 1001110)의 다음 큰 숫자는 83(2진수: 1010011)입니다.
  자연수 n이 매개변수로 주어질 때, n의 다음 큰 숫자를 return 하는 solution 함수를 완성해주세요.

  제한사항:
  - n은 1,000,000 이하의 자연수입니다.
*/

/*
  English Description:
  The problem asks to find the "next big number" for a given natural number `n`. This next big number must be greater than `n`, have the same number of '1's when both are converted to binary, and be the smallest number satisfying these two conditions. For example, the next big number for 78 (binary 1001110) is 83 (binary 1010011). The input `n` is a natural number less than or equal to 1,000,000.
*/

function solution(n: number): number {
    let binary = n.toString(2);
    let arr = binary.split('');
    
    // Step 1: 오른쪽부터 첫 번째 '01' 패턴 찾기
    let pos = -1;
    for (let i = arr.length - 2; i >= 0; i--) {
        if (arr[i] === '0' && arr[i + 1] === '1') {
            pos = i;
            break;
        }
    }
    
    if (pos === -1) {
        // '01' 패턴이 없는 경우 (모든 비트가 1인 경우)
        // 예: 1111 -> 10111 (NOT 100111)
        let onesCount = binary.split('1').length - 1;
        let result = '10' + '1'.repeat(onesCount - 1);
        return parseInt(result, 2);
    }
    
    // Step 2: '01'을 '10'으로 바꿈
    arr[pos] = '1';
    arr[pos + 1] = '0';
    
    // Step 3: pos+2 이후의 모든 비트를 정렬 (0들을 앞으로, 1들을 뒤로)
    let rightPart = arr.slice(pos + 2);
    let onesInRight = rightPart.filter(bit => bit === '1').length;
    let zerosInRight = rightPart.length - onesInRight;
    
    // 0들을 앞에, 1들을 뒤에 배치
    for (let i = pos + 2; i < arr.length; i++) {
        if (i < pos + 2 + zerosInRight) {
            arr[i] = '0';
        } else {
            arr[i] = '1';
        }
    }
    
    return parseInt(arr.join(''), 2);
}


// 예제 테스트
console.log(`예제 1: ${solution(78)} `); // 83
console.log(`예제 2: ${solution(15)} `); // 23
