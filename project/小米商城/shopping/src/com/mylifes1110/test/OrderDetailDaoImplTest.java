package com.mylifes1110.test;

import com.mylifes1110.java.bean.OrderDetail;
import com.mylifes1110.java.dao.OrderDetailDao;
import com.mylifes1110.java.dao.impl.OrderDetailDaoImpl;
import org.junit.Before;
import org.junit.Test;

import java.sql.SQLException;
import java.util.List;

import static org.junit.Assert.*;

public class OrderDetailDaoImplTest {
    private OrderDetailDao orderDetailDao;

    @Before
    public void setUp() throws Exception {
        orderDetailDao = new OrderDetailDaoImpl();
    }

    @Test
    public void insertOrderDetail() {
    }

    @Test
    public void selectOrderDetail() throws SQLException {
        List<OrderDetail> orderDetail = orderDetailDao.selectOrderDetail("06af1dfc825742dfa6a07f353a9ae9d0");
        System.out.println(orderDetail);
    }
}