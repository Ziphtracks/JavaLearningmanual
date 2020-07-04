package com.mylifes1110.java.bean;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Cart {
    private int id;
    private int pid;
    private int num;
    private double money;
    private Goods goods;

    public Cart(int id, int pid, int num) {
        this.id = id;
        this.pid = pid;
        this.num = num;
    }
}
