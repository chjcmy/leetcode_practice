-- PostgreSQL Schema for the problem
DROP TABLE IF EXISTS Stadium;

CREATE TABLE Stadium (
    id INT PRIMARY KEY,
    visit_date DATE,
    people INT
);

INSERT INTO Stadium (id, visit_date, people) VALUES
(1, '2017-01-01', 10),
(2, '2017-01-02', 109),
(3, '2017-01-03', 150),
(4, '2017-01-04', 99),
(5, '2017-01-05', 145),
(6, '2017-01-06', 1455),
(7, '2017-01-07', 199),
(8, '2017-01-09', 188);

/*
601. Human Traffic of Stadium (Hard)

Table: Stadium
+---------------+---------+
| Column Name   | Type    |
|---------------|---------|
| id            | int     |
| visit_date    | date    |
| people        | int     |
+---------------+---------+
visit_date is the primary key for this table.
Each row of this table contains the visit date and visit id to the stadium with the number of people during the visit.
No two rows will have the same visit_date, and as the id increases, the visit_date increases.

Write an SQL query to display the records with three or more rows with consecutive id's, and the number of people is greater than or equal to 100 for each.
Return the result table ordered by visit_date in ascending order.

---
한글 설명:
연속된 3일 이상 id를 가지며, 각 날의 방문자 수가 100명 이상인 기록을 찾는 SQL 쿼리를 작성하세요.
결과 테이블은 visit_date를 기준으로 오름차순으로 정렬하세요.
*/

-- Write your PostgreSQL query statement below