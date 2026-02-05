"""
Baekjoon 1292: 쉽게 푸는 문제
Tier: SILVER5
Category: 구현
Link: https://www.acmicpc.net/problem/1292

LG Electronics Coding Test Prep
"""


def main():
    """Input processing and solution execution"""
    # 1. Input A, B
    a, b = map(int, input().split())

    # TODO: Implement sequence logic
    # Sequence: 1, 2, 2, 3, 3, 3, 4, 4, 4, 4, ...

    arr = []

    for i in range(1, 100):
        for _ in range(i):
            arr.append(i)

    result = 0
    for i in range(a - 1, b):
        result += arr[i]

    print(result)


if __name__ == "__main__":
    main()
