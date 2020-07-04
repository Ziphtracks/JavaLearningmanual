package com.mylifes1110.java.service;

import com.mylifes1110.java.bean.User;

import java.sql.SQLException;

public interface UserService {
    User login(User user) throws SQLException;

    void register(User user) throws SQLException;
}
