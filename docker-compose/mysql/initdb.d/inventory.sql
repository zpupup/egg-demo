/*
 Navicat Premium Data Transfer

 Source Server         : localhost
 Source Server Type    : MySQL
 Source Server Version : 80028
 Source Host           : localhost:3306
 Source Schema         : example

 Target Server Type    : MySQL
 Target Server Version : 80028
 File Encoding         : 65001

 Date: 03/03/2022 10:23:23
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for inventory
-- ----------------------------
DROP TABLE IF EXISTS `inventories`;
CREATE TABLE `inventories` (
  `id` varchar(20) NOT NULL,
  `current_inventory` bigint NOT NULL DEFAULT '0',
  `default_inventory` bigint NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `example`.`inventories` (`id`, `current_inventory`, `default_inventory`) VALUES ('item1', 4, 10);
INSERT INTO `example`.`inventories` (`id`, `current_inventory`, `default_inventory`) VALUES ('item2', 0, 3);

SET FOREIGN_KEY_CHECKS = 1;
