/*
 Navicat Premium Data Transfer

 Source Server         : DBlocal
 Source Server Type    : MySQL
 Source Server Version : 50716
 Source Host           : localhost:3306
 Source Schema         : mobileapp_vs1

 Target Server Type    : MySQL
 Target Server Version : 50716
 File Encoding         : 65001

 Date: 01/11/2018 16:10:10
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for tbl_admin
-- ----------------------------
DROP TABLE IF EXISTS `tbl_admin`;
CREATE TABLE `tbl_admin`  (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_520_ci NULL DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_520_ci NULL DEFAULT NULL,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_520_ci NULL DEFAULT NULL,
  `create_at` timestamp(0) NULL DEFAULT NULL,
  `delete_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8 COLLATE = utf8_unicode_520_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tbl_admin
-- ----------------------------
INSERT INTO `tbl_admin` VALUES (1, 'admin@gmail.com', '123456', 'Admin', '2018-10-14 21:46:33', NULL);

-- ----------------------------
-- Table structure for tbl_article
-- ----------------------------
DROP TABLE IF EXISTS `tbl_article`;
CREATE TABLE `tbl_article`  (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_520_ci NULL DEFAULT NULL,
  `content` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_520_ci NULL DEFAULT NULL,
  `image` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_520_ci NULL DEFAULT NULL,
  `create_at` datetime(0) NULL DEFAULT NULL,
  `update_at` datetime(0) NULL DEFAULT NULL,
  `user_id` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 8 CHARACTER SET = utf8 COLLATE = utf8_unicode_520_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tbl_article
-- ----------------------------
INSERT INTO `tbl_article` VALUES (7, 'THONG BAO MOI NHAT', 'day la ke hoach moi nhat', NULL, '2018-10-26 22:43:11', NULL, NULL);

-- ----------------------------
-- Table structure for tbl_class
-- ----------------------------
DROP TABLE IF EXISTS `tbl_class`;
CREATE TABLE `tbl_class`  (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_520_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8 COLLATE = utf8_unicode_520_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tbl_class
-- ----------------------------
INSERT INTO `tbl_class` VALUES (2, 'AT13');

-- ----------------------------
-- Table structure for tbl_comment
-- ----------------------------
DROP TABLE IF EXISTS `tbl_comment`;
CREATE TABLE `tbl_comment`  (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `user_id` int(10) NULL DEFAULT NULL,
  `content` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_520_ci NULL DEFAULT NULL,
  `article_id` int(10) NULL DEFAULT NULL,
  `create_at` timestamp(6) NULL DEFAULT NULL,
  `update_at` timestamp(6) NULL DEFAULT NULL,
  `delete_at` timestamp(6) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_unicode_520_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for tbl_group
-- ----------------------------
DROP TABLE IF EXISTS `tbl_group`;
CREATE TABLE `tbl_group`  (
  `id` int(10) NOT NULL,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_520_ci NULL DEFAULT NULL,
  `descriptions` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_520_ci NULL DEFAULT NULL,
  `school_id` int(10) NULL DEFAULT NULL,
  `create_at` timestamp(6) NULL DEFAULT NULL,
  `update_at` timestamp(6) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_unicode_520_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for tbl_membergroups
-- ----------------------------
DROP TABLE IF EXISTS `tbl_membergroups`;
CREATE TABLE `tbl_membergroups`  (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_520_ci NOT NULL,
  `email` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_520_ci NULL DEFAULT NULL,
  `address` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_520_ci NULL DEFAULT NULL,
  `groups_id` int(10) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 17 CHARACTER SET = utf8 COLLATE = utf8_unicode_520_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tbl_membergroups
-- ----------------------------
INSERT INTO `tbl_membergroups` VALUES (13, 'duydu', 'duydu@gmail.com', 'DIENBIEN', NULL);
INSERT INTO `tbl_membergroups` VALUES (14, 'member1', 'member@gmail.com', 'HN', NULL);
INSERT INTO `tbl_membergroups` VALUES (15, 'MEMBER2', 'MEMBER2@gamail.com', 'HN', NULL);
INSERT INTO `tbl_membergroups` VALUES (16, 'KMA', 'kmam@gmail.com', 'HN', NULL);

-- ----------------------------
-- Table structure for tbl_notification
-- ----------------------------
DROP TABLE IF EXISTS `tbl_notification`;
CREATE TABLE `tbl_notification`  (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `content` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_520_ci NULL DEFAULT NULL,
  `create_at` datetime(0) NULL DEFAULT NULL,
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_520_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 7 CHARACTER SET = utf8 COLLATE = utf8_unicode_520_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tbl_notification
-- ----------------------------
INSERT INTO `tbl_notification` VALUES (6, 'Day la thong bao tu quan tri vien!', '2018-10-26 22:41:20', 'THONG BAO');

-- ----------------------------
-- Table structure for tbl_school
-- ----------------------------
DROP TABLE IF EXISTS `tbl_school`;
CREATE TABLE `tbl_school`  (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_520_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 15 CHARACTER SET = utf8 COLLATE = utf8_unicode_520_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tbl_school
-- ----------------------------
INSERT INTO `tbl_school` VALUES (14, 'KMA GROUPS');

-- ----------------------------
-- Table structure for tbl_teacher
-- ----------------------------
DROP TABLE IF EXISTS `tbl_teacher`;
CREATE TABLE `tbl_teacher`  (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_520_ci NULL DEFAULT NULL,
  `age` int(10) NULL DEFAULT NULL,
  `gender` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_520_ci NULL DEFAULT NULL,
  `image` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_520_ci NULL DEFAULT NULL,
  `class_id` int(10) NULL DEFAULT NULL,
  `create_at` timestamp(6) NULL DEFAULT NULL,
  `delete_at` timestamp(6) NULL DEFAULT NULL,
  `heigth` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_520_ci NULL DEFAULT NULL,
  `weigth` int(10) NULL DEFAULT NULL,
  `birthday` date NULL DEFAULT NULL,
  `address` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_520_ci NULL DEFAULT NULL,
  `email` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_520_ci NULL DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_520_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 37 CHARACTER SET = utf8 COLLATE = utf8_unicode_520_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tbl_teacher
-- ----------------------------
INSERT INTO `tbl_teacher` VALUES (33, 'Giaovien1', 30, 'Nam', NULL, NULL, NULL, NULL, '1m70', 60, NULL, 'HANOI', 'gv1@gmail.com', NULL);
INSERT INTO `tbl_teacher` VALUES (36, 'giao vien 2', 20, 'nam', NULL, NULL, NULL, NULL, '1m80', 60, NULL, 'hn', 'gv@gmail.com', NULL);

-- ----------------------------
-- Table structure for tbl_user
-- ----------------------------
DROP TABLE IF EXISTS `tbl_user`;
CREATE TABLE `tbl_user`  (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_520_ci NULL DEFAULT NULL,
  `email` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_520_ci NULL DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_520_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 6 CHARACTER SET = utf8 COLLATE = utf8_unicode_520_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tbl_user
-- ----------------------------
INSERT INTO `tbl_user` VALUES (1, 'Duy Du', 'du@gmail.com', '1');
INSERT INTO `tbl_user` VALUES (5, 'NAM NAM', 'nam@gmail.com', '1');

SET FOREIGN_KEY_CHECKS = 1;
