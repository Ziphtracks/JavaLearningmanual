# Java三个修饰符

  * [一、abstract](#一abstract)
     * [1.1 什么是抽象？](#11-什么是抽象)
     * [1.2 不该被创建的对象](#12-不该被创建的对象)
  * [二、抽象类、抽象方法](#二抽象类抽象方法)
     * [2.1 抽象类](#21-抽象类)
     * [2.2 抽象类的作用](#22-抽象类的作用)
     * [2.3 不该被实现的方法](#23-不该被实现的方法)
     * [2.4 抽象方法](#24-抽象方法)
     * [2.5 abstract总结](#25-abstract总结)
  * [三、static](#三static)
     * [3.1 了解静态](#31-了解静态)
     * [3.2 static概念总结](#32-static概念总结)
  * [四、静态成员、类加载](#四静态成员类加载)
     * [4.1 静态方法](#41-静态方法)
     * [4.2 静态的特点](#42-静态的特点)
     * [4.3 类加载](#43-类加载)
     * [4.4 静态代码块](#44-静态代码块)
     * [4.5 static总结](#45-static总结)
  * [五、final](#五final)
     * [5.1 什么是final？什么是最终？](#51-什么是final什么是最终)
  * [六、最终类、方法、常量](#六最终类方法常量)
     * [6.1 final类](#61-final类)
     * [6.2 final变量](#62-final变量)
     * [6.3 实例常量](#63-实例常量)
     * [6.4 静态常量](#64-静态常量)
        * [6.5 对象常量](#65-对象常量)
        * [6.6 final总结](#66-final总结)

------

## 一、abstract

### 1.1 什么是抽象？

> 是似而非的，像却又不是；具备某种对象的特征，但不完整。



### 1.2 不该被创建的对象

>大家都知道动物，有小有大，小到小猫、小狗，大到狮子、老虎、大象。可是有没有注意过，动物虽是一个对象，但是它实际是什么呢？这么想想是不是他不应该被new出来呢？

![在这里插入图片描述](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200503202952.png)
***
<a id="2"> </a>
## 二、抽象类、抽象方法

### 2.1 抽象类
**应用：** abstract修饰类，此类不能new对象
![在这里插入图片描述](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200503203017.png)



### 2.2 抽象类的作用

![在这里插入图片描述](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200503203045.png)



### 2.3 不该被实现的方法

![在这里插入图片描述](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200503203105.png)

### 2.4 抽象方法

![在这里插入图片描述](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200503203125.png)



### 2.5 abstract总结

 - abstract修饰类：不能new对象，但是可以声明引用
 - abstract修饰方法：只有方法声明，没有方法实现（需包含在抽象类中）
 - 抽象类中不一定有抽象方法，但有抽象方法的类一定是抽象类
 - 子类继承抽象类后，必须覆盖父类所有的抽象方法，否则子类也必须是抽象类
***
<a id="3"> </a>
## 三、static

### 3.1 了解静态

>先了解下**实例属性**，**实例属性**是每个对象各自持有的独立空间（多份），对象单方面修改，不会影响其他对象
而**静态属性**呢？静态属性是整个类共同持有的共享空间（一份），任何对象修改，都会影响其他对象



### 3.2 static概念总结

 - 静态（static）可以修饰属性和方法
 - 称为静态属性（类属性）、静态方法（类方法）
 - 静态成员是全类所有对象共享的成员
 - 在全类中只有一份，不因创建多个对象而产生多份
 - 不必创建对象，可直接通过类名访问
![static概念总结示例](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200503203312.png)
***
<a id="4"> </a>
## 四、静态成员、类加载
### 4.1 静态方法
![在这里插入图片描述](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200503203357.png)



### 4.2 静态的特点

 - 静态方法允许直接访问静态成员
 - 静态方法不能直接访问非静态成员
 - 静态方法中不允许使用this或是super关键字
 - 静态方法可以继承，但不能重写、没有多态



### 4.3 类加载

 - JVM首次使用某个类时，需通过CLASSPATH查找该类的.class文件
 - 将.class文件中对类的描述信息加载到内存中，进行保存，如：包名、类名、属性、方法、构造方法...
 - 加载时机：
 	* 创建对象
 	* 创建子类对象
 	* 访问静态属性
 	* 调用静态方法
 	* Class.forName("全限定名"); 



### 4.4 静态代码块

![在这里插入图片描述](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200503203426.png)

### 4.5 static总结

 - static修饰的成员为静态成员，无需创建对象，可直接通过类名访问
 - 静态方法不能直接访问非静态成员
 - 静态方法中不能使用this或super
 - 静态方法可以继承，但是不能重写、没有多态
 - 静态代码块在类加载时被执行，且只执行一次
***
<a id="5"> </a>
## 五、final

### 5.1 什么是final？什么是最终？
 - 概念：最后的，不可更改的
 - final可修饰的内容：
 	* 类（最终类）
 	* 方法（最终方法）
 	* 变量（最终变量）
***
<a id="6"> </a>
## 六、最终类、方法、常量
### 6.1 final类

 - final修饰类：此类不能被继承
	 * String、Math、System均为final修饰的类，不能被继承
 - final修饰方法：此方法不能被覆盖
	* 意为最终方法，不支持子类以覆盖的形式修改



### 6.2 final变量

**final修饰变量：** 此变量值不能被改变（常量）
![在这里插入图片描述](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200503203605.png)



### 6.3 实例常量

![在这里插入图片描述](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200503203650.png)



### 6.4 静态常量

![在这里插入图片描述](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200503203713.png)



#### 6.5 对象常量

![在这里插入图片描述](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200503203735.png)



#### 6.6 final总结

 - final修饰类：此类不能被继承
 - final修饰方法：此方法不能被覆盖
 - final修饰变量：此变量值不能被改变（无初始值，只允许赋值一次）
	 * 局部变量：显示初始化
	 * 实例变量：实现初始化、动态代码快、构造方法
	 * 静态常量：显示初始化、静态代码块
	 * 基本数据类型常量：值不可变
	 * 引用数据类型常量：地址不可变

***



> 上一章[【Java面向对象三大特性】](https://github.com/Ziphtracks/JavaLearningmanual/blob/master/docs/Java-Standard-Edition/Java面向对象三大特性.md)

> 下一章[【Java接口】](https://github.com/Ziphtracks/JavaLearningmanual/blob/master/docs/Java-Standard-Edition/Java接口.md)

