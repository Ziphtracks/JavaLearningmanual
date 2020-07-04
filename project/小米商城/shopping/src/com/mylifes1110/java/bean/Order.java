package com.mylifes1110.java.bean;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Order {
    private String id;
    private int    uid;
    private double money;
    private String status;
    private Date   time;
    private int    aid;
}


