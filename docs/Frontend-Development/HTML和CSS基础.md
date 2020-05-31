* [HTML与CSS层叠样式表](#html%E4%B8%8Ecss%E5%B1%82%E5%8F%A0%E6%A0%B7%E5%BC%8F%E8%A1%A8)
    * [一、HTML简介](#%E4%B8%80html%E7%AE%80%E4%BB%8B)
      * [1\.1 HTML概述](#11-html%E6%A6%82%E8%BF%B0)
      * [1\.2 HTML特点](#12-html%E7%89%B9%E7%82%B9)
      * [1\.3 HTML的发展](#13-html%E7%9A%84%E5%8F%91%E5%B1%95)
      * [1\.4 HTML基本结构](#14-html%E5%9F%BA%E6%9C%AC%E7%BB%93%E6%9E%84)
    * [二、HTML基本标签](#%E4%BA%8Chtml%E5%9F%BA%E6%9C%AC%E6%A0%87%E7%AD%BE)
      * [2\.1 结构标签](#21-%E7%BB%93%E6%9E%84%E6%A0%87%E7%AD%BE)
      * [2\.2 排版标签](#22-%E6%8E%92%E7%89%88%E6%A0%87%E7%AD%BE)
      * [2\.3 标题标签](#23-%E6%A0%87%E9%A2%98%E6%A0%87%E7%AD%BE)
      * [2\.4 容器标签](#24-%E5%AE%B9%E5%99%A8%E6%A0%87%E7%AD%BE)
      * [2\.5 列表标签](#25-%E5%88%97%E8%A1%A8%E6%A0%87%E7%AD%BE)
        * [2\.5\.1 无序列表](#251-%E6%97%A0%E5%BA%8F%E5%88%97%E8%A1%A8)
        * [2\.5\.2 有序列表](#252-%E6%9C%89%E5%BA%8F%E5%88%97%E8%A1%A8)
        * [2\.5\.3 定义列表](#253-%E5%AE%9A%E4%B9%89%E5%88%97%E8%A1%A8)
        * [2\.5\.4 列表嵌套](#254-%E5%88%97%E8%A1%A8%E5%B5%8C%E5%A5%97)
      * [2\.6 图片标签](#26-%E5%9B%BE%E7%89%87%E6%A0%87%E7%AD%BE)
      * [2\.7 链接标签](#27-%E9%93%BE%E6%8E%A5%E6%A0%87%E7%AD%BE)
      * [2\.8 表格标签](#28-%E8%A1%A8%E6%A0%BC%E6%A0%87%E7%AD%BE)
        * [2\.8\.1 普通表格](#281-%E6%99%AE%E9%80%9A%E8%A1%A8%E6%A0%BC)
        * [2\.8\.2 表格的表头](#282-%E8%A1%A8%E6%A0%BC%E7%9A%84%E8%A1%A8%E5%A4%B4)
        * [2\.8\.3 表格的列合并](#283-%E8%A1%A8%E6%A0%BC%E7%9A%84%E5%88%97%E5%90%88%E5%B9%B6)
        * [2\.8\.4 表格的行合并](#284-%E8%A1%A8%E6%A0%BC%E7%9A%84%E8%A1%8C%E5%90%88%E5%B9%B6)
      * [2\.9 文本格式化标签](#29-%E6%96%87%E6%9C%AC%E6%A0%BC%E5%BC%8F%E5%8C%96%E6%A0%87%E7%AD%BE)
      * [3\.0 表单标签](#30-%E8%A1%A8%E5%8D%95%E6%A0%87%E7%AD%BE)
        * [3\.0\.1 输入标签](#301-%E8%BE%93%E5%85%A5%E6%A0%87%E7%AD%BE)
          * [3\.0\.0\.1 文本域（text）](#3001-%E6%96%87%E6%9C%AC%E5%9F%9Ftext)
          * [3\.0\.0\.2 单选按钮（radio）](#3002-%E5%8D%95%E9%80%89%E6%8C%89%E9%92%AEradio)
          * [3\.0\.0\.3 复选框（Checkboxes）](#3003-%E5%A4%8D%E9%80%89%E6%A1%86checkboxes)
          * [3\.0\.0\.4 提交按钮（submit）](#3004-%E6%8F%90%E4%BA%A4%E6%8C%89%E9%92%AEsubmit)
          * [3\.0\.0\.5 重置按钮（reset）](#3005-%E9%87%8D%E7%BD%AE%E6%8C%89%E9%92%AEreset)
          * [3\.0\.0\.6 密码输入（password）](#3006-%E5%AF%86%E7%A0%81%E8%BE%93%E5%85%A5password)
        * [3\.0\.2 选择列表标签](#302-%E9%80%89%E6%8B%A9%E5%88%97%E8%A1%A8%E6%A0%87%E7%AD%BE)
        * [3\.0\.3 文本域标签](#303-%E6%96%87%E6%9C%AC%E5%9F%9F%E6%A0%87%E7%AD%BE)
        * [3\.0\.4 下拉列表标签](#304-%E4%B8%8B%E6%8B%89%E5%88%97%E8%A1%A8%E6%A0%87%E7%AD%BE)
        * [3\.0\.5 按钮标签](#305-%E6%8C%89%E9%92%AE%E6%A0%87%E7%AD%BE)
        * [3\.0\.6 表单案例](#306-%E8%A1%A8%E5%8D%95%E6%A1%88%E4%BE%8B)
        * [3\.0\.7 表单提交（浏览器地址）](#307-%E8%A1%A8%E5%8D%95%E6%8F%90%E4%BA%A4%E6%B5%8F%E8%A7%88%E5%99%A8%E5%9C%B0%E5%9D%80)
        * [3\.0\.8 表单标签小结](#308-%E8%A1%A8%E5%8D%95%E6%A0%87%E7%AD%BE%E5%B0%8F%E7%BB%93)
    * [三、CSS（层叠样式表）](#%E4%B8%89css%E5%B1%82%E5%8F%A0%E6%A0%B7%E5%BC%8F%E8%A1%A8)
      * [3\.1 HTML标签存在的问题](#31-html%E6%A0%87%E7%AD%BE%E5%AD%98%E5%9C%A8%E7%9A%84%E9%97%AE%E9%A2%98)
      * [3\.2 CSS简介](#32-css%E7%AE%80%E4%BB%8B)
        * [3\.2\.1 CSS优点](#321-css%E4%BC%98%E7%82%B9)
      * [3\.2 CSS的使用（与HTML的结合方式）](#32-css%E7%9A%84%E4%BD%BF%E7%94%A8%E4%B8%8Ehtml%E7%9A%84%E7%BB%93%E5%90%88%E6%96%B9%E5%BC%8F)
        * [3\.2\.1 CSS的书写规范](#321-css%E7%9A%84%E4%B9%A6%E5%86%99%E8%A7%84%E8%8C%83)
        * [3\.2\.2 CSS和HTML结合之內联结合](#322-css%E5%92%8Chtml%E7%BB%93%E5%90%88%E4%B9%8B%E5%85%A7%E8%81%94%E7%BB%93%E5%90%88)
        * [3\.2\.3 CSS和HTML结合之内部结合](#323-css%E5%92%8Chtml%E7%BB%93%E5%90%88%E4%B9%8B%E5%86%85%E9%83%A8%E7%BB%93%E5%90%88)
        * [3\.2\.4 CSS和HTML结合之外部结合](#324-css%E5%92%8Chtml%E7%BB%93%E5%90%88%E4%B9%8B%E5%A4%96%E9%83%A8%E7%BB%93%E5%90%88)
        * [3\.2\.5 CSS与HTML结合方式小结](#325-css%E4%B8%8Ehtml%E7%BB%93%E5%90%88%E6%96%B9%E5%BC%8F%E5%B0%8F%E7%BB%93)
      * [3\.3 CSS路径问题](#33-css%E8%B7%AF%E5%BE%84%E9%97%AE%E9%A2%98)
    * [四、CSS选择器](#%E5%9B%9Bcss%E9%80%89%E6%8B%A9%E5%99%A8)
      * [4\.1 CSS选择器简介与分类](#41-css%E9%80%89%E6%8B%A9%E5%99%A8%E7%AE%80%E4%BB%8B%E4%B8%8E%E5%88%86%E7%B1%BB)
      * [4\.2 CSS选择器的书写规范](#42-css%E9%80%89%E6%8B%A9%E5%99%A8%E7%9A%84%E4%B9%A6%E5%86%99%E8%A7%84%E8%8C%83)
      * [4\.3 类选择器](#43-%E7%B1%BB%E9%80%89%E6%8B%A9%E5%99%A8)
      * [4\.4 ID选择器](#44-id%E9%80%89%E6%8B%A9%E5%99%A8)
      * [4\.5 标签选择器](#45-%E6%A0%87%E7%AD%BE%E9%80%89%E6%8B%A9%E5%99%A8)
      * [4\.6 选择器的分组](#46-%E9%80%89%E6%8B%A9%E5%99%A8%E7%9A%84%E5%88%86%E7%BB%84)
      * [4\.7 衍生选择器（派生、上下文）](#47-%E8%A1%8D%E7%94%9F%E9%80%89%E6%8B%A9%E5%99%A8%E6%B4%BE%E7%94%9F%E4%B8%8A%E4%B8%8B%E6%96%87)
      * [4\.8 选择器的优先级](#48-%E9%80%89%E6%8B%A9%E5%99%A8%E7%9A%84%E4%BC%98%E5%85%88%E7%BA%A7)
      * [4\.9 CSS伪类选择器](#49-css%E4%BC%AA%E7%B1%BB%E9%80%89%E6%8B%A9%E5%99%A8)
    * [五、CSS属性设置](#%E4%BA%94css%E5%B1%9E%E6%80%A7%E8%AE%BE%E7%BD%AE)
      * [5\.1 CSS字体属性](#51-css%E5%AD%97%E4%BD%93%E5%B1%9E%E6%80%A7)
        * [5\.1\.1 常用字体属性](#511-%E5%B8%B8%E7%94%A8%E5%AD%97%E4%BD%93%E5%B1%9E%E6%80%A7)
      * [5\.2 CSS文本属性](#52-css%E6%96%87%E6%9C%AC%E5%B1%9E%E6%80%A7)
        * [5\.2\.1 常用文本属性](#521-%E5%B8%B8%E7%94%A8%E6%96%87%E6%9C%AC%E5%B1%9E%E6%80%A7)
        * [5\.2\.2 文本属性之字符间距和单词间距的区别](#522-%E6%96%87%E6%9C%AC%E5%B1%9E%E6%80%A7%E4%B9%8B%E5%AD%97%E7%AC%A6%E9%97%B4%E8%B7%9D%E5%92%8C%E5%8D%95%E8%AF%8D%E9%97%B4%E8%B7%9D%E7%9A%84%E5%8C%BA%E5%88%AB)
        * [5\.2\.3 字体属性和文本属性小案例](#523-%E5%AD%97%E4%BD%93%E5%B1%9E%E6%80%A7%E5%92%8C%E6%96%87%E6%9C%AC%E5%B1%9E%E6%80%A7%E5%B0%8F%E6%A1%88%E4%BE%8B)
      * [5\.3 CSS背景属性](#53-css%E8%83%8C%E6%99%AF%E5%B1%9E%E6%80%A7)
        * [5\.3\.1 常用背景属性](#531-%E5%B8%B8%E7%94%A8%E8%83%8C%E6%99%AF%E5%B1%9E%E6%80%A7)
      * [5\.4 CSS尺寸属性](#54-css%E5%B0%BA%E5%AF%B8%E5%B1%9E%E6%80%A7)
        * [5\.4\.1 常用尺寸属性](#541-%E5%B8%B8%E7%94%A8%E5%B0%BA%E5%AF%B8%E5%B1%9E%E6%80%A7)
      * [5\.5 CSS列表属性](#55-css%E5%88%97%E8%A1%A8%E5%B1%9E%E6%80%A7)
        * [5\.5\.1 常用列表属性](#551-%E5%B8%B8%E7%94%A8%E5%88%97%E8%A1%A8%E5%B1%9E%E6%80%A7)
      * [5\.6 CSS边框属性](#56-css%E8%BE%B9%E6%A1%86%E5%B1%9E%E6%80%A7)
        * [5\.6\.1 常用边框属性](#561-%E5%B8%B8%E7%94%A8%E8%BE%B9%E6%A1%86%E5%B1%9E%E6%80%A7)
    * [六、CSS盒子模型](#%E5%85%ADcss%E7%9B%92%E5%AD%90%E6%A8%A1%E5%9E%8B)
      * [6\.1 盒子模型](#61-%E7%9B%92%E5%AD%90%E6%A8%A1%E5%9E%8B)
        * [6\.1\.1 盒子模型的基本使用](#611-%E7%9B%92%E5%AD%90%E6%A8%A1%E5%9E%8B%E7%9A%84%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8)
      * [6\.2 CSS盒子定位介绍](#62-css%E7%9B%92%E5%AD%90%E5%AE%9A%E4%BD%8D%E4%BB%8B%E7%BB%8D)
        * [6\.2\.1 CSS定位和浮动](#621-css%E5%AE%9A%E4%BD%8D%E5%92%8C%E6%B5%AE%E5%8A%A8)
        * [6\.2\.2 常用的盒子定位属性](#622-%E5%B8%B8%E7%94%A8%E7%9A%84%E7%9B%92%E5%AD%90%E5%AE%9A%E4%BD%8D%E5%B1%9E%E6%80%A7)
        * [6\.2\.3 CSS position（定位） 值类型](#623-css-position%E5%AE%9A%E4%BD%8D-%E5%80%BC%E7%B1%BB%E5%9E%8B)
      * [6\.3 CSS固定定位](#63-css%E5%9B%BA%E5%AE%9A%E5%AE%9A%E4%BD%8D)
      * [6\.4 CSS相对定位](#64-css%E7%9B%B8%E5%AF%B9%E5%AE%9A%E4%BD%8D)
      * [6\.5 CSS绝对定位](#65-css%E7%BB%9D%E5%AF%B9%E5%AE%9A%E4%BD%8D)
      * [6\.6 CSS浮动](#66-css%E6%B5%AE%E5%8A%A8)
        * [6\.6\.1 浮动的多种方式与问题](#661-%E6%B5%AE%E5%8A%A8%E7%9A%84%E5%A4%9A%E7%A7%8D%E6%96%B9%E5%BC%8F%E4%B8%8E%E9%97%AE%E9%A2%98)
        * [6\.6\.2 浮动行框和清理](#662-%E6%B5%AE%E5%8A%A8%E8%A1%8C%E6%A1%86%E5%92%8C%E6%B8%85%E7%90%86)
      * [6\.7 CSS clear 属性](#67-css-clear-%E5%B1%9E%E6%80%A7)
        * [6\.7\.1 常用clears值](#671-%E5%B8%B8%E7%94%A8clears%E5%80%BC)
    * [七、CSS块级元素和行内元素](#%E4%B8%83css%E5%9D%97%E7%BA%A7%E5%85%83%E7%B4%A0%E5%92%8C%E8%A1%8C%E5%86%85%E5%85%83%E7%B4%A0)
      * [7\.1 CSS块级元素和行内元素介绍](#71-css%E5%9D%97%E7%BA%A7%E5%85%83%E7%B4%A0%E5%92%8C%E8%A1%8C%E5%86%85%E5%85%83%E7%B4%A0%E4%BB%8B%E7%BB%8D)
    * [八、CSS伸缩布局flex](#%E5%85%ABcss%E4%BC%B8%E7%BC%A9%E5%B8%83%E5%B1%80flex)
      * [8\.1 CSS伸缩布局的介绍（flex）](#81-css%E4%BC%B8%E7%BC%A9%E5%B8%83%E5%B1%80%E7%9A%84%E4%BB%8B%E7%BB%8Dflex)
      * [8\.2 伸缩布局入门案例](#82-%E4%BC%B8%E7%BC%A9%E5%B8%83%E5%B1%80%E5%85%A5%E9%97%A8%E6%A1%88%E4%BE%8B)
        * [8\.2\.1 伸缩布局入门案例一](#821-%E4%BC%B8%E7%BC%A9%E5%B8%83%E5%B1%80%E5%85%A5%E9%97%A8%E6%A1%88%E4%BE%8B%E4%B8%80)
        * [8\.2\.2 伸缩布局入门案例二](#822-%E4%BC%B8%E7%BC%A9%E5%B8%83%E5%B1%80%E5%85%A5%E9%97%A8%E6%A1%88%E4%BE%8B%E4%BA%8C)

# HTML与CSS层叠样式表

------

### 一、HTML简介

------

#### 1.1 HTML概述

> HTML全称：Hyper Text Markup Language(超文本标记语言)
>
> ​	HTML是一门用户创建网页文档的标记语言，网页本身是一种文本文件，在文本文件中添加标记符。
>
> ​	浏览器来解析HTML标记的内容（文字的处理，画面排版安排，图片如何显示、音频、视频等等）
>
> ​	HTML是用来创建网页的标记语言



#### 1.2 HTML特点

> 1、简易性：超文本标记语言的版本升级采用的超集方式。更加方便灵活
>
> 2、可扩展性：超文本标记语言采取的子类元素的方式，为系统扩展带来保证
>
> 3、平台无关性：
>
> 4、通用性：HTML是网络的通用语言，一种简单、通用的标记语言。



#### 1.3 HTML的发展

> 超文本标记语言(第一版)------1993年6月作为互联网工程小组(IETF)工作草案发布(并非标准)
>
> HTML2.0 --1995年11月
>
> HTML3.2 --1997年1月14日，W3C标准
>
> HTML4.0 --1997年12月18日  W3C标准
>
> HTML4.01 --1999年12月24日 W3C的推荐标准
>
> HTML5 ---2014年10月29日，W3C推荐标准



#### 1.4 HTML基本结构

```html
<!-- 文档声明：告诉浏览器使用HTML5版本解析 -->
<!DOCTYPE html>
<html>
    <!--网页的头部 -->
    <head>
        <!--页面的字符集编码 -->
        <meta charset="utf-8" />
        <!-- 页面的标题 -->
        <title>我的页面</title>
    </head>
    <!-- 网页的主题，显示的部分-->
    <body>
        展示的内容
    </body>
</html>
```

> 1、HTML页面包含头部head和主体body
>
> 2、HTML标签通常是成对出现的，有开始标签，有结束标签，称为对标签。没有结束标签的为 空标签
>
> 3、HTML标签通常都有属性，格式：属性名 = "属性值" 属性名 = "属性值"。多个属性用空格间隔
>
> 4、HTML标签不区分大小写，建议小写
>
> 5、HTML文件后缀名为html或htm



### 二、HTML基本标签

------

#### 2.1 结构标签

```html
<html></html>:根标签
<head> ：头标签
    <title></title>页面的标题
</head>
<body>：主体标签：显示网页内容
    
</body>
```

> 属性：
>
> color:文本的颜色  
>
> bgColor:背景色
>
> background：背景图片
>
> 颜色的表示方式：
>
> 第一种：颜色名称  red  blue green yellow orange
>
> 第二种方式：RGB模式    #000000    #ffffff  #325687



#### 2.2 排版标签

> 1、注释标签：< !-- 注释-- >
>
> 2、换行标签：< br/ >
>
> 3、段落标签：\<p>文本文字\</p>
>
> ​		特点：段落与段落之间有行高（行间距）自带换行
>
> ​		属性：文本对齐方式 align （left、center 、right）
>
> 4、水平线标签：\<hr/>
>
> ​		属性：
>
> ​				width：水平线的长度(两种：像素表示。第二种：百分比显示)
>
> ​				size：水平线的粗细（避免过粗、太丑、一般给个位数  比如 6px）
>
> ​				color：水平线的颜色
>
> ​				align：水平线的对齐方式(left、center、right)



#### 2.3 标题标签

```html
<h1>-<h6>
数字越小，标题文字越大！默认加粗、默认字号、默认占据一行
```



#### 2.4 容器标签

```html
<div></div> ： 块级标签，独占一行，自带换行
<span></span> ： 行级标签，所有内容都在同一行
	作用：<div>主要是结合css做页面分块 布局
		<span>：进行友好提示信息的显示
```



#### 2.5 列表标签

##### 2.5.1 无序列表

> ul(unorder list)

```html
<!--ul是无序列表，默认标识为实心圆 disc
			circle 空心圆
			square 黑色方块
		-->
		<ul type="square">
			<li>兰博基尼</li>
			<li>法拉利</li>
			<li>宾利</li>
			<li>迈凯伦</li>
		</ul>
```



##### 2.5.2 有序列表

> ol(order list)

```html
<!--ol是有序列表，默认标识为阿拉伯数字 1
			a  A 字母字典顺序
			i  I 罗马数字
		-->
		<ol type="I">
			<li>铁胆火车侠</li>
			<li>光明勇士</li>
			<li>米老鼠和唐老鸭</li>
			<li>小头儿子和隔壁老王</li>
		</ol>
```



##### 2.5.3 定义列表

> dl(defination list)定义列表
>
> dt(defination title)定义标题
>
> dd(defination description) 定义描述



```html
		<dl>
			<dt>秦牛正威</dt>
			<dd>就当是一场梦，醒来还是很感动</dd>
			<dt>???</dt>
			<dd>蛋黄的长裙，蓬松的头发。</dd>
		</dl>
```



##### 2.5.4 列表嵌套

```html
	<ul>
			<li>最新娱乐新闻</li>
			<li>
				<dl>
					<dt>青春有你2</dt>
					<dd>非常庞大的导师阵容，Ella，Jony J，蔡徐坤，Lisa</dd>
				</dl>
			</li>
			<li>
				猎心者
				<ol>
					<li>戴猛。。。</li>
					<li>廖朵朵。。。</li>
					<li>花笙。。。</li>
				</ol>
			</li>
		</ul>		
```



#### 2.6 图片标签

```html
<img /> 独立标签
属性：
	src 图片地址
	width 图片的宽度
	height 图片的高度
	border 边框
	alt 图片的文字说明 当图片未能正确加载时，才显示
	title 鼠标悬停时，显示的文字
```

```html
<img src="img/微信图片_20200306173413.jpg"
			width="500px"
			height="900px"
			 />
		<img src="img/timg.jpg"
			width="500px"
			height="500px"
			border="5"
			alt="给你点赞的小老虎"
			title="给你点赞的大老虎"
			 />
```



#### 2.7 链接标签

> 超链接可以是文本，也可以是图片，可以点击链接标签，进入新的文档，或者是当前文档中的某个部分

```html
<a>文本或图片</a>、
属性：
			href="跳转的地址"跳转外网需要添加协议
			target:_self(当前文档)
					_blank(新页面,会一直打开新的)
					_search 之前打开的页面存在，则不打开新的页面，直接复用
			name 充当锚点（顶部、底部）
			需要为标签提供name属性，进行赋值
			需要点击跳转的标签href属性给 #name
```



#### 2.8 表格标签

> 表格由\<table>标签来定义，每个表格均有若干行(由tr标签定义行)，每行由若干个单元格组成(由td标签来定义)。每一个数据单元可以包含文本、图片、列表。。。。。。



##### 2.8.1 普通表格

> table   tr   td

```html
<!--创建表格 table   行  tr   列  td
			table属性：
			默认没有边框体现
			border:边框的宽度
			bordercolor:边框的颜色
			cellspacing:单元格的间距
			cellpadding:单元格与内容的间距
			width:宽度
			height:高度
			align:控制表格的对齐方式 left center right
			td的属性：
			align:控制的单元格内容的对齐方式 left center right
			valign:控制单元格内容的垂直对齐方式 top middle bottom
		-->
		<table border="1" bordercolor="red" cellspacing="10" cellpadding="10"
			width="300px" height="300px" align="center">
			<tr>
				<td align="center">学号</td>
				<td align="center">姓名</td>
				<td align="center">性别</td>
			</tr>
			<tr>
				<td valign="bottom">S1001</td>
				<td valign="middle">张三</td>
				<td valign="top">男</td>
			</tr>
		</table>
```



##### 2.8.2 表格的表头

> th

```html
<!-- th作为表头，默认居中，加粗 -->
<table border="1">
			<tr>
				<th>学号</th>
				<th>姓名</th>
				<th>分数</th>
			</tr>
			<tr>
				<td>S1002</td>
				<td>张三</td>
				<td>100</td>
			</tr>
		</table>
```



##### 2.8.3 表格的列合并

> colspan

```html
<table border="1" bordercolor="red">
			<tr>
				<td align="center" colspan="4">学生信息表</td>
			</tr>
			<tr>
				<td>学号</td>
				<td>姓名</td>
				<td colspan="2">各科成绩</td>
			</tr>
			<tr>
				<td>1</td>
				<td>哆啦A梦</td>
				<td>80</td>
				<td>90</td>
			</tr>
		</table>
```



##### 2.8.4 表格的行合并

> rowspan

```html
<table border="1" bordercolor="blue">
			<tr>
				<td colspan="4" align="center">学生表</td>
			</tr>
			<tr>
				<td>学号</td>
				<td>姓名</td>
				<td>语文成绩</td>
				<td>数学成绩</td>
			</tr>
			<tr>
				<td rowspan="2">1</td>
				<td rowspan="2">光头强</td>
				<td>80</td>
				<td>90</td>
			</tr>
			<tr>
				<td>100</td>
				<td>99</td>
			</tr>
		</table>
```



#### 2.9 文本格式化标签

```html
		<!--粗体文本-->
		<b>今天天气好</b><br />
		<!--大号字-->
		<big>今天天气好</big><br />
		<!--着重文字-->
		<em>今天天气好</em><br />
		<!--斜体字 物理上把字体倾斜-->
		<i>今天天气好</i><br />
		<!--小号字-->
		<small>今天天气好</small><br />
		<!--定义加重语气-->
		<strong>今天天气好</strong><br />
		<!--下标字-->
		CO<sub>2</sub><br />
		<!--上标字-->
		孙悟空三打白骨精<sup>①</sup><br />
		<!--插入字-->
		<ins>今天天气好</ins><br />
		<!--删除字-->
		<del>今天天气好</del>
```



#### 3.0 表单标签



> 概念：表单可以将页面上录入的信息携带到服务器端。它是一个包含表单元素的区域。表单元素是允许用户在表单中（比如：文本域、下拉列表、单选框、复选框等等）输入信息的元素。表单使用表单标签（\<form>）定义。

|   \<form>   | 定义供用户输入的表单            |
| :---------: | :------------------------------ |
|  \<input>   | 定义输入域                      |
| \<textarea> | 定义文本域 (一个多行的输入控件) |
|  \<select>  | 定义一个选择列表                |
|  \<option>  | 定义下拉列表中的选项            |
|  \<button>  | 定义一个按钮                    |



##### 3.0.1 输入标签

> 多数情况下被用到的表单标签是输入标签（\<input>）。输入类型是由类型属性（type）定义的。
>
> name表示控件属性名称，value是控件名称对应的值
>
> 下面举几个常用的type标签，要学会举一反三哦！在其他标签内有的也是可以用的！



###### 3.0.0.1 文本域（text）

```html
<form>
First name: 
<input type="text" name="firstname" />
<br />
Last name: 
<input type="text" name="lastname" />
</form>
```



###### 3.0.0.2 单选按钮（radio）

> 当用户从若干给定的的选择中选取其一时，就会用到单选框。
>
> 注意：只能从中选取其一。

```html
<form>
<input type="radio" name="sex" value="male" /> Male
<br />
<input type="radio" name="sex" value="female" /> Female
</form>
```



###### 3.0.0.3 复选框（Checkboxes）

> 当用户需要从若干给定的选择中选取一个或若干选项时，就会用到复选框。

```html
<form>
<input type="checkbox" name="bike" />
I have a bike
<br />
<input type="checkbox" name="car" />
I have a car
</form>
```



###### 3.0.0.4 提交按钮（submit）

> 当用户需要按钮提交时，就会用到提交按钮

```html
<form>
<input type="submit" value="提交"/>
</form>
```



###### 3.0.0.5 重置按钮（reset）

> 当用户输入信息想要重置成初始未提交样子，就会用到重置按钮

```html
<form>
<input type="reset" value="重置"/>
</form>
```



###### 3.0.0.6 密码输入（password）

> 当输入密码时，会用*代替

```html
<form>
<input type="password" name="password"/>
</form>
```



##### 3.0.2 选择列表标签

> select 元素可创建单选或多选菜单。当提交表单时，浏览器会提交选定的项目，或者收集用逗号分隔的多个选项，将其合成一个单独的参数列表，并且在将 \<select>  表单数据提交给服务器时包括 name 属性。

```html
<select>
  <option value ="volvo">Volvo</option>
  <option value ="saab">Saab</option>
  <option value="opel">Opel</option>
  <option value="audi">Audi</option>
</select>
```



##### 3.0.3 文本域标签

> \<textarea> 标签定义多行的文本输入控件。文本区中可容纳无限数量的文本，其中的文本的默认字体是等宽字体（通常是 Courier）。

```html
<textarea rows="3" cols="20">
这是一个文本域！
</textarea>
```



##### 3.0.4 下拉列表标签

> option 元素定义下拉列表中的一个选项（一个条目）。浏览器将 \<option> 标签中的内容作为 \<select> 标签的菜单或是滚动列表中的一个元素显示。option 元素位于 select 元素内部。

```html
<select name="city">
<option value="Wuhan" selected="selected">河北</option>
<option value="Xiaogan" >北京</option>
</select>
```



##### 3.0.5 按钮标签

> \<button> 标签定义一个按钮。

```html
<button type="button">按钮</button>
```



##### 3.0.6 表单案例

> 做一个表单在页面上正常显示的内容如下：

![1586261064478](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200529124133.png)

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>表单标签</title>
	</head>
	<body>
		<!-- 
			外部必须嵌套一个form标签,只有嵌套这个标签，浏览器上的内容才能够提交到服务器上！！
			
			name 控件属性名称
			value 属性对应的值
			selected 默认选择
			placeholder 默认输入提示内容
			checkbox 复选框
			file 选择添加文件
			
		 -->
		<form>
			账户：
			<!-- 当在账户type中加入value="root"时，他会覆盖placeholder的默认输入提示内容 -->
			<input type="text" name="username" placeholder="请输入账户" />
			<br />
			密码：
			<input type="password" name="password" placeholder="请输入密码" />
			<br />
			地址：
			<select name="city">
				<option value="Hebei" selected="selected">河北</option>
				<option value="Beijing">北京</option>
			</select>
			<br />
			爱好：
			<input type="checkbox" name="hobbys" value="basketball" />篮球
			<input type="checkbox" name="hobbys" value="pingpang" />乒乓球
			<input type="checkbox" name="hobbys" value="badminton" />羽毛球
			<br />
			照片：
			<input type="file" name="picture" />
			<br />
			<!-- 
				<input type="submit" /> 将表单的内容提交到服务器
				<input type="submit" value="注册" /> 
				<input type="reset" value="重置" />
				注意：input提交按钮这里就不用了，下面用button按钮来实现
			 -->
			 <button type="submit">注册</button>
			 <button type="reset">重置</button>
		</form>
	</body>
</html>
```



##### 3.0.7 表单提交（浏览器地址）

> 表单输入内容后提交会在浏览器的地址栏上拼上你在表单输入内容字符串
>
> **注意：** 你有没有发现地址栏上字符串密码也显示了出来呢，所以该提交是不安全的，需要加工处理。这里只是简单的提起，后面会重点讲到浏览器的get和post提交方式

![1586264982499](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200529124134.png)



##### 3.0.8 表单标签小结

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>表单标签的总结</title>
	</head>
	<body>
		
		<!--
			账户:<input> type="text" value:默认值 placeholder:提示
			密码:<input> type="password" value:默认值  placeholder:提示
			性别:<input> type="radio" checked:默认选中  value:默认值
			地址：<select>/<option>  selected:默认选中
			爱好：<input> checkbox
			介绍: <textarea></textarea>
			提交/重置 :<input> type="submit" , <input> type="reset"
		-->
		
	</body>
</html>

```



### 三、CSS（层叠样式表）



#### 3.1 HTML标签存在的问题

> a标签中是否自带属性可以去掉下划线??html中的a标签是没有这个功能吧！这么说即使有也会产生一系列其他问题的！比如：如果不使用CSS代码，所有的装饰代码都需要写到html标签上，维护不方便！而我们编程思想的初衷即是将不同功能的代码要做分离，高内聚低耦合！！！而现在面临着脱轨问题！这时候CSS出现了，拯救了HTML！看看CSS如何解决HTML遗留下来的问题吧！



#### 3.2 CSS简介

> - CSS 指层叠样式表 (*C*ascading *S*tyle *S*heets)   
>
> - 样式定义*如何显示* HTML 元素  
> - 样式通常存储在*样式表*中  
> - 把样式添加到 HTML 4.0 中，是为了*解决内容与表现分离的问题*  
> - *外部样式表*可以极大提高工作效率  
> - 外部样式表通常存储在 *CSS 文件*中  
> - 多个样式定义可*层叠*为一 



##### 3.2.1 CSS优点

> - 通过CSS可以定义HTML元素如何显示 ，解决了HTML在标签样式上无法满足的需求（HTML相当于毛坯房,很多效果达不到，CSS相当于是在毛坯基础上做精装修）
> - CSS极大的提高了程序员的工作效率
> - 使用CSS样式提高了代码的清晰度（类似Java中的分包），让我们将html代码与样式代码分离 ，便于后期维护



#### 3.2 CSS的使用（与HTML的结合方式）

> 关于CSS层叠样式表的使用，就是以HTML结合的方式去修饰HTML样式
>
> - 与HTML的内联结合
> - 与HTML的内部结合
> - 与HTML的外部结合



##### 3.2.1 CSS的书写规范

> 格式：选择器 {属性:属性值;属性:属性值}
> 选择器：确定当前css修饰的是哪一个元素



##### 3.2.2 CSS和HTML结合之內联结合

> 实现

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>CSS和html结合之内联结合</title>
	</head>
	<body>
		<!--
			使用font标签来改变文本的字体大小和字体颜色
			font标签设置字体大小，最大只能设定为7.
			css内联代码:所有的符号必须是在英文半角模式下！！！
			在标签中使用style属性,格式如下：
			style="属性名1: 属性值1;属性名2: 属性值2"
			颜色取值：颜色英文单词/颜色16进制
			
		-->
		<div>
			<font style="font-size: 600px; color: #008000;">这是一个div，使用的内联结合方式实现</font>
		</div>
	</body>
</html>

```

> - 优缺点
> - 优点：简单方便 
> - 缺点：复用性差
> - 注意：CSS内联代码中所有的符号必须是在英文半角模式下



##### 3.2.3 CSS和HTML结合之内部结合

> 实现

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>CSS和HTML结合之内部结合</title>
		<!--
			内联结合：
				缺点：不能复用!
				优点：简单！
				对少数的特定的元素进行单独设置！
			内部结合
				1，需要在head标签中，使用style标签
				2，使用选择器选中元素(后面详细讲)
				3，编写css代码
				格式：
					选择器 {
						属性名1:属性值1;
						属性名2:属性值2;
					}
		-->
		<style>
			font{
				font-size: 200px;
				color: darkgreen;
			}
		</style>
	</head>
	<body>
		<div>
			<!--字体大小为:200px,字体颜色:绿色-->
			<font >这是一个font1</font><br />
			<!--字体大小为:200px,字体颜色:绿色-->
			<font >这是一个font2</font><br />
			<!--字体大小为:200px,字体颜色:红色-->
			<font style="color: red;">这是一个font3</font><br />
		</div>
	</body>
</html>

```

> - 优缺点 
> - 优点：可以对多个标签进行统一样式设置
> - 缺点：只能作用于当前页面 



##### 3.2.4 CSS和HTML结合之外部结合

> 实现
>
> 1. 新建一个css样式文件 
> 2. 使用link标签引入外部样式文件 

```html
<!-- CSS文件 -->
font{
	font-size: 200px;
	color: greenyellow;
}


<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>CSS和html结合之外部结合</title>
		<link rel="stylesheet" href="css/css01.css" />
        <!--
        	外部结合方式：
				1，新建一个css样式文件
				2，编写css代码
				3，在html文件中引入css外部文件 ,使用link标签引入
				优点：复用性高！简单！
		-->
	</head>
	<body>
		<div>
			<!--字体大小为:200px,字体颜色:绿色-->
			<font >这是一个font1</font><br />
			<!--字体大小为:200px,字体颜色:绿色-->
			<font >这是一个font2</font><br />
			<!--字体大小为:200px,字体颜色:红色-->
			<font >这是一个font3</font><br />
		</div>
	</body>
</html>
```

> - 优缺点
> - 优点：复用性高！简单！



##### 3.2.5 CSS与HTML结合方式小结

| CSS与HTML结合方式 |              优点              |               缺点               |
| :---------------: | :----------------------------: | :------------------------------: |
|     内联结合      |            简单方便            |             复用性差             |
|     内部结合      | 可以对多个标签进行统一样式设置 | 只能作用与当前页面，不具有普适性 |
|     外部结合      |   复用性高！简单！具有普适性   |                无                |

```html
<!--
			内联结合：
				缺点：不能复用!
				优点：简单！
				对少数的特定的元素进行单独设置！

			内部结合：
				1，需要在head标签中，使用style标签
				2，使用选择器选中元素(后面详细讲)
				3，编写css代码
				格式：
					选择器 {
						属性名1:属性值1;
						属性名2:属性值2;
					}
				缺点：复用性不高！css代码和html代码分离不彻底！
				优点：简单！

			外部结合方式：
				1，新建一个css样式文件
				2，编写css代码
				3，在html文件中引入css外部文件 ,使用link标签引入
				优点：复用性高！简单！
				
			以上三种结合方式中，推荐用谁？
			三种都有用！
			外部结合方式！！
			html中的相对路径!!!
-->
```



#### 3.3 CSS路径问题



> - 访问路径：
>   * 绝对路径：不带协议的绝对路径/带协议的绝对路径（绝对路径是从盘符开始的路径，是一种简化版的路径，以当前文件，活动窗口目录为根目录，进行向上或者向下）
>   * 相对路径：相对于index.html资源去访问css01.css资源（相对路径是从当前路径开始的路径，就是真实的路径，是计算机中完整路径，必须准确，否则不能找到，起点是系统的根目录，也就是各个盘符 ）
> - CSS中访问路径：比如：http://127.0.0.1:8020/index.html
>   - / 代表文件所在的根目录 
>   	 ./ 代表文件所在当前目录（./ 可以省略	，即：css/css01.css）；意为在index.html的同一个目录下访问css文件夹下的css01.css
>   - ../ 代表上一级目录
>   - ../../ 代表文件所在的父级目录的父级目录 

![1586268409215](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200529124135.png)



### 四、CSS选择器



#### 4.1 CSS选择器简介与分类

> 要使用CSS对HTML页面中的元素实现一对一，一对多或者多对一的控制，这就需要用到CSS选择器 。HTML页面中的元素就是通过CSS选择器进行控制的。 
>
> **选择器分类：** id选择器、类选择器、元素选择器（标签）、选择器的分组、衍生选择器（派生）



#### 4.2 CSS选择器的书写规范

> 不管是css和html的内联、内部结合还是外部结合，而选择器是让开发者能够选定元素进行样式的规划

```html
<!--
				选择器{
					属性名:属性值;
				}
			
				id选择器：引用的是id属性值
					#id属性值{
						属性名:属性值;
					}
-->
```



#### 4.3 类选择器

> 类选择器：使用”.”来描述，引用的的是元素上的class属性值 ，用于处理多个元素有相同样式效果的

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>类选择器</title>
		<!--
			类选择器:引用的是class属性值
			格式：
				.class属性值{
					属性名:属性值;
				}
			处理多个元素有相同样式效果的！！！
		-->
		<style>
			font{
				font-size: 200px;
			}
			.one{
				color: greenyellow;
			}
			.two{
				color: red;
			}
			.three{
				color: pink;
			}
		</style>
	</head>
	<body>
		<!--字体颜色：绿-->
		<font class="one">this is font one</font><br />
		<font class="one">this is font two</font><br />
		<!--字体颜色：红-->
		<font class="two">this is font three</font><br />
		<font class="two">this is font one</font><br />
		<!--字体颜色：粉-->
		<font class="three">this is font three</font><br />
		<font class="three">this is font two</font><br />
	</body>
</html>
```



#### 4.4 ID选择器

> id选择器：它使用#引入，引用的是元素的id属性值

```html
<head>
	<style type="text/css">
		#div1 {
			font‐size: 20px;
			color: red;
		}
		#div2 {
			font‐size: 10px;
			color: blue;
		}
	</style>
</head>
<body>
	<div id="div1">这是一个div</div>
	<div id="div2">这是一个div</div>
</body>
```



#### 4.5 标签选择器

> 标签选择器：对页面上的标签进行统一的设置，引用的就是标签的名称

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>标签选择器</title>
		<!--
			标签选择器/元素选择器
			格式：
				标签名{
					属性名:属性值;
				}
			
			将font标签中的文本颜色修改为红色
			将span标签中的文本颜色修改为蓝色
			将div标签中的文本颜色修改为绿色
			所有的文本大小都为300px
		-->
		<style>
			body{
				font-size: 200px;
			}
			font{
				color: red;
			}
			span{
				color: blue;
			}
			div{
				color: green;
			}
		</style>
	</head>
	<body>
		<font>this is a font</font><br />
		<span>this is a span</span><br />
		<font>this is a font</font><br />
		<div>this is a div</div><br />
		<span>this is a span</span><br />
		<font>this is a font</font><br />
		<div>this is a div</div><br />
	</body>
</html>
```



#### 4.6 选择器的分组

> 选择器的分组：多个选择器使用同一段css,那么就可以使用分组。选择器之间使用逗号分开

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>分组选择器</title>
		<!--
			选择器分组:如果多个选择器中的css代码相同，那么就可以将这多个选择器划为一组。
			格式：
				id选择器,class选择,元素选择器{
					属性名:属性值;
				}
			font/span/div中的文本内容字体大小为200px,字体颜色为绿色
		-->
		<style>
			#f1,.s1,div{
				font-size: 200px;
				color: green;
			}
		</style>
	</head>
	<body>
		<font id="f1">this is a font</font><br>
		<span class="s1">this is a span</span><br>
		<div>this is a div</div><br>
	</body>
</html>
```



#### 4.7 衍生选择器（派生、上下文）

> 衍生选择器：通过依据元素在其位置的上下文关系来定义，可以使标记更加简洁。也称为上下文选择器

> 书写规范：父标签名(父id,父类名) 子标签名(子id,子类名){ 样式代码; } 

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>衍生选择器</title>
		<!--
			衍生选择器/上下文选择器:依据元素所在的位置进行元素的选择
			格式：
				父选择器 子选择器{
					属性名:属性值;
				}
				父选择器：可以是id选择器、class选择器、元素选择器
				子选择器：可以是id选择器、class选择器、元素选择器
			需求：设置span中的font中内容样式。不准用id选择器、内联、class选择器
			先找到span,再找到font
		-->
		<style>
			span font{
				font-size: 200px;
				color: blue;
			}
		</style>
	</head>
	<body>
		<span>
			<font>这是一个font</font>
		</span>
		<div>
			<font>这也是一个font</font>
		</div>
	</body>
</html>
```



#### 4.8 选择器的优先级

> 内联结合方式 > ID选择器 > 类选择器 > 元素选择器 
>
> **规律：** 作用范围越小，优先级越大

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>选择器的优先级</title>
		<style>
			/*
			 优先级:内联样式 > id选择器 > 类选择器 > 标签选择器
			 规律：作用范围越小，优先级越大！！！
			 */
			
			/*标签选择器*/
			font{
				font-size: 50px;
				color: yellow;
			}
			/*类选择器*/
			.clazz{
				font-size: 150px;
				color: orange;
			}
			
			/*id选择器*/
			#id1{
				font-size: 250px;
				color: orangered;
			}
		</style>
	</head>
	<body>
		<!--内联样式-->
		<font id="id1" class="clazz" style="font-size: 350px; color: red;">
			这是一个font
		</font>
	</body>
</html>
```



#### 4.9 CSS伪类选择器

> 实现

```html
			a:link {color: #FF0000}	/* 未访问的链接 */
			a:visited {color: #00FF00}	/* 已访问的链接 */
			a:hover {color: #FF00FF}	/* 鼠标移动到链接上 */
			a:active {color: #0000FF}	/* 选定的链接 */
```

注意：a:hover 必须被置于 a:link 和 a:visited 之后；a:active 必须被置于 a:hover 之后 

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>CSS伪类</title>
		<!--
			a:link {color: #FF0000}	/* 未访问的链接 */
			a:visited {color: #00FF00}	/* 已访问的链接 */
			a:hover {color: #FF00FF}	/* 鼠标移动到链接上 */
			a:active {color: #0000FF}	/* 选定的链接 */
			注意事项：	a:hover 必须被置于 a:link 和 a:visited 之后
						a:active 必须被置于 a:hover 之后
		-->
		<style>
			a:link {
				/* 未访问的链接 */
				color: cornflowerblue;
			}
			
			a:visited {
				/* 已访问的链接 */
				color: red;
			}
			
			a:hover {
				/* 鼠标移动到链接上 */
				color: orange;
			}
			a:active {
				/* 选定的链接 */
				color: green;
			}
			
			font:hover{
				color: green;
				/* 鼠标移动到字体上会变大至100px */
				font-size: 100px;
			}
			
			button{
				background-color: orange;
			}
			
			button:hover{
				background-color: orangered;
			}
		</style>
	</head>
	<body>
		<a href="index.html">this is a super</a><br />
		<font>this is a font element</font><br />
		<button>按钮</button><br />
	</body>
</html>
```



### 五、CSS属性设置



#### 5.1 CSS字体属性

> CSS 字体属性允许您设置字体系列 (font-family) 和字体加粗 (font-weight)，您还可以设置 字体的大小、字体风格（如斜体）和字体变形（如小型大写字母） 



##### 5.1.1 常用字体属性 

|     属性     |                          描述                          |
| :----------: | :----------------------------------------------------: |
|     font     | 简写属性。作用是把所有针对字体的属性设置在一个声明中。 |
| font-family  |                     设置字体系列。                     |
|  font-size   |                    设置字体的尺寸。                    |
|  font-style  |                     设置字体风格。                     |
| font-variant |          以小型大写字体或者正常字体显示文本。          |
| font-weight  |                    设置字体的粗细。                    |

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>css中的字体属性</title>
		<!--
			font-family:
				微软雅黑、楷体、宋体、仿宋。如果浏览器不支持字体系列，就会使用默认的字体系列(微软雅黑!)，比如：草书
			font-size:
				字体大小
			font-style:
				字体倾斜度
			font-weight:
				字体的粗细
		-->
		<style>
			span{
				font-family: "草书";
				font-size: 100px;
				font-style: oblique;
				font-weight: bolder;
			}
		</style>
	</head>
	<body>
		<span>这是一个span标签</span>
	</body>
</html>
```



#### 5.2 CSS文本属性 

> 可以改变文本的颜色、字符间距，对齐文本，装饰文本，对文本进行缩进，等等。 



##### 5.2.1 常用文本属性

|      属性       |           描述           |
| :-------------: | :----------------------: |
|      color      |       设置文本颜色       |
|    direction    |       设置文本方向       |
|   line-height   |         设置行高         |
| letter-spacing  |       设置字符间距       |
|   text-align    |     对齐元素中的文本     |
| text-decoration |      向文本添加修饰      |
|   text-indent   |   缩进元素中文本的首行   |
| text-transform  |     控制元素中的字母     |
|  unicode-bidi   |       设置文本方向       |
|   white-space   | 设置元素中空白的处理方式 |
|  word-spacing   |        设置字间距        |

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>CSS文本属性</title>
		<!--
		 	css文本属性
			
			左边调到右边、右边调到左边
		 	direction:
		 		ltr: left to right
		 		rtl: right to left
		 	line-height:
		 		行高
		 	text-align:
		 		文本的对齐方式
		 	text-decoration
		 		文本装饰  underline none line-through
		 		
		 	letter-spacing
		 		字符间距,字符与字符之间的间距
		 	word-spacing:
		 		单词间距,单词与单词之间的间距
			-->
			<style>
				div{
					font-size: 50px;
					color: gray;
					direction: ltr;
					text-align: left;
					text-decoration: none;
				}
				a{
					font-size: 50px;
					text-decoration: none;
				}
			</style>
	</head>
	<body>
		<div>
			这是一个div
		</div>
		
		<a href="index.html">超链接</a>
	</body>
</html>
```



##### 5.2.2 文本属性之字符间距和单词间距的区别

> 字符间距（letter-spacing）是每一个字符之间有间隔距离
>
> 单词间距（word-spacing）是每一个英文单词之间有间隔距离

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>css文本属性之字符间距和单词间距的区别</title>
		<style>
			div{
				font-size: 30px;
				/*letter-spacing: 10px;*/
				word-spacing: 100px;
			}
		</style>
	</head>
	<body>
		<div>
			this is a div
		</div>
	</body>
</html>
```



##### 5.2.3 字体属性和文本属性小案例

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>文本属性及字体属性综合练习</title>
		<!-- 
			标题：字号2em，颜色红色，居中，楷体，加粗
			内容：字号1.2em，颜色黑色，居左，宋体，首行缩进2em，行高2em，字符间距0.1em
		 -->
		 <style>
			 body{
				 background-image: url(img/Saying.png);
				 background-size: cover;
			 }
			 #title{
				 font-size: 2em;
				 font-weight: bolder;
				 color: red;
				 text-align: center;
				 font-family: "楷体";
			 }
			 .content{
				 font-size: 1.2em;
				 color: black;
				 text-align: left;
				 font-family: "宋体";
				 text-indent: 2em;
				 line-height: 2em;
				 letter-spacing: 0.1em;
				 font-weight: bolder;
			 }
			 .foot{
				 text-align: right;
				 color: black;
				 font-family: "楷体";
				 font-weight: bolder;
				 letter-spacing: 0.1em;
			 }
		 </style>
	</head>
	<body>
		<p id="title">
			持续努力，变平凡为不凡：
		</p>
		<p class="content">
			梦想与现实之间的巨大落差常令人烦躁不安。然而，人生就是”今天”的不断积累，就是“现在”这一刻的不断延续，如此而已。
		</p>
		<p class="content">
			然而，不错过今天，认真工作就能看清明天，明天再认真工作就能看清后面的一周，一周认真工作，就能看清后面的一月…
			就是说，即使不去探索遥远的未来，只要全身贯注于眼前的每一个瞬间，以前看不清楚的未来的景象就会自然地呈现在你眼前。
		</p>
		<p class="content">
			与其莫名其妙为明天而烦恼，与其苦思冥想去制定长远的计划，还不如全力过好今天这一天。这才是实现理想最切实的办法。
		</p>
		<p class="foot">
			----稻盛和夫《活着》
		</p>
	</body>
</html>
```



#### 5.3 CSS背景属性

> CSS 允许应用纯色作为背景，也允许使用背景图像创建相当复杂的效果。 



##### 5.3.1 常用背景属性

|         属性          | 描述                                       |
| :-------------------: | :----------------------------------------- |
|      background       | 简写属性，作用是将背景属性设置在一个声明中 |
| background-attachment | 背景图像是否固定或者随着页面的其余部分滚动 |
|   background-color    | 设置元素的背景颜色                         |
|   background-image    | 把图像设置为背景                           |
|  background-position  | 设置背景图像的起始位置                     |
|   background-repeat   | 设置背景图像是否及如何重复                 |

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>css背景属性</title>
		<!-- 
			background-color:将颜色作为背景
			backgrount-image:将图片作为背景
			同时设置图片会覆盖背景颜色
		 -->
		 <style>
			 body{
				 background-color: green;
				 color: red;
				 font-size: 20px;
				 /* 设置背景图片后会覆盖背景颜色 */
				 /* background-image: url(img/motivational.png); */
				 background-size: cover;
			 }
		 </style>
	</head>
	<body>
		青青草原我最帅
	</body>
</html>
```



#### 5.4 CSS尺寸属性

> CSS 尺寸 (Dimension)属性允许你控制元素的高度和宽度。同样，它允许你增加行间距。CSS 尺寸属性允许你控制元素的高度和宽度。同样，还允许你增加行间距。



##### 5.4.1 常用尺寸属性

|    属性     | 描述               |
| :---------: | ------------------ |
|   height    | 设置元素的高度     |
| line-height | 设置行高           |
| max-height  | 设置元素的最大高度 |
|  max-width  | 设置元素的最大宽度 |
| min-height  | 设置元素的最小高度 |
|  min-width  | 设置元素的最小宽度 |
|    width    | 设置元素的宽度     |

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>css尺寸属性</title>
		<!-- 
			注意：css尺寸属性对行内元素无效
			但是图片属于特殊的行内元素，对它有效
			
			我们可以使用display属性设置行内元素和块状元素
			block：块状元素
			inline：行内元素
			inline-block：既有行内元素的特征也有块状元素的特征
			
			当我们设置的高度、宽度等超过了最大或最小值后，它会默认设置到最大或最小值，不会超出最大最小值范围！
			
			这里我们不细讲行内和块状元素，后面会重点讲到！
		 -->
		 <style>
			 #d1{
				 min-width: 100px;
				 max-width: 300px;
				 min-height: 100px;
				 max-height: 300px;
				 background-color: red;
				 display: inline-block;
			 }
		 </style>
	</head>
	<body>
		<font id="d1">这是一个font</font>
		<!-- 图片属于特殊的行内元素 -->
		<img src="img/Saying.png" id="d1" />
		<!-- <span id="d1">这是一个span</span> -->
		<!-- <div id="d1">这是一个div</div> -->
	</body>
</html>
```



#### 5.5 CSS列表属性

> CSS 列表属性允许你放置、改变列表项标志，或者将图像作为列表项标志。



##### 5.5.1 常用列表属性

|        属性         | 描述                                               |
| :-----------------: | -------------------------------------------------- |
|     list-style      | 简写属性，用于把所有用于列表的属性设置于一个声明中 |
|  list-style-image   | 将图象设置为列表项标志                             |
| list-style-position | 设置列表中列表项标志的位置                         |
|   list-style-type   | 设置列表项标志的类型                               |

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>css列表属性</title>
		<!-- 
			list-style-image 将图像设置为列表项标志
			list-style-position 设置列表中列表项标志的位置
			list-style-type 设置列表项标志的样式
		 -->
		 <style>
			 ul{
				 /* 文本内容的对齐方式 */
				 text-align: center;
				 list-style-image: url(img/a.gif);
				 
				 /* 空心圆点 */
				 /* list-style-type: circle; */
				 
				 /* 注意：设置对齐方式之后列表项标志不会随之移动，需要设置位置，才会同步移动 */
				 list-style-position: inside;
			 }
		 </style>
	</head>
	<body>
		<ul>
			<li>Ziph</li>
			<li>Join</li>
			<li>Marry</li>
		</ul>
	</body>
</html>
```



#### 5.6 CSS边框属性

> 元素的边框 (border) 是围绕元素内容和内边距的一条或多条线。CSS border 属性允许你规定元素边框的样式、
>
> 宽度和颜色。



##### 5.6.1 常用边框属性

|        属性         | 描述                                                         |
| :-----------------: | ------------------------------------------------------------ |
|       border        | 简写属性，用于把针对四个边的属性设置在一个声明               |
|    border-style     | 用于设置元素所有边框的样式，或者单独地为各边设置边框样式     |
|    border-width     | 简写属性，用于为元素的所有边框设置宽度，或者单独地为各边边框设置宽度 |
|    border-color     | 简写属性，设置元素的所有边框中可见部分的颜色，或为 4 个边分别设置颜色 |
|    border-bottom    | 简写属性，用于把下边框的所有属性设置到一个声明中             |
| border-bottom-color | 设置元素的下边框的颜色                                       |
| border-bottom-style | 设置元素的下边框的样式                                       |
| border-bottom-width | 设置元素的下边框的宽度                                       |
|     border-left     | 简写属性，用于把左边框的所有属性设置到一个声明中             |
|  border-left-color  | 设置元素的左边框的颜色                                       |
|  border-left-style  | 设置元素的左边框的样式                                       |
|  border-left-width  | 设置元素的左边框的宽度                                       |
|    border-right     | 简写属性，用于把右边框的所有属性设置到一个声明中             |
| border-right-color  | 设置元素的右边框的颜色。                                     |
| border-right-style  | 设置元素的右边框的样式                                       |
| border-right-width  | 设置元素的右边框的宽度                                       |
|     border-top      | 简写属性，用于把上边框的所有属性设置到一个声明中             |
|  border-top-color   | 设置元素的上边框的颜色                                       |
|  border-top-style   | 设置元素的上边框的样式                                       |
|  border-top-width   | 设置元素的上边框的宽度                                       |
|    border-radius    | 设置圆角边框                                                 |

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>css边框属性</title>
		<style>
			body{
				text-align: center;
			}
			#d1{
				/* 所有边框样式设置 */
				border: dotted red 2px;
				
				/* 
				 左边框
				 样式：点状
				 颜色：绿色
				 宽度5px
				 */
				border-left-style: dotted;
				border-left-color: green;
				border-left-width: 5px;
				/* 同理如下（简写）： */
				/* border: dotted green 5px; */
				
				/*
				 上边框
				 样式：虚线
				 颜色：红色
				 宽度5px
				 */
				border-top-style: dashed;
				border-top-color: green;
				border-top-width: 5px;
				
				/*
				 右边框
				 样式：实线
				 颜色：紫色
				 宽度5px
				 */
				border-right-style: solid;
				border-right-color: purple;
				border-right-width: 5px;
				
				/*
				 下边框
				 样式：双实线
				 颜色：蓝色
				 宽度5px
				 */
				border-bottom-style: double;
				border-bottom-color: blue;
				border-bottom-width: 5px;
			}
		</style>
	</head>
	<body>
		<img id="d1" src="img/kuli.png" />
	</body>
</html>
```

> 圆角边框

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>css圆角边框</title>
		<style>
			/* 
			 圆角边框是在图片的四个角用同一个半径相同的圆来切成的！（数学的内切圆原理）
			 而我们提供的即是内切圆的半径（像素值、百分比）
			 */
			img{
				border-radius: 50px;
				/* border-radius: 50%; */
			}
		</style>
	</head>
	<body>
		<img src="img/kuli.png" />
	</body>
</html>
```



### 六、CSS盒子模型



#### 6.1 盒子模型

> CSS 框模型 (Box Model) 规定了元素框处理元素内容、内边距、边框 和 外边距 的方式。

![1586344877387](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200529124136.png)

> 在 CSS 中，width 和 height 指的是内容区域的宽度和高度。增加内边距、边框和外边距不会影响内容区域的尺寸，但是会增加元素框的尺寸。
>
> [注意：内边距和外边距的值可以是负数 ；在页面上，设置margin-right无效，因为元素默认是左对齐，不管怎么设置元素都是左对齐，所以将元素设置为右对齐就可以看到效果，float:right。]()

> 假设框的每个边上有 10 个像素的外边距和 5 个像素的内边距。如果希望这个元素框达到 100 个像素，就需要将内容的宽度设置为 70  像素，请看下图：

![1586345064003](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200529124137.png)

##### 6.1.1 盒子模型的基本使用

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>css盒子模型基本使用</title>
		<!--
			内边距：边框到元素内容的距离
			padding:同时设置左上右下内边距
			padding-left/padding-top/padding-right/padding-bottom
			外边距：边框到其他元素的距离
			margin:同时设置左上右下外边距
			margin-left/margin-top/margin-right/margin-bottom
			
			浏览器：元素进行渲染的时候，是从左往右进行渲染，
			相当于现实生活中，排队买东西，margin-right告诉最后一个人，离下一个人要有200米远
		-->
		<style>
			body{
				float: right;
			}
			img{
				width: 200px;
				height: 100px;
				border: 5px solid blue;
			}
			#img1{
				/* padding: 10px; */
				margin: 50px;
			}
			#img3{
				/* padding-top: 20px; */
				/* margin-left: 150px; */
				margin-right: 200px;
			}
		</style>
	</head>
	<body>
		<img id="img1" src="img/girl01.jpg" />
		<img id="img2" src="img/girl02.jpg" />
		<img id="img3" src="img/girl03.jpg" />
	</body>
</html>
```



#### 6.2 CSS盒子定位介绍

> CSS 定位 (Positioning) 属性允许你对元素进行定位。 



##### 6.2.1 CSS定位和浮动

> CSS  为定位和浮动提供了一些属性，利用这些属性，可以建立列式布局，将布局的一部分与另一部分重叠，还可以完成多年来通常需要使用多个表格才能完成的任务。
>
> 定位的基本思想很简单，它允许你定义元素框相对于其正常位置应该出现的位置，或者相对于父元素、另一个元素甚至浏览器窗口本身的位置。



##### 6.2.2 常用的盒子定位属性

> CSS定位属性允许你对元素进行定位

|      属性      | 描述                                                       |
| :------------: | ---------------------------------------------------------- |
|    position    | 把元素放置到一个静态的、相对的、绝对的、或固定的位置中     |
|      top       | 定义了一个定位元素的上外边距边界与其包含块上边界之间的偏移 |
|     right      | 定义了定位元素右外边距边界与其包含块右边界之间的偏移       |
|     bottom     | 定义了定位元素下外边距边界与其包含块下边界之间的偏移       |
|      left      | 定义了定位元素左外边距边界与其包含块左边界之间的偏移       |
|    overflow    | 设置当元素的内容溢出其区域时发生的事情。                   |
|      clip      | 设置元素的形状。元素被剪入这个形状之中，然后显示出来       |
| vertical-align | 设置元素的垂直对齐方式                                     |
|    z-index     | 设置元素的堆叠顺序                                         |



##### 6.2.3 CSS position（定位） 值类型

> position 属性规定元素的定位类型。 

|    值    | 描述                                                         |
| :------: | ------------------------------------------------------------ |
| absolute | 生成绝对定位的元素，相对于 static 定位以外的第一个父元素进行定位。元素的位置通过 "left", "top", "right" 以及 "bottom" 属性进行规定。 |
|  fixed   | 生成绝对定位的元素，相对于浏览器窗口进行定位。  元素的位置通过 "left", "top", "right" 以及 "bottom" 属性进行规定。 |
| relative | 生成相对定位的元素，相对于其正常位置进行定位。  因此，"left:20" 会向元素的 LEFT 位置添加 20 像素。 |
|  static  | 默认值。没有定位，元素出现在正常的流中（忽略 top, bottom, left, right 或者 z-index 声明）。 |
| inherit  | 规定应该从父元素继承 position 属性的值。                     |

#### 6.3 CSS固定定位

> CSS 定位 (Positioning) 属性允许你对元素进行定位。 

> CSS固定定位其实很常见，就比如说，我们在网页上浏览时，有时候右下角会弹出一些不明图片。你会发现图片可以点击去，细心的你们也会发现图片的右上角右一个×，当我们点击×的时候这个不明图片广告并不会关闭，而是被你打开了！所有这是一个虚拟的❌！所有这个不明广告时不能关闭的，你浏览网页上下滑动时，他的位置依然不变，像这种流氓广告就是CSS固定定位的产物！其实实现起来很简单，就让我们来看一下这流氓时怎么实现的吧！Come on baby！如果你下载我的代码笔记，也可以去看一下这个代码的！其中的img是美女哦！点进去也是惊喜！

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>css定位属性概念</title>
		<!-- 
			css定位
			position：固定(fix)、相对relative、绝对absolute、静态static
			left：对元素进行左偏移
			top：对元素进行上偏移
			right：对元素进行右偏移
			bottom：对元素进行下偏移
		 -->
		 <style>
			 img{
				 position: fixed;
				 width: 350px;
				 height: 200px;
				 right: 0px;
				 bottom: 0px;
			 }
		 </style>
	</head>
	<body>
		<a href="https://blog.csdn.net/weixin_44170221"><img src="img/girl01.jpg" /></a>
		<p>这是一个流氓广告页面！</p>
	</body>
</html>
```



#### 6.4 CSS相对定位

> 相对定位(relative) 属性如果对一个元素进行相对定位，它将出现在它所在的位置上。然后，可以通过设置垂直或水平位置，让这个元素“相对于”它的起点进行移动。 

> **温馨提示：** 设置为相对定位的元素框会偏移某个距离。元素仍然保持其未定位前的形状，它原本所占的空间仍保留。相对于原来的位置进行偏移！！！

![1586347563629](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200529124138.png)

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>css相对定位</title>
		<!--
			设置为相对定位的元素框会偏移某个距离。元素仍然保持其未定位前的形状，它原本所占的空间仍保留。
			相对于原来的位置进行偏移！！！
		-->
		<style>
			#s1{
				background-color: red;
			}
			#s2{
				/* 实际上span2在原本位置基础上向下移动了20px，向右移动了20px */
				background-color: orange;
				position: relative;
				top: 20px;
				left: 20px;
			}
			#s3{
				background-color: yellow;
			}
		</style>
	</head>
	<body>
		<span id="s1">
			这是span1
		</span>
		<span id="s2">
			这是span2
		</span>
		<span id="s3">
			这是span3
		</span>
	</body>
</html>
```



#### 6.5 CSS绝对定位

> 绝对定位(absolute) 的元素的位置相对于最近的已定位父元素。 

> 温馨提示：绝对定位并不会在原有位置占用空间，这点与相对定位不同。 并相对于其包含块定位，元素原来在正常文档流中所占的空间会关闭。

![1586348022187](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200529124139.png)

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>css绝对定位</title>
		<!--
			并相对于其包含块定位，
			元素原来在正常文档流中所占的空间会关闭
		-->
		<style>
			#s1{
				background-color: red;
			}
			#s2{
				/* 注意：原来的位置被span3替换了过来（它原来在文档流中的空间被关闭了，也就是没有了！） */
				background-color: orange;
				position: absolute;
				top: 50px;
				left: 50px;
			}
			#s3{
				background-color: yellow;
			}
		</style>
	</head>
	<body>
		<span id="s1">
			这是span1
		</span>
		<span id="s2">
			这是span2
		</span>
		<span id="s3">
			这是span3
		</span>
	</body>
</html>
```



#### 6.6 CSS浮动

> **浮动的框可以向左或向右移动，直到它的外边缘碰到包含框或另一个浮动框的边框为止。**由于浮动框不在文档的普通流中，所以文档的普通流中的块框表现得就像浮动框不存在一样。



##### 6.6.1 浮动的多种方式与问题

> 当把框 1 向右浮动时，它脱离文档流并且向右移动，直到它的右边缘碰到包含框的右边缘：

![1586349043902](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200529124140.png)

> 当框 1 向左浮动时，它脱离文档流并且向左移动，直到它的左边缘碰到包含框的左边缘。因为它不再处于文档流中，所以它不占据空间，实际上覆盖住了框 2，使框 2  从视图中消失。如果把所有三个框都向左移动，那么框 1 向左浮动直到碰到包含框，另外两个框向左浮动直到碰到前一个浮动框。

![1586349090691](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200529124141.png)

> 如果包含框太窄，无法容纳水平排列的三个浮动元素，那么其它浮动块向下移动，直到有足够的空间。如果浮动元素的高度不同，那么当它们向下移动时可能被其它浮动元素“卡住”：

![1586349152991](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200529124142.png)

##### 6.6.2 浮动行框和清理

> 浮动框旁边的行框被缩短，从而给浮动框留出空间，行框围绕浮动框。因此，创建浮动框可以使文本围绕图像：

![1586349269538](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200529124143.png)

> 要想阻止行框围绕浮动框，需要对该框应用clear 属性。clear  属性的值可以是 left、right、both 或 none，它表示框的哪些边不应该挨着浮动框。
>
> 为了实现这种效果，在被清理的元素的*上外边距*上添加足够的空间，使元素的顶边缘垂直下降到浮动框下面：

![1586349325736](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200529124144.png)

```html
.news {
  background-color: gray;
  border: solid 1px black;
  }

.news img {
  float: left;
  }

.news p {
  float: right;
  }

<div class="news">
<img src="news-pic.jpg" />
<p>some text</p>
</div>
```

> 这种情况下，出现了一个问题。因为浮动元素脱离了文档流，所以包围图片和文本的 div 不占据空间。
>
> 如何让包围元素在视觉上包围浮动元素呢？需要在这个元素中的某个地方应用 clear：

![1586349451987](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200529124145.png)



> 不幸的是出现了一个新的问题，由于没有现有的元素可以应用清理，所以我们只能添加一个空元素并且清理它。

```html
.news {
  background-color: gray;
  border: solid 1px black;
  }

.news img {
  float: left;
  }

.news p {
  float: right;
  }

.clear {
  clear: both;
  }

<div class="news">
<img src="news-pic.jpg" />
<p>some text</p>
<div class="clear"></div>
</div>
```

> 这样可以实现我们希望的效果，但是需要添加多余的代码。常常有元素可以应用 clear，但是有时候不得不为了进行布局而添加无意义的标记。
>
> 不过我们还有另一种办法，那就是对容器 div 进行浮动：

```html
.news {
  background-color: gray;
  border: solid 1px black;
  float: left;
  }

.news img {
  float: left;
  }

.news p {
  float: right;
  }

<div class="news">
<img src="news-pic.jpg" />
<p>some text</p>
</div>
```

> 这样会得到我们希望的效果。不幸的是，下一个元素会受到这个浮动元素的影响。为了解决这个问题，有些人选择对布局中的所有东西进行浮动，然后使用适当的有意义的元素（常常是站点的页脚）对这些浮动进行清理。这有助于减少或消除不必要的标记。



#### 6.7 CSS clear 属性

> clear 属性规定元素的哪一侧不允许其他浮动元素。clear 属性定义了元素的哪边上不允许出现浮动元素。



##### 6.7.1 常用clears值

|   值    | 描述                                |
| :-----: | ----------------------------------- |
|  left   | 在左侧不允许浮动元素                |
|  right  | 在右侧不允许浮动元素                |
|  both   | 在左右两侧均不允许浮动元素          |
|  none   | 默认值。允许浮动元素出现在两侧      |
| inherit | 规定应该从父元素继承 clear 属性的值 |



### 七、CSS块级元素和行内元素



#### 7.1 CSS块级元素和行内元素介绍

> 块级元素 ：块级元素前后会带有换行符，占用一整行 。常见的块级元素：div 
>
> 行内元素 ：行内元素前后没有换行符，只包裹内容 。常见的行内元素：span ；margin-top、margin-bottom、padding-top、padding-bottom设置无效 

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>css块级元素和行内元素</title>
		
		<!-- 
			1,行内元素:元素仅仅包裹内容,常见：span
				padding-top/padding-bottom , margin-top/margin-bottom 存在问题设置无效
			2,块级元素:占满整一行,常见:div
		 -->
		 <style>
			 div{
				 background-color: yellow;
				 
				 /* 修改为行内元素*/
				 display: inline;
				 
				 padding: 10px;
				 margin-top: 100px;
			 }
			 span{
				 background-color: greenyellow;
				 margin-top: 100px;
				 
				 /* 将span标签修改为块级元素*/
				 display: block;
			 }
		 </style>
	</head>
	<body>
		<div>
			这是div
		</div>
		<span>
			这是span
		</span>
	</body>
</html>
```



### 八、CSS伸缩布局flex



#### 8.1 CSS伸缩布局的介绍（flex）

> CSS3在布局方面做了非常大的改进，使得我们对块级元素的布局排列变得十分灵活，适应性非 常强，其强大的伸缩性，在响应式开发中可以发挥极大的作用。 

> 主轴(main axis)：flex容器的主轴主要用来分配flex子元素，默认是水平方向（row） 
>
> 侧轴(cross axis)：与主轴垂直的轴称为侧轴，默认是垂直方向 （colum）
>
> 注意：主轴和侧轴并不是固定不变的，可以通过flex-direction进行切换,默认为水平方向(row)。 

![1586351323882](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200529124146.png)



#### 8.2 伸缩布局入门案例



##### 8.2.1 伸缩布局入门案例一 

> 需求：完成以下图示布局，左边是菜单栏（40%），右边是内容栏（60%），高度填充整个屏幕。
>
> 注意：html标签和body标签的height默认都不是100%,需要进行设置  

![1586351598840](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200529124147.png)

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>CSS伸缩布局入门案例一</title>
		<!--
			完成以下图示布局，左边是菜单栏（40%），右边是内容栏（60%），高度填充整个屏幕。
			浏览器 -> html -> body > container -> left/right
		-->
		<style>
			html{
				height: 100%;
			}
			body{
				/*按照父容器的高度的100%进行设定*/
				height: 100%;
				margin: 0px;
			}
			#container{
				display: flex;
				/* 按照父容器的高度的100%进行设定 */
				height: 100%;
			}
			#left{
				background-color: indianred;
				width: 40%;
				/* 按照父容器的高度的100%进行设定 */
				height: 100%;
			}
			#right{
				background-color: cornflowerblue;
				width: 60%;
				height: 100%;
		</style>
	</head>
	<body>
		<div id="container">
			<div id="left">left</div>
			<div id="right">right</div>
		</div>
	</body>
</html>
```



##### 8.2.2 伸缩布局入门案例二

> 需求：完成以下图示布局，上边是菜单栏（40%），下边是内容栏（60%），宽度填充整个屏幕。 

![1586352134328](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200529124148.png)

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>CSS伸缩布局入门案例二</title>
		<!--
			完成以下图示布局，上边是菜单栏（40%），下边是内容栏（60%），宽度填充整个屏幕。
		-->
		<style>
			html{
				height: 100%;
			}
			body{
				height: 100%;
				margin: 0px;
			}
			#container{
				display: flex;
				/* 改变主轴方向 */
				flex-direction: column;
				height: 100%;
			}
			#top{
				background-color: orange;
				height: 40%;
			}
			
			#bottom{
				background-color: dodgerblue;
				height: 60%;
			}
		</style>
	</head>
	<body>
		<div id="container">
			<div id="top">top</div>
			<div id="bottom">bottom</div>
		</div>
	</body>
</html>
```



