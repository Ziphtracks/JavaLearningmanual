package com.mylifes1110.java.dao;

import com.mylifes1110.java.bean.Cart;

import java.sql.SQLException;
import java.util.List;

public interface CartDao {
    Cart selectCart(Cart cart) throws SQLException;

    int updateCartNum(Cart cart) throws SQLException;

    int insertCart(Cart cart) throws SQLException;

    List<Cart> selectCartList(int userId) throws SQLException;

    int clearCartNum(int userId) throws SQLException;
}
