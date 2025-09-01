/**
 * 846. Hand of Straights (Medium)
 * 
 * Alice has some number of cards and she wants to rearrange the cards into groups so that each group is of size groupSize, and consists of groupSize consecutive cards.
 * Given an integer array hand where hand[i] is the value written on the ith card and an integer groupSize, return true if she can rearrange the cards, or false otherwise.
 * 
 * Example:
 * Input: hand = [1,2,3,6,2,3,4,7,8], groupSize = 3
 * Output: true
 * Explanation: Alice's hand can be rearranged as [1,2,3],[2,3,4],[6,7,8]
 */

/**
 * 846. 스트레이트 핸드 (Medium)
 *
 * 앨리스는 여러 장의 카드를 가지고 있으며, 각 그룹의 크기가 groupSize이고 groupSize개의 연속적인 카드로 구성되도록 카드를 그룹으로 재정렬하려고 합니다.
 * hand[i]가 i번째 카드에 적힌 값인 정수 배열 hand와 정수 groupSize가 주어지면, 그녀가 카드를 재정렬할 수 있으면 true를, 그렇지 않으면 false를 반환합니다.
 *
 * 예시:
 * 입력: hand = [1,2,3,6,2,3,4,7,8], groupSize = 3
 * 출력: true
 * 설명: 앨리스의 핸드는 [1,2,3],[2,3,4],[6,7,8]로 재정렬될 수 있습니다.
 */

function isNStraightHand(hand: number[], groupSize: number): boolean {
    // 여기에 구현하세요
    return false;
}

// Test cases
console.log(isNStraightHand([1,2,3,6,2,3,4,7,8], 3)); // Expected: true
console.log(isNStraightHand([1,2,3,4,5], 4)); // Expected: false