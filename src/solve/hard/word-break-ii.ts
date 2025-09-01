/**
 * 140. Word Break II (Hard)
 * 
 * Given a string s and a dictionary of strings wordDict, add spaces in s to construct a sentence where each word is a valid dictionary word. Return all such possible sentences in any order.
 * Note that the same word in the dictionary may be reused multiple times in the segmentation.
 * 
 * Example:
 * Input: s = "catsanddog", wordDict = ["cat","cats","and","sand","dog"]
 * Output: ["cats and dog","cat sand dog"]
 * 
 * Example:
 * Input: s = "pineapplepenapple", wordDict = ["apple","pen","applepen","pine","pineapple"]
 * Output: ["pine apple pen apple","pineapple pen apple","pine applepen apple"]
 */

/**
 * 140. 단어 나누기 II (Hard)
 *
 * 문자열 s와 문자열 사전 wordDict가 주어지면, s에 공백을 추가하여 각 단어가 유효한 사전 단어인 문장을 만듭니다. 가능한 모든 문장을 순서에 상관없이 반환합니다.
 * 사전의 동일한 단어는 분할에서 여러 번 재사용될 수 있습니다.
 *
 * 예시:
 * 입력: s = "catsanddog", wordDict = ["cat","cats","and","sand","dog"]
 * 출력: ["cats and dog","cat sand dog"]
 *
 * 예시:
 * 입력: s = "pineapplepenapple", wordDict = ["apple","pen","applepen","pine","pineapple"]
 * 출력: ["pine apple pen apple","pineapple pen apple","pine applepen apple"]
 */

function wordBreak(s: string, wordDict: string[]): string[] {
    // 여기에 구현하세요
    return [];
}

// Test cases
console.log(wordBreak("catsanddog", ["cat","cats","and","sand","dog"])); 
// Expected: ["cats and dog","cat sand dog"]
console.log(wordBreak("pineapplepenapple", ["apple","pen","applepen","pine","pineapple"])); 
// Expected: ["pine apple pen apple","pineapple pen apple","pine applepen apple"]