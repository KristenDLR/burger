DROP DATABASE IF EXISTS cf49yhdwq9nbqknj;
CREATE DATABASE cf49yhdwq9nbqknj;
USE cf49yhdwq9nbqknj;
CREATE TABLE burgers

-- Create the table plans.
CREATE TABLE burgers
(
  id INT NOT NULL
  AUTO_INCREMENT,
burger_name VARCHAR
  (255) NOT NULL,
devoured boolean default false,
PRIMARY KEY
  (id)
);
