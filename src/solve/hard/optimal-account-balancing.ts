/**
 * 465. Optimal Account Balancing (Hard)
 * 
 * A group of friends went on holiday and sometimes lent each other money. For example, Alice paid for Bill's lunch for $10. Then later Chris gave Alice $5 for a taxi ride. We can model each transaction as a tuple (x, y, z) which means person x gave person y $z. Assuming Alice=0, Bill=1, and Chris=2.
 * The transactions are [[0,1,10],[2,0,5]].
 * Given a list of transactions between a group of people, return the minimum number of transactions required to settle the debt.
 * 
 * Example:
 * Input: transactions = [[0,1,10],[2,0,5]]
 * Output: 2
 * Explanation:
 * Person #0 gave person #1 $10.
 * Person #2 gave person #0 $5.
 * Two transactions are needed. One way to settle the debt is:
 * Person #1 pays person #0 and person #2 $5 each.
 * 
 * Example:
 * Input: transactions = [[0,1,10],[1,0,1],[1,2,5],[2,0,5]]
 * Output: 1
 * Explanation:
 * Person #0 gave person #1 $10.
 * Person #1 gave person #0 $1.
 * Person #1 gave person #2 $5.
 * Person #2 gave person #0 $5.
 * Therefore, person #1 only need to give person #0 $4, and all debt is settled.
 */

/**
 * 465. 최적의 계정 잔액 맞추기 (Hard)
 *
 * 한 무리의 친구들이 휴가를 가서 서로 돈을 빌려주곤 했습니다. 예를 들어, 앨리스는 빌의 점심값으로 10달러를 냈습니다. 그 후 크리스는 앨리스에게 택시비로 5달러를 주었습니다. 각 거래를 (x, y, z) 튜플로 모델링할 수 있는데, 이는 x가 y에게 z달러를 주었다는 의미입니다. 앨리스=0, 빌=1, 크리스=2라고 가정합니다.
 * 거래 내역은 [[0,1,10],[2,0,5]]입니다.
 * 한 그룹의 사람들 간의 거래 목록이 주어졌을 때, 부채를 정산하는 데 필요한 최소 거래 횟수를 반환하세요.
 *
 * 예시:
 * 입력: transactions = [[0,1,10],[2,0,5]]
 * 출력: 2
 * 설명:
 * 0번 사람이 1번 사람에게 10달러를 주었습니다.
 * 2번 사람이 0번 사람에게 5달러를 주었습니다.
 * 두 번의 거래가 필요합니다. 부채를 정산하는 한 가지 방법은 다음과 같습니다:
 * 1번 사람이 0번 사람과 2번 사람에게 각각 5달러씩 지불합니다.
 *
 * 예시:
 * 입력: transactions = [[0,1,10],[1,0,1],[1,2,5],[2,0,5]]
 * 출력: 1
 * 설명:
 * 0번 사람이 1번 사람에게 10달러를 주었습니다.
 * 1번 사람이 0번 사람에게 1달러를 주었습니다.
 * 1번 사람이 2번 사람에게 5달러를 주었습니다.
 * 2번 사람이 0번 사람에게 5달러를 주었습니다.
 * 따라서 1번 사람은 0번 사람에게 4달러만 주면 모든 부채가 정산됩니다.
 */

function minTransfers(transactions: number[][]): number {
    // 여기에 구현하세요
    return 0;
}

// Test cases
console.log(minTransfers([[0,1,10],[2,0,5]])); // Expected: 2
console.log(minTransfers([[0,1,10],[1,0,1],[1,2,5],[2,0,5]])); // Expected: 1