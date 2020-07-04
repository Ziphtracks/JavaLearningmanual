package com.mylifes1110.java.dao.impl;

import java.sql.SQLException;

import java.util.List;

import org.apache.commons.dbutils.QueryRunner;
import org.apache.commons.dbutils.handlers.BeanListHandler;

import com.mylifes1110.java.bean.Shoppingcart;
import com.mylifes1110.java.dao.CartDao;
import com.mylifes1110.java.utils.DbUtils;

public class CartDaoImpl implements CartDao {
    @Override
    public Integer addCart(Shoppingcart cart) throws SQLException {
        return new QueryRunner(DbUtils.getDataSource()).update(
            "insert into tb_shoppingcart values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
            cart.getShoppingcart_id(),
            cart.getShoppingcart_time(),
            cart.getShoppingcart_name(),
            cart.getShoppingcart_type(),
            cart.getShoppingcart_place(),
            cart.getShoppingcart_price(),
            cart.getShoppingcart_count(),
            cart.getTb_user_user_tel(),
            cart.getShoppingcart_img(),
            cart.getShoppingcart_hotelname());
    }

    @Override
    public List<Shoppingcart> selectCartList(String userTel) throws SQLException {
        return new QueryRunner(DbUtils.getDataSource()).query(
            "select * from tb_shoppingcart where tb_user_user_tel = ?",
            new BeanListHandler<Shoppingcart>(Shoppingcart.class),
            userTel);
    }

    @Override
    public Integer updateCart(Shoppingcart cart) throws SQLException {
        return new QueryRunner(DbUtils.getDataSource()).update("update tb_shoppingcart set shoppingcart_count = ? where shoppingcart_id = ?",
                cart.getShoppingcart_count(),
                cart.getShoppingcart_id());
    }
}


