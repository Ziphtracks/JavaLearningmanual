package com.mylifes1110.java.utils;

import org.apache.commons.lang3.StringUtils;

import java.util.Map;

public class Validate9 {
    /**
     *
     * @param params  reqeust.getPrameterMap();获得的 参数集合
     * @return
     */
    public static String validateData(Map<String,String[]> params){
        //2.1 校验用户名不为null.
        if(StringUtils.isEmpty(params.get("username")[0])){
            return Constant9.USERNAME_EMPTY;
        }
        //2.2 校验密码不为null.
        if(StringUtils.isEmpty(params.get("password")[0])){
            return Constant9.PASSWORD_EMPTY;
        }
        //2.3 校验确认密码不为null.
        if(StringUtils.isEmpty(params.get("repassword")[0])){
            return Constant9.REPASSWORD_EMPTY;
        }
        //2.4 校验确认密码和密码相同,
        if(!params.get("repassword")[0].equals(params.get("password")[0])){
            return Constant9.REPASSWORD_ERROR;
        }
        //2.5 校验邮件不为null.
        if(StringUtils.isEmpty(params.get("email")[0])){
            return Constant9.EMAIL_EMPTY;
        }
        //2.6 校验性别不为null.
        if(StringUtils.isEmpty(params.get("gender")[0])){
            return Constant9.EMAIL_EMPTY;
        }
        return null;
    }
}