import sys

# sys.setrecursionlimit(10**6)
input = sys.stdin.readline

def solution():
    try:
        # 입력 파싱 (괄호 추가)
        line = input().strip()
        if not line: return
        n = int(line)

        # 계단 점수 입력 (index 1부터 사용)
        stairs = [0] * (n + 1)
        for i in range(1, n + 1):
            stairs[i] = int(input().strip())

        # DP 테이블 초기화
        dp = [0] * (n + 1)

        if n == 1:
            print(stairs[1])
            return
        elif n == 2:
            print(stairs[1] + stairs[2])
            return
        
        # 초기값 설정
        dp[1] = stairs[1]
        dp[2] = stairs[1] + stairs[2]
        dp[3] = max(stairs[1] + stairs[3], stairs[2] + stairs[3])

        # 점화식 적용
        for i in range(4, n + 1):
            # 1. (i-3) -> (i-1) -> i : 연속된 세 칸 밟기 금지 조건 고려
            #    i-1번째 계단은 반드시 밟아야 하므로 stairs[i-1]을 더하고, 그 전은 i-3에서 와야 함
            case1 = dp[i - 3] + stairs[i - 1] + stairs[i]
            
            # 2. (i-2) -> i : 두 칸 점프
            case2 = dp[i - 2] + stairs[i]

            dp[i] = max(case1, case2)

        print(dp[n])

    except Exception:
        pass

if __name__ == "__main__":
    solution()