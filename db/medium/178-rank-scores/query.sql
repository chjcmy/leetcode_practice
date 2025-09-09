-- PostgreSQL Schema for the problem
DROP TABLE IF EXISTS Scores;

CREATE TABLE Scores (
    id INT PRIMARY KEY,
    score NUMERIC(3, 2)
);

INSERT INTO Scores (id, score) VALUES
(1, 3.50),
(2, 3.65),
(3, 4.00),
(4, 3.85),
(5, 4.00),
(6, 3.65);

/*
178. Rank Scores (Medium)

Table: Scores
+-------------+---------+
| Column Name | Type    |
|-------------|---------|
| id          | int     |
| score       | decimal |
+-------------+---------+
id is the primary key for this table.
Each row of this table contains the score of a game.

Write an SQL query to rank the scores. The ranking should be calculated as follows:
- The scores should be ranked from the highest to the lowest.
- If there is a tie between two scores, both should have the same ranking.
- After a tie, the next ranking number should be the next consecutive integer value. In other words, there should be no "holes" in the rank.

---
한글 설명:
점수를 순서대로 순위를 매기는 SQL 쿼리를 작성하세요. 순위는 다음 규칙에 따라 계산되어야 합니다:
- 점수는 높은 것부터 낮은 것 순으로 순위가 매겨져야 합니다.
- 두 점수 사이에 동점이 있는 경우, 둘 다 같은 순위를 가져야 합니다.
- 동점 다음의 순위 번호는 다음 연속 정수 값이어야 합니다. 즉, 순위에 "구멍"이 없어야 합니다.
*/

-- Write your PostgreSQL query statement below
