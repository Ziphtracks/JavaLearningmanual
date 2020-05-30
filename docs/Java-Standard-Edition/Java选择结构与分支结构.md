# Java选择结构与分支结构

  * [一、基本if选择结构](#一基本if选择结构)
     * [1.1 if选择结构语法](#11-if选择结构语法)
  * [二、if else选择结构](#二if-else选择结构)
     * [2.1 if else选择结构语法](#21-if-else选择结构语法)
  * [三、多重if选择结构](#三多重if选择结构)
     * [3.1 多重if选择结构语法](#31-多重if选择结构语法)
  * [四、多重if else选择结构](#四多重if-else选择结构)
     * [4.1 多重if else选择结构语法](#41-多重if-else选择结构语法)
  * [五、switch分支结构](#五switch分支结构)
     * [5.1 switch分支结构语法](#51-switch分支结构语法)
  * [六、局部变量](#六局部变量)
     * [6.1 了解局部变量](#61-了解局部变量)

------

## 一、基本if选择结构

### 1.1 if选择结构语法

```java
if(布尔表达式) {
	//代码块//结果为true执行代码块
}
后续代码...
```

 - **执行流程：**
	* 对布尔表达式进行判断
	* 结果为true，先执行代码块，再执行后续代码
	* 结果为false，跳过代码块，直接执行后续代码
```java
public class TestBasicIf{
	public static void main(String[] args){
		double score = 98.0;
		//判断成绩是否为满分
		if(score == 100.0){ //当score中的值等于100时，则执行if代码块中的内容
			System.out.println("恭喜，满分");
		}	
		System.out.println("程序结束....");
	}
}
```



***

## 二、if else选择结构
### 2.1 if else选择结构语法

```java
if(布尔表达式) {
			//代码块1 
		} else {
			//代码块2
		}
		后续代码...
```

 - **执行流程：**
* 对布尔表达式进行判断
	* 结果为true，则先执行代码块1，再退出整个选择结构，执行后续代码
	* 结果为false，则先执行代码块2，再退出整个选择结构，执行后续代码
```java
public class TestIfElse{
	public static void main(String[] args){
		double score = 98.0;
		if(score == 100.0){
			System.out.println("奖励一部手机"); //代码块1
		}else{
			System.out.println("罚抄试卷100遍");//代码块2
		}
		System.out.println("程序结束...");
	}
}
```



***
<a id="3"> </a>
## 三、多重if选择结构
### 3.1 多重if选择结构语法

```java
	if(布尔表达式) {
			//代码块1
		} else if (布尔表达式) {
			//代码块2
		} else if (布尔表达式) {
			//代码块3
		} else {
			//代码块4
		}
		后续代码...
```
<font color="red">**注意：**</font>相互排斥，当有一个条件为true时，其他均不再执行，使用于区间判断（区间条件，遵循从大到小或从小到大）



***
<a id="4"> </a>

## 四、多重if else选择结构
### 4.1 多重if else选择结构语法

```java
	if(外层布尔表达式){
		if(内层布尔表达式){
				//内层代码块1
				}else{
				//内层代码块2
				}
		}else{
			//代码块2
		}
		后续代码...
```
<font color="red">**注意：**</font>选择结构中，可以嵌套另一个选择结构，可任意组合（if、if else、多重if），嵌套结构可能存在因没有缩进而导致的书写串行，进而执行有问题。

```java
public class TestMultiIf{
	public static void main(String[] args){
		//购车
		//根据自己的购买力（钱），钱多就买贵一些的，钱少就买便宜一些的
		/*
			如果有500万，买劳斯莱斯
			否则，如果有100万，买GTR
			否则，如果有50万，买奔驰E
			否则，如果有20万，大众帕萨特
			否则，如果有10万，哈弗H6
			否则，如果有5万，奇瑞QQ
			否则，如果有1万，电动车
			否则，捷安特自行车
		*/
		int money = 100; //万元
		
		if(money >= 500){
			System.out.println("劳斯莱斯");
		}else if(money >= 100){
			System.out.println("买GTR");
		}else if(money >= 50){
			System.out.println("奔驰E");
		}else if(money >= 20){
			System.out.println("大众帕萨特");
		}else if(money >= 10){
			System.out.println("哈弗H6");
		}else if(money >= 5){
			System.out.println("奇瑞QQ");
		}else{
			System.out.println("捷安特自行车");
		}
		
		System.out.println("程序结束...");
	}
}
```



***
<a id="5"> </a>

## 五、switch分支结构
### 5.1 switch分支结构语法

```java
switch(变量|表达式){ //可操作变量类型byte short int char String
		case 1:
			//逻辑代码1;
			break;

		case 2:
			//逻辑代码2;
			break;

		default:
			//逻辑代码3;
			break;
		}
		后续代码...
```
<font color="red">**注意：**</font>switch语句的case被选中后，不会主动退出这个结构，需手工追加break;，跳出整个switch分支结构

```java
public class TestSwitch{
	public static void main(String[] args){
		//判断一周食谱
		//每天吃什么
		/*
			周一：水煮鱼
			周二：麻辣烫
			周三：火锅
			周四：煲仔饭
			周五：火锅
			周六：火锅
			周日：热干面
		*/
		int weekDay = 3;//input.nextInt()
		switch(weekDay){//int 
			default:
				System.out.println("输入有误，请选择1~7之间的整数");
				break;
			case 1:
				System.out.println("水煮鱼");
				break;
			case 2:
				System.out.println("麻辣烫");
				break;
			case 3:
			case 5:
			case 6:
				System.out.println("火锅");
				break;
			case 4:
				System.out.println("煲仔饭");
				break;//跳出整个switch
			case 7:
				System.out.println("热干面");
				break;
		}
        
		System.out.println("程序结束...");
        
		//关键字：break 中止、中断、跳出
		char c = 'A';
		switch(c){
			case 'A':
				System.out.println("您输入的是A");
				break;
				
			case 'B':
				System.out.println("您输入的是B");
				break;
		}
		String str = "星期一";
		switch(str){
			case "星期一":
				System.out.println("今天吃水煮鱼");
				break;
		}
	}
}
```



***
<a id="6"> </a>

## 六、局部变量

### 6.1 了解局部变量

 - **概念：** 声明在函数内部的变量，必须先赋值，再使用
 - **作用范围：** 从定义行开始，到所在的代码块结束，也就是说只限于局部的{}内

<font color="red">**注意：**</font> 多个变量，在重合的作用范围内，不允许重名，否则会编译错误，不能正常运行程序

```java
public class TestLocalVariable{
	public static void main(String[] args){
		int a = 10;//开始
		System.out.println(a);
		
		if(a == 10){//满足条件
			int b = 20;
			System.out.println(b);	
			byte a = 30;
			System.out.println(a);
		}
		System.out.println(b);
	}//结束
}
```



***



> 上一章[【Java语言基础】](https://github.com/Ziphtracks/JavaLearningmanual/blob/master/docs/Java-Standard-Edition/Java语言基础.md)

> 下一章[【Java循环结构】](https://github.com/Ziphtracks/JavaLearningmanual/blob/master/docs/Java-Standard-Edition/Java循环结构.md)