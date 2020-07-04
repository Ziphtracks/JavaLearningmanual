package com.mylifes1110.test;

import com.mylifes1110.java.dao.HotelDao;
import com.mylifes1110.java.dao.impl.HotelDaoImpl;
import org.junit.Before;
import org.junit.Test;

import java.lang.reflect.InvocationTargetException;
import java.sql.SQLException;
import java.util.List;
import java.util.Map;

import static org.junit.Assert.*;

public class HotelDaoImplTest {
    private HotelDao hotelDao;

    @Before
    public void setUp() throws Exception {
        hotelDao = new HotelDaoImpl();
    }

    @Test
    public void selectHotelListByPage() throws IllegalAccessException, SQLException, InvocationTargetException {
        List<Map<String, Object>> maps = hotelDao.selectHotelListByPage(0, 3);
        System.out.println(maps);
    }
}