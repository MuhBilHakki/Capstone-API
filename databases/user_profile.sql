-- phpMyAdmin SQL Dump
-- version 4.7.1
-- https://www.phpmyadmin.net/
--
-- Host: 34.101.37.160
-- Generation Time: Jun 16, 2023 at 09:24 AM
-- Server version: 5.7.42-google-log
-- PHP Version: 7.0.33-0ubuntu0.16.04.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `capstone`
--

-- --------------------------------------------------------

--
-- Table structure for table `user_profile`
--

CREATE TABLE `user_profile` (
  `user_id` varchar(255) NOT NULL,
  `place_id` int(11) NOT NULL,
  `place_ratings` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `user_profile`
--

INSERT INTO `user_profile` (`user_id`, `place_id`, `place_ratings`) VALUES
('1', 1, 1),
('Wx9qWR2QLJdezf273x8jF9WcOe02', 9, 3.5),
('ePzpIPG72DQkZuQ023aWPYUwfe63', 19, 4),
('ePzpIPG72DQkZuQ023aWPYUwfe63', 13, 4),
('ePzpIPG72DQkZuQ023aWPYUwfe63', 19, 2.5),
('ePzpIPG72DQkZuQ023aWPYUwfe63', 19, 4.5),
('fy8MJ3IpNHSyynbpwtOcxW46J6t2', 1, 5),
('fy8MJ3IpNHSyynbpwtOcxW46J6t2', 10, 5),
('fy8MJ3IpNHSyynbpwtOcxW46J6t2', 3, 5),
('fy8MJ3IpNHSyynbpwtOcxW46J6t2', 7, 4.5),
('kYr1RrVbfQV5SYow65AOYXn6twk1', 1, 5),
('kYr1RrVbfQV5SYow65AOYXn6twk1', 1, 5),
('fy8MJ3IpNHSyynbpwtOcxW46J6t2', 19, 3),
('fy8MJ3IpNHSyynbpwtOcxW46J6t2', 1, 4.5),
('fy8MJ3IpNHSyynbpwtOcxW46J6t2', 20, 5);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
