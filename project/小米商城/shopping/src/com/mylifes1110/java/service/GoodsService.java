package com.mylifes1110.java.service;

import com.mylifes1110.java.bean.Goods;
import com.mylifes1110.java.bean.GoodsType;
import com.mylifes1110.java.bean.Page;

import java.lang.reflect.InvocationTargetException;
import java.sql.SQLException;
import java.util.List;

public interface GoodsService {
    List<GoodsType> selectGoodsTypes() throws SQLException;

    Page<Goods> selectGoodsListByPage(int currentPage, int typeId) throws SQLException;

    Goods selectGoodsById(int id) throws SQLException, InvocationTargetException, IllegalAccessException;

    GoodsType selectGoodsTypeById(int typeid) throws SQLException;
}