package com.mylifes1110.java.dao.impl;

import java.sql.SQLException;
import java.util.List;

import org.apache.commons.dbutils.QueryRunner;

import com.mylifes1110.java.bean.OrderDetail;
import com.mylifes1110.java.dao.OrderDetailDao;
import com.mylifes1110.java.utils.DruidUtils;
import org.apache.commons.dbutils.handlers.BeanListHandler;

public class OrderDetailDaoImpl implements OrderDetailDao {
    private QueryRunner queryRunner = new QueryRunner(DruidUtils.getDataSource());

    @Override
    public void insertOrderDetail(OrderDetail orderDetail) throws SQLException {
        queryRunner.update(DruidUtils.getConnection(),
                           "insert into tb_orderdetail(oid, pid, num, money) values (?, ?, ?, ?)",
                           orderDetail.getOid(),
                           orderDetail.getPid(),
                           orderDetail.getNum(),
                           orderDetail.getMoney());
    }

    @Override
    public List<OrderDetail> selectOrderDetail(String oid) throws SQLException {
        return queryRunner.query("select id, oid, pid, num, money from tb_orderdetail where oid = ?",
                                 new BeanListHandler<OrderDetail>(OrderDetail.class),
                                 oid);
    }
}