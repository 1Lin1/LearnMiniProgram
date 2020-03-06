import request from './network.js'

// 若函数重复执行 调用此函数 只执行一次
export function debounce(func, delay){
  let timer = null;
  
  return function(...args){
    if(timer) clearTimeout(timer);
    
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay)
  }
}

export function getDetailData(pid) {
  return request({
    url: '/details?pid=' + pid,
  })
}

export function getAllGoodsList(){
  return request({
    url: '/goodsList',
  })
}

// 类封装思想 获取想要的数据 不用的数据不用获取
export class Goods{
  constructor(itemInfo){
    this.pid = itemInfo.pid;
    this.title = itemInfo.title;
    this.newPrice = itemInfo.newPrice;
    this.oldPrice = itemInfo.oldPrice;
    this.descmessage = itemInfo.descmessage;
    this.cfav = itemInfo.cfav;
    this.saleMan = itemInfo.saleMan;
    this.company = itemInfo.company;
    this.saleManPhone = itemInfo.saleManPhone;
    this.shopName = itemInfo.shopName;
    this.topImage = itemInfo.topImage[0];
    this.centerImage = itemInfo.centerImage;
  }
}

