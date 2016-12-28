import qs from "qs"
import {
  CancelablePromise
}  from 'common/index'

import {
  XIN_SERVICE_URL,
  XIN_REQ_TIMEOUT,
  XIN_APISIGN_CLIENTID,
  XIN_APISIGN_STR
} from 'common/XinConfig'

import {getStore} from "store/configureStore"
import md5 from 'md5'
import R from 'ramda'

/**
 * Mock a successful request
 * @param data
 * @param time
 * @returns {*}
 */
export const mock = ( data, time ) => {

  return new CancelablePromise( (resolve, reject ) => {
    setTimeout( () => {
      resolve( data )
    }, time)
  })
}


/**
 * Mock a logic error
 */
export const mock_fail = ( errorCode, errorMessage, time ) => {

  return new Promise( (resolve, reject ) => {
    setTimeout( () => {
      reject({errorCode, errorMessage})
    }, time)
  })
}


export function service_url ( ) {
  return XIN_SERVICE_URL

}


export const http_get = ( method_name, params ) => {

  const token = getStore().getState().user.token
  const timestamp = Math.floor((new Date().getTime()) / 1000)

  let paramsValue = "{}"
  if (params) {
    paramsValue = JSON.stringify(params)
  }

  const query = {
    timestamp: timestamp,
    method : method_name,
    token,
    format : 'json',
    clientId : XIN_APISIGN_CLIENTID,
    sign : sign({
      timestamp : timestamp,
      clientId : XIN_APISIGN_CLIENTID,
      params : paramsValue,
    }),
    params : paramsValue,
  }

  // console.log("http_get");
  // console.log(method_name);
  let url = service_url() + "?" + qs.stringify(query)
  console.log("url",url);

  const meta = {
    //credentials: 'same-origin'
    timeout : XIN_REQ_TIMEOUT
  }
  //const I = pending_test( url )
  const promise = new CancelablePromise( (resolve, reject) => {

    fetch(url, meta)
      .catch(e => {
        return {status : 404}
      })
      .then(normalize_response(reject) )
      .then(normalize_data(resolve, reject))
      .catch(error => {
      })

  })

  return promise
}



export const http_post = ( method_name , params ) => {

  const token = getStore().getState().user.token
  const timestamp = Math.floor((new Date().getTime()) / 1000)
  let paramsValue = "{}"
  if (params) {
    paramsValue = JSON.stringify(params)
  }
  console.log("paramsValue接口",paramsValue);

  const isEncode = false
  let
 encodeParams = paramsValue
  if (method_name == 'make_stage_by_order' || method_name == 'bind_bank_card' || method_name == 'user_register') {
    encodeParams =  paramsValue.replace(/\+/g, '%2B')
  }

  const query = {
    timestamp: timestamp,
    method : method_name,
    token,
    format : 'json',
    clientId : XIN_APISIGN_CLIENTID,
    sign : sign({
      timestamp : timestamp,
      clientId : XIN_APISIGN_CLIENTID,
      params : paramsValue,
    }),
      params : encodeParams

  }

  let url = service_url()
  console.log("url",url);
  console.log("query",query);

  const obj = {
    timestamp : timestamp,
    method : method_name,
    token : token || "",
    format : "json",
    clientId : XIN_APISIGN_CLIENTID,
    sign : sign({
      timestamp : timestamp,
      clientId : XIN_APISIGN_CLIENTID,
      params : paramsValue,
    }),
    params : encodeParams,
  }
  console.log("obj",obj);

  const promise = new CancelablePromise( (resolve, reject) => {
    const meta = {
      method : 'POST',
      body : qs.stringify(obj),
      timeout : XIN_REQ_TIMEOUT,
      headers : {
        'Accept': 'application/json',
        "Content-Type" : "application/x-www-form-urlencoded"
      }
    }

    // console.log("meta");
    console.log(url);

    fetch(url, meta)
      .catch(e => {
        return {status : 404}
      })
      .then(normalize_response(reject) )
      .then(normalize_data(resolve, reject))
      .catch(error => {
        console.error(error)
      })

  })
  return promise
}

const object2pairs = (obj) => {
  const pairs = []
  for(let key in obj) {
    pairs.push({key, value : obj[key]})
  }
  return pairs
}

function sign(params){

  const pairs = object2pairs(params)
  const sortByKey = R.sortBy(R.prop('key'))
  const sortedPairs = sortByKey(pairs)


  let str = XIN_APISIGN_STR
  sortedPairs.map(item => {
    str += item.key + item.value
  })
  str += XIN_APISIGN_STR
  // console.log("sign_strstrstrstr")
  // console.log(str);
  // console.log(md5(str));

  return md5(str)
}

function resolve_url_into_parts( url ) {
  return url.match(/([^/]+)/g)
}

function getFormData( params ) {

  const f = new window.FormData()
  for(let key in params ) {
    if (params.hasOwnProperty(key)) {
      f.append(key, params[key])
    }
  }
  return f
}


function normalize_response( reject) {

  return response => {
    if (response.status >= 200 && response.status < 300 ) {
      return response.json()
    }
    const error = {result_code : -1, error_msg : `[${response.status}]${response.statusText}`}
    reject(error)
  }
}


function normalize_data(resolve, reject) {

  return data => {
    if(!data) { return }
    if (data.result_code !== 0) {
      reject(data)
    }
    else{
      resolve(data.data)
    }
  }
}



function pending_test( url ) {
  let I = setInterval( () => {
    console.error("request is pending ...", url)
  }, 2000)
  return I
}

function stop_pending( I ) {
  return data => {
    clearInterval(I)
    return data
  }
}
