package com.mylifes1110.test;

import com.mylifes1110.java.bean.Address;
import com.mylifes1110.java.dao.AddressDao;
import com.mylifes1110.java.dao.impl.AddressDaoImpl;
import org.junit.Before;
import org.junit.Test;

import java.sql.SQLException;
import java.util.List;

import static org.junit.Assert.*;

public class AddressDaoImplTest {
    private AddressDao addressDao;

    @Before
    public void setUp() throws Exception {
        addressDao = new AddressDaoImpl();
    }

    @Test
    public void selectAddressListByUid() throws SQLException {
        List<Address> addresses = addressDao.selectAddressListByUid(7);
        System.out.println(addresses);
    }

    @Test
    public void deleteAddressByUid() throws SQLException {
        int i = addressDao.deleteAddressById(10, 8);
        System.out.println(i);
    }

    @Test
    public void updateAddressLevel() throws SQLException {
        addressDao.updateAddressLevel(3, 6);
    }

    @Test
    public void cancelAddresslevel() throws SQLException {
        addressDao.cancelAddresslevel(6);
    }

    @Test
    public void insertAddress() throws SQLException {
        addressDao.insertAddress(new Address("1", "1", "1", 8, 0));
    }

    @Test
    public void updateAddress() throws SQLException {
        Address address = new Address("00", "00", "00", 8, 0);
        addressDao.updateAddress(address, 11);
    }

    @Test
    public void selectAddressById() throws SQLException {
        Address address = addressDao.selectAddressById(2);
        System.out.println(address);
    }
}