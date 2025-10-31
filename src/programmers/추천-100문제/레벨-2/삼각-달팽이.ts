/*
 * 프로그래머스 - 삼각 달팽이
 * https://school.programmers.co.kr/learn/courses/30/lessons/68645
 * Level 2
 */

function solution(n: number): number[] {

    const triangle: number[][] = [];
    
    for (let i = 0; i < n; i++) {
        triangle.push(new Array(i + 1).fill(0));
    }

    const directions = [
        [1, 0], 
        [0, 1],  
        [-1, -1] 
    ];
    
    let x = 0, y = 0;
    let direction = 0; 
    let num = 1;
    

    for (let round = 0; round < n; round++) {
        for (let step = 0; step < n - round; step++) {
            triangle[x][y] = num++;

            if (step < n - round - 1) {
                x += directions[direction][0];
                y += directions[direction][1];
            }
        }

        direction = (direction + 1) % 3;

        if (round < n - 1) {
            x += directions[direction][0];
            y += directions[direction][1];
        }
    }

    const result: number[] = [];

    for (let i = 0; i < n; i++) {
        for (let j = 0; j <= i; j++) {
            result.push(triangle[i][j]);
        }
    }
    
    return result;
}


// 예제 테스트
console.log(`예제 1: ${solution(4)}`); // [1,2,9,3,10,8,4,5,6,7]
console.log(`예제 2: ${solution(5)}`); // [1,2,12,3,13,11,4,14,15,10,5,6,7,8,9]
console.log(`예제 3: ${solution(6)}`); // [1,2,15,3,16,14,4,17,21,13,5,18,19,20,12,6,7,8,9,10,11]
