import sys

# sys.setrecursionlimit(10**6)
input = sys.stdin.readline

def solution():
    try:
        # 입력 파싱
        line = input().split()
        if not line: return
        n, m = map(int, line)

        # visited 배열 초기화 (괄호 추가)
        visited = [False] * (n + 1)
        s = []

        def dfs():
            # 대소문자 수정 (M -> m)
            if len(s) == m:
                print(' '.join(map(str, s)))
                return

            # 대소문자 수정 (N -> n)
            for i in range(1, n + 1):
                if not visited[i]:
                    visited[i] = True
                    s.append(i)
                    dfs()
                    s.pop()
                    visited[i] = False
        
        # DFS 시작
        dfs()

    except Exception:
        pass

if __name__ == "__main__":
    solution()
