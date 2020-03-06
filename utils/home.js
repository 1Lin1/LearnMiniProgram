import request from './network.js'

export function getMulData(){
  return request({
    url:'/data'
  })
}

export function getGoodsList(type){
  return request({
    url: '/goodsList?type='+type,
    method:'get',
  })
}