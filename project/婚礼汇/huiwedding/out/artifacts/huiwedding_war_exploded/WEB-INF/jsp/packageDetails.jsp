<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <meta charset="utf-8">
    <title>套餐详情</title>
    <link href="${pageContext.request.contextPath}/css/wedding-3.css" rel="stylesheet"/>
    <script src="${pageContext.request.contextPath}/js/jquery-3.2.1.min.js"></script>
    <script type="text/javascript">
        function menuClick(id) {
            //选中点击的选项
            var check = $("#" + id).attr("class");
            if (check != "check") {
                $("#menu li").each(function (index) {
                    $(this).attr("class", "");
                });
                $("#" + id).attr("class", "check");
            }
        }

        function roomClick(roomId) {
            console.log("roomClick" + roomId);
            var check = $("#" + roomId).attr("class");
            if (check != "check") {
                $("#room li").each(function (index) {
                    $(this).attr("class", "");
                });
                $("#" + roomId).attr("class", "check");
            }
        }

        function plus() {
            var count = $("#count").val();
            if (count >= 0 && count < 99) {
                count++;
                $("#count").val(count);
            }
        }

        function reduce() {
            var count = $("#count").val();
            if (count > 1 && count <= 99) {
                count--;
                $("#count").val(count);
            }
        }

        function addCart() {
            var shoppingcart_time = getTime();
            var shoppingcart_type = $("#menu li[class='check']").text();
            var shoppingcart_place = $("#room li[class='check']").text();
            var shoppingcart_count = $("#count").val();
            $.post("${pageContext.request.contextPath}/cart", {
                "methodName": "addCart",
                "shoppingcart_time": shoppingcart_time,
                "shoppingcart_name": "${packages.package_name}",
                "shoppingcart_type": shoppingcart_type,
                "shoppingcart_place": shoppingcart_place,
                "shoppingcart_price": "${packages.package_price}",
                "shoppingcart_count": shoppingcart_count,
                "shoppingcart_img": "${packages.img.img_add}",
                "shoppingcart_hotelname": "${hotel.hotel_name}"
            }, function (data) {
                console.log(data);
                if (data.flag) {
                    //加入购物车成功,跳转购物车页面
                    location.href = "${pageContext.request.contextPath}/cart?methodName=selectCartList";
                } else {
                    //加入购物车失败,弹窗提示加入购物车失败
                    alert("添加购物车失败");
                }
            }, "json");
        }

        function getTime() {
            var date = new Date();
            var year = date.getFullYear();
            var month = date.getMonth();
            var day = date.getDate();
            var hours = date.getHours();
            var minutes = date.getMinutes();
            var seconds = date.getSeconds();
            var arr1 = [year, month, day];
            var arr2 = [hours, minutes, seconds];
            var timeStr = arr1.join("/") + " " + arr2.join(":");
            return timeStr;
        }
    </script>
</head>
<body>
<div id="public-navbar">
    <div class="layout_center layout_clear" style="overflow:visible">
        <div class="layout_fl">你好，欢迎来到 婚礼汇</div>
        <ul class="layout_fr fl_li">
            <li>
                <div class="use-layout">
                    <a>
                        <span class="use-status">会员中心</span>
                    </a>
                    <div class="use-option" style="display:none">
                        <a>会员登录</a>
                        <a>免费注册</a>
                    </div>
                    <i class="use-arrow page_icon"></i>
                </div>
            </li>
            <li>
                <span class="use-hr"></span>
            </li>
            <li>
                <a>我的购物车</a>
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
        <div class="page-logo layout_fl"><a><img src="${pageContext.request.contextPath}/img/rxT54692503vu.jpg"></a>
        </div>
        <div class="page-search layout_fl">
            <div class="page-search-bar layout_clear">
                <div class="page-search-text layout_fl">
                    <input type="text" class="search-cover" placeholder="搜索产品或店铺">
                </div>
                <div class="page-search-btn layout_fl">
                    <input type="button" value="搜索" class="search-button">
                </div>
            </div>
            <ul class="page-search-key layout_clear fl_li">
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
<div id="page-middle-bar">
    <div class="layout_center layout_clear">
        <div class="button layout_fl">全部分类</div>
        <ul class="layout_clear layout_fl fl_li">
            <li><a>首页</a></li>
            <li><a href="field.html">婚宴场地</a></li>
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
<div id="page-godMx">
    <div class="layout_center">
        <div class="path">
            <span><a>婚礼汇</a></span>
            <em>></em>
            <span><a>婚宴场地</a></span>
            <em>></em>
            <span><a>特色套餐</a></span>
            <em>></em>
            <a class="cur">${packages.package_name}</a>
        </div>
        <div id="gods-header" class="gods-header layout_clear" style="margin-top:0px;">
            <h2 class="gods-header-tit">${hotel.hotel_name}</h2>
            <div class="gods-header-fl layout_fl">
                <div id="gods-display-img">
                    <img src="${pageContext.request.contextPath}/${packages.img.img_add}">
                </div>
                <div id="gods-display-list">
                    <ul class="layout_clear fl_li">
                        <li class="win_current">
                            <img src="${pageContext.request.contextPath}/${packages.img.img_add}">
                        </li>
                    </ul>
                </div>
                <div class="gods-attrid">
                    <span class="fl">商品编号：${packages.package_id}</span>
                    <span class="fr">
                        	<span class="gods-share"><i class="page_icon"></i>分享</span>
                            <span class="gods-follow" style="cursor:pointer"><i class="page_icon"></i>收藏商品</span>
                        </span>
                </div>
            </div>
            <div class="gods-header-cn layout_fl">
                <div class="gods-uhbasic">
                    <p class="gods-uhbasic-tit">${packages.package_name}</p>
                    <p class="gods-uhbasic-stat">${packages.package_content}</p>
                </div>
                <div class="gods-uhsale layout_clear">
                    <div class="gods-uhsale-fl layout_fl">
                        <div class="gods-uhprice-item">
                            <span class="gods-uhprice-label">原价</span>
                            <%--原价数据库中没有--%>
                            <h4>￥2999.00</h4>
                        </div>
                        <div class="gods-uhprice-item">
                            <span class="gods-uhprice-label">平台价</span>
                            <h2><em class="gods-uhprice-str">￥</em>${packages.package_price}</h2>
                        </div>
                    </div>
                    <div class="gods-uhsale-fr layout_fl">
                        <span>累计评价</span>
                        <h3>0</h3>
                    </div>
                </div>
                <div class="gods-pro">
                    <dl class="gods-pro-item layout_clear">
                        <dt class="gods-pro-label">联系地址</dt>
                        <dd class="gods-pro-param gods-pro-primary layout_fl">${hotel.hotel_address}</dd>
                    </dl>
                    <dl class="gods-pro-item layout_clear">
                        <dt class="gods-pro-label">服务</dt>
                        <dd class="gods-pro-param gods-pro-primary layout_fl">
                            由<a class="gods-pro-key1">${hotel.hotel_name}</a>提供售后服务<a class="gods-pro-key0">联系卖家</a>
                        </dd>
                    </dl>
                    <dl class="gods-pro-item layout_clear">
                        <dt class="gods-pro-label gods-pro-clear0">套餐类型</dt>
                        <dd class="gods-pro-param gods-pro-primary layout_fl">
                            <ul class="gods-pro-list gods-pro-list0" id="menu">
                                <c:if test="${packages.package_menuA != null && packages.package_menuB !=null}">
                                    <li id="menuA" class="check" onclick="menuClick('menuA')"><a><span>A款</span></a></li>
                                    <li id="menuB" onclick="menuClick('menuB')"><a><span>B款</span></a></li>
                                </c:if>
                                <c:if test="${packages.package_menuA != null && packages.package_menuB == null}">
                                    <li id="menuA" class="check"><a><span>A款</span></a></li>
                                </c:if>
                                <c:if test="${packages.package_menuA == null && packages.package_menuB != null}">
                                    <li id="menuB" class="check"><a><span>B款</span></a></li>
                                </c:if>
                                <c:if test="${packages.package_menuA == null && packages.package_menuB == null}">
                                    <li class="check"><a><span>无</span></a></li>
                                </c:if>
                            </ul>
                        </dd>
                    </dl>
                    <dl class="gods-pro-item layout_clear">
                        <dt class="gods-pro-label gods-pro-clear0">婚宴场地</dt>
                        <dd class="gods-pro-param gods-pro-primary layout_fl">
                            <ul class="gods-pro-list gods-pro-list0" id="room">
                                <c:forEach items="${rooms}" var="room" varStatus="status">
                                    <c:if test="${status.index == 0}">
                                        <li id="${room.room_id}" class="check" onclick="roomClick('${room.room_id}')"><a><span>${room.room_name}</span></a></li>
                                    </c:if>
                                    <c:if test="${status.index != 0}">
                                        <li id="${room.room_id}" onclick="roomClick('${room.room_id}')"><a><span>${room.room_name}</span></a></li>
                                    </c:if>
                                </c:forEach>
                            </ul>
                        </dd>
                    </dl>
                    <dl class="gods-pro-item layout_clear">
                        <dt class="gods-pro-label gods-pro-clear2">数量</dt>
                        <dd class="gods-pro-param gods-pro-primary layout_fl">
                            	<span class="gods-counter">
                                	<input id="count" type="text" class="gods-counter-text" name="BuyCarNum" value="1"
                                           maxlength="3" min="1">
                                    <span class="gods-counter-btn">
                                    	<span class="gods-counter-push page_icon" title="加"
                                              onclick="plus()"></span>
                                        <span class="gods-counter-reduce page_icon" title="减"
                                              onclick="reduce()"></span>
                                    </span>
                                    <span class="gods-counter-outs">件</span>
                                    <span class="gods-counter-num" id="stock">(库存99件)</span>
                                </span>
                        </dd>
                    </dl>
                    <dl class="gods-pro-item layout_clear">
                        <dt class="gods-pro-label">服务承诺</dt>
                        <dd class="gods-pro-param gods-pro-middle layout_fl">正品保障 沟通预订 资金管理 满意后付款</dd>
                    </dl>
                    <dl class="gods-pro-item layout_clear">
                        <dd class="gods-pro-item layout_clear">
                            <a class="gods-pro-payfor">立即购买</a>、
                            <a onclick="addCart()" class="gods-pro-payfor"
                               href="javascript:void(0);">加入购物车</a>
                        </dd>
                    </dl>
                </div>
            </div>
            <div class="gods-header-fr layout_fl">
                <div class="gods-shop">
                    <div class="gods-shop-tit">重庆南温泉丽筠酒店</div>
                    <div class="gods-shop-logo"><img src="${pageContext.request.contextPath}/img/msF58469607Jg.jpg"
                                                     style="width:100%;height: 100%;"></div>
                    <div class="gods-shop-go"><a class="cur">进入店铺</a> <a>收藏店铺</a></div>
                </div>
                <div class="gods-aside-inset"><img src="${pageContext.request.contextPath}/img/qER49920125Kw.jpg"
                                                   style="margin:auto"></div>
                <ul class="gods-other-list">
                    <li>
                        <a>
                            <div>
                                <img src="${pageContext.request.contextPath}/img/LSN54767537nb.jpg" style="width:100%">
                                <span class="gods-inc"><span class="gods-inc-text" title="湘域中餐厅">湘域中餐厅</span></span>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a>
                            <div>
                                <img src="${pageContext.request.contextPath}/img/Hbp54860401oB.jpg" style="width:100%">
                                <span class="gods-inc"><span class="gods-inc-text" title="中天大酒楼">中天大酒楼</span></span>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div id="gods-section" class="gods-section layout_clear">
            <div class="gods-grids-fl layout_fl">
                <div class="gods-aside-hd">相似产品<a class="layout_fr">更多</a></div>
                <ul class="gods-aside-list">
                    <li>
                        <a>
                            <div class="gods-aside-img">
                                <img src="${pageContext.request.contextPath}/img/iQP54584096YB.jpg"
                                     style="width: 100%; display: block;">
                            </div>
                            <div class="gods-aside-dis">
                                <p class="gods-aside-price"><span>￥0.00</span></p>
                                <p class="gods-aside-text">大厅</p>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a>
                            <div class="gods-aside-img">
                                <img src="${pageContext.request.contextPath}/img/iQP54584096YB.jpg"
                                     style="width: 100%; display: block;">
                            </div>
                            <div class="gods-aside-dis">
                                <p class="gods-aside-price"><span>￥0.00</span></p>
                                <p class="gods-aside-text">大厅</p>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a>
                            <div class="gods-aside-img">
                                <img src="${pageContext.request.contextPath}/img/iQP54584096YB.jpg"
                                     style="width: 100%; display: block;">
                            </div>
                            <div class="gods-aside-dis">
                                <p class="gods-aside-price"><span>￥0.00</span></p>
                                <p class="gods-aside-text">大厅</p>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a>
                            <div class="gods-aside-img">
                                <img src="${pageContext.request.contextPath}/img/iQP54584096YB.jpg"
                                     style="width: 100%; display: block;">
                            </div>
                            <div class="gods-aside-dis">
                                <p class="gods-aside-price"><span>￥0.00</span></p>
                                <p class="gods-aside-text">大厅</p>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a>
                            <div class="gods-aside-img">
                                <img src="${pageContext.request.contextPath}/img/iQP54584096YB.jpg"
                                     style="width: 100%; display: block;">
                            </div>
                            <div class="gods-aside-dis">
                                <p class="gods-aside-price"><span>￥0.00</span></p>
                                <p class="gods-aside-text">大厅</p>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="gods-grids-fr layout_fl">
                <div class="gods-grids-swit">
                    <ul class="layout_clear fl_li">
                        <li class="current">
                            <a>商品介绍</a>
                        </li>
                        <li>
                            <a>评价(0)</a>
                        </li>
                    </ul>
                </div>
                <div class="gods-swit-coloum">
                    <div style="display:block">
                        <div class="gods-gdx-img">
                            <p>
                                <img src="${pageContext.request.contextPath}/img/BJl58409211yq.jpg"
                                     style="height:1280px; width:904px">
                            </p>
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
                <a>
                    <dd><b></b>如何注册</dd>
                </a>
                <a>
                    <dd><b></b>如何登录</dd>
                </a>
                <a>
                    <dd><b></b>如何预订</dd>
                </a>
                <a>
                    <dd><b></b>购物流程</dd>
                </a>
                <a>
                    <dd><b></b>预订须知</dd>
                </a>
            </dl>
            <dl class="footer-item">
                <h3>公司信息</h3>
                <a>
                    <dd><b></b>关于我们</dd>
                </a>
                <a>
                    <dd><b></b>用户协议</dd>
                </a>
                <a>
                    <dd><b></b>隐私申明</dd>
                </a>
                <a>
                    <dd><b></b>商家入驻协议</dd>
                </a>
                <a>
                    <dd><b></b>安全须知</dd>
                </a>
            </dl>
            <dl class="footer-item">
                <h3>合作联系</h3>
                <a>
                    <dd><b></b>联系我们</dd>
                </a>
                <a>
                    <dd><b></b>招商加盟</dd>
                </a>
                <a>
                    <dd><b></b>商户平台</dd>
                </a>
                <a>
                    <dd><b></b>招聘信息</dd>
                </a>
            </dl>
            <dl class="footer-item">
                <h3>帮助中心</h3>
                <a>
                    <dd><b></b>忘记密码</dd>
                </a>
                <a>
                    <dd><b></b>常见问题</dd>
                </a>
                <a>
                    <dd><b></b>在线客服</dd>
                </a>
                <a>
                    <dd><b></b>如何上传产品</dd>
                </a>
                <a>
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
<div id="gotop" title="返回顶部"
     style="display:block; background:url(${pageContext.request.contextPath}/img/gotop.png) -70px 0px no-repeat"></div>
</body>
</html>
