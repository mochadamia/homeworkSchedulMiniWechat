// pages/getAssignment/getAssignment.js
Page({

  /**
   * Page initial data
   */
  data: {

  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

    var _this = this
    var id = options.id;
    wx.request({
      url: 'http://127.0.0.1:8000/api/assignments/' + id,
      headers: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        //console.log(res.data)
        //console.log(res.data.imgListData[0].tag)
        _this.setData({
          assignment: res.data[0],
        })
      }
    })
  },
  submitComment: function (e) {
    var feedback = e.detail.value.feedback;
    var assignment_id = e.currentTarget.id;
    var _this = this
    wx.request({
      url: "http://127.0.0.1:8000/api/comments/",
      method: "POST",
      data: {
        content: feedback,
        assignment: assignment_id,
        status: 1,
        user_id: 2
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      success: function (res) {
        //console.log(res.data);
        //console.log(res.data.assignment_id);
        var assignment = res.data.assignment_id;
        wx.showToast({
          title: "Submit Success", 
          success: res => {
            _this.setData({ 
              assignment: assignment,
              form_info: ''
            });
            //console.log(assignment)
            _this.onShow()
          }
        })
      },
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