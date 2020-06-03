* [jQuery](#jquery)
    * [一、jQuery概述](#%E4%B8%80jquery%E6%A6%82%E8%BF%B0)
      * [1\.1 什么是jQuery？](#11-%E4%BB%80%E4%B9%88%E6%98%AFjquery)
      * [1\.2 jQuery的版本须知](#12-jquery%E7%9A%84%E7%89%88%E6%9C%AC%E9%A1%BB%E7%9F%A5)
      * [1\.3 jQuery的功能作用](#13-jquery%E7%9A%84%E5%8A%9F%E8%83%BD%E4%BD%9C%E7%94%A8)
      * [1\.4 为什么要使用jQuery？](#14-%E4%B8%BA%E4%BB%80%E4%B9%88%E8%A6%81%E4%BD%BF%E7%94%A8jquery)
      * [1\.5 jQueryAPI文档介绍](#15-jqueryapi%E6%96%87%E6%A1%A3%E4%BB%8B%E7%BB%8D)
      * [1\.6 jQuery的下载与使用](#16-jquery%E7%9A%84%E4%B8%8B%E8%BD%BD%E4%B8%8E%E4%BD%BF%E7%94%A8)
        * [1\.6\.1 下载获取jQuery的方法](#161-%E4%B8%8B%E8%BD%BD%E8%8E%B7%E5%8F%96jquery%E7%9A%84%E6%96%B9%E6%B3%95)
        * [1\.6\.2 引入jQuery](#162-%E5%BC%95%E5%85%A5jquery)
        * [1\.6\.3 jQuery的封装思想](#163-jquery%E7%9A%84%E5%B0%81%E8%A3%85%E6%80%9D%E6%83%B3)
    * [二、jQuery语法](#%E4%BA%8Cjquery%E8%AF%AD%E6%B3%95)
      * [2\.1 jQuery的普通语法](#21-jquery%E7%9A%84%E6%99%AE%E9%80%9A%E8%AF%AD%E6%B3%95)
      * [2\.2 选择器](#22-%E9%80%89%E6%8B%A9%E5%99%A8)
        * [2\.2\.1 标签选择器](#221-%E6%A0%87%E7%AD%BE%E9%80%89%E6%8B%A9%E5%99%A8)
        * [2\.2\.2 id选择器](#222-id%E9%80%89%E6%8B%A9%E5%99%A8)
        * [2\.2\.3 class选择器](#223-class%E9%80%89%E6%8B%A9%E5%99%A8)
        * [2\.2\.4 通配符选择器](#224-%E9%80%9A%E9%85%8D%E7%AC%A6%E9%80%89%E6%8B%A9%E5%99%A8)
        * [3\.1\.5 层级选择器](#315-%E5%B1%82%E7%BA%A7%E9%80%89%E6%8B%A9%E5%99%A8)
        * [3\.1\.6 基本过滤选择器](#316-%E5%9F%BA%E6%9C%AC%E8%BF%87%E6%BB%A4%E9%80%89%E6%8B%A9%E5%99%A8)
        * [3\.1\.7 内容过滤选择器](#317-%E5%86%85%E5%AE%B9%E8%BF%87%E6%BB%A4%E9%80%89%E6%8B%A9%E5%99%A8)
        * [3\.1\.8 子元素过滤选择器](#318-%E5%AD%90%E5%85%83%E7%B4%A0%E8%BF%87%E6%BB%A4%E9%80%89%E6%8B%A9%E5%99%A8)
        * [3\.1\.9 属性选择器](#319-%E5%B1%9E%E6%80%A7%E9%80%89%E6%8B%A9%E5%99%A8)
      * [2\.3 jQuery事件](#23-jquery%E4%BA%8B%E4%BB%B6)
        * [2\.3\.1 什么是事件？](#231-%E4%BB%80%E4%B9%88%E6%98%AF%E4%BA%8B%E4%BB%B6)
        * [2\.3\.2 事件语法](#232-%E4%BA%8B%E4%BB%B6%E8%AF%AD%E6%B3%95)
        * [2\.3\.3 鼠标单击 click()](#233-%E9%BC%A0%E6%A0%87%E5%8D%95%E5%87%BB-click)
        * [2\.3\.4 鼠标双击 dblclick()](#234-%E9%BC%A0%E6%A0%87%E5%8F%8C%E5%87%BB-dblclick)
        * [2\.3\.5 鼠标经过 mouseover()](#235-%E9%BC%A0%E6%A0%87%E7%BB%8F%E8%BF%87-mouseover)
        * [2\.3\.6 鼠标离开 mouseout()](#236-%E9%BC%A0%E6%A0%87%E7%A6%BB%E5%BC%80-mouseout)
        * [2\.3\.7 光标悬停 hover()](#237-%E5%85%89%E6%A0%87%E6%82%AC%E5%81%9C-hover)
        * [2\.3\.8 鼠标移动元素上方并按键 mousedown()](#238-%E9%BC%A0%E6%A0%87%E7%A7%BB%E5%8A%A8%E5%85%83%E7%B4%A0%E4%B8%8A%E6%96%B9%E5%B9%B6%E6%8C%89%E9%94%AE-mousedown)
        * [2\.3\.9 在元素上松开鼠标按键 mouseup()](#239-%E5%9C%A8%E5%85%83%E7%B4%A0%E4%B8%8A%E6%9D%BE%E5%BC%80%E9%BC%A0%E6%A0%87%E6%8C%89%E9%94%AE-mouseup)
        * [2\.3\.10 获取焦点 focus()](#2310-%E8%8E%B7%E5%8F%96%E7%84%A6%E7%82%B9-focus)
        * [2\.3\.11 失去焦点 blur()](#2311-%E5%A4%B1%E5%8E%BB%E7%84%A6%E7%82%B9-blur)
      * [三、jQuery 效果](#%E4%B8%89jquery-%E6%95%88%E6%9E%9C)
      * [3\.1 隐藏与显示](#31-%E9%9A%90%E8%97%8F%E4%B8%8E%E6%98%BE%E7%A4%BA)
        * [3\.1\.1 隐藏 hide()](#311-%E9%9A%90%E8%97%8F-hide)
        * [3\.1\.2 显示 show()](#312-%E6%98%BE%E7%A4%BA-show)
        * [3\.1\.3 切换隐藏与显示 toggle()](#313-%E5%88%87%E6%8D%A2%E9%9A%90%E8%97%8F%E4%B8%8E%E6%98%BE%E7%A4%BA-toggle)
      * [3\.2 淡入淡出](#32-%E6%B7%A1%E5%85%A5%E6%B7%A1%E5%87%BA)
        * [3\.2\.1 淡入淡出的方法分类](#321-%E6%B7%A1%E5%85%A5%E6%B7%A1%E5%87%BA%E7%9A%84%E6%96%B9%E6%B3%95%E5%88%86%E7%B1%BB)
        * [3\.2\.2 jQuery fadeIn() 方法](#322-jquery-fadein-%E6%96%B9%E6%B3%95)
        * [3\.2\.3 jQuery fadeOut() 方法](#323-jquery-fadeout-%E6%96%B9%E6%B3%95)
        * [3\.2\.4 jQuery fadeToggle() 方法](#324-jquery-fadetoggle-%E6%96%B9%E6%B3%95)
        * [3\.2\.5 jQuery fadeTo() 方法](#325-jquery-fadeto-%E6%96%B9%E6%B3%95)
      * [3\.3 滑动](#33-%E6%BB%91%E5%8A%A8)
        * [3\.3\.1 slideDown() 方法](#331-slidedown-%E6%96%B9%E6%B3%95)
        * [3\.3\.2 slideUp() 方法](#332-slideup-%E6%96%B9%E6%B3%95)
        * [3\.3\.3 slideToggle() 方法](#333-slidetoggle-%E6%96%B9%E6%B3%95)
      * [3\.4 链式编程](#34-%E9%93%BE%E5%BC%8F%E7%BC%96%E7%A8%8B)
    * [四、 jQuery HTML DOM操作](#%E5%9B%9B-jquery-html-dom%E6%93%8D%E4%BD%9C)
      * [4\.1 获取](#41-%E8%8E%B7%E5%8F%96)
        * [4\.1\.1 获得内容 text()、html() 以及 val()](#411-%E8%8E%B7%E5%BE%97%E5%86%85%E5%AE%B9-texthtml-%E4%BB%A5%E5%8F%8A-val)
        * [4\.1\.2 获取属性 attr()、prop()](#412-%E8%8E%B7%E5%8F%96%E5%B1%9E%E6%80%A7-attrprop)
      * [4\.2 设置](#42-%E8%AE%BE%E7%BD%AE)
        * [4\.2\.1 设置内容 text()、html() 以及 val()](#421-%E8%AE%BE%E7%BD%AE%E5%86%85%E5%AE%B9-texthtml-%E4%BB%A5%E5%8F%8A-val)
        * [4\.2\.2 设置属性 attr()](#422-%E8%AE%BE%E7%BD%AE%E5%B1%9E%E6%80%A7-attr)
        * [4\.2\.3 移除属性 removeAttr()](#423-%E7%A7%BB%E9%99%A4%E5%B1%9E%E6%80%A7-removeattr)
      * [4\.3 添加元素](#43-%E6%B7%BB%E5%8A%A0%E5%85%83%E7%B4%A0)
        * [4\.3\.1 添加新的 HTML 内容](#431-%E6%B7%BB%E5%8A%A0%E6%96%B0%E7%9A%84-html-%E5%86%85%E5%AE%B9)
        * [4\.3\.2 jQuery append() 方法](#432-jquery-append-%E6%96%B9%E6%B3%95)
        * [4\.3\.3 jQuery prepend() 方法](#433-jquery-prepend-%E6%96%B9%E6%B3%95)
        * [4\.3\.4 jQuery after() 和 before() 方法](#434-jquery-after-%E5%92%8C-before-%E6%96%B9%E6%B3%95)
      * [4\.4 删除元素](#44-%E5%88%A0%E9%99%A4%E5%85%83%E7%B4%A0)
        * [4\.4\.1 jQuery remove() 方法](#441-jquery-remove-%E6%96%B9%E6%B3%95)
        * [4\.4\.2 jQuery empty() 方法](#442-jquery-empty-%E6%96%B9%E6%B3%95)
        * [4\.4\.3 过滤被删除的元素](#443-%E8%BF%87%E6%BB%A4%E8%A2%AB%E5%88%A0%E9%99%A4%E7%9A%84%E5%85%83%E7%B4%A0)
      * [4\.5jQuery元素遍历](#45jquery%E5%85%83%E7%B4%A0%E9%81%8D%E5%8E%86)
      * [4\.6 CSS操作](#46-css%E6%93%8D%E4%BD%9C)
        * [4\.6\.1 jQuery操作CSS方法](#461-jquery%E6%93%8D%E4%BD%9Ccss%E6%96%B9%E6%B3%95)
        * [4\.6\.2 jQuery addClass() 方法](#462-jquery-addclass-%E6%96%B9%E6%B3%95)
        * [4\.6\.3 jQuery removeClass() 方法](#463-jquery-removeclass-%E6%96%B9%E6%B3%95)
        * [4\.6\.4 jQuery toggleClass() 方法](#464-jquery-toggleclass-%E6%96%B9%E6%B3%95)
      * [4\.7 CSS()方法](#47-css%E6%96%B9%E6%B3%95)
        * [4\.7\.1 jQuery css() 方法](#471-jquery-css-%E6%96%B9%E6%B3%95)
        * [4\.7\.2 返回 CSS 属性](#472-%E8%BF%94%E5%9B%9E-css-%E5%B1%9E%E6%80%A7)
        * [4\.7\.3 设置 CSS 属性](#473-%E8%AE%BE%E7%BD%AE-css-%E5%B1%9E%E6%80%A7)
        * [4\.7\.4 设置多个 CSS 属性](#474-%E8%AE%BE%E7%BD%AE%E5%A4%9A%E4%B8%AA-css-%E5%B1%9E%E6%80%A7)
      * [五、jQuery节点关系](#%E4%BA%94jquery%E8%8A%82%E7%82%B9%E5%85%B3%E7%B3%BB)
        * [5\.1 jQuery parent() 方法（祖先）](#51-jquery-parent-%E6%96%B9%E6%B3%95%E7%A5%96%E5%85%88)
        * [5\.2 jQuery children() 方法（子孙）](#52-jquery-children-%E6%96%B9%E6%B3%95%E5%AD%90%E5%AD%99)
        * [5\.3 jQuery find() 方法](#53-jquery-find-%E6%96%B9%E6%B3%95)
        * [5\.4 jQuery siblings() 方法（同胞）](#54-jquery-siblings-%E6%96%B9%E6%B3%95%E5%90%8C%E8%83%9E)
        * [5\.5 jQuery next() 方法](#55-jquery-next-%E6%96%B9%E6%B3%95)
          * [案例1 ：全选 |全不选、反向全选](#%E6%A1%88%E4%BE%8B1-%E5%85%A8%E9%80%89-%E5%85%A8%E4%B8%8D%E9%80%89%E5%8F%8D%E5%90%91%E5%85%A8%E9%80%89)
          * [案例2 ：两个 select框，把一个select框中的内容移动到另一个select](#%E6%A1%88%E4%BE%8B2-%E4%B8%A4%E4%B8%AA-select%E6%A1%86%E6%8A%8A%E4%B8%80%E4%B8%AAselect%E6%A1%86%E4%B8%AD%E7%9A%84%E5%86%85%E5%AE%B9%E7%A7%BB%E5%8A%A8%E5%88%B0%E5%8F%A6%E4%B8%80%E4%B8%AAselect)
          * [案例演示3:省市级联](#%E6%A1%88%E4%BE%8B%E6%BC%94%E7%A4%BA3%E7%9C%81%E5%B8%82%E7%BA%A7%E8%81%94)
    * [六、jQuery noConflict方法](#%E5%85%ADjquery-noconflict%E6%96%B9%E6%B3%95)
      * [6\.1 jQuery 和其他 JavaScript 框架](#61-jquery-%E5%92%8C%E5%85%B6%E4%BB%96-javascript-%E6%A1%86%E6%9E%B6)
      * [6\.2 jQuery noConflict() 方法](#62-jquery-noconflict-%E6%96%B9%E6%B3%95)
    * [七、jQuery Ajax](#%E4%B8%83jquery-ajax)
      * [7\.1 重温Ajax介绍](#71-%E9%87%8D%E6%B8%A9ajax%E4%BB%8B%E7%BB%8D)
      * [7\.2 ajax()方法](#72-ajax%E6%96%B9%E6%B3%95)
      * [7\.3 jQuery Ajax参数](#73-jquery-ajax%E5%8F%82%E6%95%B0)
      * [7\.4 get和post方法](#74-get%E5%92%8Cpost%E6%96%B9%E6%B3%95)
        * [7\.4\.1 get方法](#741-get%E6%96%B9%E6%B3%95)
        * [7\.4\.2 post方法](#742-post%E6%96%B9%E6%B3%95)
      * [7\.5 注册案例](#75-%E6%B3%A8%E5%86%8C%E6%A1%88%E4%BE%8B)
          * [c3p0\.properties](#c3p0properties)
          * [User实体类](#user%E5%AE%9E%E4%BD%93%E7%B1%BB)
          * [CheckUsernameServlet检查注册用户名是否存在](#checkusernameservlet%E6%A3%80%E6%9F%A5%E6%B3%A8%E5%86%8C%E7%94%A8%E6%88%B7%E5%90%8D%E6%98%AF%E5%90%A6%E5%AD%98%E5%9C%A8)
          * [RegisterServlet提示注册成功](#registerservlet%E6%8F%90%E7%A4%BA%E6%B3%A8%E5%86%8C%E6%88%90%E5%8A%9F)
          * [Dao层数据库访问](#dao%E5%B1%82%E6%95%B0%E6%8D%AE%E5%BA%93%E8%AE%BF%E9%97%AE)
          * [Service层业务处理](#service%E5%B1%82%E4%B8%9A%E5%8A%A1%E5%A4%84%E7%90%86)
          * [DBUtils](#dbutils)
          * [JSONUtils](#jsonutils)
          * [register\.jsp页面](#registerjsp%E9%A1%B5%E9%9D%A2)

# jQuery

------

### 一、jQuery概述

#### 1.1 什么是jQuery？

> **jQuery** 是一个高效、精简并且功能丰富的 JavaScript 工具库。它提供的 API 易于使用且兼容众多浏览器，这让诸如 HTML 文档遍历和操作、事件处理、动画和 Ajax 操作更加简单。**jQuery设计的宗旨是“write Less，Do More”，即倡导写更少的代码，做更多的事情。** 它封装JavaScript常用的功能代码，提供一种简便的JavaScript设计模式，优化HTML文档操作、事件处理、动画设计和Ajax交互。
>
> jQuery的核心特性可以总结为：具有独特的链式语法和短小清晰的多功能接口；具有高效灵活的css选择器，并且可对CSS选择器进行扩展；拥有便捷的插件扩展机制和丰富的插件。jQuery兼容各种主流浏览器，如IE 6.0+、FF 1.5+、Safari 2.0+、Opera 9.0+等。



#### 1.2 jQuery的版本须知

> 目前jQuery有三个大版本：
>
> - 1.x：兼容ie678,使用最为广泛的，官方只做BUG维护，功能不再新增。因此一般项目来说，使用1.x版本就可以了，最终版本：1.12.4 (2016年5月20日)
>
> - 2.x：2013年2.0版本发布，不兼容ie678，很少有人使用，官方只做BUG维护，功能不再新增。如果不考虑兼容低版本的浏览器可以使用2.x，最终版本：2.2.4 (2016年5月20日)
>
> - 3.x：不兼容ie678，只支持最新的浏览器。除非特殊要求，一般不会使用3.x版本的，很多老的jQuery插件不支持这个版本。目前该版本是官方主要更新维护的版本。最新版本：3.4.1（2019年5月1日）
>
> - **注意：** 1.X大版本下，细分版本非常多，各个版本的函数都会有一定的差异。网上看到的很多教程大多是1.x版本的。
>
>   jquery官方手册：http://api.jquery.com/



#### 1.3 jQuery的功能作用

> jQuery库包含以下功能：
>
> - HTML 元素选取
> - HTML 元素操作
> - CSS 操作
> - HTML 事件函数
> - JavaScript 特效和动画
> - HTML DOM 遍历和修改
> - Ajax
> - Utilities



#### 1.4 为什么要使用jQuery？

> 目前网络上有大量开源的 JS 框架, 但是 jQuery 是目前最流行的 JS 框架，而且提供了大量的扩展。
> 很多大公司都在使用 jQuery， 例如：Google、Microsoft、IBM、Netflix等等



#### 1.5 jQueryAPI文档介绍

> - jquery官方手册（全英文）：http://api.jquery.com/
> - jQuery中文网：https://www.jquery123.com/
> - W3CSchool：https://www.w3school.com.cn/jquery/index.asp/
> - 菜鸟教程：https://www.runoob.com/jquery/jquery-tutorial.html/



#### 1.6 jQuery的下载与使用

##### 1.6.1 下载获取jQuery的方法

> - 从 [jquery.com](http://jquery.com/download/) 下载 jQuery 库
>   - Production version - 用于实际的网站中，已被精简和压缩。
>   - Development version - 用于测试和开发（未压缩，是可读的代码）
>
> - 从 CDN 中载入 jQuery，如从 Google 中加载 jQuery
>   - 百度 CDN - `https://apps.bdimg.com/libs/jquery/2.1.4/jquery.min.js`
>   - 新浪 CDN - `http://lib.sinaapp.com/js/jquery/2.0.2/jquery-2.0.2.min.js`
>   - Google CDN - `http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js`
>   - Microsoft CDN - `http://ajax.htmlnetcdn.com/ajax/jQuery/jquery-1.10.2.min.js`



##### 1.6.2 引入jQuery

> jQuery 库是一个 JavaScript 文件，可以使用 HTML 的 \<script> 标签引用它：
>
> - 使用本地下载的jQuery库，需要在web文件夹下创建js文件夹，并将本地库文件放在js文件夹内，在src下填写路径
> - 使用CDN则不需要创建js文件夹，直接将厂家的CDN放在src下即可！
>
> **注意：** 导入jQuery的\<script>标签内不得写任何内容，否则无效！如果需要编写js代码则另开辟一个\<script>标签并在此\<script>标签内编写js代码！

```javascript
<head>
    //引入jQuery，src下也可以引入CDN来使用jQuery
	<script src="jquery-1.10.2.min.js"></script>
</head>
```



##### 1.6.3 jQuery的封装思想

> 我们在学习JavaScript的时候，是会用到为元素设置标签内容或对标签有其他要求的。在js中设置标签内容的前提，需要我们通过id、class等获取到标签元素对象后，再给予标签内容或对标签的其他要求。
>
> 如果我们使用学到的普通的js代码来编写此要求的代码的话，我们则需要使用getElementById方法，重复多此的设置和获取元素内容。代码显得十分的冗余和重复！
>
> 这时候我们就需要有像Java一样的封装思想来处理解决此问题。我们需要一个方法，此时需要传入一个参数id，将getElementById方法封装在方法中，通过判断得到元素内容是否为空来处理我们是设置元素文本内容还是获取元素文本内容！
>
> 如下是我创建的JavaScript File文件，代码是这样编写的：（此代码是模仿的jQuery的封装）

```javascript
/**
 * 获取指定id的元素对象
 * @param id
 */
function $(id) {
    var ele = document.getElementById(id);
    //给ele添加一个方法，方法名叫html，形参content
    ele.html = function (content) {
        //如果content不为空，就将content设置到ele对象中
        if (content != null) {
            element.innerHTML = content;
        } else {    //如果content为空，就获取ele的内容
            return element.innerHTML;
        }
    };
    return element;
}
```



### 二、jQuery语法

> jQuery 语法是通过`$()`核心函数选取 HTML 元素，并对选取的元素执行某些操作。
>
> **在实际开发中，jQuery是可以与js联用的，它大大提高了开发效率！但是记住的点是不要被两种语法混淆了！**
>
> **注意：** 美元符号等价于jQuery

#### 2.1 jQuery的普通语法

> 表示页面dom加载完毕，就执行，比onload事件要早，并行可以写多个。
>
> **注意：** 在这里`$(匿名函数) `等价于`$(document).ready(匿名函数)`	

> `$(selector).action()`的使用语法
>
> - 美元符号定义 jQuery
> - 选择符（selector）"查询"和"查找" HTML 元素
> - jQuery 的 action() 执行对元素的操作
>   - $(this).hide() - 隐藏当前元素
>   - $("p").hide() - 隐藏所有\<p>元素
>   - $("p.test").hide() - 隐藏所有 class="test" 的\<p>元素
>   - $("#test").hide() - 隐藏所有 id="test" 的元素

```javascript
<head>
    <title>test</title>
    <script src="js/jquery-3.2.1.min.js"></script>
    <script type="text/javascript">
        $(document).ready(function () {
            alert("这是jQuery的使用方式");
        });
        jQuery(document).ready(function () {
            alert("jQuery等价于$符号");
        });
        $(function () {
            alert("这是Jquery的简化使用，我们推荐使用这一种！");
        });
    </script>
</head>
```



#### 2.2 选择器

| 选择器分类/名称/语法                              | 描述                                                        |
| ------------------------------------------------- | ----------------------------------------------------------- |
| ***ID选择器***                                    |                                                             |
| $("#id");                                         | 选取id="id"的元素                                           |
| ***class选择器***                                 |                                                             |
| $(".className");                                  | 选取class="className"的元素                                 |
| ***标签选择器（元素选择器）***                    |                                                             |
| $("div");                                         | 选取标签名（元素名）为div的元素                             |
| ***通配符选择器***                                |                                                             |
| $("*");                                           | 选取页面文档所有元素                                        |
| ***层级选择器***                                  |                                                             |
| $("a b");                                         | a节点的所有后代节点b都被选中                                |
| $("a > b");                                       | a节点的所有子节点b都被选中                                  |
| $("a + b");                                       | a节点之后的第一个兄弟节点b                                  |
| $("a ~ b");                                       | a节点之后的所有兄弟节点b                                    |
| ***基本过滤选择器***                              |                                                             |
| $("tagName:first")                                | 第一个tagName元素                                           |
| $("tagName:last")                                 | 最后一个tagName元素                                         |
| $("tagName:eq(2)")                                | 索引为2的tagName元素，索引从0开始                           |
| $("tagName:gt(2)")                                | 索引大于2的tagName元素                                      |
| $("tagName:lt(2)")                                | 索引小于2的tagName元素                                      |
| $("tagName:odd")                                  | 索引为奇数的tagName元素                                     |
| $("tagName:even")                                 | 索引为偶数的tagName元素                                     |
| ***内容过滤选择器***                              |                                                             |
| $("tagName:contains('aaa')")                      | 文本内容包含"aaa"的tagName元素                              |
| $("tagName:empty")                                | 不包含子元素的tagName元素                                   |
| $("tagName:has(.one)")                            | 包含class为one的tagName元素                                 |
| ***子元素过滤选择器***                            |                                                             |
| $("tagName :nth-child(2)")                        | tagName元素下的第二个子元素（索引从1开始）                  |
| $("tagName :first-child")                         | tagName元素下的第一个子元素                                 |
| $("tagName :last-child")                          | tagName元素下的最后一个子元素                               |
| $("tagName :only-child")                          | tagName元素下的仅仅只有一个子元素，那么就选中这个子元素     |
| ***属性过滤选择器***                              |                                                             |
| $("tagName[id]")                                  | 选取含有属性id的tagName元素                                 |
| $("tagName[id='cc']")                             | 选取属性id值为"cc"的tagName元素                             |
| $("tagName[id!='cc']")                            | 选取属性id值不为"cc"的tagName元素                           |
| $("tagName[title^='cc']")                         | 选取属性id值以"cc"开头的tagName元素                         |
| $("tagName[title$='cc']")                         | 选取属性id值以"cc"结束的tagName元素                         |
| $("tagName[title*='cc']")                         | 选取属性id值包含"cc"的tagName元素                           |
| ***属性过滤选择器的多个联用***                    |                                                             |
| $("tagName\[title*='cc']\[name='ee'][id!='ff']"); | 选取属性title包含"cc"、id不为"ff"且class为"ee"的tagName元素 |

##### 2.2.1 标签选择器

> jQuery 标签选择器基于标签（元素）名选取元素。
>
> 在页面中选取所有 \<p> 元素：

```javascript
$ (function(){
  $("#btn").click(function(){
    $("p").hide();
  });
});
```

##### 2.2.2 id选择器

> jQuery #id 选择器通过 HTML 元素的 id 属性选取指定的元素。
> 页面中元素的 id 应该是唯一的，所以您要在页面中选取唯一的元素需要通过 #id 选择器。
> 通过 id 选取元素语法如下：

```javascript
$ (function(){
  $("#btn").click(function(){
    $("#test").hide();
  });
});
```

##### 2.2.3 class选择器

> jQuery 类选择器可以通过指定的 class 查找元素。
> 语法如下：

```javascript
$ (function(){
  $("#btn").click(function(){
    $(".test").hide();
  });
});
```

##### 2.2.4 通配符选择器

> jQuery 通配符选择器是通过 * 来默认选取所有元素的，可以对所有元素进行修饰。
>
> 语法如下：

```javascript
$ (function(){
  $("#btn").click(function(){
    $("*").hide();
  });
});
```

##### 3.1.5 层级选择器

> 层次选择器：从父子关系和兄弟关系来进行选择页面节点

***后代选择器：选择body内的所有div元素 - $("a b")***

```javascript
$("body div").css("background-color","pink");
```

***父子选择器：在body内选择子元素是div的 - $("a > b")***

```javascript
$("body > div").css("background-color","pink");
```

***同辈选择器：选择所有id为one的下一个兄弟div元素 - $("a + b")***

```javascript
$("#one + div").css("background-color","pink");
```

***后续同辈：选择id为two的元素后面的所有div兄弟元素 - $("a ~ b")***

```javascript
$("#one ~ div").css("background-color","pink");
```

##### 3.1.6 基本过滤选择器

> 过滤选择器：从位置的角度来对页面的标签进行过滤选择

```javascript
		//选择第一个DIV元素
		function fn1(){
			$("div:first").css("background-color","pink");
		}
		//选择最后一个div元素
		function fn2(){
			$("div:last").css("background-color","pink");
		}
		//选择class不为one的所有div元素 $('dom:not(.one)')
		function fn3(){
			$("div:not(.one)").css("background-color","pink");
		}
		//选择索引值为偶数的div元素 even:偶数 odd:奇数
		function fn4(){
			$("div:even").css("background-color","pink");
		}
		//选择索引值为奇数的div元素
		function fn5(){
			$("div:odd").css("background-color","pink");
		}
		//选择索引值等于3的元素
		function fn6(){
			$("div:eq(3)").css("background-color","pink");
		}
		//选择索引值大于3的元素
		function fn7(){
			$("div:gt(3)").css("background-color","pink");
		}
		//选择索引值小于3的元素
		function fn8(){
			$("div:lt(3)").css("background-color","pink");
		}
```

##### 3.1.7 内容过滤选择器

> 内容过滤选择器：节点值是否为空，节点上的文本中是否包含指定的字符串，子元素中的class值是否为指定的值

```javascript
		//选取含有文本"di"的div元素  $("tagName:contains('str')")
		function fn1(){
			$("div:contains('di')").css("background-color","pink");
		}
		//选取不包含子元素(或者文本元素)的div空元素. $("tagName:empty");
		function fn2(){
			$("div:empty").css("background-color","pink");
		}
		//选取含有class为mini元素 的div元素. $("tagName:has(.mini)")
		//1.选中的是DIV元素  2.子元素中的class值为mini
		function fn3(){
			$("div:has(.mini)").css("background-color","pink");
		}
```

##### 3.1.8 子元素过滤选择器

> 子元素过滤选择器：选择父元素下的子元素(第1个,最后1个,第几个子元素)

```javascript
		//选取class为one的div下的第2个子元素  
		function fn1(){
			$("div[class='one'] :nth-child(2)").css("background-color","pink");
		}
		//选取class为one的div下的第1个子元素
		function fn2(){
			// $("div[class='one'] :nth-child(1)").css("background-color","pink");
			$("div[class='one'] :first-child").css("background-color","pink");
		}
		//选取每个父元素下的最后一个子元素
		function fn3(){
			$("div :last-child").css("background-color","pink");
		}
		//如果父元素下的仅仅只有一个子元素,那么选中这个子元素  
		function fn4(){
			$("div :only-child").css("background-color","pink");
		}
```

##### 3.1.9 属性选择器

> 属性过滤选择器：从节点的属性来过滤筛选节点；有无属性、属性值、等于、不等于、包含、是开头、是结尾、多重过滤等

```javascript
		//选取含有属性title的div元素.  $("tagName[title]");
		function fn1(){
			$("div[title]").css("background-color","red");
		}
		//选取属性title值等于test的div元素. $("tagName[title='test']")
		function fn2(){
			$("div[title='test']").css("background-color","pink");
		}
		//选取属性title值不等于test的div元素. !=
		function fn3(){
			$("div[title!='test']").css("background-color","pink");
		}
		//选取属性title值以te开始 的div元素.  ^=
		function fn4(){
			$("div[title^='te']").css("background-color","pink");
		}
		//选取属性title值以est结束的div元素.  $=
		function fn5(){
			$("div[title$='est']").css("background-color","pink");
		}
		//选取属性title值含有es的div元素.     *=
		function fn6(){
			$("div[title*='es']").css("background-color","pink");
		}
		//组合属性选择器,首先选取有属性id的div元素，然后在结果中 选取属性title值 含有 es 的元素.
		function fn7(){
			$("div[id][title*='es']").css("background-color","pink");
		}
```



#### 2.3 jQuery事件

##### 2.3.1 什么是事件？

> 页面访问者的响应叫做事件。事件处理程序指的是当 HTML 中发生某些事件时所调用的方法。

| 鼠标事件              | 键盘事件 | 表单事件           | 文档/窗口事件 |
| --------------------- | -------- | ------------------ | ------------- |
| click（单击）         | keypress | submit（提交）     | load（加载）  |
| dblclick（双击）      | keydown  | change（内容改变） | resize        |
| mouseover（鼠标经过） | keyup    | focus（焦点）      | scroll        |
| mouseout（鼠标离开）  |          | blur               | unload        |



##### 2.3.2 事件语法

> 在 jQuery 中，大多数 DOM 事件都有一个等效的 jQuery 方法。
>
> 页面中指定一个点击事件：

```javascript
$("p").click();
```

> 也就是说，不传参数是点击，传参数是设置事件。
>
> 下一步是定义触发事件。您可以通过一个事件函数实现：

```javascript
$("p").click(function(){
    // 动作触发后执行的代码!!
});
```



##### 2.3.3 鼠标单击 click()

> 当按钮点击事件被触发时会调用一个函数。
> 该函数在用户点击 HTML 元素时执行。
> 在下面的实例中，当点击事件在某个 \<p> 元素上触发时，隐藏当前的 \<p> 元素：

```javascript
$("p").click(function(){
  $(this).hide();
});
```



##### 2.3.4 鼠标双击 dblclick()

> 当双击元素时，会发生 dblclick 事件。
> dblclick() 方法触发 dblclick 事件，或规定当发生 dblclick 事件时运行的函数：

```javascript
$("p").dblclick(function(){
  $(this).hide();
});
```



##### 2.3.5 鼠标经过 mouseover()

> 当鼠标指针穿过元素时，会发生 mouseover 事件。
> mouseover() 方法触发 mouseover 事件，或规定当发生 mouseover 事件时运行的函数：

```javascript
$("#p1").mouseover(function(){
    alert('您的鼠标移到了 id="p1" 的元素上!');
});
```



##### 2.3.6 鼠标离开 mouseout()

> 当鼠标指针离开元素时，会发生 mouseout 事件。
> mouseout() 方法触发 mouseout 事件，或规定当发生 mouseout 事件时运行的函数：

```javascript
$("#p1").mouseout(function(){
    alert("再见，您的鼠标离开了该段落。");
});
```



##### 2.3.7 光标悬停 hover()

> hover()方法用于模拟光标悬停事件。
> 当鼠标移动到元素上时，会触发指定的第一个函数(mouseover);当鼠标移出这个元素时，会触发指定的第二个函数(mouseout)。

```javascript
$("#p1").hover(
    function(){
        alert("你进入了 p1!");
    },
    function(){
        alert("拜拜! 现在你离开了 p1!");
    }
);
```



##### 2.3.8 鼠标移动元素上方并按键 mousedown()

> 当鼠标指针移动到元素上方，并按下鼠标按键时，会发生 mousedown 事件。
> mousedown() 方法触发 mousedown 事件，或规定当发生 mousedown 事件时运行的函数：

```javascript
$("#p1").mousedown(function(){
    alert("鼠标在该段落上按下！");
});
```



##### 2.3.9 在元素上松开鼠标按键 mouseup()

当在元素上松开鼠标按钮时，会发生 mouseup 事件。
mouseup() 方法触发 mouseup 事件，或规定当发生 mouseup 事件时运行的函数：

```javascript
$("#p1").mouseup(function(){
    alert("鼠标在段落上松开。");
});
```



##### 2.3.10 获取焦点 focus()

> 当元素获得焦点时，发生 focus 事件。
> 当通过鼠标点击选中元素或通过 tab 键定位到元素时，该元素就会获得焦点。
> focus() 方法触发 focus 事件，或规定当发生 focus 事件时运行的函数：

```javascript
$("input").focus(function(){
  $(this).css("background-color","#cccccc");
});
```



##### 2.3.11 失去焦点 blur()

> 当元素失去焦点时，发生 blur 事件。
> blur() 方法触发 blur 事件，或规定当发生 blur 事件时运行的函数：

```javascript
$("input").blur(function(){
  $(this).css("background-color","#ffffff");
});
```



#### 三、jQuery 效果

#### 3.1 隐藏与显示

##### 3.1.1 隐藏 hide()

> 您可以使用 hide() 将元素隐藏

```javascript
$("#hide").click(function(){
  $("p").hide();
});
```



##### 3.1.2 显示 show()

> 您可以使用show()将元素显示

```javascript
$("#show").click(function(){
  $("p").show();
});
```



##### 3.1.3 切换隐藏与显示 toggle()

> 通过 jQuery，您可以使用 toggle() 方法来切换 hide() 和 show() 方法。
> 显示被隐藏的元素，并隐藏已显示的元素：

```javascript
$("button").click(function(){
  $("p").toggle();
});
```

> 事实上，这三种方法都是有两个参数的：
>
> - 可选的 speed 参数规定隐藏/显示的速度，可以取以下值："slow"、"fast" 或毫秒。
> - 可选的 callback 参数是隐藏或显示完成后所执行的函数名称。

```javascript
$(selector).hide(speed,callback);
$(selector).show(speed,callback);
$(selector).toggle(speed,callback);
```



#### 3.2 淡入淡出

##### 3.2.1 淡入淡出的方法分类

> 通过 jQuery，您可以实现元素的淡入淡出效果。
> jQuery 拥有下面四种 fade 方法：
>
> - fadeIn()
> - fadeOut()
> - fadeToggle()
> - fadeTo()



##### 3.2.2 jQuery fadeIn() 方法

> jQuery fadeIn() 用于淡入已隐藏的元素。

```javascript
$(selector).fadeIn(speed,callback);
```

> 可选的 speed 参数规定效果的时长。它可以取以下值："slow"、"fast" 或毫秒。.
> 可选的 callback 参数是 fading 完成后所执行的函数名称。
> 下面的例子演示了带有不同参数的 fadeIn() 方法：

```javascript
$("button").click(function(){
  $("#div1").fadeIn();
  $("#div2").fadeIn("slow");
  $("#div3").fadeIn(3000);
});
```



##### 3.2.3 jQuery fadeOut() 方法

> jQuery fadeOut() 方法用于淡出可见元素。

```javascript
$(selector).fadeOut(speed,callback);
```

> 可选的 speed 参数规定效果的时长。它可以取以下值："slow"、"fast" 或毫秒。
> 可选的 callback 参数是 fading 完成后所执行的函数名称。
> 下面的例子演示了带有不同参数的 fadeOut() 方法：

```javascript
$("button").click(function(){
  $("#div1").fadeOut();
  $("#div2").fadeOut("slow");
  $("#div3").fadeOut(3000);
});
```



##### 3.2.4 jQuery fadeToggle() 方法

> jQuery fadeToggle() 方法可以在 fadeIn() 与 fadeOut() 方法之间进行切换。
> 如果元素已淡出，则 fadeToggle() 会向元素添加淡入效果。
> 如果元素已淡入，则 fadeToggle() 会向元素添加淡出效果。

```javascript
$(selector).fadeToggle(speed,callback);
```

> 可选的 speed 参数规定效果的时长。它可以取以下值："slow"、"fast" 或毫秒。
> 可选的 callback 参数是 fading 完成后所执行的函数名称。
> 下面的例子演示了带有不同参数的 fadeToggle() 方法：

```javascript
$("button").click(function(){
  $("#div1").fadeToggle();
  $("#div2").fadeToggle("slow");
  $("#div3").fadeToggle(3000);
});
```



##### 3.2.5 jQuery fadeTo() 方法

> jQuery fadeTo() 方法允许渐变为给定的透明度（值介于 0 与 1 之间）。0透明  1不透明

```javascript
$(selector).fadeTo(speed,opacity,callback);
```

> 必需的 speed 参数规定效果的时长。它可以取以下值："slow"、"fast" 或毫秒。
> fadeTo() 方法中必需的 opacity 参数将淡入淡出效果设置为给定的不透明度（值介于 0 与 1 之间）。
> 可选的 callback 参数是该函数完成后所执行的函数名称。
> 下面的例子演示了带有不同参数的 fadeTo() 方法：

```javascript
$("button").click(function(){
  $("#div1").fadeTo("slow",0.15);
  $("#div2").fadeTo("slow",0.4);
  $("#div3").fadeTo("slow",0.7);
});
```



#### 3.3 滑动

> 通过 jQuery，您可以在元素上创建滑动效果。
> jQuery 拥有以下滑动方法：
>
> - slideDown()
> - slideUp()
> - slideToggle()



##### 3.3.1 slideDown() 方法

> jQuery slideDown() 方法用于向下滑动元素。

```javascript
$(selector).slideDown(speed,callback);
```

> 可选的 speed 参数规定效果的时长。它可以取以下值："slow"、"fast" 或毫秒。
>
> 可选的 callback 参数是滑动完成后所执行的函数名称。
>
> 下面的例子演示了 slideDown() 方法：

```javascript
$("#flip").click(function(){
  $("#panel").slideDown();
});
```



##### 3.3.2 slideUp() 方法

> jQuery slideUp() 方法用于向上滑动元素。

```javascript
$(selector).slideUp(speed,callback);
```

> 可选的 speed 参数规定效果的时长。它可以取以下值："slow"、"fast" 或毫秒。
>
> 可选的 callback 参数是滑动完成后所执行的函数名称。
>
> 下面的例子演示了 slideUp() 方法：

```javascript
$("#flip").click(function(){
  $("#panel").slideUp();
});
```

```javascript
<script type="text/javascript">
$(document).ready(function(){
  $("#btn1").click(function(){
  $("p").slideUp(1000);
  });
  $("#btn2").click(function(){
  $("p").slideDown(1000);
  });
});
</script>
```



##### 3.3.3 slideToggle() 方法

> jQuery slideToggle() 方法可以在 slideDown() 与 slideUp() 方法之间进行切换。
>
> 如果元素向下滑动，则 slideToggle() 可向上滑动它们。
>
> 如果元素向上滑动，则 slideToggle() 可向下滑动它们。

```javascript
$(selector).slideToggle(speed,callback);
```

> 可选的 speed 参数规定效果的时长。它可以取以下值："slow"、"fast" 或毫秒。
>
> 可选的 callback 参数是滑动完成后所执行的函数名称。
>
> 下面的例子演示了 slideToggle() 方法：

```javascript
$("#flip").click(function(){
  $("#panel").slideToggle();
});
```



#### 3.4 链式编程

> 直到现在，我们都是一次写一条 jQuery 语句（一条接着另一条）。
>
> 不过，有一种名为链接（chaining）的技术，允许我们在相同的元素上运行多条 jQuery 命令，一条接着另一条。
>
> **提示：** 这样的话，浏览器就不必多次查找相同的元素。
>
> 如需链接一个动作，您只需简单地把该动作追加到之前的动作上。
>
> 下面的例子把 css()、slideUp() 和 slideDown() 链接在一起。"p1" 元素首先会变为红色，然后向上滑动，再然后向下滑动：

```javascript
$("#p1").css("color","red").slideUp(2000).slideDown(2000);
```

> 如果需要，我们也可以添加多个方法调用。
>
> **提示：**当进行链接时，代码行会变得很差。不过，jQuery 语法不是很严格；您可以按照希望的格式来写，包含换行和缩进。
>
> 如下书写也可以很好地运行：

```javascript
$("#p1").css("color","red")
  .slideUp(2000)
  .slideDown(2000);
```



### 四、 jQuery HTML DOM操作

#### 4.1 获取

> jQuery 拥有可操作 HTML 元素和属性的强大方法。
>
> jQuery 提供一系列与 DOM 相关的方法，这使访问和操作元素和属性变得很容易。
>
> DOM 对象和 jQuery 对象的区别：
>
> - var box1 = document.getElementById("box");——DOM
> - var box2 = $("#box");——jQuery
> - DOM 操作的是 JavaScript 原生对象
> - jQuery 操作的是自己封装的对象,当中包含了原生对象
> - **注意：** 只有 jQuery 对象才可以操作 jQuery 的函数

***jQuery对象与js对象互转***

```javascript
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>jquery对象和js对象</title>
    <script src="${pageContext.request.contextPath}/js/jquery-3.2.1.min.js"></script>
    <script type="text/javascript">
        /**
         * 将js对象转化为jQuery对象
         */
        function fn1() {
            //获取js对象
            var jsObject = document.getElementById("div1");
            //将js对象转化为jQuery对象
            var jqObject = $(jsObject);
            //调用jQuery对象的属性和方法
            jqObject.html("my name is div1");
        }

        /**
         * 将jQuery对象转换为js对象
         */
        function fn2() {
            //获取jQuery对象
            var jqObject = $("#div1");
            //将jQuery对象转换为js对象
            //方法1:
            // var jsObject = jqObject.get(0);
            //方法2:
            var jsObject = jqObject[0];
            //调用js对象的属性和方法
            jsObject.innerHTML = "my name is div1";
        }
    </script>
</head>
<body>
<div id="div1">
    这是一个div
</div>
<button onclick="fn1()">js转jquery</button>
<button onclick="fn2()">jquery转js</button>
</body>
</html>
```



##### 4.1.1 获得内容 text()、html() 以及 val()

> 三个简单实用的用于 DOM 操作的 jQuery 方法：
>
> - text() - 设置或返回所选元素的文本内容，等价于innerText
> - html() - 设置或返回所选元素的内容（包括 HTML 标记），等价于innerHTML
> - val() - 设置或返回表单字段的值，等价于value属性

> 下面的例子演示如何通过 jQuery text() 和 html() 方法来获得内容：

```javascript
$("#btn1").click(function(){
  alert("Text: " + $("#test").text());
});
$("#btn2").click(function(){
  alert("HTML: " + $("#test").html());
});
```

> 下面的例子演示如何通过 jQuery val() 方法获得输入字段的值：

```javascript
$("#btn1").click(function(){
  alert("值为: " + $("#test").val());
});
```



##### 4.1.2 获取属性 attr()、prop()

> jQuery attr() 方法用于获取属性值。
>
> 下面的例子演示如何获得链接中 href 属性的值：

```javascript
$("button").click(function(){
  alert($("#a1").attr("href"));
});
```



#### 4.2 设置

##### 4.2.1 设置内容 text()、html() 以及 val()

> 我们将使用前一章中的三个相同的方法来设置内容：
>
> - text() - 设置或返回所选元素的文本内容
> - html() - 设置或返回所选元素的内容（解析HTML标签）
> - val() - 设置或返回表单字段的值

> 下面的例子演示如何通过 text()、html() 以及 val() 方法来设置内容：

```javascript
$("#btn1").click(function(){
    $("#test1").text("Hello world!");
});
$("#btn2").click(function(){
    $("#test2").html("<b>Hello world!</b>");
});
$("#btn3").click(function(){
    $("#test3").val("Hello world!");
});
```



##### 4.2.2 设置属性 attr()

> jQuery attr() 方法也用于设置/改变属性值。
>
> 下面的例子演示如何改变（设置）文本中 color属性的值：

```javascript
$("button").click(function(){
  $("#font1").attr("color","red");
});
```



##### 4.2.3 移除属性 removeAttr()

> jQuery removeAttr() 方法用于移除设置/改变后的属性值。
>
> 下面的例子演示移除上个例子中设置在文本中的color属性的值：

```javascript
$("button").click(function(){
   $("#font1").removeAttr("color"); 
});
```



#### 4.3 添加元素

##### 4.3.1 添加新的 HTML 内容

> 我们将学习用于添加新内容的四个 jQuery 方法：
>
> - append() - 在被选元素的结尾插入内容
> - prepend() - 在被选元素的开头插入内容
> - after() - 在被选元素之后插入内容
> - before() - 在被选元素之前插入内容



##### 4.3.2 jQuery append() 方法

> jQuery append() 方法在被选元素的结尾插入内容。

```javascript
$("p").append("追加文本");
```



##### 4.3.3 jQuery prepend() 方法

> jQuery prepend() 方法在被选元素的开头插入内容。

```javascript
$("p").prepend("在开头追加文本");
```

> 通过 append() 和 prepend() 方法添加若干新元素
>
> 在上面的例子中，我们只在被选元素的开头/结尾插入文本/HTML。
>
> 不过，append() 和 prepend() 方法能够通过参数接收无限数量的新元素。可以通过 jQuery 来生成文本/HTML（就像上面的例子那样），或者通过 JavaScript 代码和 DOM 元素。
>
> 在下面的例子中，我们创建若干个新元素。这些元素可以通过 text/HTML、jQuery 或者 JavaScript/DOM 来创建。然后我们通过 append() 方法把这些新元素追加到文本中（对 prepend() 同样有效）：

```javascript
function appendText() {
    var txt1="<p>文本。</p>";                 // 使用 HTML 标签创建文本
    var txt2=$("<p></p>").text("文本。");     // 使用 jQuery 创建文本
    var txt3=document.createElement("p");
    txt3.innerHTML="文本。";                  // 使用 DOM 创建文本 text with DOM
    $("body").append(txt1,txt2,txt3);        // 追加新元素
}
```



##### 4.3.4 jQuery after() 和 before() 方法

> jQuery after() 方法在被选元素之后插入内容。
>
> jQuery before() 方法在被选元素之前插入内容。

```javascript
$("img").after("在后面添加文本");
 
$("img").before("在前面添加文本");
```

> 通过 after() 和 before() 方法添加若干新元素
>
> after() 和 before() 方法能够通过参数接收无限数量的新元素。可以通过 text/HTML、jQuery 或者 JavaScript/DOM 来创建新元素。
>
> 在下面的例子中，我们创建若干新元素。这些元素可以通过 text/HTML、jQuery 或者 JavaScript/DOM 来创建。然后我们通过 after() 方法把这些新元素插到文本中（对 before() 同样有效）：

```javascript
function afterText()
{
    var txt1="<b>I </b>";                    // 使用 HTML 创建元素
    var txt2=$("<i></i>").text("love ");     // 使用 jQuery 创建元素
    var txt3=document.createElement("big");  // 使用 DOM 创建元素
    txt3.innerHTML="jQuery!";
    $("img").after(txt1,txt2,txt3);          // 在图片后添加文本
}
```



#### 4.4 删除元素

> 删除元素/内容
>
> 如需删除元素和内容，一般可使用以下两个 jQuery 方法：
>
> - remove() - 删除被选元素（及其子元素）
> - empty() - 从被选元素中删除子元素



##### 4.4.1 jQuery remove() 方法

> jQuery remove() 方法删除被选元素及其子元素。

```javascript
$("#div1").remove();
```



##### 4.4.2 jQuery empty() 方法

> jQuery empty() 方法删除被选元素的子元素。

```javascript
$("#div1").empty();
```



##### 4.4.3 过滤被删除的元素

> jQuery remove() 方法也可接受一个参数，允许您对被删元素进行过滤。
>
> 该参数可以是任何 jQuery 选择器的语法。

> 下面的例子删除 class="italic" 的所有 \<p> 元素：

```javascript
$("p").remove(".italic");
```



#### 4.5jQuery元素遍历

```javascript
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>jquery遍历</title>
    <script src="js/jquery-3.2.1.min.js"></script>
    <script>
        //js方式
        function fn1() {
            var lis = document.getElementsByTagName("li");
            for (var i = 0; i < lis.length; i++) {
                var li = lis[i];
                console.log(li.innerHTML);
            }
        }

        //jquery方式一
        function fn2() {
            var lis = $("ul > li");
            lis.each(function (index,element) {
                //index:当前元素的索引
                //element:当前元素(js对象)
                console.log("index : " + index);
                console.log("text : " + element.innerHTML);
                console.log("text : " + $(element).html());
            });
        }

        //jquery方式一
        function fn3() {
            var lis = $("ul > li");
            lis.each(function (index) {
                console.log("index : " + index);
                //this:内置对象,js对象，当前元素
                console.log(this.innerHTML);
                console.log($(this).html());
            })
        }

        //jquery方式二
        function fn4() {
            var lis = $("ul > li");
            $.each(lis,function (index,element) {
                console.log(index);
                console.log(element.innerHTML);
                console.log(this.innerHTML);
            })
        }
    </script>
</head>
<body>
<ul>
    <li>aaa</li>
    <li>bbb</li>
    <li>ccc</li>
</ul>
<button onclick="fn1()">获取1</button>
<button onclick="fn2()">获取2</button>
<button onclick="fn3()">获取3</button>
<button onclick="fn4()">获取4</button>
</body>
</html>

```



#### 4.6 CSS操作

##### 4.6.1 jQuery操作CSS方法

> jQuery 拥有若干进行 CSS 操作的方法。我们将学习下面这些：
>
> - addClass() - 向被选元素添加一个或多个类
> - removeClass() - 从被选元素删除一个或多个类
> - toggleClass() - 对被选元素进行添加/删除类的切换操作

> 实例样式表
>
> 下面的样式表将用于本页的所有例子：

```css
.important
{
        font-weight:bold;
        font-size:xx-large;
}
 
.blue
{
        color:blue;
}
```



##### 4.6.2 jQuery addClass() 方法

> 下面的例子展示如何向不同的元素添加 class 属性。当然，在添加类时，您也可以选取多个元素：

```javascript
$("button").click(function(){
  $("h1,h2,p").addClass("blue");
  $("div").addClass("important");
});
```

> 您也可以在 addClass() 方法中规定多个类：

```javascript
$("button").click(function(){
  $("body div:first").addClass("important blue");
});
```



##### 4.6.3 jQuery removeClass() 方法

> 下面的例子演示如何在不同的元素中删除指定的 class 属性：

```javascript
$("button").click(function(){
  $("h1,h2,p").removeClass("blue");
});
```



##### 4.6.4 jQuery toggleClass() 方法

> 下面的例子将展示如何使用 jQuery toggleClass() 方法。该方法对被选元素进行添加/删除类的切换操作：

```javascript
$("button").click(function(){
  $("h1,h2,p").toggleClass("blue");
});
```



#### 4.7 CSS()方法

##### 4.7.1 jQuery css() 方法

> css() 方法设置或返回被选元素的一个或多个样式属性。



##### 4.7.2 返回 CSS 属性

> 如需返回指定的 CSS 属性的值，请使用如下语法：

```javascript
css("propertyname");
```

> 下面的例子将返回首个匹配元素的 background-color 值：

```javascript
$("p").css("background-color");
```



##### 4.7.3 设置 CSS 属性

> 如需设置指定的 CSS 属性，请使用如下语法：

```javascript
css("propertyname","value");
```

> 下面的例子将为所有匹配元素设置 background-color 值：

```javascript
$("p").css("background-color","yellow");
```



##### 4.7.4 设置多个 CSS 属性

> 如需设置多个 CSS 属性，请使用如下语法：

```javascript
css({"propertyname":"value","propertyname":"value",...});
```

> 下面的例子将为所有匹配元素设置 background-color 和 font-size：

```javascript
$("p").css({"background-color":"yellow","font-size":"200%"});
```



#### 五、jQuery节点关系

> 通过 jQuery 节点关系，您能够从被选（当前的）元素开始，轻松地在家族树中向上移动（祖先），向下移动（子孙），水平移动（同胞）。这种移动被称为对 DOM 进行查找。



##### 5.1 jQuery parent() 方法（祖先）

> parent() 方法返回被选元素的直接父元素。
>
> 该方法只会向上一级对 DOM 树进行遍历。

> 下面的例子返回每个 \<span> 元素的的直接父元素：

```javascript
$(document).ready(function(){
  $("span").parent();
});
```



##### 5.2 jQuery children() 方法（子孙）

> children() 方法返回被选元素的所有直接子元素。
>
> 该方法只会向下一级对 DOM 树进行遍历。

> 下面的例子返回每个 \<div> 元素的所有直接子元素：

```javascript
$(document).ready(function(){
  $("div").children();
});
```

> 也可以使用可选参数来过滤对子元素的搜索。

> 下面的例子返回类名为 "1" 的所有 \<p> 元素，并且它们是 \<div> 的直接子元素：

```javascript
$(document).ready(function(){
  $("div").children("p.1");
});
```



##### 5.3 jQuery find() 方法

> find() 方法返回被选元素的后代元素，一路向下直到最后一个后代。

> 下面的例子返回属于 \<div> 后代的所有 \<span> 元素：

```javascript
$(document).ready(function(){
  $("div").find("span");
});
```

> 下面的例子返回 \<div> 的所有后代：

```javascript
$(document).ready(function(){
  $("div").find("*");
});
```



##### 5.4 jQuery siblings() 方法（同胞）

> siblings() 方法返回被选元素的所有同胞元素。

> 下面的例子返回 \<h2> 的所有同胞元素：

```javascript
$(document).ready(function(){
  $("h2").siblings();
});
```

> 也可以使用可选参数来过滤对同胞元素的搜索。

> 下面的例子返回属于 \<h2> 的同胞元素的所有 \<p> 元素：

```javascript
$(document).ready(function(){
  $("h2").siblings("p");
});
```



##### 5.5 jQuery next() 方法

> next() 方法返回被选元素的下一个同胞元素。该方法只返回一个元素。

> 下面的例子返回 \<h2> 的下一个同胞元素：

```javascript
$(document).ready(function(){
  $("h2").next();
});
```



###### 案例1 ：全选 |全不选、反向全选

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <script src="js/jquery-1.8.3.js"></script>
</head>
<body>
    <table>
        <tr>
            <th><input type="checkbox" id="checkAll" /> </th>
            <th>学号</th>
            <th>名字</th>
        </tr>
        <tr>
            <td><input type="checkbox" class="check"/> </td>
            <td>1001</td>
            <td>朱保生帅</td>
        </tr>
        <tr>
            <td><input type="checkbox" class="check" /> </td>
            <td>1002</td>
            <td>朱保生太帅</td>
        </tr>
        <tr>
            <td><input type="checkbox" class="check"/> </td>
            <td>1003</td>
            <td>朱保生没法再帅了！</td>
        </tr>
    </table>
<script type="text/javascript">
    $(function () {
        $("#checkAll").click(function () {
           var result = $("#checkAll").prop("checked");
           if(result == true){
                $(".check").prop("checked",true);
           }else{
               $(".check").prop("checked",false);
           }
        })
  			//获取多个复选框
        var cs = $(".check");

        $(".check").click(function () {
            var count = 0;//累计选中的个数
            var result = $(this).prop("checked");//获取当前点击的复选框
           for(var i = 0;i<cs.length;i++){
               //通过jquery选择数组里每一个input元素
                if($(cs[i]).prop("checked") == true){
                    count++;//累计
                    if(count==cs.length){//如果累计的个数和总数相等
                        $("#checkAll").prop("checked",true);
                    }else{
                        $("#checkAll").prop("checked",false);
                    }
                }
           }
        })
    })
//反向全选	解决方案2:用each迭代器
        //1.先拿到多个复选框
        var cs = $(".check");

        $(".check").click(function () {
            var count = 0;
            $(cs).each(function (i,v) {
                if($(cs[i]).prop("checked")==true){
                    count++;
                    
                    if(count==cs.length){
                        $("#checkAll").prop("checked",true);
                    }else{
                        $("#checkAll").prop("checked",false);
                    }
                }
            })
        })
</script>
</body>
</html>
```



###### 案例2 ：两个 select框，把一个select框中的内容移动到另一个select

```html
<!DOCTYPE html>
<html>

	<head>
		<meta charset="UTF-8">
		<title>移动元素</title>
		<script type="text/javascript" src="js/jquery-1.12.4.js"></script>
	</head>

	<body>

		<select id="leftselect" size="10"  style=" width: 100px;">
			<option value="1">北京</option>
			<option value="2">上海</option>
			<option value="3">南京</option>
			<option value="4">广州</option>
			<option value="5">杭州</option>
			<option value="6">深圳</option>
		</select>
	
		<div style="display: inline-block; vertical-align: top; margin-top: 20px;">
			
			<input type="button" value="右移>>" id="toRight" /><br/>
			<input type="button" value="左移<<" id="toLeft"/><br/>
			<input type="button" value="全部右移" id="toRightAll" /><br/>
			<input type="button" value="全部左移" id="toLeftAll"/>
			
		</div>
		<select id="rightselect" size="10" multiple="multiple" style=" width: 100px;">
			
		</select>
		
		<script type="text/javascript">
			$(function () {
            var leftselect=document.getElementById("leftselect");
            var rightselect=document.getElementById("rightselect");
            $("#toRight").click(function () {
                 $("#rightselect").append(leftselect.options[leftselect.selectedIndex]);
            });
            $("#toLeft").click(function () {
                $("#leftselect").append(rightselect.options[rightselect.selectedIndex]);
            });
            $("#toRightAll").click(function () {
                $("#rightselect").append(leftselect.options);
            });
            $("#toLeftAll").click(function () {
                $("#leftselect").append(rightselect.options);

            });
        })
		</script>
	</body>

</html>
```

###### 案例演示3:省市级联

```javascript
  <select id="prov">
        <option value="0">--请选择--</option>

    </select>
    <select id="city">
        <option value="0">--请选择--</option>

    </select>
<script>
        $(function () {
            var arr = new Array();
            arr["河北省"]=["保定","石家庄","邯郸","张家口","廊坊","秦皇岛"];
            arr["山东省"]=["济南","青岛","烟台","泰安"];
            arr["山西省"]=["太原","吕梁","大同","运城"];
            arr["河南省"]=["郑州","开封","驻马店","漯河","焦作"];
            arr["四川省"]=["成都","绵阳","乐山"];

            for(var key in arr){
                $("#prov").append("<option value='"+key+"'>"+key+"</option>");
            }

            $("#prov").change(function () {

                var v= this.options[this.selectedIndex].value;
                var cityarr=arr[v];

                //清空
                $("#city").html("<option value=\"0\">--请选择--</option>");

                $(cityarr).each(function (i,n) {
                    $("#city").append("<option value='"+n+"'>"+n+"</option>");
                })
            });

        })
        
</script>
```



### 六、jQuery noConflict方法

#### 6.1 jQuery 和其他 JavaScript 框架

> 正如我们已经了解到的，jQuery 使用 $ 符号作为 jQuery 的简写。
>
> 如果其他 JavaScript 框架也使用 $ 符号作为简写怎么办？
>
> 其他一些 JavaScript 框架包括：MooTools、Backbone、Sammy、Cappuccino、Knockout、JavaScript MVC、Google Web Toolkit、Google Closure、Ember、Batman 以及 Ext JS。
>
> 其中某些框架也使用 $ 符号作为简写（就像 jQuery），如果您在用的两种不同的框架正在使用相同的简写符号，有可能导致脚本停止运行。
>
> jQuery 的团队考虑到了这个问题，并实现了 noConflict() 方法。



#### 6.2 jQuery noConflict() 方法

> noConflict() 方法会释放对 $ 标识符的控制，这样其他脚本就可以使用它了。
>
> 当然，您仍然可以通过全名替代简写的方式来使用 jQuery：

```javascript
$.noConflict();
jQuery(document).ready(function(){
  jQuery("button").click(function(){
    jQuery("p").text("jQuery 仍然在工作!");
  });
});
```

> 您也可以创建自己的简写。noConflict() 可返回对 jQuery 的引用，您可以把它存入变量，以供稍后使用。请看这个例子：

```javascript
var jq = $.noConflict();
jq(document).ready(function(){
  jq("button").click(function(){
    jq("p").text("jQuery 仍然在工作!");
  });
});
```

> 如果你的 jQuery 代码块使用 $   简写，并且您不愿意改变这个快捷方式，那么您可以把   $ 符号作为变量传递给 ready 方法。这样就可以在函数内使用 $ 符号了 - 而在函数外，依旧不得不使用 "jQuery"：

```javascript
$.noConflict();
jQuery(document).ready(function($){
  $("button").click(function(){
    $("p").text("jQuery 仍然在工作!");
  });
});
```



### 七、jQuery Ajax

#### 7.1 重温Ajax介绍

> AJAX = 异步 JavaScript 和 XML（Asynchronous JavaScript and XML）。
>
> 简短地说，在不重载整个网页的情况下，AJAX 通过后台加载数据，并在网页上进行显示。



#### 7.2 ajax()方法

> jQuery 底层 Ajax 实现。简单易用的高层实现get和post方法 等。`$.ajax()` 返回其创建的 XMLHttpRequest 
> 对象。大多数情况下你无需直接操作该函数，除非你需要操作不常用的选项，以获得更多的灵活性。 



#### 7.3 jQuery Ajax参数

**注意：常用的参数已用黑色斜体渲染，以便查阅！** 

> - ***contentType***：(默认: "application/x-www-form-urlencoded") 发送信息至服务器时内容编码类型。默认值适合大多数情况。
> - ***data***：发送到服务器的数据。String类型，必须为 Key/Value 格式。
> - ***dataType***：预期服务器返回的数据类型。如果不指定，jQuery 将自动根据 HTTP 包 MIME 信息来智能判断。（dataType有以下几种类型：）
>   - "xml": 返回 XML 文档，可用 jQuery 处理。
>   - "html"：返回纯文本 HTML 信息；包含的script标签会在插入dom时执行。
>   - "script"：返回纯文本 JavaScript 代码。不会自动缓存结果。除非设置了"cache"参数。注意：在远程请求时(不在同一个域下)，所有POST请求都将转为GET请求。(因为将使用DOM的script标签来加载)
>   - ***"json"***：返回 JSON 数据 。
>   - "jsonp":  JSONP 格式。使用 JSONP 形式调用函数时，如 "myurl?callback=?" jQuery 将自动替换 ? 为正确的函数名，以执行回调函数。
>   - "text": 返回纯文本字符串。
> - ***success***：请求成功后的回调函数。参数：由服务器返回，并根据dataType参数进行处理后的数据；描述状态的字符串。
> - ***type***：(默认："GET") 请求方式 ("POST" 或 "GET")， 默认为 "GET"。注意：其它 HTTP 请求方法，如 PUT 和 DELETE 也可以使用，但仅部分浏览器支持。
> - ***url***：(默认：当前页地址) 发送请求的地址。
> - async：默认设置下，所有请求均为异步请求。如果需要发送同步请求，请将此选项设置为 false。
> - complete(XHR, TS)：请求完成，回调的函数。
> - error：请求失败时调用此函数。
> - timeout：设置超时时间

```javascript
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>jQuery ajax</title>

    <%--
        async: 默认设置下，所有请求均为异步请求。如果需要发送同步请求，请将此选项设置为 false。
        complete(XHR, TS) ： 请求完成，回调的函数
        contentType ：默认值: "application/x-www-form-urlencoded" (属性名=值)。设置Content-Type
        data : String，必须为 Key/Value 格式。
        dataType ： 预期服务器返回的数据类型(html,xml,json,jasonp,script,text)。
        error ： 请求失败时调用此函数。
        success： 请求成功后的回调函数。
        timeout：超时时间
        type: 请求方式
        url：请求路径
    --%>

    <script src="js/jquery-3.2.1.min.js"></script>
    <script>

        function fn1() {
            /**
             * ajax参数设置使用
             */
            $.ajax({
                async: true,
                type: "get",
                contentType: "application/x-www-form-urlencoded",
                url: "${pageContext.request.contextPath}/demo",
                data: {
                    "username": "root",
                    "password": "root123"
                },
                success: function (data) {
                    //在此回调函数中编写处理代码
                },
                error: function () {

                },
                dataType: "json",
                timeout: "10000",
            });

            /**
             * ajax常用参数
             */
            $.ajax({
                type: "post",
                url: "${pageContext.request.contextPath}/demo",
                data: {
                    "username": "root",
                    "password": "root123"
                },
                success: function (data) {
                    //在此回调函数中编写处理代码
                },
                dataType: "json",
            });
        }
    </script>
</head>
<body>
<button onclick="fn1()">ajax请求</button>
</body>
</html>
```



#### 7.4 get和post方法

##### 7.4.1 get方法

> `$.get()` 方法通过 HTTP GET 请求从服务器上请求数据。

> 语法：`$.get(url,data,callback,type);`

```javascript
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>get请求</title>
    <script src="js/jquery-3.2.1.min.js"></script>
</head>
<body>
<script type="text/javascript">
    /**
     * jQuery Ajax步骤
     */
    function fn1() {
    	//请求地址,发送到服务器的数据(请求正文),回调函数,预期服务器返回的数据类型
        //$.get(url,data,callback,type);
    
        var url = "${pageContext.request.contextPath}/demo";
        var data = {"username": "ziph", "password": "123456"}
        /**
         * type=json,get方法内部就会自动将服务器返回的json字符串解析成js对象
         * @param data 服务器响应正文（js对象）
         */
        var callback = function (data) {
            //在回调函数内编写处理代码
        };
        var type = "json";
        $.get(url, data, callback, type);
    }

    /**
     * jQuery Ajax步骤整合版
     */
    function fn2() {
        $.get("${pageContext.request.contextPath}/demo",
            {
                "username": "ziph",
                "password": "123456"
            }, function (data) {
                //在回调函数内编写处理代码
            }, "json");
    }
</script>
</body>
</html>
```



##### 7.4.2 post方法

> `$.post()` 方法通过 HTTP POST 请求从服务器上请求数据。

```javascript
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>post请求</title>
    <script src="js/jquery-3.2.1.min.js"></script>
</head>
<body>
<script type="text/javascript">
    /**
     * post请求
     */
    function fn1() {
        //$.post(url,data,callback,type);
        $.post("${pageContext.request.contextPath}/demo",
            {
                "username": "ziph",
                "password": "123456"
            }, function (data) {
                //在此回调函数中编写处理代码
            }, "json");
    }
</script>
</body>
</html>
```



#### 7.5 注册案例

> 需求：在页面中提供用户名、密码、注册按钮。加入数据库校验，需要注册的用户名是否在数据库中存在，如果存在则提示“用户名不可用”并控制注册按钮不可以点击注册，如果不存在则提示“用户名可用”并控制注册按钮可以点击注册，注册成功后提示注册成功（因为案例内容不多比较小，注册成功后没有将表单数据储存数据库！）。



###### c3p0.properties

```java
c3p0.driverClass=com.mysql.jdbc.Driver
c3p0.jdbcUrl=jdbc:mysql://localhost:3306/temp
c3p0.user=root
c3p0.password=123456
```



###### User实体类

```java
package com.mylifes1110.java.bean;

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



###### CheckUsernameServlet检查注册用户名是否存在

```java
package com.mylifes1110.java.controller;

import java.io.IOException;

import java.sql.SQLException;

import java.util.HashMap;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.mylifes1110.java.service.UserService;
import com.mylifes1110.java.service.impl.UserServiceImpl;
import com.mylifes1110.java.utils.JSONUtils;

@WebServlet(
    name  = "CheckUsernameServlet",
    value = "/checkUsername"
)
public class CheckUsernameServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        doPost(request, response);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        request.setCharacterEncoding("utf-8");

        String      username    = request.getParameter("username");
        UserService userService = new UserServiceImpl();

        try {
            boolean                 flag = userService.checkUsername(username);
            String                  msg  = flag
                                           ? "用户名可用！"
                                           : "用户名存在！";
            HashMap<String, Object> map  = new HashMap<>();

            map.put("flag", flag);
            map.put("msg", msg);
            JSONUtils.writeJsonStr(response, map);
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
```



###### RegisterServlet提示注册成功

```java
package com.mylifes1110.java.controller;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet(
    name  = "RegisterServlet",
    value = "/register"
)
public class RegisterServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        doPost(request, response);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html; charset=UTF-8");
        response.getWriter().println("恭喜你注册成功！");
    }
}
```



###### Dao层数据库访问

```java
package com.mylifes1110.java.dao;

import com.mylifes1110.java.bean.User;

import java.sql.SQLException;

public interface UserDao {
    User checkUsername(String username) throws SQLException;
}
```

```java
package com.mylifes1110.java.dao.impl;

import java.sql.SQLException;

import org.apache.commons.dbutils.QueryRunner;
import org.apache.commons.dbutils.handlers.BeanHandler;

import com.mylifes1110.java.bean.User;
import com.mylifes1110.java.dao.UserDao;
import com.mylifes1110.java.utils.DBUtils;

public class UserDaoImpl implements UserDao {
    @Override
    public User checkUsername(String username) throws SQLException {
        return new QueryRunner(DBUtils.getDataSource()).query("select * from tb_user where username = ?",
                                                              new BeanHandler<User>(User.class),
                                                              username);
    }
}
```



###### Service层业务处理

```java
package com.mylifes1110.java.service;

import java.sql.SQLException;

public interface UserService {
    boolean checkUsername(String username) throws SQLException;
}
```

```java
package com.mylifes1110.java.service.impl;

import java.sql.SQLException;

import com.mylifes1110.java.bean.User;
import com.mylifes1110.java.dao.UserDao;
import com.mylifes1110.java.dao.impl.UserDaoImpl;
import com.mylifes1110.java.service.UserService;

public class UserServiceImpl implements UserService {
    private UserDao userDao = new UserDaoImpl();

    @Override
    public boolean checkUsername(String username) throws SQLException {
        User user = userDao.checkUsername(username);

        if (user != null) {

            // 用户名存在
            return false;
        } else {

            // 用户名可用
            return true;
        }
    }
}
```



###### DBUtils

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



###### JSONUtils

```java
package com.mylifes1110.java.utils;

import java.io.IOException;

import javax.servlet.http.HttpServletResponse;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

public class JSONUtils {
    public static String toJsonStr(Object o) throws JsonProcessingException {
        return new ObjectMapper().writeValueAsString(o);
    }

    public static void writeJsonStr(HttpServletResponse response, Object o) throws IOException {
        response.setContentType("application/json;charset=utf-8");
        response.getWriter().write(toJsonStr(o));
    }
}
```



###### register.jsp页面

```html
<%--
  Created by IntelliJ IDEA.
  User: Ziph
  Date: 2020/5/15
  Time: 21:13
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>register</title>
    <script src="js/jquery-3.2.1.min.js"></script>
    <script type="text/javascript">
        function checkUsername() {
            var username = $("#username").val();
            console.log(username);
            $.post("${pageContext.request.contextPath}/checkUsername",
                {
                    "username": username
                }, function (data) {
                    console.log(data);
                    var flag = data.flag;
                    var msg = data.msg;
                    var btn = $("button[type='submit']");
                    if (flag) {
                        $("#span").html("<font color='#1e90ff'>" + msg + "</font>");
                        //用户可以使用该用户名注册的时候，按钮可以点击
                        btn.attr("disabled", false);
                    } else {
                        $("#span").html("<font color='red'>" + msg + "</font>");
                        //用户不可以使用该用户名注册的时候，按钮不可以点击
                        btn.attr("disabled", true);
                    }
                }, "json");
        }
    </script>
</head>
<body>
<form action="${pageContext.request.contextPath}/register" method="post">
    账户：<input type="text" name="username" id="username" onchange="checkUsername()"><span id="span"></span><br>
    密码：<input type="text" name="password" id="password"><br>
    <button type="submit">注册</button>
</form>
</body>
</html>
```