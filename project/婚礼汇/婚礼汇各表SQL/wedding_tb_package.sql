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
-- Table structure for table `tb_package`
--

DROP TABLE IF EXISTS `tb_package`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tb_package` (
  `package_id` int(11) NOT NULL,
  `package_name` varchar(45) NOT NULL,
  `package_price` int(11) NOT NULL,
  `package_content` varchar(45) NOT NULL,
  `package_sales` int(11) NOT NULL,
  `package_menuA` varchar(45) DEFAULT NULL,
  `package_menuB` varchar(45) DEFAULT NULL,
  `tb_hotel_hotel_id` int(11) NOT NULL,
  PRIMARY KEY (`package_id`),
  KEY `fk_tb_package_tb_hotel1_idx` (`tb_hotel_hotel_id`),
  CONSTRAINT `fk_tb_package_tb_hotel1` FOREIGN KEY (`tb_hotel_hotel_id`) REFERENCES `tb_hotel` (`hotel_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_package`
--

LOCK TABLES `tb_package` WRITE;
/*!40000 ALTER TABLE `tb_package` DISABLE KEYS */;
INSERT INTO `tb_package` VALUES (1,'1699元套餐',1699,'6个冷菜、1个汤、10个热菜、2个点心、1个主食、1盘水果',0,'img/pPk58408883vI.jpg','img/Rna58408892bL.jpg',1),(2,'1999元套餐',1999,'6个冷菜、1个汤、10个热菜、2个点心、1个主食、1盘水果',0,'img/NYd58409204TV.jpg','img/BJl58409211yq.jpg',1),(3,'湘域午餐1188元',1188,'12个热菜、6个凉菜、1个小吃、1个汤品、1个鲜榨、3个赠送',0,'img/EDy55818048Mq.jpg',NULL,2),(4,'湘域午餐1388元',1388,'11个热菜、6个凉菜、1个小吃、1个汤品、1个鲜榨、3个赠送',0,'img/PiF55818155vv.jpg',NULL,2),(5,'中天大酒店午餐999元',999,'11个热菜、6个凉菜、1个小吃、1个汤、1个果拼。',0,'img/bzk55809938yI.jpg',NULL,3),(6,'中天大酒店午餐1099元',1099,'11个热菜、6个凉菜、1个小吃、1个汤、1个果拼。',0,'img/mPK55810054bb.jpg',NULL,3),(7,'中天大酒店晚餐350元',350,'8个热菜，3个凉菜，1个主食，1个汤',0,'img/wfe55810610xD.jpg','img/waw55810617FN.jpg',3),(8,'698元婚宴套餐',698,'6个凉菜，11个热菜，一份汤。2份小吃',0,'img/dBE57090903iw.jpg',NULL,4),(9,'888元婚宴套餐',888,'6个凉菜，11个热菜，一份汤，2份小吃',0,'img/ZVY57092032bx.jpg',NULL,4),(10,'298元晚餐套餐',298,'2个凉菜，11个热菜，一份汤',0,'img/Lyx57092014us.jpg',NULL,4),(11,'398元婚宴套餐',398,'3个凉菜，11个热菜，一份汤',0,'img/SPn57092046Jz.jpg',NULL,4),(12,'礼宴天下午餐1188元',1188,'11个热菜、7个凉菜、1个小吃、1个汤、1个果盘赠送',0,'img/SGw56334797SY.jpg',NULL,5),(13,'礼宴天下1388元',1388,'11个热菜、7个凉菜、1个小吃、1个汤、1个果盘赠送',0,NULL,NULL,5),(14,'礼宴天下晚餐498元',498,'9个热菜，3个凉菜，1个汤，1个主食赠送',0,'img/UBD56334111CW.jpg',NULL,5),(15,'礼宴天下晚餐598元',598,'9个热菜、4个凉菜、1个汤、1个主食赠品',0,'img/Unr56334272sD.jpg',NULL,5),(16,'鑫缘至尊渔港880元餐',880,'6个凉菜，9个热菜，1个汤，1份点心',0,NULL,NULL,6),(17,'鑫缘至尊渔港998元餐',998,'6个凉菜，9个热菜，1个汤，1份点心',0,NULL,NULL,6),(18,'鑫缘至尊渔港余宴398元餐',398,'3个凉菜，8个热菜，1个汤',0,NULL,NULL,6),(19,'鑫缘至尊渔港余宴468元餐',468,'3个凉菜，9个热菜，1个汤',0,NULL,NULL,6),(20,'新华酒店午餐888元',888,'12个热菜、7个凉菜、1个小吃、1个汤、1个果盘',0,'img/NeU55732110Io.jpg',NULL,7),(21,'新华酒店午餐998元',998,'12个热菜、7个凉菜、2个小吃、1个汤、1个果盘',0,'img/sdy55732256eJ.jpg',NULL,7),(22,'新华酒店晚餐368元',368,'9个热菜、1个汤、1份小吃',0,'img/uFj55732757CU.jpg',NULL,7),(23,'新华酒店晚餐428元',428,'10个热菜、2个凉菜、1个汤、1份小吃',0,'img/wVZ55732859Ug.jpg',NULL,7),(24,'锦禧饭店午餐799元',799,'11个热菜、2个凉菜、1个小吃、1个果拼、1个汤',0,'img/zpZ56052584ex.jpg',NULL,8),(25,'锦禧饭店晚餐398元/桌',398,'12个热菜、7个凉菜、1个小吃、1个果拼、1个汤',0,'img/LYt56052672rN.jpg',NULL,8),(26,'锦禧饭店午餐929元',929,'9个热菜、1个凉菜、1个汤',0,'img/ThN56052354im.jpg',NULL,8),(27,'锦禧饭店晚餐328元',328,'7个热菜、1个凉菜、1个汤',0,'img/oSE56052476aR.jpg',NULL,8),(28,'会利元大饭店688元',688,'10个热菜、5个凉菜、1个汤、2个小吃、1个果盘',0,'img/oTo55987298FU.jpg',NULL,9),(29,'会利元大饭店午餐888元',888,'11个热菜、5个凉菜、1个汤、2个小吃、1个果盘',0,'img/zyz55987473QF.jpg',NULL,9),(30,'会利元晚餐388元',388,'10个热菜，1个汤',0,'img/ZbF55986868cW.jpg',NULL,9),(31,'会利元大饭店晚餐488元',488,'10个热菜，1个汤',0,'img/Nmi55986969Va.jpg',NULL,9),(32,'洪崖洞晚餐388元',388,'10道热菜、4道凉菜、1道点心、1道汤',0,'img/vCw55710617cu.jpg',NULL,10),(33,'洪崖洞午餐898元',898,'12道热菜、6道凉菜、1道点心、1道汤、一道水果',0,'img/jZW55710885NC.jpg',NULL,10);
/*!40000 ALTER TABLE `tb_package` ENABLE KEYS */;
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
