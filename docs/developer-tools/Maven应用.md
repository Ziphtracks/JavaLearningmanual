* [Maven应用](#maven%E5%BA%94%E7%94%A8)
    * [一、前言](#%E4%B8%80%E5%89%8D%E8%A8%80)
    * [二、了解Maven](#%E4%BA%8C%E4%BA%86%E8%A7%A3maven)
      * [2\.1 什么是Maven](#21-%E4%BB%80%E4%B9%88%E6%98%AFmaven)
      * [2\.2 Maven的下载安装](#22-maven%E7%9A%84%E4%B8%8B%E8%BD%BD%E5%AE%89%E8%A3%85)
      * [2\.3 Maven目录结构解析](#23-maven%E7%9B%AE%E5%BD%95%E7%BB%93%E6%9E%84%E8%A7%A3%E6%9E%90)
      * [2\.4 配置环境变量](#24-%E9%85%8D%E7%BD%AE%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F)
      * [2\.5 测试](#25-%E6%B5%8B%E8%AF%95)
      * [2\.6 Maven项目模型图](#26-maven%E9%A1%B9%E7%9B%AE%E6%A8%A1%E5%9E%8B%E5%9B%BE)
    * [三、Maven的配置](#%E4%B8%89maven%E7%9A%84%E9%85%8D%E7%BD%AE)
      * [3\.1 配置本地仓库](#31-%E9%85%8D%E7%BD%AE%E6%9C%AC%E5%9C%B0%E4%BB%93%E5%BA%93)
      * [3\.2 配置jdk](#32-%E9%85%8D%E7%BD%AEjdk)
        * [3\.2\.1 全局配置](#321-%E5%85%A8%E5%B1%80%E9%85%8D%E7%BD%AE)
        * [3\.2\.2 单个项目修改](#322-%E5%8D%95%E4%B8%AA%E9%A1%B9%E7%9B%AE%E4%BF%AE%E6%94%B9)
    * [四、仓库](#%E5%9B%9B%E4%BB%93%E5%BA%93)
      * [4\.1 仓库概念](#41-%E4%BB%93%E5%BA%93%E6%A6%82%E5%BF%B5)
      * [4\.2 仓库分类](#42-%E4%BB%93%E5%BA%93%E5%88%86%E7%B1%BB)
      * [4\.3 本地仓库](#43-%E6%9C%AC%E5%9C%B0%E4%BB%93%E5%BA%93)
      * [4\.4 远程仓库](#44-%E8%BF%9C%E7%A8%8B%E4%BB%93%E5%BA%93)
        * [4\.4\.1 中央仓库](#441-%E4%B8%AD%E5%A4%AE%E4%BB%93%E5%BA%93)
        * [4\.4\.2 公共仓库](#442-%E5%85%AC%E5%85%B1%E4%BB%93%E5%BA%93)
        * [4\.4\.3 私服](#443-%E7%A7%81%E6%9C%8D)
          * [4\.4\.3\.1 私服概念](#4431-%E7%A7%81%E6%9C%8D%E6%A6%82%E5%BF%B5)
          * [4\.4\.3\.2 私服架构](#4432-%E7%A7%81%E6%9C%8D%E6%9E%B6%E6%9E%84)
          * [4\.4\.3\.3 Nexus安装（了解即可）](#4433-nexus%E5%AE%89%E8%A3%85%E4%BA%86%E8%A7%A3%E5%8D%B3%E5%8F%AF)
          * [4\.4\.3\.4 Nexus登录](#4434-nexus%E7%99%BB%E5%BD%95)
          * [4\.4\.3\.5 仓库列表](#4435-%E4%BB%93%E5%BA%93%E5%88%97%E8%A1%A8)
          * [4\.4\.3\.6 仓库组](#4436-%E4%BB%93%E5%BA%93%E7%BB%84)
          * [4\.4\.3\.7 手动上传仓库](#4437-%E6%89%8B%E5%8A%A8%E4%B8%8A%E4%BC%A0%E4%BB%93%E5%BA%93)
          * [4\.4\.3\.8 Maven关联私服](#4438-maven%E5%85%B3%E8%81%94%E7%A7%81%E6%9C%8D)
          * [4\.4\.3\.9 Meven项目部署到私服](#4439-meven%E9%A1%B9%E7%9B%AE%E9%83%A8%E7%BD%B2%E5%88%B0%E7%A7%81%E6%9C%8D)
    * [五、IDEA中的Maven操作](#%E4%BA%94idea%E4%B8%AD%E7%9A%84maven%E6%93%8D%E4%BD%9C)
      * [5\.1 创建Maven项目](#51-%E5%88%9B%E5%BB%BAmaven%E9%A1%B9%E7%9B%AE)
        * [5\.1\.1 节点配置解析](#511-%E8%8A%82%E7%82%B9%E9%85%8D%E7%BD%AE%E8%A7%A3%E6%9E%90)
        * [5\.1\.2 语义化版本号](#512-%E8%AF%AD%E4%B9%89%E5%8C%96%E7%89%88%E6%9C%AC%E5%8F%B7)
        * [5\.1\.3 扩展（SNAPSHOT）](#513-%E6%89%A9%E5%B1%95snapshot)
      * [5\.2 IDEA关联Maven](#52-idea%E5%85%B3%E8%81%94maven)
      * [5\.3 IDEA创建测试包下resources文件夹](#53-idea%E5%88%9B%E5%BB%BA%E6%B5%8B%E8%AF%95%E5%8C%85%E4%B8%8Bresources%E6%96%87%E4%BB%B6%E5%A4%B9)
      * [5\.4 Maven项目目录结构解析](#54-maven%E9%A1%B9%E7%9B%AE%E7%9B%AE%E5%BD%95%E7%BB%93%E6%9E%84%E8%A7%A3%E6%9E%90)
      * [5\.5 Maven项目类型](#55-maven%E9%A1%B9%E7%9B%AE%E7%B1%BB%E5%9E%8B)
      * [5\.6 IDEA中导入依赖](#56-idea%E4%B8%AD%E5%AF%BC%E5%85%A5%E4%BE%9D%E8%B5%96)
        * [5\.6\.1 导入依赖须知](#561-%E5%AF%BC%E5%85%A5%E4%BE%9D%E8%B5%96%E9%A1%BB%E7%9F%A5)
        * [5\.6\.2 查找依赖](#562-%E6%9F%A5%E6%89%BE%E4%BE%9D%E8%B5%96)
        * [5\.6\.3 导入依赖](#563-%E5%AF%BC%E5%85%A5%E4%BE%9D%E8%B5%96)
        * [5\.6\.4 同步依赖](#564-%E5%90%8C%E6%AD%A5%E4%BE%9D%E8%B5%96)
        * [5\.6\.5 查看依赖](#565-%E6%9F%A5%E7%9C%8B%E4%BE%9D%E8%B5%96)
      * [5\.7 基于Maven创建Web项目](#57-%E5%9F%BA%E4%BA%8Emaven%E5%88%9B%E5%BB%BAweb%E9%A1%B9%E7%9B%AE)
        * [5\.7\.1 修改web项目打包方式](#571-%E4%BF%AE%E6%94%B9web%E9%A1%B9%E7%9B%AE%E6%89%93%E5%8C%85%E6%96%B9%E5%BC%8F)
        * [5\.7\.2 导入web依赖](#572-%E5%AF%BC%E5%85%A5web%E4%BE%9D%E8%B5%96)
        * [5\.7\.3 创建web项目目录结构](#573-%E5%88%9B%E5%BB%BAweb%E9%A1%B9%E7%9B%AE%E7%9B%AE%E5%BD%95%E7%BB%93%E6%9E%84)
        * [5\.7\.4 tomact的引入](#574-tomact%E7%9A%84%E5%BC%95%E5%85%A5)
      * [5\.8 pom文件的其他标签操作](#58-pom%E6%96%87%E4%BB%B6%E7%9A%84%E5%85%B6%E4%BB%96%E6%A0%87%E7%AD%BE%E6%93%8D%E4%BD%9C)
        * [5\.8\.1 build标签修改默认打包名](#581-build%E6%A0%87%E7%AD%BE%E4%BF%AE%E6%94%B9%E9%BB%98%E8%AE%A4%E6%89%93%E5%8C%85%E5%90%8D)
        * [5\.8\.2 引入插件](#582-%E5%BC%95%E5%85%A5%E6%8F%92%E4%BB%B6)
        * [5\.8\.3 控制打包资源](#583-%E6%8E%A7%E5%88%B6%E6%89%93%E5%8C%85%E8%B5%84%E6%BA%90)
    * [六、依赖的生命周期](#%E5%85%AD%E4%BE%9D%E8%B5%96%E7%9A%84%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F)
      * [6\.1 什么是依赖的生命周期](#61-%E4%BB%80%E4%B9%88%E6%98%AF%E4%BE%9D%E8%B5%96%E7%9A%84%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F)
      * [6\.2 依赖的生命周期分类与详解](#62-%E4%BE%9D%E8%B5%96%E7%9A%84%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E5%88%86%E7%B1%BB%E4%B8%8E%E8%AF%A6%E8%A7%A3)
      * [6\.3 依赖生命周期的使用](#63-%E4%BE%9D%E8%B5%96%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E7%9A%84%E4%BD%BF%E7%94%A8)
    * [七、maven的构建命令](#%E4%B8%83maven%E7%9A%84%E6%9E%84%E5%BB%BA%E5%91%BD%E4%BB%A4)
      * [7\.1 项目的构建过程](#71-%E9%A1%B9%E7%9B%AE%E7%9A%84%E6%9E%84%E5%BB%BA%E8%BF%87%E7%A8%8B)
      * [7\.2 常用构建命令](#72-%E5%B8%B8%E7%94%A8%E6%9E%84%E5%BB%BA%E5%91%BD%E4%BB%A4)
      * [7\.3 maven项目的生命周期](#73-maven%E9%A1%B9%E7%9B%AE%E7%9A%84%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F)
      * [7\.4 maven命令与插件的关系](#74-maven%E5%91%BD%E4%BB%A4%E4%B8%8E%E6%8F%92%E4%BB%B6%E7%9A%84%E5%85%B3%E7%B3%BB)
    * [八、传递依赖和冲突解决](#%E5%85%AB%E4%BC%A0%E9%80%92%E4%BE%9D%E8%B5%96%E5%92%8C%E5%86%B2%E7%AA%81%E8%A7%A3%E5%86%B3)
      * [8\.1 什么是传递依赖](#81-%E4%BB%80%E4%B9%88%E6%98%AF%E4%BC%A0%E9%80%92%E4%BE%9D%E8%B5%96)
      * [8\.2 什么是依赖冲突](#82-%E4%BB%80%E4%B9%88%E6%98%AF%E4%BE%9D%E8%B5%96%E5%86%B2%E7%AA%81)
      * [8\.3 手动解决依赖冲突](#83-%E6%89%8B%E5%8A%A8%E8%A7%A3%E5%86%B3%E4%BE%9D%E8%B5%96%E5%86%B2%E7%AA%81)
      * [8\.4 自动解决依赖冲突](#84-%E8%87%AA%E5%8A%A8%E8%A7%A3%E5%86%B3%E4%BE%9D%E8%B5%96%E5%86%B2%E7%AA%81)
        * [8\.4\.1 自动解决依赖冲突的途径](#841-%E8%87%AA%E5%8A%A8%E8%A7%A3%E5%86%B3%E4%BE%9D%E8%B5%96%E5%86%B2%E7%AA%81%E7%9A%84%E9%80%94%E5%BE%84)
        * [8\.4\.2 短路优先原则](#842-%E7%9F%AD%E8%B7%AF%E4%BC%98%E5%85%88%E5%8E%9F%E5%88%99)
        * [8\.4\.3 先声明优先原则](#843-%E5%85%88%E5%A3%B0%E6%98%8E%E4%BC%98%E5%85%88%E5%8E%9F%E5%88%99)

# Maven应用

------

### 一、前言

> 在我们的项目资源中，你会发现需要导入的jar包越来越多，让jar包的管理越来越沉重。它会表现为以下几个缺点：
>
> - 每个项目都需要手动搜集和导入所需要的jar包
> - 项目中用到的jar包有版本更新，我们需要重新搜集并导入到项目中
> - 相同的jar包导入到不同的项目中，jar包会在本地存储多份
>
> 针对上述问题，我们就需要使用统一的管理工具：Maven



### 二、了解Maven

#### 2.1 什么是Maven

> Maven是一个基于项目对象模型（POM）的概念的纯Java开发的开源的项目管理工具。主要用来管理Java项目，进行依赖管理（jar包依赖管理）和项目构建（项目编译、打包、测试、部署）。此外还能分模块开发，提高开发效率。



#### 2.2 Maven的下载安装

> 关于Maven的下载，我们需要下载它的解压包。
>
> **Maven下载地址：** [https://us.mirrors.quenda.co/apache/maven/maven-3/3.6.3/binaries/](https://us.mirrors.quenda.co/apache/maven/maven-3/3.6.3/binaries/)

![image-20200616171323409](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200616171325.png)

> 下载后将Maven解压到目录中就可以了！
>
> **注意：** 解压的目录与tomact服务器的形式是一样的，不要有中文及特殊符号！

![image-20200616171637526](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200616171639.png)



#### 2.3 Maven目录结构解析

| 目录名称                  | 描述                                                         |
| ------------------------- | ------------------------------------------------------------ |
| bin                       | 存储mvn的各种可执行文件                                      |
| boot                      | 含有plexus-classworlds类加载器框架，Maven 使用该框架加载自己的类库 |
| conf                      | 存放settings.xml等配置文件                                   |
| lib                       | 存储Maven运行时所需要的Java类库                              |
| LICENSE/NOTICE/README.txt | 针对Maven的版本、第三方软件等简要介绍                        |



#### 2.4 配置环境变量

> Maven依赖Java环境的配置环境，所以要确保jdk版本在1.7以上，maven版本在3.3以上。
>
> - 配置环境变量与jdk环境变量配置是一样的，在本机中创建`MAVEN_HOME`环境变量，并将maven的解压路径设置进去，点击确定（路径参考上图解压后的结果图路径）
> - 修改`path`环境变量，添加`%MAVEN_HOME%\bin`后，一路点击确定即可！



#### 2.5 测试

> 下载解压、配置环境变量后，我们打开DOS命令窗口，键入`mvn -v`查看maven版本信息
>
> - 如果看到如下图片maven的版本信息，证明maven安装配置成功！
> - 在Maven的版本信息你就可以得知它依赖于jdk环境！

![image-20200616172931556](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200616172933.png)



#### 2.6 Maven项目模型图

![](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200617162537.png)



### 三、Maven的配置

#### 3.1 配置本地仓库

> 本地仓库简单来说，就是在本地的maven中存储管理所需jar包
>
> 1. 首先，打开maven目录`conf`文件夹中的`settings.xml`配置文件
>
> 2. 其次，找到标号1的那一行配置信息，并复制此配置信息放在其下面
>
> 3. 然后，在磁盘中创建一个目录，作为存储jar文件的本地仓库
>
> 4. 最后，将复制的此配置信息路径替换成自己创建的本地仓库目录路径，参考标号2的操作

![image-20200616174928266](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200616174931.png)



#### 3.2 配置jdk

##### 3.2.1 全局配置

> 由于Maven依赖于jdk环境，所以我们也需要在maven中配置jdk（我使用的jdk是主流的1.8版本）
>
> 1. 打开`settings.xml`配置文件，找到\<profiles>标签，你会发现标签内都是注释的内容，我们需要在标签内，写入自己的jdk的配置信息。配置如下：
> 2. 在maven中添加好jdk的配置信息后，我们需要在\</profiles>结束标签后添加\<activeProfiles>标签内容，让配置好的\<profiles>标签中内容生效
>
> **注意：** profile标签中的id是此配置信息的名称，在后面使用activeProfile标签让其配置生效的时候，需要保证id与activeProfile的名称一致！（贴图供大家参考！）

```java
	<!-- 配置jdk -->
	<profile>
        <id>jdk1.8</id>
        <activation>
            <activeByDefault>true</activeByDefault>    
            <jdk>1.8</jdk>    
        </activation>    
        <properties>    
            <maven.compiler.source>1.8</maven.compiler.source>    
            <maven.compiler.target>1.8</maven.compiler.target>
            <maven.compiler.compilerVersion>1.8</maven.compiler.compilerVersion> 
        </properties>    
    </profile>
```

```java
<!-- 使配置好的profiles标签中内容生效 -->
<activeProfiles>
    <activeProfile>jdk1.8</activeProfile>
</activeProfiles>
```

![image-20200616181057029](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200616181059.png)



##### 3.2.2 单个项目修改

> 后面我们会了解到maven项目是通过pom.xml进行构建信息配置和依赖信息配置。其中就包括配置编译需要的jdk版本。所以我们直接修改pom文件就可以实现单个项目修改，但是我们并不推荐此种方式，因为这个方式需要每个项目都要修改，不具有可重用性！

```java
<build>
        <plugins>
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-compiler-plugin</artifactId>
                <version>3.6.1</version>
                <configuration>
                    <source>1.8</source>
                    <target>1.8</target>
                </configuration>
            </plugin>
        </plugins>
</build>
```



### 四、仓库

#### 4.1 仓库概念

> * 存储依赖的地方，体现形式就是本地的一个目录。
> * 仓库中不仅存放依赖，而且管理着每个依赖的唯一标识（坐标），Java项目凭坐标获取依赖。



#### 4.2 仓库分类

> Maven仓库可以分为本地仓库和远程仓库，其中远程仓库又分为中央仓库、公共仓库和私服
>
> - **本地仓库：** 本地仓库存放着项目中所需jar文件
> - **中央仓库：** Maven的中央仓库是由Maven社区提供存储jar文件的仓库
> - **公共仓库：** 国内厂家提供的存储jar文件的仓库，比如：aliyun仓库
> - **私服：** 由公司创建的存储jar文件的仓库，可在公司范围内共享，不对外开放
>
> 当项目中需要jar文件依赖时，会从仓库中查找获取，如果我们把所有仓库都配置好。maven在查找获取依赖的时候遵循一个依赖查找顺序，如下：（如果本地仓库找不到依赖就去私服下载，以此类推......）
>
> **依赖查找顺序：** 本地仓库 - > 私服 - > 公共仓库 - > 中央仓库

![image-20200616184606968](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200616184609.png)



#### 4.3 本地仓库

> **本地仓库：** 本地目录中存放所需jar包，需修改`settings`配置文件来配置本地仓库
>
> - 使用过的依赖都会存储在本地仓库中，实现复用



#### 4.4 远程仓库

##### 4.4.1 中央仓库

> **中央仓库：** Maven中央仓库是由Maven社区提供的仓库，不用任何配置，maven中内置了中央仓库地址。其中就包含绝大多数流行的开源Java构件
>
> - [https://mvnrepository.com/](https://mvnrepository.com/)可以搜索需要的依赖的相关信息（仓库搜索服务）
> - [http://repo.maven.apache.org/maven2/](http://repo.maven.apache.org/maven2/)为中央仓库地址



##### 4.4.2 公共仓库

> **公共仓库：** 第三方维护的jar文件仓库，比如阿里云提供的仓库。但是jar文件可能不如官方的中央仓库全，有时候也会找不到，所以如果项目构建不成功，可以更改镜像为官方的，下载完jar包再去改回来
>
> - aliyun仓库地址：[http://maven.aliyun.com/nexus/content/groups/public/](http://maven.aliyun.com/nexus/content/groups/public/)
>
> - 因为Maven社区提供的中央仓库在国外，国内使用下载依赖速度过慢，所以一般我们都配置国内的公共仓库来代替中央仓库
> - 使用时，需要在`settings.xml`配置文件中添加配置信息。打开`settings.xml`配置文件，找到\<mirrors>标签，你也会发现这是一个空标签，最后标签内填写如下配置就OK！

```java
	<!--setting.xml中添加如下配置-->
	<mirror>
        <id>aliyun</id>  
        <!-- 中心仓库的 mirror(镜像) -->
        <mirrorOf>central</mirrorOf>    
        <name>Nexus aliyun</name>
        <!-- aliyun仓库地址 以后所有要指向中心仓库的请求，都会指向aliyun仓库-->
        <url>http://maven.aliyun.com/nexus/content/groups/public</url>  
    </mirror>
```

![image-20200616223651045](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200616223653.png)



##### 4.4.3 私服

> **私服：** 公司创建存储jar文件的仓库，只对公司范围共享，不对外开放。可以通过`Nexus`来创建、管理一个私服。

###### 4.4.3.1 私服概念

> * 私服是架设在局域网的一种特殊的远程仓库，目的是代理远程仓库及部署第三方构件。
>
> * 有了私服之后，当 Maven 需要下载依赖时，直接请求私服，私服上存在则下载到本地仓库；否则，私服请求外部的远程仓库，将构件下载到私服，再提供给本地仓库下载。
> * 私服可以解决在企业做开发时每次需要的jar包都要在中心仓库下载,且每次下载完只能被自己使用,不能被其他开发人员使用
>
> * 所谓私服就是一个服务器,但是不是本地层面的,是公司层面的,公司中所有的开发人员都在使用同一个私服



###### 4.4.3.2 私服架构

> 我们可以使用专门的 Maven 仓库管理软件来搭建私服，比如：[Apache Archiva](http://archiva.apache.org/index.cgi)，[Artifactory](http://www.jfrog.com/home/v_artifactory_opensource_overview/)，[Sonatype Nexus](http://www.sonatype.org/nexus/)。这里我们使用`Sonatype Nexus`
>
> - 我们可以在图中得到在无私服的情况下，我们都需要从远程仓库去获取jar文件并存储在本地仓库，由于中央仓库是国外的，所以下载速度比较慢等等原因，并存在很多缺点，比如我们公司内使用
> - 我们在图中可清晰的看到，如果有私服的话，我们需要从私服中，查找jar文件，如果私服没有该jar文件，就需要去中央仓库或公共仓库去下载，然后传到私服中，最后传入到自己的本地仓库进行使用。假设公司员工再一次使用到该jar文件，它会先从私服中找有没有这个jar文件，由于我们之前的员工已经将该jar文件存储到了私服中，所以就省去了其他员工调用远程仓库的步骤。并且私服是公司内部局域网类型的，下载速度会比远程仓库快出很多倍

|                            无私服                            |                            有私服                            |
| :----------------------------------------------------------: | :----------------------------------------------------------: |
| ![私服1](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200617210526.png) | ![私服2](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200617210530.png) |



###### 4.4.3.3 Nexus安装（了解即可）

> - Nexus官网地址：[https://blog.sonatype.com/](https://blog.sonatype.com/) 
>
> - 下载地址：[https://help.sonatype.com/repomanager2/download/download-archives---repository-manager-oss](https://help.sonatype.com/repomanager2/download/download-archives---repository-manager-oss)

> 下载我们需要下载Zip解压包即可，将解压包解压到本地盘符中即可！
>
> 解压后，你会看到nexus目录为私服目录，sonatype-work目录中包含存储私服下载的依赖。



###### 4.4.3.4 Nexus登录

> 访问私服：[http://localhost:8081/nexus/](http://localhost:8081/nexus/)
>
> 登录私服的账号为`admin`，密码为`admin123`



###### 4.4.3.5 仓库列表

| 仓库类型 | 描述                                                         |
| -------- | ------------------------------------------------------------ |
| group    | 包含多个仓库，通过group库的地址可以从包含的多个仓库中查找构件 |
| hosted   | 私服 服务器本地的仓库，其中存储诸多构件                      |
| proxy    | 代理仓库，其会关联一个远程仓库, 比如中央仓库，aliyun仓库，向该仓库查找构件时，如果没有会从其关联的仓库中下载 |

| 仓库名    | 描述                                                         |
| --------- | ------------------------------------------------------------ |
| Releases  | 存放项目的稳定发布版本，一个模块做完后如果需要共享给他人，可以上传到私服的该库 |
| Snapshots | 对应不稳定的发布版本                                         |
| 3rd party | 存放中央仓库没有的 ，如ojdbc.jar，可以上传到私服的该库中     |

|                           仓库列表                           |
| :----------------------------------------------------------: |
| ![私服_list](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200617221828.jpg) |



###### 4.4.3.6 仓库组

> 而此时就有问题，私服中有很多仓库，每个仓库都有自己的url，则项目中配置哪个仓库呢 ?
>
> 私服中有一个仓库组，组中包含多个仓库，可以指定仓库组的url，即可从多个仓库中获取构件
>
> **关于仓库的设置：** 由于我们在使用私服的时候，本地仓库没有的jar文件，需要去私服找，私服没有的话，就去中央仓库找。所以我们需要把私服内的中央仓库换为阿里云仓库，这样可以保证我们国内的下载速度。

|           仓库组       注意：proxy的仓库排序在最后           |
| :----------------------------------------------------------: |
| ![私服_deploy2](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200617222337.jpg) |



###### 4.4.3.7 手动上传仓库

![](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200617222039.png)

![](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200617222108.png)



###### 4.4.3.8 Maven关联私服

> 配置`settings.xml`，设置私服地址、认证等信息（关联私服需要添加配置文件信息如下，找到父标签，添加子标签内容即可）

```java
<servers>
	<server> 
		<id>nexus-public</id> <!-- nexus的认证id -->
		<username>admin</username> <!--nexus中的用户名密码-->
		<password>admin123</password> 
	</server>
</servers>
```

```java
<profiles>
	<profile> 
        <id>nexus</id> 
        <repositories> 
            <repository> 
                <id>nexus-public</id> <!--nexus认证id 【此处的repository的id要和 <server>的id保持一致】-->
                <!--name随便-->
                <name>Nexus Release Snapshot Repository</name> 
                <!--地址是nexus中仓库组对应的地址-->
                <url>http://localhost:8081/nexus/content/groups/public/</url>
                <releases><enabled>true</enabled></releases> 
                <snapshots><enabled>true</enabled></snapshots> 
            </repository>
        </repositories> 
        <pluginRepositories> <!--插件仓库地址，各节点的含义和上面是一样的-->
            <pluginRepository> 
                <id>nexus-public</id> <!--nexus认证id 【此处的repository的id要和 <server>的id保持一致】-->
                <!--地址是nexus中仓库组对应的地址-->
                <url>http://localhost:8081/nexus/content/groups/public/</url>
                <releases><enabled>true</enabled></releases> 
                <snapshots><enabled>true</enabled></snapshots> 
            </pluginRepository> 
        </pluginRepositories> 
    </profile>
</profiles>
<activeProfiles>
    <activeProfile>yourjdk</activeProfile>
    <!-- 使私服配置生效 -->
    <activeProfile>nexus</activeProfile>
</activeProfiles>
```



###### 4.4.3.9 Meven项目部署到私服

> * 执行`mvn deploy`指令即可将项目部署到私服对应的仓库中，此时项目中的打包方式多为jar
> * 但需要提前在项目的`pom.xml`中配置部署私服仓库位置，如下：
>
> **注意：** 如上的 repository的 id 依然是要和settings.xml中配置的server中的id 一致，才能通过私服的认证

```java
<project>
		...
	<dependencies>
		.....
	</dependencies>
	
	<!-- 在项目的pom.xml中 配置私服的仓库地址，可以将项目打jar包部署到私服 -->
	<distributionManagement>
        <repository>
            <id>nexus-public</id> <!-- nexus认证id -->
            <url>http://localhost:8081/nexus/content/repositories/releases</url>
        </repository>
        <snapshotRepository>
            <id>nexus-public</id> <!-- nexus认证id -->
            <url>http://localhost:8081/nexus/content/repositories/snapshots</url>
        </snapshotRepository>
	</distributionManagement>
</project>
```



### 五、IDEA中的Maven操作

#### 5.1 创建Maven项目

|                        创建Maven项目                         |
| :----------------------------------------------------------: |
| ![image-20200616215847109](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200616215854.png) |
|                  **指定项目名称和项目位置**                  |
| ![image-20200616220455702](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200616220457.png) |



##### 5.1.1 节点配置解析

|    节点    |                           详细描述                           |
| :--------: | :----------------------------------------------------------: |
|  groupId   | 这是项目组的编号，这在组织或项目中通常是独一无二的。 例如，一家银行集团 `com.company.bank`拥有所有银行相关项目。 |
| artifactId | 这是项目的 ID。这通常是项目的名称。 例如，`consumer-banking`。 除了 groupId 之外，artifactId 还定义了 artifact 在存储库中的位置。 |
|  version   | 这是项目的版本。与 groupId 一起使用，artifact 在存储库中用于将版本彼此分离。 例如：`com.company.bank:consumer-banking:1.0`，`com.company.bank:consumer-banking:1.1` |



##### 5.1.2 语义化版本号

> * 规则：正式稳定版本从v0.1.0开始，配套软件公共API
> * 注意：正式版发布后不可修改，只能在下一个版本中发布新内容

| 版本类型 | 详细描述                                         |
| -------- | ------------------------------------------------ |
| 主要版本 | 当你做了不兼容的API 修改（正式版发布、架构升级） |
| 次要版本 | 当你做了向下兼容的功能性新增（功能增减）         |
| 修订版本 | 当你做了向下兼容的问题修正（BUG修复、查缺补漏）  |



##### 5.1.3 扩展（SNAPSHOT）

> 在使用maven过程中，我们在开发阶段经常性的会有很多公共库处于不稳定状态，随时需要修改并发布，可能一天就要发布一次，遇到bug时，甚至一天要发布N次。我们知道，maven的依赖管理是基于版本管理的，对于发布状态的artifact，如果版本号相同，即使我们内部的镜像服务器上的组件比本地新，maven也不会主动下载的。如果我们在开发阶段都是基于正式发布版本来做依赖管理，那么遇到这个问题，就需要升级组件的版本号，可这样就明显不符合要求和实际情况了。但是，如果是基于快照版本，那么问题就自热而然的解决了，而maven已经为我们准备好了这一切。

> maven中的仓库分为两种，snapshot快照仓库和release发布仓库。snapshot快照仓库用于保存开发过程中的不稳定版本，release正式仓库则是用来保存稳定的发行版本。定义一个组件/模块为快照版本，只需要在pom文件中在该模块的版本号后加上**-SNAPSHOT** 即可（注意这里必须是大写），如下：

```java
<groupId>com.mylifes1110</groupId>
<artifactId>firstmaven</artifactId>
<version>0.1-SNAPSHOT</version>
<packaging>jar</packaging>
```

> maven会根据模块的版本号（pom文件中的version）中是否带有-SNAPSHOT来判断是快照版本还是正式版本。**如果是快照版本，那么在mvn deploy时会自动发布到快照版本库中，会覆盖老的快照版本，而在使用快照版本的模块，在不更改版本号的情况下，直接编译打包时，maven会自动从镜像服务器上下载最新的快照版本。如果是正式发布版本，那么在mvn deploy时会自动发布到正式版本库中，而使用正式版本的模块，在不更改版本号的情况下，编译打包时如果本地已经存在该版本的模块则不会主动去镜像服务器上下载**。

> 在maven的约定中，依赖的版本分为两类——SNAPSHOT和RELEASE。SNAPSHOT依赖泛指以-SNAPSHOT为结尾的版本号，例如1.0.1-SNAPSHOT。除此之外，所有非-SNAPSHOT结尾的版本号则都被认定为RELEASE版本，即正式版，虽然会有beta、rc之类说法，但是这些只是软件工程角度的测试版，对于maven而言，这些都是RELEASE版本。所以一般我们需要上传到发布仓库的时候可以在\<version>标签内直接写版本即可，不需要再添加任何标签！



#### 5.2 IDEA关联Maven

> 在IDEA中关联本地安装的maven，后续就可以通过idea来使用maven管理项目（我使用的aliyun仓库）

|                    在全局设置中关联Maven                     |
| :----------------------------------------------------------: |
| ![image-20200616222756521](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200616222759.png) |
|      **Maven项目展示** （缺少test包下resources文件夹）       |
| ![image-20200616224937892](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200616224940.png) |



#### 5.3 IDEA创建测试包下resources文件夹

> 我们在使用IDEA创建Maven项目时，IDEA是没有帮我们创建test包下的resources文件夹。但是Maven规范中是包含这个文件夹的，所以我们需要手动创建并声明该文件夹

|                   创建存放测试配置的文件夹                   |
| :----------------------------------------------------------: |
| ![image-20200616225355373](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200616225358.png) |
|   **指定文件夹名称** （下拉框选择resources文件夹创建即可）   |
| ![image-20200616225859663](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200616225902.png) |
|        **文件目录结构展示** （完整Maven规范目录结构）        |
| ![image-20200616230042781](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200616230044.png) |



#### 5.4 Maven项目目录结构解析

> **注意：** 项目中的创建包、创建类、执行，都与普通项目无异

| 目录名称           | 描述                                                         |
| ------------------ | ------------------------------------------------------------ |
| src/main/java      | 用于创建包，存放编写的源代码（.java文件）                    |
| src/main/resources | 存放项目中所需配置文件，比如：c3p0.properties                |
| src/test/java      | 用于创建包，存放编写的测试代码（.java文件）                  |
| src/test/resources | 存放项目中测试代码所需配置文件                               |
| 根目录/pom.xml     | 项目对象模型（project object model），maven项目核心文件，其中定义项目构建方式，声明依赖等 |



#### 5.5 Maven项目类型

> 根据项目类型，在`pom.xml`文件中添加相应配置。
>
> - **项目类型分为Java项目和JavaWeb项目** 
>
> - 如果项目为Java项目需要在\<project>标签内添加`<packaging>jar</packaging>`
> - 如果项目为JavaWeb项目需要在\<project>标签内添加`<packaging>war</packaging>`
>
> **注意：** Maven可以根据项目类型来确定打包方式，比如**Java项目打包成jar包** 、**JavaWeb项目打包成war包** 

```java
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>

    <groupId>com.mylifes1110</groupId>
    <artifactId>firstmaven</artifactId>
    <version>1.0-SNAPSHOT</version>

    <!--
        设置项目类型,打包方式：
        如果为Java项目则使用jar
        如果为JavaWeb项目使用war
    -->
    <packaging>jar</packaging>
<!--    <packaging>war</packaging>-->
</project>
```



#### 5.6 IDEA中导入依赖

##### 5.6.1 导入依赖须知

> 建好项目后，需要导入需要的jar包，要通过坐标来在仓库中查找导入
>
> - 每个构件都有自己的坐标，其坐标分为`groupId、artifactId、version` 三种，翻译后为`项目标识、项目名称、版本号`
> - 在maven项目中只需要配置坐标，maven便会自动加载对应依赖。删除坐标则会移除依赖

| 节点         | 描述                                                         |
| :----------- | :----------------------------------------------------------- |
| project      | 工程的根标签。                                               |
| modelVersion | 模型版本需要设置为 4.0。                                     |
| groupId      | 这是工程组的标识。它在一个组织或者项目中通常是唯一的。例如，一个银行组织 com.companyname.project-group 拥有所有的和银行相关的项目。 |
| artifactId   | 这是工程的标识。它通常是工程的名称。例如，消费者银行。groupId 和 artifactId 一起定义了 artifact 在仓库中的位置。 |
| version      | 这是工程的版本号。在 artifact 的仓库中，它用来区分不同的版本。例如：`com.company.bank:consumer-banking:1.0 com.company.bank:consumer-banking:1.1` |



##### 5.6.2 查找依赖

> 依赖查找服务需要在如下网址中查找依赖，获取依赖坐标后，在maven项目中的`pom.xml`文件中导入
>
> - **依赖查找服务地址：** [https://mvnrepository.com/](https://mvnrepository.com/)

|                         查找jar文件                          |
| :----------------------------------------------------------: |
| ![image-20200616111418839](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200617002627.png) |
|                      **jar文件的选择**                       |
| ![image-20200616112444879](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200617002659.png) |
|                       **Copy依赖坐标**                       |
| ![image-20200617003002005](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200617003004.png) |



##### 5.6.3 导入依赖

> 在项目的`pom.xml`文件中添加依赖
>
> - 首先添加\<dependencies>标签
> - 最后添加复制好的依赖坐标
>
> **注意：** 导入依赖可以导入多个所需jar文件的依赖，依次在\<dependencies>标签内添加依赖坐标即可

|                           导入依赖                           |
| :----------------------------------------------------------: |
| ![image-20200617003853705](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200617004552.png) |



##### 5.6.4 同步依赖

> 导入依赖后，你会发现`pom.xml`文件中的依赖坐标是红色报错的，而在IDEA的右下角有那么一个框。这时候需要点击框内提示信息在maven仓库中同步下载依赖到项目中

|                     同步下载依赖到项目中                     |
| :----------------------------------------------------------: |
| ![image-20200617004515463](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200617004620.png) |



##### 5.6.5 查看依赖

> 导入并同步下载好的依赖，可以通过项目和IDEA中Maven控制面板查看

|                           查看依赖                           |
| :----------------------------------------------------------: |
| ![image-20200617005635304](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200617005637.png) |



#### 5.7 基于Maven创建Web项目

##### 5.7.1 修改web项目打包方式

> `pom.xml`文件中设置 `<packaging>war/packaging>`修改打包方式为web项目



##### 5.7.2 导入web依赖

> 基于Maven项目，我们导入了maven所需依赖，如果创建web项目的话，还需要导入`JSP`、`Servlet`和`JSTL`依赖，使Maven项目具有web编译环境。（在`pom.xml`文件中添加以下依赖）

```java
	    <dependency>
            <!-- jstl 支持 -->
            <groupId>javax.servlet</groupId>
            <artifactId>jstl</artifactId>
            <version>1.2</version>
        </dependency>
        <dependency>
            <!-- servlet编译环境 -->
            <groupId>javax.servlet</groupId>
            <artifactId>javax.servlet-api</artifactId>
            <version>3.1.0</version>
            <scope>provided</scope>
        </dependency>
        <dependency>
            <!-- jsp编译环境 -->
            <groupId>javax.servlet</groupId>
            <artifactId>jsp-api</artifactId>
            <version>2.0</version>
            <scope>provided</scope>
        </dependency>
```

![image-20200617123210482](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200617123213.png)



##### 5.7.3 创建web项目目录结构

> web项目在IDEA中有web规范目录文件夹的，比如webapp、WEB-INF、web.xml、index.jsp。而由于Maven项目中没有该规范目录，这就需要我们自己创建目录结构了！
>
> **创建web项目目录结构有以下注意点：** 
>
> - webapp文件夹必须是基于main目录下创建的，与java文件夹同级
> - webapp文件夹IDEA自动识别此文件夹，给与了特殊蓝色圆点标识
> - 在WEB-INF目录下创建的的`web.xml`是一个空的xml文件，我们需要在该文件中键入如下web.xml空白模板信息，只需要将下面的模板复制到项目中的web.xml文件中即可！
> - 创建的文件夹以及文件名称千万不要写错！
>
> **注意：** 在创建项目的时候，其实我们是可以指定使用IDEA来创建来创建web项目的目录结构的，创建项目时需要勾选`Create from archetype`。只是IDEA为我们构建的项目架构是有版本差异的，而且还附加了很多对我们无用的注解等等，所以我们一般都手动创建，IDEA自动构建作为了解就好！

***xml空白模板*** 

```java
<?xml version="1.0" encoding="UTF-8"?>
<web-app xmlns="http://xmlns.jcp.org/xml/ns/javaee"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/javaee http://xmlns.jcp.org/xml/ns/javaee/web-app_4_0.xsd"
         version="4.0">
</web-app>
```

|                     IDEA自动构建项目结构                     |
| :----------------------------------------------------------: |
| ![image-20200617164915737](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200617165053.png) |



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



##### 5.7.4 tomact的引入

> 关于Tomact服务的引入，需要我们手动添加tomact服务
>
> 添加tomact服务后，如果对tomact服务器在IDEA中的开发流程不熟悉的小伙伴，不要灰心。请参考[tomact服务器基础和开发步骤](https://github.com/Ziphtracks/JavaLearningmanual/blob/master/docs/Server/tomact%E6%9C%8D%E5%8A%A1%E5%99%A8%E5%9F%BA%E7%A1%80%E5%92%8C%E5%BC%80%E5%8F%91%E6%AD%A5%E9%AA%A4.md)即可，此文章中详细讲到了关于tomact的各种知识点！

|                        添加tomact服务                        |
| :----------------------------------------------------------: |
| ![image-20200617131801103](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200617131804.png) |



#### 5.8 pom文件的其他标签操作

##### 5.8.1 build标签修改默认打包名

> 默认的打包名称：`artifactid+verson.打包方式`
>
> 我们可以通过build中finalName修改，如下操作：

```java
<build>
  <finalName>maven_name</finalName>
</build>  
```



##### 5.8.2 引入插件

> dependencies引入开发需要的jar包，有时候我们还需要引入一些常用的插件，比如：jdk、tomact、分页插件等等
>
> 插件配置位置也是在\<build>标签中，如下：

```java
<build>
<plugins>
    <!-- java编译插件，配jdk的编译版本 -->
    <plugin>
      <groupId>org.apache.maven.plugins</groupId>
      <artifactId>maven-compiler-plugin</artifactId>
      <configuration>
        <source>1.8</source>
        <target>1.8</target>
        <encoding>UTF-8</encoding>
      </configuration>
    </plugin>
    <!-- tomcat插件 -->
    <plugin>
      <groupId>org.apache.tomcat.maven</groupId>
      <artifactId>tomcat7-maven-plugin</artifactId>
      <configuration>
        <port>8080</port>
        <path>/</path>
        <uriEncoding>UTF-8</uriEncoding>
        <server>tomcat7</server>
      </configuration>
    </plugin>
  </plugins>
</build>
```



##### 5.8.3 控制打包资源

> 如果在java文件夹中添加java类，会自动打包编译到classes文件夹下。但是xml文件默认不会被打包，需要我们手动指定打包。可以使用\<resources>标签来指定要打包资源的文件夹要把哪些静态资源打包到classes根目录下

```java
<!--打包指定静态资源-->
<build>
<resources>
    <resource>
      <!-- 指定要打包资源的文件夹 要把哪些静态资源打包到 classes根目录下-->
      <directory>src/main/resources</directory>
      <includes>
        <include>**/*.xml</include>
        <include>**/*.properties</include>
      </includes>
    </resource>
    <resource>
      <directory>src/main/resources</directory>
      <excludes>
        <exclude>spring/*</exclude>
      </excludes>
      <includes>
        <include>*.xml</include>
        <!--<include>*/*.properties</include>-->
      </includes>
    </resource>
  </resources>
</build>
```



### 六、依赖的生命周期

#### 6.1 什么是依赖的生命周期

> jar文件的生效时间段可以成为依赖的生命周期



#### 6.2 依赖的生命周期分类与详解

> 前三个是常用的依赖生命周期设置，而后两个制作了解即可，几乎用不到！

| 标识     | 周期                                                         |
| -------- | ------------------------------------------------------------ |
| compile  | 缺省值（默认依赖生命周期），适用于所有阶段（测试运行，编译，运行，打包） |
| provided | 类似compile，期望JDK、容器或使用者会提供这个依赖。如servlet-api.jar；适用于（测试运行，编译）阶段 |
| test     | 只在测试时使用，适用于（编译，测试运行）阶段，如 junit.jar   |
|          |                                                              |
| runtime  | 依赖在编译器不使用，只在运行时使用，如 mysql的驱动jar，适用于（运行，测试运行）阶段 |
| system   | Maven不会在仓库中查找对应依赖，在本地磁盘目录中查找；适用于（编译，测试运行，运行）阶段 |



#### 6.3 依赖生命周期的使用

> 关于依赖生命周期的使用，需要在期望指定生命周期的依赖内添加\<scope>标签，在此标签内添加所需依赖标识。

***complie*** 

> jstl依赖默认没有compile标识的生命周期。因为在依赖中不指定生命周期就是默认指定适用于所有阶段的生命周期，其默认标识为compile。

![image-20200617135847510](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200617135849.png)

***provided*** 

> servlet和jsp依赖默认指定provided标识的生命周期。因为我们在servlet或jsp代码时是需要这两个依赖的，但是我们将项目部署到tomact中，本地tomact目录的lib文件夹下也会有一些jar文件，所以这造成了一种依赖冲突。为了避免这种依赖冲突我们需要指定依赖的生命周期为编译和测试运行阶段。这样我们在书写代码时，编译期也有有依赖可以使用，不会飘红，而在过了编译期后项目部署到了tomact中，该依赖声生命就会被结束掉了，不会影响tomact服务器内置依赖的使用！

![image-20200617135818392](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200617135820.png)

***test*** 

> 在maven项目中，项目结构是区分main主文件和test测试文件的。如果我们在使用Junit单元测试时，指定依赖的生命周期为test，那该依赖只适用于test测试文件内，在其他文件的阶段默认没有单元测试的依赖。
>
> 简单来说，在test文件夹内创建的测试类，使用@Test注解不会有任何问题。如果换做在main文件夹和其他文件夹中创建测试类，使用@Test注解就会因没有依赖注入而报错。

![image-20200617140515452](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200617140517.png)

***runtime*** 

> 我们在添加mysql驱动的依赖时，你会发现它并没有指定生命周期为runtime。这是因为我们在书写jdbc工具类的操作时，如果在编译期没有mysql驱动的依赖，它并不会飘红报错。如果没有依赖只有在我们运行的时候才会发生报错，并告知mysql驱动依赖未找到。所以，这就显得runtime这个依赖生命周期十分的鸡肋。因此，可以不指定该生命周期。

![image-20200617141145812](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200617141147.png)

***system*** 

> 当依赖的生命周期设置为system时，表示该依赖项是我们自己提供的，不需要Maven到仓库里面去找。
> 指定scope为system需要与另一个属性元素`systemPath`一起使用，它表示该依赖项在当前系统的位置，使用的是绝对路径。由于此类依赖不是通过 Maven 仓库解析的，而且往往与本机系统绑定，可能造成构建的不可移植，因此应该慎用。`systemPath` 元素可以引用环境变量。

![image-20200617142301138](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200617142302.png)



### 七、maven的构建命令

#### 7.1 项目的构建过程

![](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200617162455.png)

#### 7.2 常用构建命令

> 一般命令的键入在IDEA中的框中键入命令就可以！

![image-20200617170717904](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200617170719.png)

| 命令                | 描述                       |
| ------------------- | -------------------------- |
| mvn compile（常用） | 编译项目，生成target文件   |
| mvn package（常用） | 打包项目，生成war或jar文件 |
| mvn clean（常用）   | 清理编译或打包后的项目结构 |
| mvn install（常用） | 打包后上传到Maven本地仓库  |
|                     |                            |
| mvn source:jar      | 打包项目，生成jar包        |
| mvn deploy          | 只打包，不测试             |
| mvn site            | 生成站点                   |
| mvn test            | 执行测试源码               |



#### 7.3 maven项目的生命周期

> maven项目的生命周期分为了三个阶段，而这三个阶段相互独立、互不影响
>
> 1. **清理生命周期（Clean Lifecycle）：** 该生命周期负责清理项目中多余信息，保持资源和代码的整洁性。一般用来清空目录下的文件
> 2. **默认构建生命周期（Default Lifeclyle）：** 该生命周期表示项目的构建过程，其中定义了一个项目构建要经历的不同阶段
> 3. **站点管理生命周期（Site Lifecycle）：** site生命周期的目的是建立和发布项目站点，Maven能够基于POM所包含的信息，自动生成一个友好的站点

***clean*** 

> 该生命周期主要是对项目编译生成的文件进行清理，清理的话主要是清理编译后项目中的target文件夹，清理后还可以通过编译指令重新生成。
>
> - **命令：** `mvn clean`

***default*** 

> 该生命周期的主要目的是项目的`编译 -> 测试 -> 打包 -> 发布`
>
> - **命令：** `mvn deploy`
> - 其中default生命周期分为23个阶段，如下列举比较重要的几个阶段
>   - validate：验证工程是否正确，所有需要的资源是否可用。
>   - compile：编译项目的源代码。  
>   - test：使用合适的单元测试框架来测试已编译的源代码。这些测试不需要已打包和布署。
>   - Package：把已编译的代码打包成可发布的格式，比如jar。
>   - integration-test：如有需要，将包处理和发布到一个能够进行集成测试的环境。
>   - verify：运行所有检查，验证包是否有效且达到质量标准。
>   - install：把包安装到maven本地仓库，可以被其他工程作为依赖来使用。
>   - Deploy：在集成或者发布环境下执行，将最终版本的包拷贝到远程的repository，使得其他的开发者或者工程可以共享。

***site*** 

> 该生命周期的主要是建立和发布项目站点，Maven能够基于POM所包含的信息，自动生成一个友好的站点
>
> - **命令：** `mvn site`
>
> **注意：** 低版本的site插件可能引发失败现象！升级高版本site插件即可！

```java
<plugin>
  <groupId>org.apache.maven.plugins</groupId>
  <artifactId>maven-site-plugin</artifactId>
  <version>3.7.1</version>
</plugin>
```



#### 7.4 maven命令与插件的关系

> maven命令是操作maven项目的重要方式，但是我们要知道maven命令只是支配maven插件工作的一个方式，其工作核心主要还是maven插件。maven内嵌了项目操作的插件，我们只需要通过执行命令来调用插件来完成项目的编译、测试、发布等工作
>
> **注意：** 执行一次命令可能会触发多个插件工作



### 八、传递依赖和冲突解决

#### 8.1 什么是传递依赖

> 假如有Maven项目A，项目B依赖A，项目C依赖B。那么我们可以说 C依赖A。也就是说，依赖的关系为：C - > B - > A， 那么我们执行项目C时，会自动把B、A都下载导入到C项目的jar包文件夹中，这就是依赖的传递性。



#### 8.2 什么是依赖冲突

> 依赖冲突我在上文中也提到过，依赖冲突是当直接引用或者间接引用出现了相同的jar包拥有不同版本的时候。
>
> 举个例子：A依赖于B，B依赖于C，此时C的版本为V1.0；如果此时引入的C依赖还有一个V2.0，那么我们的A传递依赖于C，此时C的版本为V2.0。这时候就是一个冲突，直接或间接的都引用了C，而C版本有两个！



#### 8.3 手动解决依赖冲突

> 如果我不想在C依赖中出现B，那么就可以主动的使用依赖排除技术，排除B依赖的引用，如下操作需要添加排除依赖的配置信息（\<exclusions>标签和其中信息，其中两个id标签是需要排除依赖的id）：

```java
 	<dependencies>
        <dependency>
            <groupId>org.springframework</groupId>
            <artifactId>spring-core</artifactId>
            <version>4.3.12.RELEASE</version>
        
            <!--手动排除依赖-->
            <exclusions>
                <exclusion>
                    <groupId>commons-logging</groupId>
                    <artifactId>commons-logging</artifactId>
                </exclusion>
            </exclusions>
        
        </dependency>
     </dependencies>
```



#### 8.4 自动解决依赖冲突

##### 8.4.1 自动解决依赖冲突的途径

> 自动解决依赖通途问题的两个途径分为：`短路优先原则`和`先声明优先原则`



##### 8.4.2 短路优先原则

> 首先，先看如下依赖关系
>
> 1. A - > B - > C - > D - > E（V1.0）
> 2. A - > F - > E（V2.0）
>
> **解释：** 1中，A依赖于B，B依赖于C，C依赖于D，D依赖于E，此时E的版本为V1.0版本（2中解释基本相似）

> 所谓短路优先，就是路径段的依赖有限被加载使用，这里我们可以看到2中的路径是最短的路径，所以maven在加载依赖的时候，是使用2中的这一条依赖和版本



##### 8.4.3 先声明优先原则

> 针对依赖路径长度相同的情况，则使用`先声明优先原则`，看如下依赖关系
>
> 1. A - > B - > C（V1.0）
> 2. A - > D - > C（V2.0）
>
> 此时路径优先原则不能解决问题时，maven需要判断在A项目的\<depencies>标签内，B和D的哪个依赖声明在前面，如果B依赖声明早于D依赖，那么就使用1中的这一条依赖和版本

