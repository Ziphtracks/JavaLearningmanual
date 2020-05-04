# Java异常

  * [一、异常的概念](#一异常的概念)
  * [二、异常的分类](#二异常的分类)
  * [三、异常的产生](#三异常的产生)
  * [四、异常的传递](#四异常的传递)
  * [五、异常的处理](#五异常的处理)
     * [5.1 异常的处理方式](#51-异常的处理方式)
     * [5.2 常见异常结果](#52-常见异常结果)
  * [六、自定义异常](#六自定义异常)
     * [6.2 如何自定义异常](#62-如何自定义异常)
     * [6.3 方法覆盖](#63-方法覆盖)
     * [6.4 方法覆盖的小例子](#64-方法覆盖的小例子)
  * [七、自定义异常实例](#七自定义异常实例)

------

## 一、异常的概念

 - **概念：** 程序在运行过程中出现的特殊情况
 - **异常处理的必要性：** 任何程序都可能存在大量的未知问题、错误；如果不对这些问题进行正确处理，则可能导致程序的中断，造成不必要的损失
***
<a id="2"> </a>
## 二、异常的分类

 - **Throwable：** 可抛出的，一切错误或异常的父类，位于java.lang包下
 - **Error：** JVM、硬件、执行逻辑错误，不能手动处理
 - **Exception：** 程序在运行和配置中产生的问题，可处理
	* **RuntimeException：** 运行时异常，可处理，可不处理
	* **CheckedException：** 受查异常，必须处理
***
<a id="3"> </a>
## 三、异常的产生

 - **自动抛出异常：** 当程序在运行时遇到不符合规范的代码或结果时，会产生异常
 - **手动抛出异常：** 语法：throw new 异常类型("实际参数");
 - **产生异常结果：** 相当于遇到return语句，导致程序因异常而终止
***
<a id="4"> </a>
## 四、异常的传递

 - **异常的传递：** 按照方法的调用链反向传递，始终没有处理异常，最终会由JVM进行默认异常处理（打印堆栈跟踪信息）
 - **受查异常：** throws 声明异常，修饰在方法参数列表的后端
 - **运行时异常：** 因可处理可不处理，无需声明异常
***
<a id="5"> </a>
## 五、异常的处理

### 5.1 异常的处理方式

```java
	try {
		//可能出现异常的代码
	} catch (Exception e) {
		//异常处理的相关代码，如：getMessage()、printStackTrace()
	} finally {
		//无论是否异常，都需执行的代码结构，常用于释放资源
	}
	
```

 - printStackTrace()
	* 打印堆栈跟踪信息
 - getMessage()
	* 返回错误详细信息（没有跟踪信息只有错误原因）



### 5.2 常见异常结果

```java
	//处理异常方式支持以下几种写法
	
	try {} catch {}

	try {} catch {} catch {}

	try {} catch {} finally {}

	try {} catch {} catch {} finally {}
	
	try {} finally {}
```
<font color="red">**注意：**</font>多重catch，遵循从子（小）到父（大）的顺序，父类异常在最后。否则会出现编译错误
****
<a id="6"> </a>
## 六、自定义异常

### 6.2 如何自定义异常

 - 需继承自Exception（受查异常）或Exception的子类，常用RuntimeException（运行时异常）
 - 必要提供的构造方法：
	* 无参数构造方法
	* String message参数的构造方法
 - System.err.println(); （了解即可）
	* System.out指的是标准输出
	* System.err则指的是错误输出，如果你用LOG4J记录日志的话，且设定错误等级的话，System.err的输出是将记录到日志中
	* 使用err打印出的字符串，在eclipse的console会显示成红色的（以示警告异常结果），如下打印结果图
	* 这个错误输出，在自定义异常小实例里会用到
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200310132202438.png)



### 6.3 方法覆盖

 - **带有异常声明的方法覆盖：**
	* 方法名、参数列表、返回值类型必须和父类相同
	* 子类的访问修饰符符合父类向相同或是比父类更宽
	* 子类中的方法，不能抛出比父类更宽泛的异常



### 6.4 方法覆盖的小例子

```java
import java.io.IOException;
import java.sql.SQLException;
/** 
* @author Ziph
* @date 2020年3月10日
* @Email mylifes1110@163.com
*/
public class TestOverrideExceptionMethod {
	public static void main(String[] args) {
		Super sup = new Sub();// 父类引用指向子类对象 多态
		try {
			sup.method();// 在编译期间，调用的父类中声明的方法是有异常的，需要处理
		} catch (Exception e) {
			e.printStackTrace();// 处理方案之1：打印堆栈跟踪信息
		}

	}
}

// 带有异常的方法覆盖
// 1.父类中方法声明了异常。子类重写后可声明也可不声明
// 2.父类中方法没有声明异常，则子类也不可以声明异常。
// 3.父类中方法声明了异常，子类可以声明的异常与其相等或是其子类
// 4.子类可以声明比父类更多的异常。必须小于其父类声明的异常（子类）
class Super {
	public void method() throws Exception {
		System.out.println("method in  Super");
	}
}

class Sub extends Super {
	public void method() throws ClassNotFoundException, RuntimeException, IOException, SQLException {
		System.out.println("method in  Sub");
	}
}

// 带有异常的接口方法也是与父类方法覆盖的原理相同，这里我就不再一一重复了
interface Printable {
	public void print() throws Exception;
}

class MyClass implements Printable {
	public void print() throws ClassNotFoundException, RuntimeException {

	}
}
```
***
<a id="7"> </a>
## 七、自定义异常实例

```java
import java.util.InputMismatchException;
/** 
* @author Ziph
* @date 2020年3月10日
* @Email mylifes1110@163.com
*/
public class TestDefinedException {
	public static void main(String[] args) {
		Student stu = new Student();
		try {
			stu.setAge(250);//是可能出现异常的代码
		}catch(Exception e) {
			System.err.println(e.getMessage());//只获得报错的原因即可
		} 
		
		try {
			stu.setSex("未知");//受查异常，编译期间就报错，需要处理
		}catch(SexMismatchException se) {//根据方法声明的异常，捕获相应的类型
			System.err.println(se.getMessage());
		}catch(Exception e ) {
			e.printStackTrace();
		}
		
		
//		Class.forName("xxx.xxx");//参数（包名.类名）   可能写错！
	}
}

//受查异常(是在编译期间，就必须处理的异常！ 需要声明出去)
class SexMismatchException extends Exception{
	public SexMismatchException() {}
	public SexMismatchException(String message) {
		super(message);
	}
}

//运行时异常
class AgeInputException extends RuntimeException{
	
	public AgeInputException() {}//支持创建无异常原因信息的异常对象
	public AgeInputException(String message) {//提供有参构造方法，支持编写异常原因信息
		super(message);//调用父类的有参构造方法，为message属性赋值。
	}
}
//在应用场景下，可以根据自身的需要，自定义异常。
class Student{
	private int age;//年龄
	private String sex;//性别  男  女
	
	public void setSex(String sex) throws SexMismatchException {
	//告知调用者，使用该方法，会存在异常。必须处理.声明的异常类型最好与抛出的异常类型一致
		if(sex.equals("男") || sex.equals("女")) {
			this.sex = sex;
		}else {
			//在用户输入一个性别后！就做好提醒！性别的输入可能不准确！   受查异常。
			throw new SexMismatchException("性别输入的值为:“男”或者“女”");
		}
	}
	public String getSex() {
		return this.sex;
	}
	
	
	public int getAge() {
		return this.age;
	}
	public void setAge(int age){
		if(age > 0 && age < 123) {
			this.age = age;
		}else {
			throw new AgeInputException("年龄的赋值应该在0岁到123岁之间");
			//抛运行时异常的父类。 不合理。现存的定义好的异常，没有符合现在程序的场景
		}
	}
}
```
***



> 上一章[【Java集合】](https://github.com/Ziphtracks/JavaLearningmanual/blob/master/docs/Java-Standard-Edition/Java集合.md)

> 下一章[【Java多线程】](https://github.com/Ziphtracks/JavaLearningmanual/blob/master/docs/Java-Standard-Edition/Java多线程.md)