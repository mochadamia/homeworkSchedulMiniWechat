// pages/getAssignment/getAssignment.js
Page({

  /**
   * Page initial data
   */
  data: {

  },
  getAssignment: function (event) {
    var that = this;
    //console.log(event.currentTarget);
    //console.log(event.currentTarget.id);
    var id = event.currentTarget.id;
    wx.navigateTo({
      url: '/pages/getAssignment/getAssignment?id=' + id,
    })
  },
  
  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    
    var _this = this
    var class_id = options.class_id;
    wx.request({
      url: 'http://127.0.0.1:8000/api/assignments?class_id=' + class_id,//json数据地址
      headers: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        //console.log(res.data)
        _this.setData({
          assignments: res.data,
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