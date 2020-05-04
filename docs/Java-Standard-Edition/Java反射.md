# Java反射



## 一、什么是类对象

 - **类的对象：** 基于某个类new出来的对象，也称为实例对象
 - **类对象：** 类加载的产物，封装了一个类的所有信息（类名、父类、接口、属性、方法、构造方法）
![在这里插入图片描述](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200503213442.png)
***
<a id="2"> </a>
## 二、获取类对象的方法
 - 通过类的对象，获取类对象
	* Person p = new Person();
	* Class c = p.getClass();
 - 通过类名获取类对象
	* Class c = 类名.class;
 - 通过静态方法获取类对象
	* Class c = Claa.forName("包名.类名");

```java
package com.sweetown.reflect.reflect1.reflects;

public class TestGetClassObject {
    public static void main(String[] args) throws ClassNotFoundException {
        /*1.通过类的对象，获取Class对象*/
        Person person = new Person();//类的对象
        Class c = person.getClass();//类对象（Class对象，保存了Person.class这个文件中的所有信息）
        System.out.println(c.getName());//com.sweetown.reflect.reflect1.reflects.Person

        /*2.通过类名获取Class对象*/
        Class c1 = Person.class;
        System.out.println(c1.getName());//com.sweetown.reflect.reflect1.reflects.Person

        /*3.通过Class的静态方法获取Class对象*/
        Class c2 = Class.forName("com.sweetown.reflect.reflect1.reflects.Person");
        System.out.println(c2.getName());//com.sweetown.reflect.reflect1.reflects.Person
    }

    //该方法返回一个类对象（Class对象）
    public static Class getClassObject(String className) {
        Class c = null;
        try {
            c = Class.forName(className);
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }
        return c;
    }
}

class Person {

}
```

***
<a id="3"> </a>
## 三、常见方法

 - public String getName()
 - public Package getPackage()
 - public Class<? super T> getSupercalass()
 - public Class<?>[] getInterfaces()
 - public Field[] getFields()
 - public Method[] getMethods()
 - public Constructor<?>[] getConstructors()
 - public T newInstance()

```java
package com.sweetown.reflect.reflect2.methods;

import java.io.Serializable;
import java.lang.reflect.Constructor;
import java.lang.reflect.Field;
import java.lang.reflect.Method;

public class TestClassMethod {
    public static void main(String[] args) throws ClassNotFoundException, IllegalAccessException, InstantiationException {
        //获取类对象
        Class c = Class.forName("com.sweetown.reflect.reflect2.methods.Student");
//        Class c = Class.forName("com.sweetown.reflect.reflect2.methods.Person");
        System.out.println(c.getName());

        //获取指定类对象的包
        Package pack = c.getPackage();
        System.out.println(pack.getName());//com.sweetown.reflect.reflect2.methods

        //获取父类的Class对象
        Class superClass = c.getSuperclass();
        System.out.println(superClass.getName());//java.lang.Object
        
        //获取接口的Class对象
        Class[] interfaces = c.getInterfaces();
        for (Class inter : interfaces) {
            System.out.println(inter.getName() + " ");//java.io.Serializable
        }

        //获取属性（自身+父类的公开属性）
        Field[] fields = c.getFields();
        for (Field f : fields) {
            System.out.print(f.getName() + " ");//sex money
        }

        //获取Class对象的自身所有属性
        Field[] fields1 = c.getDeclaredFields();
        for (Field f : fields1) {
            System.out.println(f.getName() + " ");//money
        }

        //获取方法（自身+父类的所有公开方法）
        Method[] methods = c.getMethods();
        for (Method m : methods) {
            System.out.println(m.getName());//sleep eat wait wait wait equals toString hashCode getClass notify notifyAll
        }

        //获取普通方法和返回值类型
        Method[] methods1 = c.getDeclaredMethods();
        for (Method m : methods1) {
            System.out.println(m.getName() + ":" + m.getReturnType());//sleep:void eat:void
        }

        //获取构造方法
        Constructor[] constructors = c.getConstructors();
        for (Constructor cs : constructors) {
            System.out.print(cs.getName() + ":");
            Class[] param = cs.getParameterTypes();//获取构造方法的形参
            for (Class p : param) {
                System.out.println(p.getName());//com.sweetown.reflect.reflect2.methods.Student:java.lang.String double
            }
        }

        //获取对象
        Object o = c.newInstance();
        Student student = (Student)o;
        System.out.println(student);//com.sweetown.reflect.reflect2.methods.Student:com.sweetown.reflect.reflect2.methods.Student@7daf6ecc
    }
}

class Person implements Serializable {
    public String sex;
    public double money;
    public void eat() {}
    public void sleep() {}
}

class Student extends Person implements Serializable, Runnable, Comparable {
    public String sex;
    public double money;
    public void eat() {}
    public void sleep() {}

    public Student() {
    }

    public Student(String sex, double money) {
        this.sex = sex;
        this.money = money;
    }

    private int aaa() {
        return 0;
    }

    public int compareTo(Object o) {
        return 0;
    }

    public void run() {

    }
}
```

***
<a id="6"> </a>
## 四、工厂设计模式

### 4.1 工厂模式概念

 - 开发中有一个非常重要的原则“开闭原则”，对拓展开放、对修改关闭
 - 工厂模式主要负责对象创建的问题
 - 可通过反射进行工厂模式的设计，完成动态的对象创建
 - **设计模式：** 设计模式是在大量的实践中总结和理论化之后优选的代码结构，编译风格以及解决问题的思考方法
### 4.2 创建对象的工厂模式
```java
package com.sweetown.reflect.reflect3.factory;

/**
 * 创建对象的工厂模式
 */
public class TestFactory {
    public static void main(String[] args) {
        Object o = createObject("com.sweetown.reflect.reflect3.factory.A");
        System.out.println(o.toString());
    }

    /*工厂--->创建对象的工厂*/
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


### 4.3 利用创建对象工厂加工的对象来实现Method的调用方法

```java
package com.sweetown.reflect.reflect3.factory;

import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;

/**
 *利用创建对象工厂加工的对象来实现Method的调用方法
 * 注意：Method底层结构是数组来实现存储调用的方法的！
 */
public class TestInvokeMethod {
    public static void main(String[] args) throws NoSuchMethodException, InvocationTargetException, IllegalAccessException {
        /*反射--->类的对象*/
        Object o = createObject("com.sweetown.reflect.reflect3.factory.Student");
        /*类对象*/
        Class c = o.getClass();

        /*---------------------------------分割线-------------------------------*/

        /**
         * name->方法名
         * parameterTypes->参数列表类型
         * 调用无参study方法
         */
        Method method = c.getMethod("study", null);//正在学习...

        /*---------------------------------分割线-------------------------------*/

        /**
         * 通过invoke方法，执行某个实例方法
         * 参数：Object->所需对象
         * args->调用的方法所需的实参
         */
        method.invoke(o, null);
        Method method1 = c.getMethod("study", int.class);
        /*接收方法返回值，如果是基本类型，则转换为包装*/
        Object result = method1.invoke(o, 100);
        System.out.println(result);//学习了100个小时 0
        /*简写*/
        System.out.println(c.getMethod("study", int.class).invoke(o, 99));//学习了99个小时 0

        /*---------------------------------分割线-------------------------------*/

        /*调用的exam三参方法*/
        Method method2 = c.getMethod("exam", int.class, double.class, String.class);
        method2.invoke(o, 10, 100, "Ziph");//Ziph做了10小时的测验，考了100.0分

        /*---------------------------------分割线-------------------------------*/

//        Method method3 = c.getMethod("cala", null);//java.lang.NoSuchMethodException（Error！无法获得私有属性！）
        Method method3 = c.getDeclaredMethod("calc", null);
        /*注意：反射是一种Java的底层技术，可以取消语言修饰符的价差，突破封装，但不影响封装思想（切勿混为一坛）*/
        /**
         * 将此对象的 accessible 标志设置为指示的布尔值。
         * 值为 true 则指示反射的对象在使用时应该取消 Java 语言访问检查。
         * 值为 false 则指示反射的对象应该实施 Java 语言访问检查。
         */
        method3.setAccessible(true);
        method3.invoke(o, null);
    }

    /*工厂--->创建对象的工厂*/
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

class Student {
    String name;
    Integer age;
    String sex;
    Double score;

    public Student() {
    }

    public Student(String name, Integer age, String sex, Double score) {
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


### 4.4 创建对象并调用方法工厂模式

```java
package com.sweetown.reflect.reflect3.factory;

import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;

public class TestInvokeAnything {
    public static void main(String[] args) throws NoSuchMethodException, IllegalAccessException, InvocationTargetException {
        Object o = createObject("com.sweetown.reflect.reflect3.factory.Students");
        
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
        /*执行方法*/
        method.invoke(obj, args);
    }

    /**
     * 创建对象的工厂模式
     * @param className 需要传入的类对象名
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

***
<a id="5"> </a>
## 五、单例设计模式
**单例（Singleton）：** 只允许创建一个该类的对象

 - **方式1：** 饿汉式（类加载时创建，天生线程安全）

```java
/**
 * 饿汉式：
 * 天生线程安全（无锁）
 * 类加载时创建（不用的时候，也被迫创建了，占用资源）
 */
class Singleton {
	//1.在类的内部创建一个类的实例
    private static final Singleton instance = new Singleton();
	//2.私有化构造器,使得在类的外部不能够调用此构造器
    private Singleton() {

    }
	//3.私有化此对象,通过公共的方法来调用
	//4.公共的方法,只能通过类来调用,因为设置为static的,同时类的实例也必须为static声明的
    public static Singleton getInstance() {
        return instance;
    }
}
```

***

 - **方式2：** 懒汉式（使用时创建，线程不安全，加同步）

```java
/**
 * 懒汉式：
 * 使用时创建
 * 天生线程不安全（加同步锁）
 * 效率低
 */
class Singleton {
    private static Singleton instance = null;

    private Singleton() {

    }

    public synchronized static Singleton getInstance() {
        if (instance == null) {
            instance = new Singleton();
        }
        return instance;
    }
}
```

***

 - **方式3：** 懒汉式（使用时创建，线程安全）

```java
/**
 * 懒汉式：
 * 使用时创建
 * 天生线程安全
 */
class Singleton {
    private Singleton() {
        
    }
    
    private static class Holder {
        static final Singleton instance = new Singleton();
    }

    public static Singleton getInstance() {
        return Holder.instance;
    }
}
```
***



> 上一篇[【Java网络编程】](https://github.com/Ziphtracks/JavaLearningmanual/blob/master/docs/Java-Standard-Edition/Java网络编程.md)