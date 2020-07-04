package com.mylifes1110.java.bean;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Hotel {
    private Integer hotel_id;
    private String  hotel_name;
    private String  hotel_address;
    private String  hotel_tel;
    private String  hotel_star;
    private Img     img;
}
