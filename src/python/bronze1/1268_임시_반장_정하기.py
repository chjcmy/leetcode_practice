"""
Baekjoon 1268: 임시 반장 정하기
Tier: BRONZE1
Category: 구현
Link: https://www.acmicpc.net/problem/1268

LG Electronics Coding Test Prep
"""


def main():
    """Input processing and solution execution"""
    # 1. Input N
    n = int(input())

    # 2. Input Class Data (N rows)
    data = []
    for _ in range(n):
        data.append(list(map(int, input().split())))

    # TODO: Implement "friend counting" logic here
    # Check rows (students) and columns (years)

    friend_counts = [0] * n

    for i in range(n):
        for j in range(n):
            if i == j:
                continue

            for k in range(5):
                if data[i][k] == data[j][k]:
                    friend_counts[i] += 1
                    break

    print(friend_counts.index(max(friend_counts)) + 1)


if __name__ == "__main__":
    main()
