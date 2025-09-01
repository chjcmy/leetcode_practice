/**
 * 269. Alien Dictionary (Hard)
 * 
 * There is a new alien language that uses the English alphabet. However, the order among the letters is unknown to you.
 * You are given a list of strings words from the alien language's dictionary, where the strings in words are sorted lexicographically by the rules of this new language.
 * Return a string of the unique letters in the new alien language sorted in lexicographically increasing order by the new language's rules. If there is no solution, return "". If there are multiple solutions, return any of them.
 * 
 * Example:
 * Input: words = ["wrt","wrf","er","ett","rftt"]
 * Output: "wertf"
 */

/**
 * 269. 외계인 사전 (Hard)
 *
 * 영문 알파벳을 사용하는 새로운 외계 언어가 있습니다. 그러나 문자 간의 순서는 알 수 없습니다.
 * 외계 언어 사전의 단어 목록이 주어지며, 여기서 단어의 문자열은 이 새로운 언어의 규칙에 따라 사전순으로 정렬됩니다.
 * 새로운 외계 언어의 고유한 문자를 새로운 언어의 규칙에 따라 사전순으로 증가하는 순서로 정렬된 문자열을 반환합니다. 해가 없으면 ""를 반환합니다. 여러 해가 있는 경우 그중 하나를 반환합니다.
 *
 * 예시:
 * 입력: words = ["wrt","wrf","er","ett","rftt"]
 * 출력: "wertf"
 */

function alienOrder(words: string[]): string {
    // 여기에 구현하세요
    return "";
}

// Test cases
console.log(alienOrder(["wrt","wrf","er","ett","rftt"])); // Expected: "wertf"
console.log(alienOrder(["z","x"])); // Expected: "zx"