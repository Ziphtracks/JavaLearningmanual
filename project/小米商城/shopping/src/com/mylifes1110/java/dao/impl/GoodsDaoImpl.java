package com.mylifes1110.java.dao.impl;

import java.sql.SQLException;

import java.util.List;

import org.apache.commons.dbutils.QueryRunner;
import org.apache.commons.dbutils.handlers.BeanHandler;
import org.apache.commons.dbutils.handlers.BeanListHandler;
import org.apache.commons.dbutils.handlers.ScalarHandler;

import com.mylifes1110.java.bean.Goods;
import com.mylifes1110.java.bean.GoodsType;
import com.mylifes1110.java.dao.GoodsDao;
import com.mylifes1110.java.utils.DruidUtils;

public class GoodsDaoImpl implements GoodsDao {
    private QueryRunner queryRunner = new QueryRunner(DruidUtils.getDataSource());

    @Override
    public Goods selectGoods(int id) throws SQLException {
        return queryRunner.query("select id, name, pubdate, picture, price, star, intro from tb_goods where id = ?",
                                 new BeanHandler<Goods>(Goods.class),
                                 id);
    }

    @Override
    public List<Goods> selectGoodsListByPage(int beginPage, int pageSize, int typeId) throws SQLException {
        return queryRunner.query(
            "select id, name, pubdate, picture, price, star, intro from tb_goods where typeId = ? limit ?, ?",
            new BeanListHandler<Goods>(Goods.class),
            typeId,
            beginPage,
            pageSize);
    }

    @Override
    public GoodsType selectGoodsType(int id) throws SQLException {
        return queryRunner.query("select id, name, level, parent from tb_goods_type where id = ?",
                                 new BeanHandler<GoodsType>(GoodsType.class),
                                 id);
    }

    @Override
    public List<GoodsType> selectGoodsTypeByTypeId() throws SQLException {
        return queryRunner.query("select id, name, level, parent from tb_goods_type where level = 1",
                                 new BeanListHandler<GoodsType>(GoodsType.class));
    }

    @Override
    public long selectTotalSize(int typeId) throws SQLException {
        return queryRunner.query("select count(1) from tb_goods where typeid = ?", new ScalarHandler<>(), typeId);
    }
}


