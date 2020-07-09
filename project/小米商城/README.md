# 小米商城

------

### 一、Get小米商城项目

> **项目声明：** 该项目为小米商城项目，是一个基于Servlet+JSP开发项目，在此托管到GitHub以作记录，并提供给正在学习的小伙伴练习。此项目不是特别高级严谨的项目，只是一个简单的练习，所以有里面也有很多的不足之处，请谅解！谢谢！
>
> - 可以[**点击此处**](https://github.com/Ziphtracks/JavaLearningmanual/tree/master/project/%E5%B0%8F%E7%B1%B3%E5%95%86%E5%9F%8E/%E5%B0%8F%E7%B1%B3%E5%95%86%E5%9F%8E%E9%A1%B9%E7%9B%AE%E4%B8%8B%E8%BD%BD%E5%85%A5%E5%8F%A3)来查看并Get该项目！
> - 查看[**项目思路分析**](https://github.com/Ziphtracks/JavaLearningmanual/tree/master/project/%E5%B0%8F%E7%B1%B3%E5%95%86%E5%9F%8E/shopping)来帮助你梳理思路！
> - 参考[**项目需求分析**](https://github.com/Ziphtracks/JavaLearningmanual/tree/master/project/%E5%B0%8F%E7%B1%B3%E5%95%86%E5%9F%8E#%E5%9B%9B%E9%A1%B9%E7%9B%AE%E9%9C%80%E6%B1%82%E5%88%86%E6%9E%90) 告诉你此项目是考验你什么的！
> - 了解本[**项目数据库分析**](https://github.com/Ziphtracks/JavaLearningmanual/tree/master/project/%E5%B0%8F%E7%B1%B3%E5%95%86%E5%9F%8E#%E4%B8%89%E6%95%B0%E6%8D%AE%E5%BA%93) 让你更理解各表之间的关联！



### 二、小米商城项目流程展示

> **注意：** jsp页面、数据库以及部分Utils工具已提供，我们只需要创建项目导入创建和编写其他代码即可。页面展示过程被红色线框圈住地方是我们需要做的商城入口，点击该入口完成跳转至其他页面，根据其他jsp页面显示的内容和业务编写对应的页面展示和业务逻辑代码。

|                 注册功能页面（register.jsp）                 |
| :----------------------------------------------------------: |
| ![image-20200704120041739](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200704154406.png) |
|           **注册成功页面（registerSuccess.jsp）**            |
| ![image-20200704120158582](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200704154402.png) |
|  **未登录的商城页面（index.jsp、header.jsp、footer.jsp）**   |
| ![image-20200704120449273](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200704154359.png) |
|                  **登录页面（login.jsp）**                   |
| ![image-20200704120728527](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200704154355.png) |
|  **登录后的商城主页（index.jsp、header.jsp、footer.jsp）**   |
| ![image-20200704120929072](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200704154352.png) |
|               **商品分页列表（goodList.jsp）**               |
| ![image-20200704121207255](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200704154350.png) |
|              **商品详情页（goodsDetail.jsp）**               |
| ![image-20200704121351927](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200704154347.png) |
|            **加入购物车成功（cartSuccess.jsp）**             |
| ![image-20200704121446513](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200704154346.png) |
|                  **购物车列表（cart.jsp）**                  |
| ![image-20200704121659842](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200704154343.png) |
|                  **订单列表（order.jsp）**                   |
| ![image-20200704122013814](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200704154340.png) |
|             **提交订单成功（orderSuccess.jsp）**             |
| ![image-20200704122033146](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200704154338.png) |
|                **微信支付（payWeixin.jsp）**                 |
| ![image-20200704122527671](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200704154336.png) |
|                 **支付成功（message.jsp）**                  |
| ![支付成功](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200704154334.png) |
|       **主页地址管理（header.jsp - > self_info.jsp）**       |
| ![image-20200704122801574](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200704154331.png) |
|       **主页我的订单（header.jsp - > orderList.jsp）**       |
| ![image-20200704122941131](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200704154329.png) |
|      **订单详情（orderList.jsp - > orderDetail.jsp）**       |
| ![image-20200704123029283](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200704154327.png) |
|         **注意：有兴趣的小伙伴自行扩展，优化细节！**         |



### 三、数据库

> 数据库表简介
>
> - **地址表（tb_address）：** 包含id、地址信息（detail）、姓名（name）、电话（phone）、用户id（uid）、默认地址标记（level）
> - **购物车表（tb_cart）：** 包含id、商品id（pid）数量（num）、小计（money）
> - **商品表（tb_goods）：** 包含id、商品名称（name）、添加购物车日期（pubdate）、图片（picture）、单价（price）、星级（star）、描述（intro）、商品类型id（typeid）
> - **商品类型表（tb_goods_type）：** 包含id、商品类型名称（name）、商品类型级别（level）
> - **订单表（tb_order）：** 包含订单id、用户id（uid）、小计（money）、订单状态（status）、下单时间（time）、地址id（aid）
> - **订单详情表（tb_orderdetail）：** 包含id、订单id（oid）、商品id（pid）、商品数量（num）、小计（money）
> - **用户表（tb_user）：** 包含id、用户名（username）、密码（password）、邮箱（email）、性别（gender）、账户激活标记（flag）、管理员标记（role）、激活码（code）

***注意事项：*** 

> - 账户激活标志flag=1为已激活状态；默认标记地址标记为1
> - code激活码可以用UUID来生成，记得生成之后要把UUID码中的"-"去掉哦
> - 订单ID是一个UUID生成的32为字符串类型ID，也是要把"-"去掉的
> - 订单状态我们只用了两个状态，如果需要查看状态，可以在我们的项目中查找utils工具中的枚举类`OrderStatus`
> - 下单时间在数据库中是time类型，而该类型包括了日期和时间。java.utils.date是包含日期和时间的，而java.sql.date是只包含日期的，而不包含时间。所有我们在此项目中只需要使用java.utils.date即可
> - 购物车表中的小计为空，是因为当你把商品加入购物车后存储一次小计，但是当你到提交订单时修改数量，小计应该也是会变的。所以这导致了购物车中的小计与订单中的小计不同
> - 清空购物车和删除购物车中的商品不是直接delete删除，因为用户数据的宝贵，所以我们只需要操作用户购买商品的数量即可

|                          数据库模型                          |
| :----------------------------------------------------------: |
| ![image-20200704133013819](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200704154321.png) |



### 四、项目需求分析



|                         项目需求分析                         |
| :----------------------------------------------------------: |
| ![需求分析](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200704154304.png) |



