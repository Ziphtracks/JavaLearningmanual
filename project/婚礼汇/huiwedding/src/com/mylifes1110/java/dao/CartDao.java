package com.mylifes1110.java.dao;

import com.mylifes1110.java.bean.Shoppingcart;

import java.sql.SQLException;
import java.util.List;

public interface CartDao {
    Integer addCart(Shoppingcart cart) throws SQLException;

    List<Shoppingcart> selectCartList(String userTel) throws SQLException;

    Integer updateCart(Shoppingcart cart) throws SQLException;
}
