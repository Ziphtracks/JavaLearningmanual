* [MySQL数据库](#mysql%E6%95%B0%E6%8D%AE%E5%BA%93)
    * [一、引言](#%E4%B8%80%E5%BC%95%E8%A8%80)
      * [1\.1 现有的数据存储方式有哪些？](#11-%E7%8E%B0%E6%9C%89%E7%9A%84%E6%95%B0%E6%8D%AE%E5%AD%98%E5%82%A8%E6%96%B9%E5%BC%8F%E6%9C%89%E5%93%AA%E4%BA%9B)
      * [1\.2 以上存储方式存在哪些缺点？](#12-%E4%BB%A5%E4%B8%8A%E5%AD%98%E5%82%A8%E6%96%B9%E5%BC%8F%E5%AD%98%E5%9C%A8%E5%93%AA%E4%BA%9B%E7%BC%BA%E7%82%B9)
    * [二、 数据库](#%E4%BA%8C-%E6%95%B0%E6%8D%AE%E5%BA%93)
      * [2\.1 概念](#21-%E6%A6%82%E5%BF%B5)
      * [2\.2 数据库的分类](#22-%E6%95%B0%E6%8D%AE%E5%BA%93%E7%9A%84%E5%88%86%E7%B1%BB)
    * [三、数据库管理系统](#%E4%B8%89%E6%95%B0%E6%8D%AE%E5%BA%93%E7%AE%A1%E7%90%86%E7%B3%BB%E7%BB%9F)
      * [3\.1 概念](#31-%E6%A6%82%E5%BF%B5)
      * [3\.2 常见的数据库管理系统](#32-%E5%B8%B8%E8%A7%81%E7%9A%84%E6%95%B0%E6%8D%AE%E5%BA%93%E7%AE%A1%E7%90%86%E7%B3%BB%E7%BB%9F)
    * [四、MySQL](#%E5%9B%9Bmysql)
      * [4\.1 简介](#41-%E7%AE%80%E4%BB%8B)
      * [4\.2 访问与下载](#42-%E8%AE%BF%E9%97%AE%E4%B8%8E%E4%B8%8B%E8%BD%BD)
      * [4\.3 配置环境变量](#43-%E9%85%8D%E7%BD%AE%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F)
      * [4\.4 MySQL的目录结构](#44-mysql%E7%9A%84%E7%9B%AE%E5%BD%95%E7%BB%93%E6%9E%84)
      * [4\.5 MySQL配置文件](#45-mysql%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6)
    * [五、 SQL](#%E4%BA%94-sql)
      * [5\.1 概念](#51-%E6%A6%82%E5%BF%B5)
      * [5\.2 MySQL应用](#52-mysql%E5%BA%94%E7%94%A8)
      * [5\.3 基本命令](#53-%E5%9F%BA%E6%9C%AC%E5%91%BD%E4%BB%A4)
    * [六、客户端工具](#%E5%85%AD%E5%AE%A2%E6%88%B7%E7%AB%AF%E5%B7%A5%E5%85%B7)
      * [6\.1 Navicat](#61-navicat)
      * [6\.2 SQLyog](#62-sqlyog)
      * [6\.3 DataGrip(Idea开发工具集成)](#63-datagripidea%E5%BC%80%E5%8F%91%E5%B7%A5%E5%85%B7%E9%9B%86%E6%88%90)
    * [七、 执行SQL脚本](#%E4%B8%83-%E6%89%A7%E8%A1%8Csql%E8%84%9A%E6%9C%AC)
    * [八、 数据查询【重点】](#%E5%85%AB-%E6%95%B0%E6%8D%AE%E6%9F%A5%E8%AF%A2%E9%87%8D%E7%82%B9)
      * [8\.1 数据表的基本结构](#81-%E6%95%B0%E6%8D%AE%E8%A1%A8%E7%9A%84%E5%9F%BA%E6%9C%AC%E7%BB%93%E6%9E%84)
      * [8\.2 基本查询](#82-%E5%9F%BA%E6%9C%AC%E6%9F%A5%E8%AF%A2)
        * [8\.2\.1 查询所有列](#821-%E6%9F%A5%E8%AF%A2%E6%89%80%E6%9C%89%E5%88%97)
        * [8\.2\.2 查询部分列](#822-%E6%9F%A5%E8%AF%A2%E9%83%A8%E5%88%86%E5%88%97)
        * [8\.2\.3 对列中的数据进行运算](#823-%E5%AF%B9%E5%88%97%E4%B8%AD%E7%9A%84%E6%95%B0%E6%8D%AE%E8%BF%9B%E8%A1%8C%E8%BF%90%E7%AE%97)
        * [8\.2\.4 列的别名](#824-%E5%88%97%E7%9A%84%E5%88%AB%E5%90%8D)
        * [8\.2\.5 查询结果去重](#825-%E6%9F%A5%E8%AF%A2%E7%BB%93%E6%9E%9C%E5%8E%BB%E9%87%8D)
        * [8\.3 排序查询](#83-%E6%8E%92%E5%BA%8F%E6%9F%A5%E8%AF%A2)
        * [8\.3\.1 依据单列进行排序](#831-%E4%BE%9D%E6%8D%AE%E5%8D%95%E5%88%97%E8%BF%9B%E8%A1%8C%E6%8E%92%E5%BA%8F)
        * [8\.3\.2 依据多列进行排序](#832-%E4%BE%9D%E6%8D%AE%E5%A4%9A%E5%88%97%E8%BF%9B%E8%A1%8C%E6%8E%92%E5%BA%8F)
      * [8\.4 条件查询](#84-%E6%9D%A1%E4%BB%B6%E6%9F%A5%E8%AF%A2)
        * [8\.4\.1 等值判断(=)](#841-%E7%AD%89%E5%80%BC%E5%88%A4%E6%96%AD)
        * [8\.4\.2 不等值判断(&gt;、&lt;、&gt;=、&lt;=、\!=、&lt;&gt;)](#842-%E4%B8%8D%E7%AD%89%E5%80%BC%E5%88%A4%E6%96%AD)
        * [8\.4\.3 逻辑判断(and、or、not)](#843-%E9%80%BB%E8%BE%91%E5%88%A4%E6%96%ADandornot)
        * [8\.4\.4 区间判断(between and)](#844-%E5%8C%BA%E9%97%B4%E5%88%A4%E6%96%ADbetween-and)
        * [8\.4\.5 NULL值判断(IS NULL、IS NOT NULL)](#845-null%E5%80%BC%E5%88%A4%E6%96%ADis-nullis-not-null)
        * [8\.4\.6 枚举查询(IN (值1,值2,值n\.\.\.\.))](#846-%E6%9E%9A%E4%B8%BE%E6%9F%A5%E8%AF%A2in-%E5%80%BC1%E5%80%BC2%E5%80%BCn)
        * [8\.4\.7 模糊查询(\_、%)](#847-%E6%A8%A1%E7%B3%8A%E6%9F%A5%E8%AF%A2_)
        * [8\.4\.8 分支结构查询](#848-%E5%88%86%E6%94%AF%E7%BB%93%E6%9E%84%E6%9F%A5%E8%AF%A2)
      * [8\.5 时间查询](#85-%E6%97%B6%E9%97%B4%E6%9F%A5%E8%AF%A2)
        * [8\.5\.1 获取时间](#851-%E8%8E%B7%E5%8F%96%E6%97%B6%E9%97%B4)
      * [8\.6 字符串查询](#86-%E5%AD%97%E7%AC%A6%E4%B8%B2%E6%9F%A5%E8%AF%A2)
        * [8\.6\.1 字符串函数应用](#861-%E5%AD%97%E7%AC%A6%E4%B8%B2%E5%87%BD%E6%95%B0%E5%BA%94%E7%94%A8)
      * [8\.7 聚合函数](#87-%E8%81%9A%E5%90%88%E5%87%BD%E6%95%B0)
        * [8\.7\.1 求总行数](#871-%E6%B1%82%E6%80%BB%E8%A1%8C%E6%95%B0)
        * [8\.7\.2 单列总和](#872-%E5%8D%95%E5%88%97%E6%80%BB%E5%92%8C)
        * [8\.7\.3 单列平均值](#873-%E5%8D%95%E5%88%97%E5%B9%B3%E5%9D%87%E5%80%BC)
        * [8\.7\.4 单列最大值](#874-%E5%8D%95%E5%88%97%E6%9C%80%E5%A4%A7%E5%80%BC)
        * [8\.7\.5 单列最小值](#875-%E5%8D%95%E5%88%97%E6%9C%80%E5%B0%8F%E5%80%BC)
      * [8\.8 分组查询](#88-%E5%88%86%E7%BB%84%E6%9F%A5%E8%AF%A2)
        * [8\.8\.1 查询各部门的总人数](#881-%E6%9F%A5%E8%AF%A2%E5%90%84%E9%83%A8%E9%97%A8%E7%9A%84%E6%80%BB%E4%BA%BA%E6%95%B0)
        * [8\.8\.2 查询各部门的平均工资](#882-%E6%9F%A5%E8%AF%A2%E5%90%84%E9%83%A8%E9%97%A8%E7%9A%84%E5%B9%B3%E5%9D%87%E5%B7%A5%E8%B5%84)
        * [8\.8\.3 查询各个部门、各个岗位的人数](#883-%E6%9F%A5%E8%AF%A2%E5%90%84%E4%B8%AA%E9%83%A8%E9%97%A8%E5%90%84%E4%B8%AA%E5%B2%97%E4%BD%8D%E7%9A%84%E4%BA%BA%E6%95%B0)
        * [8\.8\.4 常见问题](#884-%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98)
      * [8\.9  分组过滤查询](#89--%E5%88%86%E7%BB%84%E8%BF%87%E6%BB%A4%E6%9F%A5%E8%AF%A2)
        * [8\.9\.1 统计部门中的最高工资](#891-%E7%BB%9F%E8%AE%A1%E9%83%A8%E9%97%A8%E4%B8%AD%E7%9A%84%E6%9C%80%E9%AB%98%E5%B7%A5%E8%B5%84)
      * [8\.10 限定查询](#810-%E9%99%90%E5%AE%9A%E6%9F%A5%E8%AF%A2)
        * [8\.10\.1 查询前5行记录](#8101-%E6%9F%A5%E8%AF%A2%E5%89%8D5%E8%A1%8C%E8%AE%B0%E5%BD%95)
        * [8\.10\.2 查询范围记录](#8102-%E6%9F%A5%E8%AF%A2%E8%8C%83%E5%9B%B4%E8%AE%B0%E5%BD%95)
      * [8\.11 查询总结](#811-%E6%9F%A5%E8%AF%A2%E6%80%BB%E7%BB%93)
        * [8\.11\.1 SQL语句编写顺序](#8111-sql%E8%AF%AD%E5%8F%A5%E7%BC%96%E5%86%99%E9%A1%BA%E5%BA%8F)
        * [8\.11\.2 SQL语句执行顺序](#8112-sql%E8%AF%AD%E5%8F%A5%E6%89%A7%E8%A1%8C%E9%A1%BA%E5%BA%8F)
      * [8\.12  子查询（作为条件判断）](#812--%E5%AD%90%E6%9F%A5%E8%AF%A2%E4%BD%9C%E4%B8%BA%E6%9D%A1%E4%BB%B6%E5%88%A4%E6%96%AD)
        * [8\.12\.1 查询工资大于Bruce工资的员工信息](#8121-%E6%9F%A5%E8%AF%A2%E5%B7%A5%E8%B5%84%E5%A4%A7%E4%BA%8Ebruce%E5%B7%A5%E8%B5%84%E7%9A%84%E5%91%98%E5%B7%A5%E4%BF%A1%E6%81%AF)
      * [8\.13 子查询(作为枚举查询的条件)](#813-%E5%AD%90%E6%9F%A5%E8%AF%A2%E4%BD%9C%E4%B8%BA%E6%9E%9A%E4%B8%BE%E6%9F%A5%E8%AF%A2%E7%9A%84%E6%9D%A1%E4%BB%B6)
        * [8\.13\.1 查询与King同一部门员工信息](#8131-%E6%9F%A5%E8%AF%A2%E4%B8%8Eking%E5%90%8C%E4%B8%80%E9%83%A8%E9%97%A8%E5%91%98%E5%B7%A5%E4%BF%A1%E6%81%AF)
        * [8\.13\.2 工资高于60部门的所有人的信息](#8132-%E5%B7%A5%E8%B5%84%E9%AB%98%E4%BA%8E60%E9%83%A8%E9%97%A8%E7%9A%84%E6%89%80%E6%9C%89%E4%BA%BA%E7%9A%84%E4%BF%A1%E6%81%AF)
      * [8\.14 子查询(作为一张表)](#814-%E5%AD%90%E6%9F%A5%E8%AF%A2%E4%BD%9C%E4%B8%BA%E4%B8%80%E5%BC%A0%E8%A1%A8)
        * [8\.14\.1 查询表中部分列的信息，获得工资大于15000的](#8141-%E6%9F%A5%E8%AF%A2%E8%A1%A8%E4%B8%AD%E9%83%A8%E5%88%86%E5%88%97%E7%9A%84%E4%BF%A1%E6%81%AF%E8%8E%B7%E5%BE%97%E5%B7%A5%E8%B5%84%E5%A4%A7%E4%BA%8E15000%E7%9A%84)
      * [8\.15 合并查询（了解）](#815-%E5%90%88%E5%B9%B6%E6%9F%A5%E8%AF%A2%E4%BA%86%E8%A7%A3)
        * [8\.15\.1 合并两张表的结果（去除重复记录）](#8151-%E5%90%88%E5%B9%B6%E4%B8%A4%E5%BC%A0%E8%A1%A8%E7%9A%84%E7%BB%93%E6%9E%9C%E5%8E%BB%E9%99%A4%E9%87%8D%E5%A4%8D%E8%AE%B0%E5%BD%95)
        * [8\.15\.2 合并两张表的结果(保留重复记录)](#8152-%E5%90%88%E5%B9%B6%E4%B8%A4%E5%BC%A0%E8%A1%A8%E7%9A%84%E7%BB%93%E6%9E%9C%E4%BF%9D%E7%95%99%E9%87%8D%E5%A4%8D%E8%AE%B0%E5%BD%95)
      * [8\.16 表连接查询](#816-%E8%A1%A8%E8%BF%9E%E6%8E%A5%E6%9F%A5%E8%AF%A2)
        * [8\.16\.1 内连接查询(INNER JOIN ON)](#8161-%E5%86%85%E8%BF%9E%E6%8E%A5%E6%9F%A5%E8%AF%A2inner-join-on)
        * [8\.16\.2 内连接查询](#8162-%E5%86%85%E8%BF%9E%E6%8E%A5%E6%9F%A5%E8%AF%A2)
        * [8\.16\.3 三表连接查询](#8163-%E4%B8%89%E8%A1%A8%E8%BF%9E%E6%8E%A5%E6%9F%A5%E8%AF%A2)
        * [8\.16\.4 多表连接查询](#8164-%E5%A4%9A%E8%A1%A8%E8%BF%9E%E6%8E%A5%E6%9F%A5%E8%AF%A2)
        * [8\.16\.5 左外连接查询(LEFT JOIN ON)](#8165-%E5%B7%A6%E5%A4%96%E8%BF%9E%E6%8E%A5%E6%9F%A5%E8%AF%A2left-join-on)
        * [8\.16\.6 右外连接查询(RIGHT JOIN ON)](#8166-%E5%8F%B3%E5%A4%96%E8%BF%9E%E6%8E%A5%E6%9F%A5%E8%AF%A2right-join-on)
    * [九、 DML操作（增、删、改）](#%E4%B9%9D-dml%E6%93%8D%E4%BD%9C%E5%A2%9E%E5%88%A0%E6%94%B9)
      * [9\.1 新增(INSERT)](#91-%E6%96%B0%E5%A2%9Einsert)
        * [9\.1\.1 添加一条信息](#911-%E6%B7%BB%E5%8A%A0%E4%B8%80%E6%9D%A1%E4%BF%A1%E6%81%AF)
      * [9\.2 修改(UPDATE)](#92-%E4%BF%AE%E6%94%B9update)
        * [9\.2\.1 修改一条信息](#921-%E4%BF%AE%E6%94%B9%E4%B8%80%E6%9D%A1%E4%BF%A1%E6%81%AF)
      * [9\.3 删除](#93-%E5%88%A0%E9%99%A4)
        * [9\.3\.1 删除一条信息](#931-%E5%88%A0%E9%99%A4%E4%B8%80%E6%9D%A1%E4%BF%A1%E6%81%AF)
      * [9\.4 清空(TRUNCATE)](#94-%E6%B8%85%E7%A9%BAtruncate)
        * [9\.4\.1 清空整张表](#941-%E6%B8%85%E7%A9%BA%E6%95%B4%E5%BC%A0%E8%A1%A8)
    * [十、库表操作](#%E5%8D%81%E5%BA%93%E8%A1%A8%E6%93%8D%E4%BD%9C)
      * [10\.1 数据库创建(CREATE)](#101-%E6%95%B0%E6%8D%AE%E5%BA%93%E5%88%9B%E5%BB%BAcreate)
        * [10\.1 创建数据库](#101-%E5%88%9B%E5%BB%BA%E6%95%B0%E6%8D%AE%E5%BA%93)
      * [10\.2 修改数据库](#102-%E4%BF%AE%E6%94%B9%E6%95%B0%E6%8D%AE%E5%BA%93)
        * [10\.2\.1 修改数据库的字符集](#1021-%E4%BF%AE%E6%94%B9%E6%95%B0%E6%8D%AE%E5%BA%93%E7%9A%84%E5%AD%97%E7%AC%A6%E9%9B%86)
      * [10\.3 删除数据库](#103-%E5%88%A0%E9%99%A4%E6%95%B0%E6%8D%AE%E5%BA%93)
        * [10\.3\.1 删除数据库](#1031-%E5%88%A0%E9%99%A4%E6%95%B0%E6%8D%AE%E5%BA%93)
      * [10\.4 数据类型](#104-%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
        * [10\.4\.1 数值类型](#1041-%E6%95%B0%E5%80%BC%E7%B1%BB%E5%9E%8B)
        * [10\.4\.2 日期类型](#1042-%E6%97%A5%E6%9C%9F%E7%B1%BB%E5%9E%8B)
        * [10\.4\.3 字符串类型](#1043-%E5%AD%97%E7%AC%A6%E4%B8%B2%E7%B1%BB%E5%9E%8B)
      * [10\.5 数据表的创建(CREATE)](#105-%E6%95%B0%E6%8D%AE%E8%A1%A8%E7%9A%84%E5%88%9B%E5%BB%BAcreate)
        * [10\.5\.1 创建表](#1051-%E5%88%9B%E5%BB%BA%E8%A1%A8)
    * [十一、约束](#%E5%8D%81%E4%B8%80%E7%BA%A6%E6%9D%9F)
      * [10\.1 实体完整性约束](#101-%E5%AE%9E%E4%BD%93%E5%AE%8C%E6%95%B4%E6%80%A7%E7%BA%A6%E6%9D%9F)
        * [10\.1\.1 主键约束](#1011-%E4%B8%BB%E9%94%AE%E7%BA%A6%E6%9D%9F)
        * [10\.1\.2 唯一约束](#1012-%E5%94%AF%E4%B8%80%E7%BA%A6%E6%9D%9F)
        * [10\.1\.3 自动增长列](#1013-%E8%87%AA%E5%8A%A8%E5%A2%9E%E9%95%BF%E5%88%97)
      * [10\.2 域完整性约束](#102-%E5%9F%9F%E5%AE%8C%E6%95%B4%E6%80%A7%E7%BA%A6%E6%9D%9F)
        * [10\.2\.1 非空约束](#1021-%E9%9D%9E%E7%A9%BA%E7%BA%A6%E6%9D%9F)
        * [10\.2\.2 默认值约束](#1022-%E9%BB%98%E8%AE%A4%E5%80%BC%E7%BA%A6%E6%9D%9F)
        * [10\.2\.3 引用完整性约束](#1023-%E5%BC%95%E7%94%A8%E5%AE%8C%E6%95%B4%E6%80%A7%E7%BA%A6%E6%9D%9F)
      * [11\.3 约束创建整合](#113-%E7%BA%A6%E6%9D%9F%E5%88%9B%E5%BB%BA%E6%95%B4%E5%90%88)
        * [11\.3\.1 创建Grade表](#1131-%E5%88%9B%E5%BB%BAgrade%E8%A1%A8)
        * [11\.3\.2 创建Student表](#1132-%E5%88%9B%E5%BB%BAstudent%E8%A1%A8)
      * [11\.4 数据表的修改（ALTER）](#114-%E6%95%B0%E6%8D%AE%E8%A1%A8%E7%9A%84%E4%BF%AE%E6%94%B9alter)
        * [11\.4\.1 向现有表中添加列](#1141-%E5%90%91%E7%8E%B0%E6%9C%89%E8%A1%A8%E4%B8%AD%E6%B7%BB%E5%8A%A0%E5%88%97)
        * [11\.4\.2 修改表中的列](#1142-%E4%BF%AE%E6%94%B9%E8%A1%A8%E4%B8%AD%E7%9A%84%E5%88%97)
        * [11\.4\.3 删除表中的列](#1143-%E5%88%A0%E9%99%A4%E8%A1%A8%E4%B8%AD%E7%9A%84%E5%88%97)
        * [11\.4\.4 改变列名](#1144-%E6%94%B9%E5%8F%98%E5%88%97%E5%90%8D)
        * [11\.4\.5 修改表名](#1145-%E4%BF%AE%E6%94%B9%E8%A1%A8%E5%90%8D)
      * [11\.5 删除表(DROP)](#115-%E5%88%A0%E9%99%A4%E8%A1%A8drop)
        * [11\.5\.1 删除学生表](#1151-%E5%88%A0%E9%99%A4%E5%AD%A6%E7%94%9F%E8%A1%A8)
    * [十二、事务](#%E5%8D%81%E4%BA%8C%E4%BA%8B%E5%8A%A1)
      * [12\.1 模拟转账](#121-%E6%A8%A1%E6%8B%9F%E8%BD%AC%E8%B4%A6)
        * [12\.1\.1 模拟账户转钱](#1211-%E6%A8%A1%E6%8B%9F%E8%B4%A6%E6%88%B7%E8%BD%AC%E9%92%B1)
        * [12\.1\.2 模拟转账错误](#1212-%E6%A8%A1%E6%8B%9F%E8%BD%AC%E8%B4%A6%E9%94%99%E8%AF%AF)
      * [12\.2 事务的概念](#122-%E4%BA%8B%E5%8A%A1%E7%9A%84%E6%A6%82%E5%BF%B5)
      * [12\.3 事务的边界](#123-%E4%BA%8B%E5%8A%A1%E7%9A%84%E8%BE%B9%E7%95%8C)
      * [12\.4 事务的原理](#124-%E4%BA%8B%E5%8A%A1%E7%9A%84%E5%8E%9F%E7%90%86)
      * [12\.5 事务的特性](#125-%E4%BA%8B%E5%8A%A1%E7%9A%84%E7%89%B9%E6%80%A7)
      * [12\.6 事务的应用](#126-%E4%BA%8B%E5%8A%A1%E7%9A%84%E5%BA%94%E7%94%A8)
        * [12\.6\.1 事务完成转账](#1261-%E4%BA%8B%E5%8A%A1%E5%AE%8C%E6%88%90%E8%BD%AC%E8%B4%A6)
        * [12\.6\.2 事务完成转账的解决与思想（解释事务）](#1262-%E4%BA%8B%E5%8A%A1%E5%AE%8C%E6%88%90%E8%BD%AC%E8%B4%A6%E7%9A%84%E8%A7%A3%E5%86%B3%E4%B8%8E%E6%80%9D%E6%83%B3%E8%A7%A3%E9%87%8A%E4%BA%8B%E5%8A%A1)
    * [十三、权限管理](#%E5%8D%81%E4%B8%89%E6%9D%83%E9%99%90%E7%AE%A1%E7%90%86)
      * [13\.1 创建用户](#131-%E5%88%9B%E5%BB%BA%E7%94%A8%E6%88%B7)
        * [13\.1\.1 创建一个用户](#1311-%E5%88%9B%E5%BB%BA%E4%B8%80%E4%B8%AA%E7%94%A8%E6%88%B7)
      * [13\.2 授权](#132-%E6%8E%88%E6%9D%83)
        * [13\.2\.1 用户授权](#1321-%E7%94%A8%E6%88%B7%E6%8E%88%E6%9D%83)
      * [13\.3 撤销权限](#133-%E6%92%A4%E9%94%80%E6%9D%83%E9%99%90)
        * [13\.3\.1 撤销用户权限](#1331-%E6%92%A4%E9%94%80%E7%94%A8%E6%88%B7%E6%9D%83%E9%99%90)
      * [13\.4 删除用户](#134-%E5%88%A0%E9%99%A4%E7%94%A8%E6%88%B7)
        * [13\.4\.1 删除用户](#1341-%E5%88%A0%E9%99%A4%E7%94%A8%E6%88%B7)
    * [十四、视图](#%E5%8D%81%E5%9B%9B%E8%A7%86%E5%9B%BE)
        * [14\.1 概念](#141-%E6%A6%82%E5%BF%B5)
        * [14\.2 视图特点](#142-%E8%A7%86%E5%9B%BE%E7%89%B9%E7%82%B9)
      * [14\.3 视图的创建](#143-%E8%A7%86%E5%9B%BE%E7%9A%84%E5%88%9B%E5%BB%BA)
        * [14\.3\.1 创建视图](#1431-%E5%88%9B%E5%BB%BA%E8%A7%86%E5%9B%BE)
        * [14\.3\.2 使用视图](#1432-%E4%BD%BF%E7%94%A8%E8%A7%86%E5%9B%BE)
      * [14\.4 视图的修改](#144-%E8%A7%86%E5%9B%BE%E7%9A%84%E4%BF%AE%E6%94%B9)
        * [14\.4\.1 修改视图](#1441-%E4%BF%AE%E6%94%B9%E8%A7%86%E5%9B%BE)
      * [14\.5 视图的删除](#145-%E8%A7%86%E5%9B%BE%E7%9A%84%E5%88%A0%E9%99%A4)
        * [14\.5\.1 删除视图](#1451-%E5%88%A0%E9%99%A4%E8%A7%86%E5%9B%BE)
      * [14\.6 视图的注意事项](#146-%E8%A7%86%E5%9B%BE%E7%9A%84%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A1%B9)
    * [十五、 SQL语言分类](#%E5%8D%81%E4%BA%94-sql%E8%AF%AD%E8%A8%80%E5%88%86%E7%B1%BB)

# MySQL数据库

------

### 一、引言

------



#### 1.1 现有的数据存储方式有哪些？

> - Java中存储数据(变量、对象、数组、集合)，数据都是保存在内存中，属于瞬时状态数据
> - 文件(File)存储数据，保存在硬盘上，属于持久化状态存储



#### 1.2 以上存储方式存在哪些缺点？

> - 程序停止，数据就没了。
> - 文件存储的数据：没有数据类型的区分
> - 没有访问安全限制
> - 没有备份、恢复机制。



### 二、 数据库

------



#### 2.1 概念

> ​	数据库是  "按照数据结构来组织、存储、管理数据的仓库"。是一个可以长期存储在计算机内的、有组织的、有共享的、可以统一管理的数据集合



#### 2.2 数据库的分类

> - 网状结构数据库：以节点形式存储数据和访问数据
> - 层次结构数据库：IBM[IMS]。定向有序的树状结构实现存储和访问。
> - `关系结构数据库`：Oracle、MySQL、DB2、SQL Server，以表格(Table)形式存储，多表之间建立关联关系，通过分类、合并、连接、选取等方式实现访问。
> - 非关系型数据库：MongDB、Redis，使用哈希表，表中以键值（key-value）的方式实现特定的键和一个指针指向的特定数据
> - ElastecSearch



------

### 三、数据库管理系统

------

#### 3.1 概念

> 数据库管理系统：指的是一种操作和管理数据库的大型软件，用于建立、使用、维护数据库，对数据库进行统一的管理和控制，保证数据库的安全性和完整性。
>
> ​	用户通过数据库管理系统访问数据库中的数据



#### 3.2 常见的数据库管理系统

> - Oracle：可以运行在UNIX、Windows等主流操作系统，支持所有的工业标准，并获得了最高级别的ISO标准安全性认证。
> - DB2：IBM公司的，满足中大公司的需要
> - SQL Server：微软退出的。
> - SQLLite：手机端的数据库
> - Mysql：免费、适合中小型企业



### 四、MySQL

------

#### 4.1 简介

> ​	MySQL是一个关系型数据库管理系统，由瑞典MySQL AB公司开发的。属于Oracle旗下的产品。	
>
> ​	MySQL是最流行的关系型数据库管理系统之一，在WEB应用方面，是最好的应用软件之一。



#### 4.2 访问与下载

> 官网：[https://www.mysql.com](https://www.mysql.com)
>
> 下载地址：[https://dev.mysql.com/downloads/mysql/](https://dev.mysql.com/downloads/mysql/ )



#### 4.3 配置环境变量

> - Windows:
>   - 创建MYSQL_HOME：C:\Program Files\MySQL\MySQL Server 5.7
>   - 追加Path：%MYSQL_HOME%\bin;



#### 4.4 MySQL的目录结构

> 核心文件介绍

| 文件夹名称 |        内容        |
| :--------: | :----------------: |
|    bin     |    命令相关文件    |
|  include   |       库文件       |
|    lib     |       头文件       |
|   share    | 字符集、语言等信息 |



#### 4.5 MySQL配置文件

> 在MySQL安装目录中找到my.ini的文件，MySQL的一些配置参数

|          参数          |           描述            |
| :--------------------: | :-----------------------: |
| default-character-set  |     客户端默认字符集      |
|  character-set-server  |     服务端默认字符集      |
|          port          |  客户端和服务端的端口号   |
| default-storage-engine | MySQL的默认存储引擎INNODB |



### 五、 SQL

------

#### 5.1 概念

> ​	SQL：结构化查询语言，用于存取数据、更新、查询和管理关系数据库系统的程序设计语言。

- 经验：通常执行对数据库的"增、删、改 、查"，简称C(Create)、R(Retrieve)、U(Update)、D(Delete)

#### 5.2 MySQL应用

> 对于数据库的操作，需要在连接MySQL的环境下进行指令输入，并在一行指令的末尾使用 ; 结束



#### 5.3 基本命令

> `mysql -uroot -p	`	  登录命令

```mysql
#登录MySQL数据库
mysql> mysql -uroot -p
Enter password: #输入密码即可Enter键确定
```



> `SHOW DATABASES `	查看MySQL中所有数据库

```mysql
#连接到MySQL
mysql> SHOW DATABASES; #显示当前MySQL中所有的数据库
```



> `Show DATABASES`   进入界面后会显示的默认数据库以及解释如下：

|     默认数据库     |                             作用                             |
| :----------------: | :----------------------------------------------------------: |
| information_schema | 用于存储数据库元数据(关于数据的数据)，例如数据库名、表名、列的数据类型、访问权限等 |
|       mysql        |       核心数据库，存储配置、存储用户、关键字等重要数据       |
| performance_schema |                     用于性能分析的数据库                     |
|       sakila       | Sakila样本数据库介绍， 一个模拟DVD租赁信息管理的数据库，提供了一个标准模式，可作为书中例子,教程、文章、样品,等等 |
|        sys         | Sys库所有的数据源来自：performance_schema。目标是把performance_schema的把复杂度降低，让DBA能更好的阅读这个库里的内容。让DBA更快的了解DB的运行情况。 |
|       world        |                存储各个国家的语言信息的数据库                |
|        test        |                   用于存放测试数据的数据库                   |



> 创建自定义数据库   `CREATE DATABASE`

```mysql
mysql>CREATE DATABASE sql; #创建了名称为sql的数据库
mysql>CREATE DATABASE sql CHARACTER SET gbk;#创建数据库并设置其默认字符集为GBK
mysql>CREATE DATABASE sql CHARACTER SET GBK COLLATE gbk_chinese_ci;#支持简体中文和繁体中文
mysql>CREATE DATABASE IF NOT EXISTS sql;#如果sql不存在，则创建，反之，不创建
```



> 删除数据库   `DROP DATABASE`

```mysql
mysql>DROP DATABASE sql;#删除数据库
```



> 查看数据库创建信息  `SHOW CREATE DATABASE`

```mysql
mysql>SHOW CREATE DATABASE sql;# 查看创建数据库时的基本信息	
```



> 修改数据库  `ALTER DATABASE`

```mysql
mysql>ALTER DATABASE sql CHARACTER SET UTF8;#修改数据库sql的字符集为utf-8
```



> 使用数据库 `USE`

```mysql
mysql>USE sql;#当前环境下，操作sql数据库
```



> 查看当前使用的数据库  `SELECT DATABASE();`

```mysql
mysql>SELECT DATABASE();#查看当前使用的数据库
```



### 六、客户端工具

------

#### 6.1 Navicat

> 是一套快速、可靠并且价格便宜的数据库管理工具，专为简化数据库管理及降低系统管理成本而设。



#### 6.2 SQLyog

> 也拥有图形化界面。拥有广泛的预定义工具和查询、友好的视觉界面。类似Excel的查询结果编辑界面



#### 6.3 DataGrip(Idea开发工具集成)

> 捷克公司的产品。需要付费。如果买了idea，DataGrip通用 



### 七、 执行SQL脚本

------

> 创建一个companyDB的数据库，然后在对象浏览器区，右键->执行SQL脚本->找到文件，打开->点击执行



### 八、 数据查询【重点】

------

#### 8.1 数据表的基本结构

> 关系结构数据库是以表格(Table)进行数据存储，表格由`行`和`列`组成

- 经验：执行查询语句返回的结果集是一张虚拟表



#### 8.2 基本查询

> 语法：SELECT 列名 FROM 表名

| 关键字 |      描述      |
| :----: | :------------: |
| SELECT | 指定要查询的列 |
|  FROM  | 指定要查询的表 |



##### 8.2.1 查询所有列

```mysql
#查询t_employees表中所有员工的所有信息
SELECT * FROM t_employees;
SELECT 所有的列名 FROM t_employees;
```

- 经验：生产环境下，优先使用列名查询。*的方式虽然看起来便捷，但实际上需要转换成全列名，效率低，可读性差



##### 8.2.2 查询部分列

```mysql
#查询表中的所有员工的编号、姓氏、邮箱
SELECT EMPLOYEE_ID,FIRST_NAME,Email FROM t_employees;
#查询表中所有员工的编号、部门编号
SELECT EMPLOYEE_ID,DEPARTMENT_ID FROM t_employees;
```



##### 8.2.3 对列中的数据进行运算

```mysql
#查询员工表中所有员工的编号、姓名、年薪
SELECT EMPLOYEE_ID,FIRST_NAME,LAST_NAME,SALARY * 12 FROM t_employees;
```

| 算术运算符 |         描述         |
| :--------: | :------------------: |
|     +      | 列与列之间做加法运算 |
|     -      | 列与列之间做减法运算 |
|     *      | 列与列之间做乘法运算 |
|     /      | 列与列之间做除法运算 |

- 注意： % 在数据库中，代表的是占位符，而并非取余运算符

##### 8.2.4 列的别名

> 列 AS '列名'

```mysql
#查询员工表中所有员工的编号、姓名、日薪(列的运算 / 22)，列名均为中文
SELECT EMPLOYEE_ID AS '编号',FIRST_NAME AS '姓',LAST_NAME AS '名',SALARY / 22 AS'日薪' FROM t_employees;
#起别名，没有对原表的列名发生影响
```

- **注意：省略AS也可以查询到结果，但不推荐，作为了解即可，因为我们要遵循语法规范**

##### 8.2.5 查询结果去重

> distinct 列名

```mysql
#查询员工表中，所有经理的ID编号
SELECT DISTINCT MANAGER_ID AS '经理编号' FROM t_employees;
#查询员工表中，所有的工资 (去掉重复的)
SELECT DISTINCT SALARY FROM t_employees;
```



##### 8.3 排序查询

> 语法： SELECT 列名 FROM 表名 ORDER BY 排序列名 [排序规则]

| 排序规则 | 描述       |
| -------- | ---------- |
| ASC      | 做升序排序 |
| DESC     | 做降序排序 |



##### 8.3.1 依据单列进行排序

```mysql
#查询员工的编号，名字，薪资，按照工资进行升序排序
SELECT EMPLOYEE_ID,FIRST_NAME,salary FROM t_employees ORDER BY salary ASC;
#查询员工的编号，名字，薪资，按照姓名进行升序排序
SELECT EMPLOYEE_ID,FIRST_NAME,salary FROM t_employees ORDER BY FIRST_NAME ASC;
#查询员工的编号，名字，薪资，按照工资进行降序排序
SELECT EMPLOYEE_ID,FIRST_NAME,salary FROM t_employees ORDER BY salary DESC;
```

- 经验：当进行升序排序时，排序规则可以不显示声明。默认为升序排序规则



##### 8.3.2 依据多列进行排序

```mysql
#查询员工编号，名字，薪资，按照工资进行升序排序，如果工资相等，按照编号降序排序
SELECT EMPLOYEE_ID,FIRST_NAME,SALARY FROM t_employees
ORDER BY SALARY ASC,EMPLOYEE_ID DESC
#查询员工编号，名字，薪资，按照工资进行升序排序，如果工资相等，按照姓名降序排序
SELECT EMPLOYEE_ID,FIRST_NAME,SALARY FROM t_employees
ORDER BY SALARY ASC,FIRST_NAME DESC
```



#### 8.4 条件查询

> 语法： SELECT 列名 FROM 表名 WHERE 条件

| 关键字 |                          描述                          |
| :----: | :----------------------------------------------------: |
| WHERE  | 在查询结果中，筛选符合条件的查询结果。条件为布尔表达式 |



##### 8.4.1 等值判断(=)

```mysql
#查询工资为2500的员工信息
SELECT EMPLOYEE_ID,FIRST_NAME,SALARY FROM t_employees WHERE salary = 2500;
#查询姓为Steven的员工信息
SELECT EMPLOYEE_ID,FIRST_NAME,SALARY FROM t_employees WHERE FIRST_NAME = 'Steven';
```

- 注意：与Java不同(==),MySQL中等值判断用 = 



##### 8.4.2 不等值判断(>、<、>=、<=、!=、<>)

```mysql
#查询员工工资大于6000的员工的信息
SELECT EMPLOYEE_ID,FIRST_NAME,salary FROM t_employees 
WHERE salary >= 6000;
#查询员工工资不等于2500的员工信息
SELECT EMPLOYEE_ID,FIRST_NAME,salary FROM t_employees 
WHERE salary <> 2500;(!=同理) 
```



##### 8.4.3 逻辑判断(and、or、not)

```mysql
#查询员工工资在6000~10000的员工信息
SELECT EMPLOYEE_ID,FIRST_NAME,salary FROM t_employees
WHERE salary >= 6000 AND salary <= 10000;

#查询工资是10000的或者是9000的员工信息
SELECT EMPLOYEE_ID,FIRST_NAME,salary FROM t_employees
WHERE salary = 10000 OR salary = 9000;

#查询除了工资是10000的员工信息
SELECT EMPLOYEE_ID,FIRST_NAME,salary FROM t_employees
WHERE NOT salary = 10000;
```



##### 8.4.4 区间判断(between and)

```mysql
#区间判断 包含区间边界的两个值
SELECT EMPLOYEE_ID,FIRST_NAME,salary FROM t_employees
WHERE salary BETWEEN 6000 AND 10000;
```

- 注意：between and要遵循 between 小值  and 大值；



##### 8.4.5 NULL值判断(IS NULL、IS NOT NULL)

> - IS NULL
>   - 列名 IS NULL
> - IS NOT NULL
>   - 列名 IS NOT NULL

```mysql
#查询出 没有经理编号的员工 IS NULL
SELECT EMPLOYEE_ID,FIRST_NAME,MANAGER_ID FROM t_employees
WHERE MANAGER_ID IS NULL;

#查询出 没有经理编号以外的员工信息
SELECT EMPLOYEE_ID,FIRST_NAME,MANAGER_ID FROM t_employees
WHERE MANAGER_ID IS NOT NULL;

#查询出 没有经理编号以外的员工信息(此处NOT为取反。两个结果)
SELECT EMPLOYEE_ID,FIRST_NAME,MANAGER_ID FROM t_employees
WHERE NOT MANAGER_ID IS NULL;
```



##### 8.4.6 枚举查询(IN (值1,值2,值n....))

```mysql
#枚举查询 IN (值1,值2,值n...)
#查询部门编号为70,80,90的员工信息
SELECT EMPLOYEE_ID,FIRST_NAME,LAST_NAME,DEPARTMENT_ID FROM t_employees
WHERE DEPARTMENT_ID IN(70,80,90);

#枚举查询  查询经理编号为 124 和100的员工信息
SELECT EMPLOYEE_ID,FIRST_NAME,LAST_NAME,MANAGER_ID FROM t_employees
WHERE MANAGER_ID IN(124,100);
```



##### 8.4.7 模糊查询(_、%)

> - LIKE
>   - LIKE _(单个任意字符)
>     - 列名 LIKE 'S_'
>   - LIKE %(任意长度的任意字符   0~n个)
>     - 列名 LIKE 'S%'



```mysql
#模糊查询，查询姓氏以S开头且长度为6的员工信息
SELECT EMPLOYEE_ID,FIRST_NAME,LAST_NAME FROM t_employees
WHERE FIRST_NAME LIKE 'S_____';


#模糊查询，查询姓氏以S开头任意长度的所有员工信息
SELECT EMPLOYEE_ID,FIRST_NAME,LAST_NAME FROM t_employees
WHERE FIRST_NAME LIKE 'S%';
```



##### 8.4.8 分支结构查询

```mysql
CASE
	WHEN 条件1 THEN 结果1
	WHEN 条件2 THEN 结果2
	WHEN 条件3 THEN 结果3
	WHEN 条件4 THEN 结果4
	ELSE 结果
END 
```

- 注意：通过使用CASE END进行条件判断，每条数据对应生成一个值
- 经验：类似Java中的分支结构



```mysql
#查询员工信息(编号、名字、薪资、薪资级别<条件表达式>)
SELECT EMPLOYEE_ID,FIRST_NAME,salary,
	CASE 
		WHEN salary >=10000 THEN 'A'
		WHEN salary >=8000 AND salary<10000 THEN 'B'
		WHEN salary >=6000 AND salary<8000 THEN 'C'
		WHEN salary >=4000 AND salary <6000 THEN 'D'
		ELSE 'E'
	END AS '薪资级别'
FROM t_employees;
```

- 注意：case分支结构产生一个新的列



#### 8.5 时间查询

> 语法： SELECT 时间函数([参数列表]);

- 经验：执行时间函数查询，会生成一张虚拟表(一行一列)



|       时间函数        |                 描述                 |
| :-------------------: | :----------------------------------: |
|       SYSDATE()       | 当前系统时间(年、月、日、时、分、秒) |
|       CURDATE()       |             获得当前日期             |
|       CURTIME()       |             获得当前时间             |
|      WEEK(DATE)       |      获得指定日期是一年中第几周      |
|      YEAR(DATE)       |          获得指定日期的年份          |
|      MONTH(DATE)      |          获得指定日期的月份          |
|       DAY(DATE)       |           获得指定日期的天           |
|      HOUR(DATE)       |         获得指定时间的小时值         |
|     MINUTE(DATE)      |         获得指定时间的分钟值         |
|     SECOND(DATE)      |          获得指定日期的秒值          |
| DATEDIFF(DATE1,DATE2) |    获得DATE1和DATE2之间相隔的天数    |
|    ADDDATE(DATE,N)    |      在指定日期加上N天后的日期       |



##### 8.5.1 获取时间

```mysql
#1.当前系统时间
SELECT SYSDATE();
#2.获得当前日期
SELECT CURDATE();
#3.获得当前时间
SELECT CURTIME();
#4.获得指定日期在一年中为第几周
SELECT WEEK(CURDATE());
#5.获取指定日期中的年份
SELECT YEAR(CURDATE());
#6.获取指定日期中的月份
SELECT MONTH(CURDATE());
#7.获取指定日期中的日
SELECT DAY(CURDATE());
#8.获取指定日期中的时
SELECT HOUR(SYSDATE());
#9.获取指定日期中的分
SELECT MINUTE(SYSDATE());
#10.获取指定日期中的秒
SELECT SECOND(SYSDATE());
#11.获取Date1和Date2之间相隔的天数
SELECT DATEDIFF(SYSDATE(),'2019-3-26');
#12.在指定日期之上加N天后的日期
SELECT ADDDATE(SYSDATE(),6);
#13.在指定日期之上加N的单位后的日期
# DATE_ADD(date,INTERVAL expr type)
# date 参数是合法的日期表达式
# expr 参数是您希望添加的时间间隔
# type 参数是日期单位：可以是DAY、MONTH等等
# 获取指定日期之上加N小时后的日期
SELECT ADDDATE(SYSDATE(),INTERVAL 6 HOUR);
```



#### 8.6 字符串查询

> 语法：SELECT 字符串函数([参数列表]);

- 经验：执行字符串函数，产生一张虚拟表,（一行一列）

|         字符串函数         |                      说明                       |
| :------------------------: | :---------------------------------------------: |
| CONCAT(str1,str2,str3...)  |              将多个字符串进行拼接               |
| INSERT(str,pos,len,newStr) | 将str中指定pos位置开始len长度的内容替换为newStr |
|         LOWER(str)         |             将指定字符串转换为小写              |
|         UPPER(str)         |             将指定字符串转换为大写              |
|   SUBSTRING(str,pos,len)   |     将str字符串指定pos位置开始截取len个内容     |



##### 8.6.1 字符串函数应用

```mysql
#1.连接将多个字符串连接在一起
SELECT CONCAT('My','S','QL');

#2.插入替换（下标从1开始）
SELECT INSERT('这是MySQL数据库',3,5,'Oracle');

#3.转小写
SELECT LOWER('MYSQL');

#4.转大写
SELECT UPPER('mysql');

#5.截取
SELECT SUBSTRING('我真的太帅了！',4,3);
```

注意：可能有点sql命令不是这样子的，他其中包含关键字，这是你使用的可视化工具的差异性

```mysql
# 比如：Navcait的sql命令，它是包含关键字的！
# 截取
SELECT SUBSTR('我真的太帅了！' FROM 4 FOR 3);
```



#### 8.7 聚合函数

> 语法：SELECT 聚合函数(列名) FROM 表名;

- 经验：聚合函数式对多条数据的单列进行统计，返回统计后的一行结果



| 聚合函数 |          说明          |
| :------: | :--------------------: |
| COUNT()  |        求总行数        |
|  SUM()   |  求单列中所有行的总和  |
|  AVG()   | 求单列中所有行的平均值 |
|  MAX()   | 求单列中所有行的最大值 |
|  MIN()   | 求单列中所有行的最小值 |



##### 8.7.1 求总行数

```mysql
#1.查询员工一共多少人
SELECT COUNT(EMPLOYEE_ID) AS '员工总数' FROM t_employees;
#查询经理总数
SELECT COUNT(MANAGER_ID) AS '经理总数' FROM t_employees;
SELECT COUNT(*) FROM t_employees;
```

- 注意：聚合函数中，自动忽略null值。不进行统计



##### 8.7.2 单列总和

```mysql
#2.查询员工每个月工资的总和
SELECT SUM(salary) FROM t_employees;
```



##### 8.7.3 单列平均值

```mysql
#3.查询员工每个月工资的平均工资
SELECT AVG(salary) FROM t_employees;
```



##### 8.7.4 单列最大值

```mysql
#4.查询月薪最高的
SELECT MAX(salary) FROM t_employees;
```



##### 8.7.5 单列最小值

```mysql
#5.查询月薪最低的
SELECT MIN(salary) FROM t_employees;
```



#### 8.8 分组查询

> 语法： SELECT 列名 FROM 表名 WHERE 条件 GROUP BY 分组依据(列名)

|  关键字  |                 说明                  |
| :------: | :-----------------------------------: |
| GROUP BY | 分组依据。如果有WHERE,在WHERE之后生效 |



##### 8.8.1 查询各部门的总人数

```mysql
#思路：
#1.先按照部门编号分组(分组依据是：department_id)
#2.再针对各部门的人数进行统计(count)
SELECT DEPARTMENT_ID,COUNT(EMPLOYEE_ID)
FROM t_employees
GROUP BY DEPARTMENT_ID;
```



##### 8.8.2 查询各部门的平均工资

```mysql
#思路：
#1.先按照部门编号分组(分组依据是：department_id)
#2.再针对各部门的工资进行平均计算(AVG())
SELECT DEPARTMENT_ID,AVG(salary) AS '平均工资',COUNT(EMPLOYEE_ID) AS'人数'
FROM t_employees
GROUP BY DEPARTMENT_ID;
```



##### 8.8.3 查询各个部门、各个岗位的人数

```mysql
#思路
#1.按照部门编号进行分组(department_id)
#2.按照岗位名称进行分组(job_id)
#3.针对每个部门中各个岗位的人数进行统计
SELECT DEPARTMENT_ID AS'部门',JOB_ID AS'岗位',COUNT(EMPLOYEE_ID) AS'人数'
FROM t_employees
GROUP BY DEPARTMENT_ID,JOB_ID;
```



##### 8.8.4 常见问题

```mysql
#查询各个部门的id、总人数、first_name
SELECT DEPARTMENT_ID,COUNT(EMPLOYEE_ID),FIRST_NAME
FROM t_employees
GROUP BY DEPARTMENT_ID;
```

- 注意：分组查询中，select显示的列只能是分组依据的列或者是聚合函数列，不能出现其他列。



#### 8.9  分组过滤查询

> 语法： SELECT 列名 FROM 表名 WHERE 条件 GROUP BY 分组依据(列名) HAVING 过滤规则

| 关键字 | 说明                             |
| ------ | -------------------------------- |
| HAVING | 过滤规则是对分组后的数据进行过滤 |



##### 8.9.1 统计部门中的最高工资

```mysql
#统计部门编号为60、70、80的部门最高工资
#思路：
#1.确定分组依据  department_id
#2.对分组后的数据进行过滤  过滤规则为 60 70 80部门编号
#3.分组过滤后的数据，做max()函数处理
SELECT DEPARTMENT_ID,MAX(salary)
FROM t_employees
GROUP BY DEPARTMENT_ID
HAVING DEPARTMENT_ID IN (60,70,80);
#HAVING是在分组之后的数据进行过滤
```



#### 8.10 限定查询

> 语法：SELECT 列名 FROM 表名 LIMIT 起始行,查询行

| 关键字                       | 描述                         |
| ---------------------------- | ---------------------------- |
| LIMIT offset_start,row_count | 限定查询结果的起始行和总行数 |



##### 8.10.1 查询前5行记录

```mysql
#查询表中前五名员工的信息
SELECT * FROM t_employees LIMIT 0,5;
```

- 注意：起始行是从0开始，代表了第一行。第二个参数代表的是从指定行开始查询几行



##### 8.10.2 查询范围记录

```mysql
#查询表中的第二页数据和第三页数据(一页默认有5行数据)
SELECT * FROM t_employees LIMIT 5,5;

SELECT * FROM t_employees LIMIT 10,5;
```

- 经验：在分页的应用场景中，起始行是跟随页数变化的，但是一页显示的条数是不变得



#### 8.11 查询总结

------



##### 8.11.1 SQL语句编写顺序

> SELECT 列名 FROM 表名 WHERE 条件 GROUP BY 分组 HAVING 过滤条件 ORDER BY 排序列 LIMIT 起始行,总条数



##### 8.11.2 SQL语句执行顺序

```mysql
#1.执行 FROM ： 指定数据来源表
#2.执行WHERE ： 对查询的数据做第一次过滤
#3.执行GROUP BY ：分组
#4.执行HAVING : 对分组后的数据做第二次过滤
#5.执行SELECT : 查询各个字段的值
#6.执行ORDER BY : 排序
#7.执行LIMIT : 限定查询结果
```



#### 8.12  子查询（作为条件判断）

> 语法：SELECT 列名 FROM 表名 WHERE 条件(子查询结果)



##### 8.12.1 查询工资大于Bruce工资的员工信息

```mysql
#思路
#1.先查询到Bruce的工资（一行一列）
SELECT SALARY FROM t_employees WHERE first_name = 'Bruce';#6000

#2.查询大于Bruce工资的员工信息
SELECT * FROM t_employees WHERE SALARY > 6000;

#3.将1 、2 整合为一条语句
SELECT * FROM t_employees WHERE salary >(SELECT SALARY FROM t_employees WHERE first_name = 'Bruce')
```

- 注意：将子查询"一行一列"的结果作为外部查询的条件。做第二次查询
- 子查询得到的是一行一列的结果才能作为外部条件的等值或不等值判断条件



#### 8.13 子查询(作为枚举查询的条件)

> 语法：SELECT 列名 FROM 表名 WHERE 列名 IN(子查询结果)



##### 8.13.1 查询与King同一部门员工信息

```mysql
#思路
#1.查询King所在的部门编号（多行单列）
SELECT DEPARTMENT_ID FROM t_employees WHERE last_name='King';

#2.将 80、90作为枚举查询的条件
SELECT EMPLOYEE_ID,FIRST_NAME,salary 
FROM t_employees
WHERE DEPARTMENT_ID IN (80,90)

#3.整合
SELECT EMPLOYEE_ID,FIRST_NAME,salary 
FROM t_employees
WHERE DEPARTMENT_ID
IN 
(SELECT DEPARTMENT_ID FROM t_employees WHERE last_name='King')
```

- 经验：将子查询得到的"多行一列"的结果作为外部查询的枚举查询条件，做第二次查询



##### 8.13.2 工资高于60部门的所有人的信息

```mysql
#1.查询部门编号为60的工资
SELECT salary FROM t_employees WHERE DEPARTMENT_ID = 60;

#2.查询高于60部门所有人的工资的员工信息(高于所有人！)
SELECT EMPLOYEE_ID,FIRST_NAME,salary FROM t_employees 
WHERE salary > ALL
(SELECT salary FROM t_employees WHERE DEPARTMENT_ID = 60);

#3.查询高于60部门所有人的工资的员工信息(高于部分人！)
SELECT EMPLOYEE_ID,FIRST_NAME,salary FROM t_employees 
WHERE salary > ANY
(SELECT salary FROM t_employees WHERE DEPARTMENT_ID = 60);
```

- 注意：当子查询结果集为多行单列时，也可以使用ALL匹配所有或者ANY匹配部分



#### 8.14 子查询(作为一张表)

> 语法：SELECT 列名 FROM (子查询结果集) WHERE 条件；



##### 8.14.1 查询表中部分列的信息，获得工资大于15000的

```mysql
#思路
#1.先查询部分列的信息作为一张临时表
 SELECT EMPLOYEE_ID,FIRST_NAME,salary FROM t_employees;
 
#2.将子查询得到的临时表作为外部查询的表
SELECT EMPLOYEE_ID ,FIRST_NAME ,salary
FROM 
(SELECT EMPLOYEE_ID,FIRST_NAME,salary FROM t_employees)AS temp
WHERE salary > 15000;
```

- 经验：将子查询得到的"多行多列"的结果作为外部查询的一张临时表，做第二次查询



#### 8.15 合并查询（了解）

> 语法：
>
> - SELECT  列名 FROM 表名 1 UNION SELECT 列名 FROM 表名2
> - SELECT  列名 FROM 表名 1 UNION ALL SELECT 列名 FROM 表名2



##### 8.15.1 合并两张表的结果（去除重复记录）

```mysql
#合并 t1 和t2两张表的结果。纵向合并,去除重复的记录
SELECT * FROM t_departments
UNION
SELECT * FROM t_jobs
```



##### 8.15.2 合并两张表的结果(保留重复记录)

```mysql
#合并结果集，不去除重复记录
SELECT * FROM t_departments
UNION ALL
SELECT * FROM t_jobs
```

- 注意：合并的两个结果集，列数必须相同，列类型、列名可以不同



#### 8.16 表连接查询

> 语法：SELECT 列名 FROM 表1 连接方式 表2  ON 连接条件]();



##### 8.16.1 内连接查询(INNER JOIN ON)

```mysql
#查询所有有部门的员工信息,显示部门名称(不包括没有部门的员工)   SQL标准
SELECT * FROM t_employees
INNER JOIN t_departments
ON t_employees.`DEPARTMENT_ID` = t_departments.`DEPARTMENT_ID`;

#MYSQL标准
SELECT EMPLOYEE_ID,FIRST_NAME,DEPARTMENT_NAME FROM 
t_employees,t_departments
 WHERE t_employees.`DEPARTMENT_ID` = t_departments.`DEPARTMENT_ID`;
 
#1.两张表连接查询，要有关联条件。但是关联条件的列重复了。需要明确查询的是哪个表的列
#2.表名比较长,表名多次重复出现。容易混淆.可以给别名
SELECT EMPLOYEE_ID,FIRST_NAME,d.DEPARTMENT_ID,DEPARTMENT_NAME FROM t_employees AS e
INNER JOIN t_departments AS d
ON e.`DEPARTMENT_ID` = d.`DEPARTMENT_ID`;
```

- 经验：在MySQL中，可以使用第二种方式，不符合SQL标准，不与其他关系型数据库通用（不建议）
- 第一种，属于SQL标准，与其他关系型数据库通用



##### 8.16.2 内连接查询

```mysql
#查询所有岗位的员工信息，显示岗位名称
SELECT EMPLOYEE_ID,FIRST_NAME,JOB_TITLE
FROM t_employees AS e
INNER JOIN t_jobs AS j
ON e.`JOB_ID` = j.`JOB_ID`;
```



##### 8.16.3 三表连接查询

```mysql
#查询所有员工工号、名字、部门名称、部门所在城市的名称
SELECT EMPLOYEE_ID,FIRST_NAME,DEPARTMENT_NAME,CITY
FROM t_employees AS e
INNER JOIN t_departments AS d
ON e.`DEPARTMENT_ID` = d.`DEPARTMENT_ID`
INNER JOIN t_locations AS l
ON d.`LOCATION_ID` = l.`LOCATION_ID`;
```



##### 8.16.4 多表连接查询

```mysql
#查询所有员工工号、名字、部门名称、部门城市名称、所在城市的国家
SELECT EMPLOYEE_ID,FIRST_NAME,DEPARTMENT_NAME,CITY,COUNTRY_NAME
FROM t_employees AS e
INNER JOIN t_departments AS d
ON e.`DEPARTMENT_ID` = d.`DEPARTMENT_ID`
INNER JOIN t_locations AS l
ON d.`LOCATION_ID` = l.`LOCATION_ID`
INNER JOIN t_countries AS c
ON l.`COUNTRY_ID` = c.`COUNTRY_ID`;
```

- 经验：多表查询时，要明确哪一张表和连接的表有关系。



##### 8.16.5 左外连接查询(LEFT JOIN ON)

```mysql
#查询所有员工信息，以及对应的部门名称（没有部门的员工，也在查询结果中，但是部门名称以NULL填充）
SELECT EMPLOYEE_ID,FIRST_NAME,DEPARTMENT_NAME 
FROM t_employees AS e
LEFT JOIN t_departments AS d
ON e.`DEPARTMENT_ID` = d.`DEPARTMENT_ID`;
```

- 注意：左外连接，是以左表为主表，依次向右表匹配，匹配到，则返回正确结果
- 匹配不到，则返回NULL值，填充显示
- 左外连接：左边有的，右边没有的为null 
- LEFT JOIN 关键字会从左表 (第一个表) 那里返回所有的行，即使在右表 (第二个表) 中没有匹配的行



##### 8.16.6 右外连接查询(RIGHT JOIN ON)

```mysql
#查询所有部门信息，以及部门中的员工信息
#(没有员工的部门，也在查询结果中，员工信息以NULL填充)
SELECT EMPLOYEE_ID,FIRST_NAME,DEPARTMENT_NAME 
FROM t_employees AS e
RIGHT JOIN t_departments AS d
ON e.`DEPARTMENT_ID` = d.`DEPARTMENT_ID`;
```

- 注意：右外连接，是以右表为主表，依次向左匹配，匹配到，返回正确结果
- 匹配不到，则返回NULL填充
- 右外连接：右边有的，左边没有的为null
- RIGHT JOIN 关键字会右表 (第一个表) 那里返回所有的行，即使在左表 (第二个表) 中没有匹配的行



### 九、 DML操作（增、删、改）

------



#### 9.1 新增(INSERT)

> INSERT INTO 表名 (列1,列2,列3...) VALUES(值1,值2,值3.....)



##### 9.1.1 添加一条信息

```mysql
#添加一条员工信息
INSERT INTO t_employees
(EMPLOYEE_ID,FIRST_NAME,LAST_NAME,EMAIL,PHONE_NUMBER,HIRE_DATE,JOB_ID,SALARY,COMMISSION_PCT,MANAGER_ID,DEPARTMENT_ID)
VALUES('209','Ya','Suo','YaSuo@happy.com','515.123.6666','2010-03-18','Center',900,NULL,'123','50')

#多行添加，在值列表外边追加,再写一个值列表
,('208','Ya','Suo','YaSuo@happy.com','515.123.6666','2010-03-18','Center',900,NULL,'123','50');

```



```mysql
#添加一条城市信息
INSERT INTO t_countries(COUNTRY_ID,COUNTRY_NAME)VALUES('AL','阿尔巴尼亚');
SELECT * FROM t_departments;

#添加一条部门信息
INSERT INTO t_departments(DEPARTMENT_ID,DEPARTMENT_NAME,MANAGER_ID,LOCATION_ID)
VALUES('280','Teach','111','1500')
```

- 注意：表名后的列名列表以及VALUES里的值列表要一一对应(个数、顺序、类型)



#### 9.2 修改(UPDATE)

> UPDATE 表名 SET 列名1=新值1,列名2 = 新值2...... WHERE 条件



##### 9.2.1 修改一条信息

```mysql
#修改员工编号为208的员工名字为TOM Jackson
UPDATE t_employees
SET FIRST_NAME='TOM', LAST_NAME = 'Jackson'
WHERE EMPLOYEE_ID = '208';
```

- 注意：SET后跟着多个列 = 值，绝大多数情况下，都要加WHERE条件，指定修改的目标，否则为整表更新



#### 9.3 删除

> DELETE FROM 表名 WHERE 条件



##### 9.3.1 删除一条信息

```mysql
#删除一条员工，编号为207的
DELETE FROM t_employees
WHERE EMPLOYEE_ID = '207'
```

- 注意：删除时，如若不加WHERE条件，删除的是整张表的数据。结构不变



#### 9.4 清空(TRUNCATE)

> TRUNCATE TABLE 表名；



##### 9.4.1 清空整张表

```mysql
#清空t2整张表
TRUNCATE TABLE temp;
```

- 注意：TRUNCATE与DELETE不加WHERE删除整张表数据不同：
- DELETE仅仅删除数据，结构不变。
- TRUNCATE是把整张表销毁，再按照原表的格式、结构创建一张新表



### 十、库表操作

------

#### 10.1 数据库创建(CREATE)

> CREATE DATABASE 库名



##### 10.1 创建数据库

```mysql
#创建默认字符集的数据库
CREATE DATABASE MYDB1;
```

```mysql
#创建指定字符集的数据库
CREATE DATABASE MYDB1 CHARACTER SET UTF8;
```



#### 10.2 修改数据库

> ALTER DATABASE 库名  操作



##### 10.2.1 修改数据库的字符集

```mysql
#修改mydb1的字符集给gbk
ALTER DATABASE MYDB1 CHARACTER SET GBK;
```



#### 10.3 删除数据库

> DROP DATABASE 库名



##### 10.3.1 删除数据库

```mysql
#删除mydb1数据库
DROP DATABASE MYDB1;
```



#### 10.4 数据类型

> MySQL大致可以分为三类：数值、日期/时间、字符串(字符)类型。对于我们建表，约束列的类型有很大的帮助



##### 10.4.1 数值类型

| 类型               | 大小                            | 范围（有符号）                                | 范围（无符号）           | 用途         |
| ------------------ | ------------------------------- | --------------------------------------------- | ------------------------ | ------------ |
| ***INT***          | 4字节                           | (-2147483648,2147483647)                      | (0,4294967295)           | 整数值       |
| DOUBLE             | 8字节                           | (-1.797E+308,-2.22E-308)                      | (0,2.22E-308,1.797E+308) | 双精度浮点值 |
| ***DOUBLE(M,D)***  | 8字节，M表示长度，D表示小数位数 | 同上，受M和D的约束。DOUBLE(5,2)-999.99-999.99 | 同上，受M和D的约束       | 双精度浮点值 |
| ***DECIMAL(M,D)*** | 保存精确值                      | 依赖M和D。                                    | 依赖M和D                 | 小数值       |



##### 10.4.2 日期类型

| 类型           | 大小 | 范围                                    | 格式                 | 用途           |
| -------------- | ---- | --------------------------------------- | -------------------- | -------------- |
| ***DATE***     | 3    | 1000-01-01/9999-12-31                   | YYYY-MM-DD           | 日期值         |
| TIME           | 3    | '-838:59:59'/'838:59:59'                | HH:MM:SS             | 时间值         |
| YEAR           | 1    | 1901/2155                               | YYYY                 | 年分值         |
| ***DATETIME*** | 8    | 1000-01-01 00:00:00/9999-12-31 23:59:59 | YYYY-MM--DD HH:MM:SS | 混合日期时间值 |



##### 10.4.3 字符串类型

| 类型                      | 大小      | 用途                              |
| ------------------------- | --------- | --------------------------------- |
| ***CHAR***                | 0-255字符 | 定义字符串 CHAR(10) 10个字符      |
| ***VARCHAR***             | 0-65535   | 可变长字符串 VARCHAR(10) 10个字符 |
| BLOB(binary large object) | 0-65535   | 二进制形式的长文本数据            |
| TEXT                      | 0-65535   | 长文本                            |



#### 10.5 数据表的创建(CREATE)

> CREATE TABLE 表名(
>
> ​	列名 数据类型 [约束],
>
> ​	列名 数据类型 [约束],
>
> ​	.......
>
> ​	列名 数据类型 [约束]     //最后一列的创建，末尾不需要加逗号
>
> charset=utf8;    //根据需要指定表的字符编码集

注意：在建表的时候，表为什么要加``把表明括起来呢？是因为取的这个表名是关键字，如果不加编辑器是不会给你建表的，只要加了符号就可以建表了！

##### 10.5.1 创建表

```mysql
#创建科目表
#科目编号、科目名称、科目学时
#Subject
CREATE TABLE `Subject`(
	subjectId INT,
	subjectName VARCHAR(20),
	subjectHours INT
)CHARSET=utf8;

INSERT INTO `subject`(subjectid,subjectname,subjecthours)
VALUES(1,'Java',10);
INSERT INTO `subject`(subjectid,subjectname,subjecthours)
VALUES(2,'HTML5',20);
INSERT INTO `subject`(subjectid,subjectname,subjecthours)
VALUES(3,'BIGDATA',5);
```

- 问题：在已创建的表中新增数据时，可不可以新增两行相同列值的数据？
- 有什么弊端？表中的数据不唯一



### 十一、约束

------

#### 10.1 实体完整性约束

> 表中一行数据代表一个实体(entity)，实体完整性约束是标识每一行数据不重复、实体唯一。



##### 10.1.1 主键约束

> PRIMARY KEY 唯一，标识表中的一行数据，此列的值不可重复，且不能为NULL



```mysql
#创建表中，选择适合做主键的列，添加主键约束
CREATE TABLE Student(
	stuid INT PRIMARY KEY,#标识每一个学生的编号是唯一的，不能为NULL
	stuName VARCHAR(20),
	phone VARCHAR(11)
)CHARSET=utf8;
```



##### 10.1.2 唯一约束

> UNIQUE 唯一，标识表中的一行数据，不可重复，可以为NULL

```mysql
#表中的学生编号列，添加唯一约束！不能重复，但是可以为NULL
CREATE TABLE Student(
	stuid INT PRIMARY KEY UNIQUE,#标识每一个学生的编号是唯一的，不能为NULL
	stuName VARCHAR(20),
	phone VARCHAR(11)
)CHARSET=utf8;
```



##### 10.1.3 自动增长列

> AUTO_INCREMENT 自动增长，给主键数值列添加自动增长。从1开始，每次加1。不能单独使用，和主键搭配

```mysql
#为表中的主键列添加自动增长，避免ID重复，也容易忘记
CREATE TABLE Student(
	stuid INT PRIMARY KEY AUTO_INCREMENT,#会从1开始，根据添加数据的顺序依次+1
	stuName VARCHAR(20),
	phone VARCHAR(11) UNIQUE
)CHARSET=utf8;
```



#### 10.2 域完整性约束

> 限制列的每一个单元格的数据正确性



##### 10.2.1 非空约束

> NOT NULL 非空，约束此列的每一个单元格不允许有NULL

```mysql
#加了NOT NULL的约束列，必须有值
CREATE TABLE emp(
	id INT PRIMARY KEY AUTO_INCREMENT,
	empName VARCHAR(20)NOT NULL,#约束名字这一列必须有值
	address VARCHAR(50) NOT NULL
)CHARSET=utf8;
INSERT INTO emp(empName,address) VALUES(null,'北京市海淀区');#error,课程名称必须有值

```



##### 10.2.2 默认值约束

> DEFAULT 为列赋予默认值，当新增的数据不指定值时，可以书写DEFAULT，以定义好的默认值进行填充

```mysql
#默认值约束，如果没有指定值，填充DEFAULT，默认值。
CREATE TABLE emp(
	id INT PRIMARY KEY AUTO_INCREMENT,
	empName VARCHAR(20)NOT NULL,#约束名字这一列必须有值
	address VARCHAR(50) NOT NULL,
	sex CHAR(1) DEFAULT '女'
)CHARSET=utf8;
```



##### 10.2.3 引用完整性约束

> 语法：CONSTRAINT 引用名 FOREIGN KEY (列名)  REFERENCES 被引用表名(列名)
>
> 详解：FOREIGN KEY 引用外部表的某个列的值，新增数据时，约束此列的值必须是引用表中存在的值

记单词：constraint为约束；foreign key为引用约束；references把...作为引用

```mysql
#专业表
CREATE TABLE Speciality(
	id INT PRIMARY KEY AUTO_INCREMENT,
	SpecialName VARCHAR(20) UNIQUE NOT NULL#唯一，且不能为空
)CHARSET=utf8;
#课程表
CREATE TABLE `subject`(
	subjectid INT PRIMARY KEY AUTO_INCREMENT,
	subjecname VARCHAR(20) UNIQUE NOT NULL,
	subjecthours INT DEFAULT 20,
	specialid INT NOT NULL,
	CONSTRAINT fk_subject_specialid
	FOREIGN KEY(specialid)
	REFERENCES Speciality(id)
)CHARSET=utf8;
SELECT * FROM SUBJECT;

#存在引用关系的表。要先添加被引用的表数据(主键表).再添加引用表的数据(外键表)
INSERT INTO Speciality (SpecialName) VALUES('Java');
INSERT INTO Speciality (SpecialName) VALUES('HTML5');

INSERT INTO `subject`(subjecname,subjecthours,specialid)
VALUES('JavaSE',10,1);
INSERT INTO `subject`(subjecname,subjecthours,specialid)
VALUES('JavaScript',20,2);

INSERT INTO `subject`(subjecname,subjecthours,specialid)
VALUES('BIGDATA',20,3);#error 约束：主键表不存在3.所以外键表不能插入3

```

- 注意：两张表存在引用关系时，执行删除操作需要注意，先删除从表(引用表、外键表)，再删除主表(被引用表、主键表)

#### 11.3 约束创建整合

> 创建带有约束的表



##### 11.3.1 创建Grade表

| 列名      | 数据类型    | 约束           | 说明     |
| --------- | ----------- | -------------- | -------- |
| GradeId   | INT         | 主键、自动增长 | 班级编号 |
| GradeName | VARCHAR(20) | 唯一、非空     | 班级名称 |

```mysql
#创建Grade表
CREATE TABLE Grade(
	GradeId INT PRIMARY KEY AUTO_INCREMENT,
	GradeName VARCHAR(20) UNIQUE NOT NULL
)CHARSET=utf8;

SELECT * FROM grade;
INSERT INTO Grade(GradeName) VALUES('class1');
INSERT INTO Grade(GradeName) VALUES('class2');
INSERT INTO Grade(GradeName) VALUES('class3');
```



##### 11.3.2 创建Student表

| 列名         | 数据类型    | 约束                                | 说明     |
| ------------ | ----------- | ----------------------------------- | -------- |
| student_id   | VARCHAR(50) | 主键                                | 学号     |
| student_name | VARCHAR(50) | 非空                                | 姓名     |
| sex          | CHAR(2)     | 默认值：男                          | 性别     |
| borndate     | DATE        | 非空                                | 生日     |
| phone        | VARCHAR(11) | 无                                  | 电话     |
| GradeId      | INT         | 非空，外键约束：引用班级表的GradeId | 班级编号 |

```mysql
#创建Student表
CREATE TABLE Student(
	student_id VARCHAR(50) PRIMARY KEY,
	student_name VARCHAR(50) NOT NULL,
	sex CHAR(2) DEFAULT '男',
	borndate DATE NOT NULL,
	phone VARCHAR(11),
	GradeId INT NOT NULL,
	CONSTRAINT fk_student_gradeId FOREIGN KEY(GradeId) REFERENCES Grade(GradeId)
)CHARSET=utf8;

SELECT * FROM student;
INSERT INTO student(student_id,student_name,sex,borndate,phone,GradeId)
VALUES('class1','Ziph',DEFAULT,'2001-06-01',NULL,2);
INSERT INTO student(student_id,student_name,sex,borndate,phone,GradeId)
VALUES('class2','Join',DEFAULT,'1999-06-01',NULL,3);
```

- 注意：在创建有关系关联表时，要先创建主表（主键），再创建从表（外键表）



#### 11.4 数据表的修改（ALTER）

> 语法：ALTER TABLE 表名  修改操作;



##### 11.4.1 向现有表中添加列

```mysql
#向现有表中添加列
ALTER TABLE Student ADD image BLOB;
#ADD 新列名 数据类型 [约束]
```



##### 11.4.2 修改表中的列

```mysql
ALTER TABLE student MODIFY phone VARCHAR(14) NOT NULL
```

- 注意：修改表中的某列时，需要写全列的名字、数据类型、约束



##### 11.4.3 删除表中的列

```mysql
ALTER TABLE student DROP image;
```



##### 11.4.4 改变列名

```mysql
ALTER TABLE student CHANGE borndate birthday DATE NOT NULL; 
```

- 注意：改变列名时，在给定新列名的同时，要指定列的数据类型和约束



##### 11.4.5 修改表名

```mysql
ALTER TABLE student RENAME stu;
```



#### 11.5 删除表(DROP)

> DROP TABLE 表名;



##### 11.5.1 删除学生表

```mysql
DROP TABLE stu
```



### 十二、事务

------

#### 12.1 模拟转账

> 生活中转账是转账方扣钱，收钱方账户价钱。用数据库操作来模拟现实转账。



##### 12.1.1 模拟账户转钱

```mysql
#创建账户信息表
CREATE TABLE account (id INT PRIMARY KEY AUTO_INCREMENT, money DOUBLE(10,2)) charset = utf8;

#分别插入账户1、2信息
INSERT INTO account (money) VALUES (10000);
INSERT INTO account (money) VALUES (10000);

#1账号转钱给2账户1000元
#1账户扣钱
UPDATE account SET money = money - 1000 WHERE id = 1;

#2账户加钱
UPDATE account SET money = money + 1000 WHERE id = 2;

```



##### 12.1.2 模拟转账错误

```mysql
#1账号转钱给2账户1000元
#1账户扣钱
UPDATE account SET money = money - 1000 WHERE id = 1;
#断电、异常、出错等

#2账户加钱
UPDATE account SET money = money + 1000 WHERE id = 2;

```

- 上述代码在减钱操作过程中出现了异常或语句出错，会发现，减钱仍旧成功，而加钱失败了
- 每条SQL语句都是一个独立的操作！任何一个操作执行完对数据库是永久性的影响



#### 12.2 事务的概念

> 事务是一个原子操作。是一个最小执行单元。可以由一个或多个SQL语句组成，在同一个事务中，所有的SQL语句都成功执行时，整个事务成功！有一个SQL语句执行失败，整个事务都执行失败！



#### 12.3 事务的边界

> - 开始：连接到数据库，执行一条DML语句。 上一个事务结束后，又输入了一条DML语句，即事务的开始
>
>   - 开启事务：START TRANSACTION
>
>   
>
> - 结束：
>
>   - 提交：
>     - 显示提交：COMMIT;
>     - 隐式提交：一条DML语句。正常退出(客户端退出链接)
>   - 回滚：
>     - 显示回滚：ROLLBACK;
>     - 隐式回滚：非正常退出(断电、死机)，执行了创建、删除的语句，但是失败了！会为这个无效的SQL语句执行回滚。



#### 12.4 事务的原理

> ​	数据库会为每一个客户端都维护一个空间独立的缓存区(回滚段)，一个事务中所有的增删改语句的执行结果都会缓存在回滚段中，只有当事务中所有的SQL语句均正常结束(COMMIT),才会将回滚段中的数据同步到数据库。否则无论因为任何原因失败了，则整个事务回滚(ROLLBACK);



#### 12.5 事务的特性

> - Atomicity(原子性)
>
>   ​		表示的是一个事务内的所有操作是一个整体，要么全部成功，要么全部失败。
>
> - Consistency(一致性)
>
>   ​		表示一个事务内有一个操作失败时，所有的更改过得数据都必须回滚到修改前状态。
>
> - Isolation(隔离性)
>
>   ​		事务查看数据操作时数据所处的状态，要么是另一个并发事务修改数据之前的状态，要么是另一个并发事务修改它之后的状态。事务不会查看中间状态的数据
>
> - Durability(持久性)
>
>   ​		事务完成之后，对于数据库的影响是永久性的。



#### 12.6 事务的应用

> 应用环境：基于增删改语句的操作结果(均返回操作后受影响的行数)，可通过程序逻辑手动控制事务的提交或回滚



##### 12.6.1 事务完成转账

```mysql
#开启事务
START TRANSACTION;#SET autoCommit = 0;#方式2 设置自动提交为0 关闭自动提交 | 1 开启自动提交
#1账户扣钱
UPDATE account SET money = money - 1000 WHERE id = 1;

#2账户加钱
UPDATE account SET money = money + 1000 WHERE id = 2;
#执行提交 ---成功
COMMIT;
#执行回滚 ---失败
ROLLBACK;
```

- 注意：开启事务后，在当前事务内执行的语句均属于当前事务，成功再执行COMMIT，失败要进行ROLLBACK

##### 12.6.2 事务完成转账的解决与思想（解释事务）

> 为了让大家好理解，我们这里脑补一波！开启两个连即为两个客户端用户，分别创建的两条数据即为两个用户的账户信息（余额），每个客户端的两行加减钱的SQL命令即是原子操作。假设用户1给用户2转账1000元，用户1的账户减掉了1000元。可是这时用户2的账户发生了异常，他根本收不到用户1转来的钱（因为异常账户余额不会增加1000元）。那么遇到这种情况，利用事务在Java中就抛出一个异常，之后用catch捕获这个异常，执行ROLLBACK进行回滚，恢复用户1转账的钱数后提示用户1转账失败！还有一种情况那就是正常转账了！即用户1给用户2转账，用户1的账户执行扣钱，用户2执行加钱！最后就执行COMMIT提交，这时事务结束了。用户查到的信息就是正常转账的信息了！
>
> * 非常注意：两个客户端他们都可以进行互相转账，所以两个用户里的原子操作都必须用事务去解决这个问题，只要用户1的事务没有结束，用户2永远也查不到他自己事务范围外的信息。脑部的这一番操作即是后台程序的操作，用户只能进行查询，他并不知道后台做了什么！



### 十三、权限管理

------

#### 13.1 创建用户

> CREATE USER 用户名  IDENTIFIED BY 密码;



##### 13.1.1 创建一个用户

```mysql
#创建用户
CREATE USER 'zhangsan' IDENTIFIED BY '123';
```



#### 13.2 授权

> GRANT ALL ON 数据库.表名 TO 用户名;



##### 13.2.1 用户授权

```mysql
#将companydb数据里的grade表授权给zhangsan
GRANT ALL ON companydb.`grade` TO 'zhangsan';
#将companydb数据库里的所有表授权给zhangsan
GRANT ALL ON companydb.* TO 'zhangsan';
```



#### 13.3 撤销权限

> REVOKE ALL ON 数据库.表名 FROM 用户名;



##### 13.3.1 撤销用户权限

```mysql
REVOKE ALL ON companydb.grade FROM 'zhangsan';
```



#### 13.4 删除用户

> DROP USER 用户名;



##### 13.4.1 删除用户

```mysql
DROP USER 'zhangsan';
```



### 十四、视图

------

##### 14.1 概念

> ​	视图、虚拟表，从一个表中或多个表中查询出来的结果，作用和真实表一样，包含一系列的带有行和列的数据。视图中，可以使用SELECT语句查询数据，也可以使用INSERT、UPDATE、DELETE修改j记录，视图可以使用户操作方便，并保障了数据库系统安全



##### 14.2 视图特点

> * 优点
>   - 简单化，数据所见即所得
>   - 安全性，只能查询或修改视图中所见即所得的数据
>   - 逻辑独立性，可以屏蔽真实表结构变化带来的影响
> * 缺点
>   * 性能相对较差，简单的查询会稍微复杂
>   * 修改不方便，当视图的数据时复杂的聚合视图时，无法修改



#### 14.3 视图的创建

> 语法：CREATE VIEW 视图名 AS 查询数据源表的语句;



##### 14.3.1 创建视图

```mysql
#创建一个t_empinfo视图，该视图的数据是员工姓名，邮箱，手机号码
CREATE VIEW t_empinfo
AS
SELECT FIRST_NAME,LAST_NAME,email,PHONE_NUMBER FROM t_employees;
```



##### 14.3.2 使用视图

```mysql
#使用视图
#查询，所见即所得
SELECT * FROM t_empinfo WHERE FIRST_NAME='Steven' AND LAST_NAME='King';
#修改。只能修改得到的
UPDATE t_empinfo SET email = 'Kings' WHERE FIRST_NAME='Steven' AND LAST_NAME='King';
```



#### 14.4 视图的修改

> - 方式一：CREATE OR REPLACE VIEW 视图名 AS 查询原表的语句;
> - 方式二：ALTER VIEW 视图名 AS 查询源表的语句;



##### 14.4.1 修改视图

```mysql
#方式1
#存在就替换数据，不存在就新建
CREATE OR REPLACE VIEW t_empinfo
AS
SELECT employee_id,FIRST_NAME,LAST_NAME,email,PHONE_NUMBER FROM t_employees;

#方式2
ALTER VIEW t_empinfo
AS
SELECT FIRST_NAME,LAST_NAME,email,PHONE_NUMBER FROM t_employees;

```



#### 14.5 视图的删除

> DROP VIEW 视图名



##### 14.5.1 删除视图

```mysql
DROP VIEW t_empinfo;
```

- 注意：删除视图不会影响原表的数据



#### 14.6 视图的注意事项

> - 注意：
>   - 视图不会独立存储数据，原表发生改变，视图的数据也发生改变。没有优化查询的性能
>   - 如果视图包含以下结构中的一种，则视图不可更新
>     - 聚合函数的结果
>     - GROUP BY分组后的结果
>     - HAVING筛选过滤后的结果
>     - UNION、UNION ALL联合后的结果



### 十五、 SQL语言分类

------

> 1. 数据查询语言DQL (Data Query Language)：SELECT、WHERE、ORDER BY 、GROUP BY 、HAVING
> 2. 数据定义语言DDL (Data Definition Language): CREATE、ALTER、DROP
> 3. 数据操作语言DML(Data Manipulation Language)：INSERT、UPDATE、DELETE
> 4. 事务处理语言TPL (Transaction Process Language)：COMMIT、ROLLBACK
> 5. 数据控制语言DCL (Data Control Language)：GRANT、REVOKE