package com.mylifes1110.java.service;

import com.mylifes1110.java.bean.OrderDetail;

import java.sql.SQLException;
import java.util.List;

public interface OrderDetailService {
    void insertOrderDetail(List<OrderDetail> orderDetail) throws SQLException;

    List<OrderDetail> addOrderDetail(int uid, String oid) throws SQLException;

    List<OrderDetail> selectOrderDetail(String oid) throws SQLException;
}
