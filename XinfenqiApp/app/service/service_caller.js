/**
 * Created by weimeng on 16/4/18.
 * © 2016 NCF GROUP ALL RIGHTS RESERVED
 */


import {XIN_SERVICE_ENV} from "common/XinConfig"

import * as mocks from "../service/mock/index"
import * as dists from "../service/dist/index"

import {ORDER_PROCESS_DETAIL, ORDER_SETT_DETAIL, CUSTOMER_SETT_DETAIL} from "./contract/order"
import {GET_BILLING_BY_USER_ID, VERIFY_CHECK_CODE, GET_USER_FIRSTP2P_STATUS} from "./contract/user"
import {USER_CONSULT_OR_COMPLAINT} from "./contract/user"
import {GET_USER_REAL_INFO} from "./contract/user"

import {AUDIT_LOGIN, AUDIT_REGISTER, AUDIT_UPDATE, AUDIT_BIND, AUDIT_APPLY} from "./contract/audit"
import {POST_CONTACTS, POST_RECORDS, POST_SMSS} from "./contract/phoneInfo"

const forceMocks = [
  // AUDIT_LOGIN,
  // AUDIT_REGISTER,
  // AUDIT_UPDATE,
  // AUDIT_BIND,
  // AUDIT_APPLY
]

/**
 * Invoke a service.
 * e.g.
 *
 * @param name service name
 * @param params params
 */
export function call_service(name, ...params) {
  console.log("CALL_SERVICE name -->> " + name);
  console.log(...params)

  let env = XIN_SERVICE_ENV

  if(forceMocks.indexOf(name) !== -1){
    env = 'mock'
  }

  name = name.toLowerCase()
  if(env === 'mock') {
    if( !mocks[name] ) {
      throw 'mock service ' + name + " undefined."
    }
    return mocks[name].apply(null, params)
  } else if( env === 'dist' ) {
    if( !dists[name] )  {
      throw 'dist service ' + name + " undefined."
    }
    return dists[name].apply(null, params)
  }
}
