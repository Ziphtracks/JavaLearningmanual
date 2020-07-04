package com.mylifes1110.test;

import com.mylifes1110.java.bean.Room;
import com.mylifes1110.java.service.RoomService;
import com.mylifes1110.java.service.impl.RoomServiceImpl;
import org.junit.Before;
import org.junit.Test;

import java.lang.reflect.InvocationTargetException;
import java.sql.SQLException;
import java.util.List;

public class RoomServiceImplTest {
    private RoomService roomService;

    @Before
    public void setUp() throws Exception {
        roomService = new RoomServiceImpl();
    }

    @Test
    public void selectRoomListByHotelId() throws IllegalAccessException, SQLException, InvocationTargetException {
        List<Room> rooms = roomService.selectRoomListByHotelId(1);
        System.out.println(rooms);
    }
}