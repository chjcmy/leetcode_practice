# 🚀 LeetCode 4일 알고리즘 마스터 플랜

WebStorm에서 체계적으로 알고리즘 문제를 풀 수 있는 환경입니다.

## 📅 4일 학습 계획

### 📋 Day 1: Array & Hash Map (기초)
**핵심 개념**: 배열 순회, 해시맵 활용, 기본 알고리즘 패턴
- `two-sum` - Hash Map으로 O(n) 최적화
- `contains-duplicate` - Set을 활용한 중복 검사  
- `valid-anagram` - 문자열 해시맵 처리
- `best-time` - 배열 순회와 최적화

### 🔍 Day 2: String & Binary Search  
**핵심 개념**: 문자열 처리, 이진 탐색, 스택 활용
- `valid-parentheses` - Stack 자료구조
- `binary-search` - 이진 탐색 기본
- `merge-lists` - 연결 리스트 병합
- `reverse-list` - 연결 리스트 뒤집기

### 🌳 Day 3: Tree & Recursion
**핵심 개념**: 트리 순회, 재귀, DFS/BFS
- `max-depth` - 트리 깊이 탐색 (DFS)
- `same-tree` - 트리 비교 (재귀)
- `invert-tree` - 트리 구조 변환
- `climbing-stairs` - 기본 DP 개념

### 💎 Day 4: Dynamic Programming
**핵심 개념**: 동적 프로그래밍, 최적화, 메모이제이션  
- `house-robber` - 1차원 DP
- `coin-change` - DP 최적화 문제
- 추가 DP 문제들 복습

## 📁 프로젝트 구조

```
src/solve/
├── two-sum.ts                    # Day 1
├── contains-duplicate.ts         # Day 1  
├── valid-anagram.ts             # Day 1
├── best-time-to-buy-and-sell-stock.ts # Day 1
├── valid-parentheses.ts         # Day 2
├── binary-search.ts             # Day 2
├── merge-two-sorted-lists.ts    # Day 2
├── reverse-linked-list.ts       # Day 2
├── maximum-depth-of-binary-tree.ts # Day 3
├── same-tree.ts                 # Day 3
├── invert-binary-tree.ts        # Day 3
├── climbing-stairs.ts           # Day 3
├── house-robber.ts              # Day 4
└── coin-change.ts               # Day 4
```

## 🎯 사용 방법

### 1. WebStorm에서 직접 실행
1. `src/solve/` 디렉토리의 파일을 열기
2. 함수 안에 알고리즘 코드 작성
3. WebStorm에서 바로 실행 (Ctrl+Shift+F10)
4. 콘솔에서 결과값만 확인

### 2. npm 스크립트로 실행

**Day 1: Array & Hash Map**
```bash
npm run two-sum
npm run contains-duplicate  
npm run valid-anagram
npm run best-time
```

**Day 2: String & Binary Search**
```bash
npm run valid-parentheses
npm run binary-search
npm run merge-lists
npm run reverse-list
```

**Day 3: Tree & Recursion**
```bash
npm run max-depth
npm run same-tree
npm run invert-tree
npm run climbing-stairs
```

**Day 4: Dynamic Programming**
```bash
npm run house-robber
npm run coin-change
```

## 🎓 학습 가이드

### Day 1 목표
- [ ] Hash Map의 O(1) 검색 이해하기
- [ ] Set을 활용한 중복 검사 마스터
- [ ] 문자열 처리 최적화 기법  
- [ ] 배열 순회 패턴 익히기

### Day 2 목표  
- [ ] Stack 자료구조 완전 이해
- [ ] 이진 탐색 알고리즘 구현
- [ ] 연결 리스트 포인터 조작
- [ ] 문자열 매칭 알고리즘

### Day 3 목표
- [ ] 트리 재귀 순회 마스터  
- [ ] DFS/BFS 차이점 이해
- [ ] 트리 구조 변환 기법
- [ ] 기본 DP 개념 습득

### Day 4 목표
- [ ] DP 점화식 설계 능력
- [ ] 메모이제이션 최적화
- [ ] 복잡한 DP 문제 해결
- [ ] 공간 복잡도 개선

## 💡 특징

- ✅ **간단한 출력**: 알고리즘 결과값만 콘솔에 표시
- ✅ **WebStorm 최적화**: 바로 실행 가능한 환경
- ✅ **체계적 학습**: 4일간 단계별 난이도 상승
- ✅ **핵심 패턴**: 실무에서 자주 쓰이는 알고리즘들
- ✅ **깔끔한 구조**: 함수만 작성하면 바로 테스트

## 🚀 시작하기

```bash
# 의존성 설치
npm install

# Day 1 시작
npm run two-sum
```

각 문제를 순서대로 풀면서 알고리즘 실력을 체계적으로 향상시켜보세요!

Happy Coding! 🎉# leetcode_practice
