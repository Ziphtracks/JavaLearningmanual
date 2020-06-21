package com.mylifes1110.java.utils;

import java.io.IOException;

import javax.servlet.http.HttpServletResponse;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

/**
 * Jackson工具类
 */
public class JsonUtils {

    /**
     * 将Java对象转换为JSON字符串
     *
     * @param o Java对象
     * @return JSON字符串
     * @throws JsonProcessingException
     */
    public static String toJsonStr(Object o) throws JsonProcessingException {
        return new ObjectMapper().writeValueAsString(o);
    }

    /**
     * 将JSON字符串相应到浏览器
     *
     * @param response 响应对象
     * @param o        Java对象
     * @throws IOException
     */
    public static void writeJsonStr(HttpServletResponse response, Object o) throws IOException {
        response.setContentType("application/json;charset=utf-8");
        response.getWriter().write(toJsonStr(o));
    }
}