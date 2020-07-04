package com.mylifes1110.java.service.impl;

import java.lang.reflect.InvocationTargetException;

import java.sql.SQLException;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.apache.commons.beanutils.BeanUtils;

import com.mylifes1110.java.bean.Img;
import com.mylifes1110.java.bean.Room;
import com.mylifes1110.java.dao.RoomDao;
import com.mylifes1110.java.dao.impl.RoomDaoImpl;
import com.mylifes1110.java.service.RoomService;

public class RoomServiceImpl implements RoomService {
    private RoomDao roomDao = new RoomDaoImpl();

    @Override
    public List<Room> selectRoomListByHotelId(Integer hotelId)
            throws SQLException, InvocationTargetException, IllegalAccessException {
        List<Map<String, Object>> mapList  = roomDao.selectRoomListByHotelId(hotelId);
        List<Room>                roomList = new ArrayList<>();

        for (Map<String, Object> map : mapList) {
            Room room = new Room();
            Img  img  = new Img();

            BeanUtils.populate(room, map);
            BeanUtils.populate(img, map);
            room.setImg(img);
            roomList.add(room);
        }

        return roomList;
    }
}