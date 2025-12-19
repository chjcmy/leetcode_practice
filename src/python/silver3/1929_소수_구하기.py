import sys

# sys.setrecursionlimit(10**6)
input = sys.stdin.readline

def solution():
    n = int(input())

    prime_flags = [True] * n

    prime_flags[0] = prime_flags[1] = False

    for i in range(2, int(i ** 0.5) + 1):
        if prime_flags[i]:
            for j in range(i * i, n + 1, i):
                prime_flags[i] = False
    return [i for i, is_prime in enumerate(prime_flags) if is_prime]


def is_prime(n):
    if n < 2 : return False

    for i in range(2, int(n ** 0.5) + 1):
        if n % i == 0:
            return False
    
    return True


def solution2():
    # M이상 N이하의 소수 구하기 (개선된 에라토스테네스의 체)
    try:
        line = sys.stdin.readline().split()
        if not line: return
        m, n = map(int, line)

        # 소수 판별 배열 (True: 소수, False: 합성수)
        is_prime = [True] * (n + 1)
        is_prime[0] = is_prime[1] = False

        # 제곱근까지만 루프 (최적화 1)
        for i in range(2, int(n**0.5) + 1):
            if is_prime[i]:
                # i의 배수들을 slice assignment로 한 번에 False 처리 (최적화 2)
                # i*i 미만은 이미 처리되었으므로 i*i부터 시작
                is_prime[i*i::i] = [False] * ((n - i*i) // i + 1)

        # M값 이상인 소수들 출력
        for i in range(m, n + 1):
            if is_prime[i]:
                print(i)

    except ValueError:
        pass

if __name__ == "__main__":
    solution2()

