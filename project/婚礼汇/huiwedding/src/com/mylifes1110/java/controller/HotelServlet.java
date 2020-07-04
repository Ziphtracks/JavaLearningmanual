package com.mylifes1110.java.controller;

import java.lang.reflect.InvocationTargetException;

import java.sql.SQLException;
import java.util.List;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.mylifes1110.java.bean.Hotel;
import com.mylifes1110.java.bean.Information;
import com.mylifes1110.java.bean.Package;
import com.mylifes1110.java.bean.PageBean;
import com.mylifes1110.java.bean.Room;
import com.mylifes1110.java.service.HotelService;
import com.mylifes1110.java.service.InformationService;
import com.mylifes1110.java.service.PackageService;
import com.mylifes1110.java.service.RoomService;
import com.mylifes1110.java.service.impl.HotelServiceImpl;
import com.mylifes1110.java.service.impl.InformationServiceImpl;
import com.mylifes1110.java.service.impl.PackageServiceImpl;
import com.mylifes1110.java.service.impl.RoomServiceImpl;

@WebServlet(
    name  = "HotelServlet",
    value = "/hotel"
)
public class HotelServlet extends BaseServlet {
    private HotelService hotelService = new HotelServiceImpl();
    private RoomService roomService = new RoomServiceImpl();
    private InformationService informationService = new InformationServiceImpl();
    private PackageService packageService = new PackageServiceImpl();

    public String selectHotelListByPage(HttpServletRequest request, HttpServletResponse response)
            throws IllegalAccessException, SQLException, InvocationTargetException {
        Integer currentPage = getCurrentPage(request.getParameter("currentPage"));

        /*
         * 分页查询酒店列表
         *
         */
        PageBean<Hotel> pageBean = hotelService.selectHotelListByPage(currentPage);

        request.setAttribute("pageBean", pageBean);

        return "hotelList.jsp";
    }

    public Integer getCurrentPage(String currentPageStr) {
        if (currentPageStr == null) {
            return 1;
        }

        return Integer.parseInt(currentPageStr);
    }

    public String selectHotelDetailsByHotelId(HttpServletRequest request, HttpServletResponse response) throws SQLException, InvocationTargetException, IllegalAccessException {
        Integer hotelId = Integer.parseInt(request.getParameter("hotelId"));
        //查询酒店信息
        Hotel hotel = hotelService.selectHotelById(hotelId);
        request.setAttribute("hotel", hotel);
        //查询酒店房间列表
        List<Room> room = roomService.selectRoomListByHotelId(hotelId);
        request.setAttribute("rooms", room);
        //查询酒店详细信息
        Information information = informationService.selectInformationByHotelId(hotelId);
        request.setAttribute("information", information);
        //查询套餐列表
        List<Package> packages = packageService.selectPackageListByHotelId(hotelId);
        request.setAttribute("packages", packages);
        return "hotelDetails.jsp";
    }
}


