package com.mylifes1110.java.utils;

import lombok.Getter;

@Getter
public enum OrderStatus {

    WAIT_PAY("1","等待支付"),
    WAIT_SEND("2","已支付,等待发货"),
    WAIT_RECEIVE("3","已发货,等待收货"),
    FINISH("4","订单结束")
    ;

    private String status;
    private String msg;

    OrderStatus(String status, String msg) {
        this.status = status;
        this.msg = msg;
    }
}
