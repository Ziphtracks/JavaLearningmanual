package com.mylifes1110.java.utils;

import com.alibaba.druid.pool.DruidDataSource;
import com.alibaba.druid.pool.DruidDataSourceFactory;
import com.alibaba.druid.pool.DruidPooledConnection;

import javax.sql.DataSource;
import java.io.InputStream;
import java.sql.Connection;
import java.sql.SQLException;
import java.util.Properties;

public class DruidUtils {
    private static DruidDataSource dataSource=null;
    private static final ThreadLocal<Connection> tl = new ThreadLocal<Connection>();

    static{
        try {
            InputStream is = DruidUtils.class.getClassLoader().getResourceAsStream("db.properties");
            Properties properties=new Properties();
            properties.load(is);
            dataSource= (DruidDataSource) DruidDataSourceFactory.createDataSource(properties);
        } catch (Exception e) {
            e.printStackTrace();
            System.out.println("初始化连接池失败....");
            //日志
            throw new RuntimeException(e.getMessage());
        }

    }
    public static Connection getConnection() throws SQLException {
        Connection connection = tl.get();
        if(connection==null){
            connection = dataSource.getConnection();
            tl.set(connection);
        }
        return connection;
    }
    public static void beginTx() throws SQLException {
        Connection connection = getConnection();
        connection.setAutoCommit(false);
    }
    public static void endTx() throws SQLException {
        Connection connection = getConnection();
        connection.commit();
        connection.close();
        tl.remove();
    }
    public static DataSource getDataSource(){
        return dataSource;
    }

    public static void rollbackTx() throws SQLException {
        Connection connection = getConnection();
        connection.rollback();
        connection.close();
        tl.remove();
    }
}
