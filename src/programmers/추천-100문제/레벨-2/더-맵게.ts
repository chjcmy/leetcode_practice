/*
 * 프로그래머스 - 더 맵게
 * https://school.programmers.co.kr/learn/courses/30/lessons/42626
 * Level 2
 */

/*
  문제 설명:
  매운 것을 좋아하는 Leo는 모든 음식의 스코빌 지수를 K 이상으로 만들고 싶어 합니다. 
  모든 음식의 스코빌 지수를 K 이상으로 만들기 위해 Leo는 스코빌 지수가 가장 낮은 두 개의 음식을 아래와 같은 특별한 방법으로 섞어 새로운 음식을 만듭니다.

  섞은 음식의 스코빌 지수 = 가장 맵지 않은 음식의 스코빌 지수 + (두 번째로 맵지 않은 음식의 스코빌 지수 * 2)

  Leo는 모든 음식의 스코빌 지수가 K 이상이 될 때까지 반복하여 섞습니다. 
  이때, 섞는 횟수의 최솟값을 구해야 합니다.

  제한 사항:
  - scoville의 길이는 2 이상 1,000,000 이하입니다.
  - K는 0 이상 1,000,000,000 이하입니다.
  - scoville의 원소는 각각 0 이상 1,000,000 이하입니다.
  - 모든 음식의 스코빌 지수를 K 이상으로 만들 수 없는 경우에는 -1을 반환합니다.
*/

/*
  English Description:
  Leo wants to make all food items have a Scoville index of K or higher. He mixes the two least spicy foods to create a new one, with its Scoville index calculated as: (least spicy) + (second least spicy * 2). This process repeats until all foods meet the target K. The goal is to return the minimum number of mixes needed, or -1 if impossible.
*/
function solution(scoville: number[], K: number): number {
    const minHeap = new MinHeap();
    
   
    for (const score of scoville) {
        minHeap.push(score);
    }
    
    let mixCount = 0;
    
    while (minHeap.size() > 1 && minHeap.peek() < K) {
        const first = minHeap.pop();   
        const second = minHeap.pop();  
        
        // 새로운 음식의 스코빌 지수 계산
        const newScoville = first + (second * 2);
        minHeap.push(newScoville);
        
        mixCount++;
    }

    return minHeap.peek() >= K ? mixCount : -1;
}

class MinHeap {
    private heap: number[] = [];
    
    push(value: number): void {
        this.heap.push(value);
        this.heapifyUp(this.heap.length - 1);
    }
    
    pop(): number {
        if (this.heap.length === 0) return -1;
        if (this.heap.length === 1) return this.heap.pop()!;
        
        const min = this.heap[0];
        this.heap[0] = this.heap.pop()!;
        this.heapifyDown(0);
        return min;
    }
    
    peek(): number {
        return this.heap.length > 0 ? this.heap[0] : -1;
    }
    
    size(): number {
        return this.heap.length;
    }
    
    private heapifyUp(index: number): void {
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[parentIndex] <= this.heap[index]) break;
            
            [this.heap[parentIndex], this.heap[index]] = 
            [this.heap[index], this.heap[parentIndex]];
            index = parentIndex;
        }
    }
    
    private heapifyDown(index: number): void {
        while (true) {
            let smallest = index;
            const leftChild = 2 * index + 1;
            const rightChild = 2 * index + 2;
            
            if (leftChild < this.heap.length && 
                this.heap[leftChild] < this.heap[smallest]) {
                smallest = leftChild;
            }
            
            if (rightChild < this.heap.length && 
                this.heap[rightChild] < this.heap[smallest]) {
                smallest = rightChild;
            }
            
            if (smallest === index) break;
            
            [this.heap[index], this.heap[smallest]] = 
            [this.heap[smallest], this.heap[index]];
            index = smallest;
        }
    }
}


// 예제 테스트
console.log(`예제 1: ${solution([1, 2, 3, 9, 10, 12], 7)} `); // 2
