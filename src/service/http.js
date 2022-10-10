import axios from 'axios';
import { message } from 'antd';
import moment from 'moment';

const SYSTEM_SHORT_NAME="cmes"
axios.defaults.withCredentials = true;
export const getURLPrefix = () => {
  const url = new URL(window.location);

  if (url.hostname === 'localhost') {
    //return `http://lab.doublechaintech.com/philipgreat/model/`
    //return `http://${url.hostname}:8080/${SYSTEM_SHORT_NAME}/`
    //return `https://demo2.doublechaintech.com/${SYSTEM_SHORT_NAME}/`

    return `https://cms.ggas.com/${SYSTEM_SHORT_NAME}/`

  }

  return `${url.origin}/${SYSTEM_SHORT_NAME}/`;
  //return `${url.origin}/${SYSTEM_SHORT_NAME}/`
};

export const removeEndSlash=({url})=>{

  if(url.endsWith("/")&&url.length>1){
    return url.substring(0,url.length-1)
  }
  return url


}

export const getFinalURL=({url})=>{

  //if http prefix specfied then go
  if(url.startsWith("http") || url.startsWith("https") ){
    return url;
  }


  return getURLPrefix()+url;

}



export const staticResource = ({ url, msg = '接口异常', headers }) =>
  axios
    .get(url, headers)
    .then(function(res) {
      console.log('http headers', res.headers);
      const clazz = res.headers['x-class'];
      if (clazz) {
        if (clazz.indexOf('CommonError') > 0 || clazz.indexOf('Exception') > 0) {
          message.error('后台系统出错，请检查错误消息' + res.data);
        }
      }
      return res.data;
    })
    .catch(err => {
      console.log(err);
      message.warn(`${msg}\n: ${url}`);
    });


export const get = ({ url, msg = '接口异常', headers }) =>
    axios
      .get(getFinalURL({url}), headers)
      .then(function(res) {
        console.log('http headers', res.headers);
        const clazz = res.headers['x-class'];
        if (clazz) {
          if (clazz.indexOf('CommonError') > 0 || clazz.indexOf('Exception') > 0) {
            message.error('后台系统出错，请检查错误消息' + res.data);
          }
        }
        return res.data;
      })
      .catch(err => {
        console.log(err);
        message.warn(`${msg}\n: ${url}`);
      });






export const joinParameters = (parameters) => {
    const obj = parameters // {value1: 'prop1', value2: 'prop2', value3: 'prop3'}
    const arr = []
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            arr.push(`${key}=${encodeURIComponent(obj[key])}`)
        }
    }
    const result = arr.join(';')
    return result
}
export const formatValue=(value)=>{

  return formatPostData(value)

}
const formatPostData = (value) => {
    console.log("value", value)

    if (typeof value == 'undefined'){
      return null
    }
    if(value==null){
      return null
    }

    if(value._isAMomentObject){
        return moment(value).format('YYYY-MM-DDTHH:mm:ss');
    }


    return value
}
export const joinPostParameters = (parameters) => {
    const obj = parameters // {value1: 'prop1', value2: 'prop2', value3: 'prop3'}
    console.log("joinPostParameters",parameters)
    const arr = []
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const value = obj[key]

            const postValue = formatPostData(value)
            if(value==null){
              continue
            }
            if (!Array.isArray(value)) {
                arr.push(key + '=' + encodeURIComponent(postValue))
                continue
            }
            for (const subKey in value) {
                const subvalue = value[subKey]
                arr.push(key + '=' + encodeURIComponent(subvalue))
            }
        }
    }

  const result = arr.join('&');
  return result;
}


/**
 * 公用post请求
 * @param url       接口地址
 * @param data      接口参数
 * @param msg       接口异常提示
 * @param headers   接口所需header配置
 */



export const postForm = ({ url, requestParameters, msg = '接口异常'})=>{


  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const checkIfHasChineseChars=(message)=>{

  for (var i = 0; i < message.length; i++) {
    if(message.charCodeAt(i)>255){
      return true;
    }
    //console.log(">>" + message.charAt(i))

   }
   return false
}

export const put = ({ url,data, msg = '接口异常', headers }) =>
    axios
      .put(getFinalURL({url}), data, headers)
      .then(function(res) {
        console.log('http headers', res.headers);
        const clazz = res.headers['x-class'];
        if (clazz) {

          if(clazz.indexOf('CommonError') > 0){

            console.log('后台系统出错，请检查错误消息' , res.data)
            message.error('后台系统出错，请检查错误消息' + JSON.stringify(res.data));
            return res.data
          }

          if ( clazz.indexOf('Exception') > 0) {
            if(!checkIfHasChineseChars(res.data.message)){
              message.error('后台系统出错，请联系管理员');
              return res.data
            }
            message.error('用户输入错误,请检查,消息: '+ res.data.message);
            return res.data

          }



        }
        return res.data;
      })
      .catch(err => {
        console.log(err);
        message.warn(err);
      });




export const post = ({ url, data, msg = '接口异常', headers }) =>
  axios
    .post(getFinalURL({url}), data, headers)
    .then(res => res.data)
    .catch(err => {
      console.log(err);
      message.warn(msg);
    });

//提交表单的时候，把相关的值写到上传的form里面去


export function playSound(sound){
  var audio = new Audio(sound+'.mp3');
  audio.play();
}


export const assignFormValue=(formdata,fieldName,value)=>{

  if(value===null){
    delete formdata[fieldName]
    return
  }
  if(value===""){
    delete formdata[fieldName]
    return
  }
  formdata[fieldName] = value

}

const dateRangeValueOf=(value)=>{

  if(!value){
    return [-Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER]
  }

  if(Array.isArray(value)&&value.length===2){

    return [moment(value[0]).valueOf(),moment(value[1]).valueOf()]


  }
  return [0,0]
}

const wrapValue=(value)=>{



  if(!value){
    return null
  }
  if(!value._isAMomentObject){
    return value;

  }
  console.log("wrapping value", value)

  return value.valueOf();


}
const wrapValues=(value)=>{


  if(value===null){

    return value
  }

  if(Array.isArray(value)){
    const valueArray = [];
    value.forEach(element=>{
      valueArray.push(wrapValue(element))
    })

    return valueArray;
  }

  return  wrapValue(value)

}
export const fixObjectValue=(objectData)=>{


  for (const [key, value] of Object.entries(objectData)) {
    assignObjectValue(objectData,key,value)
  }

}

export const assignObjectValue=(objectData,fieldName,value)=>{

  if(value===null){
    delete objectData[fieldName]
    return
  }

  if(Array.isArray(value)){
    const valueArray = [];
    value.forEach(element=>{
      valueArray.push(wrapValue(element))
    })
    objectData[fieldName] = valueArray
    return;
  }

  objectData[fieldName] =  wrapValue(value)


}
