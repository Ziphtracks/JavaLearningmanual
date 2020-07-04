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
		function showOrder(orderId){
			location.href="${pageContext.request.contextPath}/orderservlet?method=getOrderDetail&oid="+orderId;
		}
		function changeStatus(orderId){
			location.href="${pageContext.request.contextPath}/changeStatus?oid="+orderId;
		}
	</script>
</head>
<body style="background-color:#f5f5f5">
<%@ include file="header.jsp"%>

<div class="container" style="background-color: white;">
	<div class="row" style="margin-left: 40px">
		<h3>我的订单列表&nbsp;&nbsp;
		<small>温馨提示：<em>${user.username}</em>有<font color="red">${orderList.size()}</font>个订单</small></h3>
	</div>
	<div class="row" style="margin-top: 40px;">
		<div class="col-md-12">
			<table id="tb_list" class="table table-striped table-hover table-bordered table-condensed">
			<tr>
				<th>序号</th>
				<th>订单编号</th>
				<th>总金额</th>
				<th>订单状态</th>
				<th>订单时间</th>
				<th>收货地址</th>
				<th>操作</th>
			</tr>
			<c:forEach items="${orderList}" var="order" varStatus="i">
				<tr>
					<th>${i.count}</th>
					<th>${order.id}</th>
					<th>${order.money}</th>
					<th>
						<font color="red">
							<c:if test="${order.status eq 1 }">
								未支付
							</c:if>
							<c:if test="${order.status eq 2 }">
								已支付,待发货
							</c:if>
							<c:if test="${order.status eq 3 }">
								已发货,待收货
							</c:if>
							<c:if test="${order.status eq 4 }">
								订单完成
							</c:if>
						</font>
					</th>
					<th>${order.time}</th>
					<th>${address.detail}</th>
					<th>
						<button type="button" class="btn btn-danger btn-sm" onclick="showOrder('${order.id}')">订单详情</button>
						<c:if test="${order.status eq 3 }">
							<button type="button" class="btn btn-warning btn-sm" onclick="changeStatus('${order.id}')">确认收货</button>
						</c:if>
					</th>
				</tr>
			</c:forEach>
		</table>
		</div>
	</div>
	
</div>
	
    
<!-- 底部 -->
<%@ include file="footer.jsp"%>

</body>
</html>