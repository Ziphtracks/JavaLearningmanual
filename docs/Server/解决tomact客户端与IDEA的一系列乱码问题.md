# 解决tomact客户端与IDEA的一系列乱码问题



**在我们学习开发中，一系列tomact客户端的命令窗口中文乱码、IDEA中浏览器请求服务器控制台中文乱码和IDEA中tomact客户端中文乱码问题让我们看着十分的不爽。此文将为你一次性解除这个疑惑！**



**它们分别是如下乱码现象：** 

*tomact客户端的命令窗口中文乱码*

![在这里插入图片描述](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200530113133.png)

*IDEA中浏览器请求服务器控制台中文乱码*

![在这里插入图片描述](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200530113151.png)

*IDEA中tomact客户端中文乱码问题*

![在这里插入图片描述](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200530113208.png)



------



**为了解决这些现象，我为大家提供了一致解决三种以上问题的办法！如下：** 

1. 首先，我们要先修改tomact客户端文件。找到并打开`D:\Develop\apache-tomcat-8.5.45\conf\logging.properties`此文件。把`java.util.logging.ConsoleHandler.encoding = UTF-8`一行删除掉。这里我解释一下，utf-8可以适应我们的IDEA，但是tomact内置的DOS命令窗口是GBK编码。所以我们将这一行编码设置删除掉，它会自动解析客户端在不同环境下的编码格式并设置。
2. **注意：** 有的小伙伴也许会想到修改DOS命令窗口中的编码字符集，但是你修改之后解决不了该乱码问题，因为tomact启动后会跳出一个DOS命令窗口，你会发现跳出的这个命令窗口并不是Windows自带的那个DOS命令窗口！**tomact是使用内置的DOS命令窗口！**

![在这里插入图片描述](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200530114117.png)

![在这里插入图片描述](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200530114136.png)

3. 查看并修改IDEA编码格式。这里我们需要打开IDEA中的`Setting`设置，找到编码格式所在设置，将所有编码相关都设置为utf-8。这里我再解释一下，因为我们在学习开发中大部分都是使用的utf-8编码。所以，我们肯定要迎合市场也使用utf-8编码。

![在这里插入图片描述](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200530114415.png)

4. 设置IDEA中配置文件编码。我们修改IDEA配置文件它是无效的，因为IDEA会在你的电脑中生成一个用户的配置。这里可以在IDEA中作以修改。首先，先找到`Help -> Edit Custom VM OPtions...`，进入后追加如下信息。

```java
-Dfile.encoding=utf-8
```

![在这里插入图片描述](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200530121312.png)

![在这里插入图片描述](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200530121427.png)

5. 设置部署tomact项目中编码（注意：这里需要每建一个项目设置一次！）。选择项目部署的tomcat，在配置项`VM options`文本框中输入`-Dfile.encoding=UTF-8`

![在这里插入图片描述](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200605113536.png)



**设置好上述各个操作。我们就发现各种乱码问题都解决了！** 

![在这里插入图片描述](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200530121746.png)

![在这里插入图片描述](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200530121759.png)

![在这里插入图片描述](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200530121811.png)