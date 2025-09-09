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
(1, 'Joe', 85000, 1),
(2, 'Henry', 80000, 2),
(3, 'Sam', 60000, 2),
(4, 'Max', 90000, 1),
(5, 'Janet', 69000, 1),
(6, 'Randy', 85000, 1),
(7, 'Will', 70000, 1);

INSERT INTO Department (id, name) VALUES
(1, 'IT'),
(2, 'Sales');

/*
185. Department Top Three Salaries (Hard)

Table: Employee
+--------------+---------+
| Column Name  | Type    |
|--------------|---------|
| id           | int     |
| name         | varchar |
| salary       | int     |
| departmentId | int     |
+--------------+---------+
id is the primary key column for this table.
departmentId is a foreign key of the ID from the Department table.
Each row of this table indicates the ID, name, and salary of an employee. It also contains the ID of their department.

Table: Department
+-------------+---------+
| Column Name | Type    |
|-------------|---------|
| id          | int     |
| name        | varchar |
+-------------+---------+
id is the primary key column for this table.
Each row of this table indicates the ID of a department and its name.

A company's executives are interested in seeing who earns the most money in each of the company's departments. A high earner in a department is an employee who has a salary in the top three unique salaries for that department.

Write an SQL query to find the employees who are high earners in each of the departments.

---
한글 설명:
각 부서에서 가장 높은 급여를 받는 상위 3명의 직원을 찾는 SQL 쿼리를 작성하세요.
'높은 급여를 받는 직원'은 해당 부서의 상위 3개의 고유한 급여 중 하나를 받는 직원입니다.
*/

-- Write your PostgreSQL query statement below