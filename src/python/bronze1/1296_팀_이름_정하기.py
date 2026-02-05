"""
Baekjoon 1296: 팀 이름 정하기
Tier: BRONZE1
Category: 구현
Link: https://www.acmicpc.net/problem/1296

LG Electronics Coding Test Prep
"""


def main():
    """Input processing and solution execution"""
    yeondu_name = input()
    n = int(input())

    max_prob = -1
    best_team_name = ""

    # 팀 이름들을 먼저 리스트에 받고, 사전 순으로 정렬해두면 편합니다
    teams = sorted([input() for _ in range(n)]) # 정렬!

    for team in teams:
        S = yeondu_name + team # 두 이름을 합치고
        
        # 합친 문자열에서 개수 세기
        L = S.count('L')
        O = S.count('O')
        V = S.count('V')
        E = S.count('E')
        
        # 공식 적용
        prob = ((L+O)*(L+V)*(L+E)*(O+V)*(O+E)*(V+E)) % 100
        
        if prob > max_prob:
            max_prob = prob
            best_team_name = team

    print(best_team_name)


if __name__ == "__main__":
    main()
