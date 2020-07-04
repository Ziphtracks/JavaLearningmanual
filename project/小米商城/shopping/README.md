> **注意：** 下载项目的小伙伴请在此页面下载ZIP解压包，不要使用clone。下载解压包能保证你的快速下载
>
> *项目思想，仅供参考！* 



# 项目思路

> 此处列举了项目中的几处功能实现思路，以助于小伙伴们学习和参考。相信小伙伴们在编写代码多了点之后就会有自己的思路，代码写的越来越顺利！

## 一、登录

> **起点：** login.jsp

> * 常规 用户名/密码 校验
> * 验证码 生成及校验
> * 当登录失败时，显示错误信息
> * 两周内自动登录

```java
// Servlet
/**
	0. 生成验证码
	1. 收参  用户名  密码  验证码   是否自动登录
	2. 校验验证码  如果错误  返回登录页面，并携带错误信息
	3. 用户名 密码校验  调用service   如果错误 返回登录页面，并携带错误信息
	4. 判断是否需要自动登录   如果需要，则存cookie
*/
```

## 二、注册

> **起点：** register.jsp
>
> **响应：** registerSuccess.jsp

```java
// Servet
/**
1. 表单校验  已有
2. 用户名是否重复校验
3. 注册常规功能
4. 新用户的初始状态 未激活  flag=0
5. 想新用户的邮箱发送一个邮件，邮件中内容为 一个激活链接。
   该链接指向  激活的servelet 参数是  userId+随机激活码
*/
```

## 三、类别列表

> **起始：** index.jsp、tb_goods_type     
>
> **响应：** json

```java
/**
查询所有的一级商品类别
url:/goodstypeservlet?method=goodsTypeList"
param: null
response: json格式
	[
	{"id": 1,"name":"计算机"},
	{"id": 1,"name":"计算机"},
	{"id": 1,"name":"计算机"},
	{"id": 1,"name":"计算机"}
	]
 
*/
```

```java
// Servlet
public class GoodsTypeServlet {
    public String goodsTypeList(req,resp){
     	// service ==> List<GoodsType>
        // 转json  GsonUtil
        // 响应 response.getWriter().write(json)
    }
}
```

```java
// service
public List<GoodsType> queryAllType(){
    // DAO == List<GoodsType>
}
```

```java
// DAO
public List<GoodsType> queryAllType(){
    String sql = "select id,name from 类别表 where level=>?"// 1
}
```

## 四、注销

> **起始：** index.jsp
>
> **响应：** index.jsp

```java
/**
  去掉用户的一切痕迹
  1> session失效
  2> 删除cookie    cookie.setMaxage(0);response.addCookie(cookie);
*/
```

## 五、查询某类别下的所有商品

> **起始：** index.jsp
>
> **响应：** goodsList.jsp

```java
/**
url:  /goodsservlet?method=getGoodsListByTypeId&typeId=1
	  /goodsservlet?method=getGoodsListByTypeId&pageNum=1&pageSize=2&typeId=1
*/
```

```java
@Data
public class Page<T> {
    private int pageSize=2;
    private int pageNum=1;
    private List<T> data;
    private int totalCount;
    private int pages;
    public int getPages(){
        return (totalCount - 1) / pageSize + 1;
    }
    public int getOffset(){
        return (pageNum-1)*pageSize;
    }

    public Page(){}
    public Page(int pageSize, int pageNum) {
        this.pageSize = pageSize;
        this.pageNum = pageNum;
    }
}
```

```java
@WebServlet("goodsservlet")
public class GoodsServlet{
    // 分页查询： pageNum   pageSize
    public String getGoodsListByTypeId(req,resp){
        // 收参 ： 类别ID
        //        如果没有 pageNum   pageSize  就用默认值
        Page page = new Page();
        // 如果 pageNum  和 pageSize 有值
        page.setPageNum(xx);
        page.setPageSize(xxx);
        // service ： 返回Page对象[当前页号，每页条数，共多少页，共多少条，当前页数据集合]
        // 存值：request.setAttribute("pageBean",Page对象);
        // 响应：goodsList.jsp
    }
    
}
```

```java
// service
public Page queryGoodsByTypeId(int typeId,Page page){
    //DAO  List<Goods>
    page.setData(List<Goods>);
    //DAO long:当前类别下的商品总条数
    page.setTotalCount(总条数);
    return page;
}
```

```java
// DAO
public List<Goods> queryGoodsByTypeId(int typeId,Page page){
    String sql = "select xxxx from tb_goods where typeid=? limit ?,?";
    //                                               typeID     page.getOffset    page.getPageSize
    return List<Goods>;
}
public long queryGoodsCountByTypeId(int typeId){
    String sql = "select count(1) from tb_goods where typeid=?";
    //                                                 typeId
}
```

## 六、商品详情查询

> **起始：** goodsList.jsp
>
> **响应：** goodsDetail.jsp

```java
/**
 url: /goodsservlet?method=getGoodsById&id=4
*/
```

```java
public class GoodsServlet{
    
    public String getGoodsById(req,resp){
 		// 收参  商品ID
        // Service  返回 Goods
        // 存值 req.setAttribute("goods",goods对象)
        // 响应  goodsDetail.jsp
    }
}
```

```java
//DAO
public Goods queryGoodsById(int goodsId){
    String sql = "select xxxx from tb_goods where id=?";
    //                                        goodsId
    return  Goods对象;
}
```

## 七购物车

### 7.1 增加购物车

> **起始：** goodsDetail.jsp
>
> **响应：** cartSuccess.jsp

```java
/**
  约束：校验登录状态
*/
```

```java
// servlet
1. 收参：商品ID，购买数量，用户ID(从session中获得)
2. 调用service
3. 如果增加成功则 响应cartSucess.jsp
4. 如果增加失败则 响应 自己定

// service
1. 参数：Cart对象
2. 判断：当前用户的购物车中，是否已有此商品
   1> 有，调用更新DAO，将对应购物信息的数量更新(+1)
   2> 没有，调用增加DAO，在tb_cart表中增加一条数据(userid（id）,goodsid(pid),num)
3. 返回一个标记，代指是否操作成功。 0 非0  true  false
// 更新dao
1. 参数：Cart对象
2. 更新操作  set num=xxx where id=用户id and pid=商品id
// 增加dao
1. 参数：Cart对象
2. 增加操作  insert  (id,pid,num) values(用户id，商品id，购买数量)
// 查询dao
1. 参数：Cart对象
2. 查询： select num from tb_cart where id=用户id and pid=商品id
```

### 7.2 购物车查询

> **起始：** cartSuccess.jsp、header.jsp
>
> **响应：** cart.jsp（列表显示所有购物信息）

```java
/**
  约束：校验登录状态
*/
```

```java
// Servlet
// 1. 收参：用户ID（session中获得）
// 2. 调用service  ，获得购物信息列表:List<Cart> carts
// 3. 传值：request.setAttribute("cartItems",购物信息集合) 
//    响应：cart.jsp

//Service
// 1. 参数：用户ID
// 2. 封装数据格式： List<Cart>,其中Cart{id,pid,num,money,Goods goods}
      1> 调用DAO查询用户的所有购物车信息：List<Cart> carts 但此时并没有goods 和 money
      2> 遍历carts,每次查询对应的商品信息，然后计算money，然后将goods存入cart
// 3. 返回 carts.

// DAO
   GoodsDAO直接使用即可
   CartDAO: 参数=用户id，返回List<Cart> 【注意查询时附加条件 num>0】
```

```java
@Override
    public List<Cart> queryAllCart(int userId) throws SQLException {
        String sql = "select cart.num,goods.price,goods.name,goods.id from tb_cart cart join tb_goods goods on cart.pid=goods.id where cart.id=? and cart.num>0";
        List<Cart> carts = queryRunner.query(sql, new BeanListHandler<Cart>(Cart.class) {
            @Override
            public List<Cart> handle(ResultSet rs) throws SQLException {
                List<Cart> carts = new ArrayList<Cart>();
                while (rs.next()) {
                    int goodsId = rs.getInt("id");
                    int goodsNum = rs.getInt("num");
                    double price = rs.getDouble("price");
                    BigDecimal bigDecimal = new BigDecimal(String.valueOf(price));
                    BigDecimal totalMoney = bigDecimal.multiply(new BigDecimal(String.valueOf(goodsNum)));
                    // 商品信息
                    Goods goods = new Goods();
                    goods.setName(rs.getString("name"));
                    goods.setPrice(price);
                    goods.setId(goodsId);
                    // 一条购物信息
                    Cart cart = new Cart(null, null, goodsNum, totalMoney.doubleValue(),goods);
                    carts.add(cart);
                }
                return carts;
            }
        }, userId);
        return carts;
    }
```

### 7.3 购物数量修改

> **起始：** cart.jsp
>
> 整体过程和 `增加购物车` 功能基本一致，唯独响应过程不同，此处的响应是对接ajax
>
> 响应：随意

### 7.4 删除购物信息

> **起始：** cart.jsp 
>
> 整体过程和 `增加购物车` 功能基本一致，但最终是把num=0，此处的响应对接ajax
>
> **响应：** 随意即可

### 7.5 清空购物车

> **起始：** cart.jsp
>
> **响应：** 随意即可

```java
//servlet
1. 收参：用户ID(session中获取)
2. service
3. 响应：随意

// service
1. 收参：用户ID(session中获取)
2. DAO: 更新用户的购物信息 num=0;
3. 返回：rows

// dao
1. 收参：用户ID
2. sql = update tb_cart set num=0 where id=用户id
3. 返回 rows
```

## 八、结账

> **起始：** cart.jsp（购物车列表页面，点击“结账”）
>
> **响应：** order.jsp（订单信息显示页面）

```java
// OrderServlet
1. 收参：用户Id(Session中有)
2. 调用service: 获取 当前用户购物信息列表；用户收货地址列表
3. 存值：作用域中存储 List<Cart> 和 List<Address>
4. 响应：order.jsp

// service
1. CartService: 返回List<Cart>
2. AddressService: 查询当前用户的所有地址 ，返回 List<Address>

// dao
1. CartDAO: 返回List<Cart>
2. AddressDAO: 查询当前用户的所有地址 ，返回 List<Address>
```

## 九、提交订单

> **起始：** order.jsp中点击 `提交订单`（请求：/orderservlet?method=addOrder&aid=地址ID）
>
> **响应：** orderSuccess.jsp

```java
// servlet
1. 收参：地址ID，用户ID(session中存在)
2. service，完成下单业务
3. 响应：orderSuccess.jsp

// service
1. 参数：地址ID，用户ID
2. 封装订单信息 
	Order order = new Order();
	String orderID = UUID.randomUUID().toString().replaceAll("-","");
    order.setId(orderID); // 分配订单ID
	order.setAid(adressId);// 收货地址ID
    order.setUid(userId);// 用户ID
    order.setStatus(OrderStatus.WAIT_PAY); // 订单状态
3. 封装订单项信息
   3.1 查询购物车信息 List<Cart>  Cart中{pid,num,Goods goods}
   3.2 封装 List<OrderDetail>   OrderDetail中{orderId,pid,num,money}
   3.3 计算订单总价
   		order.setMoney(xxx);
4. 调用OrderDAO,完成订单插入
5. 调用OrderDetailDAO,保存多个订单项  oid,pid,num,money
6. 调用CartDAO,将购物车的num=0
// dao
OrderDAO 
1. 参数：Order对象
   返回：rows
OrderDetailDAO
1. 参数：List<OrderDetail>
   返回：rows
CartDAO
1. 参数：用户ID
   update tb_cart set num=0 where id=xxx
```

## 十、支付

> **起始：** orderSuccess.jsp中点击`微信支付`直接跳转`payWeixin.jsp?oid=72401c1289f74d8b85f1d3162aa9092e`
>
> 在pageWeixin.jsp 中点击`确认支付`
>
> `确认支付`访问：企业支付接口链接【订单号，支付金额(分)，描述，回调url】
>
> **响应：** message.jsp



```java
// servet  接收 回调url的访问
1. 收参： result  值=json
2. 解析：josn转成  java对象(Weixin)
3. 调service，完成订单支付核实
4. 响应 massage.jsp  显示核实结果

// service 
1. 参数：Weixin
2. 核实支付状态是否为“SUCCESS”
3. 核实实际支付金额和订单的应付金额是否一致
4. 返回 true/false
    
// dao  OrderDAO
1. 参数: 订单ID
2. 查询：select money from tb_order where id=订单ID
3. 返回：Double
```

### 10.1 请求参数

| 参数名称 | 参数介绍     | 参数格式 | 示例                      | 是否必填 | 备注           |
| -------- | ------------ | -------- | ------------------------- | -------- | -------------- |
| price    | 商品价格     | 字符串   | 1                         | 是       | 单位:分        |
| body     | 商品标题介绍 | 字符串   | 颈椎康复指南              | 是       |                |
| orderId  | 订单号       | 字符串   | dsd3sf3wsef               | 是       | 你网站的订单号 |
| url      | 回调地址     | 字符串   | http://localhost:8080/abc | 是       | 必须 http 开头 |

### 10.2 支付结果

> 当扫码支付完成后,程序会请求前面传递的回调地址接口,然后将结果传递过去
>
> 你在内部只需要判断支付结果,给对应的订单更改状态即可

| 参数名 | 值                                                         |
| ------ | ---------------------------------------------------------- |
| result | 下面 json 数据,注意参数名是 result, 值里面也是 result 开头 |

```json
{
  "result":
 	{
     "appid":"wx632c8f211f8122c6",
 	"bank_type":"CFT",
     "cash_fee":"1",
     "fee_type":"CNY",
     "is_subscribe":"Y",
     "mch_id":"1497984412",
     "nonce_str":"1631171182",
     "openid":"oUuptwrJudIfdihz1Z_T1AciMahs",
     "out_trade_no":"1221ea762d54496e83a33c9dab72f320",//订单编号
     "result_code":"SUCCESS",//支付结果
     "return_code":"SUCCESS",
     "sign":"5C7314AA4EB21772B42DBBCD65E56ACF",
     "time_end":"20180207163125",
     "total_fee":"1",//总支付价格
     "trade_type":"NATIVE",
     "transaction_id":"4200000065201802078895888133"},
 	 "type":0//类型 0为页面重定向,1为点对点服务器通信,因为是 localhost 地址,无法使用1
}
```


