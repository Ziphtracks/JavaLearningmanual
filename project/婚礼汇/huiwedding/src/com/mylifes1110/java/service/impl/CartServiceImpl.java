package com.mylifes1110.java.service.impl;

import java.sql.SQLException;

import java.util.List;

import com.mylifes1110.java.bean.Shoppingcart;
import com.mylifes1110.java.dao.CartDao;
import com.mylifes1110.java.dao.impl.CartDaoImpl;
import com.mylifes1110.java.service.CartService;


public class CartServiceImpl implements CartService {
    private CartDao cartDao = new CartDaoImpl();

    @Override
    public String addCart(Shoppingcart cart) throws SQLException {
        Integer result = cartDao.addCart(cart);

        if (result == 1) {
            return "添加成功";
        } else {
            return "添加失败";
        }
    }

    @Override
    public List<Shoppingcart> selectCartList(String userTel) throws SQLException {
        return cartDao.selectCartList(userTel);
    }

    @Override
    public String updateCart(Shoppingcart cart) throws SQLException {
        Integer result = cartDao.updateCart(cart);
        if (result == 1) {
            return "更新成功";
        } else {
            return "更新失败";
        }
    }
}


