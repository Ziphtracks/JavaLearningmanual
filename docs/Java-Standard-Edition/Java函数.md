# Java函数

  * [一、函数的概念](#一函数的概念)
  * [二、函数的组成](#二函数的组成)
     * [2.1 了解参数](#21-了解参数)
     * [2.2 形参与实参语法](#22-形参与实参语法)
     * [2.3 返回值与返回值类型](#23-返回值与返回值类型)
     * [2.4 return;的用法](#24-return的用法)
  * [三、函数的定义](#三函数的定义)
  * [四、函数的调用](#四函数的调用)
     * [4.1 函数调用方式](#41-函数调用方式)
     * [4.2 函数的多级调用](#42-函数的多级调用)
  * [五、函数的好处](#五函数的好处)
  * [六、递归](#六递归)

------

## 一、函数的概念
**概念：** 实现特定功能的一段代码，可以反复使用

<font color="red">**注意：**</font>要将需要在多个位置反复使用的代码，定义在函数里调用，以避免代码的冗长
***
<a id="2"> </a>
## 二、函数的组成

### 2.1 了解参数

**参数概念：** 调用函数时传入的数据



### 2.2 形参与实参语法

<font color="red">**注意：**</font>多个参数和单个参数都可以，根据业务需求来定义函数的参数

```java
public class function {
	public static void main(String[] args) {
		//实际参数
		//调用语法时
		函数名称(实际参数1,实际参数2);//实际参数等价于局部变量的赋值
	}
	//形式参数
	public static void 函数名(形式参数1 ,形式参数2) {//形式参数等于局部变量的声明
		//函数主体
	}
}
```


### 2.3 返回值与返回值类型

函数调用时，一些情况下无需返回结果；另一个情况下必须返回结果

**定义语法：** 

```java
public class function{
	public static void main(String[] args) {
		//调用函数
		变量 = 函数名(实际参数);//变量与返回值类型一致
	}
	public static 返回值类型 函数名称(形式参数列表) {//规定返回值的类型（基本、引用、void）
		//函数主体
		return value;//返回值，需要根据需求返回一个值，一个函数只能有一个返回值
	}
}
```


### 2.4 return;的用法

 - 应用返回值类型的函数--return value;
 - 应用在没有返回值类型的函数--return;（结束当前函数直接返回）
***
<a id="3"> </a>
## 三、函数的定义
**定义位置：** 

函数定义在类的内部，与main函数并列

**定义语法：**

```java
public class Function {
	//main函数
	public static void main(String[] args) {
	
	}
	//定义的函数
	public static void 函数名称() {//函数名称一定要遵循命名规范
		//函数主体（功能主体）
	}
}
```
***
<a id="4"> </a>
## 四、函数的调用
### 4.1 函数调用方式
在调用函数时，会优先执行函数内部代码，结束后，返回函数调用处，继续向下执行

```java
public class CallFunction {
	//main函数
	public static void main(String[] args) {
		//实现函数的多次调用
		函数名称();
		//其他逻辑代码......
		函数名称();
	}
	//定义的函数
	public static void 函数名称() {//函数名称一定要遵循命名规范
		//函数主体（功能主体）
	}
}
```


### 4.2 函数的多级调用

```java
public class CallFunction {
	//main函数
	public static void main(String[] args) {
		//实现函数1的调用
		函数名称1();
		//其他逻辑代码......
	}
	//定义的函数1调用函数2
	public static void 函数名称1() {//函数名称一定要遵循命名规范
		//函数主体（功能主体）
		函数名称2();
		//其他逻辑代码......（不一定有其他逻辑代码，看功能的实现问题）
	}
	//定义的函数2
	public static void 函数名称2() {
		//函数主体（功能主体）
	}
}
```
***
<a id="5"> </a>
## 五、函数的好处
**减少冗余、提高复用性、可读性、可维护性、方便分工合作！**

***
<a id="6"> </a>

## 六、递归
![在这里插入图片描述](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200503182723.png)
如何正确的使用递归呢？就要设置有效的递归出口，避免无穷递归！
所谓无穷递归就是无穷无尽的调用递归方法计算！
**当无穷递归计算之后会出现内存溢出的异常！
Exception in thread "main" java.lang.StackOverflowError（内存溢出）**

<font color="red">**注意：**</font>所有能以递归解决的问题，循环都可以解决。当及解决复杂问题时，递归的实现方式更简单！

***



> 上一章[【Java循环结构】](https://github.com/Ziphtracks/JavaLearningmanual/blob/master/docs/Java-Standard-Edition/Java循环结构.md)

> 下一章[【Java数组】](https://github.com/Ziphtracks/JavaLearningmanual/blob/master/docs/Java-Standard-Edition/Java数组.md)