/**
 * Created by weimeng on 16/4/5.
 * © 2016 NCF GROUP ALL RIGHTS RESERVED
 */
// import * as Contract from "../contract/product"
//
// import { mock } from "../service_helpers"
// import * as R from "ramda";


const randGet = (arr) => {
  return arr[Math.floor(arr.length * Math.random())]
}

const imgs = [
  'http://img13.360buyimg.com/n7/jfs/t2461/281/145335373/97081/8af73dbf/55f0e80aN532efcae.jpg',
  'http://img14.360buyimg.com/n7/jfs/t2560/177/1418798090/238476/aa7d7e25/572f6384Nde3e023c.jpg',
  "http://img11.360buyimg.com/n7/jfs/t1879/318/1901346163/284074/2a390c92/56809e54Ndf39cb10.jpg",
  "http://img12.360buyimg.com/n7/jfs/t2269/156/2752556311/110186/45c4c1d6/56f3a6a4N8b12f7f5.jpg",
  "http://img10.360buyimg.com/n7/jfs/t1912/281/871017211/122828/967a5a28/56334a5dN44ee2e85.jpg",
  "http://img11.360buyimg.com/n7/jfs/t2443/45/2975552355/336361/1ec28cbd/572bf671N87cff702.jpg",
  "http://img11.360buyimg.com/n7/jfs/t1498/52/751865672/111077/d0c7f763/55a8ac33N79f72f05.jpg"
]
/**
 * 根据类目编号查询类目信息
 * @param cat_id
 * @return Promise
 */
export function get_category_by_cat_id({cat_id}) {
  const params = {cat_id}

  return mock({
    id:1,
    cat_id:1,
    name:"root",
    initial:"r",
    parentId:null,
    sub_cates : [{
      id:2,
      cat_id:2,
      name:"手机",
      initial:"p",
      parent_id:1,
    }, {
      id:3,
      cat_id:3,
      name:"电视",
      initial:"p",
      parent_id:1,
    }, {
      id:4,
      cat_id:4,
      name:"包包",
      initial:"p",
      parent_id:1,
    }, {
      id:5,
      cat_id:5,
      name:"打火机",
      initial:"p",
      parent_id:1,
    }, {
      id:6,
      cat_id:6,
      name:"汽车",
      initial:"c",
      parent_id:1,
    }]
  })
}


/**
 * 根据用户id查询已购买商品信息
 * @type {string}
 */
export function get_commodity_by_user_id({user_id}) {

  const params = {user_id}
  return mock([
    {
      "id": 1,
      "name": "some A product",
      "min_price": 100,
      "max_price": 1000,
      "thumb":"商品缩略图"
    },
    {
      "id": 1,
      "name": "some A product",
      "min_price": 100,
      "max_price": 1000,
      "thumb":"商品缩略图"
    },
    {
      "id": 1,
      "name": "some A product",
      "min_price": 100,
      "max_price": 1000,
      "thumb":"商品缩略图"
    },
    {
      "id": 1,
      "name": "some A product",
      "min_price": 100,
      "max_price": 1000,
      "thumb":"商品缩略图"
    },

  ])
}


/**
 * 根据类目编号查询商品信息
 * @type {string}
 */
export function get_commodity_by_cat_id({cat_id}) {
  const params = {cat_id}

  const mockItem = () => {
    const lastName = ["马", "虎", "克", "斯", "豹", "蛟"]
    const firstNames = ['宝', '海', '飞', '迅', '彪']
    const types = [100, 200, 300, 400, 500, 'X1', "X2", "X3", "X4"]
    const name = randGet(firstNames) + randGet(lastName) + randGet(types)
    const img = randGet(imgs) + "?t=" + (Math.floor(new Date().getTime() / 1000))
    return {
      id: 1,
      name: name,
      min_price:100,
      max_price:200,
      thumb:img
    }
  }

  const items = R.range(0, 10).map(mockItem)
  return mock(items, 500)

}


/**
 * 根据商品id查询商品信息
 * @type {string}
 */
export function get_commodity_detail_by_com_id({com_id}) {

  const params = {com_id}
  const thumb =   'http://img14.360buyimg.com/n7/jfs/t784/71/771084802/120703/eeb10073/55474dddN714dbe44.jpg'
  const attrs = {
    '型号' : ['豪华型', '基础型', '越野型', '运动型'],
    '颜色' : ['酒红', '银灰', '褐色']
  }

  const data = {
    id: 1,
    name:"Macbook 2020go",
    desc:"2020 go is a magic product.",
    thumb: thumb,
  }

  data.sku_list = []
  data.attr_list = []

  // 生成属性
  // sku的数目 = 属性的的所有组合
  let i = 0
  for(let key in attrs) {
    i++
    const attr = {
      id : i,
      name : key,
      attr_value_list : []
    }

    let j = 0
    for(let k2 in attrs[key]) {
      j++
      attr.attr_value_list.push({
        id : j,
        attr_id : j,
        value : attrs[key][k2]
      })
    }
    data.attr_list.push(attr)
  }

  // 生成SKU
  // SKU 是属性的笛卡尔积
  function cartProd(paramArray) {
    function addTo(curr, args) {
      var i, copy,
        rest = args.slice(1),
        last = !rest.length,
        result = [];
      for (i = 0; i < args[0].length; i++) {
        copy = curr.slice();
        copy.push(args[0][i]);
        if (last) {
          result.push(copy);
        } else {
          result = result.concat(addTo(copy, rest));
        }
      }
      return result;
    }
    return addTo([], Array.prototype.slice.call(arguments));
  }

  const skus = cartProd(attrs['型号'], attrs['颜色'])

  for(i = 0; i < skus.length; i++) {
    // for (j = 0; j < skus[i].length; j++) {
    //   const sku = skus[i][j] // sku => [attr]
    //
    //   //最后 sku的值是属性值和"_"拼接成字符串
    //   let skuAttrValue = R.map( attr => attr.value, sku ).join("_")

      if ( Math.random() > 0.5) {
        continue
      }

      let skuAttrValue = skus[i]
      data.sku_list.push({
        id : i + 1,
        com_id : i + 1,
        name : data.name + "-" + skuAttrValue,
        thumb : randGet(imgs),
        attr_value : skuAttrValue,
        inventory : "sku库存",
        staging_list : [{
          id : 1,
          title : "100 × 3"
        }, {
          id : 2,
          title : "50 × 6",
        }, {
          id : 3,
          title : "25 × 12"
        }]
      })

    // }
  }

  return mock(data, 300)
  /*

  const data = {
    id: 1,
    name:"Macbook 2020go",
    desc:"2020 go is a magic product.",
    thumb: thumb,
    sku_list:[{
        id: 1,
        com_id: 1,
        name : "豪华型-银灰色",
        thumb:"sku缩略图",
        attr_value:"属性-值组成的json串",
        price:"sku价格",
        inventory:"sku库存"
      },
      {
        "id":"skuId",
        "com_id":"商品id",
        "name":"sku名称",
        "thumb":"sku缩略图",
        "attr_value":"属性-值组成的json串",
        "price":"sku价格",
        "inventory":"sku库存"
      }

    ],
    attr_list:[
      {
        id:1,
        name:"型号",
        attr_value_list:[
          {
            id:1,
            attr_id:1,
            value : "豪华型"
          },
          {
            id:2,
            attr_id: 2,
            value:"基础行"
          },
          {
            id:3,
            attr_id:3,
            value : "越野行"
          },
          {
            id:4,
            attr_id: 4,
            value:"运动型"
          }
        ]
      },
      {
        id: 2,
        name:"颜色",
        attr_value_list:[
          {
            "id":1,
            "attr_id":"1",
            "value":"银灰"
          },
          {
            "id":"2",
            "attr_id":"2",
            "value":"酒红"
          },{
            "id":"3",
            "attr_id":"3",
            "value":"黑色"
          }
        ]
      },
    ],
  }

  return mock(data, 500)
  */

}



/**
 * 根据skuid查询sku详情和类目信息
 */
export const GET_SKU_AND_CATEGORY_DETAIL_BY_SKU_ID = 'get_sku_and_category_detail_by_sku_id'



/**
 * 根据skuid获取商品详情
 * @type {string}
 */
export function commodity_get_by_sku_id({id}){
  const data =
  {
  fund_id: '000000000channel',
  id: 'R4YrXX7',
  com_name: 'oppoR9 Plus',
  com_sn: 'R4YrXX7',
  mer_id: '',
  outlet_id: '00000030',
  outlet_name: '君安百货丰台店',
  spu_id: '00000053',
  brand_id: '00000042',
  brand_name: 'OPPO',
  status: '1',
  cat_sn: '00000087',
  cat_name: '老年机',
  sell_point: '手机非常好看，有明星代言',
  min_price: 0,
  max_price: 0,
  delete_flag: '',
  create_time: '2016-05-24 21:06:22',
  update_time: '2016-07-04 14:21:55',
  image: [ 'http://uat-xfqweb.ncfgroup.org/M00/00/06/rB8hwldrstSAR2W2AABHO6WdBN4995.jpg' ],
  sku_list:
   [ { com_id: 'R4YrXX7',
       com_sn: 'R4YrXX7',
       sku_sn: 'e4oZ772',
       mer_id: '',
       outlet_id: '00000030',
       staging_scheme_id: 'XY1HLLTL11NN',
       supplier_price: '3300.0',
       market_price: '3300.0',
       sell_price: '3300.0',
       sell_point: '手机超薄，而且好看',
       attr_symbol_path: '',
       status: '1',
       is_direct_selling: '1',
       name: 'oppoR9 Plus',
       thumb:
        [ 'http://uat-xfqweb.ncfgroup.org/M00/00/06/rB8hwldrstSAR2W2AABHO6WdBN4995.jpg',
          'http://uat-xfqweb.ncfgroup.org/M00/00/06/rB8hwldrsvCAOUnEAAAuiv7vSvQ270.jpg' ],
       id: 'e4oZ772',
       attr_value: '64,金色,4G,6寸',
       attr_value_id: '00000060,00000061,00000062,00000063',
       com_name: 'oppoR9 Plus',
       cat_sn: '00000087',
       cat_name: '老年机',
       cat_initial: 'LNJ',
       brand_id: '00000042',
       brand_name: 'OPPO',
       sales_man_id: 'wangzongxian1',
       default_term: 9,
       business_type: '信赢一号',
       create_time: '2016-05-24 21:08:51',
       update_time: '2016-07-04 14:30:39',
       attributes:
        [ { id: '00000012',
            spu_id: '00000053',
            attr_name: '内存',
            delete_flag: '0',
            create_time: '2016-05-20 18:01:11',
            update_time: '2016-07-28 17:54:32' },
          { id: '00000013',
            spu_id: '00000053',
            attr_name: '颜色',
            delete_flag: '0',
            create_time: '2016-05-20 18:01:20',
            update_time: '2016-07-05 17:49:56' },
          { id: '00000014',
            spu_id: '00000053',
            attr_name: '网络',
            delete_flag: '0',
            create_time: '2016-05-20 18:01:28',
            update_time: '2016-05-20 18:01:53' },
          { id: '00000015',
            spu_id: '00000053',
            attr_name: '大小',
            delete_flag: '0',
            create_time: '2016-05-23 15:55:06',
            update_time: '2016-05-23 15:55:20' } ],
       attr_values:
        [ { id: '00000060',
            spu_attr_id: '00000012',
            value: '64',
            spu_id: '00000053',
            symbol: '1',
            delete_flag: '0',
            create_time: '2016-05-24 00:00:00',
            update_time: '2016-05-24 21:03:05' },
          { id: '00000061',
            spu_attr_id: '00000013',
            value: '金色',
            spu_id: '00000053',
            symbol: '2',
            delete_flag: '0',
            create_time: '2016-05-24 00:00:00',
            update_time: '2016-05-24 21:03:09' },
          { id: '00000062',
            spu_attr_id: '00000014',
            value: '4G',
            spu_id: '00000053',
            symbol: '3',
            delete_flag: '0',
            create_time: '2016-05-24 00:00:00',
            update_time: '2016-05-24 21:03:12' },
          { id: '00000063',
            spu_attr_id: '00000015',
            value: '6寸',
            spu_id: '00000053',
            symbol: '4',
            delete_flag: '0',
            create_time: '2016-05-24 00:00:00',
            update_time: '2016-05-24 21:03:15' } ],
       loan_typesets:
        [ { type_no: 'XY1HLLTL11NN',
            term: '3',
            term_sum: '1235.3',
            term_business_sum: '3705.9',
            ahead_sum: '135.3',
            finerate: '2' },
          { type_no: 'XY1HLLTL11NN',
            term: '6',
            term_sum: '675.4',
            term_business_sum: '4052.4',
            ahead_sum: '125.4',
            finerate: '2' },
          { type_no: 'XY1HLLTL11NN',
            term: '9',
            term_sum: '492.07',
            term_business_sum: '4428.63',
            ahead_sum: '125.4',
            finerate: '2' },
          { type_no: 'XY1HLLTL11NN',
            term: '12',
            term_sum: '402.05',
            term_business_sum: '4824.6',
            ahead_sum: '127.05',
            finerate: '2' },
          { type_no: 'XY1HLLTL11NN',
            term: '18',
            term_sum: '316.98',
            term_business_sum: '5705.64',
            ahead_sum: '133.65',
            finerate: '2' },
          { type_no: 'XY1HLLTL11NN',
            term: '24',
            term_sum: '279.4',
            term_business_sum: '6705.6',
            ahead_sum: '141.9',
            finerate: '2' } ],
       org_status: '1',
       is_show: 1 },
     { com_id: 'R4YrXX7',
       com_sn: 'R4YrXX7',
       sku_sn: 'njxEBJ5',
       mer_id: '',
       outlet_id: '00000030',
       staging_scheme_id: 'XY1HLLTL11NN',
       supplier_price: '3400.0',
       market_price: '3500.0',
       sell_price: '3600.0',
       sell_point: 'aaaaaaaaaaaaaaa',
       attr_symbol_path: '',
       status: '1',
       is_direct_selling: '2',
       name: 'OPPOR9-PLUS-0630',
       thumb: [],
       id: 'njxEBJ5',
       attr_value: '64,金色,4G,6寸',
       attr_value_id: '00000060,00000061,00000062,00000063',
       com_name: 'oppoR9 Plus',
       cat_sn: '00000087',
       cat_name: '老年机',
       cat_initial: 'LNJ',
       brand_id: '00000042',
       brand_name: 'OPPO',
       sales_man_id: 'wangzongxian1',
       default_term: 12,
       business_type: '信赢一号',
       create_time: '2016-06-30 14:25:01',
       update_time: '2016-06-30 14:25:01',
       attributes:
        [ { id: '00000012',
            spu_id: '00000053',
            attr_name: '内存',
            delete_flag: '0',
            create_time: '2016-05-20 18:01:11',
            update_time: '2016-07-28 17:54:32' },
          { id: '00000013',
            spu_id: '00000053',
            attr_name: '颜色',
            delete_flag: '0',
            create_time: '2016-05-20 18:01:20',
            update_time: '2016-07-05 17:49:56' },
          { id: '00000014',
            spu_id: '00000053',
            attr_name: '网络',
            delete_flag: '0',
            create_time: '2016-05-20 18:01:28',
            update_time: '2016-05-20 18:01:53' },
          { id: '00000015',
            spu_id: '00000053',
            attr_name: '大小',
            delete_flag: '0',
            create_time: '2016-05-23 15:55:06',
            update_time: '2016-05-23 15:55:20' } ],
       attr_values:
        [ { id: '00000060',
            spu_attr_id: '00000012',
            value: '64',
            spu_id: '00000053',
            symbol: '1',
            delete_flag: '0',
            create_time: '2016-05-24 00:00:00',
            update_time: '2016-05-24 21:03:05' },
          { id: '00000061',
            spu_attr_id: '00000013',
            value: '金色',
            spu_id: '00000053',
            symbol: '2',
            delete_flag: '0',
            create_time: '2016-05-24 00:00:00',
            update_time: '2016-05-24 21:03:09' },
          { id: '00000062',
            spu_attr_id: '00000014',
            value: '4G',
            spu_id: '00000053',
            symbol: '3',
            delete_flag: '0',
            create_time: '2016-05-24 00:00:00',
            update_time: '2016-05-24 21:03:12' },
          { id: '00000063',
            spu_attr_id: '00000015',
            value: '6寸',
            spu_id: '00000053',
            symbol: '4',
            delete_flag: '0',
            create_time: '2016-05-24 00:00:00',
            update_time: '2016-05-24 21:03:15' } ],
       loan_typesets:
        [ { type_no: 'XY1HLLTL11NN',
            term: '3',
            term_sum: '1347.6',
            term_business_sum: '4042.8',
            ahead_sum: '147.6',
            finerate: '2' },
          { type_no: 'XY1HLLTL11NN',
            term: '6',
            term_sum: '736.8',
            term_business_sum: '4420.8',
            ahead_sum: '136.8',
            finerate: '2' },
          { type_no: 'XY1HLLTL11NN',
            term: '9',
            term_sum: '536.8',
            term_business_sum: '4831.2',
            ahead_sum: '136.8',
            finerate: '2' },
          { type_no: 'XY1HLLTL11NN',
            term: '12',
            term_sum: '438.6',
            term_business_sum: '5263.2',
            ahead_sum: '138.6',
            finerate: '2' },
          { type_no: 'XY1HLLTL11NN',
            term: '18',
            term_sum: '345.8',
            term_business_sum: '6224.4',
            ahead_sum: '145.8',
            finerate: '2' },
          { type_no: 'XY1HLLTL11NN',
            term: '24',
            term_sum: '304.8',
            term_business_sum: '7315.2',
            ahead_sum: '154.8',
            finerate: '2' } ],
       org_status: '1',
       is_show: 1 } ],
  attr_list:
   [ { id: '00000012',
       spu_id: '00000053',
       attr_name: '内存',
       delete_flag: '0',
       create_time: '2016-05-20 18:01:11',
       update_time: '2016-07-28 17:54:32',
       attr_value_list:
        [ { id: '00000060',
            spu_attr_id: '00000012',
            value: '64',
            spu_id: '00000053',
            symbol: '1',
            delete_flag: '0',
            create_time: '2016-05-24 00:00:00',
            update_time: '2016-05-24 21:03:05' } ] },
     { id: '00000013',
       spu_id: '00000053',
       attr_name: '颜色',
       delete_flag: '0',
       create_time: '2016-05-20 18:01:20',
       update_time: '2016-07-05 17:49:56',
       attr_value_list:
        [ { id: '00000061',
            spu_attr_id: '00000013',
            value: '金色',
            spu_id: '00000053',
            symbol: '2',
            delete_flag: '0',
            create_time: '2016-05-24 00:00:00',
            update_time: '2016-05-24 21:03:09' } ] },
     { id: '00000014',
       spu_id: '00000053',
       attr_name: '网络',
       delete_flag: '0',
       create_time: '2016-05-20 18:01:28',
       update_time: '2016-05-20 18:01:53',
       attr_value_list:
        [ { id: '00000062',
            spu_attr_id: '00000014',
            value: '4G',
            spu_id: '00000053',
            symbol: '3',
            delete_flag: '0',
            create_time: '2016-05-24 00:00:00',
            update_time: '2016-05-24 21:03:12' } ] },
     { id: '00000015',
       spu_id: '00000053',
       attr_name: '大小',
       delete_flag: '0',
       create_time: '2016-05-23 15:55:06',
       update_time: '2016-05-23 15:55:20',
       attr_value_list:
        [ { id: '00000063',
            spu_attr_id: '00000015',
            value: '6寸',
            spu_id: '00000053',
            symbol: '4',
            delete_flag: '0',
            create_time: '2016-05-24 00:00:00',
            update_time: '2016-05-24 21:03:15' } ] } ] }
  return mock(data, 500)

}

export const termcalc_get_by_sku_price = () =>{
  const data = {
    sku_id : '',
    sale_price: '',
    default_price: '492.07x9',
    loan_typesets: [ { type_no: 'XY1HLLTL11NN',
        term: '3',
        term_sum: '1235.3',
        term_business_sum: '3705.9',
        ahead_sum: '135.3',
        finerate: '2' },
      { type_no: 'XY1HLLTL11NN',
        term: '6',
        term_sum: '675.4',
        term_business_sum: '4052.4',
        ahead_sum: '125.4',
        finerate: '2' },
      { type_no: 'XY1HLLTL11NN',
        term: '9',
        term_sum: '492.07',
        term_business_sum: '4428.63',
        ahead_sum: '125.4',
        finerate: '2' },
      { type_no: 'XY1HLLTL11NN',
        term: '12',
        term_sum: '402.05',
        term_business_sum: '4824.6',
        ahead_sum: '127.05',
        finerate: '2' },
      { type_no: 'XY1HLLTL11NN',
        term: '18',
        term_sum: '316.98',
        term_business_sum: '5705.64',
        ahead_sum: '133.65',
        finerate: '2' },
      { type_no: 'XY1HLLTL11NN',
        term: '24',
        term_sum: '0000.4',
        term_business_sum: '6705.6',
        ahead_sum: '141.9',
        finerate: '2' } ],
  }
  return mock(data,500)
}
