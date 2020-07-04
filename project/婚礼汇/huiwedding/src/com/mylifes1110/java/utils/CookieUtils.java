package com.mylifes1110.java.utils;

import javax.servlet.http.Cookie;

public class CookieUtils {
    public static Cookie getCookie(Cookie[] cookies, String cookieName) {
        if ((cookies != null) && (cookies.length != 0)) {
            for (Cookie cookie : cookies) {
                if (cookieName.equals(cookie.getName())) {
                    return cookie;
                }
            }
        }

        return null;
    }
}


