/**
 * Created by weimeng on 16/4/5.
 * © 2016 NCF GROUP ALL RIGHTS RESERVED
 */

// import {mock} from "service/service_helpers"
// import {
//   CancelablePromise
// }  from 'common/index'

export const order_get = () => {

  const data = {
    order_list:
   [ { order_sn: 'ZNSJ201606050000100597',
       total_price: 3032.1,
       terms: 0,
       status: '确认收货',
       product_name: '华为mate8',
       sku_id: '00000045',
       thumb: 'http://xfq.ncfgroup.org/M00/00/00/rB8hwldOSeeAN5lAAAA6kRHpxAA848.jpg',
       attr_value: { '大小': '6寸', '颜色': '黑色', '网络': '通用版', '内存': '32G' } },
     { order_sn: 'ZNSJ201606130000100830',
       total_price: 8052.03,
       terms: 0,
       status: '审核通过',
       product_name: 'iPhone6S',
       sku_id: '00000056',
       thumb: 'http://xfq.ncfgroup.org/M00/00/03/rB8hwlddE1OAH2FEAADqv1EbaGc172.jpg',
       attr_value: { '大小': '64G', '颜色': '4.7寸', '网络': '黑色', '内存': '全网通' } } ]
  }

  return mock(data, 1000)


}


export function make_stage_by_order ({ order_sn, live_verify_photo, scene_photo}) {
  return mock({}, 200)

}

export const order_process_detail = ({order_sn}) => {
  const data = {
  order_sn: 'ZNSJ201606050000100597',
  total_price: 3032.1,
  status: '已发货',
  product_name: '华为mate8',
  sku_id: '00000045',
  thumb: 'http://xfq.ncfgroup.org/M00/00/00/rB8hwldOSeeAN5lAAAA6kRHpxAA848.jpg',
  attr_value: { '大小': '6寸', '颜色': '黑色', '网络': '通用版', '内存': '32G' },
    "order_records":[
     { date: '2016-06-05 18:35:00', status: '审核中' },
     { date: '2016-06-05 20:26:00', status: '审核通过' },
     { date: '2016-06-05 21:16:00', status: '签协议通过'},
     { date: '2016-06-05 21:16:00', status: '已发货' },
    ]
  }

  return mock(data, 100)
}


export const order_detail = ({order_sn}) => {
  const data = { order_sn: 'LNJ201607070000100024',
  total_price: 4482.27,
  month_repay: 683.59,
  terms: 6,
  apply_month_repay: 498.03,
  apply_terms: 9,
  status: '确认收货',
  order_time: '2016-07-07 20:56:00',
  product_id: '00000069',
  product_name: 'OPPO-R9 PLUS',
  sku_id: '00000073',
  attr_value: { '大小': '6寸', '颜色': '金色', '网络': '4G', '内存': '64' } }


  return mock(data, 1000)
}


/**
 * 订单签约
 * @param order_sn
 * @param accept
 */
export const order_user_sign = ({order_sn, accept}) => {

  return mock({
    status : 0
  }, 500)
}


export const order_sett_detail = ({order_sn}) => {

  const data= { order_sn: 'LNJ201607070000100024',
  buy_time: '2016/07/07',
  app_no: '201607070033',
  staging_times: '6',
  repay_amount: '0.00',
  repay_interest_amt: '0.00',
  loan_amount: '3340.00',
  overdue_day: '0',
  overdue_amount: '0.00',
  over_interest_amt: '0.00',
  overdue_penalty: '0.00',
  repaid_times: '6',
  repay_times: '0',
  staging_pass_time: '2016/08/10',
  first_repay_time: '2016/09/05',
  loan_status: '2',
  samount: '0.00',
  staging_amount: '683.59',
  sett_results:
   [ { app_no: '201607070033',
       order_sn: 'LNJ201607070000100024',
       product_name: 'OPPO-R9 PLUS',
       apply_date: '2016/08/10',
       period_no: '1',
       pay_date: '2016/09/05',
       over_status: '2',
       pay_status: '2',
       should_repay_amount: '683.59',
       repaid_amount: '683.59',
       remain_repay_amount: '0.00',
       loan_status: '已还款' },
     { app_no: '201607070033',
       order_sn: 'LNJ201607070000100024',
       product_name: 'OPPO-R9 PLUS',
       apply_date: '2016/08/10',
       period_no: '2',
       pay_date: '2016/10/05',
       over_status: '2',
       pay_status: '2',
       should_repay_amount: '683.59',
       repaid_amount: '683.59',
       remain_repay_amount: '0.00',
       loan_status: '已还款' },
     { app_no: '201607070033',
       order_sn: 'LNJ201607070000100024',
       product_name: 'OPPO-R9 PLUS',
       apply_date: '2016/08/10',
       period_no: '3',
       pay_date: '2016/11/05',
       over_status: '2',
       pay_status: '2',
       should_repay_amount: '683.59',
       repaid_amount: '683.59',
       remain_repay_amount: '0.00',
       loan_status: '已还款' },
     { app_no: '201607070033',
       order_sn: 'LNJ201607070000100024',
       product_name: 'OPPO-R9 PLUS',
       apply_date: '2016/08/10',
       period_no: '4',
       pay_date: '2016/12/05',
       over_status: '2',
       pay_status: '2',
       should_repay_amount: '683.59',
       repaid_amount: '683.59',
       remain_repay_amount: '0.00',
       loan_status: '已还款' },
     { app_no: '201607070033',
       order_sn: 'LNJ201607070000100024',
       product_name: 'OPPO-R9 PLUS',
       apply_date: '2016/08/10',
       period_no: '5',
       pay_date: '2017/01/05',
       over_status: '2',
       pay_status: '2',
       should_repay_amount: '683.59',
       repaid_amount: '683.59',
       remain_repay_amount: '0.00',
       loan_status: '已还款' },
     { app_no: '201607070033',
       order_sn: 'LNJ201607070000100024',
       product_name: 'OPPO-R9 PLUS',
       apply_date: '2016/08/10',
       period_no: '6',
       pay_date: '2017/02/05',
       over_status: '2',
       pay_status: '2',
       should_repay_amount: '683.59',
       repaid_amount: '683.59',
       remain_repay_amount: '0.00',
       loan_status: '已还款' } ] }
  return mock(data, 500)
}


export const customer_sett_detail = () => {



  const data = { customer_id: '20160707000030',
  repay_day: '05',
  overdue_penalty: '0.00',
  overdue_amount: '0.00',
  samount: '0.00',
  sett_list:
   [ { year_month: '2016/09',
       repay_day: '05',
       should_repay_amount: '683.59',
       remain_repay_amount: '0.00',
       repaid_amount: '683.59',
       status: 'yes',
       sett_results:
        [ { app_no: '201607070033',
            order_sn: 'LNJ201607070000100024',
            product_name: 'OPPO-R9 PLUS',
            apply_date: '2016/08/10',
            period_no: '1',
            pay_date: '2016/09/05',
            over_status: '2',
            pay_status: '2',
            should_repay_amount: '683.59',
            repaid_amount: '683.59',
            remain_repay_amount: '0.00',
            loan_status: '已还款' } ] },
     { year_month: '2016/10',
       repay_day: '05',
       should_repay_amount: '683.59',
       remain_repay_amount: '0.00',
       repaid_amount: '683.59',
       status: 'yes',
       sett_results:
        [ { app_no: '201607070033',
            order_sn: 'LNJ201607070000100024',
            product_name: 'OPPO-R9 PLUS',
            apply_date: '2016/08/10',
            period_no: '2',
            pay_date: '2016/10/05',
            over_status: '2',
            pay_status: '2',
            should_repay_amount: '683.59',
            repaid_amount: '683.59',
            remain_repay_amount: '0.00',
            loan_status: '已还款' } ] },
     { year_month: '2016/11',
       repay_day: '05',
       should_repay_amount: '683.59',
       remain_repay_amount: '0.00',
       repaid_amount: '683.59',
       status: 'yes',
       sett_results:
        [ { app_no: '201607070033',
            order_sn: 'LNJ201607070000100024',
            product_name: 'OPPO-R9 PLUS',
            apply_date: '2016/08/10',
            period_no: '3',
            pay_date: '2016/11/05',
            over_status: '2',
            pay_status: '2',
            should_repay_amount: '683.59',
            repaid_amount: '683.59',
            remain_repay_amount: '0.00',
            loan_status: '已还款' } ] },
     { year_month: '2016/12',
       repay_day: '05',
       should_repay_amount: '683.59',
       remain_repay_amount: '0.00',
       repaid_amount: '683.59',
       status: 'yes',
       sett_results:
        [ { app_no: '201607070033',
            order_sn: 'LNJ201607070000100024',
            product_name: 'OPPO-R9 PLUS',
            apply_date: '2016/08/10',
            period_no: '4',
            pay_date: '2016/12/05',
            over_status: '2',
            pay_status: '2',
            should_repay_amount: '683.59',
            repaid_amount: '683.59',
            remain_repay_amount: '0.00',
            loan_status: '已还款' } ] },
     { year_month: '2017/01',
       repay_day: '05',
       should_repay_amount: '683.59',
       remain_repay_amount: '0.00',
       repaid_amount: '683.59',
       status: 'yes',
       sett_results:
        [ { app_no: '201607070033',
            order_sn: 'LNJ201607070000100024',
            product_name: 'OPPO-R9 PLUS',
            apply_date: '2016/08/10',
            period_no: '5',
            pay_date: '2017/01/05',
            over_status: '2',
            pay_status: '2',
            should_repay_amount: '683.59',
            repaid_amount: '683.59',
            remain_repay_amount: '0.00',
            loan_status: '已还款' } ] },
     { year_month: '2017/02',
       repay_day: '05',
       should_repay_amount: '683.59',
       remain_repay_amount: '0.00',
       repaid_amount: '683.59',
       status: 'yes',
       sett_results:
        [ { app_no: '201607070033',
            order_sn: 'LNJ201607070000100024',
            product_name: 'OPPO-R9 PLUS',
            apply_date: '2016/08/10',
            period_no: '6',
            pay_date: '2017/02/05',
            over_status: '2',
            pay_status: '2',
            should_repay_amount: '683.59',
            repaid_amount: '683.59',
            remain_repay_amount: '0.00',
            loan_status: '已还款' } ] } ] }

  return mock(data, 500)
}
/**
 * 用户提交订单接口
  * @type {string}
 */
export function order_add(){
  const data = {
  }
  // return new CancelablePromise( (resolve, reject ) => {
  //   setTimeout( () => {
  //     reject( data )
  //   }, 500)
  // })
  return mock(data, 500)

}
