
-- DROP DATABASE IF EXISTS sqltask;

-- CREATE DATABASE sqltask;

-- \c sqltask;

DROP TABLE IF EXISTS customers;
DROP TABLE IF EXISTS brokers;

CREATE TABLE IF NOT EXISTS brokers(
    broker_id serial PRIMARY KEY,
    name VARCHAR(50)
);

CREATE TABLE IF NOT EXISTS customers(
    customer_id serial PRIMARY KEY,
    name VARCHAR(50),
    amount INT,
    broker_id INT,
    FOREIGN KEY (broker_id)
        REFERENCES brokers (broker_id)
);

INSERT INTO brokers (name)
VALUES (
    'Ted'
  );

INSERT INTO brokers (name)
VALUES (
    'Mark'
  );

INSERT INTO brokers (name)
VALUES (
    'Aaron'
  );

INSERT INTO brokers (name)
VALUES (
    'Luke'
  );

INSERT INTO customers (name, amount, broker_id)
VALUES (
    'sam',
    3000,
    4
  );

INSERT INTO customers (name, amount, broker_id)
VALUES (
    'john',
    4000,
    2
  );

INSERT INTO customers (name, amount, broker_id)
VALUES (
    'mack',
    5000,
    2
  );

INSERT INTO customers (name, amount, broker_id)
VALUES (
    'test',
    3000,
    3
  );

INSERT INTO customers (name, amount, broker_id)
VALUES (
    'june',
    2000,
    3
  );

INSERT INTO customers (name, amount, broker_id)
VALUES (
    'mike',
    4000,
    1
  );

INSERT INTO customers (name, amount, broker_id)
VALUES (
    'annie',
    4000,
    2
  );

INSERT INTO customers (name, amount, broker_id)
VALUES (
    'micheal',
    2000,
    1
  );

INSERT INTO customers (name, amount, broker_id)
VALUES (
    'tom',
    2000,
    4
  );

INSERT INTO customers (name, amount, broker_id)
VALUES (
    'jason',
    6000,
    4
  );

 
SELECT 
  brokers.name AS broker_name,
  COUNT (customers.customer_id) AS customer_count
FROM brokers
  INNER JOIN customers USING(broker_id)
GROUP BY broker_id
ORDER BY COUNT(customers.customer_id) DESC, brokers.name;

