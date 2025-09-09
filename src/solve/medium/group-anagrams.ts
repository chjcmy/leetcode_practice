/**
 * 49. Group Anagrams (Medium)
 * 
 * Given an array of strings strs, group the anagrams together.
 * You can return the answer in any order.
 * 
 * Example:
 * Input: strs = ["eat","tea","tan","ate","nat","bat"]
 * Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
 */

/**
 * 49. 애너그램 그룹화 (Medium)
 *
 * 문자열 배열 strs가 주어지면 애너그램을 함께 그룹화합니다.
 * 답은 어떤 순서로든 반환할 수 있습니다.
 *
 * 예시:
 * 입력: strs = ["eat","tea","tan","ate","nat","bat"]
 * 출력: [["bat"],["nat","tan"],["ate","eat","tea"]]
 */

function groupAnagrams(strs: string[]): string[][] {
    // 여기에 구현하세요

    // 새로운 string[] 을 만든다
    const anagramMap: { [key: string]: string[] } = {};

    // new_strs 에 strs 크기만큼 for문을 통해 계산한다
        // str을 sort를 한다
    for (const str of strs) {
        const key = str.split('').sort().join();

        if(anagramMap[key]) {
            anagramMap[key].push(str);
        } else {
            anagramMap[key] = [str];
        }
    }

    // 문자열을 비교하여 같은 글자가 있다면 그 배열에 넣는다 
    return Object.values(anagramMap);
}

// Test cases
console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));
// Expected: [["bat"],["nat","tan"],["ate","eat","tea"]]