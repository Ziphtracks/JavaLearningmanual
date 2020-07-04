package com.mylifes1110.java.utils;

import com.mchange.v2.c3p0.ComboPooledDataSource;

/**
 * c3p0连接池工具类
 */
public class DbUtils {
    private static ComboPooledDataSource dataSource;

    static {
        dataSource = new ComboPooledDataSource();
    }

    public static ComboPooledDataSource getDataSource() {
        return dataSource;
    }
}