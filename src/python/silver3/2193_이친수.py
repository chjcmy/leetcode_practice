import sys

input = sys.stdin.readline

def solution():
    try:
        line = input().strip()
        if not line: return
        n = int(line)

        dp = [0] * (n + 1)

        dp[1] = 1
        if n >= 2:
            dp[2] = 1
        
        for i in range(3, n + 1):
            dp[i] = dp[i - 1] + dp[i - 2]
        
        print(dp[n])

    except ValueError:
        pass

if __name__ == "__main__":
    solution()