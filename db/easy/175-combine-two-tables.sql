-- PostgreSQL Schema for the problem
DROP TABLE IF EXISTS Person;
DROP TABLE IF EXISTS Address;

CREATE TABLE Person (
    personId INT PRIMARY KEY,
    lastName VARCHAR(255),
    firstName VARCHAR(255)
);

CREATE TABLE Address (
    addressId INT PRIMARY KEY,
    personId INT,
    city VARCHAR(255),
    state VARCHAR(255)
);

INSERT INTO Person (personId, lastName, firstName) VALUES
(1, 'Wang', 'Allen'),
(2, 'Alice', 'Bob');

INSERT INTO Address (addressId, personId, city, state) VALUES
(1, 2, 'New York City', 'New York');

/*
175. Combine Two Tables (Easy)

Table: Person
+-------------+---------+
| Column Name | Type    |
|-------------|---------|
| personId    | int     |
| lastName    | varchar |
| firstName   | varchar |
+-------------+---------+
personId is the primary key column for this table.

Table: Address
+-------------+---------+
| Column Name | Type    |
|-------------|---------|
| addressId   | int     |
| personId    | int     |
| city        | varchar |
| state       | varchar |
+-------------+---------+
addressId is the primary key column for this table.

Write an SQL query to report the first name, last name, city, and state of each person in the Person table.
If the address of a personId is not present in the Address table, report null instead.

---
한글 설명:
Person 테이블의 각 사람에 대한 firstName, lastName, city, state를 보고하는 SQL 쿼리를 작성하세요.
만약 Address 테이블에 personId에 해당하는 주소가 없는 경우, city와 state에 대해 null을 보고하세요.
*/

-- Write your PostgreSQL query statement below