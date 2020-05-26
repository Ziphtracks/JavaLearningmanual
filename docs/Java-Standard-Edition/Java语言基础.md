# Java语言基础

------

  * [一、变量](#一变量)
     * [1.1 了解变量](#11-了解变量)
     * [1.2 变量的声明和赋值](#12-变量的声明和赋值)
  * [二、数据类型](#二数据类型)
     * [2.1 整数（基本数据类型）](#21-整数基本数据类型)
     * [2.2 小数（浮点数）（基本数据类型）](#22-小数浮点数基本数据类型)
     * [2.3 布尔（基本数据类型）](#23-布尔基本数据类型)
     * [2.4 字符（基本数据类型）](#24-字符基本数据类型)
     * [2.5 字符串（引用数据类型）](#25-字符串引用数据类型)
     * [2.6 数组（引用数据类型）](#26-数组引用数据类型)
     * [2.7 对象（引用数据类型）](#27-对象引用数据类型)
  * [三、类型转换](#三类型转换)
     * [3.1 自动类型转换](#31-自动类型转换)
     * [3.2 强制类型转换](#32-强制类型转换)
     * [3.3 强制类型转换规则：](#33-强制类型转换规则)
     * [3.4 类型转换代码示范](#34-类型转换代码示范)
  * [四、运算符](#四运算符)
  * [五、表达式](#五表达式)
  * [六、自动类型提升](#六自动类型提升)
     * [6.1 进行运算时](#61-进行运算时)
  * [七、控制台输入](#七控制台输入)

<hr/>

## 一、变量

### 1.1 了解变量

 - **概念**：计算机内存中的一块存储空间，是存储数据的基本单元
 - **组成部分**：数据类型、变量名、值
 - **定义流程**：声明、赋值（变量的类型必须与数据的类型一致）



### 1.2 变量的声明和赋值

| 变量的声明和赋值 | 声明赋值方式 |
|--|--|
|  先声明，再赋值| 数据类型 变量名;	变量名=值; |
| 声明并赋值 | 数据类型 变量名=值; |
| 多个同类型变量的声明与赋值 | 数据类型 变量1,变量2=值 |

```java
/**
 * 变量的定义流程 
 */
public class TestVariable{
	public static void main(String[] args){
		//1.声明变量（在内存中开辟一块整数的存储空间）
		int money;
		//2.赋值（将整数100存入到变量中）
		money = 100;
		//两部操作之后，内存中就存在一个叫做money变量，其中存储着100这个整数
		//3.使用变量（直接使用变量的名字即可）
		System.out.print(money);
	}
}
```

```java
/**
 * 变量的多种定义
 */
public class TestDefinition{
	public static void main(String[] args){
		//第一种方式（先声明、再赋值）
		int money;
		money = 100;
		//第二种方式（声明并赋值）
		int age = 20;
		System.out.println(age);
		//第三种方式（为多个同类型变量进行定义与赋值）
		int a , b , c=7;
		a = 5;
		b = 6;
		System.out.println(a);
		System.out.println(b);
		System.out.println(c);
	}
}
```



## 二、数据类型

大家在后面的介绍取值范围内容要注意区分-和~



![数据类型](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200524201241.png)




### 2.1 整数（基本数据类型）

|	类型|	字节|	取值范围（二进制）|取值范围（十进制）	|
|---|---|---|---|
|byte	|	1字节|-2^7 ~ 2^7-1	|	-128 ~ 127|
|	short|	2字节|	-2^15 ~ 2^15-1|	-32768 ~ 32767|
|int	|	4字节|-2^31 ~ 2^31-1	|-2147483648 ~ 2147483647	|
|long	|	8字节|	-2^63 ~ 2^63-1|	-9223372036854775808 ~ 9223372036854775807|

<font color="red">**注意：**</font>int为整数的默认类型，如果需要为long类型赋值，需要在值得后面加“L或l”。（加L便于区分）

```java
public class TestType{
	public static void main(String[] args){
		//创建一个byte类型的变量，测试其取值范围
		byte b = 127; //取值范围 -128 ~ 127 （共计256个数字）
		System.out.println(b);
		
		//创建一个short（短整型）类型的变量，测试其取值范围
		short s = 32767; //取值范围 -32768 ~ 32767 （共计65536个数字）
		System.out.println(s);
		
		int i = 2147483647; //取值范围 -2147483648 ~ 2147483647
		System.out.println(i);
		
		//long l1 = 9223372036854775807l; //超出long类型范围，编译出错
		long l2 = 2147483648L;
		System.out.println(l1);
		System.out.println(l2);
		
		long l3 = 5;
		System.out.println(l3);
		System.out.println(l1 + l2);
		
		//l1 + l2 映射的问题是 超过了当前类型的取值范围
		
		//byte的取值 -128 ~ 127
		
		byte myByte = (byte)128; 
		//有符号数，首位为符号位，符号位为0时，代表整数，为1时代表负数
		//当byte的最大取值（127）+ 1时，则有效的8位空间中，符号位发生变化，将128变为了负数
		
		System.out.println(myByte);
		
		//二进制数，计算机唯一可识别的本文，01010101，规则为 逢2进1
		// 0000 0001	十进制1
		// 0000 0010	十进制2
		// 0000 0011	十进制3
		// 0000 0100	十进制4
		// 0010 0000	十进制32
		// 1000 0000  + 1	十进制127
		// 0000 0000 1000 0000
	}
}
```



### 2.2 小数（浮点数）（基本数据类型）
|	类型|	字节|	负数取值范围|	整数取值范围|
|---|---|---|---|
|	float|	4字节|	-3.4E+38 ~ -1.4E-45|1.4E-45 ~ -3.4E+38	|
|	double|	8字节|	-1.7E+308 ~ 4.9E-324|	4.9E-324 ~ 1.7E+308|

<font color="red">**注意：**</font>浮点型数值采用科学计数法来表示的，double为浮点型的默认类型，如果需要为float类型赋值，需要在值得后面加“F或f”。（加F便于区分）

```java
public class TestFloatAndDouble{
	public static void main(String[] args){
		//单精度浮点数
		float f = 1.2F;
		System.out.println(f);
		
		//双精度浮点型
		double d = 1.3;//Java中任何一个小数，默认类型是double
		System.out.println(d);
		
		//多种赋值方式
		double d2 = 2000;
		System.out.println(d2);
		
		double d3 = 2000.0;
		System.out.println(d3);
		
		double d4 = 2000D;//追加D
		System.out.println(d4);
		
		//科学计数法赋值
		double d5 = 2E3;//2*10^3
		System.out.println(d5);
		
		double d6 = 3E5D;
		
		double d7 = 300000.0;
		
		double d8 = -170000000000000000000000000000000000000000000000000000000000.0; //1.7*10^308 ~ 17*10^307
		
		System.out.println(d8);
		
		//问题1：
		float f1 =2F; //2默认类型是int，float来讲，取值范围包含int的2147483647，float取值3.4E38  3400000000000000000000000
		
		System.out.println(f1);
		
		float f2 =2.0F;//2.0小数，它的默认类型是double，所以需要对小数进行追加F的操作，显示告知计算机，此小数位float
	}
}
```



### 2.3 布尔（基本数据类型）
|类型	|	字节|	取值范围|描述	|
|---|---|---|---|
|	boolean|	1字节|	true、false|	真、假|

<font color="red">**注意：**</font>boolean不能参与运算

```java
public class TestBoolean{
	public static void main(String[] args){
		boolean bool = false; //可以直接赋值为true/false
		System.out.println(bool);
		boolean b2 = 5 > 2; //赋值上一个可以得到true/false的“表达式”
		System.out.println(b2);
	}
}
```



### 2.4 字符（基本数据类型）
|	类型|字节	|	取值范围|
|---|---|---|
|	char|	2字节|	0 ~ 65535|

```java
public class TestCharacter{
	public static void main(String[] args){
		
		char c = 'A'; //B
		
		System.out.println(c);
		
		char c2 = 65; //66
		
		System.out.println(c2);
		
		char c3 = '\u0041'; // '\u0042' 16进制66
		
		System.out.println(c3);
        
		//---------------------------------------------------------
		
		char c4 = '你';
		
		System.out.println( (int)c4 ); //将c4所代表的文字的对应整数打印出来
		
		char c5 = 20320;
		System.out.println(c5);
		
		char c6 = 22909;
		System.out.println(c6);
		
		//---------------------------------------------------------
		
		//short整数2个字节 --- char整数2个字节 ，二者的区别是什么？
		
		short s1 = 20320;//-32768 ~ 32767  有符号数，首位为符号位，首位为1时，此整数位负数
		char c7 = 20320;//0 ~ 65535  无符号数，首位无论是0或1，代表的都是正数
		
		//2个字节 16位   
		//short的最大整数：0111 1111 1111 1111   首位符号位必须是0
		//char的最大整数： 1111 1111 1111 1111	
		
		//char c8 = -1;//Error
		
		//思考（坑）
		char c9 = 65;//可以
		
		short s2 = -1;//将s2赋值给char
		char s3 = s2;//不可以，short的取值范围中涵盖负数，编译器无法保证s2中一定是个正整数，报检查的错误
		
		System.out.println(s3);//如果char中存储的是负数，则无法根据ASCII、Unicode找到对应字符，进而Java使用?代表
	}
}
```

**特殊字符**：转义字符（如果用到一个单引号他会出错，转义字符就是为了解决这个问题）

|转义字符| 描述 |
|--|--|
| \n | 换行符 |
| \t | 制表位（缩进等于Tab键缩进） |
| \\\ | 反斜杠 |
| \\' | 单引号 |
| \\"" | 双引号 |


<font color="red">**注意：**</font>其字符用' '赋值，字符、整数、进制赋值请参考在线工具ASCII编码对照表
>https://tool.oschina.net/commons?type=4

```java
public class TestTransferSign{
	public static void main(String[] args){
		
		//需求：将 ' 存入char类型变量中
		
		char c = '\'';
		
		System.out.println(c);
		
		char c2 = '\"';
		
		System.out.println(c2);
		
		//  \ 将“本身具有特殊含义的字符” 转换成 “普通字符”
		//  \ 将“普通字符” 转换成 “本身具有特殊含义的字符”
		
		System.out.print("Hello\tWorld\n"); //缩进一个制表位（4个空格）
		
		System.out.println("你好世界");
		
		System.out.println("\\");
	}
}
```



### 2.5 字符串（引用数据类型）
|类型	|	取值范围|
|---|---|
|String	|	任何" "之间的字面值|

```java
public class TestString{
	public static void main(String[] args){
		
		String str1 = "HelloWorld";
		
		System.out.println(str1);
		
		System.out.println("Hello Everyone");
		
        //在字符串中添加了空格
		String str2 = "        Hello";
		
		System.out.println(str2);
	}
}
```



### 2.6 数组（引用数据类型）



### 2.7 对象（引用数据类型）

<font color="red">**注意：**</font>因为语言基础内容不涉及到数组和对象内容，数组和对象内容我会在以后的分享中给大家详细介绍！



***

## 三、类型转换



### 3.1 自动类型转换

两种类型相互兼容，目标类型大于源类型



### 3.2 强制类型转换

两种类型相互兼容，目标类型小于源类型

<font color="red">**注意：**</font>通过在源类型前面，加上 (目标类型) ，达到强制转换的目的，但是，有可能失去精度。
例如：小数强转为整数，则失去精度，小数点之后的值，无法保留

### 3.3 强制类型转换规则：


 - 整数长度足够，数据完整。
     * 例：int i = 100;		byte b = (byte)i;	//b = 100
 - 整数长度不够，数据截断
     * 例：int = 10000;		byte b = (byte)i;		//b = 16（符号位发生变化，可能为负数）
 - 小数强转整数，数据截断
     * 例：double d = 2.5;		int i = (int)d;			//i = 2（小数位舍掉）
 - 字符整数互转，数据完整
     * 例：char c = 65;		int i = c;		//i = 65;
 - **特殊：** boolean的取值为true、false，不可与其他类型转换



### 3.4 类型转换代码示范

```java
//包装类：8种基本数据类型对应着的一个类，此类即为包装类
//基本数据类型 包装类 及String之间的相互转换
public class TestWrapper {

//        基本数据类型与包装类之间的转化

    public void test1() {
        int i = 10;
        System.out.println(i);
        boolean b = false;
//        基本数据类型-->对应的包装类：调用包装类的构造器
        Integer integer1 = new Integer(i);
        System.out.println(integer1.toString());
//        赋值属性(形参)"12.30"同样也是float类型
        Float f = new Float(12.30F);
        System.out.println(f);
        integer1 = new Integer("12");
        System.out.println(integer1);
//        ""内必须也得符合赋值的基本数据类型规则
//        否则报错java.lang.NumberFormatException
//        integer1 = new Integer("12dd");
//        System.out.println(integer1);
        Boolean b1 = new Boolean(true);
        System.out.println(b1);
//        boolean类型则""中不是true则其他都是false，不会出现报错
        b1 = new Boolean("true1");
        System.out.println(b1);//false

//        class类中的Boolean类型变成了引用数据类型打印出来是null
        Order order = new Order();
        System.out.println("$ " + order.b);

//        包装类-->基本数据类型：调用包装类的Xxx的XxxValue()方法
        int i2 = integer1.intValue();
        System.out.println(i2);
        float f1 = f.floatValue();
        System.out.println(f1);

//        自动装箱和拆箱
        int i4 = 12;
        Integer i3 = i4;//自动装箱
        int i5 = i3;//自动拆箱
    }

//        基本数据类型、包装类与String类之间的转换

    public void test2() {
//        基本数据类型、包装类-->String类：调用String类的静态的valueOf(Xxx x)方法
        int i1 = 10;
        String str1 = i1 + "";//"10"
        System.out.println(str1);
        Integer i2 = i1;
        String str2 = String.valueOf(i1);
        System.out.println(str2);
//        String类-->基本数据类型、包装类：调用包装类的parseXxx(String str)方法
        int i3 = Integer.parseInt(str2);
        System.out.println(i3);
    }
}

class Order {
    Boolean b;
}
```

***

## 四、运算符
|操作符| 描述 |
|--|--|
| **算数运算符** | **以下为算术运算符** |
| + | 相加、求和 |
| - | 相减、求差|
| * | 相乘、求积 |
| / | 除、求商 |
| % | 取模、求余 |
| ++ | 递增、变量值+1、自增1（++与变量的顺序不同作用不同如下：i++、++i） |
| - - | 递减、变量值-1、自减1（- -与变量的顺序不同作用不同如下：i- -、- -i） |
| i++ | i先参与其他运算后再自增1【只是数值增1过，并未参加运算】（口诀：先用后加） |
| ++i | i先自增1后【自增1后的值】再参与其他运算（口诀：先加后用） |
| i- - | i先参与其他运算后再自减1【只是数值减1过，并未参加运算】（口诀：先用后减） |
| - -i | i先自减1后【自减1后的值】再参与其他运算（口诀：先减后用） |
| **赋值运算符** | **以下为赋值运算符** |
| = | 直接赋值 |
| += | 求和后赋值 |
| -= | 求差后赋值 |
| *= | 求积后赋值 |
| /= | 求商后赋值 |
| %= | 求余后赋值 |
| **关系运算符** | **以下为关系运算符** |
| > | 大于 |
| < | 小于 |
| >= | 大于等于 |
| <= | 小于等于 |
| == | 等于 |
| != | 不等于 |
| **逻辑运算符** | **以下为逻辑运算符** |
| && | 与（并且）：两个操作符，同真为真 |
| II | 或（或者）：两个操作符，有真为真 |
| ！ | 非（取反）：真亦假，假亦真 |
| **三元运算符** | **以下为三元运算符（三目运算符）** |
| ？： | 布尔表达式？结果1：结果2（为真获得结果1，为假则相反） |
```java
public class TestOperation{	
	public static void main(String[] args){
		int a = 10;
		int b = 20;
		System.out.println(a + b);
		System.out.println(30 + 40);	
		
		int c = 20;
		int d = 4;
		System.out.println(c / d);//商
		System.out.println(c % d);//余
		
		int e = 10;
		System.out.println(++e);//11  先加，再打印
		int f = 10;
		System.out.println(f++);//10  先打印，再加
		System.out.println(f);//11
		
		//---------------------------------------------
		
		int g = 5;
		int h = g++;// ++g先加，再赋值 ; g++先赋值,再加
		System.out.println(h);
		System.out.println(g);
	}
}
```

```java
public class TestOperation2{
	public static void main(String[] args){
		int a = 10;
		a = a + 5;
		System.out.println(a);
		
		int b = 10;
		b += 5;//b = b + 5
		System.out.println(b);
		
		int c = 10;
		c *= 3;
		System.out.println(c);
		
		int d = 20;
		d %= 3;// d = d % 3; >>> 20 / 3 求余数
		System.out.println(d);//2
	}
}
```

```java
public class TestOperation3{
	public static void main(String[] args){
		int a = 10;
		int b = 20;
		System.out.println(a >= b);
		System.out.println(a <= b);
		
		boolean bool = a < b;
		System.out.println(bool);
		
		int c = 10;
		int d = 5;
		System.out.println(c == d);
		System.out.println(c != d);
	}
}
```

```java
public class TestOperation4{
	public static void main(String[] args){
		boolean a = true;
		boolean b = true;
		System.out.println( a && b ); //当a==true时，b也==true，最终的结果才是true（真）
		
		boolean c = 10>5;
		boolean d = 8<20;
		System.out.println( c && d );
		
		double javaScore = 100.0;
		double webScore =98.5;
		
		//									false
		//						true		 &&			false
		System.out.println( javaScore == 100 && webScore == 100  );//两门课程，都是满分，结果为true
		
		//									true
		//						true		 ||			false
		System.out.println( javaScore == 100 || webScore == 100 );//两门课程，有一门课是满分，结果为true
	}
}
```

```java
public class TestOperation5{
	public static void main(String[] args){
		double score = 100.0;
		//1.三元运算符可以进行逻辑判断
		System.out.println(  score == 100.0 ? "真棒" : "加油"  );
		
		//2.三元运算符可以在判断后为变量赋值
		String result = score == 100.0 ? "真棒" : "加油";
		System.out.println(result);
		
		//3.赋值，判断，结果为true，赋值给变量1，结果false，赋值给变量2
		int i = score == 100.0? 1 : 2 ;
		System.out.println(i);
	}
}
```



## 五、表达式

表达式就不用解释了吧！
比如：a + b =10；a  > b等，这里就不讲了吧！可以吧！

***

## 六、自动类型提升
### 6.1 进行运算时

 - 两个操作符有一个为double，计算结果提升为double
 - 如果操作符中没有double，有一个为float，计算结果提升为float
 - 如果操作符中没有float，有一个为long，计算结果提升为long
 - 如果操作符中没有long，有一个为int，计算结果提升为int
 - 如果操作符中没有int，均为short或byte，计算结果仍为int
 - **特殊：** 任何类型与String相加（+），视为拼接，结果自动提升为String
```java
public class TestTypeUp{
	public static void main(String[] args){
		int a = 10;
		double b = 20.5;
		double result1 = a + b;
		System.out.println(result1);
		System.out.println(a + b);//运算后的类型即为double
		
		int c = 5;
		float d = 1.2F;
		float result2 = c + d;
		System.out.println(result2);//运算后的类型即为float
		
		int e = 100;
		long f = 50L;
		long result3 = e + f;
		System.out.println(result3);//运算后的类型即为long
		
		byte g = 10;
		int h = 20;
		int result4 = g + h;
		System.out.println(result4);//运算后的类型即为int
		
		short j = 5;
		byte k = 6;
		int result5 = j + k;
		System.out.println(result5);//运算后的类型即为short
		
		//特殊： + 拼接字符串，两个操作数，有一个为String，即完成两者的拼接，结果提升为String
		
		int num1 = 123;
		int num2 = 567;
		String str = "abc";
		String newStr = num1 + num2 + str;//坑 ，两个操作数为数值时，相加； 两个操作数有一个为String，拼接。
		System.out.println(newStr);
	}
}
```



## 七、控制台输入
 - **概念：** 程序运行中，可以在控制台手动录入数据，再让程序继续运行
 - **操作顺序：**
	 * 导入包：import	java.util.Scanner;（在代码行的最上方）
	 * 声明：Scanner 自定义名字 = new Scanner(System.in);
		 * **使用Scanner类中对应的函数（区分类型）：**
		+ .nextInt();//获得整数
		+ .nextDouble();//获得小数
		+ .next();//获得字符串
		+ .next().charAt(0);//获得单个字符（数值控制第几个字符，0则是第一个，依次类推）

<font color="red">**注意：**</font>如果输入了不匹配的数据，则会在终端产生java.util.InputMismatchException的报错信息！

```java
//package xxx.xxx;  包的声明，要求写在源文件的首行
//import 关键字的引入，写在package之后
import java.util.Scanner; //1.引入JDK提供的一个“扫描仪”的工具

public class TestScanner{
	public static void main(String[] args){
		//1.数据类型 变量名 = 值;
		//2.声明Scanner
		Scanner input = new Scanner(System.in); //引用数据类型的声明方式
		System.out.println("请输入一个值：");
		//3.使用：基于Scanner类型的变量名 .nextInt();         “句点”代表“的”
		int i = input.nextInt(); //作用：可以在控制台接收一个整数的值，并保存在变量中。
		System.out.println( "您输入的值为：" + i );// 您输入的值为：123
	}
}
```

```java

import java.util.Scanner;//1.引入包
public class TestScanner2{
	public static void main(String[] args){
		//2.声明Scanner
		Scanner input = new Scanner(System.in);
		System.out.println("请输入：");
		
		//3.使用input的变量接收
		//double result1 = input.nextDouble();
		//System.out.println("值：" + result1);
		
		//4.接收字符串
		//String result2 = input.next();
		//System.out.println("值：" + result2);
		
		//5.接收字符
		//char result3 = input.next().charAt(0); //获取一个字符串的首个字符
		//System.out.println("值：" + result3);
		
		//如果输入了不普配的数据，会产生java.util.InputMismatchException异常（会有问题）
		int result4 = input.nextInt();//接收整数
		System.out.println(result4);
	}
}
```



------



> 上一章[【Java的概述与环境搭建】](https://github.com/Ziphtracks/JavaLearningmanual/blob/master/docs/Java-Standard-Edition/Java的概述与环境搭建.md)

> 下一章[【Java选择结构与分支结构】](https://github.com/Ziphtracks/JavaLearningmanual/blob/master/docs/Java-Standard-Edition/Java选择结构与分支结构.md)

