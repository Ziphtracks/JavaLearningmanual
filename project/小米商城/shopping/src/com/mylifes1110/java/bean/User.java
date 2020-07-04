package com.mylifes1110.java.bean;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {

    private int id;
    private String  username;
    private String  password;
    private String  email;
    private String  gender;
    private int flag;
    private int role;
    private String  code;

    public User(String username, String password) {
        this.username = username;
        this.password = password;
    }

    public User(String username, String password, String email, String gender, int flag, int role, String code) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.gender = gender;
        this.flag = flag;
        this.role = role;
        this.code = code;
    }
}