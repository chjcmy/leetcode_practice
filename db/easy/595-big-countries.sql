-- PostgreSQL Schema for the problem
DROP TABLE IF EXISTS World;

CREATE TABLE World (
    name VARCHAR(255) PRIMARY KEY,
    continent VARCHAR(255),
    area INT,
    population INT,
    gdp BIGINT
);

INSERT INTO World (name, continent, area, population, gdp) VALUES
('Afghanistan', 'Asia', 652230, 25500100, 20343000000),
('Albania', 'Europe', 28748, 2831741, 12960000000),
('Algeria', 'Africa', 2381741, 37100000, 188681000000),
('Andorra', 'Europe', 468, 78115, 3712000000),
('Angola', 'Africa', 1246700, 20609294, 100990000000);

/*
595. Big Countries (Easy)

Table: World
+-------------+---------+
| Column Name | Type    |
|-------------|---------|
| name        | varchar |
| continent   | varchar |
| area        | int     |
| population  | int     |
| gdp         | int     |
+-------------+---------+
name is the primary key column for this table.
Each row of this table gives information about the name of a country, the continent to which it belongs, its area, the population, and its GDP value.

A country is big if:
- it has an area of at least three million (i.e., 3,000,000 km2), or
- it has a population of at least twenty-five million (i.e., 25,000,000).

Write an SQL query to report the name, population, and area of the big countries.

---
한글 설명:
면적이 3,000,000 km² 이상이거나 인구가 25,000,000 이상인 큰 나라의 이름, 인구, 면적을 보고하는 SQL 쿼리를 작성하세요.
*/

-- Write your PostgreSQL query statement below