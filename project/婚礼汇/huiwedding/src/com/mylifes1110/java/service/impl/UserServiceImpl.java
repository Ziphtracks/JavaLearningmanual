package com.mylifes1110.java.service.impl;

import com.mylifes1110.java.bean.User;
import com.mylifes1110.java.dao.UserDao;
import com.mylifes1110.java.dao.impl.UserDaoImpl;
import com.mylifes1110.java.service.UserService;

import java.sql.SQLException;

public class UserServiceImpl implements UserService {
    private UserDao userDao = new UserDaoImpl();

    @Override
    public User login(User user) throws SQLException {
        return userDao.login(user);
    }

    @Override
    public void register(User user) throws SQLException {
        userDao.register(user);
    }
}
