/**
 * 853. Car Fleet (Medium)
 * 
 * There are n cars going to the same destination along a one-lane road. The destination is target miles away.
 * You are given two integer arrays position and speed, both of length n, where position[i] is the position of the ith car and speed[i] is the speed of the ith car (in miles per hour).
 * A car can never pass another car, but it can catch up and drive bumper to bumper at the same speed as the slower car.
 * A car fleet is some non-empty set of cars driving at the same position and same speed. Note that a single car is also a car fleet.
 * If a car catches up to a car fleet right at the destination point, it will still be considered as one car fleet.
 * Return the number of car fleets that will arrive at the destination.
 * 
 * Example:
 * Input: target = 12, position = [10,8,0,5,3], speed = [2,4,1,1,3]
 * Output: 3
 */

/**
 * 853. 자동차 행렬 (Medium)
 *
 * 1차선 도로를 따라 같은 목적지로 가는 n대의 자동차가 있습니다. 목적지는 target 마일 떨어져 있습니다.
 * 길이가 n인 두 개의 정수 배열 position과 speed가 주어지며, 여기서 position[i]는 i번째 자동차의 위치이고 speed[i]는 i번째 자동차의 속도(시간당 마일)입니다.
 * 자동차는 다른 자동차를 절대 추월할 수 없지만, 따라잡아서 더 느린 자동차와 같은 속도로 범퍼를 맞대고 운전할 수 있습니다.
 * 자동차 행렬은 같은 위치와 같은 속도로 운전하는 비어 있지 않은 자동차 집합입니다. 단일 자동차도 자동차 행렬입니다.
 * 자동차가 목적지 지점에서 바로 자동차 행렬을 따라잡으면 여전히 하나의 자동차 행렬로 간주됩니다.
 * 목적지에 도착할 자동차 행렬의 수를 반환합니다.
 *
 * 예시:
 * 입력: target = 12, position = [10,8,0,5,3], speed = [2,4,1,1,3]
 * 출력: 3
 */

function carFleet(target: number, position: number[], speed: number[]): number {
    // 여기에 구현하세요
    return 0;
}

// Test cases
console.log(carFleet(12, [10,8,0,5,3], [2,4,1,1,3])); // Expected: 3
console.log(carFleet(10, [3], [3])); // Expected: 1