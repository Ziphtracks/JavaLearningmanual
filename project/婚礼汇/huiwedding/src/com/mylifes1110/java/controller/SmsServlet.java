package com.mylifes1110.java.controller;

import com.aliyuncs.exceptions.ClientException;
import com.mylifes1110.java.utils.SmsUtil;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet(name = "SmsServlet", value = "/sms")
public class SmsServlet extends BaseServlet {
    public void sendSMS(HttpServletRequest request, HttpServletResponse response) throws ClientException {
        String phoneNum = request.getParameter("phoneNum");
        System.out.println(phoneNum);
        //发送短信,存储在Session中
        SmsUtil.sendSms(request.getSession(), phoneNum);
    }
}
