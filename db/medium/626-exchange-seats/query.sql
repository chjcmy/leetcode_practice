-- PostgreSQL Schema for the problem
DROP TABLE IF EXISTS Seat;

CREATE TABLE Seat (
    id INT PRIMARY KEY,
    student VARCHAR(255)
);

INSERT INTO Seat (id, student) VALUES
(1, 'Abbot'),
(2, 'Doris'),
(3, 'Emerson'),
(4, 'Green'),
(5, 'Jeames');

/*
626. Exchange Seats (Medium)

Table: Seat
+-------------+---------+
| Column Name | Type    |
+-------------+---------+
| id          | int     |
| student     | varchar |
+-------------+---------+
id is the primary key column for this table.
Each row of this table indicates the name and the ID of a student.
id is a continuous increment.

Write an SQL query to swap the seat for every two consecutive students. 
If the number of students is odd, the id of the last student is not swapped.
Return the result table ordered by id in ascending order.

---
한글 설명:
모든 두 명의 연속된 학생의 좌석을 바꾸는 SQL 쿼리를 작성하세요.
학생 수가 홀수인 경우 마지막 학생의 좌석은 바꾸지 않습니다.
id를 기준으로 오름차순으로 정렬된 결과 테이블을 반환하세요.
*/

-- Write your PostgreSQL query statement below
