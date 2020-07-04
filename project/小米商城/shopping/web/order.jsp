<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
 <meta name="viewport" content="width=device-width, initial-scale=1">
<title>订单预览页面</title>
<link rel="stylesheet" type="text/css" href="css/login2.css">
<link rel="stylesheet" href="css/bootstrap.min.css" />
<script src="js/jquery.min.js"></script>
<script src="js/bootstrap.min.js"></script>
<script type="text/javascript">
	$(function(){
		$("#btn_add").click(function(){
			location.href = "orderservlet?method=addOrder&aid="+$("#address").val();
		})
	})
</script>
</head>
<body style="background-color:#f5f5f5">
<%@ include file="header.jsp"%>
<div class="container" style="background-color: white;">
	<div class="row" style="margin-left: 40px">
		<h3>订单预览<small>温馨提示：请添加你要邮递到的地址</small></h3>
	</div>
	<div class="row" style="margin-top: 40px;">
		<div class="col-md-10 col-md-offset-1">
			<table class="table table-bordered table-striped table-hover">
 				<tr>
 					<th>序号</th>
 					<th>商品名称</th>
 					<th>价格</th>
 					<th>数量</th>
 					<th>小计</th>
 					
 				</tr>
 				<c:set value="0" var="sum"></c:set>
 				<c:forEach items="${cartItems}" var="c" varStatus="i">
	 				<tr>
	 					<th>${i.count}</th>
	 					<th>${c.goods.name}</th>
	 					<th>${c.goods.price}</th>
	 					<th>${c.num}</th>
	 					<th>${c.money}</th>
	 				</tr>
	 				<c:set var="sum" value="${sum+c.money}"></c:set>
 				</c:forEach>
 				<tr>
 				 <td colspan="5">
 				 	<h5>收货地址</h5>
 				 	<select id="address" style="width:60%" class="form-control">
 				 		<c:forEach items="${addList}" var="a" varStatus="ai">
 				 			
 				 			<option value="${a.id}" ${a.level==1?"selected":"" } >${a.name}&nbsp;&nbsp;${a.phone}&nbsp;&nbsp;${a.detail}</option>
 				 		</c:forEach>
 				 	</select>
 				 	<c:if test="${empty addList}">
 				 		<a href="self_info.jsp">添加收货地址</a>
 				 	</c:if>
 				 </td>
 				</tr>
			</table>
		</div>
	</div>
	<hr>
	<div class="row">
		<div style="margin-left: 40px;">	  
	            <h4>商品金额总计：<span id="total" class="text-danger"><b>￥&nbsp;&nbsp;${sum}</b></span></h4>
		</div>
	</div>
	<div class="row pull-right" style="margin-right: 40px;">
		 <div style="margin-bottom: 20px;">
	            <button  id="btn_add" class="btn  btn-danger btn-lg" type="button">提交订单</button>
	     </div>
	</div>
</div>
	
    
<!-- 底部 -->
<%@ include file="footer.jsp"%>

</body>
</html>