/*
SQLyog Ultimate v8.32 
MySQL - 5.5.27 : Database - wedding
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`wedding` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `wedding`;

/*Table structure for table `con_test` */

DROP TABLE IF EXISTS `con_test`;

CREATE TABLE `con_test` (
  `a` char(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `con_test` */

/*Table structure for table `tb_hotel` */

DROP TABLE IF EXISTS `tb_hotel`;

CREATE TABLE `tb_hotel` (
  `hotel_id` int(11) NOT NULL,
  `hotel_name` varchar(45) NOT NULL,
  `hotel_address` varchar(45) NOT NULL,
  `hotel_tel` varchar(45) NOT NULL,
  `hotel_star` varchar(45) NOT NULL,
  PRIMARY KEY (`hotel_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `tb_hotel` */

insert  into `tb_hotel`(`hotel_id`,`hotel_name`,`hotel_address`,`hotel_tel`,`hotel_star`) values (1,'重庆南温泉丽筠酒店','中国重庆巴南区南泉街道南泉路7号','(023)88128888','width:80%'),(2,'湘域中餐厅','重庆天地商业主楼D205','(023)63700600','width:40%'),(3,'中天大酒楼','重庆市渝中区青年路18号(新世纪商场旁)','023-63739898','width:40%'),(4,'芸笙餐饮管理有限公司','江北区观音桥盈嘉中心L7','（023）88752922','width:40%'),(5,'礼宴天下','北滨路368号金源时代广场5楼','(023)61866666','width:80%'),(6,'鑫缘至尊渔港（至尊店）','重庆市江北区（大剧院旁）打渔湾码头','（023）88607777','width:40%'),(7,'新华酒店','重庆市渝中区解放碑青年路9号7楼（英利国际附近）','(023)63557777','width:40%'),(8,'锦禧大酒楼（大石坝店）','大石坝东原D7新新PAPK 4层','(023)67537099,(023)67537899','width:40%'),(9,'会利元大饭店','洋河北路六号附二楼','(023)67616462','width:40%'),(10,'洪崖洞大酒店','重庆市渝中区解放碑沧白路56号洪崖洞大酒店','(023)63992888','width:40%');

/*Table structure for table `tb_img` */

DROP TABLE IF EXISTS `tb_img`;

CREATE TABLE `tb_img` (
  `img_id` int(11) NOT NULL,
  `img_add` varchar(45) NOT NULL,
  `tb_hotel_hotel_id` int(11) DEFAULT NULL,
  `tb_room_room_id` int(11) DEFAULT NULL,
  `tb_package_package_id` int(11) DEFAULT NULL,
  `tb_information_info_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`img_id`),
  KEY `fk_tb_img_tb_hotel1_idx` (`tb_hotel_hotel_id`),
  KEY `fk_tb_img_tb_room1_idx` (`tb_room_room_id`),
  KEY `fk_tb_img_tb_package1_idx` (`tb_package_package_id`),
  KEY `fk_tb_img_tb_information1_idx` (`tb_information_info_id`),
  CONSTRAINT `fk_tb_img_tb_hotel1` FOREIGN KEY (`tb_hotel_hotel_id`) REFERENCES `tb_hotel` (`hotel_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_tb_img_tb_information1` FOREIGN KEY (`tb_information_info_id`) REFERENCES `tb_information` (`info_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_tb_img_tb_package1` FOREIGN KEY (`tb_package_package_id`) REFERENCES `tb_package` (`package_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_tb_img_tb_room1` FOREIGN KEY (`tb_room_room_id`) REFERENCES `tb_room` (`room_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `tb_img` */

insert  into `tb_img`(`img_id`,`img_add`,`tb_hotel_hotel_id`,`tb_room_room_id`,`tb_package_package_id`,`tb_information_info_id`) values (1,'img/msF58469607Jg.jpg',1,NULL,NULL,NULL),(2,'img/LSN54767537nb.jpg',2,NULL,NULL,NULL),(3,'img/Hbp54860401oB.jpg',3,NULL,NULL,NULL),(4,'img/kSa56681558Sg.jpg',4,NULL,NULL,NULL),(5,'img/Yrm54858716fa.jpg',5,NULL,NULL,NULL),(6,'img/VnI54859050Vt.jpg',6,NULL,NULL,NULL),(7,'img/Lgz54859459lz.jpg',7,NULL,NULL,NULL),(8,'img/RLw54847315Zt.jpg',8,NULL,NULL,NULL),(9,'img/Svv54845919lM.jpg',9,NULL,NULL,NULL),(10,'img/lml54845184qD.jpg',10,NULL,NULL,NULL),(11,'img/woX62017152YC.jpg',NULL,1,NULL,NULL),(12,'img/xYI58407928hh.jpg',NULL,2,NULL,NULL),(13,'img/Fjh58408087nH.jpg',NULL,3,NULL,NULL),(14,'img/QIH58408321sf.jpg',NULL,4,NULL,NULL),(15,'img/cNX58409716jf.jpg',NULL,5,NULL,NULL),(16,'img/cNX58409716jf.jpg',NULL,6,NULL,NULL),(17,'img/cNX58409716jf.jpg',NULL,7,NULL,NULL),(18,'img/cNX58409716jf.jpg',NULL,8,NULL,NULL),(19,'img/cNX58409716jf.jpg',NULL,9,NULL,NULL),(20,'img/cNX58409716jf.jpg',NULL,10,NULL,NULL),(21,'img/cNX58409716jf.jpg',NULL,11,NULL,NULL),(22,'img/cNX58409716jf.jpg',NULL,12,NULL,NULL),(23,'img/cNX58409716jf.jpg',NULL,13,NULL,NULL),(24,'img/cNX58409716jf.jpg',NULL,14,NULL,NULL),(25,'img/cNX58409716jf.jpg',NULL,15,NULL,NULL),(26,'img/cNX58409716jf.jpg',NULL,16,NULL,NULL),(27,'img/cNX58409716jf.jpg',NULL,17,NULL,NULL),(28,'img/cNX58409716jf.jpg',NULL,18,NULL,NULL),(29,'img/cNX58409716jf.jpg',NULL,19,NULL,NULL),(30,'img/ZBO58408845Lm.jpg',NULL,NULL,1,NULL),(31,'img/ZBO58408845Lm.jpg',NULL,NULL,2,NULL),(32,'img/ZBO58408845Lm.jpg',NULL,NULL,3,NULL),(33,'img/ZBO58408845Lm.jpg',NULL,NULL,4,NULL),(34,'img/ZBO58408845Lm.jpg',NULL,NULL,5,NULL),(35,'img/ZBO58408845Lm.jpg',NULL,NULL,6,NULL),(36,'img/ZBO58408845Lm.jpg',NULL,NULL,7,NULL),(37,'img/ZBO58408845Lm.jpg',NULL,NULL,8,NULL),(38,'img/ZBO58408845Lm.jpg',NULL,NULL,9,NULL),(39,'img/ZBO58408845Lm.jpg',NULL,NULL,10,NULL),(40,'img/ZBO58408845Lm.jpg',NULL,NULL,11,NULL),(41,'img/ZBO58408845Lm.jpg',NULL,NULL,12,NULL),(42,'img/ZBO58408845Lm.jpg',NULL,NULL,13,NULL),(43,'img/ZBO58408845Lm.jpg',NULL,NULL,14,NULL),(44,'img/ZBO58408845Lm.jpg',NULL,NULL,15,NULL),(45,'img/ZBO58408845Lm.jpg',NULL,NULL,16,NULL),(46,'img/ZBO58408845Lm.jpg',NULL,NULL,17,NULL),(47,'img/ZBO58408845Lm.jpg',NULL,NULL,18,NULL),(48,'img/ZBO58408845Lm.jpg',NULL,NULL,19,NULL),(49,'img/ZBO58408845Lm.jpg',NULL,NULL,20,NULL),(50,'img/ZBO58408845Lm.jpg',NULL,NULL,21,NULL),(51,'img/ZBO58408845Lm.jpg',NULL,NULL,22,NULL),(52,'img/ZBO58408845Lm.jpg',NULL,NULL,23,NULL),(53,'img/ZBO58408845Lm.jpg',NULL,NULL,24,NULL),(54,'img/ZBO58408845Lm.jpg',NULL,NULL,25,NULL),(55,'img/ZBO58408845Lm.jpg',NULL,NULL,26,NULL),(56,'img/ZBO58408845Lm.jpg',NULL,NULL,27,NULL),(57,'img/ZBO58408845Lm.jpg',NULL,NULL,28,NULL),(58,'img/ZBO58408845Lm.jpg',NULL,NULL,29,NULL),(59,'img/ZBO58408845Lm.jpg',NULL,NULL,30,NULL),(60,'img/ZBO58408845Lm.jpg',NULL,NULL,31,NULL),(61,'img/ZBO58408845Lm.jpg',NULL,NULL,32,NULL),(62,'img/ZBO58408845Lm.jpg',NULL,NULL,33,NULL),(63,'img/cNX58409716jf.jpg',NULL,20,NULL,NULL);

/*Table structure for table `tb_information` */

DROP TABLE IF EXISTS `tb_information`;

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

/*Data for the table `tb_information` */

insert  into `tb_information`(`info_id`,`info_star_level`,`info_decorate_time`,`info_subscription`,`info_service_fee`,`info_enter_fee`,`info_dressing_room`,`info_bus`,`info_microphone`,`info_projector`,`info_tablecloth`,`info_electric_charge`,`info_amusement`,`info_coordinatesA`,`info_coordinatesB`,`tb_hotel_hotel_id`) values (1,'国际五星','2015年12月','5000元','10%服务费+6%增值税费','无','有','轨道3号线转327/309/168/302南泉站下','5支','有','香槟色、红色、白色','无','机麻','106.55161','29.395001',1),(2,'特色餐饮','2012年','2000元','无','无','提供一个包房','1.261、503、875（嘉宾路化龙桥','免费提供2个无线话筒','无','不可换','免费','免费提供2桌机麻','106.516706','29.558478',2),(3,'特色餐厅','无','1000元--2000元','无','无','送一间化妆间','公交：462、465、413路','2个，无线话筒','无','否','否','免费使用，不限制数量','106.581949','29.563544',3),(4,'特色餐饮','无','1000元','无','无','赠送一个包间','轻轨3号线观音桥下车，2号口出来即到','2个无线麦克风','无','不可换','免费','无','106.540343','29.57906',4),(5,'特色餐厅','0年','20%','无','3000元','送包间','127路 127路区间 168路 617','2个无线','有','红色、香槟色','免费','4桌宴席送一桌，超出50元一桌','106.530609','29.562697',5),(6,'特色餐厅','无','5000','5%','无','赠送化妆间','轻轨6号线，大剧院下车，步行1公里即到','2个无线麦克风','有，3米*3米','可换','无','每十桌送三桌手搓麻将','106.587432','29.580672',6),(7,'特色餐厅','无','每桌100元','无','西式300元，中式500元','无婚房，有包房作化妆间','402、462、465、612','2个，无线话筒','无','否','否','有，免费7桌','106.582062','29.563115',7),(8,'特色餐饮','2014年','100元/桌','3元/人','无','赠送化妆间一个','113路 114路 115路 133路 ','有','无','白色','免费','有套餐、无赠送','106.503862','29.576975',8),(9,'特色餐厅','0年','2000元','菜品的6%','800元','赠送化妆间','地铁：1、2、3号线 公交：401、40','有','2个无线','白色','免费','免费15台机麻','106.540752','29.592695',9),(10,'特色餐饮','无','场地定金1000，确定菜品交20%订金','我要','无','满20桌送婚房','111/151/181/262/466/','3个，无线话筒','有，宽2米*高1.5米','是','否','免费，满20桌送4桌，可累加','106.58621','29.568328',10);

/*Table structure for table `tb_package` */

DROP TABLE IF EXISTS `tb_package`;

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

/*Data for the table `tb_package` */

insert  into `tb_package`(`package_id`,`package_name`,`package_price`,`package_content`,`package_sales`,`package_menuA`,`package_menuB`,`tb_hotel_hotel_id`) values (1,'1699元套餐',1699,'6个冷菜、1个汤、10个热菜、2个点心、1个主食、1盘水果',0,'img/pPk58408883vI.jpg','img/Rna58408892bL.jpg',1),(2,'1999元套餐',1999,'6个冷菜、1个汤、10个热菜、2个点心、1个主食、1盘水果',0,'img/NYd58409204TV.jpg','img/BJl58409211yq.jpg',1),(3,'湘域午餐1188元',1188,'12个热菜、6个凉菜、1个小吃、1个汤品、1个鲜榨、3个赠送',0,'img/EDy55818048Mq.jpg',NULL,2),(4,'湘域午餐1388元',1388,'11个热菜、6个凉菜、1个小吃、1个汤品、1个鲜榨、3个赠送',0,'img/PiF55818155vv.jpg',NULL,2),(5,'中天大酒店午餐999元',999,'11个热菜、6个凉菜、1个小吃、1个汤、1个果拼。',0,'img/bzk55809938yI.jpg',NULL,3),(6,'中天大酒店午餐1099元',1099,'11个热菜、6个凉菜、1个小吃、1个汤、1个果拼。',0,'img/mPK55810054bb.jpg',NULL,3),(7,'中天大酒店晚餐350元',350,'8个热菜，3个凉菜，1个主食，1个汤',0,'img/wfe55810610xD.jpg','img/waw55810617FN.jpg',3),(8,'698元婚宴套餐',698,'6个凉菜，11个热菜，一份汤。2份小吃',0,'img/dBE57090903iw.jpg',NULL,4),(9,'888元婚宴套餐',888,'6个凉菜，11个热菜，一份汤，2份小吃',0,'img/ZVY57092032bx.jpg',NULL,4),(10,'298元晚餐套餐',298,'2个凉菜，11个热菜，一份汤',0,'img/Lyx57092014us.jpg',NULL,4),(11,'398元婚宴套餐',398,'3个凉菜，11个热菜，一份汤',0,'img/SPn57092046Jz.jpg',NULL,4),(12,'礼宴天下午餐1188元',1188,'11个热菜、7个凉菜、1个小吃、1个汤、1个果盘赠送',0,'img/SGw56334797SY.jpg',NULL,5),(13,'礼宴天下1388元',1388,'11个热菜、7个凉菜、1个小吃、1个汤、1个果盘赠送',0,NULL,NULL,5),(14,'礼宴天下晚餐498元',498,'9个热菜，3个凉菜，1个汤，1个主食赠送',0,'img/UBD56334111CW.jpg',NULL,5),(15,'礼宴天下晚餐598元',598,'9个热菜、4个凉菜、1个汤、1个主食赠品',0,'img/Unr56334272sD.jpg',NULL,5),(16,'鑫缘至尊渔港880元餐',880,'6个凉菜，9个热菜，1个汤，1份点心',0,NULL,NULL,6),(17,'鑫缘至尊渔港998元餐',998,'6个凉菜，9个热菜，1个汤，1份点心',0,NULL,NULL,6),(18,'鑫缘至尊渔港余宴398元餐',398,'3个凉菜，8个热菜，1个汤',0,NULL,NULL,6),(19,'鑫缘至尊渔港余宴468元餐',468,'3个凉菜，9个热菜，1个汤',0,NULL,NULL,6),(20,'新华酒店午餐888元',888,'12个热菜、7个凉菜、1个小吃、1个汤、1个果盘',0,'img/NeU55732110Io.jpg',NULL,7),(21,'新华酒店午餐998元',998,'12个热菜、7个凉菜、2个小吃、1个汤、1个果盘',0,'img/sdy55732256eJ.jpg',NULL,7),(22,'新华酒店晚餐368元',368,'9个热菜、1个汤、1份小吃',0,'img/uFj55732757CU.jpg',NULL,7),(23,'新华酒店晚餐428元',428,'10个热菜、2个凉菜、1个汤、1份小吃',0,'img/wVZ55732859Ug.jpg',NULL,7),(24,'锦禧饭店午餐799元',799,'11个热菜、2个凉菜、1个小吃、1个果拼、1个汤',0,'img/zpZ56052584ex.jpg',NULL,8),(25,'锦禧饭店晚餐398元/桌',398,'12个热菜、7个凉菜、1个小吃、1个果拼、1个汤',0,'img/LYt56052672rN.jpg',NULL,8),(26,'锦禧饭店午餐929元',929,'9个热菜、1个凉菜、1个汤',0,'img/ThN56052354im.jpg',NULL,8),(27,'锦禧饭店晚餐328元',328,'7个热菜、1个凉菜、1个汤',0,'img/oSE56052476aR.jpg',NULL,8),(28,'会利元大饭店688元',688,'10个热菜、5个凉菜、1个汤、2个小吃、1个果盘',0,'img/oTo55987298FU.jpg',NULL,9),(29,'会利元大饭店午餐888元',888,'11个热菜、5个凉菜、1个汤、2个小吃、1个果盘',0,'img/zyz55987473QF.jpg',NULL,9),(30,'会利元晚餐388元',388,'10个热菜，1个汤',0,'img/ZbF55986868cW.jpg',NULL,9),(31,'会利元大饭店晚餐488元',488,'10个热菜，1个汤',0,'img/Nmi55986969Va.jpg',NULL,9),(32,'洪崖洞晚餐388元',388,'10道热菜、4道凉菜、1道点心、1道汤',0,'img/vCw55710617cu.jpg',NULL,10),(33,'洪崖洞午餐898元',898,'12道热菜、6道凉菜、1道点心、1道汤、一道水果',0,'img/jZW55710885NC.jpg',NULL,10);

/*Table structure for table `tb_room` */

DROP TABLE IF EXISTS `tb_room`;

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

/*Data for the table `tb_room` */

insert  into `tb_room`(`room_id`,`room_name`,`room_height`,`room_min_fee`,`room_form`,`room_pillar`,`room_dinner`,`room_electric_fee`,`room_split`,`room_area`,`room_lamplight`,`room_LED`,`room_tables`,`tb_hotel_hotel_id`) values (1,'龙泉厅','6.5米','20桌','长方形','无','无赠送','免费','可拆分2个300平方米','600平方米','无','无','40桌',1),(2,'4号厅','8米','5桌起','正方形','无','无赠送','免费','不可','162平方米','无','无','12桌',1),(3,'中庭','不限','无','长方形','有','无赠送','免费','不可','300人','无','无','300人',1),(4,'草坪','不限','无','长方形','无','无赠送','免费','不可','200人','无','无','200人',1),(5,'教堂','10米','无','长方形','无','无','无','不可','200人','无','无','200人',1),(6,'湘域厅','2.5米','699元/桌','长方形','1个','有套餐、无赠送','免费','可分区域','无','无','无','8桌',2),(7,'1号厅','2.6米','999元','长方形','无','有套餐，无赠送','否','否','200平方米','无','无','22桌',3),(8,'2号厅','2.6米','999元','长方形','无','有套餐，无赠送','否','否','160平方米','无','无','10桌',3),(9,'大厅','4米','面议','长方形','有','有','免费','不可拆分','暂无','免费','500元','30桌',4),(10,'玫瑰厅 6F','5米','1388元/桌','长方形','无','有套餐无赠送','免费','可拆分为两个厅','1065平方米','有','3000元','65桌',5),(11,'星光大厅 5F','5米','1188元/桌','长方形','无','有套餐无赠送','免费','可拆分两个厅','1250平方米','有','3000元','90桌',5),(12,'巴渝大厅 5F','5米','1188元/桌','长方形','无','有套餐无赠送','免费','可拆分为两个厅','1000平方米','有','3000元','55桌',5),(13,'百合厅 6F','6米','998元/桌','圆形','无','有套餐无赠送','免费','不可','380平方米','有','无','18桌',5),(14,'小厅','暂无','暂无','长方形','6根','有','无','不可拆分','暂无','无','无','16',6),(15,'大厅','暂无','暂无','长方形','6根','有','无','不可拆分','暂无','无','3500元','40桌',6),(16,'大厅','4米','无','长方形','有','有套餐，无赠送','否','否','无','有','费用：1000元，长3米*高6米','40桌',7),(17,'大厅','3.5米','4万','长方形','4个','有套餐，无赠送','300元','不可拆分','0平方米','无','500元','46桌',8),(18,'大厅','4米','1088元/桌','长方形','6个','有套餐，无赠送','免费','不可拆分','0平方米','有','无','30桌',9),(19,'贵宾楼','	4米','无','长方形','有','有套餐，无赠送','	无','无','无','无','费用1200元，大小：高2.34米*长6','50桌',10),(20,'半山花园','无','无','无','无','有套餐，无赠送','否','否','无','无','无','无',10);

/*Table structure for table `tb_shoppingcart` */

DROP TABLE IF EXISTS `tb_shoppingcart`;

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

/*Data for the table `tb_shoppingcart` */

insert  into `tb_shoppingcart`(`shoppingcart_id`,`shoppingcart_time`,`shoppingcart_name`,`shoppingcart_type`,`shoppingcart_place`,`shoppingcart_price`,`shoppingcart_count`,`tb_user_user_tel`,`shoppingcart_img`,`shoppingcart_hotelname`) values ('20171430600087413','2017-05-06 09:59:15','洪崖洞午餐898元','A款','半山花园','898','1','13367206935','img/ZBO58408845Lm.jpg','洪崖洞大酒店'),('20171731226743102','2017-05-06 16:22:05','中天大酒店晚餐350元','B款','1号厅','350','8','13237117999','ing/img/ZBO58408845Lm.jpg','中天大酒楼'),('2017203610859423','2017-05-05 21:23:38','中天大酒店午餐999元','A款','1号厅','999','3','13260621887','img/ZBO58408845Lm.jpg','中天大酒楼'),('20172086972746','2017-05-05 13:37:22','中天大酒店午餐999元','B款','1号厅','999','1','13260621887','img/ZBO58408845Lm.jpg','中天大酒楼');

/*Table structure for table `tb_user` */

DROP TABLE IF EXISTS `tb_user`;

CREATE TABLE `tb_user` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_headPortrait` varchar(45) DEFAULT NULL,
  `user_nickname` varchar(45) DEFAULT NULL,
  `user_sex` varchar(45) DEFAULT NULL,
  `user_city` varchar(45) DEFAULT NULL,
  `user_IDcard` varchar(45) DEFAULT NULL,
  `user_add` varchar(45) DEFAULT NULL,
  `user_postcode` varchar(45) DEFAULT NULL,
  `user_QQ` varchar(45) DEFAULT NULL,
  `user_tel` varchar(45) DEFAULT NULL,
  `user_password` varchar(45) DEFAULT NULL,
  `user_realname` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `user_nickname_UNIQUE` (`user_nickname`),
  UNIQUE KEY `user_tel_UNIQUE` (`user_tel`),
  UNIQUE KEY `user_QQ_UNIQUE` (`user_QQ`),
  UNIQUE KEY `user_IDcard_UNIQUE` (`user_IDcard`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8;

/*Data for the table `tb_user` */

insert  into `tb_user`(`user_id`,`user_headPortrait`,`user_nickname`,`user_sex`,`user_city`,`user_IDcard`,`user_add`,`user_postcode`,`user_QQ`,`user_tel`,`user_password`,`user_realname`) values (1,'null','塔拉夏123','null','河南省焦作市武陟县','42900419950520133822',NULL,'429004','86963554612312','13260621887','0o000o','xv'),(2,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'15527630737','123456',NULL),(3,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'13260621886','123456',NULL),(9,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'13260621889','0o000o',NULL),(10,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'13260621881','0o000o',NULL),(11,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'13260621880','123456',NULL),(21,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'13260621997','0o000o',NULL),(22,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'13260628899','123000',NULL),(24,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'13260621897','123456',NULL),(25,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'13367206935','0o000o',NULL),(26,'null','','null','北京市北京市市辖区东城区','',NULL,'','','13237117999','123456','11111');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
