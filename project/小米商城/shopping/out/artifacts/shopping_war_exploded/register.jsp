<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<!DOCTYPE html>
<html>
<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link href="css/bootstrap.min.css" rel="stylesheet">
		<script type="text/javascript" src="js/jquery.min.js"></script>
		<script type="text/javascript" src="js/bootstrap.min.js"></script>
		<script type="text/javascript" src="js/jquery.validate.js"></script>
		<script type="text/javascript" src="js/messages_zh.js"></script>
		
		<link rel="stylesheet" type="text/css" href="css/login.css">
<script type="text/javascript">
	$(function(){
		// 失去焦点事件
		$("#username").blur(function(){
			//使用ajax 做username 的异步验证 checkUsername?username=xxxx
			$.get("userservlet?method=checkUserName","username="+this.value+"&num="+Math.random(),function(data){
				if(data=="1"){
					$("#usernameMsg").html("用户名已经存在").css("color","red");
					$("#registerBtn").attr("disabled",true);
				}else{
                   // alert(data);
					$("#usernameMsg").html("用户名可用").css("color","green");
					$("#registerBtn").removeAttr("disabled");
				}
			})
		});

		//验证
		$("#form1").validate({
			rules:{
				username:"required",
				password:{
				    required:true,
					minlength:6,
					maxlength:16
				},
				repassword:{
				    equalTo:"#password"
				},
				email:"email"
			},
			messages:{
				username:"用户名不能为空"
			}
		});

	})
</script>
<title>注册</title>
</head>
<body>
	<div class="regist">
		<div class="regist_center">
			<div class="regist_top">
				<div class="left fl"><span class="glyphicon glyphicon-user"></span>&nbsp;&nbsp;会员注册</div>
				<div class="right fr">
					<a href="index.jsp" target="_black">小米商城</a>
				</div>
				<div class="clear"></div>
				<div class="xian center"></div>
			</div>
			<div class="center-block" style="margin-top: 80px;">
				<form id="form1" class="form-horizontal" action="userservlet?method=register" method="post">

					<div class="form-group">
						<label class="col-sm-2 control-label">用户名</label>
						<div class="col-sm-8" style="width: 40%">
							<input type="text" id="username" name="username" class="form-control col-sm-10"
								placeholder="Username" />
						</div>
						<div class="col-sm-2">
						<p class="text-danger"><span id="usernameMsg" class="help-block "></span>
							<lable class="error" for="username"></lable>
						</p>
						</div>
					</div>
					<div class="form-group">
						<label class="col-sm-2 control-label">密码</label>
						<div class="col-sm-8" style="width: 40%">
							<input type="password" name="password" id="password"
								class="form-control col-sm-10" placeholder="Password"  />
						</div>
						<div class="col-sm-2">
						<p class="text-danger"><span id="passwordMsg" class="help-block ">请输入6位以上字符</span></p>
						</div>
					</div>
					<div class="form-group">
						<label class="col-sm-2 control-label">确认密码</label>
						<div class="col-sm-8" style="width: 40%">
							<input type="password" name="repassword" class="form-control col-sm-10"
								placeholder="Password Again" />
						</div>
						<div class="col-sm-2">
						<p class="text-danger"><span id="repasswordMsg" class="help-block ">两次密码要输入一致哦</span></p>
						</div>
					</div>

					<div class="form-group">
						<label class="col-sm-2 control-label">邮箱</label>
						<div class="col-sm-8" style="width: 40%">
							<input type="email" name="email" class="form-control col-sm-10"
								placeholder="Email" />
						</div>
						<div class="col-sm-2">
						<p class="text-danger"><span id="emailMsg" class="help-block ">填写正确邮箱格式</span></p>
						</div>
					</div>
					<div class="form-group">
						<label class="col-sm-2 control-label">性别</label>
						<div class="col-sm-8" style="width: 40%">
							<label class="radio-inline"> <input type="radio"
								name="gender" value="男" checked="checked"> 男
							</label> <label class="radio-inline"> <input type="radio"
								name="gender" value="女"> 女
							</label>
						</div>
						<div class="col-sm-2">
						<p class="text-danger"><span id="genderMsg" class="help-block ">你是帅哥 还是美女</span></p>
						</div>
					</div>
					<hr>
					<div class="form-group">
						<div class="col-sm-7 col-sm-push-2">
							<input id="registerBtn" type="submit" value="注册" class="btn btn-primary  btn-lg" style="width: 200px;" disabled/> &nbsp; &nbsp;
							<input type="reset" value="重置" class="btn btn-default  btn-lg" style="width: 200px;"  />
						</div>
					</div>
					<div class="text-center" style="color:red">${registerMsg}</div>
				</form>

			</div>
		</div>
	</div>
	
</body>
</html>