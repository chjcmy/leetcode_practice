-- PostgreSQL Schema for the problem
DROP TABLE IF EXISTS Logs;

CREATE TABLE Logs (
    id INT PRIMARY KEY,
    num INT
);

INSERT INTO Logs (id, num) VALUES
(1, 1),
(2, 1),
(3, 1),
(4, 2),
(5, 1),
(6, 2),
(7, 2);

/*
180. Consecutive Numbers (Medium)

Table: Logs
+-------------+---------+
| Column Name | Type    |
|-------------|---------|
| id          | int     |
| num         | varchar |
+-------------+---------+
id is the primary key for this table.

Write an SQL query to find all numbers that appear at least three times consecutively.

---
한글 설명:
적어도 세 번 연속으로 나타나는 모든 숫자를 찾는 SQL 쿼리를 작성하세요.
*/

-- Write your PostgreSQL query statement below
