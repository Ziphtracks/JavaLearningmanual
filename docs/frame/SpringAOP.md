* [SpringAOP](#springaop)
    * [一、什么是AOP](#%E4%B8%80%E4%BB%80%E4%B9%88%E6%98%AFaop)
    * [二、场景分析](#%E4%BA%8C%E5%9C%BA%E6%99%AF%E5%88%86%E6%9E%90)
    * [三、AOP术语](#%E4%B8%89aop%E6%9C%AF%E8%AF%AD)
    * [四、AOP术语解析](#%E5%9B%9Baop%E6%9C%AF%E8%AF%AD%E8%A7%A3%E6%9E%90)
      * [3\.1 连接点](#31-%E8%BF%9E%E6%8E%A5%E7%82%B9)
      * [3\.2 切入点](#32-%E5%88%87%E5%85%A5%E7%82%B9)
      * [3\.3 增强、通知](#33-%E5%A2%9E%E5%BC%BA%E9%80%9A%E7%9F%A5)
      * [3\.4 目标对象](#34-%E7%9B%AE%E6%A0%87%E5%AF%B9%E8%B1%A1)
      * [3\.5 引介](#35-%E5%BC%95%E4%BB%8B)
      * [3\.6 织入](#36-%E7%BB%87%E5%85%A5)
      * [3\.7 代理](#37-%E4%BB%A3%E7%90%86)
      * [3\.8 切面](#38-%E5%88%87%E9%9D%A2)
    * [五、SpringAOP开发步骤](#%E4%BA%94springaop%E5%BC%80%E5%8F%91%E6%AD%A5%E9%AA%A4)
      * [5\.1 pom\.xml文件引入依赖](#51-pomxml%E6%96%87%E4%BB%B6%E5%BC%95%E5%85%A5%E4%BE%9D%E8%B5%96)
      * [5\.2 创建spring\-context\.xml文件并添加schema](#52-%E5%88%9B%E5%BB%BAspring-contextxml%E6%96%87%E4%BB%B6%E5%B9%B6%E6%B7%BB%E5%8A%A0schema)
      * [5\.3 定义原始类](#53-%E5%AE%9A%E4%B9%89%E5%8E%9F%E5%A7%8B%E7%B1%BB)
      * [5\.4 定义通过类](#54-%E5%AE%9A%E4%B9%89%E9%80%9A%E8%BF%87%E7%B1%BB)
      * [5\.5 定义bean](#55-%E5%AE%9A%E4%B9%89bean)
      * [5\.6 定义切入点形成切面](#56-%E5%AE%9A%E4%B9%89%E5%88%87%E5%85%A5%E7%82%B9%E5%BD%A2%E6%88%90%E5%88%87%E9%9D%A2)
      * [5\.7 增强结果](#57-%E5%A2%9E%E5%BC%BA%E7%BB%93%E6%9E%9C)
    * [六、通知](#%E5%85%AD%E9%80%9A%E7%9F%A5)
    * [七、通配切入点](#%E4%B8%83%E9%80%9A%E9%85%8D%E5%88%87%E5%85%A5%E7%82%B9)
    * [八、代理模式](#%E5%85%AB%E4%BB%A3%E7%90%86%E6%A8%A1%E5%BC%8F)
      * [8\.1 代理模式](#81-%E4%BB%A3%E7%90%86%E6%A8%A1%E5%BC%8F)
      * [8\.2 代理模式应用场景模拟](#82-%E4%BB%A3%E7%90%86%E6%A8%A1%E5%BC%8F%E5%BA%94%E7%94%A8%E5%9C%BA%E6%99%AF%E6%A8%A1%E6%8B%9F)
      * [8\.3 创建Service接口和实现类](#83-%E5%88%9B%E5%BB%BAservice%E6%8E%A5%E5%8F%A3%E5%92%8C%E5%AE%9E%E7%8E%B0%E7%B1%BB)
      * [8\.4 静态代理](#84-%E9%9D%99%E6%80%81%E4%BB%A3%E7%90%86)
      * [8\.5 JDK和CGLIB的选择](#85-jdk%E5%92%8Ccglib%E7%9A%84%E9%80%89%E6%8B%A9)
      * [8\.6 JDK动态代理](#86-jdk%E5%8A%A8%E6%80%81%E4%BB%A3%E7%90%86)
      * [8\.7 CGLIB动态代理](#87-cglib%E5%8A%A8%E6%80%81%E4%BB%A3%E7%90%86)
    * [九、后处理器](#%E4%B9%9D%E5%90%8E%E5%A4%84%E7%90%86%E5%99%A8)
      * [9\.1 后处理器的了解](#91-%E5%90%8E%E5%A4%84%E7%90%86%E5%99%A8%E7%9A%84%E4%BA%86%E8%A7%A3)
      * [9\.2 定义后处理器](#92-%E5%AE%9A%E4%B9%89%E5%90%8E%E5%A4%84%E7%90%86%E5%99%A8)
      * [9\.3 配置后处理器](#93-%E9%85%8D%E7%BD%AE%E5%90%8E%E5%A4%84%E7%90%86%E5%99%A8)
      * [9\.4 Bean的生命周期](#94-bean%E7%9A%84%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F)
      * [9\.5 动态代理源码(了解)](#95-%E5%8A%A8%E6%80%81%E4%BB%A3%E7%90%86%E6%BA%90%E7%A0%81%E4%BA%86%E8%A7%A3)

![LOGO](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200712213350.png)

# SpringAOP

------

### 一、什么是AOP

> AOP（Aspect Oriented Programming），即面向切面编程，利用一种称为"横切"的技术，剖开封装的对象内部，并将那些影响了多个类的公共行为封装到一个可重用模块，并将其命名为"Aspect"，即切面。所谓"切面"，简单说就是那些与业务无关，却为业务模块所共同调用的逻辑或责任封装起来，便于减少系统的重复代码，降低模块之间的耦合度，并有利于未来的可操作性和可维护性。
>
> **应用场景：** 如日志记录、审计、声明式事务、安全性和缓存等。



### 二、场景分析

> 为了更好的理解AOP，渗透面向切面编程的思想。我这里举一个开发中很常见的例子。打印日志

首先，我们要先理解什么是日志。

**日志：** 日志是一种可以追踪某些软件运行时所发生事件的方法，软件开发人员可以向他们的代码中调用日志记录相关的方法来表明发生了某些事情。一个事件可以用一个可包含可选变量数据的消息来描述，此外，事件也有重要性的概念，这个重要性也可以被称为严重性级别（level）。开发者可以通过区分严重性级别来分析出想要的信息。

了解了什么是日志，那就要知道怎么打印日志，在哪里打印日志。打印日志，是引入依赖，使用日志工具来实现日志严重性级别和日志信息的打印。至于在哪里打印日志，当然是在我们项目代码中的关键位置了。

> 这里我们举一个例子在某一段代码的前后使用，有A、B、C三个方法，但是要在调用每一个方法之前，要求打印一行日志“某方法被调用了！”，在调用每个方法之后，也要求打印日志“某方法被调用完毕！”。
>
> 一般人会在每一个方法的开始和结尾部分都会添加一句日志打印吧，这样做如果方法多了，就会有很多重复的代码，显得很麻烦，这时候有人会想到，为什么不把打印日志这个功能封装一下，然后让它能在指定的地方（比如执行方法前，或者执行方法后）自动的去调用呢？如果可以的话，业务功能代码中就不会掺杂这一下其他的代码，所以AOP就是做了这一类的工作的。
>
> 其工作原理为JDK动态代理和CGLIB动态代理，这里就先不展开动态代理的知识了！还是先看AOP吧！



### 三、AOP术语

> **AOP作用：** Spring的AOP编程即是通过动态代理类为原始类的方法添加辅助功能。

| AOP术语            | 描述                                                         |
| ------------------ | ------------------------------------------------------------ |
| 连接点(Joinpoint)  | 连接点是程序类中客观存在的方法，可被Spring拦截并切入内容     |
| 切入点(Pointcut)   | 被Spring切入连接点                                           |
| 通知、增强(Advice) | 可以为切入点添加额外功能，分为：前置通知、后置通知、异常通知、环绕通知等。 |
| 目标对象(Target)   | 代理的目标对象                                               |
| 引介(Introduction) | 一种特殊的增强，可在运行期为类动态添加Field和Method          |
| 织入(Weaving)      | 把通知应用到具体的类，进而创建新的代理类的过程               |
| 代理(Proxy)        | 被AOP织入通知后，产生的结果类                                |
| 切面(Aspect)       | 由切点和通知组成，将横切逻辑织入切面所指定的连接点中         |



### 四、AOP术语解析

#### 3.1 连接点

> 简单来说，就是允许你使用通知、增强的地方。就比如在方法前后打印日志一样，我们可以在一段代码的前后做操作，可以在一段代码前做操作，可以在一段代码后做操作，可以在一段代码抛异常之后做操作。所以，在这里这些可以操作的一行行代码（方法等等）都是一个个的连接点。



#### 3.2 切入点

> 把一个个方法等代码看作连接点，那我们从哪个位置打印日志（增强操作）呢，而我们挑选出需要打印日志的位置（也就是连接点的周围），就被称为切入点。



#### 3.3 增强、通知

> 关于增强，在上面我已经说到过了，通过在切入点做的操作叫做增强，比如我们要打印日志的话，日志就是一个增强功能操作。



#### 3.4 目标对象

> 目标对象，简单来说是要被增强的对象。



#### 3.5 引介

> 允许我们向现有的类添加新方法属性。这不就是把切面（也就是增强定义的新方法属性）用到目标对象中



#### 3.6 织入

> 把增强应用到具体的目标对象中，进而创建新的代理类的过程



#### 3.7 代理

> 代理就像我们买房子的中介一样，也就是被AOP织入后产生的代理对象（中介对象），通过代理对象可以实现对我们的目标对象增强



#### 3.8 切面

> 切面是通知（增强）和切入点的结合。通知说明了干什么和什么时候干，而切入点说明了在哪干，这就是一个完整的切面定义。



### 五、SpringAOP开发步骤

#### 5.1 pom.xml文件引入依赖

> 引入Spring核心依赖（spring-context）和SpringAOP依赖（spring-aspects）

```java
<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-context</artifactId>
    <version>5.1.6.RELEASE</version>
</dependency>
<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-aspects</artifactId>
    <version>5.1.6.RELEASE</version>
</dependency>
```



#### 5.2 创建spring-context.xml文件并添加schema

> 我们需要在核心配置文件的头文件中添加aop和context的Schema

```java
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:context="http://www.springframework.org/schema/context"
       xmlns:aop="http://www.springframework.org/schema/aop"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="
       http://www.springframework.org/schema/beans
       http://www.springframework.org/schema/beans/spring-beans.xsd
       http://www.springframework.org/schema/aop
       http://www.springframework.org/schema/aop/spring-aop.xsd
       ">
</beans>
```



#### 5.3 定义原始类

> 模拟创建一个原始类

```java
public interface UserService {
    public void save();
}

public class UserServiceImpl implements UserService {
    public void save() {
        System.out.println("save method executed...");
    }
}
```



#### 5.4 定义通过类

> 定义通知类（添加额外功能做增强）

```java
public class MyAdvice implements MethodBeforeAdvice { //实现前置通知接口
    public void before(Method method, Object[] args, Object target) throws Throwable {
        System.out.println("before advice executed...");
    }
}
```



#### 5.5 定义bean

> 配置bean对象

```java
<!--原始对象-->
<bean id="us" class="com.mylifes1110.service.impl.UserServiceImpl" />

<!--辅助(增强)对象-->
<bean id="myAdvice" class="com.mylifes1110.advice.MyAdvice" />
```



#### 5.6 定义切入点形成切面

> 定义切入点（PointCut）并形成切面（Aspect）

```java
<aop:config>
    <!--切点-->
    <aop:pointcut id="myPointCut" expression="execution(* save())" />
    <!--组装切面-->
    <aop:advisor advice-ref="myAdvice" pointcut-ref="myPointCut" />
</aop:config>
```



#### 5.7 增强结果

> 使用的前置通知，结果增强的打印语句`before advice executed...`会在save()方法的前面打印`save method executed...`。



### 六、通知

> 定义通知类，达到通知（增强）效果。实现不同的接口并覆盖方法来达到不同的通知效果

| 通知名称 | 接口                     | 描述                                           |
| -------- | ------------------------ | ---------------------------------------------- |
| 前置通知 | MethodBeforeAdvice接口   | 在目标对象的前面做增强                         |
| 后置通知 | AfterAdvice接口          | 注意：此接口内方法为空，后置默认使用第三种即可 |
| 后置通知 | AfterReturningAdvice接口 | 在目标对象的后面做增强                         |
| 异常通知 | ThrowsAdvice             | 在目标对象发生异常后做增强                     |
| 环绕通知 | MethodInterceptor        | 在目标对象的前后做增强                         |



### 七、通配切入点

> 根据表达式通配切入点
>
> **通配表达式顺序：** 返回值类型 全类名.方法名(形参)
>
> **注意：**  可以用`..`来实现通配形参列表，可以使用`*`来通配方法名或返回值类型

```java
<!-- public int com.mylifes1110.service.UserServiceImpl.queryUser(int,String,com.entity.User) -->
<!--匹配参数-->
<aop:pointcut id="myPointCut" expression="execution(* *(com.mylifes1110.bean.User))" />
<!--匹配方法名（无参）-->
<aop:pointcut id="myPointCut" expression="execution(* save())" />
<!--匹配方法名（任意参数）-->
<aop:pointcut id="myPointCut" expression="execution(* save(..))" />
<!--匹配返回值类型-->
<aop:pointcut id="myPointCut" expression="execution(com.mylifes1110.bean.User *(..))" />
<!--匹配类名-->
<aop:pointcut id="myPointCut" expression="execution(* com.mylifes1110.bean.UserServiceImpl.*(..))" />
<!--匹配包名-->
<aop:pointcut id="myPointCut" expression="execution(* com.mylifes1110.bean.*.*(..))" />
<!--匹配包名、以及子包名-->
<aop:pointcut id="myPointCut" expression="execution(* com.mylifes1110..*.*(..))" />
```



### 八、代理模式

#### 8.1 代理模式

> 将核心功能与辅助功能（事务、日志、性能监控代码）分离，达到核心业务功能更纯粹、辅助业务功能可复用。

|                           功能分离                           |
| :----------------------------------------------------------: |
| ![image-20190420002535800](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200719112328.png) |



#### 8.2 代理模式应用场景模拟

> 通过代理类的对象，为原始类的对象（目标类的对象）添加辅助功能，更容易更换代理实现类、利于维护。

**场景模拟：** 我们在租赁房子需要走如下流程：

1. 发布租房信息
2. 带租户看房
3. 签合同
4. 收房租

可如果你是房东，生活中还有其他的琐事，怎么办呢？那你是不是可以把不重要不核心的环节交给中介（代理）去做呢？比如：发布租房信息和带租户看房。这两件事情交给中介去做就好了，我们自己处理自己的事情，而且中间联系好租户我们走比较重要的流程就可以，比如签合同、收房租。



#### 8.3 创建Service接口和实现类

> 创建Service接口和实现类来模拟动态代理的应用场景

```java
package com.mylifes1110.service;

public interface LandlordService {
    void rent();
}

package com.mylifes1110.service.impl;

import com.mylifes1110.service.LandlordService;

public class LandlordServiceImpl implements LandlordService {
    @Override
    public void rent() {
        System.out.println("签合同");
        System.out.println("收款");
    }
}
```



#### 8.4 静态代理

> 如下是静态代理设计模式解决代理问题
>
> - 静态代理流程，创建一个代理类并实现相同接口，创建实现类对象，在代理类中添加辅助功能并调用实现类对象核心方法，使得辅助功能和核心方法一起触发，完成代理
> - 静态代理的问题
>   - 随着辅助功能的数量增加，代理类也会增加，导致代理类数量过多，不利于项目的管理。
>   - 多个代理类的辅助功能代码冗余，修改时，维护性差。

|                           静态代理                           |
| :----------------------------------------------------------: |
| ![image-20190420004330551](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200719112548.png) |

> 创建静态代理类

```java
package com.mylifes1110.advice1;

import com.mylifes1110.service.LandlordService;
import com.mylifes1110.service.impl.LandlordServiceImpl;

/**
 * @ClassName Proxy
 * @Description 静态代理类
 * @Author Ziph
 * @Date 2020/7/19
 * @Since 1.8
 * @Version 1.0
 */

public class Proxy implements LandlordService {
    private LandlordService landlordService = new LandlordServiceImpl();

    @Override
    public void rent() {
        // 代理事件
        System.out.println("发布消息");
        System.out.println("看房子");
        // 核心事件
        landlordService.rent();
    }
}
```

> 静态代理实现

```java
package com.mylifes1110.advice1;

import org.junit.Test;

public class ProxyTest {
    /**
     * @MethodName proxyTest
     * @Param []
     * @Description 静态代理实现
     * @Author Ziph
     * @Date 2020/7/10
     */
    @Test
    public void proxyTest() {
        new Proxy().rent();
    }
    /**
     * 结果：
     * 
     * 发布消息
     * 看房子
     * 签合同
     * 收款
     */
}
```



#### 8.5 JDK和CGLIB的选择

> spring底层，包含了jdk代理和cglib代理两种动态代理生成机制。
>
> 基本规则是：目标业务类如果有接口则用JDK代理，没有接口则用CGLib代理。如果配置true：<aop:config proxy-target-class="true">，则用CGLIB代理

> **JDK动态代理优势（反射实现）：** 
>
> - 最小依赖化关系，减少依赖意味着简化开发和维护，JDK本身的支持，可能比CGLIB更加可靠
> - 平滑进行JDK版本升级，而字节码类库通常需进行更新以保障在新版的Java上能够使用
> - 代码实现简单
>
> **CGLIB动态代理优势（基于ASM开源包，通过字节码实现）：** 
>
> - 有的时候调用目标可能不便而外实现接口，从某种角度看，限定调用者实现接口是侵入性的实践，类似CGLIB动态代理就没有这种限制
> - 只操作我们关心的类，而不必为其他相关增加工作量
> - 高性能
>
> **性能分析补充：** 
>
> - 从性能角度看，记得有人曾经得出结论说JDK Proxy比cglib或者Javassist慢几十倍。坦白说，不去争论具体的benchmark细节，在主流JDK版本中，JDK Proxy在典型场景可以提供对等的性能水平，数量级的差距基本上不是广泛存在的。而且，反射机制性能在现代JDK中，自身已经得到了极大的改进和优化，同时，JDK很多功能也不完全是反射，同样使用了ASM进行字节码操作。
>
> - 性能未必是唯一考量，可靠性、可维护性、编程工作量等往往是更主要的考虑因素，毕竟标准类库和反射编程的门槛要低得多，代码量也是更加可控的，如果我们比 较下不同开源项目在动态代理开发上的投入，也能看到这一点。
>
> **动态代理应用场景：** 
>
> - 动态代理应用非常广泛，虽然最初多是因为RPC等使用进入我们视线，但是动态代理的使用场景远远不仅如此，它完美符合Spring AOP等切面编程。我在后面的专栏还会进一步详 细分析AOP的目的和能力。简单来说它可以看作是对OOP的一个补充，因为OOP对于跨越不同对象或类的分散、纠缠逻辑表现力不够，比如在不同模块的特定阶段做一些事情，类似 日志、用户鉴权、全局性异常处理、性能监控，甚至事务处理等

```java
class DefaultAopProxyFactory{
    // 该方法中明确定义了 JDK代理和CGLib代理的选取规则
    // 基本规则是：目标业务类如果有接口则用JDK代理，没有接口则用CGLib代理
    public AopProxy createAopProxy(){...}
}
```



#### 8.6 JDK动态代理

> JDK动态代理是JDK底层基于接口实现的，也就是说我们必须通过实现JDK动态代理的接口并覆盖方法来完成
>
> JDK动态代理是通过实现InvocationHandler接口，利用反射来创建代理类的一个过程！

```java
package com.mylifes1110.advice2;

import com.mylifes1110.service.LandlordService;
import com.mylifes1110.service.impl.LandlordServiceImpl;
import org.junit.Test;

import java.lang.reflect.InvocationHandler;
import java.lang.reflect.Method;
import java.lang.reflect.Proxy;

public class ProxyTest {
    /**
     * @MethodName proxyTest
     * @Param []
     * @Description JDK动态代理实现
     * @Author Ziph
     * @Date 2020/7/10
     */
    @Test
    public void proxyTest() {
        // 需要使用代理的目标
        LandlordService landlordService = new LandlordServiceImpl();
        // 匿名内部类
        InvocationHandler handler = new InvocationHandler() {
            @Override
            public Object invoke(Object proxy, Method method, Object[] args) throws Throwable {
                // 代理事件
                System.out.println("发布消息");
                System.out.println("看房子");
                return method.invoke(landlordService, args);
            }
        };

        // 动态构建代理类
        LandlordService proxy = (LandlordService) Proxy.newProxyInstance(ProxyTest.class.getClassLoader(),
                landlordService.getClass().getInterfaces(),
                handler);

        proxy.rent();

        /**
         * 结果：
         *
         * 发布消息
         * 看房子
         * 签合同
         * 收款
         */
    }
}
```



#### 8.7 CGLIB动态代理

> CGLIB动态代理是利用了ASM开源包，对代理对象类的class文件进行加载后，通过修改其字节码生成子类来处理的过程！
>
> CGLIB是针对类实现代理，主要是对指定的类生成一个子类，覆盖其中的方法。因为是继承，所以该类或方法最好不要声明成final。

```java
package com.mylifes1110.advice3;

import com.mylifes1110.service.LandlordService;
import com.mylifes1110.service.impl.LandlordServiceImpl;
import org.springframework.cglib.proxy.Enhancer;
import org.springframework.cglib.proxy.InvocationHandler;

import java.lang.reflect.Method;

/**
 * @ClassName ProxyTest
 * @Description CGLIB动态代理实现
 * @Author Ziph
 * @Date 2020/7/19
 * @Since 1.8
 * @Version 1.0
 */

public class ProxyTest {
    public static void main(String[] args) {
        final LandlordService landlordService = new LandlordServiceImpl();
        // 创建字节码增强对象
        Enhancer enhancer = new Enhancer();
        // 设置父类(等价于实现原始类接口)
        enhancer.setSuperclass(landlordService.getClass());
        // 设置回调函数(额外功能代码)
        enhancer.setCallback(new InvocationHandler() {
            @Override
            public Object invoke(Object o, Method method, Object[] objects) throws Throwable {
                // 代理事件
                System.out.println("发布消息");
                System.out.println("看房子");
                Object ret = method.invoke(landlordService, args);
                return ret;
            }
        });
        // 创建动态代理类
        LandlordService proxy = (LandlordService) enhancer.create();
        proxy.rent();
        /**
         * 结果：
         *
         * 发布消息
         * 看房子
         * 签合同
         * 收款
         */
    }
}
```



### 九、后处理器

#### 9.1 后处理器的了解

> * spring中定义了很多后处理器；
> * 每个bean在创建完成之前 ，都会有一个后处理过程，即再加工，对bean做出相关改变和调整；
> * spring-AOP中，就有一个专门的后处理器，负责通过原始业务组件(Service),再加工得到一个代理组件。

|                         常用后处理器                         |
| :----------------------------------------------------------: |
| ![系统后处理器](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200719114504.jpg) |



#### 9.2 定义后处理器

```java
/**
 * 定义bean后处理器
 * 作用：在bean的创建之后，进行再加工
 */
public class MyBeanPostProcessor implements BeanPostProcessor{

    /**
     * 在bean的init方法之前执行
     * @param bean  原始的bean对象
     * @param beanName
     * @return
     * @throws BeansException
     */
    public Object postProcessBeforeInitialization(Object bean, String beanName) throws BeansException {
        System.out.println("后处理器 在init之前执行~~~" + bean.getClass());
        return bean;
    }
	/**
     * 在bean的init方法之后执行
     * @param bean  postProcessBeforeInitialization返回的bean
     * @param beanName
     * @return
     * @throws BeansException
     */
    @Override
    public Object postProcessAfterInitialization(Object bean, String beanName) throws BeansException {
        System.out.println("后处理器 在init之后执行~~~" + bean.getClass());
        return bean;// 此处的返回是 getBean() 最终的返回值
    }
}
```



#### 9.3 配置后处理器

```java
<!-- 配置后处理器,将对工厂中所有的bean声明周期进行干预 -->
<bean class="com.mylifes1110.beanpostprocessor.MyBeanPostProcessor"></bean>
```



#### 9.4 Bean的生命周期

> 创建Bean对象 -> 构造方法 -> Setter方法注入属性、满足依赖 -> 后处理器前置过程 -> init初始化 -> 后处理器后置过程 -> 构建完成 -> 销毁



#### 9.5 动态代理源码(了解)

```java
// AbstractAutoProxyCreator是 AspectJAwareAdvisorAutoProxyCreator的父类
// 该后处理器类中的 wrapIfNecessary方法即动态代理生成过程
AbstractAutoProxyCreator#postProcessAfterInitialization(Object bean, String beanName){
    if (!this.earlyProxyReferences.contains(cacheKey)) {
        // 开始动态定制代理
        return wrapIfNecessary(bean, beanName, cacheKey);
   	}
}
```

