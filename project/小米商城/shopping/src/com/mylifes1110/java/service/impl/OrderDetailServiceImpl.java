package com.mylifes1110.java.service.impl;

import java.sql.SQLException;

import java.util.ArrayList;
import java.util.List;

import com.mylifes1110.java.bean.Cart;
import com.mylifes1110.java.bean.Goods;
import com.mylifes1110.java.bean.OrderDetail;
import com.mylifes1110.java.dao.CartDao;
import com.mylifes1110.java.dao.GoodsDao;
import com.mylifes1110.java.dao.OrderDao;
import com.mylifes1110.java.dao.OrderDetailDao;
import com.mylifes1110.java.dao.impl.CartDaoImpl;
import com.mylifes1110.java.dao.impl.GoodsDaoImpl;
import com.mylifes1110.java.dao.impl.OrderDaoImpl;
import com.mylifes1110.java.dao.impl.OrderDetailDaoImpl;
import com.mylifes1110.java.service.OrderDetailService;
import com.mylifes1110.java.utils.DruidUtils;

public class OrderDetailServiceImpl implements OrderDetailService {
    private OrderDetailDao orderDetailDao = new OrderDetailDaoImpl();
    private CartDao        cartDao        = new CartDaoImpl();
    private GoodsDao       goodsDao       = new GoodsDaoImpl();
    private OrderDao       orderDao       = new OrderDaoImpl();

    @Override
    public List<OrderDetail> addOrderDetail(int uid, String oid) throws SQLException {
        List<OrderDetail> orderDetail = new ArrayList<>();
        List<Cart>        cartList    = cartDao.selectCartList(uid);

        for (Cart cart : cartList) {
            OrderDetail o     = new OrderDetail();
            Goods       goods = goodsDao.selectGoods(cart.getPid());

            o.setOid(oid);
            o.setPid(cart.getPid());
            o.setNum(cart.getNum());
            o.setMoney(cart.getNum() * goods.getPrice());
            orderDetail.add(o);
        }

        System.out.println(orderDetail);

        return orderDetail;
    }

    @Override
    public List<OrderDetail> selectOrderDetail(String oid) throws SQLException {
        List<OrderDetail> details = orderDetailDao.selectOrderDetail(oid);
        for (OrderDetail detail : details) {
            Goods goods = goodsDao.selectGoods(detail.getPid());
            detail.setGoods(goods);
        }
        return details;
    }

    @Override
    public void insertOrderDetail(List<OrderDetail> orderDetail) throws SQLException {
        DruidUtils.beginTx();

        try {
            for (OrderDetail detail : orderDetail) {
                orderDetailDao.insertOrderDetail(detail);
                System.out.println(detail);
            }
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }

        DruidUtils.endTx();
    }
}


