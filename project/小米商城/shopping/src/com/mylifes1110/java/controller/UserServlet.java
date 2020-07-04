package com.mylifes1110.java.controller;

import java.io.IOException;

import java.lang.reflect.InvocationTargetException;

import java.sql.SQLException;

import java.util.List;
import java.util.Map;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.beanutils.BeanUtils;
import org.apache.commons.lang3.StringUtils;

import com.mylifes1110.java.bean.Address;
import com.mylifes1110.java.bean.User;
import com.mylifes1110.java.service.AddressService;
import com.mylifes1110.java.service.UserService;
import com.mylifes1110.java.service.impl.AddressServiceImpl;
import com.mylifes1110.java.service.impl.UserServiceImpl;
import com.mylifes1110.java.utils.DruidUtils;

import cn.dsna.util.images.ValidateCode;

/**
 * @ClassName UserServlet
 * @Description 处理所有关于用户业务的Servlet
 * @Author Ziph
 * @Date 2020/7/1
 * @Since 1.8
 * @Version 1.0
 */
@WebServlet("/userservlet")
public class UserServlet extends BaseServlet {
    private UserService    userService    = new UserServiceImpl();
    private AddressService addressService = new AddressServiceImpl();

    public String active(HttpServletRequest request, HttpServletResponse response) throws SQLException {
        String email  = request.getParameter("email");
        String code   = request.getParameter("code");
        int    result = userService.activeUser(email, code);

        if (result > 0) {
            request.setAttribute("msg", "激活成功");
        } else {
            request.setAttribute("msg", "您还未激活成功哦");
        }

        return "forward:/message.jsp";
    }

    public String checkUserName(HttpServletRequest request, HttpServletResponse response)
            throws SQLException, IOException {
        String username = request.getParameter("username");
        User   user     = userService.selectUserByUsername(username);

        if (user != null) {
            response.getWriter().write("1");
        } else {
            response.getWriter().write("0");
        }

        return "";
    }

    public String code(HttpServletRequest request, HttpServletResponse response) throws IOException {

        // 声明响应内容为图片数据
        response.setContentType("image/jpeg");

        // 告知浏览器,不需要缓存数据
        response.setHeader("Pragma", "no-cache");
        response.setHeader("Cache-Control", "no-cache");
        response.setDateHeader("Expires", 0L);

        // 创建一个规格的验证码对象
        ValidateCode vCode = new ValidateCode(120, 40, 4, 100);

        // 将验证码存储到Session中
        request.getSession().setAttribute("vcode", vCode.getCode());

        // 将验证码写出到浏览器
        vCode.write(response.getOutputStream());

        return null;
    }

    public String defaultAddress(HttpServletRequest request, HttpServletResponse response) throws SQLException {
        DruidUtils.beginTx();

        User   user  = (User) request.getSession().getAttribute("user");
        String idStr = request.getParameter("id");

        if (idStr == null) {
            return "forward:/login.jsp";
        }

        int id = Integer.parseInt(idStr);

        try {
            addressService.cancelAddresslevel(user.getId());
            addressService.updateAddresslevel(id, user.getId());
        } catch (SQLException throwables) {
            throwables.printStackTrace();
            DruidUtils.rollbackTx();

            throw throwables;
        }

        DruidUtils.endTx();

        return "forward:/userservlet?method=getAddress";
    }

    public String deleteAddress(HttpServletRequest request, HttpServletResponse response) throws SQLException {
        DruidUtils.beginTx();

        User   user  = (User) request.getSession().getAttribute("user");
        String idStr = request.getParameter("id");

        if (idStr == null) {
            return "forward:/login.jsp";
        }

        int id = Integer.parseInt(idStr);

        try {
            addressService.deleteAddressById(id, user.getId());
        } catch (SQLException throwables) {
            throwables.printStackTrace();
            DruidUtils.rollbackTx();

            throw throwables;
        }

        DruidUtils.endTx();

        return "forward:/userservlet?method=getAddress";
    }

    public String login(HttpServletRequest request, HttpServletResponse response) {

        // 收参：username、password、vcode(账号、密码、验证码)
        String username = request.getParameter("username");
        String password = request.getParameter("password");
        String vcode    = request.getParameter("vcode");

        // 校验验证码：如果验证码为空或验证码与Session中验证码不符则携带错误信息并请求转发至login.jsp重新让其登录
        if (StringUtils.isEmpty(vcode) ||!vcode.equalsIgnoreCase((String) request.getSession().getAttribute("vcode"))) {
            request.setAttribute("msg", "验证码错误");

            return "forward:/login.jsp";
        }

        // 校验账号和密码：调用Service层校验账号和密码
        User user = null;

        try {
            user = userService.selectUser(username, password);
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }

        // 判断user为空则实际是没有登录成功,携带错误信息返回登录页面
        if (user == null) {
            request.getSession().setAttribute("msg", "用户名或密码错误");

            return "forward:/login.jsp";
        }

        // 修改登陆状态
        request.getSession().setAttribute("user", user);

        // 收取自动登录参数
        String auto = request.getParameter("auto");

        // 自动登录
        if (auto != null) {
            Cookie autoCookie = new Cookie("auto", user.getUsername() + "#" + user.getPassword());

            autoCookie.setMaxAge(60 * 60 * 24 * 14);
            response.addCookie(autoCookie);
        }

        // 登录成功则跳转首页
        return "forward:/index.jsp";
    }

    public String logout(HttpServletRequest request, HttpServletResponse response) {

        // 销毁Session
        request.getSession().invalidate();

        // 结束用户Cookie的生命(覆盖)
        Cookie autoCookie = new Cookie("auto", "");

        autoCookie.setMaxAge(0);
        response.addCookie(autoCookie);

        return "forward:/index.jsp";
    }

    public String register(HttpServletRequest request, HttpServletResponse response)
            throws InvocationTargetException, IllegalAccessException {
        User                  user = new User();
        Map<String, String[]> map  = request.getParameterMap();

        BeanUtils.populate(user, map);

        int result = 0;

        try {
            result = userService.insertUser(user);
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }

        if (result <= 0) {
            request.setAttribute("registerMsg", "注册失败");

            return "forward:/register.jsp";
        }

        return "forward:/registerSuccess.jsp";
    }

    public String getAddress(HttpServletRequest request, HttpServletResponse response) throws SQLException {
        User          user      = (User) request.getSession().getAttribute("user");
        List<Address> addresses = addressService.selectAddressListByUid(user.getId());

        request.setAttribute("addList", addresses);

        return "forward:/self_info.jsp";
    }

    public String addAddress(HttpServletRequest request, HttpServletResponse response) throws SQLException {
        User user = (User) request.getSession().getAttribute("user");
        int uid = user.getId();
        int level = 0;
        String name = request.getParameter("name");
        String phone = request.getParameter("phone");
        String detail = request.getParameter("detail");
        Address address = new Address(uid, detail, name, phone, uid, level);

        addressService.addAddress(address);

        return "forward:/userservlet?method=getAddress";
    }

    public String updateAddress(HttpServletRequest request, HttpServletResponse response) throws SQLException, InvocationTargetException, IllegalAccessException {
        Address address = new Address();
        Map<String, String[]> map = request.getParameterMap();
        BeanUtils.populate(address, map);

        addressService.updateAddress(address, address.getId());

        return "forward:/userservlet?method=getAddress";
    }
}


