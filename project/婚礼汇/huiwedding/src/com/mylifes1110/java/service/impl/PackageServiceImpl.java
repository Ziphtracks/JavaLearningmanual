package com.mylifes1110.java.service.impl;

import java.lang.reflect.InvocationTargetException;

import java.sql.SQLException;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.apache.commons.beanutils.BeanUtils;

import com.mylifes1110.java.bean.Img;
import com.mylifes1110.java.bean.Package;
import com.mylifes1110.java.dao.PackageDao;
import com.mylifes1110.java.dao.impl.PackageDaoImpl;
import com.mylifes1110.java.service.PackageService;

public class PackageServiceImpl implements PackageService {
    private PackageDao packageDao = new PackageDaoImpl();

    @Override
    public Package selectPackageById(Integer packageId)
            throws SQLException, InvocationTargetException, IllegalAccessException {
        Map<String, Object> map      = packageDao.selectPackageById(packageId);
        Package             aPackage = new Package();
        Img                 img      = new Img();

        BeanUtils.populate(aPackage, map);
        BeanUtils.populate(img, map);
        aPackage.setImg(img);

        return aPackage;
    }

    @Override
    public List<Package> selectPackageListByHotelId(Integer hotelId)
            throws SQLException, InvocationTargetException, IllegalAccessException {
        List<Map<String, Object>> mapList  = packageDao.selectPackageListByHotelId(hotelId);
        List<Package>             packages = new ArrayList<>();

        for (Map<String, Object> map : mapList) {
            Package aPackage = new Package();
            Img     img      = new Img();

            BeanUtils.populate(aPackage, map);
            BeanUtils.populate(img, map);
            aPackage.setImg(img);
            packages.add(aPackage);
        }

        return packages;
    }
}


