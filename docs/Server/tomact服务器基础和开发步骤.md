* [Tomact服务器基础与开发步骤](#tomact%E7%94%B5%E5%AD%90%E4%B9%A6)
    * [一、生活中的上网方式（BS、CS）](#%E4%B8%80%E7%94%9F%E6%B4%BB%E4%B8%AD%E7%9A%84%E4%B8%8A%E7%BD%91%E6%96%B9%E5%BC%8Fbscs)
      * [1\.1 生活中的两种上网方式](#11-%E7%94%9F%E6%B4%BB%E4%B8%AD%E7%9A%84%E4%B8%A4%E7%A7%8D%E4%B8%8A%E7%BD%91%E6%96%B9%E5%BC%8F)
      * [1\.2 BS、CS结构介绍](#12-bscs%E7%BB%93%E6%9E%84%E4%BB%8B%E7%BB%8D)
        * [1\.2\.1 BS结构（Browser/Server ）](#121-bs%E7%BB%93%E6%9E%84browserserver-)
        * [1\.2\.2 CS结构（Client/Server ）](#122-cs%E7%BB%93%E6%9E%84clientserver-)
        * [1\.2\.3 BS、CS总结](#123-bscs%E6%80%BB%E7%BB%93)
    * [二、Web服务器](#%E4%BA%8Cweb%E6%9C%8D%E5%8A%A1%E5%99%A8)
      * [2\.1 什么是服务器](#21-%E4%BB%80%E4%B9%88%E6%98%AF%E6%9C%8D%E5%8A%A1%E5%99%A8)
      * [2\.2 服务器的作用](#22-%E6%9C%8D%E5%8A%A1%E5%99%A8%E7%9A%84%E4%BD%9C%E7%94%A8)
      * [2\.3 常见的JavaWeb服务器](#23-%E5%B8%B8%E8%A7%81%E7%9A%84javaweb%E6%9C%8D%E5%8A%A1%E5%99%A8)
      * [2\.4 tomact介绍](#24-tomact%E4%BB%8B%E7%BB%8D)
      * [2\.5 tomact的下载](#25-tomact%E7%9A%84%E4%B8%8B%E8%BD%BD)
      * [2\.6 tomact配置](#26-tomact%E9%85%8D%E7%BD%AE)
      * [2\.7 关于tomact地址问题](#27-%E5%85%B3%E4%BA%8Etomact%E5%9C%B0%E5%9D%80%E9%97%AE%E9%A2%98)
    * [三、Web服务器相关概念](#%E4%B8%89web%E6%9C%8D%E5%8A%A1%E5%99%A8%E7%9B%B8%E5%85%B3%E6%A6%82%E5%BF%B5)
      * [3\.1 什么是Web](#31-%E4%BB%80%E4%B9%88%E6%98%AFweb)
      * [3\.2 Web资源介绍](#32-web%E8%B5%84%E6%BA%90%E4%BB%8B%E7%BB%8D)
      * [3\.3 静态Web资源介绍](#33-%E9%9D%99%E6%80%81web%E8%B5%84%E6%BA%90%E4%BB%8B%E7%BB%8D)
        * [3\.3\.1 静态Web资源项目介绍](#331-%E9%9D%99%E6%80%81web%E8%B5%84%E6%BA%90%E9%A1%B9%E7%9B%AE%E4%BB%8B%E7%BB%8D)
      * [3\.4 动态Web资源介绍](#34-%E5%8A%A8%E6%80%81web%E8%B5%84%E6%BA%90%E4%BB%8B%E7%BB%8D)
        * [3\.4\.1 动态Web资源项目介绍](#341-%E5%8A%A8%E6%80%81web%E8%B5%84%E6%BA%90%E9%A1%B9%E7%9B%AE%E4%BB%8B%E7%BB%8D)
    * [四、tomact目录结构](#%E5%9B%9Btomact%E7%9B%AE%E5%BD%95%E7%BB%93%E6%9E%84)
      * [4\.1 tomact目录结构介绍](#41-tomact%E7%9B%AE%E5%BD%95%E7%BB%93%E6%9E%84%E4%BB%8B%E7%BB%8D)
      * [4\.2 tomact目录详解（初级面试题）](#42-tomact%E7%9B%AE%E5%BD%95%E8%AF%A6%E8%A7%A3%E5%88%9D%E7%BA%A7%E9%9D%A2%E8%AF%95%E9%A2%98)
    * [五、Web项目相关问题](#%E4%BA%94web%E9%A1%B9%E7%9B%AE%E7%9B%B8%E5%85%B3%E9%97%AE%E9%A2%98)
    * [六、tomcat部署web应用程序](#%E5%85%ADtomcat%E9%83%A8%E7%BD%B2web%E5%BA%94%E7%94%A8%E7%A8%8B%E5%BA%8F)
      * [6\.1 tomact部署web应用程序方式](#61-tomact%E9%83%A8%E7%BD%B2web%E5%BA%94%E7%94%A8%E7%A8%8B%E5%BA%8F%E6%96%B9%E5%BC%8F)
      * [6\.2 部署方式一](#62-%E9%83%A8%E7%BD%B2%E6%96%B9%E5%BC%8F%E4%B8%80)
        * [6\.2\.1 方式一的部署步骤和访问](#621-%E6%96%B9%E5%BC%8F%E4%B8%80%E7%9A%84%E9%83%A8%E7%BD%B2%E6%AD%A5%E9%AA%A4%E5%92%8C%E8%AE%BF%E9%97%AE)
      * [6\.3 部署方式二](#63-%E9%83%A8%E7%BD%B2%E6%96%B9%E5%BC%8F%E4%BA%8C)
        * [6\.3\.1 方式二的部署步骤和访问](#631-%E6%96%B9%E5%BC%8F%E4%BA%8C%E7%9A%84%E9%83%A8%E7%BD%B2%E6%AD%A5%E9%AA%A4%E5%92%8C%E8%AE%BF%E9%97%AE)
      * [6\.4 部署方式三（推荐）](#64-%E9%83%A8%E7%BD%B2%E6%96%B9%E5%BC%8F%E4%B8%89%E6%8E%A8%E8%8D%90)
        * [6\.4\.1 方式三的部署步骤和访问](#641-%E6%96%B9%E5%BC%8F%E4%B8%89%E7%9A%84%E9%83%A8%E7%BD%B2%E6%AD%A5%E9%AA%A4%E5%92%8C%E8%AE%BF%E9%97%AE)
      * [6\.5 Web动态项目的相关配置](#65-web%E5%8A%A8%E6%80%81%E9%A1%B9%E7%9B%AE%E7%9A%84%E7%9B%B8%E5%85%B3%E9%85%8D%E7%BD%AE)
        * [6\.5\.1 修改默认xml访问配置方式一](#651-%E4%BF%AE%E6%94%B9%E9%BB%98%E8%AE%A4xml%E8%AE%BF%E9%97%AE%E9%85%8D%E7%BD%AE%E6%96%B9%E5%BC%8F%E4%B8%80)
        * [6\.5\.2 修改默认xml访问配置方式二](#652-%E4%BF%AE%E6%94%B9%E9%BB%98%E8%AE%A4xml%E8%AE%BF%E9%97%AE%E9%85%8D%E7%BD%AE%E6%96%B9%E5%BC%8F%E4%BA%8C)
        * [6\.5\.3 项目中WEB\-INF\\web\.xml和tomact\\conf\\web\.xml的关系](#653-%E9%A1%B9%E7%9B%AE%E4%B8%ADweb-infwebxml%E5%92%8Ctomactconfwebxml%E7%9A%84%E5%85%B3%E7%B3%BB)
    * [七、在idea下开发Web应用](#%E4%B8%83%E5%9C%A8idea%E4%B8%8B%E5%BC%80%E5%8F%91web%E5%BA%94%E7%94%A8)
      * [7\.1 idea中创建Web项目教程](#71-idea%E4%B8%AD%E5%88%9B%E5%BB%BAweb%E9%A1%B9%E7%9B%AE%E6%95%99%E7%A8%8B)
      * [7\.2 idea中Web项目目录解析](#72-idea%E4%B8%ADweb%E9%A1%B9%E7%9B%AE%E7%9B%AE%E5%BD%95%E8%A7%A3%E6%9E%90)
      * [7\.3 idea中配置并部署tomact服务器](#73-idea%E4%B8%AD%E9%85%8D%E7%BD%AE%E5%B9%B6%E9%83%A8%E7%BD%B2tomact%E6%9C%8D%E5%8A%A1%E5%99%A8)
        * [7\.3\.1 在Web项目中加入静态资源](#731-%E5%9C%A8web%E9%A1%B9%E7%9B%AE%E4%B8%AD%E5%8A%A0%E5%85%A5%E9%9D%99%E6%80%81%E8%B5%84%E6%BA%90)
        * [7\.3\.2 idea中配置tomact服务器](#732-idea%E4%B8%AD%E9%85%8D%E7%BD%AEtomact%E6%9C%8D%E5%8A%A1%E5%99%A8)
      * [7\.4 idea中打包成war包和默认war包的解释](#74-idea%E4%B8%AD%E6%89%93%E5%8C%85%E6%88%90war%E5%8C%85%E5%92%8C%E9%BB%98%E8%AE%A4war%E5%8C%85%E7%9A%84%E8%A7%A3%E9%87%8A)
    * [八、tomact常见错误](#%E5%85%ABtomact%E5%B8%B8%E8%A7%81%E9%94%99%E8%AF%AF)
      * [8\.1 tomact闪退问题](#81-tomact%E9%97%AA%E9%80%80%E9%97%AE%E9%A2%98)
      * [8\.2 浏览器错误代码404](#82-%E6%B5%8F%E8%A7%88%E5%99%A8%E9%94%99%E8%AF%AF%E4%BB%A3%E7%A0%81404)
      * [8\.3 浏览器错误代码500](#83-%E6%B5%8F%E8%A7%88%E5%99%A8%E9%94%99%E8%AF%AF%E4%BB%A3%E7%A0%81500)

# Tomact服务器基础与开发步骤

------



### 一、生活中的上网方式（BS、CS）



#### 1.1 生活中的两种上网方式

> 一、可以通过浏览器（browser）进行上网，比如：访问浏览谷歌浏览器、火狐浏览器
>
> 二、可以通过客户端（client）进行上网，比如：下载淘宝客户端逛淘宝



#### 1.2 BS、CS结构介绍



##### 1.2.1 BS结构（Browser/Server ）

> B/S结构（Browser/Server，浏览器/服务器模式），是WEB兴起后的一种网络结构模式，WEB浏览器是客户端最主要的应用软件。这种模式统一了客户端，将系统功能实现的核心部分集中到服务器上，简化了系统的开发、维护和使用。客户机上只要安装一个浏览器，如Netscape Navigator或Internet Explorer，服务器安装SQL Server、Oracle、MYSQL等数据库。浏览器通过Web Server 同数据库进行数据交互。 

> - **简单来说，如下：** 
> - 不需要安装客户端，只要能连上网，就能随时随地使用 
> - 开发人员只需要对服务器端程序进行开发、维护，降低开发维护难度和开发维护成本
> - 浏览器主要负责用户界面的动态展示，只处理一些简单的逻辑功能 
> - 所有具体业务逻辑的处理都由服务器端程序完成，所以程序负载几乎都转移给服务器端
> - 但是随着服务器负载的增加，可以平滑地增加服务器的个数并建立集群服务器系统，然 后在各个服务器之间做负载均衡
> - 以下图是BS结构的工作原理：

![1586431568617](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200531143039.png)



##### 1.2.2 CS结构（Client/Server ）

> C/S结构（Client/Server，服务器/客户机模式），C/S结构通常采取两层结构。服务器负责数据的管理，客户机负责完成与用户的交互任务。 客户机通过局域网与服务器相连，接受用户的请求，并通过网络向服务器提出请求，对数据库进行操作。服务器接受客户机的请求，将数据提交给客户机，客户机将数据进行计算并将结果呈现给用户。服务器还要提供完善安全保护及对数据完整性的处理等操作，并允许多个客户机同时访问服务器，这就对服务器的硬件处理数据能力提出了很高的要求。 

> - **简单来说，如下：** 
> - 将应用程序分为客户端和服务器端两层，客户端程序用于展示功能，为用户提供操作界 面，同时也可以进行业务逻辑的处理；而服务器端程序负责操作数据库完成数据处理等 核心业务 
> - 由此可见通过C/S开发模型开发的应用程序，客户端程序可以承担一部分业务逻辑处 理，特别是数据的预处理工作，减轻了服务器端程序的压力 



##### 1.2.3 BS、CS总结

> - BS优缺点：
>   * 优点：实时地更新数据(新功能的增加只需要在服务端完成，浏览器刷新就好了)
>   * 缺点：将负载给了服务器 
> - CS优缺点：
>   * 优点：客户端也分担了一部分负载
>   * 缺点：如果有新的功能增加，必须要重新下载客户端



### 二、Web服务器



#### 2.1 什么是服务器

> 服务器服务器，是提供计算服务的设备。由于服务器需要响应服务请求，并进行处理，因此一般来说服务器应具备承担服务并且保障服务的能力，服务器适用于哪方面。例如网站建设、游戏开发等都需要服务器。 
>
> 从广义上讲，服务器是指网络中能对其它机器提供某些服务的计算机系统。从狭义上讲，服务器是专指某些高性能计算机，能通过网络，对外提供服务。相对于普通PC来说，稳定性、安全性、性能等方面都要求更高，因此在CPU、芯片组、内存、磁盘系统、网络等硬件和普通PC有所不同。 

> 对于服务器通俗易懂的两种概念。第一种就是一台电脑，第二种指的是在电脑上安装了一个服务器软件，这时我们也管这台电脑叫做服务器。 



#### 2.2 服务器的作用

> **作用：** 服务器应具备承担服务并且保障服务的能力。能够让本地电脑中的资源可以被其他的电脑访问（通俗易懂）



#### 2.3 常见的JavaWeb服务器



| 服务器名称 | 描述                                                         |
| :--------: | ------------------------------------------------------------ |
|  WebLogic  | 美国Oracle公司的基于JAVAEE架构的中间件，用于开发、集成、部署和管理大型分布式Web应用、网络应用和数据库应用的Java应用服务器（收费） |
| Websphere  | IBM公司的一个大型的全面支持JAVAEE规范的JAVAEE容器            |
|   tomcat   | 开源的免费的servlet规范的服务器。 它是apache一个Web服务器    |
|   Jboss    | hibernate公司产品，不是开源免费的，是javaee规范的容器        |
|   Nginx    | Nginx ("engine x") 是一个高性能的 HTTP 和 反向代理服务器     |

#### 2.4 tomact介绍

> Tomcat 服务器是一个免费的开放源代码的Web 应用服务器，属于轻量级应用服务器，在中小型系统和并发访问用户不是很多的场合下被普遍使用，是开发和调试JSP 程序的首选。对于一个初学者来说，可以这样认为，当在一台机器上配置好Apache 服务器，可利用它响应HTML（标准通用标记语言下的一个应用）页面的访问请求。 



#### 2.5 tomact的下载

> 对于tomact来说，我们常用的版本只有7.0和8.5版本，而7.0版本存在问题，所有我们下载8.5版本

> tomact8.5官网下载地址：[https://tomcat.apache.org/download-80.cgi](https://tomcat.apache.org/download-80.cgi )（下载解压即可）



#### 2.6 tomact配置

> 1. 将下载好的tomact解压到一个盘的文件夹中
> 2. 保证我们jdk是用JAVA_HOME形式配置的（tomact依赖jdk的这种形式）；在tomcat的安装目录bin文件夹下的catalina.bat中使用了JAVA_HOME，所以，安装 tomcat必须要求系统配置中有JAVA_HOME，如果没有配置，执行startup.bat文件时会 出现闪退效果
> 3. 端口号配置；tomcat默认使用的8080端口，可以进行端口号的修改，修改tomcat的端口号，在 tomcat\conf\server.xml文件, 可以添加80端口,80是http协议默认的端口
> 4. 测试是否安装配置成功；在tomcat的安装目录下有一个bin目录 ，在目录中有一个startup.bat文件执行它。（窗口乱码无视即可）打开浏览器，在浏览器的地址栏上输入 `http://localhost:8080`。 会出现一个猫的界面，打开了即为成功，打不开不能访问页面则失败！
> 5. 注意：在tomact安装路径下打开DOS命令窗口，输入startup.bat，按下Enter也可以启动服务器！

![1586436210934](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200531143040.png)



#### 2.7 关于tomact地址问题

> 我们在使用tomact时会在浏览器地址栏中输入此内容：`http://localhost:8080/`（htttp协议://ip:端口号/资源名称）
>
> 而我们自己的ip地址可以通过DOS命令下键入ipconfig来查询本机ip地址。
>
> **注意：loaclhost是默认本机ip（本地回路地址），所以我们在使用自己电脑的时候常用localhost。关于tomact端口那就是默认端口号8080了！但我们要知道此端口号不是固定写死的，所以在下面章节的知识内会简单的讲到如何修改端口。但是我们还是不推荐这么做的，因为会引起很多问题！**



### 三、Web服务器相关概念



#### 3.1 什么是Web

> Web指的就是网页，我们所说的Web指的是Internet主机(服务器)上的供外界访问的资源 



#### 3.2 Web资源介绍

> Web资源可以分为两种：静态web资源、动态web资源 



#### 3.3 静态Web资源介绍

> 指web页面上供人们浏览的数据，它们始终不变。例如html

> - 优点：
>   * 静态网站开发简易，只需要掌握HTML、CSS和JSP就可以开发 
>   * 静态访问速度快，因为静态网页不需要和任何程序进行交互，更不需要对数据进行处理
> - 缺点：
>   * 静态网站内容无法实时更新，因为网站由一个个的静态HTML网页构成，新增内容只能 通过开发人员修改代码 
>   * 网站内容过多时，每个页面都需要单独制作，需要不断编写和维护HTML页面，增加了 网站开发人员的工作量，提高了运营费用
> - 总结：静态的web资源，只是供人们浏览 



##### 3.3.1 静态Web资源项目介绍

> Web静态项目包含都是静态资源：html、js、css、图片、音频等等（一个静态web项目，肯定都是静态资源）



#### 3.4 动态Web资源介绍

> 指Web页面中内容是由程序产生的，供人们浏览，并且在不同的时间点，数据不一样，并且 还可以实现人与人之间的交互。用到Servlet和JSP等技术

> - 优点：
>   * 维护方便、可以根据用户需求实现各种功能 
>   * 查询信息方便，能存储大量数据，需要时能立即查询
>   * 网站内容可以实时动态更新
>   * 与用户交互性强，提高用户粘性
> - 缺点：
>   * 技术要求高
> - 总结：动态的web资源，可以实现交互



##### 3.4.1 动态Web资源项目介绍

> 一个动态web项目，可以有静态资源（html、js、css、图片、音频等等），可以有动态资源， 必须有WEB-INF文件夹及web.xml



### 四、tomact目录结构



#### 4.1 tomact目录结构介绍

> 注意：我们的动态Web资源项目可以放在webapps文件夹中进行部署的！

| 目录名称（文件夹） | 描述                                                         |
| :----------------: | ------------------------------------------------------------ |
|        bin         | 存放tomact的可执行文件，比如：startup.bat（用来启动服务）    |
|        conf        | tomact的配置文件，比如：server.xml                           |
|        lib         | tomact运行时所依赖的核心jar包，比如：jsp-api.jar、servlet-api.jar |
|        logs        | 存放tomact执行日志                                           |
|        temp        | 存放临时文件                                                 |
|      webapps       | 存放部署Web资源                                              |
|        work        | 存放jsp转义之后的java文件                                    |

![1586436300416](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200531143041.png)



#### 4.2 tomact目录详解（初级面试题）

> **bin：** 该目录下存放的是二进制可执行文件，如果是安装版，那么这个目录下会有两个exe文件：tomcat9.exe、tomcat9w.exe，前者是在控制台下启动Tomcat，后者是弹出UGI窗口启动Tomcat；如果是解压版，那么会有startup.bat和shutdown.bat文件，startup.bat用来启动Tomcat，但需要JDK的配置，shutdawn.bat用来停止Tomcat；

> **conf：** 这是一个非常非常重要的目录，这个目录下有四个最为重要的文件分别是：
>
> **server.xml：** 配置整个服务器信息。例如修改端口号，添加虚拟主机等；
>
> t**omcatusers.xml：** 存储tomcat用户的文件，这里保存的是tomcat的用户名及密码，以及用户的角色信息。可以按着该文件中的注释信息添加tomcat用户，然后就可以在Tomcat主页中进入Tomcat Manager页面了；
>
> **web.xml：** 部署描述符文件，这个文件中注册了很多MIME类型，即文档类型。这些MIME类型是客户端与服务器之间说明文档类型的，如用户请求一个html网页，那么服务器还会告诉客户端浏览器响应的文档是text/html类型的，这就是一个MIME类型。客户端浏览器通过这个MIME类型就知道如何处理它了。当然是在浏览器中显示这个html文件了。但如果服务器响应的是一个exe文件，那么浏览器就不可能显示它，而是应该弹出下载窗口才对。MIME就是用来说明文档的内容是什么类型的！
>
> **context.xml：** 对所有应用的统一配置，通常我们不会去配置它。

> **lib：** Tomcat的类库，里面是一大堆jar文件。如果需要添加Tomcat依赖的jar文件，可以把它放到这个目录中，当然也可以把应用依赖的jar文件放到这个目录中，这个目录中的jar所有项目都可以共享之，但这样你的应用放到其他Tomcat下时就不能再共享这个目录下的Jar包了，所以建议只把Tomcat需要的Jar包放到这个目录下；

> **logs：** 这个目录中都是日志文件，记录了Tomcat启动和关闭的信息，如果启动Tomcat时有错误，那么异常也会记录在日志文件中。

> **temp：** 存放Tomcat的临时文件，这个目录下的东西可以在停止Tomcat后删除！

> **webapps：** 存放web项目的目录，其中每个文件夹都是一个项目；如果这个目录下已经存在了目录，那么都是tomcat自带的项目。其中ROOT是一个特殊的项目，在地址栏中没有给出项目目录时，对应的就是ROOT项目。http://localhost:8080/firstweb，进入示例项目。其中firstweb就是项目名，即文件夹的名字。

> **work：** 运行时生成的文件，最终运行的文件都在这里。通过webapps中的项目生成的！可以把这个目录下的内容删除，再次运行时会生再次生成work目录。当客户端用户访问一个JSP文件时，Tomcat会通过JSP生成Java文件，然后再编译Java文件生成class文件，生成的java和class文件都会存放到这个目录下。

> **LICENSE：** 许可证。

> **NOTICE：** 说明文件。



### 五、Web项目相关问题

> - 问题一：Web应用程序的基本目录结构? 
>
>   * web静态项目
>     + html、js、css、图片...
>   * web动态项目
>     + html、js、css、图片...
>     + WEB-INF文件夹、web.xml文件（核心）
>
> - 问题二：web.xml文件中应该有什么内容? 
>
>   * tomcat\webapps\ROOT包下的web.xml文件是tomact的页面配置
>
>   * 我们前期可以将tomcat\webapps\ROOT应用下的web.xml文件内容复制到我们自己的web.xml文件中使用
>
> - 问题三：如何设置工程的默认访问页面？ 
>
>   * 在tomcat\conf\web.xml文件，将这个文件理解成是我们所有的tomcat下的web应用程序 中的web.xml文件的父类文件。 
>   * 在这段声明就规定了web应用中哪些文件是默认被访问的。如果我们在自己项目的web.xml 文件中将上述内容覆盖了，就可以设置自己项目的默认访问页面。 



### 六、tomcat部署web应用程序 



#### 6.1 tomact部署web应用程序方式

| 部署方式                               |
| -------------------------------------- |
| 一、直接将web应用程序放置到webapps目录 |
| 二、虚拟目录初级版                     |
| 三、 虚拟目录优化版                    |

注意：我们在部署的时候，只要修改一次文件、文件路径或xml配置就需要关闭当前启动的服务器（黑窗口），重新启动！



#### 6.2 部署方式一

> 方式一：直接将web应用程序放置到webapps目录 

**直接将一个web应用程序放置在tomcat/webapps目录下。这时web应用程序目录名称就是 我们访问tomcat下的这个应用程序的名称**



##### 6.2.1 方式一的部署步骤和访问

> 一、将需要部署的项目（dynamicproject：复制的tomact项目中WEB-INF\xml、随便拉了个图片和内容）放在webapps目录下

![1586437731161](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200531143042.png)

> 二、访问步骤

1. 先访问到tomcat容器：`http://localhost:8080/`
2. 访问到项目：`http://localhost:8080/dynamicproject/`
3. 访问到资源：`http://localhost:8080/dynamicproject/a.jpg`（输入地址即可访问a.jpg图片，举一反三访问txt、html）
4. 注意事项：如果访问路径只写到`http://localhost:8080/dynamicproject/`，默认访问index开头的html文件或jsp文件...



#### 6.3 部署方式二

> 方式二：虚拟目录初级版

**将一个不在tomcat下的web应用程序部署加载。可以在tomcat\conf\server.xml文件中配 置，在server.xml文件中的标签中添加一段配置**

```xml
<Context docBase="磁盘路径" path="/项目的访问名称" />
```

**经过以上配置后,在浏览器上可以输入`http://localhost/hello`来访问。但是，在tomcat6以后已经不建议使用了。改动了tomcat的server.xml文件，一旦出错，tomcat容器就炸了! 会有大麻烦的！让你吃不了兜着走！**



##### 6.3.1 方式二的部署步骤和访问

> 一、将需要部署的项目（用的方式一的项目）放在你自己想放的路径中（D:\Code\dynamicproject）

> 二、找到该tomcat\conf\server.xml文件，在**HOST**标签内加入Context标签，如下：

![1586439194739](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200531143043.png)

> 三、重启服务器后，打开网页，地址栏输入`http://localhost:8080/hello/a.txt`即可访问项目中txt文件





#### 6.4 部署方式三（推荐）

> 方式三：虚拟目录优化版 

**在tomcat/conf/Catalina/localhost下创建任意名称的一个xml文件，例如创建一个 good.xml文件，在good.xml中书写**

```xml
<Context docBase="磁盘路径" />
```

**这种方案配置，xml文件的名称就是访问路径，在浏览器中访问`http://localhost/good`就可以。** 

注意：只需要写入一个docBase即可



##### 6.4.1 方式三的部署步骤和访问

> 一、将需要部署的项目（用的方式一的项目）放在你自己想放的路径中（D:\Code\dynamicproject）

> 二、找到tomcat\conf\Catalina\localhost目录，在目录下创建名为good.xml的配置文件。并写入内容如下：
>
> 注意：先写入xml头文件

```xml
<?xml version="1.0" encoding="UTF-8"?>
```

![1586440187018](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200531143044.png)

> 三、重启服务器后，打开网页，地址栏输入`http://localhost:8080/good/`即可访问项目中默认的index.html网页

注意：这时候访问地址就变成了xml文件名称了，此例子中变为了good。举一反三，good/a.txt即可访问文本



#### 6.5 Web动态项目的相关配置

> 问题：默认Web访问地址`http://localhost:8080/dynamicproject`为什么默认访问index.html或index.jsp呢？（`http://localhost:8080/dynamicproject/index.html`、`http://localhost:8080/dynamicproject/index.jsp`）

> 查看tomact安装目录：tomact\conf\web.xml文件，打开xml文件展示出的信息如下：

```xml
	<welcome-file-list>
        <welcome-file>index.html</welcome-file>
        <welcome-file>index.htm</welcome-file>
        <welcome-file>index.jsp</welcome-file>
    </welcome-file-list>
```

> 上述配置代码，是设置tomcat容器中的每个项目的默认页面是index.html、index.htm、index.jsp。所以，自定义的web项目也部署到tomcat容器中，那么就会遵守上述规定！如果我们不想遵守这个规定怎么办呢？答案那就是需要修改xml文件了！



##### 6.5.1 修改默认xml访问配置方式一

> 方式一：直接修改tomcat中的web.xml（即：tomact\conf内包含的web.xml）

```xml
	<welcome-file-list>
        <welcome-file>demo.html</welcome-file>
        <welcome-file>demo.htm</welcome-file>
        <welcome-file>demo.jsp</welcome-file>
    </welcome-file-list>
```

> 注意：我把默认访问文件改为了以demo为名的.html\\.htm\\.jsp文件，这时候我们的项目中就需要有以demo为名的.html\\.htm\\.jsp文件才可以被默认访问。
>
> 但是这样处理存在问题，所有的项目的欢迎页面都会跟随改变！这时候又引申出了一种方式，那么你就别愣着了，去看6.5.2吧！



##### 6.5.2 修改默认xml访问配置方式二

> 方式二：直接修改项目自带的web.xml（即：每一个web动态项目的WEB-INF内包含的web.xml）

```xml
	<welcome-file-list>
        <welcome-file>demo.html</welcome-file>
        <welcome-file>demo.htm</welcome-file>
        <welcome-file>demo.jsp</welcome-file>
    </welcome-file-list>
```

> 注意：方式二修改的web.xml文件是随着项目携带的那个xml文件，所以以上配置仅针对当前项目有效！



##### 6.5.3 项目中WEB-INF\web.xml和tomact\conf\web.xml的关系

> 两者的关系类似于java中的继承关系(父子关系)，如果tomcat中的web.xml的配置无法满足当前的项目的需求，那么就可以更改项目中的web.xml，覆盖tomcat中的web.xml配置。为项目的部署带来的便捷！

> **Java中父子类继承关系回顾：子父类中的方法重写即是父类的方法中的功能无法满足子类的需求，就需要进行方法重写！（两者xml关系同理）**



### 七、在idea下开发Web应用



#### 7.1 idea中创建Web项目教程

> 一、创建idea新项目Create New Project

![1586521750637](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200531143045.png)

> 二、勾选并设置Web项目所需

![1586522111864](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200531143046.png)

> 三、下一步填写项目名称（这一步就不用我说了吧！），填写后点击Finsh完成创建！

![1586522228757](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200531143047.png)

> 四、创建完成！显示如下页面

![1586523520854](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200531143048.png)



#### 7.2 idea中Web项目目录解析

> 首先我们看到的Web项目目录是以下模样

![1586523582517](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200531143049.png)

> 目录解析

|      目录名称      | 描述                                                         |
| :----------------: | ------------------------------------------------------------ |
|      firstweb      | 项目名称                                                     |
|        src         | 储存java代码的目录                                           |
|        web         | 存放web资源的目录，比如：html、js、css、图片、jsp等文件      |
|      WEB-INF       | 存放java文件转译之后的class文件                              |
|  out（目前没有）   | out文件是在你打开tomact服务器后生成的out目录，主要存放服务器部署后的文件 |
| External Libraries | 存放jre、tomact环境（环境里携带所有jar包）                   |

#### 7.3 idea中配置并部署tomact服务器



##### 7.3.1 在Web项目中加入静态资源

> 我们需要在idea中的web文件夹加入并部署一些静态资源，以便部署成功后访问（我这里加入index.html、demo文件并填写信息以便测试）

![1586524664893](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200531143050.png)

![1586524703970](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200531143051.png)



##### 7.3.2 idea中配置tomact服务器

> 一、在idea中启动项中添加tomact服务器

![1586525253663](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200531143052.png)

> 二、输入Tomact服务器名称

![1586525445359](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200531143053.png)

> 三、双击src文件夹或者按照图下点击

![1586525633422](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200531143054.png)



> 四、将Web项目打包成war包（加入war包后你会发现多出来一个war包，点击OK）
>
> 注意：根据本地安装的tomact，会给当前项目生成一个tomact镜像，部署到tomact镜像相当于部署到本地tomact中（在后面部署成功后可以查看镜像所在C盘目录）

![1586525890341](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200531143055.png)

![1586525994721](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200531143056.png)

> 修改的war名称就会改变镜像包内xml文件中的context路径（也就是修改了你在浏览器中的默认访问路径，我这里没有修改，是因为后面有关于war包的问题，大家可以修改试试！）

![1586575970922](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200531143057.png)

> 五、你发现没为什么tomact左上角有一个红色的小叉号❌呢？是因为你没有指定要部署的文件也就是war包，那我们就添加了它！

![1586526880546](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200531143058.png)

![1586526936940](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200531143059.png)

> 六、设置自动更新（On Update action-Redeploy【代表run和debug按钮设置重新部署】；On frame deactivation【代表设置热加载自动更新】）

![1586527159202](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200531143100.png)

> 七、点击run按钮或者Debug按钮，开启服务器并部署项目

![1586527508028](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200531143101.png)

> 打开C盘生成tomact目录

![1586576595948](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200531143102.png)

> 可以看见目录中部署项目的xml文件（上面修改镜像名称即修改了xml中Context路径）

![1586576740160](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200531143103.png)

> 八、浏览器访问部署后的项目（启动服务器并部署成功后会默认弹出浏览器显示默认index.html）

![1586527708799](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200531143104.png)

> 九、试着访问一下我们项目中的demo文件（浏览器地址栏后追加demo即可！）

> 十、关闭服务器就不用说了吧，但是我还是说一下吧！（就是结束程序点击红色小方块或者快捷键Ctrl+F2）



#### 7.4 idea中打包成war包和默认war包的解释

> 因为idea的功能比较强大，所以tomact部署后的项目会存在idea中，储存在out文件的artifacts文件中。而在这个文件中存在就就是war包的形式。如图两个war包，第一个是自己添加的war包，一会我讲它的好处，第二个就是默认的war包了！
>
> **war包的好处就是：** 当我们不使用idea来进行部署的时候，我们的项目是默认放在tomact中的webapps文件中的，那我们就必须复制粘贴这整个文件夹了！如果我们打包成war包，在idea目录中复制粘贴war包到tomact的wabapps文件夹中，然后启动服务器，tomact服务器会自动的帮我们解压war包并部署该项目！而我们放入的是war包，不是在idea内，所以部署该项目的浏览器访问路径会随之变成[localhost:8080/项目名称_war/]()

![1586621655932](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200531143105.png)



### 八、tomact常见错误



#### 8.1 tomact闪退问题

> JAVA_HOME配置问题（解决：startup.bat中最后增加pause，查看错误信息）



#### 8.2 浏览器错误代码404

> 找不到该路径部署项目文件（1.路径写错了 2.没有部署成功，重新部署一下）



#### 8.3 浏览器错误代码500

> 配置文件全限定名错误（需要查看配置文件是否写正确，查出修改即可解决问题）