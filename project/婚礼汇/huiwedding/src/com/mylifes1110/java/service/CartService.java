package com.mylifes1110.java.service;

import com.mylifes1110.java.bean.Shoppingcart;

import java.sql.SQLException;
import java.util.List;

public interface CartService {
    String addCart(Shoppingcart cart) throws SQLException;

    List<Shoppingcart> selectCartList(String userTel) throws SQLException;

    String updateCart(Shoppingcart cart) throws SQLException;
}
