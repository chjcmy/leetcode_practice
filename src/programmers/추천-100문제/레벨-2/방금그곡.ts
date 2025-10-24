/*
 * 프로그래머스 - 방금그곡
 * https://school.programmers.co.kr/learn/courses/30/lessons/17683
 * Level 2
 */

/*
  문제 설명:
  라디오를 자주 듣는 네오는 방금 나온 음악이 무엇인지 궁금할 때 '방금그곡' 서비스를 이용합니다. 
  이 서비스는 TV, 라디오 등에서 나온 음악의 제목 등의 정보를 제공합니다. 
  네오는 자신이 기억하는 멜로디를 가지고 이 서비스를 통해 음악을 찾습니다.

  '방금그곡' 서비스는 음악 제목, 재생 시작 및 끝 시각, 악보를 제공합니다.
  네오가 기억하는 멜로디와 악보에 사용되는 음은 C, C#, D, D#, E, F, F#, G, G#, A, A#, B 12개입니다.
  각 음은 1분에 1개씩 재생됩니다.
  음악은 항상 처음부터 재생됩니다. 음악 길이보다 재생 시간이 길면 음악은 끊김 없이 처음부터 반복 재생됩니다. 
  재생 시간이 짧으면 처음부터 재생 시간만큼만 재생됩니다.
  음악이 00:00(자정)을 넘겨서까지 재생되는 일은 없습니다.

  m: 네오가 기억한 멜로디를 담은 문자열 (1개 이상 1439개 이하의 음으로 구성).
  musicinfos: 방송된 곡의 정보를 담고 있는 배열 (최대 100개의 곡 정보). 
              각 곡 정보는 시작시각,끝난시각,음악제목,악보정보가 쉼표(,)로 구분된 문자열입니다.

  조건과 일치하는 음악 제목을 return 합니다.
  조건 일치 음악이 여러 개일 경우: 라디오에서 재생된 시간이 제일 긴 음악 제목을 return 합니다.
  재생 시간도 같을 경우: musicinfos 배열에 먼저 입력된 음악 제목을 return 합니다.
  조건 일치 음악이 없을 경우: "(None)"을 return 합니다.

  제한사항:
  - m은 1 이상 1439개 이하의 음으로 구성됩니다.
  - musicinfos는 1 이상 100개 이하의 곡 정보로 구성됩니다.
  - 각 곡 정보는 "HH:MM,HH:MM,음악제목,악보정보" 형식입니다.
*/

function solution(m: string, musicinfos: string[]): string {
    function convertMelody(melody: string): string {
        return melody
            .replace(/C#/g, 'c')
            .replace(/D#/g, 'd')
            .replace(/F#/g, 'f')
            .replace(/G#/g, 'g')
            .replace(/A#/g, 'a');
    }
    
    function timeToMinutes(time: string): number {
        const [hour, minute] = time.split(':').map(Number);
        return hour * 60 + minute;
    }


    const targetMelody = convertMelody(m);
    let bestSong = null;
    let maxPlayTime = -1;
    
    for (let i = 0; i < musicinfos.length; i++) {
        const [startTime, endTime, title, sheet] = musicinfos[i].split(',');
        
        const playTime = timeToMinutes(endTime) - timeToMinutes(startTime);
        const convertedSheet = convertMelody(sheet);

        let playedMelody = '';
        for (let j = 0; j < playTime; j++) {
            playedMelody += convertedSheet[j % convertedSheet.length];
        }

        if (playedMelody.includes(targetMelody)) {
            if (playTime > maxPlayTime) {
                maxPlayTime = playTime;
                bestSong = title;
            }
        }
    }
    
    return bestSong || "(None)";
}

// 예제 테스트
console.log(`예제 1: ${solution("ABCDEFG", ["12:00,12:14,HELLO,CDEFGAB", "13:00,13:05,WORLD,ABCDEF"])} `); // "HELLO"
console.log(`예제 2: ${solution("ABC", ["12:00,12:14,HELLO,CDEFGAB", "13:00,13:05,WORLD,ABCDEF"])} `); // "HELLO"
console.log(`예제 3: ${solution("ABC#", ["12:00,12:14,HELLO,CDEFGAB", "13:00,13:05,WORLD,ABCDEF"])} `); // "(None)"
