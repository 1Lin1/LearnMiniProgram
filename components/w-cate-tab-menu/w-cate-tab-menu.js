// components/w-cate-tab-menu/w-cate-tab-menu.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    categories:{
      type:Array,
      value:[]
    },
   
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex:0,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    itemClick(events){
      const dataset = events.currentTarget.dataset;
      this.setData({
        currentIndex : dataset.index,
      })
      this.triggerEvent('menuItemClick',{index:dataset.index})
    }
  }
})
