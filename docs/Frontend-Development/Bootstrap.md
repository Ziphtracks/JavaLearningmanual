* [Bootstrap](#bootstrap)
    * [一、Bootstrap概述](#%E4%B8%80bootstrap%E6%A6%82%E8%BF%B0)
    * [二、Bootstrap特点](#%E4%BA%8Cbootstrap%E7%89%B9%E7%82%B9)
    * [三、Bootstrap的下载](#%E4%B8%89bootstrap%E7%9A%84%E4%B8%8B%E8%BD%BD)
    * [四、Bootstrap Validator下载](#%E5%9B%9Bbootstrap-validator%E4%B8%8B%E8%BD%BD)
    * [五、Bootstrap的导入](#%E4%BA%94bootstrap%E7%9A%84%E5%AF%BC%E5%85%A5)
    * [六、Bootstrap和BootstrapValidator结合入门案例](#%E5%85%ADbootstrap%E5%92%8Cbootstrapvalidator%E7%BB%93%E5%90%88%E5%85%A5%E9%97%A8%E6%A1%88%E4%BE%8B)
    * [七、关于Bootstrap的使用](#%E4%B8%83%E5%85%B3%E4%BA%8Ebootstrap%E7%9A%84%E4%BD%BF%E7%94%A8)
    * [八、关于Bootstrap Validator的使用](#%E5%85%AB%E5%85%B3%E4%BA%8Ebootstrap-validator%E7%9A%84%E4%BD%BF%E7%94%A8)

# Bootstrap

------

### 一、Bootstrap概述

> Bootstrap 是一个用于快速开发 Web 应用程序和网站的前端框架。Bootstrap 是基于 HTML、CSS、JavaScript 的。Bootstrap 是由 Twitter 的 Mark Otto 和 Jacob Thornton 开发的。bootstrap 是 2011 年八月在 GitHub 上发布的开源产品。



### 二、Bootstrap特点

> - 移动设备优先：自 Bootstrap 3 起，框架包含了贯穿于整个库的移动设备优先的样式。
> - 浏览器支持：所有的主流浏览器都支持 bootstrap。比如：Internet Explorer、Firefox、Opera、Google Chrome、Safari
> - 容易上手：只要您具备 HTML 和 CSS 的基础知识，您就可以开始学习 bootstrap。
> - 响应式设计：bootstrap 的响应式 CSS 能够自适应于台式机、平板电脑和手机。



### 三、Bootstrap的下载

> Bootstrap的下载，我们需要进入到官网中 https://www.bootcss.com/ 。

![image-20200527195804678](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200527195811.png)



![image-20200527200515197](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200527200517.png)



### 四、Bootstrap Validator下载

> 关于Bootstrap Validator的下载，它的下载地址是在GitHub中，大家可以自行下载。因为它没有友好的官方地址和官方文档，感觉不太友好不想用的小伙伴，也是可以使用Validate的！

**地址：** https://github.com/nghuuphuoc/bootstrapvalidator/archive/v0.4.5.zip

**Bootstrap Validator校验参考：**  [Bootstrap Validator校验步骤讲解](https://github.com/Ziphtracks/JavaLearningmanual/blob/master/docs/Frontend-Development/BootstrapValidator校验.md)



### 五、Bootstrap的导入

> BootStrap为我们提供封装好的样式的各种组件、插件等等，我们只需要在项目中导入BootStrap所需文件即可，并在使用的时候遵循Bootstrap文档操作就OK！

**下载好Bootstrap之后，我们只需要将以下几个文件导入到项目中即可！** 

![image-20200527201157790](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200527201200.png)

> **注意：** 因为再项目中我们会使用到jQuery，所以也导入进去。bootstrap文件夹和validator文件夹我也在IDEA中修改过，大家找好文件导入到项目中即可。
>
> 如果不愿意去分离的话，全部导入到项目也是ok的。但是在代码中引入的时候也不能引入错！
>
> 最后在项目的JSP中引入Bootstrap！

```java
    <%--bootstrap.css--%>
    <link href="${pageContext.request.contextPath}/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <%--bootstrapValidator.css--%>
    <link href="${pageContext.request.contextPath}/validator/css/bootstrapValidator.min.css" rel="stylesheet">
    <%--jQuery.js--%>
    <script src="${pageContext.request.contextPath}/js/jquery-3.2.1.min.js"></script>
    <%--bootstrap.js--%>
    <script src="${pageContext.request.contextPath}/bootstrap/js/bootstrap.min.js"></script>
    <%--bootstrapValidator.js--%>
    <script src="${pageContext.request.contextPath}/validator/js/bootstrapValidator.min.js"></script>
```



### 六、Bootstrap和BootstrapValidator结合入门案例

```html
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>入门案例</title>
    <%--bootstrap.css--%>
    <link href="${pageContext.request.contextPath}/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <%--bootstrapValidator.css--%>
    <link href="${pageContext.request.contextPath}/validator/css/bootstrapValidator.min.css" rel="stylesheet">
    <%--jQuery.js--%>
    <script src="${pageContext.request.contextPath}/js/jquery-3.2.1.min.js"></script>
    <%--bootstrap.js--%>
    <script src="${pageContext.request.contextPath}/bootstrap/js/bootstrap.min.js"></script>
    <%--bootstrapValidator.js--%>
    <script src="${pageContext.request.contextPath}/validator/js/bootstrapValidator.min.js"></script>

    <script type="text/javascript">
        $(function () {
            $("#myForm").bootstrapValidator({
                message: "this is not valid field",
                fields: {
                    username: {
                        validators: {
                            notEmpty: {
                                message: "账户不能为空"
                            },
                            stringLength: {
                                message: "账户长度在6~10之间",
                                min: 6,
                                max: 10
                            },
                            regexp: {
                                message: "账户由小写字母、数字组成",
                                regexp: /^[a-z0-9]+$/
                            }
                        }
                    },
                    password: {
                        validators: {
                            notEmpty: {
                                message: "密码不能为空"
                            },
                            stringLength: {
                                message: "密码长度在6~10之间",
                                min: 6,
                                max: 10
                            },
                            regexp: {
                                message: "密码由小写字母、数字组成",
                                regexp: /^[a-z0-9]+$/
                            },
                            different: {
                                message: "账户和密码不能一致",
                                field: "username"
                            }
                        }
                    }, rePassword: {
                        validators: {
                            identical: {
                                message: "两次密码不一致！",
                                field: "password"
                            }
                        }
                    }, email: {
                        validators: {
                            notEmpty: {
                                message: "邮箱不能为空！"
                            },
                            emailAddress: {
                                message: "邮箱格式不正确！"
                            }
                        }
                    }
                }
            });
        });
    </script>
</head>
<body>
<form id="myForm" action="${pageContext.request.contextPath}/demo01" method="post">
    <div class="form-group">
        账户：<input type="text" name="username"><br>
    </div>
    <div class="form-group">
        密码：<input type="text" name="password"><br>
    </div>
    <div class="form-group">
        确认密码：<input type="text" name="rePassword"><br>
    </div>
    <div class="form-group">
        邮箱：<input type="text" name="email"><br>
    </div>
    <div class="form-group">
        <button type="submit">提交</button>
        <br>
    </div>
</form>
</body>
</html>
```

```java
package com.mylifes1110.java.controller;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet(name = "DemoServlet", value = "/demo01")
public class DemoServlet extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("text/html;charset=utf-8");
        response.getWriter().write("哈哈哈！你终于提交成功了！");
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doPost(request, response);
    }
}
```



### 七、关于Bootstrap的使用

> 关于Bootstrap的其他使用，我在这里不一一列出了。大家可以去官网查看寻找适合自己的样式。
>
> 另外，Bootstrap的使用需要根据文档来使用，因为它是一个开源免费的封装好的库。所以在使用的时候必须遵循Bootstrap文档语法。否则，会没有效果，使用不了。

**这里我贴几张图，大致可以看出Bootstrap文档内的资源内容！** 

*从官网来看，Bootstrap的资源是非常丰富的，而且操作简单，只需要导入文件，找到自己想要的黏贴复制到自己的项目中即可实现。再一次生命，一定要遵循其语法格式。*

> 全局CSS样式

![image-20200527202736331](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200527202738.png)

> 组件

![image-20200527202818714](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200527202820.png)

> JavaScript插件

![image-20200527202855739](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200527202857.png)





### 八、关于Bootstrap Validator的使用

> 关于Bootstrap Validator我这里说一下，并分享他的官网，可以自行查找使用。如果感觉不太友好的话，也可以使用Validate！

**官网地址：** https://formvalidation.io/

**Bootstrap Validator校验参考：**  [Bootstrap Validator校验步骤讲解](https://github.com/Ziphtracks/JavaLearningmanual/blob/master/docs/Frontend-Development/BootstrapValidator校验.md)