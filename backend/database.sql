CREATE DATABASE placement_db;
USE placement_db;

CREATE TABLE users (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(100), email VARCHAR(100) UNIQUE, password VARCHAR(255), roll_no VARCHAR(50), department VARCHAR(100), role VARCHAR(20) DEFAULT 'student');
CREATE TABLE jobs (id INT AUTO_INCREMENT PRIMARY KEY, title VARCHAR(200), company VARCHAR(200), description TEXT, location VARCHAR(100), salary VARCHAR(50));
CREATE TABLE applications (id INT AUTO_INCREMENT PRIMARY KEY, user_id INT, job_id INT, status VARCHAR(20) DEFAULT 'Applied');