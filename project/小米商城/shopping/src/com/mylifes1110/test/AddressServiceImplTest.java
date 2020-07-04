package com.mylifes1110.test;

import com.mylifes1110.java.service.AddressService;
import com.mylifes1110.java.service.impl.AddressServiceImpl;
import org.junit.Before;
import org.junit.Test;

import java.sql.SQLException;

import static org.junit.Assert.*;

public class AddressServiceImplTest {
    private AddressService addressService;

    @Before
    public void setUp() throws Exception {
        addressService = new AddressServiceImpl();
    }

    @Test
    public void deleteAddressById() throws SQLException {
        int i = addressService.deleteAddressById(11, 8);
        System.out.println(i);
    }
}