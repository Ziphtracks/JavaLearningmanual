package com.mylifes1110.java.utils;

import java.io.IOException;

import javax.servlet.http.HttpServletResponse;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

/**
 * Json字符串转换工具类
 */
public class JsonUtils {

    /**
     * Java对象转换为Json字符串
     * @param o Java对象
     * @return Json字符串
     */
    public static String toJsonStr(Object o) throws JsonProcessingException {
        return new ObjectMapper().writeValueAsString(o);
    }

    /**
     * Json字符串响应到浏览器
     * @param response 响应对象
     * @param o Java对象
     */
    public static void writeJsonStr(HttpServletResponse response, Object o) throws IOException {
        response.setContentType("application/json; charset=UTF-8");
        response.getWriter().write(toJsonStr(o));
    }
}


