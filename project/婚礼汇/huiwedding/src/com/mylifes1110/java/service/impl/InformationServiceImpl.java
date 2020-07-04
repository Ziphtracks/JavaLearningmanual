package com.mylifes1110.java.service.impl;

import java.sql.SQLException;

import com.mylifes1110.java.bean.Information;
import com.mylifes1110.java.dao.InformationDao;
import com.mylifes1110.java.dao.impl.InformationDaoImpl;
import com.mylifes1110.java.service.InformationService;

public class InformationServiceImpl implements InformationService {
    private InformationDao informationDao = new InformationDaoImpl();

    @Override
    public Information selectInformationByHotelId(Integer hotelId) throws SQLException {
        return informationDao.selectInformationByHotelId(hotelId);
    }
}