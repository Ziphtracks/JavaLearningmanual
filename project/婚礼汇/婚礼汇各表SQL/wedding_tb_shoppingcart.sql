-- MySQL dump 10.13  Distrib 5.7.12, for Win64 (x86_64)
--
-- Host: localhost    Database: wedding
-- ------------------------------------------------------
-- Server version	5.7.16-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `tb_shoppingcart`
--

DROP TABLE IF EXISTS `tb_shoppingcart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tb_shoppingcart` (
  `shoppingcart_id` varchar(45) NOT NULL,
  `shoppingcart_time` varchar(45) DEFAULT NULL,
  `shoppingcart_name` varchar(45) DEFAULT NULL,
  `shoppingcart_type` varchar(45) DEFAULT NULL,
  `shoppingcart_place` varchar(45) DEFAULT NULL,
  `shoppingcart_price` varchar(45) DEFAULT NULL,
  `shoppingcart_count` varchar(45) DEFAULT NULL,
  `tb_user_user_tel` varchar(45) DEFAULT NULL,
  `shoppingcart_img` varchar(45) DEFAULT NULL,
  `shoppingcart_hotelname` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`shoppingcart_id`),
  KEY `fk_tb_shoppingcart_tb_user1_idx` (`tb_user_user_tel`),
  CONSTRAINT `fk_tb_shoppingcart_tb_user1` FOREIGN KEY (`tb_user_user_tel`) REFERENCES `tb_user` (`user_tel`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_shoppingcart`
--

LOCK TABLES `tb_shoppingcart` WRITE;
/*!40000 ALTER TABLE `tb_shoppingcart` DISABLE KEYS */;
INSERT INTO `tb_shoppingcart` VALUES ('20171430600087413','2017-05-06 09:59:15','洪崖洞午餐898元','A款','半山花园','898','1','13367206935','img/ZBO58408845Lm.jpg','洪崖洞大酒店'),('20171731226743102','2017-05-06 16:22:05','中天大酒店晚餐350元','B款','1号厅','350','8','13237117999','ing/img/ZBO58408845Lm.jpg','中天大酒楼'),('2017203610859423','2017-05-05 21:23:38','中天大酒店午餐999元','A款','1号厅','999','3','13260621887','img/ZBO58408845Lm.jpg','中天大酒楼'),('20172086972746','2017-05-05 13:37:22','中天大酒店午餐999元','B款','1号厅','999','1','13260621887','img/ZBO58408845Lm.jpg','中天大酒楼');
/*!40000 ALTER TABLE `tb_shoppingcart` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-05-06 16:56:28
