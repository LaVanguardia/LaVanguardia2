CREATE DATABASE test_users;
USE test_users;
CREATE TABLE `users` (
  `user_id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(100),
  `email` varchar(100),
  `password` varchar(270)
);
use users;
INSERT INTO
​
CREATE TABLE `user_games` (
  `game_id` int,
  `user_id` int
);
​
CREATE TABLE `games` (
  `game_id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255),
  `score` int
) ​
ALTER TABLE `user_games` ADD FOREIGN KEY (`game_id`) REFERENCES `games` (`game_id`);
