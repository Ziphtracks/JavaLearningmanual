* [MySQL存储过程](#mysql%E5%AD%98%E5%82%A8%E8%BF%87%E7%A8%8B)
    * [一、存储过程](#%E4%B8%80%E5%AD%98%E5%82%A8%E8%BF%87%E7%A8%8B)
      * [1\.1 什么是存储过程](#11-%E4%BB%80%E4%B9%88%E6%98%AF%E5%AD%98%E5%82%A8%E8%BF%87%E7%A8%8B)
      * [1\.2 数据库存储过程程序](#12-%E6%95%B0%E6%8D%AE%E5%BA%93%E5%AD%98%E5%82%A8%E8%BF%87%E7%A8%8B%E7%A8%8B%E5%BA%8F)
      * [1\.3 为什么要使用存储程序](#13-%E4%B8%BA%E4%BB%80%E4%B9%88%E8%A6%81%E4%BD%BF%E7%94%A8%E5%AD%98%E5%82%A8%E7%A8%8B%E5%BA%8F)
    * [二、存储过程的使用步骤](#%E4%BA%8C%E5%AD%98%E5%82%A8%E8%BF%87%E7%A8%8B%E7%9A%84%E4%BD%BF%E7%94%A8%E6%AD%A5%E9%AA%A4)
      * [2\.1 存储过程的开发思想](#21-%E5%AD%98%E5%82%A8%E8%BF%87%E7%A8%8B%E7%9A%84%E5%BC%80%E5%8F%91%E6%80%9D%E6%83%B3)
      * [2\.2 存储过程的优缺点](#22-%E5%AD%98%E5%82%A8%E8%BF%87%E7%A8%8B%E7%9A%84%E4%BC%98%E7%BC%BA%E7%82%B9)
      * [2\.3 MySQL存储过程的官方文档](#23-mysql%E5%AD%98%E5%82%A8%E8%BF%87%E7%A8%8B%E7%9A%84%E5%AE%98%E6%96%B9%E6%96%87%E6%A1%A3)
      * [2\.3 存储过程的使用语法](#23-%E5%AD%98%E5%82%A8%E8%BF%87%E7%A8%8B%E7%9A%84%E4%BD%BF%E7%94%A8%E8%AF%AD%E6%B3%95)
    * [三、存储过程的变量和赋值](#%E4%B8%89%E5%AD%98%E5%82%A8%E8%BF%87%E7%A8%8B%E7%9A%84%E5%8F%98%E9%87%8F%E5%92%8C%E8%B5%8B%E5%80%BC)
      * [3\.1 局部变量](#31-%E5%B1%80%E9%83%A8%E5%8F%98%E9%87%8F)
      * [3\.2 用户变量](#32-%E7%94%A8%E6%88%B7%E5%8F%98%E9%87%8F)
      * [3\.3 会话变量](#33-%E4%BC%9A%E8%AF%9D%E5%8F%98%E9%87%8F)
      * [3\.4 全局变量](#34-%E5%85%A8%E5%B1%80%E5%8F%98%E9%87%8F)
      * [3\.5 入参出参](#35-%E5%85%A5%E5%8F%82%E5%87%BA%E5%8F%82)
    * [四、存储过程中的流程控制](#%E5%9B%9B%E5%AD%98%E5%82%A8%E8%BF%87%E7%A8%8B%E4%B8%AD%E7%9A%84%E6%B5%81%E7%A8%8B%E6%8E%A7%E5%88%B6)
      * [4\.1 if 条件判断（推荐）](#41-if-%E6%9D%A1%E4%BB%B6%E5%88%A4%E6%96%AD%E6%8E%A8%E8%8D%90)
      * [4\.2 case条件判断](#42-case%E6%9D%A1%E4%BB%B6%E5%88%A4%E6%96%AD)
      * [4\.3 loop循环](#43-loop%E5%BE%AA%E7%8E%AF)
      * [4\.4 repeat循环](#44-repeat%E5%BE%AA%E7%8E%AF)
      * [4\.5 while循环](#45-while%E5%BE%AA%E7%8E%AF)
      * [4\.6 流程控制语句（继续、结束）](#46-%E6%B5%81%E7%A8%8B%E6%8E%A7%E5%88%B6%E8%AF%AD%E5%8F%A5%E7%BB%A7%E7%BB%AD%E7%BB%93%E6%9D%9F)
    * [五、游标与handler](#%E4%BA%94%E6%B8%B8%E6%A0%87%E4%B8%8Ehandler)
      * [5\.1 游标](#51-%E6%B8%B8%E6%A0%87)
      * [5\.2 handler句柄](#52-handler%E5%8F%A5%E6%9F%84)
    * [六、循环创建表](#%E5%85%AD%E5%BE%AA%E7%8E%AF%E5%88%9B%E5%BB%BA%E8%A1%A8)
    * [七、其他](#%E4%B8%83%E5%85%B6%E4%BB%96)
      * [7\.1 characteristic](#71-characteristic)
      * [7\.2 死循环处理](#72-%E6%AD%BB%E5%BE%AA%E7%8E%AF%E5%A4%84%E7%90%86)
      * [7\.3 select语句中书写case](#73-select%E8%AF%AD%E5%8F%A5%E4%B8%AD%E4%B9%A6%E5%86%99case)
      * [7\.4 复制表和数据](#74-%E5%A4%8D%E5%88%B6%E8%A1%A8%E5%92%8C%E6%95%B0%E6%8D%AE)
      * [7\.5 临时表](#75-%E4%B8%B4%E6%97%B6%E8%A1%A8)

# MySQL存储过程

------

### 一、存储过程

#### 1.1 什么是存储过程

> 存储过程（Stored Procedure）是在大型数据库系统中，一组为了完成特定功能的SQL 语句集，它存储在数据库中，一次编译后永久有效，用户通过指定存储过程的名字并给出参数（如果该存储过程带有参数）来执行它。存储过程是数据库中的一个重要对象。在数据量特别庞大的情况下利用存储过程能达到倍速的效率提升



#### 1.2 数据库存储过程程序

> 当我们了了解存储过程是什么之后，就需要了解数据库中存在的这三种类型的数据库存储类型程序，如下：
>
> - **存储过程：** 存储过程是最常见的存储程序，存储过程是能够接受输入和输出参数并且能够在请求时被执行的程序单元。
> - **存储函数：** 存储函数和存储过程很相像，但是它的执行结果会返回一个值。最重要的是存储函数可以被用来充当标准的 SQL 语句，允许程序员有效的扩展 SQL 语言的能力。
> - **触发器：** 触发器是用来响应激活或者触发数据库行为事件的存储程序。通常，触发器用来作为数据库操作语言的响应而被调用，触发器可以被用来作为数据校验和自动反向格式化。
>
> 注意： 其他的数据库提供了别的数据存储程序，包括包和类。目前MySQL不提供这种结构。



#### 1.3 为什么要使用存储程序

> 虽然目前的开发中存储程序我们使用的并不是很多，但是不一定就否认它。其实存储程序会为我们使用和管理数据库带来了很多优势：
>
> - 使用存储程序更加安全。
> - 存储程序提供了一种数据访问的抽象机制，它能够极大的改善你的代码在底层数据结构演化过程中的易维护性。
> - 存储程序可以降低网络拥阻，因为属于数据库服务器的内部数据，这相比在网上传输数据要快的多。
> - 存储程序可以替多种使用不同构架的外围应用实现共享的访问例程，无论这些构架是基于数据库服务器外部还是内部。
> - 以数据为中心的逻辑可以被独立的放置于存储程序中，这样可以为程序员带来更高、更为独特的数据库编程体验。
> - 在某些情况下，使用存储程序可以改善应用程序的可移植性。（在另外某些情况下，可移植性也会很差！）

***这里我大致解释一下上述几种使用存储程序的优势：*** 

我们要知道在Java语言中，我们使用数据库与Java代码结合持久化存储需要引入JDBC来完成。会想到JDBC，我们是否还能想起SQL注入问题呢？虽然使用PreparedStatement解决SQL注入问题，那就真的是绝对安全吗？不，它不是绝对安全的。

这时候分析一下数据库与Java代码的连接操作流程。在BS结构中，一般都是浏览器访问服务器的，再由服务器发送SQL语句到数据库，在数据库中对SQL语句进行编译运行，最后把结果通过服务器处理再返回浏览器。在此操作过程中，浏览器对服务器每发送一次对数据库操作的请求就会调用对应的SQL语句编译和执行，这是一件十分浪费性能的事情，**性能下降** 了就说明对数据库的操作**效率低** 了。

还有一种可能是，在这个过程中进行发送传输的SQL语句是对真实的库表进行操作的SQL语句，如果在发送传输的过程中被拦截了，一些不法分子会根据他所拦截的SQL语句推断出我们数据库中的库表结构，这是一个很大的**安全隐患** 。

关于可维护性的提高，这里模拟一个场景。通常数据库在公司中是由DBA来管理的，如果管理数据库多年的DBA辞职了，此时数据库会被下一任DBA来管理。这里时候问题来了，数据库中这么多的数据和SQL语句显然对下一任管理者不太友好。就算管理多年的DBA长时间不操作查看数据库也会忘记点什么东西。所以，我们在需要引入存储程序来进行SQL语句的统一编写和编译，**为维护提供了便利** 。（其实我觉得这个例子并不生动合理，但是为了大家能理解，请体谅！）

**讲了很多存储程序的优势演变过程，其核心就是：** 需要将编译好的一段或多段SQL语句放置在数据库端的存储程序中，以便解决以上问题并方便开发者直接调用。



### 二、存储过程的使用步骤

#### 2.1 存储过程的开发思想

> 存储过程时数据库的一个重要的对象，可以封装SQL语句集，可以用来完成一些较复杂的业务逻辑，并且可以入参（传参）、出参（返回参数），这里与Java中封装方式十分相似。
>
> 而且创建时会预先编译后保存，开发者后续的调用都不需要再次编译。



#### 2.2 存储过程的优缺点

> 存储过程使用的优缺点其实在1.3中的优势中说到了。这里我简单罗列一下存储过程的优点与缺点。
>
> - **优点：** 
>   - 在生产环境下，可以通过直接修改存储过程的方式修改业务逻辑或bug，而不用重启服务器。
>   - 执行速度快，存储过程经过编译之后会比单独一条一条编译执行要快很多。
>   - 减少网络传输流量。
>   - 便于开发者或DBA使用和维护。
>   - 在相同数据库语法的情况下，改善了可移植性。
> - **缺点：** 
>   - 过程化编程，复杂业务处理的维护成本高。
>   - 调试不便。
>   - 因为不同数据库语法不一致，不同数据库之间可移植性差。



#### 2.3 MySQL存储过程的官方文档

> 英语好或者有能力的小伙伴可以去参考一下官方文档。如果不参考官方文档，没关系，我在下面也会详细讲述MySQL存储过程的各个知识点。

**官方文档：** [https://dev.mysql.com/doc/refman/5.6/en/preface.html](https://dev.mysql.com/doc/refman/5.6/en/preface.html)



#### 2.3 存储过程的使用语法

```sql
create PROCEDURE 过程名( in|out|inout 参数名 数据类型 , ...)
begin
	sql语句;
end;
call 过程名(参数值);
```

> `in`是定义传入参数的关键字。`out`是定义出参的关键字。`inout`是定义一个出入参数都可以的参数。如果括号内什么都不定义，就说明该存储过程时一个无参的函数。在后面会有详细的案例分析。
>
> **注意：** SQL语句默认的结束符为`;`，所以在使用以上存储过程时，会报1064的语法错误。我们可以使用`DELIMITER`关键字临时声明修改SQL语句的结束符为`//`，如下：

```sql
-- 临时定义结束符为"//"
DELIMITER //
create PROCEDURE 过程名( in|out 参数名 数据类型 , ...)
begin
	sql语句;
end//
-- 将结束符重新定义回结束符为";"
DELIMITER ;
```

**例如：** 使用存储过程来查询员工的工资（无参）

**注意：** 如果在特殊的必要情况下，我们还可以通过`delimiter`关键字将`;`结束符声明回来使用，在以下案例中我并没有这样将结束符声明回原来的`;`，在此请大家注意~

为什么我在这里提供了drop（删除）呢？

是因为我们在使用的时候如果需要修改存储过程中的内容，我们需要先删除现有的存储过程后，再creat重新创建。

```sql
# 声明结束符为//
delimiter //

# 创建存储过程(函数)
create procedure se()
begin
    select salary from employee;
end //

# 调用函数
call se() //

# 删除已存在存储过程——se()函数
drop procedure if exists se //
```



### 三、存储过程的变量和赋值

#### 3.1 局部变量

> **声明局部变量语法：** `declare var_name type [default var_value];`
>
> **赋值语法：** 
>
> **注意：** 局部变量的定义，在begin/end块中有效。

*使用set为参数赋值* 

```java
# set赋值

# 声明结束符为//
delimiter //
    
# 创建存储过程
create procedure val_set()
begin
    # 声明一个默认值为unknown的val_name局部变量
    declare val_name varchar(32) default 'unknown';
	# 为局部变量赋值
    set val_name = 'Centi';
	# 查询局部变量
    select val_name;
end //

# 调用函数
call val_set() //
```

*使用into接收参数* 

```java
delimiter //
create procedure val_into()
begin
    # 定义两个变量存放name和age
    declare val_name varchar(32) default 'unknown';
    declare val_age int;
    # 查询表中id为1的name和age并放在定义的两个变量中
    select name,age into val_name,val_age from employee where id = 1;
    # 查询两个变量
    select val_name,val_age;
end //

call val_into() //
```



#### 3.2 用户变量

> 用户自定义用户变量，当前会话（连接）有效。与Java中的成员变量相似。
>
> - **语法：** `@val_name`
> - **注意：** 该用户变量不需要提前声明，使用即为声明。

```sql
delimiter //
create procedure val_user()
begin
    # 为用户变量赋值
    set @val_name = 'Lacy';
end //

# 调用函数
call val_user() //

# 查询该用户变量
select @val_name //
```



#### 3.3 会话变量

> 会话变量是由系统提供的，只在当前会话（连接）中有效。
>
> **语法：** `@@session.val_name`

```java
# 查看所有会话变量
show session variables;
# 查看指定的会话变量
select @@session.val_name;
# 修改指定的会话变量
set @@session.val_name = 0;
```

这里我获取了一下所有的会话变量，大概有500条会话变量的记录。等我们深入学习MySQL后，了解了各个会话变量值的作用，可以根据需求和场景来修改会话变量值。

```java
delimiter //
create procedure val_session()
begin
    # 查看会话变量
    show session variables;
end //

call val_session() //
```

![image-20200610112512964](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200610112514.png)



#### 3.4 全局变量

> 全局变量由系统提供，整个MySQL服务器内有效。
>
> **语法：** `@@global.val_name`

```java
# 查看全局变量中变量名有char的记录
show global variables like '%char%' //
# 查看全局变量character_set_client的值
select @@global.character_set_client //
```



#### 3.5 入参出参

> 入参出参的语法我们在文章开头已经提过了，但是没有演示，在这里我将演示一下入参出参的使用。
>
> **语法：** `in|out|inout 参数名 数据类型 , ...`
>
> `in`定义出参；`out`定义入参；`inout`定义出参和入参。
>
> 



*出参in* 

> 使用出参in时，就是需要我们传入参数，在这里可以对参入的参数加以改变。简单来说in只负责传入参数到存储过程中，类似Java中的形参。

```sql
delimiter //
create procedure val_in(in val_name varchar(32))
begin
    # 使用用户变量出参(为用户变量赋参数值)
    set @val_name1 = val_name;
end //

# 调用函数
call val_in('DK') //

# 查询该用户变量
select @val_name1 //
```



*入参out* 

> 在使用out时，需要传入一个参数。而这个参数相当于是返回值，可以通过调用、接收来获取这个参数的内容。简单来说out只负责作返回值。

```sql
delimiter //
# 创建一个入参和出参的存储过程
create procedure val_out(in val_id int,out val_name varchar(32))
begin
    # 传入参数val_id查询员工返回name值(查询出的name值用出参接收并返回)
    select name into val_name from employee where id = val_id;
end //

# 调用函数传入参数并声明传入一个用户变量
call val_out(1, @n) //

# 查询用户变量
select @n //
```



*入参出参inout* 

> inout关键字，就是把in和out合并成了一个关键字使用。被关键字修饰的参数既可以出参也可以入参。

```sql
delimiter //
create procedure val_inout(in val_name varchar(32), inout val_age int)
begin
    # 声明一个a变量
    declare a int;
    # 将传入的参数赋值给a变量
    set a = val_age;
    # 通过name查询age并返回val_age
    select age into val_age from employee where name = val_name;
    # 将传入的a与-和查询age结果字符串做拼接并查询出来(concat——拼接字符串)
    select concat(a, '-', val_age);
end //

# 声明一个用户变量并赋予参数为40
set @ages = '40' //
# 调用函数并传入参数值
call val_inout('Ziph', @ages) //
# 执行结果
# 40-18
```



### 四、存储过程中的流程控制

#### 4.1 if 条件判断（推荐）

> **扩展：** `timestampdiff(unit, exp1, exp2)`为exp2 - exp1得到的差值，而单位是unit。（常用于日期）
>
> **扩展例子：** `select timestampdiff(year,’2020-6-6‘,now()) from emp e where id = 1;`
>
> **解释扩展例子：** 查询员工表中id为1员工的年龄，exp2就可以为该员工的出生年月日，并以年为单位计算。

**语法：** 

```sql
IF 条件判断 THEN 结果
    [ELSEIF 条件判断 THEN 结果] ...
    [ELSE 结果]
END IF
```

**举例：** 传入所查询的id参数查询工资标准（s<=6000为低工资标准；6000<s<=10000为中工资标准；10000<s<=15000为中上工资标准；s>=15000为高工资标准）

```java
delimiter //
create procedure s_sql(in val_id int)
begin
    # 声明一个局部变量result存放工资标准结果
    declare result varchar(32);
    # 声明一个局部变量存放查询得到的工资
    declare s double;
    # 根据入参id查询工资
    select salary into s from employee where id = val_id;
    # if判断的使用
    if s <= 6000 then
        set result = '低工资标准';
    elseif s <= 10000 then
        set result = '中工资标准';
    elseif s <= 15000 then
        set result = '中上工资标准';
    else
        set result = '高工资标准';
    end if;
    # 查询工资标准结果
    select result;
end //

# 调用函数，传入参数
call s_sql(1);
```



#### 4.2 case条件判断

> 关于case语句，不仅仅在存储过程中可以使用，MySQL基础查询语句中也有用到过。相当于是Java中的switch语句。

**语法：** 

```java
# 语法一
CASE case_value
    WHEN when_value THEN 结果
    [WHEN when_value THEN 结果] ...
    [ELSE 结果]
END CASE
    
# 语法二(推荐语法)
CASE
    WHEN 条件判断 THEN 结果
    [WHEN 条件判断 THEN 结果] ...
    [ELSE 结果]
END CASE
```

**举例：** 

```sql
# 语法一
delimiter //
create procedure s_case(in val_id int)
begin
    # 声明一个局部变量result存放工资标准结果
    declare result varchar(32);
    # 声明一个局部变量存放查询得到的工资
    declare s double;
    # 根据入参id查询工资
    select salary into s from employee where id = val_id;
    case s
        when 6000 then set result = '低工资标准';
        when 10000 then set result = '中工资标准';
        when 15000 then set result = '中上工资标准';
        else set result = '高工资标准';
    end case;
    select result;
end //

call s_case(1);

# 语法二(推荐)
delimiter //
create procedure s_case(in val_id int)
begin
    # 声明一个局部变量result存放工资标准结果
    declare result varchar(32);
    # 声明一个局部变量存放查询得到的工资
    declare s double;
    # 根据入参id查询工资
    select salary into s from employee where id = val_id;
    case
        when s <= 6000 then set result = '低工资标准';
        when s <= 10000 then set result = '中工资标准';
        when s <= 15000 then set result = '中上工资标准';
        else set result = '高工资标准';
    end case;
    select result;
end //

call s_case(1);
```



#### 4.3 loop循环

> loop为死循环，需要手动退出循环，我们可以使用`leave`来退出循环
>
> 可以把leave看成Java中的break；与之对应的，就有`iterate`（继续循环）也可以看成Java的continue

**语法：** 

```sql
[别名:] LOOP
    循环语句
END LOOP [别名]
```

注意：别名和别名控制的是同一个标签。

**示例1：** 循环打印1~10（leave控制循环的退出）

注意：该loop循环为死循环，我们查的1~10数字是i，在死循环中设置了当大于等于10时停止循环，也就是说先后执行了10次该循环内的内容，结果查询了10次，生成了10个结果（1~10）。

```sql
delimiter //
create procedure s_loop()
begin
    # 声明计数器
    declare i int default 1;
    # 开始循环
    num:
    loop
        # 查询计数器记录的值
        select i;
        # 判断大于等于停止计数
        if i >= 10 then
            leave num;
        end if;
        # 计数器自增1
        set i = i + 1;
    # 结束循环
    end loop num;
end //

call s_loop();
```

**打印结果：** 

![image-20200610191639524](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200610191641.png)



**示例2：** 循环打印1~10（iterate和leave控制循环）

注意：这里我们使用字符串拼接计数器结果，而条件如果用iterate就必须时 i < 10 了！

```java
delimiter //
create procedure s_loop1()
begin
    # 声明变量i计数器
    declare i int default 1;
    # 声明字符串容器
    declare str varchar(256) default '1';
    # 开始循环
    num:
    loop
        # 计数器自增1
        set i = i + 1;
        # 字符串容器拼接计数器结果
        set str = concat(str, '-', i);
        # 计数器i如果小于10就继续执行
        if i < 10 then
            iterate num;
        end if;
        # 计数器i如果大于10就停止循环
        leave num;
    # 停止循环
    end loop num;
    # 查询字符串容器的拼接结果
    select str;
end //

call s_loop1();
```

![image-20200610193153512](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200610193155.png)



#### 4.4 repeat循环

> repeat循环类似Java中的do while循环，直到条件不满足才会结束循环。

**语法：** 

```java
[别名:] REPEAT
    循环语句
UNTIL 条件
END REPEAT [别名]
```

**示例：** 循环打印1~10

```sql
delimiter //
create procedure s_repeat()
begin
    declare i int default 1;
    declare str varchar(256) default '1';
    # 开始repeat循环
    num:
    repeat
        set i = i + 1;
        set str = concat(str, '-', i);
    # until 结束条件
    # end repeat 结束num 结束repeat循环
    until i >= 10 end repeat num;
    # 查询字符串拼接结果
    select str;
end //

call s_repeat();
```



#### 4.5 while循环

> while循环就与Java中的while循环很相似了。

**语法：** 

```sql
[别名] WHILE 条件 DO
    循环语句
END WHILE [别名]
```

**示例：** 循环打印1~10

```sql
delimiter //
create procedure s_while()
begin
    declare i int default 1;
    declare str varchar(256) default '1';
    # 开始while循环
    num:
	# 指定while循环结束条件
    while i < 10 do
        set i = i + 1;
        set str = concat(str, '+', i);
    # while循环结束
    end while num;
    # 查询while循环拼接字符串
    select str;
end //

call s_while();
```



#### 4.6 流程控制语句（继续、结束）

> 至于流程控制的继续和结束，我们在前面已经使用过了。这里再列举一下。

***leave：与Java中break;相似*** 

```sql
leave 标签;
```

***iterate：与Java中的continue;相似*** 

```sql
iterate 标签;
```



### 五、游标与handler

#### 5.1 游标

> 游标是可以得到某一个结果集并逐行处理数据。游标的逐行操作，导致了游标很少被使用！

**语法：** 

```sql
DECLARE 游标名 CURSOR FOR 查询语句
-- 打开语法
OPEN 游标名
-- 取值语法
FETCH 游标名 INTO var_name [, var_name] ...
-- 关闭语法
CLOSE 游标名
```

了解了游标的语法，我们开始使用游标。如下：

**示例：** 使用游标查询id、name和salary。

```sql
delimiter //
create procedure f()
begin
    declare val_id int;
    declare val_name varchar(32);
    declare val_salary double;

    # 声明游标
    declare emp_flag cursor for
    select id, name, salary from employee;

    # 打开
    open emp_flag;

    # 取值
    fetch emp_flag into val_id, val_name, val_salary;

    # 关闭
    close emp_flag;

    select val_id, val_name, val_salary;
end //

call f();
```

**执行结果：** 

![image-20200610203622749](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200610203624.png)

因为游标逐行操作的特点，导致我们只能使用游标来查询一行记录。怎么改善代码才可以实现查询所有记录呢？聪明的小伙伴想到了使用循环。对，我们试试使用一下循环。

```sql
delimiter //
create procedure f()
begin
    declare val_id int;
    declare val_name varchar(32);
    declare val_salary double;

    # 声明游标
    declare emp_flag cursor for
    select id, name, salary from employee;

    # 打开
    open emp_flag;

    # 使用循环取值
    c:loop
    	# 取值
        fetch emp_flag into val_id, val_name, val_salary;
    end loop;

    # 关闭
    close emp_flag;

    select val_id, val_name, val_salary;
end //

call f();
```

![image-20200610204034224](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200610204036.png)

我们使用循环之后，发现有一个问题，因为循环是死循环，我们不加结束循环的条件，游标会一直查询记录，当查到没有的记录的时候，就会抛出异常`1329：未获取到选择处理的行数`。

如果我们想办法指定结束循环的条件该怎么做呢？

这时候可以声明一个boolean类型的标记。如果为true时则查询结果集，为false时则结束循环。

```sql
delimiter //
create procedure f()
begin
    declare val_id int;
    declare val_name varchar(32);
    declare val_salary double;

    # 声明flag标记
    declare flag boolean default true;

    # 声明游标
    declare emp_flag cursor for
    select id, name, salary from employee;

    # 打开
    open emp_flag;

    # 使用循环取值
    c:loop
        fetch emp_flag into val_id, val_name, val_salary;
        # 如果标记为true则查询结果集
        if flag then
            select val_id, val_name, val_salary;
        # 如果标记为false则证明结果集查询完毕，停止死循环
        else
            leave c;
        end if;
    end loop;

    # 关闭
    close emp_flag;

    select val_id, val_name, val_salary;
end //

call f();
```

上述代码你会发现并没有写完，它留下了一个很严肃的问题。当flag = false时候可以结束循环。但是什么时候才让flag为false啊？

于是，MySQL为我们提供了一个`handler`句柄。它可以帮我们解决此疑惑。

> **handler句柄语法：** `declare continue handler for 异常 set flag = false;`

handler句柄可以用来捕获异常，也就是说在这个场景中当捕获到`1329：未获取到选择处理的行数`时，就将flag标记的值改为false。这样使用handler句柄就解决了结束循环的难题。让我们来试试吧！

**终极版示例：** 解决了多行查询以及结束循环问题。

```sql
delimiter //
create procedure f()
begin
    declare val_id int;
    declare val_name varchar(32);
    declare val_salary double;

    # 声明flag标记
    declare flag boolean default true;

    # 声明游标
    declare emp_flag cursor for
    select id, name, salary from employee;

    # 使用handler句柄来解决结束循环问题
    declare continue handler for 1329 set flag = false;

    # 打开
    open emp_flag;

    # 使用循环取值
    c:loop
        fetch emp_flag into val_id, val_name, val_salary;
        # 如果标记为true则查询结果集
        if flag then
            select val_id, val_name, val_salary;
        # 如果标记为false则证明结果集查询完毕，停止死循环
        else
            leave c;
        end if;
    end loop;

    # 关闭
    close emp_flag;

    select val_id, val_name, val_salary;
end //

call f();
```

**执行结果：** 

![image-20200610210925964](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200610210927.png)

在执行结果中，可以看出查询结果以多次查询的形式，分布显示到了每一个查询结果窗口中。

> **注意：** 在语法中，变量声明、游标声明、handler声明是必须按照先后顺序书写的，否则创建存储过程出错。



#### 5.2 handler句柄

**语法：** 

```sql
DECLARE handler操作 HANDLER
    FOR 情况列表...(比如：异常错误情况)
    操作语句
```

注意：异常情况可以写异常错误码、异常别名或SQLSTATE码。

**handler操作：** 

> - **CONTINUE：** 继续
> - **EXIT：** 退出
> - **UNDO：** 撤销

**异常情况列表：** 

> - mysql_error_code
> - SQLSTATE [VALUE] sqlstate_value
> - condition_name
> - SQLWARNING
> - NOT FOUND
> - SQLEXCEPTION

**注意：** MySQL中各种异常情况代码、错误码、别名和SQLSTATEM码可参考官方文档：

[https://dev.mysql.com/doc/refman/5.6/en/server-error-reference.html](https://dev.mysql.com/doc/refman/5.6/en/server-error-reference.html)

**写法示例：** 

```sql
	DECLARE exit HANDLER FOR SQLSTATE '3D000' set flag = false;
	DECLARE continue HANDLER FOR 1050 set flag = false;
	DECLARE continue HANDLER FOR not found set flag = false;
```



### 六、循环创建表

> **需求：** 创建下个月的每天对应的表，创建的表格式为：`comp_2020_06_01、comp_2020_06_02、...`
>
> **描述：** 我们需要用某个表记录很多数据，比如记录某某用户的搜索、购买行为（注意，此处是假设用数据库保存），当每天记录较多时，如果把所有数据都记录到一张表中太庞大，需要分表，我们的要求是，每天一张表，存当天的统计数据，就要求提前生产这些表——每月月底创建下一个月每天的表！

**预编译：** `PREPARE 数据库对象名 FROM 参数名`

**执行：** `EXECUTE 数据库对象名 [USING @var_name [, @var_name] ...]`

**通过数据库对象创建或删除表：** `{DEALLOCATE | DROP} PREPARE 数据库对象名`

**关于时间处理的语句：** 

```sql
-- EXTRACT(unit FROM date)  			 截取时间的指定位置值
-- DATE_ADD(date,INTERVAL expr unit)     日期运算
-- LAST_DAY(date) 					     获取日期的最后一天
-- YEAR(date)					         返回日期中的年
-- MONTH(date)   						 返回日期的月
-- DAYOFMONTH(date)   					 返回日
```

**代码：** 

```sql
-- 思路：循环构建表名 comp_2020_06_01 到 comp_2020_06_30；并执行create语句。
delimiter //
create procedure sp_create_table()
begin
	# 声明需要拼接表名的下一个月的年、月、日
	declare next_year int;
	declare next_month int;
	declare next_month_day int;
	
	# 声明下一个月的月和日的字符串
	declare next_month_str char(2);
	declare next_month_day_str char(2);
	
	# 声明需要处理每天的表名
	declare table_name_str char(10);
	
	# 声明需要拼接的1
	declare t_index int default 1;
	# declare create_table_sql varchar(200);
	
	# 获取下个月的年份
	set next_year = year(date_add(now(),INTERVAL 1 month));
	# 获取下个月是几月 
	set next_month = month(date_add(now(),INTERVAL 1 month));
	# 下个月最后一天是几号
	set next_month_day = dayofmonth(LAST_DAY(date_add(now(),INTERVAL 1 month)));
	
	# 如果下一个月月份小于10，就在月份的前面拼接一个0
	if next_month < 10
		then set next_month_str = concat('0',next_month);
	else
		# 如果月份大于10，不做任何操作
		set next_month_str = concat('',next_month);
	end if;
	
	# 循环操作(下个月的日大于等于1循环开始循环)
	while t_index <= next_month_day do
		
		# 如果t_index小于10就在前面拼接0
		if (t_index < 10)
			then set next_month_day_str = concat('0',t_index);
		else
			# 如果t_index大于10不做任何操作
			set next_month_day_str = concat('',t_index);
		end if;
		
		# 拼接标命字符串
		set table_name_str = concat(next_year,'_',next_month_str,'_',next_month_day_str);
		# 拼接create sql语句
		set @create_table_sql = concat(
					'create table comp_',
					table_name_str,
					'(`grade` INT(11) NULL,`losal` INT(11) NULL,`hisal` INT(11) NULL) COLLATE=\'utf8_general_ci\' ENGINE=InnoDB');
		# 预编译
		# 注意：FROM后面不能使用局部变量！
		prepare create_table_stmt FROM @create_table_sql;
		# 执行
		execute create_table_stmt;
		# 创建表
		DEALLOCATE prepare create_table_stmt;
		
		# t_index自增1
		set t_index = t_index + 1;
		
	end while;	
end//

# 调用函数
call sp_create_table()
```



### 七、其他

#### 7.1 characteristic

> 在MySQL存储过程中，如果没有显示的定义characteristic，它会隐式的定义一系列特性的默认值来创建存储过程。
>
> - LANGUAGE SQL
>   - 存储过程语言，默认是sql，说明存储过程中使用的是sql语言编写的，暂时只支持sql，后续可能会支持其他语言
> - NOT DETERMINISTIC
>   - 是否确定性的输入就是确定性的输出，默认是NOT DETERMINISTIC，只对于同样的输入，输出也是一样的，当前这个值还没有使用
> - CONTAINS SQL
>   - 提供子程序使用数据的内在信息，这些特征值目前提供给服务器，并没有根据这些特征值来约束过程实际使用数据的情况。有以下选择：
>     - CONTAINS SQL表示子程序不包含读或者写数据的语句
>     - NO SQL 表示子程序不包含sql
>     - READS SQL DATA 表示子程序包含读数据的语句，但是不包含写数据的语句
>     - MODIFIES SQL DATA 表示子程序包含写数据的语句。
>
> - SQL SECURITY DEFINER
>   - MySQL存储过程是通过指定SQL SECURITY子句指定执行存储过程的实际用户。所以次值用来指定存储过程是使用创建者的许可来执行，还是执行者的许可来执行，默认值是DEFINER
>     - DEFINER 创建者的身份来调用，对于当前用户来说：如果执行存储过程的权限，且创建者有访问表的权限，当前用户可以成功执行过程的调用的
>     - INVOKER 调用者的身份来执行，对于当前用户来说：如果执行存储过程的权限，以当前身份去访问表，如果当前身份没有访问表的权限，即便是有执行过程的权限，仍然是无法成功执行过程的调用的。
> - COMMENT ''
>   - 存储过程的注释性信息写在COMMENT里面，这里只能是单行文本，多行文本会被移除到回车换行等



#### 7.2 死循环处理

> 如有死循环处理，可以通过下面的命令查看并杀死（结束）

```sql
show processlist;
kill id;
```



#### 7.3 select语句中书写case

```sql
select 
	case
		when 条件判断 then 结果
		when 条件判断 then 结果
		else 结果
	end 别名,
	*
from 表名;
```



#### 7.4 复制表和数据

```sql
CREATE TABLE dept SELECT * FROM procedure_demo.dept;
CREATE TABLE emp SELECT * FROM procedure_demo.emp;
CREATE TABLE salgrade SELECT * FROM procedure_demo.salgrade;
```



#### 7.5 临时表

```sql
create temporary table 表名(
　　字段名 类型 [约束],
　　name varchar(20) 
)Engine=InnoDB default charset utf8;

-- 需求：按照部门名称查询员工，通过select查看员工的编号、姓名、薪资。（注意，此处仅仅演示游标用法）
delimiter //
create procedure sp_create_table02(in dept_name varchar(32))
begin
	declare emp_no int;
	declare emp_name varchar(32);
	declare emp_sal decimal(7,2);
	declare exit_flag int default 0;
	
	declare emp_cursor cursor for
		select e.empno,e.ename,e.sal
		from emp e inner join dept d on e.deptno = d.deptno where d.dname = dept_name;
	
	declare continue handler for not found set exit_flag = 1;
	
	-- 创建临时表收集数据
	CREATE temporary TABLE `temp_table_emp` (
		`empno` INT(11) NOT NULL COMMENT '员工编号',
		`ename` VARCHAR(32) NULL COMMENT '员工姓名' COLLATE 'utf8_general_ci',
		`sal` DECIMAL(7,2) NOT NULL DEFAULT '0.00' COMMENT '薪资',
		PRIMARY KEY (`empno`) USING BTREE
	)
	COLLATE='utf8_general_ci'
	ENGINE=InnoDB;	
	
	open emp_cursor;
	
	c_loop:loop
		fetch emp_cursor into emp_no,emp_name,emp_sal;
		
		
		if exit_flag != 1 then
			insert into temp_table_emp values(emp_no,emp_name,emp_sal); 
		else
			leave c_loop;
		end if;
		
	end loop c_loop;
	
	select * from temp_table_emp;
	
	select @sex_res; -- 仅仅是看一下会不会执行到
	close emp_cursor;
	
end//

call sp_create_table02('RESEARCH');
```

