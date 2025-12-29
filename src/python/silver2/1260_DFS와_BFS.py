from collections import deque
import sys

# input을 sys.stdin.readline으로 덮어씁니다.
input = sys.stdin.readline

def solution():

    def __dfs(n):
        visited_dfs[n] = True
        print(n, end=" ")

        for i in graph[n]:
            if not visited_dfs[i]:
                __dfs(i)

    def __bfs(n):
        q = deque([n])
        visited_bfs[n] = True

        while q:
            v = q.popleft()
            print(v, end = ' ')

            for i in graph[v]:
                if not visited_bfs[i]:
                    visited_bfs[i] = True
                    q.append(i)

    # N: 정점의 개수, M: 간선의 개수, V: 탐색을 시작할 정점의 번호
    line1 = input().split()
    if not line1: return # handle empty input case if necessary
    N, M, V = map(int, line1)

    graph = [[] for _ in range(N+1)]

    for _ in range(M):
        line = input().split()
        if not line: break
        a, b = map(int, line)
        graph[a].append(b)
        graph[b].append(a)

    # 방문 할 수 있는 정점이 여러 개인 경우에는 정점 번호가 작은 것을 먼저 방문
    for i in range(1, N+1):
        graph[i].sort()

    # DFS 수행
    visited_dfs = [False] * (N + 1)
    __dfs(V)
    print() # 줄바꿈

    # BFS 수행
    visited_bfs = [False] * (N + 1)
    __bfs(V)
    print()

# 4 5 1
# 1 2
# 1 3
# 1 4
# 2 4
# 3 4

if __name__ == "__main__":
    solution()
