def solution(n, w, num):
    answer = 0
    
    row = (num - 1) // w
    col = (num - 1) % w
    
    if row % 2 == 1:
        col = w - 1 - col

    max_height = (n - 1) // w + 1
    
    for r in range(row, max_height):
        if r % 2 == 0:
            box_layer = r * w + col + 1
        else:
            box_layer = r * w + (w - 1 - col) + 1
            
        if box_layer <= n:
            answer += 1
            
    return answer
