package com.mylifes1110.java.bean;

import lombok.Data;

/**
 *  接收微信的回调函数poji类
 */
@Data
public class WeiXin {

    /**
     * result : {"appid":"wx632c8f211f8122c6","bank_type":"CFT","cash_fee":"1","fee_type":"CNY","is_subscribe":"Y","mch_id":"1497984412","nonce_str":"1631171182","openid":"oUuptwrJudIfdihz1Z_T1AciMahs","out_trade_no":"1221ea762d54496e83a33c9dab72f320","result_code":"SUCCESS","return_code":"SUCCESS","sign":"5C7314AA4EB21772B42DBBCD65E56ACF","time_end":"20180207163125","total_fee":"1","trade_type":"NATIVE","transaction_id":"4200000065201802078895888133"}
     * type : 0
     */

    private WeinXinResult result;
    private int type;
}
