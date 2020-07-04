* [婚礼汇项目简介](#%E5%A9%9A%E7%A4%BC%E6%B1%87%E9%A1%B9%E7%9B%AE%E7%AE%80%E4%BB%8B)
    * [一、项目介绍](#%E4%B8%80%E9%A1%B9%E7%9B%AE%E4%BB%8B%E7%BB%8D)
    * [二、需求分析](#%E4%BA%8C%E9%9C%80%E6%B1%82%E5%88%86%E6%9E%90)
    * [三、数据模型分析与建立](#%E4%B8%89%E6%95%B0%E6%8D%AE%E6%A8%A1%E5%9E%8B%E5%88%86%E6%9E%90%E4%B8%8E%E5%BB%BA%E7%AB%8B)
    * [四、页面与功能](#%E5%9B%9B%E9%A1%B5%E9%9D%A2%E4%B8%8E%E5%8A%9F%E8%83%BD)
    * [五、项目结构](#%E4%BA%94%E9%A1%B9%E7%9B%AE%E7%BB%93%E6%9E%84)
    * [六、部分页面展示](#%E5%85%AD%E9%83%A8%E5%88%86%E9%A1%B5%E9%9D%A2%E5%B1%95%E7%A4%BA)
    * [七、核心代码与详解](#%E4%B8%83%E6%A0%B8%E5%BF%83%E4%BB%A3%E7%A0%81%E4%B8%8E%E8%AF%A6%E8%A7%A3)
      * [7\.1 注册功能](#71-%E6%B3%A8%E5%86%8C%E5%8A%9F%E8%83%BD)
      * [7\.2 手机短信服务](#72-%E6%89%8B%E6%9C%BA%E7%9F%AD%E4%BF%A1%E6%9C%8D%E5%8A%A1)
      * [7\.2 登录功能](#72-%E7%99%BB%E5%BD%95%E5%8A%9F%E8%83%BD)
      * [7\.3 酒店列表](#73-%E9%85%92%E5%BA%97%E5%88%97%E8%A1%A8)
      * [7\.4 酒店详情](#74-%E9%85%92%E5%BA%97%E8%AF%A6%E6%83%85)
      * [7\.5 套餐详情](#75-%E5%A5%97%E9%A4%90%E8%AF%A6%E6%83%85)
      * [7\.6 购物车](#76-%E8%B4%AD%E7%89%A9%E8%BD%A6)
    * [八、项目注意事项](#%E5%85%AB%E9%A1%B9%E7%9B%AE%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A1%B9)
      * [8\.1 解决Servlcet创建过多](#81-%E8%A7%A3%E5%86%B3servlcet%E5%88%9B%E5%BB%BA%E8%BF%87%E5%A4%9A)
      * [8\.2 解决页面放在web中不安全问题](#82-%E8%A7%A3%E5%86%B3%E9%A1%B5%E9%9D%A2%E6%94%BE%E5%9C%A8web%E4%B8%AD%E4%B8%8D%E5%AE%89%E5%85%A8%E9%97%AE%E9%A2%98)
      * [8\.3 Filter实现自动登录](#83-filter%E5%AE%9E%E7%8E%B0%E8%87%AA%E5%8A%A8%E7%99%BB%E5%BD%95)
    * [九、本项目注意事项](#%E4%B9%9D%E6%9C%AC%E9%A1%B9%E7%9B%AE%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A1%B9)
      * [9\.1 如何将HTML页面改为JSP页面](#91-%E5%A6%82%E4%BD%95%E5%B0%86html%E9%A1%B5%E9%9D%A2%E6%94%B9%E4%B8%BAjsp%E9%A1%B5%E9%9D%A2)
      * [9\.2 解决资源损坏导致样式乱掉](#92-%E8%A7%A3%E5%86%B3%E8%B5%84%E6%BA%90%E6%8D%9F%E5%9D%8F%E5%AF%BC%E8%87%B4%E6%A0%B7%E5%BC%8F%E4%B9%B1%E6%8E%89)

# 婚礼汇项目简介

------

### 一、项目介绍



**项目声明：** 本项目作为JavaWeb学习阶段的综合练习，不属于成熟项目。所以在此项目中主要杂揉了Web阶段学过的知识，提供HTML页面和CSS样式，此次练习只需要完成指定功能即可（某些功能我没有写，大家有兴趣自行完成）！

**项目名称：** 婚礼汇

**项目介绍：** 基于JavaEE平台的系统，用于解决结婚、宴请、聚会、婚车、酒店预订、化妆等一系列服务。



### 二、需求分析

 

**技术架构：** 

1. **前端技术栈：** HTML、CSS、JavaScript、jQuery、BoootStrap、Json等
2. **后端技术栈：** JDBC、Filter、Servlet、JSP、反射等
3. **服务器：** Tomact8.5
4. **数据库：** MySQL5.7



**功能架构：** 

1. **前端架构：** 登录、注册、首页、酒店列表、酒店详情、套餐详情、加入购物车、购物车列表、商品结算
2. **后端架构：** 用户管理、购物车、酒店列表、酒店详情、套餐、酒店、场地详情等服务管理



**项目架构：** 使用基于MVC的三层架构设计、Servlet+JSP技术结构



### 三、数据模型分析与建立



**数据关系模型分析：** 

> 用户与购物车一对多的关系，指的是一个用户可以在购物车中添加多个商品。

1. 用户与购物车（一对多）
2. 酒店与房间（一对多）
3. 酒店与套餐（一对多）
4. 酒店与详细信息（一对一）
5. 图片与酒店、房间和套餐（分别为一对多）



**数据库模型建立：**

> 该数据库模型为物理数据模型。使用Navicet建立！

> 酒店、房间、套餐、酒店信息、图片数据的关系

![image-20200524163949931](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200524163954.png)

> 用户、购物车关系

![image-20200524164154051](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200524164157.png)



### 四、页面与功能



**页面流程：** 

> 所需完成功能的如下：

![image-20200524170124310](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200524170128.png)



**功能描述：** 

- **会员注册** 
  - 手机号、密码、短信验证码格式校验
  - 阿里云短信服务实现手机号接收验证码并校验
  - 将注册信息存储到数据库
  - 注册成功跳转会员登录页面
  - 注册失败返回注册失败的相关信息，跳转本注册页面
- **会员登录** 
  - 手机号、密码、验证码格式校验
  - 生成随机4位验证码并添加登录校验
  - 查询数据库中会员信息进行会员登陆
  - 登陆成功跳转首页
  - 登录失败返回登录失败的相关信息提示，跳转登录页面
- **自动登录** 
  - 登陆后默认7天内自动登录
- **酒店列表** 
  - 使用分页查询动态显示酒店列表信息
- **酒店详情** 
  - 动态显示点击后的酒店详情信息
- **套餐** 
  - 点击套餐跳转套餐列表
  - 可以根据套餐的类型、场地选择相应的套餐加入购物车
  - 此处加入购物车操作的信息存储到数据库中对应表内
- **我的购物车** 
  - 购物车内产生32位订单号并显示
  - 显示当前加入购物车的服务器时间
  - 单选、全选选中购物车内商品单选框实现总价变化
  - 加减商品数量对数据库的商品数量做修改并动态显示总价



### 五、项目结构



**项目所需第三方资源和jar包** 

> 下载地址：

- 阿里云短信服务
  - aliyun-java-sdk-core-4.1.1
  - aliyun-java-sdk-dysmsapi-1.1.0
  - gson-2.8.6
- c3p0连接池
  - c3p0-0.9.5.4
  - mchange-commons-java-0.2.16
- BeanUtils
  - commons-beanutils-1.9.4
  - commons-collections-3.2.2
  - commons-logging-1.2
- dbUtils
  - commons-dbutils-1.6
- 文件上传与下载
  - commons-fileupload-1.4
  - commons-io-2.6
- Json转换工具Jackson
  - jackson-annotations-2.9.8
  - jackson-core-2.9.8
  - jackson-databind-2.9.8
- JSTL标签库
  - jstl
  - standard
- IDEA Lombok插件
  - lombok-1.18.10
- MySQL
  - mysql-connector-java-5.1.25-bin
- bootstrapValidator
- bootstrap-3.3.7
- jquery-3.2.1.min



**项目结构图**

![image-20200524174548912](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200524174558.png)



### 六、部分页面展示

![image-20200524175132068](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200524175134.png)

![image-20200524174814922](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200524174818.png)

![image-20200524174847365](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200524174850.png)

![image-20200524174929338](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200524174931.png)

![image-20200524174956456](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200524174958.png)![image-20200524175055946](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200524175058.png)



### 七、核心代码与详解

> 该代码只是部分代码，也没有涉及到Service层与Dao层代码。如果有兴趣可以来下载此项目资源！

#### 7.1 注册功能

> 注册页面使用bootstrapValidator的js校验

```html
<script type="text/javascript">
        var interval;

        function sendSMS() {
            /**
             * 校验手机号,触发bootstrapValidator对手机号的校验
             */
                //初始化bootstrapValidator对象
            var validator = $("#myForm").data("bootstrapValidator");
            validator.validateField("user_tel");
            var flag = validator.isValidField("user_tel");
            if (flag) {
                interval = setInterval("showCount()", 1000);
                $(".qrcode").attr("disabled", true);
                /**
                 * 请求服务器发送验证码
                 */
                $.post("${pageContext.request.contextPath}/sms", {
                    "methodName": "sendSMS",
                    "phoneNum": $("#user_tel").val()
                }, function (data) {
                    console.log(data);
                }, "json");
            }
        }

        var count = 30;

        function showCount() {
            $(".qrcode").text(count + " s");
            count--;
            if (count < -1) {
                clearInterval(interval);
                $(".qrcode").text("发送验证码");
                count = 30;
                $(".qrcode").attr("disabled", false);
            }
        }

        $(function () {
            $("#myForm").bootstrapValidator({
                message: "this is no a valiad field",
                fields: {
                    user_tel: {
                        message: "您输入的手机号有误",
                        validators: {
                            notEmpty: {
                                message: "手机号不能为空"
                            },
                            regexp: {
                                message: "您输入的手机号有误",
                                regexp: /^[1]{1}[1356789]{1}[0-9]{9}$/
                            }
                        }
                    },
                    user_password: {
                        message: "密码错误",
                        validators: {
                            notEmpty: {
                                message: "密码不能为空"
                            },
                            regexp: {
                                message: "密码长度为6~9位，由小写字母、数字组成",
                                regexp: /^[a-z0-9]{6,9}$/
                            },
                            different: {
                                message: "密码不能与手机号一致",
                                field: "user_tel"
                            }
                        }
                    },
                    qrCode: {
                        message: "验证码错误",
                        validators: {
                            notEmpty: {
                                message: "验证码不能为空"
                            },
                            stringLength: {
                                message: "验证码错误",
                                min: 4,
                                max: 4
                            }
                        }
                    }
                }
            });
        })
    </script>

    <style type="text/css">
        .qrcode {
            background-color: white;
        }

        .user-form-wraps {
            width: 380px;
        }

        .user-form-button {
            width: 300px;
        }
    </style>

                <div class="user-form-item"><strong class="user-form-title">会员注册</strong></div>
                <form id="myForm" action="${pageContext.request.contextPath}/user">
                    <input type="hidden" name="methodName" value="register"/>
                    <div class="user-form-item form-group">
                        <input id="user_tel" name="user_tel" class="user-input" type="text" placeholder="手机号">
                    </div>
                    <div class="user-form-item form-group">
                        <input name="user_password" class="user-input" type="password"
                               placeholder="密码">
                    </div>
                    <div class="user-form-item form-group">
                        <input name="phoneCode" class="user-input user-input-adjust" type="text"
                               placeholder="短信验证码">
                        <button type="button" class="qrcode" onclick="sendSMS()">发送验证码</button>
                    </div>
                    <div class="user-form-item">
                        <label>
                            <input class="user-check" type="checkbox" checked="false" value="yes">
                            <span class="cos_span">
                                	登录即表示同意<a class="keyword-blue-pale">《119婚庆网用户协议》</a>
                                </span>
                        </label>
                    </div>
                    <div class="user-form-item form-group">
                        <button type="submit" class="user-form-button" style="font-weight: bold;">立即注册</button>
                    </div>
                </form>
                <font color="red">${errorMsg}</font>
                <div class="user-form-item us_text_right">
                    <span class="cos_span"><a href="${pageContext.request.contextPath}/center?methodName=toLogin">已有账户?立即登录</a></span>
                </div>
```

> 注册页面Servlet代码

```java
public String register(HttpServletRequest request, HttpServletResponse response) {
        try {

            /*
             * 1.使用BeanUtils封装表单参数至User实体类(封装表单user_tel和user_password参数)
             * 2.获取表单参数(表单验证码)
             * 3.获取Session使用阿里云短信服务平台的所发手机号验证码
             * 4.表单验证码与Session中验证码进行校验
             */
            User user = new User();

            BeanUtils.populate(user, request.getParameterMap());

            String phoneCode      = request.getParameter("phoneCode");
            Object existPhoneCode = request.getSession().getAttribute("existPhoneCode");

            /*
             * 校验成功,则进行注册操作并重定向至登录页面
             * 校验失败,则记录返回错误信息并请求转发至注册页面
             */
            if (existPhoneCode.equals(phoneCode)) {
                userService.register(user);

                return "redirect:center?methodName=toLogin";
            } else {
                request.setAttribute("errorMsg", "验证码错误");

                return "register.jsp";
            }
        } catch (IllegalAccessException | InvocationTargetException | SQLException e) {
            e.printStackTrace();
        }

        /*
         * 捕获用户名已存在数据库插入异常等,则返回错误信息
         */
        request.setAttribute("errorMsg", "注册失败 用户名已存在");

        return "register.jsp";
    }
```



#### 7.2 手机短信服务

- 手机验证码是由阿里云短信平台提供。
- 在阿里云短信平台开通服务
  - 获取权限码(AccessKey)
  - 获取短信服务签名
  - 获取短信模板
- 导入jar包
- 使用SMSUtils工具类
- 配置sms.properties配置文件

**SMSUtils工具类**

```java
package com.mylifes1110.java.utils;

import java.io.IOException;
import java.io.InputStream;

import java.util.Properties;
import java.util.Random;

import javax.servlet.http.HttpSession;

import com.aliyuncs.DefaultAcsClient;
import com.aliyuncs.IAcsClient;
import com.aliyuncs.dysmsapi.model.v20170525.SendSmsRequest;
import com.aliyuncs.dysmsapi.model.v20170525.SendSmsResponse;
import com.aliyuncs.exceptions.ClientException;
import com.aliyuncs.profile.DefaultProfile;
import com.aliyuncs.profile.IClientProfile;

public class SmsUtil {

    // 产品名称:云通信短信API产品,开发者无需替换
    static final String product = "Dysmsapi";

    // 产品域名,开发者无需替换
    static final String domain = "dysmsapi.aliyuncs.com";
    static final String accessKeyId;
    static final String accessKeySecret;

    static {
        InputStream inputStream = SmsUtil.class.getClassLoader().getResourceAsStream("sms.properties");
        Properties  properties  = new Properties();

        try {
            properties.load(inputStream);
        } catch (IOException e) {
            e.printStackTrace();
        }

        accessKeyId     = properties.getProperty("accessKeyId");
        accessKeySecret = properties.getProperty("accessKeySecret");
    }

    /**
     * 发送验证码
     *
     * @param session
     * @return
     * @throws ClientException
     */
    public static SendSmsResponse sendSms(HttpSession session, String phoneNum) throws ClientException {

        // 可自助调整超时时间
        System.setProperty("sun.net.client.defaultConnectTimeout", "10000");
        System.setProperty("sun.net.client.defaultReadTimeout", "10000");

        // 初始化acsClient,暂不支持region化
        IClientProfile profile = DefaultProfile.getProfile("cn-hangzhou", accessKeyId, accessKeySecret);

        DefaultProfile.addEndpoint("cn-hangzhou", "cn-hangzhou", product, domain);

        IAcsClient acsClient = new DefaultAcsClient(profile);

        // 组装请求对象-具体描述见控制台-文档部分内容
        SendSmsRequest request = new SendSmsRequest();

        // 必填:待发送手机号
        request.setPhoneNumbers(phoneNum);

        // 必填:短信签名-可在短信控制台中找到
        request.setSignName("Ziph");

        // 必填:短信模板-可在短信控制台中找到
        request.setTemplateCode("SMS_190786715");

        // 产生四位随机验证码
        StringBuffer randomNum = new StringBuffer();

        for (int i = 0; i < 4; i++) {
            randomNum.append(new Random().nextInt(10));
        }

        request.setTemplateParam("{'code':" + randomNum + "}");

        // 四位随机验证码存储到session
        session.setAttribute("existPhoneCode", randomNum.toString());

        // hint 此处可能会抛出异常，注意catch
        SendSmsResponse sendSmsResponse = acsClient.getAcsResponse(request);

        return sendSmsResponse;
    }
}
```

**sms.properties**

> accessKeyId与ccessKeySecret填写自己的！

```java
accessKeyId=LTAA4SDjx6A4FYdTBftaH2SS
accessKeySecret=yblECZFJHLW3Rti40UBNUXAleFftyWN
```



#### 7.2 登录功能

> 该页面代码没有重要信息，贴出来好查看大概

```html
<div class="user-form-item"><strong class="user-form-title">会员登录</strong></div>
                <form action="${pageContext.request.contextPath}/user" method="post">
                    <input type="hidden" name="methodName" value="login">
                    <div class="user-form-item">
                        <input name="user_tel" class="user-input" type="text" max="15" maxlength="15" placeholder="手机号">
                    </div>
                    <div class="user-form-item">
                        <input name="user_password" class="user-input" type="password" max="15" maxlength="15"
                               placeholder="密码">
                    </div>
                    <div class="user-form-item">
                        <input name="qrCode" class="user-input user-input-adjust" type="text" max="4" placeholder="验证码"><img
                            onclick="$('.qrcode').attr('src', '${pageContext.request.contextPath}/center?methodName=validateCode&' + Math.random())"
                            class="qrcode" style="cursor:pointer"
                            src="${pageContext.request.contextPath}/center?methodName=validateCode">
                    </div>
                    <font color="red">${errorMsg}</font>
                    <div class="user-form-item">
                        <label>
                            <input class="user-check" type="checkbox" checked="false" value="yes">
                            <span class="cos_span">
                                	登录即表示同意<a class="keyword-blue-pale">《119婚庆网用户协议》</a>
                                </span>
                        </label>
                    </div>
                    <div class="user-form-item">
                        <button type="submit" class="user-form-button" style="font-weight: bold;">登&nbsp;&nbsp;录
                        </button>
                    </div>
                    <div class="user-form-item us_text_right">
                        <span class="cos_span"><a>忘记密码?</a></span>&nbsp;&nbsp;<span
                            class="cos_span_empty"><a href="${pageContext.request.contextPath}/center?methodName=toRegister">注册账号</a></span>
                    </div>
```

> 登录功能Servlet代码

```java
public String login(HttpServletRequest request, HttpServletResponse response) throws SQLException {
        try {
            User user = new User();

            BeanUtils.populate(user, request.getParameterMap());

            // 获取表单内输入的验证码
            String qrCode = request.getParameter("qrCode");

            // 获取Session中的验证码
            Object existQrCode = request.getSession().getAttribute("key");

            /*
             * 校验验证码
             * 成功,则跳转首页
             * 失败,则跳转登录页面
             */
            if (existQrCode != null) {
                if (existQrCode.equals(qrCode)) {
                    User existUser = userService.login(user);

                    /*
                     * 校验数据库查询结果是否为空数据
                     * 不为空,则证明登录成功！将用户数据存入Session中并重定向至首页
                     * 为空,则证明登陆失败！将错误信息保存至request中并默认转发至登录页面
                     */
                    if (existUser != null) {
                        Cookie cookie = new Cookie("autoLogin", user.getUser_tel() + "-" + user.getUser_password());
                        cookie.setPath("/");
                        cookie.setMaxAge(60 * 60 * 24 * 7);
                        response.addCookie(cookie);

                        request.getSession().setAttribute("existUser", existUser);

                        return "redirect:center?methodName=toIndex";
                    } else {
                        request.setAttribute("errorMsg", "手机号或密码错误");

                        return "login.jsp";
                    }
                } else {
                    request.setAttribute("errorMsg", "验证码错误");

                    return "login.jsp";
                }
            }
        } catch (IllegalAccessException | InvocationTargetException e) {
            e.printStackTrace();
        }

        // 抛出异常后登录失败
        request.setAttribute("errorMsg", "手机号或密码错误");

        return "login.jsp";
    }
```



#### 7.3 酒店列表

> 酒店列表后台代码

```html
<c:forEach items="${pageBean.list}" var="hotel">
                    <li>
                        <div class="gdx-lists-wrap layout_clear">
                            <div class="gdx-lists-img layout_fl">
                                <a href="${pageContext.request.contextPath}/hotel?methodName=selectHotelDetailsByHotelId&hotelId=${hotel.hotel_id}"><img
                                        src="${pageContext.request.contextPath}/${hotel.img.img_add}"
                                        style="display:block"></a>
                            </div>
                            <div class="gdx-lists-data">
                                <h2>
                                    <a href="${pageContext.request.contextPath}/center?methodName=toHotelDetails" style="font-size: 20px">${hotel.hotel_name}</a>
                                </h2>
                                <div class="gdx-lists-local">
                                    <span class="page_icon in_local_icon"></span>${hotel.hotel_address}
                                </div>
                                <div class="gdx-lists-heart">
                                	<span class="page_icon add-heart-out">
                                    	<span class="page_icon add-heart-in" style="${hotel.hotel_star}"></span>
                                    </span>
                                    推荐指数
                                </div>
                                <div class="gdx-lists-info">
                                    <div class="gdx-lists-icon">
                                        <a href="field.html"><i class="page_icon in-data-Icon0"></i></a><a
                                            href="field.html"><i class="page_icon in-data-Icon1"></i></a><a
                                            href="field.html"><i class="page_icon in-data-Icon2"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </c:forEach>
```

> 酒店列表后台代码

```java
public String selectHotelListByPage(HttpServletRequest request, HttpServletResponse response)
            throws IllegalAccessException, SQLException, InvocationTargetException {
        Integer currentPage = getCurrentPage(request.getParameter("currentPage"));

        /*
         * 分页查询酒店列表
         *
         */
        PageBean<Hotel> pageBean = hotelService.selectHotelListByPage(currentPage);

        request.setAttribute("pageBean", pageBean);

        return "hotelList.jsp";
    }

    public Integer getCurrentPage(String currentPageStr) {
        if (currentPageStr == null) {
            return 1;
        }

        return Integer.parseInt(currentPageStr);
    }
```



#### 7.4 酒店详情

> 酒店详情前端代码

```html
<c:forEach items="${rooms}" var="room">
        <ul>
            <li>
                <div class="room-div1">
                    <div class="room-div2">
                        <div class="room-div3">
                            <img style="margin-left: 10px" alt="${room.room_name}"
                                 src="${pageContext.request.contextPath}/${room.img.img_add}">
                        </div>
                        <div class="room-div4">
                            <table border="1">
                                <tr>
                                    <td style="font-size: 25px" colspan="6" align="center">${room.room_name}</td>
                                </tr>
                                <tr align="center">
                                    <td class="room-td1">空高</td>
                                    <td class="room-td2">${room.room_height}</td>
                                    <td class="room-td1">低消</td>
                                    <td class="room-td3">${room.room_min_fee}</td>
                                    <td class="room-td1">形状</td>
                                    <td class="room-td4">${room.room_form}</td>
                                </tr>
                                <tr align="center">
                                    <td class="room-td1">柱子</td>
                                    <td class="room-td2">${room.room_pillar}</td>
                                    <td class="room-td1">晚餐</td>
                                    <td class="room-td3">${room.room_dinner}</td>
                                    <td class="room-td1">电费</td>
                                    <td class="room-td4">${room.room_electric_fee}</td>
                                </tr>
                                <tr align="center">
                                    <td class="room-td1">拆分</td>
                                    <td class="room-td2">${room.room_split}</td>
                                    <td class="room-td1">面积</td>
                                    <td class="room-td3">${room.room_area}</td>
                                    <td class="room-td1">灯光</td>
                                    <td class="room-td4">${room.room_lamplight}</td>
                                </tr>
                                <tr align="center">
                                    <td class="room-td1">LED</td>
                                    <td class="room-td2">${room.room_LED}</td>
                                    <td class="room-td1">桌数</td>
                                    <td class="room-td3">${room.room_tables}</td>
                                    <td colspan="2"></td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </c:forEach>
</div>

<div class="layout_center" style="margin-top: 50px">
    <table border="1" class="info-table">
        <tr>
            <td>星级</td>
            <td>${information.info_star_level}</td>
            <td>装修时间</td>
            <td>${information.info_decorate_time}</td>
        </tr>
        <tr>
            <td>服务费</td>
            <td>${information.info_service_fee}</td>
            <td>定金</td>
            <td>${information.info_subscription}</td>
        </tr>
        <tr>
            <td>进场费</td>
            <td>${information.info_enter_fee}</td>
            <td>婚房化妆间</td>
            <td>${information.info_dressing_room}</td>
        </tr>
        <tr>
            <td>麦克风</td>
            <td>${information.info_microphone}</td>
            <td>投影仪</td>
            <td>${information.info_projector}</td>
        </tr>
        <tr>
            <td>桌布</td>
            <td>${information.info_tablecloth}</td>
            <td>电费</td>
            <td>${information.info_electric_charge}</td>
        </tr>
        <tr>
            <td>公交路线</td>
            <td colspan="3">${information.info_bus}</td>
        </tr>
        <tr>
            <td>棋牌娱乐</td>
            <td>${information.info_amusement}</td>
            <td colspan="2"></td>
        </tr>
    </table>
</div>
```

> 酒店详情后端代码

```java
public String selectHotelDetailsByHotelId(HttpServletRequest request, HttpServletResponse response) throws SQLException, InvocationTargetException, IllegalAccessException {
        Integer hotelId = Integer.parseInt(request.getParameter("hotelId"));
        //查询酒店信息
        Hotel hotel = hotelService.selectHotelById(hotelId);
        request.setAttribute("hotel", hotel);
        //查询酒店房间列表
        List<Room> room = roomService.selectRoomListByHotelId(hotelId);
        request.setAttribute("rooms", room);
        //查询酒店详细信息
        Information information = informationService.selectInformationByHotelId(hotelId);
        request.setAttribute("information", information);
        //查询套餐列表
        List<Package> packages = packageService.selectPackageListByHotelId(hotelId);
        request.setAttribute("packages", packages);
        return "hotelDetails.jsp";
    }
```



#### 7.5 套餐详情

> 套餐详情前端代码

```html
	<script type="text/javascript">
	function menuClick(id) {
            //选中点击的选项
            var check = $("#" + id).attr("class");
            if (check != "check") {
                $("#menu li").each(function (index) {
                    $(this).attr("class", "");
                });
                $("#" + id).attr("class", "check");
            }
        }

        function roomClick(roomId) {
            console.log("roomClick" + roomId);
            var check = $("#" + roomId).attr("class");
            if (check != "check") {
                $("#room li").each(function (index) {
                    $(this).attr("class", "");
                });
                $("#" + roomId).attr("class", "check");
            }
        }

        function plus() {
            var count = $("#count").val();
            if (count >= 0 && count < 99) {
                count++;
                $("#count").val(count);
            }
        }

        function reduce() {
            var count = $("#count").val();
            if (count > 1 && count <= 99) {
                count--;
                $("#count").val(count);
            }
        }

        function addCart() {
            var shoppingcart_time = getTime();
            var shoppingcart_type = $("#menu li[class='check']").text();
            var shoppingcart_place = $("#room li[class='check']").text();
            var shoppingcart_count = $("#count").val();
            $.post("${pageContext.request.contextPath}/cart", {
                "methodName": "addCart",
                "shoppingcart_time": shoppingcart_time,
                "shoppingcart_name": "${packages.package_name}",
                "shoppingcart_type": shoppingcart_type,
                "shoppingcart_place": shoppingcart_place,
                "shoppingcart_price": "${packages.package_price}",
                "shoppingcart_count": shoppingcart_count,
                "shoppingcart_img": "${packages.img.img_add}",
                "shoppingcart_hotelname": "${hotel.hotel_name}"
            }, function (data) {
                console.log(data);
                if (data.flag) {
                    //加入购物车成功,跳转购物车页面
                    location.href = "${pageContext.request.contextPath}/cart?methodName=selectCartList";
                } else {
                    //加入购物车失败,弹窗提示加入购物车失败
                    alert("添加购物车失败");
                }
            }, "json");
        }

        function getTime() {
            var date = new Date();
            var year = date.getFullYear();
            var month = date.getMonth();
            var day = date.getDate();
            var hours = date.getHours();
            var minutes = date.getMinutes();
            var seconds = date.getSeconds();
            var arr1 = [year, month, day];
            var arr2 = [hours, minutes, seconds];
            var timeStr = arr1.join("/") + " " + arr2.join(":");
            return timeStr;
        }
    </script>

<div id="page-godMx">
    <div class="layout_center">
        <div class="path">
            <span><a>婚礼汇</a></span>
            <em>></em>
            <span><a>婚宴场地</a></span>
            <em>></em>
            <span><a>特色套餐</a></span>
            <em>></em>
            <a class="cur">${packages.package_name}</a>
        </div>
        <div id="gods-header" class="gods-header layout_clear" style="margin-top:0px;">
            <h2 class="gods-header-tit">${hotel.hotel_name}</h2>
            <div class="gods-header-fl layout_fl">
                <div id="gods-display-img">
                    <img src="${pageContext.request.contextPath}/${packages.img.img_add}">
                </div>
                <div id="gods-display-list">
                    <ul class="layout_clear fl_li">
                        <li class="win_current">
                            <img src="${pageContext.request.contextPath}/${packages.img.img_add}">
                        </li>
                    </ul>
                </div>
                <div class="gods-attrid">
                    <span class="fl">商品编号：${packages.package_id}</span>
                    <span class="fr">
                        	<span class="gods-share"><i class="page_icon"></i>分享</span>
                            <span class="gods-follow" style="cursor:pointer"><i class="page_icon"></i>收藏商品</span>
                        </span>
                </div>
            </div>
            <div class="gods-header-cn layout_fl">
                <div class="gods-uhbasic">
                    <p class="gods-uhbasic-tit">${packages.package_name}</p>
                    <p class="gods-uhbasic-stat">${packages.package_content}</p>
                </div>
                <div class="gods-uhsale layout_clear">
                    <div class="gods-uhsale-fl layout_fl">
                        <div class="gods-uhprice-item">
                            <span class="gods-uhprice-label">原价</span>
                            <%--原价数据库中没有--%>
                            <h4>￥2999.00</h4>
                        </div>
                        <div class="gods-uhprice-item">
                            <span class="gods-uhprice-label">平台价</span>
                            <h2><em class="gods-uhprice-str">￥</em>${packages.package_price}</h2>
                        </div>
                    </div>
                    <div class="gods-uhsale-fr layout_fl">
                        <span>累计评价</span>
                        <h3>0</h3>
                    </div>
                </div>
                <div class="gods-pro">
                    <dl class="gods-pro-item layout_clear">
                        <dt class="gods-pro-label">联系地址</dt>
                        <dd class="gods-pro-param gods-pro-primary layout_fl">${hotel.hotel_address}</dd>
                    </dl>
                    <dl class="gods-pro-item layout_clear">
                        <dt class="gods-pro-label">服务</dt>
                        <dd class="gods-pro-param gods-pro-primary layout_fl">
                            由<a class="gods-pro-key1">${hotel.hotel_name}</a>提供售后服务<a class="gods-pro-key0">联系卖家</a>
                        </dd>
                    </dl>
                    <dl class="gods-pro-item layout_clear">
                        <dt class="gods-pro-label gods-pro-clear0">套餐类型</dt>
                        <dd class="gods-pro-param gods-pro-primary layout_fl">
                            <ul class="gods-pro-list gods-pro-list0" id="menu">
                                <c:if test="${packages.package_menuA != null && packages.package_menuB !=null}">
                                    <li id="menuA" class="check" onclick="menuClick('menuA')"><a><span>A款</span></a></li>
                                    <li id="menuB" onclick="menuClick('menuB')"><a><span>B款</span></a></li>
                                </c:if>
                                <c:if test="${packages.package_menuA != null && packages.package_menuB == null}">
                                    <li id="menuA" class="check"><a><span>A款</span></a></li>
                                </c:if>
                                <c:if test="${packages.package_menuA == null && packages.package_menuB != null}">
                                    <li id="menuB" class="check"><a><span>B款</span></a></li>
                                </c:if>
                                <c:if test="${packages.package_menuA == null && packages.package_menuB == null}">
                                    <li class="check"><a><span>无</span></a></li>
                                </c:if>
                            </ul>
                        </dd>
                    </dl>
                    <dl class="gods-pro-item layout_clear">
                        <dt class="gods-pro-label gods-pro-clear0">婚宴场地</dt>
                        <dd class="gods-pro-param gods-pro-primary layout_fl">
                            <ul class="gods-pro-list gods-pro-list0" id="room">
                                <c:forEach items="${rooms}" var="room" varStatus="status">
                                    <c:if test="${status.index == 0}">
                                        <li id="${room.room_id}" class="check" onclick="roomClick('${room.room_id}')"><a><span>${room.room_name}</span></a></li>
                                    </c:if>
                                    <c:if test="${status.index != 0}">
                                        <li id="${room.room_id}" onclick="roomClick('${room.room_id}')"><a><span>${room.room_name}</span></a></li>
                                    </c:if>
                                </c:forEach>
                            </ul>
                        </dd>
                    </dl>
                    <dl class="gods-pro-item layout_clear">
                        <dt class="gods-pro-label gods-pro-clear2">数量</dt>
                        <dd class="gods-pro-param gods-pro-primary layout_fl">
                            	<span class="gods-counter">
                                	<input id="count" type="text" class="gods-counter-text" name="BuyCarNum" value="1"
                                           maxlength="3" min="1">
                                    <span class="gods-counter-btn">
                                    	<span class="gods-counter-push page_icon" title="加"
                                              onclick="plus()"></span>
                                        <span class="gods-counter-reduce page_icon" title="减"
                                              onclick="reduce()"></span>
                                    </span>
                                    <span class="gods-counter-outs">件</span>
                                    <span class="gods-counter-num" id="stock">(库存99件)</span>
                                </span>
                        </dd>
                    </dl>
                    <dl class="gods-pro-item layout_clear">
                        <dt class="gods-pro-label">服务承诺</dt>
                        <dd class="gods-pro-param gods-pro-middle layout_fl">正品保障 沟通预订 资金管理 满意后付款</dd>
                    </dl>
                    <dl class="gods-pro-item layout_clear">
                        <dd class="gods-pro-item layout_clear">
                            <a class="gods-pro-payfor">立即购买</a>、
                            <a onclick="addCart()" class="gods-pro-payfor"
                               href="javascript:void(0);">加入购物车</a>
                        </dd>
                    </dl>
                </div>
            </div>
            <div class="gods-header-fr layout_fl">
                <div class="gods-shop">
                    <div class="gods-shop-tit">重庆南温泉丽筠酒店</div>
                    <div class="gods-shop-logo"><img src="${pageContext.request.contextPath}/img/msF58469607Jg.jpg"
                                                     style="width:100%;height: 100%;"></div>
                    <div class="gods-shop-go"><a class="cur">进入店铺</a> <a>收藏店铺</a></div>
                </div>
                <div class="gods-aside-inset"><img src="${pageContext.request.contextPath}/img/qER49920125Kw.jpg"
                                                   style="margin:auto"></div>
                <ul class="gods-other-list">
                    <li>
                        <a>
                            <div>
                                <img src="${pageContext.request.contextPath}/img/LSN54767537nb.jpg" style="width:100%">
                                <span class="gods-inc"><span class="gods-inc-text" title="湘域中餐厅">湘域中餐厅</span></span>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a>
                            <div>
                                <img src="${pageContext.request.contextPath}/img/Hbp54860401oB.jpg" style="width:100%">
                                <span class="gods-inc"><span class="gods-inc-text" title="中天大酒楼">中天大酒楼</span></span>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div id="gods-section" class="gods-section layout_clear">
            <div class="gods-grids-fl layout_fl">
                <div class="gods-aside-hd">相似产品<a class="layout_fr">更多</a></div>
                <ul class="gods-aside-list">
                    <li>
                        <a>
                            <div class="gods-aside-img">
                                <img src="${pageContext.request.contextPath}/img/iQP54584096YB.jpg"
                                     style="width: 100%; display: block;">
                            </div>
                            <div class="gods-aside-dis">
                                <p class="gods-aside-price"><span>￥0.00</span></p>
                                <p class="gods-aside-text">大厅</p>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a>
                            <div class="gods-aside-img">
                                <img src="${pageContext.request.contextPath}/img/iQP54584096YB.jpg"
                                     style="width: 100%; display: block;">
                            </div>
                            <div class="gods-aside-dis">
                                <p class="gods-aside-price"><span>￥0.00</span></p>
                                <p class="gods-aside-text">大厅</p>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a>
                            <div class="gods-aside-img">
                                <img src="${pageContext.request.contextPath}/img/iQP54584096YB.jpg"
                                     style="width: 100%; display: block;">
                            </div>
                            <div class="gods-aside-dis">
                                <p class="gods-aside-price"><span>￥0.00</span></p>
                                <p class="gods-aside-text">大厅</p>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a>
                            <div class="gods-aside-img">
                                <img src="${pageContext.request.contextPath}/img/iQP54584096YB.jpg"
                                     style="width: 100%; display: block;">
                            </div>
                            <div class="gods-aside-dis">
                                <p class="gods-aside-price"><span>￥0.00</span></p>
                                <p class="gods-aside-text">大厅</p>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a>
                            <div class="gods-aside-img">
                                <img src="${pageContext.request.contextPath}/img/iQP54584096YB.jpg"
                                     style="width: 100%; display: block;">
                            </div>
                            <div class="gods-aside-dis">
                                <p class="gods-aside-price"><span>￥0.00</span></p>
                                <p class="gods-aside-text">大厅</p>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="gods-grids-fr layout_fl">
                <div class="gods-grids-swit">
                    <ul class="layout_clear fl_li">
                        <li class="current">
                            <a>商品介绍</a>
                        </li>
                        <li>
                            <a>评价(0)</a>
                        </li>
                    </ul>
                </div>
                <div class="gods-swit-coloum">
                    <div style="display:block">
                        <div class="gods-gdx-img">
                            <p>
                                <img src="${pageContext.request.contextPath}/img/BJl58409211yq.jpg"
                                     style="height:1280px; width:904px">
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
```

> 套餐详情后端代码

```java
public String selectPackageById(HttpServletRequest request, HttpServletResponse response)
            throws SQLException, InvocationTargetException, IllegalAccessException {
        Integer packageId = Integer.parseInt(request.getParameter("packageId"));
        Package aPackage  = packageService.selectPackageById(packageId);
        Integer hotelId   = Integer.parseInt(request.getParameter("hotelId"));
        Hotel   hotel     = hotelService.selectHotelById(hotelId);

        request.setAttribute("hotel", hotel);

        List<Room> rooms = roomService.selectRoomListByHotelId(hotelId);

        request.setAttribute("packages", aPackage);
        request.setAttribute("hotel", hotel);
        request.setAttribute("rooms", rooms);

        return "packageDetails.jsp";
    }
```



#### 7.6 购物车

> 购物车前端代码

```html
<script type="text/javascript">
        function reduce(cardId) {
            var count = $("#" + cardId + "_count").text();
            if (count > 1) {
                count--;
                $("#" + cardId + "_count").text(count);

                updateCart(cardId, count);
            }
        }

        function plus(cardId) {
            var count = $("#" + cardId + "_count").text();
            count++;
            $("#" + cardId + "_count").text(count);

            updateCart(cardId, count);
        }

        function totalPrice(cardId, count) {
            var price = $("#" + cardId + "_price").text();
            var totalPrice = count * price;
            $("#" + cardId + "_totalPrice").text(totalPrice);
        }

        /**
         * 设置选中的框的总价
         */
        function setTotalPrice() {
            var totalPrice = 0.00;
            $(".ids:checked").each(function (index) {
                var cartId = $(this).val();
                //选中的总价(字符串)
                var price = $("#" + cartId + "_totalPrice").text();
                //将字符串转换为数值Number()
                totalPrice += Number(price);
            });
            $("#total").text("￥" + totalPrice);
        }

        /**
         * 全选
         */
        function selectAll() {
            var all = $("#all");
            var check = all.prop("checked");
            $(".ids").each(function (index) {
                $(this).prop("checked", check);
            });
            setTotalPrice();
        }

        function updateCart(cardId, count) {
            //更新数据库
            $.post("${pageContext.request.contextPath}/cart?methodName=updateCart", {
                "shoppingcart_id": cardId,
                "shoppingcart_count": count
            }, function (data) {
                if (data.flag) {
                    totalPrice(cardId, count);
                    setTotalPrice();
                }
            }, "json");
        }
    </script>

<c:forEach items="${carts}" var="cart">
                            <li>
                                <div class="layout_clear">
                                    <div class="us_buycar_check layout_fl">
                                        <input type="checkbox" class="ids" value="${cart.shoppingcart_id}"
                                               onchange="setTotalPrice()">
                                    </div>
                                    <div class="us_unit_table layout_fl">
                                        <div class="us_order_line">
                                            <span>${cart.shoppingcart_time}</span><span>订单号：${cart.shoppingcart_id}</span><span></span>
                                        </div>
                                        <table>
                                            <tbody>
                                            <tr>
                                                <td><span class="cos_span">商品信息</span></td>
                                                <td><span class="cos_span">套餐类型/婚宴场地</span></td>
                                                <td><span class="cos_span">单价</span></td>
                                                <td><span class="cos_span">数量</span></td>
                                                <td><span class="cos_span">总金额</span></td>
                                                <td><span class="cos_span">操作</span></td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div class="img"><img
                                                            src="${pageContext.request.contextPath}/${cart.shoppingcart_img}"
                                                            style="width:100px;"><span>${cart.shoppingcart_name}</span>
                                                    </div>
                                                </td>
                                                <td><span class="cos_span">套餐类型：${cart.shoppingcart_type}</span><span
                                                        class="cos_span">婚宴场地：${cart.shoppingcart_place}</span></td>
                                                <td><span class="cos_span" style="display:block"><ins></ins></span><span
                                                        class="cos_span"
                                                        id="${cart.shoppingcart_id}_price">${cart.shoppingcart_price}</span>
                                                </td>
                                                <td>
                                                        <span class="cos_span">
                                                            <span class="amont_line">
                                                                <span class="amont_line_btn amont_line_reduce"
                                                                      onclick="reduce('${cart.shoppingcart_id}')">-</span>
                                                                <span id="${cart.shoppingcart_id}_count"
                                                                      class="amont_line_text">${cart.shoppingcart_count}</span>
                                                                <span class="amont_line_btn amont_line_push"
                                                                      onclick="plus('${cart.shoppingcart_id}')">+</span>
                                                            </span>
                                                        </span>
                                                </td>
                                                <td><span class="cos_span"><em
                                                        class="keyword-pink"
                                                        id="${cart.shoppingcart_id}_totalPrice">${cart.shoppingcart_count * cart.shoppingcart_price}</em></span>
                                                </td>
                                                <td><span class="cos_span"><a>移入收藏夹</a>/<a>删除</a></span></td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </li>
                        </c:forEach>
                    </ul>
                </div>
                <div class="us_bottom_bar layout_clear">
                    <div class="us_buycar_check layout_fl"><input id="all" type="checkbox" onchange="selectAll()"></div>
                    <div class="us_buycar_state layout_fl">
                        <span class="cos_span"><a>全选</a></span>
                        <span class="cos_span"><a>清空购物车</a></span>
                    </div>
                    <div class="us_buycar_buy layout_fr">
                        <span class="cos_span">已选择<span></span>件商品</span>
                        <span class="cos_span">总价：<em class="keyword-pink" id="total">￥0.00</em></span>
                        <a class="us_button" href="${pageContext.request.contextPath}/center?methodName=toPayPage">去结算</a>
                    </div>
                </div>
            </div>
```

> 购物车后端代码

```java
@ResponseBody
    public Map<String, Object> addCart(HttpServletRequest request, HttpServletResponse response)
            throws InvocationTargetException, IllegalAccessException, SQLException {
        Map<String, Object> map = new HashMap<>();
        boolean             flag;
        Shoppingcart        cart = new Shoppingcart();

        BeanUtils.populate(cart, request.getParameterMap());

        User user = (User) request.getSession().getAttribute("existUser");

        cart.setShoppingcart_id(CommonUtils.uuid());
        cart.setTb_user_user_tel(user.getUser_tel());

        String msg = cartService.addCart(cart);

        if ("添加成功".equals(msg)) {
            flag = true;
        } else {
            flag = false;
        }

        map.put("flag", flag);
        map.put("msg", msg);

        return map;
    }

    public String selectCartList(HttpServletRequest request, HttpServletResponse response) throws SQLException {
        User               user     = (User) request.getSession().getAttribute("existUser");
        List<Shoppingcart> cartList = cartService.selectCartList(user.getUser_tel());

        request.setAttribute("carts", cartList);

        return "shoppingCart.jsp";
    }

    @ResponseBody
    public Map<String, Object> updateCart(HttpServletRequest request, HttpServletResponse response)
            throws InvocationTargetException, IllegalAccessException, SQLException {
        Map<String, Object> map = new HashMap<>();
        boolean             flag;
        Shoppingcart        cart = new Shoppingcart();

        BeanUtils.populate(cart, request.getParameterMap());

        String msg = cartService.updateCart(cart);

        if ("更新成功".equals(msg)) {
            flag = true;
        } else {
            flag = false;
        }

        map.put("flag", flag);
        map.put("msg", msg);

        return map;
    }
```



### 八、项目注意事项

#### 8.1 解决Servlcet创建过多

> 为了解决项目中使用的Servlet创建过多，我们使用反射技术来解决此问题。解决思想即是，把项目中的模块细分成各个模块整体，这时候只需要创建各个模块对应的Servlet即可。那么问题来了，重定向或请求转发路径怎么解决呢？解决这个问题我们需要为各个模块的Servlet需要跳转的路径使用反射技术来处理请求。这样业务就会精简很多！

```java
package com.mylifes1110.java.controller;

import java.io.File;
import java.io.IOException;

import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.mylifes1110.java.annotation.ResponseBody;
import com.mylifes1110.java.utils.JsonUtils;

@WebServlet(
        name = "BaseServlet",
        value = "/base"
)
public class BaseServlet extends HttpServlet {
    @Override
    protected void service(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String methodName = request.getParameter("methodName");

        try {
            Method method = this.getClass().getMethod(methodName, HttpServletRequest.class, HttpServletResponse.class);

            /*
             * 判断是否有该方法名称的方法,有则执行该方法
             */
            if (method != null) {
                Object returnValue = method.invoke(this, request, response);

                /*
                 * 判断是否有返回值
                 * 有,则判断在方法上是否有注解
                 * 无,不做任何处理
                 */
                if (returnValue != null) {

                    /*
                     * 判断标记注解是否存在
                     * 有,则返回json字符串
                     * 无,则处理返回资源路径
                     */
                    boolean present = method.isAnnotationPresent(ResponseBody.class);

                    if (present) {

                        /*
                         * 判断返回值是否为json字符串
                         * 是,则直接返回json字符串,将json字符串作响应正文响应给浏览器
                         * 否,则直接返回Java对象，将Java对象转换为json字符串，将json字符串作响应正文响应给浏览器
                         */
                        if (returnValue.getClass() == String.class) {
                            response.setContentType("application/json; charset=UTF-8");
                            response.getWriter().write(returnValue + "");
                        } else {
                            JsonUtils.writeJsonStr(response, returnValue);
                        }
                    } else {

                        /*
                         * 处理资源路径
                         * 1.将返回值对象强转为资源路径字符串
                         * 2.判断并获取资源路径“:”的索引位置
                         * 3.根据":"后的第一位开始进行拆分、获取真正的资源路径
                         */
                        String value = (String) returnValue;
                        int index = value.lastIndexOf(":");
                        String path = value.substring(index + 1);

                        /*
                         * 判断是否包含":"
                         * 包含,则判断资源路径的重定向和转发
                         * 不包含,则默认资源路径为请求转发
                         */
                        if (index != -1) {
                            if (value.startsWith("redirect")) {
                                response.sendRedirect(request.getContextPath() + File.separator + path);
                            } else if (value.startsWith("forward")) {
                                request.getRequestDispatcher("/WEB-INF/jsp/" + path).forward(request, response);
                            }
                        } else {
                            request.getRequestDispatcher("WEB-INF/jsp/" + value).forward(request, response);
                        }
                    }
                }
            }
        } catch (NoSuchMethodException | IllegalAccessException | InvocationTargetException e) {
            e.printStackTrace();
        }
    }
}
```

> 需要做的就是继承上面的BaseServlet，然后根据业务需求写自己的方法即可，乍一看像SpringMVC，但是要注意这里的方法名和返回值，方法名决定了请求时的method参数的值，返回值由于是资源路径或JSON，所以用的是String。这里用UserServlet来做的例子！

```java
package com.mylifes1110.java.controller;

import java.lang.reflect.InvocationTargetException;

import java.sql.SQLException;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.beanutils.BeanUtils;

import com.mylifes1110.java.bean.User;
import com.mylifes1110.java.service.UserService;
import com.mylifes1110.java.service.impl.UserServiceImpl;

@WebServlet(
    name  = "UserServlet",
    value = "/user"
)
public class UserServlet extends BaseServlet {
    private UserService userService = new UserServiceImpl();

    public String login(HttpServletRequest request, HttpServletResponse response) throws SQLException {
        try {
            User user = new User();

            BeanUtils.populate(user, request.getParameterMap());

            // 获取表单内输入的验证码
            String qrCode = request.getParameter("qrCode");

            // 获取Session中的验证码
            Object existQrCode = request.getSession().getAttribute("key");

            /*
             * 校验验证码
             * 成功,则跳转首页
             * 失败,则跳转登录页面
             */
            if (existQrCode != null) {
                if (existQrCode.equals(qrCode)) {
                    User existUser = userService.login(user);

                    /*
                     * 校验数据库查询结果是否为空数据
                     * 不为空,则证明登录成功！将用户数据存入Session中并重定向至首页
                     * 为空,则证明登陆失败！将错误信息保存至request中并默认转发至登录页面
                     */
                    if (existUser != null) {
                        Cookie cookie = new Cookie("autoLogin", user.getUser_tel() + "-" + user.getUser_password());
                        cookie.setPath("/");
                        cookie.setMaxAge(60 * 60 * 24 * 7);
                        response.addCookie(cookie);

                        request.getSession().setAttribute("existUser", existUser);

                        return "redirect:center?methodName=toIndex";
                    } else {
                        request.setAttribute("errorMsg", "手机号或密码错误");

                        return "login.jsp";
                    }
                } else {
                    request.setAttribute("errorMsg", "验证码错误");

                    return "login.jsp";
                }
            }
        } catch (IllegalAccessException | InvocationTargetException e) {
            e.printStackTrace();
        }

        // 抛出异常后登录失败
        request.setAttribute("errorMsg", "手机号或密码错误");

        return "login.jsp";
    }

    public String register(HttpServletRequest request, HttpServletResponse response) {
        try {

            /*
             * 1.使用BeanUtils封装表单参数至User实体类(封装表单user_tel和user_password参数)
             * 2.获取表单参数(表单验证码)
             * 3.获取Session使用阿里云短信服务平台的所发手机号验证码
             * 4.表单验证码与Session中验证码进行校验
             */
            User user = new User();

            BeanUtils.populate(user, request.getParameterMap());

            String phoneCode      = request.getParameter("phoneCode");
            Object existPhoneCode = request.getSession().getAttribute("existPhoneCode");

            /*
             * 校验成功,则进行注册操作并重定向至登录页面
             * 校验失败,则记录返回错误信息并请求转发至注册页面
             */
            if (existPhoneCode.equals(phoneCode)) {
                userService.register(user);

                return "redirect:center?methodName=toLogin";
            } else {
                request.setAttribute("errorMsg", "验证码错误");

                return "register.jsp";
            }
        } catch (IllegalAccessException | InvocationTargetException | SQLException e) {
            e.printStackTrace();
        }

        /*
         * 捕获用户名已存在数据库插入异常等,则返回错误信息
         */
        request.setAttribute("errorMsg", "注册失败 用户名已存在");

        return "register.jsp";
    }
}
```



#### 8.2 解决页面放在web中不安全问题

> 我们知道IDEA中web是放JSP或HTML页面资源的。但是我们实际做项目中，是有一个安全隐患的存在。因为在web文件夹中，我们可以任意输入地址栏中的路径访问资源。这就导致了一种访问安全问题。为了解决此问题，我们需要知道的资源放在WEB-INF文件夹中是不可以外界访问的，而我们在资源跳转的时候，可以借助CenterServlet与BaseServlet联合跳转。这里解释一下，CenterServlet里仅做资源跳转。代码如下：

```java
package com.mylifes1110.java.controller;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet(
    name  = "CenterServlet",
    value = "/center"
)
public class CenterServlet extends BaseServlet {

    /**
     * 转发酒店详情页面
     * @return 返回酒店详情页面资源路径
     */
    public String toHotelDetails(HttpServletRequest request, HttpServletResponse response) {
        return "hotelDetails.jsp";
    }

    /**
     * 转发婚宴场地页面
     * @return 返回婚宴场地页面资源路径
     */
    public String toHotelList(HttpServletRequest request, HttpServletResponse response) {
        return "hotelList.jsp";
    }

    /**
     * 转发首页
     * @return 返回首页资源路径
     */
    public String toIndex(HttpServletRequest request, HttpServletResponse response) {
        return "index.jsp";
    }

    /**
     * 转发登录页面
     *
     * @return 返回登录页面资源路径
     */
    public String toLogin(HttpServletRequest request, HttpServletResponse response) {
        return "login.jsp";
    }

    /**
     * 转发注册页面
     * @return 返回注册页面资源路径
     */
    public String toRegister(HttpServletRequest request, HttpServletResponse response) {
        return "register.jsp";
    }

    /**
     * 转发购物车页面
     * @return 返回购物车页面资源路径
     */
    public String toShoppingCart(HttpServletRequest request, HttpServletResponse response) {
        return "shoppingCart.jsp";
    }

    /**
     * 转发生成验证码
     * @return 返回生成验证码资源路径
     */
    public String validateCode(HttpServletRequest request, HttpServletResponse response) {
        return "validatecode.jsp";
    }

    /**
     * 转发支付页面
     * @return 返回支付页面资源路径
     */
    public String toPayPage(HttpServletRequest request, HttpServletResponse response) {
        return "payPage.jsp";
    }
}
```



#### 8.3 Filter实现自动登录

> 理论与现实中可以说明，我们在访问京东、淘宝等电商平台的时候，不用登录就可以访问首页等浏览，但是当我们在没有登录的时候，点击查看购物车或者加入购物车时，他会自动页面跳转到登录页面让你进行登录。实现此功能我们就需要借助Filter过滤器来实现，我们可以把不要登录就可以访问的资源放在一起。需要登录才能访问的资源再放在一起。在Filter中设置拦截所有Servlet，把不要登录就可以访问的资源放行掉。其他的资源需要进行强制登录才可以访问。这里所说的强制登录，就是跳转登录页面了！还有自动登录就是，生活中发现我们登录过一次淘宝，下一次就不需要登录就发现已经在登录状态，也是Filter的作用！接下载看Filter的神操作！代码如下：

**Filter代码** 

```java
package com.mylifes1110.java.filter;

import java.io.IOException;

import java.sql.SQLException;

import javax.servlet.*;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.mylifes1110.java.bean.User;
import com.mylifes1110.java.service.UserService;
import com.mylifes1110.java.service.impl.UserServiceImpl;
import com.mylifes1110.java.utils.CookieUtils;

@WebFilter(
    filterName = "LoginFilter",
    value      = "/*"
)
public class LoginFilter implements Filter {
    @Override
    public void destroy() {}

    @Override
    public void doFilter(ServletRequest req, ServletResponse resp, FilterChain chain)
            throws ServletException, IOException {
        HttpServletRequest  request    = (HttpServletRequest) req;
        HttpServletResponse response   = (HttpServletResponse) resp;
        String              methodName = request.getParameter("methodName");

        /*
         * 判断请求路径是否包含登录相关资源和是否为不需要登录就可以访问的资源
         * 是,则放行
         * 否,则继续处理判断是否在登录状态
         */
        if (((methodName != null) && methodName.contains("login"))
                || ((methodName != null) && methodName.contains("toLogin"))
                || ((methodName != null) && methodName.contains("validateCode"))
                || ((methodName != null) && methodName.contains("toRegister"))
                || ((methodName != null) && methodName.contains("register"))
                || ((methodName != null) && methodName.contains("toIndex"))) {
            chain.doFilter(request, response);
        } else {
            User user = (User) request.getSession().getAttribute("existUser");

            /*
             * 判断是否在登录状态
             * 是,则放行
             * 否,则获取Cookie进行自动登录
             */
            if (user != null) {
                chain.doFilter(request, response);
            } else {
                Cookie cookie = CookieUtils.getCookie(request.getCookies(), "autoLogin");

                /*
                 * 判断Cookie是否为空
                 * 为空,则Cookie在浏览器中被清理,则转发登录页面
                 * 不为空,则获取Cookie中存储的账号与密码进行自动登录
                 */
                if (cookie == null) {
                    request.getRequestDispatcher("WEB-INF/jsp/login.jsp").forward(request, response);
                } else {
                    String   cookieValue = cookie.getValue();
                    String[] split       = cookieValue.split("-");
                    String   username    = split[0];
                    String   password    = split[1];
                    User     loginUser   = new User();

                    loginUser.setUser_tel(username);
                    loginUser.setUser_password(password);

                    UserService userService = new UserServiceImpl();

                    try {
                        User existUser = userService.login(loginUser);

                        /*
                         * 校验数据库中是否存在该账号密码
                         * 存在,则修改登录状态,重新存在Session中
                         * 不存在,意为中途修改了密码,则转发登录页面
                         */
                        if (existUser != null) {
                            request.getSession().setAttribute("existUser", existUser);
                            chain.doFilter(request, response);
                        } else {
                            request.getRequestDispatcher("WEB-INF/jsp/login.jsp").forward(request, response);
                        }
                    } catch (SQLException e) {
                        e.printStackTrace();
                    }
                }
            }
        }
    }

    @Override
    public void init(FilterConfig config) throws ServletException {}
}
```

**登录页面核心代码** 

```java
Cookie cookie = new Cookie("autoLogin", user.getUser_tel() + "-" + user.getUser_password());
cookie.setPath("/");
cookie.setMaxAge(60 * 60 * 24 * 7);
response.addCookie(cookie);

request.getSession().setAttribute("existUser", existUser);

return "redirect:center?methodName=toIndex";
```



### 九、本项目注意事项

#### 9.1 如何将HTML页面改为JSP页面

> 本项目的页面资源初始为HTML页面，而我们的技术是使用JSP技术来完成页面的。所以我们需要修改HTML页面为JSP页面，至于如何修改呢？很简单，将JSP中最上方的一行page指令替换掉HTML页面的\<!doctype html>标签，然后将html后缀改为jsp即可！



#### 9.2 解决资源损坏导致样式乱掉

> 在将HTML页面修改完JSP页面时，HTML的默认资源路径会变为../../xxx。而导致资源的访问路径失效，显示会出现问题。在此，我们可以将../../统一修改为${pageContext.request.contextPath}/。修改后即可恢复页面加载！