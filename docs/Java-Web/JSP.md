- [Java Web之JSP](#head1)
	- [ 一、JSP简介](#head2)
		- [1.1 什么是JSP？](#head3)
		- [1.2 JSP的特点](#head4)
		- [1.3 JSP为什么也是Servlet](#head5)
		- [1.4 tomact服务器中的资源分析](#head6)
			- [1.4.1 tomact服务器中的静态资源分析](#head7)
			- [1.4.2 tomact服务器中的动态资源分析](#head8)
		- [1.5 为什么要使用JSP](#head9)
		- [1.6 JSP的优点](#head10)
		- [1.7 JSP的原理](#head11)
	- [ 二、JSP的基本结构](#head12)
		- [2.1 JSP的结构](#head13)
		- [2.2 JSP脚本元素](#head14)
			- [2.2.1 JSP脚本的作用](#head15)
			- [2.2.2 JSP脚本的分类](#head16)
				- [2.2.2.1 声明脚本](#head17)
				- [2.2.2.2 片段脚本](#head18)
				- [2.2.2.3 输出脚本](#head19)
		- [2.3 JSP页面中的注释](#head20)
			- [2.3.1 JSP页面中的注释分类](#head21)
			- [2.3.2 Java代码注释](#head22)
			- [2.3.3 HTML网页注释](#head23)
			- [2.3.4 JSP页面注释](#head24)
		- [2.4 JSP指令](#head25)
			- [2.4.1 JSP中指令分类](#head26)
			- [2.4.2 JSP中的指令的作用](#head27)
			- [2.4.3 page指令](#head28)
			- [2.4.4 taglib指令](#head29)
			- [2.4.5 include指令](#head30)
				- [2.4.5.1 include指令引入静态资源](#head31)
				- [2.4.5.2 include指令引入动态资源](#head32)
		- [2.5 JSP的九大内置对象](#head33)
			- [2.5.1 jsp的out和getWriter()方法的区别](#head34)
			- [2.5.2 为什么jsp可以直接使用内置对象](#head35)
			- [2.5.3 怎样找到jsp页面的class文件](#head36)
		- [2.6 JSP中的域对象](#head37)
			- [2.6.1 JSP中有哪几个域对象](#head38)
			- [2.6.2 JSP四大域对象的作用范围及描述](#head39)
			- [2.6.3 pageContext域对象获取内置对象和操作其他域对象](#head40)
	- [ 三、EL表达式](#head41)
		- [3.1 什么是EL表达式](#head42)
		- [3.2 了解EL表达式和注意事项](#head43)
		- [3.3 EL表达式获取域数据](#head44)
			- [3.3.1 EL表达式基本获取域数据](#head45)
			- [3.3.2 EL表达式简单获取域数据](#head46)
			- [3.3.3 EL表达式获取复杂域数据（数组、集合、Java对象）](#head47)
		- [3.4 使用EL表达式执行运算](#head48)
		- [3.5 EL表达式中的Empty关键字的使用](#head49)
		- [3.6 EL表达式中11个的Web对象](#head50)
	- [ 四、JSTL标签库](#head51)
		- [4.1 什么是JSTL标签库](#head52)
		- [4.2 JSTL标签库的作用](#head53)
		- [4.3 JSTL标签库的使用](#head54)
		- [4.3 JSTL核心标签](#head55)
		- [4.4 JSTL综合案例 ](#head56)
			- [ c3p0配置文件](#head57)
			- [ MySQL数据库库表操作](#head58)
			- [ DBUtils连接池工具类](#head59)
			- [ Product实体类](#head60)
			- [ Dao层接口](#head61)
			- [ Dao层实现类](#head62)
			- [ Dao层单元测试](#head63)
			- [ ProductServlet](#head64)
			- [ productList.jsp页面](#head65)
	- [ 五、JSP开发模型](#head66)
		- [5.1 JSP Model1开发模型](#head67)
			- [5.1.1 JSP Model1开发模型的优缺点](#head68)
		- [5.2 JSP Model1优化版开发模型](#head69)
			- [5.2.1 JSP Model1优化版开发模型的优缺点](#head70)
		- [5.3 JSP Model2开发模型](#head71)
			- [5.4 JSP Model2开发模型优缺点](#head72)
	- [ 六、BeanUtils工具类的使用](#head73)
		- [6.1 参数问题](#head74)
		- [6.2 beanutils.jar工具类jar包的下载](#head75)
		- [6.3 第三方jar包beanutils工具类使用](#head76)
			- [ User实体类](#head77)
			- [ JSP注册页面](#head78)
			- [ Servlet](#head79)
		- [6.4 自定义beanutils工具类](#head80)
			- [ register注册页面](#head81)
			- [ RegisterServlet](#head82)
			- [ 自定义MyBeanUtils工具类](#head83)
	- [ 七、MVC模式](#head84)
		- [7.1 什么是MVC模式](#head85)
		- [7.2 MVC模式详解](#head86)
		- [7.3 什么是MVC架构模型](#head87)
		- [7.4 MVC架构和三层架构的区别](#head88)
			- [7.4.1 架构模式思想](#head89)
			- [7.4.2 剖析架构主体](#head90)
			- [7.4.3 架构和模式划分](#head91)
			- [7.4.4 架构和设计模式的区别](#head92)
		- [7.5 基于MAC的三层架构实现](#head93)
		- [7.6 MAC高级框架应用](#head94)
	- [ 八、分页](#head95)
		- [8.1 生活中的分页](#head96)
		- [8.2 为什么要有分页？](#head97)
		- [8.3 分页的分类](#head98)
			- [8.3.1 什么是逻辑分页？](#head99)
				- [8.3.1.1 逻辑分页的优缺点](#head100)
			- [8.3.2 什么是物理分页？（常用）](#head101)
				- [8.3.2.1 物理分页的优缺点](#head102)
				- [8.3.2.2 物理分页SQL语句实现](#head103)
				- [8.3.2.3 SQL语句分页举例](#head104)
		- [8.1 分页查询流程分析与问题](#head105)
			- [8.1.1 分页的两种情况](#head106)
			- [8.1.2 分页的流程步骤](#head107)
			- [8.1.3 分页查询在Web项目中的一些问题](#head108)
			- [8.1.4 分页查询的综合案例](#head109)
				- [ IDEA架构与jar包展示](#head110)
				- [ 库表操作](#head111)
				- [ c3p0.properties](#head112)
				- [ 连接池工具类DBUtils](#head113)
				- [ 实体类User](#head114)
				- [ 登录页面login.jsp](#head115)
				- [ 分页查询显示页面index.jsp](#head116)
				- [ 封装好的PageBean对象](#head117)
				- [ 通用Servlet](#head118)
				- [ UserServlet](#head119)
				- [ 访问资源登录校验LoginFilter](#head120)
				- [ Dao层接口](#head121)
				- [ Dao层实现类](#head122)
				- [ Service层接口](#head123)
				- [ Service层实现类](#head124)
# <span id="head1">Java Web之JSP</span>

------



### <span id="head2"> 一、JSP简介</span>



#### <span id="head3">1.1 什么是JSP？</span>

> JSP全称Java Server Pages，是一种动态网页开发技术。它使用JSP标签在HTML网页中插入Java代码。标签通常以<%开头以%>结束。



#### <span id="head4">1.2 JSP的特点</span>

> JSP是一种Java servlet，主要用于实现Java web应用程序的用户界面部分。可以通过结合HTML代码、XHTML代码、XML元素以及嵌入JSP操作和命令来编写JSP。
>
> JSP通过网页表单获取用户输入数据、访问数据库及其他数据源，然后动态地创建网页。
>
> JSP标签有多种功能，比如访问数据库、记录用户选择信息、访问JavaBeans组件等，还可以在不同的网页中传递控制信息和共享信息。



#### <span id="head5">1.3 JSP为什么也是Servlet</span>

> - 当jsp页面显示后，会在在tomcat中有一个目录叫work，它里面就存储了jsp页面生成的源代码。jsp文件会转义成对应的java文件
>
> - 比如：demo01.jsp转义成demo01_jsp.java，类demo01_jsp会继承于HttpJspPage，HttpJspPage又继承了HttpServlet。也就可以说demo01.jsp就是Servlet（所有的jsp都是Servlet）



#### <span id="head6">1.4 tomact服务器中的资源分析</span>

> tomact服务器资源中可以分为静态技术资源和动态技术资源



##### <span id="head7">1.4.1 tomact服务器中的静态资源分析</span>

> - 静态资源分为：
>   * HTML：静态页面
>   * CSS：渲染美化静态HTML页面的样式
>   * Java Script：动态修改HTML页面和CSS样式



##### <span id="head8">1.4.2 tomact服务器中的动态资源分析</span>

> - Servlet：运行在服务器上的Java小程序。适合编写Java代码，适合业务处理，写网页比较困难
>   * Servlet的三个用途：接受浏览器发送的数据、负责调用业务层、请求转发及重定向的使用
> - JSP：适合编写动态内容，不适合写java代码，主要用于显示页面



#### <span id="head9">1.5 为什么要使用JSP</span>

> 1. JSP性能好，可以在html页面中动态嵌入元素
> 2. 服务器调用的是已经编译好的JSP文件
> 3. JSP基于Java Servlet Api，有很多强大企业的支持
> 4. JSP可以与处理业务逻辑的Servlet一起使用，该模式被Java Servlet模版引擎所支持



#### <span id="head10">1.6 JSP的优点</span>

> 与纯 Servlet 相比：JSP可以很方便的编写或者修改HTML网页而不用去面对大量的println语句
>
> 与JavaScript相比：虽然JavaScript可以在客户端动态生成HTML，但是很难与服务器交互，因此不能提供复杂的服务，比如访问数据库和图像处理等等
>
> 与静态HTML相比：静态HTML不包含动态信息



#### <span id="head11">1.7 JSP的原理</span>

> 1. 当在浏览器上输入`http://localhost/jspdemo/index.jsp`
> 2. 服务器tomcat得到请示，会通过JspServlet将后缀名是.jsp的请求处理
> 3. 处理将index.jsp翻译成index_jsp.java文件
> 4. 再将index_jsp.java文件编译成index_jsp.class文件
> 5. jvm将.class加载运行 
> 6. 服务器生成响应，响应信息中就包含了jsp页面上的html代码



### <span id="head12"> 二、JSP的基本结构</span>



#### <span id="head13">2.1 JSP的结构</span>

> JSP页面中可以包含指令、Java语句、变量、方法或表达式、静态内容(HTML、CSS、Java Script)
>
> - 脚本元素(Scripting Elements)：声明、脚本段、表达式
> - 注释指令(Comment Elements)：HTML注释、Java注释、JSP隐式注释
> - 指令元素（Directive Elements)：page、include、taglib等
> - 动作元素(Action Elements)：jsp:include、jsp:forward、jsp:useBean等



#### <span id="head14">2.2 JSP脚本元素</span>

##### <span id="head15">2.2.1 JSP脚本的作用</span>

> 可以在页面上编写java代码，实现页面与Java代码数据的交互



##### <span id="head16">2.2.2 JSP脚本的分类</span>

> **声明脚本：** <%! Java代码 %>
>
> **片段脚本：** <% Java代码 %>
>
> **输出脚本：** <%= 变量值 %>



###### <span id="head17">2.2.2.1 声明脚本</span>

> 声明脚本里的变量是全局变量，也就是在jsp对应java类中，生成一个成员变量

```jsp
<%!
	定义方法
%>     
```



###### <span id="head18">2.2.2.2 片段脚本</span>

> 在jsp对应的java类的_jspService方法中，生成一个局部变量

```jsp
<% int i=10; %>
```



###### <span id="head19">2.2.2.3 输出脚本</span>

> 向浏览器输出内容，相当于response.getWriter().write()
>
> 注意：输出脚本等价于输出语句，不能使用分号来结束表达式

```jsp
<%= 2+3 %>
```



#### <span id="head20">2.3 JSP页面中的注释</span>

##### <span id="head21">2.3.1 JSP页面中的注释分类</span>

> JSP页面中可以包含以下几种注释种类：Java代码注释、HTML网页注释、JSP页面注释



##### <span id="head22">2.3.2 Java代码注释</span>

> Java代码注释用来注释Java代码，会将注释内容生成到jsp对应的java文件中。也就是说注释内容在Java文件中可见。所以**不安全** 、比较**耗费流量** 

```java
//Java代码注释
```



##### <span id="head23">2.3.3 HTML网页注释</span>

> HTML网页注释用来注释HTML代码，会将注释内容生成到jsp对应的java文件中。也就是说和HTML文件类似，在网页查看源代码中，注释可见。所以**不安全** 、比较**耗费流量** 

```html
<!-- HTML网页注释 -->
```



##### <span id="head24">2.3.4 JSP页面注释</span>

> JSP页面注释用来注释HTML代码，不会将注释内容生成到jsp对应的java文件中。所以，安全、省流量、仅在JSP文件中可见

```java
<%-- JSP页面注释 --%>
```



#### <span id="head25">2.4 JSP指令</span>

##### <span id="head26">2.4.1 JSP中指令分类</span>

> JSP中的指令分为三种：page指令、taglib指令、include指令



##### <span id="head27">2.4.2 JSP中的指令的作用</span>

> JSP指令用于指示jsp执行某些操作 、用于指示jsp表现特定行为或效果



##### <span id="head28">2.4.3 page指令</span>

> page指令用于定义JSP页面的各种属性

|     属性     | 描述                                                         |
| :----------: | ------------------------------------------------------------ |
|   session    | 是否会自动创建session对象；默认值为true                      |
|    buffer    | JSP中有javax.servlet.jsp.JspWriter输出字符流。设置输出数据的缓存大小；默认8kb |
|  errorPage   | 如果页面中有错误，跳转到指定的资源；errorPage="项目资源路径" |
| isErrorPage  | 是否创建throwable对象；默认是false                           |
| contentType  | 等价于response.setContentType(“text/html”;charset=utf-8);告知浏览器应该以utf-8解码响应正文，以utf-8对响应正文进行编码 |
| pageEncoding | Jsp文件自身的编码                                            |
| isELIgnored  | 是否支持EL表达式。 默认是false，支持表达式；true表示不支持表达式；例如：${1+1}; 为false时，输出结果为2；为true时按照原样输出 |
|    import    | 与Java代码中无差别，等价于导包；例如：<%@ page import="java.util.Date,java.util.List"%> 或者分开导入需要的包<%@ page import="java.util.List"%> |

##### <span id="head29">2.4.4 taglib指令</span>

> taglib指令用于在当前jsp页面中导入jstl标签库

> 例如：导入jstl标签库

```jsp
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
```



##### <span id="head30">2.4.5 include指令</span>

> include指令用于将外部引入到jsp文件中



###### <span id="head31">2.4.5.1 include指令引入静态资源</span>

> 例如：引入静态资源

```jsp
<%@ include file="static.jsp"%>
```



###### <span id="head32">2.4.5.2 include指令引入动态资源</span>

> 例如：引入动态资源

```jsp
<jsp:include page=“dynamic.jsp"></jsp:include>
```



#### <span id="head33">2.5 JSP的九大内置对象</span>

|   对象名    | 描述               | 类型                                                    |
| :---------: | ------------------ | ------------------------------------------------------- |
|   request   | 请求对象           | javax.servlet.http.HttpServletRequest                   |
|  response   | 响应对象           | javax.servlet.http.HttpServletResponse                  |
|   session   | Session会话对象    | javax.servlet.http.HttpSession（由session=“true”开关）  |
| application | Servlet上下文对象  | javax.servlet.ServletContext                            |
|   config    | ServletConfig对象  | javax.servlet.ServletConfig                             |
|  exception  | 异常对象           | java.lang.Throwable（由isErrorPage=“false”开关）        |
|     out     | JspWriter对象      | javax.servlet.jsp.JspWriter                             |
| pageContext | 当前页面上下文对象 | javax.servlet.jsp.PageContext                           |
|    page     | 当前页面对象       | java.lang.Object（当前页面对象，this为当前servlet实例） |

```jsp
<%--
Created by IntelliJ IDEA.
User: Ziph
Date: 2020/4/27
Time: 12:40
To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" isErrorPage="true" %>
<html>
<head>
<title>jsp九大内置对象的使用</title>
</head>
<body>
<%
/**
* Request对象
* 在地址栏中以GET请求的方式拼即可获取到request对象中的username参数
*/
String username = request.getParameter("username");
System.out.println(username);
/**
* Response对象
* 可以实现响应浏览器内容
*/
response.getWriter().println("username : " + username);
/**
* Session对象
* 在Session域中存储username，可以实现在另一个jsp中取出Session域中的username参数
*/
request.getSession().setAttribute("username", "ziph");
/**
* application对象（ServletContext）
* 在application对象中存储一个username参数，可以实现在另一个jsp中取出application对象中的username参数
*/
application.setAttribute("username", "ziph");
/**
* 使用out对象在浏览器上输出内容
*/
out.write("<br>out : ziph");
/**
* config配置对象
* 可以获取初始化参数ServletName名称为jsp
*/
System.out.println("config : " + config.getServletName());
/**
* exception异常对象
* 可以获取异常对象（此时没有异常对象所以打印null）
*/
System.out.println("exception : " + exception);
/**
* page当前页面对象
* 打印了当前页面对象
*/
System.out.println(page.getClass());
/**
* pageContext页面上下文对象
*/
pageContext.setAttribute("pageContext", "ziph");
System.out.println(pageContext.getAttribute("pageContext"));
%>
</body>
</html>
```

> test.jsp

```jsp
<%
/**
* 可以取出另一个jspSession中域中的username参数值
*/
String username = (String) request.getSession().getAttribute("username");
System.out.println("Session : " + username);
/**
* 可以取出application对象中的username参数值
*/
String applicationAttribute = (String) application.getAttribute("username");
System.out.println("application : " + applicationAttribute);
%>
```



##### <span id="head34">2.5.1 jsp的out和getWriter()方法的区别</span>

> - out是JspWriter类型；getWriter()是PrintWriter类型
> - out输出到缓冲区中，没有写到response中；getWriter()直接写到response中
> - out一般用在jsp中；getWriter()用在Servlet中



##### <span id="head35">2.5.2 为什么jsp可以直接使用内置对象</span>

> 在jsp对应的java文件中，已经提前声明好了这些内置对象，所以可以直接使用

![1587900154676](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200531101857.png)



##### <span id="head36">2.5.3 怎样找到jsp页面的class文件</span>

> jsp页面的class文件一般都保存在tomact目录下的，路径为：\apache-tomcat-8.5.45\work ；是在work文件夹中
>
> 但是使用IDEA的小伙伴也知道，IDEA部署后的项目资源是保存在IDEA自动生成的镜像中的。所以我们要去找到镜像的位置。一般IDEA镜像位置会在电脑的C盘中放置，你可以在启动tomact 服务器的时候去找镜像的路径所在，找到镜像就好办了，就可以找到jsp页面的class文件了！

> 这是我电脑中IDEA自动生成项目资源镜像的位置：（大家可以在tomact启动的时候，去寻找类似的路径！）

```java
C:\Users\Ziph\AppData\Local\JetBrains\IntelliJIdea2020.1\tomcat\Tomcat_8_5_45_webdemoplus\work\Catalina\localhost\webdemoplus\org\apache\jsp
```



#### <span id="head37">2.6 JSP中的域对象</span>

##### <span id="head38">2.6.1 JSP中有哪几个域对象</span>

> jsp中有四个域对象分别是pageContext、request、session、application



##### <span id="head39">2.6.2 JSP四大域对象的作用范围及描述</span>

|   域对象    | 域对象描述                    | 作用范围 | 应用场景                               |
| :---------: | ----------------------------- | -------- | -------------------------------------- |
|   request   | 等价于HttpServletRquest域对象 | 一次请求 | 本次请求后数据不再使用，可用于查询     |
|   session   | 等价于HttpSession域对象       | 一次会话 | 同一个会话中共享数据，可用于登录信息   |
| application | 等价于ServletContext域对象    | 整个项目 | 所有用户共享数据，可用于程序的配置信息 |
| pageContext | JSP独有的域对象               | 当前页面 | 单独作用于JSP当前页面                  |

**注意：** pageContext域对象可以操作其他三个域对象的数据！



##### <span id="head40">2.6.3 pageContext域对象获取内置对象和操作其他域对象</span>

> - pageContext域对象可以获取其他内置域对象
> - pageContext域对象不仅可以操作page域对象，还可以操作request、session和application域对象
> - 使用pageContext域对象实现转发 `pageContext.forward(“test.jsp”);`
> - 使用pageContext域对象实现动态包含 `pageContext.include(“dynamic.jsp”);`

```jsp
<%--
Created by IntelliJ IDEA.
User: Ziph
Date: 2020/4/27
Time: 13:36
To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
<title>pageContext域对象</title>
</head>
<body>
<%
/**
* pageContext域对象获取jsp中九大内置对象
*/
pageContext.getPage();
pageContext.getRequest();
pageContext.getResponse();
pageContext.getSession();
pageContext.getServletConfig();
pageContext.getServletContext();
pageContext.getException();
pageContext.getOut();
%>

<%
/**
* 操作Request域对象
* <p>
* 方法：setAttribute(String name, Object value, int scope);
* 参数说明：
* String name：参数名称
* Object value：参数值
* int scope：操作的域
* <p>
* 指定操作域的参数，可以传入操作域对象的对应数字编号
* public static final int PAGE_SCOPE = 1;
* public static final int REQUEST_SCOPE = 2;
* public static final int SESSION_SCOPE = 3;
* public static final int APPLICATION_SCOPE = 4;
* <p>
* 也可以使用PageContext域对象获取该参数传入
* 例如：PageContext.REQUEST_SCOPE
*/
pageContext.setAttribute("request", "request", PageContext.REQUEST_SCOPE);
//因为本次操作的是Request对象，操作页面的默认重定向是不在Request对象的作用范围的，所以我们使用请求转发
//Request对象作用范围是一次请求；请求转发是内部操作，所以符合Request对象的作用范围
	pageContext.forward("/test.jsp");
//等价于request.getRequestDispatcher("/test.jsp").forward(request, response);

/**
* 操作Session域对象
*/
pageContext.setAttribute("session", "session", PageContext.SESSION_SCOPE);

/**
* 操作application域对象
*/
pageContext.setAttribute("application", "application", PageContext.APPLICATION_SCOPE);
%>
</body>
</html>
```

> test.jsp

```jsp
<%
/**
* 操作Reuqest域对象（获取）
*/
String requestAttribute = (String) request.getAttribute("request");
System.out.println(requestAttribute);
String pageContextAttribute = (String) pageContext.getAttribute("request", PageContext.REQUEST_SCOPE);
System.out.println(pageContextAttribute);

/**
* 操作Session域对象（获取）
*/
String pageContextAttribute1 = (String) pageContext.getAttribute("session", PageContext.SESSION_SCOPE);
System.out.println(pageContextAttribute1);

/**
* 操作application域对象（获取）
*/
String pageContextAttribute2 = (String) pageContext.getAttribute("application", PageContext.APPLICATION_SCOPE);
System.out.println(pageContextAttribute2);
%>
```



### <span id="head41"> 三、EL表达式</span>



#### <span id="head42">3.1 什么是EL表达式</span>

> **表达式**语言（Expression Language），或称**EL表达式**，简称**EL**，是Java中的一种特殊的通用编程语言，借鉴于JavaScript和XPath。 主要作用是在Java Web应用程序嵌入到网页（如JSP）中，用以访问页面的上下文以及不同作用域中的对象，取得对象属性的值，或执行简单的运算或判断操作。 



#### <span id="head43">3.2 了解EL表达式和注意事项</span>

> EL表达式简化JSP中Java代码开发，代替脚本表达式<%=输出脚本%>。它不是一种开发语言，是jsp中获取数据的一种规范。**格式：**  `${EL表达式} `等价于`pageContext.findAttribute(name)`

**注意：** EL表达式是jsp2.0中的规范，要使用el表达式必须使用支持jsp2.0技术的web服务器 (tomcat) ，jsp2.0对应的servlet版本是servlet2.4。如果不能使用el表达式请检查isELIgnored属性 



#### <span id="head44">3.3 EL表达式获取域数据</span>

> **注意：** 使用el表达式获取时，如果没有查找到结果，返回的不是null，而是一个""

|      域       | EL表达式                 |
| :-----------: | ------------------------ |
|    page域     | ${pageScope.name}        |
|   request域   | ${requestScope.name}     |
|   session域   | ${sessionScope.name}     |
| application域 | ${applicationScope.name} |

##### <span id="head45">3.3.1 EL表达式基本获取域数据</span>

> 使用最基本的方式来获取域数据

```jsp
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
<title>EL获取域数据</title>
</head>
<body>
<%
//设置page域
pageContext.setAttribute("username1", "pageScope");
//设置request域
request.setAttribute("username2", "request");
//设置session域
session.setAttribute("username3", "session");
//设置application域
application.setAttribute("username4", "application");
%>
<%--使用el表达式从page域中获取usernmae1变量--%>
${pageScope.username1}<br>
<%--使用el表达式从request域中获取username2变量--%>
${requestScope.username2}<br>
<%--使用el表达式从session域中获取username3变量--%>
${sessionScope.username3}<br>
<%--使用el表达式从application域中获取username4变量--%>
${applicationScope.username4}<br>
</body>
</html>

```



##### <span id="head46">3.3.2 EL表达式简单获取域数据</span>

> 使用简单的方法来获取域数据
>
> **自动精确匹配：** 使用${username}没有指明域，那么就按照此顺序`pageScop->requestScop->sessionScop- >applicationScop`从中依次查找。

```jsp
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
<title>EL表达式获取域数据</title>
</head>
<body>
<%
request.setAttribute("username", "request");
%>
<%--自动精确匹配：从pageScope、requestScope、sessionScope、applicationScope逐个找拥有username变量的域数据--%>
${username}
</body>
</html>
```



##### <span id="head47">3.3.3 EL表达式获取复杂域数据（数组、集合、Java对象）</span>

> 使用EL表达式获取数组、List集合、Map集合和Java对象

```jsp
<%@ page import="java.util.List" %>
<%@ page import="java.util.ArrayList" %>
<%@ page import="java.util.Map" %>
<%@ page import="java.util.HashMap" %>
<%@ page import="com.mylifes1110.java.bean.User" %><%--
Created by IntelliJ IDEA.
User: Ziph
Date: 2020/4/27
Time: 20:19
To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
<title>EL表达式获取域数据</title>
</head>
<body>
<%--数组--%>
<%
String[] username = {"Ziph", "Join", "Marry", "Jack"};
pageContext.setAttribute("username", username);
%>
<%--JSP输出脚本取出数组中下标0的username值--%>
<%--步骤：取数组中的域数据、强转为字符串数组、取出下标为0的域数据--%>
<%=
((String[]) pageContext.getAttribute("username"))[0]
%>
${username[0]}

<%--List集合--%>
<%
List<String> fruits = new ArrayList<>();
fruits.add("苹果");
fruits.add("香蕉");
fruits.add("橘子");
request.setAttribute("fruitsName", fruits);
%>
<%--取出List的集合中的第一个数据--%>
<%=
((List<String>) request.getAttribute("fruitsName")).get(0)
%>
<%--两种方法都可以，相同作用--%>
${fruitsName.get(0)}
${fruitsName[0]}

<%--Map集合--%>
<%
Map<String, String> vegetables = new HashMap<>();
vegetables.put("tomato", "西红柿");
vegetables.put("cucumber", "黄瓜");
vegetables.put("lettuce", "莴笋");
session.setAttribute("vegetablesName", vegetables);
%>
<%--取出Map集合中的西红柿--%>
<%=
((Map<String, String>) session.getAttribute("vegetablesName")).get("tomato")
%>
${vegetablesName.tomato}

<%--Java对象--%>
<%
User user = new User(1, "Ziph", "123456");
application.setAttribute("user", user);
%>
<%--获取User对象的用户名--%>
<%=
((User) application.getAttribute("user")).getUsername()
%>
${user.username}
</body>
</html>
```

```java
public class User {
private int    id;
private String username;
private String password;

public User(int id, String username, String password) {
this.id = id;
this.username = username;
this.password = password;
}

public int getId() {
return id;
}

public String getUsername() {
return username;
}

public String getPassword() {
return password;
}

@Override
public String toString() {
return "User{" + "id=" + id + ", username='" + username + '\'' + ", password='" + password + '\'' + '}';
}
}
```



#### <span id="head48">3.4 使用EL表达式执行运算</span>

> - 算数运算符：`+` 、`-` 、`*` 、`/(div)` 、`%（mod）` 
>   * 注意在el表达式中不能使用+号进行字符串的拼接，只能执行加法操作
> - 关系运算符：`>(gt)` 、`>=(ge)` 、`<(lt)` 、`<=(le)` 、`==(eq)` 、`!=(ne)`
>   * 执行关系运算得到的结果是boolean类型
> - 逻辑运算符：`&&(and)` 、` ||(or)` 、` !(not)`  
>   * 执行逻辑运算得到的结果是boolean 类型
> - 三目运算符（三元运算符）：`表达式 ? 结果1 : 结果2`

```jsp
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
<title>EL执行运算</title>
</head>
<body>
<%--算数运算--%>
${10+20 }<br/>
${10-20 }<br/>
${10*20 }<br/>
${3%5}<br/>

<%--关系运算--%>
${10==9 }<br/>
${"abc"=="abc" }<br/>
${s1==s2}<br/>
${s1 eq s2 }<br/>
${10>20}<br/>
${10 gt 20}<br/>
${5 < 10}<br/>
${5 lt 10}<br/>
${5 != 10}<br/>
${5 ne 10}<br/>

<%--三目运算--%>
${20>10?"正确":"错误" }<br/>

<%--逻辑运算--%>
${true &&  false}<br/>
${true || false}<br/>
${!true}<br/>
${true and  false}<br/>
${true or false}<br/>
${not true}<br/>
</body>
</html>
```



#### <span id="head49">3.5 EL表达式中的Empty关键字的使用</span>

> 被empty关键字修饰的EL表达式中，只要内容是空，结果就为true，反之，为false

```jsp
<%--
Created by IntelliJ IDEA.
User: Ziph
Date: 2020/4/27
Time: 21:52
To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
<title>EL表达式中使用Empty关键字</title>
</head>
<body>
<%
String username = "ziph";
String password = null;
pageContext.setAttribute("username", username);
pageContext.setAttribute("password", password);
%>
${empty username}<br>
${empty password}<br>
</body>
</html>
```



#### <span id="head50">3.6 EL表达式中11个的Web对象</span>

> 常用操作：
>
> - **获取根路径：** ${pageContext.request.contextPath} 
> - **获取Cookie对象：** ${cookie.get(key).value} （获取Cookie中键为key的对象的value值）

|   Web对象名称    | 描述                                                         |
| :--------------: | ------------------------------------------------------------ |
|    pageScope     | pageScope域对象，可以获取域中属性                            |
|   requestScope   | requestScope域对象，可以获取域中属性                         |
|   sessionScope   | sessionScope域对象，可以获取域中属性                         |
| applicationScope | applicationScope域对象，可以获取域中属性                     |
|      param       | 对应参数（键值对形式），可获取单个参数值，等价于request.getParameter("xxx") |
|   paramValues    | 对应参数（键值对形式），获取多个参数值，等价于request.getParameterValues("xxx") |
|      header      | 对应请求头（键值对形式），可获取单个请求头，等价于request.getHeader("xxx") |
|   headerValues   | 对应请求头（键值对形式），可获取多个请求头，等价于 request.getHeaders("xxx") |
|    initParam     | ServletContext（application）全局初始化参数，可获取web.xml中内的初始化参数 |
|      cookie      | Cookie（键值对形式），可获取Cookie对象                       |
|   pageContext    | 可以获取JSP八个内置对象（内置对象共九个，application除外）   |



### <span id="head51"> 四、JSTL标签库</span>



#### <span id="head52">4.1 什么是JSTL标签库</span>

> JSP标准标签库（JSP Standard Tag Library ）是一个JSP标签集合，它封装了JSP应用的通用核心功能。 JSTL支持通用的、结构化的任务，比如迭代，条件判断，XML文档操作，国际化标签，SQL标签。 除了这些，它还提供了一个框架来使用集成JSTL的自定义标签。



#### <span id="head53">4.2 JSTL标签库的作用</span>

> 可以利用迭代，条件判断，XML文档操作，国际化标签，SQL标签这些标签取代JSP页面上的Java代码，从而提高程序的可读性，降低程序的维护难度。 



#### <span id="head54">4.3 JSTL标签库的使用</span>

> - 从Apache的标准标签库中下载的`jakarta-taglibs-standard-current.zip`
>   * 官方下载地址：[http://archive.apache.org/dist/jakarta/taglibs/standard/binaries/](http://archive.apache.org/dist/jakarta/taglibs/standard/binaries/)
> - 下载 **jakarta-taglibs-standard-1.1.2.zip** 包并解压，将 **jakarta-taglibs-standard-1.1.2/lib/** 下的两个 jar 文件：**standard.jar** 和 **jstl.jar** 文件拷贝到 **/WEB-INF/lib/** 下，再使用Add as Librarys即可使用。
> - 在JSP页面添加tablib指令库，引用核心标签库的语法如下： 

```jsp
<% @taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core">
```



#### <span id="head55">4.3 JSTL核心标签</span>

> 核心标签是最常用的 JSTL标签。 

| 标签        | 描述                                                         |
| :---------- | ------------------------------------------------------------ |
| c:out       | 用于在JSP中显示数据，就像<%= ... >                           |
| c:set       | 用于保存数据                                                 |
| c:remove    | 用于删除数据                                                 |
| c:catch     | 用来处理产生错误的异常状况，并且将错误信息储存起来           |
| c:if        | 与我们在一般程序中用的if一样                                 |
| c:choose    | 本身只当做c:when和c:otherwise的父标签                        |
| c:when      | c:choose的子标签，用来判断条件是否成立                       |
| c:otherwise | c:choose的子标签，接在c:when标签后，当c:when标签判断为false时被执行 |
| c:import    | 检索一个绝对或相对 URL，然后将其内容暴露给页面               |
| c:forEach   | 基础迭代标签，接受多种集合类型                               |
| c:forTokens | 根据指定的分隔符来分隔内容并迭代输出                         |
| c:param     | 用来给包含或重定向的页面传递参数                             |
| c:redirect  | 重定向至一个新的URL.                                         |
| c:url       | 使用可选的查询参数来创造一个URL                              |

```jsp
<%@ page import="java.util.List" %>
<%@ page import="java.util.ArrayList" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
<title>JSTL标签</title>
</head>
<body>
<%--
Set标签
向某个域中存储对象或参数

var：参数名称
scope：域名称；page、request、session、application
value：参数值
--%>
<c:set var="message" scope="request" value="hello"></c:set>
${message}<br>

<%--
reomve标签
移除某个域中的对象或参数

var：要移除的参数名称
scope：域名称
--%>
<c:remove var="message" scope="request"></c:remove>
${message}<br>

<%--
catch标签
捕获jsp页面中的异常，可用来打印堆栈跟踪信息和异常详细信息
注意：在jsp页面中捕获的异常，如果不打印任何信息，页面将忽略这个错误（没有捕获代码的任何信息和错误提示）

var：异常对象名称
--%>
<c:catch var="e">
<%
//算数异常
int num = 1 / 0;
%>
</c:catch>
<%--打印捕获的异常详细信息--%>
${e.message}<br>

<%--
if标签
if条件判断

test：条件判断的条件
--%>
<c:set var="i" value="1" scope="session"></c:set>
<c:if test="${i>2}">
i大于2
</c:if>
<c:if test="${i<2}">
<%--执行1<2--%>
i小于2
</c:if>
<br>

<%--
forEach标签
支持for循环遍历形式和增强for循环遍历形式

var：变量名
step：步长
begin：开始
end：结束
注意：在模拟for循环的时候是有局限性的，step步长必须大于0，而且begin必须小于end！
items：遍历的集合或数组
varStatus：元素状态对象（varStatus属性还包含以下属性参数）
current：当前元素
index：当前索引
first：是否是第一个元素
last：是否是最后一个元素
--%>
<%--for循环：打印1~10--%>
<c:forEach var="i" begin="1" end="10" step="1">
${i}
</c:forEach>
<br>
<%--增强for循环：打印集合内元素--%>
<%
List<String> fruits = new ArrayList<>();
fruits.add("apple");
fruits.add("banana");
fruits.add("strawberry");
request.setAttribute("fruitsName", fruits);
%>
<%--普通for循环--%>
<c:forEach var="i" begin="0" end="${fruitsName.size() - 1}" step="1">
${fruitsName[i]}
</c:forEach>
<br>
<%--增强for循环--%>
<c:forEach var="j" items="${fruitsName}" varStatus="status">
${j}<br>
开始：${status.begin}<br>
结束${status.end}<br>
步长：${status.step}<br>
是第几个元素：${status.count}<br>
是否是第一个元素：${status.first}<br>
是否是最后一个元素：${status.last}<br>
当前索引：${status.index}<br>
当前元素：${status.current}<br>
</c:forEach>

<%--
forTokens标签
切割字符串

items：要分割的字符串
delims：分割字符串依据
var：分割后的元素对象
--%>
<%
String str = "111-222-333";
request.setAttribute("str", str);
%>
<%--按”-“拆分字符串str并打印分割后的字符串信息--%>
<c:forTokens var="str" items="${str}" delims="-">
${str}
</c:forTokens>
</body>
</html>
```



#### <span id="head56">4.4 JSTL综合案例 </span>

> 使用Servlet、JSP、JDBC、JSTL等所学知识完成以下内容

![1588087877387](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200531101858.png)

###### <span id="head57"> c3p0配置文件</span>

```java
c3p0.driverClass=com.mysql.jdbc.Driver
c3p0.jdbcUrl=jdbc:mysql://localhost:3306/temp
c3p0.user=root
c3p0.password=Mylifes1110
```

###### <span id="head58"> MySQL数据库库表操作</span>

```sql
use temp;

create table product
(
id    int primary key auto_increment,
name  varchar(30),
price double,
count int
) charset = utf8;

insert into product (id, name, price, count)
VALUES (1, '电视机', 3000, 2);

insert into product (id, name, price, count)
VALUES (2, '电冰箱', 5000, 4);

insert into product (id, name, price, count)
VALUES (3, '空调', 10000, 1);

insert into product (id, name, price, count)
VALUES (4, '微波炉', 1500, 2);
```

###### <span id="head59"> DBUtils连接池工具类</span>

```java
package com.mylifes1110.java.utils;

import com.mchange.v2.c3p0.ComboPooledDataSource;

public class DBUtils {
private static ComboPooledDataSource dataSource;

static {
dataSource = new ComboPooledDataSource();
}

public static ComboPooledDataSource getDataSource() {
return dataSource;
}
}
```

###### <span id="head60"> Product实体类</span>

```java
package com.mylifes1110.java.bean;

public class Product {
private Integer id;
private String name;
private Double price;
private Integer count;

public Product() {
}

public Product(Integer id, String name, Double price, Integer count) {
this.id = id;
this.name = name;
this.price = price;
this.count = count;
}

public Integer getId() {
return id;
}

public void setId(Integer id) {
this.id = id;
}

public String getName() {
return name;
}

public void setName(String name) {
this.name = name;
}

public Double getPrice() {
return price;
}

public void setPrice(Double price) {
this.price = price;
}

public Integer getCount() {
return count;
}

public void setCount(Integer count) {
this.count = count;
}

@Override
public String toString() {
return "Product{" +
"id=" + id +
", name='" + name + '\'' +
", price=" + price +
", count=" + count +
'}';
}
}
```

###### <span id="head61"> Dao层接口</span>

```java
package com.mylifes1110.java.dao;

import com.mylifes1110.java.bean.Product;

import java.sql.SQLException;
import java.util.List;

public interface ProductDao {
List<Product> selectProductList() throws SQLException;
}
```

###### <span id="head62"> Dao层实现类</span>

```java
package com.mylifes1110.java.dao.impl;

import com.mylifes1110.java.bean.Product;
import com.mylifes1110.java.dao.ProductDao;
import com.mylifes1110.java.utils.DBUtils;
import org.apache.commons.dbutils.QueryRunner;
import org.apache.commons.dbutils.handlers.BeanHandler;
import org.apache.commons.dbutils.handlers.BeanListHandler;

import java.sql.SQLException;
import java.util.List;

public class ProductDaoImpl implements ProductDao {
@Override
public List<Product> selectProductList() throws SQLException {
return new QueryRunner(DBUtils.getDataSource()).query("select * from product",
new BeanListHandler<Product>(Product.class));
}
}
```

###### <span id="head63"> Dao层单元测试</span>

```java
package com.mylifes1110.java.test;

import com.mylifes1110.java.bean.Product;
import com.mylifes1110.java.dao.ProductDao;
import com.mylifes1110.java.dao.impl.ProductDaoImpl;
import org.junit.Before;
import org.junit.Test;

import java.sql.SQLException;
import java.util.List;

public class ProductDaoTest {
ProductDao productDao;

/**
* @Before注解 在@Test单元测试之前初始化
*/
@Before
public void init() {
productDao = new ProductDaoImpl();
}

public void selectProductById() throws SQLException {
Product product = productDao.selectProductById(1);

System.out.println(product);
}

@Test
public void selectProductList() throws SQLException {
List<Product> products = productDao.selectProductList();

System.out.println(products);
}
}
```

###### <span id="head64"> ProductServlet</span>

```java
package com.mylifes1110.java.servlet;

import com.mylifes1110.java.bean.Product;
import com.mylifes1110.java.dao.ProductDao;
import com.mylifes1110.java.dao.impl.ProductDaoImpl;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.sql.SQLException;
import java.util.List;

@WebServlet(
name  = "ProductServlet",
value = "/SelectProductList"
)
public class ProductServlet extends HttpServlet {
protected void doGet(HttpServletRequest request, HttpServletResponse response)
throws ServletException, IOException {
doPost(request, response);
}

protected void doPost(HttpServletRequest request, HttpServletResponse response)
throws ServletException, IOException {
ProductDao productDao = new ProductDaoImpl();

try {
List<Product> products = productDao.selectProductList();

request.setAttribute("productList", products);
request.getRequestDispatcher("/product/productList.jsp").forward(request, response);
} catch (SQLException throwables) {
throwables.printStackTrace();
}
}
}
```

###### <span id="head65"> productList.jsp页面</span>

```jsp
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%--
Created by IntelliJ IDEA.
User: Ziph
Date: 2020/4/28
Time: 22:03
To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
<title>商品列表</title>
</head>
<body>
<table border="1px" cellpadding="10px" cellspacing="0px" width="400px" height="200px">
<tr>
<td align="center">ID</td>
<td>名称</td>
<td>价格</td>
<td>数量</td>
<td>小计</td>
</tr>

<%--循环之前，总价为0--%>
<c:set var="total" value="0" scope="page"></c:set>
<c:forEach items="${productList}" var="product">
<tr>
<td align="center">${product.id}</td>
<td>${product.name}</td>
<td>${product.price}</td>
<td>${product.count}</td>
<td>${product.price * product.count}</td>
</tr>
<%--forEach标签，循环一次就是一个小计!然后更新一下计算总价的计数器中！--%>
<c:set var="total" value="${total + product.price * product.count}" scope="page"></c:set>
</c:forEach>
<%--循环之后，计算出总价--%>
<tr>
<td colspan="5" align="right">
总价：${total}元
</td>
</tr>
</table>
</body>
</html>
```



### <span id="head66"> 五、JSP开发模型</span>

> Sun公司在推出jsp后，也为我们提供了两种jsp开发模式。分别是JSP Model1、JSP Model2，但是在JSP Model1开发模型中经历过一次优化。而两种开发模型都不是最终版，只是在技术上做起了过度作用，为MVC模式做了技术铺垫！



#### <span id="head67">5.1 JSP Model1开发模型</span>

> JSP Model1是JavaWeb早期的模型，它适合小型Web项目，开发成本低！Model1第一代时期，服务器端只有JSP页面，所有的操作都在JSP页面中，连访问数据库的API也在JSP页面中完成。

![model1](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200531101859.png)

##### <span id="head68">5.1.1 JSP Model1开发模型的优缺点</span>

> - **优点：** 开发成本低、使用简单快捷，对开发人员要求不高
> - **缺点：** 不适合完成比较复杂的项目， 所有的东西都耦合在一起，对后期的维护和扩展极为不利



#### <span id="head69">5.2 JSP Model1优化版开发模型</span>

> JSP Model1优化后有所改进，把业务逻辑和数据访问的内容放到了JavaBeans（狭义JavaBeans：实体类；广义JavaBeans：实体类、dao层、service层和工具类）中，而JSP页面负责显示以及请求调度的工作。虽然第二代比第一代好了些，但还让JSP做了过多的工作，JSP中把视图工作和请求调度（控制器）的工作耦合在了一起。

![mode12](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200531101900.png)



##### <span id="head70">5.2.1 JSP Model1优化版开发模型的优缺点</span>

> **优点：** 开发成本低、使用简单快捷，对开发人员要求不高，而且在技术中使用Java Beans层面达到了一定程度的解耦
>
> **缺点：** 解耦程度还是不够高，JSP页面的耦合度还有很待解决



#### <span id="head71">5.3 JSP Model2开发模型</span>

> JSP Model2开发模型中，可见把JSP页面的耦合度大大降低。在此JSP页面（视图层）用来接收数据，为用户提供显示页面的功能。JavaBean（模型层）用来完成数据库的业务功能，同时将业务交接给Servlet。而Servlet（控制层）来实现处理模型对象的业务和对相应业务JSP页面的转发。
>
> **注意：** 在JSP Model2开发模型中，已经看到了MAC模式的影子（MAC结构）。准确来说，JSP Model2开发模型就是MAC模式的一种雏形！

![model2](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200531101901.png)



##### <span id="head72">5.4 JSP Model2开发模型优缺点</span>

> - **优点：** 再一次实现了解耦，使得维护方便，开发人员可各司其职。有利于进行分工操作，它比较适合开发一些比较复杂项目，因为它的很多组件可以重用
> - **缺点：** Web项目的开发难度加大，同时对开发人员的技术要求也有相应提高



### <span id="head73"> 六、BeanUtils工具类的使用</span>

#### <span id="head74">6.1 参数问题</span>

> 我们在获取浏览器参数的时候，通过Bean实体类封装成对象，实现数据的交互。而问题是，浏览器请求参数少的时候自己编码代码还可以，但是如果在面临大量浏览器请求参数时，麻烦就来了。我们需要书写大量的getParameter和setXxx来封装实体类对象实现数据交互。而目前导入第三方jar包，使用它可以解决此问题！



#### <span id="head75">6.2 beanutils.jar工具类jar包的下载</span>

> 由于此工具类的版本不同，我们需要下载的jar包也不同。经过jar包的迭代，也出现了需要jar包的辅助包等等，我们可以把核心jar包和辅助包一起导入，来实现功能。**需要下载并导入的jar包如下：** 
>
> - commons-beanutils-1.9.4.jar（核心jar包）
> - commons-collections-3.2.2.jar
> - commons-logging-1.2.jar
>
> **注意：** 此版本需要导入三个jar包，其他版本有的只需要导入两个，大家可以搜索核心jar包（beanutils）来进行下载



#### <span id="head76">6.3 第三方jar包beanutils工具类使用</span>

> 此次只是测试使用了BeanUtils工具类

###### <span id="head77"> User实体类</span>

```java
package com.mylifes1110.java.bean;

public class User {
private Integer id;
private String  username;
private String  password;
private Integer age;

public User() {}

public User(Integer id, String username, String password, Integer age) {
this.id       = id;
this.username = username;
this.password = password;
this.age      = age;
}

@Override
public String toString() {
return "User{" + "id=" + id + ", username='" + username + '\'' + ", password='" + password + '\'' + ", age="
+ age + '}';
}

public Integer getAge() {
return age;
}

public void setAge(Integer age) {
this.age = age;
}

public Integer getId() {
return id;
}

public void setId(Integer id) {
this.id = id;
}

public String getPassword() {
return password;
}

public void setPassword(String password) {
this.password = password;
}

public String getUsername() {
return username;
}

public void setUsername(String username) {
this.username = username;
}
}
```

###### <span id="head78"> JSP注册页面</span>

```jsp
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
<title>注册</title>
</head>
<body>
<form action="/firstjsp/register" method="post">
账户:<input type="text" name="username"/><br>
密码:<input type="text" name="password"/><br>
年龄:<input type="text" name="age"/><br>
<button type="submit">注册</button>
</form>
</body>
</html>

```

###### <span id="head79"> Servlet</span>

```java
package com.mylifes1110.java.servlet;

import com.mylifes1110.java.bean.User;
import org.apache.commons.beanutils.BeanUtils;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Map;

@WebServlet(
name  = "RegisterServlet1Servlet",
value = "/register"
)
public class RegisterServlet1Servlet extends HttpServlet {
protected void doGet(HttpServletRequest request, HttpServletResponse response)
throws ServletException, IOException {
doPost(request, response);
}

protected void doPost(HttpServletRequest request, HttpServletResponse response)
throws ServletException, IOException {

/**
* 底层代码：
* public static void populate(Object bean, Map<String, ? extends Object> properties) throws IllegalAccessException, InvocationTargetException {
*      BeanUtilsBean.getInstance().populate(bean, properties);
* }
* <p>
* 解释：
* populate(Object bean, Map<String, ? extends Object> properties) : 将map集合转换成java对象
* Object bean : 要封装的java对象
* Map<String, ? extends Object> properties : 请求参数
* 注意：String[]是Object的子类
* </p>
*/
Map<String, String[]> map  = request.getParameterMap();
User                  user = new User();

try {
BeanUtils.populate(user, map);
System.out.println(user);
} catch (Exception e) {
e.printStackTrace();
}
}
}
```



#### <span id="head80">6.4 自定义beanutils工具类</span>

###### <span id="head81"> register注册页面</span>

```jsp
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
<title>注册</title>
</head>
<body>
<form action="/firstjsp/register" method="post">
账户:<input type="text" name="username"/><br>
密码:<input type="text" name="password"/><br>
年龄:<input type="text" name="age"/><br>
<button type="submit">注册</button>
</form>
</body>
</html>
```

###### <span id="head82"> RegisterServlet</span>

```java
package com.mylifes1110.java.servlet;

import com.mylifes1110.java.bean.User;
import com.mylifes1110.java.utils.MyBeanUtils;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.lang.reflect.InvocationTargetException;
import java.util.Map;

@WebServlet(name = "RegisterServlet", value = "/register")
public class RegisterServlet extends HttpServlet {
protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
//map转换为user对象
Map<String, String[]> map = request.getParameterMap();
User user = new User();
try {
MyBeanUtils.populate(user, map);
} catch (NoSuchMethodException e) {
e.printStackTrace();
} catch (InvocationTargetException e) {
e.printStackTrace();
} catch (IllegalAccessException e) {
e.printStackTrace();
}
System.out.println(user);

}

protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
doPost(request, response);
}
}
```

###### <span id="head83"> 自定义MyBeanUtils工具类</span>

```java
package com.mylifes1110.java.utils;

import java.lang.reflect.Field;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;

import java.util.Map;

/**
* 自定义MyBeanUtils工具类
*/
public class MyBeanUtils {

/**
* 将map集合中的请求参数值封装到对象t中
*
* @param t   传入的泛型对象
* @param map 键：参数名称；值：一组参数值
* @param <T> 自定义泛型
*/
public static <T> void populate(T t, Map<String, ? extends Object> map)
throws NoSuchMethodException, InvocationTargetException, IllegalAccessException {

// 获取泛型对象的Class对象
Class<?> tClass = t.getClass();

// 获取对应对象的所有方法对象
Field[] fields = tClass.getDeclaredFields();

// 遍历所有方法对象
for (Field field : fields) {

// 获取方法名称
String fieldName = field.getName();

// 获取set方法名称
String methodName = "set" + fieldName.substring(0, 1).toUpperCase() + fieldName.substring(1);

// 获取对应的set方法类型
Class<?> type = field.getType();

// 获取对应的set方法
Method method = tClass.getMethod(methodName, type);

// 判断对应set方法是否为空
if (method != null) {

// 获取对应方法参数值（参数类型）
Object o = map.get(fieldName);

// 参数值不为空
if (o != null) {

// 把自身本应该是String类型参数值（此时是Object类型）强转
String[] str = (String[]) o;

// 如果参数类型是Integer类型
if (type.getName().equals("java.lang.Integer")) {

// 把参数值转换为Integer类型并执行方法
method.invoke(t, Integer.parseInt(str[0]));
} else {

// 参数为String类型直接执行方法
method.invoke(t, str[0]);
}
}
}
}
}
}
```



### <span id="head84"> 七、MVC模式</span>

#### <span id="head85">7.1 什么是MVC模式</span>

> 首先要需要知道MVC模式并不是Java Web项目中独有的，MVC是一种软件工程中的一种设计模式，把软件系统分为三个基本部分：模型（Model）、视图（View）和控制器（Controller），即为MVC。它是一种软件设计的典范，最早为Trygve Reenskaug提出，为施乐帕罗奥多研究中心（Xerox PARC）的Smalltalk语言发明的一种软件设计模式。



#### <span id="head86">7.2 MVC模式详解</span>

> 虽然MVC并不是Java当中独有的，但是现在几乎所有的B/S的架构都采用了MVC框架模式。
>
> - **Controller（控制器）：** 控制器即是控制请求的处理逻辑，对请求进行处理，负责请求转发和重定向； 
> - **View（视图）：**  视图即是用户看到并与之交互的界面，比如HTML（静态资源），JSP（动态资源）等等；
> - **Model（模型）：** 模型代表着一种企业规范，就是业务流程/状态的处理以及业务规则的规定。业务流程的处理过程对其他层来说是不透明的，模型接受的请求，并返回最终的处理结果。业务模型的设计可以说是MVC的核心。



#### <span id="head87">7.3 什么是MVC架构模型</span>

> - 在“三层架构”中，为了面向对象编程，将各层传递的数据封装成实体类，便于数据传递和提高可读性
> - 在MVC（模型Model-视图View-控制器Controller）模式中，Model代表模型，是业务流程**/**状态的处理以及业务规则的制定，接受视图请求的数据，并返回最终的处理结果。业务模型的设计可以说是MVC最主要的核心

![1588141666040](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200531101902.png)



#### <span id="head88">7.4 MVC架构和三层架构的区别</span>

##### <span id="head89">7.4.1 架构模式思想</span>

> 首先，我们要认识到区分层次的目的即为了“**高内聚低耦合**”的思想。 
>
> 同样是架构级别的，相同的地方在于他们都有一个表现层，但是他们不同的地方在于其他的两个层。
>
> 在三层架构中没有定义Controller的概念。这是最不同的地方。而MVC也没有把业务的逻辑访问看成两个层，这是采用三层架构或MVC搭建程序最主要的区别。当然了。在三层中也提到了Model，但是三层架构中Model的概念与MVC中Model的概念是不一样的，“三层”中典型的Model层是由业务逻辑与访问数据组成的。而MVC里，则是以实体类构成的。



##### <span id="head90">7.4.2 剖析架构主体</span>

> **MVC架构主体：** 
>
> Model（模型层），主要负责处理业务逻辑以及数据库的交互
>
> View（视图层），主要负责显示数据和提交数据
>
> Controller（控制层），主要是用作辅助捕获请求并控制请求转发
>
> **附：** MVC 分层有助于管理复杂的应用程序，因为您可以在一个时间内专门关注一个方面。例如，您可以在不依赖业务逻辑的情况下专注于视图设计。同时也让应用程序的测试更加容易。 

> **三层架构主体：** 
>
> UI（界面层/表示层），主要功能是显示数据和接受传输用户的数据，可以在为网站的系统运行提供交互式操作界面，表示层的应用方式比较常见，例如Windows窗体和Web页面。 
>
> BLL（业务逻辑层），将用户的输入信息进行甄别处理，分别保存。建立新的数据存储方式，在存储过程中对数据进行读取，将“商业逻辑”描述代码进行包含。 
>
> DAL（数据访问层），数据访问层在作业过程中访问数据系统中的文件，实现对数据库中数据的读取保存操作。 
>
> **附：** 三层架构软件系统为用户的数据传输、提取、储存创造了便利条件。在应用数据时，信息划分架构开发项目，对各层次之间的工作职责进行清晰规划，这样就降低了网站系统的维护风险。 



##### <span id="head91">7.4.3 架构和模式划分</span>

> **架构划分：** 
>
> - 三层架构是基于业务逻辑来分的；而MVC是基于页面来分的。
> - 三层架构是一种软件架构，通过接口实现编程；而MVC架构是一种复合设计模式，一种解决方案
>
> **模式划分：** 
>
> - 三层架构模式是体系结构模式；而MVC架构模式是设计模式
> - 三层架构模式又可归于部署模式；而MVC架构模式可归于表示模式



##### <span id="head92">7.4.4 架构和设计模式的区别</span>

>框架、设计模式这两个概念总容易被混淆，其实它们之间还是有区别的。框架通常是代码重用，而设计模式是设计重用，架构则介于两者之间，部分代码重用，部分设计重用，有时分析也可重用。
>
>**在软件生产中有三种级别的重用：** 内部重用，即在同一应用中能公共使用的抽象块；代码重用，即将通用模块组合成库或工具集，以便在多个应用和领域都能使用；应用框架的重用，即为专用领域提供通用的或现成的基础结构，以获得最高级别的重用性。 
>
>框架与设计模式虽然相似，但却有着根本的不同。设计模式是对在某种环境中反复出现的问题以及解决该问题的方案的描述，它比框架更抽象；框架可以用代码表示，也能直接执行或复用，而对模式而言只有实例才能用代码表示;设计模式是比框架更小的元素，一个框架中往往含有一个或多个设计模式，框架总是针对某一特定应用领域，但同一模式却可适用于各种应用。可以说，框架是软件，而设计模式是软件的知识。



#### <span id="head93">7.5 基于MAC的三层架构实现</span>

> 虽然MVC把程序分成三部分，每个部分负责不同的功能，但是这只是逻辑的分离，实际代码并没有真正分离，特别是Model（包括业务、数据访问和实体类、工具类等）部分的代码，为了增强代码的维护性和降低代码耦合性，需要把代码分层管理，于是就有了三层架构：分别是**web层（表示|界面层）**、**service层（业务逻辑层）**、**dao层(数据访问层)**
>
> **注意：** web层对应MVC中的Servlet和JSP；而其他层都属于MVC中的Model

![mvc1](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200531101903.png)

#### <span id="head94">7.6 MAC高级框架应用</span>

>  MVC模式被广泛用于Java的各种框架中，比如Struts2、Spring MVC等等都用到了这种思想。
>
> Struts2是基于MVC的轻量级的web应用框架。基于MVC，说明基于Struts2开发的Web应用自然就能实现MVC，也说明Struts2着力于在MVC的各个部分为我们的开发提供相应帮助。



### <span id="head95"> 八、分页</span>

#### <span id="head96">8.1 生活中的分页</span>

> 我们在生活中到处课件分页，各种浏览器、查询系统、电商系统的商品展示等等所有领域的访问数据千千万，它都是用分页来显示的！我这里举例贴图一下，那么问题来了为什么要分页显示呢？

![1588252078443](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200531101904.png)



#### <span id="head97">8.2 为什么要有分页？</span>

> 如果没有使用分页查询的话，存在三个问题：
>
> - 浏览器的加载数据过多，容易导致浏览器崩溃
> - 查询数据库的数据量过大，查询时间会非常长
> - 数据库查询时间长，用户等待的时间也就变得很长，用户使用产品的体验效果差



#### <span id="head98">8.3 分页的分类</span>

> 分页的分类也有两种：**逻辑分页** 和**物理分页** 



##### <span id="head99">8.3.1 什么是逻辑分页？</span>

> 概念：一次性将所有数据查询出来，保存到List集合中，后续，如果有分页请求，再对List集合进行拆分



###### <span id="head100">8.3.1.1 逻辑分页的优缺点</span>

> - 优点：减少了操作数据库的次数
> - 缺点：单次查询数据库的时间过长



##### <span id="head101">8.3.2 什么是物理分页？（常用）</span>

> 不是一次性将所有数据全部查询出来。查询第一页：发送一条查询10条的SQL语句。查询下 一页数据：又发送一条查询后10条的SQL语句



###### <span id="head102">8.3.2.1 物理分页的优缺点</span>

> - 优点：单次查询数据库的时间非常短
> - 缺点：操作数据库的次数增加



###### <span id="head103">8.3.2.2 物理分页SQL语句实现</span>

> 分页的SQL语句如下：
>
> - 第一个?：开始查询索引(从0开始)
> - 第二个?：一页显示多少条数据，也就是单次查询多少条数据

```sql
select * from 表名 limit ? , ?;
```



###### <span id="head104">8.3.2.3 SQL语句分页举例</span>

> 查询员工表，要求每页显示10条员工数据
>
> 假设有100条员工数据，每页显示10条员工数据，分出的页数就为10页；
>
> 假设有101条员工数据，每页显示10条员工数据，分出的页数就为11页；
>
> **注意：** 最后1页的数据我们不可能弃掉，也必须得单占一页进程承载该数据！
>
> **再次注意：** SQL语句中是使用LIMIT来进行分页操作的，分页操作的起始索引为0

```sql
-- 第一页显示第一个10条数据（查询10条）；开始索引为0
-- 从索引为0的数据开始，向后查10条数据
SELECT * FROM employee LIMIT 0 , 10;

-- 第二页显示从第11条数据开始到第20条；开始索引为10
SELECT * FROM employee LIMIT 10 , 10;

-- 第三页显示从第21条数据开始到第30条；开始索引为20
SELECT * FROM employee LIMIT 20 , 10;

-- 第四页显示从第31条数据开始到第40条；开始索引为30
SELECT * FROM employee LIMIT 30 , 10;
```



#### <span id="head105">8.1 分页查询流程分析与问题</span>

##### <span id="head106">8.1.1 分页的两种情况</span>

> 假设数据有N条，要求每页有x条数据，进行分页处理有两种情况如下：
>
> 1. 当N除以x整除时，也就是意味着我们分了N/x页，每页显示数据平均为10条，不多不少
> 2. 当N除以x有余数时，也就是意味着我们分了N/x页，前面的N/x-1页每页显示数据平均为10条，而最后一页显示余数页



##### <span id="head107">8.1.2 分页的流程步骤</span>

> 1. 确定每页显示的数据条数
> 2. 确定分页显示所需的总页数（数据库中的总数据条数）
> 3. 编写SQL查询语句，实现数据查询
> 4. 编写JSP页面代码进行分页功能显示



##### <span id="head108">8.1.3 分页查询在Web项目中的一些问题</span>

> **问题一：** 当浏览器发起分页请求时，浏览器需要传递什么参数给服务器？
>
> **Answer：** 当前页数

> **问题二：** 当服务器响应浏览器时，服务器需要传递什么参数给浏览器？
>
> **Answer：** 都是浏览器需要的数据；如下：
>
> - 当前页数（currentPage）
> - 总页数（totalPage）
> - 总记录数（totalSize）
> - 每页记录数（pageSize）
> - 当前页数据（list）

> **问题三：** 当服务器向浏览器响应上面的五个参数时，是将五个参数作为整体传递还是独立传递？
>
> **Answer：** 将五个参数封装成一个Bean对象，来进行域中的存储与传递
>
> - 服务器向浏览器传递参数，无非是通过域！
> - 如果是独立传递，那么就需要在域中存储五个参数（currentPage、totalPage、totalSize、pageSize、list）会给我们带来很大的不便
> - 如果是整体传递，那么只需要在域中存储一个参数（封装好的PageBean对象）



##### <span id="head109">8.1.4 分页查询的综合案例</span>

> 登录账号、密码正确后显示执行效果图如下：
>
> 注意：指定页数跳转需要使用到Java Script的方法实现、过滤非法页数，所以在此JSP章节先不施加代码和展开讲解
>
> 注意：下方代码实现，注意的点与流程解释我适当的在标题处做了内容注释！

![1588317675436](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200531101905.png)

###### <span id="head110"> IDEA架构与jar包展示</span>

![1588320289882](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200531101906.png)

###### <span id="head111"> 库表操作</span>

```sql
use temp;
create table user
(
id       int auto_increment
primary key,
username varchar(30) null,
password varchar(30) not null,
constraint username
unique (username)
);
```

###### <span id="head112"> c3p0.properties</span>

```java
c3p0.driverClass=com.mysql.jdbc.Driver
c3p0.jdbcUrl=jdbc:mysql://localhost:3306/temp
c3p0.user=root
c3p0.password=Mylifes1110
```

###### <span id="head113"> 连接池工具类DBUtils</span>

```java
package com.mylifes1110.java.utils;

import com.mchange.v2.c3p0.ComboPooledDataSource;

/**
* 连接池工具类
*/
public class DBUtils {
private static ComboPooledDataSource dataSource;

static {
dataSource = new ComboPooledDataSource();
}

public static ComboPooledDataSource getDataSource() {
return dataSource;
}
}
```

###### <span id="head114"> 实体类User</span>

```java
package com.mylifes1110.java.bean;

/**
* User实体类
*/
public class User {
private Integer id;
private String  username;
private String  password;

public User() {}

public User(Integer id, String username, String password) {
this.id       = id;
this.username = username;
this.password = password;
}

@Override
public String toString() {
return "User{" + "id=" + id + ", username='" + username + '\'' + ", password='" + password + '\'' + '}';
}

public Integer getId() {
return id;
}

public void setId(Integer id) {
this.id = id;
}

public String getPassword() {
return password;
}

public void setPassword(String password) {
this.password = password;
}

public String getUsername() {
return username;
}

public void setUsername(String username) {
this.username = username;
}
}
```

###### <span id="head115"> 登录页面login.jsp</span>

```html
<%--
Created by IntelliJ IDEA.
User: Ziph
Date: 2020/4/30
Time: 19:30
To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
<title>登录页面</title>
</head>
<body>
<font color="red"><b>${error}</b></font>
<form action="${pageContext.request.contextPath}/user" method="post">
<input type="hidden" name="methodName" value="login">
账号：<input type="text" name="username"><br>
密码：<input type="text" name="password"><br>
<button type="submit">登录</button>
</form>
</body>
</html>
```

###### <span id="head116"> 分页查询显示页面index.jsp</span>

```html
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%--
Created by IntelliJ IDEA.
User: Ziph
Date: 2020/4/30
Time: 19:13
To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
<title>分页查询显示主页</title>
<style>
a {
text-decoration: none;
}

#inputPage {
width: 40px;
}
.top_div {
position: relative;
top: 5px;
}
</style>
</head>
<body>
<div class="top_div">
欢迎~${sessionScope.user.username}&nbsp;&nbsp;
<a href="${pageContext.request.contextPath}/user?methodName=logout">注销</a>
</div>
<br>
<font color="red"><b>${logoutError}</b></font>
<table border="1px" cellspacing="0px" cellpadding="10px" width="600px" height="200px">
<tr>
<td><b>ID</b></td>
<td><b>账号</b></td>
<td><b>密码</b></td>
</tr>
<c:forEach items="${pageBean.list}" var="user">
<tr>
<td>${user.id}</td>
<td>${user.username}</td>
<td>${user.password}</td>
</tr>
</c:forEach>
<tr>
<td colspan="3" align="center">
<c:if test="${pageBean.currentPage != 1}">
<a href="${pageContext.request.contextPath}/user?methodName=selectUserListByPage&currentPage=1">[首页]</a>
<a href="${pageContext.request.contextPath}/user?methodName=selectUserListByPage&currentPage=${pageBean.currentPage - 1}">上一页</a>
</c:if>
<c:forEach var="i" begin="1" end="${pageBean.totalPage}" step="1">
<a href="${pageContext.request.contextPath}/user?methodName=selectUserListByPage&currentPage=${i}">${i}</a>
</c:forEach>
<c:if test="${pageBean.currentPage != pageBean.totalPage}">
<a href="${pageContext.request.contextPath}/user?methodName=selectUserListByPage&currentPage=${pageBean.currentPage + 1}">下一页</a>
<a href="${pageContext.request.contextPath}/user?methodName=selectUserListByPage&currentPage=${pageBean.totalPage}">[尾页]</a>
</c:if>
<input type="text" name="inputPage" id="inputPage">
<button type="submit" name="inputPage">跳转</button>
第${pageBean.currentPage}/${pageBean.totalPage}页
</td>
</tr>
</table>
</body>
</html>
```

###### <span id="head117"> 封装好的PageBean对象</span>

```java
package com.mylifes1110.java.bean;

import java.util.List;

/**
* 分页对象
* @param <T> 可以传入任何对象进行分页处理
*/
public class PageBean<T> {
private Integer currentPage;    // 当前页数
private Integer totalPage;      // 总页数
private Integer totalSize;      // 总数据条数
private Integer pageSize;       // 每页数据条数
private List<T> list;           // 当前页数据

public PageBean() {}

public PageBean(Integer currentPage, Integer totalPage, Integer totalSize, Integer pageSize, List<T> list) {
this.currentPage = currentPage;
this.totalPage   = totalPage;
this.totalSize   = totalSize;
this.pageSize    = pageSize;
this.list        = list;
}

@Override
public String toString() {
return "PageBean{" + "currentPage=" + currentPage + ", totalPage=" + totalPage + ", totalSize=" + totalSize
+ ", pageSize=" + pageSize + ", list=" + list + '}';
}

public Integer getCurrentPage() {
return currentPage;
}

public void setCurrentPage(Integer currentPage) {
this.currentPage = currentPage;
}

public List<T> getList() {
return list;
}

public void setList(List<T> list) {
this.list = list;
}

public Integer getPageSize() {
return pageSize;
}

public void setPageSize(Integer pageSize) {
this.pageSize = pageSize;
}

public Integer getTotalPage() {
return totalPage;
}

public void setTotalPage(Integer totalPage) {
this.totalPage = totalPage;
}

public Integer getTotalSize() {
return totalSize;
}

public void setTotalSize(Integer totalSize) {
this.totalSize = totalSize;
}
}
```

###### <span id="head118"> 通用Servlet</span>

```java
package com.mylifes1110.java.controller;

import java.io.IOException;

import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
* 通用Servlet
*/
@WebServlet(
name  = "BeanServlet",
value = "/bean"
)
public class BeanServlet extends HttpServlet {
protected void service(HttpServletRequest request, HttpServletResponse response)
throws ServletException, IOException {
String methodName = request.getParameter("methodName");

try {
Method method = this.getClass().getMethod(methodName, HttpServletRequest.class, HttpServletResponse.class);

if (method != null) {
String returnValue = (String) method.invoke(this, request, response);

if (returnValue != null) {
int index = returnValue.lastIndexOf(":");

if (index == -1) {
request.getRequestDispatcher(returnValue).forward(request, response);
} else {
String path = returnValue.substring(index + 1);

if (returnValue.startsWith("redirect")) {
response.sendRedirect(request.getContextPath() + path);
} else if (returnValue.startsWith("forward")) {
request.getRequestDispatcher(path).forward(request, response);
}
}
}
}
} catch (NoSuchMethodException | IllegalAccessException | InvocationTargetException e) {
e.printStackTrace();
}
}
}
```

###### <span id="head119"> UserServlet</span>

> - 处理当前页数
>
> - 获取分页对象PageBean
> - 页面跳转

```java
package com.mylifes1110.java.controller;

import java.lang.reflect.InvocationTargetException;

import java.sql.SQLException;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.beanutils.BeanUtils;

import com.mylifes1110.java.bean.PageBean;
import com.mylifes1110.java.bean.User;
import com.mylifes1110.java.service.UserService;
import com.mylifes1110.java.service.UserServiceImpl;

/**
* User相关Servlet请求处理
*/
@WebServlet(
name  = "UserServlet",
value = "/user"
)
public class UserServlet extends BeanServlet {
private UserService userService = new UserServiceImpl();

/**
* 登录
*
* @param request  请求对象
* @param response 响应对象
* @return 返回相应重定向或请求转发地址
*/
public String login(HttpServletRequest request, HttpServletResponse response) {
User loginUser = new User();

try {
BeanUtils.populate(loginUser, request.getParameterMap());

User checkUser = userService.login(loginUser);

if (checkUser != null) {
request.getSession().setAttribute("user", checkUser);

return "/user?methodName=selectUserListByPage";
} else {
request.setAttribute("error", "账号或密码错误！");

return "/login.jsp";
}
} catch (IllegalAccessException | InvocationTargetException | SQLException e) {
e.printStackTrace();
}

return "/login.jsp";
}

/**
* 注销
* @param request 请求对象
* @param response 响应对象
* @return 返回注销成功与失败的重定向和请求转发地址
*/
public String logout(HttpServletRequest request, HttpServletResponse response) {
try {
request.getSession().invalidate();

return "redirect:/login.jsp";
} catch (Exception e) {
e.printStackTrace();
}

request.setAttribute("logoutError", "注销失败！");

return "/index.jsp";
}

/**
* 分页查询
*
* @param request  请求对象
* @param response 响应对象
* @return 返回相应重定向或请求转发地址
*/
public String selectUserListByPage(HttpServletRequest request, HttpServletResponse response) {
String  currentPageStr = request.getParameter("currentPage");
Integer currentPage    = getCurrentPage(currentPageStr);

try {
PageBean<User> pageBean = userService.selectUserListByPage(currentPage);

request.setAttribute("pageBean", pageBean);

return "/index.jsp";
} catch (SQLException throwables) {
throwables.printStackTrace();
}

return "/login.jsp";
}

/**
* 获取当前页数
*
* @param currentPageStr 字符串类型的当前页数
* @return 返回Integer类型的当前页数
*/
public Integer getCurrentPage(String currentPageStr) {
if (currentPageStr == null) {

// 如果没有传递当前页数，默认第一页
currentPageStr = "1";
}

Integer currentPage = Integer.parseInt(currentPageStr);

return currentPage;
}
}
```

###### <span id="head120"> 访问资源登录校验LoginFilter</span>

> 一般登录校验的过滤器我们知道是要判断是否在登录状态下的，通过取出域中的实体类对象是否为空判断。但是每一个Servlet都会经过Filter过滤，当我们访问没有在登录状态下的登录页面时，它本应该是跳转Servlet进行请求处理，但是Servlet被Filter判断为不在登录状态而拦截反手就又是一个重定向到了登陆页面，这种情况就像递归没有出口一样，无限的访问下去，没有尽头！
>
> 为了解决这个问题，我们还需要判断一下路径是否包含登录页面的login关键字，如果包含此关键字就执行放行。如果没有包含关键字，再进一步去判断取出域中的实体类对象是否为空。如果为空，证明不在登录状态，则重定向到登录页面让用户进行登录；反之，如果不为空，证明在登陆状态，则直接放行，让它回到Servlet中进行请求处理！

```java
package com.mylifes1110.java.filter;

import java.io.IOException;

import javax.servlet.*;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
* 访问资源的登录校验
*/
@WebFilter(
filterName = "LoginFilter",
value      = "/*"
)
public class LoginFilter implements Filter {
public void destroy() {}

public void doFilter(ServletRequest req, ServletResponse resp, FilterChain chain)
throws ServletException, IOException {
HttpServletRequest  request    = (HttpServletRequest) req;
HttpServletResponse response   = (HttpServletResponse) resp;
String              uri        = request.getRequestURI();
String              methodName = request.getParameter("methodName");

if (uri.contains("login") || ((methodName != null) && methodName.equals("login"))) {
chain.doFilter(request, response);
} else {
Object checkUser = request.getSession().getAttribute("user");

if (checkUser == null) {
response.sendRedirect(request.getContextPath() + "/login.jsp");
} else {
chain.doFilter(request, response);
}
}
}

public void init(FilterConfig config) throws ServletException {}
}
```

###### <span id="head121"> Dao层接口</span>

```java
package com.mylifes1110.java.dao;

import java.sql.SQLException;

import java.util.List;

import com.mylifes1110.java.bean.User;

public interface UserDao {
User login(User loginUser) throws SQLException;

Integer selectTotalSize() throws SQLException;

List<User> selectUserListByPage(Integer beginIndex, Integer pageSize) throws SQLException;
}
```

###### <span id="head122"> Dao层实现类</span>

> - 获取总记录数
> - 获取当前页数据

```java
package com.mylifes1110.java.dao;

import java.sql.SQLException;

import java.util.List;

import org.apache.commons.dbutils.QueryRunner;
import org.apache.commons.dbutils.handlers.BeanHandler;
import org.apache.commons.dbutils.handlers.BeanListHandler;

import com.mylifes1110.java.bean.User;
import com.mylifes1110.java.utils.DBUtils;

public class UserDaoImpl implements UserDao {
@Override
public User login(User loginUser) throws SQLException {
return new QueryRunner(DBUtils.getDataSource()).query("select * from user where username = ? and password = ?",
new BeanHandler<User>(User.class),
loginUser.getUsername(),
loginUser.getPassword());
}

/**
* 获取集合中总记录数
* @return 返回集合中的总记录数
*/
@Override
public Integer selectTotalSize() throws SQLException {
return new QueryRunner(DBUtils.getDataSource()).query("select * from user",
new BeanListHandler<User>(User.class))
.size();
}

@Override
public List<User> selectUserListByPage(Integer beginIndex, Integer pageSize) throws SQLException {
return new QueryRunner(DBUtils.getDataSource()).query("select * from user limit ?, ?",
new BeanListHandler<User>(User.class),
beginIndex,
pageSize);
}
}
```

###### <span id="head123"> Service层接口</span>

```java
package com.mylifes1110.java.service;

import java.sql.SQLException;

import com.mylifes1110.java.bean.PageBean;
import com.mylifes1110.java.bean.User;

public interface UserService {
User login(User loginUser) throws SQLException;

PageBean<User> selectUserListByPage(Integer currentPage) throws SQLException;
}
```

###### <span id="head124"> Service层实现类</span>

> - 设置当前页数(currentPage)
> - 设置总记录数(totalSize)
> - 设置每页记录数(pageSize)
> - 设置总页数(totalPage)
>   - 总页数 = (总记录数 % 每页记录数 == 0) ? 总记录数/ 每页记录数 : 总记录数/ 每页记录数 + 1;
> - 设置当前页数据(list)
>   - begin = (currentPage - 1) * pageSize

```java
package com.mylifes1110.java.service;

import java.sql.SQLException;

import java.util.List;

import com.mylifes1110.java.bean.PageBean;
import com.mylifes1110.java.bean.User;
import com.mylifes1110.java.dao.UserDao;
import com.mylifes1110.java.dao.UserDaoImpl;

public class UserServiceImpl implements UserService {
private UserDao userDao = new UserDaoImpl();

@Override
public User login(User loginUser) throws SQLException {
User user = userDao.login(loginUser);

return user;
}

@Override
public PageBean<User> selectUserListByPage(Integer currentPage) throws SQLException {
PageBean<User> pageBean = new PageBean<>();

// 当前页数
pageBean.setCurrentPage(currentPage);

Integer totalSize = userDao.selectTotalSize();

// 数据库总记录数
pageBean.setTotalSize(totalSize);

// 每页记录数
Integer pageSize = 5;

pageBean.setPageSize(pageSize);

// 总页数
// 总页数 = 总记录数 / 每页记录数
Integer totalPage = (totalSize % pageSize == 0)
? totalSize / pageSize
: totalSize / pageSize + 1;

/*
* Integer totalPage = 0;
* if (totalSize % pageSize == 0) {
* /            可以整除
*   totalPage = totalSize / pageSize;
* } else {
* /            不可以整除
*   totalPage = totalSize / pageSize + 1;
* }
*/
pageBean.setTotalPage(totalPage);

/**
* 当前页数据
* select * from user limit ?, ?;
* 第一个?：开始索引 = (当前页数 - 1) * 每页记录数
* 第二个?：每页记录数pageSize
*/
Integer    beginIndex = (currentPage - 1) * pageSize;
List<User> list       = userDao.selectUserListByPage(beginIndex, pageSize);

pageBean.setList(list);

return pageBean;
}
}
```

