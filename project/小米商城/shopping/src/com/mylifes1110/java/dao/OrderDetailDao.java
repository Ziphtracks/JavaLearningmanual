package com.mylifes1110.java.dao;

import com.mylifes1110.java.bean.OrderDetail;

import java.sql.SQLException;
import java.util.List;

public interface OrderDetailDao {
    void insertOrderDetail(OrderDetail orderDetail) throws SQLException;

    List<OrderDetail> selectOrderDetail(String oid) throws SQLException;
}
