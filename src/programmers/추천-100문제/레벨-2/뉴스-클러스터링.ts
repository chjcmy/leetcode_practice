/*
 * 프로그래머스 - 뉴스 클러스터링
 * https://school.programmers.co.kr/learn/courses/30/lessons/17677
 * Level 2
 */

/*
  문제 설명:
  두 문자열의 자카드 유사도를 계산하는 문제입니다.

  자카드 유사도 (Jaccard Similarity): 두 집합 A, B 사이의 자카드 유사도 J(A, B)는 두 집합의 교집합 크기를 두 집합의 합집합 크기로 나눈 값으로 정의됩니다.
  J(A, B) = (A ∩ B의 크기) / (A ∪ B의 크기)

  입력으로 주어진 두 문자열(str1, str2)을 각각 두 글자씩 끊어 다중집합(multiset)을 만듭니다.
  - 이때, 영문자로 된 글자 쌍만 유효하며, 공백, 숫자, 특수문자가 포함된 글자 쌍은 버립니다.
  - 대소문자는 구분하지 않습니다 (예: 'Fr'과 'fr'은 같은 것으로 간주).

  생성된 두 다중집합의 교집합과 합집합을 구하여 자카드 유사도를 계산합니다.
  - 다중집합이므로, 중복된 원소는 각각의 개수를 고려하여 교집합과 합집합을 계산합니다.

  만약 두 집합 모두 공집합일 경우 (즉, 교집합과 합집합의 크기가 모두 0인 경우), 자카드 유사도는 1로 정의됩니다.

  계산된 자카드 유사도 값에 65536을 곱한 후 소수점 아래를 버리고 정수 부분만 return 합니다.

  제한사항:
  - str1, str2는 각각 1 이상 50 이하의 문자열입니다.
*/

/*
  English Description:
  The problem requires calculating the Jaccard similarity between two input strings. This involves creating multisets of two-character pairs from each string, considering only alphabetic pairs and ignoring case. The Jaccard similarity is then computed as the size of the intersection divided by the size of the union of these multisets. Finally, the resulting float value is multiplied by 65536 and truncated to an integer.
*/

function solution(str1: string, str2: string): number {
    const getMultiSet = (str: string): Map<string, number> => {
        const map = new Map<string, number>();
        for (let i = 0; i < str.length - 1; i++) {
            const pair = str.slice(i, i + 2).toLowerCase();
            if (/^[a-z]{2}$/.test(pair)) {  // 영문자 2개만!
                map.set(pair, (map.get(pair) || 0) + 1);
            }
        }
        return map;
    };


    const map1 = getMultiSet(str1);
    const map2 = getMultiSet(str2);
    
    let intersection = 0, union = 0;
    const allKeys = new Set([...map1.keys(), ...map2.keys()]);
    
    for (const key of allKeys) {
        const count1 = map1.get(key) || 0;
        const count2 = map2.get(key) || 0;
        intersection += Math.min(count1, count2); 
        union += Math.max(count1, count2);  
    }
    
    return union === 0 ? 65536 : Math.floor(intersection / union * 65536);
}

// 예제 테스트
console.log(`예제 1: ${solution("FRANCE", "french")} `); // 16384
console.log(`예제 2: ${solution("handshake", "shake hands")} `); // 65536
console.log(`예제 3: ${solution("aa1+aa2", "AAAA12")} `); // 43690
console.log(`예제 4: ${solution("E=M*C^2", "e=m*c^2")} `); // 65536
