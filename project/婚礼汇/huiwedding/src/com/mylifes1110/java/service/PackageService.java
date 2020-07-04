package com.mylifes1110.java.service;

import com.mylifes1110.java.bean.Package;

import java.lang.reflect.InvocationTargetException;
import java.sql.SQLException;
import java.util.List;

public interface PackageService {
    List<Package> selectPackageListByHotelId(Integer hotelId) throws SQLException, InvocationTargetException, IllegalAccessException;

    Package selectPackageById(Integer packageId) throws SQLException, InvocationTargetException, IllegalAccessException;
}
