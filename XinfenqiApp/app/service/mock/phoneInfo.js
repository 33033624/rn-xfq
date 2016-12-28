/**
 * Created by yyt on 16/11/16.
 */
 // import * as Contract from "../contract/phoneInfo.js"
 // import { http_get, http_post, http_put, service_url } from "../service_helpers"

/**
* 上传用户通讯录
* @type {string}
*/
export function post_contacts({userId, contacts}){

    console.log(contacts,'通讯录')


    //if(!userId) { return user_not_login() }

  return http_post(Contract.POST_CONTACTS, {userId:1,contacts:[]})
}

/**
* 上传用户通话记录
* @type {string}
*/
export function post_records({userId, records}){
 // if(!userId) { return user_not_login() }
    console.log(records,'通话记录')

  return http_post(Contract.POST_RECORDS, {user_id:1,records:[]})
}

/**
* 上传用户短信记录
* @type {string}
*/
export function post_smss({userId, smss}){
 // if(!userId) { return user_not_login() }
    console.log(smss,'短信')

  return http_post(Contract.POST_SMSS, {userId:1,smss:[]})
}
