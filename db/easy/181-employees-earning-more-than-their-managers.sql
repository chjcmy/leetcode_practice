-- PostgreSQL Schema for the problem
DROP TABLE IF EXISTS Employee;

CREATE TABLE Employee (
    id INT PRIMARY KEY,
    name VARCHAR(255),
    salary INT,
    managerId INT
);

INSERT INTO Employee (id, name, salary, managerId) VALUES
(1, 'Joe', 70000, 3),
(2, 'Henry', 80000, 4),
(3, 'Sam', 60000, NULL),
(4, 'Max', 90000, NULL);

/*
181. Employees Earning More Than Their Managers (Easy)

Table: Employee
+-------------+---------+
| Column Name | Type    |
|-------------|---------|
| id          | int     |
| name        | varchar |
| salary      | int     |
| managerId   | int     |
+-------------+---------+
id is the primary key column for this table.
Each row of this table indicates the ID of an employee, their name, salary, and the ID of their manager.

Write an SQL query to find the employees who earn more than their managers.

---
한글 설명:
관리자보다 더 많은 돈을 버는 직원을 찾는 SQL 쿼리를 작성하세요.
*/

-- Write your PostgreSQL query statement below