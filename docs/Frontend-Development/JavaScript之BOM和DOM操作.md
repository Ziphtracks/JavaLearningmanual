* [JavaScript之BOM和DOM操作](#javascript%E4%B9%8Bbom%E5%92%8Cdom%E6%93%8D%E4%BD%9C)
    * [一、JavaScript的BOM](#%E4%B8%80javascript%E7%9A%84bom)
      * [1\.1 了解BOM](#11-%E4%BA%86%E8%A7%A3bom)
      * [1\.2 window](#12-window)
      * [1\.3 window尺寸](#13-window%E5%B0%BA%E5%AF%B8)
      * [1\.4 window方法（打开与关闭）](#14-window%E6%96%B9%E6%B3%95%E6%89%93%E5%BC%80%E4%B8%8E%E5%85%B3%E9%97%AD)
      * [1\.5 Screen（屏幕尺寸）](#15-screen%E5%B1%8F%E5%B9%95%E5%B0%BA%E5%AF%B8)
      * [1\.6 location](#16-location)
        * [1\.6\.1 什么是Location？](#161-%E4%BB%80%E4%B9%88%E6%98%AFlocation)
        * [1\.6\.2 location方法](#162-location%E6%96%B9%E6%B3%95)
      * [1\.7 history](#17-history)
        * [1\.7\.1 什么是history？](#171-%E4%BB%80%E4%B9%88%E6%98%AFhistory)
        * [1\.7\.2 history方法](#172-history%E6%96%B9%E6%B3%95)
    * [二、JavaScript计时](#%E4%BA%8Cjavascript%E8%AE%A1%E6%97%B6)
      * [2\.1 重温Date对象](#21-%E9%87%8D%E6%B8%A9date%E5%AF%B9%E8%B1%A1)
      * [2\.2 JavaScript计时函数](#22-javascript%E8%AE%A1%E6%97%B6%E5%87%BD%E6%95%B0)
        * [2\.2\.1 setInterval() 周期执行函数](#221-setinterval-%E5%91%A8%E6%9C%9F%E6%89%A7%E8%A1%8C%E5%87%BD%E6%95%B0)
        * [2\.2\.2 clearInterval() 停止周期函数](#222-clearinterval-%E5%81%9C%E6%AD%A2%E5%91%A8%E6%9C%9F%E5%87%BD%E6%95%B0)
        * [2\.2\.3 setTimeout()  延迟执行函数](#223-settimeout--%E5%BB%B6%E8%BF%9F%E6%89%A7%E8%A1%8C%E5%87%BD%E6%95%B0)
        * [2\.2\.4 clearTimeout() 停止延时函数](#224-cleartimeout-%E5%81%9C%E6%AD%A2%E5%BB%B6%E6%97%B6%E5%87%BD%E6%95%B0)
      * [2\.3 JavaScript模拟钟表](#23-javascript%E6%A8%A1%E6%8B%9F%E9%92%9F%E8%A1%A8)
        * [2\.3\.1 模拟钟表（BOM）](#231-%E6%A8%A1%E6%8B%9F%E9%92%9F%E8%A1%A8bom)
        * [2\.3\.2 模拟钟表（DOM）](#232-%E6%A8%A1%E6%8B%9F%E9%92%9F%E8%A1%A8dom)
    * [三、JavaScript的DOM](#%E4%B8%89javascript%E7%9A%84dom)
      * [3\.1 什么是DOM？](#31-%E4%BB%80%E4%B9%88%E6%98%AFdom)
      * [3\.2 MOD模型分类](#32-mod%E6%A8%A1%E5%9E%8B%E5%88%86%E7%B1%BB)
      * [3\.3 DOM对象](#33-dom%E5%AF%B9%E8%B1%A1)
        * [3\.3\.1 Document文档对象](#331-document%E6%96%87%E6%A1%A3%E5%AF%B9%E8%B1%A1)
        * [3\.3\.2 Element元素对象](#332-element%E5%85%83%E7%B4%A0%E5%AF%B9%E8%B1%A1)
      * [3\.4 DOM中的节点属性](#34-dom%E4%B8%AD%E7%9A%84%E8%8A%82%E7%82%B9%E5%B1%9E%E6%80%A7)
        * [3\.4\.1 nodeName节点的名称](#341-nodename%E8%8A%82%E7%82%B9%E7%9A%84%E5%90%8D%E7%A7%B0)
        * [3\.4\.2 nodeValue节点的值](#342-nodevalue%E8%8A%82%E7%82%B9%E7%9A%84%E5%80%BC)
        * [3\.4\.3 nodeType节点的类型](#343-nodetype%E8%8A%82%E7%82%B9%E7%9A%84%E7%B1%BB%E5%9E%8B)
        * [3\.4\.4 创建节点对象](#344-%E5%88%9B%E5%BB%BA%E8%8A%82%E7%82%B9%E5%AF%B9%E8%B1%A1)
      * [3\.5 常用属性和方法](#35-%E5%B8%B8%E7%94%A8%E5%B1%9E%E6%80%A7%E5%92%8C%E6%96%B9%E6%B3%95)
        * [3\.5\.1 获取父节点](#351-%E8%8E%B7%E5%8F%96%E7%88%B6%E8%8A%82%E7%82%B9)
        * [3\.5\.2 获取所有的子节点](#352-%E8%8E%B7%E5%8F%96%E6%89%80%E6%9C%89%E7%9A%84%E5%AD%90%E8%8A%82%E7%82%B9)
        * [3\.5\.3 获取元素属性的集合](#353-%E8%8E%B7%E5%8F%96%E5%85%83%E7%B4%A0%E5%B1%9E%E6%80%A7%E7%9A%84%E9%9B%86%E5%90%88)
        * [3\.5\.4 节点的获取遍历](#354-%E8%8A%82%E7%82%B9%E7%9A%84%E8%8E%B7%E5%8F%96%E9%81%8D%E5%8E%86)
        * [3\.6 全选/反选按钮案例](#36-%E5%85%A8%E9%80%89%E5%8F%8D%E9%80%89%E6%8C%89%E9%92%AE%E6%A1%88%E4%BE%8B)
    * [四、DOM元素操作](#%E5%9B%9Bdom%E5%85%83%E7%B4%A0%E6%93%8D%E4%BD%9C)
      * [4\.1 获取HTML元素](#41-%E8%8E%B7%E5%8F%96html%E5%85%83%E7%B4%A0)
        * [4\.1\.1 id查找HTML元素](#411-id%E6%9F%A5%E6%89%BEhtml%E5%85%83%E7%B4%A0)
        * [4\.1\.2 标签名查找HTML元素](#412-%E6%A0%87%E7%AD%BE%E5%90%8D%E6%9F%A5%E6%89%BEhtml%E5%85%83%E7%B4%A0)
        * [4\.1\.3 类名查找HTML元素](#413-%E7%B1%BB%E5%90%8D%E6%9F%A5%E6%89%BEhtml%E5%85%83%E7%B4%A0)
        * [4\.1\.4 innerText与innerHTML的区别](#414-innertext%E4%B8%8Einnerhtml%E7%9A%84%E5%8C%BA%E5%88%AB)
        * [4\.1\.5 获取HTML元素的使用](#415-%E8%8E%B7%E5%8F%96html%E5%85%83%E7%B4%A0%E7%9A%84%E4%BD%BF%E7%94%A8)
        * [4\.1\.6 获取设置移除属性案例](#416-%E8%8E%B7%E5%8F%96%E8%AE%BE%E7%BD%AE%E7%A7%BB%E9%99%A4%E5%B1%9E%E6%80%A7%E6%A1%88%E4%BE%8B)
      * [4\.2 修改HTML](#42-%E4%BF%AE%E6%94%B9html)
        * [4\.2\.1 改变HTML文本](#421-%E6%94%B9%E5%8F%98html%E6%96%87%E6%9C%AC)
        * [4\.2\.2 改变HTML属性](#422-%E6%94%B9%E5%8F%98html%E5%B1%9E%E6%80%A7)
        * [4\.3 修改CSS样式](#43-%E4%BF%AE%E6%94%B9css%E6%A0%B7%E5%BC%8F)
      * [4\.4 元素标签的 CRUD](#44-%E5%85%83%E7%B4%A0%E6%A0%87%E7%AD%BE%E7%9A%84-crud)
        * [4\.4\.1 创建新元素](#441-%E5%88%9B%E5%BB%BA%E6%96%B0%E5%85%83%E7%B4%A0)
        * [4\.4\.2 删除已有的 HTML 元素](#442-%E5%88%A0%E9%99%A4%E5%B7%B2%E6%9C%89%E7%9A%84-html-%E5%85%83%E7%B4%A0)
        * [4\.4\.3 替换元素](#443-%E6%9B%BF%E6%8D%A2%E5%85%83%E7%B4%A0)
      * [4\.5 DOM事件](#45-dom%E4%BA%8B%E4%BB%B6)
        * [4\.5\.1 DOM事件介绍](#451-dom%E4%BA%8B%E4%BB%B6%E4%BB%8B%E7%BB%8D)
        * [4\.5\.2 DOM事件改变文本内容](#452-dom%E4%BA%8B%E4%BB%B6%E6%94%B9%E5%8F%98%E6%96%87%E6%9C%AC%E5%86%85%E5%AE%B9)
      * [4\.6EventListener](#46eventlistener)
        * [4\.6\.1 addEventListener() 方法](#461-addeventlistener-%E6%96%B9%E6%B3%95)
        * [4\.6\.2 事件冒泡或事件捕获](#462-%E4%BA%8B%E4%BB%B6%E5%86%92%E6%B3%A1%E6%88%96%E4%BA%8B%E4%BB%B6%E6%8D%95%E8%8E%B7)

# JavaScript之BOM和DOM操作

------

### 一、JavaScript的BOM

#### 1.1 了解BOM

> 浏览器对象模型 (BOM) 使 JavaScript 有能力与浏览器"对话"。
>
> 浏览器对象模型 (BOM)：(**B**rowser **O**bject **M**odel)尚无正式标准。
>
> 由于现代浏览器已经（几乎）实现了 JavaScript 交互性方面的相同方法和属性，因此常被认为是 BOM 的方法和属性。



#### 1.2 window

> 所有浏览器都支持 window 对象。它表示浏览器窗口。
>
> 所有 JavaScript 全局对象、函数以及变量均自动成为 window 对象的成员。
>
> 全局变量是 window 对象的属性。
>
> 全局函数是 window 对象的方法。

> 甚至 HTML DOM 的 document 也是 window 对象的属性之一：（两者相同）

```javascript
window.document.getElementById("header");
document.getElementById("header");
```



#### 1.3 window尺寸

> 有三种方法能够确定浏览器窗口的尺寸。
>
> **注意：** 浏览器窗口的内部高度(不包括滚动条、菜单栏、工具栏)

> 适用于Internet Explorer、Chrome、Firefox、Opera 以及 Safari浏览器的window如下：
>
> - window.innerHeight
> - window.innerWidth

> 适用于Internet Explorer 8、7、6、5浏览器的window如下：
>
> - document.documentElement.clientHeight
> - document.documentElement.clientWidth
> - 或者
> - document.documentElement.clientHeight
> - document.documentElement.clientWidth

> **JavaScript方案，适用于所有浏览器的window如下：** 
>
> - var width = window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;
> - var height = window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight;

```javascript
<script type="text/javascript">	
	document.write(window.innerWidth + "*" + window.innerHeight + "<br />");
    document.write(document.documentElement.clientWidth + "*" + document.documentElement.clientHeight + "<br />");
    document.write(document.body.clientWidth + "*" + document.body.clientHeight + "<br />");

	var width = window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;
	var height = window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight;
	document.write(width + "*" + height);
</script>
```



#### 1.4 window方法（打开与关闭）

> - 打开新窗口：window.open()
> - 关闭当前窗口：window.close()

```html
body>
<button onclick="newWindow()">百度搜索</button><br />
<button onclick="closeWindow()">关闭</button><br />
<script type="text/javascript">
    var newWindows;
    function newWindow() {
        newWindows = window.open("https://www.baidu.com/","baidu");
    }
    function closeWindow() {
        newWindows.close();
    }
</script>
</body>
```



#### 1.5 Screen（屏幕尺寸）

> 可用宽度：screen.availWidth 属性返回访问者屏幕的宽度，以像素计，减去界面特性，比如窗口任务栏。
>
> 可用高度：screen.availHeight 属性返回访问者屏幕的高度，以像素计，减去界面特性，比如窗口任务栏。

```javascript
<script type="text/javascript">
document.write(screen.availWidth + "*" + screen.availHeight);
</script>
```



#### 1.6 location

##### 1.6.1 什么是Location？

> location 对象用于获得当前页面的地址 (URL)，并把浏览器重定向到新的页面。**window.location** 对象在编写时可不使用 window 这个前缀。



##### 1.6.2 location方法

| 名称              | 描述                                         |
| ----------------- | -------------------------------------------- |
| location.href     | 属性返回当前页面的 URL                       |
| location.hostname | 返回 web 主机的域名                          |
| location.pathname | 返回当前页面的路径和文件名                   |
| location.port     | 返回 web 主机的端口 （80 或 443）            |
| location.protocol | 返回所使用的 web 协议（http:// 或 https://） |
| location.assign   | 加载新的文档                                 |

```html
<body>
<button onclick="ass()">百度</button>
<script type="text/javascript">
    //加载新文档
    function ass() {
        location.assign("https://www.baidu.com/");
    }
    console.log(location.href);
    console.log(location.hostname);
    console.log(location.pathname);
    console.log(location.port);
    console.log(location.protocol);
</script>
</body>
```

![image-20200510153619961](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200510153624.png)



#### 1.7 history

##### 1.7.1 什么是history？

> - window.history 对象包含浏览器的历史。
>
> - window.history 对象在编写时可不使用 window 这个前缀。
>
> 为了保护用户隐私，对 JavaScript 访问该对象的方法做出了限制。



##### 1.7.2 history方法

| 名称            | 描述                                   |
| --------------- | -------------------------------------- |
| history.back    | 方法名描述  与在浏览器点击后退按钮相同 |
| history.forward | 与在浏览器中点击按钮向前相同           |

> 以下两个JSP点击超链接后，可以使用前进、后退按钮来实现功能！

```javascript
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>history</title>
</head>
<body>
<button onclick="f()">前进</button>
<a href="back.jsp">访问页面</a>
<script type="text/javascript">
    function f() {
        window.history.forward();
    }
</script>
</body>
</html>

<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>回退</title>
</head>
<body>
<button onclick="b()">回退</button>
<script type="text/javascript">
    function b() {
        window.history.back();
    }
</script>
</body>
</html>
```



### 二、JavaScript计时

#### 2.1 重温Date对象

```javascript
var date = new Date();
document.write(d);
document.write("<br/>")
document.write("年份："+(date.getYear()+1900));
document.write("<br/>")
document.write("年份："+date.getFullYear());
document.write("<br/>");
document.write("月份:"+(date.getMonth()+1))
document.write("<br/>");
document.write("日期:"+date.getDate());
document.write("<br/>");
document.write("小时:"+date.getHours());
document.write("<br/>");
document.write("分钟:"+date.getMinutes());
document.write("<br/>");
document.write("秒:"+date.getSeconds());
```



#### 2.2 JavaScript计时函数

##### 2.2.1 setInterval() 周期执行函数

> **setInterval()** 周期执行函数。间隔指定的毫秒数不停地执行指定的代码。

```javascript
//每三秒弹出一次Hello World!
setInterval(function(){alert("Hello World!")},3000);
```



##### 2.2.2 clearInterval() 停止周期函数

> clearInterval() 方法用于停止 setInterval() 方法执行的函数代码。

```javascript
var i = setInterval(function(){alert("Hello Wrold!")},3000);
//停止周期函数,每三秒弹出一次Hello World!
clearInterval(i);
```



##### 2.2.3 setTimeout()  延迟执行函数

> **setTimeout()**  延迟执行函数。延迟执行指定的函数，只能执行一次。

> 语法：window.setTimeout("*javascript 函数*",*毫秒数*);
>
> - 第一个参数是含有 JavaScript 语句的字符串。这个语句可能诸如 "alert('5 seconds!')"，或者对函数的调用，诸如 alertMsg()"
> - 第二个参数指示从当前起多少毫秒后执行第一个参数

```javascript
//等待3秒后仅弹出一次Hello World!的窗口
setTimeout(function(){alert("啊哈哈哈！")},2000);
```

```javascript
//使用延迟函数实现周期函数效果
<script type="text/javascript">
    var num = 0;
    var id = 0;
    function show() {
        document.write("我是id" + id + "<br />");
        num++;
        if (num != 20) {
            id = setTimeout(show, 1000);
        }
    }
    id = setTimeout(show, 1000);
</script>
```



##### 2.2.4 clearTimeout() 停止延时函数

> **clearTimeout()** 方法用于停止执行setTimeout()方法的函数代码。

```javascript
<button onclick="c()">停止</button>
<script type="text/javascript">
    //设置延迟弹窗2秒后执行一次
    var s = setTimeout(function () {
        alert("啊哈哈哈！")
    }, 2000);

    //停止延迟函数
    function c() {
        clearTimeout(s);
    }
</script>
```



#### 2.3 JavaScript模拟钟表

##### 2.3.1 模拟钟表（BOM）

```javascript
<button onclick="stop()">停止</button>
<button onclick="go()">继续</button>
<script type="text/javascript">
    function times() {
        //刷新当前文档,类似于你浏览器上的刷新页面按钮。
        location.reload();
    }

    //显示日期事件
    var date = new Date();
    document.write(date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds());
    //每过1秒刷新一次时间（刷新）
    var s = setInterval(times, 1000);

    //继续计时
    function go() {
        s = setInterval(times, 1000);
    }

    //停止计时
    function stop() {
        clearInterval(s);
    }
</script>
```



##### 2.3.2 模拟钟表（DOM）

```javascript
var myVar = setInterval(function(){myTimer()},1000);

function myTimer()
{
var d = new Date();
var t = d.toLocaleTimeString();
document.getElementById("demo").innerHTML=t;
}
```

```javascript
<p id="demo"></p>
<button onclick = "myStopFunction()">Stop time</button>

<script>
var myVar = setInterval(function(){myTimer()},1000);
function myTimer()
{
var d = new Date();
var t = d.toLocaleTimeString();
document.getElementById("demo").innerHTML=t;
}
function myStopFunction()
{
clearInterval(myVar);
}
</script>
```



### 三、JavaScript的DOM

#### 3.1 什么是DOM？

> 通过 HTML DOM,使用 JavaScript访问 HTML 文档的所有元素。
>
> 当网页被加载时，浏览器会创建页面的文档对象模型（Document Object Model）。



#### 3.2 MOD模型分类

> `HTML DMO模型`定义了访问和操作 HTML 文档的标准方法。**DOM 将 HTML 文档表达为树结构。**
>
> - **在HTML当中，一切都是节点**
>   - **元素节点**：HMTL标签。
>   - **文本节点**：标签中的文字（比如标签之间的空格、换行）
>   - **属性节点**：标签的属性。
> - **各节点关系体现为：** 父子关系\兄弟关系
> - 通过可编程的对象模型，JavaScript 获得了足够的能力来创建动态的 HTML。
>   - JavaScript 能够改变页面中的所有 HTML 元素。
>   - JavaScript 能够改变页面中的所有 HTML 属性。
>   - JavaScript 能够改变页面中的所有 CSS 样式。
>   - JavaScript 能够对页面中的所有事件做出反应。

![image-20200511202720359](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200511202725.png)



> `XML DOM文档对象模型`定义访问和操作XML文档的标准方法。**DOM 将 XML 文档作为一个树形结构，而树叶被定义为节点。**

![image-20200511202819224](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200511202823.png)

***XML格式***

```java
<?xml version="1.0" encoding="utf-8" ?>
<students>
    <student id="1">
        <name>张三</name>
        <age>18</age>
    </student>
    <student id="2">
        <name>李四</name>
        <age>19</age>
    </student>
</students>
```



#### 3.3 DOM对象

> HTML DOM对象

| 对象                  | 描述                                                         |
| --------------------- | ------------------------------------------------------------ |
| Document（文档对象）  | 每个载入浏览器的 HTML 文档都会成为 Document 对象。Document 对象使我们可以从脚本中对 HTML 页面中的所有元素进行访问。 |
| Element（元素对象）   | 在 HTML DOM 中，Element 对象表示 HTML 元素。Element 对象可以拥有类型为元素节点、文本节点、注释节点的子节点。NodeList 对象表示节点列表，比如 HTML 元素的子节点集合。元素也可以拥有属性。属性是属性节点。 |
| Attribute（节点对象） | 在 HTML DOM 中，*Attr* 对象表示 HTML 属性。HTML 属性始终属于 HTML 元素。 |
| Event（事件对象）     | Event 对象代表事件的状态，比如事件在其中发生的元素、键盘按键的状态、鼠标的位置、鼠标按钮的状态。 |

[**注意：下文的常用属性或方法用加粗斜体修饰！**]()



##### 3.3.1 Document文档对象

> Document对象所有属性

| 属性         | 描述                                                         |
| ------------ | ------------------------------------------------------------ |
| ***body***   | 提供对 <body> 元素的直接访问。对于定义了框架集的文档，该属性引用最外层的 <frameset>。 |
| cookie       | 设置或返回与当前文档有关的所有 cookie。                      |
| domain       | 返回当前文档的域名。                                         |
| lastModified | 返回文档被最后修改的日期和时间。                             |
| referrer     | 返回载入当前文档的文档的 URL。                               |
| title        | 返回当前文档的标题。                                         |
| URL          | 返回当前文档的 URL。                                         |

> Document对象常用方法

| 方法                      | 描述                                                         |
| ------------------------- | ------------------------------------------------------------ |
| ***close()***             | 关闭用 document.open() 方法打开的输出流，并显示选定的数据。  |
| ***getElementById()***    | 返回对拥有指定 id 的第一个对象的引用。                       |
| ***getElementsByName()*** | 返回带有指定名称的对象集合。                                 |
| getElementsByTagName()    | 返回带有指定标签名的对象集合。                               |
| ***open()***              | 打开一个流，以收集来自任何 document.write() 或 document.writeln() 方法的输出。 |
| ***write()***             | 向文档写 HTML 表达式 或 JavaScript 代码。                    |
| writeln()                 | 等同于 write() 方法，不同的是在每个表达式之后写一个换行符。  |
| ***createAttribute()***   | 创建属性对象                                                 |
| ***createElement()***     | 创建元素对象                                                 |
| ***createTextNode()***    | 创建文本对象                                                 |



##### 3.3.2 Element元素对象

> Element元素对象常用属性和方法

| 属性/方法                       | 描述                                       |
| ------------------------------- | ------------------------------------------ |
| **element.appendChild()**       | 向元素添加新的子节点，作为最后一个子节点。 |
| ***element.attributes***        | 返回元素属性的 NamedNodeMap。              |
| element.childNodes              | 返回元素子节点的 NodeList。                |
| ***element.parentNode***        | 返回元素的父节点。                         |
| element.className               | 设置或返回元素的 class 属性。              |
| element.clientHeight            | 返回元素的可见高度。                       |
| element.clientWidth             | 返回元素的可见宽度。                       |
| element.firstChild              | 返回元素的首个子节点。                     |
| element.lastChild               | 返回元素的最后一个子元素。                 |
| ***element.removeChild()***     | 从元素中移除子节点。                       |
| element.replaceChild()          | 替换元素中的子节点。                       |
| ***element.getAttribute()***    | 返回元素节点的指定属性值。                 |
| element.getAttributeNode()      | 返回指定的属性节点。                       |
| ***element.removeAttribute()*** | 从元素中移除指定属性。                     |
| element.removeAttributeNode()   | 移除指定的属性节点，并返回被移除的节点。   |
| element.getElementsByTagName()  | 返回拥有指定标签名的所有子元素的集合。     |
| ***element.id***                | 设置或返回元素的 id。                      |
| ***element.innerHTML***         | 设置或返回元素的内容。                     |
| ***element.nodeName***          | 返回元素的名称。                           |
| ***element.nodeType***          | 返回元素的节点类型。                       |
| ***element.nodeValue***         | 设置或返回元素值。                         |
| ***element.setAttribute()***    | 把指定属性设置或更改为指定值。             |
| element.setAttributeNode()      | 设置或更改指定属性节点。                   |
| element.style                   | 设置或返回元素的 style 属性。              |
| nodelist.item()                 | 返回 NodeList 中位于指定下标的节点。       |
| nodelist.length                 | 返回 NodeList 中的节点数。                 |



#### 3.4 DOM中的节点属性

> 在文档对象模型 (DOM) 中，每个节点都是一个对象。DOM 节点有三个重要的属性 

##### 3.4.1 nodeName节点的名称

> nodeName 属性：节点的名称，是只读的。
>
> - 元素节点的 nodeName 与标签名相同
> - 属性节点的 nodeName 是属性的名称
> - 文本节点的 nodeName 永远是 #text

```javascript
//元素节点的 nodeName 与标签名相同
document.write(document.body.nodeName)
//属性节点的 nodeName 是属性的名称
document.write(document.body.attributes[0].nodeName)
//文本节点的 nodeName 永远是 #text
document.write(document.getElementById("demo").childNodes[0].nodeName)
```



##### 3.4.2 nodeValue节点的值

> nodeValue 属性：节点的值
>
> - 元素节点的 nodeValue 是 undefined 或 null
> - 文本节点的 nodeValue 是文本自身
> - 属性节点的 nodeValue 是属性的值

```javascript
//元素节点的 nodeValue 是 undefined 或 null
document.write(document.head.nodeValue)
//文本节点的 nodeValue 是文本自身
document.write(document.getElementById("demo").childNodes[0].nodeValue)
//属性节点的 nodeValue 是属性的值
document.write(document.getElementById("demo").attributes[0].nodeValue)
```



##### 3.4.3 nodeType节点的类型

> nodeType 属性：节点的类型，是只读的。以下常用的几种结点类型：

| 元素类型 | 节点类型 |
| -------- | -------- |
| 元素     | 1        |
| 属性     | 2        |
| 文本     | 3        |
| 注释     | 8        |
| 文档     | 9        |



##### 3.4.4 创建节点对象

> 创建节点的方法都是由XML DOM中的Document对象来创建的，调用方式为`document.方法`。

| 方法             | 名称         |
| ---------------- | ------------ |
| createComment()  | 创建注释节点 |
| createElement()  | 创建元素节点 |
| createTextNode() | 创建文本节点 |



#### 3.5 常用属性和方法

##### 3.5.1 获取父节点

> 调用者就是节点。一个节点只有一个父节点，调用方式为`节点.parentNode`

```javascript
//获得 body 的父元素
var parentNode = document.body.parentNode;
```


##### 3.5.2 获取所有的子节点

> **childNodes**：标准属性。返回的是指定元素的**子节点**的集合（包括元素节点、所有属性、文本节点）。调用方法为`子节点数组 = 父节点.childNodes;`
>
> **注意：** 火狐 谷歌等高版本会把换行也看做是子节点。（了解）

```javascript
//获取body所有的子节点的集合
var nodeList = document.body.childNodes;
```



##### 3.5.3 获取元素属性的集合

> 获取元素属性集合调用方法为`节点.attributes`

```javascript
//获取body元素集合中的长度
var len = document.body.attributes.length;
//获取body元素集合
var list = document.body.attributes;
```



##### 3.5.4 节点的获取遍历

```javascript
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>DOM</title>
    <script type="text/javascript">
        function getNodes() {
            var nodes = document.body.childNodes;
            var txt = "";
            for (var i = 0; i < nodes.length; i++) {
                txt = txt + nodes[i].nodeName + ":" + nodes[i].nodeValue;
            }
            var length = nodes.length;
            console.log("节点个数为：" + length);
            console.log(txt);
        }
    </script>
</head>
<body>
<button onclick="getNodes()">单击获取节点集合</button><br />
<p id="demo">注意：空格的换行也算是文本，文本也是一个节点！</p>
</body>
</html>
```



##### 3.6 全选/反选按钮案例

![image-20200512211241946](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200515194507.png)

```javascript
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>demo4</title>
    <script>
        /**
         * 全选/全不选
         */
        function selectAll() {
            //通过class="hobby"获取所有选项(数组)
            var hobby = document.getElementsByClassName("hobby");
            //通过id="all"获取全选/全不选选项
            var all = document.getElementById("all");
            //遍历hobby数组
            for (var i = 0; i < hobby.length; i++) {
                //将class="hobby"的所有选项的选中状态与all关联
                hobby[i].checked = all.checked;
            }
        }

        /**
         * 全选
         *
         * checked设置返回是否被选中
         * checked = true;  选中
         * checked = false; 未选中
         */
        function fn1() {
            var hobby = document.getElementsByClassName("hobby");
            for (var i = 0; i < hobby.length; i++) {
                //判断如果全部选项没有被选中则继续执行全选操作
                if (!hobby[i].checked) {
                    //将所有选项状态变为选中状态
                    hobby[i].checked = true;
                }
            }
        }

        /**
         * 全不选
         */
        function fn2() {
            var hobby = document.getElementsByClassName("hobby");
            for (var i = 0; i < hobby.length; i++) {
                //判断如果全部选项被选中则继续全部选操作
                if (hobby[i].checked) {
                    //将所有选项状态变为未选中
                    hobby[i].checked = false;
                }
            }
        }

        /**
         * 反选
         */
        function fn3() {
            var hobby = document.getElementsByClassName("hobby");
            for (var i = 0; i < hobby.length; i++) {
                //获取选项的选中状态
                var oldChecked = hobby[i].checked;
                //把获取选中的选中状态取反
                var newChecked = !oldChecked;
                hobby[i].checked = newChecked;
            }
        }
    </script>
</head>
<body>
<input type="checkbox" onchange="selectAll()" id="all">全选/全不选<br>
<br>
<input type="checkbox" class="hobby">篮球
<input type="checkbox" class="hobby">足球
<input type="checkbox" class="hobby">乒乓球
<input type="checkbox" class="hobby">羽毛球
<br>
<br>
<button onclick="fn1()">全选</button>
<button onclick="fn2()">全不选</button>
<button onclick="fn3()">反选</button>
</body>
</html>
```



### 四、DOM元素操作

#### 4.1 获取HTML元素

> 通常，通过 JavaScript，您需要操作 HTML 元素。为了做到这件事情，您必须首先找到该元素。有三种方法来做这件事：
>
> - 通过 id 找到 HTML 元素
> - 通过标签名找到 HTML 元素
> - 通过类名找到HTML 元素



##### 4.1.1 id查找HTML元素

> 在 DOM 中查找 HTML 元素的最简单的方法，是通过使用元素的 id。
>
> 通过id=“div1”查找元素。如果找到该元素，则该方法将以对象（在 x 中）的形式返回该元素。如果未找到该元素，则 x 将包含 null。

```javascript
//通过id=“div1”查找元素
var x = document.getElementById("div1");
```



##### 4.1.2 标签名查找HTML元素

> 查找id="main"的元素。通过查找到的id="main"的元素中，查找所有元素的\<p>标签元素

```javascript
var x = document.getElementById("main");
var y = x.getElementsByTagName("p");
```



##### 4.1.3 类名查找HTML元素

> 查找class="div"的元素。通过getElementsByClassName 函数来查找 class="div" 的元素

```javascript
var x = document.getElementsByClassName("div");
```



##### 4.1.4 innerText与innerHTML的区别

> innerText：获取标签的所有文本内容，但凡是文本内容就会获取到，也会被打印
>
> innerHTML：获取标签的文本内容，如果文本内容里含有页面标签字符串，innerHTML会解析页面标签字符串，则页面标签字符串被解析而不会被获取到，也不会被打印

```javascript
//注意：b标签被innerHTML解析
"<b>我是被innerText获取</b>"		//结果为：<b>我是被innerText获取</b>
"<b>我是被innerHTML获取</b>"		//结果为：我是被innerHTML获取
```



##### 4.1.5 获取HTML元素的使用

```javascript
<body>
<div id="div_id" class="div_class">
    我是div
</div>
<p>我是1号p标签</p>
<p class="pp">我是2号p标签</p>
<p>我是3号p标签</p>
<p class="pp">我是4号p标签</p>
<p>我是5号p标签</p>
<p class="pp">我是6号p标签</p>
<script type="text/javascript">
    //获取div标签为div_id的标签文本
    var d = document.getElementById("div_id");
    console.log(d.innerText);
    //获取多个标签中第一个标签文本
    var ps = document.getElementsByTagName("p");
    console.log(ps[0].innerText);
    //获取标签数量
    console.log(ps.length);
    //获取第一个p标签文本
    console.log(ps[0].innerText);
    //获取多个class为pp的其中第一个标签文本
    var pps = document.getElementsByClassName("pp");
    console.log(pps[0].innerText);
</script>
</body>
```



##### 4.1.6 获取设置移除属性案例

```javascript
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>DOM</title>
    <%--
        需求1:获取输入框中的name属性值
        需求2:设置输入框中的name属性值
        需求3:移除输入框中的name属性
    --%>
    <script>

        function fn1() {
            //获取输入框中的name属性值
            var ele = document.getElementById("username");
            var value = ele.getAttribute("name");
            console.log(value)
        }

        function fn2() {
            //设置输入框中的name属性值
            var ele = document.getElementById("username");
            ele.setAttribute("name","myUsername");

        }

        function fn3() {
            // 移除输入框中的name属性
            var ele = document.getElementById("username");
            ele.removeAttribute("name");
        }

        function fn4() {
            var ele = document.getElementById("username");
            //注意：通过getAttribute获取属性值，该属性值必须显式地设置到标签上！
            var value = ele.getAttribute("value");
            console.log(value)
        }

    </script>
</head>
<body>
    <input type="text" name="username" id="username" value="zhangsan"/>
    <button onclick="fn1()">获取</button>
    <button onclick="fn2()">设置</button>
    <button onclick="fn3()">移除</button>
    <button onclick="fn4()">获取value属性</button>
</body>
</html>
```



#### 4.2 修改HTML

> HTML DOM 允许 JavaScript 改变 HTML 元素的内容。



##### 4.2.1 改变HTML文本

> 修改 HTML 文本的最简单的方法时使用 innerHTML 属性。
>
> 如需改变 HTML 元素的内容，请使用这个语法：
>
> - document.getElementById(id).innerHTML="xxxx";
> - document.getElementById(id).innerText="xxxx";

```html
<html>
<body>
<p id="p1">Hello World!</p>
<script>
//改变了<p>元素的文本
document.getElementById("p1").innerHTML="xxxx";
</script>
</body>
</html>
```



##### 4.2.2 改变HTML属性

> 如需改变 HTML 元素的属性，请使用这个语法：
>
> - document.getElementById(*id*).*attribute=新属性值*
> - document.getElementById("image").setAttribute("属性","值");

```html
<!DOCTYPE html>
<html>
<body>
<img id="image" src="hello.png">
<script>
//改变<img>元素的src属性
document.getElementById("image").src="world.jpg";
</script>
</body>
</html>
```



##### 4.3 修改CSS样式

> 如需改变 HTML 元素的样式，请使用这个语法：
>
> - document.getElementById(*id*).style.*property*=*新样式*

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
</head>
<body>
<p id="p1">Hello World!</p>
<p id="p2">Hello World!</p>
<script>
//修改<p>元素的样式
document.getElementById("p2").style.color="blue";
document.getElementById("p2").style.fontFamily="Arial";
document.getElementById("p2").style.fontSize="larger";
</script>
<p>以上段落通过脚本修改</p>
</body>
</html>
```



#### 4.4 元素标签的 CRUD

##### 4.4.1 创建新元素

> 如需向 HTML DOM 添加新元素，您必须首先创建该元素（元素节点），然后向一个已存在的元素追加该元素。
>
> 这段代码创建新的\<p> 元素：`var para=document.createElement("p");`。如需向 \<p> 元素添加文本，您必须首先创建文本节点。这段代码创建了一个文本节点：`var node=document.createTextNode("这是一个新段落。");`。然后必须向 <p> 元素追加这个文本节点：`para.appendChild(node);`。最后必须向一个已有的元素追加这个新元素。这段代码找到一个已有的元素：`var element=document.getElementById("div1");`。以下代码在已存在的元素后添加新元素：`element.appendChild(para);`。

```javascript
<div id="div1">
<p id="p1">这是一个段落。</p>
<p id="p2">这是另一个段落。</p>
</div>

<script>
//创建p元素节点
var para = document.createElement("p");
//创建文本节点
var node = document.createTextNode("这是一个新段落。");
//向p元素中添加文本
para.appendChild(node);

//通过id=”div1“获取元素
var element = document.getElementById("div1");
//向该元素中添加p元素
element.appendChild(para);
</script>
```

***insertBefore(元素 1,元素 2)***

> 在父元素添加，将元素1插入到元素2的前面，调用语法为`父元素.insertBefore(元素 1,元素 2)`

```javascript
</head>
	<body>
	<div id="div1">
		<p id="p1">这是一个段落。</p>
		<p id="p2">这是另一个段落。</p>
	</div>
	
	<script>
    //需求：在 div1 里面,插入 para 到p1 的前面
    
    //获取p元素节点
	var para = document.createElement("p");
	//创建文本节点
	var node = document.createTextNode("这是一个新段落。");
	//向元素中添加文本
	para.appendChild(node);
	//通过id="p1"来获取元素
	var p1 = document.getElementById("p1");
	//通过id="div1"来获取元素
	var element = document.getElementById("div1");
	//通过调用insertBefore方法来实现在div1里面，插入para到p1前面
	element.insertBefore(para,p1);
	</script>
</body>
```



##### 4.4.2 删除已有的 HTML 元素

***remove()***

> 在页面内（文档）删除已有HTML元素，调用语法为`document.想要删除的元素.remove();`

```javascript
</head>
	<body>
	<div id="div1">
		<p id="p1">这是一个段落。</p>
		<p id="p2">这是另一个段落。</p>
	</div>
	<button onclick="deletes()">删除p1</button>
	<script>
	function deletes(){
		document.getElementById("p1").remove();
	}
	</script>
</body>
```

***removeChild()***

> 通过父元素来删除子元素，调用语法为`父元素.removeChild(子元素)`
>
> 找到 id="div1" 的元素：`var parent = document.getElementById("div1");`。找到 id="p1" 的 \<p> 元素：`var child = document.getElementById("p1");`。从父元素中删除子元素：`parent.removeChild(child);`。如果能够在不引用父元素的情况下删除某个元素，就太好了。不过很遗憾。DOM 需要清楚您需要删除的元素，以及它的父元素。这是常用的解决方案：找到您希望删除的子元素，然后使用其 parentNode 属性来找到父元素：	`var child=document.getElementById("p1");` `child.parentNode.removeChild(child);`

```html
<div id="div1">
<p id="p1">这是一个段落。</p>
<p id="p2">这是另一个段落。</p>
</div>
<script>
//通过id="div1"获取元素
var parent = document.getElementById("div1");
//通过id="p1"获取id="div1"的子元素
var child = document.getElementById("p1");
//删除子元素
parent.removeChild(child);
</script>
```



##### 4.4.3 替换元素

> replaceChild(元素 1,元素 2);

```javascript
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
	</head>
	<body onload="" id="h">
	<div id="div1">
		<p id="p1">这是一个段落。</p>
		<p id="p2">这是另一个段落。</p>
	</div>
	<button type="button" id="btn" onclick="deletes()"> 删除 p1</button>
	<script>
	
	function deletes(){
		var para=document.createElement("p");
		var node=document.createTextNode("这是一个新段落。");
		para.appendChild(node);
		var p1 = document.getElementById("p1");
		var element=document.getElementById("div1");
		element.replaceChild(para,p1);
	}
	</script>
	</body>
</html>

```



#### 4.5 DOM事件

##### 4.5.1 DOM事件介绍

> HTML DOM 允许我们通过触发事件来执行代码。
>
> 比如以下事件：
>
> - 元素被点击。
> - 页面加载完成。
>
> - 输入框被修改。

> 本例改变了 id="id1" 的 HTML 元素的样式，当用户点击按钮时：
>
> 注意：点击后会将原来的标签颜色变为红色！

```html
<!DOCTYPE html>
<html>
<body>

<h1 id="id1">myH1</h1>
<button type="button" 
onclick="document.getElementById('id1').style.color='red'">
button</button>

</body>
</html>
```



##### 4.5.2 DOM事件改变文本内容

> 当在 \<h1> 元素上点击时，会改变其内容：

```html
<!DOCTYPE html>
<html>
<body>
<h1 onclick="this.innerHTML='改变内容!'">点击文本!</h1>
</body>
</html>
```

> 本例从事件处理器调用一个函数：

```html
<!DOCTYPE html>
<html>
<head>
<script>
function changetext(id)
{
    id.innerHTML="改变内容!";
}
</script>
</head>
<body>
<h1 onclick="changetext(this)">点击文本!</h1>
</body>
</html>
```

> HTML DOM 允许您使用 JavaScript 来向 HTML 元素分配事件：

```html
<script>
document.getElementById("myBtn").onclick=function(){
    document.getElementById("myhead2").style.color='blue';
};
</script>
```

> onchange 事件常结合对输入字段的验证来使用。
>
> 下面是一个如何使用 onchange 的例子。当用户改变输入字段的内容时，会调用 upperCase() 函数。

```html
<input type="text" id="fname" onchange="upperCase()">
```

> onmouseover 和 onmouseout 事件可用于在用户的鼠标移至 HTML 元素上方或移出元素时触发函数。

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
</head>
<body>
<div onmouseover="mOver(this)" onmouseout="mOut(this)" style="background-color:#D94A38;width:120px;height:20px;padding:40px;">Mouse Over Me</div>
<script>
function mOver(obj){
	obj.innerHTML="Thank You"
}
function mOut(obj){
	obj.innerHTML="Mouse Over Me"
}
</script>

</body>
</html>
```



####  4.6EventListener

##### 4.6.1 addEventListener() 方法

> 在用户点击按钮时触发监听事件：

```javascript
document.getElementById("myBtn").addEventListener("click", displayDate);
```

> addEventListener() 方法用于向指定元素添加事件句柄。
>
> addEventListener() 方法添加的事件句柄不会覆盖已存在的事件句柄。
>
> 你可以向一个元素添加多个事件句柄。
>
> 你可以向同个元素添加多个同类型的事件句柄，如：两个 "click" 事件。
>
> 你可以向任何 DOM 对象添加事件监听，不仅仅是 HTML 元素。如： window 对象。
>
> addEventListener() 方法可以更简单的控制事件（冒泡与捕获）。
>
> 当你使用 addEventListener() 方法时, JavaScript 从 HTML 标记中分离开来，可读性更强， 在没有控制HTML标记时也可以添加事件监听。
>
> 你可以使用 removeEventListener() 方法来移除事件的监听。

> 语法：
>
> - 第一个参数是事件的类型 (如 "click" 或 "mousedown").  把on去掉
> - 第二个参数是事件触发后调用的函数。
> - 第三个参数是个布尔值用于描述事件是冒泡还是捕获。该参数是可选的。
>
> 注意：不要使用 "on" 前缀。 例如，使用 "click" ,而不是使用 "onclick"。

```javascript
element.addEventListener(event, function, useCapture);
```

> 当用户点击元素时弹出 "Hello World!" :

```javascript
element.addEventListener("click", myFunction);

function myFunction() {
    alert ("Hello World!");
}
```

> addEventListener() 方法允许向同个元素添加多个事件，且不会覆盖已存在的事件：

```javascript
element.addEventListener("click", myFunction);
element.addEventListener("click", mySecondFunction);
```



##### 4.6.2 事件冒泡或事件捕获

> 事件传递有两种方式：冒泡与捕获。
>
> 事件传递定义了元素事件触发的顺序。 如果你将 \<p> 元素插入到 \<div> 元素中，用户点击 \<p> 元素, 哪个元素的 "click" 事件先被触发呢？
>
> 在 **冒泡** 中，内部元素的事件会先被触发，然后再触发外部元素，即： \<p> 元素的点击事件先触发，然后会触发 \<div> 元素的点击事件。
>
> 在 **捕获** 中，外部元素的事件会先被触发，然后才会触发内部元素的事件，即： \<div> 元素的点击事件先触发 ，然后再触发 \<p> 元素的点击事件。

> addEventListener() 方法可以指定 "useCapture" 参数来设置传递类型：

```javascript
addEventListener(event, function, useCapture);
```

> 默认值为 false, 即冒泡传递，当值为 true 时, 事件使用捕获传递。

```javascript
document.getElementById("myDiv").addEventListener("click", myFunction, true);
```

> removeEventListener() 方法移除由 addEventListener() 方法添加的事件句柄:

```javascript
element.removeEventListener("mousemove", myFunction);
```





