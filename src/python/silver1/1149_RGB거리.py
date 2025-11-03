import sys

def solution():
    N = int(sys.stdin.readline())

    dp = [[0] * 3 for _ in range(N)]

    costs = list(map(int, sys.stdin.readline().split()))

    dp[0][0] = costs[0]
    dp[0][1] = costs[1]
    dp[0][2] = costs[2]

    for i in range(1, N):
        costs = list(map(int, sys.stdin.readline().split()))
        
        dp[i][0] = costs[0] + min(dp[i-1][1], dp[i-1][2])
        
        dp[i][1] = costs[1] + min(dp[i-1][0], dp[i-1][2])

        dp[i][2] = costs[2] + min(dp[i-1][0], dp[i-1][1])
    

    return min(dp[N-1])


if __name__ == "__main__":
    result = solution()
    print(result)