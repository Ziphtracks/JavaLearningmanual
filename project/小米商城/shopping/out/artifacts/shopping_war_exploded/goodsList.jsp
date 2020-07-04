<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
 <meta name="viewport" content="width=device-width, initial-scale=1">
<title>商品列表页</title>
<link href="css/bootstrap.min.css" rel="stylesheet">
<link rel="stylesheet" type="text/css" href="css/login2.css">
   <script type="text/javascript" src="js/jquery.min.js"></script>
   <script type="text/javascript" src="js/bootstrap.min.js"></script>
   
   <style type="text/css">
   	.div1{
   		height:260px;
   		text-align: top;
   	}
   </style>
</head>
<body>
	<%@ include file="header.jsp"%>
	
<div class="panel panel-default" style="margin: 0 auto;width: 95%;">
	<div class="panel-heading">
	    <h3 class="panel-title"><span class="glyphicon glyphicon-th-list"></span>&nbsp;&nbsp;商品列表</h3>
	</div>
	<div class="panel-body">
	   	   <!--列表开始-->
	    <div class="row ${pageBean.totalSize<=0?"div1":"" }">
	    	<c:if test="${pageBean.totalSize<=0 }">没有数据！！！</c:if>
	    	<c:forEach items="${pageBean.list}" var="g" varStatus="i">
		    	<div class="col-sm-3">
				    <div class="thumbnail">
				      <img src="${g.picture}" style="width: 180px;height: 180px;"  alt="小米6" />
				      <div class="caption">
				        <h4><a href="${pageContext.request.contextPath}/goodsservlet?method=selectGoodsById&id=${g.id}">${g.name}</a></h4>
				        <p>热销指数
				        	<c:forEach begin="1" end="${g.star}">
				        		<img src="image/star_red.gif" alt="star"/>
				        	</c:forEach>
				        </p>
				         <p>上架日期:${g.pubdate}</p>
			             <p style="color:orange">价格:${g.price}</p>
				      </div>
				    </div>
				  </div>
	    	</c:forEach>
			  
		</div>
			
			<c:if test="${pageBean.totalSize>0 }">
			<nav aria-label="..." class="text-center">
			  <ul class="pagination">
			  	
			  	<c:if test="${pageBean.currentPage<=1 }">
			  	 	<li class="disabled"><span aria-hidden="true">«</span></li>
			  	</c:if>
			  	<c:if test="${pageBean.currentPage>1 }">
			  	 	<li><a href="${pageContext.request.contextPath }/goodsservlet?method=selectGoodsListByPage&currentPage=${pageBean.pageSize-1}&pageSize=${pageBean.pageSize}&typeId=${typeId}" aria-label="Previous"><span aria-hidden="true">«</span></a></li>
			  	</c:if>
			   
			    <c:forEach var="pn" begin="1" end="${pageBean.totalPage }" step="1">
			    	<c:if test="${pn==pageBean.currentPage }">
			    		<li class="active"><a href="#">${pn }<span class="sr-only">(current)</span></a></li>
			    	</c:if>
			    	<c:if test="${pn!=pageBean.currentPage }">
			    		<li ><a href="${pageContext.request.contextPath }/goodsservlet?method=selectGoodsListByPage&currentPage=${pn }&pageSize=${pageBean.pageSize}&typeId=${typeId}">${pn }</a></li>
			    	</c:if>
			    </c:forEach>
			    
			    <c:if test="${pageBean.currentPage==pageBean.totalPage }">
			     <li class="disabled"><span aria-hidden="true">»</span></li>
			    </c:if>
			      <c:if test="${pageBean.currentPage<pageBean.totalPage }">
			     <li><a href="${pageContext.request.contextPath }/goodsservlet?method=selectGoodsListByPage&currentPage=${pageBean.currentPage+1}&pageSize=${pageBean.pageSize}&typeId=${typeId}" aria-label="Next"><span aria-hidden="true">»</span></a></li>
			    </c:if>

		  </ul>
		</nav>
		</c:if>
   	</div>
</div>
      <!-- 底部 -->
   <%@ include file="footer.jsp"%>

   
</body>
</html>