* [SSM整合](#ssm%E6%95%B4%E5%90%88)
    * [一、创建一个Maven项目](#%E4%B8%80%E5%88%9B%E5%BB%BA%E4%B8%80%E4%B8%AAmaven%E9%A1%B9%E7%9B%AE)
    * [二、声明war打包方式并创建web项目目录结构](#%E4%BA%8C%E5%A3%B0%E6%98%8Ewar%E6%89%93%E5%8C%85%E6%96%B9%E5%BC%8F%E5%B9%B6%E5%88%9B%E5%BB%BAweb%E9%A1%B9%E7%9B%AE%E7%9B%AE%E5%BD%95%E7%BB%93%E6%9E%84)
      * [2\.1 创建web项目结构](#21-%E5%88%9B%E5%BB%BAweb%E9%A1%B9%E7%9B%AE%E7%BB%93%E6%9E%84)
      * [2\.2 所需依赖](#22-%E6%89%80%E9%9C%80%E4%BE%9D%E8%B5%96)
    * [三、引入tomact服务器并设置](#%E4%B8%89%E5%BC%95%E5%85%A5tomact%E6%9C%8D%E5%8A%A1%E5%99%A8%E5%B9%B6%E8%AE%BE%E7%BD%AE)
    * [四、spring\+MyBatis（Dao层/Mapper层）](#%E5%9B%9Bspringmybatisdao%E5%B1%82mapper%E5%B1%82)
      * [4\.1 jdbc\.properties](#41-jdbcproperties)
      * [4\.2 spring\-mybatis\.xml（Dao/Mapper层相关配置）](#42-spring-mybatisxmldaomapper%E5%B1%82%E7%9B%B8%E5%85%B3%E9%85%8D%E7%BD%AE)
      * [4\.3 mybatis\-congfig\.xml（分页和缓存）](#43-mybatis-congfigxml%E5%88%86%E9%A1%B5%E5%92%8C%E7%BC%93%E5%AD%98)
      * [4\.4 Mapper\.xml](#44-mapperxml)
      * [4\.5 所需依赖](#45-%E6%89%80%E9%9C%80%E4%BE%9D%E8%B5%96)
    * [五、spring整合（Service层）](#%E4%BA%94spring%E6%95%B4%E5%90%88service%E5%B1%82)
      * [5\.1 spring\-context\.xml（Service层）](#51-spring-contextxmlservice%E5%B1%82)
      * [5\.2 logback\.xml（Logback\+SLF4j日志）](#52-logbackxmllogbackslf4j%E6%97%A5%E5%BF%97)
      * [5\.3 spring\-quartz\.xml（Quartz定时任务调度器）](#53-spring-quartzxmlquartz%E5%AE%9A%E6%97%B6%E4%BB%BB%E5%8A%A1%E8%B0%83%E5%BA%A6%E5%99%A8)
      * [5\.4 spring\-aop\.xml（配置AOP）](#54-spring-aopxml%E9%85%8D%E7%BD%AEaop)
      * [5\.5 所需依赖](#55-%E6%89%80%E9%9C%80%E4%BE%9D%E8%B5%96)
    * [六、springMVC整合](#%E5%85%ADspringmvc%E6%95%B4%E5%90%88)
      * [6\.1 web\.xml配置（前端控制器）](#61-webxml%E9%85%8D%E7%BD%AE%E5%89%8D%E7%AB%AF%E6%8E%A7%E5%88%B6%E5%99%A8)
      * [6\.2 spring\-mvc\.xml（SpringMVC组件配置）](#62-spring-mvcxmlspringmvc%E7%BB%84%E4%BB%B6%E9%85%8D%E7%BD%AE)
      * [6\.3 所需依赖](#63-%E6%89%80%E9%9C%80%E4%BE%9D%E8%B5%96)
    * [七、IDEA创建模板](#%E4%B8%83idea%E5%88%9B%E5%BB%BA%E6%A8%A1%E6%9D%BF)

# SSM整合

> **思维导图地址：** https://www.processon.com/view/5f126bd107912906d9ab3766

![SSM](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200724185557.png)

------

### 一、创建一个Maven项目

|                      File -> NewProject                      |
| :----------------------------------------------------------: |
| ![image-20200711100406109](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200711100407.png) |
|                      **创建Maven项目**                       |
| ![image-20200711100511187](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200711100513.png) |

### 二、声明war打包方式并创建web项目目录结构

#### 2.1 创建web项目结构

> 有关于Maven不了解的小伙伴不要灰心，请参考[Maven教程](https://github.com/Ziphtracks/JavaLearningmanual/blob/master/docs/developer-tools/Maven%E5%BA%94%E7%94%A8.md)
>
> 声明war包打包方式，即在pom.xml文件中加入一行标签`<packaging>war</packaging>`，随后创建web项目目录结构！

|                     手动构建web项目结构                      |
| :----------------------------------------------------------: |
|              **基于main目录下创建webapp文件夹**              |
| ![image-20200617124249878](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200617124254.png) |
| ![image-20200617124319926](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200617124321.png) |
|             **基于webapp目录创建WEB-INF文件夹**              |
| ![image-20200617124624648](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200617124626.png) |
|              **基于WEB-INF目录创建web.xml文件**              |
| ![image-20200617125038803](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200617125041.png) |
| ![image-20200617125055216](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200617125056.png) |
|                     **xml文件内容展示**                      |
| ![image-20200617125729115](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200617125730.png) |
|             **基于webapp目录创建index.jsp文件**              |
| ![image-20200617125613861](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200617125615.png) |
|            **目录展示** （完整的web项目目录结构）            |
| ![image-20200617125808227](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200617125810.png) |

#### 2.2 所需依赖

```java
<!-- servlet -->
<dependency>
    <groupId>javax.servlet</groupId>
    <artifactId>servlet-api</artifactId>
    <version>2.5</version>
</dependency>

<!-- jsp -->
<dependency>
    <groupId>javax.servlet</groupId>
    <artifactId>jsp-api</artifactId>
    <version>2.0</version>
</dependency>

<!-- jstl -->
<dependency>
    <groupId>javax.servlet</groupId>
    <artifactId>jstl</artifactId>
    <version>1.2</version>
</dependency>
```

### 三、引入tomact服务器并设置

> 关于Tomact服务的引入，需要我们手动添加tomact服务
>
> 添加tomact服务后，如果对tomact服务器在IDEA中的开发流程不熟悉的小伙伴，不要灰心。请参考[tomact服务器基础和开发步骤](https://github.com/Ziphtracks/JavaLearningmanual/blob/master/docs/Server/tomact%E6%9C%8D%E5%8A%A1%E5%99%A8%E5%9F%BA%E7%A1%80%E5%92%8C%E5%BC%80%E5%8F%91%E6%AD%A5%E9%AA%A4.md)即可，此文章中详细讲到了关于tomact的各种知识点！

|                        添加tomact服务                        |
| :----------------------------------------------------------: |
| ![image-20200617131801103](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200617131804.png) |

### 四、spring+MyBatis（Dao层/Mapper层）

#### 4.1 jdbc.properties

> JDBC配置文件

```java
#jdbc.properties
jdbc.driver=com.mysql.jdbc.Driver
jdbc.url=jdbc:mysql://localhost:3306/temp?useUnicode=true&characterEncoding=utf8
jdbc.username=root
jdbc.password=123456
```

#### 4.2 spring-mybatis.xml（Dao/Mapper层相关配置）

> **功能组件：** JDBC、Durid连接池、SQLSessionFactory（等价于Connection，可生产连接，内需添加注册Mapper、别名和关联mybaits配置文件）、Dao/Mapper层注解扫描器

```java
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:context="http://www.springframework.org/schema/context"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="http://www.springframework.org/schema/beans
                           http://www.springframework.org/schema/beans/spring-beans.xsd
                           http://www.springframework.org/schema/context
                           http://www.springframework.org/schema/context/spring-context.xsd">

    <!--jdbc-->
    <context:property-placeholder location="classpath:jdbc.properties"/>

    <!--连接池-->
    <bean id="dataSource" class="com.alibaba.druid.pool.DruidDataSource" init-method="init" destroy-method="close">
        <property name="driverClassName" value="${jdbc.driver}"/>
        <property name="password" value="${jdbc.password}"/>
        <property name="url" value="${jdbc.url}"/>
        <property name="username" value="${jdbc.username}"/>

        <!-- 配置初始化大小、最小、最大 -->
        <property name="initialSize" value="1"/>
        <property name="minIdle" value="1"/>
        <property name="maxActive" value="3"/>

        <!-- 配置获取连接等待超时的时间 -->
        <property name="maxWait" value="60000"/>

        <!-- 配置间隔多久才进行一次检测，检测需要关闭的空闲连接，单位是毫秒 -->
        <property name="timeBetweenEvictionRunsMillis" value="60000"/>

        <!-- 配置一个连接在池中最小生存的时间，单位是毫秒 -->
        <property name="minEvictableIdleTimeMillis" value="300000"/>
    </bean>

    <!--SqlSessionFactory(mybatis核心配置)-->
    <bean id="sqlSessionFactory" class="org.mybatis.spring.SqlSessionFactoryBean">
        <!-- 连接池 -->
        <property name="dataSource" ref="dataSource"/>

        <!-- 注册mapper -->
        <property name="mapperLocations" value="classpath:com/ziphtracks/mapper/*.xml"/>

        <!-- 别名 -->
        <property name="typeAliasesPackage" value="com.ziphtracks.bean"/>

        <!-- 关联mybatis的配置文件 -->
        <property name="configLocation" value="classpath:mybatis-config.xml"></property>
    </bean>

    <!--Dao/Mapper扫描器-->
    <bean class="org.mybatis.spring.mapper.MapperScannerConfigurer">
        <property name="basePackage" value="com.ziphtracks.mapper"/>
        <!-- 如果当前spring工厂中，只有一个SqlSesionFactory， 则此配置可省略 -->
        <!-- <property name="sqlSessionFactoryBeanName" value="sqlSessionFactory"/>-->
    </bean>
</beans>
```

#### 4.3 mybatis-congfig.xml（分页和缓存）

> **功能组件：** 分页查询、二级缓存

```java
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE configuration PUBLIC "-//mybatis.org//DTD Config 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-config.dtd">

<!--MyBatis配置-->
<configuration>
    <!-- mybaits-config.xml中开启全局缓存（默认开启） -->
    <settings>
        <setting name="cacheEnabled" value="true"/>
    </settings>
    <!-- 分页插件 -->
    <plugins>
        <!-- com.github.pagehelper为PageHelper类所在包名 -->
        <plugin interceptor="com.github.pagehelper.PageInterceptor"></plugin>
    </plugins>
</configuration>
```

#### 4.4 Mapper.xml

> 书写SQL语句的Mapper.xml

```java
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
	"http://mybatis.org/dtd/mybatis-3-mapper.dtd">

<!--namespace：所需实现的接口全限定名-->
<mapper namespace="">
	<!-- 书写标签和sql语句 -->
</mapper>
```

#### 4.5 所需依赖

> **所需依赖：** Spring核心、Spring提供的JDBC、Spring与MyBatis继承、MyBatis核心、MySQL驱动、连接池Durid、分页插件、Lombok类库、Spring提供的Junit集成、Junit4测试

```java
<!-- Spring核心 -->
<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-context</artifactId>
    <version>5.1.6.RELEASE</version>
</dependency>
    
<!-- SpringJDBC -->
<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-jdbc</artifactId>
    <version>5.1.6.RELEASE</version>
</dependency>
    
<!-- spring+mybatis集成依赖 -->
<dependency>
    <groupId>org.mybatis</groupId>
    <artifactId>mybatis-spring</artifactId>
    <version>1.3.1</version>
</dependency>
    
<!-- MyBatis核心依赖 -->
<dependency>
    <groupId>org.mybatis</groupId>
    <artifactId>mybatis</artifactId>
    <version>3.4.6</version>
</dependency>
    
<!-- MySql驱动依赖 -->
<dependency>
    <groupId>mysql</groupId>
    <artifactId>mysql-connector-java</artifactId>
    <version>5.1.47</version>
</dependency>
    
<!-- 连接池Druid -->
<dependency>
    <groupId>com.alibaba</groupId>
    <artifactId>druid</artifactId>
    <version>1.1.16</version>
</dependency>

<!-- 分页插件 -->
<dependency>
    <groupId>com.github.pagehelper</groupId>
    <artifactId>pagehelper</artifactId>
    <version>5.1.11</version>
</dependency>
    
<!-- lombok -->
<dependency>
    <groupId>org.projectlombok</groupId>
    <artifactId>lombok</artifactId>
    <version>1.18.12</version>
</dependency>
    
<!-- SpringJunit -->
<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-test</artifactId>
    <version>5.1.6.RELEASE</version>
</dependency>
    
<!-- Junit -->
<dependency>
    <groupId>junit</groupId>
    <artifactId>junit</artifactId>
    <version>4.12</version>
</dependency>
```

### 五、spring整合（Service层）

#### 5.1 spring-context.xml（Service层）

> **Servie层整合组件：** 注解扫描器(扫描Service层注解)、事务管理器、事务驱动器、事务增强（注解和事务增强可选）、开启AOP注解

```java
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:context="http://www.springframework.org/schema/context"
       xmlns:aop="http://www.springframework.org/schema/aop"
       xmlns:tx="http://www.springframework.org/schema/tx"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="http://www.springframework.org/schema/beans
                           http://www.springframework.org/schema/beans/spring-beans.xsd
                           http://www.springframework.org/schema/context
                           http://www.springframework.org/schema/context/spring-context.xsd
                           http://www.springframework.org/schema/aop
                           http://www.springframework.org/schema/aop/spring-aop.xsd
                           http://www.springframework.org/schema/tx
                           http://www.springframework.org/schema/tx/spring-tx.xsd">

	<!-- 注解扫描器,配置扫描位置(扫描Service层注解) -->
    <context:component-scan base-package="com.ziphtracks" use-default-filters="true">
        <!-- 忽略有 @Controller注解的类 -->
        <context:exclude-filter type="annotation" expression="org.springframework.stereotype.Controller"/>
    </context:component-scan>

    <!--事务管理器-->
    <bean id="txManager" class="org.springframework.jdbc.datasource.DataSourceTransactionManager">
        <property name="dataSource" ref="dataSource"/>
    </bean>

    <!-- 事务驱动器,告知@Transactional注解,谁是事务管理器 -->
    <tx:annotation-driven transaction-manager="txManager"/>
        
	<!-- 事务增强(不适用注解事务的时候自行增强事务) -->
    <!-- 为需要事务的方法,设置事务属性,这里没有列举事务属性 -->
    <!--
    <tx:advice id="txAdvice" transaction-manager="txManager">
        <tx:attributes>
            <tx:method name="selectUserById" propagation="SUPPORTS"/>
            <tx:method name="insertUser" read-only="false" isolation="DEFAULT" propagation="REQUIRED" timeout="5" rollback-for="Exception"/>
            <tx:method name="updateUser" read-only="false" isolation="DEFAULT" propagation="REQUIRED" timeout="5"/>
        </tx:attributes>
    </tx:advice>
    -->
        
    <!--开启AOP注解-->
    <aop:aspectj-autoproxy/>
</beans>
```

#### 5.2 logback.xml（Logback+SLF4j日志）

> 实现日志管理功能

| 占位符                       | 描述                                                         |
| ---------------------------- | ------------------------------------------------------------ |
| %d{yyyy-MM-dd  HH:mm:ss.SSS} | 日期                                                         |
| %5p                          | 日志级别，5位字符长度显示，如果内容占不满5位则内容右对齐并在左侧补空格 |
| %-5p                         | 5位字符长度显示日志级别，如果内容占不满5位则内容左对齐并在右侧补空格                                 -代表左对齐 |
| %logger                      | 日志所在包和类                                               |
| %M                           | 日志所在方法名                                               |
| %L                           | 日志所在代码行                                               |
| %m                           | 日志正文                                                     |
| %n                           | 换行                                                         |

```java
<?xml version="1.0" encoding="UTF-8"?>
<!-- scan:当此属性设置为true时，配置文件如果发生改变，将会被重新加载，默认值为true -->
<!-- scanPeriod:设置监测配置文件是否有修改的时间间隔，如果没有给出时间单位，默认单位是毫秒。当scan为true时，此属性生效。
	 默认的时间间隔为1分钟。 -->
<!-- debug:当此属性设置为true时，将打印出logback内部日志信息，实时查看logback运行状态。默认值为false。 -->
<configuration  scan="true" scanPeriod="60 seconds" debug="true">

    <!-- 定义变量，可通过 ${log.path}和${CONSOLE_LOG_PATTERN} 得到变量值 -->
    <property name="log.path" value="D:/log" />
    <property name="CONSOLE_LOG_PATTERN"
              value="%d{yyyy-MM-dd HH:mm:ss.SSS} |-[%-5p] in %logger.%M[line-%L] -%m%n"/>

    <!-- 输出到控制台 -->
    <appender name="CONSOLE" class="ch.qos.logback.core.ConsoleAppender">
        <!-- Threshold=即最低日志级别，此appender输出大于等于对应级别的日志
             (当然还要满足root中定义的最低级别)
        -->
        <filter class="ch.qos.logback.classic.filter.ThresholdFilter">
            <level>debug</level>
        </filter>
        <encoder>
            <!-- 日志格式(引用变量) -->
            <Pattern>${CONSOLE_LOG_PATTERN}</Pattern>
            <!-- 设置字符集 -->
            <charset>UTF-8</charset>
        </encoder>
    </appender>
    <!-- 追加到文件中 -->
    <appender name="file" class="ch.qos.logback.core.FileAppender">
        <file>${log.path}/hello2.log</file>
        <encoder>
            <pattern>${CONSOLE_LOG_PATTERN}</pattern>
        </encoder>
    </appender>
    <!-- 滚动追加到文件中 -->
    <appender name="file2" class="ch.qos.logback.core.rolling.RollingFileAppender">
        <!-- 正在记录的日志文件的路径及文件名 -->
        <file>${log.path}/hello.log</file>
        <!--日志文件输出格式-->
        <encoder>
            <pattern>${CONSOLE_LOG_PATTERN}</pattern>
            <charset>UTF-8</charset> <!-- 设置字符集 -->
        </encoder>
        <!-- 日志记录器的滚动策略，按日期，按大小记录
             文件超过最大尺寸后，会新建文件，然后新的日志文件中继续写入
             如果日期变更，也会新建文件，然后在新的日志文件中写入当天日志
        -->
        <rollingPolicy class="ch.qos.logback.core.rolling.TimeBasedRollingPolicy">
            <!-- 新建文件后，原日志改名为如下  %i=文件序号，从0开始 -->
            <fileNamePattern>${log.path}/hello-%d{yyyy-MM-dd}.%i.log</fileNamePattern>
            <!-- 每个日志文件的最大体量 -->
            <timeBasedFileNamingAndTriggeringPolicy
                    class="ch.qos.logback.core.rolling.SizeAndTimeBasedFNATP">
                <maxFileSize>8kb</maxFileSize>
            </timeBasedFileNamingAndTriggeringPolicy>
            <!-- 日志文件保留天数，1=则只保留昨天的归档日志文件 ,不设置则保留所有日志-->
            <maxHistory>1</maxHistory>
        </rollingPolicy>
    </appender>

    <root level="trace">
        <appender-ref ref="CONSOLE"/>
        <appender-ref ref="file"/>
        <appender-ref ref="file2"/>
    </root>
</configuration>
```

#### 5.3 spring-quartz.xml（Quartz定时任务调度器）

> 实现定时任务调度管理功能

```java
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd">

    <!--
        Spring整合Quartz进行配置遵循下面的步骤:
        1:定义工作任务的Job
        2:定义触发器Trigger,并将触发器与工作任务绑定
        3:定义调度器,并将Trigger注册到Scheduler
     -->

    <!-- 1:定义任务的bean,这里使用JobDetailFactoryBean,也可以使用MethodInvokingJobDetailFactoryBean,配置类似-->
    <bean name="myJob" class="org.springframework.scheduling.quartz.JobDetailFactoryBean">
        <!-- 指定job的名称 -->
        <property name="name" value="job2004"/>
        <!-- 指定job的分组 -->
        <property name="group" value="job_group2004"/>
        <!-- 指定具体的job类 -->
        <property name="jobClass" value="com.qf.job.MyJob2004"/>
    </bean>

    <bean name="myJob2" class="org.springframework.scheduling.quartz.JobDetailFactoryBean">
        <!-- 指定job的名称 -->
        <property name="name" value="job2005"/>
        <!-- 指定job的分组 -->
        <property name="group" value="job_group2004"/>
        <!-- 指定具体的job类 -->
        <property name="jobClass" value="com.qf.job.MyJob2005"/>
    </bean>

    <!-- 2:定义触发器的bean,定义一个Cron的Trigger,一个触发器只能和一个任务进行绑定 -->
    <bean id="cronTrigger2004" class="org.springframework.scheduling.quartz.CronTriggerFactoryBean">
        <!-- 指定Trigger的名称 -->
        <property name="name" value="trigger2004"/>
        <!-- 指定Trigger的名称 -->
        <property name="group" value="trigger_group2004"/>
        <!-- 指定Tirgger绑定的JobDetail -->
        <property name="jobDetail" ref="myJob"/>
        <!-- 指定Cron 的表达式 ,当前是每隔2s运行一次 -->
        <property name="cronExpression" value="* * * * * ?" />
    </bean>
    <bean id="cronTrigger2005" class="org.springframework.scheduling.quartz.CronTriggerFactoryBean">
        <!-- 指定Trigger的名称 -->
        <property name="name" value="trigger2005"/>
        <!-- 指定Trigger的名称 -->
        <property name="group" value="trigger_group2005"/>
        <!-- 指定Tirgger绑定的JobDetail -->
        <property name="jobDetail" ref="myJob2"/>
        <!-- 指定Cron 的表达式 ,当前是每隔2s运行一次 -->
        <property name="cronExpression" value="* * * * * ?" />
    </bean>

    <!-- 3.定义调度器,并将Trigger注册到调度器中 -->
    <bean id="scheduler" class="org.springframework.scheduling.quartz.SchedulerFactoryBean">
        <property name="triggers">
            <list>
                <ref bean="cronTrigger2004"/>
                <ref bean="cronTrigger2005"/>
            </list>
        </property>
        <!-- 添加 quartz 配置,如下两种方式均可 -->
        <!--<property name="configLocation" value="classpath:quartz.properties"></property>-->
        <property name="quartzProperties">
            <!--<props>
                <prop key="org.quartz.scheduler.instanceName">MyScheduler</prop>
            </props>-->
            <value>
                # 指定调度器名称,实际类型为:QuartzScheduler
                org.quartz.scheduler.instanceName = MyScheduler2004
                # 指定连接池
                org.quartz.threadPool.class = org.quartz.simpl.SimpleThreadPool
                # 连接池线程数量
                org.quartz.threadPool.threadCount = 11
                # 优先级
                org.quartz.threadPool.threadPriority = 5
                # 不持久化job
                org.quartz.jobStore.class = org.quartz.smpl.RAMJobStore
            </value>
        </property>
    </bean>
</beans>
```

#### 5.4 spring-aop.xml（配置AOP）

> SpringAOP面向切面编程（动态代理）

```java
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:context="http://www.springframework.org/schema/context"
       xmlns:aop="http://www.springframework.org/schema/aop"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd
       http://www.springframework.org/schema/context http://www.springframework.org/schema/context/spring-context.xsd
       http://www.springframework.org/schema/aop http://www.springframework.org/schema/aop/spring-aop.xsd">

    <!--注入AOP增强目标-->
    <bean id="userService" class="com.mylifes1110.service.impl.UserServiceImpl"/>

    <!--注入代理对象-->
    <bean id="userServiceProxy" class="com.mylifes1110.advice.MyAdvice"/>
    <bean id="userServiceProxy1" class="com.mylifes1110.advice.AfterReturningAdvices"/>
    <bean id="userServiceProxy2" class="com.mylifes1110.advice.MethodInterceptors"/>

    <!--定义切入点并形成切面-->
    <aop:config>
        <!--切入点-->
        <aop:pointcut id="increaseUserService" expression="execution(* selectUserById())"/>
        <!--组装切入点和增强目标并形成切面-->
        <aop:advisor advice-ref="userServiceProxy2" pointcut-ref="increaseUserService"/>
    </aop:config>
</beans>
```

#### 5.5 所需依赖

> **所需依赖：** Springtx事务处理、logback日志管理依赖（传递依赖导入slf4j和logback-core）、Quartz任务调度依赖、Spring与Quartz任务调度

```java
<!-- 事务处理 -->
<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-tx</artifactId>
    <version>5.1.6.RELEASE</version>
</dependency>

<!-- Logback依赖,还会传递依赖slf4j和logback-core -->
<dependency>
    <groupId>ch.qos.logback</groupId>
    <artifactId>logback-classic</artifactId>
    <version>1.2.3</version>
</dependency>
    
<!-- Quartz任务调度 -->
<dependency>
    <groupId>org.quartz-scheduler</groupId>
    <artifactId>quartz</artifactId>
    <version>2.2.3</version>
</dependency>

<!-- Spring与Quartz任务调度 -->
<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-context-support</artifactId>
    <version>5.1.6.RELEASE</version>
</dependency>
```

### 六、springMVC整合

#### 6.1 web.xml配置（前端控制器）

> **前端控制器组件：** 加载SpringMVC工厂、解决同名Servlet与html冲突问题、加载Spring工厂相关配置、二维码配置
>
> **目的：** 确保SpringMVC工厂和Spring工厂同时加载，否则运行失败

```java
<?xml version="1.0" encoding="UTF-8"?>
<web-app xmlns="http://xmlns.jcp.org/xml/ns/javaee"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/javaee http://xmlns.jcp.org/xml/ns/javaee/web-app_4_0.xsd"
         version="4.0">
    
    <!--前端控制器,加载SpringMVC工厂-->
    <servlet>
        <servlet-name>mvc</servlet-name>
        <servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>
        <init-param>
            <param-name>contextConfigLocation</param-name>
            <param-value>classpath:spring-mvc.xml</param-value>
        </init-param>
    </servlet>
    <servlet-mapping>
        <servlet-name>mvc</servlet-name>
        <url-pattern>/</url-pattern>
    </servlet-mapping>
                
	<!--解决乱码问题-->
    <filter>
        <filter-name>enc</filter-name>
        <filter-class>org.springframework.web.filter.CharacterEncodingFilter</filter-class>
        <init-param>
            <param-name>encoding</param-name>
            <param-value>utf-8</param-value>
        </init-param>
    </filter>
    <filter-mapping>
        <filter-name>enc</filter-name>
        <url-pattern>/*</url-pattern>
    </filter-mapping>
                
    <!--解决同名Servlet与html冲突问题-->
    <servlet-mapping>
        <servlet-name>default</servlet-name>
        <url-pattern>*.html</url-pattern>
    </servlet-mapping>
                
    <!--加载Spring工厂等相关配置-->
    <listener>
        <listener-class>org.springframework.web.context.ContextLoaderListener</listener-class>
    </listener>
    <context-param>
        <param-name>contextConfigLocation</param-name>
        <param-value>classpath:spring-*.xml</param-value>
    </context-param>

    <!--二维码-->
    <servlet>
        <servlet-name>cap</servlet-name>
        <servlet-class>com.google.code.kaptcha.servlet.KaptchaServlet</servlet-class>
        <init-param>
            <param-name>kaptcha.border</param-name>
            <param-value>no</param-value>
        </init-param>
        <init-param>
            <param-name>kaptcha.textproducer.char.length</param-name>
            <param-value>4</param-value>
        </init-param>
        <init-param>
            <param-name>kaptcha.textproducer.char.string</param-name>
            <param-value>abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789</param-value>
        </init-param>
        <init-param>
            <param-name>kaptcha.background.clear.to</param-name>
            <param-value>211,229,237</param-value>
        </init-param>
        <init-param>
            <!-- session.setAttribute("captcha","验证码") -->
            <param-name>kaptcha.session.key</param-name>
            <param-value>captcha</param-value>
        </init-param>
    </servlet>
    <servlet-mapping>
        <servlet-name>cap</servlet-name>
        <url-pattern>/captcha</url-pattern>
    </servlet-mapping>
</web-app>
```

#### 6.2 spring-mvc.xml（SpringMVC组件配置）

> **SpringMVC组件：** 注解扫描器（Controller层）、识别注解驱动、FastJson转换器、视图解析器、静态资源加载器、异常解析器、拦截器、上传解析器

```java
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:context="http://www.springframework.org/schema/context"
       xmlns:mvc="http://www.springframework.org/schema/mvc"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="http://www.springframework.org/schema/beans
							http://www.springframework.org/schema/beans/spring-beans.xsd
							http://www.springframework.org/schema/context
							http://www.springframework.org/schema/context/spring-context.xsd
							http://www.springframework.org/schema/mvc
							http://www.springframework.org/schema/mvc/spring-mvc.xsd">

    <!-- 注解扫描器(主扫描Controller层) -->
    <!-- use-default-filters="false" 谁也不生产 -->
    <context:component-scan base-package="com.ziphtracks" use-default-filters="false">
        <!-- 扫描有@Controller注解的类 -->
        <context:include-filter type="annotation" expression="org.springframework.stereotype.Controller"/>
    </context:component-scan>

    <!-- 识别注解驱动 -->
    <mvc:annotation-driven>
        <!-- 安装FastJson,转换器 -->
    	<mvc:message-converters>
        	<bean class="com.alibaba.fastjson.support.spring.FastJsonHttpMessageConverter">
            	<!-- 声明转换类型:json -->
            	<property name="supportedMediaTypes">
                	<list>
                    	<value>application/json</value>
                	</list>
            	</property>
        	</bean>
    	</mvc:message-converters>
    </mvc:annotation-driven>

    <!-- 视图解析器
         1. 捕获后端控制的方法返回值  "hello"
         2. 拼接前后缀  /hello.jsp
    -->
    <bean class="org.springframework.web.servlet.view.InternalResourceViewResolver">
        <property name="prefix" value="/"/>
        <property name="suffix" value=".jsp"/>
    </bean>

    <!-- 处理加载静态资源 -->
    <mvc:default-servlet-handler/>

    <!-- 异常解析器 -->
    <bean class="com.ziphtracks.exception.resolver.MyExResolver"></bean>

    <!-- 拦截器 -->
    <mvc:interceptors>
        <mvc:interceptor>
            <mvc:mapping path="/inter/test1"/>
            <mvc:mapping path="/inter/test2"/>
            <mvc:mapping path="/inter/test*"/> <!-- test开头 -->
            <mvc:mapping path="/inter/**"/> <!-- /** 任意多级任意路径 -->
            <mvc:exclude-mapping path="/inter/a/**"/>   <!--不拦截此路径-->
            <bean class="com.ziphtracks.interceptor.MyInter1"></bean>   <!--拦截器类-->
        </mvc:interceptor>
    </mvc:interceptors>

    <!--上传解析器(id必须是：“multipartResolver”)-->
    <bean id="multipartResolver"
          class="org.springframework.web.multipart.commons.CommonsMultipartResolver">
        <!-- 最大可上传的文件大小  单位：byte  超出后会抛出MaxUploadSizeExceededException异常,可以异常解析器捕获 -->
        <property name="maxUploadSize" value="1048576"></property>
    </bean>
</beans>
```

#### 6.3 所需依赖

> **所需依赖：** Jackson（Json解析）、SpringMVC核心（webmvc）、IO、文件上传（因文件上传依赖与其他依赖重名所以需要排除其他依赖）、FastJson（Json解析）、二维码所需依赖（排除其他影响的二维码依赖）

```java
<!-- Jackson -->
<dependency>
    <groupId>com.fasterxml.jackson.core</groupId>
    <artifactId>jackson-databind</artifactId>
    <version>2.9.8</version>
</dependency>

<!-- SpringMVC -->
<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-webmvc</artifactId>
    <version>5.1.6.RELEASE</version>
</dependency>

<!-- IO -->
<dependency>
    <groupId>commons-io</groupId>
    <artifactId>commons-io</artifactId>
    <version>2.4</version>
</dependency>
    
<!-- 文件上传 -->
<dependency>
    <groupId>commons-fileupload</groupId>
    <artifactId>commons-fileupload</artifactId>
    <version>1.3.3</version>
    <exclusions>
        <exclusion>
            <groupId>javax.servlet</groupId>
            <artifactId>servlet-api</artifactId>
        </exclusion>
    </exclusions>
</dependency>

<!-- FastJson -->
<dependency>
    <groupId>com.alibaba</groupId>
    <artifactId>fastjson</artifactId>
    <version>1.2.54</version>
</dependency>
    
<!-- 二维码 -->
<dependency>
    <groupId>com.github.penggle</groupId>
    <artifactId>kaptcha</artifactId>
    <version>2.3.2</version>
    <exclusions>
        <exclusion>
            <groupId>javax.servlet</groupId>
            <artifactId>javax.servlet-api</artifactId>
        </exclusion>
    </exclusions>
</dependency>
```



### 七、IDEA创建模板

|                           新建模板                           |
| :----------------------------------------------------------: |
| ![image-20200724184630438](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200724184632.png) |
|             **创建模板并添加代码/名称/文件类型**             |
| ![image-20200724184952111](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200724184953.png) |
|                         **使用模板**                         |
| ![image-20200724185317354](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200724185331.png) |

**依赖模板如下：** 

```java
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>

    <groupId>org.example</groupId>
    <artifactId>platfrom</artifactId>
    <version>1.0-SNAPSHOT</version>

    <!--web打包方式-->
    <packaging>war</packaging>

    <dependencies>
        <!-- servlet -->
        <dependency>
            <groupId>javax.servlet</groupId>
            <artifactId>servlet-api</artifactId>
            <version>2.5</version>
        </dependency>

        <!-- jsp -->
        <dependency>
            <groupId>javax.servlet</groupId>
            <artifactId>jsp-api</artifactId>
            <version>2.0</version>
        </dependency>

        <!-- jstl -->
        <dependency>
            <groupId>javax.servlet</groupId>
            <artifactId>jstl</artifactId>
            <version>1.2</version>
        </dependency>

        <!-- Spring核心 -->
        <dependency>
            <groupId>org.springframework</groupId>
            <artifactId>spring-context</artifactId>
            <version>5.1.6.RELEASE</version>
        </dependency>

        <!-- SpringJDBC -->
        <dependency>
            <groupId>org.springframework</groupId>
            <artifactId>spring-jdbc</artifactId>
            <version>5.1.6.RELEASE</version>
        </dependency>

        <!-- spring+mybatis集成依赖 -->
        <dependency>
            <groupId>org.mybatis</groupId>
            <artifactId>mybatis-spring</artifactId>
            <version>1.3.1</version>
        </dependency>

        <!-- MyBatis核心依赖 -->
        <dependency>
            <groupId>org.mybatis</groupId>
            <artifactId>mybatis</artifactId>
            <version>3.4.6</version>
        </dependency>

        <!-- MySql驱动依赖 -->
        <dependency>
            <groupId>mysql</groupId>
            <artifactId>mysql-connector-java</artifactId>
            <version>5.1.47</version>
        </dependency>

        <!-- 连接池Druid -->
        <dependency>
            <groupId>com.alibaba</groupId>
            <artifactId>druid</artifactId>
            <version>1.1.16</version>
        </dependency>

        <!-- 分页插件 -->
        <dependency>
            <groupId>com.github.pagehelper</groupId>
            <artifactId>pagehelper</artifactId>
            <version>5.1.11</version>
        </dependency>

        <!-- lombok -->
        <dependency>
            <groupId>org.projectlombok</groupId>
            <artifactId>lombok</artifactId>
            <version>1.18.12</version>
        </dependency>

        <!-- SpringJunit -->
        <dependency>
            <groupId>org.springframework</groupId>
            <artifactId>spring-test</artifactId>
            <version>5.1.6.RELEASE</version>
        </dependency>

        <!-- Junit -->
        <dependency>
            <groupId>junit</groupId>
            <artifactId>junit</artifactId>
            <version>4.12</version>
        </dependency>

        <!-- 事务处理 -->
        <dependency>
            <groupId>org.springframework</groupId>
            <artifactId>spring-tx</artifactId>
            <version>5.1.6.RELEASE</version>
        </dependency>

        <!-- Logback依赖,还会传递依赖slf4j和logback-core -->
        <dependency>
            <groupId>ch.qos.logback</groupId>
            <artifactId>logback-classic</artifactId>
            <version>1.2.3</version>
        </dependency>

        <!-- Quartz任务调度 -->
        <dependency>
            <groupId>org.quartz-scheduler</groupId>
            <artifactId>quartz</artifactId>
            <version>2.2.3</version>
        </dependency>

        <!-- Spring与Quartz任务调度 -->
        <dependency>
            <groupId>org.springframework</groupId>
            <artifactId>spring-context-support</artifactId>
            <version>5.1.6.RELEASE</version>
        </dependency>

        <!-- Jackson -->
        <dependency>
            <groupId>com.fasterxml.jackson.core</groupId>
            <artifactId>jackson-databind</artifactId>
            <version>2.9.8</version>
        </dependency>

        <!-- SpringMVC -->
        <dependency>
            <groupId>org.springframework</groupId>
            <artifactId>spring-webmvc</artifactId>
            <version>5.1.6.RELEASE</version>
        </dependency>

        <!-- IO -->
        <dependency>
            <groupId>commons-io</groupId>
            <artifactId>commons-io</artifactId>
            <version>2.4</version>
        </dependency>

        <!-- 文件上传 -->
        <dependency>
            <groupId>commons-fileupload</groupId>
            <artifactId>commons-fileupload</artifactId>
            <version>1.3.3</version>
            <exclusions>
                <exclusion>
                    <groupId>javax.servlet</groupId>
                    <artifactId>servlet-api</artifactId>
                </exclusion>
            </exclusions>
        </dependency>

        <!-- FastJson -->
        <dependency>
            <groupId>com.alibaba</groupId>
            <artifactId>fastjson</artifactId>
            <version>1.2.54</version>
        </dependency>

        <!-- 二维码 -->
        <dependency>
            <groupId>com.github.penggle</groupId>
            <artifactId>kaptcha</artifactId>
            <version>2.3.2</version>
            <exclusions>
                <exclusion>
                    <groupId>javax.servlet</groupId>
                    <artifactId>javax.servlet-api</artifactId>
                </exclusion>
            </exclusions>
        </dependency>
    </dependencies>
</project>
```

