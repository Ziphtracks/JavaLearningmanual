package com.mylifes1110.java.dao.impl;

import java.sql.SQLException;

import java.util.List;
import java.util.Map;

import org.apache.commons.dbutils.QueryRunner;
import org.apache.commons.dbutils.handlers.MapListHandler;

import com.mylifes1110.java.dao.RoomDao;
import com.mylifes1110.java.utils.DbUtils;

public class RoomDaoImpl implements RoomDao {
    @Override
    public List<Map<String, Object>> selectRoomListByHotelId(Integer hotelId) throws SQLException {
        return new QueryRunner(DbUtils.getDataSource()).query(
            "select * from tb_room, tb_img where tb_room.room_id = tb_img.tb_room_room_id and tb_room.tb_hotel_hotel_id = ?",
            new MapListHandler(),
            hotelId);
    }
}


