package com.mylifes1110.java.controller;

import java.io.IOException;

import java.lang.reflect.InvocationTargetException;

import java.sql.SQLException;

import java.util.List;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.mylifes1110.java.bean.Cart;
import com.mylifes1110.java.bean.User;
import com.mylifes1110.java.service.CartService;
import com.mylifes1110.java.service.impl.CartServiceImpl;
import com.mylifes1110.java.utils.GsonUtils;

@WebServlet(
    name  = "CartServlet",
    value = "/cartservlet"
)
public class CartServlet extends BaseServlet {
    private CartService cartService = new CartServiceImpl();

    public String addCart(HttpServletRequest request, HttpServletResponse response) {
        String goodsIdStr = request.getParameter("goodsId");
        String numberStr  = request.getParameter("number");
        User   user       = (User) request.getSession().getAttribute("user");
        Cart   cart       = new Cart();

        if (user != null) {
            cart.setId(user.getId());
            cart.setPid(Integer.parseInt(goodsIdStr));
            cart.setNum(Integer.parseInt(numberStr));

            try {
                cartService.selectCartNum(cart);
            } catch (SQLException throwables) {
                throwables.printStackTrace();
            }
        } else {
            return "forward:/login.jsp";
        }

        return "forward:/cartSuccess.jsp";
    }

    public String addCartAjax(HttpServletRequest request, HttpServletResponse response)
            throws IOException, SQLException {
        String goodsIdStr = request.getParameter("goodsId");
        String numberStr  = request.getParameter("number");
        User   user       = (User) request.getSession().getAttribute("user");
        Cart   cart       = new Cart();

        if (user != null) {
            cart.setId(user.getId());
            cart.setPid(Integer.parseInt(goodsIdStr));

            int number = Integer.parseInt(numberStr);

            if (number == 0) {
                cartService.updateCartNum(cart);
            }

            cart.setNum(number);

            try {
                cartService.selectCartNum(cart);
            } catch (SQLException throwables) {
                throwables.printStackTrace();
            }
        } else {
            return "forward:/login.jsp";
        }

        String json = GsonUtils.toJson(cart);

        response.getWriter().write(json);

        return "";
    }

    public String clearCartAjax(HttpServletRequest request, HttpServletResponse response) {
        User user = (User) request.getSession().getAttribute("user");

        if (user == null) {
            return "forward:/login.jsp";
        }

        try {
            cartService.clearCart(user.getId());
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }

        return "forward:/cart.jsp";
    }

    public String selectCart(HttpServletRequest request, HttpServletResponse response) {
        User       user     = (User) request.getSession().getAttribute("user");
        List<Cart> cartList = null;

        try {
            cartList = cartService.showCart(user.getId());
        } catch (SQLException | InvocationTargetException | IllegalAccessException throwables) {
            throwables.printStackTrace();
        }

        request.setAttribute("cartItems", cartList);

        return "forward:/cart.jsp";
    }
}


