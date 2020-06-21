* [Java枚举](#java%E6%9E%9A%E4%B8%BE)
    * [一、什么是枚举](#%E4%B8%80%E4%BB%80%E4%B9%88%E6%98%AF%E6%9E%9A%E4%B8%BE)
      * [1\.1 什么是枚举？](#11-%E4%BB%80%E4%B9%88%E6%98%AF%E6%9E%9A%E4%B8%BE)
      * [1\.2 Java中的枚举类](#12-java%E4%B8%AD%E7%9A%84%E6%9E%9A%E4%B8%BE%E7%B1%BB)
    * [二、Java枚举的语法](#%E4%BA%8Cjava%E6%9E%9A%E4%B8%BE%E7%9A%84%E8%AF%AD%E6%B3%95)
    * [三、Java枚举类的使用规则和应用场景](#%E4%B8%89java%E6%9E%9A%E4%B8%BE%E7%B1%BB%E7%9A%84%E4%BD%BF%E7%94%A8%E8%A7%84%E5%88%99%E5%92%8C%E5%BA%94%E7%94%A8%E5%9C%BA%E6%99%AF)
      * [3\.1 Java枚举类的使用规则](#31-java%E6%9E%9A%E4%B8%BE%E7%B1%BB%E7%9A%84%E4%BD%BF%E7%94%A8%E8%A7%84%E5%88%99)
      * [3\.2 Java枚举类的应用场景](#32-java%E6%9E%9A%E4%B8%BE%E7%B1%BB%E7%9A%84%E5%BA%94%E7%94%A8%E5%9C%BA%E6%99%AF)
    * [四、枚举类的基本使用步骤解析](#%E5%9B%9B%E6%9E%9A%E4%B8%BE%E7%B1%BB%E7%9A%84%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8%E6%AD%A5%E9%AA%A4%E8%A7%A3%E6%9E%90)
    * [五、自定义枚举类](#%E4%BA%94%E8%87%AA%E5%AE%9A%E4%B9%89%E6%9E%9A%E4%B8%BE%E7%B1%BB)
      * [5\.1 自定义枚举类步骤](#51-%E8%87%AA%E5%AE%9A%E4%B9%89%E6%9E%9A%E4%B8%BE%E7%B1%BB%E6%AD%A5%E9%AA%A4)
      * [5\.2 使用带有参枚举类](#52-%E4%BD%BF%E7%94%A8%E5%B8%A6%E6%9C%89%E5%8F%82%E6%9E%9A%E4%B8%BE%E7%B1%BB)
    * [六、Enum常用方法的使用](#%E5%85%ADenum%E5%B8%B8%E7%94%A8%E6%96%B9%E6%B3%95%E7%9A%84%E4%BD%BF%E7%94%A8)
      * [6\.1 Enum中的所有方法](#61-enum%E4%B8%AD%E7%9A%84%E6%89%80%E6%9C%89%E6%96%B9%E6%B3%95)
      * [6\.2 name和toString](#62-name%E5%92%8Ctostring)
      * [6\.3 valueOf](#63-valueof)
      * [6\.4 values](#64-values)
      * [6\.5 ordinal](#65-ordinal)
      * [6\.6 compareTo](#66-compareto)
    * [七、Java枚举的高级特性](#%E4%B8%83java%E6%9E%9A%E4%B8%BE%E7%9A%84%E9%AB%98%E7%BA%A7%E7%89%B9%E6%80%A7)
      * [7\.1 常量](#71-%E5%B8%B8%E9%87%8F)
      * [7\.2 switch语句](#72-switch%E8%AF%AD%E5%8F%A5)
      * [7\.3 枚举中定义多个参数与方法](#73-%E6%9E%9A%E4%B8%BE%E4%B8%AD%E5%AE%9A%E4%B9%89%E5%A4%9A%E4%B8%AA%E5%8F%82%E6%95%B0%E4%B8%8E%E6%96%B9%E6%B3%95)
      * [7\.4 枚举类实现接口](#74-%E6%9E%9A%E4%B8%BE%E7%B1%BB%E5%AE%9E%E7%8E%B0%E6%8E%A5%E5%8F%A3)
      * [7\.5 使用接口对枚举分类](#75-%E4%BD%BF%E7%94%A8%E6%8E%A5%E5%8F%A3%E5%AF%B9%E6%9E%9A%E4%B8%BE%E5%88%86%E7%B1%BB)
    * [八 枚举类集合](#%E5%85%AB-%E6%9E%9A%E4%B8%BE%E7%B1%BB%E9%9B%86%E5%90%88)
      * [8\.1 EnumSet集合](#81-enumset%E9%9B%86%E5%90%88)
        * [8\.1\.1 allOf](#811-allof)
        * [8\.1\.2 clone](#812-clone)
        * [8\.1\.3 range](#813-range)
        * [8\.1\.4 complementOf](#814-complementof)
        * [8\.1\.5 copyOf](#815-copyof)
        * [8\.1\.6 of](#816-of)
        * [8\.1\.7 noneOf](#817-noneof)
      * [8\.2 EnumMap集合](#82-enummap%E9%9B%86%E5%90%88)
        * [8\.2\.1 EnumMap集合的方法列表](#821-enummap%E9%9B%86%E5%90%88%E7%9A%84%E6%96%B9%E6%B3%95%E5%88%97%E8%A1%A8)
        * [8\.2\.2 EnumMap集合的基本使用](#822-enummap%E9%9B%86%E5%90%88%E7%9A%84%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8)

#  Java枚举

------

### 一、什么是枚举

#### 1.1 什么是枚举？

> 至于枚举，我们先拿生活中的枚举来入手，然后再引申Java中的枚举，其实它们的意义很相似。
>
> 谈到生活中的枚举，假如我们在玩掷骰子的游戏，在我们手中有两个骰子，要求掷出两个骰子的点数和必须大于6的概率，那么在此情此景，我们就需要使用枚举法一一列举出骰子点数的所有可能，然后根据列举出来的可能，求出概率。
>
> 可能有的小伙伴发现，这就是数学啊？这就是数学中的概率学和统计学。对，我们的枚举法就是常用于概率统计中的。



#### 1.2 Java中的枚举类

> Java 5.0引入了枚举，枚举限制变量只能是预先设定好的值。使用枚举可以减少代码中的 bug，方便很多场景使用。



### 二、Java枚举的语法

**枚举类中的声明** 

```java
访问修辞符 enum 枚举名 {
    枚举成员,
    枚举成员,
    ...
};
```

**class类中枚举的声明** 

```java
访问修饰符 class 类名 {
    enum 枚举名 {
        枚举成员,
        枚举成员,
        ...
    }
}
```



### 三、Java枚举类的使用规则和应用场景

#### 3.1 Java枚举类的使用规则

> 至于枚举你也有所了解了，Java中的枚举也是一样的。而Java中枚举类的使用，也有特定的规则和场景。如果你看了以下的规则不明白的话，没有关系，继续向下学你就会明白，因为我在下面都会有讲解到这些规则。如下几个规则：
>
> - **类的对象是确定的有限个数。** 
> - **当需要定义一组常量时，建议使用枚举。** 
> - **如果枚举类中只有一个对象，则可以作为单例模式的实现方法。** 
> - **枚举类不能被继承** 
> - **枚举类不能被单独的new创建对象** 
> - **枚举类中的枚举成员是用`,`隔开的，多个枚举成员之间用`_`隔开** 
> - **如果枚举类中的只有一个或多个枚举成员，其他什么都没有，我们在用`,`隔开的同时。最后可以省略`;`结束符。** 
>
> **注意：** 如果关于枚举单例设计模式不太了解的小伙伴可以参考[**深度学习单例设计模式**](https://github.com/Ziphtracks/JavaLearningmanual/blob/master/docs/design-mode/01.单例设计模式.md)一文，你肯定会有意想不到收获，请相信我！



#### 3.2 Java枚举类的应用场景

> 根据Java中使用枚举类的规则，有以下几种场景适合来使用枚举类，如下：
>
> - **星期：** Monday（星期一）、Tuesday（星期二）、Wednesday（星期三）、Thursday（星期四）、Firday（星期五）、Saturday（星期六）、Sunday（星期日）
> - **性别：** Man（男）、Woman（女）
> - **季节：** Spring（春天）、Summer（夏天）、Autumn（秋天）、Winter（冬天）
> - **支付方式：** Cash（现金）、WeChatPay（微信）、Alipay（支付宝）、BankCard（银行卡）、CreditCard（信用卡）
> - **订单状态：** Nonpayment（未付款）、Paid（已付款）、Fulfilled（已配货）、Delivered（已发货）、Return（退货）、Checked（已确认）
> - **线程状态：** Establish（创建）、Ready（就绪）、Run（运行）、Obstruct（阻塞）、Die（死亡）
> - 等等......



### 四、枚举类的基本使用步骤解析

那我们就解释以下这两个规则，我们在上述中已经了解了枚举的作用。Java中枚举也不例外，也是一一列举出来方便我们拿出来一个或多个使用。这有点像我们的多选框，我们把需要用到的所有选项内容放在各个多选框后面，当我们在使用的时候只需要勾选自己需要的勾选框即可，这就代表了我们需要被选中多选框后面的内容。

*那么，Java中的枚举类是如何使用呢？* 

这里我们简单的模拟一个场景，假设你的女朋友十分的喜欢喝点冷饮或热奶茶之类的饮品，在生活中也有很多像蜜雪冰城等等这种类型的饮品店。当你为女朋友买她爱喝的珍珠奶茶时，服务员会问你，要大杯、中杯还是小杯的。当然，为了满足女朋友，你通常会选择大杯。这就意味着店内不允许顾客点规则外的饮品。

**注意：** 如果你是初学者或是不了解枚举类的使用，此基本使用不懂没有关系，请继续往下看即可！

*于是，我用Java代码来实现一下，上述场景。* 

首先，创建枚举类。分别为珍珠奶茶添加大、中、小杯杯型。

```java
package com.mylifes1110.java;

/**
 * @ClassName PearlMilkTea
 * @Description 为珍珠奶茶添加三个杯型：大、中、小
 * @Author Ziph
 * @Date 2020/6/8
 * @Since 1.8
 */
public enum PearlMilkTea {
    //注意：这里枚举类中只有枚举成员,我在此省略了;结束符
    SMALL, MEDIUM, LARGE
}
```

其次，创建珍珠奶茶对象，再有方法来判断枚举类中的大、中、小杯。最后打印女朋友喝哪个杯型的珍珠奶茶！

```java
package com.mylifes1110.test;

import com.mylifes1110.java.PearlMilkTea;

/**
 * @ClassName PearlMilkTeaTest
 * @Description 为女朋友买哪个杯型的珍珠奶茶(默认大杯)
 * @Author Ziph
 * @Date 2020/6/8
 * @Since 1.8
 */
public class PearlMilkTeaTest {
    public static void main(String[] args) {
        //创建大杯的珍珠奶茶对象
        PearlMilkTea pearlMilkTea = PearlMilkTea.LARGE;
        PearlMilkTeaTest.drinkSize(pearlMilkTea);
    }

    //判断为女朋友买哪个杯型的珍珠奶茶
    public static void drinkSize(PearlMilkTea pearlMilkTea) {
        if (pearlMilkTea == PearlMilkTea.LARGE) {
            System.out.println("我为女朋友买了一大杯珍珠奶茶！");
        } else if (pearlMilkTea == PearlMilkTea.MEDIUM) {
            System.out.println("我为女朋友买了一中杯珍珠奶茶！");
        } else {
            System.out.println("我为女朋友买了一小杯珍珠奶茶！");
        }
    }
}
```

![image-20200608151052517](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200608151055.png)

虽然，我们了解了枚举类中的基本使用，但是我们在语法中还介绍了一种在类中定义的枚举。正好，在此也演示一下。如下：

```java
public class PearlMilkTea {
    enum DrinkSize {
        SMALL,
        MEDIUM, 
        LARGE
    }
}
```

如果这样创建就可以在class类中去创建enum枚举类了。想想前面例子中的代码其实并不合理，这是为什么呢？因为我们写代码要遵循单一职责原则和见命知意的命名规范。所以，我写的代码是在珍珠奶茶的枚举类中列举的大、中、小的三种杯型枚举成员。所以根据规范来讲，我们珍珠奶茶中不能拥有杯型相关的枚举，毕竟我们在生活中的这类饮品店中喝的所有饮品种类都有这三种杯型，因此我们的所有饮品种类中都需要写一个枚举类，显然这是很不合理的。

如果让它变的更加合理化，我们就细分饮品种类来创建饮品枚举类和杯型的枚举类并分别两两适用即可。也许有小伙伴会问我为什么我要说这些合理不合理呢？因为自我感觉这是对枚举类应用的思想铺垫，所以你品、你细品！



### 五、自定义枚举类

#### 5.1 自定义枚举类步骤

> 关于第四章枚举类的基本使用，也许小伙伴们对枚举的陌生，而并不知道为什么这样去创建枚举对象。接下来，我来带你使用常量来自定义枚举类，试试是不是那个效果。

既然，上述第三章我举出了这么多枚举类的应用场景，那我们挑选一个比较经典的春夏秋冬来实现自定义枚举类。

首先，我们先创建一个季节类，分别提供属性、私有构造器、春夏秋冬常量、Getter方法和toString方法，步骤如下：

```java
package com.mylifes1110.java;

/**
 * 自定义季节的枚举类
 */
public class Season {
    //声明Season对象的属性,为private final修饰
    private final String seasonName;

    //私有化构造器,并为对象赋值
    private Season(String seasonName) {
        this.seasonName = seasonName;
    }

    //提供当前枚举的多个对象,为public static final修饰
    public static final Season SPRING = new Season("春天");
    public static final Season SUMMER = new Season("夏天");
    public static final Season AUTUMN = new Season("秋天");
    public static final Season WINTER = new Season("冬天");

    //提供外界通过getter方法来获取枚举对象的属性
    public String getSeasonName() {
        return seasonName;
    }

    //重写toString方法,以便打印出枚举结果
    @Override
    public String toString() {
        return "Season{" +
                "seasonName='" + seasonName + '\'' +
                '}';
    }
}
```

其次，我们去创建一个测试类，来使用该自定义枚举类创建对象。由此看来，我们就可以根据类名来句点出常量对象了！

```java
package com.mylifes1110.test;

import com.mylifes1110.java.Season;

/**
 * 测试类
 */
public class SeasonTest {
    public static void main(String[] args) {
        Season spring = Season.SPRING;
        System.out.println(spring);
    }
}
```

最后打印结果是春天的对象，由于我们覆盖了toString方法，即可见对象内的内容。

![image-20200608160220000](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200608160222.png)



#### 5.2 使用带有参枚举类

> 如果你在第三章时Java枚举类的基本使用不明白，估计看完自定义枚举类也了解的大差不差了。但是你有没有发现我们自定义枚举类是使用的有参数的对象呢？那我们怎样使用真正的枚举类来实现有参数的枚举类呢？继续看吧那就！

在这里我将自定义枚举类改装了一下，改装成了enum枚举类实现的使用有参对象。如下：

```java
package com.mylifes1110.java;

public enum Season {
    SPRING("春天"),
    SUMMER("夏天"),
    AUTUMN("秋天"),
    WINTER("冬天");

    private final String seasonName;

    Season1(String seasonName) {
        this.seasonName = seasonName;
    }

    public String getSeasonName() {
        return seasonName;
    }
}
```

不知道你有没有发现少了点什么，少的部分其实就是我们创建常量对象的部分，而且在这个枚举类中我也没有去重写toString方法，至于为什么，下面就告诉你。

**注意：** 枚举对象之间用`,`隔开！

其次，去创建了该枚举类的测试类，我们测试以下，并看一下没有重写toString方法打印出来的结果。

```java
package com.mylifes1110.test;

import com.mylifes1110.java.Season;

public class Seaso1Test {
    public static void main(String[] args) {
        Season1 spring = Season.SPRING;
        System.out.println(spring);                     //SPRING
        System.out.println(spring.getSeasonName());     //春天
    }
}
```

这里我将打印的结果放在了打印语句后面的注释中。我们发现没有重写toString方法竟然打印出来的是SPRING，这是为什么呢？这应该从我们的继承关系中分析，如果继承的是基类Object的话，没有重写toString方法会打印对象地址。那么我们就可以断定，enum枚举类的父类不是Object。那它的父类是谁呢？我们可以借助来对象来获取其父类，如下：

```java
System.out.println(Season.class.getSuperclass());		//class java.lang.Enum
```

同样，答案放在了代码后面的注释中。我们发现它默认继承的是Enum类。那么，我们稍后就来就看看这个类中到底写了些什么方法。



### 六、Enum常用方法的使用

#### 6.1 Enum中的所有方法

> 关于Enum类中的所有方法我以表格的方式列举出来！

| 返回值                        | 方法                                     | 描述                                        |
| ----------------------------- | ---------------------------------------- | ------------------------------------------- |
| String                        | name()                                   | 获取枚举成员的名称                          |
| static <T extends Enum\<T>> T | valueOf(Class\<T> enumType, String name) | 获取指定枚举成员名称和类型的枚举成员        |
| String[]                      | values()                                 | 获取枚举成员的所有值                        |
|                               |                                          |                                             |
| int                           | compareTo(E o)                           | 比较此枚举与指定对象的顺序                  |
| int                           | hashCode()                               | 获取枚举成员的哈希值                        |
| int                           | ordinal()                                | 获取枚举成员的序数（第一个枚举成员位置为0） |
| String                        | toString()                               | 返回枚举成员名称                            |
| Class\<E>                     | getDeclaringClass()                      | 获取枚举成员的类对象                        |



#### 6.2 name和toString

> 关于name方法和toString方法，其实很简单。name()就是根据枚举成员来获取该枚举成员的字符串名称。而同String方法也是用来获取枚举成员的字符串名称。虽然作用都是相同的，但是name方法是用final修饰的不能被重写，而toString是可以被重写的。这里我们还使用季节的案例来演示，打印结果并放在了代码后面的注释中，如下：

```java
System.out.println(Season.SUMMER.name());			//SUMMER
System.out.println(Season.SUMMER.toString());		//SUMMER
```



#### 6.3 valueOf

> 此方法的作用是**传入一个字符串，然后将它转换成对应的枚举成员**。这里传入的字符串必须与定义的枚举成员的名称一致，严格区分大小写。如果传入的字符串并没有找到其对应的枚举成员对象，就会抛出异常。如下：

```
System.out.println(Season.valueOf("WINTER"));			//WINTER
System.out.println(Season.valueOf("WIN"));				//java.lang.IllegalArgumentException
```

![image-20200608173858862](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200608173901.png)



#### 6.4 values

> values方法的名字中就带有一个s，再加上它的返回值是一个字符串数组。所以我们就可以得出它的作用是获取枚举成员的所有值，这些值并以数组的形式存储。

```java
Season[] seasons = Season.values();
for (Season season : seasons) {
    System.out.print(season + " ");
}
```

**结果为：** 

```java
SPRING SUMMER AUTUMN WINTER 
```



#### 6.5 ordinal

> 该方法是获取枚举成员的序数，其第一个枚举成员位置为0。其实，为了好理解的话，可以把它看作数组中的索引。数组中的第一个元素位置同样也是从0开始。那我们打印一下，看看结果如何，如下：

```java
//获取指定枚举成员的次序
System.out.println(Season.SUMMER.ordinal());

//获取所有成员的次序
Season[] seasons = Season.values();
for (Season s : seasons) {
    System.out.println(s + " -> " + s.ordinal());
}
```

**结果为：** 

![image-20200608175529079](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200608175531.png)

其源码就是返回了一个从0开始int类型的值，从源码中也可以看出最大值是int取值范围的最大值。如下：

![image-20200608180839568](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200608180841.png)



#### 6.6 compareTo

> compareTo方法相信我们已经是很熟悉了。其作用就是用来比较的。但是在枚举类中它比较的是什么呢？实际上compareTo方法比较的是两个枚举成员的次序数，并返回次序相减后的结果。

首先，我们要知道SUMMER的次序数为1，WINTER的次序数为3。当使用前者比较后者，打印的结果是前者与后者相减后的差值，即`1-3=-2`

```java
System.out.println(Season.SUMMER.compareTo(Season.WINTER));			//-2
```

它的源码是怎么做的呢？那我们进入查看一下。

其中，前面的操作都是在判断比较的双方是否是一个枚举类，如果不是的话就抛出异常。如果为枚举类的话，就直接将次序数做了相减操作并返回。

![image-20200608180532795](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200608180534.png)



### 七、Java枚举的高级特性

#### 7.1 常量

> 我们知道，常量是用`public static final`修饰的。1.5之后有了枚举，我们就可以把相关的常量放在一个枚举容器中，而且使用枚举的好处还在于枚举为我们提供了很多便捷的的方法。

*示例：* 

```java
public enum Season {
    SPRING, SUMMER, AUTUMN, WINTER
}
```



#### 7.2 switch语句

> 你了解的switch语句都支持哪种类型呢？我这里说一下，switch语句支持的类型有如下几种：
>
> - **基本数据类型：** byte、short、char、int
> - **包装数据类型：** Byte、Short、Character、Integer
> - **枚举类型：** Enum
> - **字符串类型：** String（jdk7+ 开始支持）
>
> 具体枚举类与switch语句的使用是如何实现呢？枚举又是如何为switch语句提供便利的呢？来看一下吧。

```java
package com.mylifes1110.java;

public class WeekTest {
    public static void main(String[] args) {
        Week week = Week.MONDAY;
        switch (week) {
            case MONDAY:
                System.out.println("星期一");
                break;
            case TUESDAY:
                System.out.println("星期二");
                break;
            case WEDNESDAY:
                System.out.println("星期三");
                break;
            case THURSDAY:
                System.out.println("星期四");
                break;
            case FRIDAY:
                System.out.println("星期五");
                break;
            case SATURDAY:
                System.out.println("星期六");
                break;
            case SUNDAY:
                System.out.println("星期日");
                break;
            default:
                System.out.println("null");
        }
    }
}

enum Week {
    MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY
}
```



#### 7.3 枚举中定义多个参数与方法

> 有参枚举在5.2中我已经做了详细说明，我们在定义枚举时不只是可以定义多个参数，还可以定义其他的普通方法来使用，而关于普通方法的使用是根据场景的，这里我就不再做过多的赘述了。

```java
package com.mylifes1110.java;

public enum Season {
    SPRING("春天"),
    SUMMER("夏天"),
    AUTUMN("秋天"),
    WINTER("冬天");

    private final String seasonName;
    
    public static String getName(int index) {  
        for (Season s : Season.values()) {  
            if (c.getIndex() == index) {  
                return c.name;  
            }  
        }  
        return null;  
    }

    Season1(String seasonName) {
        this.seasonName = seasonName;
    }

    public String getSeasonName() {
        return seasonName;
    }
}
```



#### 7.4 枚举类实现接口

> 虽然枚举类不能继承，但是可以实现接口。以下是一个实现过程。

首先，创建一个接口。

```java
package com.mylifes1110.inter;

public interface Show {
    void show();
}
```

其次，让我们的四季枚举类实现该接口并重写方法。

```java
package com.mylifes1110.java;

import com.mylifes1110.inter.Show;

public enum Season implements Show {
    SPRING("春天"),
    SUMMER("夏天"),
    AUTUMN("秋天"),
    WINTER("冬天");

    private final String seasonName;

    Season1(String seasonName) {
        this.seasonName = seasonName;
    }

    public String getSeasonName() {
        return seasonName;
    }

    @Override
    public void show() {
        System.out.println("向往四季如春");
    }
}
```

最后，当我们使用每一个枚举类都可以调用show方法，而打印的结果也都是“向往四季如春”

```java
Season.WINTER.show();				//向往四季如春
```

*聪明的你我相信发现了这个缺点，我们不管使用哪一个枚举成员时，调用的show方法都是同一个。所以，我们在实现接口后，可以这样重写方法，如下：* 

```java
package com.mylifes1110.java;

import com.mylifes1110.inter.Show;

public enum Season1 implements Show {
    SPRING("春天") {
        @Override
        public void show() {
            System.out.println("春天是个踏青的季节");
        }
    },
    SUMMER("夏天") {
        @Override
        public void show() {
            System.out.println("夏天是个炎热的季节,我要吃冰棍");
        }
    },
    AUTUMN("秋天") {
        @Override
        public void show() {
            System.out.println("秋天还算是凉爽");
        }
    },
    WINTER("冬天") {
        @Override
        public void show() {
            System.out.println("冬天的雪还不错,就是有点冷");
        }
    };

    private final String seasonName;

    Season1(String seasonName) {
        this.seasonName = seasonName;
    }

    public String getSeasonName() {
        return seasonName;
    }
}
```

我们在枚举成员的后面加了`{}`，而重写的方法可以写在各个枚举成员中，这样就接触了上述所有的那个限制。这下，我们使用哪个枚举成员对象调用show方法都是不同的。是不是非常NICE？



#### 7.5 使用接口对枚举分类

> 使用接口对枚举分类，我们需要创建一个接口容器，里面存放着此接口容器所存放的多个枚举类，然后将各个枚举类实现此接口，以这样的方式可实现对枚举分类。代码如下，打印结果放在了代码后面的注释中：

```java
package com.mylifes1110.inter;

public interface Weeks {
    //工作日
    enum WorkingDay implements Weeks {
        MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY
    }

    //双休日
    enum Weekend implements Weeks {
        SATURDAY, SUNDAY
    }
}

class WeeksTest {
    public static void main(String[] args) {
        System.out.print("双休日：");
        for (Weeks.Weekend weekend : Weeks.Weekend.values()) {
            System.out.print(weekend + " ");        //双休日：SATURDAY SUNDAY
        }

        //换行
        System.out.println();

        System.out.print("工作日：");
        for (Weeks.WorkingDay workingDay : Weeks.WorkingDay.values()) {
            System.out.print(workingDay + " ");     //工作日：MONDAY TUESDAY WEDNESDAY THURSDAY FRIDAY
        }

        //换行
        System.out.println();

        Weeks.WorkingDay friday = Weeks.WorkingDay.FRIDAY;
        System.out.println("星期五：" + friday);      //星期五：FRIDAY
    }
}
```

![image-20200608194649335](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200608194651.png)



### 八 枚举类集合

#### 8.1 EnumSet集合

> 关于Set集合，我们知道其集合中的元素是不重复的。其中的方法有以下几种：

| 返回值                                    | 方法                          | 描述                                                         |
| ----------------------------------------- | ----------------------------- | ------------------------------------------------------------ |
| static <E extends Enum\<E>> EnumSet\<E>   | allOf(Class\<E> elementType)  | 创建一个包含指定元素类型的所有元素的枚举 set。               |
| EnumSet\<E>                               | clone()                       | 返回一个set集合。                                            |
| static <E extends Enum\<E>> EnumSet\<E>   | complementOf(EnumSet\<E> s)   | 创建一个其元素类型与指定枚举set相同的set集合（新集合中包含原集合所不包含的枚举成员） |
| static <E extends Enum\<E>> EnumSet\<E>   | copyOf(EnumSet\<E> s)         | 创建一个其元素类型与指定枚举 set 相同的枚举 set集合（新集合中包含与原集合相同的枚举成员） |
| static <E extends Enum\<E>> EnumSet\<E>   | copyOf(Collection\<E> s)      | 创建一个从指定 collection 初始化的枚举 set                   |
| static <E extends Enum\<E>> EnumSet\<E>   | noneOf(Class\<E> elementType) | 创建一个具有指定元素类型的空枚举 set                         |
| static <E extends Enum\<E>> EnumSet\<E>   | range(E from, E to)           | 创建一个最初包含由两个指定端点所定义范围内的所有元素的枚举 set。 |
|                                           |                               |                                                              |
| static   <E extends Enum\<E>> EnumSet\<E> | of                            | 创建一个最初包含指定元素的枚举 set。注意：可以指定多个元素，所以在这里我没有列举参数 |



##### 8.1.1 allOf

> allOf方法需要我们传入一个枚举的类对象，它会根据传入的枚举类对象生成一个具有该类对象枚举成员的Set集合。

```java
//创建一个包含Week所有枚举元素的Set集合
EnumSet<Week> weeks = EnumSet.allOf(Week.class);
System.out.println(weeks);              //[MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY]

//打印Set集合中的元素
for (Week week1 : weeks) {
    System.out.print(week1 + " ");      //MONDAY TUESDAY WEDNESDAY THURSDAY FRIDAY SATURDAY SUNDAY
}
```



##### 8.1.2 clone

> clone方法与直接打印枚举的Set集合结果相同！

```java
//返回一个Set集合
System.out.println(weeks.clone());      //[MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY]
```



##### 8.1.3 range

> 上面详细讲过枚举是有序数的，而且枚举类中的枚举成员是秉承着从左向右的顺序。所以我们可以使用range方法来创建指定枚举成员端点的Set集合，也就是说我们需要传入枚举成员的起始与结束去创建一个该拥有该范围枚举成员的Set集合。如下：

```java
//创建一个最初包含由两个指定端点所定义范围内的所有元素的枚举 set。
System.out.println(EnumSet.range(Week.MONDAY, Week.FRIDAY));        //[MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY]
```



##### 8.1.4 complementOf

> 该方法有点特殊，它根据EnumSet去创建一个新Set集合。而新Set集合中枚举成员相当于旧Set集合中枚举成员的取反。
>
> 我们用场景来模拟一下，当前Week枚举类中有星期一到星期日7个枚举成员。我们使用range方法创建一个从星期一到星期五的Set集合（s1），随后我在将使用complementOf方法根据s1生成新的Set集合（s2），最后打印s2查看集合中的元素就只有星期六和星期日。
>
> **注意：** 如果我们的旧Set集合占据了枚举类中的所有枚举成员，在使用complementOf方法生成的新Set集合，新集合中的元素打印后为空Set，即`[]`。

```java
//创建一个其元素类型与指定枚举set相同的set集合（新集合中包含原集合所不包含的枚举成员）
EnumSet<Week> weeks1 = EnumSet.complementOf(weeks);
System.out.println(weeks1);             //[]

EnumSet<Week> range = EnumSet.range(Week.MONDAY, Week.FRIDAY);
EnumSet<Week> weeks3 = EnumSet.complementOf(range);
System.out.println(weeks3);    			//[SATURDAY, SUNDAY]
```



##### 8.1.5 copyOf

> copyOf方法与complementOf相反，它创建一个新Set集合。而新Set集合中的枚举成员与旧Set集合中的枚举成员相同，这相当于就是Copy（复制功能）。如果你理解了complementOf方法，这个方法对你来说也是没有挑战。以下我使用copyOf方法复制了一份weeks，其枚举成员一个不少。
>
> **注意：** copyOf方法还有一个可以复制connection集合来创建Set集合，其connection集合中必须存储的是枚举成员。

```java
//创建一个其元素类型与指定枚举 set 相同的枚举 set集合（新集合中包含与原集合相同的枚举成员）
EnumSet<Week> weeks2 = EnumSet.copyOf(weeks);
System.out.println(weeks2);             //[MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY]
```

```java
//复制存储枚举成员的HashSet集合
Set set = new HashSet();
set.add(Week.MONDAY);
EnumSet set1 = EnumSet.copyOf(set);
System.out.println(set1);		//[MONDAY]
```



##### 8.1.6 of

> of方法为我们提供了选择性的便利，我们可以挑选任意枚举成员成为Set集合的元素。

```java
//创建一个最初包含指定元素的枚举 set。
System.out.println(EnumSet.of(Week.MONDAY,Week.FRIDAY));            //[MONDAY, FRIDAY]
```



##### 8.1.7 noneOf

> 传入一个枚举的类对象去创建一个空Set集合

```java
EnumSet<Week> noneOf = EnumSet.noneOf(Week.class);
System.out.println(noneOf);                     //[]
```



#### 8.2 EnumMap集合

##### 8.2.1 EnumMap集合的方法列表

> 关于Map集合，我们知道它是由键和值组成。EnumMap集合与HashMap集合的效率比较来说，EnumMap的效率高些。

关于EnumMap集合的使用与HashMap是一致的，没有什么特殊的。至于EnumMap集合的方法，我这里列举一下。

| 返回值              | 方法                                   | 描述                                         |
| ------------------- | -------------------------------------- | -------------------------------------------- |
| void                | clear()                                | 移除所有映射关系。                           |
| EnumMap<K,V>        | clone()                                | 返回EnumMap集合。                            |
| boolean             | containsKey(Object key)                | 包含此键，则返回true                         |
| boolean             | containsValue(Object value)            | 包含一个或多个键映射到的该指定值，则返回true |
| Set<Map.Entry<K,V>> | entrySet()                             | 返回映射键值关系的Set集合                    |
| boolean             | equals(Object o)                       | 比较对象与映射的相等关系                     |
| V                   | get(Object key)                        | 获取指定键映射的值，如果没有，返回null       |
| Set\<K>             | keySet()                               | 返回所有键的Set集合                          |
| V                   | put(K key, V value)                    | 将指定键值存储在EnumMap集合中                |
| void                | putAll(Map<? extends K,? extends V> m) | 将所有键值对存储在集合中                     |
| V                   | remove(Object key)                     | 如果存在映射关系，则移除该映射关系           |
| int                 | size()                                 | 返回存在映射关系的数量                       |
| Collection\<V>      | values()                               | 返回此映射中所包含值的 Collection集合        |



##### 8.2.2 EnumMap集合的基本使用

> 由于EnumMap集合与HashMap集合基本相似，这里我就演示一下基本使用与HashMap不同的地方。

EnumMap集合是我们new出来的对象，创建出来的对象需要传入一个枚举的类对象，才返回一个Map集合。Map集合是键值对形式存储，所以我们在写EnumMap集合的泛型时，根据需求来写，如果需要键是某枚举类型，我们泛型就写它。如果有枚举类是值的要求，那就泛型中的值写枚举类。键值对都要求是枚举那也是OK的，我们写泛型时都写需求的枚举类即可。除了创建对象和存储对象需要指定枚举类外，其他的与HashMap基本相同。

如下，我在创建EnumMap集合时执行的Week枚举类的类对象，泛型的键写的是Week枚举类，值写的Integer，这就意味着我们在put（存储键值对）的时候，键需要存储Week枚举类中的枚举成员，值需要存储Integer数值。

```java
EnumMap<Week, Integer> map = new EnumMap<>(Week.class);
map.put(Week.MONDAY, 1);
map.put(Week.THURSDAY, 4);
System.out.println(map);			//{MONDAY=1, THURSDAY=4}
```



> 上一章[【Java注解】](https://github.com/Ziphtracks/JavaLearningmanual/blob/master/docs/Java-Standard-Edition/Java注解.md)

> JavaSE基础内容就此完结！感谢大家阅读！