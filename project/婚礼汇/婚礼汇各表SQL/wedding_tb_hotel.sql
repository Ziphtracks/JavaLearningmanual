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
-- Table structure for table `tb_hotel`
--

DROP TABLE IF EXISTS `tb_hotel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tb_hotel` (
  `hotel_id` int(11) NOT NULL,
  `hotel_name` varchar(45) NOT NULL,
  `hotel_address` varchar(45) NOT NULL,
  `hotel_tel` varchar(45) NOT NULL,
  `hotel_star` varchar(45) NOT NULL,
  PRIMARY KEY (`hotel_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_hotel`
--

LOCK TABLES `tb_hotel` WRITE;
/*!40000 ALTER TABLE `tb_hotel` DISABLE KEYS */;
INSERT INTO `tb_hotel` VALUES (1,'重庆南温泉丽筠酒店','中国重庆巴南区南泉街道南泉路7号','(023)88128888','width:80%'),(2,'湘域中餐厅','重庆天地商业主楼D205','(023)63700600','width:40%'),(3,'中天大酒楼','重庆市渝中区青年路18号(新世纪商场旁)','023-63739898','width:40%'),(4,'芸笙餐饮管理有限公司','江北区观音桥盈嘉中心L7','（023）88752922','width:40%'),(5,'礼宴天下','北滨路368号金源时代广场5楼','(023)61866666','width:80%'),(6,'鑫缘至尊渔港（至尊店）','重庆市江北区（大剧院旁）打渔湾码头','（023）88607777','width:40%'),(7,'新华酒店','重庆市渝中区解放碑青年路9号7楼（英利国际附近）','(023)63557777','width:40%'),(8,'锦禧大酒楼（大石坝店）','大石坝东原D7新新PAPK 4层','(023)67537099,(023)67537899','width:40%'),(9,'会利元大饭店','洋河北路六号附二楼','(023)67616462','width:40%'),(10,'洪崖洞大酒店','重庆市渝中区解放碑沧白路56号洪崖洞大酒店','(023)63992888','width:40%');
/*!40000 ALTER TABLE `tb_hotel` ENABLE KEYS */;
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
