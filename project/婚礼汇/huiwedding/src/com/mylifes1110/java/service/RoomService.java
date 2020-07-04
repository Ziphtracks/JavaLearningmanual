package com.mylifes1110.java.service;

import java.lang.reflect.InvocationTargetException;
import java.sql.SQLException;

import java.util.List;

import com.mylifes1110.java.bean.Room;

public interface RoomService {
    List<Room> selectRoomListByHotelId(Integer hotelId) throws SQLException, InvocationTargetException, IllegalAccessException;
}


