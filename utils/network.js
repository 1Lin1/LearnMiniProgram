const baseURL = 'http://localhost:3000'

export default function request(options){
  return new Promise((resolve,reject) => {
    wx.request({
      url: '' || baseURL + options.url,
      data: {} || options.data,
      method: 'get' || options.method,
      header:options.header,
      success: resolve,
      fali: reject,

    })
  })

}