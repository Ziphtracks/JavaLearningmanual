<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ page import="java.util.Random" %>
<%@ page import="java.io.OutputStream" %>
<%@ page import="java.awt.Color" %>
<%@ page import="java.awt.Font" %>
<%@ page import="java.awt.Graphics" %>
<%@ page import="java.awt.image.BufferedImage" %>
<%@ page import="javax.imageio.ImageIO" %>
<%
    int width = 60;//定义图片宽度
    int height = 32;//定义图片高度
    //创建图片对象
    BufferedImage image = new BufferedImage(width, height, BufferedImage.TYPE_INT_RGB);
    //创建画笔对象(swing组件)
    Graphics graphics = image.getGraphics();
    //设置背景颜色
    graphics.setColor(new Color(0xDCDCDC));
    //设置填充背景为实心矩形
    graphics.fillRect(0, 0, width, height);
    //设置边框颜色
    graphics.setColor(Color.black);
    //画一个空心矩形边框
    graphics.drawRect(0, 0, width - 1, height - 1);
    //创建随即对象
    Random random = new Random();
    //画干扰线（准确来说是干扰椭圆）
    for (int i = 0; i < 50; i++) {
        int x = random.nextInt(width);
        int y = random.nextInt(height);
        graphics.drawOval(x, y, 0, 0);
    }
    //产生随机数并把随机数转换为十六进制字符串
    String s = Integer.toHexString(random.nextInt());
    //生成四位随机验证码
    String captcha = s.substring(0, 4);
    //将产生的验证码存储到Session中，方便以后进行验证码校验从Session中取出
	session.setAttribute("key", captcha);
    //控制台打印验证码查看
    System.out.println(captcha);
    //为画笔设置颜色
    graphics.setColor(new Color(0, 100, 0));
    //为画笔设置字体格式
    graphics.setFont(new Font("Candara", Font.BOLD, 24));
    //画四位随机数
    graphics.drawString(captcha, 8, 24);
    graphics.dispose();
    //将图片响应到浏览器(多媒体图片类型-mimeType)
    response.setContentType("image/jpeg");
    out.clear();
	out = pageContext.pushBody();
    //使用字节流把图片写出到浏览器
    OutputStream stream = response.getOutputStream();
    ImageIO.write(image, "jpeg", stream);
    //关闭字节流
    stream.close();
%>