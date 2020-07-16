* [JSON](#json)
    * [一、了解Json](#%E4%B8%80%E4%BA%86%E8%A7%A3json)
      * [3\.1 什么是Json](#31-%E4%BB%80%E4%B9%88%E6%98%AFjson)
    * [二、简单Json语法](#%E4%BA%8C%E7%AE%80%E5%8D%95json%E8%AF%AD%E6%B3%95)
      * [2\.1 语法](#21-%E8%AF%AD%E6%B3%95)
      * [3\.2\.1  Json语法记忆规则](#321--json%E8%AF%AD%E6%B3%95%E8%AE%B0%E5%BF%86%E8%A7%84%E5%88%99)
    * [三、Json字符串的手写转换](#%E4%B8%89json%E5%AD%97%E7%AC%A6%E4%B8%B2%E7%9A%84%E6%89%8B%E5%86%99%E8%BD%AC%E6%8D%A2)
      * [JavaBean类对象](#javabean%E7%B1%BB%E5%AF%B9%E8%B1%A1)
      * [Json简单手写转换](#json%E7%AE%80%E5%8D%95%E6%89%8B%E5%86%99%E8%BD%AC%E6%8D%A2)
    * [四、了解Jackson工具](#%E5%9B%9B%E4%BA%86%E8%A7%A3jackson%E5%B7%A5%E5%85%B7)
      * [4\.1 Jackson简介](#41-jackson%E7%AE%80%E4%BB%8B)
      * [4\.2 jar包介绍](#42-jar%E5%8C%85%E4%BB%8B%E7%BB%8D)
      * [4\.3 应用场景](#43-%E5%BA%94%E7%94%A8%E5%9C%BA%E6%99%AF)
    * [五、Jackson解析](#%E4%BA%94jackson%E8%A7%A3%E6%9E%90)
      * [5\.1 Java对象转换json字符串](#51-java%E5%AF%B9%E8%B1%A1%E8%BD%AC%E6%8D%A2json%E5%AD%97%E7%AC%A6%E4%B8%B2)
      * [5\.2 json字符串转换Java对象](#52-json%E5%AD%97%E7%AC%A6%E4%B8%B2%E8%BD%AC%E6%8D%A2java%E5%AF%B9%E8%B1%A1)
    * [六、FastJson解析](#%E5%85%ADfastjson%E8%A7%A3%E6%9E%90)

# JSON

------

### 一、了解Json

#### 3.1 什么是Json

> `JSON`(JavaScript Object Notation, JS 对象简谱) 是一种轻量级的数据交换格式。它基于 ECMAScript (欧洲计算机协会制定的js规范)的一个子集，采用完全独立于编程语言的文本格式来存储和表示数据。简洁和清晰的层次结构使得 JSON 成为理想的数据交换语言。 易于人阅读和编写，同时也易于机器解析和生成，并有效地提升网络传输效率。



> 简单来说，`json`字符串指的就是`json`本身，由于`JavaScript`是弱类型语言，所以没有办法直接传递对象或是数组，所以提出了`json`格式的字符串，用于数据传递；
>
> `ajax`中，我们自己拼接的是一个JSON对象，因为它是无数据类型的，所以`JS`根据其格式默认其是对象，要是往后台发，要先把它转换成`JSON字符`。
> 从`ajax`的服务器 发过来的，一定是字符串，你想要把它解析，很简单，把它先变成JSON对象才行。
>
> 在数据传输过程中，`json`是以文本，即字符串的形式传递的，而`JS`操作的是`JSON对象`，所以`JSON对象`和`JSON字符串`之间的相互转换是关键。



### 二、简单Json语法

#### 2.1 语法

> - 一个数据的表示
>   - {"键1":值1,"键2":值2}
> - 一组数据的表示
>   - [{"键1":值1,"键2":值2},{"键1":值1,"键2":值2}]

> - JSON 对象使用在大括号 {} 中书写。
> - 对象可以包含多个 **key/value（键/值）**对。
> - key 必须是字符串，value 可以是合法的 JSON 数据类型（字符串, 数字, 对象, 数组, 布尔值或 null）。
> - key 和 value 中使用冒号 : 分割。
> - 每个 key/value 对使用逗号 , 分割。

| 语法 | 描述                                       |
| ---- | ------------------------------------------ |
| [ ]  | 表示数组                                   |
| { }  | 表示对象                                   |
| " "  | 表示是属性名或字符串类型的值               |
| :    | 表示属性和值之间的分隔符                   |
| ,    | 表示多个属性的间隔符或者是多个元素的间隔符 |



#### 3.2.1  Json语法记忆规则

> 1. 数据在键值对里面
> 2. 数据之间由逗号分隔
> 3. 大括号保存对象
> 4. 中括号保存数组

| Json值 | 描述          |
| ------ | ------------- |
| 数字   | 整数或浮点数  |
| 字符串 | 在双引号中    |
| 逻辑值 | true 或 false |
| 数组   | 在中括号中    |
| 对象   | 在大括号中    |
| null   |               |

```javascript
<script type="text/javascript">
    //对象表示
    var p = new Object();
    p.name = "haha";
    p.age = 20;
    p.address = "beijing";
    console.log(p.name + "..." + p.age + "...." + p.address);

    //json表示
    var p1 = {"name": "李四", "age": 30, "address": "上海"};
    console.log(p1.name + "..." + p1.age + "...." + p1.address);

    var json = '{"name":"李四","age":30,"address":"杭州"}';//json字符串
    var p2 = JSON.parse(json);
    console.log(p2.name + "..." + p2.age + "...." + p2.address);

    //要实现从对象转换为 JSON 字符串，使用 JSON.stringify() 方法：
    //var json = JSON.stringify({a: 'Hello', b: 'World'}); //结果是 '{"a": "Hello", "b": "World"}'
    //要实现从 JSON 转换为对象，使用 JSON.parse() 方法：
    //var obj = JSON.parse('{"a": "Hello", "b": "World"}'); //结果是 {a: 'Hello', b: 'World'}

    //表示数组
    var arr = ["北京", "上海", "南京"];

	//表示json对象数组
    var arr2 = [{name: "xxx", age: 20}, {name: "yyy", age: 22}, {name: "zzz", age: 30}];
</script>
```



### 三、Json字符串的手写转换

###### JavaBean类对象

```java
package com.mylifes1110.java.demo;

/**
 * 省份
 */
public class Province {
    private Integer pId;
    private String  pName;

    public Province() {}

    public Province(Integer pId, String pName) {
        this.pId   = pId;
        this.pName = pName;
    }

    public Integer getpId() {
        return pId;
    }

    public String getpName() {
        return pName;
    }

    public void setpId(Integer pId) {
        this.pId = pId;
    }

    public void setpName(String pName) {
        this.pName = pName;
    }

    @Override
    public String toString() {
        return "Province{" + "pId=" + pId + ", pName='" + pName + '\'' + '}';
    }
}
```

###### Json简单手写转换

```java
package com.mylifes1110.java.demo;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * 此案例不需要启动，只是演示Json字符串的转换过程（启动无效）
 */
public class Demo {
    public static void main(String[] args) {
        // 单一对象
        Province p1 = new Province(1, "河北省");
        Province p2 = new Province(2, "北京市");

        // p1 -> json字符串
        // pId=1、pName="河北省"
        String jsonStr1 = "{'pId':1,'pName':'河北省'}";
        String jsonStr2 = "{'pId':2,'pName':'北京市'}";

        // 一组对象 (List集合、Map集合)
        // List集合
        // Province
        List<Province> provinceList = new ArrayList<>();
        provinceList.add(p1);
        provinceList.add(p2);

        // provinceList -> json字符串
        String jsonStr3 = "[{'pId':1,'pName':'河北省'},{'pId':2,'pName':'北京市'}]";

        // Map集合
        // entry : 键值对对象
        Map<String, Province> map = new HashMap<>();
        map.put("p1", p1);
        map.put("p2", p2);
							
        // map -> json字符串
        String jsonStr4 = "{'p1':{'pId':1,'pName':'河北省'},'p2':{'pId':2,'pName':'北京市'}}";
    }
}
```



### 四、了解Jackson工具

#### 4.1 Jackson简介

> Jackson 是一个能够将java对象序列化为JSON字符串，也能够将JSON字符串反序列化为 java对象的框架。



#### 4.2 jar包介绍

> - jackson-annotations-2.9.8.jar
> - jackson-core-2.9.8.jar
> - jackson-databind-2.9.8.jar
>
> **注意：** 2.9.8版本是使用认数最多的版本！



#### 4.3 应用场景

> 1. json字符串转换Java对象、List集合、Map集合
> 2. Java对象、List集合对象、Map集合对象转换json字符串



### 五、Jackson解析

| 方法/注解                                                 | 描述                                                         |
| --------------------------------------------------------- | ------------------------------------------------------------ |
| @JsonProperty注解                                         | 指定一个属性用于JSON映射，默认情况下映射的JSON属性与注解的属性名称相同，不过可以使用该注解的value值修改JSON属性名 |
| @JsonIgnore注解                                           | 用于排除某个属性，这样该属性就不会被Jackson序列化和反序列化。 |
| mapper.enable(SerializationFeature.INDENT_OUTPUT);        | 美化JSON字符串格式化输出                                     |
| mapper.disable(SerializationFeature.FAIL_ON_EMPTY_BEANS); | 允许序列化空的POJO类（否则会抛出异常）                       |

> 注意：Jackson解析json字符串内部必须是双引号

#### 5.1 Java对象转换json字符串

```java
package com.mylifes1110.java.demo;

import com.fasterxml.jackson.databind.ObjectMapper;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class JacksonDemo {
    public static void main(String[] args) throws IOException {
        Province p1 = new Province(1, "河北省");
        Province p2 = new Province(2, "北京市");

        /**
         * Java对象转换json字符串
         */
        ObjectMapper objectMapper = new ObjectMapper();
        String jsonStr = objectMapper.writeValueAsString(p1);
        System.out.println(jsonStr);        //{"pId":1,"pName":"河北省"}

        List<Province> list = new ArrayList<>();
        list.add(p1);
        list.add(p2);
        String jsonList = objectMapper.writeValueAsString(list);
        System.out.println(jsonList);       //[{"pId":1,"pName":"河北省"},{"pId":2,"pName":"北京市"}]

        Map<String, Province> map = new HashMap<>();
        map.put("p1", p1);
        map.put("p2", p2);
        String jsonMap = objectMapper.writeValueAsString(map);
        System.out.println(jsonMap);        //{"p1":{"pId":1,"pName":"河北省"},"p2":{"pId":2,"pName":"北京市"}}
    }
}
```



#### 5.2 json字符串转换Java对象

```java
package com.mylifes1110.java.demo;

import com.fasterxml.jackson.databind.ObjectMapper;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class JacksonDemo {
    public static void main(String[] args) throws IOException {
        Province p1 = new Province(1, "河北省");
        Province p2 = new Province(2, "北京市");

        /**
         * Java对象转换json字符串
         */
        ObjectMapper objectMapper = new ObjectMapper();
        String jsonStr = objectMapper.writeValueAsString(p1);
        System.out.println(jsonStr);        //{"pId":1,"pName":"河北省"}

        List<Province> list = new ArrayList<>();
        list.add(p1);
        list.add(p2);
        String jsonList = objectMapper.writeValueAsString(list);
        System.out.println(jsonList);       //[{"pId":1,"pName":"河北省"},{"pId":2,"pName":"北京市"}]

        Map<String, Province> map = new HashMap<>();
        map.put("p1", p1);
        map.put("p2", p2);
        String jsonMap = objectMapper.writeValueAsString(map);
        System.out.println(jsonMap);        //{"p1":{"pId":1,"pName":"河北省"},"p2":{"pId":2,"pName":"北京市"}}

        /**
         * json字符串转换Java对象
         */
        Province provinceP1 = objectMapper.readValue(jsonStr,Province.class);
        System.out.println(provinceP1);     //Province{pId=1, pName='河北省'}

        List provinceList = objectMapper.readValue(jsonList, List.class);
        System.out.println(provinceList);   //[{pId=1, pName=河北省}, {pId=2, pName=北京市}]

        Map provinceMap = objectMapper.readValue(jsonMap, Map.class);
        System.out.println(provinceMap);    //{p1={pId=1, pName=河北省}, p2={pId=2, pName=北京市}}
    }
}
```



### 六、FastJson解析

> 所需jar包：fastjson-1.2.62.jar

| 方法/注解                                        | 描述                                         |
| ------------------------------------------------ | -------------------------------------------- |
| @JSONField(serialize=false)注解                  | 控制不序列化某些属性，默认是true             |
| SerializerFeature.PrettyFormat                   | 控制输出                                     |
| SerializerFeature.WriteMapNullValue              | Java对象中的null也生成JSON字符串，null也输出 |
| SerializerFeature.WriteNullStringAsEmpty         | null输出为空字符串，null输出为 ""            |
| SerializerFeature.DisableCircularReferenceDetect | 循环引用检测                                 |



```java
public class FASTJson {

    //解析
    @Test
    public void test1() {
        // 对象嵌套数组嵌套对象
        String json1 = "{'id':1,'name':'Java','stus':[{'id':101,'name':'王五','age':16}]}";
        // 数组
        String json2 = "['北京','天津','杭州']";
        //1、
        //静态方法转成对象
        Grade grade=JSON.parseObject(json1, Grade.class);
        System.out.println(grade);
        //转成数组
        List<String> list=JSON.parseArray(json2, String.class);
        System.out.println(list);
    }
    //生成
    @Test
    public void test2(){
        ArrayList<Student> list=new ArrayList<>();
        for(int i=1;i<3;i++){
            list.add(new Student(101 + i, "李四", 20 + i));
        }
        Grade grade=new Grade(100001,"张三", list);
        String json=JSON.toJSONString(grade);
        System.out.println(json);
    }
}
```

