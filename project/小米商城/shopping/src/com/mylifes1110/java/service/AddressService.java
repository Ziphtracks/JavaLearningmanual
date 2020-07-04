package com.mylifes1110.java.service;

import com.mylifes1110.java.bean.Address;

import java.sql.SQLException;
import java.util.List;

public interface AddressService {
    List<Address> selectAddressListByUid(int id) throws SQLException;

    int deleteAddressById(int id, int uid) throws SQLException;

    void updateAddresslevel(int id, int uid) throws SQLException;

    void cancelAddresslevel(int uid) throws SQLException;

    void addAddress(Address address) throws SQLException;

    void updateAddress(Address address, int id) throws SQLException;

    Address selectAddressById(int aid) throws SQLException;
}
