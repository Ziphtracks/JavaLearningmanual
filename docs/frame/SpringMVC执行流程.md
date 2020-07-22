* [SpringMVC执行流程](#springmvc%E6%89%A7%E8%A1%8C%E6%B5%81%E7%A8%8B)
  * [SpringMVC概述](#springmvc%E6%A6%82%E8%BF%B0)
  * [SpringMVC执行流程概括](#springmvc%E6%89%A7%E8%A1%8C%E6%B5%81%E7%A8%8B%E6%A6%82%E6%8B%AC)
  * [SpringMVC的重要组件（可视化组件）](#springmvc%E7%9A%84%E9%87%8D%E8%A6%81%E7%BB%84%E4%BB%B6%E5%8F%AF%E8%A7%86%E5%8C%96%E7%BB%84%E4%BB%B6)
  * [SpringMVC执行流程剖析](#springmvc%E6%89%A7%E8%A1%8C%E6%B5%81%E7%A8%8B%E5%89%96%E6%9E%90)
  * [SpringMVC的内部组件](#springmvc%E7%9A%84%E5%86%85%E9%83%A8%E7%BB%84%E4%BB%B6)
  * [SpringMVC默认组件初始化加载](#springmvc%E9%BB%98%E8%AE%A4%E7%BB%84%E4%BB%B6%E5%88%9D%E5%A7%8B%E5%8C%96%E5%8A%A0%E8%BD%BD)

##### SpringMVC执行流程

###### SpringMVC概述

> Spring MVC属于SpringFrameWork的后续产品，已经融合在Spring Web Flow里面。Spring 框架提供了构建 Web 应用程序的全功能 MVC 模块。使用 Spring 可插入的 MVC 架构，从而在使用Spring进行WEB开发时，可以选择使用Spring的Spring MVC框架或集成其他MVC开发框架。



###### SpringMVC执行流程概括

> SpringMVC框架固然强大，但是其执行流程更是妙不可言。所以我们这次要用一个简单的例子去深究一下SpringMVC的底层执行流程！
>
> 如下是SpringMVC的执行流程梗概图，我会在后面的底层流程剖析中重点提到梗概图中的这几个零件，以及它们的作用！

------

| SpringMVC执行流程梗概图（切记：该图只是梳理思路，并不特别严谨，请谅解） |
| :----------------------------------------------------------: |
| ![springMVC执行流程](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200719180749.jpg) |



###### SpringMVC的重要组件（可视化组件）

> 既然，我们要选择剖析SpringMVC底层执行流程，那肯定是要先分析我们能所看到表面的MVC重要组件。这样我们分析完可视组件后，就能找到分析SpringMVC底层执行流程的入口，所以分析它的重要组件显得更是重要！

SpringMVC的重要组件是由`核心的前端控制器（web.xml）`、`后端控制器（Controller）`和`spring-mvc.xml配置文件`组成。

- **核心的前端控制器：** 作为MVC框架，首先要解决的就是如何能收到请求。所以MVC框架大都会设计一款前端控制器（入口或者说起点），选型在Servlet或Filter两者之一，由前端控制器来最率先的工作，接收请求。在SpringMVC中，也不例外，前端控制器的选型确定为Servlet（DispatcherServlet），此前端控制器在接收请求后，还会负责SpringMVC的核心调度管理，所以既是前端又是核心。
- **后端控制器：** 后端控制器为Controller，等价于之前定义的Servlet。MVC框架中，后端控制器也是必不可少的重要组件之一。因为它接收了用户请求的大量数据参数对象（或Json）存储在域中方便页面（JSP）取值，或是携带着这些数据返回所需要跳转（重定向或请求转发）的页面。这里值得注意的是，后端控制器本质并不是一个普通的Servlet，也不是BaseServlet，它只是一个普通的类，里面却像曾经的BaseServlet一样可以拥有很多个方法，这些方法在SpringMVC中成为一个个Handler（换汤不换药，本质仍然）。所以在MVC模式的执行流程环节中，后端控制器控制着页面的跳转和数据的传递，在这里也有着很高的地位。
- **spring-mvc.xml配置文件：** 该配置文件配置着许多在执行过程中需要加载的组件，比如：注解扫描器、注解扫描驱动、试图解析器、静态资源处理器、异常解析器、拦截器、上传解析器等等，如果我们要使用这些组件，就需要在该配置文件中注入这些组件的相关配置，注入配置后由SpringMVC工厂在执行过程中加载这些组件，以达成我们使用这些组件的目的。所以这也是它受人青睐的原因。



###### SpringMVC执行流程剖析

上述得知，我们执行流程剖析的入口既是`核心的前端控制器，即web.xml`，那我们有资格了解该前端控制器中配置了什么！如下：

|                          前端控制器                          |
| :----------------------------------------------------------: |
| ![image-20200719185840281](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200719185842.png) |

由上图所知，前端控制器中所包含的即是同时启动SpringMVC工厂和Spring工厂，让两个工厂同时运作处理请求，并作出响应。既然要剖析SpringMVC的底层执行流程，那我们要从加载SpringMVC工厂的`DispatcherServlet`说起。首先进入到DispatcherServlet中，查看源代码所有方法，如下图所示：

|                DispatcherServlet源码所有方法                 |
| :----------------------------------------------------------: |
| ![image-20200719190557728](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200719190559.png) |
|          **DispatcherServlet继承FrameworkServlet**           |
| ![image-20200719190959184](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200719191001.png) |

上图所示，我进入到了DispatcherServlet中。既然说它是一个Servlet，那肯定是需要寻找它的service方法，因为Service方法是Servlet的核心所在。于是我打开了IDEA的方法列表搜索service方法，未果。虽然未果，但是我发现两个重要的线索，一是该Servlet中有一个doSerivce方法，二是DispatcherServlet继承了FrameworkServlet，我想既然子类没有service方法，父类肯定有，于是我进入到了FrameworkServlet查看源代码，如下图所示：

|                     FrameworkServlet源码                     |
| :----------------------------------------------------------: |
| ![image-20200719193120903](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200719193122.png) |

我兴冲冲在父类（FrameworkServlet）中找到了service方法，但是还是感觉高兴的太早了，该service方法中除了`resolve`方法获取请求方式和`processRequest`方法外，我一无所知。随后竟然发现了红色箭头所指向的东西`super.service(request, response);`，这意味着什么呢？这意味着它继承了父类拥有的service方法，于是我点击super句点后面的service方法查看源码惊人的发现这个类竟然是HttpServlet，显然我们找service方法的这条路走到尽头了。在里面有两个方法存在一个是`resolve`方法，它是获取请求方式的。还有一个方法不知道是做什么的，于是我点击了进去查看源码，如下图所示：

|                    processRequest方法源码                    |
| :----------------------------------------------------------: |
| ![image-20200719193708541](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200719193711.png) |

既然我们进去看到了processRequest方法的源码，就要找重要的方法。何为重要的方法呢，一般被try块包裹的方法必然是重要方法，于是我找到了`doService(request, response);`方法，并继续点击去看该doService方法的源码，如下图所示：

|            doService(request, response);方法源码             |
| :----------------------------------------------------------: |
| ![image-20200719194003105](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200719194005.png) |

逐渐失去耐心的我真的被惊讶到了，进入到doService方法后，也没有跳到其他的类中，而却还是在该类中跳到了一个空的doService();方法中。唉，探究究竟真的是件不容易的事情呀~我叹了一口气。冷静下来一想，父类是空方法没有实现，那核心逻辑代码必定是在子类中了呀。这不是多态嘛！于是，我得出了结论，费劲吧难，找入口的逻辑代码回过头来还是得看DispatcherServlet中的那个doService方法。此时我知道，这必将是一个漫长的探索之路。于是，我秉着探究原理的心态，再一次点进了被我错过的那个DispatcherServlet中的doSerivce方法，如下图：

|             DispatcherServlet中的doService()方法             |
| :----------------------------------------------------------: |
| ![image-20200719195305154](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200719195307.png) |

既然确定了这是探究底层原理的开始，那我们就在doServie()方法中寻找重要的逻辑，于是我再一次的在try块中找到了一个名为`doDispatch(request, response);`的方法（省略了前面的各种初始化和存储域数据）。在探究底层原理的道路上，你会发现越来越接近真理，虽然这注定是一个漫长的探索过程，我也情愿。于是，点击进入到了doDispatch()方法中的源码，如下图所示：

|                     doDispatch()方法源码                     |
| :----------------------------------------------------------: |
| ![image-20200719200052667](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200719200054.png) |

走进了doDispatch()方法的源码，才知道我没有看错你。里面标有注释的都是一些重要的执行逻辑方法。接下来我们会一个个的分析，逐步深入理解SpringMVC的执行流程。既然探索执行流程那就少不了Debug（Debug调试功能，Debug能很清晰的看到执行流程），于是我在`getHandler()`方法的那一行打了一个断点。下一步跟进执行流程进入到了`getHandler()`方法，如下图所示：

| getHandler方法源码（注释解释：为当前请求寻找并返回一个handler对象） |
| :----------------------------------------------------------: |
| ![image-20200719201557155](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200719201558.png) |

断点停留到了这一行，因为`getHandler()`的名字，顾名思义就是获取Controller层中的Handler。它是怎么获取到的呢？我们在断点的变量显示框中，看到handlerMappings是一个数组，其中有三个对象。他们可以分别以不同的方式处理不同的Handler，其中我们可以点击这个三个对象，一一把其对象展开查看重要属性，如下图所示：

|              0 = {RequestMappingHandlerMapping}              |
| :----------------------------------------------------------: |
| ![image-20200719202203776](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200719202206.png) |
|              **2 = {SimpleUrlHandlerMapping}**               |
| ![image-20200719202458924](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200719202502.png) |

如上图得知，RequestMappingHandlerMapping对象识别了我们Controller中的@RequestMapping注解和各个Handler上方的注解路径。SimpleUrlHandlerMapping对象识别了处理静态资源驱动所创建的那个默认Servlet，而处理静态资源的默认Servlet路径给了`/**`，它识别了这个路径。HanderMapping映射器中的对象，通过注解识别获取到了Controller层的各个Handler请求路径注解后，就执行到了下一行，如下图：

|                      getHandler方法源码                      |
| :----------------------------------------------------------: |
| ![image-20200719203457220](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200719203459.png) |

通过注解可以找到所有的Handler，其中所有的Handler就存储在`handlerMappings`中，于是它就遍历了此对象。随后根据各自的请求对象获取对应的Handler并判空返回获取到的对应Handler对象。继续向下执行，你还会发现这么一个东西，如下图：

|                        getHandler方法                        |
| :----------------------------------------------------------: |
| ![image-20200719204645324](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200719204647.png) |

对，你会发现即将返回的Handler是一个名为HandlerExecutionChain的执行链。其中执行链内包含了即将返回的handler对象和一个interceptorList集合，其中集合内有两个对象，这两个对象就是拦截器。所以，不管是你自己使用了拦截器还是没有使用拦截器（内部底层有拦截器），这些拦截器和handler对象会以一个链条的形式执行（拦截器在前，handler对象在后）。则执行过程是遵循着先执行拦截器，后返回并执行handler对象的顺序。返回了HandlerExecutionChain执行链，那么就要开始执行执行链了！问题来了，究竟是谁依次执行拦截器和handler对象呢？如下图：

|                     doDispatch()方法源码                     |
| :----------------------------------------------------------: |
| ![image-20200719210132545](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200719210134.png) |

返回执行链后，继续执行就执行到了这一行代码，其注释解释为为当前请求对象寻找一个handler适配器。如果你学过适配器设计模式也许你会更容易理解，没有学过也没有关系，随后的解释你也可以理解的。知道了它要为请求对象寻找适配器，那么我们继续执行，就得到了如下啊信息：

|                  getHandlerAdapter方法源码                   |
| :----------------------------------------------------------: |
| ![image-20200719210604037](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200719210606.png) |

执行流程进入到了`getHandlerAdapter`方法，远远看到这个方法有一种似曾相识的感觉，对，它和HandlerMapping映射器很像，简直就是孪生兄弟。该方法要根据当前返回的handler对象，为其handler对象寻找一个适配器，而handlerAdapters集合对象中就存储着三个适配器，想想我们在映射器中获取执行链的时候是不是也三个呢？对的，他们是成对出现的，handler的对象找其对应的适配器才可以继续执行下去。找到与当前handler对象成对的适配器之后，就返回了该适配器。适配器返回后中间经过了如下方法：

|                     doDispatch()方法源码                     |
| :----------------------------------------------------------: |
| ![image-20200719211355102](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200721193807.png) |

中间经过了这一段代码，获取了请求对象的请求方式并对此进行了一系列的判断操作。继续执行到了下面，下面有一个if判断，判断执行了`applyPreHandler`方法，此方法就是拦截器的前置方法。执行完拦截器的前置方法后，继续向下执行，这时候就该执行如下代码：

|                     doDispatch()方法源码                     |
| :----------------------------------------------------------: |
| ![image-20200719211927390](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200719211929.png) |

从此方法可见`ha`对象是此时的handler对象，说明在执行handler对象之前执行了拦截器，这也是遵循了执行链的顺序。继续执行下去，将完成了请求参数对象的封装和响应中Json字符串与对象的转换后，返回了一个mv对象。那么mv对象是什么呢？其实是在上面定义的ModelAndView对象。返回mv对象后，继续执行便执行到了如下重要的执行逻辑：

|                     doDispatch()方法源码                     |
| :----------------------------------------------------------: |
| ![image-20200719213149039](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200719213151.png) |

其中在执行过程中，判断并执行了拦截器的后置方法。执行完后置方法后，进行了一系列的判断，就开始执行了`processDispatchResult(processdRequest, response, mappdeHandler, mv, dispatchException)`方法，该方法中携带了请求对象、响应对象、handler对象、ModelAndView对象等，进入到此方法源码中，你会发现他进行了一系列的判断，通过如下方法对ModelAndView对象进行了渲染：

|                        render方法源码                        |
| :----------------------------------------------------------: |
| ![image-20200719213629854](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200721193837.png) |

对ModelAndView对象进行渲染和视图解析后，继续跟进方法，因为胜利马上就要来临了。如下图：

|                        render方法源码                        |
| :----------------------------------------------------------: |
| ![image-20200719213959635](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200719214001.png) |

继续执行，就会发现它开始通过`resolveViewName`方法来解析视图了。于是，就进入到了该方法，如下图：

|                   resolveViewName方法源码                    |
| :----------------------------------------------------------: |
| ![image-20200719214336328](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200719214338.png) |

首先，看到此方法的源码，你可以发现，`viewResolvers`视图解析器会解析ModelAndView对象，并返回了一个View对象。后来View对象也会被一个名叫`render`的方法渲染，如下：

|                        view.render()                         |
| :----------------------------------------------------------: |
| ![](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200721194808.png) |

可见，此View对象并不简单，它执行了一番过后，由于我的网页跳转时使用的请求转发，于是就到了如下页面源码：

|                   InternalResourceView源码                   |
| :----------------------------------------------------------: |
| ![](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200721194707.png) |

点击此方法就会发现我们熟悉的请求转发了，此时它在这里读取解析了`spring-mvc.xml`配置文件，为内部默认的请求转发拼接好了路径`forward:/XXX/XXX`（此时也解析了spring-mvc.xml配置文件内的其他组件），如下图：

|            请求转发（InternalResourceView.java）             |
| :----------------------------------------------------------: |
| ![image-20200719215453276](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200719215455.png) |

如果是重定向呢，那么就是如下类中的重定向方法，如下图所示：

|                 重定向（RedirectView.java）                  |
| :----------------------------------------------------------: |
| ![image-20200719215921537](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200719215923.png) |

随后，转发或重定向跳转至JSP页面（视图层）后，渲染数据到HTML中，并渲染完HTML内容后，输出给浏览器并作出响应，在浏览器中显示！

> 此SpringMVC我以打断点调试的方式走了一遍底层的执行流程。我相信你自己打断点调试也会有一个不错的收获！



###### SpringMVC的内部组件

> - **HandlerMapping（处理器映射器）** 
> - **HandlerAdapter（处理器适配器）** 
> - **ViewResolver（视图解析器）** 



###### SpringMVC默认组件初始化加载

上面我们通过Debug简单的走了一遍SpringMVC的执行流程，但是前面所说的那么多内部组件是怎么来的呢？于是，我从DispatherServlet找到了一个方法`initStrategies`，如下：

|                    initStrategies方法源码                    |
| :----------------------------------------------------------: |
| ![image-20200720214203411](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200720214205.png) |

在执行流程开始之前，做了内部组件的一系列初始化操作，这里我们以`initHandlerMappings`方法进行追溯，找到 SpringMVC 的默认配置文件。进入 initHandlerMappings 方法，因为我们并没有进行配置（注解或者 Bean 标签），所以该方法中的前两种情况都会跳过，会来到最下面的默认情况处，调用了 getDefaultStrategies 方法，读取默认的配置文件。

|                 initHandlerMappings方法源码                  |
| :----------------------------------------------------------: |
| ![image-20200720214539186](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200720214541.png) |
|               **getDefaultStrategies方法源码**               |
| ![image-20200720214701181](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200720214702.png) |

在 getDefaultStrategies 方法中，有一个 defaultStrategies，我们当该类上面看一下，如下图：

|                    defaultStrategies源码                     |
| :----------------------------------------------------------: |
| ![image-20200720214907843](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200720214909.png) |

这里就是进行加载默认配置文件的地方，点击 **DEFAULT_STRATEGIES_PATH** 常量，找到了默认的配置配置文件。

|                 DEFAULT_STRATEGIES_PATH常量                  |
| :----------------------------------------------------------: |
| ![image-20200720215021940](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200721193905.png) |

于是我想办法翻到了这个配置文件，里面就初始化了各种组件，大家可以查阅：

|             DispatcherServlet.properties配置文件             |
| :----------------------------------------------------------: |
| ![image-20200720215320968](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200720215323.png) |


