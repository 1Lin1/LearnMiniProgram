// pages/detail/w-model-show/w-model-show.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    centerImage:{
      type:Array,
      value:[]
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
    modelImageLoad(){
      if(!this.data.isImageLoad){
        this.data.isImageLoad = true;
        this.triggerEvent('modelShowImageLoad')
  
      }
    }
  }
})
