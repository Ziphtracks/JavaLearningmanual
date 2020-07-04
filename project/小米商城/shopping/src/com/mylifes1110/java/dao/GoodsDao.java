package com.mylifes1110.java.dao;

import com.mylifes1110.java.bean.Goods;
import com.mylifes1110.java.bean.GoodsType;

import java.sql.SQLException;
import java.util.List;

public interface GoodsDao {
    List<GoodsType> selectGoodsTypeByTypeId() throws SQLException;

    long selectTotalSize(int typeId) throws SQLException;

    List<Goods> selectGoodsListByPage(int beginPage, int pageSize, int typeId) throws SQLException;

    Goods selectGoods(int id) throws SQLException;

    GoodsType  selectGoodsType(int id) throws SQLException;
}
