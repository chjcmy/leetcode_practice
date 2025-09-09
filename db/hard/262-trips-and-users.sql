-- PostgreSQL Schema for the problem
DROP TABLE IF EXISTS Trips;
DROP TABLE IF EXISTS Users;

CREATE TABLE Trips (
    id INT PRIMARY KEY,
    client_id INT,
    driver_id INT,
    city_id INT,
    status VARCHAR(255),
    request_at DATE
);

CREATE TABLE Users (
    users_id INT PRIMARY KEY,
    banned VARCHAR(255),
    role VARCHAR(255)
);

INSERT INTO Trips (id, client_id, driver_id, city_id, status, request_at) VALUES
(1, 1, 10, 1, 'completed', '2013-10-01'),
(2, 2, 11, 1, 'cancelled_by_driver', '2013-10-01'),
(3, 3, 12, 6, 'completed', '2013-10-01'),
(4, 4, 13, 6, 'cancelled_by_client', '2013-10-01'),
(5, 1, 10, 1, 'completed', '2013-10-02'),
(6, 2, 11, 6, 'completed', '2013-10-02'),
(7, 3, 12, 6, 'completed', '2013-10-02'),
(8, 2, 12, 12, 'completed', '2013-10-03'),
(9, 3, 10, 12, 'completed', '2013-10-03'),
(10, 4, 13, 12, 'cancelled_by_driver', '2013-10-03');

INSERT INTO Users (users_id, banned, role) VALUES
(1, 'No', 'client'),
(2, 'Yes', 'client'),
(3, 'No', 'client'),
(4, 'No', 'client'),
(10, 'No', 'driver'),
(11, 'No', 'driver'),
(12, 'No', 'driver'),
(13, 'No', 'driver');

/*
262. Trips and Users (Hard)

... (description)

The cancellation rate is computed by dividing the number of canceled (by client or driver) requests with unbanned users by the total number of requests with unbanned users on that day.
Write a SQL query to find the cancellation rate of requests with unbanned users (both client and driver must not be banned) for each day between "2013-10-01" and "2013-10-03".

---
한글 설명:
"2013-10-01"과 "2013-10-03" 사이의 각 날짜에 대해, 차단되지 않은 사용자(클라이언트와 드라이버 모두)의 요청 취소율을 찾는 SQL 쿼리를 작성하세요.
취소율은 차단되지 않은 사용자의 취소된 요청 수를 차단되지 않은 사용자의 총 요청 수로 나누어 계산합니다.
*/

-- Write your PostgreSQL query statement below
