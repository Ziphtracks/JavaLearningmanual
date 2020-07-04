package com.mylifes1110.java.utils;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * 响应平文 或 Json
 */
public class RespUtil {
    public static void responseText(HttpServletResponse response,Object text,String... mimeType){
        if(mimeType.length>0){
            response.setContentType(mimeType[0]);
        }else{
            response.setContentType("text/html;charset=utf8");
        }
        try {
            response.getWriter().print(text);
            response.getWriter().close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}