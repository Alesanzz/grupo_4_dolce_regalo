DROP DATABASE IF EXISTS "DOLCE_REGALO"
CREATE DATABASE "DOLCE_REGALO"

USE "DOLCE_REGALO"

CREATE TABLE `Users`(
    `sku` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `lastname` VARCHAR(255) NOT NULL,
    `phone` INT NOT NULL,
    `country` VARCHAR(255) NULL DEFAULT 'Argentina',
    `email` VARCHAR(255) NOT NULL UNIQUE,
    `password` INT NOT NULL,
    `avatar` TEXT NULL DEFAULT 'default-user-image.png',
    `admin` TINYINT(1) NULL DEFAULT '0'
);
ALTER TABLE
    `Users` ADD PRIMARY KEY `users_sku_primary`(`sku`);
CREATE TABLE `Products`(
    `sku` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `description` VARCHAR(255) NOT NULL,
    `price` INT NOT NULL,
    `category_sku` INT NULL DEFAULT 'All',
    `season_sku` INT NULL DEFAULT 'Everyday',
    `image` TEXT NULL DEFAULT 'default-gift-image.png'
);
ALTER TABLE
    `Products` ADD PRIMARY KEY `products_sku_primary`(`sku`);
CREATE TABLE `Categories`(
    `sku` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL
);
ALTER TABLE
    `Categories` ADD PRIMARY KEY `categories_sku_primary`(`sku`);
CREATE TABLE `Seasons`(
    `sku` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL
);
ALTER TABLE
    `Seasons` ADD PRIMARY KEY `seasons_sku_primary`(`sku`);
ALTER TABLE
    `Products` ADD CONSTRAINT `products_category_sku_foreign` FOREIGN KEY(`category_sku`) REFERENCES `Categories`(`sku`);
ALTER TABLE
    `Products` ADD CONSTRAINT `products_season_sku_foreign` FOREIGN KEY(`season_sku`) REFERENCES `Seasons`(`sku`);