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