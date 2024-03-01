-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 01, 2024 at 07:36 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.0.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `teachabledatabase`
--

-- --------------------------------------------------------

--
-- Table structure for table `addresses`
--

CREATE TABLE `addresses` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `city` varchar(255) DEFAULT NULL,
  `state` varchar(255) DEFAULT NULL,
  `street` varchar(255) DEFAULT NULL,
  `zipcode` varchar(255) DEFAULT NULL,
  `customer_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `chekouts`
--

CREATE TABLE `chekouts` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `email_id` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `zip_code` varchar(255) DEFAULT NULL,
  `course_name` varchar(255) DEFAULT NULL,
  `sub_total` varchar(255) DEFAULT NULL,
  `payment_type` varchar(255) DEFAULT NULL,
  `payment_status` varchar(255) DEFAULT NULL,
  `course_id` varchar(255) DEFAULT NULL,
  `user_name` varchar(255) DEFAULT NULL,
  `customer_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `chekouts`
--

INSERT INTO `chekouts` (`id`, `first_name`, `last_name`, `email_id`, `address`, `city`, `zip_code`, `course_name`, `sub_total`, `payment_type`, `payment_status`, `course_id`, `user_name`, `customer_id`, `created_at`, `updated_at`) VALUES
('b9fc0435-1e41-49ef-9b2b-af99d10270ae', 'Test', 'test', 'test@122.com', 'test', 'test', '9876543', '1', '23', NULL, NULL, '4fad8b49-10dc-4e19-bb3e-7c89e10eb729', 'arul@1234', '59eee178-0559-473a-9a87-1c66056c1c43', '2024-01-22 16:34:34', '2024-01-22 16:34:34'),
('e948837c-ce50-4c2e-bd00-b69eb41ba5ca', 'asdf', 'asdfas', 'dfas', 'dfasdf', 'asdfasdf', 'asdfasdf', '2', '45', NULL, NULL, '19a1ffaf-2aad-4b05-9779-2aa4474083b3', 'admin', 'b7e8c002-0452-4c33-b4c5-a1b44ba01acb', '2024-02-27 20:28:27', '2024-02-27 20:28:27'),
('fe400638-de4c-4809-9ead-54c991ca6707', 'asdfas', 'sdfasdfas', 'dfasdf', 'dfasdf', 'asdfasd', 'dfasdf', '2', '45', NULL, NULL, '19a1ffaf-2aad-4b05-9779-2aa4474083b3', 'kapil@123', '132045df-b09d-4f94-ba97-881e3a947f80', '2024-02-27 20:00:44', '2024-02-27 20:00:44');

-- --------------------------------------------------------

--
-- Table structure for table `clarifications`
--

CREATE TABLE `clarifications` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `course_id` varchar(255) DEFAULT NULL,
  `session_id` varchar(255) DEFAULT NULL,
  `customer_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `session_number` varchar(255) DEFAULT NULL,
  `session_title` varchar(255) DEFAULT NULL,
  `session_status` varchar(255) DEFAULT NULL,
  `commits` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `course_name` varchar(250) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `clarifications`
--

INSERT INTO `clarifications` (`id`, `course_id`, `session_id`, `customer_id`, `session_number`, `session_title`, `session_status`, `commits`, `name`, `email`, `course_name`, `created_at`, `updated_at`) VALUES
('4d6de42c-7214-4586-8101-17dde6632475', '19a1ffaf-2aad-4b05-9779-2aa4474083b3', NULL, NULL, NULL, NULL, NULL, 'sdfasdf', 'asdf', 'asdfa', 'Test12312', '2024-02-02 19:54:33', '2024-02-02 19:54:33'),
('571e392d-43df-4cc3-85f6-0115fa9c3054', '19a1ffaf-2aad-4b05-9779-2aa4474083b3', NULL, '132045df-b09d-4f94-ba97-881e3a947f80', NULL, NULL, NULL, 'fas', 'asdfa', 'sdfasd', 'Test12312', '2024-02-27 20:08:07', '2024-02-27 20:08:07'),
('61fc8156-38db-41b5-acae-19ac86d09b70', '19a1ffaf-2aad-4b05-9779-2aa4474083b3', NULL, '132045df-b09d-4f94-ba97-881e3a947f80', NULL, NULL, NULL, 'dfa', 'sdfa', 'sdfas', 'Test12312', '2024-02-27 20:01:35', '2024-02-27 20:01:35'),
('80b3cc46-2d7d-4c52-a1eb-3ab4781658ed', '19a1ffaf-2aad-4b05-9779-2aa4474083b3', NULL, '59eee178-0559-473a-9a87-1c66056c1c43', NULL, NULL, NULL, 'fasdf', 'asdf', 'asdfasd', NULL, '2024-02-02 19:33:25', '2024-02-02 19:33:25');

-- --------------------------------------------------------

--
-- Table structure for table `courses`
--

CREATE TABLE `courses` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `course_title` text DEFAULT NULL,
  `couse_category` varchar(255) DEFAULT NULL,
  `course_price` varchar(255) DEFAULT NULL,
  `discount_price` varchar(255) DEFAULT NULL,
  `course_name` varchar(255) DEFAULT NULL,
  `course_Offer` varchar(255) DEFAULT NULL,
  `about_course` varchar(255) DEFAULT NULL,
  `upload_course` varchar(255) DEFAULT NULL,
  `intro_video` varchar(255) DEFAULT NULL,
  `start_date` varchar(255) DEFAULT NULL,
  `language` varchar(255) DEFAULT NULL,
  `course_requirements` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `create_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp(),
  `course_status` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `courses`
--

INSERT INTO `courses` (`id`, `course_title`, `couse_category`, `course_price`, `discount_price`, `course_name`, `course_Offer`, `about_course`, `upload_course`, `intro_video`, `start_date`, `language`, `course_requirements`, `description`, `create_at`, `updated_at`, `course_status`) VALUES
('19a1ffaf-2aad-4b05-9779-2aa4474083b3', 'Test12312', 'clound', '45', '67', '2', '1', 'test', 'src\\uploads\\uploadCourse_1705601256237.mp4', 'https://www.youtube.com/watch?v=rTdEO0P0HzM', '2024-01-18', 'Tamil', 'Add your coursTe benefits here.', 'Add your coursTe benefits here.', '2024-01-18 18:07:38', '2024-01-18 18:07:38', 'Active'),
('4fad8b49-10dc-4e19-bb3e-7c89e10eb729', 'Test2314234123', 'Graphic', '23', '43', '1', '1', 'test', 'src\\uploads\\uploadCourse_1704819467909.mp4', 'https://www.youtube.com/watch?v=rTdEO0P0HzM', '2024-01-18', 'tamil', 'test', 'test', '2024-01-07 14:32:08', '2024-02-27 20:22:10', 'Active'),
('cca4f472-03e1-4e2b-ba28-635f615891f8', 'Test098765', 'controlSystem', '45', '54', '2', '1', 'Test', 'src\\uploads\\uploadCourse_1705941884205.mp4', 'https://www.youtube.com/watch?v=rTdEO0P0HzM', '2024-01-25', 'English', 'Add your course benefits here .', 'Test', '2024-01-22 16:44:44', '2024-01-29 13:09:08', 'InActive');

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

CREATE TABLE `customers` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `full_name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone_number` varchar(255) DEFAULT NULL,
  `user_name` varchar(255) DEFAULT NULL,
  `passowrd` varchar(255) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `customers`
--

INSERT INTO `customers` (`id`, `first_name`, `last_name`, `full_name`, `email`, `phone_number`, `user_name`, `passowrd`, `created_at`, `updated_at`) VALUES
('132045df-b09d-4f94-ba97-881e3a947f80', 'kapil', 'k', 'User', 'kapil@gmail.com', '8270564998', 'kapil@123', '$2a$10$V8r53Ar/BTkYKcUD48A0iObIZKzNUt7318IPCvBO9.03T7iBbds6m', '2023-12-29 21:15:21', '2023-12-29 21:15:21'),
('429a9f20-624b-49ca-84b5-3a2ebc6a9ccf', 'demo', 'demo123', 'User', 'demo@123.com', '8270564998', 'demo', '12345', '2023-12-26 16:06:19', '2023-12-26 16:06:19'),
('59eee178-0559-473a-9a87-1c66056c1c43', 'Arul kumar', 'a', 'User', 'arul@gmail.com', '8270564998', 'arul@1234', '$2a$10$SKv.vSkXOQWauaEZ/sE4VOWNk.em1qvdsRl72Cgiv4uIRvQ8.slK6', '2023-12-30 14:44:18', '2023-12-30 14:44:18'),
('b7e8c002-0452-4c33-b4c5-a1b44ba01acb', 'Arul', 'Arul', 'Admin', 'admin@krosum.com', '8270564998', 'admin', '$2a$10$me8Xoa11YHUyiEqOkVoxf.MtvKdh2DB5QBR2kN9DZm8P60xPbz7Xa', '2023-12-25 18:25:38', '2023-12-25 18:25:38');

-- --------------------------------------------------------

--
-- Table structure for table `feedbacks`
--

CREATE TABLE `feedbacks` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `course_id` varchar(255) DEFAULT NULL,
  `session_id` varchar(255) DEFAULT NULL,
  `customer_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `session_number` varchar(255) DEFAULT NULL,
  `session_title` varchar(255) DEFAULT NULL,
  `session_status` varchar(255) DEFAULT NULL,
  `commits` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `feedbacks`
--

INSERT INTO `feedbacks` (`id`, `course_id`, `session_id`, `customer_id`, `session_number`, `session_title`, `session_status`, `commits`, `name`, `email`, `created_at`, `updated_at`) VALUES
('22d12d36-af4f-4b10-9c88-4a232d0794e2', '19a1ffaf-2aad-4b05-9779-2aa4474083b3', NULL, '59eee178-0559-473a-9a87-1c66056c1c43', NULL, NULL, NULL, NULL, NULL, NULL, '2024-02-02 19:28:43', '2024-02-02 19:28:43'),
('c3113def-18cb-4131-8728-eacecddd98a2', '19a1ffaf-2aad-4b05-9779-2aa4474083b3', NULL, '59eee178-0559-473a-9a87-1c66056c1c43', NULL, NULL, NULL, 'sdfasdfasd', 'asdfasd', 'fsad@sad.df', '2024-02-02 18:23:14', '2024-02-02 18:23:14'),
('e22cee98-027d-4ba7-9e81-bdd7edba8d3a', '19a1ffaf-2aad-4b05-9779-2aa4474083b3', NULL, '59eee178-0559-473a-9a87-1c66056c1c43', NULL, NULL, NULL, '2341234123', '41234123', '234@awf.com', '2024-02-02 19:07:40', '2024-02-02 19:07:40'),
('f6c9a25f-99c0-4596-85a8-36c98af202c1', '19a1ffaf-2aad-4b05-9779-2aa4474083b3', NULL, '59eee178-0559-473a-9a87-1c66056c1c43', NULL, NULL, NULL, NULL, NULL, NULL, '2024-02-02 19:28:15', '2024-02-02 19:28:15');

-- --------------------------------------------------------

--
-- Table structure for table `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20230630110046-create-customer.js'),
('20230704060613-create-address.js'),
('20231223135120-create-course-table.js'),
('20231223140454-rename-courst-fullname-column.js'),
('20231223152439-add-new-status-column.js'),
('20231224092722-create-new-table-checkout.js'),
('20231224124642-add-id-column-course.js'),
('20231224124938-create-table-course.js'),
('20231224125033-full_name-rename.js'),
('20231224125119-create-status-column.js'),
('20231224130107-add-id-column-customer_id.js'),
('20240107115159-session_table.js'),
('20240118111026-watchlist.js'),
('20240129184829-create-feedbacktable.js'),
('20240129185841-create-clarification.js');

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `course_id` varchar(255) DEFAULT NULL,
  `session_url` varchar(255) DEFAULT NULL,
  `session_time` varchar(255) DEFAULT NULL,
  `session_title` varchar(255) DEFAULT NULL,
  `customer_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `sessions`
--

INSERT INTO `sessions` (`id`, `course_id`, `session_url`, `session_time`, `session_title`, `customer_id`, `created_at`, `updated_at`) VALUES
('2ac65eda-9208-4a35-96df-fdaee46bfc2f', '4fad8b49-10dc-4e19-bb3e-7c89e10eb729', 'src\\uploads\\sessionUrl_1704647600965.mp4', '67', 'hgj', NULL, '2024-01-07 17:13:27', '2024-01-07 17:13:27'),
('4931810e-ecf6-4e8b-b6fb-2fbffcca07ba', '19a1ffaf-2aad-4b05-9779-2aa4474083b3', 'src\\uploads\\sessionUrl_1705601331235.mp4', '56', 'Test session', NULL, '2024-01-18 18:08:52', '2024-01-18 18:08:52'),
('5e732dc0-0a7e-4212-8a6b-d44a6440e1d6', '19a1ffaf-2aad-4b05-9779-2aa4474083b3', 'src\\uploads\\sessionUrl_1709065590965.png', '234', 'dfasdf435634efs', NULL, '2024-02-27 20:26:30', '2024-02-27 20:26:30'),
('69b73907-8582-4028-8d95-7bcce9ec46d5', '4fad8b49-10dc-4e19-bb3e-7c89e10eb729', 'src\\uploads\\sessionUrl_1704643300250.mp4', '45', 'test', NULL, '2024-01-07 16:01:42', '2024-01-07 16:01:42'),
('a2df7694-0f33-4c0e-822a-c310bda89feb', 'cca4f472-03e1-4e2b-ba28-635f615891f8', 'src\\uploads\\sessionUrl_1709065367311.png', 'asfd', 'aswqerqwefasdfa', NULL, '2024-02-27 20:22:47', '2024-02-27 20:22:47');

-- --------------------------------------------------------

--
-- Table structure for table `watchlists`
--

CREATE TABLE `watchlists` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `course_id` varchar(255) DEFAULT NULL,
  `session_id` varchar(255) DEFAULT NULL,
  `customer_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `session_number` varchar(255) DEFAULT NULL,
  `session_title` varchar(255) DEFAULT NULL,
  `session_status` varchar(255) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `watchlists`
--

INSERT INTO `watchlists` (`id`, `course_id`, `session_id`, `customer_id`, `session_number`, `session_title`, `session_status`, `created_at`, `updated_at`) VALUES
('2834d2d9-2d68-4ede-bc19-0b7eb6ed9116', '4fad8b49-10dc-4e19-bb3e-7c89e10eb729', '69b73907-8582-4028-8d95-7bcce9ec46d5', '59eee178-0559-473a-9a87-1c66056c1c43', '2', 'test', 'Completed', '2024-01-22 16:37:18', '2024-01-22 16:37:18'),
('64c74e85-820e-40af-b9dc-38424bf605fd', '19a1ffaf-2aad-4b05-9779-2aa4474083b3', NULL, NULL, NULL, NULL, NULL, '2024-02-02 19:27:17', '2024-02-02 19:27:17'),
('9626a9a9-678f-4611-a584-c0080c371a43', '19a1ffaf-2aad-4b05-9779-2aa4474083b3', NULL, NULL, NULL, NULL, NULL, '2024-02-02 18:19:03', '2024-02-02 18:19:03'),
('a9261a9b-4838-4b20-958e-970e03d4412c', '4fad8b49-10dc-4e19-bb3e-7c89e10eb729', '2ac65eda-9208-4a35-96df-fdaee46bfc2f', '59eee178-0559-473a-9a87-1c66056c1c43', '1', 'hgj', 'Completed', '2024-01-22 16:35:34', '2024-01-22 16:35:34');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `addresses`
--
ALTER TABLE `addresses`
  ADD PRIMARY KEY (`id`),
  ADD KEY `customer_id` (`customer_id`);

--
-- Indexes for table `chekouts`
--
ALTER TABLE `chekouts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `clarifications`
--
ALTER TABLE `clarifications`
  ADD PRIMARY KEY (`id`),
  ADD KEY `customer_id` (`customer_id`);

--
-- Indexes for table `courses`
--
ALTER TABLE `courses`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `feedbacks`
--
ALTER TABLE `feedbacks`
  ADD PRIMARY KEY (`id`),
  ADD KEY `customer_id` (`customer_id`);

--
-- Indexes for table `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `customer_id` (`customer_id`);

--
-- Indexes for table `watchlists`
--
ALTER TABLE `watchlists`
  ADD PRIMARY KEY (`id`),
  ADD KEY `customer_id` (`customer_id`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `addresses`
--
ALTER TABLE `addresses`
  ADD CONSTRAINT `addresses_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`id`);

--
-- Constraints for table `clarifications`
--
ALTER TABLE `clarifications`
  ADD CONSTRAINT `clarifications_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`id`);

--
-- Constraints for table `feedbacks`
--
ALTER TABLE `feedbacks`
  ADD CONSTRAINT `feedbacks_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`id`);

--
-- Constraints for table `sessions`
--
ALTER TABLE `sessions`
  ADD CONSTRAINT `sessions_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`id`);

--
-- Constraints for table `watchlists`
--
ALTER TABLE `watchlists`
  ADD CONSTRAINT `watchlists_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
