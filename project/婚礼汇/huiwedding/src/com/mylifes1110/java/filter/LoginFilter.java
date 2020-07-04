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


