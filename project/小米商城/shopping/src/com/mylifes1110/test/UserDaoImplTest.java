package com.mylifes1110.test;

import com.mylifes1110.java.bean.User;
import com.mylifes1110.java.dao.UserDao;
import com.mylifes1110.java.dao.impl.UserDaoImpl;
import org.junit.Test;

import java.sql.SQLException;

import static org.junit.Assert.*;

public class UserDaoImplTest {
    private UserDao userDao;

    @org.junit.Before
    public void setUp() throws Exception {
        userDao = new UserDaoImpl();
    }

    @org.junit.Test
    public void selectUserByUsername() throws SQLException {
        User user = userDao.selectUserByUsername("Ziph");
        System.out.println(user);
    }

    @Test
    public void insertUser() throws SQLException {
        User user = new User("Lazy", "123456", "mylifes1110@163.com", "男", 1, 1, "2018012218370268135d");
        int i = userDao.insertUser(user);
        System.out.println(i);
    }

    @Test
    public void activeUser() throws SQLException {
        int i = userDao.activeUser("mylifes1110@163.com", "2018012218370268135d");
        System.out.println(i);
    }

    @Test
    public void selectUserById() throws SQLException {
        User user = userDao.selectUserById(8);
        System.out.println(user);
    }
}