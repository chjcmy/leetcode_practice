-- PostgreSQL Schema for the problem
DROP TABLE IF EXISTS cinema;

CREATE TABLE cinema (
    id INT PRIMARY KEY,
    movie VARCHAR(255),
    description VARCHAR(255),
    rating NUMERIC(2, 1)
);

INSERT INTO cinema (id, movie, description, rating) VALUES
(1, 'War', 'great 3D film', 8.9),
(2, 'Science', 'fiction', 8.5),
(3, 'irish', 'boring', 6.2),
(4, 'Ice song', 'Fantacy', 8.6),
(5, 'House card', 'Interesting', 9.1);

/*
620. Not Boring Movies (Easy)

Table: cinema
+----------------+----------+
| Column Name    | Type     |
|----------------|----------|
| id             | int      |
| movie          | varchar  |
| description    | varchar  |
| rating         | float    |
+----------------+----------+
id is the primary key for this table.
Each row contains information about the name of a movie, its genre, and its rating.

Write a SQL query to report the movies with an odd-numbered ID and a description that is not "boring".
Return the result table ordered by rating in descending order.

---
한글 설명:
ID가 홀수이고 설명이 "boring"이 아닌 영화를 찾아주세요.
결과는 평점(rating)을 기준으로 내림차순으로 정렬해야 합니다.
*/

-- Write your PostgreSQL query statement below
