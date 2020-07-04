package com.mylifes1110.java.dao.impl;

import java.sql.SQLException;

import java.util.List;

import org.apache.commons.dbutils.QueryRunner;
import org.apache.commons.dbutils.handlers.BeanHandler;
import org.apache.commons.dbutils.handlers.BeanListHandler;

import com.mylifes1110.java.bean.Address;
import com.mylifes1110.java.dao.AddressDao;
import com.mylifes1110.java.utils.DruidUtils;

public class AddressDaoImpl implements AddressDao {
    private QueryRunner queryRunner = new QueryRunner(DruidUtils.getDataSource());

    @Override
    public void cancelAddresslevel(int uid) throws SQLException {
        queryRunner.update(DruidUtils.getConnection(), "update tb_address set level = 0 where uid = ?", uid);
    }

    @Override
    public int deleteAddressById(int id, int uid) throws SQLException {
        return queryRunner.update(DruidUtils.getConnection(),
                                  "delete from tb_address where uid = ? and id = ?",
                                  uid,
                                  id);
    }

    @Override
    public void insertAddress(Address address) throws SQLException {
        queryRunner.update(DruidUtils.getConnection(),
                           "insert into tb_address(detail, name, phone, uid, level) values (?, ?, ?, ?, ?)",
                           address.getDetail(),
                           address.getName(),
                           address.getPhone(),
                           address.getUid(),
                           address.getLevel());
    }

    @Override
    public List<Address> selectAddressListByUid(int uid) throws SQLException {
        return queryRunner.query("select id, detail, name, phone, uid, level from tb_address where uid = ?",
                                 new BeanListHandler<Address>(Address.class),
                                 uid);
    }

    @Override
    public void updateAddress(Address address, int id) throws SQLException {
        queryRunner.update(DruidUtils.getConnection(),
                           "update tb_address set detail = ?, name = ?, phone = ?, level = ? where id = ?",
                           address.getDetail(),
                           address.getName(),
                           address.getPhone(),
                           address.getLevel(),
                           id);
    }

    @Override
    public Address selectAddressById(int aid) throws SQLException {
        return queryRunner.query("select id, detail, name, phone, uid, level from tb_address where id = ?",
                new BeanHandler<Address>(Address.class),
                aid);
    }

    @Override
    public void updateAddressLevel(int id, int uid) throws SQLException {
        queryRunner.update(DruidUtils.getConnection(),
                           "update tb_address set level = 1 where id = ? and uid = ?",
                           id,
                           uid);
    }
}


