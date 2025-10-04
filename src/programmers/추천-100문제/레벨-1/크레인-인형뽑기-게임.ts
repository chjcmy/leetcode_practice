/*
 * 프로그래머스 - 크레인 인형뽑기 게임
 * https://school.programmers.co.kr/learn/courses/30/lessons/64061
 * Level 1
 */

/*
  문제 설명:
  게임 화면의 격자 칸에는 0이 아닌 정수로 인형의 종류가 표시되어 있으며, 0은 빈칸을 의미합니다.
  크레인을 움직여서 멈춘 위치(열)에서 가장 위에 있는 인형을 집어 올릴 수 있습니다.
  집어 올린 인형은 바구니에 쌓이게 됩니다.
  만약 바구니에 새로 들어온 인형이 바구니의 가장 위에 있는 인형과 같은 종류라면, 두 인형은 모두 사라집니다.
  사라진 인형의 개수를 세어 return 하도록 solution 함수를 작성해주세요.

  제한 사항:
  - board 배열은 2차원 배열로, 크기는 "5 x 5" 이상 "30 x 30" 이하입니다.
  - board의 각 칸에는 0 이상 100 이하인 정수가 담겨있으며, 0은 빈칸을 나타냅니다.
  - moves 배열은 크레인을 작동시킨 위치(열)가 담겨 있습니다.
*/

function solution(board: number[][], moves: number[]): number {

  
    const stack: number[] = [];


    let popped = 0;
    
    for (const move of moves) {
        const col = move - 1;
        
        for (let row = 0; row < board.length; row++) {
            if (board[row][col] !== 0) {
                const doll = board[row][col];
                board[row][col] = 0;
                
                if (stack.length > 0 && stack[stack.length - 1] === doll) {
                    stack.pop();
                    popped += 2;
                } else {
                    stack.push(doll);
                }
                
                break;
            }
        }
    }
    
    return popped;
}

// 예제 테스트
console.log(`예제 1: ${solution([[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]], [1,5,3,5,1,2,1,4])} `); // 4
