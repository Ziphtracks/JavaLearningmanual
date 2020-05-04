# Java集合

  * [一、什么是集合](#一什么是集合)
  * [二、Collection体系集合](#二collection体系集合)
  * [三、List接口与实现类](#三list接口与实现类)
     * [3.1 List子接口](#31-list子接口)
     * [3.2 List实现类](#32-list实现类)
     * [3.3 不同实现方法](#33-不同实现方法)
  * [四、Set接口与实现类](#四set接口与实现类)
     * [4.1 Set子接口](#41-set子接口)
     * [4.2 Set实现类](#42-set实现类)
  * [五、Map接口与实现类](#五map接口与实现类)
     * [5.1 Map结构](#51-map结构)
        * [5.2 Map父接口（map意为映射）](#52-map父接口map意为映射)
     * [5.3 Map集合的实现类](#53-map集合的实现类)
  * [六、泛型集合与工具类](#六泛型集合与工具类)
     * [6.1 泛型集合](#61-泛型集合)
     * [6.2 泛型的场景](#62-泛型的场景)
     * [6.3 Collections工具类](#63-collections工具类)
  * [七、foreach循环](#七foreach循环)
  * [八、总结](#八总结)

------

## 一、什么是集合

 - **概念：** 对象的容器，存储对象的对象，可代替数组
 - **特点：** 容器的工具类，定义了对多个对象进行操作的常用方法
 - **位置：** java.util.*;
***
<a id="2"> </a>
## 二、Collection体系集合
![在这里插入图片描述](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200503210108.png)

**Collection父接口**

 - **特点：** 代表一组任意类型的对象，无序、无下标
 - **方法：**
	* boolean add(Object obj) //添加一个对象
	* boolean addAll(Collection c) //将一个集合中的所有对象添加到此集合
	* void clear() //清空此集合中的所有对象
	* boolean contains(Object o) //检查此集合中是否包含o对象
	* boolean equals(Object o) //比较此集合是否与指定对象相等
	* boolean idEmpty() //判断此集合是否为空
	* boolean remove(Object o) //在此集合中移除o对象
	* int size() //返回此集合中的元素个数
	* Object[] toArray() //将此集合转换成数组
***
<a id="3"> </a>
## 三、List接口与实现类
### 3.1 List子接口

 - **特点：** 有序、有下标、元素可以重复
 - **方法：**
	* void add(int index, Object o) //在index位置插入对象o
	* boolean addAll(int index, Collection c) //将一个集合中的元素添加到集合中的index位置
	* Object get(int index) //返回集合中指定位置的元素
	* List subList(int fromIndex, int toIndex) //返回fromIndex和toIndex之间的集合元素



### 3.2 List实现类

 - ArrayList（重点）
	* 数组结构实现，查询快、增删慢
	* JDK1.2版本，运行效率快、线程不安全
 - Vector
	* 数组结构实现，查询快、增删慢
	* JDK1.0版本，运行效率慢、线程安全
 - LinkedList
	* 链表结构实现，增删快，查询慢



### 3.3 不同实现方法

![在这里插入图片描述](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200503210209.png)
***
<a id="4"> </a>
## 四、Set接口与实现类
### 4.1 Set子接口

 - **特点：** 无序、无下标、元素不可重复
 - **方法：** 全部继承自Collection中的方法 



### 4.2 Set实现类

 - HashSet（重点）
	* 基于HashCode实现元素不重复
	* 当存入元素的哈希码相同时，会调用equals进行确认，如结果为true，则拒绝后者存入
 - LinkedHashSet
	* 链表实现的HashSet，按照链表进行存储，即可保留元素的插入顺序
 - TreeSet
	* 基于排列顺序实现元素不重复
	* 实现了SortedSet接口，对集合元素自动排序
	* 元素对象的类型必须实现Comparable接口，指定排序规则
	* 通过CompareTo方法确定是否为重复元素

> 根据底层原理得出：
> **HashSet**
> (1).	HashSet的底层使用的HashMap类，即是将所有需要存入HashSet的值，直接保存在HashMap中
(2).	HashSet如何去掉重复？
(3).	先判断hashCode是否一致，==比较地址，equals比较内容


> 根据底层原理得出：
> **TreeSet**
> (1).	实现了SortedSet接口，要求必须可以对元素排序。
(2).	所有插入元素，必须实现Comparable接口，覆盖compareTo方法。
(3).	根据compareTo方法返回0作为去重的依据，（意味重复）
***
<a id="5"> </a>
## 五、Map接口与实现类
### 5.1 Map结构

### ![在这里插入图片描述](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200503210310.png)



#### 5.2 Map父接口（map意为映射）

 - **特点：** 存储一对数据（Key-Value），无序、无下标，键不可重复，值可重复
 - **方法：**
	* V put(K key, V value) //将对象存入到集合中，关联键值。key重复则覆盖原值
	* Object get(Object key) //根据键获取对应的值
	* Set<K> //返回所有key
	* Collection<V> value() //返回包含所有值的Collection集合
	* Set<Map.Entry<K, V>> //键值匹配的Set集合



### 5.3 Map集合的实现类

 - HashMap（重点）
	* JDK1.2版本，线程不安全，运行效率快；允许用null 作为key或是value
 - Hashtable
	* JDK1.0版本，线程安全，运行效率慢；不允许用null作为key或是value
 - Properties
	* Hashtable的子类，要求key和value都是String。通常用于配置文件的读取
	 * TreeMap
	* 实现了SortedMap接口（是Map子接口），可以对key自动排序

> 根据底层原理得出：
> (1)HashMap算法：拿到任何一个对象好，通过hash(key)做运算，key>>>16（除以16），只可能得到0~15之间的一个数组，作为插入数组的下标
(2)Hashtable：HashMap的线程安全版本
(3)TreeMap：自动对key做排序，根据compareTo的返回值去重
(4)Properties：Hashtable 子类，主要用于存储key和value都是字符串的情况，常在读取配置文件之后，保存文件中的键值对。比如：在反射、JDBC中会用到
***
<a id="6"> </a>
## 六、泛型集合与工具类
> 高级类别的知识，熟练应用，需要时间、经验的积累（常用名称：**E = Element / T = Type / K = Key / V = Value**）



### 6.1 泛型集合

 - **概念：** 参数化类型、类型安全的集合，强制集合元素的类型一致
 - **特点：**
	* 编译时可检查，而非运行时抛出异常
	* 访问时，不必类型转换（拆箱）
	* 不同泛型之间引用不能相互赋值，泛型不存在多态

### 6.2 泛型的场景

 - 定义泛型
	* **实例泛型：**
		+ **类：** 创建对象时，为类所定义的泛型，进行参数化赋值
		+ **接口：** 实现接口时，为接口所定义的泛型，进行参数化赋值
	* **静态泛型：**
		+ 定义在方法的返回值类型前面：< T >、< T extends Object>、<T extends Comparable<T>>、<T extends Comparable<? super T>> 可应用在形参列表、返回值两种场景上，不单单可以规范泛型，还可以语义化返回值。
		+ 定义在方法的形参列表当中：<?>、<? extends Object>、<? super Integer>，不支持使用& 只能应用在形参列表上，规范泛型



### 6.3 Collections工具类

 - **概念：** 集合工具类，定义了除了存取以外的集合常用方法
 - **方法：**
 - public static void reverse(List<?> list) //反转集合中元素的顺序
 - public static void shuffle(List<?> list) //随机重置集合元素的顺序
 - public static void sort(List<T> list) //升序排序（元素类型必须实现了Comparable接口）
	* public static <T extends Comparable<? super T>> void sort(List<T> list) 
	* sort排序，要求：必须实现Comparable，必须可与自身类型比，以及父类类型比
<a id="8"> </a>



## 七、foreach循环

```java
for(数据类型 变量名 : 容器名称){ //可遍历集合或数组（常用在无序集合上）
	//System.out.println();
}
```
***

<a id="7"> </a>
## 八、总结

 - 集合的概念
	* 对象的容器，存储对象的对象，定义了对多个对象进行操作的常用方法
 - List集合
	* 有序、有下标、元素可以重复。（ArrayList、LinkedList、Vector）
 - Set集合
	* 无序、无下标、元素不可重复。（HashSet、LinkedHashSet、TreeSet）
 - Map集合
	* 存储一对数据，无序、无下标，键不可重复，值可重复。（HashMap、HashTable）
 - Collections
	* 集合工具类，定义了除了存取以外的集合常用方法

***



> 上一章[【Java内部类与常用类】](https://github.com/Ziphtracks/JavaLearningmanual/blob/master/docs/Java-Standard-Edition/Java内部类与常用类.md)

> 下一章[【Java异常】](https://github.com/Ziphtracks/JavaLearningmanual/blob/master/docs/Java-Standard-Edition/Java异常.md)