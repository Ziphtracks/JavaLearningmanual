package com.mylifes1110.test;

import com.mylifes1110.java.bean.Order;
import com.mylifes1110.java.dao.OrderDao;
import com.mylifes1110.java.dao.impl.OrderDaoImpl;
import org.junit.Before;
import org.junit.Test;

import java.sql.SQLException;
import java.util.Date;
import java.util.List;

import static org.junit.Assert.*;

public class OrderDaoImplTest {
    private OrderDao orderDao;

    @Before
    public void setUp() throws Exception {
        orderDao = new OrderDaoImpl();
    }

    @Test
    public void selectOrderByUserId() throws SQLException {
        List<Order> orders = orderDao.selectOrderByUserId(7);
        System.out.println(orders);
    }

    @Test
    public void insertOrder() throws SQLException {
        Order order = new Order("1", 8, 14, "未支付", new Date(), 1);
        orderDao.insertOrder(order);
    }

    @Test
    public void selectOrderMoney() throws SQLException {
        Order order = orderDao.selectOrderMoney("fc9b1f9a32414d6ea1e83935eadc5f20");
        System.out.println(order);
    }

    @Test
    public void selectOrderByOid() throws SQLException {
        Order order = orderDao.selectOrderByOid("06af1dfc825742dfa6a07f353a9ae9d0");
        System.out.println(order);
    }
}