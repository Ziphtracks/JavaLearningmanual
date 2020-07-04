package com.mylifes1110.test;

import com.mylifes1110.java.bean.Cart;
import com.mylifes1110.java.dao.CartDao;
import com.mylifes1110.java.dao.impl.CartDaoImpl;
import org.junit.Before;
import org.junit.Test;

import java.sql.SQLException;
import java.util.List;

import static org.junit.Assert.*;

public class CartDaoImplTest {
    private CartDao cartDao;

    @Before
    public void setUp() throws Exception {
        cartDao = new CartDaoImpl();
    }

    @Test
    public void selectCart() throws SQLException {
        Cart cart = cartDao.selectCart(new Cart(1, 1, 1));
        System.out.println(cart);
    }

    @Test
    public void insertCart() throws SQLException {
        int i = cartDao.insertCart(new Cart(8, 1, 1));
        System.out.println(i);
    }

    @Test
    public void updateCartNum() throws SQLException {
        int i = cartDao.updateCartNum(new Cart(8, 1, 2));
        System.out.println(i);
    }

    @Test
    public void testSelectCart() throws SQLException {
        List<Cart> carts = cartDao.selectCartList(8);
        System.out.println(carts);
    }

    @Test
    public void clearCartNum() throws SQLException {
        int i = cartDao.clearCartNum(7);
        System.out.println(i);
    }
}