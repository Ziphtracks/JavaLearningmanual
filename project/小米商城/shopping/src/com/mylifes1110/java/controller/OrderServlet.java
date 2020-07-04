package com.mylifes1110.java.controller;

import java.lang.reflect.InvocationTargetException;

import java.sql.SQLException;

import java.util.List;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.mylifes1110.java.bean.*;
import com.mylifes1110.java.service.*;
import com.mylifes1110.java.service.impl.*;

@WebServlet(
    name  = "OrderServlet",
    value = "/orderservlet"
)
public class OrderServlet extends BaseServlet {
    private OrderService       orderService       = new OrderServiceImpl();
    private OrderDetailService orderDetailService = new OrderDetailServiceImpl();
    private GoodsService       goodsService       = new GoodsServiceImpl();
    private CartService        cartService        = new CartServiceImpl();
    private AddressService     addressService     = new AddressServiceImpl();

    public String addOrder(HttpServletRequest request, HttpServletResponse response) throws SQLException {
        User   user   = (User) request.getSession().getAttribute("user");
        String aidStr = request.getParameter("aid");
        int    aid    = Integer.parseInt(aidStr);

        if (user == null) {
            return "forward:/login.jsp";
        }

        Order             order       = orderService.addOrder(user.getId(), aid);
        List<OrderDetail> orderDetail = orderDetailService.addOrderDetail(user.getId(), order.getId());

        order.setUid(user.getId());
        order.setAid(aid);
        orderService.insertOrder(order);
        orderDetailService.insertOrderDetail(orderDetail);
        cartService.clearCart(user.getId());
        request.setAttribute("order", order);

        return "forward:/orderSuccess.jsp";
    }

    public String selectOrderView(HttpServletRequest request, HttpServletResponse response)
            throws SQLException, InvocationTargetException, IllegalAccessException {
        User user = (User) request.getSession().getAttribute("user");

        if (user == null) {
            return "forward:/login.jsp";
        }

        List<Cart> cartList = cartService.selectCartListById(user.getId());

        for (Cart cart : cartList) {
            Goods  goods      = goodsService.selectGoodsById(cart.getPid());
            double totalPrice = goods.getPrice() * cart.getNum();

            cart.setMoney(totalPrice);
            cart.setGoods(goods);
        }

        List<Address> addresses = addressService.selectAddressListByUid(user.getId());

        request.setAttribute("addList", addresses);
        request.setAttribute("cartItems", cartList);

        return "forward:/order.jsp";
    }

    public String getOrderDetail(HttpServletRequest request, HttpServletResponse response)
            throws SQLException, InvocationTargetException, IllegalAccessException {
        User              user            = (User) request.getSession().getAttribute("user");

        if (user == null) {
            return "forward:/login.jsp";
        }

        String            oid             = request.getParameter("oid");
        OrderDetailView   orderDetailView = new OrderDetailView();
        List<OrderDetail> orderDetail     = orderDetailService.selectOrderDetail(oid);
        Order             order           = orderService.selectOrderByOid(oid);
        int               pid             = 0;

        for (OrderDetail detail : orderDetail) {
            pid = detail.getPid();
        }

        Address address = addressService.selectAddressById(order.getAid());

        orderDetailView.setAddress(address);
        orderDetailView.setOrderDetails(orderDetail);
        orderDetailView.setOrder(order);

        request.setAttribute("vo", orderDetailView);

        return "forward:/orderDetail.jsp";
    }

    public String getOrderList(HttpServletRequest request, HttpServletResponse response) throws SQLException {
        User        user      = (User) request.getSession().getAttribute("user");
        List<Order> orderList = orderService.selectOrderList(user.getId());
        int         aid       = 0;

        for (Order order : orderList) {
            aid = order.getAid();
        }

        Address address = addressService.selectAddressById(aid);

        request.setAttribute("address", address);
        request.setAttribute("orderList", orderList);

        return "forward:/orderList.jsp";
    }
}


