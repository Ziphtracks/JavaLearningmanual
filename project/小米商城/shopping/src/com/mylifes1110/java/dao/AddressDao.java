package com.mylifes1110.java.dao;

import com.mylifes1110.java.bean.Address;

import java.sql.SQLException;
import java.util.List;

public interface AddressDao {
    List<Address> selectAddressListByUid(int uid) throws SQLException;

    int deleteAddressById(int id, int uid) throws SQLException;

    void updateAddressLevel(int id, int uid) throws SQLException;

    void cancelAddresslevel(int uid) throws SQLException;

    void insertAddress(Address address) throws SQLException;

    void updateAddress(Address address, int id) throws SQLException;

    Address selectAddressById(int aid) throws SQLException;
}
