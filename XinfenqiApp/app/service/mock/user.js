/**
 * Created by weimeng on 16/4/5.
 * © 2016 NCF GROUP ALL RIGHTS RESERVED
 */

// import * as Contract from "../contract/user"
// import { mock } from "../service_helpers"


import moment from "moment"
/**
 * 发送手机验证码
 * @param mobile_phone
 * @param biz_type
 */
export function send_dynamic_check_code({mobile_phone, biz_type}) {
  const params = {mobile_phone, biz_type}
  return mock({
    status : 0
  }, 300)
}


/**
 * 注册
 * @param mobile_phone
 * @param password
 * @param check_code
 */
export function user_register({mobile_phone, password, check_code}) {
  const params = {mobile_phone, password, check_code}
  return mock({
    status : 0
  }, 200)
}


/**
 * 用户登录
 * @type {string}
 */
export function user_login({mobile_phone, password}) {
  const params = {mobile_phone, password}
  return mock({
    user_id : 15,
    mobile_phone : "18601218614",
    token : "2bea9e348c6440a0910888b537e8e5c1",
    real_name : "王晓二"
  }, 300)
}


/**
 *
 * 身份证上传
 */
export function user_upload_idcard({ user_id, idcard_font, idcard_back }) {
  const params = { user_id, idcard_font, idcard_back }
  return mock ({
    status : 0
  }, 300)
}


/**
 * 银行卡绑定
 * @bank_card_name e.g. ICBC
 * @bank_card_code e.g. 410002XXXXXXXXXXXX22
 * @bank_mobile_phone: e.g. 18610330551
 * @bank_card_img : "base64code"
 *
 */
export function bind_bank_card({bank_card_name, bank_card_code, bank_mobile_phone, bank_card_img}) {

  const params = { bank_card_name, bank_card_code, bank_mobile_phone, bank_card_img }

  return mock({
  }, 200)
}


/**
 * 获取用户银行卡
 * @type {string}
 */
export function get_bank_card_by_user_id() {

  return mock({
    mobile_phone: '13150285671',
    card_holder: '刘超',
    card_number: '62***************37',
    bank_name: '中国建设银行',
    bank_code: 'CCB'
  }, 200)

}


/**
 * 上传工作信息
 */
export function upload_user_job_info({
  industry,
  company_type,
  title,
  company_name,
  company_addr,
  company_tel,
  month_income,
  social_security
  }) {
  const params = {
    industry,
    company_type,
    title,
    company_name,
    company_addr,
    company_tel,
    month_income,
    social_security
  }

  return mock({
    status : 0
  }, 200)

}


/**
 * 获取工作信息
 * @type {string}
 */
export function get_job_info_by_user_id({user_id}) {

  const params = {user_id}

  return mock({
    title:"经理",
    company_name:"google",
    company_addr_detail:"北京市朝阳区霄云路28号",
    company_tel:"010-12345678",
    company_region_code: "110101",
    month_income: 2500,
  })

}


/**
 * 上传家庭信息
 */
export function upload_user_home_info({
  marriage_status,
  spouse_name,
  spouse_phone,
  children_num,
  family_addr,
  parent_name,
  mother,
  parent_phone,
  kinship_name,
  kinship_phone
  }) {

  const params = {
    marriage_status,
    spouse_name,
    spouse_phone,
    children_num,
    family_addr,
    parent_name,
    mother,
    parent_phone,
    kinship_name,
    kinship_phone
  }


  return mock({
    status : 0
  }, 200)

}


/**
 * 获取家庭信息
 * @type {string}
 */
export function get_home_info_by_user_id({user_id}) {
  const params = {user_id}
  return mock({
    user_id:"123456",
    marrage_status:"0",
    spouse_name:"beauty",
    spouse_phone:"12301235451",
    has_children:1,
    family_addr:"北京市朝阳区霄云路28号",
    parent_name:"monther",
    parent_phone:"12301201254",
    kinship_name:"aunt",
    kinship_phone:"123015151215"
  }, 400)
}


/**
 * 获取用户账单
 * @type {string}
 */
export function get_billing_by_user_id() {
  const Balance = {
    balance : 1000,
    balance_left : 1000,
    overdue : 0,
    settlement_date : "2015-01-03"
  }

  const getRandomDate = () => {
    const t = new Date().getTime()
    const d = 3600 * 24 * 1000
    const diff = Math.floor(Math.random() * 60) - 30
    const nT = t + diff * d
    return moment.unix(nT / 1000).format("YYYY-MM-DD")
  }
  const getBill = () =>  {
    return{
      apply_date : getRandomDate(),
      product : 'iphone 6S',
      order_id : '0101234567',
      balance : 1000
    }

  }

  const getBills = ( ) => {
    const rnd = 2 + Math.floor(Math.random() * 5)

    const bills = []
    for(let i = 0; i < rnd; i++){
      bills.push(getBill())
    }
    return bills
  }
  const data = [{
    month : '五月',
    ...Balance,
    bills : getBills()
  }, {
    month : "六月",
    ...Balance,
    bills : getBills()
  }, {
    month : "七月",
    ...Balance,
    bills : getBills()
  }, {
    month : "八月",
    ...Balance,
    bills : getBills(),
  }, {
    month : "九月",
    bills : getBills()
  }, {
    month : "十月",
    bills : getBills()
  }, {
    month : "十一月",
    bills : getBills()
  }]

  return mock(data, 500)
}



/**
 * 咨询与投诉
 * @type {string}
 */

export function user_consult_or_complaint({user_id, content}) {
  const params = {user_id, content}

  return mock({
    status : 0
  }, 300)
}


/**
 * 获取用户真实信息
 * @type {string}
 */
export function get_user_real_info() {
  const data = {
    "real_name" : "王小二",
    "id_number" : "130722199005000000"
  }
  return mock(data,500)
}

/**
 * 退出登录
 * @type {string}
 */
export function user_logout() {

  return mock({
    status : 0
  }, 300)
}


/**
 * 验证手机验证码
 */
export function verify_check_code({mobile_phone, biz_type, check_code}) {
  return mock( {
    status : 0
  }, 500)
}

/**
 * 检查用户和网信理财的绑定情况
 * @type {string}
 */
 export function get_user_firstp2p_status({token}) {
  return mock( {
    true
  }, 500)
 }

 /**
  * 用户签约协议
  * @type {string}
  */

export function get_user_agreement({user_id, order_sn}){
  const data = {
    agreement_escrow:
   { user_name: '吴十八',
     id_number: '110101198207015335',
     firstp2p_user: '13466625012',
     date: '2016-07-08 16:01:210',
     entry_name: '信赢1号',
     due_time: '9',
     loan_amount: '2415.6',
     account_name: '北京君安百货商贸',
     accountno: '611222676700234568',
     accountbank: '中国建设银行' },
  agreement_service:
   { party_aaddress: '1',
     party_auser_name: '1',
     party_bid_number: '110101198207015335',
     party_baddress: '光谷广场',
     commodity_name: '小米4S',
     sell_price: '1800.0',
     sell_price_ch: '壹仟捌佰元整',
     term: '9',
     loan_rate: '0.0965',
     platform_service_fee: '1',
     third_party_payment: '1',
     bank_storage_tube: '1',
     consulting_service_fee: '1',
     time_limit: '20',
     down_fee_by_day: '1',
     staging_amount: '268.4',
     staging_amount_ch: '贰佰陆拾捌元肆角',
     staging_times: '9',
     penalty: '1',
     return_poundage: '1',
     return_fee_by_day: '1' },
  agreement_trust:
   { party_auser_name: '吴十八',
     party_buser_name: '乙方委托方',
     party_buser_sex: '性别',
     party_buser_id_number: '身份证号',
     party_bcompany: '公司名称',
     party_bpost: '职务',
     date: '2016-07-08 16:01:210' }
  }
  return mock(data,500)
}

/**
 * 查看用户签约协议
 * @type {string}
 */

export function get_agreement_history({user_id, order_sn}){
 const data = {
   agreement_escrow:
  { user_name: '吴十八',
    id_number: '110101198207015335',
    firstp2p_user: '13466625012',
    date: '2016-07-08 16:01:210',
    entry_name: '信赢1号',
    due_time: '9',
    loan_amount: '2415.6',
    account_name: '北京君安百货商贸',
    accountno: '611222676700234568',
    accountbank: '中国建设银行' },
 agreement_service:
  { party_aaddress: '1',
    party_auser_name: '1',
    party_bid_number: '110101198207015335',
    party_baddress: '光谷广场',
    commodity_name: '小米4S',
    sell_price: '1800.0',
    sell_price_ch: '壹仟捌佰元整',
    term: '9',
    loan_rate: '0.0965',
    platform_service_fee: '1',
    third_party_payment: '1',
    bank_storage_tube: '1',
    consulting_service_fee: '1',
    time_limit: '20',
    down_fee_by_day: '1',
    staging_amount: '268.4',
    staging_amount_ch: '贰佰陆拾捌元肆角',
    staging_times: '9',
    penalty: '1',
    return_poundage: '1',
    return_fee_by_day: '1' },
 agreement_trust:
  { party_auser_name: '吴十八',
    party_buser_name: '乙方委托方',
    party_buser_sex: '性别',
    party_buser_id_number: '身份证号',
    party_bcompany: '公司名称',
    party_bpost: '职务',
    date: '2016-07-08 16:01:210' }
 }
 return mock(data,500)
}

/**
 * 上报异常信息
 * @type {string}
 */

/*
export function get_agreement_history(){
  return mock(null,500)
}
*/


/**
 * 我的邀请码
 * @type {string}
 */
export function get_invite_code({user_id})
{
  return mock( {
    token: '111111',
    inviteCode: '23r545453',
  }, 200)
}
/**
 * 销售邀请码
 * @type {string}
 */
export function post_invite_code({user_id,invite_code,token})
{
  return mock( {
    result: 'false'
  }, 200)
}

/**
 * 销售邀请码
 * @type {string}
 */
export function post_ocr_invocation()
{
  return mock( {
    result: 'false'
  }, 200)
}

/**
 * 我的收货地址
 * @type {string}
 */
export function get_receiver_info_by_user_id()
{
  return mock( {
    receiver_addr: '沙发上福利卡刷卡浪费'
  }, 200)
}

/**
 * 计算门店和客户之前的距离
 * @type {string}
 */

export function get_distance_comm_shop({comid,lnglat})
{
  return mock( {
    distance: '500米',
    msg: '',
    status: '',
  }, 200)
}
