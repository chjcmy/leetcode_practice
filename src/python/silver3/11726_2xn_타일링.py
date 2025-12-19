import sys

# 11726번: 2xn 타일링
# 점화식: dp[n] = dp[n-1] + dp[n-2]
# "감(Intuition)"으로 찾는 초기값:
# n=1 -> 1가지 (|)
# n=2 -> 2가지 (||, =)

def solution():
    try:
        line = sys.stdin.readline()
        if not line: return
        n = int(line)

        if n == 1:
            print(1)
            return
        
        dp = [0] * (n + 1)
        dp[1] = 1 # n=1일 때 경우의 수
        dp[2] = 2 # n=2일 때 경우의 수

        for i in range(3, n + 1):
            dp[i] = (dp[i-1] + dp[i-2]) % 10007
        
        print(dp[n])

    except ValueError:
        pass

if __name__ == "__main__":
    solution()
