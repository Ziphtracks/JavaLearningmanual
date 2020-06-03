* [Bootstrap Validator校验](#bootstrap-validator%E6%A0%A1%E9%AA%8C)
    * [一、引入必要文件](#%E4%B8%80%E5%BC%95%E5%85%A5%E5%BF%85%E8%A6%81%E6%96%87%E4%BB%B6)
    * [二、编写HTML](#%E4%BA%8C%E7%BC%96%E5%86%99html)
    * [三、添加验证规则](#%E4%B8%89%E6%B7%BB%E5%8A%A0%E9%AA%8C%E8%AF%81%E8%A7%84%E5%88%99)
      * [1、添加到HTML上](#1%E6%B7%BB%E5%8A%A0%E5%88%B0html%E4%B8%8A)
    * [四、定义自定义验证规则](#%E5%9B%9B%E5%AE%9A%E4%B9%89%E8%87%AA%E5%AE%9A%E4%B9%89%E9%AA%8C%E8%AF%81%E8%A7%84%E5%88%99)
    * [五、常用事件](#%E4%BA%94%E5%B8%B8%E7%94%A8%E4%BA%8B%E4%BB%B6)
      * [1、重置某一单一验证字段验证规则](#1%E9%87%8D%E7%BD%AE%E6%9F%90%E4%B8%80%E5%8D%95%E4%B8%80%E9%AA%8C%E8%AF%81%E5%AD%97%E6%AE%B5%E9%AA%8C%E8%AF%81%E8%A7%84%E5%88%99)
      * [2、重置表单所有验证规则](#2%E9%87%8D%E7%BD%AE%E8%A1%A8%E5%8D%95%E6%89%80%E6%9C%89%E9%AA%8C%E8%AF%81%E8%A7%84%E5%88%99)
      * [3、手动触发表单验证](#3%E6%89%8B%E5%8A%A8%E8%A7%A6%E5%8F%91%E8%A1%A8%E5%8D%95%E9%AA%8C%E8%AF%81)
      * [4、获取当前表单验证状态](#4%E8%8E%B7%E5%8F%96%E5%BD%93%E5%89%8D%E8%A1%A8%E5%8D%95%E9%AA%8C%E8%AF%81%E7%8A%B6%E6%80%81)
      * [5、根据指定字段名称获取验证对象](#5%E6%A0%B9%E6%8D%AE%E6%8C%87%E5%AE%9A%E5%AD%97%E6%AE%B5%E5%90%8D%E7%A7%B0%E8%8E%B7%E5%8F%96%E9%AA%8C%E8%AF%81%E5%AF%B9%E8%B1%A1)
    * [六、表单提交](#%E5%85%AD%E8%A1%A8%E5%8D%95%E6%8F%90%E4%BA%A4)
      * [1、当提交按钮是普通按钮](#1%E5%BD%93%E6%8F%90%E4%BA%A4%E6%8C%89%E9%92%AE%E6%98%AF%E6%99%AE%E9%80%9A%E6%8C%89%E9%92%AE)
      * [2、当提交按钮的[type=”submit”]时](#2%E5%BD%93%E6%8F%90%E4%BA%A4%E6%8C%89%E9%92%AE%E7%9A%84typesubmit%E6%97%B6)

# Bootstrap Validator校验

------

### 一、引入必要文件

下载地址：[https://github.com/nghuuphuoc/bootstrapvalidator/archive/v0.4.5.zip](https://github.com/nghuuphuoc/bootstrapvalidator/archive/v0.4.5.zip)
```java
<link rel="stylesheet" href="/path/to/bootstrap/css/bootstrap.css"/>
<link rel="stylesheet" href="/path/to/dist/css/bootstrapValidator.min.css"/>

<script type="text/javascript" src="/path/to/jquery/jquery.min.js"></script>
<script type="text/javascript" src="/path/to/bootstrap/js/bootstrap.min.js"></script>
// 带众多常用默认验证规则的
<script type="text/javascript" src="/path/to/dist/js/bootstrapValidator-all.js"></script>
// 不带常用规则，需自定义规则
<script type="text/javascript" src="/path/to/dist/js/bootstrapValidator.min.js"></script>
//此方法是我编写常用的自定义规则的，也可直接写到对应的表单的js中
<script type="text/javascript" src="/path/to/dist/js/validator/atfmCustomValidatorRules.js"></script>
```


### 二、编写HTML

在表单中，若对某一字段想添加验证规则，默认需要以<div class=”form-group”></div>包裹（对应错误提示会根据该class值定位），内部<input class="form-control" />标签必须有name属性值，此值为验证匹配字段。

**注：该值不是绝对的，也可以通过js手动指定错误提示位置和验证的输入框（后续会讲解到）。**
```java
<form class="form-horizontal">
    <div class="form-group">
        <label class="col-lg-3 control-label">Username</label>
        <div class="col-lg-9">
            <input type="text" class="form-control" name="username" />
        </div>
    </div>
    <div class="form-group">
        <label class="col-lg-3 control-label">Email address</label>
        <div class="col-lg-9">
            <input type="text" class="form-control" name="email" />
        </div>
    </div>
</form>
```


### 三、添加验证规则

#### 1、添加到HTML上
```java
<div class="form-group">
    <label class="col-lg-3 control-label">Username</label>
    <div class="col-lg-5">
        <input type="text" class="form-control" name="username"
            data-bv-message="The username is not valid"

            required
            data-bv-notempty-message="The username is required and cannot be empty"

            pattern="[a-zA-Z0-9]+"
            data-bv-regexp-message="The username can only consist of alphabetical, number" />
    </div>
</div>


#### 2、添加到js上

**注：以下参数上面的赋值都为默认值，不添加该参数即使用默认值**
​```java
$(formSelector).bootstrapValidator({
    /**
    *  指定不验证的情况
    *  值可设置为以下三种类型：
    *  1、String  ':disabled, :hidden, :not(:visible)'
    *  2、Array  默认值  [':disabled', ':hidden', ':not(:visible)']
    *  3、带回调函数  
        [':disabled', ':hidden', function($field, validator) {
            // $field 当前验证字段dom节点
            // validator 验证实例对象 
            // 可以再次自定义不要验证的规则
            // 必须要return，return true or false; 
            return !$field.is(':visible');
        }]
    */
    excluded: [':disabled', ':hidden', ':not(:visible)'],
    /**
    * 指定验证后验证字段的提示字体图标。（默认是bootstrap风格）
    * Bootstrap 版本 >= 3.1.0
    * 也可以使用任何自定义风格，只要引入好相关的字体文件即可
    * 默认样式 
        .form-horizontal .has-feedback .form-control-feedback {
            top: 0;
            right: 15px;
        }
    * 自定义该样式覆盖默认样式
        .form-horizontal .has-feedback .form-control-feedback {
            top: 0;
            right: -15px;
        }
        .form-horizontal .has-feedback .input-group .form-control-feedback {
            top: 0;
            right: -30px;
        }
    */
    feedbackIcons: {
        valid: 'glyphicon glyphicon-ok',
        invalid: 'glyphicon glyphicon-remove',
        validating: 'glyphicon glyphicon-refresh'
    },
    /**
    * 生效规则（三选一）
    * enabled 字段值有变化就触发验证
    * disabled,submitted 当点击提交时验证并展示错误信息
    */
    live: 'enabled',
    /**
    * 为每个字段指定通用错误提示语
    */
    message: 'This value is not valid',
    /**
    * 指定提交的按钮，例如：'.submitBtn' '#submitBtn'
    * 当表单验证不通过时，该按钮为disabled
    */
    submitButtons: 'button[type="submit"]',
    /**
    * submitHandler: function(validator, form, submitButton) {
    *   //validator: 表单验证实例对象
    *   //form  jq对象  指定表单对象
    *   //submitButton  jq对象  指定提交按钮的对象
    * }
    * 在ajax提交表单时很实用
    *   submitHandler: function(validator, form, submitButton) {
            // 实用ajax提交表单
            $.post(form.attr('action'), form.serialize(), function(result) {
                // .自定义回调逻辑
            }, 'json');
         }
    * 
    */
    submitHandler: null,
    /**
    * 为每个字段设置统一触发验证方式（也可在fields中为每个字段单独定义），默认是live配置的方式，数据改变就改变
    * 也可以指定一个或多个（多个空格隔开） 'focus blur keyup'
    */
    trigger: null,
    /**
    * Number类型  为每个字段设置统一的开始验证情况，当输入字符大于等于设置的数值后才实时触发验证
    */
    threshold: null,
    /**
    * 表单域配置
    */
    fields: {
        //多个重复
        <fieldName>: {
            //隐藏或显示 该字段的验证
            enabled: true,
            //错误提示信息
            message: 'This value is not valid',
            /**
            * 定义错误提示位置  值为CSS选择器设置方式
            * 例如：'#firstNameMeg' '.lastNameMeg' '[data-stripe="exp-month"]'
            */
            container: null,
            /**
            * 定义验证的节点，CSS选择器设置方式，可不必须是name值。
            * 若是id，class, name属性，<fieldName>为该属性值
            * 若是其他属性值且有中划线链接，<fieldName>转换为驼峰格式  selector: '[data-stripe="exp-month"]' =>  expMonth
            */
            selector: null,
            /**
            * 定义触发验证方式（也可在fields中为每个字段单独定义），默认是live配置的方式，数据改变就改变
            * 也可以指定一个或多个（多个空格隔开） 'focus blur keyup'
            */
            trigger: null,
            // 定义每个验证规则
            validators: {
                //多个重复
                //官方默认验证参照  http://bv.doc.javake.cn/validators/
                // 注：使用默认前提是引入了bootstrapValidator-all.js
                // 若引入bootstrapValidator.js没有提供常用验证规则，需自定义验证规则哦
                <validatorName>: <validatorOptions>
            }
        }
    }
});
```


### 四、定义自定义验证规则

该规则是拓展插件的validators方法。
我将项目中常用的方法放到了一个单独js中，也就是上面第一步引用的自定义方法。

使用方法如下：
```java
(function($) {
    //自定义表单验证规则
    $.fn.bootstrapValidator.validators = {
        <validatorName> : {
            /**
             * @param {BootstrapValidator} 表单验证实例对象
             * @param {jQuery} $field jQuery 对象
             * @param {Object} 表单验证配置项值
             * @returns {boolean}
             */
            validate: function(validator, $field, options) {
                // 表单输入的值
                // var value = $field.val();

                //options为<validatorOptions>对象，直接.获取需要的值

                // 返回true/false
                //也可返回{ valid : true/false, message: 'XXXX'}
                return reg.test( $field.val() );

            }
        },
    };
}(window.jQuery));
```


### 五、常用事件

#### 1、重置某一单一验证字段验证规则
```java
$(formName).data(“bootstrapValidator”).updateStatus("fieldName",  "NOT_VALIDATED",  null );
```
#### 2、重置表单所有验证规则
```java
$(formName).data("bootstrapValidator").resetForm();
```
#### 3、手动触发表单验证
```java
//触发全部验证
$(formName).data(“bootstrapValidator”).validate();
//触发指定字段的验证
$(formName).data(“bootstrapValidator”).validateField('fieldName');
```
#### 4、获取当前表单验证状态
```java
// flag = true/false 
var flag = $(formName).data(“bootstrapValidator”).isValid();
```
#### 5、根据指定字段名称获取验证对象
```java
// element = jq对象 / null
var element = $(formName).data(“bootstrapValidator”).getFieldElements('fieldName');
```


### 六、表单提交

#### 1、当提交按钮是普通按钮
手动触发表单验证
示例：
```java
 $("buttonName").on("click", function(){
     //获取表单对象
    var bootstrapValidator = form.data('bootstrapValidator');
        //手动触发验证
        bootstrapValidator.validate();
        if(bootstrapValidator.isValid()){
            //表单提交的方法、比如ajax提交
        }
});
```
#### 2、当提交按钮的[type=”submit”]时
会在success之前自动触发表单验证

```java
var bootstrapValidator = form.data('bootstrapValidator');
bootstrapValidator.on('success.form.bv', function (e) {
    e.preventDefault();
    //提交逻辑
});
```



> 转载：https://blog.csdn.net/u013938465/article/details/53507109