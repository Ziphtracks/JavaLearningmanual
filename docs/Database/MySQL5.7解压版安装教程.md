* [解压版安装步骤](#%E8%A7%A3%E5%8E%8B%E7%89%88%E5%AE%89%E8%A3%85%E6%AD%A5%E9%AA%A4)
    * [一、解压MySQL5\.7](#%E4%B8%80%E8%A7%A3%E5%8E%8Bmysql57)
    * [二、配置环境变量](#%E4%BA%8C%E9%85%8D%E7%BD%AE%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F)
    * [三、创建my\.ini配置文件并填写配置信息](#%E4%B8%89%E5%88%9B%E5%BB%BAmyini%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E5%B9%B6%E5%A1%AB%E5%86%99%E9%85%8D%E7%BD%AE%E4%BF%A1%E6%81%AF)
    * [四、DOS命令窗口安装MySQL服务](#%E5%9B%9Bdos%E5%91%BD%E4%BB%A4%E7%AA%97%E5%8F%A3%E5%AE%89%E8%A3%85mysql%E6%9C%8D%E5%8A%A1)
    * [五、安装步骤分解](#%E4%BA%94%E5%AE%89%E8%A3%85%E6%AD%A5%E9%AA%A4%E5%88%86%E8%A7%A3)

------



> **MySQL5.7 解压版下载官网地址：** https://dev.mysql.com/downloads/mysql/5.7.html

![在这里插入图片描述](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200531103903.png)
![在这里插入图片描述](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200531103904.png)

***
# 解压版安装步骤
### 一、解压MySQL5.7
![在这里插入图片描述](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200531103905.png)
### 二、配置环境变量
**右键单击“我的电脑”然后跟随我做如下操作：**（与配置jdk基本雷同！）
如果你打开Path，不是列表，只有一条信息让你修改的话，在Path中添加：%MYSQL_HOME%\bin，注意Path中不同值分割的“ ; ”符号不能省略（英文半角状态下的“;”）
![在这里插入图片描述](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200531103906.png)
![在这里插入图片描述](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200531103907.png)

### 三、创建my.ini配置文件并填写配置信息
**首先创建一个.txt文件即可，修改文件名和后缀为my.ini，修改保存后打开使用记事本打开该配置文件填写如下信息：**（复制修改注意事项后的路径即可！）

**编辑好my.ini文件之后，将my.ini文件放到mysql的解压本地路径下E:\Program Files\mysql-5.7.30-winx64目录下**（我这里是安装在了自己的E盘下！大家根据自己情况安装即可！）

<font color="red">**注意：basedir和datadir填写自己将mysql解压后的文件路径！**</font>

```ini
[mysql]  
# 设置 mysql 客户端默认字符集  
default-character-set=utf8 
 
[mysqld]  
#设置 3306 端口  
port = 3306  

# 设置 mysql 的安装目录  
basedir=E:\Program Files\mysql-5.7.30-winx64

# 设置 mysql 数据库的数据的存放目录
datadir=E:\Program Files\mysql-5.7.30-winx64\data 

# 允许最大连接数  
max_connections=200  

# 服务端使用的字符集默认为 8 比特编码的 latin1 字符集  
character-set-server=utf8  

# 创建新表时将使用的默认存储引擎  
default-storage-engine=INNODB
```

### 四、DOS命令窗口安装MySQL服务
> 命令快捷使用管理员身份打开DOS命令窗口：**Windows键+X+A**

<font color="red">**注意：一定要使用管理员身份打开DOS命令窗口**</font>
![在这里插入图片描述](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200531103908.png)
![在这里插入图片描述](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200531103909.png)

### 五、安装步骤分解


 **进入解压后MySQL的 bin 文件夹内。如果路径中，某文件夹含有空格，需要加上 ""** 

	cd E:\Program Files\mysql-5.7.23-winx64\bin

**初始化data目录（即默认数据库）。执行命令后提示：Service successfully installed. 表示安装成功**

	mysqld --initialize-insecure --user=mysql

**安装MySQL服务**

	mysqld -install

**启动MySQL服务。中间会经过正在启动，然后提示MySQL服务已经启动成功。表示启动服务成功！**

	net start mysql

**初始化MySQL用户名和密码（输入以下命令后会显示Enter password：让你输入密码，此时我们没有设置密码，直接回车即可登录！）**

	mysql -u root -p

**登录后修改密码（'123456'是我的新密码，你们的密码可自行设置！注意：单引号和分号必须都有）**

	ALTER USER 'root'@'localhost' IDENTIFIED BY '123456';

**查看数据库的编码字符集（除了第四项其他都是utf8为我们需要的配置！）**

	show variables like 'character%';

![在这里插入图片描述](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200531103910.png)
**查看数据库**

	show databases;

![在这里插入图片描述](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200531103911.png)

