/**
 * 489. Robot Room Cleaner (Hard)
 * 
 * You are controlling a robot that is located somewhere in a room. The room is modeled as an m x n binary grid where 0 represents a wall and 1 represents an empty slot.
 * The robot starts at an unknown position in the room that is guaranteed to be empty, and you do not have access to the grid, but you can move the robot using the given API Robot.
 * You are tasked to use the robot to clean the entire room (i.e., clean every empty cell in the room).
 * The robot with the four given APIs can move forward, turn left or turn right. Each turn is 90 degrees.
 * When the robot tries to move into a wall cell, its bumper sensor detects the obstacle, and it stays on the current cell.
 * Design an algorithm to clean the entire room using the following limited set of APIs:
 * 
 * interface Robot {
 *     // returns true if next cell is open and robot moves into the cell.
 *     // returns false if next cell is obstacle and robot stays on the current cell.
 *     move(): boolean;
 * 
 *     // Robot will stay on the same cell after calling turnLeft/turnRight.
 *     // Each turn will be 90 degrees.
 *     turnLeft(): void;
 *     turnRight(): void;
 * 
 *     // Clean the current cell.
 *     clean(): void;
 * }
 * 
 * Example:
 * Input: room = [[1,1,1,1,1,0,1,1],[1,1,1,1,1,0,1,1],[1,0,1,1,1,1,1,1],[0,0,0,1,0,0,0,0],[1,1,1,1,1,1,1,1]], row = 1, col = 3
 * Output: Robot cleaned all rooms.
 */

/**
 * 489. 로봇 방 청소기 (Hard)
 *
 * 당신은 방 어딘가에 있는 로봇을 조종하고 있습니다. 방은 0이 벽을 나타내고 1이 빈 슬롯을 나타내는 m x n 이진 그리드로 모델링됩니다.
 * 로봇은 비어 있음이 보장된 방의 알 수 없는 위치에서 시작하며, 그리드에 액세스할 수는 없지만 주어진 API Robot을 사용하여 로봇을 움직일 수 있습니다.
 * 로봇을 사용하여 전체 방을 청소하는 임무가 주어집니다(즉, 방의 모든 빈 셀을 청소).
 * 네 가지 주어진 API를 가진 로봇은 앞으로 이동하거나, 왼쪽으로 회전하거나, 오른쪽으로 회전할 수 있습니다. 각 회전은 90도입니다.
 * 로봇이 벽 셀로 이동하려고 하면 범퍼 센서가 장애물을 감지하고 현재 셀에 머물러 있습니다.
 * 다음의 제한된 API 세트를 사용하여 전체 방을 청소하는 알고리즘을 설계하세요:
 *
 * interface Robot {
 *     // 다음 셀이 열려 있고 로봇이 셀로 이동하면 true를 반환합니다.
 *     // 다음 셀이 장애물이고 로봇이 현재 셀에 머물러 있으면 false를 반환합니다.
 *     move(): boolean;
 *
 *     // turnLeft/turnRight를 호출한 후 로봇은 동일한 셀에 머물러 있습니다.
 *     // 각 회전은 90도입니다.
 *     turnLeft(): void;
 *     turnRight(): void;
 *
 *     // 현재 셀을 청소합니다.
 *     clean(): void;
 * }
 *
 * 예시:
 * 입력: room = [[1,1,1,1,1,0,1,1],[1,1,1,1,1,0,1,1],[1,0,1,1,1,1,1,1],[0,0,0,1,0,0,0,0],[1,1,1,1,1,1,1,1]], row = 1, col = 3
 * 출력: 로봇이 모든 방을 청소했습니다.
 */

interface Robot {
    move(): boolean;
    turnLeft(): void;
    turnRight(): void;
    clean(): void;
}

function cleanRoom(robot: Robot): void {
    // 여기에 구현하세요
}

// Test cases
// Note: This problem requires a Robot interface implementation to test
// The actual testing would be done with a mock Robot object
console.log("Robot Room Cleaner - implementation ready for testing with Robot interface");