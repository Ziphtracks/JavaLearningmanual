package com.mylifes1110.java.service;

import com.mylifes1110.java.bean.User;

import java.sql.SQLException;

public interface UserService {
    User selectUser(String username, String password) throws SQLException;

    int insertUser(User user) throws SQLException;

    int activeUser(String email, String code) throws SQLException;

    User selectUserByUsername(String username) throws SQLException;
}
