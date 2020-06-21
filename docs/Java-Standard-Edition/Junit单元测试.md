* [Junit单元测试](#junit%E5%8D%95%E5%85%83%E6%B5%8B%E8%AF%95)
    * [一、什么是单元测试？](#%E4%B8%80%E4%BB%80%E4%B9%88%E6%98%AF%E5%8D%95%E5%85%83%E6%B5%8B%E8%AF%95)
    * [二、单元测试的重要性](#%E4%BA%8C%E5%8D%95%E5%85%83%E6%B5%8B%E8%AF%95%E7%9A%84%E9%87%8D%E8%A6%81%E6%80%A7)
    * [三、黑盒测试与白盒测试](#%E4%B8%89%E9%BB%91%E7%9B%92%E6%B5%8B%E8%AF%95%E4%B8%8E%E7%99%BD%E7%9B%92%E6%B5%8B%E8%AF%95)
      * [3\.1 黑盒测试](#31-%E9%BB%91%E7%9B%92%E6%B5%8B%E8%AF%95)
      * [3\.2 白盒测试](#32-%E7%99%BD%E7%9B%92%E6%B5%8B%E8%AF%95)
    * [四、单元测试思想传递](#%E5%9B%9B%E5%8D%95%E5%85%83%E6%B5%8B%E8%AF%95%E6%80%9D%E6%83%B3%E4%BC%A0%E9%80%92)
    * [五、单元测试的编码规范](#%E4%BA%94%E5%8D%95%E5%85%83%E6%B5%8B%E8%AF%95%E7%9A%84%E7%BC%96%E7%A0%81%E8%A7%84%E8%8C%83)
    * [六、@Test测试与Assert断言步骤](#%E5%85%ADtest%E6%B5%8B%E8%AF%95%E4%B8%8Eassert%E6%96%AD%E8%A8%80%E6%AD%A5%E9%AA%A4)
    * [七、@Before和@After注解](#%E4%B8%83before%E5%92%8Cafter%E6%B3%A8%E8%A7%A3)
    * [八、自定义@MyTest注解实现单元测试](#%E5%85%AB%E8%87%AA%E5%AE%9A%E4%B9%89mytest%E6%B3%A8%E8%A7%A3%E5%AE%9E%E7%8E%B0%E5%8D%95%E5%85%83%E6%B5%8B%E8%AF%95)
         * [MyTest注解类](#mytest%E6%B3%A8%E8%A7%A3%E7%B1%BB)
         * [TestJunit单元测试类](#testjunit%E5%8D%95%E5%85%83%E6%B5%8B%E8%AF%95%E7%B1%BB)
         * [MyTestDemo测试类（主要实现功能并测试）](#mytestdemo%E6%B5%8B%E8%AF%95%E7%B1%BB%E4%B8%BB%E8%A6%81%E5%AE%9E%E7%8E%B0%E5%8A%9F%E8%83%BD%E5%B9%B6%E6%B5%8B%E8%AF%95)
      * [执行结果图](#%E6%89%A7%E8%A1%8C%E7%BB%93%E6%9E%9C%E5%9B%BE)

# Junit单元测试

### 一、什么是单元测试？

> 在计算机编程中，单元测试（英语：Unit Testing）又称为模块测试, 是针对程序模块（软件设计的最小单位）来进行正确性检验的测试工作。 程序单元是应用的最小可测试部件。简单来说，就是测试数据的稳定性是否达到程序的预期。



### 二、单元测试的重要性

> 谈到测试，我们为什么要对程序进行测试呢？测试会为程序带来什么好处呢？

首先，我们每个人都会犯错误。毕竟人嘛，没有完美的谁谁谁。在程序中犯错误就像生活中犯错一样，错误不是一天两天而形成的。当需要改的时候，也不是能花少的时间而改掉的。这里我谈到的程序中的错误，就是著名的Bug。

我们可能在不经意间写错，如果你到了最后阶段去检验项目成果时，发现会有错误，这时候我们很难找到Bug的源头在哪里。我们都知道，有可能一处出错会导致步步错的情况。

然而，测试就在我们的上述说法中，显得尤为重要。有了测试的概念，这时候当我们做完项目的一个小模块，我们先去测试一下这个小模块是否正确或达到预期，如果错误或者没有达到预期就需要反复修改，直到正确或达到预期。这里所说的也就是使用了单元测试。

当我们一块一块的做完并一块一块的测试后OK后，这时候你会发现项目像拼图一样拼在了一起。简单来说，这就是单元测试存在的重要意义！

**声明：** 术语显得过于生硬，白话文也许会让你们了解，请谅解我的大白话！谢谢！



### 三、黑盒测试与白盒测试

#### 3.1 黑盒测试

> 黑盒测试又称功能测试。它通过测试来检验程序是否能正常使用。在测试过程中，我们把程序看作为一个打不开的盒子，黑黑的什么也看不见，内部代码怎么写的也不知道。也就是说完全不考虑任何内部结构和性能的情况下为程序传入（Input）参数，然后去查看程序输出（Output）是否在正常范围内，通常这时候我们需要多次测试才得出结论。
>
> **特点：** 不需要我们中间参与编写任何代码，传入参数值后查看程序是否正常或达到预期值。

![image-20200531202329881](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200531202332.png)



#### 3.2 白盒测试

> 白盒测试又称结构测试。在这里白盒测试与黑盒测试不同，在测试过程中，我们可以把程序看作为一个可以看到的白色透明盒子，我们清楚盒子内部的代码和结构。我们在使用白盒测试的时候，测试人员必须检查程序的内部结构，而要从检查程序的逻辑开始，一步一步的检查传入参数（Input）并查看程序的运行过程和输出（Output）结果，最终得出测试数据。这也就是“白盒测试”为什么叫穷举路径测试的原因，再次强调，是因为我们清楚程序的内部结构和代码，从而检查所有结构的正确与否和预期值。
>
> **注意：** 单元测试就是白盒测试的一种！

![image-20200531202615957](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200531202618.png)



### 四、单元测试思想传递

> 在这里我们忘掉单元测试，使用平时我们自己测试的方式来测试数据，看看它有什么缺点。
>
> 首先，我先创建在一个计算器类，在其中随便创建两个运算方法，供我们模拟测试。

```java
package com.mylifes1110.java;

/**
 * 计算器
 */
public class Calculator {
    /**
     * 加法
     */
    public int add(int num1, int num2) {
        return num1 + num2;
    }

    /**
     * 减法
     */
    public int cut(int num1, int num2) {
        return num1 - num2;
    }
}
```

> 然后我们再去编写测试类，创建对象，先去测试加法。

```java
package com.mylifes1110.java;

public class Test {
    public static void main(String[] args) {
        Calculator calculator = new Calculator();
        //测试加法
        System.out.println(calculator.add(10, 10));		//20		正确
    }
}
```

> 测试后，我们查看结果为正确的，然后进行下一步测试。因为我们有两条数据需要测试，平时在测试完一条数据后需要把测试过的数据注释掉，再进行接下来的测试。如下：

```java
package com.mylifes1110.java;

//测试类
public class Test {
    public static void main(String[] args) {
        Calculator calculator = new Calculator();
        //测试加法
//        System.out.println(calculator.add(10, 10));		//20		正确
        //测试减法
        System.out.println(calculator.cut(10, 10));			//0		    正确
    }
}
```

> 测试完两条数据后，再去继续编写我们的项目代码。
>
> 其实，我们有没有发现这样做很麻烦呢？上一步骤为什么需要把测试过的数据注释掉呢？
>
> 答案来了，的确很麻烦，至于为什么注释掉，那是因为我们在写项目代码的时候，需要测试，不可能在同一个测试类测试这么多数据。而且在测试的过程中，数据与数据之间是有关联是互相影响的。这就会造成我们的测试不准确从而影响后续编码进度和项目准确性。

> 了解了上述测试的缺点，我们也需要了解单元测试的思想了。单元测试需要拥有什么样的特点才能解决掉上述测试的麻烦呢？其实我们的单元测试也是通过编码规范来约束的。至于编码规范嘛，你还不去看第五章？



### 五、单元测试的编码规范

> 单元测试的编码规范有这几条，小伙伴们拿小本本记好了！
>
> - **类名：** 定义测试类，类名是由`被测试类名Test`构成。例如：CalculatorTest
> - **包名：** 定义的测试类需要放在`xxx.xxx.xxx.test`包中。例如：package com.mylifes1110.test;
> - **方法名：** 测试方法的方法名有两种定义方式`test测试方法`和`测试方法`。例如：testAdd和add
> - **返回值：** 因为我们的方法只是在类中测试，可以独立运行，所以不需要处理任何返回值，所以这里使用`void`。例如：public void add();
> - **参数列表：** 因为我们的方法是用来测试的，至于参数列表的传入是没有必要的。我们在测试的时候自行传入需要的参数测试即可。所以在此参数列表为`空`。例如：例如：public void add();
> - **@Test注解：** 测试是需要运行来完成的。如果我们只有一个main方法，显然在结构上还是需要我们去注释掉测试过的。解决此问题这里我们需要在测试方法上方加`@Test`注解来完成测试，只要是加该注解的方法，可以单独运行此方法来完成测试。
> - **@Test注解jar包Junit4、5：** @Test注解是需要我们导入jar包才能使用的。jar包有两个分别是：`junit-4.13-rc-2`和`hamcrest-core-1.3`。这里我使用的是Junit4，单元测试还有Junit5，版本差异我没有做了解。主要是可以完成测试才是硬道理！
> - **IDEA快捷导入Junit4、5：** 使用IDEA的小伙伴，你们的福音来了。我们可以先创建测试类和方法，然后在测试方法上方加入`@Test`注解，此时IDEA显示的@Test注解是飘红的，这时候我们使用`Alt + Enter`组合键来打开导入Junit单元测试列表，然后再选择Junit4或者Junit5确定即可导入成功！这时候再查看注解就没有飘红了！

![image-20200531213742156](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200531213744.png)



### 六、@Test测试与Assert断言步骤

| 断言方法                                                     | 描述                                               |
| ------------------------------------------------------------ | -------------------------------------------------- |
| assertNull(java.lang.Object object)                          | 检查对象是否为空                                   |
| assertNotNull(java.lang.Object object)                       | 检查对象是否不为空                                 |
| assertEquals(long expected, long actual)                     | 检查long类型的值是否相等                           |
| assertEquals(double expected, double actual, double delta)   | 检查指定精度的double值是否相等                     |
| assertFalse(boolean condition)                               | 检查条件是否为假                                   |
| assertTrue(boolean condition)                                | 检查条件是否为真                                   |
| assertSame(java.lang.Object expected, java.lang.Object actual) | 检查两个对象引用是否引用同一对象（即对象是否相等） |
| assertNotSame(java.lang.Object unexpected, java.lang.Object actual) | 检查两个对象引用是否不引用统一对象(即对象不等)     |

> 首先，我们先去按照Junit单元测试规范来书写测试代码，如下：

![image-20200531215145357](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200531215147.png)

> 然后我们会发现每一个需要测试的方法左边都有一个绿色的小三角，这是用来单元测试运行的。也就是说，我们可以只运行某一个方法去测试。现在我们去运行add()方法，结果如下：

![image-20200531224224937](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200531224226.png)

> 这时候，我们发现控制台是绿色的并输出的打印结果，这说明我们的程序没有问题。如果我在其中加入一个算数异常会有怎么样的结果呢？如下：

![00](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200531224853.png)

> 在这里我们会发现，控制台变为了红色，并给出来报错信息。这证明了我们的程序测试后出现了问题。这仅是程序正确与失败的关系。
>
> 如果我们需要一个预期值呢？那么测试的结果不是我想要的预期值，而程序还是绿色的，证明程序没有问题怎么办呢？有的小伙伴会说，我们已经查看了打印控制台的信息，打印结果不是预期值就说明程序有问题，需要去修改呗。对，其实这样说是没有任何毛病的。但是，我们在开发中，如果由于你的疏忽或者疲劳看到了绿色就觉得程序没有问题怎么办呢？所以面对这个问题，我们在单元测试的时候，尽量不要去打印预期值，需要注重观察是绿色和红色比较好，它可以直观的反映程序的是否准确性和达到预期值。
>
> 这时候，我们就需要引入一个对象的静态方法来断言是否为预期值。

```java
Assert.assertEquals(预期值, 结果);
```

![image-20200531220749643](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200531220751.png)

> 这时候我们发现Assert句点出来的方法可以既可以断言数组，也可以断言普通数据类型。所以这时候我们就来使用它断言预期值。如下：

![image-20200531224130120](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200531224546.png)

> 这时候，我们就断言result结果的预期值为10。断言后，发现未达到预期值就会报错！



***注意：*** 我们使用断言的时候尽量不要去断言Double对象。对于双精度数，绝对有必要使用增量进行比较，以避免浮点舍入的问题。如果您使用`assertEquals`带有`double`参数的3参数版本。

```java
assertEquals(double expected, double actual, double delta);
```

这样以来`Double`将被自动取消装箱，`double`并且一切正常，这样测试结果就不会失败。否则使用两个参数的来断言double类型，会有如下报错信息：

![](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200531225403.png)



### 七、@Before和@After注解

> 我们在上述，你是否会发现有一些重复操作呢？比如，我们每一个方法都需要去new对象。有些聪明的小伙伴会说，我们可以把它提到类的里面与方法同级。对，这个处理方式也是一个正解。
>
> 但是我们在Junit单元测试中，有一个@Before注解，是用作资源的申请。也就是被@Before注解修饰的的方法会在测试方法之前自动执行。所以，我们可以去定义一个init方法，去初始化这个创建对象的过程。这就是@Before注解的作用！

> 有些应用场景，比如IO流的读写操作。如果我们要测试此代码，是需要一个关闭流的过程，通过我们关闭流使用finally块来保证最后流的关闭操作。这时，我们在Junit单元测试中，有一个@After注解，是用作资源的关闭。也就是说被@After注解修饰的方法会在测试方法之后自动执行。所以，我们在特定需要保证最后关闭、销毁资源的时候，可以去定义一个close方法，去关闭或销毁资源。这就是@After注解的作用！

> **注意：** @Before和@After注解在程序报错的时候，仍然可以保证数据的初始化和关闭销毁，两个方法是依旧执行的。这里有点像我们tomact服务器的初始阶段和销毁阶段，它们的执行不受任何影响。

![image-20200531225614728](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200531225616.png)



### 八、自定义@MyTest注解实现单元测试



**目的：** 完成自定义注解@MyTest，并实现标有注解的方法并启动它。（模拟@Test注解做单元测试）

**步骤：** 

1. 新建一个**注解类（annotation）**，命名为MyTest
2. 创建一个**TestJunit单元测试类**，写几个方法，比如：`public void test1()`
3. 创建一个**MyTestDemo测试类**（主功能实现类），该类主要利用反射机制来实现对TestJunit单元测试类中加@MyTest注解方法的启动
4. **给予注解类生命周期与反射机制吻合**，也就是定义的注解可以保留到**运行时**，通过**反射机制**可以获取注解信息
5. 编写MyTestDemo测试类，利用反射获取TestJunit单元测试类的Class对象，并获取单元测试类中所有的方法对象，遍历所有方法对象，只要加@MyTest的注解的方法把他执行起来，不加注解的不给予任何处理操作
6. 启动测试类，查看结果（执行结果，在最后面！）

**注意：** 

1. 自定义注解类中，没有编写注解体，也就是没有给默认value值。因为该注解只是起到了标识的作用，标识需要启动的方法
2. 注解类编译后也是.class文件
3. 通过反射机制来完成自定义注解操作，一定要给与注解和反射同样的生命周期
4. 你要知道我们是不能完成Junit4、Junit5这样类型的插件功能的，可以选择性的执行加了注解的方法，而且我们有实力写出插件IDEA也是不承认的。不会给你生成run方法启动项

###### MyTest注解类

```java
package com.mylifes1110.java.anno;

import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;

/**
 * 此自定义注解@MyTest只是作为需要单元测试的标记，不需要做默认值
 * @Retention注解表示给与@MyTest注解生命周期
 * 当前定义的注解可以保留到运行时，通过反射机制可以获取注解信息
 * 否则反射将对注解没有任何作用，失去了该意义和自定义单元测试的初衷
 */
@Retention(RetentionPolicy.RUNTIME)
public @interface MyTest {
//    String value() default "";
}
```

###### TestJunit单元测试类

```java
package com.mylifes1110.java.test.junit;

import com.mylifes1110.java.anno.MyTest;
import org.junit.Test;

public class TestJunit {

    @Test
    public void test1() {
        System.out.println("---test1---");
    }

    @MyTest
    public void test2() {
        System.out.println("---test2---");
    }

    @MyTest
    public void test3() {
        System.out.println("---test3---");
    }

    public void test4() {
        System.out.println("---test4---");
    }
}
```

###### MyTestDemo测试类（主要实现功能并测试）

```java
package com.mylifes1110.java.test.junit;

import com.mylifes1110.java.anno.MyTest;

import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;

/**
 * 让自定义的MyTest注解起作用
 * 通过反射，扫描TestJunit类中有哪些方法上方加了MyTest注解
 * 如果加@MyTest注解的则执行它
 * 如果没有加@MyTest注解的则不做任何处理
 */
public class MyTestDemo {
    public static void main(String[] args) {
        /**
         * 1.获取TestJunit类对应的Class对象
         */
        Class<TestJunit> junitClass = TestJunit.class;
        /**
         * 获取TestJunit类中所有的方法对象
         */
        Method[] methods = junitClass.getMethods();

        /**
         * 遍历所有方法对象查找有与没有@MyTest注解，并做出响应处理
         */
        for (Method method : methods) {
            boolean present = method.isAnnotationPresent(MyTest.class);
            /**
             * TestJunit类中有@MyTest注解的执行该方法
             */
            if (present) {
                try {
                    method.invoke(junitClass.newInstance());
                } catch (IllegalAccessException | InvocationTargetException | InstantiationException e) {
                    e.printStackTrace();
                }
            } else {
                /**
                 * TestJunit类中没有@MyTest注解的不做任何操作
                 * 此else分支冗余，只是为了做标记，让你们好理解
                 */
            }
        }
    }
}
```

###### 执行结果图

![在这里插入图片描述](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200531232623.png)



> 上一章[【Java网络编程】](https://github.com/Ziphtracks/JavaLearningmanual/blob/master/docs/Java-Standard-Edition/Java%E7%BD%91%E7%BB%9C%E7%BC%96%E7%A8%8B.md)

> 下一章[【Java反射】](https://github.com/Ziphtracks/JavaLearningmanual/blob/master/docs/Java-Standard-Edition/Java%E5%8F%8D%E5%B0%84%E6%9C%BA%E5%88%B6.md)