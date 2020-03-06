// pages/home/home.js
import {
  getMulData,
  getGoodsList

} from '../../utils/home.js'

// 设置tabcontrol的类型
const types = ['pop', 'new', 'sell']
const TOP_DISTANCE = 1000;

Page({
 
  
  
  /**
   * 页面的初始数据
   */
  data: {
    topScrollV:0,
    isTabFixed: false,
    isShow: false,
    banner: [],
    recommend: [],
    titles: ['流行', '新款', '精选'],
    currentType: 'pop',
    goods: {
      'pop': {
        page: 0,
        list: []
      },
      'new': {
        page: 0,
        list: []
      },

      'sell': {
        page: 0,
        list: []
      },

    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

    // 1.加载图片数据
    this._getMulData();

    
    // 2.加载goodlist数据
    this._getGoodsList('pop')
    this._getGoodsList('new')
    this._getGoodsList('sell')



  },
  // -----------网络请求相关函数--------------

  // 获取轮播图等数据
  _getMulData() {
    getMulData().then(res => {
      const banner = res.data[0].data.banner.list;
      const recommend = res.data[0].data.recommend.list;
      this.setData({
        banner: banner,
        recommend: recommend,
      })
    })
  },


  // 获取商品数据
  _getGoodsList(type) {
    getGoodsList(type).then(res => {
      // console.log(res);
      // const page = this.data.goods[type].page + 1;
      // 将数据设置到对应的type
      const list = res.data;
      const oldList = this.data.goods[type].list;
      oldList.push(...list);

      // console.log(oldList);
      // es6语法拼接
      const typeKey = `goods.${type}.list`;
      this.setData({
        [typeKey]: oldList,
      })


    })
  },





  // -----------组件内函数相关---------


  tabControll(event) {
    const index = event.detail.index;
    this.setData({
      currentType: types[index],
    })
  },

  imageLoadSuccess() {
    // 图片加载完成查询子组件
    wx.createSelectorQuery().select('#tab-controll').boundingClientRect(rect => {
      // console.log(rect);
      this.setData({
        topScrollV:rect.top,
      })
    }).exec()
  },


  
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    // console.log("home初次渲染完成")
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    // console.log("home页面展示")
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {
    console.log('监听用户下拉')
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    this._getGoodsList(this.data.currentType);
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  //监听用户滚动
  onPageScroll(obj) {
    // console.log(obj)

    // 在全局的scroll监听中 最好不要频繁调用函数

    const flag = obj.scrollTop > TOP_DISTANCE;
    // 判断是否还处于大于状态 不用频繁调用
    if (flag != this.data.isShow) {
      this.setData({
        isShow: flag,
      })
    }

    const flag2 = obj.scrollTop > this.data.topScrollV;
    if(flag2 != this.data.isTabFixed){
      this.setData({
        isTabFixed: flag2,
      })
    }
  },


})