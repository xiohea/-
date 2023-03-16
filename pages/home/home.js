// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    imgList:[
      {img:'../../images/10.jpg'},
      {img:'../../images/11.jpg'},
      {img:'../../images/12.jpg'},
    ],
    classLit:[],
    conList:[],
  },

  onLoad() {
    wx.request({

    }),
    wx.request({
      url: 'https://www.escook.cn/categories',
      method:"GET",
      success:(res)=>{
        console.log(res);
        this.setData({
          classList:res.data
        })
      }
    }),
    wx.request({
      url: 'https://www.escook.cn/categories/'+ this.data.id + '/shops',
      method:"GET",
      success:(res)=>{
        console.log(res);
        this.setData({
          conList:res.data
        })
      }
    })
  },
  
})
