import sys
from collections import deque

# 재귀 깊이 제한 설정
sys.setrecursionlimit(10**6)

def dfs(graph, v, visited):
    visited[v] = True
    print(v, end=' ')
    
    # 작은 번호의 노드부터 방문
    for i in sorted(graph[v]):
        if not visited[i]:
            dfs(graph, i, visited)

def bfs(graph, start, visited):
    queue = deque([start])
    visited[start] = True
    
    while queue:
        v = queue.popleft()
        print(v, end=' ')
        
        # 작은 번호의 노드부터 방문
        for i in sorted(graph[v]):
            if not visited[i]:
                queue.append(i)
                visited[i] = True

def solution():
    # 입력 받기
    # N: 정점의 개수, M: 간선의 개수, V: 탐색을 시작할 정점의 번호
    input = sys.stdin.read
    data = input().split()
    
    if not data:
        return

    idx = 0
    N = int(data[idx])
    idx += 1
    M = int(data[idx])
    idx += 1
    V = int(data[idx])
    idx += 1
    
    # 그래프 초기화 (1번 노드부터 N번 노드까지)
    graph = [[] for _ in range(N + 1)]
    
    for _ in range(M):
        u = int(data[idx])
        idx += 1
        v = int(data[idx])
        idx += 1
        graph[u].append(v)
        graph[v].append(u)
    
    # DFS 실행
    visited_dfs = [False] * (N + 1)
    dfs(graph, V, visited_dfs)
    print() # 줄바꿈
    
    # BFS 실행
    visited_bfs = [False] * (N + 1)
    bfs(graph, V, visited_bfs)
    print()

if __name__ == "__main__":
    solution()
