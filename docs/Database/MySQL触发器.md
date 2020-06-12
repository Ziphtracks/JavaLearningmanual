* [MySQL触发器](#mysql%E8%A7%A6%E5%8F%91%E5%99%A8)
    * [一、什么是触发器](#%E4%B8%80%E4%BB%80%E4%B9%88%E6%98%AF%E8%A7%A6%E5%8F%91%E5%99%A8)
    * [二、触发器的作用](#%E4%BA%8C%E8%A7%A6%E5%8F%91%E5%99%A8%E7%9A%84%E4%BD%9C%E7%94%A8)
    * [三、触发器创建的四要素](#%E4%B8%89%E8%A7%A6%E5%8F%91%E5%99%A8%E5%88%9B%E5%BB%BA%E7%9A%84%E5%9B%9B%E8%A6%81%E7%B4%A0)
    * [四、触发器的使用语法](#%E5%9B%9B%E8%A7%A6%E5%8F%91%E5%99%A8%E7%9A%84%E4%BD%BF%E7%94%A8%E8%AF%AD%E6%B3%95)
    * [五、触发器的基本使用](#%E4%BA%94%E8%A7%A6%E5%8F%91%E5%99%A8%E7%9A%84%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8)
      * [5\.1 基本使用步骤](#51-%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8%E6%AD%A5%E9%AA%A4)
      * [5\.2 查看和删除已有的触发器](#52-%E6%9F%A5%E7%9C%8B%E5%92%8C%E5%88%A0%E9%99%A4%E5%B7%B2%E6%9C%89%E7%9A%84%E8%A7%A6%E5%8F%91%E5%99%A8)
      * [5\.3 for each row](#53-for-each-row)
    * [六、订单与库存关系场景](#%E5%85%AD%E8%AE%A2%E5%8D%95%E4%B8%8E%E5%BA%93%E5%AD%98%E5%85%B3%E7%B3%BB%E5%9C%BA%E6%99%AF)
    * [七、触发器中引用行变量](#%E4%B8%83%E8%A7%A6%E5%8F%91%E5%99%A8%E4%B8%AD%E5%BC%95%E7%94%A8%E8%A1%8C%E5%8F%98%E9%87%8F)
      * [7\.1 old和new对象语法](#71-old%E5%92%8Cnew%E5%AF%B9%E8%B1%A1%E8%AF%AD%E6%B3%95)
      * [7\.2 old和new对象应用](#72-old%E5%92%8Cnew%E5%AF%B9%E8%B1%A1%E5%BA%94%E7%94%A8)
    * [八、综合案例](#%E5%85%AB%E7%BB%BC%E5%90%88%E6%A1%88%E4%BE%8B)
      * [8\.1 创建表、插入表数据](#81-%E5%88%9B%E5%BB%BA%E8%A1%A8%E6%8F%92%E5%85%A5%E8%A1%A8%E6%95%B0%E6%8D%AE)
      * [8\.2 添加学生案例](#82-%E6%B7%BB%E5%8A%A0%E5%AD%A6%E7%94%9F%E6%A1%88%E4%BE%8B)
      * [8\.3 删除学生案例](#83-%E5%88%A0%E9%99%A4%E5%AD%A6%E7%94%9F%E6%A1%88%E4%BE%8B)
      * [8\.4 删除班级案例](#84-%E5%88%A0%E9%99%A4%E7%8F%AD%E7%BA%A7%E6%A1%88%E4%BE%8B)
      * [8\.5 触发器冲突问题](#85-%E8%A7%A6%E5%8F%91%E5%99%A8%E5%86%B2%E7%AA%81%E9%97%AE%E9%A2%98)
    * [九、触发器性能和使用分析（必读）](#%E4%B9%9D%E8%A7%A6%E5%8F%91%E5%99%A8%E6%80%A7%E8%83%BD%E5%92%8C%E4%BD%BF%E7%94%A8%E5%88%86%E6%9E%90%E5%BF%85%E8%AF%BB)

# MySQL触发器

------

### 一、什么是触发器

> 触发器（trigger）是MySQL提供给程序员和数据分析员来保证数据完整性的一种方法，它是与表事件相关的特殊的存储过程，它的执行不是由程序调用，也不是手工启动，而是由事件来触发，比如当对一个表进行操作（insert，delete， update）时就会激活它执行。简单理解为：你执行一条sql语句，这条sql语句的执行会自动去触发执行其他的sql语句。



### 二、触发器的作用

> - 可在写入数据表前，强制检验或转换数据。
> - 触发器发生错误时，异动的结果会被撤销。
> - 部分数据库管理系统可以针对数据定义语言（DDL）使用触发器，称为DDL触发器。
> - 可依照特定的情况，替换异动的指令 (INSTEAD OF)。



### 三、触发器创建的四要素

> - 监视地点（table）
> - 监视事件（insert、update、delete）
> - 触发时间（after、before）
> - 触发事件（insert、update、delete）



### 四、触发器的使用语法

**语法：** 

> **before/after：** 触发器是在增删改之前执行，还是之后执行
>
> **delete/insert/update：** 触发器由哪些行为触发（增、删、改）
>
> **on 表名：** 触发器监视哪张表的（增、删、改）操作
>
> **触发SQL代码块：** 执行触发器包含的SQL语句

```sql
CREATE TRIGGER 触发器名
BEFORE|AFTER DELETE|INSERT|UPDATE
ON 表名 FOR EACH ROW
BEGIN
触发SQL代码块;
END;
```

**注意：** 触发器也是存储过程程序的一种，而触发器内部的执行SQL语句是可以多行操作的，所以在MySQL的存储过程程序中，要定义结束符。

> 如果MySQL存储过程不了解的小伙伴，可以参考此文[**面向MySQL存储过程编程**](https://github.com/Ziphtracks/JavaLearningmanual/blob/master/docs/Database/MySQL%E5%AD%98%E5%82%A8%E8%BF%87%E7%A8%8B.md)，文章中详细讲解了MySQL存储过程的优势和语法等等，相信你会在其中得以收获。

```sql
# 设置MySQL执行结束标志，默认为;
delimiter //
```



### 五、触发器的基本使用

#### 5.1 基本使用步骤

首先，我先展示一下创建的两张表，因为创建的表很简单，这里我没有提供库表操作的SQL命令。

*tb_class* 

![image-20200611205404311](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200611205407.png)

*employee* 

![image-20200611205435284](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200611205437.png)

其次，创建了一个含有update操作的存储过程

```sql
delimiter //
create procedure update_emp(in i int, in p int)
begin
    update employee set phone = p where id = i;
end //
```

再创建一个触发器

> **分析：** 触发器名称为t1，触发时间为after，监视动作为update，监视表为employee表。汇总一起解释这个触发器就是：创建一个触发器名称为t1的触发器，触发器监视employee表执行update（更新）操作后，就开始执行触发器内部SQL语句`update tb_class set num = num + 1 where id = 1;`。
>
> 简单来说就是一个监视一个表的增、删、改操作并设置操作前后时间，在设置时间的范围内对另外一个表进行其他操作。
>
> 如果你学到这里还是一知半解，后面我会讲解一个订单与库存的数据关系，到那时候你就会明白了！

```sql
delimiter //
# 创建触发器，触发器名称为t1
create trigger t1
	# 触发器执行在update操作之后
    after update
    # 监视employee表
    on employee
    for each row
begin
	# 触发执行的SQL语句
    update tb_class set num = num + 1 where id = 1;
end //
```

最后调用函数，并查看、分析结果

```sql
call update_emp(2, 110);
```

**触发器在此场景的作用分析** 

当employee表发生update操作时，触发器就对tb_class表中的num值做修改。

执行结果发现，我们在使用函数将employee表中id为2员工的phone修改为110后，触发器监视到employee表中发生了update更新操作，就执行了内部SQL语句，也就是将tb_class表中id为1的num值自增1。

![image-20200611213411229](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200611213413.png)

![image-20200611213432459](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200611213433.png)



#### 5.2 查看和删除已有的触发器

> **查看已有触发器：** `show triggers`
>
> **删除已有触发器：** `drop trigger 触发器名称`



#### 5.3 for each row

> 这里扩展，在oracle触发器中，触发器分为行触发器和语句触发器。也就是说，假设你监视一个修改操作，它修改了1000行代码，在Oracle中触发器会触发1000次。
>
> 在oracle中，for each row如果不写，无论update语句一次影响了多少行，都只执行一次触发事件。
>
> 而MySQL中，不支持语句级触发器，所以在MySQL中并不需要在意。



### 六、订单与库存关系场景

> **订单与库存的关系：** 用户下订单，意味着创建该商品订单，该商品订单中的商品数量为1，库存中的该商品数量-1。往往订单表和库存表中的数量是同时操作的，所以我们这里可以用触发器。
>
> **触发器应用：** 关于订单表，下订单肯定是涉及到insert插入数据数量的操作。我们可以创建一个监视订单表insert操作后执行库存表数量-1的触发器来完成订单与库存表的同时修改。

创建表，并在表中添加几条数据：

```sql
create table goods(
  gid int,
  name varchar(20),
  num smallint
);
create table ord(
  oid int,
  gid int,
  much smallint
);
insert into goods values(1,'cat',40);
insert into goods values(2,'dog',63);
insert into goods values(3,'pig',87);
```

创建触发器

```sql
create trigger t1 
after
insert
on ord
for each row
begin
 update goods set num = num - 1 where gid = 1;
end$
```

该触发器意为，用户不管下什么订单，都会把商品编号为1的商品的库存减去1。



### 七、触发器中引用行变量

#### 7.1 old和new对象语法

> - 在触发目标上执行insert操作后会有一个新行，如果在触发事件中需要用到这个新行的变量，可以用new关键字表示
> - 在触发目标上执行delete操作后会有一个旧行，如果在触发事件中需要用到这个旧行的变量，可以用old关键字表示
> - 在触发目标上执行update操作后原纪录是旧行，新记录是新行，可以使用new和old关键字来分别操作

| 触发语句 | old              | new            |
| -------- | ---------------- | -------------- |
| insert   | 所有字段都为空   | 将要插入的数据 |
| update   | 更新以前该行的值 | 更新后的值     |
| delete   | 删除以前该行的值 | 所有字段都为空 |



#### 7.2 old和new对象应用

> 关于old和new对象的应用，我在这里没有展开演示。只是将第八章的综合案例结合了old和new对象实现。综合案例中详细讲解了MySQL触发器的使用！



### 八、综合案例

#### 8.1 创建表、插入表数据

> tb_class为幼儿园班级表，其中cid为唯一主键，cname为大、中、小班班级标准，stuNo为班级标准内的学生个数。插入大、中、小班标准，初始化两名学生在大班。
>
> tb_stu为幼儿园学生表，其中sid为唯一主键，sname为学生性名，cno为所在班级标准的外键。插入两条数据并初始化这两名学生在大班，因为我们在班级表中初始化了两名学生在大班嘛，所以要做此操作。

```sql
create table tb_class
(
    cid   int auto_increment
        primary key,
    cname varchar(32) not null,
    stuNo int         not null
);

INSERT INTO temp.tb_class (cname, stuNo) VALUES ('大班', 2)
INSERT INTO temp.tb_class (cname, stuNo) VALUES ('中班', 0)
INSERT INTO temp.tb_class (cname, stuNo) VALUES ('小班', 0)

create table tb_stu
(
    sid   int auto_increment
        primary key,
    sname varchar(32) not null,
    cno   int         not null
);

INSERT INTO temp.tb_stu (sname, cno) VALUES ('Ziph', 1)
INSERT INTO temp.tb_stu (sname, cno) VALUES ('Join', 1)
```



#### 8.2 添加学生案例

> 在此表结构中，如果一位新同学来到学校学习，意味着某一个班级中会多出一名学生。假设Marry同学去小班学习，其表结构的变化为：tb_stu表中添加一条Marry的记录（注：cno = 3），tb_class表中小班记录的stuNo = 0修改为stuNo = 1

先创建一个添加学生的存储过程

```sql
# 添加学生函数
delimiter //
# 创建存储过程，传入学生性名和班级参数
create procedure add_stu(in in_sname varchar(32), in in_cno int)
begin
    # 插入记录
    insert into tb_stu (sname, cno) values (in_sname, in_cno);
end //
```

创建触发器

*注意：* 在更新学生数量SQL语句中，有一段cid = new.cno的SQL语句。这里我解释一下，new代表产生的新对象，将cid主键与添加Marry记录后产生的新纪录对象的cno外键关联。（因为insert后产生的是新纪录对象嘛，所以用new）

```sql
# 触发器
# 创建名称为t_add_stu的触发器
create trigger t_add_stu
    # 设置在insert操作之后触发
    after
        insert
    # 监视tb_stu的insert操作
    on tb_stu
    for each row
begin
    # 更新学生数量(cid为tb_class表中主键，cno为tb_stu表中外键)
    update tb_class set stuNo = stuNo + 1 where cid = new.cno;
end //
```

声明回结束符

```sql
delimiter ;
```

插入Marry学生记录到数据库表中

```sql
call add_stu('Marry', 3);
```

执行结果就是当插入Marry学生记录的同时也修改了班级表中的小班学生数量。



#### 8.3 删除学生案例

> 删除学生与添加学生十分相似，删除学生相当于是添加学生的逆过程。如果以为学生退学了或者读完了幼儿园离开学校了，就意味着班级中少了一位学生。假设Join同学读完了大班结束了幼儿园阶段的学习将要幼儿园去上小学，其表结构变化为：tb_stu删除Join这条记录（注：sid = 2），tb_class将修改Join所在大班班级级别的stuNo，即stuNo = stuNo - 1

先创建一个删除学生的存储过程

```sql
# 删除学生
delimiter //
create procedure delete_stu(in in_sid int)
begin
    delete from tb_stu where sid = in_sid;
end //
```

创建触发器

*注意：* 在更新学生数量的时候，书写了此段SQL语句`cid = OLD.cno`。该语句使用old对象，意为Join学生的记录没有了，但是使用触发器同步修改tb_class表中的大班学生数量还需要用到关联Join学生所在记录的外键cno，使用old来句点出来的cno就是删除之前Join那一条学生记录的cno。（如果我们用new，该记录还存在吗？该记录的cno还存在吗？答案是都不存在了！）

```sql
# 触发器
# 创建触发器名称为t_delete_stu的触发器
create trigger t_delete_stu
    # 设置在delete操作之后触发
    after
        delete
    # 监视tb_stu表的delete操作
    on tb_stu
    for each row
begin
    # 更新学生数量(cid为tb_class表中主键，cno为tb_stu表中外键)
    update tb_class set stuNo = stuNo - 1 where cid = OLD.cno;
end //
```

声明回结束符

```sql
delimiter ;
```

删除Jion学生记录

```sql
call delete_stu(2);
```

执行结果为Join记录在数据库的表中消失了，而大班的学生数量也减掉了1。



#### 8.4 删除班级案例

> 因为我已经详细讲解了添加学生与删除学生，所以删除班级我就不再作过多的赘述了。那就直接说核心内容吧。删除一个班级级别比如：删除小班之前要把小班内的所有学生也被删除了，因为两个表是主外键关联的。如果只删除了小班，而没有删除小班内的所有学生，那么原小班内的所有学生现在属于哪个班级呢，就不知道了吧！所以要在删除小班之前删除小班内的所有学生。

```sql
# 创建删除班级的存储过程
delimiter //
create procedure delete_class(in in_cid int)
begin
    delete from tb_class where cid = in_cid;
end //

# 创建触发器名称为t_delete_class的触发器
create trigger t_delete_class
    # 作用在delete操作之前
    before
        delete
    # 监视tb_class表中的delete操作
    on tb_class
    for each row
begin
    # 同时删除所有该原班级cid的所有学生
    delete from tb_stu where cno = OLD.cid;
end //

# 将结束符声明为;
delimiter ;

# 删除小班班级别
call delete_class(3);
```

执行结果为既删除了小班，又删除小班内的所有学生。



#### 8.5 触发器冲突问题

> 触发器冲突问题其实就是关联问题。为什么这么说呢？就说以下刚才这三个案例中出现的触发器冲突问题。

如果我们在写触发器的时候，将添加学生、删除学生和删除班级的触发器都写在一个查询模板中。你会发现当你在删除班级的时候，会报错。显示如下信息：

![image-20200612004546204](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200612004548.png)

这是为什么呢？

仔细想想，我们将在案例中有两个是同一个表中的删除触发器。删除班级的触发器中定义的是删除班级时触发删除学生，而删除学生的触发器中定义的是班级人数减一。你发现了没，触发器被连着触发了。如下变化：

![image-20200612005312835](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200612005315.png)

我们通过删除班级案例了解了，删除班级之前需要把班级内所有学生删除掉。正因为如此，我们在删除班级之前已经把所有学生都删除了，导致在删除学生的时候触发了班级人数减一的触发器，该触发器在执行过程中修改了已经被删除班级的学生人数。这问题就出在这里了，班级已经删除了，怎么修改一个本就没有的班级内的人数呢？对吧！

**解决触发器冲突** 

为解决这个场景的触发器冲突问题，我们只能取舍一个触发器。于是，就通过命令删除了删除学生案例中使用的那个触发器，删除后删除班级就可以成功执行触发了！

```sql
drop trigger t_delete_stu;
```

**注意：** 由于存在触发器冲突问题，我们在实际开发中需要认真考量定义触发器！



### 九、触发器性能和使用分析（必读）

> 各大论坛等等，相信在大家的文章中都不推荐使用触发器，而是推荐使用存储过程程序，这是为什么呢？
>
> 首先，存储过程程序分为存储过程、储存过程函数和触发器。也就是说这三种都是存储过程的使用都是存储过程的表现形式。
>
> 如果场景在数据量和并发量都很大的情况下，使用触发器、存储过程再加上几个事务等等，很容易出现死锁。而且在使用触发器的时候，也会出现冲突，出现问题时，我们需要追溯的代码就需要从一个触发器到另一个触发器......从而影响开发效率。从性能上看，触发器也是存储过程程序的一种，它也并没有展现出多少性能上的优势。由于触发器写起来比较隐蔽，容易被开发人员忽略，而且隐式调用触发器不易于排除依赖，对后期维护不是很友好！
>
> 所以在开发中，触发器是很少用到的。那为什么我还花时间大篇幅的讲解MySQL触发器呢？原因很简单，是因为需要扩展自己的知识储备。开发中的使用问题和是否被大家摒弃，不是你拒绝学习知识的理由。之所以存在就有它存在的道理，我们在学习的道路中不断扩充自己的知识储备即可。
>
> 假如有一天你的同事聊起触发器，你也能和他们聊聊你对触发器的见解是哈？如果你根据从未了解过此知识呢？那性质就不一样了，相信大家都懂吧！