<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
<meta charset="utf-8">
<title>立即购买</title>
<link href="${pageContext.request.contextPath}/css/wedding-3.css" rel="stylesheet"/>
<link href="${pageContext.request.contextPath}/css/wedding-2.css" rel="stylesheet"/>
</head>
<body>
	<div id="public-navbar">
    	<div class="layout_center layout_clear" style="overflow:visible">
        	<div class="layout_fl">你好，欢迎来到 婚礼汇</div>
        	<ul class="layout_fr fl_li">
            	<li>
                	<div class="use-layout">
                    	<a>
                    		<span class="use-status" id="member_center">会员中心</span>
                        </a>
                        <div class="use-option" id="login_register">
                        	<a href="login.jsp">会员登录</a>
                            <a href="register.jsp">免费注册</a>
                        </div>
                        <i class="use-arrow page_icon"></i>
                    </div>
                </li>
                <li>
                	<span class="use-hr"></span>
                </li>
                <li>
                	<a href="ShowShoppingCartServlet.do">我的购物车</a>
                </li>
                <li>
                	<span class="use-hr"></span>
                </li>
                <li>
                	<div class="use-layout">
                    	<a>
                    		<span class="use-status">商户平台</span>
                        </a>
                       	<div class="use-option" style="display: none;">
                       		<a>商户登录</a>
                           	<a>免费入驻</a>
                       	</div>
                        <i class="use-arrow page_icon"></i>
                    </div>
                </li>
                <li>
                	<span class="use-hr"></span>
                </li>
                <li>
                	<a>联系我们</a>
                </li>
            </ul>
    	</div>
    </div>
    <div id="public-toolbar" class="hidden_active">
    	<div class="layout_center layout_clear">
        	<div class="page-logo layout_fl"><a href="wedding.jsp"><img src="${pageContext.request.contextPath}/img/rxT54692503vu.jpg"></a></div>
            <div class="page-search layout_fl">
            	<div class="page-search-bar layout_clear">
                	<div class="page-search-text layout_fl">
                    	<input type="text" class="search-cover" placeholder="搜索产品或店铺">
                    </div>
                    <div class="page-search-btn layout_fl">
                    	<input type="button" value="搜索" class="search-button">
                    </div>
                </div>
                <ul class="page-search-key layout_clear fl_li" >
                    <li class="search-key-ous">大家都在搜：</li>
                    <li><a>酒店</a></li>
                    <li><a>婚纱</a></li>
                    <li><a>婚庆用车</a></li>
                    <li><a>度假</a></li>
                </ul>
            </div>
            <div class="page-release layout_fl">
                    	<a>立即发布需求</a>
                    </div>
            <div class="page-tels layout_fr">
            	<span class="tel-show">全国免费咨询热线</span>
                <span class="tel-pink"><strong>023-6766-4541</strong></span>
            </div>
        </div>
    </div>
    <div id="page-middle-bar" class="user_adjust_topbar">
    	<div class="layout_center layout_clear">
        	<ul class="layout_clear layout_fl fl_li">
            	<li><a href="wedding.jsp">首页</a></li>
                <li><a href="HotelInfoServlet.do">婚宴场地</a></li>
                <li><a>婚纱摄影</a></li>
                <li><a>婚庆用车</a></li>
                <li><a>婚庆公司</a></li>
                <li><a>婚具租赁</a></li>
                <li><a>定制人员</a></li>
                <li><a>婚品商城</a></li>
                <li><a>蜜月度假</a></li>
                <li><a>视频秀</a></li>
            </ul>
        </div>
    </div>
    <div id="page_Auser">
    	<div class="layout_center layout_clear">
        	<div id="us_fr" class="us_adjust_fr us_adjust_fr_bg">
            	<div class="us_ChildPage us_adjust_padding2">
                	<div class="us_unit_list">
                    	<div class="leves-levesbar user-play">
                        	<div class="leves-levesbar-wrap">
                            	<div class="leves-levesbar-item leves-next-step">
                                	<span class="leves-circles">1</span><span class="leves-text">确认订单</span>
                                </div>
                                <div class="leves-levesbar-item">
                                	<span class="leves-circles">2</span><span class="leves-text">付款</span>
                                </div>
                                <div class="leves-levesbar-item">
                                    <span class="leves-circles">3</span><span class="leves-text">付款成功</span>
                                </div>
                        	</div>
                    	</div>
                        <div class="us_unit_list">
                            <h3 class="title">收货地址</h3>
                            <div class="us_play_unit us_play_address">
                            <div class="address_text"><p class="address_words">还没有设置默认收货地址</p></div>
                            <div class="address_add"><a href="javascript:;" id="new-address">新增收货地址</a></div>
                        </div>
                 	</div>
                 	<div class="us_unit_list">
                 		<h3 class="title">商品及服务信息</h3>
						<div class="us_play_unit us_unit_table" data-table="24166867474429">
	  						<div class="us_order_line">
                        		<span>2017-05-04 15:21:13</span> <span>订单号：24166867474429</span> <span>重庆南温泉丽筠酒店</span>
                      		</div>
                          	<table>
                            	<tbody>
                                    <tr>
                                        <td><span class="cos_span">商品信息</span></td>
                                        <td><span class="cos_span">套餐类型/婚宴场地</span></td>
                                        <td><span class="cos_span">单价</span></td>
                                        <td><span class="cos_span">数量</span></td>
                                        <td><span class="cos_span">小计</span></td>
                                        <td><span class="cos_span">状态</span></td>
                                        <td><span class="cos_span">操作</span></td>
                                    </tr>
                                    <tr>
                                        <td><div class="img"><img src="http://www.119hqw.com/img/GoodsIco/ZBO58408845Lm.jpg" style="width:100px;"> <span>1699元套餐</span> </div></td>
                                        <td><span class="cos_span">套餐类型：A款</span> <span class="cos_span">婚宴场地：龙泉厅</span> </td>
                                        <td><span class="cos_span" style="display:block"><ins>1999.00</ins></span> <span class="cos_span">1699.00</span></td>
                                        <td>
                                            <span class="cos_span">
                                                <span class="amont_line">
                                                    <span class="amont_line_btn amont_line_reduce" data-buy-cut="24166867474429" data-type="pay">-</span>
                                                    <span class="amont_line_text" data-buy-num="24166867474429">1</span>
                                                    <span class="amont_line_btn amont_line_push" data-buy-add="24166867474429" data-type="pay">+</span>
                                                </span>
                                            </span>
                                        </td>
                                        <td><span class="cos_span"><em class="keyword-pink" data-price-id="24166867474429">1699.00</em></span></td>
                                        <td><span class="cos_span">已选定</span></td>
                                        <td><span class="cos_span"><a href="javascript:;" data-collect-goods="{CollectGoodsid:&quot;XqS58408837QL&quot;}">移入收藏夹</a>/<a href="javascript:;" data-buy-del="24166867474429">删除</a></span></td>
                                    </tr>
                          		</tbody>
                      		</table>
						</div>
						<div class="us_play_unit">
                			<span class="cos_span">订单备注：</span>
                    		<span class="cos_span">
                    			<input type="text" class="us_input us_input_long" maxlength="50" placeholder="限50字以内(订制类商品或服务类商品在备注中详细说明)">
                    		</span>
                			<span class="cos_span" style="color:#aaa">提示：请忽填写有关支付，收货，发票方面的信息</span>
            			</div>
            		</div>
                    <div class="us_unit_list">
                    	<h3 class="title">支付方式</h3>
                        <div class="us_play_unit">
                        	<span class="cos_span pay">
                            	<a href="javascript:;" class="us_button_hold us_button" data-pay-type="wx">微信支付</a>
                           	</span>
                            <span class="cos_span pay">
                                <a href="javascript:;" class="us_button_hold us_button" data-pay-type="zfb">支付宝支付</a>
                            </span>
                        </div>
                   	</div>
                    <div class="us_unit_list" style="display: none;">
                    	<h3 class="title">发票信息</h3>
                        <div class="us_play_unit">
                        	<span class="cos_span">普通发票(纸质)</span>
                            <span class="cos_span">
                            	<a href="javascript:;">个人</a>
                            </span>
                            <span class="cos_span">
                                 <a href="javascript:;">明细</a>
                            </span>
                            <span class="cos_span">
                            	<a href="javascript:;">修改</a>
                            </span>
                        </div>
                   	</div>
                    <div class="us_unit_list">
                    	<div class="us_play_unit us_play_go">
                        	<p>
                            	<span class="cos_span">应收金额：</span>
                                <span class="cos_span"><em id="AllPrice" data-pay-id="all">￥1699.00</em></span>
                            </p>
                            </div>
                        </div>
            			<div class="us_unit_list us_unit_list_down">
                            <div class="us_play_unit us_play_btn">
                                <span class="cos_span">提交订单后请尽快支付</span>
                                <span class="cos_span"><a href="javascript:;" class="us_button" id="SubOrderPay">立即支付</a></span>
                            </div>
            			</div>
        			</div>
      			</div>
    		</div>
    	</div>
	</div>
    <div class="page-footer">
    	<div class="layout_center">
        	<div class="footer-list">
            	<dl class="footer-item">
                	<h3>新手上路</h3>
                    <a  >
                    	<dd><b></b>如何注册</dd>
                    </a>
                    <a  >
                    	<dd><b></b>如何登录</dd>
                    </a>
                    <a  >
                    	<dd><b></b>如何预订</dd>
                    </a>
                    <a  >
                    	<dd><b></b>购物流程</dd>
                    </a>
                    <a  >
                    	<dd><b></b>预订须知</dd>
                    </a>
                </dl>
                <dl class="footer-item">
                	<h3>公司信息</h3>
                    <a  >
                    	<dd><b></b>关于我们</dd>
                    </a>
                    <a  >
                    	<dd><b></b>用户协议</dd>
                    </a>
                    <a  >
                    	<dd><b></b>隐私申明</dd>
                    </a>
                    <a  >
                    	<dd><b></b>商家入驻协议</dd>
                    </a>
                    <a  >
                    	<dd><b></b>安全须知</dd>
                    </a>
                </dl>
                <dl class="footer-item">
                	<h3>合作联系</h3>
                    <a  >
                    	<dd><b></b>联系我们</dd>
                    </a>
                    <a  >
                    	<dd><b></b>招商加盟</dd>
                    </a>
                    <a  >
                    	<dd><b></b>商户平台</dd>
                    </a>
                    <a  >
                    	<dd><b></b>招聘信息</dd>
                    </a>
                </dl>
                <dl class="footer-item">
                	<h3>帮助中心</h3>
                    <a  >
                    	<dd><b></b>忘记密码</dd>
                    </a>
                    <a  >
                    	<dd><b></b>常见问题</dd>
                    </a>
                    <a  >
                    	<dd><b></b>在线客服</dd>
                    </a>
                    <a  >
                    	<dd><b></b>如何上传产品</dd>
                    </a>
                    <a  >
                    	<dd><b></b>如何成为商家</dd>
                    </a>
                </dl>
                <div class="footer-mobile">
                	<img src="${pageContext.request.contextPath}/img/SVT58398773Nz.jpg">
                    <h2>官方微信</h2>
                </div>
            </div>
            <div class="footer-data0">
            	<a><i class="footer-ad0" title="可信网站身份验证"></i></a>
                <a><i class="footer-ad1" title="重庆网警备案"></i></a>
                <a><i class="footer-ad2" title="重庆工商行政管理"></i></a>
                <a><i class="footer-ad3" title="安全联盟认证"></i></a>
            </div>
            <div class="footer-data1">
            	友情链接：
            	<a href="https://www.baidu.com/" target="_blank">百度</a>
                <em>|</em>
                <a href="https://www.taobao.com/">淘宝</a>
            </div>
            <div class="footer-data2">
            	 CopyRight 2016 婚礼汇 All Rights Reserved
                 <a href="Untitled-2.html">渝ICP备14001673号</a>
            </div>
        </div>
    </div>
    <a target="_blank" title="联系我们" href="Untitled-2.html">
    	<span id="askus">&nbsp;</span>
    </a>
    <div id="gotop" title="返回顶部" style="display:block; background:url(${pageContext.request.contextPath}/img/gotop.png) -70px 0px no-repeat"></div>
</body>
</html>
