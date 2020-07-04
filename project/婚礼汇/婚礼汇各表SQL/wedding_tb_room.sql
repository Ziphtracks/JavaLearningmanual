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
-- Table structure for table `tb_room`
--

DROP TABLE IF EXISTS `tb_room`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tb_room` (
  `room_id` int(11) NOT NULL,
  `room_name` varchar(45) NOT NULL,
  `room_height` varchar(45) NOT NULL,
  `room_min_fee` varchar(45) NOT NULL,
  `room_form` varchar(45) NOT NULL,
  `room_pillar` varchar(45) NOT NULL,
  `room_dinner` varchar(45) NOT NULL,
  `room_electric_fee` varchar(45) NOT NULL,
  `room_split` varchar(45) NOT NULL,
  `room_area` varchar(45) NOT NULL,
  `room_lamplight` varchar(45) NOT NULL,
  `room_LED` varchar(45) NOT NULL,
  `room_tables` varchar(45) NOT NULL,
  `tb_hotel_hotel_id` int(11) NOT NULL,
  PRIMARY KEY (`room_id`),
  KEY `fk_tb_room_tb_hotel1_idx` (`tb_hotel_hotel_id`),
  CONSTRAINT `fk_tb_room_tb_hotel1` FOREIGN KEY (`tb_hotel_hotel_id`) REFERENCES `tb_hotel` (`hotel_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_room`
--

LOCK TABLES `tb_room` WRITE;
/*!40000 ALTER TABLE `tb_room` DISABLE KEYS */;
INSERT INTO `tb_room` VALUES (1,'龙泉厅','6.5米','20桌','长方形','无','无赠送','免费','可拆分2个300平方米','600平方米','无','无','40桌',1),(2,'4号厅','8米','5桌起','正方形','无','无赠送','免费','不可','162平方米','无','无','12桌',1),(3,'中庭','不限','无','长方形','有','无赠送','免费','不可','300人','无','无','300人',1),(4,'草坪','不限','无','长方形','无','无赠送','免费','不可','200人','无','无','200人',1),(5,'教堂','10米','无','长方形','无','无','无','不可','200人','无','无','200人',1),(6,'湘域厅','2.5米','699元/桌','长方形','1个','有套餐、无赠送','免费','可分区域','无','无','无','8桌',2),(7,'1号厅','2.6米','999元','长方形','无','有套餐，无赠送','否','否','200平方米','无','无','22桌',3),(8,'2号厅','2.6米','999元','长方形','无','有套餐，无赠送','否','否','160平方米','无','无','10桌',3),(9,'大厅','4米','面议','长方形','有','有','免费','不可拆分','暂无','免费','500元','30桌',4),(10,'玫瑰厅 6F','5米','1388元/桌','长方形','无','有套餐无赠送','免费','可拆分为两个厅','1065平方米','有','3000元','65桌',5),(11,'星光大厅 5F','5米','1188元/桌','长方形','无','有套餐无赠送','免费','可拆分两个厅','1250平方米','有','3000元','90桌',5),(12,'巴渝大厅 5F','5米','1188元/桌','长方形','无','有套餐无赠送','免费','可拆分为两个厅','1000平方米','有','3000元','55桌',5),(13,'百合厅 6F','6米','998元/桌','圆形','无','有套餐无赠送','免费','不可','380平方米','有','无','18桌',5),(14,'小厅','暂无','暂无','长方形','6根','有','无','不可拆分','暂无','无','无','16',6),(15,'大厅','暂无','暂无','长方形','6根','有','无','不可拆分','暂无','无','3500元','40桌',6),(16,'大厅','4米','无','长方形','有','有套餐，无赠送','否','否','无','有','费用：1000元，长3米*高6米','40桌',7),(17,'大厅','3.5米','4万','长方形','4个','有套餐，无赠送','300元','不可拆分','0平方米','无','500元','46桌',8),(18,'大厅','4米','1088元/桌','长方形','6个','有套餐，无赠送','免费','不可拆分','0平方米','有','无','30桌',9),(19,'贵宾楼','	4米','无','长方形','有','有套餐，无赠送','	无','无','无','无','费用1200元，大小：高2.34米*长6','50桌',10),(20,'半山花园','无','无','无','无','有套餐，无赠送','否','否','无','无','无','无',10);
/*!40000 ALTER TABLE `tb_room` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-05-06 16:56:29
