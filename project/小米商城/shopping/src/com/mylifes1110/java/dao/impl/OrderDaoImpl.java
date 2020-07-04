package com.mylifes1110.java.dao.impl;

import java.sql.SQLException;

import java.util.List;

import org.apache.commons.dbutils.QueryRunner;
import org.apache.commons.dbutils.handlers.BeanHandler;
import org.apache.commons.dbutils.handlers.BeanListHandler;

import com.mylifes1110.java.bean.Order;
import com.mylifes1110.java.dao.OrderDao;
import com.mylifes1110.java.utils.DruidUtils;

public class OrderDaoImpl implements OrderDao {
    private QueryRunner queryRunner = new QueryRunner(DruidUtils.getDataSource());

    @Override
    public void insertOrder(Order order) throws SQLException {
        queryRunner.update(DruidUtils.getConnection(),
                           "insert into tb_order(id, uid, money, status, time, aid) values (?, ?, ?, ?, ?, ?)",
                           order.getId(),
                           order.getUid(),
                           order.getMoney(),
                           order.getStatus(),
                           order.getTime(),
                           order.getAid());
    }

    @Override
    public Order selectOrderByOid(String oid) throws SQLException {
        return queryRunner.query("select id, uid, money, status, time, aid from tb_order where id = ?",
                                 new BeanHandler<Order>(Order.class),
                                 oid);
    }

    @Override
    public List<Order> selectOrderByUserId(int userId) throws SQLException {
        return queryRunner.query("select id, uid, money, status, time, aid from tb_order where uid = ?",
                                 new BeanListHandler<Order>(Order.class),
                                 userId);
    }

    @Override
    public Order selectOrderMoney(String oid) throws SQLException {
        return queryRunner.query("select money from tb_order where id = ?", new BeanHandler<Order>(Order.class), oid);
    }

    @Override
    public void updateOrder(String oid) throws SQLException {
        queryRunner.update("update tb_order set status = 2 where id = ?", oid);
    }
}


