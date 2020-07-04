package com.mylifes1110.java.service.impl;

import java.sql.SQLException;

import java.util.Date;
import java.util.List;
import java.util.UUID;

import com.mylifes1110.java.bean.*;
import com.mylifes1110.java.dao.CartDao;
import com.mylifes1110.java.dao.GoodsDao;
import com.mylifes1110.java.dao.OrderDao;
import com.mylifes1110.java.dao.OrderDetailDao;
import com.mylifes1110.java.dao.impl.CartDaoImpl;
import com.mylifes1110.java.dao.impl.GoodsDaoImpl;
import com.mylifes1110.java.dao.impl.OrderDaoImpl;
import com.mylifes1110.java.dao.impl.OrderDetailDaoImpl;
import com.mylifes1110.java.service.OrderService;
import com.mylifes1110.java.utils.DruidUtils;
import com.mylifes1110.java.utils.OrderStatus;

public class OrderServiceImpl implements OrderService {
    private OrderDetailDao orderDetailDao = new OrderDetailDaoImpl();
    private CartDao        cartDao        = new CartDaoImpl();
    private GoodsDao       goodsDao       = new GoodsDaoImpl();
    private OrderDao       orderDao       = new OrderDaoImpl();

    @Override
    public Order addOrder(int uid, int aid) throws SQLException {
        Order      order      = new Order();
        String     id         = UUID.randomUUID().toString().replaceAll("-", "");
        String     status     = OrderStatus.WAIT_PAY.getStatus();
        Date       time       = new Date();
        List<Cart> cartList   = cartDao.selectCartList(uid);
        double     totalPrice = 0;

        for (Cart cart : cartList) {
            Goods goods = goodsDao.selectGoods(cart.getPid());

            totalPrice = totalPrice + cart.getNum() * goods.getPrice();
        }

        order.setMoney(totalPrice);
        order.setId(id);
        order.setStatus(status);
        order.setTime(time);

        return order;
    }

    @Override
    public void inserOrderDetail(OrderDetail orderDetail) throws SQLException {
        orderDetailDao.insertOrderDetail(orderDetail);
    }

    @Override
    public void updateOrderStatus(String oid) throws SQLException {
        orderDao.updateOrder(oid);
    }

    @Override
    public List<Order> selectOrderList(int uid) throws SQLException {
        return orderDao.selectOrderByUserId(uid);
    }

    @Override
    public Order selectOrderByOid(String oid) throws SQLException {
        return orderDao.selectOrderByOid(oid);
    }

    @Override
    public void insertOrder(Order order) throws SQLException {
        DruidUtils.beginTx();

        try {
            orderDao.insertOrder(order);
        } catch (SQLException throwables) {
            throwables.printStackTrace();
            DruidUtils.rollbackTx();

            throw throwables;
        }

        DruidUtils.endTx();
    }

    @Override
    public boolean selectOrderMoney(WeiXin weiXin) throws SQLException {
        Order order = orderDao.selectOrderMoney(weiXin.getResult().getOut_trade_no());
        // 支付失败
        if (!"SUCCESS".equals(weiXin.getResult().getResult_code())) {
            return false;
        }

        String weiXinMoney = weiXin.getResult().getTotal_fee();

        System.out.println(weiXinMoney);

        // 验证钱数
        if (order.getMoney() == Double.parseDouble(weiXinMoney)) {
            return false;
        }

        // 修改订单状态
        orderDao.updateOrder(weiXin.getResult().getTransaction_id());

        return true;
    }

    @Override
    public List<Order> showOrder(int userId) throws SQLException {
        return orderDao.selectOrderByUserId(userId);
    }
}


