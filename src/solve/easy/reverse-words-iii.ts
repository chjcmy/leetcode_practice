/**
 * 557. Reverse Words in a String III (Easy)
 *
 * Given a string s, reverse the order of characters in each word within a sentence
 * while still preserving whitespace and initial word order.
 *
 * Example 1:
 * Input: s = "Let's take LeetCode contest"
 * Output: "s'teL ekat edoCteeL tsetnoc"
 *
 * Example 2:
 * Input: s = "God Ding"
 * Output: "doG gniD"
 */

/**
 * 557. 문자열의 단어 뒤집기 III (Easy)
 *
 * 주어진 문장 s에서 각 단어의 문자 순서를 뒤집으세요.
 * 공백과 원래 단어의 순서는 그대로 유지해야 합니다.
 *
 * 예시 1:
 * 입력: s = "Let's take LeetCode contest"
 * 출력: "s'teL ekat edoCteeL tsetnoc"
 *
 * 예시 2:
 * 입력: s = "God Ding"
 * 출력: "doG gniD"
 */
function reverseWords(s: string): string {
    // 여기에 구현하세요

    const reverse_words: string[] = s.split(' ')

    for(let i = 0; i < reverse_words.length; i++) {
        reverse_words[i] = reverse_words[i].split('').reverse().join('');
    }

    return reverse_words.join(' ');
}

// Test cases
console.log(`Test 1: s = "Let's take LeetCode contest"`);
console.log(`Expected: "s'teL ekat edoCteeL tsetnoc", Output: ${reverseWords("Let's take LeetCode contest")}`);
console.log('---');

console.log(`Test 2: s = "God Ding"`);
console.log(`Expected: "doG gniD", Output: ${reverseWords("God Ding")}`);
console.log('---');
