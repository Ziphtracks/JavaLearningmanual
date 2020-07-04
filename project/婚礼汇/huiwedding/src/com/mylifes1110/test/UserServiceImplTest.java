package com.mylifes1110.test;

import com.mylifes1110.java.bean.User;
import com.mylifes1110.java.service.UserService;
import com.mylifes1110.java.service.impl.UserServiceImpl;
import org.junit.Before;
import org.junit.Test;

import java.sql.SQLException;

import static org.junit.Assert.*;

public class UserServiceImplTest {
    private UserService userService;

    @Before
    public void setUp() throws Exception {
        userService = new UserServiceImpl();
    }

    @Test
    public void login() throws SQLException {
        User user = new User();
        user.setUser_tel("13260621887");
        user.setUser_password("123456");
        User existUser = userService.login(user);
        System.out.println(existUser);
    }
}