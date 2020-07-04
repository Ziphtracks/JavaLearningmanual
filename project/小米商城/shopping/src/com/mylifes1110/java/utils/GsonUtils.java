package com.mylifes1110.java.utils;

import com.google.gson.Gson;

public class GsonUtils {

    private static Gson gson = new Gson();

    /**
     * Obj -> String
     * @param obj
     * @return
     */
    public static String toJson(Object obj){
        return gson.toJson(obj);
    }

    /**
     * String -> T
     * @param json
     * @param clazz
     * @param <T>
     * @return
     */
    public static <T> T fromJson(String json,Class<T> clazz){
        return gson.fromJson(json,clazz);
    }

}
