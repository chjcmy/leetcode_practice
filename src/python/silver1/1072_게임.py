import sys

def solution():
    X, Y = map(int, sys.stdin.readline().split())

    Z = Y * 100 // X

    if Z >= 99:
        return -1

    numerator = X * Z + X - 100 * Y
    denominator = 99 - Z

    if numerator % denominator == 0:
        return numerator // denominator
    else:
        return numerator // denominator + 1

if __name__ == "__main__":
    result = solution()
    print(result)
