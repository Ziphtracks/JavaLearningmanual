package com.mylifes1110.test;

import com.mylifes1110.java.bean.User;
import com.mylifes1110.java.dao.UserDao;
import com.mylifes1110.java.dao.impl.UserDaoImpl;
import org.junit.Before;
import org.junit.Test;

import java.sql.SQLException;

public class UserDaoImplTest {
    private UserDao userDao;

    @Before
    public void setUp() throws Exception {
        userDao = new UserDaoImpl();
    }

    @org.junit.Test
    public void login() throws SQLException {
        User user = new User();
        user.setUser_tel("13260621887");
        user.setUser_password("123456");
        User existUser = userDao.login(user);
        System.out.println(existUser);
    }

    @Test
    public void register() throws SQLException {
        User user = new User();
        user.setUser_tel("13623267588");
        user.setUser_password("123456");
        userDao.register(user);
    }
}