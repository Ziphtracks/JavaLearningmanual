# Java循环结构

  * [一、循环的概念](#一循环的概念)
  * [二、while循环](#二while循环)
     * [2.1 while循环语法](#21-while循环语法)
     * [2.2 循环的组成（四个部分）](#22-循环的组成四个部分)
  * [三、do while循环](#三do-while循环)
     * [3.1 do while循环语法](#31-do-while循环语法)
  * [四、for循环](#四for循环)
     * [4.1 for循环语法](#41-for循环语法)
  * [五、流程控制](#五流程控制)
  * [六、嵌套循环](#六嵌套循环)

------

## 一、循环的概念

**概念**：通过某个条件，重复执行的一段逻辑代码

![在这里插入图片描述](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200503181758.png)
****

## 二、while循环
### 2.1 while循环语法

```java
	while(布尔表达式) {
		//逻辑代码(循环操作)
	}
```

 - **执行流程：**
* 先对布尔表达式进行判断，结果为true，则执行逻辑代码
	* 本次执行完毕后，再次进行判断，结果仍旧为true，则再次执行逻辑代码
	* 直至布尔表达式的结果为false时，才会退出循环结构，执行后续代码

### 2.2 循环的组成（四个部分）

 1. 初始部分：用以判断的变量
 2. 循环条件：决定是否循环的依据
 3. 循环操作：单次执行的逻辑代码或任务
 4. 迭代部分：控制循环条件改变的增量

**特点：** 首次即有入口条件，先判断、再执行，适用于循环次数明确的情况

```java
public class TestWhile{
	public static void main(String[] args){
		//求1~100之间所有数字（100个数字）的和
		/*
			思路：
			1.先拿到1~100之间的每个数字
			2.将这100个数字进行相加求和
		*/
		
		int i = 1;
		int sum = 0;// +1 +2 +3 +4 +5 +6 .... +100
		//循环 改变i的值
		while(i <= 100){//次数明确
			sum = sum + i;//循环操作
			i++;//迭代部分，循环操作的中间变量
		}
		System.out.println("总和：" + sum);
	}
}
```



****
<a id="3"> </a>

## 三、do while循环
### 3.1 do while循环语法

```java
	do {
		逻辑代码（循环操作）
	} while(布尔表达式);
```

 - **执行流程：**

	*  先执行一次循环操作之后，在进行布尔表达式判断
	*  如果结果为true，则再次执行循环操作
	* 如果结果为false，才会退出循环结果，执行后续代码

**特点：** 首次没有入口条件，先执行、再判断，使用于循环次数不明确的情况

```java
import java.util.Scanner;

public class TestDoWhile{
	public static void main(String[] args){
		//1.同学们先写一遍作业
		//2.由老师检查（y/n）
		//3.根据检查的结果，决定是否需要重新抄写

		Scanner input = new Scanner(System.in);		
		char answer;
		do{
			System.out.println("抄写一遍作业....");	
			System.out.println("请老师根据当次作业完成情况输入评语：");
			//评语
			answer = input.next().charAt(0);
		}while(answer != 'y');
		System.out.println("程序结束...");	
	}
}
```



****
<a id="4"> </a>

## 四、for循环
### 4.1 for循环语法

```java
	for(初始部分;循环部分;迭代部分) {
		//循环操作
	}
```

 - **执行流程：**

	* 首次执行初始部分（仅一次）
	* 对布尔表达式进行判断，结果为true，则执行逻辑代码
	* 本次执行完毕后，执行迭代部分，再次判断，结果仍旧为true，则再次执行逻辑代码
	* 直至布尔表达式的结果为false时，才会退出循环结果，执行后续逻辑代码

**特点：** 首次即有入口条件，吸纳判断、再执行，适用于循环次数明确的情况

```java
import java.util.Scanner;

public class TestFor{
	public static void main(String[] args){
		//计算一个班的5为同学的平均分
		Scanner input = new Scanner(System.in);
		double sum = 0.0;
		
		for(int i = 1 ; i <= 5; i++){
			System.out.println("请输入第" + i + "位同学的成绩：");
			double score = input.nextDouble();
			sum = sum + score;//把每一位同学的成绩，加入到了sum中,计算总分
		}
		//平均分
		double avg = sum / 5;	
		System.out.println("5位同学的平均分位：" + avg);
	}
}
```



****
<a id="5"> </a>
## 五、流程控制
 - **break;**

	* 终止、跳出switch、循环结构
	* 循环执行中，遇到break;，则退出整个循环结构

 - **continue;**
	* 结束本次、进入下一次循环
	* 循环执行中，遇到continue，则跳过此次，进入下一次循环
```java
public class TestBreak{
	public static void main(String[] args){
		//break基本应用
		for(int i = 1 ; i <= 10 ; i++){
			if(i == 5){
				break;//跳出整个循环
			}
			System.out.println("当前次数：" + i);	
		}
		System.out.println("程序结束...");
	}
}
```

```java
public class TestContinue{
	public static void main(String[] args){
		//continue
		for(int i = 1 ; i <= 10 ; i++){	
			if(i == 5){
				continue; //结束本次，进入下一次循环
			}
			System.out.println("当前次数：" + i);
		}
		System.out.println("程序结束...");
	}
}
```



****
<a id="6"> </a>
## 六、嵌套循环
**概念：** 在一个完整的循环结构中，嵌套另一个完整的循环结构

<font color="red">**注意：**</font>外层控制循环次数，内层控制单次循环操作

```java
public class TestNested{
	public static void main(String[] args){
		//打印等腰三角形

		//	######*
		//	#####***
		//	####*****
		//	###*******
		//	##*********
		//	#***********
		//	*************
		
		int rows = 5;
		
		//1.打印倒的直角三角形
		for(int i = 1 ; i <= rows ; i++){ //外层打印5行
			//打印4行的直角三角形
			for(int j = rows - 1 ; j >= i ; j--){ // j = 4 ; j >= 1
				//被满足4次
				System.out.print("#");
			}
			System.out.println();
		}
		
		//2.打印正的直角三角形（每次递进数值上 *2-1 ）
		//	*
		//	***
		//	*****
		//	*******
		//	*********
		
		for(int i = 1 ; i <= rows ; i++){ // i = 1			
			for(int j = 1 ; j <= i*2-1 ; j++){
				System.out.print("*");
			}
			System.out.println();
		}

		//整合
		
		//	####*
		//	###***
		//	##*****
		//	#*******
		//	*********
		
		for(int i = 1 ; i <= rows ; i++){ // i = 2	
			for(int j = rows - 1 ; j >= i ; j--){ // j = 4 ;  4 >= 2
				System.out.print(" ");
			}
			
			//程序当前的执行流程位置
			for(int j = 1 ; j <= i*2-1 ; j++){ // j = 1 ; j <= 3
				System.out.print("*");
			}
			
			System.out.println();
		}
	}
}
```



****



> 上一章[【Java选择结构与分支结构】](https://github.com/Ziphtracks/JavaLearningmanual/blob/master/docs/Java-Standard-Edition/Java选择结构与分支结构.md)

> 下一章[【Java函数】](https://github.com/Ziphtracks/JavaLearningmanual/blob/master/docs/Java-Standard-Edition/Java函数.md)	