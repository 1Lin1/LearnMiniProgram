// components/w-mygood/w-mygood.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        item: Object,
    },

    /**
     * 组件的初始数据
     */
    data: {
        item: '',
    },

    /**
     * 组件的方法列表
     */
    methods: {
      jumpToDetail(event){
        const dataset = event.currentTarget.dataset;
        const pid = dataset.pid;
        console.log(pid);
        wx.navigateTo({
          url: '/pages/detail/detail?pid=' + pid,
        })
      }
    }
})