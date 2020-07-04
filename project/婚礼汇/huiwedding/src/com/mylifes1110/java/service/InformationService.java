package com.mylifes1110.java.service;

import com.mylifes1110.java.bean.Information;

import java.sql.SQLException;

public interface InformationService {
    Information selectInformationByHotelId(Integer hotelId) throws SQLException;
}
