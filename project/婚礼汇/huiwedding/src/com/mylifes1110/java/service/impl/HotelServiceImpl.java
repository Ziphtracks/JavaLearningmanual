package com.mylifes1110.java.service.impl;

import java.lang.reflect.InvocationTargetException;

import java.sql.SQLException;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.apache.commons.beanutils.BeanUtils;

import com.mylifes1110.java.bean.Hotel;
import com.mylifes1110.java.bean.Img;
import com.mylifes1110.java.bean.PageBean;
import com.mylifes1110.java.dao.HotelDao;
import com.mylifes1110.java.dao.impl.HotelDaoImpl;
import com.mylifes1110.java.service.HotelService;

public class HotelServiceImpl implements HotelService {
    private HotelDao hotelDao = new HotelDaoImpl();

    @Override
    public Hotel selectHotelById(Integer hotelId)
            throws SQLException, InvocationTargetException, IllegalAccessException {
        Map<String, Object> map   = hotelDao.selectHotelById(hotelId);
        Hotel               hotel = new Hotel();
        Img                 img   = new Img();

        BeanUtils.populate(hotel, map);
        BeanUtils.populate(img, map);
        hotel.setImg(img);

        return hotel;
    }

    @Override
    public PageBean<Hotel> selectHotelListByPage(Integer currentPage)
            throws SQLException, InvocationTargetException, IllegalAccessException {
        PageBean<Hotel> pageBean = new PageBean<>();

        pageBean.setCurrentPage(currentPage);

        Integer pageSize = 3;

        pageBean.setPageSize(pageSize);

        Long totalSize = hotelDao.selectTotalSize();

        pageBean.setTotalSize(totalSize);

        Long totalPage = (totalSize % pageSize == 0)
                         ? totalSize / pageSize
                         : totalSize / pageSize + 1;

        pageBean.setTotalPage(totalPage);

        Integer                   begin     = (currentPage - 1) * pageSize;
        List<Map<String, Object>> mapList      = hotelDao.selectHotelListByPage(begin, pageSize);
        List<Hotel>               hotelList = new ArrayList<>();

        for (Map<String, Object> map : mapList) {
            Hotel hotel = new Hotel();
            Img   img   = new Img();

            BeanUtils.populate(hotel, map);
            BeanUtils.populate(img, map);
            hotel.setImg(img);
            hotelList.add(hotel);
        }

        pageBean.setList(hotelList);

        return pageBean;
    }
}


