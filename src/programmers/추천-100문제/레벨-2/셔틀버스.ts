/*
 * 프로그래머스 - 셔틀버스
 * https://school.programmers.co.kr/learn/courses/30/lessons/17678
 * Level 2
 */

function solution(n: number, t: number, m: number, timetable: string[]): string {
    const timeToMinutes = (time: string): number => {
        const [hour, minute] = time.split(':').map(Number);
        return hour * 60 + minute;
    };
    
    const minutesToTime = (minutes: number): string => {
        const hour = Math.floor(minutes / 60);
        const minute = minutes % 60;
        return `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
    };
  
    const crews: number[] = timetable
        .map(timeToMinutes)
        .sort((a, b) => a - b);
    
    let crewIndex = 0;

    for (let busNumber = 0; busNumber < n; busNumber++) {
        const busArrivalTime = 540 + busNumber * t;
        let passengers = 0;
        let lastCrewTime = 0;
        
        const startIndex = crewIndex; 
        
        while (crewIndex < crews.length && 
               crews[crewIndex] <= busArrivalTime && 
               passengers < m) {
            
            lastCrewTime = crews[crewIndex];
            crewIndex++;
            passengers++;
        }

        if (busNumber === n - 1) {
            if (passengers < m) {
                return minutesToTime(busArrivalTime);
            } else {
                return minutesToTime(lastCrewTime - 1);
            }
        }
    }
    
    return "09:00";
}



// 예제 테스트
console.log(solution(1, 1, 5, ["08:00", "08:01", "08:02", "08:03"])); // "09:00"
console.log(solution(2, 10, 2, ["09:10", "09:09", "08:00"])); // "09:09"
console.log(solution(2, 1, 2, ["09:00", "09:00", "09:00", "09:00"])); // "08:59"