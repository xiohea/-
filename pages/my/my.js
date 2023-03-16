// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    avatar:[
      {
        img:'../../images/3.jpg',
        phoneNum:'189****2014',
        btn1:'**次发布',
        btn2:'**次被赞'
      }
    ],
    member:[
      {
        huiyuan:'普通会员',
        date:'有效期至2021/01/30',
        text:'还差1~2单即可升级'
      }
    ],
    moeny:[
      {
        id:1,
        num:'0',
        text:'优惠券',
        text1:'下单立减'
      },
      {
        id:2,
        num:'0',
        text:'加速/抢票',
        text1:'抢票提速'
      },
      {
        id:3,
        num:'10万',
        text:'借现金',
        text1:'最高可得'
      },
      {
        id:4,
        num:'5万',
        text:'拿去花',
        text1:'最高可借'
      },
    ],
  },
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad:function (options) {
    // console.log('options',options);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})