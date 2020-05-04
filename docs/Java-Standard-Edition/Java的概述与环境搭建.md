# Java的概述与环境搭建

- [一、Java的由来](#一java的由来)

* [二、Java之父（被我们著称的“高司令”）](#二java之父被我们著称的高司令)
* [三、Java的语言特点](#三java的语言特点)
* [四、Java的运行机制](#四java的运行机制)
* [五、Java的环境搭建](#五java的环境搭建)
   * [5.1 认识JVM、JRE、JDK](#51-认识jvmjrejdk)
   * [5.2 配置环境变量](#52-配置环境变量)
   * [5.3 测试JDK是否安装成功](#53-测试jdk是否安装成功)
   * [5.4 常用DOS命令操作](#54-常用dos命令操作)
* [六、第一个应用程序](#六第一个应用程序)
   * [6.1 HelloWorld](#61-helloworld)
   * [6.2 编译与运行](#62-编译与运行)
      * [6.2.1 类的介绍](#621-类的介绍)
      * [6.2.2 Package（包）的介绍](#622-package包的介绍)
* [七、Java的语言规范](#七java的语言规范)
   * [7.1 书写格式](#71-书写格式)
   * [7.2 代码注释](#72-代码注释)
   * [7.3 标识符命名](#73-标识符命名)

------

## 一、Java的由来

 - Sun Microsystems 于1995年推出的Java面向对象的程序设计语言
 - 1996年发布JDK1.0
 - 1999年发布J2SE、J2EE、J2ME
 - 2005年更名Java SE、Java EE、Java Me
 - 2009年被Oracle收购
 - 2011年由Oracle发布Java7.0版本
 - 2014年由Oracle发布Java8.0版本（至今大部分开发者使用的版本）
 - ...
***
<a id="2"> </a>
## 二、Java之父（被我们著称的“高司令”）
作为了解就好，别学半天Java不知道Java之父是谁，所以我在这里添加到这知识点章节的内容里！

![高司令](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200504104054.png)

詹姆斯·高斯林 （James Gosling）是一名软件专家，1955年5月19日出生于加拿大，Java编程语言的共同创始人之一，一般公认他为“Java之父”。

***
<a id="3"> </a>
## 三、Java的语言特点

 - 面向对象（使用计算机模拟现实世界，解决现实问题，贴近人类思维）
 - 简单（相对C、C++，不易造成内存溢出、减少代码量、代码可读性强）
 - 跨平台（操作系统、服务器、数据库）

***
<a id="4"> </a>
## 四、Java的运行机制

 - 编译执行
	* 将源文件编译成机器码，一次编译，多次执行
	* 执行效率高，不可跨平台
 - 解释执行
	* 将源文件被一行一行解释，一行一行执行。不同操作系统具备不同的解释器
 	* 执行效率低，可以跨平台
 - 先编译、再解释：
	* 将源文件编译成字节码文件（平台中立文件.class），再将字节码文件进行解释执行
	* Java的设计理念：Write Once Run Anywhere
![java的执行机制](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200504104115.png)
***

## 五、Java的环境搭建
### 5.1 认识JVM、JRE、JDK

 - JVM（Java Virtual Machine）虚拟机
	* 使用软件在不同操作系统中，模拟相同的环境
 - JRE（Java Runtime Environment）运行环境
	* 包含JVM和解释器，完整的Java运行环境
 - JDK（Java Development Kit）开发环境
	* 包含JRE + 类库 + 开发工具包（编译器和调试工具）

### 5.2 配置环境变量

右击我的电脑--属性--高级系统设置--环境变量--并操作以下内容步骤
![配置环境变量](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200504104126.png)

### 5.3 测试JDK是否安装成功

打开cmd窗口--输入命令java -version--出现版本则安装成功
![jdk是否成功](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200504104145.png)

### 5.4 常用DOS命令操作

 - Windows键 + R——快捷键呼出运行窗口
 - 再输入cmd并回车打开DOS命令窗口
![](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200504104359.png)
 - 常见命令
	* 更换盘符：d:
	* 查看当前目录下的文件及文件夹：dir
	* 进入文件夹：cd 文件夹的名字
	* 返回上一级目录：cd .\.
	* 清空屏幕：cls
	* 删除文件：del 文件名
	* 删除文件夹：rd 文件夹名称
	* 退出：exit
***
<a id="6"> </a>
## 六、第一个应用程序

### 6.1 HelloWorld

<font color="red">**注意：**</font>Java语言严格区分大小写，写错一点，就有可能会造成程序的报错！

创建以.java结尾的源文件： 
![Java源文件示例](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200504095301.png)
第一个程序代码的解释：

 > Class：类（代码的容器）
 > Forst：类的名字（自定义）
 > main：主函数（程序的入口）
 > System.out.print("");  ：控制台输出语句（""之间的为控制台的具体文本内容）
 > ; ：英文的分号（代表一行代码的结束）
```java
class First {
	public static void main(String[] args) {
		System.out.print("HelloWorld！");
	}
}
```

### 6.2 编译与运行

 - 编译：
	* javac 源文件名称 .java
![在这里插入图片描述](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200504095336.png)
 - 运行：
	* java 类名
![在这里插入图片描述](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200504095401.png)

#### 6.2.1 类的介绍

 - 同一个源文件中可以定义多个类
 - 编译后，每个类都会产生独立的.class文件
 - 一个类中，只能有一个主函数，每一个类都可以有自己的主函数
 - public 修饰的类称为公开类，要求类名必须与文件名称完全相同
 - 一个源文件中，只有有一个公开类

```java
//编译后会出现两个.class文件，分别是Second.class和HelloWorld.class
//运行结果则打印以下打印的两句话
//System.out.println();则是换行打印
//System.out.print();则是不换行打印
public class HelloWorld{
	public static void main(String[] args){
		System.out.println("HelloWorld！");
	}
}

class Second{
	public static void main(String[] args){
		System.out.println("I'm second");
	}
}
```
#### 6.2.2 Package（包）的介绍

 - **作用：** 类似于文件夹，用于管理字节码文件（.class）文件
 - **语法：** package 包名;
 - **位置：** 必须写在源文件的第一行
 - **带包编译：** javac -d . 源文件名称.java（自动生成目录结构）
 - **采用域名倒置的规则：** www.ziph.cn -> cn.ziph.www
 - **例如：** cn.com.company.department.group.project.module.XxxClass（最后一个就是字节码文件名了）
***
<a id="7"> </a>
## 七、Java的语言规范
> <font color="red">**温馨提示**！</font>个人在这里认为一定要从开始养成一个良好的编码习惯，到后面你会发现受益良多！
> <font color="red">**特别注意**！</font>杜绝拼音的出现，如果英语不好的，这里我推荐你查找之后再命名，这里我推荐一款“网易有道词典”，大家可以使用一下！


### 7.1 书写格式

 - 层级之间必须缩进（Tab：一个制表位）
 - 一行只写一句代码

```java
public class HelloWorld {
	public static void main(String[] args) {//这一行前面两个制表位
		System.out.println("Hello");//这一行前面两个制表位
		System.out.println("World");//这一行前面两个制表位
	}//这一行前面一个制表位
}
```
### 7.2 代码注释

单行注释：
```java
// 单行注释
```
多行注释：
```java
/* 多行注释 */
```
文档注释生成外部文档你可以去试试！
文档注释：（生成外部文档：javadoc -d . HelloWorld.java）
<font color="red">**注意：**</font>注释不参与编译
```java
/** 文档注释 **/
```

### 7.3 标识符命名

 - 语法规定
	* 可以由：字母、数字、_ 、$ 组成，但不能以数字开头
	* 不能与关键字、保留字重名
 - 约定俗成
	* 望文生义、见名知义
	* 类名由一个或多个单词组成，每个单词首字母大写
	* 函数名、变量名由一个或多个单词组成，首单词首字母小写，拼接词首字母大写，被称为“驼峰式”
	* 包名全小写，只可以使用特殊字符“ . ”，并且不能以“ . ” 开头或结尾
	* 常量全大写，多个单词用_连接
***




> 下一章[【Java语言基础】](https://github.com/Ziphtracks/JavaLearningmanual/blob/master/docs/Java-Standard-Edition/Java语言基础.md)