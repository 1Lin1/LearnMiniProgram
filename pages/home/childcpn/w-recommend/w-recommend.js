// pages/home/childcpn/w-recommend/w-recommend.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    recommend:{
      type:Array,
      value:'',
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isImageLoad:false,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleBackTop(){
      if(!this.data.isImageLoad){
        this.data.isImageLoad = true;
        this.triggerEvent('imageLoadSuccess')
      }
    }
   
  }
})
