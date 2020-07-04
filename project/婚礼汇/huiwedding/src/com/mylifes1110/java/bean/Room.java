package com.mylifes1110.java.bean;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Room {
    private Integer room_id;
    private String  room_name;
    private String  room_height;
    private String  room_min_fee;
    private String  room_form;
    private String  room_pillar;
    private String  room_dinner;
    private String  room_electric_fee;
    private String  room_split;
    private String  room_area;
    private String  room_lamplight;
    private String  room_LED;
    private String  room_tables;
    private Img     img;
}