/**
 * Created by yyt on 16/8/18.
 * © 2016 NCF GROUP ALL RIGHTS RESERVED
 */
// import {mock} from "service/service_helpers"
// import {
//  CancelablePromise
// }  from 'common/index'

/**
 * 注册接口
  * @type {string}
 */
export function audit_register({location,  phone, finger, id_no, user_name, user_type, from}) {
  return mock({
    request_id : "111111111"
  }, 200)
}


/**
 * 登录接口
  * @type {string}
 */
export function audit_login({phone, finger, from, location}) {
  return mock({
    request_id : "111111111"
  }, 200)
}


/**
 * 实名验证接口
  * @type {string}
 */
export function audit_bind({phone, finger, from, location, card_no, user_name}) {
  return mock({
    request_id : "111111111"
  }, 200)
}


/**
 * 申请接口
  * @type {string}
 */
export function audit_apply({user_id, company_name, company_addr, home_addr, company_landline, emergency_person_phone, finger, from, location, order_sn}) {
  return mock({
    request_id : "111111111"
  }, 200)
}


/**
 * 状态更新接口
  * @type {string}
 */
export function audit_update({request_id, user_id, type}) {
  return mock({
    audit_update : "success"
  }, 200)
}
