/**
 * 用户中心相关接口
 */

//regex
// export const \w+ = '(\w+)'
//export function $1() { \n \n}

/**
 * 发送手机验证码
 * @type {string}
 */
export const SEND_DYNAMIC_CHECK_CODE = 'send_dynamic_check_code'


/**
 * 注册
 * @type {string}
 */
export const USER_REGISTER = 'user_register'


/**
 * 重置密码
 * @type {string}
 */
export const RESET_PASSWORD = 'reset_password'


/**
 * 用户登录
 * @type {string}
 */
export const USER_LOGIN = 'user_login'


/**
 *
 * 身份证上传
 * @type {string}
 */
export const USER_UPLOAD_IDCARD = 'user_upload_idcard'


/**
 * 银行卡绑定
 * @type {string}
 */
export const BIND_BANK_CARD = 'bind_bank_card'


/**
 * 获取用户银行卡
 * @type {string}
 */
export const GET_BANK_CARD_BY_USER_ID = 'get_bank_card_by_user_id'


/**
 * 上传工作信息
 * @type {string}
 */
export const UPLOAD_USER_JOB_INFO = 'upload_user_job_info'


/**
 * 获取工作信息
 * @type {string}
 */
export const GET_JOB_INFO_BY_USER_ID = 'get_job_info_by_user_id'


/**
 * 上传家庭信息
 */
export const UPLOAD_USER_HOME_INFO = 'upload_user_home_info'


/**
 * 获取家庭信息
 * @type {string}
 */
export const GET_HOME_INFO_BY_USER_ID = 'get_home_info_by_user_id'


/**
 * 获取用户账单
 * @type {string}
 */
export const GET_BILLING_BY_USER_ID = 'get_billing_by_user_id'


/**
 * 咨询与投诉
 * @type {string}
 */
export const USER_CONSULT_OR_COMPLAINT = 'user_consult_or_complaint'


/**
 * 用户确认密码
 * @type {string}
 */
export const USER_CHECK_PASSWORD = 'user_check_password'


/**
 * 获取理财token
 * @type {string}
 */
export const GET_FIRSTP2P_TOKEN_BY_USERID = 'get_firstp2p_token_by_userid'


/**
 * 获取用户真实信息
 * @type {string}
 */
export const GET_USER_REAL_INFO = 'get_user_real_info'

 /**
  * 退出登录
  * @type {string}
  */
export const USER_LOGOUT = 'user_logout'


/**
 * 验证手机验证码
 * @type {string}
 */
export const VERIFY_CHECK_CODE = 'verify_check_code'

/**
 * 检查用户和网信理财的绑定情况
 * @type {string}
 */
export const GET_USER_FIRSTP2P_STATUS = 'get_user_firstp2p_status'

/**
 * 用户签约协议
 * @type {string}
 */
export const GET_USER_AGREEMENT = 'get_user_agreement'

/**
 * 查看用户签约协议
 * @type {string}
 */
export const GET_AGREEMENT_HISTORY = 'get_agreement_history'

/**
 * 上报异常信息
 * @type {string}
 */
export const POST_APP_CRASH = 'post_app_crash'



/*
 * 增加扫描银行卡,身份证成功向 后台发送请求 计算上汤计费
 *
 *
 * */
export const POST_OCR_INVOCATION= 'post_ocr_invocation';


/**
 * 我的邀请码
 * @type {string}
 */
export const GET_INVITE_CODE= 'get_invite_code';

/**
 * 销售邀请码
 * @type {string}
 */
export const POST_INVITE_CODE= 'post_invite_code';

/**
 * 我的收货地址
 * @type {string}
 */
export const GET_RECEIVER_INFO_BY_USER_ID = "get_receiver_info_by_user_id"

/**
 * 计算门店和客户之前的距离
 */
export const GET_DISTANCE_COMM_SHOP = "get_distance_comm_shop"
