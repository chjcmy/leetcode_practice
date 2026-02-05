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
def main():
    """Input processing and solution execution"""
    # 1. Input N, M
    # n, m = map(int, input().split())
    
    # TODO: Implement Backtracking (Recursion)
    # Goal: Print all sequences of length M from 1 to N
    
    # def backtrack(current_sequence):
    #     if len(current_sequence) == m:
    #         print(*current_sequence)
    #         return
    #     
    #     for i in range(1, n+1):
    #         if i not in current_sequence:
    #             backtrack(current_sequence + [i])
    
    # backtrack([])


if __name__ == "__main__":
    main()
