import sys

# sys.setrecursionlimit(10**6)
input = sys.stdin.readline

def solution():
    n = int(input())

    dp = [0] * (n+2)

    dp[1] = 1
    dp[2] = 3

    if n == 1:
        print(dp[1])
        return
    elif n == 2:
        print(dp[2])
        return

    for i in range(3, n + 1):
        dp[i] = (dp[i - 1] + (dp[i - 2] * 2)) % 10007

    print(dp[n])

if __name__ == "__main__":
    solution()
