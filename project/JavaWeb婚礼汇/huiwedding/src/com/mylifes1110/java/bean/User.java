package com.mylifes1110.java.bean;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class User {
    private Integer user_id;
    private String  user_headPortrait;
    private String  user_nickname;
    private String  user_sex;
    private String  user_city;
    private String  user_IDcard;
    private String  user_add;
    private String  user_postcode;
    private String  user_QQ;
    private String  user_tel;
    private String  user_password;
    private String  user_realname;
}