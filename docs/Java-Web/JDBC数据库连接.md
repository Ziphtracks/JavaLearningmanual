- [ JDBC数据库连接操作](#head1)
	- [ 一、引言](#head2)
		- [1.1 如何操作数据](#head3)
		- [1.2 实际开发中，会采用客户端操作数据库吗？](#head4)
	- [二、JDBC（Java DataBase Connectivity）](#head5)
		- [2.1 什么是JDBC？](#head6)
		- [2.2 JDBC核心思想](#head7)
			- [2.2.1 MySQL数据库驱动](#head8)
			- [2.2.2 JDBC API](#head9)
		- [2.3 环境搭建](#head10)
	- [ 三、JDBC开发步骤【重点】](#head11)
		- [3.1 注册驱动](#head12)
		- [3.2 连接数据库](#head13)
		- [3.3 获取发送SQL的对象](#head14)
		- [3.4 执行SQL语句](#head15)
		- [3.5 处理结果](#head16)
		- [3.6 释放资源](#head17)
		- [3.7 综合案例](#head18)
	- [四、 ResultSet(结果集)](#head19)
		- [4.1 接收结果集](#head20)
		- [4.2 遍历ResultSet中的数据](#head21)
			- [4.2.1 遍历方法](#head22)
		- [4.3 综合案例](#head23)
			- [4.3.1 根据列的名称获取](#head24)
			- [4.3.2 根据列的下标获取](#head25)
	- [ 五、常见错误](#head26)
	- [ 六、综合案例【登录】](#head27)
		- [6.1 创建表](#head28)
		- [6.2 实现登录](#head29)
	- [ 七、SQL注入问题](#head30)
		- [7.1 什么是SQL注入](#head31)
		- [ 7.2如何避免SQL注入](#head32)
	- [八、 PreparedStatement【重点】](#head33)
		- [8.1 PreparedStatement的应用](#head34)
			- [8.1.1 参数标记](#head35)
			- [8.1.2 动态参数绑定](#head36)
			- [8.1.3 解决7.1遗留下来的SQL注入问题](#head37)
	- [ 九、综合练习](#head38)
		- [ 9.1创建数据库、表](#head39)
		- [9.2 创建项目通过JDBC实现功能](#head40)
	- [ 十、封装工具类](#head41)
		- [10.1 重用性方案](#head42)
			- [10.1.1 工具实现](#head43)
		- [10.2 跨平台方案](#head44)
			- [10.2.1 实现](#head45)
	- [ 十一、ORM](#head46)
		- [11.1 ORM 实体类(entity)：零散数据的载体](#head47)
			- [11.1.1 ORM应用](#head48)
	- [十二、DAO（Data Access Object）](#head49)
	- [ 十三、日期类型](#head50)
		- [13.1 日期格式化工具](#head51)
		- [13.2 日期工具类 DateUtils](#head52)
			- [13.2.1 转换流程、测试](#head53)
	- [ 十四、连接池](#head54)
		- [14.1 自定义连接池](#head55)
		- [14.2 Druid（德鲁伊）](#head56)
			- [14.2.1 Druid配置](#head57)
			- [14.2.2 database.properties 文件配置](#head58)
			- [14.2.3 连接池工具类](#head59)
			- [14.2.4 测试连接池](#head60)
	- [ 十五、Service(Biz/Business)](#head61)
		- [15.1 业务](#head62)
		- [15.2 业务层的实现](#head63)
		- [15.3 复用](#head64)
		- [15.4 转账案例](#head65)
		- [15.5 解决转账事务问题](#head66)
	- [ 十六、ThreadLocal](#head67)
		- [16.1 ThreadLocal](#head68)
		- [16.2 ThreadLocal事务控制优化](#head69)
			- [16.2.1 DBUtils封装事务控制](#head70)
			- [16.1.1 数据库完整版工具类（封装了以前所有的优化，详细解析看注释）](#head71)
	- [ 十七、三层架构设计](#head72)
		- [17.1 三层架构设计思想](#head73)
		- [17.2 三层架构设计的好处与建议](#head74)
	- [ 十八、工具类型的封装及普适性泛型工具](#head75)
		- [18.1 封装DML方法](#head76)
		- [18.2 封装DQL方法](#head77)
		- [18.3 最终版Account项目（包含所有工具、功能以及优化）](#head78)
			- [ 项目分层](#head79)
			- [ Properties配置文件](#head80)
			- [ entity](#head81)
			- [ DateUtils](#head82)
			- [ DBUtils](#head83)
			- [ DaoUtils](#head84)
			- [ AccountDao](#head85)
			- [ AccountDaoImpl](#head86)
			- [ AccountService](#head87)
			- [ AccountServiceImpl](#head88)
			- [ RowMapper](#head89)
			- [ AccountRowMapper](#head90)
			- [ TestDemo](#head91)
	- [ 十九、Apache的DbUtils使用](#head92)
		- [19.1 DbUtils简介](#head93)
			- [19.1.1 DbUtils主要包含](#head94)
		- [19.2 DbUtils的使用步骤](#head95)
			- [19.2.1 代码实现](#head96)
			- [ DBUtils工具类](#head97)
			- [UserDaoImpl 数据访问对象](#head98)
# <span id="head1"> JDBC数据库连接操作</span>



### <span id="head2"> 一、引言</span>

------

#### <span id="head3">1.1 如何操作数据</span>

> 使用客户端工具访问数据库，需要手工建立链接，输入用户名和密码登录，编写SQL语句，点击执行，查看操作结果（结果集或受影响行数）。



#### <span id="head4">1.2 实际开发中，会采用客户端操作数据库吗？</span>

> 在实际开发过程中，当用户的数据发生改变时，不可能通过客户端操作执行SQL语句，因为操作量过大！无法保证效率和正确性



### <span id="head5">二、JDBC（Java DataBase Connectivity）</span>

------

#### <span id="head6">2.1 什么是JDBC？</span>

> JDBC（Java DataBase Connectivity） Java连接数据库，可以使用Java语言连接数据库完成CRUD操作



#### <span id="head7">2.2 JDBC核心思想</span>

> Java中定义了访问数据库的接口，可以为多种关系型数据库提供统一的访问方式。
>
> 由数据库厂商提供驱动实现类(Driver数据库驱动)



![img](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200529123649.png) 



##### <span id="head8">2.2.1 MySQL数据库驱动</span>

> - mysql-connector-java-5.1.X 适用于5.X版本
> - mysql-connector-java-8.0.X 适用于8.X版本



##### <span id="head9">2.2.2 JDBC API</span>

> JDBC 是由多个接口和类进行功能实现

| 类型      | 全限定名               | 简介                                                         |
| --------- | ---------------------- | ------------------------------------------------------------ |
| class     | java.sql.DriverManager | 管理多个数据库驱动类，提供了获取数据库连接的方法             |
| interface | java.sql.Connection    | 代表一个数据库连接(当Connection不是NULL时，表示已连接一个数据库) |
| interface | java.sql.Statement     | 发送SQL语句到数据库的工具                                    |
| interface | java.sql.ResultSet     | 保存SQL查询语句的结果数据(结果集)                            |
| class     | java.sql.SQLException  | 处理数据库应用程序时所发生的异常                             |



#### <span id="head10">2.3 环境搭建</span>

> 1. 在项目下新建 lib 文件夹，用于存放 jar 文件
> 2. 将MySQL驱动文件mysql-connector-java-5.1.25-bin.jar 复制到项目的lib文件夹中
> 3. 选中lib文件夹 右键选择 add as library，点击OK



### <span id="head11"> 三、JDBC开发步骤【重点】</span>



#### <span id="head12">3.1 注册驱动</span>

> 使用**Class.forName("com.mysql.jdbc.Driver");** 手动加载字节码文件到JVM中

```java
Class.forName("com.mysql.jdbc.Driver");
```



#### <span id="head13">3.2 连接数据库</span>

> - 通过DriverManager.getConnection(url,user,password);获得数据库连接对象
>   - URL:jdbc:mysql://localhost:3306/database
>   - user:root
>   - password:1234
> - 注意：如果设置字符编码集需要在数据库后加?useUnicode=true&characterEncoding=utf8

```java
Connection connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/database?useUnicode=true&characterEncoding=utf8","root","123456");
```

- URL(Uniform Resource Locator)统一资源定位符：由jdbc协议、mysql协议、IP、端口、SID（程序实例名称）组成



#### <span id="head14">3.3 获取发送SQL的对象</span>

> 通过Connection对象获得Statement对象，用于对数据库进行通用访问的

```java
Statement statement = connection.createStatement();
```



#### <span id="head15">3.4 执行SQL语句</span>

> 编写SQL语句，并执行，接收执行后的结果

```java
int result = statement.executeUpdate("update stu set student_name='Ziph',sex='男' where student_id = 'class1'");
```

- 注意：在编写DML语句时，一定要注意字符串参数的符号是单引号  '值'
- DML语句：增、删、改时，执行的结果是受影响行数(int类型)。
- DQL语句：查询时，返回的是数据结果集(ResultSet结果集)



#### <span id="head16">3.5 处理结果</span>

> 接收并处理操作结果

```java
if(result > 0){
	System.out.println("执行成功！");
} else {
System.out.println("执行失败！");
}
```

- 受影响行数：逻辑判断，方法返回
- 查询结果集：迭代、依次获取



#### <span id="head17">3.6 释放资源</span>

> 遵循的是**先开后关**的原则，释放过程中用到的所有资源对象

```java
statement.close();
connection.close();
```



#### <span id="head18">3.7 综合案例</span>

> 综合核心六步，实现增删改

```java
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;

public class TestInsert {
public static void main(String[] args) throws ClassNotFoundException, SQLException {
//1.加载驱动，将驱动字节码文件加载到JVM中
Class.forName("com.mysql.jdbc.Driver");
//2.连接数据库
String url = "jdbc:mysql://localhost:3306/companydb?useUnicode=true&characterEncoding=utf8";//数据库连接地址
String user = "root";//用户名
String password = "123456";//密码
Connection connection = DriverManager.getConnection(url, user, password);
//3.获取发送SQL语句的对象
Statement statement = connection.createStatement();
//4.编写SQL语句，并执行SQL语句
String sql = "insert into user (userName, password, address, phone) values ('Ziph', '123456', '河北', '11111111111')";
int result = statement.executeUpdate(sql);
//5.处理结果
if (result > 0) {
System.out.println("添加成功！");
} else {
System.out.println("添加失败！");
}
//6.释放资源，先开后关
statement.close();
connection.close();
}
}
```



### <span id="head19">四、 ResultSet(结果集)</span>

------

> 在执行查询SQL后，存放查询到的结果集数据



#### <span id="head20">4.1 接收结果集</span>

> ResultSet resultSet = statement.executeQuery(sql)

```java
ResultSet resultSet = statement.executeQuery("SELECT * FROM user");
```



#### <span id="head21">4.2 遍历ResultSet中的数据</span>

> ResultSet以表(Table)结构进行临时结果的存储，需要通过JDBC API将其中的数据进行依次获取
>
> - 数据行指针（resultSet.next()）：初始位置在第一行数据前，每调用一次boolean返回值类型的next()方法，ResultSet中指针向下移动一行，结果为true，表示当前行有数据
> - resultSet.getXxx("列名"); 根据列名获得数据
> - resultSet.getXxx(整数下标); 代表根据列的编号顺序获得！从1开始

```java
boolean next() throws SQLException;//判断resultSet结果集中下一行是否有数据(注意：返回值boolean类型)
```



##### <span id="head22">4.2.1 遍历方法</span>

```java
int getInt(int columnIndex) throws SQLException;//获得当前行的第N列的int值
int getInt(String columnLabel) throws SQLException;//获得当前行columnLabel列的int值
```

- 注意：列的编号从1开始



#### <span id="head23">4.3 综合案例</span>

> 对user表所有的数据进行遍历



##### <span id="head24">4.3.1 根据列的名称获取</span>

```java
import java.sql.*;

public class TestSelect {
public static void main(String[] args) throws ClassNotFoundException, SQLException {
//1.加载驱动
Class.forName("com.mysql.jdbc.Driver");
//2.获取连接对象
Connection connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/companydb?useUnicode=true&characterEncoding=utf8", "root", "Mylifes1110");
//3.获取执行SQL的对象
Statement statement = connection.createStatement();
//4.编写SQL语句并执行SQL语句
String sql = "select userId, userName, password, address, phone from user";
ResultSet resultSet = statement.executeQuery(sql);
//5.处理结果（结果集）
while (resultSet.next()) {//判断结果集中是否有下一行
//根据列名获取当前行每一列的数据
int userId = resultSet.getInt("userId");
String userName = resultSet.getString("userName");
String password = resultSet.getString("password");
String address = resultSet.getString("address");
String phone = resultSet.getString("phone");
System.out.println(userId + "\t" + userName + "\t" + password + "\t" + address + "\t" + phone);
}
//6.释放资源
resultSet.close();
statement.close();
connection.close();
}
}
```



##### <span id="head25">4.3.2 根据列的下标获取</span>

```java
		//5.处理结果（结果集）
while (resultSet.next()) {//判断结果集中是否有下一行
//根据列的编号获取当前行每一列的数据
int userId = resultSet.getInt(1);
String userName = resultSet.getString(2);
String password = resultSet.getString(3);
String address = resultSet.getString(4);
String phone = resultSet.getString(5);
System.out.println(userId + "\t" + userName + "\t" + password + "\t" + address + "\t" + phone);
}
```



### <span id="head26"> 五、常见错误</span>

> - java.lang.ClassNotFoundException  找不到类(类名书写错误、没有导入jar包)
> - com.mysql.jdbc.exceptions.jdbc.MySQLSyntaxErrorException 与SQL语句相关的错误（表名列名书写错误、约束错误、插入的值是String类型，但是没有加单引号）建议：在客户端工具中测试sql语句后，再粘贴到代码中来
> - com.mysql.jdbc.exceptions.jdbc.MySQLIntegrityConstraintViolationException: Duplicate entry '1' for key 'PRIMARY'  原因：主键值已存在！更改要插入的主键值
> - com.mysql.jdbc.exceptions.jdbc.MySQLSyntaxErrorException:Unknown column 'password' in 
>   - 可能输入的值的类型不对，确定插入元素时，对应的值的类型是否争取



### <span id="head27"> 六、综合案例【登录】</span>

------



#### <span id="head28">6.1 创建表</span>

> - 创建一张用户表 User
>   - id 主键、自动增长
>   - username 字符串类型 非空
>   - password 字符串类型 非空
>   - phone 字符串类型
> - 插入2条测试语句

```mysql
#创建数据库
CREATE DATABASE temp CHARACTER SET utf8;
#使用该数据库
USE temp;
#创建用户表
CREATE TABLE user (
	id INT PRIMARY KEY auto_increment,
	username CHARACTER(20) NOT NULL,
	password CHARACTER(20) NOT NULL,
	phone CHARACTER(11)
) charset = utf8;
#初始化（插入）表中数据
INSERT INTO user (username, password, phone) VALUES ('ziph', '123456', '16688889999');
INSERT INTO user (username, password, phone) VALUES ('zhangsan', '123456', '16644445555');
```



#### <span id="head29">6.2 实现登录</span>

> - 通过控制台，用户输入用户名和密码
> - 用户输入的用户名和密码作为参数，编写查询SQL语句。
> - 如果查询到用户，则用户存在，提示登录成功，反之，提示失败！

```java
import java.sql.*;
import java.util.Scanner;

public class TestLogin {
public static void main(String[] args) throws ClassNotFoundException, SQLException {
Scanner scanner = new Scanner(System.in);
System.out.print("请输入用户名：");
String userName = scanner.nextLine();
System.out.print("请输入密码：");
String password = scanner.nextLine();

//1.加载驱动
Class.forName("com.mysql.jdbc.Driver");
//2.获取连接对象，连接数据库
Connection connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/temp?useUnicode=true&characterEncoding=utf8", "root", "123456");
//3.创建执行SQL语句的对象
Statement statement = connection.createStatement();
//4.编写SQL语句，并执行SQL语句
String sql = "select * from user where username = '" + userName + "' and password = '" + password + "'";
ResultSet resultSet = statement.executeQuery(sql);
//5.处理结果
if (resultSet.next()) {//通过参数，查到一行数据，就提示用户的登陆成功！
System.out.println("登录成功！");
} else {
System.out.println("登录失败！");
}
//6.释放资源
resultSet.close();
statement.close();
connection.close();
}
}
```



### <span id="head30"> 七、SQL注入问题</span>

------

#### <span id="head31">7.1 什么是SQL注入</span>

> 当用户输入的数据中有SQL关键字或语法时，并且参与了SQL语句的编译，导致SQL语句编译后条件结果为true，一直得到正确的结果。称为SQL注入

![img](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200529123650.png) 

> 继续使用6.2实现登录案例，用户名、密码（用户名数据库里没有，密码随便录入的）我在控制台输入的图上内容，却出现了登录成功！这是怎么回事呢？那我们再来看一下，看下图吧！

![img](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200529123651.png) 

> 看一下高亮显示的部分，这一部分是SQL执行的语句，而userName、password是我们控制台录入的信息（也参与SQL语句的执行）。但是当你输入lalala字符串是没问题的，但是当你再入' 的时候，SQL执行的时候会认为' 是userName的结束。随之，录入了or后面内容1=1参与SQL执行代替了录入的密码。这里我解释一下，因为1=1，默认为true，所以该密码就被越过了！; 被认为SQL语句的结束标志，随后一个#注释了password等后面的所有内容。当resultSet.next()判断时，因为它的结果返回的就是boolean类型，上述SQL注入自然而然的返回了一个true成功的越过了账号和密码的界限，登录成功！这就是SQL注入！大家可以理解了吧！那么我们继续看以下语句吧！该语句就是在SQL注入后，被SQL执行的语句：

```sql
sql = "select * from user where username='xxx' or 1=1;#'and password ='123456'";
```



#### <span id="head32"> 7.2如何避免SQL注入</span>

> 由于编写的SQL语句，是在用户输入数据后，整合后再编译成SQL语句。所以为了避免SQL注入的问题，使SQL语句在用户输入数据前，SQL语句已经完成编译，成为了完整的SQL语句，再进行填充数据（需要在我们控制台录入后，提前把SQL语句编译成一行长长的字符串，防止注入），想知道怎么解决，那就继续看下面的重点，记住是重点哦！



### <span id="head33">八、 PreparedStatement【重点】</span>

------

> PreparedStatement接口继承了Statement接口。执行SQL语句的方法没有区别！



#### <span id="head34">8.1 PreparedStatement的应用</span>

> 作用：
>
> - 1.预编译SQL语句，效率高！
> - 2.安全，避免SQL注入
> - 3.可以动态的填充数据，执行多个同构的SQL语句



##### <span id="head35">8.1.1 参数标记</span>

```java
//1.预编译SQL语句
PreparedStatement preparedStatement = connection.prepareStatement(sql);
```

- 注意：PreparedStatement应用时，SQL字符串的参数都由?符号站位，被称为参数标记。在执行该SQL语句前，要为每个?参数赋值



##### <span id="head36">8.1.2 动态参数绑定</span>

> **pstmt.setXxx(下标,值);** 参数下标是从1开始，为指定占位符下标绑定值

```java
//2.为占位符下标赋值
preparedStatement.setString(1,username);
preparedStatement.setString(2,password);
```



##### <span id="head37">8.1.3 解决7.1遗留下来的SQL注入问题</span>

```java
import java.sql.*;
import java.util.Scanner;

public class TestSafeLogin {
public static void main(String[] args) throws ClassNotFoundException, SQLException {
Scanner scanner = new Scanner(System.in);
System.out.print("请输入用户名：");
String username = scanner.nextLine();
System.out.print("请输入密码：");
String password = scanner.nextLine();

//1.注册驱动
Class.forName("com.mysql.jdbc.Driver");
//2.获取连接对象
Connection connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/temp?useUnicode=true&characterEncoding=utf8","root", "123456");
//3.创建执行sql语句的对象
String sql = "select * from user where username = ? and password = ?";
//预编译SQL语句————提前把SQL语句编译为字符串，其中用到了转义字符防止个别符号注入SQL
PreparedStatement preparedStatement = connection.prepareStatement(sql);

/**
* 查看预编译后的SQL语句字符串
* 此查看不计为jdbc的开发步骤中
*/
System.out.println(preparedStatement);

//为占位符下标赋值
preparedStatement.setString(1, username);
preparedStatement.setString(2, password);

/**
* 查看赋值后SQL语句的字符串
* 此查看不计为jdbc的开发步骤中
*/
System.out.println(preparedStatement);

//4.执行SQL语句————此时executeQuery()不需要在传入参数
ResultSet resultSet = preparedStatement.executeQuery();
//5.处理结果
if (resultSet.next()) {//通过参数，查到一行数据，提示用户登录成功！
System.out.println("登陆成功！");
} else {
System.out.println("登录失败！");
}
//6.释放资源
resultSet.close();
preparedStatement.close();
connection.close();
}
}
```

> 输入SQL注入问题的用户名和密码得出以下结果！
>
> **查看预编译后的SQL语句字符串结果：**com.mysql.jdbc.JDBC4PreparedStatement@4b9af9a9: select * from user where username = ** NOT SPECIFIED ** and password = ** NOT SPECIFIED **
>
> **查看赋值后SQL语句的字符串结果：**com.mysql.jdbc.JDBC4PreparedStatement@4b9af9a9: select * from user where username = 'lalal\' or 1=1;#' and password = 'asdsad'
>
> **最终结果：** 登录失败！
>
> **总结：** 我们可以看出'lalal后面' 被加了转义字符，而 or 1=1;#后加了SQL语句应该加的username结束标志 ' 。



### <span id="head38"> 九、综合练习</span>

------

#### <span id="head39"> 9.1创建数据库、表</span>

> 创建数据库 account
>
> - 创建一张表 t_ccount。有以下列
>   - cardId：字符串，主键
>   - password：字符串，非空
>   - username：字符串，非空
>   - balance：小数，非空
>   - phone：字符串，非空

```mysql
#创建数据库
create database account character set utf8;
#使用account数据库
use account;
#创建表
create table t_account
(
card_id  character(20) primary key,
password character(50) not null,
username character(20) not null,
balance  double(10, 2) not null,
phone    character(11) not null
) character set utf8;
```



#### <span id="head40">9.2 创建项目通过JDBC实现功能</span>

> 创建AccountSystem类，完成下列功能
>
> - 开户：控制台输入所有的账户信息，使用PreparedStatement添加至t_account表
> - 存款：输入卡号、密码、存储金额进行修改
> - 取款：输入卡号、密码、取款金额
> - 转账：输入卡号、密码、对方卡号、转账金额进行修改
> - 查看余额： 输入卡号、密码，查询余额
> - 修改密码：输入卡号、密码，再输入新密码进行修改
> - 注销：输入卡号、密码，删除对应的账户信息



```java
import java.util.Scanner;

/**
* 菜单
*/
public class TestAccount {
public static void main(String[] args) {
AccountSystem accountSystem = new AccountSystem();
Scanner scanner = new Scanner(System.in);
System.out.println("欢迎使用中国银行ATM机");
int choice = 0;
do {
System.out.println("1.开户 2.存款 3.取款 4.转账 5.修改密码 6.查看账户余额 7.注销 0.退出");
System.out.print("请选择你的操作：");
choice = scanner.nextInt();
switch (choice) {
case 1:
accountSystem.register();
break;
case 2:
accountSystem.saveMoney();
break;
case 3:
accountSystem.takeMoney();
case 4:
accountSystem.transfers();
break;
case 5:
accountSystem.updatePassword();
break;
case 6:
accountSystem.getBalance();
break;
case 7:
accountSystem.logout();
break;
case 0:
accountSystem.closeConnection();
return;
default:
break;
}
} while (choice != 0);
}
}

import java.sql.*;
import java.util.Scanner;

/**
* 要求：
* <p>
* 开户：输入所有的账户信息，使用PreparedStatement添加至t_account表中
* 存款：输入卡号、密码、存储金额进行修改
* 取款：输入卡号、密码、取款金额
* 转账：输入卡号、密码、需要对其转账的卡号、转账金额进行修改
* 修改密码：输入卡号、密码，再输入新密码进行修改
* 查询余额：输入卡号、密码，查询出对应的卡内余额
* 注销：输入卡号、密码，删除对应的账户信息
*/
public class AccountSystem {
Scanner scanner = new Scanner(System.in);
private static Connection connection = null;
PreparedStatement preparedStatement = null;
ResultSet resultSet = null;

static {
//重复的操作，就出发一次加载即可！
try {
//1.加载驱动
Class.forName("com.mysql.jdbc.Driver");
//2.连接数据库
connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/account?useUnicode=true&characterEncoding=utf8", "root", "Mylifes1110");
} catch (ClassNotFoundException e) {
e.printStackTrace();
} catch (SQLException e) {
e.printStackTrace();
}
}

/**
* 关闭数据库连接对象Connection
* <p>
* 注意：在程序结束时关闭，如果过早关闭的话，将与数据库断开连接
* 所以我们放在退出ATM机系统时调用关闭
*/
public void closeConnection() {
if (connection != null) {
try {
connection.close();
} catch (SQLException e) {
e.printStackTrace();
}
}
}

//开户
public void register() {
System.out.print("请输入卡号：");
String card_id = scanner.next();
System.out.print("请输入密码：");
String password = scanner.next();
System.out.print("请输入用户名：");
String username = scanner.next();
System.out.print("请输入存储金额：");
double balance = scanner.nextDouble();
System.out.print("请输入预留手机号：");
String phone = scanner.next();


//3.创建PreparedStatement，预编译
String sql = "insert into t_account(card_id, password, username, balance, phone) values (?, ?, ?, ?, ?)";
try {
preparedStatement = connection.prepareStatement(sql);
//4.为占位符赋值
preparedStatement.setString(1, card_id);
preparedStatement.setString(2, password);
preparedStatement.setString(3, username);
preparedStatement.setDouble(4, balance);
preparedStatement.setString(5, phone);
//5.执行SQL语句
int result = preparedStatement.executeUpdate();
//6.处理结果
if (result > 0) {
System.out.println("开户成功！");
} else {
System.out.println("开户失败！");
}
} catch (SQLException e) {
e.printStackTrace();
} finally {
if (preparedStatement != null) {
try {
preparedStatement.close();
} catch (SQLException e) {
e.printStackTrace();
}
}
}
}

//存款
public void saveMoney() {
System.out.print("请输入卡号：");
String card_id = scanner.next();
System.out.print("请输入密码：");
String password = scanner.next();
System.out.print("请输入存储金额：");
double money = scanner.nextDouble();
if (money > 0) {
String sql = "update t_account set balance = balance + ? where card_id = ? and password = ?";
//预编译
try {
preparedStatement = connection.prepareStatement(sql);
//为占位符赋值
preparedStatement.setDouble(1, money);
preparedStatement.setString(2, card_id);
preparedStatement.setString(3, password);
//执行SQL语句
int result = preparedStatement.executeUpdate();
//处理结果
if (result > 0) {
System.out.println("存款成功！");
} else {
System.out.println("卡号或密码错误！");
}
} catch (SQLException e) {
e.printStackTrace();
} finally {
if (preparedStatement != null) {
try {
preparedStatement.close();
} catch (SQLException e) {
e.printStackTrace();
}
}
}
} else {
System.out.println("输入存储金额错误！");
}
}

//取款
public void takeMoney() {
System.out.print("请输入卡号：");
String card_id = scanner.next();
System.out.print("请输入密码：");
String password = scanner.next();
System.out.print("请输入取出金额：");
double money = scanner.nextDouble();
if (money > 0) {
String sql = "update t_account set balance = balance - ? where card_id = ? and password = ?";
//预编译
try {
preparedStatement = connection.prepareStatement(sql);
//为占位符赋值
preparedStatement.setDouble(1, money);
preparedStatement.setString(2, card_id);
preparedStatement.setString(3, password);
//执行SQL语句
int result = preparedStatement.executeUpdate();
//处理结果
if (result > 0) {
System.out.println("取款成功！");
} else {
System.out.println("卡号或密码错误！");
}
} catch (SQLException e) {
e.printStackTrace();
} finally {
try {
preparedStatement.close();
} catch (SQLException e) {
e.printStackTrace();
}
}

}
}

//查看余额
public void getBalance() {
System.out.print("请输入卡号：");
String card_id = scanner.next();
System.out.print("请输入密码：");
String password = scanner.next();
String sql = "select balance from t_account where card_id = ? and password = ?";
try {
preparedStatement = connection.prepareStatement(sql);
preparedStatement.setString(1, card_id);
preparedStatement.setString(2, password);
ResultSet resultSet = preparedStatement.executeQuery();
if (resultSet.next()) {
double balance = resultSet.getDouble("balance");
System.out.println("卡内余额为：" + balance);
} else {
System.out.println("卡号或密码错误！");
}
} catch (SQLException e) {
e.printStackTrace();
} finally {
if (resultSet != null) {
try {
resultSet.close();
} catch (SQLException e) {
e.printStackTrace();
}
} else if (preparedStatement != null) {
try {
preparedStatement.close();
} catch (SQLException e) {
e.printStackTrace();
}
}
}
}

//修改密码
public void updatePassword() {
System.out.print("请输入卡号：");
String card_id = scanner.next();
System.out.print("请输入密码：");
String password = scanner.next();
System.out.print("请输入新密码：");
String newPassword = scanner.next();
String sql = "update t_account set password = ? where card_id = ? and password = ?";
try {
preparedStatement = connection.prepareStatement(sql);
preparedStatement.setString(1, newPassword);
preparedStatement.setString(2, card_id);
preparedStatement.setString(3, password);
int result = preparedStatement.executeUpdate();
if (result > 0) {
System.out.println("密码修改成功！");
} else {
System.out.println("卡号或密码错误！请核对后再修改！");
}
} catch (SQLException e) {
e.printStackTrace();
} finally {
if (preparedStatement != null) {
try {
preparedStatement.close();
} catch (SQLException e) {
e.printStackTrace();
}
}
}
}

//注销
public void logout() {
System.out.print("请输入卡号：");
String card_id = scanner.next();
System.out.print("请输入密码：");
String password = scanner.next();
String sql = "delete from t_account where card_id = ? and password = ?";
try {
preparedStatement = connection.prepareStatement(sql);
preparedStatement.setString(1, card_id);
preparedStatement.setString(2, password);
int result = preparedStatement.executeUpdate();
if (result > 0) {
System.out.println("注销成功！");
} else {
System.out.println("卡号或密码错误！");
}
} catch (SQLException e) {
e.printStackTrace();
} finally {
if (preparedStatement != null) {
try {
preparedStatement.close();
} catch (SQLException e) {
e.printStackTrace();
}
}
}
}

//转账
public void transfers() {
System.out.print("请输入付款卡号：");
String card_id = scanner.next();
System.out.print("请输入付款密码：");
String password = scanner.next();
System.out.print("请输入转账金额：");
double money = scanner.nextDouble();
if (money > 0) {
String sql1 = "select balance from t_account where card_id = ? and password = ?";
try {
preparedStatement = connection.prepareStatement(sql1);
preparedStatement.setString(1, card_id);
preparedStatement.setString(2, password);
ResultSet resultSet = preparedStatement.executeQuery();
if (resultSet.next()) {
double balance = resultSet.getDouble("balance");
if (money <= balance) {
System.out.print("请输入收款卡号：");
String toCard_id = scanner.next();
String sql2 = "select balance from t_account where card_id = ?";
preparedStatement = connection.prepareStatement(sql2);
preparedStatement.setString(1, toCard_id);
resultSet = preparedStatement.executeQuery();
if (resultSet.next()) {
String sql3 = "update t_account set balance = balance - ? where card_id = ?";
preparedStatement = connection.prepareStatement(sql3);
preparedStatement.setDouble(1, money);
preparedStatement.setString(2, card_id);
preparedStatement.executeUpdate();
String sql4 = "update t_account set balance = balance + ? where card_id = ?";
preparedStatement = connection.prepareStatement(sql4);
preparedStatement.setDouble(1, money);
preparedStatement.setString(2, toCard_id);
preparedStatement.executeUpdate();
System.out.println("转账成功！");
} else {
System.out.println("收款卡号不存在！");
}
} else {
System.out.println("卡内余额不足！");
}
} else {
System.out.println("卡号或密码错误！");
}
} catch (SQLException e) {
e.printStackTrace();
} finally {
try {
if (resultSet != null) {
resultSet.close();
}
if (preparedStatement != null) {
preparedStatement.close();
}
} catch (SQLException e) {
e.printStackTrace();
}
}
} else {
System.out.println("请重新验证，输入正确的转账金额！");
this.transfers();
}
}
```



### <span id="head41"> 十、封装工具类</span>

------

#### <span id="head42">10.1 重用性方案</span>

> - 封装了获取连接、释放资源两个方法
>   - 提供public static Connection getConnection()方法
>   - 提供public static void closeAll(Connection conn, Statement statement,ResultSet resultSet)



##### <span id="head43">10.1.1 工具实现</span>

```java
import java.sql.*;

/**
* 数据库工具类
* 1.提供连接--Connection
* 2.提供统一资源关闭
* 可复用性方案
*/
public class DBUtils {
static {
try {
Class.forName("com.mysql.jdbc.Driver");
} catch (ClassNotFoundException e) {
e.printStackTrace();
}
}

/**
* 硬编码
* 获取连接对象
*/
public static Connection getConnection() {
Connection connection = null;
try {
connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/temp?useUnicode=true&characterEncoding=utf8", "root", "123456");
} catch (SQLException e) {
e.printStackTrace();
}
return connection;
}

/**
* 释放资源
*/
public static void closeAll(Connection connection, Statement statement, ResultSet resultSet) {
try {
if (resultSet != null) {
resultSet.close();
}
if (statement != null) {
statement.close();
}
if (connection != null) {
connection.close();
}
} catch (SQLException e) {
e.printStackTrace();
}
}
}
```



#### <span id="head44">10.2 跨平台方案</span>

> - 定义 private static final Properties properties = new Properties();//配置文件集合
>
> - 定义static {
>
>   ​		//首次使用工具类，触发类加载
>
>   ​		InputStream is = DBUtils.class.getResourceAsStream("路径");//复用本类自带流，读取配置文件
>
>   ​		properties.load(is);//将is流中的配置文件信息，加载到集合中
>
>   ​		Class.forName(properties.getProperty("driver"));
>
>   }
>
> - 在getConnection方法中。应用properties.getProperty("url");



##### <span id="head45">10.2.1 实现</span>

> 在src目录下新建db.properties文件

```properties
driver=com.mysql.jdbc.Driver
url=jdbc:mysql:localhost:3306/temp?useUnicode=true&characterEnding=utf8
username=root
password=123456
```



> DBUtils代码实现

```java
import java.io.IOException;
import java.io.InputStream;
import java.sql.*;
import java.util.Properties;

/**
* 数据库工具类
* 1.获取连接对象--Connection
* 2.提供统一释放资源
* 可跨平台性方案
*/
public class DBUtils {
private static final Properties PROPERTIES = new Properties();
static {
try {
//使用类自身带的流，无需关闭
InputStream inputStream = DBUtils.class.getResourceAsStream("/db.properties");
PROPERTIES.load(inputStream);//通过流将配置信息的内容分割成键值对
Class.forName(PROPERTIES.getProperty("driver"));
} catch (IOException e) {
e.printStackTrace();
} catch (ClassNotFoundException e) {
e.printStackTrace();
}
}

/**
* 获取连接对象
* @return 返回连接对象
*/
public static Connection getConnection() {
Connection connection = null;
try {
connection = DriverManager.getConnection(PROPERTIES.getProperty("url"), PROPERTIES.getProperty("username"), PROPERTIES.getProperty("password"));
} catch (SQLException e) {
e.printStackTrace();
}
return connection;
}

/**
* 释放资源
* @param connection 连接对象
* @param statement 发送SQL语句的对象，是PreparedStatement的父接口，即使PreparedStatement用的广泛，父接口中也包含了它
* @param resultSet 存储结果的结果集对象
*/
public static void closeAll(Connection connection, Statement statement, ResultSet resultSet) {
try {
if (resultSet != null) {
resultSet.close();
}
if (statement != null) {
statement.close();
}
if (connection != null) {
connection.close();
}
} catch (SQLException e) {
e.printStackTrace();
}
}
}
```



### <span id="head46"> 十一、ORM</span>

------

> ORM（Object Relational Mapping）
>
> 从数据库查询到的结果集(ResultSet)在进行遍历时，逐行遍历，取出的都是零散的数据。在实际应用开发中，我们需要将零散的数据进行封装整理



#### <span id="head47">11.1 ORM 实体类(entity)：零散数据的载体</span>

> - 一行数据中，多个零散的数据进行整理
> - 通过entity的规则对表中的数据进行对象的封装
> - 表名=类名；列名=属性名；提供各个属性的get、set方法
> - 提供无参构造方法、(视情况添加有参构造)



##### <span id="head48">11.1.1 ORM应用</span>

```java
/**
* create table user
* (
* id       int auto_increment
* primary key,
* username varchar(20) not null,
* password varchar(20) not null,
* sex      char(2)     not null,
* email    varchar(20) not null,
* address  varchar(50) not null
* );
*
* insert into user (username, password, sex, email, address)
* values ('ziph', '123456', '男', 'mylifes1110@163.com', '河北省')
*
* insert into user (username, password, sex, email, address)
* values ('marry', '123456', '女', 'marry@163.com', '北京市')
*/
class User {
private int id;
private String username;
private String password;
private String sex;
private String email;
private String address;

public User() {
}

public User(int id, String username, String password, String sex, String email, String address) {
this.id = id;
this.username = username;
this.password = password;
this.sex = sex;
this.email = email;
this.address = address;
}

public int getId() {
return id;
}

public void setId(int id) {
this.id = id;
}

public String getUsername() {
return username;
}

public void setUsername(String username) {
this.username = username;
}

public String getPassword() {
return password;
}

public void setPassword(String password) {
this.password = password;
}

public String getSex() {
return sex;
}

public void setSex(String sex) {
this.sex = sex;
}

public String getEmail() {
return email;
}

public void setEmail(String email) {
this.email = email;
}

public String getAddress() {
return address;
}

public void setAddress(String address) {
this.address = address;
}

@Override
public String toString() {
return "User{" +
"id=" + id +
", username='" + username + '\'' +
", password='" + password + '\'' +
", sex='" + sex + '\'' +
", email='" + email + '\'' +
", address='" + address + '\'' +
'}';
}
}
```



```java
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

/**
* User{id=1, username='ziph', password='123456', sex='男', email='mylifes1110@163.com', address='河北省'}
* User{id=2, username='marry', password='123456', sex='女', email='marry@163.com', address='北京市'}
*/
public class OrmSelect {
public static void main(String[] args) {
Connection connection = DBUtils.getConnection();
String sql = "select id,username,password,sex,email,address from user";
PreparedStatement preparedStatement = null;
ResultSet resultSet = null;
try {
preparedStatement = connection.prepareStatement(sql);
resultSet = preparedStatement.executeQuery();
while (resultSet.next()) {//拿到每一行数据
//拿到每一列数据
User user = new User();
int id = resultSet.getInt("id");
String username = resultSet.getString("username");
String password = resultSet.getString("password");
String sex = resultSet.getString("sex");
String email = resultSet.getString("email");
String address = resultSet.getString("address");
//将一行中零散的数据，封装在一个User对象里
user.setId(id);
user.setUsername(username);
user.setPassword(password);
user.setSex(sex);
user.setEmail(email);
user.setAddress(address);
System.out.println(user);
}
} catch (SQLException e) {
e.printStackTrace();
} finally {
DBUtils.closeAll(connection, preparedStatement, resultSet);
}
}
}
```



### <span id="head49">十二、DAO（Data Access Object）</span>

------

> 数据访问对象
>
> - 将所有对同一张表的操作都封装在一个XXXDaoImpl对象中。
> - 根据增删改查的不同功能，实现具体的方法(insert,update,delete,select,selectAll)
> - 经验：对于任何一张表中的数据进行操作时，无非就是增、删、改、查。应将对于一张表的所有操作统一封装在一个数据访问对象中。重用

```java
import www.mylifes1110.jdbc.DBUtils;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

/**
* 对数据库中User表的一系列操作
* 只做对数据库访问的操作！
* 复用！对同一张表的操作，实现复用！
*/
public class UserDaoImpl {
private Connection connection = null;
private PreparedStatement preparedStatement = null;
private ResultSet resultSet = null;

/**
* 增
*/
public int insert(User user) {
try {
connection = DBUtils.getConnection();
String sql = "insert into user(username,password,sex,email,address) values (?,?,?,?,?)";
preparedStatement = connection.prepareStatement(sql);
preparedStatement.setString(1, user.getUsername());
preparedStatement.setString(2, user.getPassword());
preparedStatement.setString(3, user.getSex());
preparedStatement.setString(4, user.getEmail());
preparedStatement.setString(5, user.getAddress());
int result = preparedStatement.executeUpdate();
return result;//将操作结果返回给调用者！
} catch (SQLException e) {
e.printStackTrace();
} finally {
DBUtils.closeAll(connection, preparedStatement, resultSet);
}
return 0;
}

/**
* 删
*/
public int delete(int id) {
try {
connection = DBUtils.getConnection();
String sql = "delete from user where id = ?";
preparedStatement = connection.prepareStatement(sql);
preparedStatement.setInt(1, id);
return preparedStatement.executeUpdate();
} catch (SQLException e) {
e.printStackTrace();
} finally {
DBUtils.closeAll(connection, preparedStatement, resultSet);
}
return 0;
}

/**
* 修改
*/
public int update(User user) {
try {
connection = DBUtils.getConnection();
String sql = "update user set username = ?, password = ?, sex = ?, email = ?, address = ? where id = ?";
preparedStatement = connection.prepareStatement(sql);
preparedStatement.setString(1, user.getUsername());
preparedStatement.setString(2, user.getPassword());
preparedStatement.setString(3, user.getSex());
preparedStatement.setString(4, user.getEmail());
preparedStatement.setString(5, user.getAddress());
preparedStatement.setInt(6, user.getId());
return preparedStatement.executeUpdate();
} catch (SQLException e) {
e.printStackTrace();
} finally {
DBUtils.closeAll(connection, preparedStatement, resultSet);
}
return 0;
}

/**
* 查询一条
*/
public User select(int id) {
try {
connection = DBUtils.getConnection();
String sql = "select id, username, password, sex, email, address from user where id = ?";
preparedStatement = connection.prepareStatement(sql);
preparedStatement.setInt(1, id);
resultSet = preparedStatement.executeQuery();
while (resultSet.next()) {
int id1 = resultSet.getInt("id");
String username = resultSet.getString("username");
String password = resultSet.getString("password");
String sex = resultSet.getString("sex");
String email = resultSet.getString("email");
String address = resultSet.getString("address");
User user = new User(id1, username, password, sex, email, address);
return user;
}
} catch (SQLException e) {
e.printStackTrace();
} finally {
DBUtils.closeAll(connection, preparedStatement, resultSet);
}
return null;
}

/**
* 查询全部
*/
public List<User> selectAll() {
try {
connection = DBUtils.getConnection();
String sql = "select id, username, password, sex, email, address from user";
List<User> list = new ArrayList<>();
preparedStatement = connection.prepareStatement(sql);
resultSet = preparedStatement.executeQuery();
while (resultSet.next()) {
int id = resultSet.getInt("id");
String username = resultSet.getString("username");
String password = resultSet.getString("password");
String sex = resultSet.getString("sex");
String email = resultSet.getString("email");
String address = resultSet.getString("address");
User user = new User(id, username, password, sex, email, address);
list.add(user);
}
return list;
} catch (SQLException e) {
e.printStackTrace();
} finally {
DBUtils.closeAll(connection, preparedStatement, resultSet);
}
return null;
}
}
```

```java
import java.util.List;

public class TestDao {
public static void main(String[] args) {
UserDaoImpl userDaoImpl = new UserDaoImpl();
//调用增功能，模拟用户控制台输入，调用构造方法传参数
User user = new User("Lucy", "123456", "女", "lucy@163.com", "河南省");
int result = userDaoImpl.insert(user);
if (result > 0) {
System.out.println("添加成功！");
} else {
System.out.println("添加失败！");
}
//调用删除功能
int result1 = userDaoImpl.delete(6);
if (result1 > 0) {
System.out.println("删除成功！");
} else {
System.out.println("删除失败！");
}
//调用修改功能
User user1 = new User(5, "Marry", "666666", "女", "marry@qq.com", "深圳");
int result2 = userDaoImpl.update(user);
if (result2 > 0) {
System.out.println("修改成功！");
} else {
System.out.println("修改失败！");
}
//调用查询查询一条信息
User user2 = userDaoImpl.select(5);
System.out.println(user);
//调用查询所有信息
List<User> users = userDaoImpl.selectAll();
users.forEach(System.out::println);
}
}
```



### <span id="head50"> 十三、日期类型</span>

------

> - java.util.Date
>   - Java语言常规应用层面的日期类型。可以通过字符串创建对应的时间对象
>   - 无法直接通过JDBC插入数据库
> - java.sql.Date
>   - 不可以通过字符串创建对应的时间对象。只能通过毫秒值创建对象(1970年1月1日至今的毫秒值)
>   - 可以直接通过JDBC插入数据库



#### <span id="head51">13.1 日期格式化工具</span>

> SimpleDateFormat   日期格式化

```java
SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd");//按照指定格式转换成util.Date类型
java.util.Date date = simpleDateFormat.parse("2000-01-01");
```



#### <span id="head52">13.2 日期工具类 DateUtils</span>

```java
import java.text.ParseException;
import java.text.SimpleDateFormat;

/**
* 日期转换
* <p>
* 字符串转换为UtilDate
* 字符串转换为SqlDate
* UtilDate转换为SqlDate
* 注意：SqlDate转换为UtilDate是不可以的，因为UtilDate是SqlDate的父类
*/
public class DateUtils {
private static final SimpleDateFormat SIMPLE_DATE_FORMAT = new SimpleDateFormat("yyyy-MM-dd");

/**
* 字符串转换为UtilDate
*/
public static java.util.Date strToUtilDate(String string) {
try {
return SIMPLE_DATE_FORMAT.parse(string);
} catch (ParseException e) {
e.printStackTrace();
}
return null;
}

/**
* UtilDate转换为SqlDate
*/
public static java.sql.Date utilToSqlDate(java.util.Date date) {
return new java.sql.Date(date.getTime());
}

/**
* 字符串转换为SqlDate
* 此转换不常用，而在JDBC中常用的转换只是前两个
*/
public static java.sql.Date strToSqlDate(String string) {
try {
java.util.Date date = SIMPLE_DATE_FORMAT.parse(string);
return new java.sql.Date(date.getTime());
} catch (ParseException e) {
e.printStackTrace();
}
return null;
}
}
```



##### <span id="head53">13.2.1 转换流程、测试</span>

```java
import java.text.ParseException;
import java.text.SimpleDateFormat;

public class TestDateTimes {
public static void main(String[] args) throws ParseException {
/**
* java.util.Date  当前系统时间
* Tue Mar 31 19:44:55 CST 2020
*/
System.out.println(new java.util.Date());

/**
* 字符串转换为util.Date类型
* 1.自定义一个时间字符串
* 2.日期转换：字符串转换为java.util.Date
* 3.将日期字符串转换为util.Date类型
* Sun Feb 02 00:00:00 CST 2020
*/
String str = "2020-02-02";
SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd");
java.util.Date utilDate = simpleDateFormat.parse(str);
System.out.println(utilDate);

/**
* 字符串转换为sql.Date类型
* 1.自定义一个时间字符串
* 2.日期转换：字符串转换为java.util.Date
* 3.将日期类型转换为util.Date类型
* 4.将util.Date类型转换为sql.Date类型
* 注意：getTime()方法传入的是毫秒值
* 时间戳是指格林威治时间1970年01月01日00时00分00秒(北京时间1970年01月01日08时00分00秒)起至现在的总毫秒数。
* 2020-03-06
*/
String string = "2020-03-06";
SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
java.util.Date utilsDate = dateFormat.parse(string);
java.sql.Date sqlDate = new java.sql.Date(utilsDate.getTime());
System.out.println(sqlDate);

/**
* 利用工具将字符串转换为util.Date类型
* Sat Feb 08 00:00:00 CST 2020
*/
java.util.Date date = DateUtils.strToUtilDate("2020-02-08");
System.out.println(date);

/**
* 利用工具将util.Date类型转换为sql.Date类型
* 2020-02-08
*/
java.sql.Date date1 = DateUtils.utilToSqlDate(date);
System.out.println(date1);

/**
* 将当前系统时间util.Date类型转换为sql.Date类型
* 2020-03-31
*/
System.out.println(new java.sql.Date(new java.util.Date().getTime()));
}
}
```



### <span id="head54"> 十四、连接池</span>

------

> JDBC每次连接数据库，都要获得一个连接对象。每次创建一个连接对象，都是一个较大的资源，如果在连接量较大的场景下，会极大的浪费资源。容易内存溢出。



#### <span id="head55">14.1 自定义连接池</span>

> Java中提供了一个接口DataSource，通过实现该接口，可以创建连接池



#### <span id="head56">14.2 Druid（德鲁伊）</span>

> Druid 是目前比较流行高性能的，分布式列存储
>
> 一、亚秒级查询
>
> 二、实时数据注入
>
> 三、可扩展的PB级存储
>
> 四、多环境部署
>
> 五、丰富的社区



##### <span id="head57">14.2.1 Druid配置</span>

> - 创建database.properties 配置文件
> - 引入druid-1.1.5.jar



##### <span id="head58">14.2.2 database.properties 文件配置</span>

```properties
#连接设置
driver=com.mysql.jdbc.Driver
url=jdbc:mysql://localhost:3306/account?useUnicode=true&characterEncoding=utf8
username=root
password=123456
#初始化连接
initialSize=10
#最大连接数量
maxActive=30
#最小空闲连接
minIdle=5
#超时等待时间以毫秒为单位 1000毫秒等于1秒
maxWait=5000
```



##### <span id="head59">14.2.3 连接池工具类</span>

```java
import com.alibaba.druid.pool.DruidDataSource;
import com.alibaba.druid.pool.DruidDataSourceFactory;

import java.io.IOException;
import java.io.InputStream;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.Properties;

/**
* 连接池工具类
*/
public class DBPoolUtils {
/**
* 连接池对象
*/
private static DruidDataSource druidDataSource;

static {
Properties properties = new Properties();
InputStream inputStream = DBPoolUtils.class.getResourceAsStream("/database.properties");
try {
properties.load(inputStream);
//使用德鲁伊工厂创建连接池
druidDataSource = (DruidDataSource) DruidDataSourceFactory.createDataSource(properties);
} catch (IOException e) {
e.printStackTrace();
} catch (Exception e) {
e.printStackTrace();
}
}

/**
* 获得数据库连接对象
*/
public static Connection getConnection() {
try {
//在连接池中获得Connection
return druidDataSource.getConnection();
} catch (SQLException e) {
e.printStackTrace();
}
return null;
}

/**
* 调用的close()方法不是关闭资源，而是将资源放回池中！
*/
public static void closeAll(Connection connection, Statement statement, ResultSet resultSet) {
try {
if (resultSet != null) {
resultSet.close();
}
if (statement != null) {
statement.close();
}
if (connection != null) {
connection.close();
}
} catch (SQLException e) {
e.printStackTrace();
}
}
}
```

- 注意：连接池中获得的Connection是DruidPooledConnection实现类，调用的close()方法不是关闭资源，而是将资源放回池中！



##### <span id="head60">14.2.4 测试连接池</span>

```java
import java.sql.Connection;

public class TestDruid {
public static void main(String[] args) {
for (int i = 0; i < 40; i++) {
Connection connection = DBPoolUtils.getConnection();
System.out.println(i + "-" + connection);
//            DBPoolUtils.closeAll(connection, null, null);
}
}
}
```



> 此时我们的连接池配置是初始化连接数量10，最大连接数量30，超时等待为5000毫秒。测试连接池时，for循环创建了40个连接数量（注意：释放资源close已注释掉了），超过了最大连接数量，超时等待5000毫秒后，报错！报错信息如下：
>
> 超时等待毫秒数为5000，活跃（已使用）连接为30，最大连接数为30，可创建连接数为0。
>
> 从0到29的连接都是正常使用的，由于你没有释放资源，随后从30开始打印就都是i - null（我这里从31截的图）

![img](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200529123652.png) 

![img](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200529123653.png) 



> 这次我把注释掉的调用工具释放资源注释打开，再次测试，如下：
>
> 你会发现从0到39都是使用的同一个连接，因为它使用完就又放回到了连接池中，达到了复用性的效果！

![img](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200529123654.png) 

**再次强调：** connection.close();不是释放资源关闭，而是放回到了连接池中，此时Connection存放的是DruidPooledConnection实现类，调用的close不是connection关闭的，而是重新放回到连接池中，达到了复用性的效果！



### <span id="head61"> 十五、Service(Biz/Business)</span>

------

#### <span id="head62">15.1 业务</span>

> 概念：用户要完成的一个业务功能，是由一个或多个的DAO调用组成。
>
> 软件、程序提供的一个功能都叫业务



#### <span id="head63">15.2 业务层的实现</span>

```java
/**
* Users的业务逻辑层对象
*/
public class UsersServiceImpl {
/**
* 用户注册功能（业务）
*/
public String register(Users users) {//1.接收参数
UsersDaoImpl usersDao = new UsersDaoImpl();
//2.调用数据访问层对象的查询方法
Users check = usersDao.select(users.getUser_name());
if (check != null) {//用户存在
return "用户已存在";
}
//3.调用数据访问层对象的新增方法
int result = usersDao.insert(users);
//4.将操作结果返回给调用者
if (result > 0) {
return "注册成功！";
} else {
return "注册失败！";
}
}

/**
* 用户登录功能（业务）
*/
public Users login(String user_name, String user_pwd) {//1.收参
UsersDaoImpl usersDao = new UsersDaoImpl();
//2.调用数据访问层对象的查询方法
Users users = usersDao.select(user_name);
//3.接收结果，处理结果
if (users != null) {//用户存在
//校验查询到的用户名、密码和输入的用户名、密码是否一致
if (users.getUser_pwd().equals(user_pwd)) {
return users;
}
}
//4.响应给调用者结果
return null;
}
}
```



#### <span id="head64">15.3 复用</span>

> - DAO数据访问操作复用
> - 业务功能的复用    //不同的终端访问



#### <span id="head65">15.4 转账案例</span>

> **考虑问题：** 如果在转账业务中途，付款方账户已扣除了转账金额，而收款方因异常则收不到转账金额。在SQL中该问题使用事务解决，则在JDBC中也是用事务解决此问题！

> 数据库连接工具类（DBUtils）

```java
import java.io.IOException;
import java.io.InputStream;
import java.sql.*;
import java.util.Properties;

public class DBUtils {
private static final Properties PROPERTIES = new Properties();

//所有操作即为单线程操作，应用了多个Connection对象，我们将一个线程绑定一个Connection连接使用
private static final ThreadLocal<Connection> THREAD_LOCAL = new ThreadLocal<>();

static {
InputStream inputStream = DBUtils.class.getResourceAsStream("/db.properties");
try {
PROPERTIES.load(inputStream);
Class.forName(PROPERTIES.getProperty("driver"));
} catch (IOException e) {
e.printStackTrace();
} catch (ClassNotFoundException e) {
e.printStackTrace();
}
}

/**
* 获取连接对象
*/
public static Connection getConnection() {
//在ThreadLocal里取
Connection connection = THREAD_LOCAL.get();
//connection对象为空则创建连接对象
if (connection == null) {
try {
connection = DriverManager.getConnection(PROPERTIES.getProperty("url"), PROPERTIES.getProperty("username"), PROPERTIES.getProperty("password"));
THREAD_LOCAL.set(connection);
} catch (SQLException e) {
e.printStackTrace();
}
}
return connection;
}

/**
* 释放资源
*/
public static void closeAll(Connection connection, Statement statement, ResultSet resultSet) {
try {
if (resultSet != null) {
resultSet.close();
}
if (statement != null) {
statement.close();
}
if (connection != null) {
connection.close();
/**
* 关闭连接后，移除线程中绑定的连接对象
*/
THREAD_LOCAL.remove();
}
} catch (SQLException e) {
e.printStackTrace();
}
}
}
```

> 账户实体类（Account）

```java
public class Account {
private String card_id;
private String password;
private String username;
private double balance;
private String phone;

public Account() {
}

public Account(String card_id, String password, String username, double balance, String phone) {
this.card_id = card_id;
this.password = password;
this.username = username;
this.balance = balance;
this.phone = phone;
}

public String getCard_id() {
return card_id;
}

public void setCard_id(String card_id) {
this.card_id = card_id;
}

public String getPassword() {
return password;
}

public void setPassword(String password) {
this.password = password;
}

public String getUsername() {
return username;
}

public void setUsername(String username) {
this.username = username;
}

public double getBalance() {
return balance;
}

public void setBalance(double balance) {
this.balance = balance;
}

public String getPhone() {
return phone;
}

public void setPhone(String phone) {
this.phone = phone;
}

@Override
public String toString() {
return "Account{" +
"card_id='" + card_id + '\'' +
", password='" + password + '\'' +
", username='" + username + '\'' +
", balance=" + balance +
", phone='" + phone + '\'' +
'}';
}
}
```

> 数据库操作持久层（AccountDaoImpl）

```java
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class AccountDaoImpl {
private Connection connection = null;
private PreparedStatement preparedStatement = null;
private ResultSet resultSet = null;

public int update(Account account) {
connection = DBUtils.getConnection();
String sql = "update t_account set password = ?, username = ?, balance = ?, phone = ? where card_id = ?";
try {
preparedStatement = connection.prepareStatement(sql);
preparedStatement.setString(1, account.getPassword());
preparedStatement.setString(2, account.getUsername());
preparedStatement.setDouble(3, account.getBalance());
preparedStatement.setString(4, account.getPhone());
preparedStatement.setString(5, account.getCard_id());
return preparedStatement.executeUpdate();
} catch (SQLException e) {
e.printStackTrace();
} finally {
DBUtils.closeAll(null, preparedStatement, resultSet);
}
return 0;
}

public Account select(String card_id) {
connection = DBUtils.getConnection();
String sql = "select card_id, password, username, balance, phone from t_account where card_id = ?";
Account account = null;
try {
preparedStatement = connection.prepareStatement(sql);
preparedStatement.setString(1, card_id);
resultSet = preparedStatement.executeQuery();
if (resultSet.next()) {
account = new Account(resultSet.getString(1), resultSet.getString(2), resultSet.getString(3), resultSet.getDouble(4), resultSet.getString(5));
}
} catch (SQLException e) {
e.printStackTrace();
} finally {
DBUtils.closeAll(null, preparedStatement, resultSet);
}
return account;
}
}
```

> Service业务层（AccountServiceImpl）

```java
import java.sql.Connection;
import java.sql.SQLException;

public class AccountServiceImpl {
public String transfer(String username, String password, String toCard, double money) {//收参
String result = "转账失败！";

//组织业务功能
AccountDaoImpl accountDao = new AccountDaoImpl();
//拿一个连接对象
Connection connection = null;
//建立一个数据库连接
connection = DBUtils.getConnection();

try {
//开启事务，并且关闭事务的自动提交
connection.setAutoCommit(false);

//2.1验证用户名是否存在
Account account = accountDao.select(username);
if (account == null) {
throw new RuntimeException("您输入的卡号不存在！");
}

//2.2验证密码是否正确
if (!account.getPassword().equals(password)) {
throw new RuntimeException("密码错误！");
}

//2.3验证余额是否充足
if (account.getBalance() < money) {
throw new RuntimeException("卡内余额不足！");
}

//2.4验证收款账户是否存在
Account toAccount = accountDao.select(toCard);
if (toAccount == null) {
throw new RuntimeException("收款卡号不存在！");
}

//2.5扣除付款卡号内的转账金额
account.setBalance(account.getBalance() - money);
accountDao.update(account);

/**
* 出现异常，导致程序终止
*/
//            int i = 10 / 0;

//2.6增加收款卡号内的转账金额
toAccount.setBalance(toAccount.getBalance() + money);
accountDao.update(toAccount);

//响应客户端
result = "转账成功！";

//执行到这里，没有异常，则正常提交事务！
connection.commit();
} catch (SQLException e) {
e.printStackTrace();
try {
//中途出现异常，回滚事务
connection.rollback();
} catch (SQLException ex) {
ex.printStackTrace();
}
} finally {
//关闭连接对象
DBUtils.closeAll(connection, null, null);
}
return result;
}
}
```

> 转账测试类（TestTransfer）

```java
public class TestTransfer {
public static void main(String[] args) {
AccountServiceImpl accountService = new AccountServiceImpl();
		//模拟客户端录入信息进行转账
String result = accountService.transfer("1", "123456", "2", 5000);
System.out.println(result);
}
}
```

> 测试结果

**初始化账户为：** 

![img](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200529123655.png) 

**转账后账户为：** 

![img](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200529123656.png) 

> **注意：** 在Service层注释了一个算数异常int i = 10 / 0; 用来模拟整个事务（整个转账操作看作一个事务）中途异常而终止查看是否用事务解决了该问题！



#### <span id="head66">15.5 解决转账事务问题</span>

> 1、总结：这条是总结，但也是需要注意的点（坑）。由于转账问题，需要介入事务解决！因为我们加入事务解决此问题。但是上文在DBUtiils数据库连接工具中，加入了一个局部变量（ThreadLocal并不是一个Thread，而是Thread的**局部变量** ）来绑定该线程中使用的Connection对象，使得在单线程中原使用的所有不同的Connection对象固定为了一个（即一个线程分配且固定一个私人对象）。这样保证了在DAO层和Service层使用都是同一个连接对象，而加入事务后就成功的解决了因异常而中断以至产生的种种问题。
>
> 2、注意：总结中说到，用ThreadLocal局部变量固定了连接对象来保证同一连接对象的使用。这里解释一下是因为connection.setAutoCommit(false);开启事务、connection.commit();提交事务、connection.rollback();回滚事务都需要上下层是同一个连接对象才可以解决此问题！如果我们没有固定此单线程的连接对象，则解决不了该问题！
>
> 
>
> **这就引申出了小伙伴们的猜想，怎么解决呢？是不是单例模式可以创建对象解决此问题呢？假如在方法的参数列表中写入需要传入一个Connection对象可不可以解决呢？那我就在下面说一下这两个问题，小伙伴们看好了！**
>
> 1、单例模式：会出现一个问题，限制了创建对象，致使当前项目只能有一个客户端能连接使用转账功能（我们的产品就是为客户提供的，不能这么限制吧，如果只有一个人可以使用这怎么办呢？那么这个产品不就是废品了吗？对吧。继续看下一个吧！）
>
> 2、参数传递Connection：如果将Service获得的Connection对象，传递给DAO各个方法。可以。​但是定义接口是为了更容易更换实现！（强调复用性）而将Connection参数定义在接口方法中，就会污染当前接口，而无法复用。我们要知道JDBC是使用的Connection，而MyBatis使用SqlSession等等，在以后的框架中，我们可以引用其他对象实现复用此项目，这个传入参数虽然解决了目前功能上的问题，但是脱离了我们的初衷（再次强调复用性！），这就会产生不能复用的问题！
>
> 3、加油打气：在这里希望大家可以对该事务解决的转账问题有一个思想上的脉路！大家加油，继续看吧！下一章就跟进该问题，解释了一下ThreadLocal这个局部变量的知识点！给大家一个Next的决心！



### <span id="head67"> 十六、ThreadLocal</span>

> 线程工具类：在整个线程中，一直到释放资源，用的是同一个Connection连接对象。



#### <span id="head68">16.1 ThreadLocal</span>

> 1、在整个线程(单条执行路径中)所持有的Map中，存储一个键(threadlocal)值（connection）对
>
> 2、线程（Thread）对象中持有一个ThreadLocalMap类型的对象(ThreadthreadLocals)，threadLocals中保存了以ThreadLocal对象为Key，set进去的值为Value
>
> 3、每个线程均可绑定多个ThreadLocal，一个线程中可存储多个ThreadLocal
>
> **注意：** ThreadLocal是Thread类的一个内部类，他只是一个局部变量，很多地方叫做线程本地变量，也有些地方叫做线程本地存储，其实意思差不多。

```java
		//绑定到线程中！ 绑定到当前线程中
ThreadLocal<Connection> threadLocal = new ThreadLocal<Connection>();//0x112233

//        Thread
//获得当前线程对象-->t.threadLocals集合为空-->create-->table[entry]-->key=0x112233 value=connection
threadLocal.set(null);
//获得当前线程对象-->getMap--->t.threadLocals-->getEntry（0x112233）-->entry-->entry.value
Connection connection = threadLocal.get();

ThreadLocal<Integer> threadLocal1 = new ThreadLocal<Integer>();//0x2345

//每个线程可以绑定多个ThreadLocal，
threadLocal1.set(123);

Integer i = threadLocal1.get();
System.out.println(i);
```



#### <span id="head69">16.2 ThreadLocal事务控制优化</span>

> 将业务层的多步事务控制操作，封装在DBUtils工具类里。实现复用



##### <span id="head70">16.2.1 DBUtils封装事务控制</span>

```java
/**
* 开启事务
*/
public static void begin() {
Connection connection = getConnection();
try {
connection.setAutoCommit(false);
} catch (SQLException e) {
e.printStackTrace();
}
}

/**
* 提交事务
*/
public static void commit() {
Connection connection = getConnection();
try {
connection.commit();
} catch (SQLException e) {
e.printStackTrace();
} finally {
DBUtils.closeAll(connection, null, null);
}
}

/**
* 回滚事务
*/
public static void rollback() {
Connection connection = getConnection();
try {
connection.rollback();
} catch (SQLException e) {
e.printStackTrace();
} finally {
DBUtils.closeAll(connection, null, null);
}
}
```


##### <span id="head71">16.1.1 数据库完整版工具类（封装了以前所有的优化，详细解析看注释）</span>

```java
import java.io.IOException;
import java.io.InputStream;
import java.sql.*;
import java.util.Properties;

/**
* 数据库工具类
* 1.创建连接对象并连接数据库
* 2.释放资源
* 3.加入开启、提交、回滚事务
*/
public class DBUtils {
/**
* 新建Properties集合，存放配置信息，以便后续流的读取
*/
private static final Properties PROPERTIES = new Properties();

/**
* 所有操作即为单线程操作，应用了多个Connection对象，我们将一个线程绑定一个Connection连接使用
*/
private static final ThreadLocal<Connection> THREAD_LOCAL = new ThreadLocal<>();

/**
* 读取配置文件类加载时，只需要加载一次即可
*/
static {
/**
* 使用类自身带的流读取配置，无需关闭
*/
InputStream inputStream = DBUtils.class.getResourceAsStream("/db.properties");
try {
/**
* 通过流将配置信息的内容分割成键值对，并连接数据库
*/
PROPERTIES.load(inputStream);
/**
* 注册加载驱动
*/
Class.forName(PROPERTIES.getProperty("driver"));
} catch (IOException e) {
e.printStackTrace();
} catch (ClassNotFoundException e) {
e.printStackTrace();
}
}

/**
* 获取连接对象
*/
public static Connection getConnection() {
/**
* 在ThreadLocal里取连接对象
*/
Connection connection = THREAD_LOCAL.get();
/**
* connection对象为空则创建连接对象
*/
if (connection == null) {
try {
connection = DriverManager.getConnection(PROPERTIES.getProperty("url"), PROPERTIES.getProperty("username"), PROPERTIES.getProperty("password"));
/**
* 把连接对象存入ThreadLocal里
*/
THREAD_LOCAL.set(connection);
} catch (SQLException e) {
e.printStackTrace();
}
}
return connection;
}

/**
* 释放资源
*/
public static void closeAll(Connection connection, Statement statement, ResultSet resultSet) {
try {
if (resultSet != null) {
resultSet.close();
}
if (statement != null) {
statement.close();
}
if (connection != null) {
connection.close();
/**
* 关闭连接后，移除线程中绑定的连接对象
*/
THREAD_LOCAL.remove();
}
} catch (SQLException e) {
e.printStackTrace();
}
}

/**
* 开启事务
*/
public static void begin() {
Connection connection = getConnection();
try {
connection.setAutoCommit(false);
} catch (SQLException e) {
e.printStackTrace();
}
}

/**
* 提交事务
*/
public static void commit() {
Connection connection = getConnection();
try {
connection.commit();
} catch (SQLException e) {
e.printStackTrace();
} finally {
DBUtils.closeAll(connection, null, null);
}
}

/**
* 回滚事务
*/
public static void rollback() {
Connection connection = getConnection();
try {
connection.rollback();
} catch (SQLException e) {
e.printStackTrace();
} finally {
DBUtils.closeAll(connection, null, null);
}
}
}
```



### <span id="head72"> 十七、三层架构设计</span>

------

> - 表示层：
>   - 命名：xxxVIew
>   - 职责：收集用户的数据和需求、展示数据
> - 业务逻辑层
>   - 命名：XXXServiceImpl
>   - 职责：数据的加工处理、调用Dao组合完成业务实现、控制事务
> - 数据访问层
>   - 命名：xxxDaoImpl
>   - 职责：向业务层提供数据，将业务层加工处理后的数据同步到数据库



##### <span id="head73">17.1 三层架构设计思想</span>

![img](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200529123657.png) 

> 我们都知道公司里的项目是分组、分模块做的！我们如何无缝连接的做好自己分内的模板呢？那就需要分层了，你分的架构层越清晰就越容易被人接纳！
>
> 那么我们进入一个模拟现实的遐想空间，你玩一个游戏，大家都知道游戏是会更新的，至于更新什么呢，大概就是更新优化老版本的Bug、增加用户调研反馈的游戏功能优化等等，目的就是优化用户体验！那么我们在更新的时候，老版本如何跨度到新版本呢？这就需要修改一些数据了，或者加入一些功能方法。定义一些接口！
>
> 那定义接口是为了什么呢？有些小伙伴会想，直接去实现功能不好吗？那么回到刚才的问题，我们都是分模块做的项目，怎么保证你项目定义的功能方法和其他同事的功能方法做到无缝衔接？那就是利用了接口，我们用接口来约束架构中所用到的方法，约束他们的命名、参数、方法规定等，这些很多程序员拿来就可以达到与其他同事的项目无缝衔接！而且有利于后期维护！
>
> 而还有一个好处就是当你在更新的时候，写好了新版本的方法等，直接去项目中简单修改更换实现类即可。这样就避免了大篇幅的修改项目代码，还保证了代码的安全性！



##### <span id="head74">17.2 三层架构设计的好处与建议</span>

> **好处：** 
>
> 1、面向接口编程，易修改、易扩展。耦合度低，Service层和Dao层设计接口，便于更换实现类！
>
> 2、使得后期对产品的维护更简单
>
> 3、划分层次清晰可见，有利于工作的合作完成，提高工作效率
>
> **建议：** 
>
> 知道了分层的重要性，在JavaSE的时候我就说过，分包写不要嫌麻烦，这下知道了吧。多了就不罗嗦了，现在懂得培养习惯还不晚，后面学到的框架等等，分的会更多的，所以我们要从现在开始养成好习惯，为以后学习做好铺垫！俗话说：“凡事要从娃娃抓起嘛！”，哈哈



### <span id="head75"> 十八、工具类型的封装及普适性泛型工具</span>

------



#### <span id="head76">18.1 封装DML方法</span>

```java
	/**
* 公共处理增、删、改方法
* sql语句，参数列表
*
* @param sql  执行的sql语句
* @param args 参数列表，占位符赋值
* @return 受影响行数
*/
public int commonsUpdate(String sql, Object... args) {
Connection connection = null;
PreparedStatement preparedStatement = null;

connection = DBUtils.getConnection();
try {
preparedStatement = connection.prepareStatement(sql);
for (int i = 0; i < args.length; i++) {
preparedStatement.setObject(i + 1, args[i]);
}
return preparedStatement.executeUpdate();
} catch (SQLException e) {
e.printStackTrace();
} finally {
DBUtils.closeAll(null, preparedStatement, null);
}
return 0;
}
```



#### <span id="head77">18.2 封装DQL方法</span>

```java
/**
* 公共查询方法（可查询单条信息，也可以查询多条信息，可以查任何一张表）
* 实现了复用性
*
* @param sql       执行的sql语句
* @param rowMapper 封装对象的接口，准备接口回调
* @param args      参数列表，占位符赋值
* @return 返回查询到的对象的集合
*/
public List<T> commonsSelect(String sql, RowMapper<T> rowMapper, Object... args) {
List<T> elements = new ArrayList<>();

Connection connection = null;
PreparedStatement preparedStatement = null;
ResultSet resultSet = null;

connection = DBUtils.getConnection();
try {
preparedStatement = connection.prepareStatement(sql);
if (args != null) {
for (int i = 0; i < args.length; i++) {
preparedStatement.setObject(i + 1, args[i]);
}
}
resultSet = preparedStatement.executeQuery();
while (resultSet.next()) {
/**
* 根据查询到的结果完成ORM，如何进行对象的创建及赋值呢？
* 接口回调---调用者提供了一个封装方法ORM
*/
T t = rowMapper.getRow(resultSet);
elements.add(t);
}
} catch (SQLException e) {
e.printStackTrace();
} finally {
DBUtils.closeAll(null, preparedStatement, resultSet);
}
return elements;
}
```



#### <span id="head78">18.3 最终版Account项目（包含所有工具、功能以及优化）</span>



###### <span id="head79"> 项目分层</span>

![img](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200529123658.png) 

###### <span id="head80"> Properties配置文件</span>

```properties
driver=com.mysql.jdbc.Driver
url=jdbc:mysql://localhost:3306/account?useUnicode=true&characterEncoding=utf8
username=root
password=Mylifes1110
```

###### <span id="head81"> entity</span>

```java
package www.mylifes1110.jdbc.day5.t2.java.entity;

public class Account {
private String card_id;
private String password;
private String username;
private double balance;
private String phone;

public Account() {
}

public Account(String card_id, String password, String username, double balance, String phone) {
this.card_id = card_id;
this.password = password;
this.username = username;
this.balance = balance;
this.phone = phone;
}

public String getCard_id() {
return card_id;
}

public void setCard_id(String card_id) {
this.card_id = card_id;
}

public String getPassword() {
return password;
}

public void setPassword(String password) {
this.password = password;
}

public String getUsername() {
return username;
}

public void setUsername(String username) {
this.username = username;
}

public double getBalance() {
return balance;
}

public void setBalance(double balance) {
this.balance = balance;
}

public String getPhone() {
return phone;
}

public void setPhone(String phone) {
this.phone = phone;
}

@Override
public String toString() {
return "Account{" +
"card_id='" + card_id + '\'' +
", password='" + password + '\'' +
", username='" + username + '\'' +
", balance=" + balance +
", phone='" + phone + '\'' +
'}';
}
}
```

###### <span id="head82"> DateUtils</span>

```java
package www.mylifes1110.jdbc.day5.t2.java.utils;

import java.text.ParseException;
import java.text.SimpleDateFormat;

/**
* 日期转换
* <p>
* 字符串转换为UtilDate
* 字符串转换为SqlDate
* UtilDate转换为SqlDate
* 注意：SqlDate转换为UtilDate是不可以的，因为UtilDate是SqlDate的父类
*/
public class DateUtils {
private static final SimpleDateFormat SIMPLE_DATE_FORMAT = new SimpleDateFormat("yyyy-MM-dd");

/**
* 字符串转换为UtilDate
*/
public static java.util.Date strToUtilDate(String string) {
try {
return SIMPLE_DATE_FORMAT.parse(string);
} catch (ParseException e) {
e.printStackTrace();
}
return null;
}

/**
* UtilDate转换为SqlDate
*/
public static java.sql.Date utilToSqlDate(java.util.Date date) {
return new java.sql.Date(date.getTime());
}

/**
* 字符串转换为SqlDate
* 此转换不常用，而在JDBC中常用的转换只是前两个
*/
public static java.sql.Date strToSqlDate(String string) {
try {
java.util.Date date = SIMPLE_DATE_FORMAT.parse(string);
return new java.sql.Date(date.getTime());
} catch (ParseException e) {
e.printStackTrace();
}
return null;
}
}
```

###### <span id="head83"> DBUtils</span>

```java
package www.mylifes1110.jdbc.day5.t2.java.utils;

import java.io.IOException;
import java.io.InputStream;
import java.sql.*;
import java.util.Properties;

/**
* 数据库工具类
* 1.创建连接对象并连接数据库
* 2.释放资源
* 3.加入开启、提交、回滚事务
*/
public class DBUtils {
/**
* 新建Properties集合，存放配置信息，以便后续流的读取
*/
private static final Properties PROPERTIES = new Properties();

/**
* 所有操作即为单线程操作，应用了多个Connection对象，我们将一个线程绑定一个Connection连接使用
*/
private static final ThreadLocal<Connection> THREAD_LOCAL = new ThreadLocal<>();

/**
* 读取配置文件类加载时，只需要加载一次即可
*/
static {
/**
* 使用类自身带的流读取配置，无需关闭
*/
InputStream inputStream = DBUtils.class.getResourceAsStream("/db.properties");
try {
/**
* 通过流将配置信息的内容分割成键值对，并连接数据库
*/
PROPERTIES.load(inputStream);
/**
* 注册加载驱动
*/
Class.forName(PROPERTIES.getProperty("driver"));
} catch (IOException e) {
e.printStackTrace();
} catch (ClassNotFoundException e) {
e.printStackTrace();
}
}

/**
* 获取连接对象
*/
public static Connection getConnection() {
/**
* 在ThreadLocal里取连接对象
*/
Connection connection = THREAD_LOCAL.get();
/**
* connection对象为空则创建连接对象
*/
if (connection == null) {
try {
connection = DriverManager.getConnection(PROPERTIES.getProperty("url"), PROPERTIES.getProperty("username"), PROPERTIES.getProperty("password"));
/**
* 把连接对象存入ThreadLocal里
*/
THREAD_LOCAL.set(connection);
} catch (SQLException e) {
e.printStackTrace();
}
}
return connection;
}

/**
* 释放资源
*/
public static void closeAll(Connection connection, Statement statement, ResultSet resultSet) {
try {
if (resultSet != null) {
resultSet.close();
}
if (statement != null) {
statement.close();
}
if (connection != null) {
connection.close();
/**
* 关闭连接后，移除线程中绑定的连接对象
*/
THREAD_LOCAL.remove();
}
} catch (SQLException e) {
e.printStackTrace();
}
}

/**
* 开启事务
*/
public static void begin() {
Connection connection = getConnection();
try {
connection.setAutoCommit(false);
} catch (SQLException e) {
e.printStackTrace();
}
}

/**
* 提交事务
*/
public static void commit() {
Connection connection = getConnection();
try {
connection.commit();
} catch (SQLException e) {
e.printStackTrace();
} finally {
DBUtils.closeAll(connection, null, null);
}
}

/**
* 回滚事务
*/
public static void rollback() {
Connection connection = getConnection();
try {
connection.rollback();
} catch (SQLException e) {
e.printStackTrace();
} finally {
DBUtils.closeAll(connection, null, null);
}
}
}
```

###### <span id="head84"> DaoUtils</span>

```java
package www.mylifes1110.jdbc.day5.t2.java.utils;

import www.mylifes1110.jdbc.day5.t2.java.advanced.RowMapper;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class DaoUtils<T> {
/**
* 公共处理增、删、改方法
* sql语句，参数列表
*
* @param sql  执行的sql语句
* @param args 参数列表，占位符赋值
* @return 受影响行数
*/
public int commonsUpdate(String sql, Object... args) {
Connection connection = null;
PreparedStatement preparedStatement = null;

connection = DBUtils.getConnection();
try {
preparedStatement = connection.prepareStatement(sql);
for (int i = 0; i < args.length; i++) {
preparedStatement.setObject(i + 1, args[i]);
}
return preparedStatement.executeUpdate();
} catch (SQLException e) {
e.printStackTrace();
} finally {
DBUtils.closeAll(null, preparedStatement, null);
}
return 0;
}

/**
* 公共查询方法（可查询单条信息，也可以查询多条信息，可以查任何一张表）
* 实现了复用性
*
* @param sql       执行的sql语句
* @param rowMapper 封装对象的接口，准备接口回调
* @param args      参数列表，占位符赋值
* @return 返回查询到的对象的集合
*/
public List<T> commonsSelect(String sql, RowMapper<T> rowMapper, Object... args) {
List<T> elements = new ArrayList<>();

Connection connection = null;
PreparedStatement preparedStatement = null;
ResultSet resultSet = null;

connection = DBUtils.getConnection();
try {
preparedStatement = connection.prepareStatement(sql);
if (args != null) {
for (int i = 0; i < args.length; i++) {
preparedStatement.setObject(i + 1, args[i]);
}
}
resultSet = preparedStatement.executeQuery();
while (resultSet.next()) {
/**
* 根据查询到的结果完成ORM，如何进行对象的创建及赋值呢？
* 接口回调---调用者提供了一个封装方法ORM
*/
T t = rowMapper.getRow(resultSet);
elements.add(t);
}
} catch (SQLException e) {
e.printStackTrace();
} finally {
DBUtils.closeAll(null, preparedStatement, resultSet);
}
return elements;
}
}
```

###### <span id="head85"> AccountDao</span>

```java
package www.mylifes1110.jdbc.day5.t2.java.dao;

import www.mylifes1110.jdbc.day5.t2.java.entity.Account;

import java.util.List;

/**
* 增、删、改、查一条信息、查所有信息
*/
public interface AccountDao {
/**
* 新增操作
*
* @param account Account对象
* @return 返回一条影响行数
*/
int insert(Account account);

/**
* 删除操作
*
* @param card_id 卡号
* @return 返回一条受影响行数
*/
int delete(String card_id);

/**
* 修改操作
*
* @param account Account对象
* @return 返回一条影响行数
*/
int update(Account account);

/**
* 查询一条信息操作
*
* @param card_id 卡号
* @return 根据卡号返回一条Account对象信息
*/
Account select(String card_id);

/**
* 查询所有信息操作
*
* @return 查询出所有信息返回所有Account对象集合
*/
List<Account> selectAll();
}
```

###### <span id="head86"> AccountDaoImpl</span>

```java
package www.mylifes1110.jdbc.day5.t2.java.dao.impl;

import www.mylifes1110.jdbc.day5.t2.java.advanced.impl.AccountRowMapper;
import www.mylifes1110.jdbc.day5.t2.java.dao.AccountDao;
import www.mylifes1110.jdbc.day5.t2.java.entity.Account;
import www.mylifes1110.jdbc.day5.t2.java.utils.DaoUtils;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.List;

/**
* 数据库访问层（持久层）
*/
public class AccountDaoImpl implements AccountDao {
private Connection connection = null;
private PreparedStatement preparedStatement = null;
private ResultSet resultSet = null;
/**
* DAO通用的方法工具
*/
private DaoUtils<Account> daoUtils = new DaoUtils<>();

/**
* 新增功能实现
*
* @param account Account对象
* @return 返回一个受影响行数
*/
@Override
public int insert(Account account) {
String sql = "insert into t_account (card_id, password, username, balance, phone) values (?, ?, ?, ?, ?)";
Object[] args = {account.getCard_id(), account.getUsername(), account.getPassword(), account.getBalance(), account.getPhone()};
return daoUtils.commonsUpdate(sql, args);
}

/**
* 删除功能实现
*
* @param card_id 卡号
* @return 返回一个受影响行数
*/
@Override
public int delete(String card_id) {
return daoUtils.commonsUpdate("delete from t_account where card_id = ?", card_id);
}

/**
* 修改功能实现
*
* @param account Account对象
* @return 返回一个受影响行数
*/
@Override
public int update(Account account) {
String sql = "update t_account set password = ?, username = ?, balance = ?, phone = ? where card_id = ?";
Object[] args = {account.getPassword(), account.getUsername(), account.getBalance(), account.getPhone(), account.getCard_id()};
return daoUtils.commonsUpdate(sql, args);
}

/**
* 查询一条信息操作实现
*
* @param card_id 卡号
* @return 返回查询到的Account对象
*/
@Override
public Account select(String card_id) {
List<Account> accountList = daoUtils.commonsSelect("select card_id, password, username, balance, phone from t_account where card_id = ?", new AccountRowMapper(), card_id);
if (accountList != null && accountList.size() != 0) {
return accountList.get(0);
}
return null;
}

/**
* 查询所有信息操作实现
*
* @return 返回查询所有信息的集合
*/
@Override
public List<Account> selectAll() {
return daoUtils.commonsSelect("select card_id, password, username, balance, phone from t_account", new AccountRowMapper());
}
}
```

###### <span id="head87"> AccountService</span>

```java
package www.mylifes1110.jdbc.day5.t2.java.service;

import www.mylifes1110.jdbc.day5.t2.java.entity.Account;

import java.util.List;

public interface AccountService {
/**
* 转账功能
*
* @param card_id   付款方卡号
* @param password  付款方卡密
* @param toCard_id 收款方卡号
* @param money     转账金额
* @return 返回字符串提示信息
*/
String transfer(String card_id, String password, String toCard_id, double money);

/**
* 注册功能
*
* @param account Account对象
* @return 返回字符串提示信息
*/
String register(Account account);

/**
* 登录功能
* @param card_id 卡号
* @param password 卡密
* @return 返回字符串提示信息
*/
Account login(String card_id, String password);

/**
* 查询所有账户信息（经理权限）
*/
List<Account> showAllAccount();

/**
* 销户
* @param card_id
* @return
*/
String delete(String card_id);

/**
* 查一条信息
* @param card_id 卡号
* @return 返回查到的一个Account对象
*/
Account select(String card_id);
}
```

###### <span id="head88"> AccountServiceImpl</span>

```java
package www.mylifes1110.jdbc.day5.t2.java.service.impl;

import www.mylifes1110.jdbc.day5.t2.java.dao.impl.AccountDaoImpl;
import www.mylifes1110.jdbc.day5.t2.java.entity.Account;
import www.mylifes1110.jdbc.day5.t2.java.service.AccountService;
import www.mylifes1110.jdbc.day5.t2.java.utils.DBUtils;

import java.util.List;

/**
* 业务逻辑层
*/
public class AccountServiceImpl implements AccountService {
private AccountDaoImpl accountDao = new AccountDaoImpl();

/**
* 转账功能实现
*
* @param card_id   付款方卡号
* @param password  付款方卡密
* @param toCard_id 收款方卡号
* @param money     转账金额
* @return 返回字符串提示信息
*/
@Override
public String transfer(String card_id, String password, String toCard_id, double money) {
String result = "转账失败！";

try {
DBUtils.begin();
Account account = null;
try {
account = accountDao.select(card_id);
} catch (Exception e) {
throw new RuntimeException("卡号不存在！");
}

if (!account.getPassword().equals(password)) {
throw new RuntimeException("密码错误！");
}
if (account.getBalance() < money) {
throw new RuntimeException("卡内余额不足！");
}
Account toAccount = null;
try {
toAccount = accountDao.select(toCard_id);
} catch (Exception e) {
throw new RuntimeException("收款方卡号不存在！");
}

account.setBalance(account.getBalance() - money);
accountDao.update(account);
toAccount.setBalance(toAccount.getBalance() + money);
accountDao.update(toAccount);

DBUtils.commit();
return "转账成功！";
} catch (Exception e) {
e.printStackTrace();
DBUtils.rollback();
}
return result;
}

/**
* 注册功能实现
*
* @param account Account对象
* @return 返回字符串提示信息
*/
@Override
public String register(Account account) {
try {
DBUtils.begin();
Account checkAccount = accountDao.select(account.getCard_id());
if (checkAccount != null) {
throw new RuntimeException("卡号已存在！");
}
int result = accountDao.insert(account);
if (result > 0) {
DBUtils.commit();
return "注册成功！";
} else {
return "注册失败！";
}
} catch (Exception e) {
DBUtils.rollback();
e.printStackTrace();
}
return "注册失败！";
}

/**
* 登录功能实现
*
* @param card_id  卡号
* @param password 卡密
* @return 返回一个校验过的Account对象；没有校验通过就返回null
*/
@Override
public Account login(String card_id, String password) {
Account checkAccount = accountDao.select(card_id);
if (checkAccount == null)
throw new RuntimeException("卡号不存在！");
if (checkAccount.getPassword().equals(password)) {
System.out.println("登陆成功！");
return checkAccount;
}
System.out.println("登录失败！");
return null;
}

@Override
public List<Account> showAllAccount() {
return accountDao.selectAll();
}

/**
* 删除功能实现
*
* @param card_id 卡号
* @return 返回字符串提示信息
*/
@Override
public String delete(String card_id) {
try {
DBUtils.begin();
int result = accountDao.delete(card_id);
if (result > 0) {
DBUtils.commit();
return "删除成功！";
} else {
return "删除失败！";
}
} catch (Exception e) {
DBUtils.rollback();
e.printStackTrace();
}
return null;
}

@Override
public Account select(String card_id) {
Account result = accountDao.select(card_id);
if (result != null) {
return result;
}
System.out.println("您查询的卡号信息不存在！");
return null;
}
}
```

###### <span id="head89"> RowMapper</span>

```java
package www.mylifes1110.jdbc.day5.t2.java.advanced;

import java.sql.ResultSet;

/**
* 约定，接受结果集。创建对象
*/
public interface RowMapper<T> {
public T getRow(ResultSet resultSet);
}
```

###### <span id="head90"> AccountRowMapper</span>

```java
package www.mylifes1110.jdbc.day5.t2.java.advanced.impl;

import www.mylifes1110.jdbc.day5.t2.java.advanced.RowMapper;
import www.mylifes1110.jdbc.day5.t2.java.entity.Account;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
* 接口实现类，明确创建的对象，并返回
*/
public class AccountRowMapper implements RowMapper<Account> {

@Override
public Account getRow(ResultSet resultSet) {
Account account = null;
try {
account = new Account(resultSet.getString(1), resultSet.getString(2), resultSet.getString(3), resultSet.getDouble(4), resultSet.getString(5));
} catch (SQLException e) {
e.printStackTrace();
}
return account;
}
}
```

###### <span id="head91"> TestDemo</span>

```java
package www.mylifes1110.jdbc.day5.t2.java.view;

import www.mylifes1110.jdbc.day5.t2.java.service.impl.AccountServiceImpl;

/**
* 测试类
* 注意：有些功能在测试的时候不能一起测试，会有冲突，所以我把他们全都注释了！
*/
public class TestDemo {
public static void main(String[] args) {
AccountServiceImpl accountService = new AccountServiceImpl();
/**
* 测试转账功能
*/
//        String result = accountService.transfer("1", "123456", "2", 100);
//        System.out.println(result);

/**
* 测试注册功能
*/
//        Account account = new Account("4", "123456", "lala", 100, "11111111122");
//        String result = accountService.register(account);
//        System.out.println(result);

/**
* 测试登录功能
*/
//        accountService.login("1", "123456");

/**
* 测试查看所有信息
*/
//        accountService.showAllAccount().forEach(System.out::println);

/**
* 测试查看一条信息
*/
//        System.out.println(accountService.select("1"));

/**
* 测试删除功能
*/
//        accountService.delete("4");
}
}
```



### <span id="head92"> 十九、Apache的DbUtils使用</span>

------

> Commons DbUtils 是Apache组织提供的一个对JDBC进行简单封装的开源工具类库，使用它能勾简化JDBC应用程序的开发！同时，不会影响程序的性能



#### <span id="head93">19.1 DbUtils简介</span>

> - DbUtils是Java编程中数据库操作实用小工具，小巧、简单、实用
>   - 对于数据表的查询操作，可以吧结果转换为List、Array、Set等集合。便于操作
>   - 对于数据表的DML操作，也变得很简单(只需要写SQL语句);



##### <span id="head94">19.1.1 DbUtils主要包含</span>

> - ResultSetHandler接口：转换类型接口
>
>   - BeanHandler类：实现类，把一条记录转换成对象
>   - BeanListHandler类：实现类，把多条记录转换成List集合。
>   - ScalarHandler类：实现类，适合获取一行一列的数据。
>
> - QueryRunner：执行sql语句的类
>
>   - 增、删、改：update();
>
>   - 查询：query();
>
>     





#### <span id="head95">19.2 DbUtils的使用步骤</span>

> - 导入jar包
>   - mysql连接驱动mysql-connector-java-5.1.25-bin.jar
>   - druid-1.1.5.jar
>   - database.properties配置文件
>   - commons-dbutils-1.6.jar



##### <span id="head96">19.2.1 代码实现</span>

##### <span id="head97"> DBUtils工具类</span>

```java
package com.project.utils;

import com.alibaba.druid.pool.DruidDataSource;
import com.alibaba.druid.pool.DruidDataSourceFactory;

import javax.sql.DataSource;
import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

/**
* 连接池工具类
*/
public class DBUtils {
private static DruidDataSource dataSource;

static {
Properties properties = new Properties();
InputStream inputStream = DBUtils.class.getResourceAsStream("/db.properties");
try {
properties.load(inputStream);
dataSource = (DruidDataSource) DruidDataSourceFactory.createDataSource(properties);
} catch (IOException e) {
e.printStackTrace();
} catch (Exception e) {
e.printStackTrace();
}
}
// 返回一个数据源
public static DataSource getDataSource(){
return dataSource;
}
}

```

##### <span id="head98">UserDaoImpl 数据访问对象</span>

```java
package com.project.dao.impl;

import com.project.dao.UserDao;
import com.project.entity.User;
import com.project.utils.DBUtils;
import org.apache.commons.dbutils.QueryRunner;
import org.apache.commons.dbutils.handlers.BeanHandler;
import org.apache.commons.dbutils.handlers.BeanListHandler;

import java.sql.SQLException;
import java.util.List;

public class UserDaoImpl implements UserDao {
//1.创建QueryRunner对象，并传递一个数据源对象
private QueryRunner queryRunner = new QueryRunner(DBUtils.getDataSource());
@Override
public int insert(User user) {
Object[] params={user.getId(),user.getUsername(),user.getPassword(),user.getSex(),user.getEmail(),user.getAddress()};
try {
return queryRunner.update("insert into user (id,username,password,sex,email,address) values(?,?,?,?,?,?)",params);
} catch (SQLException e) {
e.printStackTrace();
}
return 0;
}

@Override
public int update(User user) {
Object[] params={user.getUsername(),user.getPassword(),user.getSex(),user.getEmail(),user.getAddress(),user.getId()};
try {
return queryRunner.update("update user set username=?,password=?,sex=?,email=?,address=? where id = ?",params);
} catch (SQLException e) {
e.printStackTrace();
}
return 0;
}

@Override
public int delete(int id) {
try {
return queryRunner.update("delete from user where id = ?",id);
} catch (SQLException e) {
e.printStackTrace();
}
return 0;
}

@Override
public User select(int id) {
try {
//把查询到的记录封装成 指定对象
return queryRunner.query("select * from user where id = ?", new BeanHandler<User>(User.class), id);
} catch (SQLException e) {
e.printStackTrace();
}
return null;
}

/**
* 查询所有
* @return
*/
@Override
public List<User> selectAll() {
try {
return queryRunner.query("select * from user;",new BeanListHandler<User>(User.class));
} catch (SQLException e) {
e.printStackTrace();
}
return null;
}
}
```







