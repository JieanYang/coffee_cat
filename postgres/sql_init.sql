-- 
-- 创建用户me并设置password为me
create user me with password 'me';

-- 创建db设置owner为test_user
create database db with owner me;

-- 切换到新创建的test_db数据库
\c db me;

-- 在新创建的数据库中创建表
CREATE TABLE users (
  ID SERIAL PRIMARY KEY,
  name VARCHAR(30),
  email VARCHAR(30)
);

INSERT INTO users (name, email)
  VALUES ('Jerry', 'jerry@example.com'), ('George', 'george@example.com');


-- Create for angular app and nodejs
CREATE TABLE heroes (
	ID SERIAL PRIMARY KEY,
	name VARCHAR(30)
);

INSERT INTO heroes (name) 
  VALUES ('Jiean Yang'), 
  ('Dr Nice'), 
  ('Narco'), 
  ('Bombasto'), 
  ('Celeritas'),
  ('Magneta'),
  ('RubberMan'),
  ('Dynama'),
  ('DR IQ'),
  ('Magma'),
  ('Tornado');