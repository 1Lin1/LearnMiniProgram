// pages/detail/w-detail-bottom-bar/w-detail-bottom-bar.js
var app = getApp();

import {
  addToCartNetWork
} from '../../../utils/post/post'

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    goodspid:{
      type:String,
      value:''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
  
  },

  /**
   * 组件的方法列表
   */
  methods: {
    addToCart(){
  
      console.log(this.properties.goodspid);
      const currentPid = this.properties.goodspid;
      app.globalData.shopCartGoodsPid = currentPid;
      
      addToCartNetWork(currentPid).then(res =>{
        console.log(res);
        wx.switchTab({
          url:"/pages/shopcart/shopcart",
  
        })
      })
      
      
      
     
     
    }
  }
})
