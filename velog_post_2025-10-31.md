# 오늘 푼 알고리즘 문제 (2025-10-31)

안녕하세요! 오늘은 프로그래머스와 백준에서 세 개의 알고리즘 문제를 풀어보았습니다. TypeScript와 Python을 사용하여 해결했으며, 각 문제에 대한 풀이 과정을 공유합니다.

## 1. 프로그래머스 - 셔틀버스 (TypeScript)

### 문제 설명

카카오에서는 셔틀버스를 운행합니다. 셔틀버스는 `n`회, `t`분 간격으로, 최대 `m`명의 승객을 태울 수 있습니다. 셔틀은 09:00부터 운행을 시작합니다. 이 문제의 목표는, 주어진 크루들의 도착 시간표(`timetable`)를 바탕으로, '콘'이 셔틀을 타고 갈 수 있는 가장 늦은 도착 시간을 구하는 것입니다.

### 나의 풀이

```typescript
/*
 * 프로그래머스 - 셔틀버스
 * https://school.programmers.co.kr/learn/courses/30/lessons/17678
 * Level 2
 */

function solution(n: number, t: number, m: number, timetable: string[]): string {
    const timeToMinutes = (time: string): number => {
        const [hour, minute] = time.split(':').map(Number);
        return hour * 60 + minute;
    };
    
    const minutesToTime = (minutes: number): string => {
        const hour = Math.floor(minutes / 60);
        const minute = minutes % 60;
        return `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
    };
  
    const crews: number[] = timetable
        .map(timeToMinutes)
        .sort((a, b) => a - b);
    
    let crewIndex = 0;

    for (let busNumber = 0; busNumber < n; busNumber++) {
        const busArrivalTime = 540 + busNumber * t;
        let passengers = 0;
        let lastCrewTime = 0;
        
        const startIndex = crewIndex; 
        
        while (crewIndex < crews.length && 
               crews[crewIndex] <= busArrivalTime && 
               passengers < m) {
            
            lastCrewTime = crews[crewIndex];
            crewIndex++;
            passengers++;
        }

        if (busNumber === n - 1) {
            if (passengers < m) {
                return minutesToTime(busArrivalTime);
            } else {
                return minutesToTime(lastCrewTime - 1);
            }
        }
    }
    
    return "09:00";
}
```

### 풀이 설명

이 문제의 핵심은 시간을 분 단위로 변환하여 계산을 용이하게 하는 것입니다.
1.  모든 시간 관련 데이터를 분으로 변환합니다.
2.  크루들의 도착 시간을 오름차순으로 정렬합니다.
3.  각 셔틀버스에 대해 순서대로 시뮬레이션을 실행합니다.
    -   버스 도착 시간까지 도착한 크루들을 순서대로 버스에 태웁니다.
4.  마지막 셔틀버스의 경우, 두 가지 시나리오로 나뉩니다.
    -   **자리가 남는 경우:** 콘은 버스 도착 시간에 맞춰 도착하면 되므로, 버스 도착 시간이 정답이 됩니다.
    -   **자리가 꽉 차는 경우:** 콘은 마지막으로 탑승한 크루보다 1분 일찍 도착해야 자리를 확보할 수 있습니다. 따라서 마지막 탑승 크루의 도착 시간 - 1분이 정답이 됩니다.

## 2. 백준 1697 - 숨바꼭질 (Python)

### 문제 설명

수빈이는 점 N에 있고, 동생은 점 K에 있습니다. 수빈이는 걷거나 순간이동을 할 수 있습니다.
-   걸을 때: 1초 후에 X-1 또는 X+1로 이동할 수 있습니다.
-   순간이동: 1초 후에 2*X의 위치로 이동할 수 있습니다.
수빈이가 동생을 찾을 수 있는 가장 빠른 시간을 구하는 문제입니다.

### 나의 풀이

```python
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
            if 0 <= next_x <= 100001 and visited[next_x] == 0:
                visited[next_x] = visited[x] + 1
                queue.append(next_x)

if __name__ == "__main__":
    result = solution()
    print(result)
```

### 풀이 설명

이 문제는 너비 우선 탐색(BFS)을 사용하여 해결할 수 있습니다.
1.  수빈이의 시작 위치를 큐에 넣고 탐색을 시작합니다.
2.  `visited` 배열을 사용하여 각 위치까지 걸리는 최소 시간을 기록하고, 이미 방문한 위치는 다시 방문하지 않도록 하여 시간 낭비를 줄입니다.
3.  큐에서 위치를 하나씩 꺼내어, 다음 세 가지 경우(X-1, X+1, 2*X)에 대해 탐색을 계속 진행합니다.
4.  탐색 도중 동생의 위치 K에 도달하면, 해당 위치까지의 최소 시간(`visited[K]`)을 반환합니다.
5.  만약 시작 위치 N이 K보다 크거나 같다면, 뒤로 한 칸씩 이동하는 것이 항상 최단 시간이므로, `N-K`를 바로 반환하여 불필요한 탐색을 줄입니다.

## 3. 백준 1003 - 피보나치 함수 (Python)

### 문제 설명

`fibonacci(n)`을 호출했을 때, `fibonacci(0)`과 `fibonacci(1)`이 각각 몇 번 출력되는지 구하는 문제입니다.

### 나의 풀이

```python
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
```

### 풀이 설명

이 문제는 동적 프로그래밍(Dynamic Programming)을 사용하여 효율적으로 해결할 수 있습니다.
1.  `fibonacci(n)`에서 `fibonacci(0)`과 `fibonacci(1)`의 호출 횟수는 피보나치 수열의 점화식과 동일한 규칙을 따릅니다.
    -   `fibonacci(n)`의 0 호출 횟수 = `fibonacci(n-1)`의 0 호출 횟수 + `fibonacci(n-2)`의 0 호출 횟수
    -   `fibonacci(n)`의 1 호출 횟수 = `fibonacci(n-1)`의 1 호출 횟수 + `fibonacci(n-2)`의 1 호출 횟수
2.  `zero`와 `one` 배열을 만들어, 각 `n`에 대한 `fibonacci(0)`과 `fibonacci(1)`의 호출 횟수를 미리 계산하여 저장해 둡니다. (메모이제이션)
3.  `zero[0] = 1`, `one[1] = 1`로 초기값을 설정하고, 점화식을 사용하여 `n=40`까지의 값을 미리 계산합니다.
4.  입력받은 `N`에 대해, 미리 계산해 둔 `zero[N]`과 `one[N]` 값을 출력합니다.

## 마무리

오늘은 시뮬레이션, BFS, DP 등 다양한 유형의 문제를 풀어보며 문제 해결 능력을 기를 수 있었습니다. 꾸준히 연습해서 더 어려운 문제에도 도전해봐야겠습니다.
