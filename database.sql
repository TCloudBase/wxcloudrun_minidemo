CREATE TABLE `app_express` (
  `_id` int(30) NOT NULL AUTO_INCREMENT,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `method` varchar(10) NOT NULL DEFAULT '',
  `url` varchar(500) NOT NULL DEFAULT '',
  `status` int(5) NOT NULL,
  `response_time` double(10,3) NOT NULL,
  `ip` varchar(20) NOT NULL DEFAULT '',
  PRIMARY KEY (`_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8; 
      
