package com.mylifes1110.test;

import com.mylifes1110.java.bean.Package;
import com.mylifes1110.java.service.PackageService;
import com.mylifes1110.java.service.impl.PackageServiceImpl;
import org.junit.Before;
import org.junit.Test;

import java.lang.reflect.InvocationTargetException;
import java.sql.SQLException;
import java.util.List;


public class PackageServiceImplTest {
    private PackageService packageService;

    @Before
    public void setUp() throws Exception {
        packageService = new PackageServiceImpl();
    }

    @Test
    public void selectPackageListByHotelId() throws SQLException, InvocationTargetException, IllegalAccessException {
        List<Package> packages = packageService.selectPackageListByHotelId(1);
        System.out.println(packages);
    }

    @Test
    public void selectPackageById() throws IllegalAccessException, SQLException, InvocationTargetException {
        Package aPackage = packageService.selectPackageById(1);
        System.out.println(aPackage);
    }
}