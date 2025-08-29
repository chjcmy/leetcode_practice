/**
 * 472. Concatenated Words (Hard)
 * 
 * Given an array of strings words (without duplicates), return all the concatenated words in the given list of words.
 * A concatenated word is defined as a string that is comprised entirely of at least two shorter words in the given array.
 * 
 * Example:
 * Input: words = ["cat","cats","catsdogcats","dog","dogcatsdog","hippopotamuses","rat","ratcatdogcat"]
 * Output: ["catsdogcats","dogcatsdog","ratcatdogcat"]
 * Explanation: "catsdogcats" can be concatenated by "cats", "dog" and "cats"; 
 * "dogcatsdog" can be concatenated by "dog", "cats" and "dog"; 
 * "ratcatdogcat" can be concatenated by "rat", "cat", "dog" and "cat".
 * 
 * Example:
 * Input: words = ["cat","dog","catdog"]
 * Output: ["catdog"]
 */

/**
 * 472. 연결된 단어 (Hard)
 *
 * 중복 없는 문자열 배열 words가 주어지면 주어진 단어 목록에 있는 모든 연결된 단어를 반환합니다.
 * 연결된 단어는 주어진 배열에 있는 두 개 이상의 짧은 단어로 완전히 구성된 문자열로 정의됩니다.
 *
 * 예시:
 * 입력: words = ["cat","cats","catsdogcats","dog","dogcatsdog","hippopotamuses","rat","ratcatdogcat"]
 * 출력: ["catsdogcats","dogcatsdog","ratcatdogcat"]
 * 설명: "catsdogcats"는 "cats", "dog", "cats"로 연결될 수 있습니다.
 * "dogcatsdog"는 "dog", "cats", "dog"로 연결될 수 있습니다.
 * "ratcatdogcat"는 "rat", "cat", "dog", "cat"로 연결될 수 있습니다.
 *
 * 예시:
 * 입력: words = ["cat","dog","catdog"]
 * 출력: ["catdog"]
 */

function findAllConcatenatedWordsInADict(words: string[]): string[] {
    // 여기에 구현하세요
    return [];
}

// Test cases
console.log(findAllConcatenatedWordsInADict(["cat","cats","catsdogcats","dog","dogcatsdog","hippopotamuses","rat","ratcatdogcat"]));
// Expected: ["catsdogcats","dogcatsdog","ratcatdogcat"]
console.log(findAllConcatenatedWordsInADict(["cat","dog","catdog"])); 
// Expected: ["catdog"]