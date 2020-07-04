package com.mylifes1110.java.bean;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Package {
    private Integer package_id;
    private String  package_name;
    private Integer package_price;
    private String  package_content;
    private Integer package_sales;
    private String  package_menuA;
    private String  package_menuB;
    private Img     img;
}


