* [SpringDI（依赖注入）](#springdi%E4%BE%9D%E8%B5%96%E6%B3%A8%E5%85%A5)
    * [一、DI概述](#%E4%B8%80di%E6%A6%82%E8%BF%B0)
    * [二、什么是DI](#%E4%BA%8C%E4%BB%80%E4%B9%88%E6%98%AFdi)
      * [2\.1 了解DI的思想](#21-%E4%BA%86%E8%A7%A3di%E7%9A%84%E6%80%9D%E6%83%B3)
      * [2\.2 依赖](#22-%E4%BE%9D%E8%B5%96)
      * [2\.3 注入](#23-%E6%B3%A8%E5%85%A5)
    * [三、注入方式](#%E4%B8%89%E6%B3%A8%E5%85%A5%E6%96%B9%E5%BC%8F)
      * [3\.1 Setter方法注入](#31-setter%E6%96%B9%E6%B3%95%E6%B3%A8%E5%85%A5)
        * [3\.1\.1 定义JavaBean](#311-%E5%AE%9A%E4%B9%89javabean)
        * [3\.1\.2 注入各种数据类型](#312-%E6%B3%A8%E5%85%A5%E5%90%84%E7%A7%8D%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
        * [3\.1\.3 注入自建类型数据](#313-%E6%B3%A8%E5%85%A5%E8%87%AA%E5%BB%BA%E7%B1%BB%E5%9E%8B%E6%95%B0%E6%8D%AE)
      * [3\.2 构造方法注入](#32-%E6%9E%84%E9%80%A0%E6%96%B9%E6%B3%95%E6%B3%A8%E5%85%A5)
        * [3\.2\.1 定义JavaBean](#321-%E5%AE%9A%E4%B9%89javabean)
        * [3\.2\.2 构造方法注入](#322-%E6%9E%84%E9%80%A0%E6%96%B9%E6%B3%95%E6%B3%A8%E5%85%A5)
      * [3\.3 自动注入](#33-%E8%87%AA%E5%8A%A8%E6%B3%A8%E5%85%A5)
        * [3\.3\.1 注入场景](#331-%E6%B3%A8%E5%85%A5%E5%9C%BA%E6%99%AF)
        * [3\.3\.2 自动注入的两种方式](#332-%E8%87%AA%E5%8A%A8%E6%B3%A8%E5%85%A5%E7%9A%84%E4%B8%A4%E7%A7%8D%E6%96%B9%E5%BC%8F)
      * [3\.4 注解自动注入](#34-%E6%B3%A8%E8%A7%A3%E8%87%AA%E5%8A%A8%E6%B3%A8%E5%85%A5)

![LOGO](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200712213350.png)

# SpringDI（依赖注入）

------

### 一、DI概述

> **Dependency Injection即为依赖注入，简称DI** 。
>
> 简单来说，在Spring创建对象的同时，为其属性赋值，称之为依赖注入。
>
> 形象来说，组件之间依赖关系由容器在运行期决定的，即由容器动态的将某个依赖关系注入到组件之中。



### 二、什么是DI

#### 2.1 了解DI的思想

> 简单了解了DI（依赖注入），在看依赖注入这个词，我们也可以将依赖注入以IOC（控制反转）的形式拆分它。

顾名思义，依赖注入是由“依赖”和“注入”两个词汇组合而成，那么我们再一次顺藤摸瓜，分别分析这两个词语！



#### 2.2 依赖

> 依赖一词，可以拆分成很多元素。比如说，达成依赖条件必须是**两个对象** ，**谁依赖谁** ，**某一个对象依赖另一个对象的什么** 。这里我们可以根据这几个条件列举出这几种情况：

1. 关于谁依赖与谁，当然是应用程序依赖于IOC容器。因为应用程序依赖于IOC容器提供的对象所需外部资源，所以就产生了这种依赖关系。（可以理解为入口，虽然不是这么严谨吧！）



#### 2.3 注入

> 注入一次，可以也可以拆分成很多元素。比如说，注入可以分解成**谁注入谁** ，**注入了什么** 。这里我们也可以根据这两个条件来列举出这几种情况：

1. 关于谁注入谁，身为容器的IOC肯定是被注入的对象，也就是说我们将所需要的对象注入到IOC容器中。至于注入了什么，很明显，就是我们项目中所需要的对象、资源、数据等等。简单来说，我们需要外部的资源既可以注入到IOC容器中，并由IOC容器来实现注入对象的控制反转！
2. IOC的是在系统运行中，动态的向某个对象提供它所需要的其他对象。这一点是通过DI（Dependency Injection，依赖注入）来实现的。



### 三、注入方式

#### 3.1 Setter方法注入

> Setter方法注入，它只需要提供对应的Setter方法接口实现注入，由于JavaBean一般都实现了Setter方法，所以Setter方法注入也成为了我们常用的注入方法之一。



##### 3.1.1 定义JavaBean

> 定义一个JavaBean并赋予其Setter方法

```java
package com.mylifes1110.bean;

import java.util.*;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

//Lombok@Data注解提供了Setter方法
@Data
@AllArgsConstructor
@NoArgsConstructor
public class User {
    private Integer             id;
    private String              password;
    private String              sex;
    private Integer             age;
    private Date                bornDate;
    private String[]            hobbys;
    private Set<String>         phones;
    private List<String>        names;
    private Map<String, String> countries;
    private Properties          files;
}
```



##### 3.1.2 注入各种数据类型

> 注意：Spring底层对Date日期类型做了处理，默认处理格式为“yyyy/MM/dd”

```java
<bean id="User" class="com.mylifes1110.bean.User">
    <!--注入基本数据类型-->
    <property name="id" value="1"/>
    <property name="password" value="123456"/>
    <property name="sex" value="male"/>
    <property name="age" value="18"/>
    <!--注入日期类型-->
    <property name="bornDate" value="1999/09/09"/>
    <!--注入数组类型-->
    <property name="hobbys">
        <array>
            <value>Run</value>
            <value>Jump</value>
            <value>Climb</value>
        </array>
    </property>
    <!--注入List集合类型-->
    <property name="names">
        <list>
            <value>Ziph</value>
            <value>Join</value>
            <value>Marry</value>
        </list>
    </property>
    <!--注入Set集合类型-->
    <property name="phones">
        <set>
            <value>110</value>
            <value>119</value>
            <value>120</value>
        </set>
    </property>
    <!--注入Properties类型-->
    <property name="files">
        <props>
            <prop key="first">One</prop>
            <prop key="second">Two</prop>
            <prop key="third">Three</prop>
        </props>
    </property>
    <!--注入Map集合类型-->
    <property name="countries">
        <map>
            <entry key="CHINA" value="中国"/>
            <entry key="USA" value="美国"/>
            <entry key="UK" value="英国"/>
        </map>
    </property>
</bean>
```



##### 3.1.3 注入自建类型数据

> 将Service层需要一个Dao层实现类对象，我们可以使用注入方式来实现对Service层和Dao层的对象关联

```java
<bean id="UserDao" class="com.mylifes1110.dao.impl.UserDaoImpl"/>
<bean id="UserService" class="com.mylifes1110.service.impl.UserServiceImpl">
    <property name="userDao" ref="UserDao"/>
</bean>
```

> 将创建的Bean对象注入到另一个对象中，比如一个JavaBean对象中作为了另一个JavaBean对象的属性

```java
<!--次要bean,被作为属性-->
<bean id="address" class="com.mylifes1110.bean.Address">
    <property name="position" value="上海市" />
    <property name="zipCode" value="100001" />
</bean>

<!--主要bean,操作的主体-->
<bean id="user" class="com.mylifes1110.bean.User">
    <!--address属性引用address对象-->
    <property name="address" ref="address" />
</bean>
```



#### 3.2 构造方法注入

> 创建对象时，Spring工厂会通过构造方法为对象的属性赋值。由于某些框架或者项目中并没有为JavaBean提供Setter方法，我们就可以利用其构造方法来注入。不要和我说，没有提供构造方法哈！（开个玩笑！）



##### 3.2.1 定义JavaBean

> 定义一个JavaBean对象，为其提供构造方法

```java
public class Student {
    private Integer id;
    private String name;
    private String sex;
    private Integer age;
  
    //Constructors
  	public Student(Integer id , String name , String sex , Integer age){
      	this.id = id;
    	this.name = name;
  	    this.sex = sex;
	    this.age = age;
    }
}
```



##### 3.2.2 构造方法注入

```java
 <!--构造注入-->
<bean id="u3" class="com.mylifes1110.bean.Student">
    <!-- 除标签名称有变化,其他均和Set注入一致 -->
    <constructor-arg name="id" value="1234" /> 
    <constructor-arg name="name" value="tom" />
    <constructor-arg name="age" value="20" />
    <constructor-arg name="sex" value="male" />
</bean>
```



#### 3.3 自动注入

> 不用在配置中 指定为哪个属性赋值，及赋什么值。由spring自动根据某个 "原则" ，在工厂中查找一个bean，为属性注入属性值。



##### 3.3.1 注入场景

> 将Dao层实现类对象注入到Service层并调用方法得以测试

```java
package com.mylifes1110.service.impl;

import com.mylifes1110.bean.User;
import com.mylifes1110.dao.UserDao;
import com.mylifes1110.service.UserService;

public class UserServiceImpl implements UserService {
    private UserDao userDao;

    public void setUserDao(UserDao userDao) {
        this.userDao = userDao;
    }

    @Override
    public int insertUser(User user) {
        System.out.println("------insertUser and UserService------");
        return userDao.insertUser(null);
    }
}
```



##### 3.3.2 自动注入的两种方式

> 基于名称自动注入值

```java
<bean id="UserDao" class="com.mylifes1110.dao.impl.UserDaoImpl"/>
	<!--为UserServiceImpl中的属性基于名称自动注入值-->
	<bean id="userService" class="com.mylifes1110.service.impl.userServiceImpl" autowire="byName"/>
</beans>
```

> 基于类型自动注入值，根据实现的接口来判断并自动注入值，如果实现此接口的实现类太多，它会在很多实现此接口的实现类中选择名字相同的实现类进行注入。（现根据判断，如果不成功，则根据名称注入）

```java
<bean id="userDao" class="com.mylifes1110.dao.UserDaoImpl" />
	<!--为UserServiceImpl中的属性基于类型自动注入值-->
	<bean id="userService" class="com.mylifes1110.service.impl.UserServiceImpl" autowire="byType"/>
</beans>
```



#### 3.4 注解自动注入

| 注解名称              | 描述                                               |
| --------------------- | -------------------------------------------------- |
| @Autowired            | 基于类型自动注入                                   |
| @Resource             | 基于名称自动注入                                   |
| @Qualifier("userDAO") | 限定要自动注入的bean的id，一般和@Autowired联用     |
| @Value                | 注入简单类型数据 （jdk8种基本数据类型+String类型） |

> 使用基于类型自动注入，将Dao层注入到Service层

```java
@Service
public class UserServiceImpl implements UserService {   
    @Autowired //注入类型为UserDao的bean
    @Qualifier("userDao") //如果有多个类型为UserDao的bean,可以用此注解从中指定一个
    private UserDao userDao;
}
```

> 使用基于名称自动注入，将Dao层注入到Serivce层

```java
@Service
public class UserServiceImpl implements UserService {   
    @Resource("userDao") //注入id=“userDao”的bean
    private UserDao userDao;
}
```

> 使用注入简单类型数据注解来完成简单注入JavaBean

```java
public class User{
    @Value("1")    //注入数字
    private Integer id;
    @Value("Ziph") //注入String
	private String name;
}
```

