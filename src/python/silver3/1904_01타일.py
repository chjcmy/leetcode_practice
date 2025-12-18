import sys

def solution():
    try:
        input_data = sys.stdin.readline()
        if not input_data:
            return
        n = int(input_data)
    except ValueError:
        return

    if n == 1:
        print(1)
        return
    elif n == 2:
        print(2)
        return

    prev2 = 1
    prev1 = 2

    for i in range(3, n + 1):
        curr = (prev2 + prev1) % 15746
        prev2 = prev1
        prev1 = curr

    print(prev1)

if __name__ == "__main__":
    solution()
