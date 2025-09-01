/**
 * 208. Implement Trie (Prefix Tree) (Medium)
 * 
 * A trie (pronounced as "try") or prefix tree is a tree data structure used to efficiently store and retrieve keys in a dataset of strings. There are various applications of this data structure, such as autocomplete and spellchecker.
 * Implement the Trie class:
 * - Trie() Initializes the trie object.
 * - void insert(String word) Inserts the string word into the trie.
 * - boolean search(String word) Returns true if the string word is in the trie (i.e., was inserted before), and false otherwise.
 * - boolean startsWith(String prefix) Returns true if there is a previously inserted string word that has the prefix prefix, and false otherwise.
 * 
 * Example:
 * Input: ["Trie", "insert", "search", "search", "startsWith", "insert", "search"]
 *        [[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]]
 * Output: [null, null, true, false, true, null, true]
 */

/**
 * 208. 트라이 구현 (접두사 트리) (Medium)
 *
 * 트라이("try"로 발음) 또는 접두사 트리는 문자열 데이터 세트에서 키를 효율적으로 저장하고 검색하는 데 사용되는 트리 데이터 구조입니다. 자동 완성 및 맞춤법 검사기와 같은 이 데이터 구조의 다양한 응용 프로그램이 있습니다.
 * Trie 클래스를 구현합니다:
 * - Trie() 트라이 객체를 초기화합니다.
 * - void insert(String word) 문자열 word를 트라이에 삽입합니다.
 * - boolean search(String word) 문자열 word가 트라이에 있으면(즉, 이전에 삽입된 경우) true를 반환하고 그렇지 않으면 false를 반환합니다.
 * - boolean startsWith(String prefix) 접두사 prefix를 가진 이전에 삽입된 문자열 word가 있으면 true를 반환하고 그렇지 않으면 false를 반환합니다.
 *
 * 예시:
 * 입력: ["Trie", "insert", "search", "search", "startsWith", "insert", "search"]
 *        [[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]]
 * 출력: [null, null, true, false, true, null, true]
 */

class Trie {
    constructor() {
        // 여기에 구현하세요
    }

    insert(word: string): void {
        // 여기에 구현하세요
    }

    search(word: string): boolean {
        // 여기에 구현하세요
        return false;
    }

    startsWith(prefix: string): boolean {
        // 여기에 구현하세요
        return false;
    }
}

// Test cases
const trie = new Trie();
trie.insert("apple");
console.log(trie.search("apple")); // Expected: true
console.log(trie.search("app")); // Expected: false
console.log(trie.startsWith("app")); // Expected: true