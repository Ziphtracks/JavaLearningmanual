<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<link rel="stylesheet" href="${pageContext.request.contextPath}/css/login2.css">
<link href="${pageContext.request.contextPath}/css/bootstrap.min.css" rel="stylesheet" type="text/css">
<title>小米商城首页</title>
 <script type="text/javascript" src="${pageContext.request.contextPath}/js/jquery.min.js"></script>
    <script type="text/javascript" src="${pageContext.request.contextPath}/js/bootstrap.min.js"></script>
</head>
<body>
<%@ include file="header.jsp"%>
<!--网站中间内容开始-->
<div id="thred">
      <img src="image/banner2.jpg" width="1230" height="460" />
</div>
   <div id="forth">
   		<span>
        	<a href=""><img src="image/hjh_01.gif" /></a>
            <a href=""><img src="image/hjh_02.gif" /></a>
            <a href=""><img src="image/hjh_03.gif" /></a>
            <a href=""><img src="image/hjh_04.gif" /></a>
            <a href=""><img src="image/hjh_05.gif" /></a>
            <a href=""><img src="image/hjh_06.gif" /></a>
        </span>
        <a href="" id="a_left"><img src="image/hongmi4x.png" width="316" height="170" /></a>
        <a href="" id="a_left"><img src="image/xiaomi5.jpg" width="316" height="170" /></a>
    	<a href="" id="a_left"><img src="image/pinghengche.jpg" width="316" height="170" /></a>
   </div>
   <div id="fifth">
   		<span id="fif_text">小米明星单品</span>
   </div>
    <div id="sixth">
            <span style="margin-left:0px; border-top:#ffa500 1px solid">
            	<a href="" id="siximg"><img src="image/pinpai1.png" width="234" height="234" /></a>
            	<a href="" id="na">小米MIX</a>
                <p id="chip">5月9日-21日享花呗12期分期免息</p>
                <p id="pri">3499元起</p>
            </span>
            <span style=" border-top:#008000 1px solid">
            	<a href="" id="siximg"><img src="image/pinpai2.png" width="234" height="234" /></a>
                <a href="" id="na">小米MIX</a>
                <p id="chip">5月9日-21日享花呗12期分期免息</p>
                <p id="pri">3499元起</p>
            </span>
            <span style="border-top:#0000ff 1px solid">
            	<a href="" id="siximg"><img src="image/pinpai3.png" width="234" height="234" /></a>
                <a href="" id="na">小米MIX</a>
                <p id="chip">5月9日-21日享花呗12期分期免息</p>
                <p id="pri">3499元起</p>
            </span>
            <span style="border-top:#ff0000 1px solid">
            	<a href="" id="siximg"><img src="image/pinpai4.png" width="234" height="234" /></a>
                <a href="" id="na">小米MIX</a>
                <p id="chip">5月9日-21日享花呗12期分期免息</p>
                <p id="pri">3499元起</p>
            </span>
            <span style="border-top:#008080 1px solid">
            	<a href="" id="siximg"><img src="image/pinpai5.png" width="234" height="234" /></a>
                <a href="" id="na">小米MIX</a>
                <p id="chip">5月9日-21日享花呗12期分期免息</p>
                <p id="pri">3499元起</p>
            </span>
    </div>
   <!-- 底部 -->
   <%@ include file="footer.jsp"%>
</body>
</html>