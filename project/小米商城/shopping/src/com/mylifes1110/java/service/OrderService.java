package com.mylifes1110.java.service;

import com.mylifes1110.java.bean.Order;
import com.mylifes1110.java.bean.OrderDetail;
import com.mylifes1110.java.bean.WeiXin;

import java.lang.reflect.InvocationTargetException;
import java.sql.SQLException;
import java.util.List;

public interface OrderService {
    boolean selectOrderMoney(WeiXin weiXin) throws SQLException;

    List<Order> showOrder(int userId) throws SQLException, InvocationTargetException, IllegalAccessException;

    Order addOrder(int uid, int aid) throws SQLException;

    void insertOrder(Order order) throws SQLException;

    void inserOrderDetail(OrderDetail orderDetail) throws SQLException;

    void updateOrderStatus(String oid) throws SQLException;

    List<Order> selectOrderList(int uid) throws SQLException;

    Order selectOrderByOid(String oid) throws SQLException;
}
