package com.mylifes1110.java.controller;

import com.mylifes1110.java.bean.WeiXin;
import com.mylifes1110.java.service.OrderService;
import com.mylifes1110.java.service.impl.OrderServiceImpl;
import com.mylifes1110.java.utils.GsonUtils;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.sql.SQLException;

@WebServlet(name = "PayServlet", value = "/payweixinservlet")
public class PayServlet extends BaseServlet {
    OrderService orderService = new OrderServiceImpl();

    public String payWeiXin(HttpServletRequest request, HttpServletResponse response) throws SQLException {
        String result = request.getParameter("result");
        WeiXin weiXin = GsonUtils.fromJson(result, WeiXin.class);

        boolean flag = orderService.selectOrderMoney(weiXin);
        if (flag) {
            request.setAttribute("msg", "支付成功");
        } else {
            request.setAttribute("msg", "支付失败");
        }
        return "forward:/message.jsp";
    }
}
