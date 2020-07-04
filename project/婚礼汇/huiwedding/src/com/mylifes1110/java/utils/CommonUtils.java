package com.mylifes1110.java.utils;

import java.util.UUID;

/**
 * 生成32位随机数
 */
public class CommonUtils {
    public static String uuid() {
        return UUID.randomUUID().toString().replace("-", "");
    }
}
