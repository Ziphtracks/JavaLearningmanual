package com.mylifes1110.java.service.impl;

import java.sql.SQLException;

import java.util.List;

import com.mylifes1110.java.bean.Address;
import com.mylifes1110.java.dao.AddressDao;
import com.mylifes1110.java.dao.impl.AddressDaoImpl;
import com.mylifes1110.java.service.AddressService;
import com.mylifes1110.java.utils.DruidUtils;

public class AddressServiceImpl implements AddressService {
    private AddressDao addressDao = new AddressDaoImpl();

    @Override
    public void addAddress(Address address) throws SQLException {
        DruidUtils.beginTx();

        try {
            addressDao.insertAddress(address);
        } catch (SQLException throwables) {
            throwables.printStackTrace();
            DruidUtils.rollbackTx();

            throw throwables;
        }

        DruidUtils.endTx();
    }

    @Override
    public void updateAddress(Address address, int id) throws SQLException {
        addressDao.updateAddress(address, id);
    }

    @Override
    public Address selectAddressById(int aid) throws SQLException {
        return addressDao.selectAddressById(aid);
    }

    @Override
    public void cancelAddresslevel(int uid) throws SQLException {
        addressDao.cancelAddresslevel(uid);
    }

    @Override
    public int deleteAddressById(int id, int uid) throws SQLException {
        return addressDao.deleteAddressById(id, uid);
    }

    @Override
    public List<Address> selectAddressListByUid(int id) throws SQLException {
        return addressDao.selectAddressListByUid(id);
    }

    @Override
    public void updateAddresslevel(int id, int uid) throws SQLException {
        addressDao.updateAddressLevel(id, uid);
    }
}


