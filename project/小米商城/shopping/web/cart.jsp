<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
 <meta name="viewport" content="width=device-width, initial-scale=1">
<title>购物车</title>
<link href="css/bootstrap.min.css" rel="stylesheet">
<link rel="stylesheet" type="text/css" href="css/login2.css">
<script type="text/javascript" src="js/jquery.min.js"></script>
   <script type="text/javascript" src="js/bootstrap.min.js"></script>



<script type="text/javascript">
	function pNum(pid,p,no){
		$.ajax({
			url:"cartservlet?method=addCartAjax&goodsId="+pid+"&number=1",
			method:"get",
			success:function(){
				location.href = "cartservlet?method=selectCart";
			},
			error:function(){
				alert("服务器异常");
			}
		})
	}
	function mNum(pid,p,no){
		var num = -1; //数量
		var nums = $("#num_count"+no).val();
		if(Number(nums)<=1){
			if(!confirm("确认要删除吗?")){
				return;
			}
		}
		$.ajax({
			url:"cartservlet?method=addCartAjax&goodsId="+pid+"&number="+num,
			method:"get",
			success:function(){
				location.href = "cartservlet?method=selectCart";
			},
			error:function(){
				alert("服务器异常");
			}
		})
	}
	function deleteCart(pid){
		if(confirm("确认要删除吗")){
			$.ajax({
				url:"cartservlet?method=addCartAjax&goodsId="+pid+"&number=0",
				method:"get",
				success:function(){
					location.href = "cartservlet?method=selectCart";
				},
				error:function(){
					alert("服务器异常");
				}
			})
		}
	}
	
	function clearCart(){
		if(confirm("确定要清空吗")){
			$.ajax({
				url:"cartservlet?method=clearCartAjax",
				method:"get",
				success:function(){
					location.href = "cartservlet?method=selectCart";
				},
				error:function(){
					alert("服务器异常");
				}
			})
		}
	}
</script>
</head>
<body style="background-color:#f5f5f5">
<%@ include file="header.jsp"%>
<div class="container" style="background-color: white;">
	<div class="row" style="margin-left: 40px">
		<h3>我的购物车<small>温馨提示：产品是否购买成功，以最终下单为准哦，请尽快结算</small></h3>
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
 					<th>操作</th>
 				</tr>
 				<c:set value="0" var="sum"></c:set>
 				<c:forEach items="${cartItems}" var="c" varStatus="i">
	 				<tr>
	 					<th>${i.count}</th>
	 					<th>${c.goods.name}</th>
	 					<th>${c.goods.price}</th>
	 					<th width="100px">
		 					<div class="input-group">
		 						<span class="input-group-btn">
		 							<button class="btn btn-default" type="button" onclick="mNum(${c.goods.id},${c.goods.price},${i.count})">-</button>
		 						</span>
		 						<input type="text" class="form-control" id="num_count${i.count}" value="${c.num}" readonly="readonly" style="width:40px">
		 						<span class="input-group-btn">
		 							<button class="btn btn-default" type="button" onclick="pNum(${c.goods.id},${c.goods.price},${i.count})">+</button>
		 						</span>
	 						</div>
	 					</th>
	 					<th>¥&nbsp;${c.money }</th>
	 					<th>
	 						<button type="button" class="btn btn-default" onclick="deleteCart(${c.goods.id})">删除</button>
	 					</th>
	 				</tr>
	 				<c:set var="sum" value="${sum+c.money}"></c:set>
 				</c:forEach>
			</table>
		</div>
	</div>
	<hr>
	<div class="row">
		<div class="pull-right" style="margin-right: 40px;">
			
	            <div>
	            	<a id="removeAllProduct" href="javascript:clearCart()" class="btn btn-default btn-lg">清空购物车</a>
	            	&nbsp;&nbsp;
	            	<a href="${pageContext.request.contextPath}/orderservlet?method=selectOrderView" class="btn  btn-danger btn-lg">结账</a>
	            	
	            </div>
	            <br><br>
	            <div style="margin-bottom: 20px;">        		  
	            	商品金额总计：<span id="total" class="text-danger"><b>￥&nbsp;&nbsp;${sum}</b></span>
	            </div>
		</div>
	</div>
</div>
	
    
<!-- 底部 -->
<%@ include file="footer.jsp"%>


</body>
</html>