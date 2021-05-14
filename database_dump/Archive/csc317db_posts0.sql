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
-- Table structure for table `posts`
--

DROP TABLE IF EXISTS `posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `posts` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(128) NOT NULL,
  `description` varchar(4096) NOT NULL,
  `photopath` varchar(4096) NOT NULL,
  `thumbnail` varchar(4096) NOT NULL,
  `active` int NOT NULL DEFAULT '0',
  `created` datetime NOT NULL,
  `fk_userid` int unsigned NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `posts to users_idx` (`fk_userid`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posts`
--

LOCK TABLES `posts` WRITE;
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
INSERT INTO `posts` VALUES (1,'testimg','testimgdescripion','public\\images\\uploads\\3f20d4ad4d11b8e84a11b86ccd683a95577f985609c9.png','public/images/uploads/thumbnail-3f20d4ad4d11b8e84a11b86ccd683a95577f985609c9.png',0,'2021-05-08 20:50:54',1),(2,'testimg','testimgdescripion','public\\images\\uploads\\b8e0d57a0ed21866280f6a2ceaca05086ab0f2ef2f68.png','public/images/uploads/thumbnail-b8e0d57a0ed21866280f6a2ceaca05086ab0f2ef2f68.png',0,'2021-05-08 20:52:03',1),(3,'testimg','testimgdescripion','public\\images\\uploads\\dfa1ab2ace0e626fba6022e1283131c1ef281b06440c.png','public/images/uploads/thumbnail-dfa1ab2ace0e626fba6022e1283131c1ef281b06440c.png',0,'2021-05-08 20:52:38',1),(4,'testimg','testimgdescripion','public\\images\\uploads\\a7dab44cd26cb8f300b42e460c36c690b8ea71390452.png','public/images/uploads/thumbnail-a7dab44cd26cb8f300b42e460c36c690b8ea71390452.png',0,'2021-05-08 20:53:11',1),(5,'testimb','testneio','public\\images\\uploads\\24c5c931487d6cb5ed05c633b9fe0ab357b601324740.png','public/images/uploads/thumbnail-24c5c931487d6cb5ed05c633b9fe0ab357b601324740.png',0,'2021-05-08 20:57:26',1),(6,'nenrarvsno','krsaeituwki','public\\images\\uploads\\e1e5173c582879e62012b1649bbd93cf7539a5a85924.png','public/images/uploads/thumbnail-e1e5173c582879e62012b1649bbd93cf7539a5a85924.png',0,'2021-05-08 21:33:17',1),(7,'nenrarvsno','krsaeituwki','public\\images\\uploads\\092e725f164df0f749138f69c8c72a5a9f4369c76f37.png','public/images/uploads/thumbnail-092e725f164df0f749138f69c8c72a5a9f4369c76f37.png',0,'2021-05-08 21:38:25',1),(8,'neriaom','karesiot','public\\images\\uploads\\7c4ed74ba4be356dccf5a0a7b49966e1a675b133b42e.png','public/images/uploads/thumbnail-7c4ed74ba4be356dccf5a0a7b49966e1a675b133b42e.png',0,'2021-05-08 21:41:49',1),(9,'1test08','nowords','public\\images\\uploads\\2e01516063b05e4470ef72e6cb89d231e8b94e177a47.png','public/images/uploads/thumbnail-2e01516063b05e4470ef72e6cb89d231e8b94e177a47.png',0,'2021-05-08 23:42:16',1),(10,'mypost','this has test in the description','public\\images\\uploads\\20715ac36f7f459ac3ecd3508443a1faa65670d3cd5e.png','public/images/uploads/thumbnail-20715ac36f7f459ac3ecd3508443a1faa65670d3cd5e.png',0,'2021-05-08 23:42:43',1),(11,'refactorPost1','refactorPost1','public\\images\\uploads\\46ab76eb2fc1f3a9b7dc6f443b94952865a2fc140e2d.png','public/images/uploads/thumbnail-46ab76eb2fc1f3a9b7dc6f443b94952865a2fc140e2d.png',0,'2021-05-09 08:49:36',1);
/*!40000 ALTER TABLE `posts` ENABLE KEYS */;
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
