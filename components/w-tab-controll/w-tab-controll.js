// components/w-tab-controll/w-tab-controll.js
Component({
  /**
   * 组件的属性列表
   */ 
  properties: {
    titles:{
      type:Array,
      value:''
    }
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
    itemClick(event){
      const dataset = event.target.dataset;
      // console.log(dataset);
      this.setData({
        currentIndex:dataset.index,
      });

      this.triggerEvent('tabControll',{item:dataset.item,index:dataset.index})

    }
  }
})
