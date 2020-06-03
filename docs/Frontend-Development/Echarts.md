* [Echarts统计图表](#echarts%E7%BB%9F%E8%AE%A1%E5%9B%BE%E8%A1%A8)
    * [一、什么是Echarts？](#%E4%B8%80%E4%BB%80%E4%B9%88%E6%98%AFecharts)
    * [二、Echarts的下载](#%E4%BA%8Cecharts%E7%9A%84%E4%B8%8B%E8%BD%BD)
    * [三、Echarts的开发步骤](#%E4%B8%89echarts%E7%9A%84%E5%BC%80%E5%8F%91%E6%AD%A5%E9%AA%A4)
      * [3\.1 Echarts的引入](#31-echarts%E7%9A%84%E5%BC%95%E5%85%A5)
      * [3\.2 Echarts入门案例步骤](#32-echarts%E5%85%A5%E9%97%A8%E6%A1%88%E4%BE%8B%E6%AD%A5%E9%AA%A4)
    * [四、Echarts官方文档的使用](#%E5%9B%9Becharts%E5%AE%98%E6%96%B9%E6%96%87%E6%A1%A3%E7%9A%84%E4%BD%BF%E7%94%A8)
      * [4\.1 5分钟上手教程](#41-5%E5%88%86%E9%92%9F%E4%B8%8A%E6%89%8B%E6%95%99%E7%A8%8B)
      * [4\.2 API](#42-api)
      * [4\.3 官方实例](#43-%E5%AE%98%E6%96%B9%E5%AE%9E%E4%BE%8B)
    * [五、Echarts与服务器的交互](#%E4%BA%94echarts%E4%B8%8E%E6%9C%8D%E5%8A%A1%E5%99%A8%E7%9A%84%E4%BA%A4%E4%BA%92)
      * [5\.1 为什么Echarts图表要与服务器交互？](#51-%E4%B8%BA%E4%BB%80%E4%B9%88echarts%E5%9B%BE%E8%A1%A8%E8%A6%81%E4%B8%8E%E6%9C%8D%E5%8A%A1%E5%99%A8%E4%BA%A4%E4%BA%92)
      * [5\.2 Echarts与服务器交互的实现](#52-echarts%E4%B8%8E%E6%9C%8D%E5%8A%A1%E5%99%A8%E4%BA%A4%E4%BA%92%E7%9A%84%E5%AE%9E%E7%8E%B0)
          * [项目结构](#%E9%A1%B9%E7%9B%AE%E7%BB%93%E6%9E%84)
          * [所需jar包](#%E6%89%80%E9%9C%80jar%E5%8C%85)
          * [LineChart\.jsp页面](#linechartjsp%E9%A1%B5%E9%9D%A2)
          * [Sale实体类](#sale%E5%AE%9E%E4%BD%93%E7%B1%BB)
          * [c3p0\.properties配置文件](#c3p0properties%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6)
          * [DBUtils连接池工具类](#dbutils%E8%BF%9E%E6%8E%A5%E6%B1%A0%E5%B7%A5%E5%85%B7%E7%B1%BB)
          * [Jackson解析工具类](#jackson%E8%A7%A3%E6%9E%90%E5%B7%A5%E5%85%B7%E7%B1%BB)
          * [LineChartServlet](#linechartservlet)
          * [SaleDao](#saledao)
          * [SaleDaoImpl](#saledaoimpl)
          * [SaleService](#saleservice)
          * [SaleServiceImpl](#saleserviceimpl)
          * [页面显示效果](#%E9%A1%B5%E9%9D%A2%E6%98%BE%E7%A4%BA%E6%95%88%E6%9E%9C)

# Echarts统计图表

------

### 一、什么是Echarts？

> ECharts 是一款由百度前端技术部开发的，基于 Javascript 的数据可视化图表库，提供直 观，生动，可交互，可个性化定制的数据可视化图表。



### 二、Echarts的下载

> Echarts官网下载地址：[https://echarts.apache.org/zh/index.html](https://echarts.apache.org/zh/index.html)

![image-20200527211614311](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200527211615.png)

![image-20200527211643984](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200527211645.png)



### 三、Echarts的开发步骤

#### 3.1 Echarts的引入

> 将Echarts引入到项目中，其实官方就给了解释。可以点击5分钟上手Echarts进入。这里通过标签引入打包下载好的Echarts。

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <!-- 引入 ECharts 文件 -->
    <script src="echarts.min.js"></script>
</head>
</html>
```



#### 3.2 Echarts入门案例步骤

- 引入Echarts文件
- 为 ECharts 准备一个具备高宽的DOM容器
- 初始化一个echarts实例
- 指定你所需要图的配置项和数据
- 通过 setOption 方法生成一个简单的柱状图

```html
<%--
  Created by IntelliJ IDEA.
  User: Ziph
  Date: 2020/5/19
  Time: 13:22
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>echarts入门</title>
    <%--1.引入echarts.js--%>
    <script src="echarts/echarts.min.js"></script>
    <script src="js/jquery-3.2.1.min.js"></script>

    <script type="text/javascript">
        $(function () {
            /*3.初始化echarts容器*/
            var eCharts = echarts.init(document.getElementById("main"));
            /*4.设定echarts属性*/
            eCharts.setOption({
                title: {
                    text: 'ECharts 入门示例'
                },
                tooltip: {},
                legend: {
                    data: ['销量']
                },
                xAxis: {
                    data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
                },
                yAxis: {},
                series: [{
                    name: '销量',
                    type: 'bar',
                    data: [5, 20, 36, 10, 10, 20]
                }]
            });
        });
    </script>
</head>
<body>
<%--2.设定一个具有宽高的echarts容器--%>
<div id="main" style="width: 1000px;height: 400px">

</div>
</body>
</html>
```

![image-20200527212304163](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200527212306.png)



### 四、Echarts官方文档的使用

> 关于Echarts的使用，我们必须学会查看Echarts的官方文档，这里我给大家介绍一下官方文档的常用操作。



#### 4.1 5分钟上手教程

> 5分钟上手教程就是新手教程了！

![image-20200527212635138](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200527212637.png)



#### 4.2 API

> 可以根据API查询在使用Echarts时的语法！可以根据语法来操作Echarts图表！

![image-20200527212909621](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200527212911.png)



#### 4.3 官方实例

> 可以根据官方实例，找到并修改自己想要的图表，最后粘贴复制到自己的项目中使用即可！

![image-20200527213152126](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200527213155.png)

![image-20200527213324952](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200527213326.png)



### 五、Echarts与服务器的交互

#### 5.1 为什么Echarts图表要与服务器交互？

> 我们在使用Echarts的时候，在页面中是写死的图标信息。但是当我们真正的用于开发时，图表的信息就必须保证动态的显示周期内统计的数据信息。这时候我们就必须使用数据库来存储信息，使得数据动态的显示。



#### 5.2 Echarts与服务器交互的实现

###### 项目结构

![image-20200527214007747](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200527214009.png)

###### 所需jar包

![image-20200527214212198](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200527214214.png)

###### LineChart.jsp页面

```html
<%--
  Created by IntelliJ IDEA.
  User: Ziph
  Date: 2020/5/19
  Time: 13:34
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>echarts折线图</title>
    <script src="echarts/echarts.min.js"></script>
    <script src="js/jquery-3.2.1.min.js"></script>

    <script type="text/javascript">
        $(function () {
            var eCharts = echarts.init(document.getElementById("main"));
            $.get("${pageContext.request.contextPath}/LineChart", {}, function (data) {
                var option = {
                    title: {
                        text: '卖家周记录'
                    },
                    xAxis: {
                        name: 'weeks',
                        type: 'category',
                        data: data.weekList
                    },
                    yAxis: {
                        name: '销量/件',
                        type: 'value'
                    },
                    series: [{
                        data: data.saleList,
                        type: 'line',
                    }]
                };
                eCharts.setOption(option);
            }, "json");
        });
    </script>
</head>
<body>
<div id="main" style="width: 1000px;height: 400px"></div>
</body>
</html>
```

###### Sale实体类

```java
package com.mylifes1110.java.bean;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Sale {
	//使用的Lombok插件，大家也可以自行生成所需的get/set方法、toString方法等
    private Integer id;
    private Integer sales;
    private String  week;
}
```

###### c3p0.properties配置文件

```java
c3p0.driverClass=com.mysql.jdbc.Driver
c3p0.jdbcUrl=jdbc:mysql://localhost:3306/temp
c3p0.user=root
c3p0.password=123456
```

###### DBUtils连接池工具类

```java
package com.mylifes1110.java.utils;

import com.mchange.v2.c3p0.ComboPooledDataSource;

/**
 * c3p0工具类
 */
public class DBUtils {
    private static ComboPooledDataSource dataSource;

    static {
        dataSource = new ComboPooledDataSource();
    }

    public static ComboPooledDataSource getDataSource() {
        return dataSource;
    }
}
```

###### Jackson解析工具类

```java
package com.mylifes1110.java.utils;

import java.io.IOException;

import javax.servlet.http.HttpServletResponse;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

/**
 * Jackson工具类
 */
public class JSONUtils {

    /**
     * 将Java对象转换为JSON字符串
     *
     * @param o Java对象
     * @return JSON字符串
     * @throws JsonProcessingException
     */
    public static String toJsonStr(Object o) throws JsonProcessingException {
        return new ObjectMapper().writeValueAsString(o);
    }

    /**
     * 将JSON字符串相应到浏览器
     *
     * @param response 响应对象
     * @param o        Java对象
     * @throws IOException
     */
    public static void writeJsonStr(HttpServletResponse response, Object o) throws IOException {
        response.setContentType("application/json;charset=utf-8");
        response.getWriter().write(toJsonStr(o));
    }
}
```

###### LineChartServlet

```java
package com.mylifes1110.java.controller;

import java.io.IOException;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.mylifes1110.java.bean.Sale;
import com.mylifes1110.java.service.SaleService;
import com.mylifes1110.java.service.impl.SaleServiceImpl;
import com.mylifes1110.java.utils.JSONUtils;

import lombok.SneakyThrows;

@WebServlet(
    name  = "LineChartServlet",
    value = "/LineChart"
)
public class LineChartServlet extends HttpServlet {
    @SneakyThrows
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        SaleService   saleService = new SaleServiceImpl();
        List<Sale>    sales       = saleService.selectSalesList();
        List<Integer> saleList    = new ArrayList<>();
        List<String>  weekList    = new ArrayList<>();

        for (Sale sale : sales) {
            saleList.add(sale.getSales());
            weekList.add(sale.getWeek());
        }

        Map<String, Object> map = new HashMap<>();

        map.put("weekList", weekList);
        map.put("saleList", saleList);
        JSONUtils.writeJsonStr(response, map);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        doGet(request, response);
    }
}
```

###### SaleDao

```java
package com.mylifes1110.java.dao;

import com.mylifes1110.java.bean.Sale;

import java.sql.SQLException;
import java.util.List;

public interface SaleDao {
    List<Sale> selectSalesList() throws SQLException;
}
```

###### SaleDaoImpl

```java
package com.mylifes1110.java.dao.impl;

import java.sql.SQLException;

import java.util.List;

import org.apache.commons.dbutils.QueryRunner;
import org.apache.commons.dbutils.handlers.BeanListHandler;

import com.mylifes1110.java.bean.Sale;
import com.mylifes1110.java.dao.SaleDao;
import com.mylifes1110.java.utils.DBUtils;

public class SaleDaoImpl implements SaleDao {
    @Override
    public List<Sale> selectSalesList() throws SQLException {
        return new QueryRunner(DBUtils.getDataSource()).query("select * from tb_sales ",
                                                              new BeanListHandler<Sale>(Sale.class));
    }
}
```

###### SaleService

```java
package com.mylifes1110.java.service;

import com.mylifes1110.java.bean.Sale;

import java.sql.SQLException;
import java.util.List;

public interface SaleService {
    List<Sale> selectSalesList() throws SQLException;
}
```

###### SaleServiceImpl

```java
package com.mylifes1110.java.service.impl;

import com.mylifes1110.java.bean.Sale;
import com.mylifes1110.java.dao.SaleDao;
import com.mylifes1110.java.dao.impl.SaleDaoImpl;
import com.mylifes1110.java.service.SaleService;

import java.sql.SQLException;
import java.util.List;

public class SaleServiceImpl implements SaleService {
    private SaleDao saleDao = new SaleDaoImpl();
    @Override
    public List<Sale> selectSalesList() throws SQLException {
        return saleDao.selectSalesList();
    }
}
```

###### 页面显示效果

> 这样我们就可以修改数据库，及时、动态的设计到服务器中显示数据图表统计信息了！

![image-20200527214852992](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200527214854.png)