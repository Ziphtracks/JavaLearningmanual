package com.mylifes1110.java.controller;

import java.lang.reflect.InvocationTargetException;

import java.sql.SQLException;

import java.util.List;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.mylifes1110.java.bean.Hotel;
import com.mylifes1110.java.bean.Package;
import com.mylifes1110.java.bean.Room;
import com.mylifes1110.java.service.HotelService;
import com.mylifes1110.java.service.PackageService;
import com.mylifes1110.java.service.RoomService;
import com.mylifes1110.java.service.impl.HotelServiceImpl;
import com.mylifes1110.java.service.impl.PackageServiceImpl;
import com.mylifes1110.java.service.impl.RoomServiceImpl;

@WebServlet(
    name  = "PackageServlet",
    value = "/package"
)
public class PackageServlet extends BaseServlet {
    private PackageService packageService = new PackageServiceImpl();
    private HotelService   hotelService   = new HotelServiceImpl();
    private RoomService    roomService    = new RoomServiceImpl();

    public String selectPackageById(HttpServletRequest request, HttpServletResponse response)
            throws SQLException, InvocationTargetException, IllegalAccessException {
        Integer packageId = Integer.parseInt(request.getParameter("packageId"));
        Package aPackage  = packageService.selectPackageById(packageId);
        Integer hotelId   = Integer.parseInt(request.getParameter("hotelId"));
        Hotel   hotel     = hotelService.selectHotelById(hotelId);

        request.setAttribute("hotel", hotel);

        List<Room> rooms = roomService.selectRoomListByHotelId(hotelId);

        request.setAttribute("packages", aPackage);
        request.setAttribute("hotel", hotel);
        request.setAttribute("rooms", rooms);

        return "packageDetails.jsp";
    }
}


