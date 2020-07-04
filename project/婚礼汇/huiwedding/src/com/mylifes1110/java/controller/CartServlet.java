package com.mylifes1110.java.controller;

import java.lang.reflect.InvocationTargetException;

import java.sql.SQLException;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.beanutils.BeanUtils;

import com.mylifes1110.java.annotation.ResponseBody;
import com.mylifes1110.java.bean.Shoppingcart;
import com.mylifes1110.java.bean.User;
import com.mylifes1110.java.service.CartService;
import com.mylifes1110.java.service.impl.CartServiceImpl;
import com.mylifes1110.java.utils.CommonUtils;

@WebServlet(
    name  = "CartServlet",
    value = "/cart"
)
public class CartServlet extends BaseServlet {
    private CartService cartService = new CartServiceImpl();

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
}


