* [Java Web之Listener监听器](#java-web%E4%B9%8Blistener%E7%9B%91%E5%90%AC%E5%99%A8)
    * [一、了解监听器](#%E4%B8%80%E4%BA%86%E8%A7%A3%E7%9B%91%E5%90%AC%E5%99%A8)
      * [1\.1 什么是监听器](#11-%E4%BB%80%E4%B9%88%E6%98%AF%E7%9B%91%E5%90%AC%E5%99%A8)
        * [1\.1\.1 监听器的组件](#111-%E7%9B%91%E5%90%AC%E5%99%A8%E7%9A%84%E7%BB%84%E4%BB%B6)
      * [1\.2 什么是Servlet监听器](#12-%E4%BB%80%E4%B9%88%E6%98%AFservlet%E7%9B%91%E5%90%AC%E5%99%A8)
        * [1\.2\.1 Servlet监听器的组件](#121-servlet%E7%9B%91%E5%90%AC%E5%99%A8%E7%9A%84%E7%BB%84%E4%BB%B6)
      * [1\.3 Servlet监听器的分类](#13-servlet%E7%9B%91%E5%90%AC%E5%99%A8%E7%9A%84%E5%88%86%E7%B1%BB)
    * [二、监听器的开发步骤](#%E4%BA%8C%E7%9B%91%E5%90%AC%E5%99%A8%E7%9A%84%E5%BC%80%E5%8F%91%E6%AD%A5%E9%AA%A4)
    * [三、监听器的配置方式](#%E4%B8%89%E7%9B%91%E5%90%AC%E5%99%A8%E7%9A%84%E9%85%8D%E7%BD%AE%E6%96%B9%E5%BC%8F)
      * [3\.1 xml配置](#31-xml%E9%85%8D%E7%BD%AE)
      * [3\.2 注解配置](#32-%E6%B3%A8%E8%A7%A3%E9%85%8D%E7%BD%AE)
    * [四、一类监听器](#%E5%9B%9B%E4%B8%80%E7%B1%BB%E7%9B%91%E5%90%AC%E5%99%A8)
      * [4\.1 监听ServletContext域对象](#41-%E7%9B%91%E5%90%ACservletcontext%E5%9F%9F%E5%AF%B9%E8%B1%A1)
      * [4\.2 监听Session域对象](#42-%E7%9B%91%E5%90%ACsession%E5%9F%9F%E5%AF%B9%E8%B1%A1)
      * [4\.3 监听Request域对象](#43-%E7%9B%91%E5%90%ACrequest%E5%9F%9F%E5%AF%B9%E8%B1%A1)
    * [五、二类监听器](#%E4%BA%94%E4%BA%8C%E7%B1%BB%E7%9B%91%E5%90%AC%E5%99%A8)
      * [5\.1 监听ServletContext属性](#51-%E7%9B%91%E5%90%ACservletcontext%E5%B1%9E%E6%80%A7)
      * [5\.2 监听Session属性](#52-%E7%9B%91%E5%90%ACsession%E5%B1%9E%E6%80%A7)
      * [5\.3 监听Request属性](#53-%E7%9B%91%E5%90%ACrequest%E5%B1%9E%E6%80%A7)
    * [六、三类监听器](#%E5%85%AD%E4%B8%89%E7%B1%BB%E7%9B%91%E5%90%AC%E5%99%A8)
    * [七、浏览器记录登录认数综合案例](#%E4%B8%83%E6%B5%8F%E8%A7%88%E5%99%A8%E8%AE%B0%E5%BD%95%E7%99%BB%E5%BD%95%E8%AE%A4%E6%95%B0%E7%BB%BC%E5%90%88%E6%A1%88%E4%BE%8B)
      - [login\.html登录页面](#loginhtml%E7%99%BB%E5%BD%95%E9%A1%B5%E9%9D%A2)
      - [EncodingFilter过滤器解决乱码问题的xml配置信息](#encodingfilter%E8%BF%87%E6%BB%A4%E5%99%A8%E8%A7%A3%E5%86%B3%E4%B9%B1%E7%A0%81%E9%97%AE%E9%A2%98%E7%9A%84xml%E9%85%8D%E7%BD%AE%E4%BF%A1%E6%81%AF)
      - [EncodingFilter过滤器解决乱码问题代码](#encodingfilter%E8%BF%87%E6%BB%A4%E5%99%A8%E8%A7%A3%E5%86%B3%E4%B9%B1%E7%A0%81%E9%97%AE%E9%A2%98%E4%BB%A3%E7%A0%81)
      - [User实体类对象（三类监听器监听，控制在线人数）](#user%E5%AE%9E%E4%BD%93%E7%B1%BB%E5%AF%B9%E8%B1%A1%E4%B8%89%E7%B1%BB%E7%9B%91%E5%90%AC%E5%99%A8%E7%9B%91%E5%90%AC%E6%8E%A7%E5%88%B6%E5%9C%A8%E7%BA%BF%E4%BA%BA%E6%95%B0)
      - [LoginServlet登录处理](#loginservlet%E7%99%BB%E5%BD%95%E5%A4%84%E7%90%86)
      - [ShowServlet响应展示页面](#showservlet%E5%93%8D%E5%BA%94%E5%B1%95%E7%A4%BA%E9%A1%B5%E9%9D%A2)
      - [LogoutServlet注销功能](#logoutservlet%E6%B3%A8%E9%94%80%E5%8A%9F%E8%83%BD)

# Java Web之Listener监听器

------



### 一、了解监听器



#### 1.1 什么是监听器

> 监听器就是一个实现了特定接口的Java类。这个Java类用来监听另一个Java类的方法调用或者属性改变。当被监听的对象的发生上述的事件后。监听器某个方法就会立即执行。



##### 1.1.1 监听器的组件

> 监听器可以大致分为四个组件（方便理解）
>
> - 事件源：事件发生的源头
> - 监听器：监听事件发生
> - 绑定：将监听器绑定到事件源
> - 事件：能够触发监听器的事



#### 1.2 什么是Servlet监听器

> 在Servlet的规范中定义了多种类型的监听器。监听器用来分别监听 ServletContext、HttpSession、ServletRequest三个域对象的



##### 1.2.1 Servlet监听器的组件

> Servlet监听器的组件大致分为四个组件
>
> - 事件源：request域对象、session域对象、ServletContext域对象
> - 监听器：Servlet三种监听器
> - 绑定：配置web.xml
> - 事件：域对象发生改变



#### 1.3 Servlet监听器的分类 

> Servlet规范中提供了8个监听器
>
> **按功能进行划分将其分成三类，如下：** 
>
> - 一类：监听三个域对象的创建和销毁的监听器
> - 二类：监听三个域对象的属性变更的监听器。(属性添加、属性移除、属性替换)
> - 三类：监听HttpSession对象中的JavaBean的状态的改变。(绑定、解除绑定、钝化、活化) 



### 二、监听器的开发步骤

> - 自定义类实现一类监听器
> - 重写监听器中的方法
> - 配置xml配置文件或注解配置

```java
/**
 * 监听器开发步骤
 */
public class FirstListener implements ServletContextListener {
    @Override
    public void contextInitialized(ServletContextEvent servletContextEvent) {
        /**
         * 监听ServletContext域的初始化,随着服务器的启动
         */
        System.out.println("ServletContext初始化");
    }

    @Override
    public void contextDestroyed(ServletContextEvent servletContextEvent) {
        //监听ServletContext域的销毁，随着服务器的关闭
        System.out.println("ServletContext销毁");
    }
}
```



### 三、监听器的配置方式



#### 3.1 xml配置

```xml
	<listener>
        <listener-class>com.mylifes1110.java.listener.FirstListener</listener-class>
    </listener>
```



#### 3.2 注解配置

> @WebListener，加了该注解默认配置了监听器

```java
package com.mylifes1110.java.listener;

import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;
import javax.servlet.annotation.WebListener;

/**
 * 监听器开发步骤
 */
@WebListener
public class FirstListener implements ServletContextListener {
    @Override
    public void contextInitialized(ServletContextEvent servletContextEvent) {
        /**
         * 监听ServletContext域的初始化,随着服务器的启动
         */
        System.out.println("ServletContext初始化");
    }

    @Override
    public void contextDestroyed(ServletContextEvent servletContextEvent) {
        /**
         * 监听ServletContext域的销毁，随着服务器的关闭
         */
        System.out.println("ServletContext销毁");
    }
}
```



### 四、一类监听器

> 监听三个域对象（ServletContext、Session、Request）的创建与销毁



#### 4.1 监听ServletContext域对象

> - 实现ServletContextListener接口并覆盖方法
>   - 监听服务器启动的时候创建ServletContext对象时
>   - 监听服务器关闭的时候ServletContext对象被销毁掉时

```java
package com.mylifes1110.java.listener;

import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;
import javax.servlet.annotation.WebListener;

/**
 * 监听ServletContext
 */
@WebListener
public class TestServletContextListener implements ServletContextListener {
    @Override
    public void contextInitialized(ServletContextEvent servletContextEvent) {
        /**
         * 监听ServletContext域的初始化,随着服务器的启动
         */
        System.out.println("ServletContext初始化");
    }

    @Override
    public void contextDestroyed(ServletContextEvent servletContextEvent) {
        /**
         * 监听ServletContext域的销毁，随着服务器的关闭
         */
        System.out.println("ServletContext销毁");
    }
}
```



#### 4.2 监听Session域对象

> - 实现HttpSessionListener接口并覆盖方法
>   - 监听服务器端第一次调用getSession方法时
>   - 监听session过期或调用了invalidate方法 

```java
package com.mylifes1110.java.listener;

import javax.servlet.annotation.WebListener;
import javax.servlet.http.HttpSessionEvent;
import javax.servlet.http.HttpSessionListener;

/**
 * 监听HttpSession
 */
@WebListener
public class TestHttpSessionListener implements HttpSessionListener {

    @Override
    public void sessionCreated(HttpSessionEvent httpSessionEvent) {
        System.out.println("Session创建");
    }

    @Override
    public void sessionDestroyed(HttpSessionEvent httpSessionEvent) {
        System.out.println("Session销毁");
    }
}
```

> Servlet测试

```java
package com.mylifes1110.java.servlet;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;

@WebServlet(name = "TestSessionServlet", value = "/tss")
public class TestSessionServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        //创建Session对象
        HttpSession session = request.getSession();
        System.out.println(session.getId());
        //销毁Session对象
        session.invalidate();
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doPost(request, response);
    }
}
```



#### 4.3 监听Request域对象

> - 实现ServletRequestListener接口并覆盖方法
>   - 监听客户的向服务器发送了一次请求而创建这一个request对象
>   - 监听当服务器为这次请求作出了响应之后的request对象销毁 

```java
package com.mylifes1110.java.listener;

import javax.servlet.ServletRequestEvent;
import javax.servlet.ServletRequestListener;
import javax.servlet.annotation.WebListener;

/**
 * 监听ServletRequest
 */
@WebListener
public class TestServletRequestListener implements ServletRequestListener {
    @Override
    public void requestDestroyed(ServletRequestEvent servletRequestEvent) {
        System.out.println("Request对象创建");
    }

    @Override
    public void requestInitialized(ServletRequestEvent servletRequestEvent) {
        System.out.println("Request对象销毁");
    }
}
```

> Servlet测试

```java
package com.mylifes1110.java.servlet;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet(name = "TestRequestServlet", value = "/trs")
public class TestRequestServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String requestURI = request.getRequestURI();
        System.out.println(requestURI);
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doPost(request, response);
    }
}
```



### 五、二类监听器

> 监听三个域对象的属性变更的监听器(属性添加、属性移除、属性替换) 



#### 5.1 监听ServletContext属性

> - 实现ServletContextAttributeListener接口并覆盖方法
>   - 监听ServletContext域中的属性变更 

```java
package com.mylifes1110.java.listener;

import javax.servlet.ServletContextAttributeEvent;
import javax.servlet.ServletContextAttributeListener;
import javax.servlet.annotation.WebListener;

/**
 * 监听ServletContext域中的属性变更
 */
@WebListener
public class TestServletContextAttributeListener implements ServletContextAttributeListener {
    /**
     * 监听ServletContext域对象中属性的添加
     */
    @Override
    public void attributeAdded(ServletContextAttributeEvent servletContextAttributeEvent) {
        System.out.println("ServletContext Added");
    }

    /**
     * 监听ServletContext域对象中属性的移除
     */
    @Override
    public void attributeRemoved(ServletContextAttributeEvent servletContextAttributeEvent) {
        System.out.println("ServletContext Removed");
    }

    /**
     * 监听ServletContext域对象中属性的替换
     */
    @Override
    public void attributeReplaced(ServletContextAttributeEvent servletContextAttributeEvent) {
        System.out.println("ServletContext Replaced");
    }
}
```

> Servlet测试

```java
package com.mylifes1110.java.servlet;

import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet(name = "TestServletContextAttributeServlet", value = "/tscas")
public class TestServletContextAttributeServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        ServletContext servletContext = getServletContext();
        //添加
        servletContext.setAttribute("name", "ziph");
        //替换
        servletContext.setAttribute("name", "join");
        //移除
        servletContext.removeAttribute("name");
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doPost(request, response);
    }
}
```



#### 5.2 监听Session属性

> - 实现HttpSessionAttributeListener接口并覆盖方法
>   - 监听HttpSession域中的属性变更 

```java
package com.mylifes1110.java.listener;

import javax.servlet.annotation.WebListener;
import javax.servlet.http.HttpSessionAttributeListener;
import javax.servlet.http.HttpSessionBindingEvent;

/**
 * 监听Session域中的属性变更
 */
@WebListener
public class TestHttpSessionAttributeListener implements HttpSessionAttributeListener {
    @Override
    public void attributeAdded(HttpSessionBindingEvent httpSessionBindingEvent) {
        System.out.println("Session Added");
    }

    @Override
    public void attributeRemoved(HttpSessionBindingEvent httpSessionBindingEvent) {
        System.out.println("Session Removed");
    }

    @Override
    public void attributeReplaced(HttpSessionBindingEvent httpSessionBindingEvent) {
        System.out.println("Session Replaced");
    }
}
```

> Servlet测试

```java
package com.mylifes1110.java.servlet;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;

/**
 * 注意：销毁和移除都能触发监听器的attributeRemoved方法
 */
@WebServlet(name = "TestSessionAttributeServlet", value = "/tsas")
public class TestSessionAttributeServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        HttpSession session = request.getSession();
        StringBuffer buffer = new StringBuffer();
        buffer.append("ziph");
        //添加
        session.setAttribute("name", buffer);
        buffer.append(" is very good!");
        //替换
        session.setAttribute("name", buffer);
        //移除
        session.removeAttribute("name");
        //销毁
        session.invalidate();
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doPost(request, response);
    }
}
```



#### 5.3 监听Request属性

> - 实现ServletRequestAttributeListener接口并覆盖方法
>   -  监听ServletRequest中的属性变更

> **事件分析：** 
>
> - 事件源：JavaBean对象
> - 监听器：HttpSessionBingingListener监听器
> - 绑定：JavaBean对象实现HttpSessionBingbingListener接口（所以才不需要配置xml）
> - 时间：JavaBean对象在Session中状态发生改变

```java
package com.mylifes1110.java.listener;

import javax.servlet.ServletRequestAttributeEvent;
import javax.servlet.ServletRequestAttributeListener;
import javax.servlet.annotation.WebListener;

/**
 * 监听Request域中的属性变更
 */
@WebListener
public class TestServletRequestAttributeListener implements ServletRequestAttributeListener {

    @Override
    public void attributeAdded(ServletRequestAttributeEvent servletRequestAttributeEvent) {
        System.out.println("Request Added");
    }

    @Override
    public void attributeRemoved(ServletRequestAttributeEvent servletRequestAttributeEvent) {
        System.out.println("Request Removed");
    }

    @Override
    public void attributeReplaced(ServletRequestAttributeEvent servletRequestAttributeEvent) {
        System.out.println("Request Replaced");
    }
}
```

> Servlet测试

```java
package com.mylifes1110.java.servlet;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet(name = "TestServletRequestAttributeServlet", value = "/tsras")
public class TestServletRequestAttributeServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        StringBuffer buffer = new StringBuffer();
        buffer.append("ziph");
        //添加
        request.setAttribute("name", buffer);
        buffer.append("marry");
        //替换
        request.setAttribute("name", buffer);
        //移除
        request.removeAttribute("name");
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doPost(request, response);
    }
}
```



### 六、三类监听器

> - HttpSessionBindingListener监听HttpSession中的JavaBean的状态(绑定和解除绑定状态) 
> - 注意：该监听器不需要xml配置和注解配置

```java
package com.mylifes1110.java.bean;

import javax.servlet.http.HttpSessionBindingEvent;
import javax.servlet.http.HttpSessionBindingListener;

/**
 * 三类监听器HttpSessionBingingListener
 */
public class User implements HttpSessionBindingListener {
    private int id;
    private String username;
    private String password;

    public User() {
    }

    public User(int id, String username, String password) {
        this.id = id;
        this.username = username;
        this.password = password;
    }


    @Override
    public void valueBound(HttpSessionBindingEvent httpSessionBindingEvent) {
        System.out.println("User对象绑定");
    }

    @Override
    public void valueUnbound(HttpSessionBindingEvent httpSessionBindingEvent) {
        System.out.println("User对象解绑");
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

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", username='" + username + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}
```

> Servlet测试

```java
package com.mylifes1110.java.servlet;

import com.mylifes1110.java.bean.User;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;

@WebServlet(name = "TestHttpSessionBingingListenerServlet", value = "/thsbls")
public class TestHttpSessionBingingListenerServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        HttpSession session = request.getSession();
        //绑定
        session.setAttribute("user", new User(1, "ziph", "123456"));
        //解绑
        session.removeAttribute("user");
        //销毁也是解绑的一种
//        session.invalidate();
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doPost(request, response);
    }
}
```



### 七、浏览器记录登录认数综合案例

> 当一个用户登录成功后，将这个用户记录到在线人数中；同时，如果这个用户注销登录就从在线 人数中移除。遵循网页站点浏览器访问原则。
>
> **原理：** 使用三类监听器来监听User实体类对象在Session中的绑定域解绑来控制在线人数
>
> - 绑定：在线认数+1（登录）
> - 解绑：在线人数-1（注销）
> - **注意：** 在登录成功后我们需要使用重定向来跳转登录页面。因为我们使用转发的话，在登录后重新发起请求则请求转发内部处理会重新登录一次，所以会增加在线人数（+1）。为了避免此问题，在跳转登录页面的时候我们使用重定向技术！

###### login.html登录页面

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>登陆页面</title>
</head>
<body>
<form action="/firstlistener/login" method="post">
    账号：<input type="text" name="username"><br>
    密码：<input type="password" name="password"><br>
    <button type="submit">登录</button>
</form>
</body>
</html>
```

###### EncodingFilter过滤器解决乱码问题的xml配置信息

```
	<filter>
        <filter-name>EncodingFilter</filter-name>
        <filter-class>com.mylifes1110.java.onlinenumbersdemo.filter.EncodingFilter</filter-class>
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

###### EncodingFilter过滤器解决乱码问题代码

```java
package com.mylifes1110.java.onlinenumbersdemo.filter;

import javax.servlet.*;
import java.io.IOException;

/**
 * 通用Filter解决乱码问题
 */
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

###### User实体类对象（三类监听器监听，控制在线人数）

```java
package com.mylifes1110.java.onlinenumbersdemo.bean;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpSessionBindingEvent;
import javax.servlet.http.HttpSessionBindingListener;

/**
 * 监听器监听JavaBean对象
 */
public class User implements HttpSessionBindingListener {
    private int id;
    private String username;
    private String password;

    public User() {
    }

    public User(int id, String username, String password) {
        this.id = id;
        this.username = username;
        this.password = password;
    }


    /**
     * 处理统计登录人数
     */
    @Override
    public void valueBound(HttpSessionBindingEvent httpSessionBindingEvent) {
        ServletContext servletContext = httpSessionBindingEvent.getSession().getServletContext();
        Integer count = (Integer) servletContext.getAttribute("count");
        if (count == null) {
            count = 1;
        } else {
            count++;
        }
        servletContext.setAttribute("count", count);
    }

    /**
     * 处理统计注销人数
     */
    @Override
    public void valueUnbound(HttpSessionBindingEvent httpSessionBindingEvent) {
        ServletContext servletContext = httpSessionBindingEvent.getSession().getServletContext();
        Integer count = (Integer) servletContext.getAttribute("count");
        count--;
        servletContext.setAttribute("count", count);
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

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", username='" + username + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}
```

###### LoginServlet登录处理

```java
package com.mylifes1110.java.onlinenumbersdemo.servlet;

import com.mylifes1110.java.onlinenumbersdemo.bean.User;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
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
        String username = request.getParameter("username");
        String password = request.getParameter("password");
        if ("ziph".equals(username) && "123456".equals(password)) {
            User user = new User();
            user.setUsername(username);
            user.setPassword(password);
            request.getSession().setAttribute("user", user);
            response.sendRedirect("/firstlistener/show");
        } else {
            request.getRequestDispatcher("/login.html").forward(request, response);
        }
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doPost(request, response);
    }
}
```

###### ShowServlet响应展示页面

```java
package com.mylifes1110.java.onlinenumbersdemo.servlet;

import com.mylifes1110.java.onlinenumbersdemo.bean.User;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * 展示页面
 */
@WebServlet(name = "ShowServlet", value = "/show")
public class ShowServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        User user = (User) request.getSession().getAttribute("user");
        StringBuffer buffer = new StringBuffer();
        if (user == null) {
            buffer.append("对不起，您还没有登录！  <a href='/firstlistener/login.html'>请登录</a><br>");

        } else {
            buffer.append("欢迎" + user.getUsername() + "回家！  <a href='/firstlistener/logout'>注销</a><br>");
        }
        Integer count = (Integer) getServletContext().getAttribute("count");
        if (count == null) {
            buffer.append("在线人数为：0");
        } else {
            buffer.append("在线人数为：" + count);
        }
        response.getWriter().println(buffer.toString());
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doPost(request, response);
    }
}
```

###### LogoutServlet注销功能

```java
package com.mylifes1110.java.onlinenumbersdemo.servlet;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * 注销功能
 */
@WebServlet(name = "LogoutServlet", value = "/logout")
public class LogoutServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        request.getSession().removeAttribute("user");
        request.getRequestDispatcher("/show").forward(request, response);
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doPost(request, response);
    }
}
```

