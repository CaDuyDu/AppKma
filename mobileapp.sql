/*
 Navicat Premium Data Transfer

 Source Server         : DBlocal
 Source Server Type    : MySQL
 Source Server Version : 50716
 Source Host           : localhost:3306
 Source Schema         : mobileapp

 Target Server Type    : MySQL
 Target Server Version : 50716
 File Encoding         : 65001

 Date: 01/11/2018 16:10:21
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for sessions_admin
-- ----------------------------
DROP TABLE IF EXISTS `sessions_admin`;
CREATE TABLE `sessions_admin`  (
  `sess_id` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT 'ID session',
  `sess_data` longtext CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT 'Session data',
  `sess_time` bigint(20) NOT NULL COMMENT 'Thoi diem luu session',
  `sess_userid` bigint(20) NULL DEFAULT NULL COMMENT 'ID cua nguoi dung tuong ung voi session',
  PRIMARY KEY (`sess_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for sf_guard_forgot_password
-- ----------------------------
DROP TABLE IF EXISTS `sf_guard_forgot_password`;
CREATE TABLE `sf_guard_forgot_password`  (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) NOT NULL,
  `unique_key` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `expires_at` datetime(0) NOT NULL,
  `created_at` datetime(0) NOT NULL,
  `updated_at` datetime(0) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `user_id_idx`(`user_id`) USING BTREE,
  CONSTRAINT `sf_guard_forgot_password_user_id_sf_guard_user_id` FOREIGN KEY (`user_id`) REFERENCES `sf_guard_user` (`id`) ON DELETE CASCADE ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for sf_guard_group
-- ----------------------------
DROP TABLE IF EXISTS `sf_guard_group`;
CREATE TABLE `sf_guard_group`  (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `description` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  `created_at` datetime(0) NOT NULL,
  `updated_at` datetime(0) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `name`(`name`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for sf_guard_group_permission
-- ----------------------------
DROP TABLE IF EXISTS `sf_guard_group_permission`;
CREATE TABLE `sf_guard_group_permission`  (
  `group_id` bigint(20) NOT NULL,
  `permission_id` bigint(20) NOT NULL,
  `created_at` datetime(0) NOT NULL,
  `updated_at` datetime(0) NOT NULL,
  PRIMARY KEY (`group_id`, `permission_id`) USING BTREE,
  INDEX `sf_guard_group_permission_permission_id_sf_guard_permission_id`(`permission_id`) USING BTREE,
  CONSTRAINT `sf_guard_group_permission_group_id_sf_guard_group_id` FOREIGN KEY (`group_id`) REFERENCES `sf_guard_group` (`id`) ON DELETE CASCADE ON UPDATE RESTRICT,
  CONSTRAINT `sf_guard_group_permission_permission_id_sf_guard_permission_id` FOREIGN KEY (`permission_id`) REFERENCES `sf_guard_permission` (`id`) ON DELETE CASCADE ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for sf_guard_permission
-- ----------------------------
DROP TABLE IF EXISTS `sf_guard_permission`;
CREATE TABLE `sf_guard_permission`  (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `description` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  `created_at` datetime(0) NOT NULL,
  `updated_at` datetime(0) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `name`(`name`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for sf_guard_remember_key
-- ----------------------------
DROP TABLE IF EXISTS `sf_guard_remember_key`;
CREATE TABLE `sf_guard_remember_key`  (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) NULL DEFAULT NULL,
  `remember_key` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `ip_address` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `created_at` datetime(0) NOT NULL,
  `updated_at` datetime(0) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `user_id_idx`(`user_id`) USING BTREE,
  CONSTRAINT `sf_guard_remember_key_user_id_sf_guard_user_id` FOREIGN KEY (`user_id`) REFERENCES `sf_guard_user` (`id`) ON DELETE CASCADE ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for sf_guard_user
-- ----------------------------
DROP TABLE IF EXISTS `sf_guard_user`;
CREATE TABLE `sf_guard_user`  (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `last_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `phone` varchar(15) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `email_address` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `username` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `algorithm` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT 'sha1',
  `salt` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `is_active` tinyint(1) NULL DEFAULT 0,
  `is_super_admin` tinyint(1) NULL DEFAULT 0,
  `last_login` datetime(0) NULL DEFAULT NULL,
  `pass_update_at` datetime(0) NULL DEFAULT NULL COMMENT 'Thoi gian update mat khau',
  `is_lock_signin` tinyint(1) NULL DEFAULT NULL COMMENT 'Trang thai: 1 - bi khoa tai khoan, 0 - ko bi khoa',
  `locked_time` bigint(20) NULL DEFAULT NULL COMMENT 'Thoi diem khoa tai khoan',
  `created_at` datetime(0) NOT NULL,
  `updated_at` datetime(0) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `username`(`username`) USING BTREE,
  UNIQUE INDEX `email_address`(`email_address`) USING BTREE,
  INDEX `is_active_idx_idx`(`is_active`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for sf_guard_user_group
-- ----------------------------
DROP TABLE IF EXISTS `sf_guard_user_group`;
CREATE TABLE `sf_guard_user_group`  (
  `user_id` bigint(20) NOT NULL,
  `group_id` bigint(20) NOT NULL,
  `created_at` datetime(0) NOT NULL,
  `updated_at` datetime(0) NOT NULL,
  PRIMARY KEY (`user_id`, `group_id`) USING BTREE,
  INDEX `sf_guard_user_group_group_id_sf_guard_group_id`(`group_id`) USING BTREE,
  CONSTRAINT `sf_guard_user_group_group_id_sf_guard_group_id` FOREIGN KEY (`group_id`) REFERENCES `sf_guard_group` (`id`) ON DELETE CASCADE ON UPDATE RESTRICT,
  CONSTRAINT `sf_guard_user_group_user_id_sf_guard_user_id` FOREIGN KEY (`user_id`) REFERENCES `sf_guard_user` (`id`) ON DELETE CASCADE ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for sf_guard_user_permission
-- ----------------------------
DROP TABLE IF EXISTS `sf_guard_user_permission`;
CREATE TABLE `sf_guard_user_permission`  (
  `user_id` bigint(20) NOT NULL,
  `permission_id` bigint(20) NOT NULL,
  `created_at` datetime(0) NOT NULL,
  `updated_at` datetime(0) NOT NULL,
  PRIMARY KEY (`user_id`, `permission_id`) USING BTREE,
  INDEX `sf_guard_user_permission_permission_id_sf_guard_permission_id`(`permission_id`) USING BTREE,
  CONSTRAINT `sf_guard_user_permission_permission_id_sf_guard_permission_id` FOREIGN KEY (`permission_id`) REFERENCES `sf_guard_permission` (`id`) ON DELETE CASCADE ON UPDATE RESTRICT,
  CONSTRAINT `sf_guard_user_permission_user_id_sf_guard_user_id` FOREIGN KEY (`user_id`) REFERENCES `sf_guard_user` (`id`) ON DELETE CASCADE ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for tbl_article
-- ----------------------------
DROP TABLE IF EXISTS `tbl_article`;
CREATE TABLE `tbl_article`  (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT 'Tiêu đề',
  `content` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT 'Nội dung bài viết',
  `type` tinyint(2) NOT NULL DEFAULT 0 COMMENT 'Phạm vi tin tức (0 - Toàn trường; 1 - Theo khối; 2 - Theo lớp; 3 - Từng cá nhân)',
  `user_id` bigint(20) NOT NULL COMMENT 'ID người tạo',
  `is_delete` tinyint(1) NOT NULL DEFAULT 0 COMMENT 'Trạng thái xóa (0: chưa xóa - 1: đã xóa)',
  `status` tinyint(1) NOT NULL DEFAULT 0 COMMENT 'Trạng thái kích hoạt (0: không kích hoạt; 1: kích hoạt)',
  `created_at` datetime(0) NOT NULL,
  `updated_at` datetime(0) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `user_id_idx`(`user_id`) USING BTREE,
  CONSTRAINT `tbl_article_user_id_tbl_user_id` FOREIGN KEY (`user_id`) REFERENCES `tbl_user` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tbl_article
-- ----------------------------
INSERT INTO `tbl_article` VALUES (1, 'Bài viết mới', 'Nội dung bài viết', 0, 1, 0, 1, '2018-09-04 00:38:11', '2018-09-04 00:38:11');
INSERT INTO `tbl_article` VALUES (2, 'Tin mới 2', 'Nội dung tin 2', 0, 1, 0, 1, '2018-09-16 19:12:02', '2018-09-16 19:12:02');

-- ----------------------------
-- Table structure for tbl_article_image
-- ----------------------------
DROP TABLE IF EXISTS `tbl_article_image`;
CREATE TABLE `tbl_article_image`  (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT 'Tiêu đề',
  `image_path` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT 'Đường dẫn ảnh',
  `article_id` bigint(20) NOT NULL COMMENT 'ID bài viết',
  `status` tinyint(1) NOT NULL DEFAULT 0 COMMENT 'Trạng thái kích hoạt (0: không kích hoạt; 1: kích hoạt)',
  `is_delete` tinyint(1) NULL DEFAULT 0 COMMENT 'Trạng thái xóa (0: chưa xóa - 1: đã xóa)',
  `created_at` datetime(0) NOT NULL,
  `updated_at` datetime(0) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `article_id_idx`(`article_id`) USING BTREE,
  CONSTRAINT `tbl_article_image_article_id_tbl_article_id` FOREIGN KEY (`article_id`) REFERENCES `tbl_article` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tbl_article_image
-- ----------------------------
INSERT INTO `tbl_article_image` VALUES (2, 'ảnh tin tức', '/uploads/images/article/2018/09/16/687dfbe18199149b0b16893e9f790a2d.jpg', 2, 1, 0, '2018-09-16 19:19:29', '2018-09-16 19:20:49');
INSERT INTO `tbl_article_image` VALUES (3, 'ảnh tin tức', '/uploads/images/article/2018/09/16/63d2f9e5403d959a08273635f961cf5b.jpg', 2, 1, 0, '2018-09-16 19:19:31', '2018-09-16 19:19:31');

-- ----------------------------
-- Table structure for tbl_article_ref
-- ----------------------------
DROP TABLE IF EXISTS `tbl_article_ref`;
CREATE TABLE `tbl_article_ref`  (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `member_id` bigint(20) NULL DEFAULT NULL COMMENT 'ID học sinh',
  `class_id` bigint(20) NULL DEFAULT NULL COMMENT 'ID lớp học',
  `group_id` bigint(20) NULL DEFAULT NULL COMMENT 'ID khối',
  `article_id` bigint(20) NOT NULL COMMENT 'ID bài viết',
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `article_id_idx`(`article_id`) USING BTREE,
  INDEX `class_id_idx`(`class_id`) USING BTREE,
  INDEX `group_id_idx`(`group_id`) USING BTREE,
  INDEX `member_id_idx`(`member_id`) USING BTREE,
  CONSTRAINT `tbl_article_ref_article_id_tbl_article_id` FOREIGN KEY (`article_id`) REFERENCES `tbl_article` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `tbl_article_ref_class_id_tbl_class_id` FOREIGN KEY (`class_id`) REFERENCES `tbl_class` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `tbl_article_ref_group_id_tbl_group_id` FOREIGN KEY (`group_id`) REFERENCES `tbl_group` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `tbl_article_ref_member_id_tbl_member_id` FOREIGN KEY (`member_id`) REFERENCES `tbl_member` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for tbl_class
-- ----------------------------
DROP TABLE IF EXISTS `tbl_class`;
CREATE TABLE `tbl_class`  (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(127) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT 'Tên lớp',
  `description` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT 'Mô tả chung',
  `group_id` bigint(20) NOT NULL COMMENT 'ID khối',
  `is_delete` tinyint(1) NOT NULL DEFAULT 0 COMMENT 'Trạng thái xóa (0: chưa xóa - 1: đã xóa)',
  `status` tinyint(1) NOT NULL DEFAULT 0 COMMENT 'Trạng thái kích hoạt (0: không kích hoạt; 1: kích hoạt)',
  `created_at` datetime(0) NOT NULL,
  `updated_at` datetime(0) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `group_id_idx`(`group_id`) USING BTREE,
  CONSTRAINT `tbl_class_group_id_tbl_group_id` FOREIGN KEY (`group_id`) REFERENCES `tbl_group` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tbl_class
-- ----------------------------
INSERT INTO `tbl_class` VALUES (1, '1A', 'Lớp 1A', 1, 0, 1, '2018-09-09 20:18:31', '2018-09-09 20:18:31');

-- ----------------------------
-- Table structure for tbl_comment
-- ----------------------------
DROP TABLE IF EXISTS `tbl_comment`;
CREATE TABLE `tbl_comment`  (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) NOT NULL COMMENT 'ID người bình luận',
  `content` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT 'Nội dung bình luận',
  `parent_id` bigint(20) NULL DEFAULT NULL COMMENT 'ID bình luận gốc',
  `article_id` bigint(20) NULL DEFAULT NULL COMMENT 'ID bài viết',
  `is_delete` tinyint(1) NOT NULL DEFAULT 0 COMMENT 'Trạng thái xóa (0: chưa xóa - 1: đã xóa)',
  `status` tinyint(1) NOT NULL DEFAULT 0 COMMENT 'Trạng thái kích hoạt (0: không kích hoạt; 1: kích hoạt)',
  `created_at` datetime(0) NOT NULL,
  `updated_at` datetime(0) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `user_id_idx`(`user_id`) USING BTREE,
  INDEX `parent_id_idx`(`parent_id`) USING BTREE,
  CONSTRAINT `tbl_comment_parent_id_tbl_comment_id` FOREIGN KEY (`parent_id`) REFERENCES `tbl_comment` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `tbl_comment_user_id_tbl_user_id` FOREIGN KEY (`user_id`) REFERENCES `tbl_user` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tbl_comment
-- ----------------------------
INSERT INTO `tbl_comment` VALUES (1, 1, 'Xin chào', NULL, 1, 0, 1, '2018-09-17 19:05:28', '2018-09-17 19:05:28');
INSERT INTO `tbl_comment` VALUES (2, 1, 'Xin chào', NULL, NULL, 0, 1, '2018-09-17 19:05:28', '2018-09-17 19:05:28');

-- ----------------------------
-- Table structure for tbl_group
-- ----------------------------
DROP TABLE IF EXISTS `tbl_group`;
CREATE TABLE `tbl_group`  (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(127) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT 'Tên trường',
  `description` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT 'Mô tả chung',
  `school_id` bigint(20) NOT NULL COMMENT 'ID trường',
  `is_delete` tinyint(1) NOT NULL DEFAULT 0 COMMENT 'Trạng thái xóa (0: chưa xóa - 1: đã xóa)',
  `status` tinyint(1) NOT NULL DEFAULT 0 COMMENT 'Trạng thái kích hoạt (0: không kích hoạt; 1: kích hoạt)',
  `created_at` datetime(0) NOT NULL,
  `updated_at` datetime(0) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `school_id_idx`(`school_id`) USING BTREE,
  CONSTRAINT `tbl_group_school_id_tbl_school_id` FOREIGN KEY (`school_id`) REFERENCES `tbl_school` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tbl_group
-- ----------------------------
INSERT INTO `tbl_group` VALUES (1, '1 tuổi', NULL, 1, 0, 1, '2018-09-04 00:21:52', '2018-09-04 00:21:52');

-- ----------------------------
-- Table structure for tbl_member
-- ----------------------------
DROP TABLE IF EXISTS `tbl_member`;
CREATE TABLE `tbl_member`  (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(127) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT 'Tên học sinh',
  `birthday` varchar(23) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT 'Ngày sinh',
  `height` bigint(20) NULL DEFAULT NULL COMMENT 'Chiều cao (cm)',
  `weight` bigint(20) NULL DEFAULT NULL COMMENT 'Cân nặng (kg)',
  `description` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT 'Giới thiệu chung',
  `image_path` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT 'Ảnh đại diện của học sinh',
  `class_id` bigint(20) NOT NULL COMMENT 'ID lớp',
  `is_delete` tinyint(1) NOT NULL COMMENT 'Trạng thái xóa (0: chưa xóa - 1: đã xóa)',
  `status` tinyint(1) NOT NULL DEFAULT 0 COMMENT 'Trạng thái kích hoạt (0: không kích hoạt; 1: kích hoạt)',
  `created_at` datetime(0) NOT NULL,
  `updated_at` datetime(0) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `class_id_idx`(`class_id`) USING BTREE,
  CONSTRAINT `tbl_member_class_id_tbl_class_id` FOREIGN KEY (`class_id`) REFERENCES `tbl_class` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tbl_member
-- ----------------------------
INSERT INTO `tbl_member` VALUES (1, 'Bim', '2016-01-01', 100, 30, 'Đẹp zai	', NULL, 1, 0, 1, '2018-09-09 20:18:58', '2018-09-09 20:18:58');

-- ----------------------------
-- Table structure for tbl_member_activity
-- ----------------------------
DROP TABLE IF EXISTS `tbl_member_activity`;
CREATE TABLE `tbl_member_activity`  (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `member_id` bigint(20) NOT NULL COMMENT 'ID học sinh',
  `date` date NOT NULL COMMENT 'Ngày hoạt động',
  `type` tinyint(2) NOT NULL DEFAULT 0 COMMENT 'Loạt hoạt động (0: Đi học; 1: Nghỉ học; 2: Đi dã ngoại; 3: Hoạt động văn nghệ; 4: Khai giảng; 5: Bế giảng; 6: Bắt đầu đi học; 7: Nghỉ hẳn)',
  `description` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT 'Thông tin hoạt động',
  `health` tinyint(2) NULL DEFAULT 0 COMMENT 'Sức khỏe (0: Ốm; 1: Bình thường; 2: Khỏe mạnh)',
  `height` bigint(20) NULL DEFAULT NULL COMMENT 'Chiều cao (cm)',
  `weight` bigint(20) NULL DEFAULT NULL COMMENT 'Cân nặng (kg)',
  `status` tinyint(1) NOT NULL DEFAULT 0 COMMENT 'Trạng thái kích hoạt (0: không kích hoạt; 1: kích hoạt)',
  `is_delete` tinyint(1) NOT NULL DEFAULT 0 COMMENT 'Trạng thái xóa (0: chưa xóa - 1: đã xóa)',
  `created_at` datetime(0) NOT NULL,
  `updated_at` datetime(0) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `member_id_idx`(`member_id`) USING BTREE,
  CONSTRAINT `tbl_member_activity_member_id_tbl_member_id` FOREIGN KEY (`member_id`) REFERENCES `tbl_member` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tbl_member_activity
-- ----------------------------
INSERT INTO `tbl_member_activity` VALUES (2, 1, '2018-09-09', 0, 'Sức khỏe tốt', 1, 100, 30, 1, 0, '2018-09-09 20:19:32', '2018-09-09 20:19:32');

-- ----------------------------
-- Table structure for tbl_member_user_ref
-- ----------------------------
DROP TABLE IF EXISTS `tbl_member_user_ref`;
CREATE TABLE `tbl_member_user_ref`  (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `member_id` bigint(20) NULL DEFAULT NULL COMMENT 'ID học sinh',
  `user_id` bigint(20) NOT NULL COMMENT 'ID phụ huynh',
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `member_id_idx`(`member_id`) USING BTREE,
  INDEX `user_id_idx`(`user_id`) USING BTREE,
  CONSTRAINT `tbl_member_user_ref_member_id_tbl_member_id` FOREIGN KEY (`member_id`) REFERENCES `tbl_member` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `tbl_member_user_ref_user_id_tbl_user_id` FOREIGN KEY (`user_id`) REFERENCES `tbl_user` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for tbl_menu
-- ----------------------------
DROP TABLE IF EXISTS `tbl_menu`;
CREATE TABLE `tbl_menu`  (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `title` varchar(127) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT 'Tiêu đề',
  `description` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT 'Giới thiệu chung',
  `image_path` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT 'Ảnh minh họa',
  `type` tinyint(2) NULL DEFAULT NULL COMMENT 'Loại thực đơn (0: Sáng - 1: Trưa - 2: Chiều)',
  `is_delete` tinyint(1) NOT NULL DEFAULT 0 COMMENT 'Trạng thái xóa (0: chưa xóa - 1: đã xóa)',
  `status` tinyint(1) NOT NULL DEFAULT 0 COMMENT 'Trạng thái kích hoạt (0: không kích hoạt; 1: kích hoạt)',
  `created_at` datetime(0) NOT NULL,
  `updated_at` datetime(0) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for tbl_menu_ref
-- ----------------------------
DROP TABLE IF EXISTS `tbl_menu_ref`;
CREATE TABLE `tbl_menu_ref`  (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `member_id` bigint(20) NULL DEFAULT NULL COMMENT 'ID học sinh',
  `class_id` bigint(20) NULL DEFAULT NULL COMMENT 'ID lớp học',
  `group_id` bigint(20) NULL DEFAULT NULL COMMENT 'ID khối',
  `menu_id` bigint(20) NOT NULL COMMENT 'ID thực đơn',
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `class_id_idx`(`class_id`) USING BTREE,
  INDEX `group_id_idx`(`group_id`) USING BTREE,
  INDEX `member_id_idx`(`member_id`) USING BTREE,
  INDEX `menu_id_idx`(`menu_id`) USING BTREE,
  CONSTRAINT `tbl_menu_ref_class_id_tbl_class_id` FOREIGN KEY (`class_id`) REFERENCES `tbl_class` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `tbl_menu_ref_group_id_tbl_group_id` FOREIGN KEY (`group_id`) REFERENCES `tbl_group` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `tbl_menu_ref_member_id_tbl_member_id` FOREIGN KEY (`member_id`) REFERENCES `tbl_member` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `tbl_menu_ref_menu_id_tbl_menu_id` FOREIGN KEY (`menu_id`) REFERENCES `tbl_menu` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for tbl_notification
-- ----------------------------
DROP TABLE IF EXISTS `tbl_notification`;
CREATE TABLE `tbl_notification`  (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `sender_id` varchar(16) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT 'ID của người gửi thông báo',
  `receiver_id` bigint(20) NULL DEFAULT NULL COMMENT 'ID của người nhận thông báo',
  `receiver_phone` varchar(16) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT 'SĐT của người nhận thông báo',
  `content` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT 'Nội dung thông báo',
  `type` tinyint(2) NULL DEFAULT 0 COMMENT 'Loại thông báo (0 - Notification; 1 - Notification + SMS)',
  `article_id` bigint(20) NULL DEFAULT NULL COMMENT 'ID bài viết',
  `created_at` datetime(0) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `sender_id_idx`(`sender_id`) USING BTREE,
  INDEX `receiver_id_idx`(`receiver_id`) USING BTREE,
  INDEX `article_id_idx`(`article_id`) USING BTREE,
  CONSTRAINT `tbl_notification_article_id_tbl_article_id` FOREIGN KEY (`article_id`) REFERENCES `tbl_article` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `tbl_notification_receiver_id_tbl_user_id` FOREIGN KEY (`receiver_id`) REFERENCES `tbl_user` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for tbl_notification_his
-- ----------------------------
DROP TABLE IF EXISTS `tbl_notification_his`;
CREATE TABLE `tbl_notification_his`  (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `sender_id` varchar(16) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT 'ID của người gửi thông báo',
  `receiver_id` bigint(20) NULL DEFAULT NULL COMMENT 'ID của người nhận thông báo',
  `receiver_phone` varchar(16) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT 'SĐT của người nhận thông báo',
  `content` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT 'Nội dung thông báo',
  `type` tinyint(2) NULL DEFAULT 0 COMMENT 'Loại thông báo (0 - Notification; 1 - Notification + SMS)',
  `article_id` bigint(20) NULL DEFAULT NULL COMMENT 'ID bài viết',
  `status` smallint(6) NULL DEFAULT NULL COMMENT 'Trạng thái push notification (0 - Không có registration_ids; 1 - Thành công; 2 - Thất bại)',
  `response` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT 'Response của server',
  `created_at` datetime(0) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `sender_id_idx`(`sender_id`) USING BTREE,
  INDEX `receiver_id_idx`(`receiver_id`) USING BTREE,
  INDEX `article_id_idx`(`article_id`) USING BTREE,
  CONSTRAINT `tbl_notification_his_article_id_tbl_article_id` FOREIGN KEY (`article_id`) REFERENCES `tbl_article` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `tbl_notification_his_receiver_id_tbl_user_id` FOREIGN KEY (`receiver_id`) REFERENCES `tbl_user` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tbl_notification_his
-- ----------------------------
INSERT INTO `tbl_notification_his` VALUES (1, '1', 1, NULL, 'Tin nhắn mới 1', 0, 2, 1, NULL, '2018-09-17 15:31:09');
INSERT INTO `tbl_notification_his` VALUES (2, '1', 1, NULL, 'Tin nhắn mới 2', 0, 2, 1, NULL, '2018-09-17 15:31:09');

-- ----------------------------
-- Table structure for tbl_notification_program
-- ----------------------------
DROP TABLE IF EXISTS `tbl_notification_program`;
CREATE TABLE `tbl_notification_program`  (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT 'Tiêu đề',
  `type` tinyint(2) NOT NULL DEFAULT 0 COMMENT 'Phạm vi thông báo (0 - Toàn trường; 1 - Theo khối; 2 - Theo lớp; 3 - Từng cá nhân)',
  `content` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT 'Nội dung thông báo',
  `article_id` bigint(20) NULL DEFAULT NULL COMMENT 'Gắn thông báo vào bài viết',
  `start_time` datetime(0) NOT NULL COMMENT 'Thời gian bắt đầu',
  `user_id` bigint(20) NOT NULL COMMENT 'ID người tạo',
  `status` tinyint(2) NOT NULL DEFAULT 0 COMMENT 'Trạng thái (0: nháp; 1: chờ phê duyệt; 2: phê duyệt; 3: đã gửi)',
  `created_at` datetime(0) NOT NULL,
  `updated_at` datetime(0) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `user_id_idx`(`user_id`) USING BTREE,
  INDEX `article_id_idx`(`article_id`) USING BTREE,
  CONSTRAINT `tbl_notification_program_article_id_tbl_article_id` FOREIGN KEY (`article_id`) REFERENCES `tbl_article` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `tbl_notification_program_user_id_tbl_user_id` FOREIGN KEY (`user_id`) REFERENCES `tbl_user` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tbl_notification_program
-- ----------------------------
INSERT INTO `tbl_notification_program` VALUES (1, 'Chương trình mới', 1, 'Thông báo', 1, '2018-09-04 00:00:00', 1, 1, '2018-09-03 17:40:19', '2018-09-03 17:40:19');

-- ----------------------------
-- Table structure for tbl_notification_program_ref
-- ----------------------------
DROP TABLE IF EXISTS `tbl_notification_program_ref`;
CREATE TABLE `tbl_notification_program_ref`  (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `member_id` bigint(20) NULL DEFAULT NULL COMMENT 'ID học sinh',
  `class_id` bigint(20) NULL DEFAULT NULL COMMENT 'ID lớp học',
  `group_id` bigint(20) NULL DEFAULT NULL COMMENT 'ID khối',
  `program_id` bigint(20) NOT NULL COMMENT 'ID chương trình',
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `class_id_idx`(`class_id`) USING BTREE,
  INDEX `group_id_idx`(`group_id`) USING BTREE,
  INDEX `member_id_idx`(`member_id`) USING BTREE,
  INDEX `program_id_idx`(`program_id`) USING BTREE,
  CONSTRAINT `tbl_notification_program_ref_class_id_tbl_class_id` FOREIGN KEY (`class_id`) REFERENCES `tbl_class` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `tbl_notification_program_ref_group_id_tbl_group_id` FOREIGN KEY (`group_id`) REFERENCES `tbl_group` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `tbl_notification_program_ref_member_id_tbl_member_id` FOREIGN KEY (`member_id`) REFERENCES `tbl_member` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `tpti` FOREIGN KEY (`program_id`) REFERENCES `tbl_notification_program` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tbl_notification_program_ref
-- ----------------------------
INSERT INTO `tbl_notification_program_ref` VALUES (1, NULL, NULL, 1, 1);

-- ----------------------------
-- Table structure for tbl_otp
-- ----------------------------
DROP TABLE IF EXISTS `tbl_otp`;
CREATE TABLE `tbl_otp`  (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `account` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT 'Địa chỉ mail hoặc SĐT cần xác thực',
  `otp` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT 'Mã otp',
  `is_lock` tinyint(1) NULL DEFAULT 0 COMMENT 'Đã khóa account hay chưa',
  `lock_time` bigint(20) NULL DEFAULT 0 COMMENT 'Thời gian khóa',
  `expired_time` datetime(0) NOT NULL COMMENT 'Thời gian mã xác nhận còn hiệu lực',
  `created_at` datetime(0) NOT NULL,
  `updated_at` datetime(0) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = 'Bang luu thong tin ma xac nhan' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tbl_otp
-- ----------------------------
INSERT INTO `tbl_otp` VALUES (1, 'tiennx.it@gmail.com', '939955', 0, 0, '2018-09-03 17:24:41', '2018-09-03 16:24:41', '2018-09-03 16:24:41');

-- ----------------------------
-- Table structure for tbl_school
-- ----------------------------
DROP TABLE IF EXISTS `tbl_school`;
CREATE TABLE `tbl_school`  (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(127) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT 'Tên trường',
  `phone` varchar(15) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT 'SĐT liên hệ',
  `email` varchar(63) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT 'Email',
  `website` varchar(127) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT 'Website',
  `address` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT 'Địa chỉ',
  `description` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT 'Mô tả chung',
  `status` tinyint(1) NOT NULL DEFAULT 0 COMMENT 'Trạng thái kích hoạt (0: không kích hoạt; 1: kích hoạt)',
  `created_at` datetime(0) NOT NULL,
  `updated_at` datetime(0) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tbl_school
-- ----------------------------
INSERT INTO `tbl_school` VALUES (1, 'Mầm non Kitty', '0989335466', 'tiennx.it@gmail.com', NULL, 'Hà Nội', NULL, 1, '2018-09-04 00:20:00', '2018-09-04 00:20:00');

-- ----------------------------
-- Table structure for tbl_setting
-- ----------------------------
DROP TABLE IF EXISTS `tbl_setting`;
CREATE TABLE `tbl_setting`  (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT 'ID tu tang',
  `name` varchar(127) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `description` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `type` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT 'text',
  `cfg_type` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT 'ALL',
  `value` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  `params` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  `group_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `default_value` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  `credentials` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `name`(`name`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = 'Bang Luu cau hinh cua he thong' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for tbl_summary
-- ----------------------------
DROP TABLE IF EXISTS `tbl_summary`;
CREATE TABLE `tbl_summary`  (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `member_id` bigint(20) NULL DEFAULT NULL COMMENT 'ID học sinh',
  `date` date NULL DEFAULT NULL COMMENT 'Ngày hoạt động',
  `week` bigint(20) NULL DEFAULT NULL COMMENT 'Tuần',
  `summary` tinyint(2) NULL DEFAULT NULL COMMENT 'Tổng kết (0: Kém; 1: Yếu; 2: TB; 3: Khá; 4: Tốt; 5: Xuất sắc)',
  `learning` tinyint(2) NULL DEFAULT NULL COMMENT 'Tổng kết (0: Kém; 1: Yếu; 2: TB; 3: Khá; 4: Tốt; 5: Xuất sắc)',
  `behavior` tinyint(2) NULL DEFAULT NULL COMMENT 'Tổng kết (0: Kém; 1: Yếu; 2: TB; 3: Khá; 4: Tốt; 5: Xuất sắc)',
  `attendance` tinyint(2) NULL DEFAULT NULL COMMENT 'Đi học đầy đủ (0: Ít đi học; 1: Đầy đủ; 2: Chăm chỉ)',
  `description` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT 'Nhận xét chung',
  `user_id` bigint(20) NOT NULL COMMENT 'ID người tạo',
  `status` tinyint(1) NOT NULL DEFAULT 0 COMMENT 'Trạng thái kích hoạt (0: không kích hoạt; 1: kích hoạt)',
  `is_delete` tinyint(1) NULL DEFAULT 0 COMMENT 'Trạng thái xóa (0: chưa xóa - 1: đã xóa)',
  `created_at` datetime(0) NOT NULL,
  `updated_at` datetime(0) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `member_id_idx`(`member_id`) USING BTREE,
  CONSTRAINT `tbl_summary_member_id_tbl_member_id` FOREIGN KEY (`member_id`) REFERENCES `tbl_member` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 6 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tbl_summary
-- ----------------------------
INSERT INTO `tbl_summary` VALUES (1, 1, '2018-09-11', NULL, 5, 5, 5, 5, 'Tốt', 1, 1, 0, '2018-09-11 17:25:25', '2018-09-11 17:25:25');
INSERT INTO `tbl_summary` VALUES (2, 1, NULL, NULL, 4, 4, 5, 5, 'Tốt', 1, 1, 0, '2018-09-11 17:25:27', '2018-09-12 16:51:38');
INSERT INTO `tbl_summary` VALUES (3, 1, '2018-09-11', NULL, 4, 4, 5, 5, 'Tốt', 1, 1, 0, '2018-09-12 16:51:56', '2018-09-12 16:51:56');
INSERT INTO `tbl_summary` VALUES (4, 1, '2018-09-11', NULL, 4, 4, 5, 5, 'Tốt', 1, 1, 0, '2018-09-12 16:52:52', '2018-09-12 16:52:52');
INSERT INTO `tbl_summary` VALUES (5, 1, '2018-09-11', NULL, 4, 4, 5, 5, 'Tốt', 1, 1, 0, '2018-09-12 16:57:34', '2018-09-12 16:57:34');

-- ----------------------------
-- Table structure for tbl_token_session
-- ----------------------------
DROP TABLE IF EXISTS `tbl_token_session`;
CREATE TABLE `tbl_token_session`  (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) NULL DEFAULT NULL COMMENT 'ID tai khoan dang ky su dung app',
  `account` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT 'Tai khoan cua nguoi dung',
  `msisdn` varchar(15) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT 'So dien thoai cua nguoi dung',
  `token` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT 'Token xac thuc',
  `expired_time` datetime(0) NOT NULL COMMENT 'Thoi gian token co hien luc',
  `key_refresh` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT 'Key refresh phuc vu lay lai token',
  `os_type` mediumint(9) NULL DEFAULT 0 COMMENT 'Loại HĐH (0: Android; 1: iOS)',
  `user_type` tinyint(2) NULL DEFAULT NULL COMMENT 'Loại user (0: Hiệu trưởng - 1: Giáo viên - 2: Phụ huynh',
  `created_at` datetime(0) NOT NULL,
  `updated_at` datetime(0) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `account`(`account`) USING BTREE,
  UNIQUE INDEX `msisdn`(`msisdn`) USING BTREE,
  UNIQUE INDEX `user_id`(`user_id`) USING BTREE,
  INDEX `user_id_idx`(`user_id`) USING BTREE,
  CONSTRAINT `tbl_token_session_user_id_tbl_user_id` FOREIGN KEY (`user_id`) REFERENCES `tbl_user` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tbl_token_session
-- ----------------------------
INSERT INTO `tbl_token_session` VALUES (1, 1, 'tiennx.it@gmail.com', '84989335466', 'A5009D8B-8B19-FEF4-A98B-2EA857F09AFF', '2018-10-12 18:00:59', '07D75806-E7D5-1E33-BD29-6CAFBB47AC66', 0, 0, '2018-09-03 16:30:39', '2018-09-17 19:02:59');

-- ----------------------------
-- Table structure for tbl_user
-- ----------------------------
DROP TABLE IF EXISTS `tbl_user`;
CREATE TABLE `tbl_user`  (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT 'Họ tên người dùng',
  `gender` tinyint(1) NULL DEFAULT 0 COMMENT 'Giới tính (0: Nữ; 1: Nam)',
  `email` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT 'Email người dùng',
  `facebook` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT 'Địa chỉ facebook',
  `address` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT 'Địa điểm',
  `description` longtext CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT 'Mô tả',
  `image_path` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT 'Ảnh đại diện cho người dùng',
  `msisdn` varchar(18) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT 'Số điện thoại của người dùng',
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT 'Mật khẩu (đã được mã hóa)',
  `salt` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT 'Chuỗi mã hóa mật khẩu',
  `is_delete` tinyint(1) NOT NULL DEFAULT 0 COMMENT 'Trạng thái xóa (0: chưa xóa - 1: đã xóa)',
  `status` tinyint(1) NOT NULL DEFAULT 0 COMMENT 'Trạng thái kích hoạt (0: bị khóa; 1: kích hoạt)',
  `token_id` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT 'registration_ids để gửi notification',
  `last_update` datetime(0) NULL DEFAULT NULL COMMENT 'Thoi gian gan nhat nguoi dung xem notification',
  `is_lock` tinyint(1) NULL DEFAULT 0 COMMENT 'Đã khóa account hay chưa',
  `lock_time` bigint(20) NULL DEFAULT NULL COMMENT 'Thời gian khóa',
  `type` tinyint(2) NULL DEFAULT NULL COMMENT 'Loại user (0: Hiệu trưởng - 1: Giáo viên - 2: Phụ huynh',
  `created_at` datetime(0) NOT NULL,
  `updated_at` datetime(0) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `msisdn`(`msisdn`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tbl_user
-- ----------------------------
INSERT INTO `tbl_user` VALUES (1, NULL, 0, 'tiennx.it@gmail.com', NULL, NULL, NULL, NULL, '84989335466', '9097a8a8d2fb4862b7faa47b998fb071f84bfb58', '0f61760804aee7d89a2ba685cd757373', 0, 1, '123456', '2018-09-17 16:47:08', 0, NULL, 0, '2018-09-03 16:28:22', '2018-09-17 18:11:18');

-- ----------------------------
-- Table structure for tbl_user_class_ref
-- ----------------------------
DROP TABLE IF EXISTS `tbl_user_class_ref`;
CREATE TABLE `tbl_user_class_ref`  (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) NOT NULL COMMENT 'ID user',
  `class_id` bigint(20) NOT NULL COMMENT 'ID lớp học',
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `class_id_idx`(`class_id`) USING BTREE,
  INDEX `user_id_idx`(`user_id`) USING BTREE,
  CONSTRAINT `tbl_user_class_ref_class_id_tbl_class_id` FOREIGN KEY (`class_id`) REFERENCES `tbl_class` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `tbl_user_class_ref_user_id_tbl_user_id` FOREIGN KEY (`user_id`) REFERENCES `tbl_user` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for tbl_user_school_ref
-- ----------------------------
DROP TABLE IF EXISTS `tbl_user_school_ref`;
CREATE TABLE `tbl_user_school_ref`  (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) NOT NULL COMMENT 'ID user',
  `school_id` bigint(20) NOT NULL COMMENT 'ID trường',
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `school_id_idx`(`school_id`) USING BTREE,
  INDEX `user_id_idx`(`user_id`) USING BTREE,
  CONSTRAINT `tbl_user_school_ref_school_id_tbl_school_id` FOREIGN KEY (`school_id`) REFERENCES `tbl_school` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `tbl_user_school_ref_user_id_tbl_user_id` FOREIGN KEY (`user_id`) REFERENCES `tbl_user` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for tbl_user_signin_log
-- ----------------------------
DROP TABLE IF EXISTS `tbl_user_signin_log`;
CREATE TABLE `tbl_user_signin_log`  (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `created_time` bigint(20) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

SET FOREIGN_KEY_CHECKS = 1;
