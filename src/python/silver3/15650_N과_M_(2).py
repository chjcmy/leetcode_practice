import sys

# sys.setrecursionlimit(10**6)
input = sys.stdin.readline

def solution():
    try:
        # 입력 파싱 (괄호 추가)
        line = input().split()
        if not line: return
        N, M = map(int, line)

        # visited 배열은 start 인덱스를 사용하므로 필요 없음
        s = []

        def dfs(start):
            if len(s) == M:
                print(" ".join(map(str, s)))
                return
            
            # 대소문자 수정 (n -> N)
            for i in range(start, N + 1):
                s.append(i)
                
                # 다음 재귀는 i + 1부터 시작 (중복 방지, 오름차순)
                dfs(i + 1)
                
                # pop()은 인덱스가 아닌 마지막 요소를 제거 (수정: s.pop(i) -> s.pop())
                s.pop()

        # 1부터 시작
        dfs(1)

    except Exception:
        pass

if __name__ == "__main__":
    solution()
