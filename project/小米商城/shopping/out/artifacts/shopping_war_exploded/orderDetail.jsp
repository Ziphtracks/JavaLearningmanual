<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page language="java" contentType="text/html; charset=utf-8"
		 pageEncoding="utf-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>订单列表页面</title>
	<link rel="stylesheet" type="text/css" href="css/login2.css">
	<link rel="stylesheet" href="css/bootstrap.min.css" />
	<script src="js/jquery.min.js"></script>
	<script src="js/bootstrap.min.js"></script>
	<script type="text/javascript">
		function pay(orderId,money){
			location.href="pay.jsp?oid="+orderId+"&omoney="+money;
		}
		function payWeiXin(orderId,money){
			location.href="payWeixin.jsp?oid="+orderId+"&omoney="+money;
		}
	</script>
</head>
<body style="background-color:#f5f5f5">
<%@ include file="header.jsp"%>
<div class="panel panel-default" style="margin: 0 auto;width: 95%;">
	<div class="panel-heading">
	    <h3 class="panel-title"><span class="glyphicon glyphicon-equalizer"></span>&nbsp;&nbsp;订单详情</h3>
	</div>
	<div class="panel-body">
	<table cellpadding="0" cellspacing="0" align="center" width="100%" class="table table-striped table-bordered table-hover">

		<tr>
			<td>订单编号:</td>
			<td>${vo.order.id}</td>
			<td>订单时间:</td>
			<td>${vo.order.time}</td>
		</tr>
		<tr>
			<td>收件人:</td>
			<td>${vo.address.name}</td>
			<td>联系电话:</td>
			<td>${vo.address.phone}</td>
		</tr>
		<tr>
			<td>送货地址:</td>
			<td>${vo.address.detail}</td>
			<td>总价:</td>
			<td>${vo.order.money}</td>
		</tr>
		<tr>
			<td align="center">商品列表:</td>
			<td colspan="3">
				<table align="center" cellpadding="0" cellspacing="0" width="100%"  class="table table-striped table-bordered table-hover">
					<tr align="center"  class="info">
						<th>序号</th>
						<th>商品封面</th>
						<th>商品名称</th>
						<th>商品评分</th>
						<th>商品日期</th>
						<th>商品单价</th>
						<th>购买数量</th>
						<th>小计</th>
					</tr>
					<c:forEach items="${vo.orderDetails}" var="item" varStatus="i">
						<tr align="center">
							<th>${i.count}</th>
							<th>
								<img src="${item.goods.picture}" style="width:50px;height:50px" >
							</th>
							<th>${item.goods.name}</th>
							<th>${item.goods.star}</th>
							<th>${item.goods.pubdate}</th>
							<th>${item.goods.price}</th>
							<th>${item.num}</th>
							<th>${item.money}</th>
						</tr>
					</c:forEach>
				</table>
			</td>
		</tr>
		<tr>
			<td align="right" colspan="4" style="margin-right: 40px;">
				<a href="${pageContext.request.contextPath }/orderservlet?method=getOrderList" class="btn btn-danger btn-sm">返回订单列表</a>
				&nbsp;&nbsp;
				<c:if test="${vo.order.status eq 1 }">
					<button type="button" onclick="pay('${vo.order.id}','${vo.order.money}')" class="btn btn-warning btn-sm">易付宝支付</button>
						&nbsp;&nbsp;
					<button type="button" onclick="payWeiXin('${vo.order.id}','${vo.order.money}')" class="btn btn-success btn-sm">微信支付</button>
				</c:if>
			</td>
		</tr>
	</table>
	</div>
</div>
<%@ include file="footer.jsp" %>
</body>
</html>