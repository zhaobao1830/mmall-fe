/*
* @Author: Rosen
* @Date:   2017-05-17 18:55:04
* @Last Modified by:   Rosen
* @Last Modified time: 2017-05-17 18:56:37
*/

'use strict';

var _mm = require('util/mm.js');

var _cart = {
    // 获取购物车数量
    getCartCount : function(resolve, reject){
        _mm.request({
            url     : _mm.getServerUrl('/cart/get_cart_product_count.do'),
            success : resolve,
            error   : reject
        });
    }
}
module.exports = _cart;