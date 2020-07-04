package com.mylifes1110.java.service.impl;

import java.lang.reflect.InvocationTargetException;

import java.sql.SQLException;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.beanutils.BeanUtils;

import com.mylifes1110.java.bean.Goods;
import com.mylifes1110.java.bean.GoodsType;
import com.mylifes1110.java.bean.Page;
import com.mylifes1110.java.dao.GoodsDao;
import com.mylifes1110.java.dao.impl.GoodsDaoImpl;
import com.mylifes1110.java.service.GoodsService;

public class GoodsServiceImpl implements GoodsService {
    private GoodsDao goodsDao = new GoodsDaoImpl();

    @Override
    public Goods selectGoodsById(int id) throws SQLException, InvocationTargetException, IllegalAccessException {
        Goods goods = goodsDao.selectGoods(id);
        GoodsType goodsTypes = goodsDao.selectGoodsType(id);
        goods.setGoodsType(goodsTypes);

        Map<String, Object> map = new HashMap<>();
        map.put("goods", goods);
        map.put("goodsTypes", goodsTypes);

        BeanUtils.populate(goods,map);
        BeanUtils.populate(goodsTypes,map);

        return goods;
    }

    @Override
    public GoodsType selectGoodsTypeById(int typeid) throws SQLException {
        return goodsDao.selectGoodsType(typeid);
    }

    @Override
    public Page<Goods> selectGoodsListByPage(int currentPage, int typeId) throws SQLException {
        Page<Goods> goodsPage = new Page<>();

        // 封装当前页数
        goodsPage.setCurrentPage(currentPage);

        // 封装总数据条数
        int totalSize = (int) goodsDao.selectTotalSize(typeId);

        goodsPage.setTotalSize(totalSize);

        // 封装每页数据条数
        int pageSize = 2;

        goodsPage.setPageSize(pageSize);

        // 计算并封装总页数
        int totalPage = (totalSize % pageSize == 0)
                        ? totalSize / pageSize
                        : totalSize / pageSize + 1;

        goodsPage.setTotalPage(totalPage);

        // 计算当前页数据条数
        int beginPage = (currentPage - 1) * pageSize;

        // 获取并封装当前页数据
        List<Goods> goodsList = goodsDao.selectGoodsListByPage(beginPage, pageSize, typeId);

        goodsPage.setList(goodsList);

        return goodsPage;
    }

    @Override
    public List<GoodsType> selectGoodsTypes() throws SQLException {
        return goodsDao.selectGoodsTypeByTypeId();
    }
}


