/**
 * 344. Reverse String (Easy)
 * 
 * Write a function that reverses a string. The input string is given as an array of characters char[].
 * Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
 * 
 * Example 1:
 * Input: ["h","e","l","l","o"]
 * Output: ["o","l","l","e","h"]
 *
 * Example 2:
 * Input: ["H","a","n","n","a","h"]
 * Output: ["h","a","n","n","a","H"]
 */

/**
 * 344. 문자열 뒤집기 (Easy)
 *
 * 문자열을 뒤집는 함수를 작성하세요. 입력 문자열은 문자 배열 char[]로 주어집니다.
 * 다른 배열을 위한 추가 공간을 할당하지 않고, O(1) 추가 메모리로 입력 배열을 제자리에서 수정해야 합니다.
 *
 * 예시 1:
 * 입력: ["h","e","l","l","o"]
 * 출력: ["o","l","l","e","h"]
 *
 * 예시 2:
 * 입력: ["H","a","n","n","a","h"]
 * 출력: ["h","a","n","n","a","H"]
 */

function reverseString(s: string[]): void {
    for (let i = 0; i < s.length; i++) {
        let end = s.length - 1 - i;
        if (i >= end) break;
        let temp = s[i];
        s[i] = s[end];
        s[end] = temp;
    }
};

// Test cases
let s1 = ["h","e","l","l","o"];
reverseString(s1);
console.log(s1); // Expected: ["o","l","l","e","h"]

let s2 = ["H","a","n","n","a","h"];
reverseString(s2);
console.log(s2); // Expected: ["h","a","n","n","a","H"]