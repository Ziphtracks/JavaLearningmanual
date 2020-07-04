package com.mylifes1110.java.bean;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class OrderDetail {
    private int id;
    private String oid;
    private int pid;
    private int num;
    private double money;
    private Goods goods;

    public OrderDetail(String oid, int pid, int num, double money) {
        this.oid = oid;
        this.pid = pid;
        this.num = num;
        this.money = money;
    }
}
