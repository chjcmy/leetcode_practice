/**
 * 139. Word Break (Medium)
 * 
 * Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.
 * Note that the same word in the dictionary may be reused multiple times in the segmentation.
 * 
 * Example:
 * Input: s = "leetcode", wordDict = ["leet","code"]
 * Output: true
 * Explanation: Return true because "leetcode" can be segmented as "leet code".
 */

function wordBreak(s: string, wordDict: string[]): boolean {
    // 여기에 구현하세요
    return false;
}

// Test cases
console.log(wordBreak("leetcode", ["leet","code"])); // Expected: true
console.log(wordBreak("applepenapple", ["apple","pen"])); // Expected: true
console.log(wordBreak("catsandog", ["cats","dog","sand","and","cat"])); // Expected: false