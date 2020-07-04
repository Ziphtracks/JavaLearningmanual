package com.mylifes1110.java.utils;

import com.mylifes1110.java.bean.User;

import javax.mail.Message;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import java.util.Date;
import java.util.Properties;

public class EmailUtils {
    public static void sendMessage(User user) {
        //1. 创建Properties对象.        ->      设置连接邮箱服务器的信息.
        Properties props = new Properties();
        //1.1 设置发送邮件的协议.        smtp -> simple mail transport protocol
        props.setProperty("mail.transport.protocol","smtp");
        //1.2 设置邮件服务器的地址.     126邮箱 -> smtp.126.com
        props.setProperty("mail.smtp.host","smtp.163.com");
        //1.3 设置是否需要权限校验.     需要.
        props.setProperty("mail.smtp.auth","true");
        //2.1 创建Session对象            ->      获取连接邮箱服务器的session对象.
        Session session = Session.getDefaultInstance(props);
        //2.2 设置发送邮件时,打印详细信息
        session.setDebug(true);
        try {
            //3. 创建邮件
            MimeMessage message = createMessage(session,user);
            //4. 获取发送邮件的对象.
            Transport transport = session.getTransport();
            //5. 设置邮件用户名和密码(授权码)
            transport.connect("mylifes1110@163.com","YDTDSNZTOCFWEXWF");
            //6. 发送邮件
            transport.sendMessage(message,message.getAllRecipients());
            //7. 释放资源
            transport.close();
        } catch (Exception e) {
            e.printStackTrace();
            throw new RuntimeException("发送邮件失败!!");
        }
    }


    public static MimeMessage createMessage(Session session,User user) throws Exception {
        //3. 创建MimeMessage邮件对象.   ->      邮件
        MimeMessage message = new MimeMessage(session);
        //4. 设置邮件的发件人.
        message.setFrom(new InternetAddress("mylifes1110@163.com","Ziph","UTF-8"));
        //5. 设置邮件的收件人.
//        message.setRecipients(Message.RecipientType.TO,user.getEmail());
        message.setRecipients(Message.RecipientType.TO,user.getEmail());
        //6. 设置邮件的主题.
        message.setSubject("小米商城账号激活邮件");
//        http://localhost:8080/xiaomi/userservlet?method=active&email=user.getEmail()&code=user.getCode()
        String url = "http://127.0.0.1:8080/userservlet?method=active&email=" + Base64Utils.encode(user.getEmail()) + "&code=" + Base64Utils.encode(user.getCode());
        System.out.println(url);
        //7. 设置邮件的内容.
        message.setContent(user.getUsername() + ",您好<br /> 欢迎注册小米商城! 请点击链接进行激活:<a href='"+url+"'>"+url+"</a>","text/html;charset=UTF-8");
        //8. 设置邮件的发送时间.
        message.setSentDate(new Date());
        //9. 保存邮件.
        message.saveChanges();
        //10. 返回邮件
        return message;
    }


}
