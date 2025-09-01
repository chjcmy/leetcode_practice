/**
 * 664. Strange Printer (Hard)
 * 
 * There is a strange printer with the following two special properties:
 * - The printer can only print a sequence of the same character each time.
 * - At each turn, the printer can print new characters starting from and ending at any place and will cover the original existing characters.
 * 
 * Given a string s, return the minimum number of turns the printer needed to print it.
 * 
 * Example:
 * Input: s = "aaabbb"
 * Output: 2
 * Explanation: Print "aaa" first and then print "bbb".
 * 
 * Example:
 * Input: s = "aba"
 * Output: 2
 * Explanation: Print "aaa" first and then print "b" from the second place of the string, which will cover the existing character 'a'.
 */

/**
 * 664. 이상한 프린터 (Hard)
 *
 * 다음과 같은 두 가지 특별한 속성을 가진 이상한 프린터가 있습니다:
 * - 프린터는 매번 동일한 문자의 시퀀스만 인쇄할 수 있습니다.
 * - 각 차례에 프린터는 어느 곳에서나 시작하고 끝나는 새 문자를 인쇄할 수 있으며 원래 기존 문자를 덮어씁니다.
 *
 * 문자열 s가 주어지면 프린터가 인쇄하는 데 필요한 최소 회전 수를 반환합니다.
 *
 * 예시:
 * 입력: s = "aaabbb"
 * 출력: 2
 * 설명: 먼저 "aaa"를 인쇄한 다음 "bbb"를 인쇄합니다.
 *
 * 예시:
 * 입력: s = "aba"
 * 출력: 2
 * 설명: 먼저 "aaa"를 인쇄한 다음 문자열의 두 번째 위치에서 "b"를 인쇄하면 기존 문자 'a'가 덮어쓰여집니다.
 */

function strangePrinter(s: string): number {
    // 여기에 구현하세요
    return 0;
}

// Test cases
console.log(strangePrinter("aaabbb")); // Expected: 2
console.log(strangePrinter("aba")); // Expected: 2