-- DROP DATABASE IF EXISTS cf49yhdwq9nbqknj;
-- CREATE DATABASE cf49yhdwq9nbqknj;
-- USE cf49yhdwq9nbqknj;
-- CREATE TABLE burgers


--Create original DB
DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

-- Create the table plans.
CREATE TABLE burgers(
  id INT NOT NULL AUTO_INCREMENT,
  burger_name VARCHAR(255) NOT NULL,
  devoured boolean default false,
  PRIMARY KEY (id)
);
