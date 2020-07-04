package com.mylifes1110.java.bean;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Page<T> {

    /**
     * 当前页数
     * 总页数
     * 总数据条数
     * 每页数据条数
     * 当前页数据
     */
    private int     currentPage;
    private int     totalPage;
    private int     totalSize;
    private int     pageSize;
    private List<T> list;
}


