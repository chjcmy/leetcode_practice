-- PostgreSQL Schema for the problem
DROP TABLE IF EXISTS Person;

CREATE TABLE Person (
    id INT PRIMARY KEY,
    email VARCHAR(255)
);

INSERT INTO Person (id, email) VALUES
(1, 'john@example.com'),
(2, 'bob@example.com'),
(3, 'john@example.com');

/*
196. Delete Duplicate Emails (Easy)

Table: Person
+-------------+---------+
| Column Name | Type    |
|-------------|---------|
| id          | int     |
| email       | varchar |
+-------------+---------+
id is the primary key column for this table.

Write a SQL query to delete all duplicate email entries in a table named Person, keeping only unique emails based on its smallest id.

---
한글 설명:
Person 테이블에서 중복된 이메일을 모두 삭제하는 SQL 쿼리를 작성하세요.
가장 작은 id를 가진 이메일만 남겨야 합니다.
*/

-- Write your PostgreSQL query statement below
