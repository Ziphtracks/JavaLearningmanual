package com.mylifes1110.test;

import com.mylifes1110.java.bean.Hotel;
import com.mylifes1110.java.bean.PageBean;
import com.mylifes1110.java.service.HotelService;
import com.mylifes1110.java.service.impl.HotelServiceImpl;
import org.junit.Before;
import org.junit.Test;

import java.lang.reflect.InvocationTargetException;
import java.sql.SQLException;

import static org.junit.Assert.*;

public class HotelServiceImplTest {
    private HotelService hotelService;

    @Before
    public void setUp() throws Exception {
        hotelService = new HotelServiceImpl();
    }

    @Test
    public void selectHotelListByPage() throws IllegalAccessException, SQLException, InvocationTargetException {
        PageBean<Hotel> pageBean = hotelService.selectHotelListByPage(1);
        System.out.println(pageBean);
    }

    @Test
    public void selectHotelById() throws IllegalAccessException, SQLException, InvocationTargetException {
        Hotel hotel = hotelService.selectHotelById(1);
        System.out.println(hotel);
    }
}