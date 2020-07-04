package com.mylifes1110.test;

import com.mylifes1110.java.bean.Goods;
import com.mylifes1110.java.bean.Page;
import com.mylifes1110.java.service.GoodsService;
import com.mylifes1110.java.service.impl.GoodsServiceImpl;
import org.junit.Before;
import org.junit.Test;

import java.sql.SQLException;


public class GoodsServiceImplTest {
    private GoodsService goodsService;

    @Before
    public void setUp() throws Exception {
        goodsService = new GoodsServiceImpl();
    }

    @Test
    public void selectGoodsListByPage() throws SQLException {
        System.out.println(goodsService.selectGoodsListByPage(1, 1));
    }

    @Test
    public void testSelectGoodsListByPage() throws SQLException {
        Page<Goods> goodsPage = goodsService.selectGoodsListByPage(2, 1);
        System.out.println(goodsPage);
    }
}