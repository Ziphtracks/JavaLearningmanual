package com.mylifes1110.java.dao;

import com.mylifes1110.java.bean.Information;

import java.sql.SQLException;

public interface InformationDao {
    Information selectInformationByHotelId(Integer hotelId) throws SQLException;
}
