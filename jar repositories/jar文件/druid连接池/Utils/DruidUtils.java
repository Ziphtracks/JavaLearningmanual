package com.mylifes1110.java.utils;

import com.alibaba.druid.pool.DruidDataSource;
import com.alibaba.druid.pool.DruidDataSourceFactory;

import javax.sql.DataSource;
import java.io.IOException;
import java.io.InputStream;

import java.sql.*;

import java.util.Properties;

/**
 * @ClassName DruidUtils
 * @Description Druid连接池工具类
 * @Author Ziph
 * @Date 2020/6/29
 * @Since 1.8
 * @Version 1.0
 */
public class DruidUtils {
    private static DruidDataSource dataSource = null;

    /**
     * 新建Properties集合，存放配置信息，以便后续流的读取
     */
    private static final Properties PROPERTIES = new Properties();

    /**
     * 所有操作即为单线程操作，应用了多个Connection对象，我们将一个线程绑定一个Connection连接使用
     */
    private static final ThreadLocal<Connection> THREAD_LOCAL = new ThreadLocal<>();

    /**
     * 读取配置文件类加载时，只需要加载一次即可
     */
    static {

        /**
         * 使用类自身带的流读取配置，无需关闭
         */
        InputStream inputStream = DruidUtils.class.getResourceAsStream("/db.properties");

        try {

            /**
             * 通过流将配置信息的内容分割成键值对，并连接数据库
             */
            PROPERTIES.load(inputStream);

            /**
             * 初始化连接池
             */
            dataSource= (DruidDataSource) DruidDataSourceFactory.createDataSource(PROPERTIES);

            /**
             * 注册加载驱动
             */
            Class.forName(PROPERTIES.getProperty("driverClass"));
        } catch (IOException | ClassNotFoundException e) {
            e.printStackTrace();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public static DataSource getDataSource() {
        return dataSource;
    }


    /**
     * 开启事务
     */
    public static void begin() {
        Connection connection = getConnection();

        try {
            connection.setAutoCommit(false);
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    /**
     * 释放资源
     */
    public static void closeAll(Connection connection, Statement statement, ResultSet resultSet) {
        try {
            if (resultSet != null) {
                resultSet.close();
            }

            if (statement != null) {
                statement.close();
            }

            if (connection != null) {
                connection.close();

                /**
                 * 关闭连接后，移除线程中绑定的连接对象
                 */
                THREAD_LOCAL.remove();
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    /**
     * 提交事务
     */
    public static void commit() {
        Connection connection = getConnection();

        try {
            connection.commit();
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            DruidUtils.closeAll(connection, null, null);
        }
    }

    /**
     * 回滚事务
     */
    public static void rollback() {
        Connection connection = getConnection();

        try {
            connection.rollback();
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            DruidUtils.closeAll(connection, null, null);
        }
    }

    /**
     * 获取连接对象
     */
    public static Connection getConnection() {

        /**
         * 在ThreadLocal里取连接对象
         */
        Connection connection = THREAD_LOCAL.get();

        /**
         * connection对象为空则创建连接对象
         */
        if (connection == null) {
            try {
                connection = DriverManager.getConnection(PROPERTIES.getProperty("url"),
                                                         PROPERTIES.getProperty("username"),
                                                         PROPERTIES.getProperty("password"));

                /**
                 * 把连接对象存入ThreadLocal里
                 */
                THREAD_LOCAL.set(connection);
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }

        return connection;
    }
}