import sys

def solution():
    zero = [0] * 41
    one = [0] * 41

    zero[0], one[1] = 1, 1

    for i in range(2, 41):
        zero[i] = zero[i - 1] + zero[i - 2]
        one[i] = one[i - 1] + one[i -2]

    T = int(sys.stdin.readline())
    results = []

    for _ in range(T):
        N = int(sys.stdin.readline())
        results.append(f"{zero[N]} {one[N]}")

    return results

if __name__ == "__main__":
    results = solution()

    for result in results:
        print(result)
