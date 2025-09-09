-- PostgreSQL Schema for the problem
DROP TABLE IF EXISTS Delivery;

CREATE TABLE Delivery (
    delivery_id INT PRIMARY KEY,
    customer_id INT,
    order_date DATE,
    customer_pref_delivery_date DATE
);

INSERT INTO Delivery (delivery_id, customer_id, order_date, customer_pref_delivery_date) VALUES
(1, 1, '2019-08-01', '2019-08-02'),
(2, 2, '2019-08-02', '2019-08-02'),
(3, 1, '2019-08-11', '2019-08-12'),
(4, 3, '2019-08-24', '2019-08-24'),
(5, 3, '2019-08-21', '2019-08-22'),
(6, 2, '2019-08-11', '2019-08-13'),
(7, 4, '2019-08-09', '2019-08-09');

/*
1174. Immediate Food Delivery II (Hard)

Table: Delivery
... (description)

If the customer's preferred delivery date is the same as the order date, then the order is called immediate; otherwise, it is called scheduled.
The first order of a customer is the order with the earliest order date that the customer made.

Write an SQL query to find the percentage of immediate orders in the first orders of all customers, rounded to 2 decimal places.

---
한글 설명:
모든 고객의 첫 주문 중 즉시 배송(주문일과 고객 선호 배송일이 동일) 비율을 백분율로 찾아 소수점 둘째 자리까지 반올림하는 SQL 쿼리를 작성하세요.
*/

-- Write your PostgreSQL query statement below