# Java接口

  * [一、什么是接口](#一什么是接口)
     * [1.1 接口的语法](#11-接口的语法)
     * [1.2 什么是接口呢？](#12-什么是接口呢)
  * [二、接口与类的异同](#二接口与类的异同)
  * [三、接口的规范](#三接口的规范)
     * [3.1 接口的规范](#31-接口的规范)
        * [3.2 接口引用](#32-接口引用)
  * [四、接口的应用](#四接口的应用)
     * [4.1 接口的多态](#41-接口的多态)
     * [4.2 接口引用和对象的关系](#42-接口引用和对象的关系)
     * [4.3 常见关系](#43-常见关系)
  * [五、常量接口](#五常量接口)
     * [5.1 常量接口](#51-常量接口)
  * [六、接口回调](#六接口回调)
  * [七、接口的好处](#七接口的好处)
  * [八、总结](#八总结)

------

## 一、什么是接口

### 1.1 接口的语法

接口相当于特殊的抽象类，定义方式、组成部分与抽象类相似
![在这里插入图片描述](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200503203957.png)



### 1.2 什么是接口呢？

 - **微观概念：** 接口是一种能力和约定
	* **接口的定义：** 代表了某种能力
	* **方法的定义：** 能力的具体要求
 - **经验：** Java为单继承，当父类的方法和无法满足子类需求时，可以实现接口扩充子类能力
 - <font color="red">**注意：**</font> 接口支持多实现，可以为类扩充多种能力
***
<a id="2"> </a>
## 二、接口与类的异同
**相同点**

 - 可编译成字节码文件
 - 不能创建对象
 - 可以作为引用类型
 - 具备Object类中所定义的方法

**不同点**

 - 所有属性都是公开静态常量，隐式使用public static final 修饰
 - 所有方法都是公开抽象方法，隐式使用public abstract 修饰
 - 没有构造方法、动态代码块、静态代码块
***
<a id="3"> </a>
## 三、接口的规范

### 3.1 接口的规范

 - 任何类在实现接口时，必须实现接口中所有的抽象方法，否则此类为抽象类
 - 实现接口中的抽象方法时，访问修饰符必须是public



#### 3.2 接口引用

 - 同父类一样，接口也可以声明为引用，并指向实现类对象
 - <font color="red">**注意：**</font>
	* 仅可调用接口中所声明的方法，不可以调用实现类中独有方法
	* 可强转回实现类本身类型，进行独有方法调用
***
<a id="4"> </a>
## 四、接口的应用
### 4.1 接口的多态

![在这里插入图片描述](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200503204052.png)



### 4.2 接口引用和对象的关系

![在这里插入图片描述](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200503204148.png)

### 4.3 常见关系

 - **类与类：**
	* 单继承
	* extends 父类名称
 - **类与接口：**
	* 多实现
	* implements 接口名称1,接口名称2,接口名称3......
 - **接口与接口：**
	* 多继承
	* extends 父接口1,父接口2,父接口3......
***
<a id="5"> </a>
## 五、常量接口
### 5.1 常量接口

 - 将多个常用与表示状态或固定值得变量，以静态常量的形式定义在接口中统一管理，提高代码可读性
<a id="6"> </a>
## 六、接口回调
**再看接口回调之前再一次理解什么是接口如下：**

 - **图像意为：**
 - **先有接口的使用者，后有接口的实现者**
 - **宏观概念：接口是一种标准**
![在这里插入图片描述](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200503204240.png)

**接口回调案例：探究Comparable接口中CompareTo的方法，模拟利用其中的Arrays.sort进行排序** 

底层原理只是让我们学习了解找到自己学习的思路，其实jdk都已经在1998年帮后人写好了，我们去实现写好的jdk接口就可以。其中最下面还有一个实现jdk提供的接口来进行学生数组排序的方式！（TestStudentSort）

- Comparable接口
- Tools工具类
- TestCallback学生测试类（先看它，它是故事的开始，当然也是故事的结束）

```java
/**
 * @Author Ziph
 * @date 2020/2/26
 * @Email mylifes1110@163.com
 * 
 * 初衷（目的）：
 * 模仿jdk的API底层原理的写法，寻找自己学习接口的思路
 * 我们要具体实现用数组进行存储学生信息，通过实现接口，调用工具的排序方法对学生成绩的排序
 * 进而打印排序后的所有学生信息
 */
public class TestCallback {
    public static void main(String[] args) {
    	/**
		 * 2.创建学生数组并添加数组元素（学生姓名、年龄、姓名）
		 */
        Student[] students = new Student[] {
                new Student("Ziph", 21, 99),
                new Student("Tom", 20, 88),
                new Student("Marry", 22, 92),
                new Student("Eav", 25, 66)
        };

        /**
		 * 7.调用排序工具对学生对象进行排序
		 */
        Tools.sort(students);//默认升序

        /**
		 * 8.打印学生按成绩排序后的信息
		 */
        for (int i = 0; i < students.length; i++) {
            System.out.println(students[i].name + "   "
                    + students[i].age + "岁   "
                    + students[i].score  + "分");
        }
    }
}

/**
 * 1.创建学生类，创建属性并写上构造方法
 */
class Student implements Comparable<Student> {	/**
												 * 5.让学生类实现接口
 												 */
    String name;
    int age;
    double score;

    public Student() {
    }

    public Student(String name, int age, double score) {
        this.name = name;
        this.age = age;
        this.score = score;
    }

    /**
	 * 6.既然学生类已经实现了接口，那么我们就要实现接口中的方法
 	 */
    public int compareTo(Student student) {
        //根据学生成绩进行升序
        if (this.score > student.score) {
            return 1;//还记API中的定义吗，返回正整数是升序
        } else if (this.score < student.score) {
            return -1;//返回正负数是降序
        }
        return 0;//那当然返回0就是位置不发生改变了
    }
}
```
**Comparable接口**
```java
/**
 * @Author Ziph
 * @date 2020/2/26
 * @Email mylifes1110@163.com
 *
 * 接口等价于标准
 * 只有实现接口的对象才能排序
 * 所以我们要先制定一个排序标准
 *
 * 探究Comparable<T>的底层原理
 * 而Interface Comparable<T>位于JDK-API中的java.lang包下
 *
 * 以下是jdk中的说辞：
 * public interface Comparable<T>
 * 此接口对实现它的每个类的对象进行了总排序。这个顺序被称为类的空自然排序，和类的 compareTo方法称为空自然比较方法。
 *
 * int compareTo(T o)
 * 将此对象与指定的对象进行比较，以。返回一个负整数、零或一个正整数，因为这个对象小于、等于或大于指定的对象。
 *
 * 我们要知道数组排序就是Arrays.sort，而Arrays.sort就是利用此接口传入对象（泛型标准对象）利用Arrays中写的sort方法进行排序的
 * 那下一步我们要模仿着底层原理，再去创建一个Arrays类，这里我创建一个Tools类代表
 *
 */
 
/**
 * 3.写一个接口对实现Student类的对象进行总排序
 */
public interface Comparable<T> {
    public int compareTo(T student);
}
```
**Tools工具类**

```java
/**
 * @Author Ziph
 * @date 2020/2/26
 * @Email mylifes1110@163.com
 *
 * 此类可以被称为工具类，简单来说就是排序方法所在的类，就是一个需要传入对象的排序工具
 *
 * 当写完工具之后就要想，工具是用来用的，即为调用，所以我们就要返回TestCallback类中了（去寻找第5步）
 */
 
/**
 * 4.写一个像Arrays一样的类，定义一个排序方法sort，这样也可以像Arrays.sort一样的调用排序方法了
 */
public class Tools {
    public static void sort(Student[] student) {
        //这里利用了简单易懂的冒泡排序，进行多轮对象的排序
        //虽然说时间复杂度有点高，但是冒泡排序法都明白，通俗易懂
        for (int i = 0; i < student.length - 1; i++) {
            for (int j = 0; j < student.length - 1; j++) {
                //在这里我们传入制定的标准对象（接口中制定排序需要传入的对象，即泛型），即：Student数组中的学生对象
                //传入对象之后并做了一个强转
                //就是把学生数组里面的值强转成为接口定义的泛型标准（制定排序中的泛型标准对象）
                Comparable currentStudent = (Comparable) student[j];
                //因为交换是需要两个值判断条件之后交换的，所以student[i]是第一个判断是否交换的对象
                //利用n接收另一个需要交换的对象，即student[i + 1]
                //返回整数this靠后，也就是要接收student[i + 1]，返回了整数即为升序
                //而返回负数呢，就要接收一个student[i]就可以了，即为降序
                int n = currentStudent.compareTo(student[j + 1]);
                //两值交换的条件，注意n>0是接口中定义的升序标准（升序）
                if (n > 0) {
                    //利用临时变量temp进行两值交换
                    Student temp = student[j];
                    student[j] = student[j + 1];
                    student[j + 1] = temp;
                }
            }
        }
    }
}
```

![在这里插入图片描述](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200530133931.png)

**TestStudentSort**

```java
import java.util.Arrays;

/** 
* @author Ziph
* @date 2020年2月26日
* @Email mylifes1110@163.com
*/
public class TestStudentSort {
	public static void main(String[] args) {
		Student[] students = new Student[] {
			new Student("Ziph", 99),
			new Student("Marry", 66),
			new Student("Tom", 88)
		};
		Arrays.sort(students);
		for (int i = 0; i < students.length; i++) {
			System.out.println(students[i].name + "  成绩：" + students[i].score);
		}
	}
}

class Student implements Comparable<Student> {
	String name;
	double score;
	
	public Student(String name, double score) {
		this.name = name;
		this.score = score;
	}
	
	public int compareTo(Student stu) {
		if (this.score > stu.score) {
			return 1;
		} else if (this.score < stu.score) {
			return -1;
		}
		return 0;
	}
}
```

***
<a id="7"> </a>

## 七、接口的好处
 - 程序的耦合度降低
 - 更自然的使用多态
 - 设计与实现完全分离
 - 更容易搭建程序框架
 - 更容易更换具体实现
***
<a id="8"> </a>
## 八、总结
**接口（interface）是与类并行的一个概念**

 1. 接口可以看作是一个特殊的抽象类，是常量与抽象方法的一个集合，不能够包含变量、一般的方法
 2. 接口是没有构造器的
 3. 接口定义的就是一种功能，此功能可以被类所实现（implements），比如：class CC extends 				  DD implements AA
 4. 实现接口的类，必须要重写其中的所有的抽象方法，方可实例化，若没有重写所有的抽象方法，则此类仍为一个抽象类
 5. 类可以实现多个接口，但是java中的类的继承是单继承的
 6. 接口与接口之间也是继承的关系，而且可以实现多继承

***



> 上一章[【Java三个修饰符】](https://github.com/Ziphtracks/JavaLearningmanual/blob/master/docs/Java-Standard-Edition/Java三个修饰符.md)

> 下一章[【Java内部类与常用类】](https://github.com/Ziphtracks/JavaLearningmanual/blob/master/docs/Java-Standard-Edition/Java内部类与常用类.md)