-- PostgreSQL Schema for the problem
DROP TABLE IF EXISTS Employee;
DROP TABLE IF EXISTS Department;

CREATE TABLE Employee (
    id INT PRIMARY KEY,
    name VARCHAR(255),
    salary INT,
    departmentId INT
);

CREATE TABLE Department (
    id INT PRIMARY KEY,
    name VARCHAR(255)
);

INSERT INTO Employee (id, name, salary, departmentId) VALUES
(1, 'Joe', 70000, 1),
(2, 'Jim', 90000, 1),
(3, 'Henry', 80000, 2),
(4, 'Sam', 60000, 2),
(5, 'Max', 90000, 1);

INSERT INTO Department (id, name) VALUES
(1, 'IT'),
(2, 'Sales');

/*
184. Department Highest Salary (Medium)

Table: Employee
... (description)

Table: Department
... (description)

Write an SQL query to find employees who have the highest salary in each of the departments.

---
한글 설명:
각 부서에서 가장 높은 급여를 받는 직원을 찾는 SQL 쿼리를 작성하세요.
*/

-- Write your PostgreSQL query statement below
