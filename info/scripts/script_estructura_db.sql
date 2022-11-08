DROP DATABASE IF EXISTS `dolce_regalo`;
CREATE DATABASE `dolce_regalo`;

USE `dolce_regalo`;

CREATE TABLE `Users`(
    `sku` INT(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `lastname` VARCHAR(255) NOT NULL,
    `phone` INT NOT NULL,
    `country` VARCHAR(255) NULL DEFAULT 'Argentina',
    `email` VARCHAR(255) NOT NULL UNIQUE,
    `password` VARCHAR(255) NOT NULL,
    `avatar` TEXT NULL DEFAULT 'default-user-image.png',
    `admin` TINYINT(1) NULL DEFAULT 0
);

CREATE TABLE `Products`(
    `sku` INT(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `description` VARCHAR(255) NOT NULL,
    `price` INT NOT NULL,
    `category_sku` INT(11) NULL DEFAULT 1,
    `season_sku` INT(11) NULL DEFAULT 1,
    `image` TEXT NULL DEFAULT 'default-gift-image.png'
);

CREATE TABLE `Categories`(
    `sku` INT(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL
);

CREATE TABLE `Seasons`(
    `sku` INT(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL
);


ALTER TABLE
    `Products` ADD CONSTRAINT `products_category_sku_foreign` FOREIGN KEY(`category_sku`) REFERENCES `Categories`(`sku`);
ALTER TABLE
    `Products` ADD CONSTRAINT `products_season_sku_foreign` FOREIGN KEY(`season_sku`) REFERENCES `Seasons`(`sku`);