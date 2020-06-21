# Java网络编程

  * [一、什么是网络](#一什么是网络)
     * [1.1 网络的概念](#11-网络的概念)
  * [二、计算机网络](#二计算机网络)
  * [三、网络模型](#三网络模型)
     * [3.1 OSI模型](#31-osi模型)
     * [3.2 TCP/IP模型](#32-tcpip模型)
  * [四、通信协议](#四通信协议)
     * [4.1 TCP/UDP](#41-tcpudp)
  * [五、IP与端口](#五ip与端口)
     * [5.1 了解IP](#51-了解ip)
     * [5.2 IPV4的应用分类](#52-ipv4的应用分类)
     * [5.3 Port（端口）](#53-port端口)
  * [六、网络编程](#六网络编程)
     * [6.1 InetAddress类](#61-inetaddress类)
     * [6.2 基于TCP的网络编程（Socket）](#62-基于tcp的网络编程socket)
     * [6.3 Socket编程开发步骤](#63-socket编程开发步骤)
     * [6.4 服务器和客户端相互请求问好案例](#64-服务器和客户端相互请求问好案例)
  * [七、网络编程交互综合案例](#七网络编程交互综合案例)

------

## 一、什么是网络
### 1.1 网络的概念

 - 由点和线构成，表示诸多对象间的相互联系
 - **比如：**
	* 蜘蛛网
	* 人脉网
	* 计算机网络
***
<a id="2"> </a>
## 二、计算机网络

 - 为实现资源共享和信息传递，用过通信线路连接起来的若干主机（Host）

 - **互联网：** （Internet）点与点相连

![计算机网络](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200504001656.png)

 - **万维网：** （WWW - World Wide Web）端与端相连
 - **物联网：** （Iot - Internet of things）物与物相连
 - **网络编程：** 让计算机与计算机之间建立连接、进行通信
***
<a id="3"> </a>
## 三、网络模型

### 3.1 OSI模型

 - OSI（Oper System Interconnection）开放式系统互联
![在这里插入图片描述](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200503213005.png)



### 3.2 TCP/IP模型

 - 一组用于实现网络互联的通信协议，将协议分为四个层次
![在这里插入图片描述](D:\GitHub\Java-Learning-manual\media\pictures\Java-Standard-Edition\Java网络编程\TCP与IP模型.png)
***
<a id="4"> </a>
## 四、通信协议
### 4.1 TCP/UDP
 - **TCP协议：** Transmission Control Protocol传输控制协议
	* 是一种面向连接、可靠的、基于字节流的传输层通信协议。数据大小无限制。建立连接的过程需要三次捂手，断开连接的过程需要四次挥手
 - **UDP协议：** User Datagram Protocol用户数据报协议
	* 是一种无连接的传输层协议，提供面向事务的简单不可靠信息传送服务，每个包的大小64KB
***
<a id="5"> </a>

## 五、IP与端口

### 5.1 了解IP

 - **IP协议：** Internet Protocol Address互联网协议地址/网络协议地址
	* 分配给互联网设备的数字标签（唯一标识）
 - **IP地址分为两种：**
	* **IPV4：** 4字节32位整数，并分成4段8位的二进制数，每8位之间用圆点隔开，每8位整数可以转换为一个0~255的十进制整数
		+ **格式：** D.D.D.D
		+ **例如：** 255.255.255.255
	* **IPV6：** 16字节128位整数，并分成8段十六进制数，每16位之间用圆点隔开，每6位整数可以转换为一个0~65535的十进制数
		+ **格式：** X.X.X.X.X.X.X.X
		+ **例如：** FFFF.FFFF.FFFF.FFFF.FFFF.FFFF.FFFF.FFFF



### 5.2 IPV4的应用分类

 - **A类：** 政府机构，1.0.0.1~126.255.255.254
 - **B类：** 中型企业，128.0.0.1~191.255.255.254
 - **C类：** 个人用户，192.0.0.1~223.255.255.254
 - **D类：** 用于组播，224.0.0.1~239.255.255.254
 - **E类：** 用于实验，240.0.0.1~255.255.255.254
 - **回环地址：** 127.0.0.1，指本机，一般用于测试使用
 - **查看IP命令：** ipconfig
 - **测试IP命令：** ping D.D.D.D



### 5.3 Port（端口）

 - **端口号：** 在通信实体上进行网络通讯的程序的唯一标识
 - **端口分类：**
	* **公认端口：** 0~1023
	* **注册端口：** 1024~49151
	* **动态或私有端口：** 49152~65535
 - **常用端口：**
	* **Mysql：** 3306
	* **Oracle：** 1521
	* **Tomact：** 8080
	* **SMTP：** 25
	* **Web服务器：** 80
	* **FTP服务器：** 21
***
<a id="6"> </a>
## 六、网络编程
### 6.1 InetAddress类

 - **概念：** 表示互联网协议（IP）地址对象，封装了与该IP地址相关的所有信息，并提供获取信息的常用方法
 - **方法：**
	* public static InetAddress getLocalHost() //获得本机主机地址对象
	* public static InetAddress getByName(String host) //根据主机名称获得地址对象
	* public static InetAddress[] getAllByName(String host) //获得所有相关地址对象
	* public String getHostAddress() //获取IP地址字符串
	* public String getHostName() //获取IP地址主机名
	* getPort() //获取端口号

```java
import java.net.InetAddress;
import java.net.UnknownHostException;

public class TestInetAddress {
    public static void main(String[] args) throws UnknownHostException {
        InetAddress local = InetAddress.getLocalHost();//获取本机机主
        //获取本地主机的相关IP、名字
        String ip = local.getHostAddress();
        String name = local.getHostName();
        System.out.println(ip + "\t" + name);

        //获取任意主机的IP地址对象————IP、主机名、域名
        InetAddress baiduLocal = InetAddress.getByName("www.baidu.com");
        System.out.println(baiduLocal.getHostAddress());
        System.out.println(baiduLocal.getHostName());

        //获取任意域名的所有IP地址对象
        InetAddress[] addresses = InetAddress.getAllByName("www.baidu.com");
        for (InetAddress address : addresses) {
            System.out.println(address.getHostAddress());
        }
    }
}
```



### 6.2 基于TCP的网络编程（Socket）

 - **Socket编程：**
	* Socket（套接字）是网络中的一个通信节点
	* 分为客户端Socket与服务端ServerSocket
	* **通信要求：** IP地址 + 端口号



### 6.3 Socket编程开发步骤

 - **建立通信连接（会话）：**
	* 创建ServerSocket，指定端口号
	* 调用accept等待客户端接入
 - **客户端请求服务器：**
	* 创建Socket，指定服务器IP + 端口号
	* 使用输出流，发送请求数据给服务器
	* 使用输入流，接收响应数据到客户端（等待）
 - **服务器响应客户端：**
	* 使用输入流，接收请求数据到服务器（等待）
	* 使用输出流，发送响应数据给客户端
<a id="8"> </a>
### 6.4 服务器和客户端相互请求问好案例

**客户端请求服务器端**

```java
import java.io.*;
import java.net.Socket;

/**
 * 客户端
 */
public class Client {
    public static void main(String[] args) throws IOException {
        //1.创建客户端（套接字），连接指定的IP + 端口号
        Socket client = new Socket("192.168.19.163", 6666);
        //2.获取输入输出流
        InputStream inputStream = client.getInputStream();
        InputStreamReader inputStreamReader = new InputStreamReader(inputStream, "UTF-8");
        BufferedReader bufferedReader = new BufferedReader(inputStreamReader);

        OutputStream outputStream = client.getOutputStream();
        OutputStreamWriter outputStreamWriter = new OutputStreamWriter(outputStream, "UTF-8");
        PrintWriter printWriter = new PrintWriter(outputStreamWriter);
        //3.发送数据
        printWriter.println("你好！我是客户端！");
        printWriter.flush();//刷新缓冲区
        //4.接收响应数据
        String message = bufferedReader.readLine();
        System.out.println("服务器端用户：" + message);
        //5.关闭流和客户端
        bufferedReader.close();
        printWriter.close();
        client.close();
    }
}
```
**服务器端请求客户端**

```java
import java.io.*;
import java.net.ServerSocket;
import java.net.Socket;

/**
 * 服务器端
 */
public class Server {
    public static void main(String[] args) throws IOException {
        //1.创建服务器端（套接字）
        ServerSocket server = new ServerSocket(6666);
        System.out.println("服务器已启动");
        //2.调用accept等待客户端
        Socket client = server.accept();
        //3.通过客户端获取输入输出流
        InputStream inputStream = client.getInputStream();
        InputStreamReader inputStreamReader = new InputStreamReader(inputStream);
        BufferedReader bufferedReader = new BufferedReader(inputStreamReader);

        OutputStream outputStream = client.getOutputStream();
        OutputStreamWriter outputStreamWriter = new OutputStreamWriter(outputStream);
        PrintWriter printWriter = new PrintWriter(outputStreamWriter);
        //4.读取数据
        String message = bufferedReader.readLine();
        System.out.println("客户端用户：" + message);
        //5.响应数据
        printWriter.println("你好！我是服务器端！");
        printWriter.flush();
        //6.关闭流、客户端和服务器端
        bufferedReader.close();
        printWriter.close();
        client.close();
        server.close();
    }
}
```
**服务器端接收请求效果**
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200318213826535.png)
**客户端接收请求效果**
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200318213846871.png)

***
<a id="7"> </a>
## 七、网络编程交互综合案例

 - **使用Scoket编程实现服务器端注册：**
	* 注册信息保存在properties文件中
	* 封装格式自定义
	* 注册成功后返回字符串“注册成功！”
 - **使用Scoket编程实现服务器端登录：**
	* 获取properties文件中的用户信息，进行用户名与密码的校验
	* 检验成功后返回字符串“登陆成功！”

> 案例参考文章：[网络编程交互](https://blog.csdn.net/weixin_44170221/article/details/104975727)

***



> 上一章[【JavaIO流】](https://github.com/Ziphtracks/JavaLearningmanual/blob/master/docs/Java-Standard-Edition/JavaIO流.md)

> 下一章[【Junit单元测试】](https://github.com/Ziphtracks/JavaLearningmanual/blob/master/docs/Java-Standard-Edition/Junit%E5%8D%95%E5%85%83%E6%B5%8B%E8%AF%95.md)