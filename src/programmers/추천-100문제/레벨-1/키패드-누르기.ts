/*
 * 프로그래머스 - 키패드 누르기
 * https://school.programmers.co.kr/learn/courses/30/lessons/67256
 * Level 1
 */

function solution(numbers: number[], hand: string): string {
    let result = '';



    let leftPos = [3, 0];
    let rightPos = [3, 2];
    
    const keypad: {[key: number]: number[]} = {
        1: [0,0], 2: [0,1], 3: [0,2],
        4: [1,0], 5: [1,1], 6: [1,2],
        7: [2,0], 8: [2,1], 9: [2,2], 0: [3,1]
    };
    
    const getDistance = (pos1: number[], pos2: number[]): number => {
        return Math.abs(pos1[0] - pos2[0]) + Math.abs(pos1[1] - pos2[1]);
    };
    
    for (const num of numbers) {
        const targetPos = keypad[num];
        
        if ([1,4,7].includes(num)) {
            result += 'L';
            leftPos = targetPos;
        } else if ([3,6,9].includes(num)) {
            result += 'R';
            rightPos = targetPos;
        } else {
            const leftDist = getDistance(leftPos, targetPos);
            const rightDist = getDistance(rightPos, targetPos);
            
            if (leftDist < rightDist || (leftDist === rightDist && hand === 'left')) {
                result += 'L';
                leftPos = targetPos;
            } else {
                result += 'R';
                rightPos = targetPos;
            }
        }
    }
    
    return result;
}

// 예제 테스트
console.log(`예제 1: ${solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right")} `); // "LRLLLRLLRRL"
console.log(`예제 2: ${solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], "left")} `); // "LRLLRRLLLRR"
console.log(`예제 3: ${solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], "right")} `); // "LLRLLRLLRL"
