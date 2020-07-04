package com.mylifes1110.java.service.impl;

import java.sql.SQLException;

import java.util.UUID;

import com.mylifes1110.java.bean.User;
import com.mylifes1110.java.dao.UserDao;
import com.mylifes1110.java.dao.impl.UserDaoImpl;
import com.mylifes1110.java.service.UserService;
import com.mylifes1110.java.utils.Base64Utils;
import com.mylifes1110.java.utils.DruidUtils;
import com.mylifes1110.java.utils.EmailUtils;

public class UserServiceImpl implements UserService {
    private UserDao userDao = new UserDaoImpl();

    @Override
    public int activeUser(String email, String code) throws SQLException {
        DruidUtils.beginTx();

        int result = 0;

        try {
            result = userDao.activeUser(Base64Utils.decode(email), Base64Utils.decode(code));
        } catch (SQLException throwables) {
            throwables.printStackTrace();
            DruidUtils.rollbackTx();

            throw throwables;
        }

        DruidUtils.endTx();

        return result;
    }

    @Override
    public User selectUserByUsername(String username) throws SQLException {
        return userDao.selectUserByUsername(username);
    }

    @Override
    public int insertUser(User user) throws SQLException {
        DruidUtils.beginTx();
        user.setFlag(0);
        user.setCode(UUID.randomUUID().toString());

        int result = 0;

        try {
            result = userDao.insertUser(user);
        } catch (SQLException throwables) {
            throwables.printStackTrace();
            DruidUtils.rollbackTx();

            throw throwables;
        }

        EmailUtils.sendMessage(user);
        DruidUtils.endTx();

        return result;
    }

    @Override
    public User selectUser(String username, String password) throws SQLException {
        User user = userDao.selectUserByUsername(username);

        if (user == null) {
            return null;
        }

        if (user.getPassword().equals(password)) {
            return user;
        }

        return null;
    }
}


