"""
Baekjoon 1236: 성 지키기
Tier: BRONZE1
Category: 구현
Link: https://www.acmicpc.net/problem/1236

LG Electronics Coding Test Prep
"""


def main():
    """Input processing and solution execution"""

    n, m = list(map(int, input().split()))

    board = []
    for _ in range(n):
        board.append(input())

    n_cnt = 0
    m_cnt = 0

    for x_list in board:
        if "X" not in x_list:
            n_cnt += 1

    for y_list in zip(*board):
        if "X" not in y_list:
            m_cnt += 1

    print(max(n_cnt, m_cnt))


if __name__ == "__main__":
    main()
