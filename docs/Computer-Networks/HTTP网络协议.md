- [ Http网络协议](#head1)
	- [ 一、Http协议简介](#head2)
		- [1.1 什么是协议](#head3)
		- [1.2 什么是HTTP协议](#head4)
		- [1.3 Web开发中是否也要遵守HTTP协议呢？](#head5)
		- [1.4 HTTP协议基层](#head6)
		- [1.5 HTTP的工作原理](#head7)
		- [1.6 HTTP的特点](#head8)
		- [1.7 HTTP协议的通信](#head9)
	- [ 二、HTTP消息结构](#head10)
		- [2.1 HTTP消息结构介绍](#head11)
		- [2.2 CS、BS结构介绍](#head12)
			- [2.2.1 生活中的两种上网方式](#head13)
			- [2.2.2 BS结构（Browser/Server ）](#head14)
			- [2.2.3 CS结构（Client/Server ）](#head15)
			- [2.2.4 BS、CS总结](#head16)
	- [ 三、客户端请求消息](#head17)
	- [ 四、服务器响应消息](#head18)
	- [ 五、HTTP请求方式](#head19)
		- [5.1 HTTP请求方式](#head20)
		- [5.2 GET、POST请求方式的区别（面试题）](#head21)
	- [ 六、HTTP状态码](#head22)
		- [6.1 常见的HTTP状态码](#head23)
		- [6.2 HTTP状态码分类](#head24)
		- [6.3 HTTP状态码列表](#head25)
	- [ 七、通过抓包的方式来演示HTTP协议](#head26)
		- [7.1 部署演示项目进行抓包](#head27)
		- [7.2 抓包后Network中的信息及名词解释](#head28)
		- [7.3 HTTP请求的执行流程](#head29)
		- [7.4 HTTP请求（简单版）](#head30)
		- [7.5 HTTP响应（简单版）](#head31)
		- [7.6 简单再谈GET、POST请求方式区别（简单版回答面试）](#head32)
# <span id="head1"> Http网络协议</span>



------

### <span id="head2"> 一、Http协议简介</span>



#### <span id="head3">1.1 什么是协议</span>

> 协议就是对计算机之间连接的信息格式、能被收/发双方接受的传送信息内容的一组定义。协议有多层结构，常见高层协议如：TCP/IP负责点到点传送信息包。（简单来说协议就是在双方交互的过程中，规定双方如何通信）



#### <span id="head4">1.2 什么是HTTP协议</span>

> HTTP协议是Hyper Text Transfer Protocol（超文本传输协议）的缩写，是用于从万维网（WWW:World Wide Web ）服务器传输超文本到本地浏览器的传送协议。互联网上应用最为广泛的一种网络协议，所有的www都必须遵守该Http协议标准！



#### <span id="head5">1.3 Web开发中是否也要遵守HTTP协议呢？</span>

> 答案是：是的！在做Web开发中，浏览器与服务器要通讯，而他们通信的过程中也是要遵守Http协议的！



#### <span id="head6">1.4 HTTP协议基层</span>

> HTTP是一个基于TCP/IP通信协议来传递数据（HTML 文件, 图片文件, 查询结果等）。也是基于请求与响应的模型，而Http协议默认端口为80



#### <span id="head7">1.5 HTTP的工作原理</span>

> HTTP协议工作于客户端-服务端架构上。浏览器作为HTTP客户端通过URL向HTTP服务端即WEB服务器发送所有请求。

> Web服务器有：Nginx，Apache服务器，IIS服务器（Internet Information Services）等。

> Web服务器根据接收到的请求后，向客户端发送响应信息。



#### <span id="head8">1.6 HTTP的特点</span>

> **HTTP协议的主要特点如下：** 
>
> 1. 支持客户端（浏览器）/服务器模式。B/S
> 2. 简单快速：客户向服务器请求服务时，只需传送请求方法和路径。请求方法常用的有GET、POST。每种方法规定了客户与服务器联系的类型不同。由于HTTP协议简单，使得HTTP服务器的程序规模小，因而通信速度很快。
> 3. 灵活：HTTP允许传输任意类型的数据对象。传输的类型由Content-Type加以标记。
> 4. 无连接：无连接的含义是限制每次连接只处理一个请求。服务器处理完客户的请求，并收到客户的应答后，即断开连接。采用这种方式可以节省传输时间。
> 5. 无状态：HTTP协议是无状态协议。无状态是指协议对于事务处理没有记忆能力。缺少状态意味着如果后续处理需要前面的信息，则它必须重传，这样可能导致每次连接传送的数据量增大。另一方面，在服务器不需要先前信息时它的应答就较快。



#### <span id="head9">1.7 HTTP协议的通信</span>

> HTTP通信机制是在一次完整的HTTP通信过程中，Web浏览器与Web服务器之间将完成下列7个步骤：
>
> 1. 建立TCP连接
>    在HTTP工作开始之前，Web浏览器首先要通过网络与Web服务器建立连接，该连接是通过TCP来完成的，该协议与IP协议共同构建Internet，即著名的TCP/IP协议族，因此Internet又被称作是TCP/IP网络。HTTP是比TCP更高层次的应用层协议，根据规则，只有低层协议建立之后才能进行更低层协议的连接。因此，首先要建立TCP连接，一般TCP连接的端口号是80
> 2. 浏览器向Web服务器发送请求命令
>    一旦建立了TCP连接，Web浏览器就会向Web服务器发送请求命令。例如：`GET /sample/hello.html HTTP/1.1`
> 3.  浏览器发送请求头信息
>    浏览器发送其请求命令之后，还要以头信息的形式向Web服务器发送一些别的信息，之后浏览器发送了一空白行来通知服务器，它已经结束了该头信息的发送。
> 4.  Web服务器应答
>    客户机向服务器发出请求后，服务器会客户机回送应答，`HTTP/1.1 200 OK`。应答的第一部分是协议的版本号和应答状态码
> 5.  Web服务器发送应答头信息
>    正如客户端会随同请求发送关于自身的信息一样，服务器也会随同应答向用户发送关于它自己的数据及被请求的文档。
> 6.  Web服务器向浏览器发送数据
>    Web服务器向浏览器发送头信息后，它会发送一个空白行来表示头信息的发送到此为结束，接着，它就以Content-Type应答头信息所描述的格式发送用户所请求的实际数据  `response.setContentType("text/html;charset=utf-8");`
> 7.  Web服务器关闭TCP连接
>    一般情况下，一旦Web服务器向浏览器发送了请求数据，它就要关闭TCP连接，然后如果浏览器或者服务器在其头信息加入了这行代码`Connection:keep-alive`。TCP连接在发送后将仍然保持打开状态，于是，浏览器可以继续通过相同的连接发送请求。保持连接节省了为每个请求建立新连接所需的时间，还节约了网络带宽



### <span id="head10"> 二、HTTP消息结构</span>



#### <span id="head11">2.1 HTTP消息结构介绍</span>

> HTTP是基于客户端/服务端（C/S）的架构模型，通过一个可靠的链接来交换信息，是一个无状态的请求/响应协议。

> 一个HTTP"客户端"是一个应用程序（Web浏览器或其他任何客户端），通过连接到服务器达到向服务器发送一个或多个HTTP的请求的目的。

> 一个HTTP"服务器"同样也是一个应用程序（通常是一个Web服务，如Apache Web服务器或IIS服务器等），通过接收客户端的请求并向客户端发送HTTP响应数据。
>
> HTTP使用统一资源标识符（Uniform Resource Identifiers, URI）来传输数据和建立连接。



#### <span id="head12">2.2 CS、BS结构介绍</span>



##### <span id="head13">2.2.1 生活中的两种上网方式</span>

> 一、可以通过浏览器（browser）进行上网，比如：访问浏览谷歌浏览器、火狐浏览器
>
> 二、可以通过客户端（client）进行上网，比如：下载淘宝客户端逛淘宝



##### <span id="head14">2.2.2 BS结构（Browser/Server ）</span>

> B/S结构（Browser/Server，浏览器/服务器模式），是WEB兴起后的一种网络结构模式，WEB浏览器是客户端最主要的应用软件。这种模式统一了客户端，将系统功能实现的核心部分集中到服务器上，简化了系统的开发、维护和使用。客户机上只要安装一个浏览器，如Netscape Navigator或Internet Explorer，服务器安装SQL Server、Oracle、MYSQL等数据库。浏览器通过Web Server 同数据库进行数据交互。 

> - **简单来说，如下：** 
> - 不需要安装客户端，只要能连上网，就能随时随地使用 
> - 开发人员只需要对服务器端程序进行开发、维护，降低开发维护难度和开发维护成本
> - 浏览器主要负责用户界面的动态展示，只处理一些简单的逻辑功能 
> - 所有具体业务逻辑的处理都由服务器端程序完成，所以程序负载几乎都转移给服务器端
> - 但是随着服务器负载的增加，可以平滑地增加服务器的个数并建立集群服务器系统，然 后在各个服务器之间做负载均衡
> - 以下图是BS结构的工作原理：

![1586431568617](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200530103817.png)



##### <span id="head15">2.2.3 CS结构（Client/Server ）</span>

> C/S结构（Client/Server，服务器/客户机模式），C/S结构通常采取两层结构。服务器负责数据的管理，客户机负责完成与用户的交互任务。 客户机通过局域网与服务器相连，接受用户的请求，并通过网络向服务器提出请求，对数据库进行操作。服务器接受客户机的请求，将数据提交给客户机，客户机将数据进行计算并将结果呈现给用户。服务器还要提供完善安全保护及对数据完整性的处理等操作，并允许多个客户机同时访问服务器，这就对服务器的硬件处理数据能力提出了很高的要求。 

> - **简单来说，如下：** 
> - 将应用程序分为客户端和服务器端两层，客户端程序用于展示功能，为用户提供操作界 面，同时也可以进行业务逻辑的处理；而服务器端程序负责操作数据库完成数据处理等 核心业务 
> - 由此可见通过C/S开发模型开发的应用程序，客户端程序可以承担一部分业务逻辑处 理，特别是数据的预处理工作，减轻了服务器端程序的压力 



##### <span id="head16">2.2.4 BS、CS总结</span>

> - BS优缺点：
>   - 优点：实时地更新数据(新功能的增加只需要在服务端完成，浏览器刷新就好了)
>   - 缺点：将负载给了服务器 
> - CS优缺点：
>   - 优点：客户端也分担了一部分负载
>   - 缺点：如果有新的功能增加，必须要重新下载客户端



### <span id="head17"> 三、客户端请求消息</span>

> 客户端发送一个HTTP请求到服务器的请求消息包括以下格式：请求行（request line）、请求头部（header）、空行和请求数据四个部分组成，下图给出了请求报文的一般格式。

![1561893148999](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200530103818.png)

**HTTP请求报文**

> 当浏览器向Web服务器发出请求时，它向服务器传递了一个数据块，也就是请求信息（请求报文），HTTP请求信息由4部分组成：
> 1 请求行 请求方法/地址 URI协议/版本
> 2 请求头(Request Headers)
> 3 空行
> 4 请求正文
>
> **下面是一个HTTP请求的例子：**
>
> POST/hello HTTP/1.1
>
> Accept:text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8
>
> Accept-Language:zh-CN,zh;q=0.8,en-GB;q=0.6,en;q=0.4
>
> Connection:Keep-Alive
>
> Host:localhost:8080
>
> User-Agent:Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko)
>
> Chrome/59.0.3071.115 Safari/537.36
>
> Accept-Encoding:gzip, deflate, br
>
> （空白行）
>
> username=zhangsan&age=20&add=beijing



### <span id="head18"> 四、服务器响应消息</span>

> HTTP响应也由四个部分组成，分别是：状态行、消息报头、空行和响应正文。

![1561893177737](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200530103819.png)

**HTTP响应报文**

> HTTP应答与HTTP请求相似，HTTP响应也由4个部分构成，分别是：
>
> 1 响应行（状态行）  HTTP/1.1  200  OK （其他的状态码会在后面说明！）
>
> 2 响应头(Response Headers)
>
> 3 空行
>
> 4 响应正文
>
> **下面是一个HTTP响应的例子：**
>
> HTTP/1.1 200 OK   //状态行
>
> Server: nginx
>
> Date: Tue, 31 May 2016 02:09:24 GMT
>
> Content-Type: text/html;charset=UTF-8
>
> Connection: keep-alive
>
> Vary: Accept-Encoding
>
> Access-Control-Allow-Origin: *
>
> Access-Control-Allow-Headers: X-Requested-With,access_token,access-token,content-type,multipart/form-data,application/x-www-form-urlencoded
>
> Access-Control-Allow-Methods: GET,POST,OPTIONS
>
> Content-Length: 49
>
> \<!DOCTYPE html>   //正文
>
> \<html> 
>
> ​	\<head>
>
> ​		\<title>网页标题\</title>
>
> ​		\<meta charset="utf-8">
>
> ​	\</head>
>
> ​	\<body>
>
> ​		网页内容
>
> ​	\</body>
>
> \</html>



### <span id="head19"> 五、HTTP请求方式</span>



#### <span id="head20">5.1 HTTP请求方式</span>

> 根据HTTP标准，HTTP请求可以使用多种请求方法。

> HTTP1.0定义了三种请求方法： GET, POST 和 HEAD方法。 

> HTTP1.1新增了五种请求方法：OPTIONS, PUT, DELETE, TRACE 和 CONNECT 方法。

| 序号 | 方法    | 描述                                                         |
| ---- | ------- | ------------------------------------------------------------ |
| 1    | GET     | 请求指定的页面信息，并返回实体主体                           |
| 2    | HEAD    | 类似于get请求，只不过返回的响应中没有具体内容，用户获取报头  |
| 3    | POST    | 向指定资源提交数据进行处理请求（例如提交表单或者上传文件）。数据被包含在请求体中。POST请求可能导致新的资源的建立和/或已有资源的修改 |
| 4    | PUT     | 从客户端的服务器传输的数据取代指定的文档内容                 |
| 5    | DELETE  | 请求服务器删除指定的页面                                     |
| 6    | CONNECT | HTTP/1.1协议中预留给能够连接改为管道方式的代理服务器         |
| 7    | OPTIONS | 允许客户端查看服务器性能                                     |
| 8    | TRACE   | 回显服务器收到的请求，主要用于测试或诊断                     |

#### <span id="head21">5.2 GET、POST请求方式的区别（面试题）</span>

> GET一般用于获取/查询资源信息，而POST一般用于更新资源信息 

> GET和POST的区别为：
>
> - GET提交的数据会放在URL之后，以?分割URL和传输数据，参数之间以&相连。而POST方式是把提交的数据放在HTTP包的Body中 
> - GET提交的数据大小有限制（因为浏览器对URL的长度有限制），而POST方法提交的数据没有限制
> - GET方式需要使用Request.QueryString来取得变量的值，而POST方式通过Request.Form来获取变量的值
> - GET方式提交数据，会带来安全问题，比如一个登录页面，通过GET方式提交数据时，用户名和密码将出现在URL上，如果页面可以被缓存或者其他人可以访问这台机器，就可以从历史记录获得该用户的账号和密码 （总之就是GET方式不安全！）



### <span id="head22"> 六、HTTP状态码</span>

> 当浏览者访问一个网页时，浏览者的浏览器会向网页所在服务器发出请求。当浏览器接收并显示网页前，此网页所在的服务器会返回一个包含HTTP状态码的信息头（server header）用以响应浏览器的请求。
>
> HTTP状态码的英文为HTTP Status Code。



#### <span id="head23">6.1 常见的HTTP状态码</span>

> **下面是常见的HTTP状态码：** 
>
> - 200 - 请求成功
> - 301 - 资源（网页等）被永久转移到其它URL
> - 404 - 请求的资源（网页等）不存在
> - 500 - 内部服务器错误



#### <span id="head24">6.2 HTTP状态码分类</span>

> HTTP状态码由三个十进制数字组成，第一个十进制数字定义了状态码的类型，后两个数字没有分类的作用。

> HTTP状态码共分为5种类型：

| 分类 | 分类描述                                         |
| ---- | ------------------------------------------------ |
| 1**  | 提示信息，服务器收到请求，需要请求者继续执行操作 |
| 2**  | 成功，操作被成功接收并处理                       |
| 3**  | 重定向，需要进一步的操作以完成请求               |
| 4**  | 客户端错误，请求包含语法错误或无法完成请求       |
| 5**  | 服务器错误，服务器在处理请求的过程中发生了错误   |

#### <span id="head25">6.3 HTTP状态码列表</span>

| 状态码 | 状态码英文名称                  | 中文描述                                                     |
| ------ | ------------------------------- | ------------------------------------------------------------ |
| 100    | Continue                        | 继续。客户端应继续其请求                                     |
| 101    | Switching Protocols             | 切换协议。服务器根据客户端的请求切换协议。只能切换到更高级的协议，例如，切换到HTTP的新版本协议 |
|        |                                 |                                                              |
| 200    | OK                              | 请求成功。一般用于GET与POST请求                              |
| 201    | Created                         | 已创建。成功请求并创建了新的资源                             |
| 202    | Accepted                        | 已接受。已经接受请求，但未处理完成                           |
| 203    | Non-Authoritative Information   | 非授权信息。请求成功。但返回的meta信息不在原始的服务器，而是一个副本 |
| 204    | No Content                      | 无内容。服务器成功处理，但未返回内容。在未更新网页的情况下，可确保浏览器继续显示当前文档 |
| 205    | Reset Content                   | 重置内容。服务器处理成功，用户终端（例如：浏览器）应重置文档视图。可通过此返回码清除浏览器的表单域 |
| 206    | Partial Content                 | 部分内容。服务器成功处理了部分GET请求                        |
|        |                                 |                                                              |
| 300    | Multiple Choices                | 多种选择。请求的资源可包括多个位置，相应可返回一个资源特征与地址的列表用于用户终端（例如：浏览器）选择 |
| 301    | Moved Permanently               | 永久移动。请求的资源已被永久的移动到新URI，返回信息会包括新的URI，浏览器会自动定向到新URI。今后任何新的请求都应使用新的URI代替 |
| 302    | Found                           | 临时移动。与301类似。但资源只是临时被移动。客户端应继续使用原有URI |
| 303    | See Other                       | 查看其它地址。与301类似。使用GET和POST请求查看               |
| 304    | Not Modified                    | 未修改。所请求的资源未修改，服务器返回此状态码时，不会返回任何资源。客户端通常会缓存访问过的资源，通过提供一个头信息指出客户端希望只返回在指定日期之后修改的资源 |
| 305    | Use Proxy                       | 使用代理。所请求的资源必须通过代理访问                       |
| 306    | Unused                          | 已经被废弃的HTTP状态码                                       |
| 307    | Temporary Redirect              | 临时重定向。与302类似。使用GET请求重定向                     |
|        |                                 |                                                              |
| 400    | Bad Request                     | 客户端请求的语法错误，服务器无法理解                         |
| 401    | Unauthorized                    | 请求要求用户的身份认证                                       |
| 402    | Payment Required                | 保留，将来使用                                               |
| 403    | Forbidden                       | 服务器理解请求客户端的请求，但是拒绝执行此请求               |
| 404    | Not Found                       | 服务器无法根据客户端的请求找到资源（网页）。通过此代码，网站设计人员可设置"您所请求的资源无法找到"的个性页面 |
| 405    | Method Not Allowed              | 客户端请求中的方法被禁止                                     |
| 406    | Not Acceptable                  | 服务器无法根据客户端请求的内容特性完成请求                   |
| 407    | Proxy Authentication Required   | 请求要求代理的身份认证，与401类似，但请求者应当使用代理进行授权 |
| 408    | Request Time-out                | 服务器等待客户端发送的请求时间过长，超时                     |
| 409    | Conflict                        | 服务器完成客户端的PUT请求是可能返回此代码，服务器处理请求时发生了冲突 |
| 410    | Gone                            | 客户端请求的资源已经不存在。410不同于404，如果资源以前有现在被永久删除了可使用410代码，网站设计人员可通过301代码指定资源的新位置 |
| 411    | Length Required                 | 服务器无法处理客户端发送的不带Content-Length的请求信息       |
| 412    | Precondition Failed             | 客户端请求信息的先决条件错误                                 |
| 413    | Request Entity Too Large        | 由于请求的实体过大，服务器无法处理，因此拒绝请求。为防止客户端的连续请求，服务器可能会关闭连接。如果只是服务器暂时无法处理，则会包含一个Retry-After的响应信息 |
| 414    | Request-URI Too Large           | 请求的URI过长（URI通常为网址），服务器无法处理               |
| 415    | Unsupported Media Type          | 服务器无法处理请求附带的媒体格式                             |
| 416    | Requested range not satisfiable | 客户端请求的范围无效                                         |
| 417    | Expectation Failed              | 服务器无法满足Expect的请求头信息                             |
|        |                                 |                                                              |
| 500    | Internal Server Error           | 服务器内部错误，无法完成请求                                 |
| 501    | Not Implemented                 | 服务器不支持请求的功能，无法完成请求                         |
| 502    | Bad Gateway                     | 作为网关或者代理工作的服务器尝试执行请求时，从远程服务器接收到了一个无效的响应 |
| 503    | Service Unavailable             | 由于超载或系统维护，服务器暂时的无法处理客户端的请求。延时的长度可包含在服务器的Retry-After头信息中 |
| 504    | Gateway Time-out                | 充当网关或代理的服务器，未及时从远端服务器获取请求           |
| 505    | HTTP Version not supported      | 服务器不支持请求的HTTP协议的版本，无法完成处理               |

------



### <span id="head26"> 七、通过抓包的方式来演示HTTP协议</span>



#### <span id="head27">7.1 部署演示项目进行抓包</span>

> 首先我们在idea中随便部署一个项目（里面可以只有一个index.html）

![1586582139270](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200530103820.png)

> 打开抓包功能，即去浏览器中输入你部署好的项目地址（记住先不要按Enter回车键进入），然后打开F12，进入Network界面，其次在按Enter进入你部署好的网页

![1586582489310](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200530103821.png)

![1586582520646](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200530103822.png)

> 抓包后显示如下内容
>
> - 如果所示，部署的网页已经显示在浏览器中
> - Network里多出了一个firstweb/，这说明浏览器向服务器请求了一个地址index.html
> - 注意：这里显示的项目名访问firstweb/，因为index.html默认项目名称访问，所以这里访问的是index.html文件

![1586582690579](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200530103823.png)

#### <span id="head28">7.2 抓包后Network中的信息及名词解释</span>

> 通过抓包可以看到如下信息：（空白行我们看不见在这里忽略掉）
>
> - General：请求行、响应行
> - Request Headers：请求头
> - Response Headers：响应头
> - 响应正文：将显示内容携带到浏览器
> - 请求正文：用来接收请求的参数
> - **总结：** 
>   * 请求包括：请求行、请求头、请求正文
>   * 响应包括：相应行、响应头、响应正文

![1586584927952](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200530103824.png)



#### <span id="head29">7.3 HTTP请求的执行流程</span>

> - 根据windows系统的域名解析文件（C:\Windows\System32\drivers\etc\host【host文件】）将域名解析成对应的本地ip，如果没有找到对应的IP，那么就将域名放到DNS服务器上就解析找到互联网上的对应IP 
> - 经过三次握手建立TCP连接（HTTP底层基于TCP）
> - 发起HTTP请求，包含请求行，请求头，请求正文 
> - 服务器返回HTTP响应，包含响应行，响应头，响应正文 
> - 浏览器解析响应正文并展示 
>

![1586588103816](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200530103825.png)





#### <span id="head30">7.4 HTTP请求（简单版）</span>

> HTTP请求分为四部分：请求行、请求头、空白行、请求正文

> 请求行：
>
> - 请求方式：GET、POST
> - 请求资源路径
> - 协议版本
>
> 请求头：
>
> - 浏览器类型等等
>
> 请求正文：
>
> - 只有请求方式是POST才会有请求正文



#### <span id="head31">7.5 HTTP响应（简单版）</span>

> HTTP响应分为四部分：响应行、响应头、空白行、响应正文

> 响应行：
>
> - 在响应行中最重要的是响应状态码（所有响应状态码在第六章时我们已经介绍！）
> - 这里在列出常见的响应状态码：
>   * 200-响应成功
>   * 302-可以与一个响应头location组成完成重定向
>   * 304-代表服务器资源没有改变
>   * 404-资源访问不到
>   * 500-服务器端错误
>
> 响应头：
>
> - Location
>   * 作用： 用于重定向一个新的位置， 包含新的URL地址 
>   * 它与302状态码组合可以完成重定向
> - Content-type
>   * 服务器响应的数据mimeType类型：音频、图片、文本、html网页等等
> - refresh
>   * 可以实现定时跳转
> - content-disposition
>   * 可以完成文件下载，点击的整个文件是否弹出下载框
> - 等等
>
> 响应正文：
>
> - 对于HTTP响应正文，它是真正的被浏览器解析并显示在浏览器上的信息内容



#### <span id="head32">7.6 简单再谈GET、POST请求方式区别（简单版回答面试）</span>

> - GET只能传递1kb以下的小数据，因为浏览器对URL的长度有限制。而POST可以传递大数据
> - GET请求参数会拼接在浏览器地址栏中是不安全的，而POST请求参数是保存在HTML包内body中很安全
> - 如果是get请求，有请求参数，请求参数是在http请求行的资源路径上
> - 如果是post请求，有请求参数，请求参数是在请求正文中


