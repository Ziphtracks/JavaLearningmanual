package com.mylifes1110.java.dao.impl;

import java.sql.SQLException;

import org.apache.commons.dbutils.QueryRunner;
import org.apache.commons.dbutils.handlers.BeanHandler;

import com.mylifes1110.java.bean.User;
import com.mylifes1110.java.dao.UserDao;
import com.mylifes1110.java.utils.DbUtils;

public class UserDaoImpl implements UserDao {
    @Override
    public User login(User user) throws SQLException {
        return new QueryRunner(DbUtils.getDataSource()).query(
            "select * from tb_user where user_tel = ? and user_password = ?",
            new BeanHandler<User>(User.class),
            user.getUser_tel(),
            user.getUser_password());
    }

    @Override
    public void register(User user) throws SQLException {
        new QueryRunner(DbUtils.getDataSource()).update("insert into tb_user(user_tel,user_password) values (?, ?)",
                                                        user.getUser_tel(),
                                                        user.getUser_password());
    }
}