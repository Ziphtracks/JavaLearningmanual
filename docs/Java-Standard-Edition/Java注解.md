* [Java注解](#java%E6%B3%A8%E8%A7%A3)
    * [一、Java注解概述](#%E4%B8%80java%E6%B3%A8%E8%A7%A3%E6%A6%82%E8%BF%B0)
    * [二、注解的作用分类](#%E4%BA%8C%E6%B3%A8%E8%A7%A3%E7%9A%84%E4%BD%9C%E7%94%A8%E5%88%86%E7%B1%BB)
    * [三、jdk的内置注解](#%E4%B8%89jdk%E7%9A%84%E5%86%85%E7%BD%AE%E6%B3%A8%E8%A7%A3)
      * [3\.1 内置注解分类](#31-%E5%86%85%E7%BD%AE%E6%B3%A8%E8%A7%A3%E5%88%86%E7%B1%BB)
      * [3\.2 @Override注解](#32-override%E6%B3%A8%E8%A7%A3)
      * [3\.3 @Deprecated注解](#33-deprecated%E6%B3%A8%E8%A7%A3)
      * [3\.4 @SuppressWarnings注解](#34-suppresswarnings%E6%B3%A8%E8%A7%A3)
      * [3\.5 @Repeatable注解](#35-repeatable%E6%B3%A8%E8%A7%A3)
    * [四、注解分类](#%E5%9B%9B%E6%B3%A8%E8%A7%A3%E5%88%86%E7%B1%BB)
      * [4\.1 注解分类](#41-%E6%B3%A8%E8%A7%A3%E5%88%86%E7%B1%BB)
      * [4\.2 标记注解](#42-%E6%A0%87%E8%AE%B0%E6%B3%A8%E8%A7%A3)
      * [4\.3 单值注解](#43-%E5%8D%95%E5%80%BC%E6%B3%A8%E8%A7%A3)
      * [4\.4 完整注解](#44-%E5%AE%8C%E6%95%B4%E6%B3%A8%E8%A7%A3)
    * [五、自定义注解](#%E4%BA%94%E8%87%AA%E5%AE%9A%E4%B9%89%E6%B3%A8%E8%A7%A3)
      * [5\.1 自定义注解格式](#51-%E8%87%AA%E5%AE%9A%E4%B9%89%E6%B3%A8%E8%A7%A3%E6%A0%BC%E5%BC%8F)
      * [5\.2 自定义注解属性的返回值](#52-%E8%87%AA%E5%AE%9A%E4%B9%89%E6%B3%A8%E8%A7%A3%E5%B1%9E%E6%80%A7%E7%9A%84%E8%BF%94%E5%9B%9E%E5%80%BC)
      * [5\.3 自定义注解的属性赋值](#53-%E8%87%AA%E5%AE%9A%E4%B9%89%E6%B3%A8%E8%A7%A3%E7%9A%84%E5%B1%9E%E6%80%A7%E8%B5%8B%E5%80%BC)
      * [5\.4 自定义注解的多种返回值类型赋值](#54-%E8%87%AA%E5%AE%9A%E4%B9%89%E6%B3%A8%E8%A7%A3%E7%9A%84%E5%A4%9A%E7%A7%8D%E8%BF%94%E5%9B%9E%E5%80%BC%E7%B1%BB%E5%9E%8B%E8%B5%8B%E5%80%BC)
    * [六、元注解](#%E5%85%AD%E5%85%83%E6%B3%A8%E8%A7%A3)
      * [6\.1 元注解分类](#61-%E5%85%83%E6%B3%A8%E8%A7%A3%E5%88%86%E7%B1%BB)
      * [6\.2 @Target](#62-target)
      * [6\.3 @Retention](#63-retention)
      * [6\.4 @Documented](#64-documented)
      * [6\.5 @Inherited](#65-inherited)
    * [七、使用反射机制解析注解](#%E4%B8%83%E4%BD%BF%E7%94%A8%E5%8F%8D%E5%B0%84%E6%9C%BA%E5%88%B6%E8%A7%A3%E6%9E%90%E6%B3%A8%E8%A7%A3)
    * [八、自定义注解改变JDBC工具类](#%E5%85%AB%E8%87%AA%E5%AE%9A%E4%B9%89%E6%B3%A8%E8%A7%A3%E6%94%B9%E5%8F%98jdbc%E5%B7%A5%E5%85%B7%E7%B1%BB)
          * [自定义注解](#%E8%87%AA%E5%AE%9A%E4%B9%89%E6%B3%A8%E8%A7%A3)
          * [数据库连接工具类](#%E6%95%B0%E6%8D%AE%E5%BA%93%E8%BF%9E%E6%8E%A5%E5%B7%A5%E5%85%B7%E7%B1%BB)
          * [测试类](#%E6%B5%8B%E8%AF%95%E7%B1%BB)
          * [测试结果](#%E6%B5%8B%E8%AF%95%E7%BB%93%E6%9E%9C)
    * [九、自定义@MyTest注解实现单元测试](#%E4%B9%9D%E8%87%AA%E5%AE%9A%E4%B9%89mytest%E6%B3%A8%E8%A7%A3%E5%AE%9E%E7%8E%B0%E5%8D%95%E5%85%83%E6%B5%8B%E8%AF%95)

# Java注解

### 一、Java注解概述

> 注解（Annotation），也叫元数据。一种代码级别的说明。它是JDK1.5及以后版本引入的一个特性，与类、接口、枚举是在同一个层次。它可以声明在包、类、字段、方法、局部变量、方法参数等的前面，用来对这些元素进行说明，注释。



### 二、注解的作用分类

> - **编写文档：** 通过代码里标识的元数据生成文档【生成文档doc文档】
> - **代码分析：** 通过代码里标识的元数据对代码进行分析【使用反射】
> - **编译检查：** 通过代码里标识的元数据让编译器能够实现基本的编译检查【Override等】

***编写文档***

> 首先，我们要知道Java中是有三种注释的，分别为单行注释、多行注释和文档注释。而文档注释中，也有@开头的元注解，这就是基于文档注释的注解。有了文档注释，我们就可以使用javadoc命令来生成doc文档，此时文档内的元注解也会生成对应的文档内容。这就是编写文档的作用。

***代码分析***

> 我们频繁使用之一，也是包括使用反射来通过代码里标识的元数据对代码进行分析的，此内容我们在后续展开讲解。

***编译检查***

> 至于在编译期间在代码中标识的注解，可以用来做特定的编译检查，它可以在编译期间就检查出“你是否按规定办事”，如果不按照注解规定办事的话，就会在编译期间飘红报错，并予以提示信息。可以就可以为我们代码提供了一种规范制约，避免我们后续在代码中处理太多的代码以及功能的规范。比如，@Override注解是在我们覆盖父类（父接口）方法时出现的，这证明我们覆盖方法是继承于父类（父接口）的方法，如果该方法稍加改变就会报错；@FunctionInterface注解是在编译期检查是否是函数式接口的，如果不遵循它的规范，同样也会报错。



### 三、jdk的内置注解

#### 3.1 内置注解分类

> - **@Override：** 标记在成员方法上，用于标识当前方法是重写父类（父接口）方法，编译器在对该方法进行编译时会检查是否符合重写规则，如果不符合，编译报错。
> - **@Deprecated：** 用于标记当前类、成员变量、成员方法或者构造方法过时如果开发者调用了被标记为过时的方法，编译器在编译期进行警告。
> - **@SuppressWarnings：** 压制警告注解，可放置在类和方法上，该注解的作用是阻止编译器发出某些警告信息。



#### 3.2 @Override注解

> 标记在成员方法上，用于标识当前方法是重写父类（父接口）方法，编译器在对该方法进行编译时会检查是否符合重写规则，如果不符合，编译报错。

这里解释一下@Override注解，在我们的Object基类中有一个方法是toString方法，我们通常在实体类中去重写此方法来达到打印对象信息的效果，这时候也会发现重写的toString方法上方就有一个@Override注解。如下所示：

![image-20200604203535421](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200604203537.png)

于是，我们试图去改变重写后的toString方法名称，将方法名改为toStrings。你会发现在编译期就报错了！如下所示：

![image-20200604203645332](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200604203647.png)

那么这说明什么呢？这就说明该方法不是我们重写其父类（Object）的方法。这就是@Override注解的作用。



#### 3.3 @Deprecated注解

> 用于标记当前类、成员变量、成员方法或者构造方法过时如果开发者调用了被标记为过时的方法，编译器在编译期进行警告。

我们解释@Deprecated注解就需要模拟一种场景了。假设我们公司的产品，目前是V1.0版本，它为用户提供了show1方法的功能。这时候我们为产品的show1方法的功能又进行了扩展，打算发布V2.0版本。但是，我们V1.0版本的产品需要抛弃吗？也就是说我们V1.0的产品功能还继续让用户使用吗？答案肯定是不能抛弃的，因为有一部分用户是一直用V1.0版本的。如果抛弃了该版本会损失很多的用户量，所以我们不能抛弃该版本。这时候，我们对功能进行了扩展后，发布了V2.0版本，我们给予用户的通知就可以了，也就是告知用户我们在V2.0版本中为功能进行了扩展。可以让用户自行选择版本。

但是，除了发布告知用户版本情况之外，我们还需要在原来版本的功能上给予提示，在上面的模拟场景中我们需要在show1方法上方加@Deprecated注解给予提示。通过这种方式也告知用户“这是旧版本时候的功能了，我们不建议再继续使用旧版本的功能”，这句话的意思也就正是给用户做了提示。用户也会这么想“奥，这版本的这个功能不好用了，肯定有新版本，又更好用的功能。我要去官网查一下下载新版本”，还会有用户这么想“我明白了，又更新出更好的功能了，但是这个版本的功能我已经够用了，不需要重新下载新版本了”。

![image-20200604205459205](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200604205500.png)

那么我们怎么查看我上述所说的在功能上给予的提示呢？这时候我需要去创建一个方法，然后去调用show1方法，并查看调用时它是如何提示的。

![image-20200604205659588](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200604205702.png)

图已经贴出来了，你是否发现的新旧版本功能的异同点呢？很明显，在方法中的提示是在调用的方法名上加了一道横线把该方法划掉了。这就体现了show1方法过时了，已经不建议使用了，我们为你提供了更好的。

回想起来，在我们的api中也会有方法是过时的，比如我们的Date日期类中的方法有很多都已经过时了。如下图：

![image-20200604210154348](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200604210157.png)

![image-20200604210416762](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200604210419.png)

如你所见，是不是有很多方法都过时了呢？那它的方法上是加了@Deprecated注解吗？来跟着我的脚步，我带你们看一下。

![image-20200604210515910](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200604210517.png)

我们已经知道的Date类中的这些方法已经是过时的了，如果我们使用该方法并执行该程序的话。执行的过程中就会提示该方法已过时的内容，但是只是提示，并不影响你使用该方法。如下：

![image-20200604221938895](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200604221941.png)

OK！这也就是@Deprecated注解的作用了。



#### 3.4 @SuppressWarnings注解

> 压制警告注解，可放置在类和方法上，该注解的作用是阻止编译器发出某些警告信息，该注解为单值注解，只有 一个value参数，该参数为字符串数组类型，参数值常用的有如下几个。
>
> - unchecked：未检查的转化，如集合没有指定类型还添加元素
> - unused：未使用的变量
> - resource：有泛型未指定类型
> - path：在类路径，原文件路径中有不存在的路径
> - deprecation：使用了某些不赞成使用的类和方法
> - fallthrough：switch语句执行到底没有break关键字
> -  rawtypes：没有写泛型，比如: List list = new ArrayList();
> - all：全部类型的警告

压制警告注解，顾名思义就是压制警告的出现。我们都知道，在Java代码的编写过程中，是有很多黄色警告出现的。但是我不知道你的导师是否教过你，程序员只需要处理红色的error，不需要理会黄色的warning。如果你的导师说过此问题，那是有原因的。因为在你学习阶段，我们认清处理红色的error即可，这样可以减轻你学习阶段在脑部的记忆内容。如果你刚刚加入学习Java的队列中，需要大脑记忆的东西就有太多了，也就是我们目前不需要额外记忆其他的东西，只记忆重点即可。至于黄色warning嘛，在你的学习过程中慢慢就会有所了解的，而不是死记硬背的。

那为了解释@SuppressWarnings注解，我们还使用上一个例子，因为在那个例子中就有黄色的warning出现。

![image-20200604213625474](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200604213627.png)

而每一个黄色的warning都会有警告信息的。比如，这一个图中的警告信息，就告知你show2()方法没有被使用，简单来说，你创建的show2方法，但是你在代码中并没有调用过此方法。以后你便会遇到各种各样黄色的warning。然后， 我们就可以使用不同的注解参数来压制不同的注解。但是在该注解的参数中，提供了一个all参数可以压制全部类型的警告。而这个注解是需要加到类的上方，并赋予all参数，即可压制所有警告。如下：

![image-20200604213943722](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200604213945.png)

我们加入注解并赋予all参数后，你会发现use方法和show2方法的警告没有了，实际上导Date包的警告还在，因为我们Date包导入到了该类中，但是我们并没有创建Date对象，也就是并没有写入Date在代码中，你也会发现那一行是灰色的，也就证明了我们没有去使用导入这个包的任何信息的说法，出现这种情况我们就需要把这个没有用的导包内容删除掉，使用`Ctrl + X`删除导入没有用到的包即可。还有一种办法就是在包的上方修饰压制警告注解，但是我认为在一个没有用的包上加压制注解是毫无意义的，所以，我们直接删除就好。

然后，我们还见到上图，注解那一行出现了警告信息提示。这一行的意思是冗余的警告压制。这就是说我们压制以下的警告并没有什么意义而造成的冗余，但是如果我们使用了该类并做了点什么的话，压制注解的冗余警告就会消失，毕竟我们使用了该类，此时就不会早场冗余了。

上述解释@SuppressWarnings注解也差不多就这些了。OK，继续向下看吧。持续为大家讲解。



#### 3.5 @Repeatable注解

> **@Repeatable** 表明标记的注解可以多次应用于相同的声明或类型，此注解由Java8版本引入。我们知道注解是不能重复定义的，其实该注解就是一个语法糖，它可以重复多此使用，更适用于我们的特殊场景。

首先，我们先创建一个可以重复使用的注解。

```java
package com.mylifes1110.anno;

import java.lang.annotation.Repeatable;

@Repeatable(Hour.class)
public @interface Hours {
    double[] hours() default 0;
}
```

你会发现注解要求传入的值是一个类对象，此类对象就需要传入另外一个注解，这里也就是另外一个注解容器的类对象。我们去创建一下。

```java
package com.mylifes1110.anno;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

//容器
@Target(ElementType.TYPE)
@Retention(RetentionPolicy.RUNTIME)
public @interface Hour {
    Hours[] value();
}
```

其实，这两个注解的套用，就是将一个普通的注解封装了一个可重复使用的注解，来达到注解的复用性。最后，我们创建一下测试类，随后带你去看一下源码。

```java
package com.mylifes1110.java;

import com.mylifes1110.anno.Hours;

@Hours(hours = 5)
@Hours(hours = 6)
@Hours(hours = 2)
public class Worker {
    public static void main(String[] args) {
        //通过Hours注解类型来获取Worker中的值数组对象
        Hours[] hours = Worker.class.getAnnotationsByType(Hours.class);
        //遍历数组
        for (Hours h : hours) {
            System.out.println(h);
        }
    }
}
```

测试类，是一个工人测试类，该工人使用注解记录早中晚的工作时间。测试结果如下：

![image-20200606183652359](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200606184056.png)

然后我们进入到源码一探究竟。

![image-20200606183737877](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200606184053.png)

我们发现进入到源码后，就只看见一个返回值为类对象的抽象方法。这也就验证了该注解只是一个可实现重复性注解的语法糖而已。



### 四、注解分类

#### 4.1 注解分类

> 注解可以根据注解参数分为三大类：
>
> - **标记注解：** 没有参数的注解，仅用自身的存在与否为程序提供信息，如@Override注解，该注解没有参数，用于表示当前方法为重写方法。
> - **单值注解：** 只有一个参数的注解，如果该参数的名字为value，那么可以省略参数名，如 @SuppressWarnings(value = "all")，可以简写为@SuppressWarnings("all")。
> - **完整注解：** 有多个参数的注解。



#### 4.2 标记注解

> 说到@Override注解是一个标记注解，那我们进入到该注解的源码查看一下。从上往下看该注解源码，发现它继承了导入了`java.lang.annotation.*`，也就是有使用到该包的内容。然后下面就又是两个看不懂的注解，其实发现注解的定义格式是public修饰的@Interface，最终看到该注解中方法体并没有任何参数，也就是只起到标记作用。

![image-20200604215753302](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200604215756.png)



#### 4.3 单值注解

> 在上面我们用到的@SuppressWarnings注解就是一个单值注解。那我们进入到它的源码看一下是怎么个情况。其实，和标记注解比较，它就多一个value参数而已，而这就是单值注解的必要条件，即只有一个参数。并且这一个参数为value时，我们可以省略value。

![image-20200604220523115](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200604220525.png)



#### 4.4 完整注解

> 上述两个类型注解讲解完，至于完整注解嘛，这下就能更明白了。其中的方法体就是有多个参数而已。



### 五、自定义注解

#### 5.1 自定义注解格式

> **格式：** public @Interface 注解名 {属性列表/无属性}
>
> **注意：** 如果注解体中无任何属性，其本质就是标记注解。但是与其标注注解还少了上边修饰的元注解。

如下，这就是一个注解。但是它与jdk自定义注解有点区别，jdk自定义注解的上方还有注解来修饰该注解，而那注解就叫做元注解。元注解我会在后面详细的说到。

![image-20200606104149069](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200606104151.png)

这里我们的确不知道@Interface是什么，那我们就把自定义的这个注解反编译一下，看一下反编译信息。反编译操作如下：

![image-20200606104818131](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200606104820.png)

反编译后的反编译内容如下：

```java
public interface com.mylifes1110.anno.MyAnno extends java.lang.annotation.Annotation {
}
```

首先，看过反编译内容后，我们可以直观的得知他是一个接口，因为它的public修饰符后面的关键字是interface。

其次，我们发现`MyAnno`这个接口是继承了`java.lang.annotation`包下的`Annotation`接口。

所以，我们可以得知注解的本质就是一个接口，该接口默认继承了`Annotation`接口。

既然，是继承的`Annotation`接口，那我们就去进入到这个接口中，看它定义了什么。以下是我抽取出来的接口内容。我们发现它看似很常见，其实它们不是很常用，作为了解即可。

```java
public interface Annotation {
    boolean equals(Object obj);
    int hashCode();
    String toString();
	Class<? extends Annotation> annotationType();
}
```

最后，我们的注解中也是可以写有属性的，它的属性不同于普通的属性，它的属性是抽象方法。既然注解也是一个接口，那么我们可以说接口体中可以定义什么，它同样也可以定义，而它的修饰符与接口一样，也是默认被`public abstract`修饰。

> 而注解体中的属性也是有要求的。其属性要求如下：
>
> - **属性的返回值类型必须是以下几种：** 
>   - 基本数据类型
>   - String类型
>   - 枚举类型
>   - 注解
>   - 以上类型的数组
>   - **注意：** 在这里不能有void的无返回值类型和以上类型以外的类型
> - **定义的属性，在使用时需要给注解中的属性赋值** 
>   - 如果定义属性时，使用`default`关键字给属性默认初始化值，则使用注解时可以不为属性赋值，它取的是默认值。如果为它再次传入值，那么就发生了对原值的覆盖。
>   - 如果只有一个属性需要赋值，并且属性的名称为value，则赋值时value可以省略，可以直接定义值
>   - 数组赋值时，值使用`{}`存储值。如果数组中只有一个值，则可以省略`{}`。



#### 5.2 自定义注解属性的返回值

属性返回值既然有以上几种，那么我就在这里写出这几种演示一下是如何写的。

首先，定义一个枚举类和另外一个注解备用。

```java
package com.mylifes1110.enums;

public enum Lamp {
    RED, GREEN, YELLOW
}
```

```java
package com.mylifes1110.anno;

public @interface MyAnno2 {
}
```

其次，我们来定义上述几种类型，如下：

```java
package com.mylifes1110.anno;

import com.mylifes1110.enums.Lamp;

public @interface MyAnno {
    //基本数据类型
    int num();

    //String类型
    String value();

    //枚举类型
    Lamp lamp();

    //注解类型
    MyAnno2 myAnno2();
    
    //以上类型的数组
    String[] values();
    Lamp[] lamps();
    MyAnno2[] myAnno2s();
    int[] nums();
}
```



#### 5.3 自定义注解的属性赋值

这里我们演示一下，首先，我们使用该注解来进行演示。

```java
package com.mylifes1110.anno;

public @interface MyAnno {
    //基本数据类型
    int num();

    //String类型
    String value();
}
```

随后创建一个测试类，在类的上方写上注解，你会发现，注解的参数中会让你写这两个参数（int、String）。

![image-20200606113037920](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200606113039.png)

此时，传参是这样来做的。格式为：`名称 = 返回值类型参数`。如下：

![image-20200606113135414](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200606113137.png)

上述所说，如果使用default关键字给属性默认初始化值，就不需要为其参数赋值，如果赋值的话，就把默认初始化的值覆盖掉了。

![image-20200606113518962](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200606113854.png)

当然还有一个规则，如果只有一个属性需要赋值，并且属性的名称为value，则赋值时value可以省略，可以直接定义值。那么，我们的num已经有了默认值，就可以不为它传值。我们发现，注解中定义的属性就剩下了一个value属性值，那么我们就可以来演示这个规则了。

![image-20200606113849685](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200606113851.png)

这里，我并没有写属性名称value，而是直接为value赋值。如果我将num的default关键字修饰去掉呢，那意思也就是说在使用该注解时必须为num赋值，这样可以省略value吗？那我们看一下。

![image-20200606114216801](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200606114218.png)

结果，就是我们所想的，它报错了，必须让我们给num赋值。其实想想这个规则也是很容易懂的，定义一个为value的值，就可以省略其value名称。如果定义多个值，它们可以省略名称就无法区分定义的是那个值了，关键是还有数组，数组内定义的是多个值呢，对吧。



#### 5.4 自定义注解的多种返回值类型赋值

这里我们演示一下，上述的多种返回值类型是如何赋值的。这里我们定义这几个参数来看一下，是如何为属性赋值的。

![image-20200606114947483](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200606114949.png)

num是一个int基本数据类型，即`num = 1`

value是一个String类型，即`value = "str"`

lamp是一个枚举类型，即`lamp = Lamp.RED`

myAnno2是一个注解类型，即`myAnno2 = @MyAnno2`

values是一个String类型数组，即`values = {"s1", "s2", "s3"}`

values是一个String类型数组，其数组中只有一个值，即`values = "s4"`

**注意：** 值与值之间是`,`隔开的；数组是用`{}`来存储值的，如果数组中只有一个值可以省略`{}`；枚举类型是`枚举名.枚举值`

![image-20200606115023387](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200606115025.png)



### 六、元注解

#### 6.1 元注解分类

> 元注解就是用来描述注解的注解。一般使用元注解来限制自定义注解的使用范围、生命周期等等。

**而在jdk的中java.lang.annotation包中定义了四个元注解，如下：** 

| 元注解      | 描述                                                   |
| ----------- | ------------------------------------------------------ |
| @Target     | 指定被修饰的注解的作用范围                             |
| @Retention  | 指定了被修饰的注解的生命周期                           |
| @Documented | 指定了被修饰的注解是可以Javadoc等工具文档化            |
| @Inherited  | 指定了被修饰的注解修饰程序元素的时候是可以被子类继承的 |



#### 6.2 @Target

> **@Target** 指定被修饰的注解的作用范围。其作用范围可以在源码中找到参数值。

| 属性            | 描述                                      |
| --------------- | ----------------------------------------- |
| CONSTRUCTOR     | 用于描述构造器                            |
| FIELD（常用）   | 用于描述属性                              |
| LOCAL_VARIABLE  | 用于描述局部变量                          |
| METHOD（常用）  | 用于描述方法                              |
| PACKAGE         | 用于描述包                                |
| PARAMETER       | 用于描述参数                              |
| TYPE（常用）    | 用于描述类、接口(包括注解类型) 或enum声明 |
| ANNOTATION_TYPE | 用于描述注解类型                          |
| TYPE_USE        | 用于描述使用类型                          |

由此可见，该注解体内只有一个value属性值，但是它的类型是一个ElementType数组。那我们进入到这个数组中继续查看。

![image-20200606140708009](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200606140709.png)

进入到该数组中，你会发现他是一个枚举类，其中定义了上述表格中的各个属性。

![image-20200606141036340](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200606141038.png)

了解了@Target的作用和属性值后，我们来使用一下该注解。首先，我们要先用该注解来修饰一个自定义注解，定义该注解的指定作用在类上。如下：

![image-20200606142343441](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200606142346.png)

而你观察如下测试类，我们把注解作用在类上时是没有错误的。而当我们的注解作用在其他地方就会报错。这也就说明了，我们@Target的属性起了作用。

**注意：** 如果我们定义多个作用范围时，也是可以省略该参数名称了，因为该类型是一个数组，虽然能省略名称但是，我们还需要用`{}`来存储。

![image-20200606142537664](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200606142539.png)



#### 6.3 @Retention

> **@Retention** 指定了被修饰的注解的生命周期

| 属性                            | 描述                                                         |
| ------------------------------- | ------------------------------------------------------------ |
| RetentionPolicy.SOURCE          | 注解只在源码阶段保留，在编译器进行编译时它将被丢弃忽视。     |
| RetentionPolicy.CLASS           | 注解只被保留到编译进行时的class文件，但 JVM 加载class文件时候被遗弃，也就是在这个阶段不会读取到该class文件。 |
| RetentionPolicy.RUNTIME（常用） | 注解可以保留到程序运行的时候，它会被加载进入到 JVM 中，所以在程序运行时可以获取到它们。 |

**注意：** 我们常用的定义即是`RetentionPolicy.RUNTIME`，因为我们使用反射来实现的时候是需要从JVM中获取class类对象并操作类对象的。

首先，我们要了解反射的三个生命周期阶段，这部分内容我在`Java反射机制`中也是做了非常详细的说明，有兴趣的小伙伴可以去看看我写的[Java反射机制](https://github.com/Ziphtracks/JavaLearningmanual/blob/master/docs/Java-Standard-Edition/Java%E5%8F%8D%E5%B0%84%E6%9C%BA%E5%88%B6.md)，相信你在其中也会有所收获。

这里我再次强调一下这三个生命周期是`源码阶段` - > `class类对象阶段` - > `Runtime运行时阶段`。

那我们进入到源码，看看@Retention注解中是否有这些参数。

![image-20200606145014203](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200606145016.png)

我们看到该注解中的属性只有一个value，而它的类型是一个RetentionPolicy类型，我们进入到该类型中看看有什么参数，是否与表格中的参数相同呢？

![image-20200606145449931](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200606145451.png)

至于该注解怎么使用，其实是相同的，用法如下：

![image-20200606151837939](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200606151839.png)

这就证明了我们的注解可以保留到Runtime运行阶段，而我们在反射中大多数是定义到Runtime运行时阶段的，因为我们需要从JVM中获取class类对象并操作类对象。



#### 6.4 @Documented

> **@Documented** 指定了被修饰的注解是可以Javadoc等工具文档化

@Documented注解是比较好理解的，它是一个标记注解。被该标记注解标记的注解，生成doc文档时，注解是可以被加载到文档中显示的。

![image-20200606152526551](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200606152530.png)

还拿api中过时的Date中的方法来说，在api中显示Date中的getYear方法是这样的。

![image-20200606153044390](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200606153046.png)

正如你看到的，注解在api中显示了出来，证明该注解是@Documented注解修饰并文档化的。那我们就看看这个注解是否被@Documented修饰吧。

![image-20200606153256793](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200606153259.png)

然后，我们发现该注解的确是被文档化了。所以在api中才会显示该注解的。如果不信，你可以自己使用`javadoc`命令来生成一下doc文档，看看被该注解修饰的注解是否存在。

至于Javadoc文档生成，我在[javadoc文档生成](https://github.com/Ziphtracks/JavaLearningmanual/blob/master/docs/Java-Standard-Edition/Javadoc%E6%96%87%E6%A1%A3%E7%94%9F%E6%88%90.md)一文中有过详细记载，大家可以进行参考，生成doc文档查看。



#### 6.5 @Inherited

> **@Inherited** 指定了被修饰的注解修饰程序元素的时候是可以被子类继承的

首先进入到源码中，我们也可以清楚的知道，该注解也是一个标记注解。而且它也是被文档化的注解。

![image-20200606154143241](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200606154146.png)

其次，我们去在自定义注解中，标注上@Inherited注解。

![image-20200606154343606](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200606154345.png)

演示@Inherited注解，我需要创建两个类，同时两个类中有一层的继承关系。如下：

![image-20200606154216471](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200606154218.png)

我们在Person类中标记了@MyAnno注解，由于该注解被@Inherited注解修饰，我们就可以得出继承于Person类的Student类也同样被@MyAnno注解标记了，如果你要获取该注解的值的话，肯定获取的也是父类上注解值的那个"1"。



### 七、使用反射机制解析注解

***自定义注解*** 

```java
package com.mylifes1110.anno;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

/**
 * @InterfaceName Sign
 * @Description 描述需要执行的类名和方法名
 * @Author Ziph
 * @Date 2020/6/6
 * @Since 1.8
 */
@Target(ElementType.TYPE)
@Retention(RetentionPolicy.RUNTIME)
public @interface Sign {
    String methodName();

    String className();
}
```



***Cat*** 

```java
package com.mylifes1110.java;

/**
 * @ClassName Cat
 * @Description 描述一只猫的类
 * @Author Ziph
 * @Date 2020/6/6
 * @Since 1.8
 */
public class Cat {
    /*
     * @Description 描述一只猫吃鱼的方法 
     * @Author Ziph
     * @Date 2020/6/6
     * @Param []
     * @return void
     */
    public void eat() {
        System.out.println("猫吃鱼");
    }
}
```



准备好，上述代码后，我们就可以开始编写使用反射技术来解析注解的测试类。如下：

首先，我们先通过反射来获取注解中的methodName和className参数。

```java
package com.mylifes1110.java;

import com.mylifes1110.anno.Sign;

/**
 * @ClassName SignTest
 * @Description 要求创建cat对象并执行其类中eat方法
 * @Author Ziph
 * @Date 2020/6/6
 * @Since 1.8
 */
@Sign(className = "com.mylifes1110.java.Cat", methodName = "eat")
public class SignTest {
    public static void main(String[] args) {
        //获取该类的类对象
        Class<SignTest> signTestClass = SignTest.class;
        //获取类对象中的注解对象
        //原理实际上是在内存中生成了一个注解接口的子类实现对象
        Sign sign = signTestClass.getAnnotation(Sign.class);
        //调用注解对象中定义的抽象方法（注解中的属性）来获取返回值
        String className = sign.className();
        String methodName = sign.methodName();
        System.out.println(className);
        System.out.println(methodName);
    }
}
```

此时的打印结果证明我们已经成功获取到了该注解的两个参数。

![image-20200606162810165](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200606162812.png)

**注意：** 获取类对象中的注解对象时，其原理实际上是在内存中生成了一个注解接口的子类实现对象并返回的字符串内容。如下：

```java
public class SignImpl implements Sign {
    public String methodName() {
        return "eat";
    }
    
    public String className() {
        return "com.mylifes1110.java.Cat";
    }
}
```

继续编写我们后面的代码，代码完整版如下：

***完整版代码*** 

```java
package com.mylifes1110.java;

import com.mylifes1110.anno.Sign;

import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;

/**
 * @ClassName SignTest
 * @Description 要求创建cat对象并执行其类中eat方法
 * @Author Ziph
 * @Date 2020/6/6
 * @Since 1.8
 */
@Sign(className = "com.mylifes1110.java.Cat", methodName = "eat")
public class SignTest {
    public static void main(String[] args) throws ClassNotFoundException, IllegalAccessException, InstantiationException, NoSuchMethodException, InvocationTargetException {
        //获取该类的类对象
        Class<SignTest> signTestClass = SignTest.class;
        //获取类对象中的注解对象
        //原理实际上是在内存中生成了一个注解接口的子类实现对象
        Sign sign = signTestClass.getAnnotation(Sign.class);
        //调用注解对象中定义的抽象方法（注解中的属性）来获取返回值
        String className = sign.className();
        String methodName = sign.methodName();
        //获取className名称的类对象
        Class<?> clazz = Class.forName(className);
        //创建对象
        Object o = clazz.newInstance();
        //获取methodName名称的方法对象
        Method method = clazz.getMethod(methodName);
        //执行该方法
        method.invoke(o);
    }
}
```

***执行结果*** 

执行后成功的调用了eat方法，并打印了猫吃鱼的结果，如下：

![image-20200606163523994](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200606163526.png)



### 

### 八、自定义注解改变JDBC工具类

> 首先，我们在使用JDBC的时候是需要通过properties文件来获取配置JDBC的配置信息的，这次我们通过自定义注解来获取配置信息。其实使用注解并没有用配置文件好，但是我们需要了解这是怎么做的，获取方法也是鱼使用反射机制解析注解，所谓“万变不离其宗”，它就是这样的。

###### 自定义注解 

```java
package com.mylifes1110.java.anno;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

/**
 * @InterfaceName DBInfo
 * @Description 给予注解声明周期为运行时并限定注解只能用在类上
 * @Author Ziph
 * @Date 2020/6/6
 * @Since 1.8
 */
@Target(ElementType.TYPE)
@Retention(RetentionPolicy.RUNTIME)
public @interface DBInfo {
    String driver() default "com.mysql.jdbc.Driver";

    String url() default "jdbc:mysql://localhost:3306/temp?useUnicode=true&characterEncoding=utf8";

    String username() default "root";

    String password() default "123456";
}

```

###### 数据库连接工具类 

> 为了代码的健全我也在里面加了properties文件获取连接的方式。

```java
package com.mylifes1110.java.utils;

import com.mylifes1110.java.anno.DBInfo;

import java.io.IOException;
import java.io.InputStream;
import java.sql.*;
import java.util.Properties;

/**
 * @ClassName DBUtils
 * @Description 数据库连接工具类
 * @Author Ziph
 * @Date 2020/6/6
 * @Since 1.8
 */
@DBInfo()
public class DBUtils {
    private static final Properties PROPERTIES = new Properties();
    private static String driver;
    private static String url;
    private static String username;
    private static String password;

    static {
        Class<DBUtils> dbUtilsClass = DBUtils.class;
        boolean annotationPresent = dbUtilsClass.isAnnotationPresent(DBInfo.class);
        if (annotationPresent) {
            /**
             * DBUilts类上有DBInfo注解，并获取该注解
             */
            DBInfo dbInfo = dbUtilsClass.getAnnotation(DBInfo.class);
//            System.out.println(dbInfo);
            driver = dbInfo.driver();
            url = dbInfo.url();
            username = dbInfo.username();
            password = dbInfo.password();
        } else {
            InputStream inputStream = DBUtils.class.getResourceAsStream("db.properties");
            try {
                PROPERTIES.load(inputStream);
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
        try {
            Class.forName(driver);
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }
    }

    public static Connection getConnection() {
        try {
            return DriverManager.getConnection(url, username, password);
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }
        return null;
    }

    public static void closeAll(Connection connection, Statement statement, ResultSet resultSet) {
        try {
            if (resultSet != null) {
                resultSet.close();
                resultSet = null;
            }

            if (statement != null) {
                statement.close();
                statement = null;
            }
            if (connection != null) {
                connection.close();
                connection = null;
            }
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }
    }
}
```

###### 测试类

```java
package com.mylifes1110.java.test;

import com.mylifes1110.java.utils.DBUtils;

import java.sql.Connection;

/**
 * @ClassName GetConnectionDemo
 * @Description 测试连接是否可以获取到
 * @Author Ziph
 * @Date 2020/6/6
 * @Since 1.8
 */
public class GetConnectionDemo {
    public static void main(String[] args) {
        Connection connection = DBUtils.getConnection();
        System.out.println(connection);
    }
}
```

###### 测试结果

> 为了证明获取的连接是由注解的配置信息获取到的连接，我将properties文件中的所有配置信息删除后测试的。

![image-20200606170207601](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200606170209.png)



### 九、自定义@MyTest注解实现单元测试

> 我不清楚小伙伴们是否了解，Junit单元测试。@Test是单元测试的测试方法上方修饰的注解。此注解的核心原理也是由反射来实现的。如果有小伙伴不知道什么是单元测试或者对[自定义@MyTest注解实现单元测试](https://github.com/Ziphtracks/JavaLearningmanual/blob/master/docs/Java-Standard-Edition/Junit%E5%8D%95%E5%85%83%E6%B5%8B%E8%AF%95.md#%E5%85%AB%E8%87%AA%E5%AE%9A%E4%B9%89mytest%E6%B3%A8%E8%A7%A3%E5%AE%9E%E7%8E%B0%E5%8D%95%E5%85%83%E6%B5%8B%E8%AF%95)感兴趣的话，可以点进来看看哦！



> 上一章[【Javadoc文档生成】](https://github.com/Ziphtracks/JavaLearningmanual/blob/master/docs/Java-Standard-Edition/Javadoc文档生成.md)

> 下一章[【Java枚举】](https://github.com/Ziphtracks/JavaLearningmanual/blob/master/docs/Java-Standard-Edition/Java枚举.md)