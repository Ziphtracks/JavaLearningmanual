package com.mylifes1110.java.bean;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class PageBean<T> {
    private Integer currentPage;
    private Long    totalSize;
    private Integer pageSize;
    private Long    totalPage;
    private List<T> list;
}