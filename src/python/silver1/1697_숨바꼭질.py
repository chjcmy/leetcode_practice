import sys
from collections import deque

def solution():
    input = sys.stdin.readline
    try:
        line = input().split()
        if not line: return
        N, K = map(int, line)
    except ValueError: return
    
    if N >= K:
        print(N - K)
        return
        
    MAX_SIZE = 100001
    visited = [0] * MAX_SIZE
    
    queue = deque([N])
    
    while queue:
        x = queue.popleft()
        
        if x == K:
            print(visited[x])
            break
            
        for next_x in (x-1, x+1, x*2):
            if 0 <= next_x < MAX_SIZE and not visited[next_x]:
                visited[next_x] = visited[x] + 1
                queue.append(next_x)

if __name__ == "__main__":
    solution()
