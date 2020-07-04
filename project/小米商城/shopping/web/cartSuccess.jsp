<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
 <meta name="viewport" content="width=device-width, initial-scale=1">
<title>购物车</title>
<link href="css/bootstrap.min.css" rel="stylesheet">
<link rel="stylesheet" type="text/css" href="css/login2.css">
<script type="text/javascript" src="js/jquery.min.js"></script>

</head>
<body>
<%@ include file="header.jsp" %>

<div class="container">
<hr>
	<div class="row" style="width: 30%;margin: 0 auto;padding-top: 20px">
		<div class="panel panel-success">
			<div class="panel-heading">
			    <h3 class="panel-title">购物车提示</h3>
			</div>
			<div class="panel-body">
			    <h3 class="text-default"><span class="glyphicon glyphicon-ok-sign"></span>&nbsp;&nbsp;&nbsp;&nbsp;添加购物车成功!!</h3>
				<hr>
				<a href="${pageContext.request.contextPath}/cartservlet?method=selectCart" class="btn btn-primary">查看购物车</a>&nbsp;&nbsp;&nbsp;&nbsp;
				<a href="${pageContext.request.contextPath}/index.jsp" class="btn btn-default">继续购物</a>
			</div>
		</div>
		
	</div>
	
</div>

<%@ include file="footer.jsp" %>
</body>
</html>