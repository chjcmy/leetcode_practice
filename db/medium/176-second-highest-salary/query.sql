-- PostgreSQL Schema for the problem
DROP TABLE IF EXISTS Employee;

CREATE TABLE Employee (
    id INT PRIMARY KEY,
    salary INT
);

INSERT INTO Employee (id, salary) VALUES
(1, 100),
(2, 200),
(3, 300);

/*
176. Second Highest Salary (Medium)

Table: Employee
+-------------+------+ 
| Column Name | Type |
+-------------+------+
| id          | int  |
| salary      | int  |
+-------------+------+
id is the primary key column for this table.
Each row of this table contains information about the salary of an employee.

Write an SQL query to report the second highest salary from the Employee table. 
If there is no second highest salary, the query should report null.

---
한글 설명:
Employee 테이블에서 두 번째로 높은 급여를 찾는 SQL 쿼리를 작성하세요.
만약 두 번째로 높은 급여가 없다면, 쿼리는 null을 보고해야 합니다.
*/

-- Write your PostgreSQL query statement below
