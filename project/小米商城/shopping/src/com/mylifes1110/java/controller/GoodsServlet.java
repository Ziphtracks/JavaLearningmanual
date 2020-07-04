package com.mylifes1110.java.controller;

import java.io.IOException;

import java.lang.reflect.InvocationTargetException;

import java.sql.SQLException;

import java.util.List;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.mylifes1110.java.bean.Goods;
import com.mylifes1110.java.bean.GoodsType;
import com.mylifes1110.java.bean.Page;
import com.mylifes1110.java.service.GoodsService;
import com.mylifes1110.java.service.impl.GoodsServiceImpl;
import com.mylifes1110.java.utils.GsonUtils;

@WebServlet(
    name  = "GoodsServlet",
    value = "/goodsservlet"
)
public class GoodsServlet extends BaseServlet {
    private GoodsService goodsService = new GoodsServiceImpl();

    public String selectGoodsById(HttpServletRequest request, HttpServletResponse response)
            throws SQLException, InvocationTargetException, IllegalAccessException {
        String idStr = request.getParameter("id");
        int    id    = Integer.parseInt(idStr);
        Goods  goods = goodsService.selectGoodsById(id);

        request.setAttribute("goods", goods);

        return "forward:/goodsDetail.jsp";
    }

    public String selectGoodsListByPage(HttpServletRequest request, HttpServletResponse response) throws SQLException {
        String currentPageStr = request.getParameter("currentPage");
        String typeIdStr      = request.getParameter("typeId");
        int    currentPage    = 0;
        int    typeId         = 0;

        if ((currentPageStr == null) || (currentPageStr == "")) {
            currentPage = 1;
        } else {
            currentPage = Integer.parseInt(currentPageStr);
        }

        if ((typeIdStr == "") || (typeIdStr == null)) {
            typeId = 1;
        } else {
            typeId = Integer.parseInt(typeIdStr);
        }

        Page<Goods> goodsPage = goodsService.selectGoodsListByPage(currentPage, typeId);

        request.setAttribute("pageBean", goodsPage);

        return "forward:/goodsList.jsp";
    }

    public String selectGoodsListByTypeId(HttpServletRequest request, HttpServletResponse response) throws IOException {
        response.setContentType("application/json;charset=utf8");

        List<GoodsType> goodsTypes = null;

        try {
            goodsTypes = goodsService.selectGoodsTypes();
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }

        String json = GsonUtils.toJson(goodsTypes);

        response.getWriter().write(json);

        return null;
    }
}


