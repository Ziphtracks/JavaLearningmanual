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


