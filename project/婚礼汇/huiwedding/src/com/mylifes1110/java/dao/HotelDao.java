package com.mylifes1110.java.dao;

import com.mylifes1110.java.bean.Hotel;

import java.lang.reflect.InvocationTargetException;
import java.sql.SQLException;
import java.util.List;
import java.util.Map;

public interface HotelDao {
    Long selectTotalSize() throws SQLException;

    List<Map<String, Object>> selectHotelListByPage(Integer begin, Integer pageSize) throws SQLException, InvocationTargetException, IllegalAccessException;

    Map<String, Object> selectHotelById(Integer hotelId) throws SQLException, InvocationTargetException, IllegalAccessException;
}
