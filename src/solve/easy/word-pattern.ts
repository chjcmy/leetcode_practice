/**
 * 290. Word Pattern (Easy)
 * 
 * Given a pattern and a string s, find if s follows the same pattern.
 * Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.
 * 
 * Example:
 * Input: pattern = "abba", s = "dog cat cat dog"
 * Output: true
 */

/**
 * 290. 단어 패턴 (Easy)
 *
 * 패턴과 문자열 s가 주어지면 s가 동일한 패턴을 따르는지 확인합니다.
 * 여기서 따른다는 것은 패턴의 문자와 s의 비어 있지 않은 단어 사이에 전단사 함수가 있는 전체 일치를 의미합니다.
 *
 * 예시:
 * 입력: pattern = "abba", s = "dog cat cat dog"
 * 출력: true
 */

function wordPattern(pattern: string, s: string): boolean {
    // 여기에 구현하세요
    return false;
}

// Test cases
console.log(wordPattern("abba", "dog cat cat dog")); // Expected: true
console.log(wordPattern("abba", "dog cat cat fish")); // Expected: false
console.log(wordPattern("aaaa", "dog cat cat dog")); // Expected: false