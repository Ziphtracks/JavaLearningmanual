package com.mylifes1110.java.dao.impl;

import java.sql.SQLException;

import java.util.List;

import org.apache.commons.dbutils.QueryRunner;
import org.apache.commons.dbutils.handlers.BeanHandler;
import org.apache.commons.dbutils.handlers.BeanListHandler;

import com.mylifes1110.java.bean.Cart;
import com.mylifes1110.java.dao.CartDao;
import com.mylifes1110.java.utils.DruidUtils;

public class CartDaoImpl implements CartDao {
    private QueryRunner queryRunner = new QueryRunner(DruidUtils.getDataSource());

    @Override
    public int clearCartNum(int userId) throws SQLException {
        return queryRunner.update("update tb_cart set num = 0 where id = ?", userId);
    }

    @Override
    public int insertCart(Cart cart) throws SQLException {
        return queryRunner.update(DruidUtils.getConnection(),
                                  "insert into tb_cart(id, pid, num) values (?, ?, ?)",
                                  cart.getId(),
                                  cart.getPid(),
                                  cart.getNum());
    }

    @Override
    public Cart selectCart(Cart cart) throws SQLException {
        return queryRunner.query("select id, pid, num from tb_cart where id = ? and pid = ?",
                                 new BeanHandler<Cart>(Cart.class),
                                 cart.getId(),
                                 cart.getPid());
    }

    @Override
    public List<Cart> selectCartList(int userId) throws SQLException {
        return queryRunner.query("select id, pid, num from tb_cart where id = ? and num > 0",
                                 new BeanListHandler<Cart>(Cart.class),
                                 userId);
    }

    @Override
    public int updateCartNum(Cart cart) throws SQLException {
        return queryRunner.update(DruidUtils.getConnection(),
                                  "update tb_cart set num = ? where id = ? and pid = ?",
                                  cart.getNum(),
                                  cart.getId(),
                                  cart.getPid());
    }
}


