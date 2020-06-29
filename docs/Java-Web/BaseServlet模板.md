* [BaseServlet模板](#baseservlet%E6%A8%A1%E6%9D%BF)
      * [为什么使用BaseServlet？](#%E4%B8%BA%E4%BB%80%E4%B9%88%E4%BD%BF%E7%94%A8baseservlet)
* [JsonUtils摸板](#jsonutils%E6%91%B8%E6%9D%BF)
* [自定义注解摸板](#%E8%87%AA%E5%AE%9A%E4%B9%89%E6%B3%A8%E8%A7%A3%E6%91%B8%E6%9D%BF)

# BaseServlet模板

###### 为什么使用BaseServlet？

> 为了解决项目中使用的Servlet创建过多，我们使用反射技术来解决此问题。解决思想即是，把项目中的模块细分成各个模块整体，这时候只需要创建各个模块对应的Servlet即可。那么问题来了，重定向或请求转发路径怎么解决呢？解决这个问题我们需要为各个模块的Servlet需要跳转的路径使用反射技术来处理请求。这样业务就会精简很多！
>
> 然后在使用的时候，需要做的就是继承上面的BaseServlet，然后根据业务需求写自己的方法即可，乍一看像SpringMVC，但是要注意这里的方法名和返回值，方法名决定了请求时的method参数的值，返回值由于是资源路径或JSON，所以用的是String。 

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



# JsonUtils摸板

```java
package com.mylifes1110.java.utils;

import java.io.IOException;

import javax.servlet.http.HttpServletResponse;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

/**
 * Json字符串转换工具类
 */
public class JsonUtils {

    /**
     * Java对象转换为Json字符串
     * @param o Java对象
     * @return Json字符串
     */
    public static String toJsonStr(Object o) throws JsonProcessingException {
        return new ObjectMapper().writeValueAsString(o);
    }

    /**
     * Json字符串响应到浏览器
     * @param response 响应对象
     * @param o Java对象
     */
    public static void writeJsonStr(HttpServletResponse response, Object o) throws IOException {
        response.setContentType("application/json; charset=UTF-8");
        response.getWriter().write(toJsonStr(o));
    }
}
```

# 自定义注解摸板

```java
package com.mylifes1110.java.annotation;

import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;

/**
 * 该注解起到标记作用
 */
@Retention(RetentionPolicy.RUNTIME)
public @interface ResponseBody {

}
```

