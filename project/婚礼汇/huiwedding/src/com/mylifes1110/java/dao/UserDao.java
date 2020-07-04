package com.mylifes1110.java.dao;

import com.mylifes1110.java.bean.User;

import java.sql.SQLException;

public interface UserDao {
    User login(User user) throws SQLException;

    void register(User user) throws SQLException;
}
