"""
Baekjoon 1157: 단어 공부
Tier: BRONZE1
Category: 구현
Link: https://www.acmicpc.net/problem/1157

LG Electronics Coding Test Prep
"""


def solve(word):
    word = str.upper(word)
    unique_chars = list(set(word))

    cnt_list = []

    for x in unique_chars:
        cnt = word.count(x)
        cnt_list.append(cnt)

    if cnt_list.count(max(cnt_list)) > 1:
        return "?"
    else:
        max_index = cnt_list.index(max(cnt_list))
        return unique_chars[max_index]


def main():
    """Input processing and solution execution"""
    import sys

    input_data = sys.stdin.read().strip()
    if input_data:
        print(solve(input_data))


if __name__ == "__main__":
    main()
