* [JavaWeb之Servlet基础](#javaweb%E4%B9%8Bservlet%E5%9F%BA%E7%A1%80)
    * [一、初识Servlet](#%E4%B8%80%E5%88%9D%E8%AF%86servlet)
      * [1\.1 Servlet概念](#11-servlet%E6%A6%82%E5%BF%B5)
      * [1\.2 Servlet的核心作用](#12-servlet%E7%9A%84%E6%A0%B8%E5%BF%83%E4%BD%9C%E7%94%A8)
      * [1\.3 Servlet核心目录结构](#13-servlet%E6%A0%B8%E5%BF%83%E7%9B%AE%E5%BD%95%E7%BB%93%E6%9E%84)
        * [1\.3\.1 IDEA工具内创建核心目录结构](#131-idea%E5%B7%A5%E5%85%B7%E5%86%85%E5%88%9B%E5%BB%BA%E6%A0%B8%E5%BF%83%E7%9B%AE%E5%BD%95%E7%BB%93%E6%9E%84)
      * [1\.4 Servlet的开发步骤](#14-servlet%E7%9A%84%E5%BC%80%E5%8F%91%E6%AD%A5%E9%AA%A4)
        * [1\.4\.1 开发步骤](#141-%E5%BC%80%E5%8F%91%E6%AD%A5%E9%AA%A4)
        * [1\.4\.2 web\.xml配置文件添加配置信息](#142-webxml%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E6%B7%BB%E5%8A%A0%E9%85%8D%E7%BD%AE%E4%BF%A1%E6%81%AF)
        * [1\.4\.3 我们的第一个Servlet（MyServlet代码）](#143-%E6%88%91%E4%BB%AC%E7%9A%84%E7%AC%AC%E4%B8%80%E4%B8%AAservletmyservlet%E4%BB%A3%E7%A0%81)
        * [1\.4\.4 解决浏览器输出显示乱码问题](#144-%E8%A7%A3%E5%86%B3%E6%B5%8F%E8%A7%88%E5%99%A8%E8%BE%93%E5%87%BA%E6%98%BE%E7%A4%BA%E4%B9%B1%E7%A0%81%E9%97%AE%E9%A2%98)
        * [1\.4\.5 解决idea控制台乱码](#145-%E8%A7%A3%E5%86%B3idea%E6%8E%A7%E5%88%B6%E5%8F%B0%E4%B9%B1%E7%A0%81)
      * [1\.5 Web中路径问题](#15-web%E4%B8%AD%E8%B7%AF%E5%BE%84%E9%97%AE%E9%A2%98)
        * [1\.5\.1 路径分类](#151-%E8%B7%AF%E5%BE%84%E5%88%86%E7%B1%BB)
        * [1\.5\.2 路径分析](#152-%E8%B7%AF%E5%BE%84%E5%88%86%E6%9E%90)
    * [二、Servlet的使用](#%E4%BA%8Cservlet%E7%9A%84%E4%BD%BF%E7%94%A8)
      * [2\.1 Servlet核心接口和类](#21-servlet%E6%A0%B8%E5%BF%83%E6%8E%A5%E5%8F%A3%E5%92%8C%E7%B1%BB)
        * [2\.1\.1 实现Servlet接口（繁琐）](#211-%E5%AE%9E%E7%8E%B0servlet%E6%8E%A5%E5%8F%A3%E7%B9%81%E7%90%90)
        * [2\.1\.2 继承GenericServlet 抽象类（无协议）](#212-%E7%BB%A7%E6%89%BFgenericservlet-%E6%8A%BD%E8%B1%A1%E7%B1%BB%E6%97%A0%E5%8D%8F%E8%AE%AE)
        * [2\.1\.3 继承HttpServlet抽象类（有协议，推荐使用）](#213-%E7%BB%A7%E6%89%BFhttpservlet%E6%8A%BD%E8%B1%A1%E7%B1%BB%E6%9C%89%E5%8D%8F%E8%AE%AE%E6%8E%A8%E8%8D%90%E4%BD%BF%E7%94%A8)
      * [2\.2 Servlet的两种配置方式](#22-servlet%E7%9A%84%E4%B8%A4%E7%A7%8D%E9%85%8D%E7%BD%AE%E6%96%B9%E5%BC%8F)
        * [2\.2\.1 web\.xml配置方式（支持所有版本）](#221-webxml%E9%85%8D%E7%BD%AE%E6%96%B9%E5%BC%8F%E6%94%AF%E6%8C%81%E6%89%80%E6%9C%89%E7%89%88%E6%9C%AC)
        * [2\.2\.2 注解类WebServlet配置方式（支持3\.0版本以后）](#222-%E6%B3%A8%E8%A7%A3%E7%B1%BBwebservlet%E9%85%8D%E7%BD%AE%E6%96%B9%E5%BC%8F%E6%94%AF%E6%8C%8130%E7%89%88%E6%9C%AC%E4%BB%A5%E5%90%8E)
        * [2\.2\.3 IDEA中快捷创建Servlet类并自动添加注解](#223-idea%E4%B8%AD%E5%BF%AB%E6%8D%B7%E5%88%9B%E5%BB%BAservlet%E7%B1%BB%E5%B9%B6%E8%87%AA%E5%8A%A8%E6%B7%BB%E5%8A%A0%E6%B3%A8%E8%A7%A3)
        * [2\.2\.4 Servlet默认访问欢迎页面配置](#224-servlet%E9%BB%98%E8%AE%A4%E8%AE%BF%E9%97%AE%E6%AC%A2%E8%BF%8E%E9%A1%B5%E9%9D%A2%E9%85%8D%E7%BD%AE)
        * [2\.2\.5 Servlet访问状态码跳转页面设置](#225-servlet%E8%AE%BF%E9%97%AE%E7%8A%B6%E6%80%81%E7%A0%81%E8%B7%B3%E8%BD%AC%E9%A1%B5%E9%9D%A2%E8%AE%BE%E7%BD%AE)
      * [2\.3 获取请求参数](#23-%E8%8E%B7%E5%8F%96%E8%AF%B7%E6%B1%82%E5%8F%82%E6%95%B0)
      * [2\.4 处理获取请求参数乱码问题](#24-%E5%A4%84%E7%90%86%E8%8E%B7%E5%8F%96%E8%AF%B7%E6%B1%82%E5%8F%82%E6%95%B0%E4%B9%B1%E7%A0%81%E9%97%AE%E9%A2%98)
        * [2\.4\.1 表单中产生中文乱码的原因](#241-%E8%A1%A8%E5%8D%95%E4%B8%AD%E4%BA%A7%E7%94%9F%E4%B8%AD%E6%96%87%E4%B9%B1%E7%A0%81%E7%9A%84%E5%8E%9F%E5%9B%A0)
        * [2\.4\.2 解决接收Get请求参数乱码问题](#242-%E8%A7%A3%E5%86%B3%E6%8E%A5%E6%94%B6get%E8%AF%B7%E6%B1%82%E5%8F%82%E6%95%B0%E4%B9%B1%E7%A0%81%E9%97%AE%E9%A2%98)
        * [2\.4\.3 解决接收Post请求参数乱码问题](#243-%E8%A7%A3%E5%86%B3%E6%8E%A5%E6%94%B6post%E8%AF%B7%E6%B1%82%E5%8F%82%E6%95%B0%E4%B9%B1%E7%A0%81%E9%97%AE%E9%A2%98)
      * [2\.5 处理响应后浏览器显示乱码问题](#25-%E5%A4%84%E7%90%86%E5%93%8D%E5%BA%94%E5%90%8E%E6%B5%8F%E8%A7%88%E5%99%A8%E6%98%BE%E7%A4%BA%E4%B9%B1%E7%A0%81%E9%97%AE%E9%A2%98)
        * [2\.5\.1 响应后浏览器页面显示乱码的原因](#251-%E5%93%8D%E5%BA%94%E5%90%8E%E6%B5%8F%E8%A7%88%E5%99%A8%E9%A1%B5%E9%9D%A2%E6%98%BE%E7%A4%BA%E4%B9%B1%E7%A0%81%E7%9A%84%E5%8E%9F%E5%9B%A0)
        * [2\.5\.2 解决响应后浏览器页面显示乱码问题](#252-%E8%A7%A3%E5%86%B3%E5%93%8D%E5%BA%94%E5%90%8E%E6%B5%8F%E8%A7%88%E5%99%A8%E9%A1%B5%E9%9D%A2%E6%98%BE%E7%A4%BA%E4%B9%B1%E7%A0%81%E9%97%AE%E9%A2%98)
    * [三、Servlet与JDBC集成的综合案例](#%E4%B8%89servlet%E4%B8%8Ejdbc%E9%9B%86%E6%88%90%E7%9A%84%E7%BB%BC%E5%90%88%E6%A1%88%E4%BE%8B)
      * [db\.properties配置文件](#dbproperties%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6)
      * [数据库](#%E6%95%B0%E6%8D%AE%E5%BA%93)
      * [entity实体类](#entity%E5%AE%9E%E4%BD%93%E7%B1%BB)
      * [utils工具类](#utils%E5%B7%A5%E5%85%B7%E7%B1%BB)
      * [UserDao接口](#userdao%E6%8E%A5%E5%8F%A3)
      * [UserDaoImpl实体类](#userdaoimpl%E5%AE%9E%E4%BD%93%E7%B1%BB)
      * [UserService接口](#userservice%E6%8E%A5%E5%8F%A3)
      * [UserServiceImpl实体类](#userserviceimpl%E5%AE%9E%E4%BD%93%E7%B1%BB)
      * [GetAllUserServlet](#getalluserservlet)
      * [InsertUserServlet](#insertuserservlet)
    * [四、页面跳转](#%E5%9B%9B%E9%A1%B5%E9%9D%A2%E8%B7%B3%E8%BD%AC)
      * [4\.1 重定向](#41-%E9%87%8D%E5%AE%9A%E5%90%91)
        * [4\.1\.1 重定向实现原理](#411-%E9%87%8D%E5%AE%9A%E5%90%91%E5%AE%9E%E7%8E%B0%E5%8E%9F%E7%90%86)
        * [4\.1\.2 重定向的特点](#412-%E9%87%8D%E5%AE%9A%E5%90%91%E7%9A%84%E7%89%B9%E7%82%B9)
        * [4\.1\.3 利用重定向实现页面跳转](#413-%E5%88%A9%E7%94%A8%E9%87%8D%E5%AE%9A%E5%90%91%E5%AE%9E%E7%8E%B0%E9%A1%B5%E9%9D%A2%E8%B7%B3%E8%BD%AC)
        * [4\.1\.4 重定向的第二种方式](#414-%E9%87%8D%E5%AE%9A%E5%90%91%E7%9A%84%E7%AC%AC%E4%BA%8C%E7%A7%8D%E6%96%B9%E5%BC%8F)
      * [4\.2 请求转发](#42-%E8%AF%B7%E6%B1%82%E8%BD%AC%E5%8F%91)
        * [4\.2\.1 请求转发实现原理](#421-%E8%AF%B7%E6%B1%82%E8%BD%AC%E5%8F%91%E5%AE%9E%E7%8E%B0%E5%8E%9F%E7%90%86)
        * [4\.2\.2 请求转发的特点](#422-%E8%AF%B7%E6%B1%82%E8%BD%AC%E5%8F%91%E7%9A%84%E7%89%B9%E7%82%B9)
        * [4\.2\.3 利用请求转发实现功能](#423-%E5%88%A9%E7%94%A8%E8%AF%B7%E6%B1%82%E8%BD%AC%E5%8F%91%E5%AE%9E%E7%8E%B0%E5%8A%9F%E8%83%BD)
      * [4\.3 response对象操作响应行和响应头](#43-response%E5%AF%B9%E8%B1%A1%E6%93%8D%E4%BD%9C%E5%93%8D%E5%BA%94%E8%A1%8C%E5%92%8C%E5%93%8D%E5%BA%94%E5%A4%B4)
        * [4\.3\.1 操作响应行](#431-%E6%93%8D%E4%BD%9C%E5%93%8D%E5%BA%94%E8%A1%8C)
          * [4\.3\.1\.1 操作正常的响应状态码](#4311-%E6%93%8D%E4%BD%9C%E6%AD%A3%E5%B8%B8%E7%9A%84%E5%93%8D%E5%BA%94%E7%8A%B6%E6%80%81%E7%A0%81)
          * [4\.3\.1\.2 操作错误的响应状态码](#4312-%E6%93%8D%E4%BD%9C%E9%94%99%E8%AF%AF%E7%9A%84%E5%93%8D%E5%BA%94%E7%8A%B6%E6%80%81%E7%A0%81)
        * [4\.3\.2 操作响应头](#432-%E6%93%8D%E4%BD%9C%E5%93%8D%E5%BA%94%E5%A4%B4)
          * [4\.3\.2\.1 添加新值](#4321-%E6%B7%BB%E5%8A%A0%E6%96%B0%E5%80%BC)
          * [4\.3\.2\.2 直接赋值](#4322-%E7%9B%B4%E6%8E%A5%E8%B5%8B%E5%80%BC)
        * [4\.4 页面的定时跳转](#44-%E9%A1%B5%E9%9D%A2%E7%9A%84%E5%AE%9A%E6%97%B6%E8%B7%B3%E8%BD%AC)
      * [4\.5 Request对象操作请求行、请求头和请求参数](#45-request%E5%AF%B9%E8%B1%A1%E6%93%8D%E4%BD%9C%E8%AF%B7%E6%B1%82%E8%A1%8C%E8%AF%B7%E6%B1%82%E5%A4%B4%E5%92%8C%E8%AF%B7%E6%B1%82%E5%8F%82%E6%95%B0)
        * [4\.5\.1 操作请求行](#451-%E6%93%8D%E4%BD%9C%E8%AF%B7%E6%B1%82%E8%A1%8C)
          * [4\.5\.1\.1 获取请求路径](#4511-%E8%8E%B7%E5%8F%96%E8%AF%B7%E6%B1%82%E8%B7%AF%E5%BE%84)
          * [4\.5\.1\.2 获取请求方式](#4512-%E8%8E%B7%E5%8F%96%E8%AF%B7%E6%B1%82%E6%96%B9%E5%BC%8F)
          * [4\.5\.1\.3 获取请求地址上面的IP地址](#4513-%E8%8E%B7%E5%8F%96%E8%AF%B7%E6%B1%82%E5%9C%B0%E5%9D%80%E4%B8%8A%E9%9D%A2%E7%9A%84ip%E5%9C%B0%E5%9D%80)
          * [4\.5\.1\.4 获取请求地址上面的端口号](#4514-%E8%8E%B7%E5%8F%96%E8%AF%B7%E6%B1%82%E5%9C%B0%E5%9D%80%E4%B8%8A%E9%9D%A2%E7%9A%84%E7%AB%AF%E5%8F%A3%E5%8F%B7)
          * [4\.5\.1\.5 获取请求地址后面拼接的内容（GET请求）](#4515-%E8%8E%B7%E5%8F%96%E8%AF%B7%E6%B1%82%E5%9C%B0%E5%9D%80%E5%90%8E%E9%9D%A2%E6%8B%BC%E6%8E%A5%E7%9A%84%E5%86%85%E5%AE%B9get%E8%AF%B7%E6%B1%82)
        * [4\.5\.2 操作请求头](#452-%E6%93%8D%E4%BD%9C%E8%AF%B7%E6%B1%82%E5%A4%B4)
          * [4\.5\.2\.1 获取User\-Agent（浏览器类型）](#4521-%E8%8E%B7%E5%8F%96user-agent%E6%B5%8F%E8%A7%88%E5%99%A8%E7%B1%BB%E5%9E%8B)
        * [4\.5\.3 操作请求参数【重点】](#453-%E6%93%8D%E4%BD%9C%E8%AF%B7%E6%B1%82%E5%8F%82%E6%95%B0%E9%87%8D%E7%82%B9)
          * [4\.5\.3\.1 获取请求参数](#4531-%E8%8E%B7%E5%8F%96%E8%AF%B7%E6%B1%82%E5%8F%82%E6%95%B0)
          * [4\.5\.3\.2 获取所有请求参数名称](#4532-%E8%8E%B7%E5%8F%96%E6%89%80%E6%9C%89%E8%AF%B7%E6%B1%82%E5%8F%82%E6%95%B0%E5%90%8D%E7%A7%B0)
          * [4\.5\.3\.3 获取指定参数的所有值](#4533-%E8%8E%B7%E5%8F%96%E6%8C%87%E5%AE%9A%E5%8F%82%E6%95%B0%E7%9A%84%E6%89%80%E6%9C%89%E5%80%BC)
          * [4\.5\.3\.4 获取请求参数对应的Map集合](#4534-%E8%8E%B7%E5%8F%96%E8%AF%B7%E6%B1%82%E5%8F%82%E6%95%B0%E5%AF%B9%E5%BA%94%E7%9A%84map%E9%9B%86%E5%90%88)
    * [五、Servlet的生命周期](#%E4%BA%94servlet%E7%9A%84%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F)
      * [5\.1 什么是生命周期？](#51-%E4%BB%80%E4%B9%88%E6%98%AF%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F)
      * [5\.2 Servlet生命周期的四个阶段](#52-servlet%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E7%9A%84%E5%9B%9B%E4%B8%AA%E9%98%B6%E6%AE%B5)
        * [5\.2\.1 HttpServlet生命周期演示](#521-httpservlet%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E6%BC%94%E7%A4%BA)
    * [六、Sevlet线程安全问题](#%E5%85%ADsevlet%E7%BA%BF%E7%A8%8B%E5%AE%89%E5%85%A8%E9%97%AE%E9%A2%98)
      * [6\.1 线程安全问题](#61-%E7%BA%BF%E7%A8%8B%E5%AE%89%E5%85%A8%E9%97%AE%E9%A2%98)
      * [6\.2 如何保证线程安全问题](#62-%E5%A6%82%E4%BD%95%E4%BF%9D%E8%AF%81%E7%BA%BF%E7%A8%8B%E5%AE%89%E5%85%A8%E9%97%AE%E9%A2%98)
        * [6\.2\.1 加synchronized同步代码块（锁）](#621-%E5%8A%A0synchronized%E5%90%8C%E6%AD%A5%E4%BB%A3%E7%A0%81%E5%9D%97%E9%94%81)
        * [6\.2\.2 实现SingleThreadModle接口](#622-%E5%AE%9E%E7%8E%B0singlethreadmodle%E6%8E%A5%E5%8F%A3)
        * [6\.2\.3 使用局部变量](#623-%E4%BD%BF%E7%94%A8%E5%B1%80%E9%83%A8%E5%8F%98%E9%87%8F)
    * [七、Servlet初始化参数及配置](#%E4%B8%83servlet%E5%88%9D%E5%A7%8B%E5%8C%96%E5%8F%82%E6%95%B0%E5%8F%8A%E9%85%8D%E7%BD%AE)
      * [7\.1 什么是Servlet初始化参数](#71-%E4%BB%80%E4%B9%88%E6%98%AFservlet%E5%88%9D%E5%A7%8B%E5%8C%96%E5%8F%82%E6%95%B0)
      * [7\.2 了解Servlet初始化参数机制](#72-%E4%BA%86%E8%A7%A3servlet%E5%88%9D%E5%A7%8B%E5%8C%96%E5%8F%82%E6%95%B0%E6%9C%BA%E5%88%B6)
      * [7\.3 Servlet初始化参数配置方式](#73-servlet%E5%88%9D%E5%A7%8B%E5%8C%96%E5%8F%82%E6%95%B0%E9%85%8D%E7%BD%AE%E6%96%B9%E5%BC%8F)
        * [7\.3\.1 xml配置文件配置初始化参数](#731-xml%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E9%85%8D%E7%BD%AE%E5%88%9D%E5%A7%8B%E5%8C%96%E5%8F%82%E6%95%B0)
      * [7\.3\.2 使用注解配置初始化参数](#732-%E4%BD%BF%E7%94%A8%E6%B3%A8%E8%A7%A3%E9%85%8D%E7%BD%AE%E5%88%9D%E5%A7%8B%E5%8C%96%E5%8F%82%E6%95%B0)

# JavaWeb之Servlet基础

------



### 一、初识Servlet



#### 1.1 Servlet概念

> Servlet（Server Applet）是Java Servlet的简称，称为小服务程序或服务连接器，用Java编写的服务器端程序，具有独立于平台和协议的特性，主要功能在于交互式地浏览和生成数据，生成动态Web内容。 简单来说，Servlet是服务器端的一段程序（代码、功能实现），可交互式的处理客户端发送到服务器的请求，并完成操作响应。并支持动态网页技术。JavaWeb程序开发的基础，JavaEE规范（一套接口）的一个组成部分。它是由服务器厂商实现的。



#### 1.2 Servlet的核心作用

> 1. 接受客户端请求，完成操作任务
> 2. 动态生成网页（页面数据可变）
> 3. 将包含操作结果的动态网页响应给客户端



#### 1.3 Servlet核心目录结构

> —**web** ：存放需要部署的网站项目
>
> ——**WEB-INF** ：核心内容，分别是以下内容
>
> ———**classes** ：存放.class文件（XxxServlet.class）
>
> ———**lib** ：储存所需jar包
>
> ———**web.xml** ：web配置文件
>
> ——**index.html/index.jsp.index.css/images等** 
>
> **见idea目录结构如下图：** （因为idea会自动处理部署的文件并打包成war包的形式储存在out文件中，所以我们在使用IDEA时不用自己创建classes文件）

![1586671871379](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200530105353.png)

#### 1.3.1 IDEA工具内创建核心目录结构

> 因为我们使用的是idea，如果去项目目录创建该Servlet目录结构过于繁琐，所以我们可以使用idea在工具内创建目录结构（可以在配置tomact时提前创建好都是OK的！）

![1586671841904](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200530105354.png)



#### 1.4 Servlet的开发步骤



##### 1.4.1 开发步骤

> 1. 搭建开发环境，并创建Servlet核心目录结构
> 2. 实现javax.serlvet.Servlet接口，覆盖5个方法（我在1.4.3里的每个方法上做了详细的注释）
> 3. 在核心的servlet()方法中书写输出语句，验证访问结果
> 4. 将编译后的.class文件放置在WEB-INF/classes中
> 5. web.xml文件中添加配置信息



> ***注意：***
>
> **Java web工程下的web就是工程的发布文件夹，发布时会把该文件夹发布到idea项目下的out文件夹里artifacts。开发时classes文件存放路径为out文件夹下production文件夹下**
>
> **鉴于我们使用的是IDEA集成开发工具，会自动处理文件放在idea并放在production文件夹内；而Eclipse不同，他会自动处理文件并放在tomact容器中的指定文件夹内，所以开发步骤作为了解，但是也可以自己动手试试！**（后面我贴了一张图，可以去看一下！至于关于war包的情况不了解，可以去翻看tomact教科书系列文章）
>
> 在使用DOS命令行去编译执行Web项目时，我们需要将Servlet相关的jar包 完整路径\lib\servlet-api.jar 配置到CLASSPATH中。）
>
> 如果配置了环境还出现引用包的问题，那我们就可以选择带包编译或者不带包编译了。如下：
>
> 带包编译：**javac -d . -classpath D:\tomcat\apache-tomcat-8.5.45\lib\servlet-api.jar MyServlet.java**
>
> 不带包编译： **javac -classpath D:\apache-tomcat-7.0.42\lib\servlet-api.jar MyServlet.java**

![1586673666366](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200530105355.png)



##### 1.4.2 web.xml配置文件添加配置信息

> 解释放在了配置信息中，你们看注释即可理解！

```xml
<?xml version="1.0" encoding="UTF-8"?>
<web-app xmlns="http://xmlns.jcp.org/xml/ns/javaee"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/javaee http://xmlns.jcp.org/xml/ns/javaee/web-app_4_0.xsd"
         version="4.0">
	<!--下面两个标签，写在web-app标签内-->
	<!--Servlet配置-->
    <servlet>
        <!--Servlet的全称类名，通过名称找到对应的Servlet，因为的配置文件中可能存在很多Servlet，他需要一个可识别的名称标签-->
        <servlet-name>myservlet</servlet-name>
        <!--访问实际的类，这里需要写全限定名-->
        <servlet-class>com.mylifes1110.java.MyServlet</servlet-class>
    </servlet>
	<!--映射配置  -->
    <servlet-mapping>
        <!--同上，Servlet名称-->
        <servlet-name>myservlet</servlet-name>
        <!--URL路径访问名称，比如：localhost:8080/firstservlet/test（这里访问就需要在地址栏上假如test）-->
        <url-pattern>/test</url-pattern>
    </servlet-mapping>
</web-app>
```



##### 1.4.3 我们的第一个Servlet（MyServlet代码）

> 实现javax.serlvet.Servlet接口，覆盖5个方法，标有详细注释

```java
package com.mylifes1110.java;

import javax.servlet.*;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Date;

/**
 * Servlet
 * 实现Servlet接口中的所有方法
 */
public class MyServlet implements Servlet {
    
    /**
     * 实例化（调用构造器，可以省略，但是要知道）
     */
    public MyServlet() {
        //默认无参构造
    }
    
    /**
     * 初始化方法
     *
     * @param servletConfig 包含 servlet 的配置和初始化参数的 ServletConfig 对象
     * @throws ServletException 如果发生妨碍 servlet 正常操作的异常
     */
    @Override
    public void init(ServletConfig servletConfig) throws ServletException {
        //Servlet初始化工作
    }

    /**
     * 获取Servlet配置信息
     *
     * @return 返回 ServletConfig 对象，该对象包含此 servlet 的初始化和启动参数。返回的 ServletConfig 对象是传递给 init 方法的对象。
     */
    @Override
    public ServletConfig getServletConfig() {
        return null;
    }

    /**
     * 提供服务
     * <p>
     * 由 servlet 容器调用，以允许 servlet 响应某个请求。
     * 此方法仅在 servlet 的 init() 方法成功完成之后调用。
     * 应该为抛出或发送错误的 servlet 设置响应的状态代码。
     *
     * @param servletRequest  包含客户端请求的 ServletRequest 对象
     * @param servletResponse 包含 servlet 的响应的 ServletResponse 对象
     * @throws ServletException 如果发生妨碍 servlet 正常操作的异常
     * @throws IOException      果发生输入或输出异常
     */
    @Override
    public void service(ServletRequest servletRequest, ServletResponse servletResponse) throws ServletException, IOException {
        //请求相关内容    ServletRequest  ;   相应相关内容  ServletResponse
        /**
         * 在控制台内打印输出
         */
        System.out.println("这是我的第一个Servlet！");

        /**
         * 利用输出流输出系统时间，在浏览器中显示
         */
        PrintWriter printWriter = servletResponse.getWriter();
        Date date = new Date();
        printWriter.println(date);
        printWriter.close();

        /**
         * 利用流输出信息在浏览器内显示
         * 解决浏览器显示乱码问题
         */
        servletResponse.setContentType("text/html;charset=utf-8");
        servletResponse.getWriter().println("这是我的第一个Servlet");

    }

    /**
     * 返回有关 servlet 的信息，比如作者、版本和版权。
     * <p>
     * 此方法返回的字符串应该是纯文本，不应该是任何种类的标记（比如 HTML、XML，等等）。
     *
     * @return 包含 servlet 信息的 String
     */
    @Override
    public String getServletInfo() {
        return null;
    }

    /**
     * 销毁（清除所有资源）
     * <p>
     * 由 servlet 容器调用，指示将从服务中取出该 servlet。
     * 此方法仅在 servlet 的 service 方法已退出或者在过了超时期之后调用一次。
     * 在调用此方法之后，servlet 容器不会再对此 servlet 调用 service 方法。
     * 此方法为 servlet 提供了一个清除持有的所有资源（比如内存、文件句柄和线程）的机会，并确保任何持久状态都与内存中该 servlet 的当前状态保持同步。
     */
    @Override
    public void destroy() {

    }
}
```

> 地址栏输入：`http://localhost:8080/firstservlet/test` （firstservlet是项目资源名称、test是Servlet名称）





##### 1.4.4 解决浏览器输出显示乱码问题

```java
		/**
         * 利用流输出信息在浏览器内显示
         * 解决浏览器显示乱码问题
         */
        servletResponse.setContentType("text/html;charset=utf-8");
        servletResponse.getWriter().println("这是我的第一个Servlet");
```



##### 1.4.5 解决idea控制台乱码 

```xml
-Dfile.encoding=utf-8
```

![1586674172929](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200530105356.png)



#### 1.5 Web中路径问题



##### 1.5.1 路径分类

> 关于路径分类有这么几种：**绝对路径**、**相对路径**和**根路径**



##### 1.5.2 路径分析

> **绝对路径** ：用在不同网站之间跳转，比如：`http://www.baidu.com.image/sky.png`

> **相对路径** ：用在同一网站中，比如：image/1.jpg，仅限静态资源，如果页面比较多，并且使用框架，会出现混乱

> **根路径** ：根指定就是主机名（服务器）
>
> 比如：/servletdemo/loginservlet，如果在浏览器中，/ 表示主机名`http://localhost:8080/`
>
> 比如：/loginservlet，如果在服务器中，/ 表示项目路径/servletdemo



### 二、Servlet的使用



#### 2.1 Servlet核心接口和类

> **关于使用Servlet有三种方法：** 实现Servlet接口、继承GenericServlet 抽象类、继承HttpServlet抽象类



##### 2.1.1 实现Servlet接口（繁琐）

> 关于实现Servlet接口覆盖其所有方法，其实在上面的1.4.3章节中已经写过了，但是我们现在再写一遍！

```java
package com.mylifes1110.java;

import javax.servlet.*;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Date;

/**
 * Servlet
 * 实现Servlet接口中的所有方法
 */
public class MyServlet implements Servlet {
    /**
     * 初始化方法
     *
     * @param servletConfig 包含 servlet 的配置和初始化参数的 ServletConfig 对象
     * @throws ServletException 如果发生妨碍 servlet 正常操作的异常
     */
    @Override
    public void init(ServletConfig servletConfig) throws ServletException {
        //Servlet初始化工作
    }

    /**
     * 获取Servlet配置信息
     *
     * @return 返回 ServletConfig 对象，该对象包含此 servlet 的初始化和启动参数。返回的 ServletConfig 对象是传递给 init 方法的对象。
     */
    @Override
    public ServletConfig getServletConfig() {
        return null;
    }

    /**
     * 提供服务
     * <p>
     * 由 servlet 容器调用，以允许 servlet 响应某个请求。
     * 此方法仅在 servlet 的 init() 方法成功完成之后调用。
     * 应该为抛出或发送错误的 servlet 设置响应的状态代码。
     *
     * @param servletRequest  包含客户端请求的 ServletRequest 对象
     * @param servletResponse 包含 servlet 的响应的 ServletResponse 对象
     * @throws ServletException 如果发生妨碍 servlet 正常操作的异常
     * @throws IOException      果发生输入或输出异常
     */
    @Override
    public void service(ServletRequest servletRequest, ServletResponse servletResponse) throws ServletException, IOException {
        //请求相关内容    ServletRequest  ;   相应相关内容  ServletResponse
        /**
         * 在控制台内打印输出
         */
        System.out.println("这是我的第一个Servlet！");

        /**
         * 利用输出流输出系统时间，在浏览器中显示
         */
        PrintWriter printWriter = servletResponse.getWriter();
        Date date = new Date();
        printWriter.println(date);
        printWriter.close();

        /**
         * 利用流输出信息在浏览器内显示
         * 解决浏览器显示乱码问题
         */
        servletResponse.setContentType("text/html;charset=utf-8");
        servletResponse.getWriter().println("这是我的第一个Servlet");

    }

    /**
     * 返回有关 servlet 的信息，比如作者、版本和版权。
     * <p>
     * 此方法返回的字符串应该是纯文本，不应该是任何种类的标记（比如 HTML、XML，等等）。
     *
     * @return 包含 servlet 信息的 String
     */
    @Override
    public String getServletInfo() {
        return null;
    }

    /**
     * 销毁（清除所有资源）
     * <p>
     * 由 servlet 容器调用，指示将从服务中取出该 servlet。
     * 此方法仅在 servlet 的 service 方法已退出或者在过了超时期之后调用一次。
     * 在调用此方法之后，servlet 容器不会再对此 servlet 调用 service 方法。
     * 此方法为 servlet 提供了一个清除持有的所有资源（比如内存、文件句柄和线程）的机会，并确保任何持久状态都与内存中该 servlet 的当前状态保持同步。
     */
    @Override
    public void destroy() {

    }
}
```

> 我们看到了实现Servlet接口的方法来使用Servlet。其中我们可以看到5个方法，分别是初始化、获取配置、提供服务、返回信息以及销毁。而我们有没有发现5个方法中有对我们来说有不是必须全部写在里面的方法呢？或者是可以优化，把某个方法封装来实现复用呢？其实有的，5个方法中初始化和销毁我们可以封装一下，实现多个Servlet之间复用。而获取配置、返回信息感觉是没有必要的。所以我们引入了GenericServlet抽象类。那么继承这个抽象类有什么好处呢？会比我们实现Servlet接口更简单化吗？继续向下看吧那就！



##### 2.1.2 继承GenericServlet 抽象类（无协议）

> GenericServlet的内部也实现了Servlet接口，并重写了初始化、获取配置、返回信息、销毁方法，有没有发现少了一个提供服务呢？它的做法很聪明，重写了我们想要简化的那四个方法并返回了默认没有的值（空值等），这就相当于我们实现了Servlet接口，并没有给他们编写方法体代码而已。那么少的那个提供服务，它做了什么呢？它的做法是把提供服务的方法用abstract修饰成了抽象类，所以我们继承这个类必须覆盖该抽象方法。
>
> 以上所述，GenericServlet 使编写 Servlet 变得更容易。它提供生命周期方法 init 和 destroy 的简单实现，要编写一般的 Servlet，只需重写抽象 service 方法提供服务即可。 （那么这个代码就简化了太多了，看代码吧！）

```java
package com.mylifes1110.java;

import javax.servlet.GenericServlet;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import java.io.IOException;

/**
 * 继承GenericServlet抽象类并重写service方法提供服务
 */
public class MyServlet2 extends GenericServlet {
    @Override
    public void service(ServletRequest servletRequest, ServletResponse servletResponse) throws ServletException, IOException {
        System.out.println("提供服务！");
    }
}
```

> 那么我说的你们不信的话，我给你们再贴一下源码，你们可以看看，或者觉得透着些。

![1586694220967](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200530105357.png)

> destroy销毁方法

![1586694237725](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200530105358.png)

> getServletConfig获取配置方法（this.config在最上面声明是这样声明空值的：**private transient ServletConfig config;**）

![1586694282988](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200530105359.png)

> getServletInfo返回信息方法

![1586694328443](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200530105400.png)

> init初始化方法

![1586694406561](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200530105401.png)

> 然而主角一般都是最后登场，那就是service提供服务方法被写为抽象方法

![1586694782083](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200530105402.png)

> 这样来，我们不需要那4个方法时，就可以直接覆盖service方法去提供服务，假如需要某一个方法时，我们可以直接选择性的重写父类方法即可！然而小伙伴们有没有想过，GenericServlet只是定义了一般的、与协议无关的servlet，而编写基于Web上的HTTP协议下的servlet，所以GenericServlet与协议无关是不安全的，鉴于目前HTTP和HTTPS的广泛使用，市面上很少有Web不使用HTTP协议的。那么这个问题来的这么突然，我们怎么办呢？有没有更好的使用Servlet的方法又安全、又简单化呢？答案很明显，在上面我介绍了三种使用Servlet的方法，现在只介绍了两种，那么答案显而易见就是第三种方法了。于是，我们强大的HttpServlet抽象类登场了！（我发现主角总是最后登场的，哈哈！）



##### 2.1.3 继承HttpServlet抽象类（有协议，推荐使用）

> HttpServlet抽象类的内部继承了GenericServlet抽象类（证明HttpServlet有了上面我们说到的那四个方法），并扩展提供了适用于Web站点的HTTP协议的几个方法，也就是说HttpServlet的子类至少必须重写一个方法，该方法通常是如下这几个方法：
>
> - `doGet`，如果 servlet 支持 HTTP GET 请求  
> - `doPost`，用于 HTTP POST 请求  
> - `doPut`，用于 HTTP PUT 请求  
> - `doDelete`，用于 HTTP DELETE 请求  
> - `init` 和 `destroy`，用于管理 servlet 的生命周期内保存的资源  
> - `getServletInfo`，servlet 使用它提供有关其自身的信息 
>
> 注意：因为我们是继承了GenericServlet抽象类，所以没有理由再去重写 `service` 方法。`service` 通过将标准 HTTP 请求分发给每个 HTTP  请求类型的处理程序方法（上面列出的 `do`*XXX* 方法）来处理它们。（只需要使用扩展的Http的所需方法即可） 

```java
package com.mylifes1110.java;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * 继承HttpServlet抽象类
 */
public class MyServlet3 extends HttpServlet {
    /**
     * doGet    HTTP中Get请求
     * doPost   HTTP中Post请求
     */

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
//        super.doGet(req, resp);
        /**
         * 当接受参数时，我们不使用Get请求，就在内部调用doPost方法，这样传来参数后，就避免了使用Get请求方式（默认使用一个请求方式）
         */
        doPost(req, resp);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
       	resp.getWriter().println("这是我的第一个Servlet！");
    }
}
```

> 那我们也看一下源码是怎么实现的！

![1586698012531](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200530105403.png)

![1586698035430](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200530105404.png)

![1586698054555](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200530105405.png)

![1586698068823](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200530105406.png)

> 看到这里，我们上面说到，为什么没有理由去重写service方法呢，在这里我们去做解释！看源码！

![1586698403225](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200530105407.png)

> 你会发现这个service方法参数是父类请求、响应的参数。而传入参数后做了强转为子类参数进行使用（因为父类参数是不可以使用的，我们使用的是关于Http的参数），又调用了this.service方法，我们会想这不是自己调用自己陷进去一种死循环调用吗？然而源码内还提供了一个传入子类参数的service方法。如下：

![1586698900106](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200530105408.png)

> 在上面的那个service方法中**this.service(request, response);**这里我们调用的是哪一个service方法呢？然后这里我们就会想到了JavaSE中的多态，一个传入父类参数的service，还有一个传入子类参数的service方法。至于选择哪一个，就看我们传入的参数了。它会精确匹配参数类型而选择传入哪一个service方法中。而这个传入子类参数的service方法内做了什么呢？看我标红的段落，传入请求参数后，调用Method方法，如果调用方法后得到的是GET，那就会调用doGet方法，而doGet方法就是上面我们说到的HTTP中的Get请求！举一反三，其他的Post、Delete等都是如此！

![1586699299873](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200530105409.png)

> 也许就有人会问Method方法是什么，那我正好就粘出来，你们就明白了！（返回一个字符串！）



#### 2.2 Servlet的两种配置方式

> Servlet的两种配置方式为web.xml配置方式和注解配置方式



##### 2.2.1 web.xml配置方式（支持所有版本）

> 容器在进行url-pattern配置的时候是遵循一定的匹配原则的
>
> **url-pattern定义匹配规则，取值说明如下表：**

| url-pattern配置名称 | 配置说明   | 取值说明                                                     |
| :------------------ | ---------- | ------------------------------------------------------------ |
| /具体名称           | 精确匹配   | 只有url路径是具体名称的时候才会触发Servlet                   |
| *.xxx               | 后缀匹配   | 只要是以xxx结尾的就匹配成功并触发Servlet                     |
| /a/b/*              | 目录匹配   | 访问时必须书写/a/b/*路径，\*的话随便输入（必须以"/"开头，以"\*"结尾） |
| /*                  | 通配符匹配 | 匹配所有请求，包含服务器的所有资源                           |
| /                   | 通配符匹配 | 匹配所有请求，包含服务器的所有资源，不包括 .jsp              |

> load-on-startup
>
> 1. 元素标记容器是否应该在web应用程序启动的时候就加载触发Servlet初始化
> 2. 它的值必须是一个整数，表示Servlet被加载的先后顺序
> 3. 如果该元素的值是负数或者没有设置，则容器会当Servlet被请求时在加载
> 4. 如果值为正整数或者0时，表示容器在应用程序启动时就加载并触发了Servlet的初始化。（值越小，Servlet的优先级越高，越先被加载。值相同时，容器自己选择顺序加载）

```xml
<?xml version="1.0" encoding="UTF-8"?>
<web-app xmlns="http://xmlns.jcp.org/xml/ns/javaee"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/javaee http://xmlns.jcp.org/xml/ns/javaee/web-app_4_0.xsd"
         version="4.0">
    <!--Servlet配置-->
    <servlet>
        <!--Servlet属性名称-->
        <servlet-name>myservlet</servlet-name>
        <!--全限定名路径-->
        <servlet-class>com.mylifes1110.java.MyServlet</servlet-class>
        <!--启动时被加载并初始化-->
        <load-on-startup>0</load-on-startup>
    </servlet>
    <!--映射配置-->
    <servlet-mapping>
        <!--Servlet属性名称-->
        <servlet-name>myservlet</servlet-name>
        <!--精确匹配-->
        <url-pattern>/test</url-pattern>
        <!--后缀匹配-->
        <url-pattern>*.myservlet</url-pattern>
        <!--通配符匹配-->
        <url-pattern>/*</url-pattern>
    </servlet-mapping>
</web-app>
```



##### 2.2.2 注解类WebServlet配置方式（支持3.0版本以后）

> @WebServlet有4个属性我们目前可以使用分别是name、value、urlPatterns和loadOnStartup

| 注解属性       |      类型      | 属性说明                                                     |
| -------------- | :------------: | ------------------------------------------------------------ |
| name           |     String     | 指定Servlet 的 name 属性，等价于 `<servlet-name>`。如果没有显式指定，则该 Servlet 的取值即为类的全限定名 |
| value          |    String[]    | 配置url路径（idea为我们设置路径提供了两个属性，根据自己习惯去用） |
| urlPatterns    |    String[]    | 配置url路径，与value作用相同，不能同时使用                   |
| loadOnStartup  |      int       | 配置Servlet的创建的时机， 如果是0或者正数启动程序时，则创建，如果是负数，则访问时创建 |
|                |                |                                                              |
| initParams     | WebInitParam[] | 指定一组 Servlet 初始化参数，等价于`<init-param>`标签。      |
| asyncSupported |    boolean     | 声明 Servlet 是否支持异步操作模式，等价于`<async-supported>` 标签 |
| description    |     String     | 该 Servlet 的描述信息，等价于 `<description>`标签            |
| displayName    |     String     | 该 Servlet 的显示名，通常配合工具使用，等价于 `<display-name>`标签 |

```java
package com.mylifes1110.java;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * value定义了多个url路径：value = {"/hi", "/hello", "*.haha"}
 * Servlet的创建时机设置为：loadOnStartup = 0（启动程序时创建并初始化）
 */
@WebServlet(name = "HiServlet", value = {"/hi", "/hello", "*.haha"}, loadOnStartup = 0)
public class HiServlet extends HttpServlet {
    @Override
    public void init() throws ServletException {
        System.out.println("初始化方法");
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        System.out.println("你又被访问到了！哈哈！");
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doPost(request, response);
    }
}
```



##### 2.2.3 IDEA中快捷创建Servlet类并自动添加注解

> IDEA中为为我们提供了比较快捷的方式来创建一个Servlet类，并自动的添加了@WebServlet注解，而且还覆盖了doPost和doGet方法，如下操作

![1586759058319](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200530105410.png)

![1586759120511](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200530105411.png)

> 创建后类中显示如下内容，没有骗你吧。IDEA是不是很强大，很方便！

![1586759144392](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200530105412.png)



##### 2.2.4 Servlet默认访问欢迎页面配置

> 大家都知道，如果在访问项目的默认路径时，会出现默认的访问页面的，默认访问的页面是index.html、index.htm、index.jsp。这个欢迎页面我们是可以手动干预的，可以利用配置来进行设置我们的欢迎页面显示！我把代码贴在下方，大家可以去试试！

```xml
	<!--默认访问页面设置-->
    <!--随便设置访问页面，按顺序默认访问，如果默认设置的页面都没有的话，就会出现404（找不到资源）-->
    <welcome-file-list>
        <welcome-file>欢迎.html</welcome-file>
        <welcome-file>index.html</welcome-file>
        <welcome-file>index.jsp</welcome-file>
    </welcome-file-list>
```

> 欢迎页面内的文件是顺序被默认访问的，也就是说如果没有欢迎.html，浏览器会默认访问第二个index.html，如果第二个也没有，那就访问第三个index.jsp，如果三个页面都不存在的话，那事情就大了，默认访问会找不到资源，这时我们的老朋友404就出现了！
>
> 这么想，如果客户端在访问的时候，资源不见了出现404显得过于生硬，感觉不太友好！这时候我们就可以使用\<error-page>配置标签来进行错误页面友好提示的默认访问设置！也就是说如果客户端访问资源不存在，我们把客户端遇到的404问题，再跳转一个友好处理404页面的网页！怎么设置，那就看一下2.2.5的知识点吧！



##### 2.2.5 Servlet访问状态码跳转页面设置

> 上面那个不友好显示的问题，我们可以再此处得到解决。友好的提示客户端，你的访问状态码对应的错误提示！可以加入如下配置：

```xml
	<!--注意：我们也可以设置其他访问状态码比如500、302等的跳转页面-->
    <!--访问状态码跳转页面设置-->
    <error-page>
        <!--访问状态码-->
        <error-code>404</error-code>
        <!--跳转页面路径-->
        <location>/error/error404.html</location>
    </error-page>
```

注意：跳转页面的访问路径我是在web文件夹中创建了一个error文件夹专门存放处理访问状态码后跳转页面（该项目中处理404的页面是error404.html）的仓库



#### 2.3 获取请求参数

> html页面代码如下：

注意：当不写method方法时，默认时get请求（如果对get/post请求不了解的，可参考HTTP教科书系列）

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>login</title>
</head>
<body>
<form method="post" action="/firstservlet/login">
    用户名：<input type="text" name="username"><br>
    密码：<input type="password" name="password"><br>
    <input type="submit" value="登录">
</form>
</body>
</html>
```

> Servlet代码如下：

```java
package com.mylifes1110.java.login;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * 获取请求参数并响应结果
 */
@WebServlet(name = "LoginServlet", value = "/login")
public class LoginServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doGet(request, response);
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        /**
         * 解决获取浏览器Post请求后在控制台中解码后的乱码问题
         */
        request.setCharacterEncoding("utf-8");
        /**
         * 获取浏览器发送的请求
         */
        String username = request.getParameter("username");
        String password = request.getParameter("password");
        System.out.println("username : " + username + "\t" + "password : " + password);
        /**
         * 解决服务器响应浏览器后浏览器显示内容乱码问题
         */
        response.setContentType("text/html;charset=utf-8");
        /**
         * 根据传来的用户名和密码响应浏览器登录成功或登录失败
         */
        if (username.equals("ziph") && password.equals("123456")) {
            response.getWriter().println("登录成功！");
        } else {
            response.getWriter().println("登录失败！");
        }
    }
}
```



#### 2.4 处理获取请求参数乱码问题



##### 2.4.1 表单中产生中文乱码的原因

> 乱码问题，实质上就是因为服务器和客户端交互之间编码不一致造成的，所以我们解决乱码问题肯定根据实质出发，把服务器和客户端交互过程中的编码统一不就好了吗，之后就按照此编码进行数据的传输与接收。



##### 2.4.2 解决接收Get请求参数乱码问题

> 在tomact7版本及之前版本
>
> 客户端以UTF-8的编码传输数据到服务器端，而服务器端的request对象使用的是ISO8859-1这个字符编码来接收数据，服务器和客户端沟通的编码不一致因此才会产生中文乱码的。解决办法：在接收到数据后，先获取request对象以ISO8859-1字符编码接收到的原始数据的字节数组，然后通过字节数组以指定的编码构建字符串，解决乱码问题。
>
> Tomcat8的版本及之后Get基本就不会乱码了，因为服务器对url的编码格式可以进行自动转换

```java
package com.mylifes1110.java.login;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * 处理接受Get请求乱码问题
 * 注意：tomact7版本及以前才会出现，Tomact8已经做出优化！
 */
@WebServlet(name = "GetServlet", value = "/login")
public class GetServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doGet(request, response);
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        //获取用户名
        String username = request.getParameter("username");
        username = new String(username.getBytes("ISO8859-1"), "UTF-8");
        //获取密码
        String password = request.getParameter("password");
        System.out.println("username : " + username + "password : " + password);
    }
}
```

> 也可以去修改tomact容器的URLEncoding="utf-8"，但是它只是对GET请求（GET请求中的QueryString）有效，对POST请求（响应正文）无效。
>
> 注意：GET请求是没有请求正文的！



##### 2.4.3 解决接收Post请求参数乱码问题

> 由于客户端是以UTF-8字符编码将表单数据传输到服务器端的，因此服务器也需要设置以UTF-8字符编码进行接收，要想完成此操作，服务器可以直接使用从ServletRequest接口继承而来的"setCharacterEncoding(charset)"方法进行统一的编码设置。

```java
package com.mylifes1110.java.login;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * 处理接收Post请求乱码问题
 * 注意：此设置请求参数的编码格式对Get请求方式无效
 */
@WebServlet(name = "PostServlet")
public class PostServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        //解决接收Post请求参数乱码问题————设置请求参数的编码格式（Get无效）
        request.setCharacterEncoding("utf-8");
        //获取用户名
        String username = request.getParameter("username");
        //获取密码
        String password = request.getParameter("password");
        System.out.println("username : " + username + "password : " + password);
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doPost(request, response);
    }
}
```



#### 2.5 处理响应后浏览器显示乱码问题



##### 2.5.1 响应后浏览器页面显示乱码的原因

> 浏览器识别不到返回的中文编码格式，就会默认使用GB2312。如果返回时UTF-8编码格式，由于编码格式的不同，以至于浏览器页面就会显示乱码。



##### 2.5.2 解决响应后浏览器页面显示乱码问题

> 我们在响应给浏览器信息的时候，要设置浏览器接收响应的编码格式。如下：

> 方式一：设置服务器编码方式并同时设置浏览器的解码方式

```java
response.setContentType("text/html;charset=utf-8");//内容类型；编码格式
```

> 方式二：先设置服务器的编码方式，再设置浏览器的解码方式

```java
response.setCharacterEncoding("utf-8");//输出一个完整的网页
response.setHeader("content-type", "test/html;charset=utf-8");
```





### 三、Servlet与JDBC集成的综合案例

> 此案例引入了mysql、Druild连接池工具和apache的dbUtils工具等相关jar包，联合完成的案例小项目

>  目录结构如下：

![1586842106890](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200530105413.png)

###### db.properties配置文件

```xml
#连接设置
driver=com.mysql.jdbc.Driver
url=jdbc:mysql://localhost:3306/temp?useUnicode=true&characterEncoding=utf8
username=root
password=Mylifes1110
#初始化连接
initialSize=10
#最大连接数量
maxActive=30
#最小空闲连接
minIdle=5
#超时等待时间以毫秒为单位   1000毫秒等于1秒
maxWait=5000
```

###### 数据库

```sql
create table user
(
    id       int auto_increment
        primary key,
    username char(20) not null,
    password char(20) not null,
    phone    char(11) null
);
```

###### entity实体类

```java
package com.mylifes1110.java.entity;

/**
 * @author Ziph
 */
public class User {
    private int id;
    private String username;
    private String password;
    private String phone;

    public User() {
    }

    public User(int id, String username, String password, String phone) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.phone = phone;
    }

    public User(String username, String password, String phone) {
        this.username = username;
        this.password = password;
        this.phone = phone;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", username='" + username + '\'' +
                ", password='" + password + '\'' +
                ", phone='" + phone + '\'' +
                '}';
    }
}
```

###### utils工具类

```java
package com.mylifes1110.java.utils;

import com.alibaba.druid.pool.DruidDataSource;
import com.alibaba.druid.pool.DruidDataSourceFactory;

import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

/**
 * @author Ziph
 */
public class DruidUtils {
    private static DruidDataSource dataSource;
    static {
        Properties properties = new Properties();
        InputStream resourceAsStream = DruidUtils.class.getClassLoader().getResourceAsStream("db.properties");
        try {
            properties.load(resourceAsStream);
            dataSource = (DruidDataSource) DruidDataSourceFactory.createDataSource(properties);
        } catch (IOException e) {
            e.printStackTrace();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
    public static DruidDataSource getDataSource() {
        return dataSource;
    }
}
```

###### UserDao接口

```java
package com.mylifes1110.java.dao;

import com.mylifes1110.java.entity.User;

import java.util.List;

/**
 * @author Ziph
 */
public interface UserDao {
    /**
     * 查询所有用户信息
     *
     * @return 返回用户信息的List集合
     */
    List<User> getAllUser();

    /**
     * 添加用户信息
     *
     * @param user User
     * @return number int
     */
    int insert(User user);
}
```

###### UserDaoImpl实体类

```java
package com.mylifes1110.java.dao.impl;

import com.mylifes1110.java.dao.UserDao;
import com.mylifes1110.java.entity.User;
import com.mylifes1110.java.utils.DruidUtils;
import org.apache.commons.dbutils.QueryRunner;
import org.apache.commons.dbutils.handlers.BeanListHandler;

import java.sql.SQLException;
import java.util.List;

/**
 * @author Ziph
 */
public class UserDaoImpl implements UserDao {
    private QueryRunner queryRunner = new QueryRunner(DruidUtils.getDataSource());

    @Override
    public List<User> getAllUser() {
        try {
            List<User> userList = queryRunner.query("select id, username, password, phone from user", new BeanListHandler<User>(User.class));
            return userList;
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return null;
    }

    @Override
    public int insert(User user) {
        try {
            int insert = queryRunner.update("insert into user (username, password, phone) values (?, ?, ?)", user.getUsername(), user.getPassword(), user.getPhone());
            return insert;
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return 0;
    }
}
```

###### UserService接口

```java
package com.mylifes1110.java.service;

import com.mylifes1110.java.entity.User;

import java.util.List;

/**
 * @author Ziph
 */
public interface UserService {
    /**
     * 实现查询所用用户信息功能
     *
     * @return 返回用户信息的List集合
     */
    List<User> inquireAll();

    /**
     * 实现添加用户信息功能
     *
     * @param user User
     * @return 返回受影响行数
     */
    int add(User user);
}
```

###### UserServiceImpl实体类

```java
package com.mylifes1110.java.service.impl;

import com.mylifes1110.java.dao.UserDao;
import com.mylifes1110.java.dao.impl.UserDaoImpl;
import com.mylifes1110.java.entity.User;
import com.mylifes1110.java.service.UserService;

import java.util.List;

/**
 * @author Ziph
 */
public class UserServiceImpl implements UserService {
    private UserDao userDao = new UserDaoImpl();

    @Override
    public List<User> inquireAll() {
        return userDao.getAllUser();
    }

    @Override
    public int add(User user) {
        return userDao.insert(user);
    }
}
```

###### GetAllUserServlet

```java
package com.mylifes1110.java.servlet;

import com.mylifes1110.java.entity.User;
import com.mylifes1110.java.service.UserService;
import com.mylifes1110.java.service.impl.UserServiceImpl;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

/**
 * @author Ziph
 */
@WebServlet(name = "GetAllUserServlet", value = "/getAll")
public class GetAllUserServlet extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doGet(request, response);
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        //1.调用Service
        response.setContentType("text/html;charset=utf-8");
        UserService userService = new UserServiceImpl();
        List<User> userList = userService.inquireAll();
        PrintWriter printWriter = response.getWriter();
        //页面
        printWriter.println("<html>");
        printWriter.println("<head>");
        printWriter.println("<meta charset='utf-8' />");
        printWriter.println("<title>查询所有</title>");
        printWriter.println("<body>");
        printWriter.println("<table border='1'>");
        printWriter.println("<tr>");
        printWriter.println("<th>编号</th>");
        printWriter.println("<th>用户名</th>");
        printWriter.println("<th>密码</th>");
        printWriter.println("<th>手机号</th>");
        printWriter.println("</tr>");
        for (User user : userList) {
            printWriter.println("<tr>");
            printWriter.println("<td>");
            printWriter.println(user.getId());
            printWriter.println("</td>");
            printWriter.println("<td>");
            printWriter.println(user.getUsername());
            printWriter.println("</td>");
            printWriter.println("<td>");
            printWriter.println(user.getPassword());
            printWriter.println("</td>");
            printWriter.println("<td>");
            printWriter.println(user.getPhone());
            printWriter.println("</td>");
            printWriter.println("</tr>");
        }
        printWriter.println("</table>");
        printWriter.println("</body>");
        printWriter.println("</head>");
        printWriter.println("</html>");
    }
}
```

###### InsertUserServlet

```java
package com.mylifes1110.java.servlet;

import com.mylifes1110.java.entity.User;
import com.mylifes1110.java.service.UserService;
import com.mylifes1110.java.service.impl.UserServiceImpl;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

/**
 * @author Ziph
 */
@WebServlet(name = "InsertUserServlet", value = "/insert")
public class InsertUserServlet extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doGet(request, response);
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        request.setCharacterEncoding("utf-8");
        response.setContentType("text/html;charset=utf-8");
        String username = request.getParameter("username");
        String password = request.getParameter("password");
        String phone = request.getParameter("phone");
        PrintWriter printWriter = response.getWriter();
        if (username.equals("") || username.trim().length() == 0) {
            printWriter.println("用户名不能为空！");
            return;
        }
        if (password.equals("") || password.trim().length() == 0) {
            printWriter.println("密码不能为空！");
            return;
        }
        User user = new User(username, password, phone);
        UserService userService = new UserServiceImpl();
        int result = userService.add(user);
        if (result > 0) {
            printWriter.println("新增成功！");
        } else {
            printWriter.println("新增失败！");
        }
    }
}
```

index.html页面（添加用户页面）

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>添加学生</title>
</head>
<body>
    <form method="post" action="/sjdemo/insert">
        <table>
            <tr>
                <td>用户名</td>
                <td><input type="text" name="username"></td>
            </tr>
            <tr>
                <td>密码</td>
                <td><input type="password" name="password"></td>
            </tr>
            <tr>
                <td>手机号</td>
                <td><input type="text" name="phone"></td>
            </tr>
            <tr>
                <td><input type="submit" value="提交"></td>
                <td><input type="reset" value="重置"></td>
            </tr>
        </table>
    </form>
</body>
</html>
```



### 四、页面跳转

> 作为后台开发人员，我们大多时候都在接收处理用户请求，给予用户响应，为了方便操作，服务器软件将请求和响应封装成了request和response，此章节展示Java Web服务端控制页面跳转主要有两种：重定向和转发



#### 4.1 重定向

> 重定向就是通过各种方法将网络请求重新定个方向转到其它位置。



##### 4.1.1 重定向实现原理

> 客户浏览器发送http请求 - > web服务器接受后发送302状态码响应及对应新的location给客户浏览器 - > 客户浏览器发现是302响应，则自动再发送一个新的http请求，请求url是新的location地址 - > 服务器根据此请求寻找资源并发送给客户。在这里location可以重定向到任意URL，既然是浏览器重新发出了请求，则就没有什么request传递的概念了。在客户浏览器路径栏显示的是其重定向的路径，客户可以观察到地址的变化的。

![1586912403335](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200530105415.png)



##### 4.1.2 重定向的特点

> 1. 重定向是客户端行为。
> 2. 重定向是浏览器做了至少两次的访问请求。
> 3. 重定向浏览器地址改变。
> 4. 重定向两次跳转之间传输的信息会丢失（request范围）。
> 5. 重定向可以指向任何的资源，包括当前应用程序中的其他资源，同一个站点上的其他应用程序中的资源，其他站点的资源。
>
> 注意：传递给HttpServletResponse.sendRedirect 方法的相对URL以“/”开头，它是相对于整个WEB站点的根目录



##### 4.1.3 利用重定向实现页面跳转

> 在我们jdbc和Servlet集成综合案例中的添加用户功能，响应浏览器“添加成功”和“添加失败”改为重定向为提示页面，来实现反馈给用户提示信息！
>
> **重定向**核心代码：**response.sendRedirect("/项目名称/XXX.html");**
>
> 项目中代码：response.sendRedirect("/sjdemo/insertok.html");

```html
<!-- 页面1 -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
    <h1>帅哥美女，你新增成功了！</h1>
</body>
</html>

<!-- 页面2 -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
    <h1>对不起，您新增失败了，很遗憾！</h1>
</body>
</html>
```



```java
package com.mylifes1110.java.servlet;

import com.mylifes1110.java.entity.User;
import com.mylifes1110.java.service.UserService;
import com.mylifes1110.java.service.impl.UserServiceImpl;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

/**
 * @author Ziph
 */
@WebServlet(name = "InsertUserServlet", value = "/insert")
public class InsertUserServlet extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doGet(request, response);
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        request.setCharacterEncoding("utf-8");
        response.setContentType("text/html;charset=utf-8");
        String username = request.getParameter("username");
        String password = request.getParameter("password");
        String phone = request.getParameter("phone");
        PrintWriter printWriter = response.getWriter();
        if (username.equals("") || username.trim().length() == 0) {
            printWriter.println("用户名不能为空！");
            return;
        }
        if (password.equals("") || password.trim().length() == 0) {
            printWriter.println("密码不能为空！");
            return;
        }
        User user = new User(username, password, phone);
        UserService userService = new UserServiceImpl();
        int result = userService.add(user);
        if (result > 0) {
            /**
             * 重定向
             */
            response.sendRedirect("/sjdemo/insertok.html");
        } else {
            response.sendRedirect("/sjdemo/inserterror.html");
        }
    }
}
```



##### 4.1.4 重定向的第二种方式

> 接收请求后，响应时携带302重定向状态码和响应头location（新地址）来完成重定向

```java
		if (result > 0) {
            /**
             * 重定向
             */
			//1.操作响应状态码
            response.setStatus(302);
			//2.操作响应头location
			response.setHeader("location", "/sjdemo/insertok.html");
        } else {
            //1.操作响应状态码
            response.setStatus(302);
			//2.操作响应头location
			response.setHeader("location", "/sjdemo/inserterror.html");
        }
```



#### 4.2 请求转发

> Servlet除了支持重定向之外还支持请求转发



##### 4.2.1 请求转发实现原理

> 客户浏览器发送http请求 - > web服务器接受此请求 - > 调用内部的一个方法在容器内部完成请求处理和转发动作 - > 将目标资源发送给客户。在这里，转发的路径必须是同一个web容器下的url，其不能转向到其他的web路径上去，中间传递的是自己的容器内的request。在客户浏览器路径栏显示的仍然是其第一次访问的路径，也就是说客户是感觉不到服务器做了转发的。

> **注意：内部转发检验是否登录京东账号。是，发出响应显示收藏夹页面。否，发出相应显示登录页面**

![1586912403335](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/2/20200829180025.png)



##### 4.2.2 请求转发的特点

> 1. 转发是服务器行为
> 2. 转发是浏览器只做了一次访问请求
> 3. 转发浏览器地址不变
> 4. 转发两次跳转之间传输的信息不会丢失，所以可以通过request进行数据的传递
> 5. 转发只能将请求转发给同一个WEB应用中的组件
>
> 注意：如果创建RequestDispatcher 对象时指定的相对URL以“/”开头，它是相对于当前WEB应用程序的根目录。



##### 4.2.3 利用请求转发实现功能

> 再次利用我们Servlet与JDBC集成的综合案例，当添加用户后直接请求转发到查询所有用户的界面！
>
> **请求转发**核心代码：request.getRequestDispatcher("/项目资源名称").forward(request, response);
>
> 项目中代码：request.getRequestDispatcher("/getAll").forward(request, response);
>
> 注意：请求转发必须是在同一项目资源下，所以只用了 / ，不用/后追加项目名称（默认必须是同一项目）

```java
package com.mylifes1110.java.servlet;

import com.mylifes1110.java.entity.User;
import com.mylifes1110.java.service.UserService;
import com.mylifes1110.java.service.impl.UserServiceImpl;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

/**
 * @author Ziph
 */
@WebServlet(name = "InsertUserServlet", value = "/insert")
public class InsertUserServlet extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doGet(request, response);
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        request.setCharacterEncoding("utf-8");
        response.setContentType("text/html;charset=utf-8");
        String username = request.getParameter("username");
        String password = request.getParameter("password");
        String phone = request.getParameter("phone");
        PrintWriter printWriter = response.getWriter();
        if (username.equals("") || username.trim().length() == 0) {
            printWriter.println("用户名不能为空！");
            return;
        }
        if (password.equals("") || password.trim().length() == 0) {
            printWriter.println("密码不能为空！");
            return;
        }
        User user = new User(username, password, phone);
        UserService userService = new UserServiceImpl();
        int result = userService.add(user);
        if (result > 0) {
            /**
             * 利用转发添加成功后直接查询所有用户信息
             * 注意：转发必须是同一项目资源下，所以路径写 /servlet资源名称 （/getAll）
             */
            request.getRequestDispatcher("/getAll").forward(request, response);
        } else {
            /**
             * 重定向
             */
            response.sendRedirect("/sjdemo/inserterror.html");
        }
    }
}
```



#### 4.3 response对象操作响应行和响应头



##### 4.3.1 操作响应行

###### 4.3.1.1 操作正常的响应状态码

> 利用Response对象操作正常响应状态码

```java
protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        /**
         * response对象操作响应行(响应状态码)
         * 操作正常状态码 : 200 , 302等
         * 200：告诉浏览器，响应成功
         * 302：重定向
         * 304：页面没有发生
         */
        response.setStatus(200);
    }
```



###### 4.3.1.2 操作错误的响应状态码

> 利用Response对象操作错误的响应状态码

```java
protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        /**
         * 操作错误状态码
         */
        response.sendError(404);
    }
```



##### 4.3.2 操作响应头

###### 4.3.2.1 添加新值

> public void addHeader(String name, String value)：操作响应头，在原有基础上添加新值 

```java
protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        /**
         * 操作响应头
         * setHeader():覆盖原有的响应头的值
         * addHeader():在原有的响应头的值后面追加 (Cookie)
         * 服务器告诉浏览器，给的响应正文的类型是text/html，告诉你应该以utf-8进行解码
         */
        response.setHeader("Content-Type", "text/html;charset=utf-8");
    }
```



###### 4.3.2.2 直接赋值

> public void setHeader(String name, String value)：操作响应头，直接赋值 

> 下一篇状态管理会讲到关于Cookei的内容！



##### 4.4 页面的定时跳转

> 操作响应头refresh，完成定时跳转 

```java
		/**
		* 定时跳转
		* 添加学生成功后，显示空白页5秒后跳转到inserok.html页面提示添加学生成功！
		*/
		response.setHeader("refresh", "5;url=/sjdemo/insertok.html");
```



#### 4.5 Request对象操作请求行、请求头和请求参数

> **如下所有代码都遵循该注解配置：** @WebServlet(name = "RequestServletDemo", value = "/test1")



##### 4.5.1 操作请求行

###### 4.5.1.1 获取请求路径

```java
		/**
         * 获取请求路径：
         * 请求路径为：http://localhost:8080/reqweb/test1
         */
        StringBuffer requestURL = request.getRequestURL();
        System.out.println("请求路径为：" + requestURL);
```



###### 4.5.1.2 获取请求方式

```java
		/**
         * 获取请求方式：
         * 请求方式为：GET
         */
        String requestMethod = request.getMethod();
        System.out.println("请求方式为：" + requestMethod);
```



###### 4.5.1.3 获取请求地址上面的IP地址

```java
		/**
         * 获取请求地址上面的IP地址：（此地址是翻译的localhost）
         * 请求IP地址：0:0:0:0:0:0:0:1
         */
        String requestRemoteAddr = request.getRemoteAddr();
        System.out.println("请求IP地址：" + requestRemoteAddr);
```



###### 4.5.1.4 获取请求地址上面的端口号

```java
		/**
         * 获取请求地址上面的端口号：
         * 请求端口号为：8080
         */
        int requestLocalPort = request.getLocalPort();
        System.out.println("请求端口号为：" + requestLocalPort);
```



###### 4.5.1.5 获取请求地址后面拼接的内容（GET请求）

```java
		/**
         * 获取请求地址后面拼接的内容：（GET请求有拼接内容，POST请求没有）
         * 关于地址栏GET请求如何拼接后提交：http://localhost:8080/reqweb/test1?username=ziph&password=123456
         * 请求网址后的拼接内容为：username=ziph&password=123456
         */
        String requestQueryString = request.getQueryString();
        System.out.println("请求网址后的拼接内容为：" + requestQueryString);
```



##### 4.5.2 操作请求头

###### 4.5.2.1 获取User-Agent（浏览器类型）

```java
		/**
         * 获取User-Agent请求头：（判断请求是由哪个浏览器发起的）
         * User-Agent为：Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.113 Safari/537.36
         */
        String requestHeader = request.getHeader("User-Agent");
        System.out.println("User-Agent为：" + requestHeader);
```



##### 4.5.3 操作请求参数【重点】

###### 4.5.3.1 获取请求参数

```java
		/**
         * 获取请求参数：
         * 浏览器地址栏内容为：http://localhost:8080/reqweb/test3?username=ziph&password=123456
         * username : ziph	password : 123456
         */
        String username = request.getParameter("username");
        String password = request.getParameter("password");
        System.out.println("username : " + username + "\t" + "password : " + password);
```



###### 4.5.3.2 获取所有请求参数名称

```java
		/**
         * 获取所有请求参数名称
         * 浏览器地址栏内容为：http://localhost:8080/reqweb/test3?username=ziph&password=123456
         * name : username	value : ziph
         * name : password	value : 123456
         * 注意：遍历所有枚举name并获取其对应value，打印！
         */
        Enumeration<String> requestParameterNames = request.getParameterNames();
        while (requestParameterNames.hasMoreElements()) {
            String parameterName = requestParameterNames.nextElement();
            String parameterValue = request.getParameter(parameterName);
            System.out.println("name : " + parameterName + "\t" + "value : " + parameterValue);
        }
```



###### 4.5.3.3 获取指定参数的所有值

```java
		/**
         * 获取指定参数的所有值
         * 浏览器地址栏内容为：http://localhost:8080/reqweb/test3?username=ziph&password=123456
         * ziph
         * </p>
         * 传入多个username并打印多个username值
         * 浏览器地址栏内容为：http://localhost:8080/reqweb/test3?username=ziph&username=join&username=marry
         * ziph
         * join
         * marry
         */
        String[] usernames = request.getParameterValues("username");
        System.out.println(usernames[0]);
        String[] usernames1 = request.getParameterValues("username");
        for (String name : usernames1) {
            System.out.println(name);
        }
```



###### 4.5.3.4 获取请求参数对应的Map集合

```java
		/**
         * 获取请求参数对应的Map集合
         * 键：请求参数名称  相当于 getParameterNames
         * 值：一组请求参数值 相当于 getParameterValues
         * 参数名称 : username参数值 : ziph join marry
         * 参数名称 : password参数值 : 123456 123456 123456
         */
        Map<String, String[]> requestParameterMap = request.getParameterMap();
        Set<Map.Entry<String, String[]>> entrySet = requestParameterMap.entrySet();
        for (Map.Entry<String, String[]> entry : entrySet) {
            //键 - 请求参数名称
            String parameterName = entry.getKey();
            //值 - 一组请求参数值
            String[] values = entry.getValue();
            StringBuffer buffer = new StringBuffer();
            for (String value : values) {
                buffer.append(value + " ");
            }
            System.out.println("参数名称 : " + parameterName + "参数值 : " + buffer);
        }
```



### 五、Servlet的生命周期



#### 5.1 什么是生命周期？

> **生命周期**就是指一个对象的生老病死。 拿**产品**来做例子说明，就是包括制造产品所需要的原材料的采集、加工等生产过程，也包括产品贮存、运输等流通过程，还包括产品的使用过程以及产品报废或处置等废弃回到自然过程，这个过程构成了一个完整的产品的生命周期。 



#### 5.2 Servlet生命周期的四个阶段

> 先说一下从调用自身构造器开始Servlet的六个阶段： **实例化（调用构造器）** 、**初始化** 、**获取配置信息** 、**提供服务** 、**返回有关信息** 、**销毁** 。
>
> 其实它们都是整个生命周期中的一员，但是我们选取重要的生命周期成员就有四个阶段：**实例化（调用构造器）** 、**初始化** 、**提供服务** 、**销毁** 。

> **阶段一、实例化（调用构造方法）**
> 实例化阶段是Servlet生命周期中的第一步，由Servlet容器调用Servlet的构造器创建一个具体的Servlet对象的过程。而这个创建的时机可以是在容器收到针对这个组件的请求之后，即用了才创建；也可以在容器启动之后立刻创建实例，而不管此时Servlet是否使用的上。使用如下代码可以设置Servlet是否在服务器启动时就执行创建
> \<load-on-startup>1\</load-on-startup> //影响创建的时机

> **阶段二、初始化（init方法）**
> Servlet在被加载实例化之后，必须要初始化它。在初始化阶段，init()方法会被调用。这个方法在javax.servlet.Servlet接口中定义。其中，方法以一个ServletConfig类型的对象作为参数。ServletConfig对象由Servlet引擎负责创建，从中可以读取到事先在web.xml文件中通过\<init-param>节点配置的多个name-value名值对。ServletConfig对象还可以让Servlet接受一个ServletContext对象。
> 一般情况下，init方法不需要编写，因GenericServlet已经提供了init方法的实现，并且提供了getServletConfig方法来获得ServletConfig对象。
> 注意：init方法只被执行一次

> **阶段三、提供服务/就绪（service方法）**
> Servlet被初始化以后就处于能够响应请求的就绪状态。每个对Servlet的请求由一个ServletRequest对象代表，Servlet给客户端的响应由一个ServletResponse对象代表。当客户端有一个请求时，容器就会将请求与响应对象转给Servlet，以参数的形式传给service方法。service方法由javax.servlet.Servlet定义，由具体的Servlet实现，而HttpServlet将service方法拆分了成我们常用的doGet和doPost方法

> **阶段四、销毁（destroy方法）** 
> Servlet容器在销毁Servlet对象时会调用destroy方法来释放资源。通常情况下Servlet容器停止或者重新启动都会引起销毁Servlet对象的动作，但除此之外，Servlet容器也有自身管理Servlet对象的准则，整个生命周期并不需要人为进行干预



##### 5.2.1 HttpServlet生命周期演示

```java
package com.mylifes1110.java.servlet;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * @author Ziph
 */
@WebServlet(name = "HttpServlet", value = "/test")
public class HttpServlet extends javax.servlet.http.HttpServlet {
    /**
     * 默认无参构造器
     */
    public HttpServlet() {
        System.out.println("1.调用无参构造器");
    }

    /**
     * 调用init方法进行初始化
     */
    @Override
    public void init() throws ServletException {
        super.init();
        System.out.println("2.进行初始化工作");
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doGet(request, response);
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("text/html;charset=utf-8");
        System.out.println("3.提供服务中...");
        response.getWriter().append("Servlet at：").append(request.getContextPath());
    }

    /**
     * 调用destroy方法进行销毁
     */
    @Override
    public void destroy() {
        super.destroy();
        System.out.println("4.进行销毁");
    }
}
```

![1586866138974](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200530105416.png)



### 六、Sevlet线程安全问题



#### 6.1 线程安全问题

> 一个Web容器中只创建一个Servlet对象（单例设计模式），因为每次请求都会创建一个线程，如果多人并发请求，那么就会存在多个线程操作同一个Servlet对象，那么如果在对应的方法中操作了成员变量，就会可能产生线程安全问题！



#### 6.2 如何保证线程安全问题

> 如何保证线程安全问题有三种方法：**加synchronized同步代码块（锁）** 、**实现SingleThreadModle接口** 、**使用局部变量** 。

```java
package com.mylifes1110.java.servlet;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet(name = "SafeServlet", value = "/safe")
public class SafeServlet extends HttpServlet {
    int num = 0;
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doGet(request, response);
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    	num++;
        System.out.println("当前访问次数为：" + num);
    }
}
```

> **问题：** 会出现多个线程发出请求，访问的是同一个Servlet对象，也就是说num值访问的是同一个，它会一直做自增1操作
>
> **注意：** 多个线程发出请求正常应该是访问多个Servlet对象，也就是一个线程对应一个num值来自增1记录该线程的访问次数



##### 6.2.1 加synchronized同步代码块（锁）

> 加synchronized同步代码块（锁）来保证线程安全

```java
package com.mylifes1110.java.testservlet;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * 简单模拟抢火车票
 * nums = 10;(模拟一共10张票)
 */
@WebServlet(name = "SafeServlet", value = "/safe")
public class SafeServlet extends HttpServlet {
    int nums = 10;

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doGet(request, response);
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        synchronized (this) {
            /**
             * 原子操作：抢购火车票
             */
            if (nums > 0) {
                try {
                    Thread.sleep(1000);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
                System.out.println("我抢到了一张票！哦耶，可以回家了！");
                nums--;
            } else {
                System.out.println("哎，我又没抢到，看来回不了家了！");
            }
        }
    }
}
```



##### 6.2.2 实现SingleThreadModle接口

> 实现SingleThreadModle接口来保证线程安全 

![1586870763709](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200530105417.png)

![1586871060698](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200530105418.png)



##### 6.2.3 使用局部变量

> 在Servlet中尽量使用局部变量来保证线程安全
>
> **注意：** 虽然是用的同一个Servlet对象，但是方法中的局部变量不是公用的，而是每个线程访问该方法的局部变量独一份

```java
package com.mylifes1110.java.testservlet;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet(name = "SafeServlet2", value = "/safe2")
public class SafeServlet2 extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doGet(request, response);
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        /**
         * 测试方法中的线程
         */
        System.out.println(Thread.currentThread().getId() + "已启动！");
        
        int num = 0;
        num++;
        System.out.println("被访问的次数为：" + num);
    }
}
```



### 七、Servlet初始化参数及配置



#### 7.1 什么是Servlet初始化参数

> Servlet初始化参数是Servlet调用init初始化方法同时加载的参数



#### 7.2 了解Servlet初始化参数机制

> 既然是了解初始化机制，我们就必须去翻看源码了！翻看源码时，我们发现init()初始化方法是写在GenericServlet类中的，而且有两个一个是带参数的，一个是不带参数的。

```java
private transient ServletConfig config;//源码中声明的ServletConfig对象是空的
```

![1586876804339](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200530105419.png)

> 看到重载的方法中传入了一个ServletConfig对象，然后内部处理初始化了该参数this.config = config，既然初始化了该参数，我们就可以使用getServletConfig方法去调用获得该初始化配置对象了！

> 我们有没有一个疑问呢？是谁传给init方法中的ServletConfig对象呢？仔细想一下，我们可以想到是tomact容器调用init初始化方法传入的ServletConfig对象，所以如果我们想要用get方法去获取该初始化配置参数，就需要我们去配置初始化参数了！那就继续看看是如何配置初始化参数的吧！



#### 7.3 Servlet初始化参数配置方式

> Servlet初始化参数配置方式有两种：**xml配置文件配置** 、**注解配置** 。



##### 7.3.1 xml配置文件配置初始化参数

> 配置参数如下：
>
> init-param元素用来定义Servlet启动的参数，可以定义多个
>
> param-name表示参数名称
>
> param-value表示参数值

> 献上xml配置文件配置信息，如下：

```xml
<servlet>
        <servlet-name>init1</servlet-name>
        <servlet-class>com.mylifes1110.java.testservlet.InitParamServlet1</servlet-class>
    
		<!-- 可以配置多个init-param（初始化参数） -->
        <init-param>
            <param-name>username</param-name>
            <param-value>Ziph</param-value>
        </init-param>
        <init-param>
            <param-name>password</param-name>
            <param-value>123456</param-value>
        </init-param>
    
    </servlet>
    <servlet-mapping>
        <servlet-name>init1</servlet-name>
        <url-pattern>/init1</url-pattern>
    </servlet-mapping>
</web-app>
```

> Java代码如下：

```java
package com.mylifes1110.java.testservlet;

import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class InitParamServlet1 extends HttpServlet{
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        /**
         * 初始化参数获取当前相关所有配置信息
         * 注意：因为是继承GenericServlet类得到的getServletConfig方法，可以直接this获取
         */
        ServletConfig servletConfig = this.getServletConfig();
        String username = servletConfig.getInitParameter("username");
        String password = servletConfig.getInitParameter("password");
        /**
         * 控制台打印结果：username : Ziph	password : 123456
         */
        System.out.println("username : " + username + "\t" + "password : " + password);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doGet(request, response);
    }
}
```



#### 7.3.2 使用注解配置初始化参数

> 配置参数如下：
>
> initParams：配置Servlet的初始化参数
>
> **注意：** 在注解中的initParams默认是一个空数组，而数组中传入的参数即为：@WebInitParam()，再看@WebInitParam()中需要传入的参数即为：name和value（需要传入字符串类型）

> 注解写法参考如下：

```java
@WebServlet(name = "InitParamServlet", value = "/init", initParams = {@WebInitParam(name = "username", value = "Ziph"), @WebInitParam(name = "password", value = "123456")})
```

> 完整Java代码如下：

```java
package com.mylifes1110.java.testservlet;

import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebInitParam;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet(name = "InitParamServlet", value = "/init", initParams = {@WebInitParam(name = "username", value = "Ziph"), @WebInitParam(name = "password", value = "123456")})
public class InitParamServlet extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doGet(request, response);
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        ServletConfig servletConfig = this.getServletConfig();
        String username = servletConfig.getInitParameter("username");
        String password = servletConfig.getInitParameter("password");
        /**
         * 打印结果为：username : Ziph	password : 123456
         */
        System.out.println("username : " + username + "\t" + "password : " + password);
    }
}
```
