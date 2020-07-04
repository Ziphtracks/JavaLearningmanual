package com.mylifes1110.java.service;

import com.mylifes1110.java.bean.Cart;

import java.lang.reflect.InvocationTargetException;
import java.sql.SQLException;
import java.util.List;

public interface CartService {
    int selectCartNum(Cart cart) throws SQLException;

    List<Cart> showCart(int userId) throws SQLException, InvocationTargetException, IllegalAccessException;

    String updateCartNum(Cart cart) throws SQLException;

    String clearCart(int userId) throws SQLException;

    List<Cart> selectCartListById(int id) throws SQLException;
}
