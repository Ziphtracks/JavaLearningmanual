package com.mylifes1110.java.dao;

import com.mylifes1110.java.bean.User;

import java.sql.SQLException;

public interface UserDao {
    User selectUserByUsername(String username) throws SQLException;

    int insertUser(User user) throws SQLException;

    int activeUser(String email, String code) throws SQLException;

    User selectUserById(int id) throws SQLException;
}
