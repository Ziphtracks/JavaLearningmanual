package com.mylifes1110.java.dao;

import java.sql.SQLException;
import java.util.List;
import java.util.Map;

public interface RoomDao {
    List<Map<String, Object>> selectRoomListByHotelId(Integer hotelId) throws SQLException;
}
