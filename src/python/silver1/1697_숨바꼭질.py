import sys
from collections import deque

def solution():
    N, K = map(int, sys.stdin.readline().split())
    
    if N >= K:
        return N - K 
    
    visited = [0] * 100001
    queue = deque([N])
    
    while queue:
        x = queue.popleft()
        
        if x == K:
            return visited[x]
        
        for next_x in [x-1, x+1, x*2]:
            if 0 <= next_x <= 100000 and visited[next_x] == 0:
                visited[next_x] = visited[x] + 1
                queue.append(next_x)

if __name__ == "__main__":
    result = solution()
    print(result)
