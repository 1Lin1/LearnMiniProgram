// pages/deatil/detail.js

import {
  getDetailData,
  getAllGoodsList,
  debounce,
  Goods,
} from '../../utils/detail.js'



const TOP_DISTANCE = 1000;

Page({
  
  
  /**
   * 页面的初始数据
   */
  data: {
    isShow: false,
    goods:{},
    detailBanner:[],
    allGoods:[],
    detailTopY:[],
    currentIndex:0,
    // 一个接受函数 一个接受参数
  },
  
  // 监听用户滚动
  onPageScroll(obj){
    
    const  positionY = obj.scrollTop;
    for (let i = 0; i < this.data.detailTopY.length - 1; i++) {
      // 第一个判断条件是让她只执行一遍
      if(this.data.currentIndex != i &&(positionY >= this.data.detailTopY[i]-20 && positionY < this.data.detailTopY[i+1])){
        
        this.setData({
          currentIndex:i,
        })
        
        // 取到子组件的index
        const my_nav_bar= this.selectComponent('#my-detail-nav-bar');
        my_nav_bar.setData({
          currentIndex:this.data.currentIndex,
        })

      }
    }


    const flag = obj.scrollTop > TOP_DISTANCE;
    // 判断是否还处于大于状态 不用频繁调用
    if (flag !== this.data.isShow) {
      this.setData({
        isShow: flag,
      })
    }

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this._getDetailData(options.pid);
    this._getAllGoodsList();
    
    
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
  
  },
  
  // --------网络请求相关函数---------
  
  _getDetailData(pid){
    getDetailData(pid).then(res => {
      // 类封装 拿到对应的数据
      const goods = new Goods(res.data[0]);
      console.log(goods);
      this.setData({
        goods:goods,
      })
      
      // 轮播图数据
      const topImage = res.data[0].topImage;
      this.setData({
        detailBanner:topImage,
      })
    })
  },
  _getAllGoodsList(){
    getAllGoodsList().then(res => {
      this.setData({
        allGoods:res.data,
      })
    })
  },
  
  // ---------关于其他请求函数
  modelShowImageLoad(){


    wx.createSelectorQuery().select('#model-show').boundingClientRect(rect => {
      const oldDetailTopY = this.data.detailTopY ;
      oldDetailTopY.push(0);
      oldDetailTopY.push(rect.top-30);
      this.setData({
        detailTopY:oldDetailTopY,
      })


    }).exec();
    wx.createSelectorQuery().select('#detail-params').boundingClientRect(rect => {
      const oldDetailTopY2 = this.data.detailTopY;
      oldDetailTopY2.push(rect.top);
      this.setData({
        detailTopY:oldDetailTopY2,
      })


    }).exec();
    wx.createSelectorQuery().select('#detailRecommend').boundingClientRect(rect => {
      const oldDetailTopY3 = this.data.detailTopY;
      oldDetailTopY3.push(rect.top);
      // 加入一个最大值 来判断
      oldDetailTopY3.push(Number.MAX_SAFE_INTEGER);
      this.setData({
        detailTopY:oldDetailTopY3,
      })

    }).exec();
  },
  
  // 监听navbar点击传来的事件
  handleDetailClick(event){
    const trigIndex = event.detail.trigIndex;
    
      wx.pageScrollTo({
        scrollTop: this.data.detailTopY[trigIndex],
        duration:200
      })
    
   
      
    
  },
  

})