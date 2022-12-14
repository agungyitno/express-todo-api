-- Active: 1667642592962@@127.0.0.1@3306@todo
CREATE DATABASE IF NOT EXISTS todo;

DROP TABLE IF EXISTS `todos`;

CREATE TABLE IF NOT EXISTS `todos` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `due_date` DATETIME NULL,
  `finish_date` DATETIME NULL,
  `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
);

SELECT * FROM todos;