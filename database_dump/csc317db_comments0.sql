-- MySQL dump 10.13  Distrib 8.0.24, for Win64 (x86_64)
--
-- Host: localhost    Database: csc317db
-- ------------------------------------------------------
-- Server version	8.0.24

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `comments`
--

DROP TABLE IF EXISTS `comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comments` (
  `id` int NOT NULL AUTO_INCREMENT,
  `comment` longtext NOT NULL,
  `fk_authorid` int unsigned NOT NULL,
  `fk_postid` int unsigned NOT NULL,
  `created` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `key_tousertable_idx` (`fk_authorid`),
  KEY `key_toposttable_idx` (`fk_postid`),
  CONSTRAINT `key_toposttable` FOREIGN KEY (`fk_postid`) REFERENCES `posts` (`id`),
  CONSTRAINT `key_tousertable` FOREIGN KEY (`fk_authorid`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comments`
--

LOCK TABLES `comments` WRITE;
/*!40000 ALTER TABLE `comments` DISABLE KEYS */;
INSERT INTO `comments` VALUES (5,'this is a test comment from curl',3,8,'2021-05-11 14:42:45'),(6,'this is a test comment from curl',3,8,'2021-05-11 15:14:22'),(7,'this is a test comment from curl',3,8,'2021-05-11 15:14:25'),(8,'this is a test comment from curl',3,8,'2021-05-11 15:14:26'),(9,'this is a test comment from curl',3,8,'2021-05-11 14:42:45'),(10,'this is a test comment from curl',3,8,'2021-05-11 15:14:22'),(11,'this is a test comment from curl',3,8,'2021-05-11 15:14:25'),(12,'this is a test comment from curl',3,8,'2021-05-11 15:14:26'),(13,'this is a test comment from curl',3,8,'2021-05-11 14:42:45'),(14,'this is a test comment from curl',3,8,'2021-05-11 15:14:22'),(15,'this is a test comment from curl',3,8,'2021-05-11 15:14:25'),(16,'this is a test comment from curl',3,8,'2021-05-11 15:14:26'),(17,'this is a test comment from curl',3,8,'2021-05-11 14:42:45'),(18,'this is a test comment from curl',3,8,'2021-05-11 15:14:22'),(19,'this is a test comment from curl',3,8,'2021-05-11 15:14:25'),(20,'this is a test comment from curl',3,8,'2021-05-11 15:14:26'),(21,'this is a test comment from a logged in user',3,8,'2021-05-11 19:04:05'),(22,'This is a complete test of the comment system.',3,8,'2021-05-11 19:17:12'),(23,'This is a complete test of the comment system.',3,8,'2021-05-11 19:20:09'),(24,'this is the third complete test of the comment system',3,8,'2021-05-11 19:22:30'),(25,'Yet another test of the comment system',3,8,'2021-05-11 19:24:15'),(26,'Again!',3,8,'2021-05-11 19:25:09'),(27,'Again! 1',3,8,'2021-05-11 19:25:50'),(28,'again 2',3,8,'2021-05-11 19:29:08'),(29,'hello',3,4,'2021-05-11 19:33:27'),(30,'hellowhat',3,4,'2021-05-11 19:33:31'),(31,'1',3,4,'2021-05-11 19:33:37'),(32,'Hello',1,5,'2021-05-11 19:47:48'),(33,'this is test 2',1,5,'2021-05-11 19:47:59');
/*!40000 ALTER TABLE `comments` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-05-12 15:15:59
