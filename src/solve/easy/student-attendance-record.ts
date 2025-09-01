/**
 * 551. Student Attendance Record I (Easy)
 * 
 * You are given a string s representing an attendance record for a student where each character signifies whether the student was absent, late, or present on that day. The record only contains the following three characters:
 * 'A': Absent.
 * 'L': Late.
 * 'P': Present.
 * The student is eligible for an attendance award if they meet both of the following criteria:
 * The student was absent ('A') for strictly fewer than 2 days total.
 * The student was never late ('L') for 3 or more consecutive days.
 * Return true if the student is eligible for an attendance award, or false otherwise.
 * 
 * Example:
 * Input: s = "PPALLP"
 * Output: true
 */

/**
 * 551. 학생 출결 기록 I (Easy)
 *
 * 학생의 출결 기록을 나타내는 문자열 s가 주어지며, 각 문자는 학생이 해당 날짜에 결석, 지각 또는 출석했는지를 나타냅니다. 기록에는 다음 세 문자만 포함됩니다:
 * 'A': 결석.
 * 'L': 지각.
 * 'P': 출석.
 * 학생은 다음 두 가지 기준을 모두 충족하면 출석상을 받을 수 있습니다:
 * 학생의 총 결석('A') 일수가 2일 미만입니다.
 * 학생이 3일 이상 연속으로 지각('L')한 적이 없습니다.
 * 학생이 출석상을 받을 자격이 있으면 true를, 그렇지 않으면 false를 반환합니다.
 *
 * 예시:
 * 입력: s = "PPALLP"
 * 출력: true
 */

function checkRecord(s: string): boolean {
    // 여기에 구현하세요
    return false;
}

// Test cases
console.log(checkRecord("PPALLP")); // Expected: true
console.log(checkRecord("PPALLL")); // Expected: false