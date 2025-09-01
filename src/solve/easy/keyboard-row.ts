/**
 * 500. Keyboard Row (Easy)
 * 
 * Given an array of strings words, return the words that can be typed using letters of the alphabet on only one row of American keyboard like the image below.
 * In the American keyboard:
 * - the first row consists of the characters "qwertyuiop",
 * - the second row consists of the characters "asdfghjkl", and
 * - the third row consists of the characters "zxcvbnm".
 * 
 * Example:
 * Input: words = ["Hello","Alaska","Dad","Peace"]
 * Output: ["Alaska","Dad"]
 */

/**
 * 500. 키보드 행 (Easy)
 *
 * 문자열 배열 words가 주어지면, 아래 이미지와 같이 미국 키보드의 한 행에 있는 알파벳 글자만 사용하여 입력할 수 있는 단어를 반환합니다.
 * 미국 키보드에서:
 * - 첫 번째 행은 "qwertyuiop" 문자로 구성됩니다.
 * - 두 번째 행은 "asdfghjkl" 문자로 구성됩니다.
 * - 세 번째 행은 "zxcvbnm" 문자로 구성됩니다.
 *
 * 예시:
 * 입력: words = ["Hello","Alaska","Dad","Peace"]
 * 출력: ["Alaska","Dad"]
 */

function findWords(words: string[]): string[] {
    // 여기에 구현하세요
    return [];
}

// Test cases
console.log(findWords(["Hello","Alaska","Dad","Peace"])); // Expected: ["Alaska","Dad"]
console.log(findWords(["omk"])); // Expected: []
console.log(findWords(["adsdf","sfd"])); // Expected: ["adsdf","sfd"]