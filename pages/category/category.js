// pages/category/category.js

import {
  getCategory
} from '../../utils/category'

Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    categories:[
      {name:'唯品会',path:'/category/weipinhui'},
      {name:'男装',path:'/category/nanzhuang'},
      {name:'女装',path:'/category/nvzhuang'},
      {name:'男鞋',path:'/category/nanxie'},
    
      {name:'女鞋',path:'/category/nvxie'},
      {name:'手机数码',path:'/category/phone'},
      {name:'电脑办公',path:'/category/computer'},
      {name:'家用电器',path:'/category/powerhome'},
    
      {name:'食品生鲜',path:'/category/food'},
      {name:'酒水饮料',path:'/category/drink'},
      {name:'母婴童装',path:'/category/baby'},
      {name:'医药保障',path:'/category/medicine'},
    
      {name:'运动户外',path:'/category/sport'},
      {name:'礼品鲜花',path:'/category/flower'},
      {name:'家居建材',path:'/category/jiaju'},
  
     
    ],
    currentTab:0,
    Goods:{},
    swiperScrollIndex:'',
  },
  
  //网络请求相关-----------------------
  _getCategory(){
    getCategory().then(res => {
      console.log(res)
      this.setData({
        Goods:res,
      })
    })
  },
  
  
  
  //页面相关事件------------------------
  menuItemClick(event){
    const currentIndex = event.detail.index;
    this.setData({
      currentTab:currentIndex,
    })
    
    
  },
  
  swiperChange(e){
    const currentSwiperIndex = e.detail.current;
    this.setData({
      currentTab:currentSwiperIndex,
    });
  
    this.selectComponent('#w-cate-tab-menu').setData({
      currentIndex:currentSwiperIndex,
    })
  },
  
/**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  this._getCategory();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})