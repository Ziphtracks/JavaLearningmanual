package com.mylifes1110.java.dao.impl;

import java.sql.SQLException;

import org.apache.commons.dbutils.QueryRunner;
import org.apache.commons.dbutils.handlers.BeanHandler;

import com.mylifes1110.java.bean.Information;
import com.mylifes1110.java.dao.InformationDao;
import com.mylifes1110.java.utils.DbUtils;

public class InformationDaoImpl implements InformationDao {
    @Override
    public Information selectInformationByHotelId(Integer hotelId) throws SQLException {
        return new QueryRunner(DbUtils.getDataSource()).query(
            "select * from tb_information where tb_hotel_hotel_id = ?",
            new BeanHandler<Information>(Information.class),
            hotelId);
    }
}


