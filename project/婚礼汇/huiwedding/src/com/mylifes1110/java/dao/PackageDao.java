package com.mylifes1110.java.dao;

import com.mylifes1110.java.bean.Package;

import java.sql.SQLException;
import java.util.List;
import java.util.Map;

public interface PackageDao {
    List<Map<String, Object>> selectPackageListByHotelId(Integer hotelId) throws SQLException;

    Map<String, Object> selectPackageById(Integer packageId) throws SQLException;
}
