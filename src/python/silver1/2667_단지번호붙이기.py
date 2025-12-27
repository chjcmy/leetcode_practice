import sys

# Recursion limit for DFS
sys.setrecursionlimit(10**6)

def dfs(x, y, n, grid, visited):
    visited[x][y] = True
    count = 1
    
    dx = [-1, 1, 0, 0]
    dy = [0, 0, -1, 1]
    
    for i in range(4):
        nx = x + dx[i]
        ny = y + dy[i]
        
        if 0 <= nx < n and 0 <= ny < n:
            if grid[nx][ny] == '1' and not visited[nx][ny]:
                count += dfs(nx, ny, n, grid, visited)
                
    return count

def solution():
    input = sys.stdin.readline
    try: 
        line = input().strip()
        if not line: return
        n = int(line)
    except ValueError: return
    
    grid = []
    for _ in range(n):
        grid.append(list(input().strip()))
        
    visited = [[False] * n for _ in range(n)]
    complex_sizes = []
    
    for i in range(n):
        for j in range(n):
            if grid[i][j] == '1' and not visited[i][j]:
                size = dfs(i, j, n, grid, visited)
                complex_sizes.append(size)
                
    complex_sizes.sort()
    
    print(len(complex_sizes))
    for size in complex_sizes:
        print(size)

if __name__ == "__main__":
    solution()
