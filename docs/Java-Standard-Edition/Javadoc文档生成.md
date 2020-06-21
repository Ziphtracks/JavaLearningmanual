* [Javadoc文档](#javadoc%E6%96%87%E6%A1%A3)
    * [一、什么是Javadoc文档](#%E4%B8%80%E4%BB%80%E4%B9%88%E6%98%AFjavadoc%E6%96%87%E6%A1%A3)
    * [二、Javadoc文档注释](#%E4%BA%8Cjavadoc%E6%96%87%E6%A1%A3%E6%B3%A8%E9%87%8A)
    * [三、常用注释文档标记](#%E4%B8%89%E5%B8%B8%E7%94%A8%E6%B3%A8%E9%87%8A%E6%96%87%E6%A1%A3%E6%A0%87%E8%AE%B0)
    * [四、Javadoc选项说明](#%E5%9B%9Bjavadoc%E9%80%89%E9%A1%B9%E8%AF%B4%E6%98%8E)
      * [4\.1 选项说明](#41-%E9%80%89%E9%A1%B9%E8%AF%B4%E6%98%8E)
      * [4\.2 标记的顺序](#42-%E6%A0%87%E8%AE%B0%E7%9A%84%E9%A1%BA%E5%BA%8F)
      * [4\.3 可以多次使用标记](#43-%E5%8F%AF%E4%BB%A5%E5%A4%9A%E6%AC%A1%E4%BD%BF%E7%94%A8%E6%A0%87%E8%AE%B0)
    * [五、命令生成doc文档](#%E4%BA%94%E5%91%BD%E4%BB%A4%E7%94%9F%E6%88%90doc%E6%96%87%E6%A1%A3)
      * [5\.1 测试所在的目录结构](#51-%E6%B5%8B%E8%AF%95%E6%89%80%E5%9C%A8%E7%9A%84%E7%9B%AE%E5%BD%95%E7%BB%93%E6%9E%84)
      * [5\.2 命令生成Javadoc文档步骤](#52-%E5%91%BD%E4%BB%A4%E7%94%9F%E6%88%90javadoc%E6%96%87%E6%A1%A3%E6%AD%A5%E9%AA%A4)
        * [方式一：单个或多个\.java文件生成doc文档](#%E6%96%B9%E5%BC%8F%E4%B8%80%E5%8D%95%E4%B8%AA%E6%88%96%E5%A4%9A%E4%B8%AAjava%E6%96%87%E4%BB%B6%E7%94%9F%E6%88%90doc%E6%96%87%E6%A1%A3)
        * [方式二：指定源文件路径生成doc文档](#%E6%96%B9%E5%BC%8F%E4%BA%8C%E6%8C%87%E5%AE%9A%E6%BA%90%E6%96%87%E4%BB%B6%E8%B7%AF%E5%BE%84%E7%94%9F%E6%88%90doc%E6%96%87%E6%A1%A3)
        * [查看生成的doc目录](#%E6%9F%A5%E7%9C%8B%E7%94%9F%E6%88%90%E7%9A%84doc%E7%9B%AE%E5%BD%95)
    * [六、IDEA生成doc目录](#%E5%85%ADidea%E7%94%9F%E6%88%90doc%E7%9B%AE%E5%BD%95)

# Javadoc文档

### 一、什么是Javadoc文档

> javadoc是Sun公司提供的一个技术，它从程序源代码中抽取类、方法、成员等注释形成一个和源代码配套的API帮助文档。也就是说，只要在编写程序时以一套特定的标签作注释，在程序编写完成后，通过Javadoc就可以同时形成程序的开发文档了。
>
> javadoc命令是用来生成自己API文档的，使用方式：使用命令行在目标文件所在目录输入`javadoc +文件名.java`。



### 二、Javadoc文档注释

> Java注释分类：
>
> - `//注释内容`：单行注释，不支持换行
> - `/*注释内容*/`：多行注释，支持换行
> - Javadoc文档注释格式如下，支持换行，可以生成Javadoc文档【重点】

```java
/**
 * 文档注释
 */
```



### 三、常用注释文档标记

**参考官方文档：** [javadoc - The Java API Documentation Generator](https://docs.oracle.com/javase/1.5.0/docs/tooldocs/windows/javadoc.html#@serialData)

| 常用标签               | 说明                                                         |
| ---------------------- | ------------------------------------------------------------ |
| @author 作者           | 作者标识                                                     |
| @version 版本号        | 版本号                                                       |
| @param 参数名 描述     | 方法的入参名及描述信息，如入参有特别要求，可在此注释。       |
| @return 描述           | 对函数返回值的注释                                           |
| @deprecated 过期文本   | 标识随着程序版本的提升，当前API已经过期，仅为了保证兼容性依然存在，以此告之开发者不应再用这个API。 |
| @throws异常类名        | 构造函数或方法所会抛出的异常。                               |
| @exception 异常类名    | 同@throws。                                                  |
| @see 引用              | 查看相关内容，如类、方法、变量等。                           |
| @since 描述文本        | API在什么程序的什么版本后开发支持。                          |
| {@link包.类#成员 标签} | 链接到某个特定的成员对应的文档中。                           |
| {@value}               | 当对常量进行注释时，如果想将其值包含在文档中，则通过该标签来引用常量的值。 |
|                        |                                                              |
| **不常用标签**         | **说明**                                                     |
| @serial                | 说明一个序列化属性                                           |
| @serialField           | 说明一个ObjectStreamField组件                                |
| @serialData            | 说明通过writeObject( ) 和 writeExternal( )方法写的数据       |
| {@docRoot}             | 指明当前文档根目录的路径                                     |
| {@inheritDoc}          | 从直接父类继承的注释                                         |
| {@literal}             | 显示文本而不将其解释为HTML标记或嵌套的javadoc标记。          |
| {@code}                | 以字体 显示文本，`code`而不将文本解释为HTML标记或嵌套的Javadoc标记。 |



### 四、Javadoc选项说明

> **Javadoc命令格式：** javadoc [选项] [软件包名称] [源文件]



#### 4.1 选项说明

| 选项           | 说明                                             |
| -------------- | ------------------------------------------------ |
| -overview      | <文件> 读取 HTML 文件的概述文档                  |
| -public        | 仅显示公共类和成员                               |
| -protected     | 显示受保护/公共类和成员（默认）                  |
| -package       | 显示软件包/受保护/公共类和成员                   |
| -private       | 显示所有类和成员                                 |
| -help          | 显示命令行选项并退出                             |
| -doclet        | <类> 通过替代 doclet 生成输出                    |
| -docletpath    | <路径> 指定查找 doclet 类文件的位置              |
| -sourcepath    | <路径列表> 指定查找源文件的位置                  |
| -classpath     | <路径列表> 指定查找用户类文件的位置              |
| -exclude       | <软件包列表> 指定要排除的软件包的列表            |
| -subpackages   | <子软件包列表> 指定要递归装入的子软件包          |
| -breakiterator | 使用 BreakIterator 计算第 1 句                   |
| -bootclasspath | <路径列表> 覆盖引导类加载器所装入的类文件的位置  |
| -source        | <版本> 提供与指定版本的源兼容性                  |
| -extdirs       | <目录列表> 覆盖安装的扩展目录的位置              |
| -verbose       | 输出有关 Javadoc 正在执行的操作的消息            |
| -locale        | <名称> 要使用的语言环境，例如 en_US 或 en_US_WIN |
| -encoding      | <名称> 源文件编码名称                            |
| -quiet         | 不显示状态消息                                   |
| -J<标志>       | 直接将 <标志> 传递给运行时系统                   |
| -X             | 输出非标准选项的提要                             |

| 标准doclet选项         | 说明                                                         |
| ---------------------- | ------------------------------------------------------------ |
| -d                     | \<directory>输出文件的目标目录                               |
| -use                   | 创建类和程序包用法页面                                       |
| -version               | 包含 @version 段                                             |
| -author                | 包含 @author 段                                              |
| -docfilessubdirs       | 递归复制文档文件子目录                                       |
| -splitindex            | 将索引分为每个字母对应一个文件                               |
| -windowtitle           | \<text>文档的浏览器窗口标题                                  |
| -doctitle              | \<html-code>包含概览页面的标题                               |
| -header                | \<html-code>包含每个页面的页眉文本                           |
| -footer                | \<html-code>包含每个页面的页脚文本                           |
| -top                   | \<html-code>包含每个页面的顶部文本                           |
| -bottom                | \<html-code>包含每个页面的底部文本                           |
| -link <url>            | 创建指向位于 \<url> 的 javadoc 输出的链接                    |
| -linkoffline           | \<url> \<url2>利用位于 \<url2> 的程序包列表链接至位于 \<url> 的文档 |
| -excludedocfilessubdir | \<name1>:.. 排除具有给定名称的所有文档文件子目录。           |
| -group                 | \<name> \<p1>:\<p2>.. 在概览页面中, 将指定的程序包分组       |
| -nocomment             | 不生成说明和标记, 只生成声明。                               |
| -nodeprecated          | 不包含 @deprecated 信息                                      |
| -noqualifier           | \<name1>:\<name2>:... 输出中不包括指定限定符的列表。         |
| -nosince               | 不包含 @since 信息                                           |
| -notimestamp           | 不包含隐藏时间戳                                             |
| -nodeprecatedlist      | 不生成已过时的列表                                           |
| -notree                | 不生成类分层结构                                             |
| -noindex               | 不生成索引                                                   |
| -nohelp                | 不生成帮助链接                                               |
| -nonavbar              | 不生成导航栏                                                 |
| -serialwarn            | 生成有关 @serial 标记的警告                                  |
| -tag                   | \<name>:\<locations>:\<header> 指定单个参数定制标记          |
| -taglet                | 要注册的 Taglet 的全限定名称                                 |
| -tagletpath            | Taglet 的路径                                                |
| -charset               | \<charset> 用于跨平台查看生成的文档的字符集。                |
| -helpfile              | \<file>包含帮助链接所链接到的文件                            |
| -linksource            | 以 HTML 格式生成源文件                                       |
| -sourcetab             | \<tab length>指定源中每个制表符占据的空格数                  |
| -keywords              | 使程序包, 类和成员信息附带 HTML 元标记                       |
| -stylesheetfile        | \<path>用于更改生成文档的样式的文件                          |
| -docencoding           | \<name>指定输出的字符编码                                    |



#### 4.2 标记的顺序

> 1. @author (classes and interfaces only, required)
> 2. @version (classes and interfaces only, required. See footnote 1)
> 3. @param (methods and constructors only)
> 4. @return (methods only)
> 5. @exception (@throws is a synonym added in Javadoc 1.2)
> 6. @see
> 7. @since
> 8. @serial (or @serialField or @serialData)
> 9. @deprecated (see  How and When To Deprecate APIs)



#### 4.3 可以多次使用标记

> 1. @author 标记应按时间顺序排列，并用逗号分隔。
> 2. @ param 标记应该在参数声明的顺序列出，这使它更容易在视觉上与声明相匹配的列表。
> 3. @throws 标记 (类同 @exception)应按字母顺序列出的例外的名字。
> 4. @see 标记遵循由近到远，参数由少到多，由上到下的顺序。



### 五、命令生成doc文档

#### 5.1 测试所在的目录结构

项目所在目录为：`d:\Code\javase\firstdoc`

目录结构如下：

![image-20200602150018307](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200602150021.png)

创建的两个类均有javadoc文档注释如下：

Calculator：

```java
package com.mylifes1110.java;

/**
 * @author Ziph
 * @since 1.8
 * @version 1.0
 */
public class Calculator {
    /**
     * 无参构造器
     */
    public Calculator() {
    }

    /**
     * 计算两个数字相加
     * @param num1 整数1
     * @param num2 整数2
     * @return 两个整数之和
     */
    public int add(int num1, int num2) {
        return num1 + num2;
    }
}
```

CalculatorTest：

```java
package com.mylifes1110.test;

/**
 * @author Ziph
 * @since 1.8
 * @version 1.0
 */
public class CalculatorTest {
    /**
     * 测试
     */
    public CalculatorTest() {
    }
}
```



#### 5.2 命令生成Javadoc文档步骤

> **生成好的Javadoc文档index.html是文档入口，打开后即可看见doc文档内容。** 



##### 方式一：单个或多个.java文件生成doc文档

> 这里我们生成Calculator.java的doc文档，首先先进入到Calculator.java所在目录，然后去此文件夹中打开DOS命令窗口，此方式生成的doc文档是默认创建了.java文件所在的包，输入以下命令即可：
>
> **命令格式：** javadoc -d 文档存储目录 -encoding utf-8 -charset utf-8 Xxx.java
>
> **参数说明：** 
>
> - **-d** 指定API文档的输出目录，默认是当前目录。建议总是指定该参数。
> - **-encoding UTF-8** 表示你的源代码（含有符合 JavaDoc 标准的注释）是基于 UTF-8 编码的，以免处理过程中出现中文等非英语字符乱码
> - **-charset UTF-8** 表示在处理并生成 JavaDoc 超文本时使用的字符集也是以 UTF-8 为编码，目前所有浏览器都支持 UTF-8，这样最具有通用性，支持中文非常好
>
> **注意：** 如果此文件夹内有多个.java文件需要生成，我们可以在指定.java文件的时候使用`*.java`。这里utf-8编码相关是指定文档的编码字符集，如果与项目或系统编码不一致可能会造成生成的doc文档乱码。

```java
javadoc -d d:\Code\javase\firstdoc\doc -encoding utf-8 -charset utf-8 Calculator.java
```

![image-20200602151026465](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200602151029.png)



##### 方式二：指定源文件路径生成doc文档

> 由于方式一每次生成doc文档都需要进入到.java文件所在目录操作，借此我们简化了此操作。使用doc文档选项生成。首先，我们这次只需要进入到项目内的第一层文件夹，在此文件夹中就可以看到src了，然后在此文件夹中打开DOS命令窗口，此方式生成的doc文档可以用doc文档选项来指定源文件所在生成的目录的包，输入以下命令即可：
>
> **命令格式：** javadoc -d 文档存储目录 -encoding utf-8 charset utf-8 -sourcepath 源文件所在目录 -subpackages 需要生成的源文件目录包 -version -author
>
> **参数说明：** 
>
> - **-d** 指定API文档的输出目录，默认是当前目录。建议总是指定该参数。
> - **-encoding UTF-8** 表示你的源代码（含有符合 JavaDoc 标准的注释）是基于 UTF-8 编码的，以免处理过程中出现中文等非英语字符乱码
> - **-charset UTF-8** 表示在处理并生成 JavaDoc 超文本时使用的字符集也是以 UTF-8 为编码，目前所有浏览器都支持 UTF-8，这样最具有通用性，支持中文非常好
> - **-sourcepath** 指定源代码路径，默认是当前目录。 此参数通常是必须的。
> - **-subpackages** 以递归的方式处理各子包。如果不使用本参数，每次只能处理一个子包（或需手工列出所有子包）。
> - **-author** 可以将作者信息（@author ***）导出到最终生成的API文档中。
> - **-version** 可以生成版本信息。
> - **-windowtitle** 设置API文档的浏览器窗口标题。
> - **-doctitle** 指定概述页面的标题。
> - **-header**  指定页面的页眉。

```java
javadoc -d ./doc -encoding utf-8 -charset utf-8 -sourcepath d:\Code\javase\firstdoc\src -subpackages com.mylifes1110.test -version -author
```

![image-20200602153457552](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200602153500.png)



##### 查看生成的doc目录

![image-20200602155923047](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200602155925.png)

![image-20200602160059852](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200602160101.png)

![image-20200602160118805](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200602160120.png)



### 六、IDEA生成doc目录

1. 首先，打开IDEA，并找到`Tools -> Generate JavaDoc...`

![image-20200602160803209](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200602160804.png)

2. 生成Doc文档中的选项操作

> **Loacle：** 这是一个可选项，表示的是需要生成的 JavaDoc 以何种语言版本展示，根据 javadoc.exe 的帮助说明，这其实对应的就是 javadoc.exe 的 -locale 参数，如果不填，默认可能是英文或者是当前操作系统的语言。但是我们也可以填`zh_CN`。

![image-20200602161559282](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200602161601.png)

3. IDEA生成Doc文档过程

![image-20200602161802054](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200602161804.png)

4. 查看生成后的Doc文档

![image-20200602161835634](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200602161837.png)



> 上一章[【Java反射】](https://github.com/Ziphtracks/JavaLearningmanual/blob/master/docs/Java-Standard-Edition/Java反射机制.md)

> 下一章[【Java注解】](https://github.com/Ziphtracks/JavaLearningmanual/blob/master/docs/Java-Standard-Edition/Java注解.md)