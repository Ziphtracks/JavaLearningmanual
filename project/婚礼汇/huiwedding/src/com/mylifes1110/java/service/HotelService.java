package com.mylifes1110.java.service;

import com.mylifes1110.java.bean.Hotel;
import com.mylifes1110.java.bean.PageBean;

import java.lang.reflect.InvocationTargetException;
import java.sql.SQLException;

public interface HotelService {
    PageBean<Hotel> selectHotelListByPage(Integer currentPage) throws SQLException, InvocationTargetException, IllegalAccessException;

    Hotel selectHotelById(Integer hotelId) throws SQLException, InvocationTargetException, IllegalAccessException;
}
