/**
 *
 * Created by weimeng on 16/4/18.
 * © 2016 NCF GROUP ALL RIGHTS RESERVED
 */

/**
 * 根据类目编号查询类目信息
 * @type {string}
 */
export const GET_CATEGORY_BY_CAT_ID = 'get_category_by_cat_id'


/**
 * 根据用户id查询已购买商品信息
 * @type {string}
 */
export const GET_COMMODITY_BY_USER_ID = 'get_commodity_by_user_id'


/**
 * 根据类目编号查询商品信息
 * @type {string}
 */
export const GET_COMMODITY_BY_CAT_ID = 'get_commodity_by_cat_id'

/**
 * 根据skuid查询sku详情和类目信息
 */
export const GET_COMMODITY_DETAIL_BY_COM_ID = 'get_commodity_detail_by_com_id'


/**
 * 根据skuid获取商品详情
 * @type {string}
 */
export const COMMODITY_GET_BY_SKU_ID = 'commodity_get_by_sku_id'

/**
 * 通过输入售价进行分期试算
 * @type {string}
 */
export const TERMCALC_GET_BY_SKU_PRICE = 'termcalc_get_by_sku_price'
