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
-- Table structure for table `tb_information`
--

DROP TABLE IF EXISTS `tb_information`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tb_information` (
  `info_id` int(11) NOT NULL,
  `info_star_level` varchar(45) NOT NULL,
  `info_decorate_time` varchar(45) NOT NULL,
  `info_subscription` varchar(45) NOT NULL,
  `info_service_fee` varchar(45) NOT NULL,
  `info_enter_fee` varchar(45) NOT NULL,
  `info_dressing_room` varchar(45) NOT NULL,
  `info_bus` varchar(45) NOT NULL,
  `info_microphone` varchar(45) NOT NULL,
  `info_projector` varchar(45) NOT NULL,
  `info_tablecloth` varchar(45) NOT NULL,
  `info_electric_charge` varchar(45) NOT NULL,
  `info_amusement` varchar(45) NOT NULL,
  `info_coordinatesA` varchar(45) NOT NULL,
  `info_coordinatesB` varchar(45) DEFAULT NULL,
  `tb_hotel_hotel_id` int(11) NOT NULL,
  PRIMARY KEY (`info_id`),
  KEY `fk_tb_information_tb_hotel_idx` (`tb_hotel_hotel_id`),
  CONSTRAINT `fk_tb_information_tb_hotel` FOREIGN KEY (`tb_hotel_hotel_id`) REFERENCES `tb_hotel` (`hotel_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_information`
--

LOCK TABLES `tb_information` WRITE;
/*!40000 ALTER TABLE `tb_information` DISABLE KEYS */;
INSERT INTO `tb_information` VALUES (1,'国际五星','2015年12月','5000元','10%服务费+6%增值税费','无','有','轨道3号线转327/309/168/302南泉站下','5支','有','香槟色、红色、白色','无','机麻','106.55161','29.395001',1),(2,'特色餐饮','2012年','2000元','无','无','提供一个包房','1.261、503、875（嘉宾路化龙桥','免费提供2个无线话筒','无','不可换','免费','免费提供2桌机麻','106.516706','29.558478',2),(3,'特色餐厅','无','1000元--2000元','无','无','送一间化妆间','公交：462、465、413路','2个，无线话筒','无','否','否','免费使用，不限制数量','106.581949','29.563544',3),(4,'特色餐饮','无','1000元','无','无','赠送一个包间','轻轨3号线观音桥下车，2号口出来即到','2个无线麦克风','无','不可换','免费','无','106.540343','29.57906',4),(5,'特色餐厅','0年','20%','无','3000元','送包间','127路 127路区间 168路 617','2个无线','有','红色、香槟色','免费','4桌宴席送一桌，超出50元一桌','106.530609','29.562697',5),(6,'特色餐厅','无','5000','5%','无','赠送化妆间','轻轨6号线，大剧院下车，步行1公里即到','2个无线麦克风','有，3米*3米','可换','无','每十桌送三桌手搓麻将','106.587432','29.580672',6),(7,'特色餐厅','无','每桌100元','无','西式300元，中式500元','无婚房，有包房作化妆间','402、462、465、612','2个，无线话筒','无','否','否','有，免费7桌','106.582062','29.563115',7),(8,'特色餐饮','2014年','100元/桌','3元/人','无','赠送化妆间一个','113路 114路 115路 133路 ','有','无','白色','免费','有套餐、无赠送','106.503862','29.576975',8),(9,'特色餐厅','0年','2000元','菜品的6%','800元','赠送化妆间','地铁：1、2、3号线 公交：401、40','有','2个无线','白色','免费','免费15台机麻','106.540752','29.592695',9),(10,'特色餐饮','无','场地定金1000，确定菜品交20%订金','我要','无','满20桌送婚房','111/151/181/262/466/','3个，无线话筒','有，宽2米*高1.5米','是','否','免费，满20桌送4桌，可累加','106.58621','29.568328',10);
/*!40000 ALTER TABLE `tb_information` ENABLE KEYS */;
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
