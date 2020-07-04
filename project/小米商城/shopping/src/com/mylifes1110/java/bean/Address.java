package com.mylifes1110.java.bean;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Address {
    private int    id;
    private String detail;
    private String name;
    private String phone;
    private int    uid;
    private int    level;

    public Address(String detail, String name, String phone, int uid, int level) {
        this.detail = detail;
        this.name   = name;
        this.phone  = phone;
        this.uid    = uid;
        this.level  = level;
    }
}


