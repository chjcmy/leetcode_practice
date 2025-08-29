/**
 * 211. Design Add and Search Words Data Structure (Medium)
 * 
 * Design a data structure that supports adding new words and finding if a string matches any previously added string.
 * Implement the WordDictionary class:
 * - WordDictionary() Initializes the object.
 * - void addWord(word) Adds word to the data structure, it can be matched later.
 * - bool search(word) Returns true if there is any string in the data structure that matches word or false otherwise. word may contain dots '.' where dots can be matched with any letter.
 * 
 * Example:
 * Input: ["WordDictionary","addWord","addWord","addWord","search","search","search","search"]
 *        [[],["bad"],["dad"],["mad"],["pad"],["bad"],[".ad"],["b.."]]
 * Output: [null,null,null,null,false,true,true,true]
 */

/**
 * 211. 단어 추가 및 검색 데이터 구조 설계 (Medium)
 *
 * 새 단어를 추가하고 문자열이 이전에 추가된 문자열과 일치하는지 찾는 것을 지원하는 데이터 구조를 설계합니다.
 * WordDictionary 클래스를 구현합니다:
 * - WordDictionary() 객체를 초기화합니다.
 * - void addWord(word) 단어를 데이터 구조에 추가하며, 나중에 일치시킬 수 있습니다.
 * - bool search(word) 데이터 구조에 단어와 일치하는 문자열이 있으면 true를 반환하고 그렇지 않으면 false를 반환합니다. 단어에는 점 '.'이 포함될 수 있으며 점은 모든 문자와 일치할 수 있습니다.
 *
 * 예시:
 * 입력: ["WordDictionary","addWord","addWord","addWord","search","search","search","search"]
 *        [[],["bad"],["dad"],["mad"],["pad"],["bad"],[".ad"],["b.."]]
 * 출력: [null,null,null,null,false,true,true,true]
 */

class WordDictionary {
    constructor() {
        // 여기에 구현하세요
    }

    addWord(word: string): void {
        // 여기에 구현하세요
    }

    search(word: string): boolean {
        // 여기에 구현하세요
        return false;
    }
}

// Test cases
const wordDictionary = new WordDictionary();
wordDictionary.addWord("bad");
wordDictionary.addWord("dad");
wordDictionary.addWord("mad");
console.log(wordDictionary.search("pad")); // Expected: false
console.log(wordDictionary.search("bad")); // Expected: true
console.log(wordDictionary.search(".ad")); // Expected: true
console.log(wordDictionary.search("b..")); // Expected: true