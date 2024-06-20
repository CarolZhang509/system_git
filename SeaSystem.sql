/*
 Navicat Premium Data Transfer

 Source Server         : mysql
 Source Server Type    : MySQL
 Source Server Version : 80031
 Source Host           : localhost:3306
 Source Schema         : SeaSystem

 Target Server Type    : MySQL
 Target Server Version : 80031
 File Encoding         : 65001

 Date: 01/05/2024 22:35:43
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for auth_group
-- ----------------------------
DROP TABLE IF EXISTS `auth_group`;
CREATE TABLE `auth_group` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(150) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- ----------------------------
-- Records of auth_group
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for auth_group_permissions
-- ----------------------------
DROP TABLE IF EXISTS `auth_group_permissions`;
CREATE TABLE `auth_group_permissions` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `group_id` int NOT NULL,
  `permission_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_group_permissions_group_id_permission_id_0cd325b0_uniq` (`group_id`,`permission_id`),
  KEY `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` (`permission_id`),
  CONSTRAINT `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  CONSTRAINT `auth_group_permissions_group_id_b120cbf9_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- ----------------------------
-- Records of auth_group_permissions
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for auth_permission
-- ----------------------------
DROP TABLE IF EXISTS `auth_permission`;
CREATE TABLE `auth_permission` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `content_type_id` int NOT NULL,
  `codename` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_permission_content_type_id_codename_01ab375a_uniq` (`content_type_id`,`codename`),
  CONSTRAINT `auth_permission_content_type_id_2f476e4b_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb3;

-- ----------------------------
-- Records of auth_permission
-- ----------------------------
BEGIN;
INSERT INTO `auth_permission` (`id`, `name`, `content_type_id`, `codename`) VALUES (1, 'Can add log entry', 1, 'add_logentry');
INSERT INTO `auth_permission` (`id`, `name`, `content_type_id`, `codename`) VALUES (2, 'Can change log entry', 1, 'change_logentry');
INSERT INTO `auth_permission` (`id`, `name`, `content_type_id`, `codename`) VALUES (3, 'Can delete log entry', 1, 'delete_logentry');
INSERT INTO `auth_permission` (`id`, `name`, `content_type_id`, `codename`) VALUES (4, 'Can view log entry', 1, 'view_logentry');
INSERT INTO `auth_permission` (`id`, `name`, `content_type_id`, `codename`) VALUES (5, 'Can add permission', 2, 'add_permission');
INSERT INTO `auth_permission` (`id`, `name`, `content_type_id`, `codename`) VALUES (6, 'Can change permission', 2, 'change_permission');
INSERT INTO `auth_permission` (`id`, `name`, `content_type_id`, `codename`) VALUES (7, 'Can delete permission', 2, 'delete_permission');
INSERT INTO `auth_permission` (`id`, `name`, `content_type_id`, `codename`) VALUES (8, 'Can view permission', 2, 'view_permission');
INSERT INTO `auth_permission` (`id`, `name`, `content_type_id`, `codename`) VALUES (9, 'Can add group', 3, 'add_group');
INSERT INTO `auth_permission` (`id`, `name`, `content_type_id`, `codename`) VALUES (10, 'Can change group', 3, 'change_group');
INSERT INTO `auth_permission` (`id`, `name`, `content_type_id`, `codename`) VALUES (11, 'Can delete group', 3, 'delete_group');
INSERT INTO `auth_permission` (`id`, `name`, `content_type_id`, `codename`) VALUES (12, 'Can view group', 3, 'view_group');
INSERT INTO `auth_permission` (`id`, `name`, `content_type_id`, `codename`) VALUES (13, 'Can add content type', 4, 'add_contenttype');
INSERT INTO `auth_permission` (`id`, `name`, `content_type_id`, `codename`) VALUES (14, 'Can change content type', 4, 'change_contenttype');
INSERT INTO `auth_permission` (`id`, `name`, `content_type_id`, `codename`) VALUES (15, 'Can delete content type', 4, 'delete_contenttype');
INSERT INTO `auth_permission` (`id`, `name`, `content_type_id`, `codename`) VALUES (16, 'Can view content type', 4, 'view_contenttype');
INSERT INTO `auth_permission` (`id`, `name`, `content_type_id`, `codename`) VALUES (17, 'Can add session', 5, 'add_session');
INSERT INTO `auth_permission` (`id`, `name`, `content_type_id`, `codename`) VALUES (18, 'Can change session', 5, 'change_session');
INSERT INTO `auth_permission` (`id`, `name`, `content_type_id`, `codename`) VALUES (19, 'Can delete session', 5, 'delete_session');
INSERT INTO `auth_permission` (`id`, `name`, `content_type_id`, `codename`) VALUES (20, 'Can view session', 5, 'view_session');
INSERT INTO `auth_permission` (`id`, `name`, `content_type_id`, `codename`) VALUES (21, 'Can add 用户信息', 6, 'add_userinfo');
INSERT INTO `auth_permission` (`id`, `name`, `content_type_id`, `codename`) VALUES (22, 'Can change 用户信息', 6, 'change_userinfo');
INSERT INTO `auth_permission` (`id`, `name`, `content_type_id`, `codename`) VALUES (23, 'Can delete 用户信息', 6, 'delete_userinfo');
INSERT INTO `auth_permission` (`id`, `name`, `content_type_id`, `codename`) VALUES (24, 'Can view 用户信息', 6, 'view_userinfo');
COMMIT;

-- ----------------------------
-- Table structure for django_admin_log
-- ----------------------------
DROP TABLE IF EXISTS `django_admin_log`;
CREATE TABLE `django_admin_log` (
  `id` int NOT NULL AUTO_INCREMENT,
  `action_time` datetime(6) NOT NULL,
  `object_id` longtext,
  `object_repr` varchar(200) NOT NULL,
  `action_flag` smallint unsigned NOT NULL,
  `change_message` longtext NOT NULL,
  `content_type_id` int DEFAULT NULL,
  `user_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `django_admin_log_content_type_id_c4bce8eb_fk_django_co` (`content_type_id`),
  KEY `django_admin_log_user_id_c564eba6_fk_login_userinfo_id` (`user_id`),
  CONSTRAINT `django_admin_log_content_type_id_c4bce8eb_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`),
  CONSTRAINT `django_admin_log_user_id_c564eba6_fk_login_userinfo_id` FOREIGN KEY (`user_id`) REFERENCES `login_userinfo` (`id`),
  CONSTRAINT `django_admin_log_chk_1` CHECK ((`action_flag` >= 0))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- ----------------------------
-- Records of django_admin_log
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for django_content_type
-- ----------------------------
DROP TABLE IF EXISTS `django_content_type`;
CREATE TABLE `django_content_type` (
  `id` int NOT NULL AUTO_INCREMENT,
  `app_label` varchar(100) NOT NULL,
  `model` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `django_content_type_app_label_model_76bd3d3b_uniq` (`app_label`,`model`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb3;

-- ----------------------------
-- Records of django_content_type
-- ----------------------------
BEGIN;
INSERT INTO `django_content_type` (`id`, `app_label`, `model`) VALUES (1, 'admin', 'logentry');
INSERT INTO `django_content_type` (`id`, `app_label`, `model`) VALUES (3, 'auth', 'group');
INSERT INTO `django_content_type` (`id`, `app_label`, `model`) VALUES (2, 'auth', 'permission');
INSERT INTO `django_content_type` (`id`, `app_label`, `model`) VALUES (4, 'contenttypes', 'contenttype');
INSERT INTO `django_content_type` (`id`, `app_label`, `model`) VALUES (6, 'login', 'userinfo');
INSERT INTO `django_content_type` (`id`, `app_label`, `model`) VALUES (5, 'sessions', 'session');
COMMIT;

-- ----------------------------
-- Table structure for django_migrations
-- ----------------------------
DROP TABLE IF EXISTS `django_migrations`;
CREATE TABLE `django_migrations` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `app` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `applied` datetime(6) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb3;

-- ----------------------------
-- Records of django_migrations
-- ----------------------------
BEGIN;
INSERT INTO `django_migrations` (`id`, `app`, `name`, `applied`) VALUES (1, 'contenttypes', '0001_initial', '2024-04-27 23:56:33.619418');
INSERT INTO `django_migrations` (`id`, `app`, `name`, `applied`) VALUES (2, 'contenttypes', '0002_remove_content_type_name', '2024-04-27 23:56:33.631710');
INSERT INTO `django_migrations` (`id`, `app`, `name`, `applied`) VALUES (3, 'auth', '0001_initial', '2024-04-27 23:56:33.675144');
INSERT INTO `django_migrations` (`id`, `app`, `name`, `applied`) VALUES (4, 'auth', '0002_alter_permission_name_max_length', '2024-04-27 23:56:33.686268');
INSERT INTO `django_migrations` (`id`, `app`, `name`, `applied`) VALUES (5, 'auth', '0003_alter_user_email_max_length', '2024-04-27 23:56:33.688899');
INSERT INTO `django_migrations` (`id`, `app`, `name`, `applied`) VALUES (6, 'auth', '0004_alter_user_username_opts', '2024-04-27 23:56:33.691554');
INSERT INTO `django_migrations` (`id`, `app`, `name`, `applied`) VALUES (7, 'auth', '0005_alter_user_last_login_null', '2024-04-27 23:56:33.694117');
INSERT INTO `django_migrations` (`id`, `app`, `name`, `applied`) VALUES (8, 'auth', '0006_require_contenttypes_0002', '2024-04-27 23:56:33.694954');
INSERT INTO `django_migrations` (`id`, `app`, `name`, `applied`) VALUES (9, 'auth', '0007_alter_validators_add_error_messages', '2024-04-27 23:56:33.697536');
INSERT INTO `django_migrations` (`id`, `app`, `name`, `applied`) VALUES (10, 'auth', '0008_alter_user_username_max_length', '2024-04-27 23:56:33.699921');
INSERT INTO `django_migrations` (`id`, `app`, `name`, `applied`) VALUES (11, 'auth', '0009_alter_user_last_name_max_length', '2024-04-27 23:56:33.701977');
INSERT INTO `django_migrations` (`id`, `app`, `name`, `applied`) VALUES (12, 'auth', '0010_alter_group_name_max_length', '2024-04-27 23:56:33.712157');
INSERT INTO `django_migrations` (`id`, `app`, `name`, `applied`) VALUES (13, 'auth', '0011_update_proxy_permissions', '2024-04-27 23:56:33.715121');
INSERT INTO `django_migrations` (`id`, `app`, `name`, `applied`) VALUES (14, 'auth', '0012_alter_user_first_name_max_length', '2024-04-27 23:56:33.725574');
INSERT INTO `django_migrations` (`id`, `app`, `name`, `applied`) VALUES (15, 'login', '0001_initial', '2024-04-27 23:56:33.769043');
INSERT INTO `django_migrations` (`id`, `app`, `name`, `applied`) VALUES (16, 'admin', '0001_initial', '2024-04-27 23:56:33.790663');
INSERT INTO `django_migrations` (`id`, `app`, `name`, `applied`) VALUES (17, 'admin', '0002_logentry_remove_auto_add', '2024-04-27 23:56:33.794165');
INSERT INTO `django_migrations` (`id`, `app`, `name`, `applied`) VALUES (18, 'admin', '0003_logentry_add_action_flag_choices', '2024-04-27 23:56:33.797486');
INSERT INTO `django_migrations` (`id`, `app`, `name`, `applied`) VALUES (19, 'sessions', '0001_initial', '2024-04-27 23:56:33.804639');
INSERT INTO `django_migrations` (`id`, `app`, `name`, `applied`) VALUES (20, 'login', '0002_alter_userinfo_options_alter_userinfo_managers_and_more', '2024-04-29 17:17:17.343055');
INSERT INTO `django_migrations` (`id`, `app`, `name`, `applied`) VALUES (21, 'login', '0003_alter_userinfo_address_alter_userinfo_birthday_and_more', '2024-04-29 22:01:08.733904');
COMMIT;

-- ----------------------------
-- Table structure for django_session
-- ----------------------------
DROP TABLE IF EXISTS `django_session`;
CREATE TABLE `django_session` (
  `session_key` varchar(40) NOT NULL,
  `session_data` longtext NOT NULL,
  `expire_date` datetime(6) NOT NULL,
  PRIMARY KEY (`session_key`),
  KEY `django_session_expire_date_a5c62663` (`expire_date`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- ----------------------------
-- Records of django_session
-- ----------------------------
BEGIN;
INSERT INTO `django_session` (`session_key`, `session_data`, `expire_date`) VALUES ('08p8uk7gptqhxbzd3y24u7k1g3xzszip', '.eJxVjDsOwjAQBe_iGln-xhtK-pzBWnsXHEC2FCcV4u4QKQW0b2beS0Tc1hK3zkucSZyFE6ffLWF-cN0B3bHemsytrsuc5K7Ig3Y5NeLn5XD_Dgr28q3BDQSQNYOBnAMn8EYpr0c24K-WrfMQglLWAo0pBTTKEPrsrTbo9CDeH8FVNrY:1s29Wp:hk35kzmO8lEoZ-ZfwguLnb33I94pwtymFpukuIb_j4I', '2024-05-15 20:57:43.815399');
INSERT INTO `django_session` (`session_key`, `session_data`, `expire_date`) VALUES ('cf46y7iwq9ff4zdpj8bzsxjt19v7oabe', '.eJxVjDsOwjAQBe_iGln-xhtK-pzBWnsXHEC2FCcV4u4QKQW0b2beS0Tc1hK3zkucSZyFE6ffLWF-cN0B3bHemsytrsuc5K7Ig3Y5NeLn5XD_Dgr28q3BDQSQNYOBnAMn8EYpr0c24K-WrfMQglLWAo0pBTTKEPrsrTbo9CDeH8FVNrY:1s27dQ:issmOnYcf0s0hL8wUTyVcD4wNcVlYTjavfgSMUuCrM0', '2024-05-15 18:56:24.149212');
INSERT INTO `django_session` (`session_key`, `session_data`, `expire_date`) VALUES ('nd978a275riiwbjhtciz6qz3kmf81o39', '.eJxVjEEOwiAQRe_C2pAOGBCX7j0DGWYGqRqalHbVeHdp0oVu_3vvbyriupS4NpnjyOqqnDr9bgnpJXUH_MT6mDRNdZnHpHdFH7Tp-8Tyvh3u30HBVnotlpMkazKEYBxckIWAnPXIgBCELZlOvDAM1pxTRo95MMw9Q5tJfb4HSDlA:1s2A4H:PsJBXdfBO51A9eOMfBDqxKgr8okD5mQylwif6k2UjY8', '2024-05-15 21:32:17.684754');
COMMIT;

-- ----------------------------
-- Table structure for login_userinfo
-- ----------------------------
DROP TABLE IF EXISTS `login_userinfo`;
CREATE TABLE `login_userinfo` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `password` varchar(128) NOT NULL,
  `last_login` datetime(6) DEFAULT NULL,
  `is_superuser` tinyint(1) NOT NULL,
  `first_name` varchar(150) NOT NULL,
  `last_name` varchar(150) NOT NULL,
  `email` varchar(254) NOT NULL,
  `is_staff` tinyint(1) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `date_joined` datetime(6) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `job` varchar(100) DEFAULT NULL,
  `nationality` varchar(50) DEFAULT NULL,
  `city` varchar(50) DEFAULT NULL,
  `birthday` date DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `phone_number` varchar(20) DEFAULT NULL,
  `url` varchar(200) DEFAULT NULL,
  `c_time` datetime(6) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `login_userinfo_email_ea1e9545_uniq` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb3;

-- ----------------------------
-- Records of login_userinfo
-- ----------------------------
BEGIN;
INSERT INTO `login_userinfo` (`id`, `password`, `last_login`, `is_superuser`, `first_name`, `last_name`, `email`, `is_staff`, `is_active`, `date_joined`, `name`, `job`, `nationality`, `city`, `birthday`, `address`, `phone_number`, `url`, `c_time`) VALUES (1, 'pbkdf2_sha256$390000$mDiltmxycVxcAYzYOO6F12$uwK443MwOAaGiQ1uTScCnJklXzEfAYj7k+Endg8S64Y=', '2024-05-01 21:31:26.878555', 1, '', '', '3210297430@qq.com', 1, 1, '2024-04-28 00:04:31.941835', 'lxy', '学生', '中国', '天津', '2004-02-02', '11', '11', 'https://github.com/VivianLiu0202', '2024-04-28 00:04:32.024523');
INSERT INTO `login_userinfo` (`id`, `password`, `last_login`, `is_superuser`, `first_name`, `last_name`, `email`, `is_staff`, `is_active`, `date_joined`, `name`, `job`, `nationality`, `city`, `birthday`, `address`, `phone_number`, `url`, `c_time`) VALUES (2, 'pbkdf2_sha256$390000$AaewtNobCmugxNeKWVsjXU$vMorSoFJMJSxyPHLpNg3THYQmreMuob9hwbGIhtzXT4=', '2024-04-29 22:53:01.062385', 0, '', '', 'liuvivianyaya@gmail.com', 0, 1, '2024-04-29 22:02:06.566949', 'yuanyuan', '学生', '中国', '天津', NULL, NULL, NULL, NULL, '2024-04-29 22:02:06.688241');
INSERT INTO `login_userinfo` (`id`, `password`, `last_login`, `is_superuser`, `first_name`, `last_name`, `email`, `is_staff`, `is_active`, `date_joined`, `name`, `job`, `nationality`, `city`, `birthday`, `address`, `phone_number`, `url`, `c_time`) VALUES (3, 'pbkdf2_sha256$390000$wVYJHf2EUol5ewHGAZ8VrU$Faxbu4xA9GY/PrTNKnpD7c5VAxcuJHZYLo7JkdQSsBQ=', '2024-04-29 23:25:47.412160', 0, '', '', '1599470856@qq.com', 0, 1, '2024-04-29 23:25:47.293240', '小帅', '牛马', '中国', '成都', NULL, NULL, NULL, NULL, '2024-04-29 23:25:47.399644');
INSERT INTO `login_userinfo` (`id`, `password`, `last_login`, `is_superuser`, `first_name`, `last_name`, `email`, `is_staff`, `is_active`, `date_joined`, `name`, `job`, `nationality`, `city`, `birthday`, `address`, `phone_number`, `url`, `c_time`) VALUES (4, 'pbkdf2_sha256$390000$Ge7mKvwmXdeNGKj3mw2IC3$jDmgW+A3gL7CnHJP3tik/Y+Ic7MdpvEXNFkSYAkXCM4=', '2024-05-01 21:29:48.559547', 0, '', '', '1234567890@qq.com', 0, 1, '2024-04-29 23:29:31.342144', '小美', '上级审查', '中国', '北京', NULL, NULL, NULL, NULL, '2024-04-29 23:29:31.451552');
INSERT INTO `login_userinfo` (`id`, `password`, `last_login`, `is_superuser`, `first_name`, `last_name`, `email`, `is_staff`, `is_active`, `date_joined`, `name`, `job`, `nationality`, `city`, `birthday`, `address`, `phone_number`, `url`, `c_time`) VALUES (6, 'pbkdf2_sha256$390000$A1oWjnfFPXCHv4Sjg1r4Nb$m/CzUUFRDE9m7oR7oJ2ZkuecLCJIeKn7zZScSlxqjZU=', '2024-05-01 21:32:17.683546', 0, '', '', '23456@gmail.com', 0, 1, '2024-05-01 21:32:17.575356', 'haha', '牛马', '中国', '天津', NULL, NULL, NULL, NULL, '2024-05-01 21:32:17.674107');
COMMIT;

-- ----------------------------
-- Table structure for login_userinfo_groups
-- ----------------------------
DROP TABLE IF EXISTS `login_userinfo_groups`;
CREATE TABLE `login_userinfo_groups` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `userinfo_id` bigint NOT NULL,
  `group_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `login_userinfo_groups_userinfo_id_group_id_96b33f3a_uniq` (`userinfo_id`,`group_id`),
  KEY `login_userinfo_groups_group_id_384873c7_fk_auth_group_id` (`group_id`),
  CONSTRAINT `login_userinfo_groups_group_id_384873c7_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`),
  CONSTRAINT `login_userinfo_groups_userinfo_id_6b547176_fk_login_userinfo_id` FOREIGN KEY (`userinfo_id`) REFERENCES `login_userinfo` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- ----------------------------
-- Records of login_userinfo_groups
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for login_userinfo_user_permissions
-- ----------------------------
DROP TABLE IF EXISTS `login_userinfo_user_permissions`;
CREATE TABLE `login_userinfo_user_permissions` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `userinfo_id` bigint NOT NULL,
  `permission_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `login_userinfo_user_perm_userinfo_id_permission_i_47f80576_uniq` (`userinfo_id`,`permission_id`),
  KEY `login_userinfo_user__permission_id_f9760bae_fk_auth_perm` (`permission_id`),
  CONSTRAINT `login_userinfo_user__permission_id_f9760bae_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  CONSTRAINT `login_userinfo_user__userinfo_id_f41b83ea_fk_login_use` FOREIGN KEY (`userinfo_id`) REFERENCES `login_userinfo` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- ----------------------------
-- Records of login_userinfo_user_permissions
-- ----------------------------
BEGIN;
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
