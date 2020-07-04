package com.mylifes1110.java.bean;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Goods {
    private int id;
    private String name;
    private Date pubdate;
    private String picture;
    private int price;
    private int star;
    private String intro;
    private int typeid;
    private GoodsType goodsType;
}
