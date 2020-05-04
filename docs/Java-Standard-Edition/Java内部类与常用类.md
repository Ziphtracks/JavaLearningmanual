# Java内部类与常用类

  * [一、内部类](#一内部类)
     * [1.1 内部类的分类](#11-内部类的分类)
     * [1.2 什么是内部类](#12-什么是内部类)
     * [1.3 成员内部类](#13-成员内部类)
     * [1.4 静态内部类](#14-静态内部类)
     * [1.5 局部内部类](#15-局部内部类)
     * [1.6 匿名内部类](#16-匿名内部类)
  * [二、Object](#二object)
  * [三、Object类常用方法](#三object类常用方法)
     * [3.1 equals与==的区别、重写jdk中equals方法和应用场景](#31-equals与的区别重写jdk中equals方法和应用场景)
        * [3.1.1 == 的概念](#311--的概念)
        * [3.1.2 equals的概念](#312-equals的概念)
        * [3.1.3 字符串的比较](#313-字符串的比较)
        * [3.1.4 重写equals方法思想例子](#314-重写equals方法思想例子)
        * [3.1.5 重写equals方法](#315-重写equals方法)
  * [四、包装类](#四包装类)
     * [4.1 什么是包装类？](#41-什么是包装类)
     * [4.2 对应包装类](#42-对应包装类)
     * [4.3 类型转换与装箱、拆箱](#43-类型转换与装箱拆箱)
     * [4.4 整数缓冲区](#44-整数缓冲区)
  * [五、String类](#五string类)
     * [5.1 String](#51-string)
     * [5.2 String类的常用方法](#52-string类的常用方法)
     * [5.3 可变字符串](#53-可变字符串)
  * [六、BigDecemal类](#六bigdecemal类)
     * [6.1 BigDecimal](#61-bigdecimal)
     * [6.2 利用BigDecimal可以进行数值计算](#62-利用bigdecimal可以进行数值计算)

------

## 一、内部类

### 1.1 内部类的分类

 - 成员内部类
 - 静态内部类
 - 局部内部类
 - 匿名内部类



### 1.2 什么是内部类

 - **概念：** 在一个类的内部再定义一个完整的类
 - **特点：**
	* 编译之后可生成独立的字节码文件
	* 内部类可直接访问外部类的私有成员，而不破坏封装
	* 可为外部类提供必要的内部功能组件

![在这里插入图片描述](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200503204619.png)



### 1.3 成员内部类

- 在类的内部定义，与实现变量、实例方法同级别的类
- 外部类的一个实例部分，创建内部类对象时，必须依赖外部类对象
	* Outer out = new Outer();
	* Inner in = out.new Inner();
- 当外部类、内部类存在重名属性时，会优先访问内部类属性
- 成员内部类不能定义静态成员

```java
/** 
* @author Ziph
* @date 2020年2月28日
* @Email mylifes1110@163.com
* 
* 打印结果：
* This is OuterClassMethod
* 111
* 222
* This is InnerClassMethod
* 222
*/

//成员内部类
public class TestInstanceInnerClass {
	public static void main(String[] args) {
		Outer outer = new Outer();
		outer.method1();//访问外部类方法
		Outer.Inner inner = outer.new Inner();//特殊的实例化方式
		inner.methos2();//访问内部类方法
		System.out.println(inner.num2);//外部实例化后访问内部类num2
	}
}

class Outer {
	private int num1 = 111;
	
	public void method1() {
		System.out.println("This is OuterClassMethod");
	}
	
	//成员内部类
	class Inner {
		//不能定义静态成员，因为成员内部类，不能脱离外部类对象而独立存在
		//static String s = "Hello";
		int num2 = 222;
		
		public void methos2() {
			System.out.println(Outer.this.num1);//访问外部类num1
			System.out.println(num2);//内部直接访问内部类num2
			System.out.println("This is InnerClassMethod");
		}
	}
}
```



### 1.4 静态内部类

- 不依赖外部类对象，可直接创建或通过类名访问，可声明静态成员
- 只能直接访问外部类的静态成员（实例成员需实例化外部类对象）
	* Outer.Inner inner = new Outer.Inner();
	* Outer.Inner.show();

```java
/** 
* @author Ziph
* @date 2020年2月28日
* @Email mylifes1110@163.com
* 
* 打印结果：
* 222
* This is InnerClass Method
* 111
* This is InnerClass StaticMethod
*/

//静态内部类
public class TestStaticInnerClass {
	public static void main(String[] args) {
		System.out.println(Outer.Inner.num2);//访问静态内部类num2
		Outer.Inner inner = new Outer.Inner();
		inner.method2();//访问静态内部类的非静态方法
		Outer.Inner.method1();//直接访问静态内部类的静态方法
	}
}

class Outer {
	private static int num1 = 111;
	
	String s = "Hello";
	
	//静态内部类
	static class Inner {
		static int num2 = 222;
		
		public static void method1() {
			
			System.out.println(Outer.num1);//访问外部类中的私有属性
			
//			System.out.println(Outer.s);//静态不能直接访问非静态
			
			System.out.println("This is InnerClass StaticMethod");
			
		}
		
		public void method2() {
			System.out.println("This is InnerClass Method");
		}
	}
}
```



### 1.5 局部内部类

 - 定义在外部类方法中，作用范围和创建对象范围仅限于当前方法
 - 局部内部类访问外部类当前方法中的局部变量时，因无法保证变量的声明周期与自身相同，变量必须修饰为final
 - 限制类的使用范围

```java
/** 
* @author Ziph
* @date 2020年2月28日
* @Email mylifes1110@163.com
* 
* 打印结果：
* 222
* 111
* 222
* This is Inner method
*/

//局部内部类
public class TestLocalInnerClass {
	public static void main(String[] args) {
		Outer outer = new  Outer();
		outer.method1();
	}
}

class Outer {
	int num1 = 111;
	
	//外部实例方法
	public void method1() {
		//与类和常量池、堆、栈的开始顺序和回收有关，这里必须是final
		//而jdk8提供默认为final，写不写都默认隐式存在
		final int num3 = 333;
		//局部内部类
		class Inner {
			int num2 = 222;
			public void method2() {
				System.out.println(Outer.this.num1);//访问外部类的num1
				System.out.println(this.num2);//访问内部类num2，内部类访问优先
				System.out.println(num3);
				System.out.println("This is Inner method");
			}
		}
		Inner inner = new Inner();//创建Inner对象
		System.out.println(inner.num2);//访问内部类num2
		inner.method2();//访问内部类方法
	}
}
```



### 1.6 匿名内部类

 - 没有类名的局部内部类（一切特征都与局部内部类相同）
 - 必须继承一个父类或者一个接口
 - 定义类、实现类、创建对象的语法合并，只能创建一个该类的对象
 - **优点：** 减少代码量
 - **缺点：** 可读性差
```java
/** 
* @author Ziph
* @date 2020年2月28日
* @Email mylifes1110@163.com
* 
* 打印结果：
* shine in red
* shine in yellow
*/

//匿名内部类（开发中常用）
public class TestAnonymityInnerClass {
	public static void main(String[] args) {
		Lamp lamp = new Lamp();
		//1.这里利用了局部内部类
		class RedLight implements Light {
			public void shine() {
				System.out.println("shine in red");
			}
		}
		lamp.on(new RedLight());
		//2.这里利用了匿名内部类，没有类名，直接去new，去覆盖方法就OK
		lamp.on(new Light() {
			public void shine() {
				System.out.println("shine in yellow");
			}
		});
	}
}

interface Light {
	void shine();
}

class Lamp {
	public void on(Light light) {
		light.shine();
	}
}
```



***
<a id="2"> </a>
## 二、Object

 - 超类、基类，所有类的直接或间接父类，位于继承树的最顶层
 - 任何类，如没有书写extends显示继承某个类，都默认为直接继承Object类，否则为间接继承
 - Object类中所定义的方法，是所有对象都具备的方法
 - Object类型可以存储任何对象
	* 作为参数，可以接受任何对象
	* 作为返回值，可以返回任何对象
***
<a id="3"> </a>
## 三、Object类常用方法
**getClass()方法**

 - public final Class<?> getClass(){}
 - 返回引用中存储的实际对象类型
 - **应用**：通常用于判断两个引用中实际存储对象类型是否一致

**hashCode()方法**

- public int hashCode(){}
- 返回该对象的十六进制的哈希码值
- 哈希算法根据对象的地址或字符串或数字计算出来的int类型的数值
- 哈希吗并不唯一，可保证相同对象返回相同哈希码，尽量保证不同对象返回不同哈希码

**toString()方法**

- public String toString(){}
- 返回该对象的字符串表示（表现形式）
- 可以根据程序需求覆盖该方法，如：展示对象各个属性值

**equals()方法**

- public boolean equals(Object obj){}
- 默认实现为(this == obj)，比较两个对象地址是否相同
- 可进行覆盖，比较两个对象的内容是否相同
- **equals()方法覆盖步骤：**
	* 比较两个引用是否指向同一个对象
	* 判断obj是否为null
	* 判断两个引用指向的实际对象类型是否一致
	* 强制类型转换
	* 依次比较各个属性值是否相同

**finalize()方法**

 - 当对象被判定为垃圾对象时，由JVM自动调用此方法，用以标记垃圾对象
 - 垃圾对象：没有有效引用指向此对象时，为垃圾对象
 - 垃圾回收：由GC销毁垃圾对象，释放数据存储空间
 - 自动回收机制：JVM的内存耗尽，一次性回收所有垃圾对象
 - 手动回收机制：使用System.gc();通知JVM执行垃圾回收



### 3.1 equals与==的区别、重写jdk中equals方法和应用场景

#### 3.1.1 == 的概念

**比较的是变量（栈）内存中存放对象（堆）的地址，用来判断两个两个对象的地址是否相同，也就是说是否指向同一个对象**（听起来也许比较晦涩难懂，但是我下面用通俗易懂的说法来给大家解释！）

- 简单来说，**==** 就是比较的地址是否相同
- 用于比较创建也就是实例化的对象地址，且必须是同一类型
- 比较的结果是true或false
- 还可用于比较两端的变量都代指的数字，比如说：账号假如是int型的，对账号输入的校验就可以用==来比较，因为两端的值都是指向堆中的



#### 3.1.2 equals的概念

equals比较的是两个对象的内容，因为Object类中的equals的默认方法是public boolean equals(Object obj){}，而所有的类都隐式的继承与Object类，所以适用于所有对象。如果没有对equals方法进行重写覆盖的话，而Object中的equals方法返回的却是==的判断（也就是比较的地址）

- 简单来说，equals比较的是内容，但是在没有覆盖Object中equals方法的同时，它比较的也是地址
- 用于比较字符串
- 也可以举同样的例子，比如：账号密码是String类型的话，我们就需要用equals来比较了
- 不同字符串的比较
  - String s = “Hello”; 这种字符串定义是产生了一个对象存储在字符串池中的
  - String s = new String(“Hello”); 虽然看起来都是Hello，但是地址也发生了变化，而这中定义方式，产生了两个对象，一个存储在字符串池中，而另一个存储在堆中
  - 然后用equals比较这两种的时候那就是返回false了

**注意：**== 比equals的运行速度要快，因为只是比较的单纯地址



#### 3.1.3 字符串的比较

```java
/** 
* @author Ziph
* @date 2020年2月28日
* @Email mylifes1110@163.com
*/
public class TestStr {
	public static void main(String[] args) {
		//特殊字符串的比较
        String str1 = "abc";
        String str2 = "abc";
        String str3 = new String("abc");
        System.out.println(str1 == str2);         //都产生一个对象且地址内容都相同，返回true
        System.out.println(str1.equals(str3));    //内容相同返回true
        System.out.println(str1 == str3);         //比较的是地址，地址不同则返回false
	}
}
```



#### 3.1.4 重写equals方法思想例子

学生Ziph在学校的端口（学生信息管理系统）存储自己的学生数据，他存储了一遍，有怕没有存上，然后又存储了一遍。那么我们想想，会出现两个Ziph同学的信息吗？而现实中并不会，对吧。

   假如说存储了两遍，也就是创建了两个Ziph学生的信息对象，开辟了两块空间，那么我们用equals去校验的时候，只判断了两个对象地址，内容就无法判断了。熟知Java是模拟现实世界解决现实问题，那么这不符合现实啊。这位同学存了两遍，就有两个Ziph同学吗？答案很明显肯定不可能的！

   这时候我们就需要重写equals方法了，让他既能判断地址也能判断内容，这就是这个例子中的业务需求！我们以后会根据不同的业务需求去重写equals判断的方法！（而且是经常写！！！）



#### 3.1.5 重写equals方法

```java
/**
 * @Author Ziph
 * @date 2020/2/28
 * @Email mylifes1110@163.com
 */
public class TestStudent {
    public static void main(String[] args) {
        //s1和s2地址不同而内容相同
        Student s1 = new Student("Ziph", 21, "131000042424249090", 100);
        Student s2 = new Student("Ziph", 21, "131000042424249090", 100);
        //s1和s3地址不同内容也不同
        Student s3 = new Student("Tom", 21, "131000042424249090", 99);

        //开始比较
        System.out.println(s1.equals(s2));      //true
        System.out.println(s1.equals(s3));      //false
    }
}

class Student {
    private String name;			//姓名
    private int age;				//年龄
    private String id;				//身份证号码
    private double score;			//分数

    public Student(String name, int age, String id, double score) {
        this.name = name;
        this.age = age;
        this.id = id;
        this.score = score;
    }

    public boolean equals(Object obj) {
        //1.比较两个对象的地址是否一样
        if (this == obj) {
            return true;
        }

        //2.判断对象不能为空，做的非空判断
        if (obj == null) {
            return false;
        }

        //3.确认类型，确认是同一类型，在这个案例中确认是学生对象类型
        if (this.getClass() != obj.getClass()) {
            return false;
        }

        //4.转型（转型的前提是类型肯定是Student，也就是说必须是同一类型，在上面已经做过了判断）
        //转型的目的就是把obj类型强转为学生类，即：Student类型
        Student stu = (Student)obj;

        //5.比较内容，假如是内容相同那么我们就认为他们是同一个人
        //也就是覆盖后的equals
        if (this.name.equals(stu.name) && this.age == stu.age && this.id.equals(stu.id) && this.score == stu.score) {
            return true;
        }
        return false;
    }
}
```



***
<a id="4"> </a>
## 四、包装类
### 4.1 什么是包装类？

 - 基本数据类型所对应的引用数据类型
 - Object可统一所有数据，包装类的默认值是null



### 4.2 对应包装类

|	基本数据类型|	包装类型|
|--| --|
|	byte|	Byte|
|	short|	Short|
|	int|	Inteage|
|	long|	Long|
|	float|	Float|
|	double|	Double|
|	boolean|	Boolean|
|	char|	Character|



### 4.3 类型转换与装箱、拆箱

 - **8中包装类提供不同类型间的转换方式：**
	* Number父类中提供的6个共性方法
	* parseXXX()静态方法
		+ parseByte("123");
	* valueOf()静态方法
		+ Byte b = new Byte.valueOf((byte)10);
		+ Byte b = new Byte.valueOf("20");
 - <font color="red">**注意：**</font>需保证类型兼容，否则抛出NumberFormatException异常
 - JDK5.0之后，自动装箱、拆箱。基本数据类型和包装类自动转换
	* Byte b = 10; //自动装箱（向上转型），将基本类型直接赋值给包装类型
	* Byte b1 = 11; byte b2 = b1; //自动拆箱（向下转型），将包装类型的值，直接赋给基本类型



### 4.4 整数缓冲区

 - Java预先创建了256个常用的整数包装类型对象
 - 在实际应用中，对已创建的对象进行复用
***
<a id="5"> </a>
## 五、String类


### 5.1 String

 - 字符串是常量，创建之后不可改变
 - 字符串字面值存储在字符串池中，可以共享
 - String s = "Hello"; 产生一个对象，字符串池中存储
 - String s = new String("Hello"); //产生两个对象，堆、池中各存储一个



### 5.2 String类的常用方法

> 关于String类常用方法使用的例子请参考：[String类方法集合](https://blog.csdn.net/weixin_44170221/article/details/104618884)

 - **根据下标获取字符**
	* public char charAt(int index)
 - **判断当前字符串中是否包含str**
	* public boolean contains(String str)
 - **将字符串转换成数组**
	* public char[] toCharArray()
 - **查找str首次出现的下标，存在，则返回该下标；不存在，则返回-1**
	* public int indexOf(String str)
	* public int IndexOf(String str, int fromIndex) 
 - **查找字符串在当前字符串中最后一次出现的下标索引**
	* public int lastIndexOf(String str)
	* public int lastIndexOf(String str, int fromIndex) 
 - **返回字符串的长度**
	* public int length()
 - **去掉字符串前后的空格**
	* public String trim()
 - **将小写转成大写**
	* public String toUpperCase()
 - **判断字符串是否以str结尾**
	* public boolean endWith(String str)
 - **将旧字符串替换成新字符串**
	* public String replace(char oldChar, char newChar)
 - **根据str做拆分**
	* public String[] split(String str)
	* public String[] split(String regex, int limit)
	* <font color="red">**注意：**</font> . 、 $、 | 和 * 等转义字符，必须得加 \\（转义字符），多个分隔符，可以用 | 作为连字符



### 5.3 可变字符串

> 了解可变长字符串请参考：[可变长字符串与字符串的解释](https://blog.csdn.net/weixin_44170221/article/details/104630763)

 - **StringBuffer：** 可变长字符串，JDK1.0提供，运行效率慢，线程安全
 - **StringBuilder：** 可变长字符串，JDK5.0提供，运行效率快，线程不安全
***
<a id="6"> </a>

## 六、BigDecemal类


### 6.1 BigDecimal

![在这里插入图片描述](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200504094419.png)

 - **位置：** java.math包中
 - **作用：** 精确计算浮点数
 - **创建方式：** BigDecimal bd = new BigDecimal("1.0");
 - **方法：**
	* BigDecimal add(BigDecimal bd)
	* BigDecimal subtract(BigDecimal bd)
	* BigDecimal multiply(BigDecimal bd)
	* BigDecimal divide(BigDecimal bd)



### 6.2 利用BigDecimal可以进行数值计算

![在这里插入图片描述](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200503204857.png)

 - **除法：** BigDecimal(BigDecimal bd, int scal, RoundingMode mode)
 - **参数scal：** 指定精确到小数点后几位
 - **参数mode：**
	* 指定小数部分的取舍模式，通常采用四舍五入的模式
	* 取值为BigDecimal.ROUND_HALF_UP
***



> 上一章[【Java接口】](https://github.com/Ziphtracks/JavaLearningmanual/blob/master/docs/Java-Standard-Edition/Java接口.md)

> 下一章[【Java集合】](https://github.com/Ziphtracks/JavaLearningmanual/blob/master/docs/Java-Standard-Edition/Java集合.md)

