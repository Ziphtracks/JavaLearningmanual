* [Java Web之Filter过滤器](#java-web%E4%B9%8Bfilter%E8%BF%87%E6%BB%A4%E5%99%A8)
    * [一、什么是过滤器](#%E4%B8%80%E4%BB%80%E4%B9%88%E6%98%AF%E8%BF%87%E6%BB%A4%E5%99%A8)
    * [二、了解过滤器](#%E4%BA%8C%E4%BA%86%E8%A7%A3%E8%BF%87%E6%BB%A4%E5%99%A8)
      * [2\.1 简单概念](#21-%E7%AE%80%E5%8D%95%E6%A6%82%E5%BF%B5)
      * [2\.2 生命周期](#22-%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F)
      * [2\.3 执行流程](#23-%E6%89%A7%E8%A1%8C%E6%B5%81%E7%A8%8B)
    * [三、过滤器的开发步骤](#%E4%B8%89%E8%BF%87%E6%BB%A4%E5%99%A8%E7%9A%84%E5%BC%80%E5%8F%91%E6%AD%A5%E9%AA%A4)
    * [四、过滤器的配置方式](#%E5%9B%9B%E8%BF%87%E6%BB%A4%E5%99%A8%E7%9A%84%E9%85%8D%E7%BD%AE%E6%96%B9%E5%BC%8F)
      * [4\.1 xml配置](#41-xml%E9%85%8D%E7%BD%AE)
      * [4\.2 注解配置](#42-%E6%B3%A8%E8%A7%A3%E9%85%8D%E7%BD%AE)
    * [五、IDEA快速创建Filter过滤器](#%E4%BA%94idea%E5%BF%AB%E9%80%9F%E5%88%9B%E5%BB%BAfilter%E8%BF%87%E6%BB%A4%E5%99%A8)
    * [六、过滤器链与优先级问题](#%E5%85%AD%E8%BF%87%E6%BB%A4%E5%99%A8%E9%93%BE%E4%B8%8E%E4%BC%98%E5%85%88%E7%BA%A7%E9%97%AE%E9%A2%98)
      * [6\.1 什么是过滤器链](#61-%E4%BB%80%E4%B9%88%E6%98%AF%E8%BF%87%E6%BB%A4%E5%99%A8%E9%93%BE)
      * [6\.2 过滤器的优先级](#62-%E8%BF%87%E6%BB%A4%E5%99%A8%E7%9A%84%E4%BC%98%E5%85%88%E7%BA%A7)
    * [七、过滤器的初始化参数问题](#%E4%B8%83%E8%BF%87%E6%BB%A4%E5%99%A8%E7%9A%84%E5%88%9D%E5%A7%8B%E5%8C%96%E5%8F%82%E6%95%B0%E9%97%AE%E9%A2%98)
      * [7\.1 xml配置初始化参数及获取（推荐）](#71-xml%E9%85%8D%E7%BD%AE%E5%88%9D%E5%A7%8B%E5%8C%96%E5%8F%82%E6%95%B0%E5%8F%8A%E8%8E%B7%E5%8F%96%E6%8E%A8%E8%8D%90)
      * [7\.2 注解配置初始化参数及获取](#72-%E6%B3%A8%E8%A7%A3%E9%85%8D%E7%BD%AE%E5%88%9D%E5%A7%8B%E5%8C%96%E5%8F%82%E6%95%B0%E5%8F%8A%E8%8E%B7%E5%8F%96)
    * [八、通用Filter解决多个Serlvet乱码问题](#%E5%85%AB%E9%80%9A%E7%94%A8filter%E8%A7%A3%E5%86%B3%E5%A4%9A%E4%B8%AAserlvet%E4%B9%B1%E7%A0%81%E9%97%AE%E9%A2%98)
    * [九、自动登录综合案例](#%E4%B9%9D%E8%87%AA%E5%8A%A8%E7%99%BB%E5%BD%95%E7%BB%BC%E5%90%88%E6%A1%88%E4%BE%8B)
      * [login\.html登录页面](#loginhtml%E7%99%BB%E5%BD%95%E9%A1%B5%E9%9D%A2)
      * [LoginServlet登录处理](#loginservlet%E7%99%BB%E5%BD%95%E5%A4%84%E7%90%86)
      * [AutoLoginFilter实现自动登录的过滤器](#autologinfilter%E5%AE%9E%E7%8E%B0%E8%87%AA%E5%8A%A8%E7%99%BB%E5%BD%95%E7%9A%84%E8%BF%87%E6%BB%A4%E5%99%A8)
      * [CookieUtils获取Cookies数组校验工具类](#cookieutils%E8%8E%B7%E5%8F%96cookies%E6%95%B0%E7%BB%84%E6%A0%A1%E9%AA%8C%E5%B7%A5%E5%85%B7%E7%B1%BB)
      * [ShowServlet展示登录结果](#showservlet%E5%B1%95%E7%A4%BA%E7%99%BB%E5%BD%95%E7%BB%93%E6%9E%9C)
    * [十、过滤敏感词汇案例（过滤脏话）](#%E5%8D%81%E8%BF%87%E6%BB%A4%E6%95%8F%E6%84%9F%E8%AF%8D%E6%B1%87%E6%A1%88%E4%BE%8B%E8%BF%87%E6%BB%A4%E8%84%8F%E8%AF%9D)
          * [xml配置文件配置信息](#xml%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E9%85%8D%E7%BD%AE%E4%BF%A1%E6%81%AF)
              * [message\.html发送消息的主页面](#messagehtml%E5%8F%91%E9%80%81%E6%B6%88%E6%81%AF%E7%9A%84%E4%B8%BB%E9%A1%B5%E9%9D%A2)
              * [MessageServlet服务器响应过滤后的信息](#messageservlet%E6%9C%8D%E5%8A%A1%E5%99%A8%E5%93%8D%E5%BA%94%E8%BF%87%E6%BB%A4%E5%90%8E%E7%9A%84%E4%BF%A1%E6%81%AF)
              * [EncodingFilter解决中文乱码问题的Filter](#encodingfilter%E8%A7%A3%E5%86%B3%E4%B8%AD%E6%96%87%E4%B9%B1%E7%A0%81%E9%97%AE%E9%A2%98%E7%9A%84filter)
              * [过滤脏词的Filter（动态代理增强）](#%E8%BF%87%E6%BB%A4%E8%84%8F%E8%AF%8D%E7%9A%84filter%E5%8A%A8%E6%80%81%E4%BB%A3%E7%90%86%E5%A2%9E%E5%BC%BA)

# Java Web之Filter过滤器

------



### 一、什么是过滤器

> Filter也称之为过滤器，它是Servlet技术中最激动人心的技术，WEB开发人员通过Filter技术，对web服务器管理的所有web资源：例如Jsp, Servlet, 静态图片文件或静态 html 文件等进行拦截，从而实现一些特殊的功能。例如实现URL级别的权限访问控制、过滤敏感词汇、压缩响应信息等一些高级功能。
> Servlet API中提供了一个Filter接口，开发web应用时，如果编写的Java类实现了这个接口，则把这个java类称之为过滤器Filter。通过Filter技术，开发人员可以实现用户在访问某个目标资源之前，对访问的请求和响应进行拦截。



### 二、了解过滤器



#### 2.1 简单概念

> 过滤器就是一个用于在请求之前处理资源的组件



#### 2.2 生命周期

> - 随着服务器启动而启动
> - 随着发起请求而过滤
> - 随着服务器的关闭而销毁



#### 2.3 执行流程

> 1. 浏览器发起请求
> 2. 服务器会根据请求，创建request对象和response对象
> 3. 过滤器持有request对象和response对象
> 4. 只有当过滤器放行之后，request对象和response对象才会传给Servlet
>
> 注意：关于放行，Filter遵循“先配置后放行”的原则



### 三、过滤器的开发步骤

> 1. java类实现Filter接口
> 2. 重写doFilter方法
> 3. 过滤处理
> 4. 过滤处理后，使用FilterChain放行
> 5. 设置需要xml配置或注解配置
>
> 注意：实现Filter接口的时候是实现javax.servlet.Filter接口

```java
package com.mylifes1110.java.filter;

import javax.servlet.*;
import java.io.IOException;

public class FirstFilter implements Filter {

    /**
     * 过滤器的初始化方法
     * 过滤器是随着服务器的初始化而初始化
     */
    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
        System.out.println("---Filter初始化---");
    }

    /**
     * 过滤器的处理服务
     */
    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        //过滤器处理请求
        System.out.println("---Filter处理请求---");
        //使用过滤器链放行
        filterChain.doFilter(servletRequest, servletResponse);
    }

    /**
     * 过滤器的销毁
     * 过滤器的销毁是随着服务器的关闭而销毁
     */
    @Override
    public void destroy() {
        System.out.println("---Filter销毁---");
    }
}
```



### 四、过滤器的配置方式

> 过滤器和Servlet相同有两种配置方式xml配置和注解配置
>
> 注意：由于过滤器的特殊场景应用，比如：使用过滤器来解决中文乱码问题等等，我们需要xml配置，而注解配置改变不了我们特殊场景的便利



#### 4.1 xml配置

> xml配置和Serlvet配置极其相似，感觉就是把Servlet换成了Filter，下面展示了两个Filter的xml配置

```xml
	<!--声明FirstFilter过滤器-->
    <filter>
		<!--名称-->
        <filter-name>FirstFilter</filter-name>
        <!--过滤器类全称-->
        <filter-class>com.mylifes1110.java.filter.FirstFilter</filter-class>
    </filter>
     <!--映射路径配置-->
    <filter-mapping>
		<!--名称-->
        <filter-name>FirstFilter</filter-name>
        <!--/*代表过滤所有资源-->
        <url-pattern>/*</url-pattern>
    </filter-mapping>
```

```xml
	<filter>
        <filter-name>FirstFilter1</filter-name>
        <filter-class>com.mylifes1110.java.filter.FirstFilter1</filter-class>
    </filter>
    <filter-mapping>
        <filter-name>FirstFilter1</filter-name>
        <!--根据路径只过滤这个Servlet-->
<!--        <url-pattern>/tff</url-pattern>-->
        <!--根据Servlet名称只过滤这个Serlvet-->
        <servlet-name>TestFirstFilterServlet</servlet-name>
    </filter-mapping>
```



#### 4.2 注解配置

> **在自定义的Filter类上使用注解@WebFilter即可** 
>
> - filterName表示Filter名称
> - value或urlPatterns表示需要过滤的Servlet路径
> - initParams表示初始化参数

```java
package com.mylifes1110.java.filter;

import javax.servlet.*;
import javax.servlet.annotation.WebFilter;
import javax.servlet.annotation.WebInitParam;
import java.io.IOException;
import java.util.Enumeration;

/**
 * 注解配置
 * 注意：value和urlPatterns是相同作用
 * IDEA为了一部分人的编码习惯加了value
 */
@WebFilter(filterName = "AnnotationFilter", value = "/*",initParams = {
        @WebInitParam(name = "username", value = "join"),
        @WebInitParam(name = "password", value = "123456")})
public class AnnotationFilter implements Filter {
    public void destroy() {
    }

    public void doFilter(ServletRequest req, ServletResponse resp, FilterChain chain) throws ServletException, IOException {
        System.out.println("AnnotationFilterAnnotationFilterAnnotationFilterAnnotationFilterAnnotationFilter");
        chain.doFilter(req, resp);
    }

    public void init(FilterConfig config) throws ServletException {
        
        }
    }
}
```



### 五、IDEA快速创建Filter过滤器

> 在创建Servlet的时候IDEA为我们提供了快速创建Servlet的方法，同样，过滤器的创建也提供了快捷的创建方法

![1587618745261](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200531100739.png)

![1587618846037](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200531100740.png)

> **创建结果如下：** 

![1587618881689](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200531100741.png)



### 六、过滤器链与优先级问题



#### 6.1 什么是过滤器链

> 通常客户端对服务器请求之后，服务器调用Servlet之前会执行一组过滤器（多个过滤器）,那么这组过滤器就称为一条过滤器链。
> 每个过滤器实现某个特定的功能，一个过滤器检测多个Servlet。（匹配几个，检测几个）。
> 一组过滤器中的执行顺序与<filter-mapping>的配置顺序有关。
> 当第一个Filter的doFilter方法被调用时，web服务器会创建一个代表Filter链的FilterChain对象传递给该方法。在doFilter方法中，开发人员如果调用了FilterChain对象的doFilter方法，则web服务器会检查FilterChain对象中是否还有filter，如果有，则调用第2个filter，如果没有，则调用目标资源



#### 6.2 过滤器的优先级

> 在一个web应用中，可以开发编写多个Filter，这些Filter组合起来称之为一个Filter链。web服务器根据Filter在web.xml文件中的注册顺序，决定先调用哪个Filter。当第一个Filter的doFilter方法被调用时，web服务器会创建一个代表Filter链的FilterChain对象传递给该方法。在doFilter方法中，开发人员如果调用了FilterChain对象的doFilter方法，则web服务器会检查FilterChain对象中是否还有filter，如果有，则调用第2个filter，如果没有，则调用目标资源

> 在xml配置中，过滤器的优先级是根据filter-mapping注册顺序，从上往下执行
>
> 在注解中，过滤器是按照类名的字典顺序执行的。如果不同包的Filter类，先按照包名的字典顺序寻找Filter，分包后再按照类名字典顺序执行
>
> 注意：xml配置的优先级高于注解配置的优先级



### 七、过滤器的初始化参数问题



#### 7.1 xml配置初始化参数及获取（推荐）

> **xml配置信息如下：** 

```xml
	<filter>
        <filter-name>GetFilterConfigFilter</filter-name>
        <filter-class>com.mylifes1110.java.filter.GetFilterConfigFilter</filter-class>
        <init-param>
            <param-name>username</param-name>
            <param-value>ziph</param-value>
        </init-param>
        <init-param>
            <param-name>password</param-name>
            <param-value>123456</param-value>
        </init-param>
    </filter>
    <filter-mapping>
        <filter-name>GetFilterConfigFilter</filter-name>
        <url-pattern>/*</url-pattern>
    </filter-mapping>
```

> **Filter获取初始化参数代码如下：** 

```java
package com.mylifes1110.java.filter;

import javax.servlet.*;
import java.io.IOException;
import java.util.Enumeration;

public class GetFilterConfigFilter implements Filter {

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
        /**
         * 获取指定初始化参数
         */
        String name = filterConfig.getInitParameter("name");
        System.out.println(name);

        /**
         * 获取全部初始化参数
         */
        Enumeration<String> initParameterNames = filterConfig.getInitParameterNames();
        while (initParameterNames.hasMoreElements()) {
            //获取初始化参数名称
            String parameterNames = initParameterNames.nextElement();
            //获取初始化参数值
            String parameterValues = filterConfig.getInitParameter(parameterNames);
            System.out.println("name : " + parameterNames + "\t" + "value : " + parameterValues);
        }
    }

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        System.out.println("GetFilterConfigFilter");
        filterChain.doFilter(servletRequest, servletResponse);
    }

    @Override
    public void destroy() {

    }
}
```



#### 7.2 注解配置初始化参数及获取

> **注解配置及获取代码如下：** 

```java
package com.mylifes1110.java.filter;

import javax.servlet.*;
import javax.servlet.annotation.WebFilter;
import javax.servlet.annotation.WebInitParam;
import java.io.IOException;
import java.util.Enumeration;

/**
 * 注解配置
 * 注意：value和urlPatterns是相同作用
 * IDEA为了一部分人的编码习惯加了value
 */
@WebFilter(filterName = "AnnotationFilter", value = "/*",initParams = {
        @WebInitParam(name = "username", value = "join"),
        @WebInitParam(name = "password", value = "123456")})
public class AnnotationFilter implements Filter {
    public void destroy() {
    }

    public void doFilter(ServletRequest req, ServletResponse resp, FilterChain chain) throws ServletException, IOException {
        System.out.println("AnnotationFilter");
        chain.doFilter(req, resp);
    }

    public void init(FilterConfig config) throws ServletException {
        Enumeration<String> initParameterNames = config.getInitParameterNames();
        while (initParameterNames.hasMoreElements()) {
            String parameterNames = initParameterNames.nextElement();
            String parameterValues = config.getInitParameter(parameterNames);
            System.out.println("name : " + parameterNames + "\t" + "value : " + parameterValues);
        }
    }
}
```



### 八、通用Filter解决多个Serlvet乱码问题

> 当我们在Servlet中有乱码问题，需要做解决乱码问题的处理。如果有100个Servlet，我们需要书写100次处理操作。我们学了Filter，知道Filter是Servlet中间做过滤的，那就可以去改进Filter通用于解决所有Servlet的乱码问题！

> **思路分析：** 
>
> 1. xml配置Filter过滤器URL为/*（过滤所有Serlvet）
> 2. xml配置初始化参数名为encoding，参数值为utf-8
> 3. 在Filter中声明一个字符串对象encoding，以便接收初始化参数值（utf-8）
> 4. 在init方法中获取设置好的初始化参数值config.getInitParameter("encoding");
> 5. 在doFilter方法中，利用encoding解决乱码问题，并放行
>
> 优点：一个过滤器可以解决多个Serlvet的乱码问题，并且降低了耦合性，我们只需要修改xml配置就可以修改编码

> **xml配置信息如下：** 

```xml
	<!--EncodingFilter-->
    <filter>
        <filter-name>EncodingFilter</filter-name>
        <filter-class>com.mylifes1110.java.filter.EncodingFilter</filter-class>
        <!--为过滤器配置编码字符集默认初始化参数-->
        <init-param>
            <param-name>encoding</param-name>
            <param-value>utf-8</param-value>
        </init-param>
    </filter>
    <filter-mapping>
        <filter-name>EncodingFilter</filter-name>
        <url-pattern>/*</url-pattern>
    </filter-mapping>
```



> **编码通用Filter代码如下：** 

```java
package com.mylifes1110.java.filter;

import javax.servlet.*;
import javax.servlet.annotation.WebFilter;
import java.io.IOException;

public class EncodingFilter implements Filter {
    private String encoding = null;

    public void destroy() {
    }

    public void doFilter(ServletRequest req, ServletResponse resp, FilterChain chain) throws ServletException, IOException {
        /**
         * 在放行之前处理响应和请求中文乱码问题
         */
        resp.setContentType("text/html;charset=utf-8");
        req.setCharacterEncoding(encoding);
        chain.doFilter(req, resp);
    }

    public void init(FilterConfig config) throws ServletException {
        /**
         * 获取xml中设置好的编码参数
         */
        encoding = config.getInitParameter("encoding");
    }
}
```



### 九、自动登录综合案例

> **实现步骤：** 登录账号后，根据自己勾选的自动登录选项框来判断是否开启自动登录功能。我们需要判断是否访问了登录资源。如果是，执行放行；如果不是，判断该账号是否在登陆状态。如果是在登陆状态，直接放行；没有在登陆状态，需要从Cookie中取出存储的用户信息（账号、密码），进行登陆操作。如果登录成功，直接放行；如果登录失败（中途修改过密码），就利用请求转发或者重定向跳转到登录页面



###### login.html登录页面

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>登录页面</title>
</head>
<body>
<form action="/firstfilter/login" method="post">
    账号:<input type="text" name="username"><br>
    密码:<input type="password" name="password"><br>
    自动登录 <input type="checkbox" name="autoLogin" value="autoLogin"><br>
    <button type="submit">登录</button>
</form>
</body>
</html>
```



###### LoginServlet登录处理

```java
package com.mylifes1110.java.demo.servlet;

import com.mylifes1110.java.demo.entity.User;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * 登录处理
 */
@WebServlet(name = "LoginServlet", value = "/login")
public class LoginServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        /**
         * 1.获取请求参数账号和密码
         * 2.对帐号和密码进行校验（成功，则判断是否获取的到自动登录参数，是的话讲账号、密码存储在Cookie中）
         * 3.封装成对象存储在Session中
         * 4.转发至展示页面
         */
        String username = request.getParameter("username");
        String password = request.getParameter("password");
        if ("ziph".equals(username) && "123456".equals(password)) {
            String autoLogin = request.getParameter("autoLogin");
            if ("autoLogin".equals(autoLogin)) {
                Cookie cookie = new Cookie("autoLogin", username + "-" + password);
                cookie.setMaxAge(60 * 60 * 24 * 7);
                response.addCookie(cookie);
            }
            User user = new User();
            user.setUsername(username);
            user.setPassword(password);
            request.getSession().setAttribute("user", user);
            request.getRequestDispatcher("/show").forward(request, response);
        } else {
            /**
             * 登录失败转发至登录页面
             */
            request.getRequestDispatcher("/login.html").forward(request, response);
        }
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doPost(request, response);
    }
}
```



###### AutoLoginFilter实现自动登录的过滤器

```java
package com.mylifes1110.java.demo.filter;

import com.mylifes1110.java.demo.entity.User;
import com.mylifes1110.java.demo.utils.CookieUtils;

import javax.servlet.*;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import java.io.IOException;

/**
 * 实现自动登录的过滤器
 */
@WebFilter(filterName = "AutoLoginFilter", value = "/*")
public class AutoLoginFilter implements Filter {
    public void destroy() {
    }

    public void doFilter(ServletRequest req, ServletResponse resp, FilterChain chain) throws ServletException, IOException {
        HttpServletRequest request = (HttpServletRequest) req;
        //获取请求路径
        String requestURI = request.getRequestURI();
        //判断请求路径是否与登录资源相关
        if (requestURI.contains("login")) {
            //请求是与登录相关资源
            chain.doFilter(request, resp);
        } else {
            /**
             * 请求的不是与登录的相关资源
             */
            User user = (User) request.getSession().getAttribute("user");
            /**
             * 判断登录状态
             */
            if (user == null) {
                Cookie cookie = CookieUtils.getCookie(request.getCookies(), "autoLogin");
                //cookie为空（被清理的缓存）
                if (cookie == null) {
                    //cookie被清理了，自动登录失败，请求转发至登录页面
                    request.getRequestDispatcher("/login.html").forward(request, resp);
                } else {
                    //有cookie进行自动登录操作
                    //获取账号信息，拼接好的字符串ziph-123456b，并进行拆分
                    String cookieValue = cookie.getValue();
                    String[] split = cookieValue.split("-");
                    String username = split[0];
                    String password = split[1];
                    if ("ziph".equals(username) && "123456".equals(password)) {
                        //自动登录成功，修改登陆状态，直接放行
                        user = new User();
                        user.setUsername(username);
                        user.setPassword(password);
                        request.getSession().setAttribute("user", user);
                        chain.doFilter(request, resp);
                    } else {
                        //自动登陆失败（修改了密码），转发至登录页面
                        request.getRequestDispatcher("/login.html").forward(request, resp);
                    }
                }
            } else {
                //在登录状态直接放行
                chain.doFilter(request, resp);
            }
        }
    }

    public void init(FilterConfig config) throws ServletException {

    }

}
```



###### CookieUtils获取Cookies数组校验工具类

```java
package com.mylifes1110.java.demo.utils;

import javax.servlet.http.Cookie;

public class CookieUtils {
    public static Cookie getCookie(Cookie[] cookies, String cookieName) {
        if (cookies != null && cookies.length != 0) {
            for (Cookie cookie : cookies) {
                if (cookieName.equals(cookie.getName())) {
                    return cookie;
                }
            }
        }
        return null;
    }
}
```



###### ShowServlet展示登录结果

```java
package com.mylifes1110.java.demo.servlet;

import com.mylifes1110.java.demo.entity.User;
import com.sun.org.apache.xpath.internal.operations.String;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.nio.Buffer;

/**
 * 展示登录结果
 */
@WebServlet(name = "ShowServlet", value = "/show")
public class ShowServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("text/html;charset=utf-8");
        request.setCharacterEncoding("utf-8");
        User user = (User) request.getSession().getAttribute("user");
        StringBuffer buffer = new StringBuffer();
        if (user == null) {
            buffer.append("对不起，您还没有登录！<br><a href='/firstfilter/login.html'>请登录</a>");
        } else {
            buffer.append(user.getUsername() + " 主人，您回来啦！");
        }
        response.getWriter().println(buffer.toString());
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doPost(request, response);
    }
}
```



### 十、过滤敏感词汇案例（过滤脏话）

> 使用Filter过滤脏词，原理是利用动态代码模式为getParaemeter方法增强过滤脏词的功能在Filter过滤器中过滤后，Servlet获取过滤后的参数！

###### xml配置文件配置信息 

```xml
	<filter>
        <filter-name>EncodingFilter</filter-name>
        <filter-class>com.mylifes1110.java.filtersensitivedemo.filter.EncodingFilter</filter-class>
        <init-param>
            <param-name>encoding</param-name>
            <param-value>utf-8</param-value>
        </init-param>
    </filter>
    <filter-mapping>
        <filter-name>EncodingFilter</filter-name>
        <url-pattern>/*</url-pattern>
    </filter-mapping>

    <filter>
        <filter-name>SensitiveWordsFilter</filter-name>
        <filter-class>com.mylifes1110.java.filtersensitivedemo.filter.SensitiveWordsFilter</filter-class>
        <init-param>
            <param-name>word1</param-name>
            <param-value>笨蛋</param-value>
        </init-param>
        <init-param>
            <param-name>word2</param-name>
            <param-value>扯淡</param-value>
        </init-param>
        <init-param>
            <param-name>word3</param-name>
            <param-value>王八蛋</param-value>
        </init-param>
    </filter>
    <filter-mapping>
        <filter-name>SensitiveWordsFilter</filter-name>
        <url-pattern>/*</url-pattern>
    </filter-mapping>
```

###### message.html发送消息的主页面

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>消息页</title>
</head>
<body>
<form action="/firstfilter/message" method="post">
    内容:<input type="text" name="message"><br>
    <button type="submit">发送</button><br>
</form>
</body>
</html>
```

###### MessageServlet服务器响应过滤后的信息

```java
package com.mylifes1110.java.filtersensitivedemo.servlet;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * 脏词：扯淡、笨蛋、王八蛋
 */
@WebServlet(name = "MessageServlet", value = "/message")
public class MessageServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        /**
         * 普通的getParameter不具备处理脏词的特性
         * 我们需要使用getParameter方法获取处理后的参数（使用过滤器处理脏词之后的参数）
         */
        String message = request.getParameter("message");
        response.getWriter().println(message);

        //控制台查看过滤后的情况
        System.out.println(message);
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doPost(request, response);
    }
}
```

###### EncodingFilter解决中文乱码问题的Filter

```java
package com.mylifes1110.java.filtersensitivedemo.filter;

import javax.servlet.*;
import java.io.IOException;

public class EncodingFilter implements Filter {
    private String encoding = null;

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
        encoding = filterConfig.getInitParameter("encoding");
    }

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        servletRequest.setCharacterEncoding(encoding);
        servletResponse.setContentType("text/html;charset=utf-8");
        filterChain.doFilter(servletRequest, servletResponse);
    }

    @Override
    public void destroy() {

    }
}
```

###### 过滤脏词的Filter（动态代理增强）

```java
package com.mylifes1110.java.filtersensitivedemo.filter;

import javax.servlet.*;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.lang.reflect.InvocationHandler;
import java.lang.reflect.Method;
import java.lang.reflect.Proxy;
import java.util.ArrayList;
import java.util.Enumeration;
import java.util.List;

/**
 * 脏词：扯淡、笨蛋、王八蛋
 */
public class SensitiveWordsFilter implements Filter {
    //存放脏词的集合
    List<String> sensitiveWords = new ArrayList<>();

    public void destroy() {
    }

    public void doFilter(ServletRequest req, ServletResponse resp, FilterChain chain) throws ServletException, IOException {
        HttpServletRequest request = (HttpServletRequest) req;
        //增强getParameter方法（增加过滤功能）
        HttpServletRequest requestProxy = (HttpServletRequest) Proxy.newProxyInstance(
                request.getClass().getClassLoader(),
                request.getClass().getInterfaces(),
                new InvocationHandler() {
                    @Override
                    public Object invoke(Object proxy, Method method, Object[] args) throws Throwable {
                        Object returnValues = null;
                        String methodName = method.getName();
                        if ("getParameter".equals(methodName)) {
                            String returnValues1 = (String) method.invoke(request, args);
                            //开始处理脏词
                            for (String sensitiveWord : sensitiveWords) {
                                if (returnValues1.contains(sensitiveWord)) {
                                    /**
                                     * getParameter方法返回值中有脏词
                                     * 可以根据脏词长度返回*号个数
                                     */
                                    StringBuffer buffer = new StringBuffer();
                                    for (int i = 0; i < sensitiveWord.length(); i++) {
                                        buffer.append("*");
                                    }
                                    returnValues1 = returnValues1.replace(sensitiveWord, buffer);
                                }
                            }
                            return returnValues1;
                        }
                        else {
                            returnValues = method.invoke(request, args);
                        }
                        return returnValues;
                    }
                });
        /**
         * 放行增强的request对象——requestProxy
         */
        chain.doFilter(requestProxy, resp);
    }

    public void init(FilterConfig config) throws ServletException {
        /**
         * 获取所有初始化参数（脏词）
         */
        Enumeration<String> initParameterNames = config.getInitParameterNames();
        while (initParameterNames.hasMoreElements()) {
            String sensitiveWord = config.getInitParameter(initParameterNames.nextElement());
            //把所有脏词加入集合中
            sensitiveWords.add(sensitiveWord);
        }
    }
}
```


