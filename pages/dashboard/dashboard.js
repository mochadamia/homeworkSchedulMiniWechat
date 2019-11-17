// pages/dashboard.js
Page({

  /**
   * Page initial data
   */
  data: {
  },

  getAssignments: function (event) {
    var that = this;
    //console.log(event.currentTarget);
    //console.log(event.currentTarget.id);
    var id = event.currentTarget.id;
    wx.navigateTo({
      url: '/pages/getAssignments/getAssignments?class_id=' + id,
    })
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

    var _this = this
    wx.request({
      url: 'http://127.0.0.1:8000/api/classes/',//json数据地址
      headers: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        console.log(res.data)
        //console.log(res.data.imgListData[0].tag)
        _this.setData({
          className: res.data,
        })
      }
    })
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})