package com.mylifes1110.java.service.impl;

import java.lang.reflect.InvocationTargetException;

import java.sql.SQLException;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.beanutils.BeanUtils;

import com.mylifes1110.java.bean.Cart;
import com.mylifes1110.java.bean.Goods;
import com.mylifes1110.java.dao.CartDao;
import com.mylifes1110.java.dao.GoodsDao;
import com.mylifes1110.java.dao.impl.CartDaoImpl;
import com.mylifes1110.java.dao.impl.GoodsDaoImpl;
import com.mylifes1110.java.service.CartService;
import com.mylifes1110.java.utils.DruidUtils;

public class CartServiceImpl implements CartService {
    private CartDao  cartDao  = new CartDaoImpl();
    private GoodsDao goodsDao = new GoodsDaoImpl();

    @Override
    public String clearCart(int userId) throws SQLException {
        DruidUtils.beginTx();

        int result = 0;

        try {
            result = cartDao.clearCartNum(userId);
        } catch (SQLException throwables) {
            throwables.printStackTrace();
            DruidUtils.rollbackTx();

            throw throwables;
        }

        if (result <= 0) {
            return "清空失败";
        }

        DruidUtils.endTx();

        return "清空成功";
    }

    @Override
    public List<Cart> selectCartListById(int id) throws SQLException {
        return cartDao.selectCartList(id);
    }

    @Override
    public int selectCartNum(Cart cart) throws SQLException {
        DruidUtils.beginTx();

        int result = 0;

        try {
            Cart c = cartDao.selectCart(cart);

            // 更新数量
            if (c != null) {

                // 获取数据库中的商品数量
                int num = c.getNum();

                // 预留获取jsp中的传入商品增量
                int num1 = cart.getNum();

                // 计算商品 +1 或 -1
                num = num + num1;
                cart.setNum(num);
                result = cartDao.updateCartNum(cart);
            } else {    // 添加数据
                result = cartDao.insertCart(cart);
            }

            if (result <= 0) {
                DruidUtils.rollbackTx();
            }
        } catch (SQLException throwables) {
            throwables.printStackTrace();
            DruidUtils.rollbackTx();

            throw throwables;
        }

        DruidUtils.endTx();

        return result;
    }

    @Override
    public List<Cart> showCart(int userId) throws SQLException, InvocationTargetException, IllegalAccessException {
        List<Cart> cartList = cartDao.selectCartList(userId);
        Goods      goods    = null;

        for (Cart cart : cartList) {
            goods = goodsDao.selectGoods(cart.getPid());

            int totalPrice = cart.getNum() * goods.getPrice();

            cart.setMoney(totalPrice);
            cart.setGoods(goods);
        }

        Map<String, Object> map = new HashMap<>();

        map.put("goods", goods);
        map.put("cartList", cartList);
        BeanUtils.populate(goods, map);
        BeanUtils.populate(cartList, map);

        return cartList;
    }

    @Override
    public String updateCartNum(Cart cart) throws SQLException {
        DruidUtils.beginTx();

        int result = 0;

        try {
            result = cartDao.updateCartNum(cart);
        } catch (SQLException throwables) {
            throwables.printStackTrace();
            DruidUtils.rollbackTx();

            throw throwables;
        }

        if (result <= 0) {
            return "修改失败";
        }

        DruidUtils.endTx();

        return "修改成功";
    }
}


