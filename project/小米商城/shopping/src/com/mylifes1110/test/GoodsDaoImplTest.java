package com.mylifes1110.test;

import com.mylifes1110.java.bean.Goods;
import com.mylifes1110.java.bean.GoodsType;
import com.mylifes1110.java.dao.GoodsDao;
import com.mylifes1110.java.dao.impl.GoodsDaoImpl;
import org.junit.Before;
import org.junit.Test;

import java.sql.SQLException;
import java.util.List;
import java.util.Map;

import static org.junit.Assert.*;

public class GoodsDaoImplTest {
    private GoodsDao goodsDao;

    @Before
    public void setUp() throws Exception {
         goodsDao = new GoodsDaoImpl();
    }

    @Test
    public void selectGoodsTypeByTypeId() throws SQLException {
        List<GoodsType> goodsTypes = goodsDao.selectGoodsTypeByTypeId();
        System.out.println(goodsTypes);
    }

    @Test
    public void selectTotalSize() throws SQLException {
        System.out.println(goodsDao.selectTotalSize(1));
    }

    @Test
    public void selectGoodsListByPage() throws SQLException {
        System.out.println(goodsDao.selectGoodsListByPage(0, 2, 1));
    }

    @Test
    public void selectGoods() throws SQLException {
        Goods goods = goodsDao.selectGoods(2);
        System.out.println(goods);
    }

    @Test
    public void selectGoodsType() throws SQLException {
        GoodsType goodsType = goodsDao.selectGoodsType(2);
        System.out.println(goodsType);
    }
}