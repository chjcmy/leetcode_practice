"""
Baekjoon 6603: 로또
Tier: SILVER2
Category: 백트래킹
Link: https://www.acmicpc.net/problem/6603

LG Electronics Coding Test Prep
"""


def main():
    """Input processing and solution execution"""
    # 1. Input Loop (until '0')
    # while True:
    #     line = list(map(int, input().split()))
    #     if line[0] == 0: break
    #     k, S = line[0], line[1:]

    # TODO: Implement Combinations (Backtracking)
    # Goal: Pick 6 numbers from S and print them

    #     def dfs(start, depth):
    #         if depth == 6:
    #             print(*selected)
    #             return

    #         for i in range(start, k):
    #             selected.append(S[i])
    #             dfs(i + 1, depth + 1)
    #             selected.pop()

    #     selected = []
    #     dfs(0, 0)
    #     print() # Empty line between test cases


if __name__ == "__main__":
    main()
