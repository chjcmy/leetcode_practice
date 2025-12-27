import sys
from collections import deque

def solution():
    input = sys.stdin.readline
    try:
        line = input().split()
        if not line: return
        N, M = map(int, line)
    except ValueError: return

    maze = []
    for _ in range(N):
        maze.append(list(map(int, list(input().strip()))))
        
    dx = [-1, 1, 0, 0]
    dy = 0, 0, -1, 1
    
    queue = deque([(0, 0)])
    
    # BFS
    while queue:
        x, y = queue.popleft()
        
        if x == N - 1 and y == M - 1:
            print(maze[x][y])
            break
            
        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]
            
            if 0 <= nx < N and 0 <= ny < M:
                if maze[nx][ny] == 1:
                    maze[nx][ny] = maze[x][y] + 1
                    queue.append((nx, ny))

if __name__ == "__main__":
    solution()
