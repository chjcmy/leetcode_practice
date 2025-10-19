/*
 * 프로그래머스 - 다리를 지나는 트럭
 * https://school.programmers.co.kr/learn/courses/30/lessons/42583
 * Level 2
 */

/*
  문제 설명:
  트럭 여러 대가 강을 가로지르는 일차선 다리를 정해진 순서대로 건너려 합니다. 
  모든 트럭이 다리를 건너려면 최소 몇 초가 걸리는지 알아내야 합니다.

  다리에는 bridge_length 길이만큼의 트럭이 동시에 올라갈 수 있으며, 
  다리는 weight 이하의 무게만을 견딜 수 있습니다.
  단, 트럭은 1초에 1만큼 움직이며, 다리 길이가 bridge_length일 때 
  트럭이 다리에 완전히 진입하면 1초가 지납니다.

  bridge_length는 다리에 올라갈 수 있는 트럭 수, 
  weight는 다리가 견딜 수 있는 무게, 
  truck_weights는 트럭별 무게가 담긴 배열입니다.

  모든 트럭이 다리를 건너는 데 걸리는 최소 시간을 return 하도록 solution 함수를 작성해주세요.

  제한사항:
  - bridge_length는 1 이상 10,000 이하입니다.
  - weight는 1 이상 10,000 이하입니다.
  - truck_weights의 길이는 1 이상 10,000 이하입니다.
  - 모든 트럭의 무게는 1 이상 weight 이하입니다.
*/

/*
  English Description:
  This problem asks to calculate the minimum time for a series of trucks to cross a single-lane bridge. The bridge has a maximum capacity for a certain number of trucks (`bridge_length`) and a maximum weight it can bear (`weight`). Trucks must cross in a given order, and their individual weights are provided. The goal is to determine the shortest time, in seconds, for all trucks to successfully cross the bridge.
*/

function solution(
  bridge_length: number,
  weight: number,
  truck_weights: number[],
): number {
  let time = 0;
  let bridge: number[] = new Array(bridge_length).fill(0);
  let bridge_weight = 0;
  let truck_index = 0;

  while (truck_index < truck_weights.length || bridge_weight > 0) {
    time++;

    const exiting_truck = bridge.shift()!;
    bridge_weight -= exiting_truck;

    if (truck_index < truck_weights.length) {
      const next_truck = truck_weights[truck_index];
      if (bridge_weight + next_truck <= weight) {

        bridge.push(next_truck);
        bridge_weight += next_truck;
        truck_index++;
      } else {

        bridge.push(0);
      }
    } else {
      bridge.push(0);
    }
  }

  return time;
}

// 예제 테스트
console.log(`예제 1: ${solution(2, 10, [7, 4, 5, 6])} `); // 8
console.log(`예제 2: ${solution(100, 100, [10])} `); // 101
console.log(
  `예제 3: ${solution(100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10])} `,
); // 110
