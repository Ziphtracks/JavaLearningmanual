package com.mylifes1110.java.dao;

import com.mylifes1110.java.bean.Order;

import java.sql.SQLException;
import java.util.List;

public interface OrderDao {
    List<Order> selectOrderByUserId(int userId) throws SQLException;

    void insertOrder(Order order) throws SQLException;

    Order selectOrderMoney(String oid) throws SQLException;

    void updateOrder(String oid) throws SQLException;

    Order selectOrderByOid(String oid) throws SQLException;
}
