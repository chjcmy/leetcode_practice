import sys

# sys.setrecursionlimit(10**6)
input = sys.stdin.readline

def solution():
    try:
        line = input().strip()
        if not line: return
        tc = int(line)
        
        # P(N) 수열 미리 구하기 (N은 최대 100)
        # 1, 1, 1, 2, 2, 3, 4, 5, 7, 9 ...
        # 규칙: P[i] = P[i-2] + P[i-3]
        dp = [0] * 101
        dp[1] = 1
        dp[2] = 1
        dp[3] = 1
        
        for i in range(4, 101):
            dp[i] = dp[i-2] + dp[i-3]
            
        for _ in range(tc):
            n = int(input().strip())
            print(dp[n])
            
    except ValueError:
        pass


if __name__ == "__main__":
    solution()
