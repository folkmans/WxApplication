// pages/index-detail/order-complete/order-complete.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var that = this;
    wx.getStorage({
      key: "keyaaa",
      success: function (res) {
        that.setData({
          // meta: res.data.meta,
          shop: res.data.shop,
          cost: res.data.cost,
          // sumMon: res.data.sumMon,
          orderDetail: res.data.detail,
        })
      },

    });
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  ontapjump: function() {
    wx.switchTab({
      url:'/pages/index/index',
    })
  },
  ontapdingdan: function () {
    wx.reLaunch({
      url: '/pages/dingdan/dingdan',
    })
  },
})