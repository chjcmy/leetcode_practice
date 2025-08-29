/**
 * 1547. Minimum Cost to Cut a Stick (Hard)
 * 
 * Given a wooden stick of length n units. The stick is labelled from 0 to n on the left and right ends respectively.
 * Given an integer array cuts where cuts[i] denotes a position you should perform a cut at.
 * You should perform the cuts in order, you can change the order of the cuts as you wish.
 * The cost of one cut is the length of the stick to be cut, the total cost is the sum of costs of all cuts.
 * When you cut a stick, it will be split into two smaller sticks (i.e. the sum of their lengths is the length of the stick before the cut). Please find the minimum total cost of the cuts.
 * 
 * Example:
 * Input: n = 7, cuts = [1,3,4,5]
 * Output: 16
 * Explanation: Using cuts order = [1, 3, 4, 5] as in the input leads to the following scenario:
 * The first cut is done to a rod of length 7 so the cost is 7. The second cut is done to a rod of length 6 (i.e. the second part of the previous cut), the third is done to a rod of length 4 and the last cut is to a rod of length 3. The total cost is 7 + 6 + 4 + 3 = 20.
 * Rearranging the cuts to be [3, 5, 1, 4] for example will lead to a scenario with total cost = 16 (as shown in the example).
 */

/**
 * 1547. 막대기를 자르는 최소 비용 (Hard)
 *
 * 길이 n 단위의 나무 막대가 주어집니다. 막대는 왼쪽과 오른쪽 끝에 각각 0에서 n까지 레이블이 지정되어 있습니다.
 * cuts[i]가 잘라야 할 위치를 나타내는 정수 배열 cuts가 주어집니다.
 * 순서대로 잘라야 하며, 원하는 대로 자르는 순서를 변경할 수 있습니다.
 * 한 번 자르는 비용은 잘리는 막대의 길이이며, 총 비용은 모든 자르기 비용의 합입니다.
 * 막대를 자르면 두 개의 더 작은 막대로 나뉩니다(즉, 길이의 합은 자르기 전 막대의 길이임). 자르기의 최소 총 비용을 찾으십시오.
 *
 * 예시:
 * 입력: n = 7, cuts = [1,3,4,5]
 * 출력: 16
 * 설명: 입력과 같이 [1, 3, 4, 5] 순서로 자르면 다음과 같은 시나리오가 발생합니다:
 * 첫 번째 자르기는 길이 7의 막대에 대해 수행되므로 비용은 7입니다. 두 번째 자르기는 길이 6의 막대(즉, 이전 자르기의 두 번째 부분)에 대해 수행되고, 세 번째는 길이 4의 막대에, 마지막 자르기는 길이 3의 막대에 대해 수행됩니다. 총 비용은 7 + 6 + 4 + 3 = 20입니다.
 * 예를 들어 자르기를 [3, 5, 1, 4]로 재정렬하면 총 비용이 16인 시나리오가 됩니다(예시 참조).
 */

function minCost(n: number, cuts: number[]): number {
    // 여기에 구현하세요
    return 0;
}

// Test cases
console.log(minCost(7, [1,3,4,5])); // Expected: 16
console.log(minCost(9, [5,6,1,4,2])); // Expected: 22