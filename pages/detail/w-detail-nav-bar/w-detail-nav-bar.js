// pages/detail/w-detail-nav-bar/w-detail-nav-bar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
  
  },

  /**
   * 组件的初始数据
   */
  data: {
    titles: ['商品','详情','评价','推荐'],
    currentIndex:0,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    resetIndex(i){
      this.setData({
        currentIndex:i,
      })
  
      console.log('我是resetIndex'+this.data.currentIndex);
    },
    
    
    itemClick(event){
      const dataset = event.currentTarget.dataset;
      this.setData({
        currentIndex:dataset.index,
      })
  
  
      const trigIndex = dataset.index;
      //
      this.triggerEvent('detailClick',{trigIndex:trigIndex})
    }
  }
})
