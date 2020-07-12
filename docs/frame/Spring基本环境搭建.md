* [一、Spring概述](#%E4%B8%80spring%E6%A6%82%E8%BF%B0)
  * [1\.1 Web开发中的一些问题](#11-web%E5%BC%80%E5%8F%91%E4%B8%AD%E7%9A%84%E4%B8%80%E4%BA%9B%E9%97%AE%E9%A2%98)
  * [1\.2 什么是Spring？](#12-%E4%BB%80%E4%B9%88%E6%98%AFspring)
  * [1\.3 官网](#13-%E5%AE%98%E7%BD%91)
  * [1\.4 Spring架构组成](#14-spring%E6%9E%B6%E6%9E%84%E7%BB%84%E6%88%90)
  * [1\.5 Spring依赖](#15-spring%E4%BE%9D%E8%B5%96)
* [二、自定义工厂](#%E4%BA%8C%E8%87%AA%E5%AE%9A%E4%B9%89%E5%B7%A5%E5%8E%82)
* [三、Spring基本开发步骤](#%E4%B8%89spring%E5%9F%BA%E6%9C%AC%E5%BC%80%E5%8F%91%E6%AD%A5%E9%AA%A4)
  * [3\.1 创建Maven项目](#31-%E5%88%9B%E5%BB%BAmaven%E9%A1%B9%E7%9B%AE)
  * [3\.2 引入依赖](#32-%E5%BC%95%E5%85%A5%E4%BE%9D%E8%B5%96)
  * [3\.3 创建Spring空配置文件](#33-%E5%88%9B%E5%BB%BAspring%E7%A9%BA%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6)
  * [3\.4 定义需要生产的Bean对象](#34-%E5%AE%9A%E4%B9%89%E9%9C%80%E8%A6%81%E7%94%9F%E4%BA%A7%E7%9A%84bean%E5%AF%B9%E8%B1%A1)
  * [3\.5 基本依赖注入](#35-%E5%9F%BA%E6%9C%AC%E4%BE%9D%E8%B5%96%E6%B3%A8%E5%85%A5)
  * [3\.6 调用Spring工厂创建对象](#36-%E8%B0%83%E7%94%A8spring%E5%B7%A5%E5%8E%82%E5%88%9B%E5%BB%BA%E5%AF%B9%E8%B1%A1)
* [四、依赖与配置文件详解](#%E5%9B%9B%E4%BE%9D%E8%B5%96%E4%B8%8E%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E8%AF%A6%E8%A7%A3)
  * [4\.1 Spring的依赖关系](#41-spring%E7%9A%84%E4%BE%9D%E8%B5%96%E5%85%B3%E7%B3%BB)
  * [4\.2 schema](#42-schema)

![LOGO](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200712160555.png)

### 一、Spring概述

#### 1.1 Web开发中的一些问题

> * 传统Web开发存在硬编码所造成的过度程序耦合（例如：Service中作为属性Dao对象）
> * 部分Java EE API较为复杂，使用效率低（例如：JDBC开发步骤）
> * 侵入性强，移植性差（例如：DAO实现的更换，从Connection到SqlSession）



#### 1.2 什么是Spring？

> - Spring 是一个开源的设计层面框架，它解决的是业务逻辑层和其他各层的松耦合问题，因此它将面向接口的编程思想贯穿整个系统应用
> - Spring是众多优秀设计模式的组合（工厂、单例、代理、适配器、包装器、观察者、模板、策略）
> - Spring并未替代现有框架产品，而是将众多框架进行有机整合，简化企业级开发，俗称"胶水框架"



#### 1.3 官网

> 官方网站：[https://spring.io/](https://spring.io/)
>
> GitHub：[https://github.com/spring-projects](https://github.com/spring-projects)
>
> 下载地址：[http://repo.spring.io/release/org/springframework/spring/](http://repo.spring.io/release/org/springframework/spring/)



#### 1.4 Spring架构组成

> Spring架构由诸多模块组成，可分类为
>
> * 核心技术：**依赖注入** ，事件，资源，i18n，验证，数据绑定，类型转换，SpEL，**AOP** 
> * 测试：模拟对象，TestContext框架，Spring MVC测试，WebTestClient。
> * 数据访问：**事务** ，DAO支持，JDBC，ORM，封装XML。
> * Spring MVC和 Spring WebFlux Web框架。
> * 集成：远程处理，JMS，JCA，JMX，电子邮件，任务，调度，缓存。
> * 语言：Kotlin，Groovy，动态语言。



|                          Spring特点                          |
| :----------------------------------------------------------: |
| ![Spring特点](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200712162737.png) |
|                        **Spring架构**                        |
| ![001](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200712162734.png) |



#### 1.5 Spring依赖

| **GroupId**         | **ArtifactId**             | **说明**                                           |
| ------------------- | -------------------------- | -------------------------------------------------- |
| org.springframework | **spring-beans**           | **Beans 支持，包含 Groovy**                        |
| org.springframework | **spring-aop**             | **基于代理的AOP支持**                              |
| org.springframework | **spring-aspects**         | **基于AspectJ 的切面**                             |
| org.springframework | **spring-context**         | **应用上下文运行时，包括调度和远程抽象**           |
| org.springframework | **spring-context-support** | **支持将常见的第三方类库集成到 Spring 应用上下文** |
| org.springframework | **spring-core**            | **其他模块所依赖的核心模块**                       |
| org.springframework | **spring-expression**      | **Spring 表达式语言，SpEL**                        |
| org.springframework | spring-instrument          | JVM 引导的仪表（监测器）代理                       |
| org.springframework | spring-instrument-tomcat   | Tomcat 的仪表（监测器）代理                        |
| org.springframework | spring-jdbc                | 支持包括数据源设置和 JDBC 访问支持                 |
| org.springframework | spring-jms                 | 支持包括发送/接收JMS消息的助手类                   |
| org.springframework | spring-messaging           | 对消息架构和协议的支持                             |
| org.springframework | spring-orm                 | 对象/关系映射，包括对 JPA 和 Hibernate 的支持      |
| org.springframework | spring-oxm                 | 对象/XML 映射（Object/XML Mapping，OXM）           |
| org.springframework | **spring-test**            | **单元测试和集成测试支持组件**                     |
| org.springframework | **spring-tx**              | **事务基础组件，包括对 DAO 的支持及 JCA 的集成**   |
| org.springframework | **spring-web**             | **web支持包，包括客户端及web远程调用**             |
| org.springframework | **spring-webmvc**          | **REST web 服务及 web 应用的 MVC 实现**            |
| org.springframework | spring-webmvc-portlet      | 用于 Portlet 环境的MVC实现                         |
| org.springframework | spring-websocket           | WebSocket 和 SockJS 实现，包括对 STOMP 的支持      |
| org.springframework | **spring-jcl**             | **Jakarta Commons Logging 日志系统**               |



### 二、自定义工厂

> 编写一个读取Spring配置文件并创建对象的工厂，了解Spring工厂创建对象的流程，以便使用自定义工厂来测试Spring基本开发流程

```java
package com.mylifes1110.factory;

import java.io.IOException;
import java.util.Properties;

/**
 * @ClassName MyFactory
 * @Description 自定义工厂(创建对象)
 * @Author Ziph
 * @Date 2020/7/12
 * @Since 1.8
 * @Version 1.0
 */

public class MyFactory {
    private Properties properties = new Properties();

    public MyFactory() {
    }

    public MyFactory(String config) throws IOException {
        // 加载配置文件
        properties.load(MyFactory.class.getResourceAsStream(config));
    }

    // 获取对象
    public Object getBean(String beanName) throws ClassNotFoundException, IllegalAccessException, InstantiationException {
        String classPath = properties.getProperty(beanName);
        if (classPath != null) {
            Class clazz = null;
            clazz = Class.forName(classPath);
            return clazz.newInstance();
        }
        return null;
    }
}
```



### 三、Spring基本开发步骤

#### 3.1 创建Maven项目

> 如果对Maven不了解的小伙伴可以参考[Maven教程](https://github.com/Ziphtracks/JavaLearningmanual/blob/master/docs/developer-tools/Maven%E5%BA%94%E7%94%A8.md)

|                      File -> NewProject                      |
| :----------------------------------------------------------: |
| ![image-20200712164104354](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200712164106.png) |
|                      **创建Maven项目**                       |
| ![image-20200712164221187](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200712164223.png) |



#### 3.2 引入依赖

> 在pom.xml文件中引入Spring常用依赖

```java
<dependencies>
    <!-- Spring常用依赖 -->
    <dependency>
    	<groupId>org.springframework</groupId>
    	<artifactId>spring-context</artifactId>
    	<version>5.1.6.RELEASE</version>
    </dependency>
</dependencies>
```



#### 3.3 创建Spring空配置文件

> 在resources文件夹中创建一个名为`spring-context.xml`，命名并无规定，还有其他的常用命名，比如：`applicationContext.xml`、`beans.xml`

```java
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd">
   
</beans>
```



#### 3.4 定义需要生产的Bean对象

> 定义一个Bean对象、生产该对象并测试该对象内的方法（UserDaoImpl）

```java
package com.mylifes1110.dao.impl;

import com.mylifes1110.bean.User;
import com.mylifes1110.dao.UserDao;

public class UserDaoImpl implements UserDao {

    @Override
    public int insertUser(User user) {
        System.out.println("------insertUser and UserDao------");
        return 0;
    }
}
```



#### 3.5 基本依赖注入

> 依赖注入在这里可以把它理解为将要生产的对象注入到Spring容器中，也就是在spring-context.xml文件利用标签注入，这样就可以让Spring知道你要生产的对象是谁
>
> **标签：** \<bean id="唯一标签" class="需要被创建的目标对象全限定名"/>

```java
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd">
           
   <bean id="UserDao" class="com.mylifes1110.dao.impl.UserDaoImpl"/>
       
</beans>
```



#### 3.6 调用Spring工厂创建对象

> 调用Spring工厂API接口ApplicationContext读取配置Spring核心配置文件并创建工厂对象

```java
package com.mylifes1110.dao;

import org.junit.Test;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class UserDaoImplTest {
    /**
     * @MethodName insertUser
     * @Param []
     * @Description 测试使用Spring工厂获取对象
     * @Author Ziph
     * @Date 2020/7/12
     */
    @Test
    public void insertUser() {
        // 读取配置文件所需创建对象中所需创建的bean对象并获取spring工厂对象
        ApplicationContext context = new ClassPathXmlApplicationContext("spring-context.xml");
        // 通过注入时的唯一标识(id)获取bean对象
        UserDao userDao = (UserDao) context.getBean("UserDao");
        // 使用对象
        userDao.insertUser(null);	// 输出结果为：------insertUser and UserDao------
    }
}
```



### 四、依赖与配置文件详解

#### 4.1 Spring的依赖关系

> Spring框架包含多个模块，每个模块各司其职，可结合需求引入相关依赖Jar包实现功能。
>
> **注意：** Jar包彼此存在依赖，只需引入最外层Jar即可由Maven自动将相关依赖Jar引入到项目中。

|                Spring常用功能的Jar包依赖关系                 |
| :----------------------------------------------------------: |
| ![image-20191230164517693](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200712191825.png) |



#### 4.2 schema

> 配置文件中的顶级标签中包含了语义化标签的相关信息（spring-context.xml头文件即是schema）
>
> **注意：** Spring需要导入的schema标签是很有规律的，因为Spring是特别规范的。例如：如下context别名的schema标签是我自己复制修改的，它也是我们所用到Spring的schema，你可以复制beans的schema来替换所有beans的关键字即可，但是记得复制全（注意查看三个有context标志标签语句，另外“ : ”后面的是别名哦）

```java
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
    
       xmlns:context="http://www.springframework.org/schema/context"
           
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd
           
       http://www.springframework.org/schema/context http://www.springframework.org/schema/beans/spring-context.xsd">

</beans>
```

| schema名称         | 描述                                            |
| ------------------ | ----------------------------------------------- |
| xmlns              | 语义化标签所在的命名空间                        |
| xmlns:xsi          | XMLSchema-instance 标签遵循Schema标签标准       |
| xsi:schemaLocation | xsd文件位置，用以描述标签语义、属性、取值范围等 |

