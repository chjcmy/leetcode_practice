/**
 * Edit Distance (Levenshtein Distance)
 * 
 * 문제: 두 문자열을 같게 만들기 위한 최소 편집 거리를 구하라
 * 가능한 연산: 삽입(insert), 삭제(delete), 교체(replace)
 * 
 * 예시:
 * Input: word1 = "horse", word2 = "ros"
 * Output: 3
 * Explanation: 
 * horse -> rorse (replace 'h' with 'r')
 * rorse -> rose (remove 'r')
 * rose -> ros (remove 'e')
 * 
 * Input: word1 = "intention", word2 = "execution"
 * Output: 5
 * Explanation:
 * intention -> inention (remove 't')
 * inention -> enention (replace 'i' with 'e')
 * enention -> exention (replace 'n' with 'x')
 * exention -> exection (replace 'n' with 'c')
 * exection -> execution (insert 'u')
 */

function minDistance(word1: string, word2: string): number {
    // 여기에 코드를 작성하세요
    // Hint: 2D DP 테이블 사용
    // dp[i][j] = word1의 처음 i글자와 word2의 처음 j글자 간의 편집 거리
    
    return 0;
}

// 테스트 케이스
const testCases = [
    { word1: "horse", word2: "ros" },
    { word1: "intention", word2: "execution" },
    { word1: "", word2: "abc" },
    { word1: "abc", word2: "" },
    { word1: "same", word2: "same" },
    { word1: "kitten", word2: "sitting" }
];

testCases.forEach((test, index) => {
    const result = minDistance(test.word1, test.word2);
    console.log(`Test Case ${index + 1}:`);
    console.log(`Word1: "${test.word1}"`);
    console.log(`Word2: "${test.word2}"`);
    console.log(`Min Distance: ${result}`);
    console.log('---');
});

export { minDistance };