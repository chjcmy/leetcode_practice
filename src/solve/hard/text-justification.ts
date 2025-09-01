/**
 * 68. Text Justification (Hard)
 * 
 * Given an array of strings words and a width maxWidth, format the text such that each line has exactly maxWidth characters and is fully (left and right) justified.
 * You should pack your words in a greedy approach; that is, pack as many words as you can in each line. Pad extra spaces ' ' when necessary so that each line has exactly maxWidth characters.
 * Extra spaces between words should be distributed as evenly as possible. If the number of spaces on a line does not divide evenly between words, the empty slots on the left will be assigned more spaces than the slots on the right.
 * For the last line of text, it should be left-justified, and no extra space is inserted between words.
 * 
 * Example:
 * Input: words = ["This", "is", "an", "example", "of", "text", "justification."], maxWidth = 16
 * Output: ["This    is    an","example  of text","justification.  "]
 */

/**
 * 68. 텍스트 정렬 (Hard)
 *
 * 문자열 배열 words와 너비 maxWidth가 주어지면, 각 줄이 정확히 maxWidth 문자를 갖고 완전히 (왼쪽 및 오른쪽) 정렬되도록 텍스트 서식을 지정합니다.
 * 탐욕적인 접근 방식으로 단어를 묶어야 합니다. 즉, 각 줄에 가능한 한 많은 단어를 묶습니다. 각 줄이 정확히 maxWidth 문자를 갖도록 필요한 경우 추가 공백 ' '을 채웁니다.
 * 단어 사이의 추가 공백은 가능한 한 고르게 배분되어야 합니다. 한 줄의 공백 수가 단어 사이에 고르게 나누어지지 않으면 왼쪽의 빈 슬롯에 오른쪽 슬롯보다 더 많은 공백이 할당됩니다.
 * 텍스트의 마지막 줄은 왼쪽 정렬되어야 하며 단어 사이에 추가 공백이 삽입되지 않습니다.
 *
 * 예시:
 * 입력: words = ["This", "is", "an", "example", "of", "text", "justification."], maxWidth = 16
 * 출력: ["This    is    an","example  of text","justification.  "]
 */

function fullJustify(words: string[], maxWidth: number): string[] {
    // 여기에 구현하세요
    return [];
}

// Test cases
console.log(fullJustify(["This", "is", "an", "example", "of", "text", "justification."], 16));
// Expected: ["This    is    an","example  of text","justification.  "]
console.log(fullJustify(["What","must","be","acknowledgment","shall","be"], 16));
// Expected: ["What   must   be","acknowledgment  ","shall be        "]