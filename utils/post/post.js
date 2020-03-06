
export function addToCartNetWork(pid){
  return new Promise((resolve,reject) =>{
    wx.request({
      url : "http://localhost:3000/shopCart",
      method: "post",
      data: {
        userId:10001,
        pid:pid
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      success:resolve('add success'),
      fail:reject,
    })
  })
}
