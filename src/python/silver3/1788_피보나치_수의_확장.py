import sys

def solution():
    n = int(sys.stdin.readline())

    abs_n = abs(n)

    dp = [0] * (abs_n + 1)

    if abs_n == 0:
        print(0)
        print(0)
        return

    dp[1] = 1

    # dp 리스트 안에 값을 넣는다
    for i in range(2, abs_n + 1):
        dp[i] = (dp[i - 1] + dp[i - 2]) % 1000000000
    # n이 마이너스고 짝수 일경우에 마이너스를 출력한다
    if n < 0 and abs_n % 2 == 0:
        print(-1)
    elif abs_n == 0:
        print(0)
    else:
        print(1)

    print(dp[abs_n])

    

if __name__ == "__main__":
    solution()
