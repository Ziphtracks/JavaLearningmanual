package com.mylifes1110.java.dao.impl;

import java.sql.SQLException;

import java.util.List;
import java.util.Map;

import org.apache.commons.dbutils.QueryRunner;
import org.apache.commons.dbutils.handlers.MapHandler;
import org.apache.commons.dbutils.handlers.MapListHandler;
import org.apache.commons.dbutils.handlers.ScalarHandler;

import com.mylifes1110.java.dao.HotelDao;
import com.mylifes1110.java.utils.DbUtils;

public class HotelDaoImpl implements HotelDao {
    @Override
    public Map<String, Object> selectHotelById(Integer hotelId)
            throws SQLException {
        return new QueryRunner(DbUtils.getDataSource()).query(
            "select * from tb_hotel, tb_img where tb_hotel.hotel_id = tb_img.tb_hotel_hotel_id and hotel_id = ?",
            new MapHandler(),
            hotelId);
    }

    @Override
    public List<Map<String, Object>> selectHotelListByPage(Integer begin, Integer pageSize) throws SQLException {
        return new QueryRunner(DbUtils.getDataSource()).query(
            "select tb_hotel.*, tb_img.img_id, tb_img.img_add from tb_hotel, tb_img where tb_hotel.hotel_id = tb_img.tb_hotel_hotel_id limit ?, ?",
            new MapListHandler(),
            begin,
            pageSize);
    }

    @Override
    public Long selectTotalSize() throws SQLException {
        return new QueryRunner(DbUtils.getDataSource()).query("select count(*) from tb_hotel", new ScalarHandler<>());
    }
}


