* [原生Ajax异步请求](#%E5%8E%9F%E7%94%9Fajax%E5%BC%82%E6%AD%A5%E8%AF%B7%E6%B1%82)
    * [一、了解Ajax](#%E4%B8%80%E4%BA%86%E8%A7%A3ajax)
      * [1\.1 什么是Ajax？](#11-%E4%BB%80%E4%B9%88%E6%98%AFajax)
    * [二、Ajax的工作原理](#%E4%BA%8Cajax%E7%9A%84%E5%B7%A5%E4%BD%9C%E5%8E%9F%E7%90%86)
    * [三、Ajax get/post实例](#%E4%B8%89ajax-getpost%E5%AE%9E%E4%BE%8B)
      * [3\.1 Ajax开发步骤](#31-ajax%E5%BC%80%E5%8F%91%E6%AD%A5%E9%AA%A4)
      * [3\.2 get实例](#32-get%E5%AE%9E%E4%BE%8B)
      * [3\.3 post实例](#33-post%E5%AE%9E%E4%BE%8B)
      * [3\.4 实例Servlet测试](#34-%E5%AE%9E%E4%BE%8Bservlet%E6%B5%8B%E8%AF%95)
    * [四、分布式解析Ajax步骤](#%E5%9B%9B%E5%88%86%E5%B8%83%E5%BC%8F%E8%A7%A3%E6%9E%90ajax%E6%AD%A5%E9%AA%A4)
      * [4\.1 创建XMLHttpRequest对象](#41-%E5%88%9B%E5%BB%BAxmlhttprequest%E5%AF%B9%E8%B1%A1)
      * [4\.2 onreadystatechange回调函数（监听状态）](#42-onreadystatechange%E5%9B%9E%E8%B0%83%E5%87%BD%E6%95%B0%E7%9B%91%E5%90%AC%E7%8A%B6%E6%80%81)
      * [4\.3 XMLHttpRequest请求](#43-xmlhttprequest%E8%AF%B7%E6%B1%82)
      * [4\.4 XMLHttpRequest响应](#44-xmlhttprequest%E5%93%8D%E5%BA%94)

# 原生Ajax异步请求

------

### 一、了解Ajax

#### 1.1 什么是Ajax？

> AJAX = 异步 JavaScript 和 XML（Asynchronous JavaScript and XML）。是一种用于创建快速动态网页的技术。通过在后台与服务器进行少量数据交换，AJAX 可以使网页实现异步更新。这意味着可以在不重新加载整个网页的情况下，对网页的某部分进行更新。而传统的网页（不使用 AJAX）如果需要更新内容，必需重载整个页面。
>
> 简短地说，在不重载整个网页的情况下，AJAX 通过后台加载数据，并在网页上进行显示。



### 二、Ajax的工作原理

![image-20200509135507495](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200510094146.png)

> Ajax的原理简单来说通过XmlHttpRequest对象来向服务器发异步请求，从服务器获得数据，然后用javascript来操作DOM而更新页面。这其中最关键的一步就是从服务器获得请求数据。要清楚这个过程和原理，我们必须对 XMLHttpRequest有所了解。
>
> XMLHttpRequest是ajax的核心机制，它是在IE5中首先引入的，是一种支持异步请求的技术。简单的说，也就是javascript可以及时向服务器提出请求和处理响应，而不阻塞用户。达到无刷新的效果。

> AJAX是基于现有的Internet标准，并且联合使用它们：
>
> - XMLHttpRequest 对象 (异步的与服务器交换数据)
> - JavaScript/DOM (信息显示/交互)
> - CSS (给数据定义样式)
> - XML (作为转换数据的格式)、JSON



### 三、Ajax get/post实例

#### 3.1 Ajax开发步骤

> 1. 建XMLHTTPRequest对象
>2. 设置onreadystatechange回调函数（回调函数中的参数data是用来跨域获取数据的）
> 3. open() 打开连接
>4. send() 发送请求
> 
>**注意：回调函数中的data参数，在进行跨域的时候，我们需要获取对应接口的数据并对数据进行相应的处理，那么就可以通过接口所提供的回调函数通过传参来获取数据。**



#### 3.2 get实例

```html
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Ajax.Get</title>
</head>
<body>
<script type="text/javascript">
    //1.创建异步XMLHttpRequest对象
    function createXMLHttpRequest() {
        var xmlHttp;
        try {
            xmlHttp = new XMLHttpRequest();
        } catch (e) {
            try {
                xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
            } catch (e) {
                xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
            }
        }
        return xmlHttp;
    }

    var xhr = createXMLHttpRequest();
    //2.设置回调函数
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var responseText = xhr.responseText;
            var jsObject = eval("(" + responseText + ")");
            console.log(jsObject.flag);
            console.log(jsObject.msg);
        }
    };
    //3.打开连接
    xhr.open("get", "${pageContext.request.contextPath}/test?username=ziph&password=123456&id=" + Math.random(), true);
    //4.发送参数
    xhr.send();
</script>
</body>
</html>
```



#### 3.3 post实例

```html
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Ajax.post</title>
</head>
<body>
<script type="text/javascript">
    //1.创建异步XMLHttpRequest对象
    function createXMLHttpRequest() {
        var xmlHttp;
        try {
            xmlHttp = new XMLHttpRequest();
        } catch (e) {
            try {
                xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
            } catch (e) {
                try {
                    xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
                } catch (e) {

                }
            }
        }
        return xmlHttp;
    }

    var xhr = createXMLHttpRequest();
    //2.设置回调函数
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var responseText = xhr.responseText;
            var jsObject = eval("(" + responseText + ")");
            console.log(jsObject.flag);
            console.log(jsObject.msg);
        }
    }
    //3.打开连接
    xhr.open("post", "${pageContext.request.contextPath}/test", true);
    //4.设置请求头
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    //5.发送参数
    xhr.send("username=ziph&password=123456");
</script>
</body>
</html>
```



#### 3.4 实例Servlet测试

```java
package com.mylifes1110.java.servlet;

import com.fasterxml.jackson.databind.ObjectMapper;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

@WebServlet(name = "TestServlet", value = "/test")
public class TestServlet extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String username = request.getParameter("username");
        String password = request.getParameter("password");
        System.out.println("username : " + username + " , password : " + password);
        boolean flag = true;
        String msg = "账户可用";
        if ("root".equals(username) || "zhangsan".equals(username)) {
            flag = false;
            msg = "账户已经被注册";
        } else {
            msg = "账户可用";
            flag = true;
        }
        Map<String, Object> map = new HashMap<>();
        map.put("flag", flag);
        map.put("msg", msg);
        response.setContentType("text/html;charset=utf-8");
        ObjectMapper objectMapper = new ObjectMapper();
        String jsonStr = objectMapper.writeValueAsString(map);
        response.getWriter().write(jsonStr);
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doPost(request, response);
    }
}
```



### 四、分布式解析Ajax步骤

> 这是之间简单的罗列以下，讲解步骤中会详细讲到！

| 属性               | 描述                                                         |
| ------------------ | ------------------------------------------------------------ |
| onreadystatechange | 每次状态改变所触发事件的事件处理程序                         |
| responseText       | 从服务器进程返回数据的字符串形式                             |
| responseXML        | 从服务器进程返回的DOM兼容的文档数据对象                      |
| status             | 从服务器返回的数字代码，比如常见的404（未找到）和200（已就绪） |
| status Text        | 伴随状态码的字符串信息                                       |
| readyState         | 对象状态值（XMLHttpRequest对象的处理状态）                   |

#### 4.1 创建XMLHttpRequest对象

> XMLHttpRequest对象是AJAX的基础。所有现代浏览器均支持 XMLHttpRequest 对象（IE5 和 IE6 使用 ActiveXObject）。XMLHttpRequest 用于在后台与服务器交互数据。这意味着可以在不重新加载整个网页的情况下，对网页的某部分进行更新。

> 所有现代浏览器（IE7+、Firefox、Chrome、Safari 以及 Opera）均内建 XMLHttpRequest 对象。创建 XMLHttpRequest 对象的语法：

```javascript
var xmlhttp = new XMLHttpRequest(); 
```

> Internet Explorer 使用 ActiveX 对象：

```javascript
var xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
```

> Internet Explorer 老版本则也是使用 ActiveX 对象：

```javascript
var xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
```

> 所以，综上所述，我们为了应对所有的现代浏览器，包括 IE5 和 IE6，请检查浏览器是否支持 XMLHttpRequest 对象。如果支持，则创建 XMLHttpRequest 对象。如果不支持，则创建 ActiveXObject （封装方法）：

```javascript
function createXMLHttpRequest() {
        var xmlHttp;
        try {
            xmlHttp = new XMLHttpRequest();
        } catch (e) {
            try {
                xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
            } catch (e) {
                    xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
            }
        }
        return xmlHttp;
    }
```



#### 4.2 onreadystatechange回调函数（监听状态）

> 当请求被发送到服务器时，我们需要执行一些基于响应的任务。每当 readyState 改变时，就会触发 onreadystatechange 事件。readyState 属性存有 XMLHttpRequest 的状态信息。

> 下面是 XMLHttpRequest 对象的三个重要的属性：

| 属性               | 描述                                                         |
| ------------------ | ------------------------------------------------------------ |
| onreadystatechange | 存储函数（或函数名），每当 readyState 属性改变时，就会调用该函数。 |
| readyState         | 存有 XMLHttpRequest 的状态。从 0 到 4 发生变化。0: 请求未初始化、1: 服务器连接已建立、2: 请求已接收、3: 请求处理中、4: 请求已完成，且响应已就绪 |
| status             | 200："OK"；404：未找到页面                                   |

> 在 onreadystatechange 事件中，我们规定当服务器响应已做好被处理的准备时所执行的任务。
>
> **注意：** onreadystatechange 事件被触发 4 次， 五个状态（0 - 4），对应着 readyState 的每个变化。
>
> **注意：** 回调函数中的data参数，在进行跨域的时候，我们需要获取对应接口的数据并对数据进行相应的处理，那么就可以通过接口所提供的回调函数通过传参来获取数据。
>
> 当 readyState 等于 4 且状态为 200 时，表示响应已就绪：

```javascript
xhr.onreadystatechange = function(data){
        if (xhr.readyState == 4 && xhr.status == 200) {
            //这里写响应成功后的代码
            var responseText = xhr.responseText;
            var jsObject = eval("(" + responseText + ")");
            console.log(jsObject.flag);
            console.log(jsObject.msg);
        }
    };
```

***readyState的状态的详细解释***

> XMLHttpRequest对象的处理状态
>
> - 0（未初始化）：对象已建立，但是尚未初始化（尚未调用open方法）
> - 1（初始化）：对象开始发送请求，对象已建立，尚未调用send方法
> - 2（发送数据）：对象的请求发送完成，send方法已调用，但是当前的状态及http头未知
> - 3（数据传输）：对象开始读取服务器的响应，已接收部分数据，因为响应及http头不全，这时通过responseBody和responseText获取部分数据会出现错误，
> - 4（完成）：对象读取服务器响应完成，数据接收完毕，此时可以通过通过responseXml和responseText获取完整的回应数据





#### 4.3 XMLHttpRequest请求

> 如需将请求发送到服务器，我们使用 XMLHttpRequest 对象的 open() 和 send() 方法：

```java
xmlhttp.open("GET","servlet",true);
xmlhttp.send();
```

| 方法                         | 描述                                                         |
| ---------------------------- | ------------------------------------------------------------ |
| open(*method*,*url*,*async*) | 规定请求的类型、URL 以及是否异步处理请求。*method*：请求的类型；GET 或 POST*url*：文件在服务器上的位置*async*：true（异步）或 false（同步） |
| send(*string*)               | 将请求发送到服务器。*string*：仅用于 POST 请求               |

**method-请求方式**

***GET 还是 POST？***

> 与 POST 相比，GET 更简单也更快，并且在大部分情况下都能用。
>
> 然而，在以下情况中，请使用 POST 请求：
>
> - 不使用缓存文件（更新服务器上的文件或数据库）
> - 向服务器发送大量数据（POST 没有数据量限制）
> - 发送包含未知字符的用户输入时，POST 比 GET 更稳定也更可靠

***GET 请求***

> 一个简单的 GET 请求：

```java
xmlhttp.open("GET","/servlet",true);
xmlhttp.send();
```

> 在上面的例子中，您可能得到的是缓存的结果。
>
> 为了避免这种情况，请向 URL 添加一个唯一的 ID：

```java
xmlhttp.open("GET","/xxx/xxx/xxx/servlet??id=" + Math.random(),true);
xmlhttp.send();
```

> 如果希望通过 GET 方法发送信息，请向 URL 添加信息：

```java
xmlhttp.open("GET","/xxx/xxx/xxx/servlet?username=ziph&password=123456",true);
xmlhttp.send();
```

***POST 请求***

> 一个简单 POST 请求

```javascript
xmlhttp.open("POST","/xxx/xxx/xxx/servlet",true);
xmlhttp.send();
```

> 如果需要像 HTML 表单那样 POST 数据，请使用 setRequestHeader() 来添加 HTTP 头。然后在 send() 方法中规定您希望发送的数据：

```javascript
xmlhttp.open("POST","/xxx/xxx/xxx/servlet",true);
xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded;charset=utf-8");
xmlhttp.send("username=ziph&password=123456");
```

| 方法                             | 描述                                                         |
| -------------------------------- | ------------------------------------------------------------ |
| setRequestHeader(*header,value*) | 向请求添加 HTTP 头。*header*: 规定头的名称    *value*: 规定头的值 |



**url - 服务器地址**

> open() 方法的 *url* 参数是服务器上资源的地址：

```javascript
xmlhttp.open("GET","servlet",true);
```



**异步 - True 或 False**

> AJAX 指的是异步 JavaScript 和 XML（Asynchronous JavaScript and XML）。
> XMLHttpRequest 对象如果要用于 Ajax 的话，其 open() 方法的 async 参数必须设置为 true：

```javascript
xmlhttp.open("GET","/xxx/xxx/xxx/servlet",true);
```

> 对于 web 开发人员来说，发送异步请求是一个巨大的进步。很多在服务器执行的任务都相当费时。Ajax 出现之前，这可能会引起应用程序挂起或停止。

> 通过 Ajax，JavaScript 无需等待服务器的响应，而是：
>
> - 在等待服务器响应时执行其他脚本
> - 当响应就绪后对响应进行处理

***Async=true***

> 当使用 async=true 时，请规定在响应处于 onreadystatechange 事件中的就绪状态时执行的函数：

```javascript
xmlhttp.onreadystatechange = function(data)
{
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
		//成功后的执行代码
    }
}
xmlhttp.open("GET","/xxx/xxx/xxx/servlet",true);
xmlhttp.send();
```

***Async=false***

> 如需使用 async=false，请将 open() 方法中的第三个参数改为 false：
>
> 我们不推荐使用 async=false，但是对于一些小型的请求，也是可以的。
>
> 请记住，JavaScript 会等到服务器响应就绪才继续执行。如果服务器繁忙或缓慢，应用程序会挂起或停止。
>
> **注意：**当您使用 async=false 时，请不要编写 onreadystatechange 函数。把代码放到 send() 语句后面即可：

```javascript
xmlhttp.open("GET","/xxx/xxx/xxx/servlet",false);
xmlhttp.send();
//执行代码
```



#### 4.4 XMLHttpRequest响应

***服务器响应***

> 如需获得来自服务器的响应，请使用 XMLHttpRequest 对象的 responseText 或 responseXML 属性。

| 属性         | 描述                       |
| ------------ | -------------------------- |
| responseText | 获得字符串形式的响应数据。 |
| responseXML  | 获得 XML 形式的响应数据。  |



***responseText 属性***

> 如果来自服务器的响应并非 XML，请使用 responseText 属性。

> responseText 属性返回字符串形式的响应，因此可以这样使用：

```javascript
document.getElementById("myDiv").innerHTML = xmlhttp.responseText;
```



***responseXML 属性***

> 如果来自服务器的响应是 XML，而且需要作为 XML 对象进行解析，请使用 responseXML 属性：

```javascript
xmlDoc = xmlhttp.responseXML;
txt = "";
x = xmlDoc.getElementsByTagName("ARTIST");
for (i = 0;i < x.length;i++)
{
    txt = txt + x[i].childNodes[0].nodeValue + "<br>";
}
document.getElementById("myDiv").innerHTML = txt;
```


