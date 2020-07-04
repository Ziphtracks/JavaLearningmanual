package com.mylifes1110.java.dao.impl;

import java.sql.SQLException;

import org.apache.commons.dbutils.QueryRunner;
import org.apache.commons.dbutils.handlers.BeanHandler;

import com.mylifes1110.java.bean.User;
import com.mylifes1110.java.dao.UserDao;
import com.mylifes1110.java.utils.DruidUtils;

public class UserDaoImpl implements UserDao {
    private QueryRunner queryRunner = new QueryRunner(DruidUtils.getDataSource());

    @Override
    public int activeUser(String email, String code) throws SQLException {
        return queryRunner.update(DruidUtils.getConnection(),
                                  "update tb_user set flag = ? where email = ? and code = ?",
                                  1,
                                  email,
                                  code);
    }

    @Override
    public int insertUser(User user) throws SQLException {
        return queryRunner.update(DruidUtils.getConnection(),
                                  "insert into tb_user(username, password, email, gender, flag, role, code) values (?, ?, ?, ?, ?, ?, ?)",
                                  user.getUsername(),
                                  user.getPassword(),
                                  user.getEmail(),
                                  user.getGender(),
                                  user.getFlag(),
                                  user.getRole(),
                                  user.getCode());
    }

    @Override
    public User selectUserById(int id) throws SQLException {
        return queryRunner.query("select id, username, password, email, gender, flag, role, code from tb_user where id = ?",
                                 new BeanHandler<User>(User.class),
                                 id);
    }

    @Override
    public User selectUserByUsername(String username) throws SQLException {
        return queryRunner.query(
            "select id,username,password,email,gender,flag,code from tb_user where username = ? and flag = 1",
            new BeanHandler<User>(User.class),
            username);
    }
}


