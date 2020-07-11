* [一、ORM概述](#%E4%B8%80orm%E6%A6%82%E8%BF%B0)
* [二、ORM映射](#%E4%BA%8Corm%E6%98%A0%E5%B0%84)
  * [2\.1 MyBatis自动ORM失效](#21-mybatis%E8%87%AA%E5%8A%A8orm%E5%A4%B1%E6%95%88)
  * [2\.2 解决方式一：列的别名](#22-%E8%A7%A3%E5%86%B3%E6%96%B9%E5%BC%8F%E4%B8%80%E5%88%97%E7%9A%84%E5%88%AB%E5%90%8D)
  * [2\.3 解决方式二：结果映射](#23-%E8%A7%A3%E5%86%B3%E6%96%B9%E5%BC%8F%E4%BA%8C%E7%BB%93%E6%9E%9C%E6%98%A0%E5%B0%84)
* [三、MyBatis处理关联关系](#%E4%B8%89mybatis%E5%A4%84%E7%90%86%E5%85%B3%E8%81%94%E5%85%B3%E7%B3%BB)
  * [3\.1 映射关系](#31-%E6%98%A0%E5%B0%84%E5%85%B3%E7%B3%BB)
  * [3\.2 映射表分析](#32-%E6%98%A0%E5%B0%84%E8%A1%A8%E5%88%86%E6%9E%90)
  * [3\.3 映射关系应用](#33-%E6%98%A0%E5%B0%84%E5%85%B3%E7%B3%BB%E5%BA%94%E7%94%A8)
    * [3\.3\.1 标签说明](#331-%E6%A0%87%E7%AD%BE%E8%AF%B4%E6%98%8E)
    * [3\.3\.2 一对一关系应用](#332-%E4%B8%80%E5%AF%B9%E4%B8%80%E5%85%B3%E7%B3%BB%E5%BA%94%E7%94%A8)
    * [3\.3\.3 一对多关系应用](#333-%E4%B8%80%E5%AF%B9%E5%A4%9A%E5%85%B3%E7%B3%BB%E5%BA%94%E7%94%A8)
    * [3\.3\.4 多对多关系应用](#334-%E5%A4%9A%E5%AF%B9%E5%A4%9A%E5%85%B3%E7%B3%BB%E5%BA%94%E7%94%A8)
* [四、动态SQL](#%E5%9B%9B%E5%8A%A8%E6%80%81sql)
  * [4\.1 动态SQL概述](#41-%E5%8A%A8%E6%80%81sql%E6%A6%82%E8%BF%B0)
  * [4\.2 sql标签](#42-sql%E6%A0%87%E7%AD%BE)
  * [4\.3 if标签](#43-if%E6%A0%87%E7%AD%BE)
  * [4\.4 where标签](#44-where%E6%A0%87%E7%AD%BE)
  * [4\.5 set标签](#45-set%E6%A0%87%E7%AD%BE)
  * [4\.6 trim标签](#46-trim%E6%A0%87%E7%AD%BE)
  * [4\.7 foreach标签](#47-foreach%E6%A0%87%E7%AD%BE)
* [五、缓存](#%E4%BA%94%E7%BC%93%E5%AD%98)
  * [5\.1 缓存的重要性](#51-%E7%BC%93%E5%AD%98%E7%9A%84%E9%87%8D%E8%A6%81%E6%80%A7)
  * [5\.2 一级缓存](#52-%E4%B8%80%E7%BA%A7%E7%BC%93%E5%AD%98)
  * [5\.3 二级缓存](#53-%E4%BA%8C%E7%BA%A7%E7%BC%93%E5%AD%98)
  * [5\.4 开启全局缓存](#54-%E5%BC%80%E5%90%AF%E5%85%A8%E5%B1%80%E7%BC%93%E5%AD%98)
  * [5\.5 指定Mapper缓存](#55-%E6%8C%87%E5%AE%9Amapper%E7%BC%93%E5%AD%98)
  * [5\.6 缓存清空并重新缓存](#56-%E7%BC%93%E5%AD%98%E6%B8%85%E7%A9%BA%E5%B9%B6%E9%87%8D%E6%96%B0%E7%BC%93%E5%AD%98)
* [六、Durid连接池](#%E5%85%ADdurid%E8%BF%9E%E6%8E%A5%E6%B1%A0)
  * [6\.1 Durid连接池概述](#61-durid%E8%BF%9E%E6%8E%A5%E6%B1%A0%E6%A6%82%E8%BF%B0)
  * [6\.2 不同连接池对比](#62-%E4%B8%8D%E5%90%8C%E8%BF%9E%E6%8E%A5%E6%B1%A0%E5%AF%B9%E6%AF%94)
    * [6\.2\.1 测试环境](#621-%E6%B5%8B%E8%AF%95%E7%8E%AF%E5%A2%83)
    * [6\.2\.2 基准测试结果对比](#622-%E5%9F%BA%E5%87%86%E6%B5%8B%E8%AF%95%E7%BB%93%E6%9E%9C%E5%AF%B9%E6%AF%94)
    * [6\.2\.3 测试结论](#623-%E6%B5%8B%E8%AF%95%E7%BB%93%E8%AE%BA)
  * [6\.3 Durid连接的开发步骤](#63-durid%E8%BF%9E%E6%8E%A5%E7%9A%84%E5%BC%80%E5%8F%91%E6%AD%A5%E9%AA%A4)
    * [6\.3\.1 引入依赖](#631-%E5%BC%95%E5%85%A5%E4%BE%9D%E8%B5%96)
    * [6\.3\.2 替换MyBatis中的默认数据源](#632-%E6%9B%BF%E6%8D%A2mybatis%E4%B8%AD%E7%9A%84%E9%BB%98%E8%AE%A4%E6%95%B0%E6%8D%AE%E6%BA%90)
    * [6\.3\.3 配置mybatis\-config\.xml](#633-%E9%85%8D%E7%BD%AEmybatis-configxml)
* [七、分页插件（PageHelper）](#%E4%B8%83%E5%88%86%E9%A1%B5%E6%8F%92%E4%BB%B6pagehelper)
  * [7\.1 PageHelper概述](#71-pagehelper%E6%A6%82%E8%BF%B0)
  * [7\.2 官网](#72-%E5%AE%98%E7%BD%91)
  * [7\.3 PageHelper开发步骤](#73-pagehelper%E5%BC%80%E5%8F%91%E6%AD%A5%E9%AA%A4)
    * [7\.3\.1 引入依赖](#731-%E5%BC%95%E5%85%A5%E4%BE%9D%E8%B5%96)
    * [7\.3\.2 配置mybatis\-config\.xml](#732-%E9%85%8D%E7%BD%AEmybatis-configxml)
  * [7\.4 PageInfo对象](#74-pageinfo%E5%AF%B9%E8%B1%A1)
  * [7\.5 注意事项](#75-%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A1%B9)
  * [7\.6 分页查询](#76-%E5%88%86%E9%A1%B5%E6%9F%A5%E8%AF%A2)
    * [7\.6\.1 创建表](#761-%E5%88%9B%E5%BB%BA%E8%A1%A8)
    * [7\.6\.2 实体类](#762-%E5%AE%9E%E4%BD%93%E7%B1%BB)
    * [7\.6\.3 Dao层](#763-dao%E5%B1%82)
    * [7\.6\.4 datasource](#764-datasource)
    * [7\.6\.5 Service层](#765-service%E5%B1%82)
    * [7\.6\.6 工具类](#766-%E5%B7%A5%E5%85%B7%E7%B1%BB)
    * [7\.6\.7 controller](#767-controller)
    * [7\.6\.8 Mapper\.xml](#768-mapperxml)
    * [7\.6\.9 index\.jsp](#769-indexjsp)
    * [7\.6\.10 pom\.xml依赖](#7610-pomxml%E4%BE%9D%E8%B5%96)
    * [7\.6\.11 各种配置文件](#7611-%E5%90%84%E7%A7%8D%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6)
* [八、MyBatis补充](#%E5%85%ABmybatis%E8%A1%A5%E5%85%85)
  * [8\.1 MyBatis注解开发](#81-mybatis%E6%B3%A8%E8%A7%A3%E5%BC%80%E5%8F%91)
    * [8\.1\.1 查询](#811-%E6%9F%A5%E8%AF%A2)
    * [8\.1\.2 删除](#812-%E5%88%A0%E9%99%A4)
    * [8\.1\.3 修改](#813-%E4%BF%AE%E6%94%B9)
    * [8\.1\.4 插入](#814-%E6%8F%92%E5%85%A5)
  * [8\.2 $符号的应用场景](#82-%E7%AC%A6%E5%8F%B7%E7%9A%84%E5%BA%94%E7%94%A8%E5%9C%BA%E6%99%AF)
    * [8\.2\.1 $符号参数绑定](#821-%E7%AC%A6%E5%8F%B7%E5%8F%82%E6%95%B0%E7%BB%91%E5%AE%9A)
    * [8\.2\.2 $符号注入攻击](#822-%E7%AC%A6%E5%8F%B7%E6%B3%A8%E5%85%A5%E6%94%BB%E5%87%BB)
    * [8\.2\.3 避免使用$符号注入攻击](#823-%E9%81%BF%E5%85%8D%E4%BD%BF%E7%94%A8%E7%AC%A6%E5%8F%B7%E6%B3%A8%E5%85%A5%E6%94%BB%E5%87%BB)
  * [9\.3 MyBatis处理关联关系\-嵌套查询（了解）](#93-mybatis%E5%A4%84%E7%90%86%E5%85%B3%E8%81%94%E5%85%B3%E7%B3%BB-%E5%B5%8C%E5%A5%97%E6%9F%A5%E8%AF%A2%E4%BA%86%E8%A7%A3)
    * [9\.3\.1 主表查询](#931-%E4%B8%BB%E8%A1%A8%E6%9F%A5%E8%AF%A2)
    * [9\.3\.2 级联调用](#932-%E7%BA%A7%E8%81%94%E8%B0%83%E7%94%A8)
    * [9\.3\.3 延迟加载](#933-%E5%BB%B6%E8%BF%9F%E5%8A%A0%E8%BD%BD)
    * [mybatis\-config\.xml中开启延迟加载](#mybatis-configxml%E4%B8%AD%E5%BC%80%E5%90%AF%E5%BB%B6%E8%BF%9F%E5%8A%A0%E8%BD%BD)

![MyBatis](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200711094817.png)

### 一、ORM概述

> 对象关系映射（Object Relational Mapping，简称ORM）是通过使用描述对象和数据库之间映射的元数据，将面向对象语言程序中的对象自动持久化到关系数据库中。本质上就是将数据从一种形式转换到另外一种形式。

![ORM](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200711182706.jpg)



### 二、ORM映射

#### 2.1 MyBatis自动ORM失效

> MyBatis只能自动维护库表“列名”与“属性名”相同时的一一对应关系，二者不同时，无法自动ORM。

|                         自动ORM失效                          |
| :----------------------------------------------------------: |
| ![007](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200711182948.png) |



#### 2.2 解决方式一：列的别名

> 在SQL中使用 as 为查询字段添加列别名，以匹配属性名。

```java
<mapper namespace="com.mylifes1110.dao.ManagerDao">
    <select id="selectManagerByIdAndPwd" resultType="com.mylifes1110.bean.Manager">
        SELECT mgr_id AS id , mgr_name AS username , mgr_pwd AS password
        FROM t_managers
        WHERE mgr_id = #{id} AND mgr_pwd = #{pwd}
    </select>
</mapper>
```



#### 2.3 解决方式二：结果映射

> 使用\<resultMap id="别名" type="实体类对象名" >标签来映射，匹配列名与属性名。
>
> **注意：** property设置属性，column设置别名

```java
<mapper namespace="com.mylifes1110.dao.ManagerDao">

    <!--定义resultMap标签-->
    <resultMap id="managerResultMap" type="com.mylifes1110.bean.Manager">
      	<!--关联主键与列名-->
        <id property="id" column="mgr_id" />
      
      	<!--关联属性与列名-->
        <result property="username" column="mgr_name" />
        <result property="password" column="mgr_pwd" />
    </resultMap>
  
     <!--使用resultMap作为ORM映射依据-->
    <select id="selectAllManagers" resultMap="managerResultMap">
        SELECT mgr_id , mgr_name , mgr_pwd
        FROM t_managers
    </select>
</mapper>
```



### 三、MyBatis处理关联关系

#### 3.1 映射关系

> **实体间的关系：** 关联关系（拥有 has、属于 belong）
>
>  * **OneToOne：** 一对一关系（Passenger--- Passport）
>
> * **OneToMany：** 一对多关系（Employee --- Department）
>
> * **ManyToMany：** 多对多关系（Student --- Subject）



#### 3.2 映射表分析

|                      Table建立外键关系                       |
| :----------------------------------------------------------: |
| ![008](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200711184731.png) |

|                      Entity添加关系属性                      |
| :----------------------------------------------------------: |
| ![009_2](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200711184734.jpg) |

|                   Mapper中将属性与列名对应                   |
| :----------------------------------------------------------: |
| ![010](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200711184737.png) |



#### 3.3 映射关系应用

##### 3.3.1 标签说明

> - **结果映射标签：** \<resultMap id="结果映射别名" type="实体类对象">
>   - 双方均可建立关系属性，建立关系属性后，对应的Mapper文件中需使用\<ResultMap >完成多表映射
> - **id映射标签：** \<id property="ID名" column="ID别名" />
> - **属性映射标签：** \<result property="属性名" column="别名" />
>
> - **映射单一对象标签：** \<association property="对象属性名" javaType="实体类包含的单一对象">
>   - 持有对象关系属性使用\<association>标签来完成映射，此标签是写在\<resultMap>标签内
>
> - **映射集合对象标签：** \<collection property="集合属性名" ofType="集合泛型内单一对象">
>   - 持有集合关系属性，使用\<collection>标签来完成映射，此标签是写在\<resultMap>标签内
>
> - **查询标签：** \<select id="接口方法名" resultMap="结果映射别名">
>   - 查询标签中resultMap属性内填入的是结果映射别名



##### 3.3.2 一对一关系应用

> 在一对一关系中，如果实体类中包含需要查询的对象，则需要在\<resultMap>标签内添加\<association>标签来映射实体类中的单一对象

*创建表* 

```sql
// 旅客表
create table passenger
(
    id       int auto_increment
        primary key,
    name     varchar(50) null,
    sex      tinyint     null,
    birthday date        null
);

// 护照表
create table passport
(
    id           int auto_increment
        primary key,
    nationlity   varchar(100) null,
    expire       date         null,
    passenger_id int          null
);
```

*创建实体类对象* 

```java
package com.mylifes1110.bean;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Passport {
    private int id;
    private String nationlity;
    private Date expire;
    private int passengerId;
    private Passenger passenger;

    public Passport(String nationlity, Date expire, int passengerId) {
        this.nationlity = nationlity;
        this.expire = expire;
        this.passengerId = passengerId;
    }
}

package com.mylifes1110.bean;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Passenger {
    private int id;
    private String name;
    private boolean sex;
    private Date birthday;
    private Passport passport;

    public Passenger(String name, boolean sex, Date birthday) {
        this.name = name;
        this.sex = sex;
        this.birthday = birthday;
    }
}
```

*创建接口* 

```java
package com.mylifes1110.dao;

import com.mylifes1110.bean.Passenger;
import org.apache.ibatis.annotations.Param;

public interface PassengerDao {
    Passenger selectPassengerById(@Param("id") int id);
}
```

*创建Mapper.xml* 

```java
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
	"http://mybatis.org/dtd/mybatis-3-mapper.dtd">

<!--namespace：所需实现的接口全限定名-->
<mapper namespace="com.mylifes1110.dao.PassengerDao">
    <!--封装结果映射-->
    <resultMap id="passenger_passport" type="com.mylifes1110.bean.Passenger">
        <id column="id" property="id"></id>
        <result column="name" property="name"></result>
        <result column="sex" property="sex"></result>
        <result column="birthday" property="birthday"></result>
    	<!--封装类中对象-->
        <association property="passport" javaType="com.mylifes1110.bean.Passport">
            <id column="id" property="id"></id>
            <result column="nationlity" property="nationlity"></result>
            <result column="expire" property="expire"></result>
        </association>
    </resultMap>

<!--查询-->
<select id="selectPassengerById" resultMap="passenger_passport">
    select passenger.id,
       passenger.name,
       passenger.sex,
       passenger.birthday,
       passport.id pid,
       passport.nationlity,
       passport.expire,
       passport.passenger_id
from passenger
         join passport on passenger.id = passport.passenger_id
where passenger.id = #{id}
</select>
</mapper>
```

*注册Mapper* 

```java
<!--Mapper注册-->
<mappers>
	<mapper resource="mappers/PassengerMapper.xml"/>
<mappers>
```

*测试类* 

```java
@Test
public void selectPassengerById() {
    PassengerDao passengerDao = MyBatisUtils.getMapper(PassengerDao.class);
    System.out.println(passengerDao.selectPassengerById(1));
}
```



##### 3.3.3 一对多关系应用

> 在一对多关系中，可能会出现查询一个对象（实体）的信息，还有可能会出现查询好多对象（实体集合）的信息。那么我们可以判断在查询一个对象的信息是可以使用\<association>标签，而查询集合对象的信息可以使用\<collection>标签

*创建表* 

```sql
// 部门
create table department
(
    id       int auto_increment
        primary key,
    name     varchar(100) null,
    location varchar(200) null
);

// 员工
create table employee
(
    id      int auto_increment
        primary key,
    name    varchar(100) null,
    salary  double       null,
    dept_id int          null
);
```

*实体类* 

```java
package com.mylifes1110.bean;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Employee {
    private int id;
    private String name;
    private double salary;
    private int deptId;
    private List<Department> departments;
}

package com.mylifes1110.bean;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Department {
    private int id;
    private String name;
    private String location;
    private Employee employee;
}
```

*Dao层接口* 

```java
package com.mylifes1110.dao;

import com.mylifes1110.bean.Employee;

import java.util.List;

public interface EmployeeDao {
    List<Employee> selectAllEmployee();
}
```

*Mapper.xml* 

```java
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
	"http://mybatis.org/dtd/mybatis-3-mapper.dtd">

<!--namespace：所需实现的接口全限定名-->
<mapper namespace="com.mylifes1110.dao.EmployeeDao">
    <resultMap id="selectEmployeeAll" type="com.mylifes1110.bean.Employee">
        <id property="id" column="eid"></id>
        <result property="name" column="ename"></result>
        <result property="salary" column="salary"></result>
        <collection property="departments" ofType="com.mylifes1110.bean.Department">
            <id property="id" column="id"></id>
            <result property="name" column="name"></result>
            <result property="location" column="location"></result>
        </collection>
    </resultMap>
<select id="selectAllEmployee" resultMap="selectEmployeeAll">
    select department.id, department.name, department.location, employee.id eid, employee.name ename, employee.salary
from department
         join employee on department.id = employee.dept_id;
</select>
</mapper>
```

*测试类* 

```java
@Test
public void selectAllEmployee() {
    EmployeeDao employeeDao = MyBatisUtils.getMapper(EmployeeDao.class);
    System.out.println(employeeDao.selectAllEmployee());
}
```



##### 3.3.4 多对多关系应用

> 关于多对多在映射中还算是有挑战性的，接下来是一个三表联查来实现多对多映射

*创建表* 

```sql
// 科目表
create table subject(
   id int primary key auto_increment,
   name varchar(100),
   grade int
)default charset =utf8;

// 学生表
create table student(
    id int primary key  auto_increment,
    name varchar(50),
    sex tinyint
)default charset =utf8;

// 学生和科目的中间管理表
create table student_subject(
  student_id int references student(id),
  subject_id int references subject(id),
  primary key (student_id,subject_id)
)default charset =utf8;
```

|                       建立第三张关系表                       |
| :----------------------------------------------------------: |
| ![011_2](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200711192153.jpg) |

*实体类* 

```java
package com.mylifes1110.bean;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Student {
    private int id;
    private String name;
    private boolean sex;
    private List<Subject> subjects;
}

package com.mylifes1110.bean;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Subject {
    private int id;
    private String name;
    private int grade;
    private List<Student> students;
}
```

*Dao层接口* 

```java
package com.mylifes1110.dao;

import com.mylifes1110.bean.Subject;

import java.util.List;

public interface StudentDao {
    List<Subject> selectAllStudent();
}
```

*Mapper.xml* 

```java
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
	"http://mybatis.org/dtd/mybatis-3-mapper.dtd">

<!--namespace = 所需实现的接口全限定名-->
<mapper namespace="com.mylifes1110.dao.StudentDao">
<resultMap id="subject_student" type="com.mylifes1110.bean.Subject">
    <id property="id" column="id"></id>
    <result property="name" column="name"></result>
    <result property="grade" column="grade"></result>
<collection property="students" ofType="com.mylifes1110.bean.Student">
    <id property="id" column="stuid"></id>
    <result property="name" column="stuname"></result>
    <result property="sex" column="sex"></result>
</collection>
</resultMap>
<select id="selectAllStudent" resultMap="subject_student">
select student.id stuid, student.name stuname, student.sex, subject.id, subject.name, subject.grade
from student
         join student_subject on student.id = student_subject.student_id
         join subject
              on student_subject.subject_id = subject.id;
</select>
</mapper>
```

*测试类* 

```java
@Test
public void selectAllStudent() {
    StudentDao studentDao = MyBatisUtils.getMapper(StudentDao.class);
    System.out.println(studentDao.selectAllStudent());
}
```



### 四、动态SQL

#### 4.1 动态SQL概述

> MyBatis的映射文件中支持在基础SQL上添加一些逻辑操作，并动态拼接成完整的SQL之后再执行，以达到SQL复用、简化编程的效果



#### 4.2 sql标签

> 关于\<sql>标签是用来抽取多个相同重复sql片段的标签，抽取后并书写此标签内，随后再为\<sql id="别名">标签内取一个别名。当需要引入重复sql片段时，使用\<include refid="sql标签别名">标签来完成

```java
<sql id="selectSql">
    select id, username, password, gender, birth
</sql>
<!--sql标签使用-->
<select id="selectUserById1" resultType="com.mylifes1110.bean.User">
    <include refid="selectSql"></include>
    from tb_user where id = #{id}
</select>
```



#### 4.3 if标签

> 关于\<if>标签，它适用于是一个场景。我们的以前的增删改查一旦写了条件就写死了，导致很不灵活。比如：在select查询语句中定义了多个查询条件，而这个当查询的时候必须写入这几个查询条件，缺一个都不行。当项目需求改了时怎么办呢？只能需要修改代码来实现，而\<if>标签能够动态的来解除多条件的限制，当我们考虑好这几个条件是可以实现动态条件查询的时候，就可以使用\<if>标签来分配

```java
// 如果username不为空并且不为空字符串则username的值改为新值

<update id="updateUserById1"> 
    update tb_user set
    <if test="username != null and username != ''">username = #{username}</if>
    <if test="password != null">password = #{password}</if>
    <if test="gender != null">gender = #{gender}</if>
    <if test="birth != null">birth = #{birth}</if>
    where id = #{id}
</update>
```

> 该段代码的意思就是我指定\<if>标签包裹的哪一个属性都可以修改，而不是写死的只要修改就必须所有的值都传。那我们看一下测试类，使用\<if>标签是怎么动态传值的

```java
@Test
public void updateUserById1() {
    User user = new User(1, "Z", null, null, null);
    UserDao userDao = MyBatisUtils.getMapper(UserDao.class);
    System.out.println(userDao.updateUserById1(user));
}
```

> 测试类反映如果我们想改的值就可以直接传入新值修改，不修改的值就只需要传放入null即可



#### 4.4 where标签

> \<where>标签用于补充Sql中使用的where关键，并且可以自动忽略前缀，比如：and和or前缀

```java
<select id="selectBookByCondition" resultType="com.mylifes1110.bean.Book">
    SELECT id , name , author , publish , sort
    FROM t_books
    <where> 
        <if test="id != null">
            id = #{id}
        </if>

        <if test="name != null">
            and name = #{name}
        </if>

        <if test="author != null">
            and author = #{author}
        </if>

        <if test="publish != null">
            and publish = #{publish}
        </if>

        <if test="sort != null">
            and sort = #{sort}
        </if>
    </where>
</select>
```

> 该代码有一种问题场景存在，我们查询的时候不查询id，把id传入null。下一个name前面会多出一个and来干扰我们的查询，普通的情况下使用就会报错。而使用\<where>标签来包裹查询条件，既补充了where关键字，又忽略了这种情况下而多出的and关键字。or关键字亦是如此！



#### 4.5 set标签

> \<set>标签用于补充Sql语句中使用的set关键字，并且可以自动忽略后缀，比如：,（逗号）

```java
<update id="updateBookByCondition">
    UPDATE t_books
    <set>
        <if test="name != null">
            name = #{name} ,
        </if>

        <if test="author != null">
            author = #{author} ,
        </if>

        <if test="publish != null">
            publish = #{publish} ,
        </if>

        <if test="sort != null">
            sort = #{sort} ,
        </if>
    </set>
    WHERE id = #{id}
</update>
```

> 同样的思想，该代码也会有一种问题场景存在。我们在修改的时候，修改的值正常都是所有值都传入的，即使不修改的值，也是需要传值的，这样就导致了一种写死的状态，不能动态的修改自己所需要的值。当我们引入\<set>标签时，它可以补充set关键字并实现了动态修改自己想要的值。但是第一个值修改时，第二个值不修改的时候，后面就会多出来一个逗号来干扰修改，其\<set>标签就解决了此问题，忽略了后缀 , （逗号）



#### 4.6 trim标签

> \<trim prefix="" suffix="" prefixOverrides="" suffixOverrides="">是一个重量级标签，它代替\<where> 和\<set>（前缀、后缀、前缀覆盖、后缀覆盖），并具有它们的所有功能

*替换\<where>标签* 

```java
<select id="selectBookByCondition" resultType="com.mylifes1110.bean.Book">
		SELECT id,name,author,publish,sort
    FROM t_books
    <!-- 增加WHERE前缀,自动忽略前缀 AND 或 OR -->
    <trim prefix="WHERE" prefixOverrides="AND |OR "> 
        <if test="id != null">
            and id = #{id}
        </if>

        <if test="name != null">
            and name = #{name}
        </if>

        <if test="author != null">
            and author = #{author}
        </if>

        <if test="publish != null">
            and publish = #{publish}
        </if>

        <if test="sort != null">
            and sort = #{sort}
        </if>
	</trim>
</select>
```

*替换\<set>标签* 

```java
<update id="updateBookByCondition">
    UPDATE t_books
	<!-- 增加SET前缀,自动忽略最后的 逗号 -->
    <trim prefix="SET" suffixOverrides=","> 
        <if test="name != null">
            name = #{name} ,
        </if>

        <if test="author != null">
            author = #{author} ,
        </if>

        <if test="publish != null">
            publish = #{publish} ,
        </if>

        <if test="sort != null">
            sort = #{sort}
        </if>
    </trim>
	WHERE id = #{id}
</update>
```



#### 4.7 foreach标签

> \<foreach>标签可以用来实现批量插入数据和查询数据

| 参数       | 描述     | 取值                                          |
| ---------- | -------- | --------------------------------------------- |
| collection | 容器类型 | list、array、map                              |
| open       | 起始符   | (                                             |
| close      | 结束符   | )                                             |
| separator  | 分隔符   | ,                                             |
| index      | 下标号   | 从0开始，依次递增                             |
| item       | 当前项   | 任意名称（循环中通过 #{任意名称} 表达式访问） |

*批量查询* 

```java
// 实体类
package com.mylifes1110.bean;

import java.io.Serializable;
import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class User implements Serializable {
    private Integer id;
    private String username;
    private String password;
    private String gender;
    private Date birth;
}

// Dao层接口
List<User> selectUsersBatch(List<Integer> ids);

// Mapper.xml
<select id="selectUsersBatch" resultType="com.mylifes1110.bean.User">
	<include refid="selectUser"></include>
	where id in
    <foreach collection="list" item="id" open="(" close=")" separator=",">
    	(#{id})
    </foreach>
</select>
    
// 测试类
@Test
public void selectUsersBatch() {
    List<Integer> list = Arrays.asList(1, 2, 3, 4, 5);
    UserDao mapper = MyBatisUtil.getMapper(UserDao.class);
    List<User> users = mapper.selectUsersBatch(list);
    for (User user : users) {
        System.out.println(user);
    }
}
```

*批量插入* 

```java
// Dao层接口
int insertUserBatch(List<User> users);

// Mapper.xml
<insert id="insertUserBatch">
    insert into tb_user(username, password, gender, birth)
    values
    <foreach collection="list" item="user" open="" close="" separator=",">
    	(#{user.username}, #{user.password}, #{user.gender}, #{user.birth})
    </foreach>
</insert>
    
// 测试类
@Test
public void insertUserBatch() {
    List<User> list = new ArrayList<>();
    for (int i = 0; i <= 100; i++) {
        User user = new User(null, "MM", "GGGGGG", "f", new Date());
        list.add(user);
    }
    UserDao mapper = MyBatisUtil.getMapper(UserDao.class);
    System.out.println(mapper.insertUserBatch(list));
}
```



### 五、缓存

#### 5.1 缓存的重要性

> 内存中的一块存储空间，服务于某个应用程序，旨在将频繁读取的数据临时保存在内存中，便于二次快速访问

| 无缓存：用户在访问相同数据时，需要发起多次对数据库的直接访问，导致产生大量IO、读写硬盘的操作，效率低下 |
| :----------------------------------------------------------: |
| ![012](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200711201559.png) |

| 有缓存：首次访问时，查询数据库，将数据存储到缓存中；再次访问时，直接访问缓存，减少IO、硬盘读写次数、提高效率 |
| :----------------------------------------------------------: |
| ![013](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200711201602.png) |



#### 5.2 一级缓存

> SqlSession级别的缓存，同一个SqlSession的发起多次同构查询，会将数据保存在一级缓存中
>
> **注意：** 无需任何配置，默认开启一级缓存

*测试一级缓存* 

```java
@Test
public void testMapperCache1(){
  	SqlSession sqlSession1 = MyBatisUtils.getSession();
  
  	BookDao bookDao1 = sqlSession1.getMapper(BookDao.class);
	//第一次查询，从数据库获取，并将查询结果存入一级缓存
  	bookDao1.selectBookByCondition(new Book(1));
    //第二次查询，从一级缓存获取
    bookDao1.selectBookByCondition(new Book(1));

  	sqlSession1.close(); 
}
```

> 测试后，你查看MyBatis日志，会发现结果第一次查询触发了查询。而第二次的结果是从缓存中拿出来的，并没有触发再次查询



#### 5.3 二级缓存

> SqlSessionFactory级别的缓存，同一个SqlSessionFactory构建的SqlSession发起的多次同构查询，会将数据保存在二级缓存中
>
> **注意：** 二级缓存设置后，在sqlSession.commit()或者sqlSession.close()之后生效并且JavaBean必须实现序列化。三者缺一不可！



#### 5.4 开启全局缓存

> \<settings>是MyBatis中极为重要的调整设置，他们会改变MyBatis的运行行为，而该标签是放在\<properties>标签之后，别名标签之前的
>
> **注意：** mybaits-config.xml中开启全局缓存（默认开启）

```java
<configuration>
	<properties .../>
  	
  	<!-- 注意书写位置 -->
    <settings>
        <setting name="cacheEnabled" value="true"/>
    </settings>
  
  	<typeAliases></typeAliases>
</configuration>
```



#### 5.5 指定Mapper缓存

> 我们可以通过一个简单的\<cache />标签来指定某一个Mapper开启缓存

*Mapper.xml* 

```java
<mapper namespace="com.mylifes1110.dao.UserDao">
    <!-- 指定当前Mapper缓存 -->
    <cache /> 

    <select id="selectUserById" resultType="com.mylifes1110.bean.User">
        SELECT * FROM t_user
    </select>
</mapper>
```

*测试类* 

```java
@Test
public void testMapperCache(){
  	SqlSession sqlSession1 = MyBatisUtils.getSession();
  	BookDao bookDao1 = sqlSession1.getMapper(BookDao.class);
  	bookDao1.selectBookByCondition(new Book());
	//必须关闭SqlSession才可缓存数据
  	sqlSession1.close(); 

  	SqlSession sqlSession2 = MyBatisUtils.getSession();
  	BookDao bookDao2 = sqlSession2.getMapper(BookDao.class);
  	bookDao2.selectBookByCondition(new Book());
  	sqlSession2.close(); //缓存击中
}
```

> 如果你使用了MyBatis日志依赖，可以查看到这么一条信息。这条日志反映了从该数据被缓存后，被拉取该缓存的几率为百分之50，也就是一共查询了两次，缓存中查出来了一次

|                           缓存击中                           |
| :----------------------------------------------------------: |
| ![image-20200711203246412](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200711203248.png) |



#### 5.6 缓存清空并重新缓存

> **缓存清空：** 从数据被缓存，随后数据被增删改操作后缓存即为清空
>
> **重新缓存：** 增删改操作过后，当重新被查询该数据后，此时缓存未击中便重新缓存

```java
@Test
public void testMapperCache2(){
  	SqlSession sqlSession1 = MyBatisUtils.getSession();
  	UserDao UserDao1 = sqlSession1.getMapper(UserDao.class);
  	UserDao1.selectUserByUser(new User());
  	sqlSession1.close(); //必须关闭SqlSession才可缓存数据

    SqlSession sqlSession3 = MyBatisUtils.getSession();
    UserDao bookDao3 = sqlSession3.getMapper(UserDao.class);
    UserDao3.deleteUserById(102);
    sqlSession3.commit(); //DML成功，数据发生变化，缓存清空
    sqlSession3.close();
  
  	SqlSession sqlSession2 = MyBatisUtils.getSession();
  	UserDao userDao2 = sqlSession2.getMapper(UserDao.class);
  	UserDao2.selectUserByUser(new User());
  	sqlSession2.close(); //缓存未击中，重新查询数据库、重新缓存
}
```



### 六、Durid连接池

#### 6.1 Durid连接池概述

> Druid 是阿里巴巴开源平台上的一个项目，整个项目由数据库连接池、插件框架和 SQL 解析器组成。该项目主要是为了扩展 JDBC 的一些限制，可以让程序员实现一些特殊的需求，比如向密钥服务请求凭证、统计 SQL 信息、SQL 性能收集、SQL 注入检查、SQL 翻译等，程序员可以通过定制来实现自己需要的功能。



#### 6.2 不同连接池对比

> 测试执行申请归还连接 1,000,000（一百万）次总耗时性能对比。



##### 6.2.1 测试环境

| 环境 | 版本                  |
| ---- | --------------------- |
| OS   | OS X 10.8.2           |
| CPU  | Intel i7 2GHz 4 Core  |
| JVM  | Java Version 1.7.0_05 |



##### 6.2.2 基准测试结果对比

| JDBC-Conn Pool   | 1 Thread | 2 threads | 5 threads  | 10 threads | 20 threads | 50 threads  |
| ---------------- | -------- | --------- | ---------- | ---------- | ---------- | ----------- |
| **Druid**        | **898**  | **1,191** | **1,324**  | **1,362**  | **1,325**  | **1,459**   |
| tomcat-jdbc      | 1,269    | 1,378     | 2,029      | 2,103      | 1,879      | 2,025       |
| DBCP             | 2,324    | 5,055     | 5,446      | 5,471      | 5,524      | 5,415       |
| BoneCP           | 3,738    | 3,150     | 3,194      | 5,681      | 11,018     | 23,125      |
| jboss-datasource | 4,377    | 2,988     | 3,680      | 3,980      | 32,708     | 37,742      |
| C3P0             | 10,841   | 13,637    | 10,682     | 11,055     | 14,497     | 20,351      |
| Proxool          | 16,337   | 16,187    | 18,310(Ex) | 25,945     | 33,706(Ex) | 39,501 (Ex) |



##### 6.2.3 测试结论

* **Druid 是性能最好的数据库连接池，tomcat-jdbc 和 druid 性能接近。** 
* Proxool 在激烈并发时会抛异常，不适用。
* C3P0 和 Proxool 都相当慢，影响 sql 执行效率。
* BoneCP 性能并不优越，采用 LinkedTransferQueue 并没有能够获得性能提升。
* 除了 bonecp，其他的在 JDK 7 上跑得比 JDK 6 上快。
* jboss-datasource 虽然稳定，但性能很糟糕。



#### 6.3 Durid连接的开发步骤

##### 6.3.1 引入依赖

> 在Maven项目中的pom.xml文件中引入阿里巴巴的Durid连接池

```java
<!-- https://mvnrepository.com/artifact/com.alibaba/druid -->
<dependency>
    <groupId>com.alibaba</groupId>
    <artifactId>druid</artifactId>
    <version>1.1.16</version>
</dependency>
```



##### 6.3.2 替换MyBatis中的默认数据源

> MyBatis中是有默认数据源的，如果我们想用其他连接池，需要替换默认数据源
>
> **操作：** MyDruidDataSourceFactory并继承PooledDataSourceFactory，并替换数据源

```java
package com.mylifes1110.datasource;

import com.alibaba.druid.pool.DruidDataSource;
import org.apache.ibatis.datasource.pooled.PooledDataSourceFactory;

public class MyDruidDataSource extends PooledDataSourceFactory {

    public MyDruidDataSource() {
        this.dataSource = new DruidDataSource();
    }
}
```



##### 6.3.3 配置mybatis-config.xml

> 修改mybatis-config.xml文件中连接池相关配置
>
> **注意：** < property name="属性名" />属性名必须与com.alibaba.druid.pool.DruidAbstractDataSource中一致

```java
<!--连接池-->
<dataSource type="com.mylifes1110.utils.MyDruidDataSourceFactory"><!--数据源工厂-->
    <property name="driverClass" value="${driver}"/>
    <property name="jdbcUrl" value="${url}"/>
    <property name="username" value="${username}"/>
    <property name="password" value="${password}"/> 
</dataSource>
```



### 七、分页插件（PageHelper）

#### 7.1 PageHelper概述

> PageHelper是一个适用于MyBatis框架的一个分页插件，使用方式极为便捷，支持任何复杂的单表、多表分页查询操作



#### 7.2 官网

> 官方网站：[https://pagehelper.github.io/](https://pagehelper.github.io/)
>
> 下载地址：[https://github.com/pagehelper/Mybatis-PageHelper](https://github.com/pagehelper/Mybatis-PageHelper)



#### 7.3 PageHelper开发步骤

##### 7.3.1 引入依赖

> 在Maven项目中的pom.xml文件中引入PageHelper依赖

```java
<dependency>
		<groupId>com.github.pagehelper</groupId>
		<artifactId>pagehelper</artifactId>
		<version>5.1.10</version>
</dependency>
```



##### 7.3.2 配置mybatis-config.xml

> 在核心配置文件中的别名标签\<typeAliases>和\<environments>内添加\<plugins>标签并引入PageHelper配置

```java
<configuration>
  	<typeAliases></typeAliases>
  
    <plugins>
        <!-- com.github.pagehelper为PageHelper类所在包名 -->
        <plugin interceptor="com.github.pagehelper.PageInterceptor"></plugin>
    </plugins>
  
  	<environments>...</environments>
</configuration>
```



#### 7.4 PageInfo对象

> PageInfo对象是PageHelper插件中的一个类，里面包含了如下页面中所需要的所有相关数据

|                        PageInfo结构图                        |
| :----------------------------------------------------------: |
| ![image-20200116145234073](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200711205931.png) |



#### 7.5 注意事项

> * 只有在PageHelper.startPage()方法之后的**第一个查询会有执行分页** 
> * 分页插件 不支持带有“for update” 的查询语句
> * 分页插件不支持“嵌套查询”，由于嵌套结果方式会导致结果集被折叠，所以无法保证分页结果数量正确



#### 7.6 分页查询

##### 7.6.1 创建表

```sql
create table tb_user
(
    id       int auto_increment
        primary key,
    username varchar(30) null,
    password varchar(30) null,
    gender   char        null,
    birth    date        null
);
```



##### 7.6.2 实体类

```java
package com.mylifes1110.bean;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class User implements Serializable {
    private int id;
    private String username;
    private String password;
    private boolean gender;
    private Date birth;
}
```



##### 7.6.3 Dao层

```java
package com.mylifes1110.dao;

import com.mylifes1110.bean.User;

import java.util.List;

public interface UserDao {
    List<User> selectUserByPage();
}
```



##### 7.6.4 datasource

```java
package com.mylifes1110.datasource;

import com.alibaba.druid.pool.DruidDataSource;
import org.apache.ibatis.datasource.pooled.PooledDataSourceFactory;

public class MyDruidDataSource extends PooledDataSourceFactory {

    public MyDruidDataSource(){
        this.dataSource = new DruidDataSource();
    }
}
```



##### 7.6.5 Service层

```java
// 接口
package com.mylifes1110.service;

import com.github.pagehelper.PageInfo;
import com.mylifes1110.bean.User;

public interface UserService {
    PageInfo<User> selectUserByPage(int pageNum, int pageSize);
}

package com.mylifes1110.service.impl;


// 实现类
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.mylifes1110.bean.User;
import com.mylifes1110.dao.UserDao;
import com.mylifes1110.service.UserService;
import com.mylifes1110.utils.MyBatisUtil;

import java.util.List;

public class UserServiceImpl implements UserService {

    @Override
    public PageInfo<User> selectUserByPage(int pageNum, int pageSize) {
        UserDao userDao = MyBatisUtil.getMapper(UserDao.class);
        PageHelper.startPage(pageNum, pageSize);
        List<User> userList = userDao.selectUserByPage();
        MyBatisUtil.closeSession();
        return new PageInfo<User>(userList);
    }
}
```



##### 7.6.6 工具类

```java
package com.mylifes1110.utils;

import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;

import java.io.InputStream;

public class MyBatisUtil {
    //获得SqlSession工厂
    private static SqlSessionFactory factory;

    //创建ThreadLocal绑定当前线程中的SqlSession对象
    private static final ThreadLocal<SqlSession> tl = new ThreadLocal<SqlSession>();

    static {
        try {
            InputStream is = Resources.getResourceAsStream("mybatis-config.xml");
            factory = new SqlSessionFactoryBuilder().build(is);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    //获得连接（从tl中获得当前线程SqlSession）
    private static SqlSession openSession(){
        SqlSession session = tl.get();
        if(session == null){
            session = factory.openSession();
            tl.set(session);
        }
        return session;
    }

    // 每次返回一个新创建的sqlSession
    public static SqlSession getSession(){
        return factory.openSession();
    }

    //释放连接（释放当前线程中的SqlSession）
    public static void closeSession(){
        SqlSession session = tl.get();
        session.close();
        tl.remove();
    }

    //提交事务（提交当前线程中的SqlSession所管理的事务）
    public static void commit(){
        SqlSession session = openSession();
        session.commit();
        closeSession();
    }

    //回滚事务（回滚当前线程中的SqlSession所管理的事务）
    public static void rollback(){
        SqlSession session = openSession();
        session.rollback();
        closeSession();
    }

    //获得接口实现类对象
    public static <T extends Object> T getMapper(Class<T> clazz){
        SqlSession session = openSession();
        return session.getMapper(clazz);
    }
}
```



##### 7.6.7 controller

```java
package com.mylifes1110.controller;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.github.pagehelper.PageInfo;

import com.mylifes1110.bean.User;
import com.mylifes1110.service.UserService;
import com.mylifes1110.service.impl.UserServiceImpl;

@WebServlet(
    name  = "UserServlet",
    value = "/user/page"
)
public class UserServlet extends HttpServlet {
    private UserService userService = new UserServiceImpl();

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        doPost(request, response);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        int    pageNum     = 1;
        int    pageSize    = 5;
        String pageNumStr  = request.getParameter("pageNum");
        String pageSizeStr = request.getParameter("pageSize");

        if (pageNumStr != null) {
            pageNum = Integer.parseInt(pageNumStr);
        }

        if (pageSizeStr != null) {
            pageSize = Integer.parseInt(pageSizeStr);
        }

        PageInfo<User> pageInfo = userService.selectUserByPage(pageNum, pageSize);

        request.setAttribute("pageInfo", pageInfo);
        request.getRequestDispatcher("/index.jsp").forward(request, response);
    }
}
```



##### 7.6.8 Mapper.xml

```java
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
	"http://mybatis.org/dtd/mybatis-3-mapper.dtd">

<!--namespace = 所需实现的接口全限定名-->
<mapper namespace="com.mylifes1110.dao.UserDao">
    <select id="selectUserByPage" resultType="com.mylifes1110.bean.User">
        select id, username, password, gender, birth from tb_user
    </select>
</mapper>
```



##### 7.6.9 index.jsp

```html
<%--
  Created by IntelliJ IDEA.
  User: Ziph
  Date: 2020/7/8
  Time: 17:59
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<script src="${pageContext.request.contextPath}/js/jquery-2.1.0.js"></script>
<!-- 最新版本的 Bootstrap 核心 CSS 文件 -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css"
      integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
<!-- 最新的 Bootstrap 核心 JavaScript 文件 -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/js/bootstrap.min.js"
        integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa"
        crossorigin="anonymous"></script>
<html>
<head>
    <title>index</title>
</head>
<body>
<table class="table table-striped table-bordered table-hover">
    <tr>
        <th>ID</th>
        <th>用户名</th>
        <th>密码</th>
        <th>性别</th>
        <th>出生日期</th>
    </tr>
    <c:forEach items="${pageInfo.list}" var="user">
        <tr>
            <td>${user.id}</td>
            <td>${user.username}</td>
            <td>${user.password}</td>
            <td>${user.gender}</td>
            <td>
                <fmt:formatDate value="${user.birth}" pattern="yyyy/MM/dd"/>
            </td>
        </tr>
    </c:forEach>
</table>
<div align="center">
    <nav aria-label="Page navigation">
        <ul class="pagination">
            <c:if test="${pageInfo.hasPreviousPage}">
                <li>
                    <a href="${pageContext.request.contextPath}/user/page?pageNum=${pageInfo.prePage}"
                       aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                </li>
            </c:if>
            <c:forEach begin="1" end="${pageInfo.pages}" var="i">
                <c:if test="${pageInfo.pageNum == i}">
                    <li class="active"><a href="${pageContext.request.contextPath}/user/page?pageNum=${i}">${i}</a>
                    </li>
                </c:if>
                <c:if test="${pageInfo.pageNum != i}">
                    <li><a href="${pageContext.request.contextPath}/user/page?pageNum=${i}">${i}</a></li>
                </c:if>
            </c:forEach>
            <c:if test="${pageInfo.hasNextPage}">
                <li>
                    <a href="${pageContext.request.contextPath}/user/page?pageNum=${pageInfo.nextPage}"
                       aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                </li>
            </c:if>
        </ul>
    </nav>
</div>
</body>
</html>
```



##### 7.6.10 pom.xml依赖

```java
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>

    <groupId>org.example</groupId>
    <artifactId>paging</artifactId>
    <version>1.0-SNAPSHOT</version>

    <packaging>war</packaging>
    <dependencies>
        <dependency>
            <groupId>org.mybatis</groupId>
            <artifactId>mybatis</artifactId>
            <version>3.4.6</version>
        </dependency>
        <!--MySql驱动依赖-->
        <dependency>
            <groupId>mysql</groupId>
            <artifactId>mysql-connector-java</artifactId>
            <version>5.1.47</version>
        </dependency>
        <dependency>
            <groupId>junit</groupId>
            <artifactId>junit</artifactId>
            <version>4.12</version>
        </dependency>
        <dependency>
            <groupId>log4j</groupId>
            <artifactId>log4j</artifactId>
            <version>1.2.17</version>
        </dependency>
        <dependency>
            <groupId>org.springframework</groupId>
            <artifactId>spring-jdbc</artifactId>
            <version>4.3.13.RELEASE</version>
        </dependency>
        <dependency>
            <groupId>com.alibaba</groupId>
            <artifactId>druid</artifactId>
            <version>1.1.16</version>
        </dependency>
        <dependency>
            <groupId>com.github.pagehelper</groupId>
            <artifactId>pagehelper</artifactId>
            <version>5.1.10</version>
        </dependency>
        <dependency>
            <groupId>org.projectlombok</groupId>
            <artifactId>lombok</artifactId>
            <version>1.18.12</version>
        </dependency>
        <dependency>
            <!-- jstl 支持 -->
            <groupId>javax.servlet</groupId>
            <artifactId>jstl</artifactId>
            <version>1.2</version>
        </dependency>
        <dependency>
            <!-- servlet编译环境 -->
            <groupId>javax.servlet</groupId>
            <artifactId>javax.servlet-api</artifactId>
            <version>3.1.0</version>
            <scope>provided</scope>
        </dependency>
        <dependency>
            <!-- jsp编译环境 -->
            <groupId>javax.servlet</groupId>
            <artifactId>jsp-api</artifactId>
            <version>2.0</version>
            <scope>provided</scope>
        </dependency>
    </dependencies>
</project>
```



##### 7.6.11 各种配置文件

*jdbc.properties* 

```java
#jdbc.properties
jdbc.driver=com.mysql.jdbc.Driver
jdbc.url=jdbc:mysql://localhost:3306/db2004?useUnicode=true&characterEncoding=utf8
jdbc.username=root
jdbc.password=123456
```

*log4j.properties* 

```java
# Global logging configuration
log4j.rootLogger=DEBUG, stdout
# MyBatis logging configuration...
log4j.logger.com.qf.mybatis.part1.basic=TRACE
# Console output...
log4j.appender.stdout=org.apache.log4j.ConsoleAppender
log4j.appender.stdout.layout=org.apache.log4j.PatternLayout
log4j.appender.stdout.layout.ConversionPattern=%5p [%t] - %m%n
```

*mybatis-config.xml* 

```java
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE configuration PUBLIC "-//mybatis.org//DTD Config 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-config.dtd">

<!--MyBatis配置-->
<configuration>
    <properties resource="jdbc.properties"/>
    <!-- mybaits-config.xml中开启全局缓存（默认开启） -->
    <settings>
        <setting name="cacheEnabled" value="true"/>
    </settings>

    <!-- 定义实体的别名 -->
    <typeAliases>
        <!--<typeAlias type="com.qianfeng.entity.User" alias="User" />-->
        <package name="com.mylifes1110.bean"/>
    </typeAliases>
    <!--分页插件-->
    <plugins>
        <!-- com.github.pagehelper为PageHelper类所在包名 -->
        <plugin interceptor="com.github.pagehelper.PageInterceptor"></plugin>
    </plugins>
    <!--JDBC环境配置、选中默认环境-->
    <environments default="MySqlDB">
        <!--MySql数据库环境配置-->
        <environment id="MySqlDB">
            <!--事务管理-->
            <transactionManager type="JDBC"/>
            <!--连接池-->
            <dataSource type="com.mylifes1110.datasource.MyDruidDataSource">
                <property name="driverClass" value="${jdbc.driver}"/>
                <!-- &转义&amp; -->
                <property name="jdbcUrl" value="${jdbc.url}"/>
                <property name="username" value="${jdbc.username}"/>
                <property name="password" value="${jdbc.password}"/>
            </dataSource>
        </environment>
    </environments>

    <!--Mapper注册-->
    <mappers>
        <!--注册Mapper文件的所在位置-->
        <mapper resource="mappers/UserMapper.xml"/>
    </mappers>
</configuration>
```



### 八、MyBatis补充

#### 8.1 MyBatis注解开发

> 在MyBaits中是可以通过注解来完成CRUD的
>
> **注意：** 接口注解定义完毕后，需将接口全限定名注册到mybatis-config.xml的< mappers >中
>
> **经验：** 注解模式属于硬编码到.java文件中，失去了使用配置文件外部修改的优势，可结合需求选用

```java
<mappers>
    <!-- class：接口全限定名 -->
	<mapper class="com.mylifes1110.dao.UserMapper" />
</mappers>
```



##### 8.1.1 查询

```java
public interface UserMapper {
    @Select("SELECT * FROM t_users WHERE id = #{id}")
    public User selectUserById(Integer id);

    @Select("SELECT * FROM t_users WHERE id = #{id} AND password = #{pwd}")
    public User selectUserByIdAndPwd_annotation(@Param("id") Integer id, @Param("pwd") String password);
}
```



##### 8.1.2 删除

```java
@Delete(value = "DELETE FROM t_users WHERE id = #{id}")
public int deleteUser(Integer id);
```



##### 8.1.3 修改

```java
@Update("UPDATE t_users SET name = #{name} , password = #{password} , salary = #{salary} , birthday = #{birthday} WHERE id = #{id}")
public int updateUser(User user);
```



##### 8.1.4 插入

```java
@Insert("INSERT INTO t_users VALUES(#{id},#{name},#{password},#{salary},#{birthday},null)")
public int insertUser(User user);

@Options(useGeneratedKeys = true , keyProperty = "id") // 自增key，主键为id
@Insert("INSERT INTO t_users VALUES(#{id},#{name},#{password},#{salary},#{birthday},null)")
public int insertUserGeneratedKeys(User user);
```



#### 8.2 $符号的应用场景

> ${attribute} 属于字符串拼接SQL，而非预编译占位符，会有注入攻击问题，不建议在常规SQL中使用，常用于可解决动态生降序问题



##### 8.2.1 $符号参数绑定

> $符号可用于拼接Sql语句，可以解决#符号传值解决不了的问题。如下是使用$符号参数绑定实现同一按钮升降序功能
>
> **注意：** 在使用$符号时，必须使用@Param注解来传递参数。我们必须手动的指定传入升降序规则

*Dao层接口* 

```java
List<User> selectUsersByUsername(@Param("username") String username, @Param("rule") String rule);
```

*Mapper.xml* 

```java
<select id="selectUsersByUsername" resultType="com.mylifes1110.bean.User">
    <include refid="selectUser"></include>
    where username like concat('%', #{username}, '%')
    order by id ${rule}
</select>
```

*测试类* 

```java
@Test
public void selectUsersByUsername() {
    UserDao mapper = MyBatisUtil.getMapper(UserDao.class);
    // 降序
    System.out.println(mapper.selectUsersByUsername("M", "desc"));
    // 升序
    System.out.println(mapper.selectUsersByUsername("M", "asc"));
}
```



##### 8.2.2 $符号注入攻击

```xml
<select id="selectUsersByKeyword" resultType="User">
    <!-- 会存在注入攻击  比如传入参数是 【String name = "tom' or '1'='1";】-->
	SELECT * FROM t_user
  	WHERE name = '${name}' 
</select>
```

|       注入攻击，拼接的内容，改变了原sql语义，被攻击！        |
| :----------------------------------------------------------: |
| ![注入](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200711211446.jpg) |



##### 8.2.3 避免使用$符号注入攻击

> 在使用$符号时，避免直接的接受处理表单参数，接收表单参数后在Service层做一系列传入参数处理，这样传入的参数不是直接的向数据库做一系列操作，而是以类似别名的形式访问操作数据库。
>
> 这样以来即使被注入，该数据也不能直接的操作数据库，所以这样的做法是安全的



#### 9.3 MyBatis处理关联关系-嵌套查询（了解）

> **思路：** 查询部门信息时，及联查询所属的员工信息
>
> * DepartmentDao接口中定义selectDepartmentById，并实现Mapper
> * EmployeeDao接口中定义selectEmployeesByDeptId，并实现Mapper
> * 当selectDepartmentById被执行时，通过< collection >调用selectEmployeesByDeptId方法，并传入条件参数



##### 9.3.1 主表查询

> 定义selectEmployeesByDeptId，并书写Mapper，实现根据部门ID查询员工信息

*Dao层接口* 

```java
public interface EmployeeDao {
    public List<Employee> selectEmployeeByDeptId(@Param("did") String did);
}
```

*Mapper.xml* 

```xml
<mapper namespace="com.mylifes1110.dao.EmployeeDao">
    <!-- 根据部门编号查询所有员工 -->
    <select id="selectEmployeeById" resultType="Employee" >
        SELECT id,name,salary,dept_id 
      	FROM t_employees 
      	WHERE dept_id = #{did}
    </select>
</mapper>
```



##### 9.3.2 级联调用

> 定义selectDepartmentById，并书写Mapper，实现根据部门ID查询部门信息，并及联查询该部门员工信息

*Dao层接口* 

```java
public interface DepartmentDao {
    public Department selectDepartmentById(@Param("id") String id);
}
```

*Mapper.xml* 

```xml
<mapper namespace="com.mylifes1110.dao.DepartmentDao">
    <resultMap id="departmentResultMap" type="department">
        <id property="id" column="id" />
        <result property="name" column="name" />
        <result property="location" column="location" />
         <!-- column="传入目标方法的条件参数"  select="及联调用的查询目标"-->
        <collection property="emps" ofType="Employee" column="id" 
                    select="com.mylifes1110.dao.EmployeeDao.selectEmployeeByDeptId" />
    </resultMap>
    <select id="selectAllDepartments" resultMap="departmentResultMap">
        SELECT id , name , location
        FROM t_departments
        WHERE id = #{id}
    </select>
</mapper>
```



##### 9.3.3 延迟加载

> ##### mybatis-config.xml中开启延迟加载
>
> **注意：** 开启延迟加载后，如果不使用及联数据，则不会触发及联查询操作，有利于加快查询速度、节省内存资源

```xml
<settings>
	<!-- 开启延迟加载（默认false） -->
	<setting name="lazyLoadingEnabled" value="true"/> 
</settings>
```

