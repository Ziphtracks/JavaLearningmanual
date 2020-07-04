package com.mylifes1110.java.controller;

import javax.servlet.annotation.WebServlet;
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