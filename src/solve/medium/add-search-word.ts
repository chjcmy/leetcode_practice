/**
 * 211. Design Add and Search Words Data Structure (Medium) - Duplicate check, creating different version
 * 79. Word Search (Medium) - Already exists, creating similar problem
 * 1268. Search Suggestions System (Medium)
 * 
 * You are given an array of strings products and a string searchWord.
 * Design a system that suggests at most three product names from products after each character of searchWord is typed. Suggested products should have common prefix with searchWord. If there are more than three products with a common prefix return the three lexicographically minimums products.
 * Return a list of lists of the suggested products after each character of searchWord is typed.
 * 
 * Example:
 * Input: products = ["mobile","mouse","moneypot","monitor","mousepad"], searchWord = "mouse"
 * Output: [["mobile","moneypot","monitor"],["mobile","moneypot","monitor"],["mouse","mousepad"],["mouse","mousepad"],["mouse","mousepad"]]
 */

/**
 * 211. 단어 추가 및 검색 데이터 구조 설계 (Medium) - 중복 확인, 다른 버전 생성
 * 79. 단어 검색 (Medium) - 이미 존재, 유사 문제 생성
 * 1268. 검색 제안 시스템 (Medium)
 *
 * 문자열 배열 products와 문자열 searchWord가 주어집니다.
 * searchWord의 각 문자를 입력한 후 products에서 최대 3개의 제품 이름을 제안하는 시스템을 설계합니다. 제안된 제품은 searchWord와 공통 접두사를 가져야 합니다. 공통 접두사를 가진 제품이 3개 이상인 경우 사전순으로 가장 작은 3개의 제품을 반환합니다.
 * searchWord의 각 문자를 입력한 후 제안된 제품 목록의 목록을 반환합니다.
 *
 * 예시:
 * 입력: products = ["mobile","mouse","moneypot","monitor","mousepad"], searchWord = "mouse"
 * 출력: [["mobile","moneypot","monitor"],["mobile","moneypot","monitor"],["mouse","mousepad"],["mouse","mousepad"],["mouse","mousepad"]]
 */

function suggestedProducts(products: string[], searchWord: string): string[][] {
    // 여기에 구현하세요
    return [];
}

// Test cases
console.log(suggestedProducts(["mobile","mouse","moneypot","monitor","mousepad"], "mouse")); 
// Expected: [["mobile","moneypot","monitor"],["mobile","moneypot","monitor"],["mouse","mousepad"],["mouse","mousepad"],["mouse","mousepad"]]
console.log(suggestedProducts(["havana"], "havana")); 
// Expected: [["havana"],["havana"],["havana"],["havana"],["havana"],["havana"]]