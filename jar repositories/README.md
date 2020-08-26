# 🆒Maven仓库

------

**声明：** 关于这个jar包库，我只是在里面存储了学习和开发中常用的jar包以及对应的Utils工具类。提供的版本都是一般兼容性强和下载次数居多的版本，所以大家放心使用！

**jar包说明：** jar包说明以表格的形式列出，主要是给予jar包的功能描述与联用，方便大家使用和搜索下载！我把jar包说明放在了下载地址使用说明的后面供大家参考！

**注意：** 如果你需要新版本或者其他版本jar包，请在下载网址中搜索jar包名称并下载，网址的使用说明放在了下方供大家参考。

> **打包Maven本地仓库：** 链接：https://pan.baidu.com/s/1pURaTi6RI3RGjgf7vgfIwQ 提取码：hk17

> **下载地址：** [https://mvnrepository.com/](https://mvnrepository.com/)

------

**MVN PEPOSITORY下载jar文件使用说明：** 

> 输入所需jar包名称到搜索框中，然后点击搜索按钮即可显示结果！

![image-20200616111418839](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200616111423.png)

> 点击第一条搜索结果，会查询出如下内容：
>
> **注意：** 挑选所需jar包的大版本号，在大版本内选择下载次数最多的jar包版本，然后点击版本下载入口！

![image-20200616112444879](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200616112447.png)

> 点击jar即可，后面的跟随的（2.6 MB）即是jar包的大小！下载后会弹出下载框，很快就能下载好！

![image-20200616112800157](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200616112802.png)



------



**MVN PEPOSITORY查找Maven依赖使用说明：** 

> 根据查找jar文件的方式，查找依赖坐标，查找后复制依赖坐标信息

![image-20200617003002005](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200617003149.png)

> 在项目的`pom.xml`文件中添加依赖
>
> - 首先添加\<dependencies>标签
> - 最后添加复制好的依赖坐标
>
> **注意：** 导入依赖可以导入多个所需jar文件的依赖，依次在\<dependencies>标签内添加依赖坐标即可

![image-20200617003853705](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200617003856.png)

> 导入依赖后，你会发现`pom.xml`文件中的依赖坐标是红色报错的，而在IDEA的右下角有那么一个框。这时候需要点击框内提示信息在maven仓库中同步下载依赖到项目中

![image-20200617004515463](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200617004827.png)

> 导入并同步下载好的依赖，可以通过项目和IDEA中Maven控制面板查看

![](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200617005658.png)

> 其他Maven操作，请参考[**Maven教程**](https://github.com/Ziphtracks/JavaLearningmanual/blob/master/docs/developer-tools/Maven%E5%BA%94%E7%94%A8.md)



------



**jar包说明** 

| 名称            | 描述                                                         |
| --------------- | ------------------------------------------------------------ |
| aliyun-java-SMS | 用于阿里云短信服务，除了导入阿里云的两个jar包外，还需要导入gosn的jar包联用 |
| beanutils       | 用于后台封装JavaBean的Setter数据，其中beanutils是核心jar包，其他为辅助包，需要联用。使用时需要注意数据库与后端代码字段的一致 |
| c3p0            | c3p0连接池，分为两个jar包，一般需要与dbutils和mysql驱动包联用 |
| dbutils         | 封装好的JDBC的工具类库                                       |
| druid           | druid连接池，一般需要与dbutils和mysql驱动包联用              |
| fastjson        | 是一个可以实现Java 对象和JSON 格式互转的Java类库             |
| fileupload      | 用于后端的文章上传操作，jar包分为两个，其中io包是必不可少的IO读写类库 |
| gson            | Google公司提供，是一个可以实现Java 对象和JSON 格式互转的Java类库 |
| jackson         | apache公司提供，是一个Java对象与json对象和xml文档互转的Java类库，被称为“最好的JavaJson解析类库” |
| jstl            | JSTL标签库常用于JSP开发                                      |
| junit           | Junit单元测试分为4和5两个版本，其中的jar包分为两个，需要联用 |
| lombok          | 常用于IDEA插件lombok，其jar包内提供了Getter/Setter、有参/无参构造器、toString等等注解，由此使用注解就可以省略了大量编写，提高了开发效率 |
| mysql           | JDBC数据库连接操作，所需要的mysql驱动包                      |
| mail            | 用于发送邮箱验证的jar文件                                    |
| ValidateCode    | 该jar文件用于生成验证码                                      |
| net             | Java编程思想一书中所引入的jar包                              |

