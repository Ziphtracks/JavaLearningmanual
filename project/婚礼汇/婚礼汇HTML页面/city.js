// JavaScript Document

"use strict";
(function($){
	window.M={
		city:function(value){
			$.post(CONFIG.root+'library/baseData.php',{province:value},function(data){
				$('#CitySelect').html(data.city);
				$("#AreaSelect").html("<option value=''>--请选择--</option>");
			},"json");
		},
		area:function(value){
			$.post(CONFIG.root+'library/baseData.php',{ProvinceReturnArea:base.getById('province').value,CityReturnArea:value},function(data){
				$("#AreaSelect").html(data.area);
			},"json");
		},
		address:function(){
			$.post(CONFIG.root+'library/usData.php?action=user_add_address',$("[data-form=address-form]").serialize(),function(data){
				$("#info").text(data.warn);
				if(data.flag==2){
					var time = window.setTimeout(function(){
						$("#prompt-wrapper").fadeOut(function(){
							$("#region-address").html('');
							$("[data-tr-id = 'no-data']").remove();
							$("[data-name=table]").append(data.html);
							window.clearTimeout(time);
							window.location = window.location;
						});
					},1000);
					
				}else if(data.flag == 3){
					var time = window.setTimeout(function(){
						$("#prompt-wrapper").fadeOut(function(){
							$("#region-address").html('');
							$("[data-name=table]").append(data.html);
							$("[data-address-name-id='"+data.id+"']").text(data.AddressName);
							$("[data-region-id='"+data.id+"']").text(data.area);
							$("[data-addressmx-id='"+data.id+"']").text(data.AddressMx);
							$("[data-address-code-id='"+data.id+"']").text(data.zipCode);
							$("[data-address-tel-id='"+data.id+"']").text(data.AddressTel);
							window.clearTimeout(time);
							window.location = window.location;
						});
					},1000);
				}
			},"json");
		},
		loadevt:function(){
			$(document).on('click','#prompt-hide',function(e){	
				$("#region-address").html('');
			});
			//根据省份调出城市
			$(document).on('change','#province',function(e){
				M.city($(this).val());
			});
			//根据城市调出地区
			$(document).on('change','#CitySelect',function(e){
				M.area($(this).val());
			});
			//提交地址信息
			if(base.getById('SubAddressBtn')){
				$(document).on('click','#SubAddressBtn',function(e){
					M.address();
				});
			}
		},
		cutBuyCar:function(id,type,pay){
			$.post(CONFIG.root + 'library/usData.php?action=single_buycar_price',{BuycarId:id,type:type,pay:pay},function(data){     
				if(data.flag == 2){
					$("#AllPrice").text('￥'+data.money);  
					$("[data-price-id="+id+"]").text(data.buycarMoney);
					$("[data-buy-num="+id+"]").text(data.num);
				}else{     
					base.success(data.warn);     
				}     
			},"json");
		}
	}
})(jQuery);
(function($){
	//用户登录
	base.click($('#user-login'),function(e){
		$.post(CONFIG.root+'library/baseData.php?action=userlogin',$("[data-form=userlogin]").serialize(),function(data){
			if(data.flag == 2){
				window.location = data.url
			}else{
				base.msg(data.warn);
			}
		},"json");
	});
	//提交用户信息
	$(document).on('click','#userReBtn',function(e){
		$.post(CONFIG.root+'library/baseData.php?action=userregister',$("[data-form=user-register]").serialize(),function(data){
			if(data.flag == 2){
				window.location = data.url
			}else{
				base.msg(data.warn);
			}
		},"json");
	});
    //提交用户重置密码
    $(document).on('click','#userResetPwdBtn',function(e){
        $.post(CONFIG.root+'library/baseData.php?action=userresetpwd',$("[data-form=user-resetpwd]").serialize(),function(data){
            if(data.flag == 2){
                base.msg(data.warn,function () {
                    window.location = data.url
                });
            }else{
                base.msg(data.warn);
            }
        },"json");
    });
	//用户注册发送验证码
	$(document).on('click','#getCode',function(e){
		$.post(CONFIG.root+'library/baseData.php?action=userRegCode',{register_tel:$("[name=UserRegisterTel]").val()},function(data){
			if(data.flag == 2){
				window.location = data.url
			}else{
				base.msg(data.warn);
			}
		},"json");
	});
	//根据省份调出城市
	base.eventListen('province','change',function(e){
		M.city(e.value);
	});
	//根据城市调出地区
	base.eventListen('CitySelect','change',function(e){
		M.area(e.value);
	});
	//更新用户信息
	$(document).on('click','#UserInfoBtn',function(e){
		$.post(CONFIG.root+'library/usData.php?action=userinfo',$("[data-form=user-info-form]").serialize(),function(data){
			base.msg(data.warn);
		},"json");
	});
	//用户修改手机发送验证码
	$(document).on('click','#UpdateTelCode',function(e){
		$.post(CONFIG.root+'library/usData.php?action=user_update_tel',{user_new_tel:$("[name=UserNewTel]").val()},function(data){
			base.msg(data.warn);
		},"json");
	});
	//提交更新手机号码
	$(document).on('click','#UpdateTelBtn',function(e){
		$.post(CONFIG.root+'library/usData.php?action=sub_user_update_tel',{user_new_tel:$("[name=UserNewTel]").val(),user_login_pas:$("[name=UserLoginPas]").val(),user_tel_ode:$("[name=UserTelCode]").val()},function(data){
			base.msg(data.warn);
		},"json");
	});
	//用户修改密码替换验证码
	$(document).on('click','#NewCode',function(e){
		var time = setTimeout(function(){
			$("#ImgCode").attr('src',CONFIG.root+'library/proveImg.php?rand='+parseInt(1000000*Math.random()));
			clearTimeout(time);
		},10);
	});
	//用户修改密码提交数据
	$(document).on('click','#UpdatePasswordBtn',function(e){
		$.post(CONFIG.root+'library/usData.php?action=sub_user_update_pass',$("[data-form=update-pass]").serialize(),function(data){
			base.msg(data.warn);
		},"json");
	});
	//用户更改收货地址
	$(document).on('click','#new-address',function(e){
		document.getElementById('region-address').innerHTML = base.htmlDecode($("#address-hidden").val());
		$("#prompt-wrapper").fadeIn();
		M.loadevt();
	});
	//提交更新头像
	$(document).on('click','#user-head',function(){
		$("[name=UserHeadFile]").click();
		$("[name=UserHeadFile]").change(function(e) {
           $("[data-form=head-form]").attr('action',CONFIG.root+'library/upload.php');
		    $("[data-form=head-form]").submit();
        });
	});
	//切换登录验证码
	base.eventListen('prove','click',function(e){
		e.src = '';
		var time = setTimeout(function(){
			e.src = CONFIG.root+'library/proveImg.php?rand='+parseInt(1000000*Math.random());
			clearTimeout(time);
		},10);
	}); 
	//登录背景
	$("[data-img-url]").each(function(index, element) {
		var url = $(this).attr('data-img-url');
        if(url != ''){
			$(this).css('background','url('+url+')');
		}
    });
	//编辑收货地址
	$(document).on('click','[data-update-id]',function(){
		var address_id = $(this).attr('data-update-id');
		$.post(CONFIG.root+'library/usData.php?action=user_adeit_address',{EditAddressId:address_id},function(data){
			if(data.flag == 2){
				document.getElementById('region-address').innerHTML = base.htmlDecode($("#address-hidden").val());
				$("[name=AddressName]").val(data.AddressName);
				$("#province").append(data.province);
				$("#CitySelect").append(data.city);
				$("#AreaSelect").append(data.area);
				$("[name=AddressMx]").val(data.AddressMx);
				$("[name=AddressTel]").val(data.AddressTel);
				$("[name=AddressCode]").val(data.zipCode);
				$("[data-form=address-form]").append("<input type='hidden' name='AddressId' value='"+data.id+"' />");
				$("#prompt-wrapper").fadeIn();
				M.loadevt();
			}
		},"json");
    });
	//设置默认收货地址
	$(document).on('click','[data-design-id]',function(){
        var DesignId = $(this).attr('data-design-id');
		$.post(CONFIG.root+'library/usData.php?action=user_design_address',{DesignId:DesignId},function(data){
			if(data.warn){
				base.msg(data.warn);
			}
			if(data.flag == 2){
				base.success('设置成功');
				$("[data-design-id='"+data.id+"']").removeAttr('style').text('设为默认');
				$("[data-design-id='"+data.AddressId+"']").attr('style','color:#ff5384 !important').text('默认地址');
			}
		},"json");
    });
	//删除收货地址
	$(document).on('click','[data-del-id]',function(){
        var DeleteAddressId = $(this).attr('data-del-id');
		if(confirm('确定要删除吗？')){
			$.post(CONFIG.root+'library/usData.php?action=user_delete_address',{DeleteAddressId:DeleteAddressId},function(data){
				if(data.warn){
					base.msg(data.warn);
				}
				if(data.flag == 2){
					base.success('删除成功');
					var ob = $("[data-tr-id='"+data.id+"']");
					ob.fadeOut(270,function(){
						ob.remove();
						if(!$("[data-tr-id]").attr('data-tr-id')){
							$("[data-name=table]").append("<tr data-tr-id='no-data'><td colspan='6' align='center'>没有设置地址</td></tr>");
						}
					});
				}
			},"json");
		}
    });
	//收藏店铺
	base.click($('[data-seid]'),function(){
		var $data = eval('('+$(this).attr('data-seid')+')');
		$.post(CONFIG.root+'library/usData.php?action=user_collect_store',$data,function(data){
			base.success(data.warn);
		},"json");
	});
	//收藏商品
	base.click($('[data-collect-goods]'),function(){
		var $data = eval('('+$(this).attr('data-collect-goods')+')');
		$.post(CONFIG.root+'library/usData.php?action=user_collect_goods',$data,function(data){
			base.success(data.warn);
		},"json");
	});
	//取消店铺收藏
	$(document).on('click','[data-collect-del]',function(){
		var DeleteCollectId = $(this).attr('data-collect-del');
		$.post(CONFIG.root+'library/usData.php?action=delete_collect_store',{DeleteCollectId:DeleteCollectId},function(data){
			base.success(data.warn);
			if(data.flag == 2){
				var ob = $("[data-tr-collect="+DeleteCollectId+"]");
				ob.fadeOut(function(){
					ob.remove();
					if (!$("[data-tr-collect]").attr('data-tr-collect')) {
						$("[data-table='collect-store']").append("<tr data-tr-collect='no-data'><td colspan='5' align='center'>一个店铺都没收藏</td></tr>");
					}
				});
			}
		},"json");
	});
	//删除收藏的商品
	$(document).on('click','[data-collect-gs-del]',function(){
		var DeleteCollectId = $(this).attr('data-collect-gs-del');
		$.post(CONFIG.root+'library/usData.php?action=delete_collect_goods',{DeleteCollectId:DeleteCollectId},function(data){
			base.success(data.warn);
			if(data.flag == 2){
				var ob = $("[data-list="+DeleteCollectId+"]");
				ob.fadeOut(function(){
					ob.remove();
					if (!$("[data-list]").attr('data-list')) {
						$("#list").html("<div data-list='no-data'>一个商品都没收藏</div>");
					}
				});
			}
		},"json");
	});
	//添加
	$(document).on('click','[data-buy-add]',function(){
		M.cutBuyCar($(this).attr('data-buy-add'),'add',$(this).attr('data-type'));
	});
	//减少
	$(document).on('click','[data-buy-cut]',function(){
		M.cutBuyCar($(this).attr('data-buy-cut'),'cut',$(this).attr('data-type'));
	});
	//全选切换 
	$(document).on('click','#BuyCarCheckAll',function(){    
		$.post(CONFIG.root + 'library/usData.php?action=select_buycar_all',{},function(data){
			var CheckBox = $("[SwitchBuyCar]");    
			if(data.flag == 1){
				for(var i=0;i<CheckBox.length;i++){
					CheckBox[i].checked=true;
				}    
				$("#BuyCarCheckAll").attr('checked',true);     
				$("#AllPrice").text('￥'+data.money);  
				$("#BuyCarBalance").text(data.num);     
			}else{
				for(var i=0;i<CheckBox.length;i++){
					CheckBox[i].checked=false;
				}    
				$("#BuyCarCheckAll").removeAttr('checked');
				$("#AllPrice").text('￥'+data.money);  
				$("#BuyCarBalance").text(data.num);      
			}
		},"json");       
	}); 
	//单选切换    
	$(document).on('click','[SwitchBuyCar]',function(){ 
		var SwitchBuyCarId = $(this).attr("SwitchBuyCar");      
		$.post(CONFIG.root + 'library/usData.php?action=single_buycar', {SwitchBuyCarId:SwitchBuyCarId},function(data){     
			if(data.flag == 2){     
				$("#AllPrice").text('￥'+data.money);  
				$("#BuyCarBalance").text(data.num);
				var CheckAll=$("#BuyCarCheckAll");  
				if(data.BuyCarChecked == "yes"){     
					$("[SwitchBuyCar="+SwitchBuyCarId+"]").attr("checked",true);     
					if(data.CheckAll == "yes"){     
						CheckAll[0].checked=true;
					}else{     
						CheckAll[0].checked=false;     
					}     
				}else{     
					$("[SwitchBuyCar="+SwitchBuyCarId+"]").removeAttr('checked');      
					CheckAll[0].checked=false;     
				}     
			}else{     
				base.success(data.warn);     
			}     
		},"json");     
	});
	//清空购物车
	$(document).on('click','#DeleteAll',function(){
		if(confirm("清空购物车？")){
			$.post(CONFIG.root + 'library/usData.php?action=delete_buycar_all',{},function(data){
				base.success(data.warn);
				if(data.flag==2){
					$("[data-buy-list]").fadeOut(function(){
						$("[data-buy-list]").remove();
						$("#AllPrice").text('￥'+0);  
						$("#BuyCarBalance").text(0);  
						if (!$("[data-buy-list]").attr('data-buy-list')) {
							$(".us_buycar_wrap").append("<li data-buy-list='no-data' style='text-align:center;'>购物车空空的</li>");
						}
					});
				}
			},"json");
		}
	});
	//删除单个购物车
	$(document).on('click','[data-buy-del]',function(){
		if(confirm("确定要删除？")){
			var id = $(this).attr('data-buy-del');
			$.post(CONFIG.root + 'library/usData.php?action=delete_buycar_single',{DeleteBuyCarId:id},function(data){
				base.success(data.warn);
				if(data.flag==2){
					var ob = $("[data-buy-list="+id+"]");
					ob.fadeOut(function(){
						ob.remove();
						$("#AllPrice").text('￥'+data.money);  
						$("#BuyCarBalance").text(data.BuyCarTotal);   
						if (!$("[data-buy-list]").attr('data-buy-list')) {
							$(".us_buycar_wrap").append("<li data-buy-list='no-data' style='text-align:center;'>购物车空空的</li>");
						}
					});
				}
			},"json");
		}
	});
	$(document).on('click','.pay',function(){
		$(this).find('a').addClass('checked');
		$(this).siblings().find('a').removeClass('checked');
	});
	$(document).on('click','#SubOrderPay',function(){
		var type,$this=$(this);
		var aText=$this.text();

		$("[data-pay-type]").each(function(index, element) {
			if($(this).hasClass('checked')){
				type = $(this).attr('data-pay-type');
			}
		});
		if(typeof type != 'undefined'){
            $this.text('处理中...');
			$.post(CONFIG.root + 'library/usData.php?action=pay_buycar',{type:type,buycarid:$('[data-pay-id]').attr('data-pay-id')},function(data){
				if(data.type == 'wx'){
					$(document.body).append(data.html);
					$("#mt-mask").fadeIn();
					$("#mt-panel").fadeIn();
				}else if(data.type == 'zfb'){
					$(document.body).append(data.html);
				}else{
					base.msg(data.warn);
				}

                $this.text(aText);
			},"json");
		}else{
			base.msg('请选择支付方式');
		}
	});
	$(document).on('click','.mt-dialog-close',function(){
		$("#mt-mask").remove();
		$("#mt-panel").remove();
		$("#wx-script").remove();
	});
	$(document).on('click','[data-sure-id]',function(){
		var SureOrderId = $(this).attr('data-sure-id');
		if(confirm("确定收货？")){
			$.post(CONFIG.root+'library/usData.php?action=user_sure_order',{SureOrderId:SureOrderId},function(data){
				base.success(data.warn);
				if(data.flag == 2){
					window.setTimeout(function(){
						window.location = data.url;
					},1200);
				}
			},"json");
		}
	});
	//提交需求发布
	$(document).on('click','#SubDemandBtn',function(){
		$.post(CONFIG.root+'library/baseData.php?action=user_demand',$("[data-form='demand-form']").serialize(),function(data){
			base.msg(data.warn);
		},"json");
	});
    //预定
    $('#tooBar .yuyue').touchClick(function () {
        var goods_id = $(this).attr('data');
        window.location.href = CONFIG.root+'user/usBuyOne.php?goodsId=' + goods_id;
    });
	//用户购买单个商品
	$('#user-buyone').touchClick(function(e){
		var skuGroup=new Array();
		$(".buy-one-type-select.selected").each(function () {
            var skuId=$(this).attr("data-sku-id");
            if(skuId){
                skuGroup.push(skuId);
			}
        });

		$.post(CONFIG.root+'library/usData.php?action=user_buy_one',{
			group:skuGroup.join(','),
			BuyNum:$("#BuyNum").val(),
			AddressName:$("#AddressName").val(),
			AddressTel:$("#AddressTel").val(),
			AddressMx:$("#AddressMx").val(),
			remark:$("#remark").val()
		},function(data){
			if(data.flag == 2){
				window.location = CONFIG.root+'user/usPayOne.php?orderId='+data.id;
			}else{
				base.msg(data.warn);
			}
		},"json");
	});
	$(document).on('click','.buy-one-type-select',function () {
		var $t=$(this);
		$t.parent().find('.buy-one-type-select').removeClass('selected')
        $t.addClass('selected');
    });
    //手机端点击搜索
    $('.inSearch').touchClick(function (event) {
        var w_height = $(window).height();
        var searchhtml = '<section id="mSearch" style="height: 787px; left: 0px;"><div class="searchBox"><div class="topInput"><div class="inputDiv"><form id="hideSubmit" method="post" action="http://www.119hqw.com/Goods.php"><input name="keywords" placeholder="输入商家名、商品名称搜索"><i></i></form></div><span class="cancel">取消</span></div><div class="hot"><h3 class="h3Tit">热门搜索</h3><ul class="clearfix"><li><a href="http://www.119hqw.com/storeList.php?keywords=%E9%85%92%E5%BA%97">酒店</a></li><li><a href="http://www.119hqw.com/Goods.php?keywords=%E5%A9%9A%E7%BA%B1">婚纱</a></li><li><a href="http://www.119hqw.com/Goods.php?TypeOne=g14dws">婚庆用车</a></li><li><a href="http://www.119hqw.com/Goods.php?keywords=%E5%BA%A6%E5%81%87">度假</a></li></ul></div><div class="searchAuto"><ul></ul></div></div></section>';
        $('body').append(searchhtml);
        //关闭索索界面
        $("#mSearch .topInput .cancel").touchClick(function () {
            $("#mSearch").remove();
        });
        //搜索跳转
        $("#hideSubmit i").touchClick(function (event) {
            $('#hideSubmit').submit();
        });
    });

    //商品列表 筛选器
    $("#sellerSort .popup ul li").touchClick(function () {
        var $this = $(this);
        $this.parent("ul").children("li").each(function () {
            $(this).removeClass("selected");
        });
        $this.addClass("selected");
    });
    //商品列表 筛选页面筛选选项卡
    $("#sellerSort .popup div span:not(.dSpanInput)").touchClick(function () {
        //判断上级div的子集是否包含INPUT,如果有并且INPUT有值，清空INPUT
        var $this = $(this);
        var parent = $($this.parents("div")[0]);
        parent.find("input").each(function () {
            $(this).val("");
        });

        parent.find("span:not(.dSpanInput)").each(function () {
            $(this).removeClass("selected");
        });

        $this.addClass("selected");
        return false;
    });
    $("#sellerSort .popup div .dSpanInput input").change(function () {
        //清空当前上级div的子集所有SPAN的选择状态
        var parent = $(this).parents("div")[0];
        $(parent).find("span:not(.dSpanInput)").each(function () {
            $(this).removeClass("selected");
        });
        return false;
    });
    //点击指定区域  input失焦
    $('#sellerSort').touchClick(function (e) {
        if (e.target.tagName !== "INPUT") {
            $('input').blur();
        }
    });
    //动态取值 排序区域宽高
    sortUlWidth();
    $(window).on("resize", sortUlWidth);
    function sortUlWidth() {
        $('.banner img').height($(window).width() * 50 / 320);
        $("#sellerSort .sortNav .popup").css({"width": $(window).width(), "height": $(window).height() - 86});
    };
    //关闭排序条件总区域
    function sortItemHide() {
        setTimeout(function () {
            $('.group.bottom').hide().css('position', 'fixed');
            $("#sellerSort .sortNav .popup").removeClass("show");
            $("#sellerSort .sortNav span").removeClass("cur");
            $("#sellerList,footer").css("display", "block");
        }, 400);
    };
    //点击显示筛选条目
    $('.selectShow').touchClick(function (e) {
        $(this).next(".popup").toggleClass("show")
            .parent().siblings().find(".popup").removeClass("show");

        $(this).find("span").toggleClass("cur")
            .parents('.sortNav').siblings().find("span").removeClass("cur");

        if ($(this).next(".popup").hasClass('show')) {
            $("#sellerList,footer").css("display", "none");
            $.dxlGaPageTracker('/VPTracker/WapHunYan/' + $.cookie('city') + '/filter?filter' + $(this).data('type'));
            if ($(this).data('type') == '3') {
                $('.group.bottom').show();
            } else {
                $('.group.bottom').hide();
            }
        } else {
            $('.group.bottom').hide();
            $('input').blur();
            $("#sellerList,footer").css("display", "block");
        }
        ;

    });

    $('.defaultSort .group').eq(0).find('span').touchClick(function (e) {
        $(this).toggleClass('selected');
    });

    $('.defaultSort .group').eq(2).find('span').touchClick(function (e) {
        $(this).siblings().removeClass('selected');
        $(this).toggleClass('selected');
    });
    $('.slink').touchClick(function () {
        window.location.href=$(this).attr("data");
    });
})(jQuery);