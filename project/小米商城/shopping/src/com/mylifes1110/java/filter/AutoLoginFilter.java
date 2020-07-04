package com.mylifes1110.java.filter;

import java.io.IOException;

import java.sql.SQLException;

import javax.servlet.*;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;

import com.mylifes1110.java.bean.User;
import com.mylifes1110.java.service.UserService;
import com.mylifes1110.java.service.impl.UserServiceImpl;

@WebFilter(
    filterName = "AutoLoginFilter",
    value      = { "/*"}
)
public class AutoLoginFilter implements Filter {
    private UserService userService = new UserServiceImpl();

    @Override
    public void destroy() {}

    @Override
    public void doFilter(ServletRequest req, ServletResponse resp, FilterChain chain)
            throws ServletException, IOException {
        HttpServletRequest request = (HttpServletRequest) req;

        // 获取所有Cookie
        Cookie[] cookies = request.getCookies();

        if (cookies != null) {

            // 遍历所有Cookie
            for (Cookie cookie : cookies) {

                // 找到Cookie名为auto的Cookie
                if ("auto".equals(cookie.getName())) {

                    // 将获取的Cookie获取其value值
                    String[] values = cookie.getValue().split("#");

                    // 将value值根据#拆分为username和password
                    String username = values[0];
                    String password = values[1];
                    User   user     = null;

                    try {

                        // 校验用户名和密码
                        user = userService.selectUser(username, password);
                    } catch (SQLException throwables) {
                        throwables.printStackTrace();
                    }

                    // 如果user不为空则为校验账号和密码成功
                    if (user != null) {

                        // 修改登录状态,将user存储到Session中
                        request.getSession().setAttribute("user", user);
                    }

                    break;
                }
            }
        }

        // 放行
        chain.doFilter(request, resp);
    }

    @Override
    public void init(FilterConfig config) throws ServletException {}
}


