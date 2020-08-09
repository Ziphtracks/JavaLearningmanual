 * [一、Springboot概述](#一springboot概述)
    * [1.1 Springboot简介](#11-springboot简介)
    * [1.2 Springboot的特点](#12-springboot的特点)
 * [二、快速构建Springboot](#二快速构建springboot)
    * [2.1 Spring官方快速构建](#21-spring官方快速构建)
    * [2.2 aliyun快速构建（解决加载失败）](#22-aliyun快速构建解决加载失败)
    * [2.3 Spring与aliyun差别](#23-spring与aliyun差别)
    * [2.4 导入核心依赖](#24-导入核心依赖)
    * [2.5 编写Controller直接测试](#25-编写controller直接测试)
 * [三、Springboot目录结构说明](#三springboot目录结构说明)
 * [四、Springboot的三种启动方式](#四springboot的三种启动方式)
    * [4.1 运行启动类的main方法](#41-运行启动类的main方法)
    * [4.2 使用Maven启动](#42-使用maven启动)
    * [4.3 使用Springboot打包的jar文件启动](#43-使用springboot打包的jar文件启动)
 * [五、Springboot入门注解](#五springboot入门注解)
    * [5.1 @Configuration和@Bean](#51-configuration和bean)
    * [5.2 @SpringBootApplication](#52-springbootapplication)
    * [5.3 @SpringBootTest](#53-springboottest)
 * [六、Springboot配置文件](#六springboot配置文件)
    * [6.1 配置文件规范](#61-配置文件规范)
    * [6.2 多环境配置](#62-多环境配置)
    * [6.3 引入外部配置文件信息](#63-引入外部配置文件信息)
    * [6.3 重新构建工程](#63-重新构建工程)
    * [6.4 Springboot热部署](#64-springboot热部署)
 * [七、Springboot创建web目录](#七springboot创建web目录)

![image-20200809125922162](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/2/20200809125925.png)·

### 一、Springboot概述

#### 1.1 Springboot简介

> SpringBoot是由Pivotal团队研发的，SpringBoot并不是一门新技术，只是将之前常用的Spring，SpringMVC，data-jpa等常用的框架封装到了一起，帮助你隐藏这些框架的整合细节，实现敏捷开发。简单来说，SpringBoot就是一个启动器。



#### 1.2 Springboot的特点

> - SpringBoot项目不需要模板化的配置。
> - SpringBoot中整合第三方框架时，只需要导入相应的starter依赖包，就自动整合了。
> - SpringBoot默认只有一个.properties的配置文件，不推荐使用xml，后期会采用.java的文件去编写配置信息。
> - SpringBoot工程在部署时，采用的是jar包的方式，内部自动依赖Tomcat容器，并且提供了多环境的配置。
> - 后期要学习的微服务框架SpringCloud需要建立在SpringBoot的基础上。



### 二、快速构建Springboot

#### 2.1 Spring官方快速构建

|                         New Project                          |
| :----------------------------------------------------------: |
| ![image-20200806123015729](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/2/20200809130606.png) |
|            **Spring Initializer Project Setting**            |
| ![image-20200806132012542](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/2/20200809130705.png) |
|                    **选择版本和所需依赖**                    |
| ![image-20200806132155855](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/2/20200809130745.png) |
|                **填写项目名称和本地存储路径**                |
| ![image-20200806132305740](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/2/20200809130815.png) |

#### 2.2 aliyun快速构建（解决加载失败）

> 如果Spring官方的快速构建加载出现问题，可以使用aliyun提供的Spingboot快速构建。

|                   aliyun快速构建Springboot                   |
| :----------------------------------------------------------: |
| ![image-20200806133208551](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/2/20200809131049.png) |
|               **其他步骤与Spring官方构建一致**               |

#### 2.3 Spring与aliyun差别

> 使用Spring官方和aliyun快速构建的Springboot项目是有一些差距的，其实项目结构上没有本质的差距，只是在pom.xml文件中会出现一系列差距！
>
> - aliyun使用并维护着Spring全家桶的2.3版本，其中加入了一些编码字符集处理与之aliyun所维护的依赖等
> - Spring官方使用并维护着Spring全家桶的2.3.2版本，其中维护使用着Spring官方依赖等
>
> **注意：** 两者没有本质差别，我们只需要使用即可！

#### 2.4 导入核心依赖

> 此核心依赖有着Spring的大多数web依赖

```java
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
</dependency>
```

#### 2.5 编写Controller直接测试

> 直接访问路径即可出现页面并响应在浏览器上！

```java
@RestController
public class TestController {
    @GetMapping("/test")
    public String test(){
        return "Hello SpringBoot!";
    }
}
```



### 三、Springboot目录结构说明

|                      Springboot目录结构                      |
| :----------------------------------------------------------: |
| ![image-20200809132750413](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/2/20200809132752.png) |



### 四、Springboot的三种启动方式

#### 4.1 运行启动类的main方法

|                     运行启动类的main方法                     |
| :----------------------------------------------------------: |
| ![image-20200809133203728](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/2/20200809133205.png) |



#### 4.2 使用Maven启动

|             使用Maven启动（mvn spring-boot:run）             |
| :----------------------------------------------------------: |
| ![image-20200809133408621](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/2/20200809133410.png) |



#### 4.3 使用Springboot打包的jar文件启动

> 首先，Springboot打包方式是jar的方法。默认使用maven 的package打包，而随之也会触发springboot内置的`springboot:repackage`，而springboot的内置再次打包会在此jar文件的基础上内置一个tomact，也即是说使用Springboot打包的jar文件是可以执行的！

|                           打包展示                           |
| :----------------------------------------------------------: |
| ![image-20200809133839975](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/2/20200809133841.png) |
|                      **DOS命令行执行**                       |
|              `java -jar jar文件路径/jar包名字`               |



### 五、Springboot入门注解

#### 5.1 @Configuration和@Bean

> - 之前使用SSM去开发时，在xml文件中编写bean标签，但是SpringBoot不推荐使用xml文件。
> - @Configuration注解相当于beans标签
> - @Bean注解相当于bean标签
>  - id=“方法名 | 注解中的name属性（优先级更高）”
>   - class=“方法的返回结果”
>
> 如下，举例子。

```java
@Configuration   // 代表当前类是一个配置类
public class UserConfig {
    @Bean(name = "user1")       // 构建一个实例，放到spring容器中
    public User user(){
        User user = new User();
        user.setId(1);
        user.setName("张三");
        return user;
    }
    /* 与其相同作用
    <beans ....>            @Configuration
        <bean id="user1" class="com.ziphtracks.firstspringboot.bean.User" />
    </beans>
     */
}
```



#### 5.2 @SpringBootApplication

> @SpringBootApplication就是一个组合注解：
>
> -  @SpringBootConfiguration就是@Configuration注解，代表启动类就是一个配置类。
> -  @EnableAutoConfiguration帮你实现自动装配的，SpringBoot工程启动时，运行一个SpringFactoriesLoader的类，加载META-INF/spring.factories配置类（已经开启的），通过SpringFactoriesLoader中的load方法，以for循环的方式，一个一个加载。
>    - 好处：无需编写大量的整合配置信息，只需要按照SpringBoot提供好了约定去整合即可。
>    - 坏处：如果说你导入了一个starter依赖，那么你就需要填写他必要的配置信息。
>    - 手动关闭自动装配指定内容：@SpringBootApplication(exclude = QuartzAutoConfiguration.class)
> -  @ComponentScan就相当于<context:component-scan basePackage=“包名” />，帮助扫描注解的。
>
> **注意：** 你完全可以通过上述所说去翻看以下该注解的源码

|                             源码                             |
| :----------------------------------------------------------: |
| ![image-20200809135539749](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/2/20200809135541.png) |



#### 5.3 @SpringBootTest

> 该注解用于测试启动项中，用于启动测试的注解

|                      测试启动项注解配置                      |
| :----------------------------------------------------------: |
| ![image-20200809141258160](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/2/20200809141301.png) |



### 六、Springboot配置文件

#### 6.1 配置文件规范

> SpringBoot的配置文件支持properties和yml，甚至他还支持json。
>
> 更推荐使用yml文件格式：
>
> 1. yml文件，会根据换行和缩进帮助咱们管理配置文件所在位置
>
>   2. yml文件，相比properties更轻量级一些
>
> yml文件的注意事项：
>
> 1. 严格遵循换行和缩进
>
>   2. 在填写value时，一定要在: 后面跟上空格



#### 6.2 多环境配置

> 在application.yml文件中添加一个配置项：
>
> 可以使用逗号（ , ）来激活多个环境
>
> 如下我创建了两个开发配置，一个用来开发的配置（dev）、另一个用来测试的配置（test），随后使用总的配置来激活这两个配置环境。

|                          多环境配置                          |
| :----------------------------------------------------------: |
| ![image-20200809142928925](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/2/20200809142930.png) |



#### 6.3 引入外部配置文件信息

> 和传统的SSM方式一样，通过@Value的注解去获取properties/yml文件中的内容。
>
> 如果在yml文件中需要编写大量的自定义配置，并且具有统一的前缀时，采用如下方式

```java
// Java程序
@ConfigurationProperties(prefix = "aliyun")
@Component
@Data
public class AliyunProperties {

   private String name;
   private Integer age;
}

// 配置文件
aliyun:
  name: Ziph
  age: 18
```



#### 6.3 重新构建工程

|                            build                             |
| :----------------------------------------------------------: |
| ![image-20200809143338884](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/2/20200809143340.png) |



#### 6.4 Springboot热部署

> 在做SSM项目时，我们会用到IDEA插件JRebel热部署神器来方便开发。因为热部署很受大家爱戴，所以Springboot也提供了热部署功能。如下：

*导入依赖* 

```java
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-devtools</artifactId>
    <optional>true</optional>
</dependency>
```

|                     IDEASetting相关配置                      |
| :----------------------------------------------------------: |
| ![image-20200809171517524](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/2/20200809171519.png) |
|                   **Springboot启动项设置**                   |
| ![image-20200809171648412](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/2/20200809171650.png) |



### 七、Springboot创建web目录

> static文件夹是存储静态资源的，而我们的动态资源还是需要web目录结构存储的，于是我们创建一个web目录结构！

*导入JSP以及JSTL核心依赖* 

```java
<!--JSP核心引擎依赖-->
<dependency>
    <groupId>org.apache.tomcat.embed</groupId>
    <artifactId>tomcat-embed-jasper</artifactId>
</dependency>
<!--JSTL-->
<dependency>
    <groupId>javax.servlet</groupId>
    <artifactId>jstl</artifactId>
</dependency>
```

|              创建webapp以及WEB-INF等web目录结构              |
| :----------------------------------------------------------: |
| ![image-20200809172236167](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/2/20200809172238.png) |
|                       **添加web.xml**                        |
| ![image-20200809172408724](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/2/20200809172600.png) |
| ![image-20200809172554940](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/2/20200809172556.png) |
|                     **展示web目录结构**                      |
| ![image-20200809172758250](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/2/20200809172809.png) |

