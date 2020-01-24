# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: 127.0.0.1 (MySQL 5.7.18)
# Database: agetic
# Generation Time: 2020-01-24 21:23:30 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table Categoria
# ------------------------------------------------------------

DROP TABLE IF EXISTS `Categoria`;

CREATE TABLE `Categoria` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `descripcion` varchar(100) DEFAULT NULL,
  `type` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `Categoria` WRITE;
/*!40000 ALTER TABLE `Categoria` DISABLE KEYS */;

INSERT INTO `Categoria` (`id`, `nombre`, `descripcion`, `type`)
VALUES
	(1,'comida','comida',0),
	(2,'salario','Salario mensual',1),
	(3,'salario','Salario mensual',1);

/*!40000 ALTER TABLE `Categoria` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table Egresos
# ------------------------------------------------------------

DROP TABLE IF EXISTS `Egresos`;

CREATE TABLE `Egresos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) NOT NULL,
  `monto` double NOT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `catId` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `Egresos_FK` (`userId`),
  KEY `Egresos_FK_1` (`catId`),
  CONSTRAINT `Egresos_FK` FOREIGN KEY (`userId`) REFERENCES `user` (`id`),
  CONSTRAINT `Egresos_FK_1` FOREIGN KEY (`catId`) REFERENCES `Categoria` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `Egresos` WRITE;
/*!40000 ALTER TABLE `Egresos` DISABLE KEYS */;

INSERT INTO `Egresos` (`id`, `userId`, `monto`, `created`, `catId`)
VALUES
	(1,1,100,'2016-03-13 02:32:21',1),
	(2,1,200,'2016-03-13 02:32:21',1);

/*!40000 ALTER TABLE `Egresos` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table Ingresos
# ------------------------------------------------------------

DROP TABLE IF EXISTS `Ingresos`;

CREATE TABLE `Ingresos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `monto` double NOT NULL,
  `userId` int(11) NOT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `catId` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `Ingresos_FK` (`userId`),
  KEY `Ingresos_FK_1` (`catId`),
  CONSTRAINT `Ingresos_FK` FOREIGN KEY (`userId`) REFERENCES `user` (`id`),
  CONSTRAINT `Ingresos_FK_1` FOREIGN KEY (`catId`) REFERENCES `Categoria` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `Ingresos` WRITE;
/*!40000 ALTER TABLE `Ingresos` DISABLE KEYS */;

INSERT INTO `Ingresos` (`id`, `monto`, `userId`, `created`, `catId`)
VALUES
	(1,100,1,'2016-03-13 02:32:21',1),
	(2,100,1,'2016-03-13 02:32:21',1);

/*!40000 ALTER TABLE `Ingresos` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table user
# ------------------------------------------------------------

DROP TABLE IF EXISTS `user`;

CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(11) DEFAULT NULL,
  `password` varchar(11) DEFAULT NULL,
  `token` longtext,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;

INSERT INTO `user` (`id`, `username`, `password`, `token`)
VALUES
	(1,'paul','control123','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJwYXVsIiwiZXhwIjoxNTg1MDgwOTA5LCJpYXQiOjE1Nzk4OTY5MDl9.vNqAfU-rLf-_cL5Llm7HRIeQi6END73GZGGSMh3Fg6I'),
	(2,'pedro','control',NULL);

/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
