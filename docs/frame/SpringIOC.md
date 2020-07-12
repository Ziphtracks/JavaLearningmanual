* [深度理解Spring IOC（控制反转）](#%E6%B7%B1%E5%BA%A6%E7%90%86%E8%A7%A3spring-ioc%E6%8E%A7%E5%88%B6%E5%8F%8D%E8%BD%AC)
    * [一、IOC概述](#%E4%B8%80ioc%E6%A6%82%E8%BF%B0)
    * [二、什么是IOC？](#%E4%BA%8C%E4%BB%80%E4%B9%88%E6%98%AFioc)
      * [2\.1 了解IOC思想](#21-%E4%BA%86%E8%A7%A3ioc%E6%80%9D%E6%83%B3)
      * [2\.2 控制](#22-%E6%8E%A7%E5%88%B6)
      * [2\.3 反转](#23-%E5%8F%8D%E8%BD%AC)
    * [三、IOC的作用](#%E4%B8%89ioc%E7%9A%84%E4%BD%9C%E7%94%A8)
    * [四、IOC解决Dao层和Service层的强耦合](#%E5%9B%9Bioc%E8%A7%A3%E5%86%B3dao%E5%B1%82%E5%92%8Cservice%E5%B1%82%E7%9A%84%E5%BC%BA%E8%80%A6%E5%90%88)
    * [五、使用IOC解决Dao层和Service层的强耦合](#%E4%BA%94%E4%BD%BF%E7%94%A8ioc%E8%A7%A3%E5%86%B3dao%E5%B1%82%E5%92%8Cservice%E5%B1%82%E7%9A%84%E5%BC%BA%E8%80%A6%E5%90%88)

![](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200712160555.png)

# 深度理解Spring IOC（控制反转）



------

### 一、IOC概述

> **Inverse Of Controll即为控制反转，简称IOC** 。
>
> 简单来说，IOC反转了依赖关系的满足方式，由之前的自己创建依赖对象，变为由工厂推送。（变主动为被动，即反转）它解决了具有依赖关系的组件之间的强耦合，使得项目形态更加稳健



### 二、什么是IOC？

#### 2.1 了解IOC思想

> 大概了解了IOC是控制反转，至于现在我们并不清楚它的思想和作用。那么问题来了，IOC（控制反转）是什么呢？

控制反转，简称IOC。顾名思义，它是由“控制”和“反转”两个词语组合而成。那么我们就顺藤摸瓜，分别分析一下这两个词语！



#### 2.2 控制

> 控制一词，我们需要想的就很多。比如说，达成控制的条件必须是**两个对象** ，控制可以分为**谁控制谁** ，**控制你做什么** 。那我们一一列举这几种情况：

1. 在Java中我们以new的方式创建对象，开发者控制控制着开发工具并间接的控制程序创建所需要的依赖对象，对于程序来说是直接的控制创建对象；如果使用IOC呢？那就可以是IOC容器直接的控制创建对象
2. 既然是IOC控制创建对象，那么控制创建对象是怎么控制的呢？使用IOC创建对象是需要标签引入外部对象，这说明了IOC容器控制着创建依赖对象的入口



#### 2.3 反转

> 反转一词，我们想的也很多。比如说，达成反转的条件必须是**两个对象** ，**有反转就有正转** ，然后就是**反转了些什么** 。那么我们也一一列举说明：

1. 在Java中我们是间接的实用程序来创建对象，这可以看作正转。那有了IOC容器，一下子就变了，我们不用自己new对象，而是直接反转为由IOC创建生成依赖对象并存入IOC容器中
2. 使用IOC容器创建对象我们只需要通过配置来告诉它需要创建的对象是什么，并标识一下以后使用什么来获取IOC容器中创建好的对象即可（配置使用IOC的过程），这时候等你想要IOC容器中对象就直接用这个唯一标识来获取就好，而获取的过程肯定是IOC通过这个唯一标识来查找并返回给我们该对象
3. 也许有的小伙伴还是不明白反转。为什么要把IOC容器帮我们创建对象的行为叫反转呢？因为由容器帮我们查找及注入依赖对象，对象只是被动的接受依赖对象。如果不反转呢？开发者就需要创建对象，并找到、获取、使用该对象，此过程中的所有都有开发者来控制的



### 三、IOC的作用

> 通过控制反转，对象在被创建的时候，由一个调控系统内所有对象的外界实体将其所依赖的对象的引用传递给它。也可以说，依赖被注入到对象中。
>
> 比如：Class A中用到了Class B的对象b，一般情况下，需要在A的代码中显式的new一个B的对象。
>
> 在使用了IOC之后呢？A的代码只需要定义一个私有的B对象，不需要直接new来获得这个对象，而是通过相关的容器控制程序来将B对象在外部new出来并注入到A类里的引用中。而具体获取的方法、对象被获取时的状态由配置文件（xml）来指定
>
> 既然由配置文件来指定创建对象关系，就大大降低了各个组件之间的强耦合并有利于维护，是项目变得更加稳健灵活



### 四、IOC解决Dao层和Service层的强耦合

> 在原始的Web开发中，Dao层和Service层是密不可分的。Dao层为数据访问层，只与数据库打交道。Servcie层为业务处理层，只处理实现相应的业务。而我们将Web开发中的Dao层和Service层串在一起，就需要在Service层new一个私有的Dao层实现对象（XxxDaoImpl）。有了IOC的思想，再想想传统的Dao层与Service层的实现就显得很不灵活，一旦修改了Dao层实现类，就必须将项目中的源码都修改掉，显然是一件非常可怕的事情。



### 五、使用IOC解决Dao层和Service层的强耦合

> 既然解决Dao层和Service层的强耦合那必须得这两个组件对吧。

*Dao层* 

```java
// Dao层接口
package com.mylifes1110.dao;

import com.mylifes1110.bean.User;

public interface UserDao {
    int insertUser(User user);
}

// Dao层实现类
package com.mylifes1110.dao.impl;

import com.mylifes1110.bean.User;
import com.mylifes1110.dao.UserDao;

public class UserDaoImpl implements UserDao {

    @Override
    public int insertUser(User user) {
        System.out.println("------insertUser and UserDao------");
        return 0;
    }
}
```

> **注意：** 我们在使用IOC时，必须将Dao层实现类对象注入到IOC容器中，这必有一个注入方式来告知IOC容器创建对象和获取对象，在Service层我们并不需要new实现类对象，而是创建一个Service层的Setter方法来注入UserDaoImpl依赖到UserServcieImpl中（这里可以把它们想为拼装），此时所用的注入方式叫做Setter方法依赖注入，现在不需要纠结，后续我会将依赖注入的所有方式列举并分析依赖注入思想和依赖注入与IOC的关系。

*Service层* 

```java
// Service层接口
package com.mylifes1110.service;

import com.mylifes1110.bean.User;

public interface UserService {
    int insertUser(User user);
}

// Service层实现类
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

*spring-context.xml* 

```java
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:context="http://www.springframework.org/schema/context"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd
       http://www.springframework.org/schema/context http://www.springframework.org/schema/beans/spring-context.xsd">

	<!--id：唯一标识 class：需要被创建的目标对象全限定名-->
	<bean id="UserDao" class="com.mylifes1110.dao.impl.UserDaoImpl"/>
        
	<!--id：唯一标识 class：需要被创建的目标对象全限定名-->
    <bean id="UserService" class="com.mylifes1110.service.impl.UserServiceImpl">
        <!--Setter方法依赖注入 name：Service层定义的userDao属性 ref：Dao层bean标签唯一标识-->
        <property name="userDao" ref="UserDao"/>
    </bean>
        
</beans>
```

*测试类* 

```java
/**
* @MethodName insertUser1
* @Param []
* @Description 测试IOC的使用
* @Author Ziph
* @Date 2020/7/12
*/
@Test
public void insertUser1() {
    ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext("spring-context.xml");
    UserService userService = (UserService) context.getBean("UserService");
    userService.insertUser(null);
    // 打印结果
    ------insertUser and UserService------
    ------insertUser and UserDao------
}
```

