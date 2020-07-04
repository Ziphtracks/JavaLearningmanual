package com.mylifes1110.java.dao.impl;

import java.sql.SQLException;

import java.util.List;
import java.util.Map;

import org.apache.commons.dbutils.QueryRunner;
import org.apache.commons.dbutils.handlers.MapHandler;
import org.apache.commons.dbutils.handlers.MapListHandler;

import com.mylifes1110.java.bean.Package;
import com.mylifes1110.java.dao.PackageDao;
import com.mylifes1110.java.utils.DbUtils;

public class PackageDaoImpl implements PackageDao {
    @Override
    public Map<String, Object> selectPackageById(Integer packageId) throws SQLException {
        return new QueryRunner(DbUtils.getDataSource()).query(
            "select * from tb_package, tb_img where tb_package.package_id = tb_img.tb_package_package_id and tb_package.package_id = ?",
            new MapHandler(),
            packageId);
    }

    @Override
    public List<Map<String, Object>> selectPackageListByHotelId(Integer hotelId) throws SQLException {
        return new QueryRunner(DbUtils.getDataSource()).query(
            "select * from tb_package, tb_img where tb_package.package_id = tb_img.tb_package_package_id and tb_package.tb_hotel_hotel_id = ?",
            new MapListHandler(),
            hotelId);
    }
}


