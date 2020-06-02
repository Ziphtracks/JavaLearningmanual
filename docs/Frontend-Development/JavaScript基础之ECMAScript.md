* [JavaScript基础之ECMAScript](#javascript%E5%9F%BA%E7%A1%80%E4%B9%8Becmascript)
    * [一、JavaScript介绍](#%E4%B8%80javascript%E4%BB%8B%E7%BB%8D)
      * [1\.1 什么是JavaScript？](#11-%E4%BB%80%E4%B9%88%E6%98%AFjavascript)
      * [1\.2 JavaScript的发展历程](#12-javascript%E7%9A%84%E5%8F%91%E5%B1%95%E5%8E%86%E7%A8%8B)
      * [1\.3 JavaScript的组成部分](#13-javascript%E7%9A%84%E7%BB%84%E6%88%90%E9%83%A8%E5%88%86)
      * [1\.4 JavaScript的特性](#14-javascript%E7%9A%84%E7%89%B9%E6%80%A7)
      * [1\.5 JavaScript的特点](#15-javascript%E7%9A%84%E7%89%B9%E7%82%B9)
      * [1\.6 JavaScript的用途](#16-javascript%E7%9A%84%E7%94%A8%E9%80%94)
    * [二、ECMAScript基础](#%E4%BA%8Cecmascript%E5%9F%BA%E7%A1%80)
      * [2\.1 ECMAScript与JSP或HTML的结合方式](#21-ecmascript%E4%B8%8Ejsp%E6%88%96html%E7%9A%84%E7%BB%93%E5%90%88%E6%96%B9%E5%BC%8F)
        * [2\.1\.1 内部结合方式](#211-%E5%86%85%E9%83%A8%E7%BB%93%E5%90%88%E6%96%B9%E5%BC%8F)
        * [2\.1\.2 外部结合方式](#212-%E5%A4%96%E9%83%A8%E7%BB%93%E5%90%88%E6%96%B9%E5%BC%8F)
      * [2\.2 ECMAScript的注释](#22-ecmascript%E7%9A%84%E6%B3%A8%E9%87%8A)
        * [2\.2\.1 单行注释](#221-%E5%8D%95%E8%A1%8C%E6%B3%A8%E9%87%8A)
        * [2\.2\.2 多行注释](#222-%E5%A4%9A%E8%A1%8C%E6%B3%A8%E9%87%8A)
      * [2\.3 ECMAScript数据类型](#23-ecmascript%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
      * [2\.4 ECMAScript变量](#24-ecmascript%E5%8F%98%E9%87%8F)
        * [2\.4\.1 定义变量的语法](#241-%E5%AE%9A%E4%B9%89%E5%8F%98%E9%87%8F%E7%9A%84%E8%AF%AD%E6%B3%95)
        * [2\.4\.1 强、弱类型语言](#241-%E5%BC%BA%E5%BC%B1%E7%B1%BB%E5%9E%8B%E8%AF%AD%E8%A8%80)
        * [2\.4\.2 ECMAScript变量的定义](#242-ecmascript%E5%8F%98%E9%87%8F%E7%9A%84%E5%AE%9A%E4%B9%89)
      * [2\.5 ECMAScript运算符](#25-ecmascript%E8%BF%90%E7%AE%97%E7%AC%A6)
        * [2\.5\.1 算数运算符](#251-%E7%AE%97%E6%95%B0%E8%BF%90%E7%AE%97%E7%AC%A6)
        * [2\.5\.2 赋值运算符](#252-%E8%B5%8B%E5%80%BC%E8%BF%90%E7%AE%97%E7%AC%A6)
        * [2\.5\.3 JavaScript 字符串运算符](#253-javascript-%E5%AD%97%E7%AC%A6%E4%B8%B2%E8%BF%90%E7%AE%97%E7%AC%A6)
          * [字符串拼接](#%E5%AD%97%E7%AC%A6%E4%B8%B2%E6%8B%BC%E6%8E%A5)
          * [字符串级联](#%E5%AD%97%E7%AC%A6%E4%B8%B2%E7%BA%A7%E8%81%94)
          * [字符串与数字相加](#%E5%AD%97%E7%AC%A6%E4%B8%B2%E4%B8%8E%E6%95%B0%E5%AD%97%E7%9B%B8%E5%8A%A0)
        * [2\.5\.4 比较运算符](#254-%E6%AF%94%E8%BE%83%E8%BF%90%E7%AE%97%E7%AC%A6)
        * [2\.5\.5 逻辑运算符](#255-%E9%80%BB%E8%BE%91%E8%BF%90%E7%AE%97%E7%AC%A6)
        * [2\.5\.6 位运算符](#256-%E4%BD%8D%E8%BF%90%E7%AE%97%E7%AC%A6)
        * [2\.5\.7 类型运算符](#257-%E7%B1%BB%E5%9E%8B%E8%BF%90%E7%AE%97%E7%AC%A6)
      * [2\.6 ECMAScript常用语句](#26-ecmascript%E5%B8%B8%E7%94%A8%E8%AF%AD%E5%8F%A5)
        * [2\.6\.1 分支结构](#261-%E5%88%86%E6%94%AF%E7%BB%93%E6%9E%84)
          * [if else 语句](#if-else-%E8%AF%AD%E5%8F%A5)
          * [switch 语句](#switch-%E8%AF%AD%E5%8F%A5)
        * [2\.6\.2 循环结构](#262-%E5%BE%AA%E7%8E%AF%E7%BB%93%E6%9E%84)
          * [do\-while 语句](#do-while-%E8%AF%AD%E5%8F%A5)
          * [while 语句](#while-%E8%AF%AD%E5%8F%A5)
          * [for 语句](#for-%E8%AF%AD%E5%8F%A5)
          * [break 语句](#break-%E8%AF%AD%E5%8F%A5)
          * [continue 语句](#continue-%E8%AF%AD%E5%8F%A5)
          * [增强for循环](#%E5%A2%9E%E5%BC%BAfor%E5%BE%AA%E7%8E%AF)
        * [2\.6\.3 void](#263-void)
      * [2\.7 ECMAScript常用对象](#27-ecmascript%E5%B8%B8%E7%94%A8%E5%AF%B9%E8%B1%A1)
        * [2\.7\.1 Function对象](#271-function%E5%AF%B9%E8%B1%A1)
        * [2\.7\.2 Array数组对象](#272-array%E6%95%B0%E7%BB%84%E5%AF%B9%E8%B1%A1)
        * [2\.7\.3 Date对象](#273-date%E5%AF%B9%E8%B1%A1)
        * [2\.7\.4 RegExp 对象](#274-regexp-%E5%AF%B9%E8%B1%A1)
        * [2\.7\.5 全局对象](#275-%E5%85%A8%E5%B1%80%E5%AF%B9%E8%B1%A1)
    * [三、ECMAScript函数](#%E4%B8%89ecmascript%E5%87%BD%E6%95%B0)
      * [3\.1 函数的概念](#31-%E5%87%BD%E6%95%B0%E7%9A%84%E6%A6%82%E5%BF%B5)
      * [3\.2 函数的定义](#32-%E5%87%BD%E6%95%B0%E7%9A%84%E5%AE%9A%E4%B9%89)
      * [3\.3 匿名函数](#33-%E5%8C%BF%E5%90%8D%E5%87%BD%E6%95%B0)
      * [3\.4 闭包](#34-%E9%97%AD%E5%8C%85)
        * [3\.4\.1  全局/局部变量](#341--%E5%85%A8%E5%B1%80%E5%B1%80%E9%83%A8%E5%8F%98%E9%87%8F)
        * [3\.4\.2 变量的生命周期](#342-%E5%8F%98%E9%87%8F%E7%9A%84%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F)
        * [3\.4\.3 内嵌函数](#343-%E5%86%85%E5%B5%8C%E5%87%BD%E6%95%B0)
        * [3\.4\.4 闭包](#344-%E9%97%AD%E5%8C%85)
      * [3\.5 回调](#35-%E5%9B%9E%E8%B0%83)
      * [3\.6 系统函数](#36-%E7%B3%BB%E7%BB%9F%E5%87%BD%E6%95%B0)
        * [3\.6\.1 弹窗函数](#361-%E5%BC%B9%E7%AA%97%E5%87%BD%E6%95%B0)
          * [提示框alert()](#%E6%8F%90%E7%A4%BA%E6%A1%86alert)
          * [确认框confirm()](#%E7%A1%AE%E8%AE%A4%E6%A1%86confirm)
          * [输入框弹窗prompt()](#%E8%BE%93%E5%85%A5%E6%A1%86%E5%BC%B9%E7%AA%97prompt)
        * [3\.6\.2 其他常用系统函数](#362-%E5%85%B6%E4%BB%96%E5%B8%B8%E7%94%A8%E7%B3%BB%E7%BB%9F%E5%87%BD%E6%95%B0)
      * [四、事件](#%E5%9B%9B%E4%BA%8B%E4%BB%B6)
        * [4\.1 什么是事件？](#41-%E4%BB%80%E4%B9%88%E6%98%AF%E4%BA%8B%E4%BB%B6)
        * [4\.2 事件语法](#42-%E4%BA%8B%E4%BB%B6%E8%AF%AD%E6%B3%95)
        * [4\.2 常用事件](#42-%E5%B8%B8%E7%94%A8%E4%BA%8B%E4%BB%B6)
      * [五、字符串](#%E4%BA%94%E5%AD%97%E7%AC%A6%E4%B8%B2)
        * [5\.1 字符串概念](#51-%E5%AD%97%E7%AC%A6%E4%B8%B2%E6%A6%82%E5%BF%B5)
        * [5\.2 创建String对象的语法](#52-%E5%88%9B%E5%BB%BAstring%E5%AF%B9%E8%B1%A1%E7%9A%84%E8%AF%AD%E6%B3%95)
        * [5\.3 String对象属性](#53-string%E5%AF%B9%E8%B1%A1%E5%B1%9E%E6%80%A7)
        * [5\.4 String对象方法](#54-string%E5%AF%B9%E8%B1%A1%E6%96%B9%E6%B3%95)

# JavaScript基础之ECMAScript

------

### 一、JavaScript介绍

#### 1.1 什么是JavaScript？

> `JavaScript（简称“JS”）` 是一种具有函数优先的轻量级，解释型或即时编译型的编程语言。虽然它是作为开发Web页面的脚本语言而出名的，但是它也被用到了很多非浏览器环境中，JavaScript 基于原型编程、多范式的动态脚本语言，并且支持面向对象、命令式和声明式（如函数式编程）风格。



#### 1.2 JavaScript的发展历程

> 它最初由Netscape的Brendan Eich设计。JavaScript是甲骨文公司的注册商标。Ecma国际以JavaScript为基础制定了ECMAScript标准。JavaScript也可以用于其他场合，如服务器端编程。完整的JavaScript实现包含三个部分：ECMAScript，文档对象模型（DOM Document Object Model），浏览器对象模型(BOM Browser Object Model)。
>
> ​	Netscape在最初将其脚本语言命名为LiveScript，后来Netscape在与Sun合作之后将其改名为JavaScript。JavaScript最初受Java启发而开始设计的，目的之一就是“看上去像Java”，因此语法上有类似之处，一些名称和命名规范也借自Java。但JavaScript的主要设计原则源自Self和Scheme。JavaScript与Java名称上的近似，是当时Netscape为了营销考虑与Sun微系统达成协议的结果。为了取得技术优势，微软推出了JScript来迎战JavaScript的脚本语言。为了互用性，Ecma国际（前身为欧洲计算机制造商协会）创建了ECMA-262标准（ECMAScript）。两者都属于ECMAScript的实现。尽管JavaScript作为给非程序人员的脚本语言，而非作为给程序人员的脚本语言来推广和宣传，但是JavaScript具有非常丰富的特性。
>
> 发展初期，JavaScript的标准并未确定，同期有Netscape的JavaScript，微软的JScript和CEnvi的ScriptEase三足鼎立。1997年，在ECMA（欧洲计算机制造商协会）的协调下，由Netscape、Sun、微软、Borland组成的工作组确定统一标准：ECMA-262。



#### 1.3 JavaScript的组成部分

> `ECMAScript`，描述了该语言的语法和基本对象
>
> `文档对象模型（DOM）`，描述处理网页内容的方法和接口
>
> `浏览器对象模型（BOM）`，描述与浏览器进行交互的方法和接口



#### 1.4 JavaScript的特性

> JavaScript具有的特性有脚本语言、基于对象、简单、动态性、跨平台



#### 1.5 JavaScript的特点

> `JavaScript`是一种属于网络的脚本语言,已经被广泛用于Web应用开发,常用来为网页添加各式各样的动态功能,为用户提供更流畅美观的浏览效果。通常JavaScript脚本是通过嵌入在HTML中来实现自身的功能的。
>
> 1. 是一种解释性脚本语言（代码不进行预编译）
> 2. 主要用来向HTML（标准通用标记语言下的一个应用）页面添加交互行为
> 3. 可以直接嵌入HTML页面，但写成单独的js文件有利于结构和行为的分离 
> 4. 跨平台特性，在绝大多数浏览器的支持下，可以在多种平台下运行（如Windows、Linux、Mac、Android、iOS等）
> 5. Javascript脚本语言同其他语言一样，有它自身的基本数据类型，表达式和算术运算符及程序的基本程序框架。Javascript提供了四种基本的数据类型和两种特殊数据类型用来处理数据和文字。而变量提供存放信息的地方，表达式则可以完成较复杂的信息处理
> 6. 可以实现web页面的人机交互



#### 1.6 JavaScript的用途

> 有些用途因知识我们目前没有学习到，先做了解即可！
>
> - 嵌入动态文本于HTML页面
> - 对浏览器事件做出响应
> - 读写HTML元素
> - 在数据被提交到服务器之前验证数据
> - 检测访客的浏览器信息
> - 控制cookies，包括创建和修改等
> - 基于Node.js技术进行服务器端编程



### 二、ECMAScript基础

#### 2.1 ECMAScript与JSP或HTML的结合方式

> HTML和JSP嵌入ECMAScript方式和作用相同，这里默认演示嵌入JSP！



##### 2.1.1 内部结合方式

> 将\<script>的一对标签写在一对\<head>标签内，然后在写好的标签内编写JS代码，如下：

```html
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>ECMAScript和页面结合之内部结合</title>
    <%--js脚本内部结合--%>
    <script>
        alert("alert hello world");                 //弹出页面窗口提示内容
        document.write("document hello world");     //将内容显示在浏览器中
        console.log("log hello world");             //将内容显示在浏览器F12中的Console中
    </script>
</head>
<body>
</body>
</html>
```



##### 2.1.2 外部结合方式

> 在web下创建并命名一个JavaScript文件，再将将\<script>的一对标签写在一对\<head>标签内，扩展标签属性src并引入JavaScript文件路径，如下：
>
> **注意：外部结合方式，JS代码的编写工作要写在JavaScript文件中，不允许再在标签内编写JS代码，如果编写了，也不报错。但是JS代码默认无任何效果** 

> JavaScript文件，此文件命名为js

```javascript
alert("alert hello world");                 //弹出页面窗口提示内容
document.write("document hello world");     //将内容显示在浏览器中
console.log("log hello world");             //将内容显示在浏览器F12中的Console中
```

> JSP页面文件

```html
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>ECMAScript和页面结合之外部结合</title>
    <%--js脚本外部结合--%>
    <script src="${pageContext.request.contextPath}/js.js"></script>
</head>
<body>
</body>
</html>
```



#### 2.2 ECMAScript的注释

##### 2.2.1 单行注释

> 单行注释以` // `开头。任何位于 // 与行末之间的文本都会被 JavaScript 忽略（不会执行）

```javascript
var x = 5;      // 声明 x，为其赋值 5
var y = x + 2;  // 声明 y，为其赋值 x + 2
```



##### 2.2.2 多行注释

> 多行注释以` /* `开头，以` */ `结尾。任何位于 /* 和 */ 之间的文本都会被 JavaScript 忽略。

```javascript
/*
* 声明了x、y
* 并为x、y分别赋值
* */
var x = 5;
var y = x + 2;
```



#### 2.3 ECMAScript数据类型

> **数据类型分别有：** 字符串值、数值、布尔值、数组、对象、null、undefined

| 数据类型            | 描述                                                         |
| ------------------- | ------------------------------------------------------------ |
| number（数值）      | 数值包括整数、小数和NaN（not a number 一个不是数字的数值类型） |
| string（字符串值）  | 字符串值可以使用"abc"、'abc' （注意：与Java不同，JavaScript没有字符类型） |
| boolean（布尔值）   | 布尔值分为true和false                                        |
| array（数组）       | 定义数组var names = ["Join", "Ziph", "Marry"];               |
| 对象                | **后面的对象类型很多，这里不解释太多，以免把你们混淆**       |
| null（空）          | 一个对象为空的占位符                                         |
| undefined（未定义） | 未定义。如果一个变量没有给初始化值，则会被默认赋值为undefined |



#### 2.4 ECMAScript变量

##### 2.4.1 定义变量的语法

> 语法：`var 变量名 = 值;`（var代表所有数据类型）



##### 2.4.1 强、弱类型语言

> Java语言是强类型语言，而JavaScript是弱类型语言
>
> - **强类型：** 在开辟变量存储空间时，定义了空间将来存储的数据的数据类型。只能存储固定类型的数据（简单来说，Java语言定义变量遵循`数据类型 变量名 = 值;`，只能定义指定的类型值；比如：String str = "Ziph"）
> - **弱类型：** 在开辟变量存储空间时，不定义空间将来的存储数据类型，可以存放任意类型的数据（简单来说，JavaScript语言定义变量遵循`var 变量名 = 值;`，var代表多种所有数据类型，它会根据我们定义的值而精确匹配）



##### 2.4.2 ECMAScript变量的定义

> JavaScript 变量是存储数据值的容器

```javascript
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>ECMAScript变量</title>

    <script>
        // var 变量名 = 初始化值;
        // 一个num定义了多个数据类型
        var num = 1;
        console.log(num);
        num = "abc";
        console.log(num);
        num = true;
        console.log(num);
        num = null;
        console.log(num);
        num = undefined;
        console.log(num);
    </script>

</head>
<body>
</body>
</html>
```

> 是不是可以看见JavaScript中var定义num变量的所有值呢？

![image-20200508205903613](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200508205913.png)



#### 2.5 ECMAScript运算符

##### 2.5.1 算数运算符

> 算数运算符用于对数字执行算数运算
>
> 注意：与Java不用，1/0的运算结果得到的是Infinity；而特殊的0/0的运算结果得到的是NaN

| 运算符 | 描述 |
| ------ | ---- |
| +      | 加法 |
| -      | 减法 |
| *      | 乘法 |
| /      | 除法 |
| %      | 系数 |
| ++     | 递加 |
| --     | 递减 |

```javascript
		var num1 = 1;
        var num2 = num1++;
        console.log(num1);          //2
        console.log(num2);          //1

		var num3 = 10;
        var num4 = "2";
        console.log(num3 / num4);   //5
```



##### 2.5.2 赋值运算符

> 赋值运算符向 JavaScript 变量赋值
>
> **注意：** 加法赋值运算符（+=）向变量添加一个值

| 运算符 | 例子   | 等同于    |
| ------ | ------ | --------- |
| =      | x = y  | x = y     |
| +=     | x += y | x = x + y |
| -=     | x -= y | x = x - y |
| *=     | x *= y | x = x * y |
| /=     | x /= y | x = x / y |
| %=     | x %= y | x = x % y |

```javascript
var num5 = 1;
var num6 = 1;
num5 += num6;
console.log(num5);		//2
```



##### 2.5.3 JavaScript 字符串运算符

###### 字符串拼接

> ` + `运算符也可用于对字符串进行相加

```javascript
txt1 = “Ziph ”;
txt2 = "Good!";
txt3 = txt1 + txt2;		//Ziph Good!
```



###### 字符串级联

> `+= `赋值运算符也可用于相加（级联）字符串

```javascript
txt1 = "Hello ";
txt1 += "Kitty!"; 		//Hello Kitty!
```



###### 字符串与数字相加

> 相加两个数字，将返回和，但对一个数字和一个字符串相加将返回一个字符串

```javascript
x = 6 + 9;				//15
y = "6" + 9;			//69
z = "Hello" + 6;		//Hello6
```



##### 2.5.4 比较运算符

| 运算符 | 描述           |
| ------ | -------------- |
| ==     | 等于           |
| ===    | 等值等型       |
| !=     | 不相等         |
| !==    | 不等值或不等型 |
| >      | 大于           |
| <      | 小于           |
| >=     | 大于或等于     |
| <=     | 小于或等于     |
| ?      | 三元运算符     |

```javascript
var num7 = 10;
var num8 = "10";
console.log(num7 == num8);      //true
console.log(num7 === num8);     //false

var flag = true;
console.log(flag ? "为true":"为false");		//为true
```



##### 2.5.5 逻辑运算符

> **注意：** 在使用逻辑非的时候0、NaN、""、null、undefined都是true，因为他们默认为false

| 运算符 | 描述   |
| ------ | ------ |
| &&     | 逻辑与 |
| \| \|  | 逻辑或 |
| !      | 逻辑非 |

```javascript
var flag1 = true;
console.log(!flag1);     	//false
var flag2 = false;
console.log(flag1&&flag2);  //false
console.log(flag1||flag2);  //true

console.log(!0);         	//true
console.log(!NaN);       	//true
console.log(!"");        	//true
console.log(!null);      	//true
console.log(!undefined); 	//true	
```



##### 2.5.6 位运算符

> 位运算符处理 32 位数。
>
> 该运算中的任何数值运算数都会被转换为 32 位的数。结果会被转换回 JavaScript 数。

| 运算符 | 描述         | 例子    | 等同于       | 结果 | 十进制 |
| ------ | ------------ | ------- | ------------ | ---- | ------ |
| &      | 与           | 5 & 1   | 0101 & 0001  | 0001 | 1      |
| \|     | 或           | 5 \| 1  | 0101 \| 0001 | 0101 | 5      |
| ~      | 非           | ~ 5     | ~0101        | 1010 | 10     |
| ^      | 异或         | 5 ^ 1   | 0101 ^ 0001  | 0100 | 4      |
| <<     | 零填充左位移 | 5 << 1  | 0101 << 1    | 1010 | 10     |
| >>     | 有符号右位移 | 5 >> 1  | 0101 >> 1    | 0010 | 2      |
| >>>    | 零填充右位移 | 5 >>> 1 | 0101 >>> 1   | 0010 | 2      |

> 上例使用 4 位无符号的例子。但是 JavaScript 使用 32 位有符号数。
>
> 因此，在 JavaScript 中，~ 5 不会返回 10，而是返回 -6。
>
> ~00000000000000000000000000000101 将返回 11111111111111111111111111111010。



##### 2.5.7 类型运算符

| 运算符     | 描述                                  |
| ---------- | ------------------------------------- |
| typeof     | 返回变量的类型。                      |
| instanceof | 返回 true，如果对象是对象类型的实例。 |

```javascript
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>typeof方法</title>

    <script>
        var num = 1;
        console.log(typeof(num));       //number

        var str = "abc";
        console.log(typeof(str));       //string

        var flag = true;
        console.log(typeof(flag));      //boolean

        var obj = null;
        console.log(typeof(obj));       //Object

        var num1 ;
        console.log(typeof(num1));      //undefined

        var num2 = NaN;
        console.log(typeof num2);       //number

        /*
        * num3是一个数值类型
        * num4是一个字符串类型
        * num5获取的时num3与num4的运算结果
        * 因为"!"不是一个数值，两两运算的结果是一个不是数值的数值类型
        * 所以得出NaN的数据类型
        * */
        var num3 = 1;
        var num4 = "!";
        var num5 = num3 / num4;
        console.log(num5)               //NaN
    </script>
</head>
<body>
</body>
</html>
```

![](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200510141052.png)

![](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200508222830.png)

#### 2.6 ECMAScript常用语句

##### 2.6.1 分支结构

###### if else 语句

> if 语句是 ECMAScript 中最常用的语句之一
>
> 注意：只要if语句的括号内有只存在，默认为true。如果为null或undefined则为false

```javascript
if (i > 30)
  {alert("大于 30");}
else
  {alert("小于等于 30");}
```



###### switch 语句

> switch 语句是 if 语句的兄弟语句。可以用 switch 语句为表达式提供一系列的情况（case）。

```javascript
switch (i) {
  case 20: alert("20");
    break;
  case 30: alert("30");
    break;
  case 40: alert("40");
    break;
  default: alert("other");
}
```



##### 2.6.2 循环结构

###### do-while 语句

> do-while 语句是后测试循环，即退出条件在执行循环内部的代码之后计算。这意味着在计算表达式之前，至少会执行循环主体一次。

```javascript
var i = 0;
do {i += 2;} while (i < 10);
```



###### while 语句

> while 语句是前测试循环。这意味着退出条件是在执行循环内部的代码之前计算的。因此，循环主体可能根本不被执行。

```javascript
var i = 0;
while (i < 10) {
  i += 2;
}
```



###### for 语句

> for 语句是前测试循环，而且在进入循环之前，能够初始化变量，并定义循环后要执行的代码。

```javascript
for (var i = 0; i < 10; i++) {
    console.log(i)
}
```





###### break 语句

> break 语句可以立即退出循环，阻止再次反复执行任何代码。

```javascript
var iNum = 0;

for (var i=1; i<10; i++) {
  if (i % 5 == 0) {
    break;
  }
  iNum++;
}
alert(iNum);	//输出 "4"
```



###### continue 语句

> continue 语句只是退出当前循环，根据控制表达式还允许继续进行下一次循环。

```javascript
var iNum = 0;

for (var i=1; i<10; i++) {
  if (i % 5 == 0) {
    continue;
  }
  iNum++;
}
alert(iNum);	//输出 "8"
```



###### 增强for循环

>  for(var i in arr){	//i不是arr中的元素，而是下标}

```javascript
var arr=[10,20,30,40];
for(var i in arr){
  document.write(arr[i]);
  document.write("<br/>")
}

var map=new Array();
map['cn']="中国";
map['us']="美国";
map['jp']="日本";
map['kor']="韩国";

for(var k in map){
  document.write(k+"...."+map[k]);
  document.write("<br/>")
}
```



##### 2.6.3 void

> 我们经常会使用到 javascript:void(0) 这样的代码
>
> javascript:void(0) 中最关键的是 void 关键字， void 是 JavaScript 中非常重要的关键字，该操作符指定要计算一个表达式但是不返回值。

> 下面的代码创建了一个超级链接，当用户点击以后不会发生任何事。

```javascript
<a href="javascript:void(0)">单击后不发生任何事情</a>
```

> void的其他用法

```javascript
<a href="javascript:void(alert('Warning!!!'))">点我!</a>
```

> 补充：href="#"与href="javascript:void(0)"的区别
>
> #包含了一个位置信息，默认的锚是#top 也就是网页的上端。而javascript:void(0), 仅仅表示一个死链接。
>
> 在页面很长的时候会使用 **#** 来定位页面的具体位置，格式为：**# + id**（也称为锚链接）。如果你要定义一个死链接请使用 javascript:void(0) 



#### 2.7 ECMAScript常用对象

##### 2.7.1 Function对象

> Function 类可以表示开发者定义的任何函数
>
> - 方法定义是，形参的类型不用写,返回值类型也不写。
> -  方法是一个对象，如果定义名称相同的方法，会覆盖 在JS中，方法的调用只与方法的名称有关，和参数列表无关
> - 在方法声明中有一个隐藏的内置对象（数组），arguments，封装所有的实际参数

```javascript
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Function对象</title>
    <script>
        //定义一个方法
        //第一个参数：形式参数
        //第二个参数：方法体
        var fn1 = new Function("arg1,arg2,arg3","console.log(arg1);console.log(arg2);console.log(arg3); return arg1 + arg2 + arg3;");
        var returnValue1 = fn1("a","b","c");        //abc
        console.log(returnValue1);
        var returnValue2 = fn1("a","b");
        console.log(returnValue2);                  //abundefined
        var returnValue3 = fn1();
        console.log(returnValue3);                  //NaN
    </script>
</head>
<body>
</body>
</html>
```



##### 2.7.2 Array数组对象

> 语法：var arr = new Array(元素列表);  var arr = new Array(默认长度);  var arr = [元素列表];

> 常用方法：
>
> - join(参数)：将数组中的元素按照指定的分隔符拼接为字符串 
>
> - push()：向数组的末尾添加一个或更多元素，并返回新的长度
> - pop()：将数组中最后一个元素删除并取出

> 特点：
>
> - 数组元素的类型是可变的
> - 数组长度是可变的

```javascript
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Array对象</title>
    <script>
        //创建数组对象
        var arr1 = new Array("a","b","c");
        console.log(arr1.length);           //3

        var arr2 = ["a","b","c"];
        console.log(arr2.length);           //3

        var str1 = arr1.join("-");
        console.log(str1);                  //a-b-c

        //将arr1数组中最后一个元素删除并取出！
        var lastItem = arr1.pop();
        console.log(lastItem);              //c
        console.log(arr1.length);           //2

        var length = arr1.push("c","d","e");
        console.log(length);                //5
        console.log(arr1);                  //显示了数组对象
    </script>
</head>
<body>
</body>
</html>
```



##### 2.7.3 Date对象

> Date 对象会自动把当前日期和时间保存为其初始值

```javascript
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Date对象</title>

    <script>
        //当前时间对象
        var date = new Date();
        console.log(date.toLocaleString());

        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var day =  date.getDate();
        var hour = date.getHours();
        var minutes = date.getMinutes();
        var seconds = date.getSeconds();
        var timeStr = year + "/"+month + "/" + day + " " + hour + ":" + minutes + ":" + seconds;
        console.log(timeStr);

        timeStr = [year,month,day].join("/") + " " + [hour,minutes,seconds].join(":");
        console.log(timeStr);

        //获取到当前时间的毫秒值
        //时间戳与我们时间存在8个小时的时差
        //1970.1.1 00:00:00
        //1970.1.1 08:00:00
        console.log(date.getTime());
    </script>
</head>
<body>
</body>
</html>
```

![](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200510135741.png)



##### 2.7.4 RegExp 对象

> RegExp 对象表示正则表达式，它是对字符串执行模式匹配的强大工具。

> 语法：/^正则表达式$/

> 常用方法：
>
> - test(参数)：验证指定的字符串是否符合正则定义的规范

```javascript
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>RegExp对象</title>
    <script>
        var reg1 = /^[a]{3}$/;
        console.log(reg1.test("aaaa"));			//false
    </script>
</head>
<body>
</body>
</html>
```



##### 2.7.5 全局对象

> 全局对象是预定义的对象，作为 JavaScript 的全局函数和全局属性的占位符。通过使用全局对象，可以访问所有其他所有预定义的对象、函数和属性。全局对象不是任何对象的属性，所以它没有名称。
>
> **特点：** 这个Global中封装的方法不需要对象就可以直接调用

| 函数                 | 描述                                               |
| -------------------- | -------------------------------------------------- |
| decodeURI()          | 解码某个编码的 URI。                               |
| decodeURIComponent() | 解码一个编码的 URI 组件。                          |
| encodeURI()          | 把字符串编码为 URI。                               |
| encodeURIComponent() | 把字符串编码为 URI 组件。                          |
| escape()             | 对字符串进行编码。                                 |
| eval()               | 计算 JavaScript 字符串，并把它作为脚本代码来执行。 |
| getClass()           | 返回一个 JavaObject 的 JavaClass。                 |
| isFinite()           | 检查某个值是否为有穷大的数。                       |
| isNaN()              | 检查某个值是否是数字。                             |
| Number()             | 把对象的值转换为数字。                             |
| parseFloat()         | 解析一个字符串并返回一个浮点数。                   |
| parseInt()           | 解析一个字符串并返回一个整数。                     |
| String()             | 把对象的值转换为字符串。                           |
| unescape()           | 对由 escape() 编码的字符串进行解码。               |

> 常用方法：
>
> - parseInt()：将字符串转为数字
>   * 逐一判断每一个字符是否是数字，直到不是数字为止，将前边数字部分转为number
> - isNaN()：判断一个值是否是NaN
>   - NaN参与的==比较全部为false
> - eval()：计算JavaScript字符串，并把它作为脚本代码来执行

```javascript
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>全局对象</title>
    <script>
        //parseInt
        var num1 = 1;
        var num2 = "1";
        console.log(num1 + parseInt(num2)); //2

        //isNaN：判断一个变量是否是NaN
        var num3 = NaN;
        console.log(isNaN(num3));           //true

		//以下两种比较特殊，不要纠结，记住就可以了！
        console.log(num3 == NaN);           //false
        console.log(num3 === NaN);          //false

        //eval：计算json字符串，返回js对象
        var jsonStr = '{"username":"root","password":"123456"}';
        //能够通过上述的json字符串直接调用username属性和password属性?
        //不能!需要将json字符串转换成js对象，就可以了!
        var jsObject = eval("("+jsonStr+")");
        console.log(jsObject.username + " , " + jsObject.password)
    </script>
</head>
<body>
</body>
</html>
```



### 三、ECMAScript函数

#### 3.1 函数的概念

> 包含一段功能的代码，其目的是为了重复使用。



#### 3.2 函数的定义

> 用function关键字来声明，后面是函数名字，参数列表里不写var。整个方法不写返回值类型。

```javascript
function functionName(parameters){
    //执行的代码
}
```

> 因为JavaScript是一种弱类型语言，var代码所用时的数据类型。所以我们不用定义参数的数据类型和返回值类型等等

```javascript
<script>
function method(a,b) {
    document.write("无参方法：" + (a + b));
}
//如果调用方法，但是没有给方法赋值，返回的结果是NaN
method();
//结果返回3
method(1, 2);

function add(a,b) {
    return a + b;
}
var result = add(8, 7);
//结果返回15
document.write(result);
</script>
```



#### 3.3 匿名函数

> 匿名函数就像他的名字一样，没有名字的函数！
>
> **注意：** 自己且执行一次的匿名函数要写在第一个执行才有结果显示，并且只能有一个！

```javascript
<script type="text/javascript">
    (function () {
        document.write("这是一个自己且只执行一次的无参匿名方法")
    })()

    // (function (s) {
    //     document.write("这是一个自己只执行一次的有参匿名函数" + s)
    // })("哈哈！")

    function method() {
        document.write("这是一个普通且有方法名的方法")
    }

    method()

    var f = function () {
        document.write("这是一个赋值给变量的匿名方法")
    }
    f()
</script>
```



#### 3.4 闭包

> JavaScript 变量属于本地或全局作用域，全局变量能够通过闭包实现局部（私有）



##### 3.4.1  全局/局部变量

> 函数可以访问内部定义的全部变量，也可以访问访问函数外部定义的变量

示例1

```javascript
function myFunction() {
    var a = 4;
    return a * a;
} 
```

示例2

```javascript
var a = 4;
function myFunction() {
    return a * a;
} 
```

> **注意：** 示例1中变量a就是一个局部变量，局部变量只能用于其被定义的函数内部。示例2中变量a就是一个全局变量



##### 3.4.2 变量的生命周期

> 全局变量的作用域是全局性的，即在整个JavaScript程序中，全局变量处处都在。而在函数内部声明的变量，只在函数内部起作用。这些变量是局部变量，作用域是局部性的；函数的参数也是局部性的，只在函数内部起作用。

```javascript
var counter = 0;
function add() {
	return counter += 1;
}
add();
add();
add();
// 计数器现在为 3
```

> 计数器数值在执行 add() 函数时发生变化。
>
> 但问题来了，页面上的任何脚本都能改变计数器，即便没有调用 add() 函数。
>
> 如果我在函数内声明计数器，如果没有调用函数将无法修改计数器的值：

```javascript
function add() {
var counter = 0;
return counter += 1;
}
add();
add();
add();
// 本意是想输出 3, 但输出的都是 1 !
```



##### 3.4.3 内嵌函数

> 所有函数都能访问全局变量。  实际上，在 JavaScript 中，所有函数都能访问它们上一层的作用域。

> JavaScript 支持嵌套函数。嵌套函数可以访问上一层的函数变量。该实例中，内嵌函数 **plus()** 可以访问父函数的 **counter** 变量：

```javascript
function add() {
	var counter = 0;
	function plus() {
    	counter += 1;
  	}
	plus();    
	return counter; 
}
```

> 如果我们能在外部访问 **plus()** 函数，这样就能解决计数器的困境。
>
> 我们同样需要确保 **counter = 0** 只执行一次。但实际上该场景下,每调用一次 add() 都会让 counter 初始化一次



##### 3.4.4 闭包

```javascript
<script>
var add = (function () {
  var counter = 0;//局部变量
  function add() {//内部函数
    counter += 1; //访问了外部自执行函数的局部变量
  }
    return counter;//把add方法返回，赋值给了变量add
})();

	document.write(add());
	document.write(add());
	document.write(add());
//输出结果为  1  2   3 
</script>
```

> 变量 add 的赋值是自调用函数的返回值。
>
> 这个自调用函数只运行一次。它设置计数器为零（0），并返回函数表达式。
>
> 这样 add 成为了函数。最“精彩的”部分是它能够访问父作用域中的计数器。简单来说，局部变量初始化一次后，以后的每次访问都是访问的内部函数。而内部函数也可以访问运算之后的局部变量，最后返回结果！
>
> 这被称为 JavaScript *闭包*。它使函数拥有“*私有*”变量成为可能,换句话说就是改变了局部变量的生命周期。
>
> 计数器被这个匿名函数的作用域保护，并且只能使用 add 函数来修改。
>
> 闭包指的是有权访问父作用域的函数，即使在父函数关闭之后。



#### 3.5 回调

> 回调函数是一段可执行的代码段，它作为一个参数传递给其他的代码，其作用是在需要的时候方便调用这段（回调函数）代码。
>

普通回调函数

```javascript
<script type="text/javascript">
			function a(num1,num2,callback){
				var sum = num1 + num2;
				return callback(sum);
			}
			function b(num){
				return num * num;
			}
			var result = a(1, 2, b);
			document.write(result);			//答案：9
</script>
```

匿名回调函数

```javascript
<script type="text/javascript">
			function a(num1,num2,callback){
				var sum = num1 + num2;
				return callback(sum);
			}
			var result = a(1, 2, function(num){return num + 10;});
			document.write(result);			//答案：13
</script>
```



#### 3.6 系统函数

##### 3.6.1 弹窗函数

###### 提示框alert()

> alert方法没有返回值，也就是说如果用一个变量去接受返回值，将会得到undefined。无论你点击“确定”还是右上角的那个“X“关闭。

```javascript
<script type="text/javascript">
    var result = alert("你好啊，我是赛利亚！");
    document.write(result);
</script>
```

![image-20200510101910546](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200510101915.png)

###### 确认框confirm()

> confirm方法与alert不同，他的返回值是boolean，当你点击“确定”时，返回true，无论你点击“取消”还是右上角的那个“X“关闭，都返回false。

```javascript
<script type="text/javascript">
    var result = confirm("您确定删除该信息吗？");
    if (result) {
        //返回true则删除成功
        document.write("删除成功！");
    } else {
        //返回false则删除失败
        document.write("您取消了删除！");
    }
</script>
```

![image-20200510102325633](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200510102328.png)

###### 输入框弹窗prompt()

> prompt是一个是输入文本的弹窗，第一个参数是提示信息，第二个参数是用户输入的默认值。当你点击确定的时候，返回用户输入的内容。当你点击取消或者关闭的时候，返回null。

```javascript
<script type="text/javascript">
	var result = prompt("请输入你的姓名!","先生/女士");
    document.write(result);
</script>
```

![image-20200510103232653](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200510103236.png)



##### 3.6.2 其他常用系统函数

| 函数名        | 描述                 |
| ------------- | -------------------- |
| parseInt();   | 字符串转换整数       |
| parseFloat(); | 字符串转成小数       |
| isNaN();      | 判断数字是否为非数字 |

```javascript
<script type="text/javascript">
    //prompt输入的信息是String类型
	var num1 = prompt("请输入一个数字!");
    var num2 = prompt("请输入另一个数字!");
	//默认加法运算
    var sign = prompt("请输入一个运算符!", "+");
	//判断是否为非数字
    if (isNaN(num1) && isNaN(num2)) {
        document.write("请输入正确的数字！");
    } else {
        //将String类型转换为Int类型
        num1 = parseInt(num1);
        num2 = parseInt(num2);
    }
	//执行加法运算
    document.write(num1 + num2);
</script>
```



#### 四、事件

##### 4.1 什么是事件？

> **HTML 事件是发生在 HTML 元素上的“事情”。当在 HTML 页面中使用 JavaScript 时，JavaScript 能够“应对”这些事件。**



##### 4.2 事件语法

>   事件名=“函数名”  或者  事件名="行内js"；示例如下：

```javascript
<h1 onclick="alert('你惹到我了！')">请点击此文本！</h1>
```

```javascript
<h1 onclick="changeText(this)">点击此文本！</h1>

<script>
function changeText(id) { 
    document.write("Hello Wrold)");
}
</script>
```



##### 4.2 常用事件

| 事件        | 描述                               |
| ----------- | ---------------------------------- |
| onchange    | HTML 元素改变(离开光标触发)        |
| onclick     | 用户点击 HTML 元素                 |
| onmouseover | 光标移动到HTML元素                 |
| onmouseout  | 光标离开HTML元素                   |
| onkeydown   | 用户按下键盘按键                   |
| onload      | 浏览器已完成页面的加载             |
| onblur      | 元素失去焦点                       |
| onfocus     | 元素获得焦点                       |
| ondblclick  | 当用户双击某个对象时调用的事件句柄 |
| onsubmit    | 确认按钮被点击                     |
| onselect    | 文本被选中                         |



#### 五、字符串

##### 5.1 字符串概念

> String 对象用于处理文本（字符串）



##### 5.2 创建String对象的语法

> 参数 *s* 是要存储在 String 对象中或转换成原始字符串的值。

```javascript
//两者相同
new String(s);
String(s);
```

> 当 String() 和运算符 new 一起作为构造函数使用时，它返回一个新创建的 String 对象，存放的是字符串 *s* 或 *s* 的字符串表示。
>
> 当不用 new 运算符调用 String() 时，它只把 *s* 转换成原始的字符串，并返回转换后的值。



##### 5.3 String对象属性

| 属性   | 描述         |
| :----- | :----------- |
| length | 字符串的长度 |



##### 5.4 String对象方法

> **注意：** 在JavaScript中，打印数组array默认调用valueOf()方法，返回结果为数组中所有元素的值。打印数组array[0]则打印数组中第一个元素的值。与Java不同，Java打印数组array时，打印的结果为数组的地址！

| 方法                | 描述                                                 |
| :------------------ | :--------------------------------------------------- |
| charAt()            | 返回在指定位置的字符。                               |
| concat()            | 连接字符串。                                         |
| indexOf()           | 检索字符串。                                         |
| lastIndexOf()       | 从后向前搜索字符串。                                 |
| match()             | 找到一个或多个正则表达式的匹配。                     |
| replace()           | 替换与正则表达式匹配的子串。                         |
| search()            | 检索与正则表达式相匹配的值。                         |
| slice()             | 提取字符串的片断，并在新的字符串中返回被提取的部分。 |
| split()             | 把字符串分割为字符串数组。                           |
| substring()         | 提取字符串中两个指定的索引号之间的字符。             |
| toLocaleUpperCase() | 把字符串转换为大写。                                 |
| toLowerCase()       | 把字符串转换为小写。                                 |
| toUpperCase()       | 把字符串转换为大写。                                 |
| toString()          | 返回字符串。                                         |
| valueOf()           | 返回某个字符串对象的原始值。                         |


