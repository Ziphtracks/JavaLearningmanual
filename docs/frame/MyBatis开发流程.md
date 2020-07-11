* [一、框架概述](#%E4%B8%80%E6%A1%86%E6%9E%B6%E6%A6%82%E8%BF%B0)
  * [1\.1 什么是框架？](#11-%E4%BB%80%E4%B9%88%E6%98%AF%E6%A1%86%E6%9E%B6)
  * [1\.2 什么是ORM框架？](#12-%E4%BB%80%E4%B9%88%E6%98%AForm%E6%A1%86%E6%9E%B6)
  * [1\.3 使用JDBC完成ORM的缺点](#13-%E4%BD%BF%E7%94%A8jdbc%E5%AE%8C%E6%88%90orm%E7%9A%84%E7%BC%BA%E7%82%B9)
* [二、MyBatis概述](#%E4%BA%8Cmybatis%E6%A6%82%E8%BF%B0)
  * [2\.1 什么是MyBatis](#21-%E4%BB%80%E4%B9%88%E6%98%AFmybatis)
  * [2\.2 官网](#22-%E5%AE%98%E7%BD%91)
  * [2\.3 使用](#23-%E4%BD%BF%E7%94%A8)
* [三、搭建MyBatis项目](#%E4%B8%89%E6%90%AD%E5%BB%BAmybatis%E9%A1%B9%E7%9B%AE)
  * [3\.1 创建一个Maven项目](#31-%E5%88%9B%E5%BB%BA%E4%B8%80%E4%B8%AAmaven%E9%A1%B9%E7%9B%AE)
  * [3\.2 导入MyBatis依赖](#32-%E5%AF%BC%E5%85%A5mybatis%E4%BE%9D%E8%B5%96)
  * [3\.3 创建MyBatis配置文件](#33-%E5%88%9B%E5%BB%BAmybatis%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6)
  * [3\.4 建表](#34-%E5%BB%BA%E8%A1%A8)
  * [3\.5 书写实体类代码](#35-%E4%B9%A6%E5%86%99%E5%AE%9E%E4%BD%93%E7%B1%BB%E4%BB%A3%E7%A0%81)
  * [3\.6 定义Dao层接口](#36-%E5%AE%9A%E4%B9%89dao%E5%B1%82%E6%8E%A5%E5%8F%A3)
  * [3\.7 创建并编写Mapper\.xml](#37-%E5%88%9B%E5%BB%BA%E5%B9%B6%E7%BC%96%E5%86%99mapperxml)
  * [3\.7 注册Mapper](#37-%E6%B3%A8%E5%86%8Cmapper)
  * [3\.8 测试方式1（常用）](#38-%E6%B5%8B%E8%AF%95%E6%96%B9%E5%BC%8F1%E5%B8%B8%E7%94%A8)
  * [3\.9 测试方式2（了解）](#39-%E6%B5%8B%E8%AF%95%E6%96%B9%E5%BC%8F2%E4%BA%86%E8%A7%A3)
* [四、MyBatis框架使用细节](#%E5%9B%9Bmybatis%E6%A1%86%E6%9E%B6%E4%BD%BF%E7%94%A8%E7%BB%86%E8%8A%82)
  * [4\.1 解决mapper\.xml存放在resources以外路径中的读取问题](#41-%E8%A7%A3%E5%86%B3mapperxml%E5%AD%98%E6%94%BE%E5%9C%A8resources%E4%BB%A5%E5%A4%96%E8%B7%AF%E5%BE%84%E4%B8%AD%E7%9A%84%E8%AF%BB%E5%8F%96%E9%97%AE%E9%A2%98)
  * [4\.2 解决JDBC写死问题](#42-%E8%A7%A3%E5%86%B3jdbc%E5%86%99%E6%AD%BB%E9%97%AE%E9%A2%98)
  * [4\.3 类型别名](#43-%E7%B1%BB%E5%9E%8B%E5%88%AB%E5%90%8D)
  * [4\.4 使用log4j日志依赖](#44-%E4%BD%BF%E7%94%A8log4j%E6%97%A5%E5%BF%97%E4%BE%9D%E8%B5%96)
  * [4\.5 注册Mapper](#45-%E6%B3%A8%E5%86%8Cmapper)
    * [4\.5\.1 扫描包注册Mapper](#451-%E6%89%AB%E6%8F%8F%E5%8C%85%E6%B3%A8%E5%86%8Cmapper)
    * [4\.5\.2 单一注册Mapper路径问题](#452-%E5%8D%95%E4%B8%80%E6%B3%A8%E5%86%8Cmapper%E8%B7%AF%E5%BE%84%E9%97%AE%E9%A2%98)
* [五、MyBatis的CURD操作](#%E4%BA%94mybatis%E7%9A%84curd%E6%93%8D%E4%BD%9C)
  * [5\.1 参数绑定](#51-%E5%8F%82%E6%95%B0%E7%BB%91%E5%AE%9A)
    * [5\.1\.1 序号参数绑定](#511-%E5%BA%8F%E5%8F%B7%E5%8F%82%E6%95%B0%E7%BB%91%E5%AE%9A)
    * [5\.1\.2 注解参数绑定](#512-%E6%B3%A8%E8%A7%A3%E5%8F%82%E6%95%B0%E7%BB%91%E5%AE%9A)
    * [5\.1\.3 Map参数绑定](#513-map%E5%8F%82%E6%95%B0%E7%BB%91%E5%AE%9A)
    * [5\.1\.4 对象参数绑定](#514-%E5%AF%B9%E8%B1%A1%E5%8F%82%E6%95%B0%E7%BB%91%E5%AE%9A)
  * [5\.2 查询操作](#52-%E6%9F%A5%E8%AF%A2%E6%93%8D%E4%BD%9C)
    * [5\.2\.1 查询标签](#521-%E6%9F%A5%E8%AF%A2%E6%A0%87%E7%AD%BE)
    * [5\.2\.2 普通查询](#522-%E6%99%AE%E9%80%9A%E6%9F%A5%E8%AF%A2)
    * [5\.2\.3 查询总数据条数](#523-%E6%9F%A5%E8%AF%A2%E6%80%BB%E6%95%B0%E6%8D%AE%E6%9D%A1%E6%95%B0)
    * [5\.2\.4 模糊查询](#524-%E6%A8%A1%E7%B3%8A%E6%9F%A5%E8%AF%A2)
  * [5\.3 删除操作](#53-%E5%88%A0%E9%99%A4%E6%93%8D%E4%BD%9C)
    * [5\.3\.1 删除标签](#531-%E5%88%A0%E9%99%A4%E6%A0%87%E7%AD%BE)
    * [5\.3\.2 删除](#532-%E5%88%A0%E9%99%A4)
  * [5\.4 修改操作](#54-%E4%BF%AE%E6%94%B9%E6%93%8D%E4%BD%9C)
    * [5\.4\.1 修改标签](#541-%E4%BF%AE%E6%94%B9%E6%A0%87%E7%AD%BE)
    * [5\.4\.2 修改](#542-%E4%BF%AE%E6%94%B9)
  * [5\.5 新增操作](#55-%E6%96%B0%E5%A2%9E%E6%93%8D%E4%BD%9C)
    * [5\.5\.1 新增标签](#551-%E6%96%B0%E5%A2%9E%E6%A0%87%E7%AD%BE)
    * [5\.5\.2 新增](#552-%E6%96%B0%E5%A2%9E)
  * [5\.6 主键回填操作](#56-%E4%B8%BB%E9%94%AE%E5%9B%9E%E5%A1%AB%E6%93%8D%E4%BD%9C)
    * [5\.6\.1 什么是主键回填？](#561-%E4%BB%80%E4%B9%88%E6%98%AF%E4%B8%BB%E9%94%AE%E5%9B%9E%E5%A1%AB)
    * [5\.6\.2 主键回填标签](#562-%E4%B8%BB%E9%94%AE%E5%9B%9E%E5%A1%AB%E6%A0%87%E7%AD%BE)
    * [5\.6\.3 通过last\_insert\_id()查询主键（int）](#563-%E9%80%9A%E8%BF%87last_insert_id%E6%9F%A5%E8%AF%A2%E4%B8%BB%E9%94%AEint)
    * [5\.6\.4 通过uuid()查询主键（String）](#564-%E9%80%9A%E8%BF%87uuid%E6%9F%A5%E8%AF%A2%E4%B8%BB%E9%94%AEstring)
* [六、封装工具类](#%E5%85%AD%E5%B0%81%E8%A3%85%E5%B7%A5%E5%85%B7%E7%B1%BB)
  * [6\.1 封装工具类分析](#61-%E5%B0%81%E8%A3%85%E5%B7%A5%E5%85%B7%E7%B1%BB%E5%88%86%E6%9E%90)
  * [6\.2 MyBatis工具类](#62-mybatis%E5%B7%A5%E5%85%B7%E7%B1%BB)

![001](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200711094817.png)

### 一、框架概述

#### 1.1 什么是框架？

> 软件的半成品，解决了软件开发过程当中的普适性问题，从而简化了开发步骤，提供了开发的效率



#### 1.2 什么是ORM框架？

> ORM（Object Relational Mapping）对象关系映射，将程序中的一个对象与表中的一行数据一一对应
>
> ORM框架提供了持久化类与表的映射关系，在运行时参照映射文件的信息，把对象持久化到数据库中



#### 1.3 使用JDBC完成ORM的缺点

> * 存在大量的冗余代码
>
> * 手工创建 Connection、Statement 等
>
> * 手工将结果集封装成实体对象
>
> * 查询效率低，没有对数据访问进行过优化（Not Cache）



### 二、MyBatis概述

#### 2.1 什么是MyBatis

> MyBatis本是Apache软件基金会的一个开源项目iBatis，2010年这个项目由apache software foundation 迁移到了Google Code，并且改名为MyBatis。2013年11月迁移到Github。MyBatis 是一款优秀的持久层框架，它支持自定义 SQL、存储过程以及高级映射。MyBatis 免除了几乎所有的 JDBC 代码以及设置参数和获取结果集的工作。MyBatis 可以通过简单的 XML 或注解来配置和映射原始类型、接口和 Java POJO（Plain Old Java Objects，普通老式 Java 对象）为数据库中的记录



#### 2.2 官网

> 官方网站：[http://www.mybatis.org/mybatis-3/](http://www.mybatis.org/mybatis-3/)
>
> 下载地址：[https://github.com/mybatis/mybatis-3/releases/tag/mybatis-3.5.1](https://github.com/mybatis/mybatis-3/releases/tag/mybatis-3.5.1)



#### 2.3 使用

> 关于对MyBatis的使用，我们创建的Maven项目是不需要下载MyBatis的，而是可以通过在Maven项目中的pom文件中添加MyBatis依赖使用！后续我会把MyBatis的开发流程奉上！



### 三、搭建MyBatis项目

#### 3.1 创建一个Maven项目

|                      File -> NewProject                      |
| :----------------------------------------------------------: |
| ![image-20200711100406109](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200711100407.png) |
|                      **创建Maven项目**                       |
| ![image-20200711100511187](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200711100513.png) |



#### 3.2 导入MyBatis依赖

> 在pom.xml文件中添加MyBatis核心依赖和MyBatis Log（日志）依赖
>
> - 核心依赖即是使用MyBatis必备依赖环境，必须导入
> - MyBatis Log（日志）依赖可以查看MyBatis启动的过程，便于我们纠错、查Bug
>
> **注意：** 记得把依赖放在\<dependecies>标签内，MyBatis必定是与数据库交互的，所以也需要导入mysql驱动依赖

```java
<!--MyBatis核心依赖-->
<dependency>
    <groupId>org.mybatis</groupId>
    <artifactId>mybatis</artifactId>
    <version>3.4.6</version>
</dependency>
    
<!--日志依赖-->
<dependency>
    <groupId>log4j</groupId>
    <artifactId>log4j</artifactId>
    <version>1.2.17</version>
</dependency>
    
<!--MySql驱动依赖-->
<dependency>
    <groupId>mysql</groupId>
    <artifactId>mysql-connector-java</artifactId>
    <version>5.1.47</version>
</dependency>
```



#### 3.3 创建MyBatis配置文件

> 创建名为`mybatis-config.xml`配置文件并配置以下信息
>
> **注意：** 目前mapper.xml默认建议存放在resources中，路径不能以/开头，后续我会补全到其他配置方法

```java
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE configuration PUBLIC "-//mybatis.org//DTD Config 3.0//EN"
	"http://mybatis.org/dtd/mybatis-3-config.dtd">

<!--MyBatis配置-->
<configuration>
    <!--JDBC环境配置、选中默认环境-->
    <environments default="MySqlDB">
        <!--MySql数据库环境配置-->
        <environment id="MySqlDB">
            <!--事务管理-->
            <transactionManager type="JDBC"/>
            <!--连接池-->
            <dataSource type="org.apache.ibatis.datasource.pooled.PooledDataSourceFactory">
                <property name="driver" value="com.mysql.jdbc.Driver"/>
                <!-- &转义&amp; -->
                <property name="url" value="jdbc:mysql://localhost:3306/x?useUnicode=true&amp;characterEncoding=utf8"/>
                <property name="username" value="root"/>
                <property name="password" value="123456"/>
            </dataSource>
        </environment>
    </environments>

    <!--Mapper注册-->
    <mappers>
        <!--注册Mapper文件的所在位置-->
        <mapper resource="xxxMapper.xml"/>
    </mappers>
                    
</configuration>
```



#### 3.4 建表

> 创建一张表来实现对数据库的操作

```sql
create table tb_user
(
    id       int auto_increment
        primary key,
    username varchar(30) null,
    password varchar(30) null,
    gender   char        null,
    birth    date        null
) charset = utf8;
```



#### 3.5 书写实体类代码

> 这里我是用的Lombok插件使用注解来完成Getter、Setter方法和无参、有参构造

```java
package com.mylifes1110.bean;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {
    private Integer id;
    private String username;
    private String password;
    private Boolean gender;
    private Date birth;
}
```



#### 3.6 定义Dao层接口

> 定义一个Dao层接口并编写一个查询方法
>
> **注意：** 因为我们使用MyBatis框架，所以我们不需要来创建Dao层的实现类了

```java
package com.mylifes1110.dao;

import com.mylifes1110.bean.User;

public interface UserDao {
    User selectUserById(int id);
}
```



#### 3.7 创建并编写Mapper.xml

> MyBatis框架是使用Mapper.xml文件来将对象和sql关系映射的，所以我们先在resources文件夹中创建一个`UserMapper.xml`文件并配置

```java
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
	"http://mybatis.org/dtd/mybatis-3-mapper.dtd">

<!--namespace：所需实现的接口全限定名-->
<mapper namespace="com.mylifes1110.dao.UserDao">
    <!--id：所需重写的接口抽象方法；resultType：查询后所需返回的对象类型-->
	<select id="selectUserById" resultType="com.mylifes1110.bean.User">
    	<!--select标签是查询标签，里面包裹着查询的sql语句，其中id = #{arg0}是id = ?的意思-->
    	<!--#{arg0}是指id等于方法中第一个形参，也就是id-->
        select id, username, password, gender, birth from tb_user where id = #{arg0}
    </select>
</mapper>
```



#### 3.7 注册Mapper

> 将mapper.xml注册到mybatis-config.xml核心配置中

```java
<!--Mapper注册-->
<mappers>
	<!--注册Mapper文件的所在位置-->
	<mapper resource="xxxMapper.xml"/>
</mappers>
```



#### 3.8 测试方式1（常用）

```java
package com.mylifes1110.dao;

import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;
import org.junit.Test;

import java.io.IOException;
import java.io.InputStream;

public class UserMapperTest {
    @Test
    public void selectUserByIdTest() throws IOException {
        // 获得读取MyBatis核心配置文件的流对象
        InputStream input = Resources.getResourceAsStream("mybatis-config.xml");
        // 根据流对象构建SqlSession连接对象的工厂
        SqlSessionFactory factory = new SqlSessionFactoryBuilder().build(input);
        // 通过工厂获得连接对象sqlSession
        SqlSession sqlSession = factory.openSession();
        // 通过连接对象获得接口实现类对象
        UserDao userDaoImpl = sqlSession.getMapper(UserDao.class);
        // 打印结果
        System.out.println(userDaoImpl.selectUserById(1));
    }
}
```



#### 3.9 测试方式2（了解）

```java
package com.mylifes1110.dao;

import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;
import org.junit.Test;

import java.io.IOException;
import java.io.InputStream;

public class UserMapperTest {
	@Test
    public void selectUserByIdTest2() throws IOException {
        // 获得读取MyBatis核心配置文件的流对象
        InputStream input = Resources.getResourceAsStream("mybatis-config.xml");
        // 根据流对象构建SqlSession连接对象的工厂
        SqlSessionFactory factory = new SqlSessionFactoryBuilder().build(input);
        // 通过工厂获得连接对象sqlSession
        SqlSession sqlSession = factory.openSession();
        // 通过连接对象直接调用接口中的方法
        Object o = sqlSession.selectOne("com.mylifes1110.dao.UserDao.selectUserById", 1);
        // 打印结果
        System.out.println(o);
    }
}
```



### 四、MyBatis框架使用细节

#### 4.1 解决mapper.xml存放在resources以外路径中的读取问题

> 在Maven项目中resources目录中的配置文件是不会被加载编译到classes中的，所以如果我们要将mapper.xml文件放在resources文件夹以外的文件夹就不会被编译到，以至于我们的MyBatis使用不了！
>
> **问题解决：** 为了解决此问题，我们可以在pom.xml文件中声明mapper.xml文件所在其他目录为resources文件夹，这样就可以被编译到classes文件夹中了！
>
> **操作：** 在pom.xml文件最后追加< build >标签，以便可以将xml文件复制到classes中，并在程序运行时正确读取。
>
> **注意：** 为了让properties文件也被编译到，也需要在\<include>标签内加入配置文件的路径，举一反三，如果哪个文件需要被编译我们就加标签即可！

```java
<build>
    <resources>
        <resource>
            <directory>src/main/java</directory>
            <includes>
                <include>**/*.xml</include><!-- 新添加 */代表1级目录 **/代表多级目录 -->
            </includes>
            <filtering>true</filtering>
        </resource>
        <resource>
            <directory>src/main/resources</directory>
            <includes>
                <include>**/*.xml</include><!-- 新添加 */代表1级目录 **/代表多级目录 -->
                <include>**/*.properties</include><!--添加properties文件-->
            </includes>
            <filtering>true</filtering>
        </resource>
    </resources>
</build>
```



#### 4.2 解决JDBC写死问题

> 目前我们使用的MyBatis是在核心配置中写死了，所以我们必须借助jdbc.properties配置文件来加载jdbc，如下操作：

*创建jdbc.properties配置文件* 

```java
#jdbc.properties
jdbc.driver=com.mysql.jdbc.Driver
jdbc.url=jdbc:mysql://localhost:3306/temp?useUnicode=true&characterEncoding=utf8
jdbc.username=root
jdbc.password=123456
```

*修改mybatis-config.xml核心配置文件* 

```java
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE configuration PUBLIC "-//mybatis.org//DTD Config 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-config.dtd">

<!--MyBatis配置-->
<configuration>
    <properties resource="jdbc.properties" />
    <!--JDBC环境配置、选中默认环境-->
    <environments default="MySqlDB">
        <!--MySql数据库环境配置-->
        <environment id="MySqlDB">
            <!--事务管理-->
            <transactionManager type="JDBC"/>
            <!--连接池-->
            <dataSource type="POOLED">
                <property name="driver" value="${jdbc.driver}"/>
                <!-- &转义&amp; -->
                <property name="url" value="${jdbc.url}"/>
                <property name="username" value="${jdbc.username}"/>
                <property name="password" value="${jdbc.password}"/>
            </dataSource>
        </environment>
    </environments>

    <!--Mapper注册-->
    <mappers>
        <!--注册Mapper文件的所在位置-->
        <mapper resource="UserMapper.xml"/>
    </mappers>
</configuration>
```



#### 4.3 类型别名

> 关于我们在写标签的时候，往往会写大量的resultType，但是该属性需要引入一个类的包路径，如果加入类型别名就可以省去写各种包，只写类名就可以。这样为实体类定义别名，提高书写效率
>
> **操作：** \<properties>标签后面加入如下内容即可使用类型别名
>
> **注意：** 如下标签内添加以下配置信息，指定类别名和自动扫描包内类的别名二选一，一般是扫描包的好些，因为定义类会无限定义多个类，很麻烦

```java
<!--定义别名二选一-->
<typeAliases>
    <!--定义类的别名-->
    <typeAlias type="com.mylifes1110.bean.User" alias="User" />
    
    <!--自动扫描包，将原类名作为别名-->
    <package name="com.mylifes1110.bean" />
</typeAliases>
```



#### 4.4 使用log4j日志依赖

> 在开始时候我们在pom.xml文件中添加了日志依赖，但是并没有使用该日志依赖。如果使用的话，需要创建一个log4j依赖的配置文件，并配置如下信息
>
> **注意：** 在配置文中log4j.logger.后面的路径是dao层接口所在路径，我们可以选择执行特定的接口来使用日志功能，也可以选择所有的dao层接口都使用日志功能，这里我将所有的dao层接口都使用了日志功能

*向pom.xml文件中添加log4j依赖* 

```java
<!-- log4j日志依赖 https://mvnrepository.com/artifact/log4j/log4j -->
<dependency>
    <groupId>log4j</groupId>
    <artifactId>log4j</artifactId>
    <version>1.2.17</version>
</dependency>
```

*创建并配置log4j.properties* 

```java
# Global logging configuration
log4j.rootLogger=DEBUG, stdout
# MyBatis logging configuration...
log4j.logger.com.mylifes1110.dao=TRACE
# Console output...
log4j.appender.stdout=org.apache.log4j.ConsoleAppender
log4j.appender.stdout.layout=org.apache.log4j.PatternLayout
log4j.appender.stdout.layout.ConversionPattern=%5p [%t] - %m%n
```

*日志信息* 

|   级别    | 描述                                                         |
| :-------: | :----------------------------------------------------------- |
| ALL LEVEL | 打开所有日志记录开关；是最低等级的，用于打开所有日志记录。   |
|   DEBUG   | 输出调试信息；指出细粒度信息事件对调试应用程序是非常有帮助的。 |
|   INFO    | 输出提示信息；消息在粗粒度级别上突出强调应用程序的运行过程。 |
|   WARN    | 输出警告信息；表明会出现潜在错误的情形。                     |
|   ERROR   | 输出错误信息；指出虽然发生错误事件，但仍然不影响系统的继续运行。 |
|   FATAL   | 输出致命错误；指出每个严重的错误事件将会导致应用程序的退出。 |
| OFF LEVEL | 关闭所有日志记录开关；是最高等级的，用于关闭所有日志记录。   |



#### 4.5 注册Mapper

##### 4.5.1 扫描包注册Mapper

> 关于注册Mapper，我们在上面知识中使用的是单个Mapper注册。其实我们可以选择一个包来进行注册所有Mapper.xml文件的，这就需要我们使用扫描包内所有的Mapper.xml文件。如果我们使用该方式扫描包内所有Mapper.xml文件，需要遵循如下规则：
>
> - Mapper.xml文件与Dao层接口放在同一包下
> - Mapper.xml文件与Dao层接口命名必须保持一致，比如：UserMapper.xml和UserMapper.java

```java
<!--扫描包方式Mapper注册-->
<mappers>
    <!--dao层路径-->
    <package name="com.mylifes1110.dao"/>
</mappers>
```



##### 4.5.2 单一注册Mapper路径问题

> 关于单一注册Mapper是如下形式，但是将Mapper文件全都放在了resources文件夹下显得乱糟糟的，为了解决这个问题，我们可以在resources文件夹下创建一个名为mappers的文件夹（dir）来存放大量的Mapper.xml文件。那么问题来了路径该怎么写呢？如下：

```java
<!--Mapper注册-->
<mappers>
    <!--注册Mapper文件的所在位置-->
    <mapper resource="mappers/UserMapper.xml"/>
</mappers>
```



### 五、MyBatis的CURD操作

> **注意：** 在增删改操作的时候，需要使用sqlSession来提交事务之后才可以完成增删改操作

#### 5.1 参数绑定

##### 5.1.1 序号参数绑定

> 序号参数绑定即是使用`#{arg0}`、`#{arg1}`等等代替参数列表中的第一个参数、第二个参数等等。该方法不推荐使用，因为参数的可读性很差！

```java
// Dao层接口
User selectUserByUserNameAndPassword(String username, String password);

// Mapper.xml
<select id="selectUserByUserNameAndPassword1" resultType="User">
    SELECT * FROM t_user
    WHERE username = #{arg0} and password = #{arg1}
</select>
```



##### 5.1.2 注解参数绑定

> 注解参数绑定即是使用`@Param("字段")`来代替参数列表中的对应参数，随后设置好参数在Sql语句中使用`#{字段}`来取对应值。该方式推荐使用！

```java
// Dao层接口
User selectUserByUserNameAndPassword(@Param("username") String username, @Param("password")String password);

// Mapper.xml
<select id="selectUserByUserNameAndPassword2" resultType="User">
    SELECT * FROM t_user
    WHERE username = #{username} and password = #{password}
</select>
```



##### 5.1.3 Map参数绑定

> Map参数绑定即是使用Map集合来封装参数，并在方法中传入一个Map集合，随后在Sql语句中使用封装的键来取值。该方式了解即可，操作繁琐，不建议使用！

```java
// Dao层接口
User selectUserByUserNameAndPassword(String username, String password);

// 测试类创建Map集合,封装数据
Map<String, Object> map = new HashMap<>();
// 自定义key,绑定参数
map.put("username", "root");
map.put("password", "123456");
User user = userDao.selectUserByUserNameAndPassword(map);

// Mapper.xml
<select id="selectUserByUserNameAndPassword3" resultType="User">
    SELECT * FROM t_user
    WHERE username = #{username} and password = #{password}	<!-- 通过key获得value -->
</select>
```



##### 5.1.4 对象参数绑定

> 对象参数绑定即是在Dao层接口方法的参数列表中传入对象，这样在Sql语句中就可以随意取出该对象中的字段值了。因为好多场景需要传入对象，所以该方式方便简单，推荐使用！

```java
// Dao层接口
User selectUserByUserNameAndPassword(User user);

// Mapper.xml
<select id="selectUserByUserNameAndPassword4" resultType="User">
    SELECT * FROM t_user
    WHERE username = #{username} and password = #{password}	<!-- 对象中取出的字段值 -->
</select>
```



#### 5.2 查询操作

##### 5.2.1 查询标签

> **查询标签：** \<select id="接口方法名" resultType="返回值类型">



##### 5.2.2 普通查询

> 普通查询既是我们使用MyBatis查询单表或多表中的数据

```java
// Dao层接口
User selectUserByUserNameAndPassword(@Param("username") String username, @Param("password")String password);

// Mapper.xml
<select id="selectUserByUserNameAndPassword2" resultType="User">
    SELECT * FROM t_user
    WHERE username = #{username} and password = #{password}
</select>
```



##### 5.2.3 查询总数据条数

> 可以使用count(1)来查询总数据条数

```java
// Dao层接口
long selectUserCount();

// Mapper.xml
<select id="selectUserCount" resultType="java.lang.Long">
    select count(1) from tb_user
</select>
    
// 测试类
@Test
public void selectUserCount() throws IOException {
    InputStream input = Resources.getResourceAsStream("mybatis-config.xml");
    SqlSessionFactory factory = new SqlSessionFactoryBuilder().build(input);
    SqlSession sqlSession = factory.openSession();
    UserDao userDao = sqlSession.getMapper(UserDao.class);
    System.out.println(userDao.selectUserCount());
}
```



##### 5.2.4 模糊查询

> Sql中的模糊查询在MyBatis中也是可以使用的，如下是使用注解参数绑定来模糊查询的username字段
>
> **注意：** 查询List集合，resultType中传入的也是集中中的泛型对象（特殊）

```java
// Dao层接口
List<User> selectUserListByUsername1(@Param("username") String username);

// Mapper.xml
<select id="selectUserListByUsername1" resultType="com.mylifes1110.bean.User">
    select id, username, password, gender, birth
    from tb_user
    where username like concat('%',#{username},'%')
</select>
    
// 查询包含Z的username
@Test
public void selectUserListByUsername1() throws IOException {
    InputStream input = Resources.getResourceAsStream("mybatis-config.xml");
    SqlSessionFactory factory = new SqlSessionFactoryBuilder().build(input);
    SqlSession sqlSession = factory.openSession();
    UserDao userDao = sqlSession.getMapper(UserDao.class);
    System.out.println(userDao.selectUserListByUsername1("Z"));
}
```



#### 5.3 删除操作

##### 5.3.1 删除标签

> \<delete id="接口方法名" resultType="返回值类型">
>
> **注意：** 在删除标签中，resultType属性是可以省略的，而IDEA快捷键生成的\<delete>标签中是默认省略的！



##### 5.3.2 删除

> 通过id来删除一个用户信息

```java
// Dao层接口
int deleteUserById(@Param("id") int id);

// Mapper.xml
<delete id="deleteUserById">
    delete from tb_user where id = #{id}
</delete>
```



#### 5.4 修改操作

##### 5.4.1 修改标签

> \<update id="接口方法名" resultType="返回值类型">
>
> **注意：** 在\<update>标签中也是可以省略resultType属性值的



##### 5.4.2 修改

> 通过id来修改一个用户信息

```java
// Dao层接口
int updateUserById(User user);

// Mapper.xml
<update id="updateUserById">
    update tb_user set
    username = #{username}, password = #{password}, gender = #{gender}, birth = #{birth}
	where id = #{id}
</update>
```



#### 5.5 新增操作

##### 5.5.1 新增标签

> \<insert id="接口方法名" resultType="返回值类型">
>
> **注意：** 在\<insert>标签中也是可以省略resultType属性值的



##### 5.5.2 新增

> 新增一个用户信息

```java
// Dao层接口
int insertUser(User user);

// Mapper.xml
<insert id="insertUser">
    insert into tb_user
    (username, password, gender, birth)
    values 
    (#{username}, #{password}, #{gender}, #{birth})
</insert>
```



#### 5.6 主键回填操作

##### 5.6.1 什么是主键回填？

> 关于主键回填正在学习的你也许不知道什么意思，但是我分析一个场景，大概你就会了解了！
>
> **场景一（int类型主键）：** 在开发中，int类型并自增的主键也很常见，但是当你插入一条数据并没有插入主键id时，Sql会帮你自动添加主键id。这就产生了一个弊端，如果我们想插入一条数据并得到这个主键id时就需要再查一次这条数据获取主键id，显然这很麻烦。于是，主键回填即可解决此问题，当你插入一条数据时，int类型的主键id会在insert过程中单独查询一次主键并返回该主键id，这样一个处理Sql的操作就做了两份工作，大大提高了开发效率
>
> **场景二（String类型主键）：** 在开发中，与场景一相同，String类型的主键同样很常见，例如：订单ID通常是一个很长的字符串。而订单ID是可以用UUID()方法和replace()方法来获取的，因为Sql中也是存在这两个方法的，所以我们也可以在插入订单数据的时候生成订单ID填入数据库，同样也可以在插入数据后查询出该订单ID，这样也大大提高了我开发效率



##### 5.6.2 主键回填标签

> \<selectKey keyProperty="主键字段名" resultType="返回值类型" order="BEFORE | AFTER">
>
> **注意：** 使用时，将\<selectKey>标签放在\<insert>标签内。after为后，before为前。意为在插入数据之前主键回填，在查润数据之后主键回填



##### 5.6.3 通过last_insert_id()查询主键（int）

> last_insert_id()是MySQL内置的一个函数，我们可以通过`select last_insert_id()`来查询出最后一条插入数据的整数int类型ID。通过使用\<selectKey>标签指定order属性为after来保证在插入数据之后查询出该数据的ID

```java
// 表使用的是User表

// Dao层接口
int insertUser(User user);

// Mapper.xml
<insert id="insertUser">
<selectKey keyProperty="id" resultType="int" order="AFTER">
    select last_insert_id()<!--适用于整数类型自增的主键-->
</selectKey>
    insert into tb_user
    (username, password, gender, birth)
    values
    (#{username}, #{password}, #{gender}, #{birth})
</insert>
    
// 测试类
@Test
public void insertOrder() {
    OrderDao orderDao = MyBatisUtils.getMapper(OrderDao.class);
    Order order = new Order();
    order.setMoney(11.1D);
    order.setUserId(2);
    System.out.println(orderDao.insertOrder(order));
    System.out.println(order.getId());
    MyBatisUtils.commit();
}
```



##### 5.6.4 通过uuid()查询主键（String）

> UUID()和replace()是MySQL内置的两个内置函数，我们可以通过UUID()方法来生成一个UUID字符串，再使用replace()来替换UUID中的“-”，来生成32位的订单ID字符串，生成订单ID后通过`SELECT REPLACE(UUID(),'-','')`来查询出添加到数据库中的订单ID

```java
// 创建订单表
create table tb_order
(
    id      varchar(32) not null
        primary key,
    money   double      null,
    user_id int         null
) charset = utf8;

// Dao层接口
int insertOrder(Order order);

// Mapper.xml
<insert id="insertOrder" parameterType="com.mylifes1110.bean.Order">
<selectKey keyProperty="id" resultType="string" order="BEFORE">
    select replace(UUID(), '-', '')
</selectKey>
    insert into tb_order
    (id, money, user_Id)
    values
    (#{id}, #{money}, #{userId})
</insert>
```



### 六、封装工具类

#### 6.1 封装工具类分析

> * Resource：用于获得读取配置文件的IO对象，耗费资源，建议通过IO一次性读取所有所需要的数据。
>
>  * SqlSessionFactory：SqlSession工厂类，内存占用多，耗费资源，建议每个应用只创建一个对象。
>
> * SqlSession：相当于Connection，可控制事务，应为线程私有，不被多线程共享。
>
> * 将获得连接、关闭连接、提交事务、回滚事务、获得接口实现类等方法进行封装。



#### 6.2 MyBatis工具类

```java
package com.mylifes1110.utils;

import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;

import java.io.InputStream;

/**
 * @ClassName MyBatisUtils
 * @Description MyBatis工具类
 * @Author Ziph
 * @Date 2020/7/11
 * @Since 1.8
 * @Version 1.0
 */
public class MyBatisUtils {
    // 获得SqlSession工厂
    private static SqlSessionFactory factory;

    // 创建ThreadLocal绑定当前线程中的SqlSession对象
    private static final ThreadLocal<SqlSession> tl = new ThreadLocal<SqlSession>();

    static {
        try {
            InputStream is = Resources.getResourceAsStream("mybatis-config.xml");
            factory = new SqlSessionFactoryBuilder().build(is);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    // 获得连接（从tl中获得当前线程SqlSession）
    private static SqlSession openSession(){
        SqlSession session = tl.get();
        if(session == null){
            session = factory.openSession();
            tl.set(session);
        }
        return session;
    }

    // 释放连接（释放当前线程中的SqlSession）
    public static void closeSession(){
        SqlSession session = tl.get();
        session.close();
        tl.remove();
    }

    // 提交事务（提交当前线程中的SqlSession所管理的事务）
    public static void commit(){
        SqlSession session = openSession();
        session.commit();
        closeSession();
    }

    // 回滚事务（回滚当前线程中的SqlSession所管理的事务）
    public static void rollback(){
        SqlSession session = openSession();
        session.rollback();
        closeSession();
    }

    // 获得接口实现类对象
    public static <T extends Object> T getMapper(Class<T> clazz){
        SqlSession session = openSession();
        return session.getMapper(clazz);
    }
}
```

