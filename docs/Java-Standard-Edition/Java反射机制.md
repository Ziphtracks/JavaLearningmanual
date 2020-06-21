* [深入理解Java反射机制](#%E6%B7%B1%E5%85%A5%E7%90%86%E8%A7%A3java%E5%8F%8D%E5%B0%84%E6%9C%BA%E5%88%B6)
    * [一、Java反射概述](#%E4%B8%80java%E5%8F%8D%E5%B0%84%E6%A6%82%E8%BF%B0)
    * [二、Java创建对象思想传递](#%E4%BA%8Cjava%E5%88%9B%E5%BB%BA%E5%AF%B9%E8%B1%A1%E6%80%9D%E6%83%B3%E4%BC%A0%E9%80%92)
    * [三、类对象](#%E4%B8%89%E7%B1%BB%E5%AF%B9%E8%B1%A1)
      * [3\.1 类对象和类的对象](#31-%E7%B1%BB%E5%AF%B9%E8%B1%A1%E5%92%8C%E7%B1%BB%E7%9A%84%E5%AF%B9%E8%B1%A1)
      * [3\.2 三种获取类对象的方法](#32-%E4%B8%89%E7%A7%8D%E8%8E%B7%E5%8F%96%E7%B1%BB%E5%AF%B9%E8%B1%A1%E7%9A%84%E6%96%B9%E6%B3%95)
    * [四、Class对象的常用方法](#%E5%9B%9Bclass%E5%AF%B9%E8%B1%A1%E7%9A%84%E5%B8%B8%E7%94%A8%E6%96%B9%E6%B3%95)
      * [4\.1 获取成员变量](#41-%E8%8E%B7%E5%8F%96%E6%88%90%E5%91%98%E5%8F%98%E9%87%8F)
      * [4\.2 获取构造方法](#42-%E8%8E%B7%E5%8F%96%E6%9E%84%E9%80%A0%E6%96%B9%E6%B3%95)
      * [4\.3 获取方法](#43-%E8%8E%B7%E5%8F%96%E6%96%B9%E6%B3%95)
      * [4\.4 获取类名](#44-%E8%8E%B7%E5%8F%96%E7%B1%BB%E5%90%8D)
      * [4\.5 获取接口](#45-%E8%8E%B7%E5%8F%96%E6%8E%A5%E5%8F%A3)
      * [4\.6 获取包名](#46-%E8%8E%B7%E5%8F%96%E5%8C%85%E5%90%8D)
      * [4\.7 获取父类](#47-%E8%8E%B7%E5%8F%96%E7%88%B6%E7%B1%BB)
      * [4\.8 判断注解](#48-%E5%88%A4%E6%96%AD%E6%B3%A8%E8%A7%A3)
    * [五、对象和方法的代工厂](#%E4%BA%94%E5%AF%B9%E8%B1%A1%E5%92%8C%E6%96%B9%E6%B3%95%E7%9A%84%E4%BB%A3%E5%B7%A5%E5%8E%82)
      * [5\.1 创建对象的代工厂](#51-%E5%88%9B%E5%BB%BA%E5%AF%B9%E8%B1%A1%E7%9A%84%E4%BB%A3%E5%B7%A5%E5%8E%82)
      * [5\.2 创建对象并执行方法的代工厂](#52-%E5%88%9B%E5%BB%BA%E5%AF%B9%E8%B1%A1%E5%B9%B6%E6%89%A7%E8%A1%8C%E6%96%B9%E6%B3%95%E7%9A%84%E4%BB%A3%E5%B7%A5%E5%8E%82)

# 深入理解Java反射机制



### 一、Java反射概述

> Java的反射（reflection）机制是指在程序的运行状态中，可以构造任意一个类的对象，可以了解任意一个对象所属的类，可以了解任意一个类的成员变量和方法，可以调用任意一个对象的属性和方法。这种动态获取程序信息以及动态调用对象的功能称为Java语言的反射机制。Java反射机制被称为框架设计的灵魂。



### 二、Java创建对象思想传递

> 首先在Java反射机制的概述部分，多次强调了`任意一个`是为什么呢？
>
> 这里先想想我们的创建对象过程，创建对象过程需要写一个对象实体类，之后去new这个对象实体类，最后编译、运行文件。而这些过程，我们可以定义为三个重要的阶段。
>
> 此三阶段为 `Source源码阶段 -> Class类对象阶段 -> Runtime运行时阶段`

> 这三个阶段是如何变化的呢？很简单。
>
> - 首先，我们去写一个Person类，也就是创建一个Person.java文件。其次再去写一个Test测试类，去new一个Person对象。
>
> - 我们知道，.java文件是需要有一个编译、运行的过程的。所以，我们使用javac命令去对它进行编译操作，这就使得.java文件编译出一个.class字节码文件并存入硬盘中。而这个时期叫做源码阶段。
>
> - 源码阶段过后，我们编译好的.class文件会通过类加载器（ClassLoader）加载到内存中。所以在内存中会描述这个字节码文件为Class类对象。而我们的.class文件中存储的成员变量、构造方法和成员方法等，它们分别有着不同的作用，比如成员变量可以去设置和获取值、构造方法可以去用它创建对象、成员方法可以去运行执行它。而它们会分别装在Filed[]、Constructor[]和Method[]中，那么为什么它们以数组形式存储的呢？那是因为.class文件中写入内存的成员变量、构造方法和成员方法有很多个，所以在内存中的存储方式是数组。
>
> - 类加载过后，就可以通过类对象的这些行为去创建真正的Person对象了。
>
> 这就是一个完整的创建对象的过程。至于上述多次强调`任意一个`是因为Java反射机制可以在程序的运行过程中（Runtime运行时阶段）操作这些对象，比如：操作FIled、Constructor和Method等对象。此时，反射机制的好处还不只这一个，它还有解耦的好处，可以大大降低程序的紧密程度和耦合性来提高程序的可扩展性。

|                                                              |                        Source源码阶段                        |                                                              |
| :----------------------------------------------------------: | :----------------------------------------------------------: | :----------------------------------------------------------: |
| ![image-20200530200512660](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200530201717.png) | ![image-20200530200620787](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200531133820.png) | ![image-20200530195610793](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200530201728.png) |
|                                                              |                     **Class类对象阶段**                      |                                                              |
| ![image-20200530195610793](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200530201740.png) | ![image-20200530200727497](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200531133823.png) | ![image-20200530203126841](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200530203129.png) |
|                                                              |                    **Runtime运行时阶段**                     |                                                              |
| ![image-20200530203126841](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200530203141.png) | ![image-20200530201237748](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200531133827.png) | ![image-20200530201620960](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200530201747.png) |



### 三、类对象

#### 3.1 类对象和类的对象

> 根据上述的创建对象思想，我们可以得出反射机制就是程序运行时使用Class类对象封装的方法操作各个对象。所以在这里我们要介绍两个概念`类对象`和`类的对象`
>
> - 类对象是类加载的产物，封装了一个类的所有信息（类名、父类、接口、属性、方法、构造方法）
> - 类的对象是基于某个类new出来的对象，也称为实例对象

| 类对象中封装的对象 | 描述              |
| ------------------ | ----------------- |
| Filed              | 成员变量（属性）  |
| Method             | 方法              |
| Constructor        | 构造方法          |
| PackageName        | 包名              |
| ClassName          | 类名              |
| SuperClass         | 实体类的父类Class |
| Interface          | 接口              |



#### 3.2 三种获取类对象的方法

| 返回值          | 方法名称                                                     | 描述                                                         |
| --------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| static Class<?> | forName(String className)                                    | 返回与带有给定字符串名的类或接口相关联的 `Class` 对象。      |
| static Class<?> | forName(String name, boolean initialize, ClassLoader loader) | 使用给定的类加载器，返回与带有给定字符串名的类或接口相关联的 `Class` 对象。 |

> - 通过类的对象，获取类对象
>   - `Person person = new Person();  Class clazz = person.getClass();`
>   - 场景：常用于对象的字节码获取方式
> - 通过类名获取类对象
>   - `Class clazz = 类名.class;`
>   - 场景：常用于参数的传递
> - 以静态方法通过全类名获取类对象
>   - `Class clazz = Claa.forName("全类名");`
>   - 场景：常用于读取配置文件，将类名定义在配置文件中。读取文件，加载类对象。

> 以下代码是使用三种方式来获取类对象，然后将三种方式获取的类对象分别比较地址，最后比较完地址后我们发现返回的都是true。这就可以映射出**同一个字节码文件（*.class）在一次程序运行过程中，只会类加载一次，不管使用哪一种方式获取的类对象都是同一个。** 
>
> 最后我又将以静态方法通过全类名的方式获取类对象封装成了方法，这样就可以灵活的使用全类名获取类对象了。

```java
package com.mylifes1110.java.bean;

class Person {
}

public class TestReflect {
    public static void main(String[] args) throws ClassNotFoundException {
        //通过类的对象获取类对象
        Person person = new Person();
        Class<? extends Person> clazz1 = person.getClass();

        //通过类名获取类对象
        Class<Person> clazz2 = Person.class;

        //以静态方法通过全类名获取类对象
        Class<?> clazz3 = Class.forName("com.mylifes1110.java.bean.Person");

        System.out.println(clazz1 == clazz2);   //true
        System.out.println(clazz1 == clazz3);   //true
        System.out.println(clazz2 == clazz3);   //true
    }

    /**
     * @param className 全类名
     * @return 以静态方法通过全类名获取类对象
     */
    public static Class getClassObject(String className) {
        Class clazz = null;
        try {
            clazz = Class.forName(className);
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }
        return clazz;
    }
}
```



### 四、Class对象的常用方法

#### 4.1 获取成员变量

| 返回值  | 方法名称                      | 描述                                                |
| ------- | ----------------------------- | --------------------------------------------------- |
| Field   | getField(String name)         | 获取 public 修饰的指定名称的成员变量。              |
| Field[] | getFields()                   | 获取 public 修饰的所有成员变量。                    |
| Field   | getDeclaredField(String name) | 获取指定名称的成员变量，不受修饰符限制。            |
| Field[] | getDeclaredFields()           | 获取所有成员变量，不受修饰符限制。                  |
|         |                               |                                                     |
| Object  | get(Object obj)               | 通过成员变量获取指定对象的值                        |
| void    | set(Object obj, Object value) | 通过成员变量设置指定对象的成员变量值                |
|         |                               |                                                     |
|         | setAccessible(true);          | 默认为false；true则忽略成员变量访问修饰符的安全检查 |

> 如下代码我写了详细的使用注释和结果注释，都是通过上述方法实现的。
>
> **注意：** 有一个特殊使用就是访问private修饰的成员变量，需要`setAccessible(true);` 忽略成员变量访问修饰符的安全检查处理。如果不做处理的话，就会飘红报错。如下信息：
>
> `Exception in thread "main" java.lang.IllegalAccessException: Class com.mylifes1110.java.bean.TestReflectFiled can not access a member of class com.mylifes1110.java.bean.Person with modifiers "private"`
>
> 该报错信息表示：我们无法访问private修饰的成员变量！

![](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200530224636.png)

```java
package com.mylifes1110.java.bean;

import java.lang.reflect.Field;

class Person {
    private String   name;
    public Integer   age;
    protected Double score;

    @Override
    public String toString() {
        return "Person{" + "name='" + name + '\'' + ", age=" + age + ", score=" + score + '}';
    }
}


public class TestReflectFiled {
    public static void main(String[] args) throws NoSuchFieldException, IllegalAccessException {
        Person person = new Person();
        Class<? extends Person> personClass = person.getClass();

        //获取 public 修饰的所有成员变量
        Field[] fields = personClass.getFields();
        for (Field field : fields) {
            System.out.println(field);      //public java.lang.Integer com.mylifes1110.java.bean.Person.age
        }

        //获取 public 修饰的指定名称的成员变量
        Field age = personClass.getField("age");
        System.out.println(age);            //public java.lang.Integer com.mylifes1110.java.bean.Person.age
        //获取成员变量age的值
        Object ageValue = age.get(person);
        System.out.println(ageValue);       //null
        //设置age的值
        age.set(person, 18);
        System.out.println(person);         //Person{name='null', age=18, score=null}

        //获取所有成员变量，不被修饰符限制
        Field[] declaredFields = personClass.getDeclaredFields();
        for (Field declaredField : declaredFields) {
            System.out.println(declaredField);
        }
		/*
          private java.lang.String com.mylifes1110.java.bean.Person.name
          public java.lang.Integer com.mylifes1110.java.bean.Person.age
          protected java.lang.Double com.mylifes1110.java.bean.Person.score
         */

        //获取指定名称的成员变量，不被修饰符限制
        Field name = personClass.getDeclaredField("name");
        //忽略访问修饰符的安全检查
        name.setAccessible(true);           //暴力反射
        Object nameValue = name.get(person);
        System.out.println(nameValue);      //null
    }
}
```



#### 4.2 获取构造方法

| 返回值           | 方法名称                                           | 描述                                                         |
| ---------------- | -------------------------------------------------- | ------------------------------------------------------------ |
| Constructor\<T>  | getConstructor(Class<?>... parameterTypes)         | 获取 public 修饰的指定参数的构造方法（可以不指定参数，也就是获取无参构造） |
| Constructor<?>[] | getConstructors()                                  | 获取 public 修饰的所有构造方法                               |
| Constructor\<T>  | getDeclaredConstructor(Class<?>... parameterTypes) | 获取指定参数的构造方法，不受修饰符限制。（可以不指定参数，也就是获取无参构造） |
| Constructor<?>[] | getDeclaredConstructors()                          | 获取所有构造方法，不受修饰符限制。                           |
|                  |                                                    |                                                              |
|                  | newInstance()                                      | 通过构造方法创建此 `Class` 对象所表示的类的一个新实例        |
|                  |                                                    |                                                              |
|                  | setAccessible(true);                               | 默认为false；true则忽略构造方法访问修饰符的安全检查          |

> 如下代码我写了详细的使用注释和结果注释，都是通过上述方法实现的。
>
> **注意：** 因为方法中带Declared字段的方法，就是可以获取private修饰的构造方法，如果通过该构造方法创建实例对象，就需要忽略构造方法访问修饰符的安全检查。此操作是与获取成员变量的解决方式相同，需要`setAccessible(true);`。所以，在此我就没有演示！

```java
package com.mylifes1110.java.bean;

import java.lang.reflect.Constructor;
import java.lang.reflect.InvocationTargetException;

class Person {
    private String   name;
    public Integer   age;
    protected Double score;

    public Person() {}

    public Person(String name, Integer age, Double score) {
        this.name  = name;
        this.age   = age;
        this.score = score;
    }

    @Override
    public String toString() {
        return "Person{" + "name='" + name + '\'' + ", age=" + age + ", score=" + score + '}';
    }
}

public class TestReflectConstructor {
    public static void main(String[] args) throws IllegalAccessException, NoSuchMethodException, InvocationTargetException, InstantiationException {
        Person person = new Person();
        Class<? extends Person> personClass = person.getClass();

        //获取 public 修饰的无参构造
        Constructor<? extends Person> constructor = personClass.getConstructor();
        System.out.println(constructor);    //public com.mylifes1110.java.bean.Person()
        //通过无参构造创建实例对象
        Person p1 = constructor.newInstance();
        System.out.println(p1);             //Person{name='null', age=null, score=null}

        Constructor<? extends Person> constructor2 = personClass.getConstructor(String.class, Integer.class, Double.class);
        System.out.println(constructor2);   //public com.mylifes1110.java.bean.Person(java.lang.String,java.lang.Integer,java.lang.Double)
        Person p2 = constructor2.newInstance("Ziph", 18, 100.00);
        System.out.println(p2);             //Person{name='Ziph', age=18, score=100.0}


        //获取 public 修饰的所有构造方法
        Constructor<?>[] constructors = personClass.getConstructors();
        for (Constructor<?> constructor1 : constructors) {
            System.out.println(constructor1);
        }
        /*
          public com.mylifes1110.java.bean.Person()
          public com.mylifes1110.java.bean.Person(java.lang.String,java.lang.Integer,java.lang.Double)
         */
    }
}
```



#### 4.3 获取方法

| 返回值   | 方法名称                                                   | 描述                                             |
| -------- | ---------------------------------------------------------- | ------------------------------------------------ |
| Method   | getMethod(String name, Class<?>... parameterTypes)         | 获取 public 修饰的指定名称的方法                 |
| Method[] | getMethods()                                               | 获取 public 修饰的所有方法                       |
| Method   | getDeclaredMethod(String name, Class<?>... parameterTypes) | 获取指定名称的方法，不受修饰符限制。             |
| Method[] | getDeclaredMethods()                                       | 获取所有方法，不受修饰符限制。                   |
|          |                                                            |                                                  |
| Object   | invoke(Object obj, Object... args)                         | 通过对象和有参数或无参数执行方法并返回其方法对象 |
| String   | getName()                                                  | 通过方法对象获取方法名                           |
|          |                                                            |                                                  |
|          | setAccessible(true);                                       | 默认为false；true则忽略方法访问修饰符的安全检查  |

> 如下代码我写了详细的使用注释和结果注释，都是通过上述方法实现的。
>
> **注意：** 因为方法列表中带Declared字段的方法，就是可以获取private修饰的方法，如果通过该方法获取的方法对象并执行，就需要忽略方法访问修饰符的安全检查。此操作是与获取成员变量的解决方式相同，需要`setAccessible(true);`。所以，在此我也没有演示！

```java
package com.mylifes1110.java.bean;

import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;

class Person {
    private String   name;
    public Integer   age;
    protected Double score;

    public void jump() {
        System.out.println("跳起来。");
    }

    public void run(Integer meters) {
        System.out.println("我今天跑步跑了" + meters + "米。");
    }

    @Override
    public String toString() {
        return "Person{" + "name='" + name + '\'' + ", age=" + age + ", score=" + score + '}';
    }
}


public class TestReflectMethod {
    public static void main(String[] args) throws IllegalAccessException, NoSuchMethodException, InvocationTargetException {
        Person person = new Person();
        Class<? extends Person> personClass = person.getClass();

        //获取 public 修饰的jump无参方法
        Method jump = personClass.getMethod("jump");
        //执行获取到的jump无参方法
        jump.invoke(person);                //跳起来。

        //获取 public 修饰的run有参方法
        Method run = personClass.getMethod("run", Integer.class);
        //执行获取到的run有参方法
        run.invoke(person, 2000);    	    //我今天跑步跑了2000米。

        //获取 public 修饰的所有方法
        Method[] methods = personClass.getMethods();
        for (Method method : methods) {
            System.out.println(method);
			//获取方法名
            System.out.println(method.getName());
        }
        /*
            public void com.mylifes1110.java.bean.Person.run(java.lang.Integer)
            run
            public java.lang.String com.mylifes1110.java.bean.Person.toString()
            toString
            public void com.mylifes1110.java.bean.Person.jump()
            jump
            public final void java.lang.Object.wait() throws java.lang.InterruptedException
            wait
            public final void java.lang.Object.wait(long,int) throws java.lang.InterruptedException
            wait
            public final native void java.lang.Object.wait(long) throws java.lang.InterruptedException
            wait
            public boolean java.lang.Object.equals(java.lang.Object)
            equals
            public native int java.lang.Object.hashCode()
            hashCode
            public final native java.lang.Class java.lang.Object.getClass()
            getClass
            public final native void java.lang.Object.notify()
            notify
            public final native void java.lang.Object.notifyAll()
            notifyAll
         */
    }
}
```



#### 4.4 获取类名

| 返回值 | 方法名称  | 描述                 |
| ------ | --------- | -------------------- |
| String | getName() | 通过类对象获取全类名 |

```java
public class TestReflectClassName {
    public static void main(String[] args) {
        Person person = new Person();
        Class<? extends Person> personClass = person.getClass();

        //获取全类名
        String className = personClass.getName();
        System.out.println(className);      //com.mylifes1110.java.bean.Person
    }
}
```



#### 4.5 获取接口

| 返回值     | 方法名称        | 描述                                   |
| ---------- | --------------- | -------------------------------------- |
| Class<?>[] | getInterfaces() | 确定此对象所表示的类或接口实现的接口。 |
|            |                 |                                        |
| boolean    | isInterface()   | 判断是否是一个接口类型                 |

```java
public class TestReflectInterface {
    public static void main(String[] args) {
        Person person = new Person();
        Class<? extends Person> personClass = person.getClass();

        Class<?>[] interfaces = personClass.getInterfaces();
        for (Class<?> anInterface : interfaces) {
            //获取接口
            System.out.println(anInterface);        		//interface com.mylifes1110.java.bean.A
            //判断是否为接口类型
            System.out.println(anInterface.isInterface());  //true
        }
    }
}
```



#### 4.6 获取包名

| 返回值  | 方法名称     | 描述                         |
| ------- | ------------ | ---------------------------- |
| Package | getPackage() | 获取类所在包名（不含类本身） |

```java
package com.mylifes1110.java.bean;

class Person {
    
}

public class TestReflectPackage {
    public static void main(String[] args) {
        Person person = new Person();
        Class<? extends Person> personClass = person.getClass();

        Package aPackage = personClass.getPackage();
        System.out.println(aPackage);               //package com.mylifes1110.java.bean
    }
}
```



#### 4.7 获取父类

| 返回值           | 方法名称        | 描述                                                         |
| ---------------- | --------------- | ------------------------------------------------------------ |
| Class<? super T> | getSuperclass() | 获取表示此 `Class` 所表示的实体（类、接口、基本类型或 void）的超类的 `Class`。 |

```java
public class TestReflectSuperClass {
    public static void main(String[] args) {
        Person person = new Person();
        Class<? extends Person> personClass = person.getClass();

        Class<?> superclass = personClass.getSuperclass();
        System.out.println(superclass);             //class com.mylifes1110.java.bean.Animal
    }
}

class Animal {

}

class Person extends Animal {
    
}
```



#### 4.8 判断注解

| 返回值  | 方法名称                                                     | 描述                                                         |
| ------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| boolean | isAnnotationPresent(Class<? extends Annotation> annotationClass) | 如果指定类型的注释存在于此元素上，则返回 true，否则返回 false。 |

> **注意：** 在判断注解是否在某个元素上时，如果是自定义注解，必须将注解的生命周期设置在Runtime运行时期`@Retention(RetentionPolicy.RUNTIME)`，如果不设置该注解无效，判断时则返回false。

```java
public class TestReflectAnnotation {
    public static void main(String[] args) {
        Person person = new Person();
        Class<? extends Person> personClass = person.getClass();

		//判断abc注解是否在Person类上
        boolean flag = personClass.isAnnotationPresent(abc.class);
        System.out.println(flag);           //true
    }
}

@abc
class Person {
    
}
```

```java
//自定义注解
package com.mylifes1110.java.bean;

import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;

@Retention(RetentionPolicy.RUNTIME)
public @interface abc {
}
```



### 五、对象和方法的代工厂

#### 5.1 创建对象的代工厂

> 使用Java反射机制实现通过全类名来创建实例对象

```java
/**
 * 创建对象的工厂模式
 */
public class TestFactory {
    public static void main(String[] args) {
        Object o = createObject("com.mylifes1110.java.bean.A");
        System.out.println(o.toString());
    }

    /*创建对象的工厂*/
    public static Object createObject(String className) {
        try {
            Class c = Class.forName(className);
            return c.newInstance();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }
}

class A {

}
```



#### 5.2 创建对象并执行方法的代工厂

> 使用Java反射机制来创建对象并封装一个具有普适性的可以获取方法并执行方法的代工厂

```java
public class TestInvokeAnything {
    public static void main(String[] args) throws NoSuchMethodException, IllegalAccessException, InvocationTargetException {
        Object o = createObject("com.mylifes1110.java.bean.Students");
        
        /*创建Students对象并调用exam三参方法*/
        invokeAnything(o, "exam", new Class[] {int.class, double.class, String.class}, 10, 100, "Ziph");

        /*创建Students对象并调用study无参方法*/
        invokeAnything(o, "study", null, null);
        
        /*创建Students对象并调用study一参方法*/
        invokeAnything(o, "study", new Class[] {int.class}, 100);
    }

    /**
     * 利用反射底层技术执行任何方法的通用编程（可以调用每一个方法）
     * @param obj 对象
     * @param methodName 方法名称
     * @param types 方法的形参列表（注意：数组接收）
     * @param args 需要传入的实参（注意：可变长参数）
     */
    public static void invokeAnything(Object obj, String methodName, Class[] types, Object... args) throws NoSuchMethodException, InvocationTargetException, IllegalAccessException {
        /*类对象*/
        Class c = obj.getClass();
        /*获取方法的对象Method*/
        Method method = c.getDeclaredMethod(methodName, types);
        /*忽略修饰符安全检查*/
        method.setAccessible(true);
        /*执行方法*/
        method.invoke(obj, args);
    }

    /**
     * 创建对象的工厂模式
     * @param className 需要传入的全类名
     * @return
     */
    public static Object createObject(String className) {
        try {
            Class c = Class.forName(className);
            return c.newInstance();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }
}

class Students {
    String name;
    Integer age;
    String sex;
    Double score;

    public Students() {
    }

    public Students(String name, Integer age, String sex, Double score) {
        this.name = name;
        this.age = age;
        this.sex = sex;
        this.score = score;
    }

    public void study() {
        System.out.println("正在学习...");
    }

    public int study(int hours) {
        System.out.println("学习了" + hours + "个小时");
        return 0;
    }

    public void exam(int hours, double score, String name) {
        System.out.println(name + "做了" + hours + "小时的测验，考了" + score + "分");
    }

    public void calc() {
        System.out.println("Ziph正在计算...");
    }
}
```



> 上一章[【Junit单元测试】](https://github.com/Ziphtracks/JavaLearningmanual/blob/master/docs/Java-Standard-Edition/Junit%E5%8D%95%E5%85%83%E6%B5%8B%E8%AF%95.md)

> 下一章[【Javadoc文档生成】](https://github.com/Ziphtracks/JavaLearningmanual/blob/master/docs/Java-Standard-Edition/Javadoc%E6%96%87%E6%A1%A3%E7%94%9F%E6%88%90.md)