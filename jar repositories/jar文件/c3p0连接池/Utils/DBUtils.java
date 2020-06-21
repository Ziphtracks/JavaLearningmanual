package com.mylifes1110.java.utils;

import com.mchange.v2.c3p0.ComboPooledDataSource;

/**
 * c3p0工具类
 */
public class DBUtils {
    private static ComboPooledDataSource dataSource;

    static {
        dataSource = new ComboPooledDataSource();
    }

    public static ComboPooledDataSource getDataSource() {
        return dataSource;
    }
}