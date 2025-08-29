/**
 * 135. Candy (Hard)
 * 
 * There are n children standing in a line. Each child is assigned a rating value given in the integer array ratings.
 * You are giving candies to these children subjected to the following requirements:
 * - Each child must receive at least one candy.
 * - Children with a higher rating get more candies than their neighbors.
 * Return the minimum number of candies you need to have to distribute the candies to the children.
 * 
 * Example:
 * Input: ratings = [1,0,2]
 * Output: 5
 * Explanation: You can allocate to the first, second and third child with 2, 1, 2 candies respectively.
 * 
 * Example:
 * Input: ratings = [1,2,2]
 * Output: 4
 * Explanation: You can allocate to the first, second and third child with 1, 2, 1 candies respectively.
 * The third child gets 1 candy because it satisfies the above two conditions.
 */

/**
 * 135. 사탕 (Hard)
 *
 * n명의 아이들이 한 줄로 서 있습니다. 각 아이에게는 정수 배열 ratings에 주어진 평가 값이 할당됩니다.
 * 다음 요구 사항에 따라 이 아이들에게 사탕을 주고 있습니다:
 * - 각 아이는 적어도 하나의 사탕을 받아야 합니다.
 * - 평가가 높은 아이는 이웃보다 더 많은 사탕을 받습니다.
 * 아이들에게 사탕을 분배하는 데 필요한 최소 사탕 수를 반환합니다.
 *
 * 예시:
 * 입력: ratings = [1,0,2]
 * 출력: 5
 * 설명: 첫 번째, 두 번째, 세 번째 아이에게 각각 2, 1, 2개의 사탕을 할당할 수 있습니다.
 *
 * 예시:
 * 입력: ratings = [1,2,2]
 * 출력: 4
 * 설명: 첫 번째, 두 번째, 세 번째 아이에게 각각 1, 2, 1개의 사탕을 할당할 수 있습니다.
 * 세 번째 아이는 위 두 조건을 만족하므로 1개의 사탕을 받습니다.
 */

function candy(ratings: number[]): number {
    // 여기에 구현하세요
    return 0;
}

// Test cases
console.log(candy([1,0,2])); // Expected: 5
console.log(candy([1,2,2])); // Expected: 4