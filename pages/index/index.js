//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    FirstName: "银汉科技",
    SecondName: "时空召唤大本营",
    smallImglist:[
      "http://i4.bvimg.com/616656/3c6543ac7c12099ft.jpg",
      "http://i4.bvimg.com/616656/8704ac20a1ffe7d5t.jpg",
      "http://i4.bvimg.com/616656/adb54a56f40310c9t.jpg",
      "http://i4.bvimg.com/616656/6fb28a787bb3dfcbt.jpg",
      "http://i4.bvimg.com/616656/94a13452657a0b46t.jpg",
      "http://i4.bvimg.com/616656/56d98d60ac95bf6et.jpg",
      "http://i4.bvimg.com/616656/9592592e1e3e3146t.jpg",
      "http://i4.bvimg.com/616656/69f9857b31fd7d15t.jpg",
      "http://i4.bvimg.com/616656/1f96d89c59680a70t.jpg",
      "http://i4.bvimg.com/616656/b925b538eb8faf8bt.jpg",
      "http://i4.bvimg.com/616656/9a7b1dded954bbb1t.jpg",
    ],
    largeImglist: [
      "http://i4.bvimg.com/616656/3c6543ac7c12099fs.png",
      "http://i4.bvimg.com/616656/8704ac20a1ffe7d5s.png",
      "http://i4.bvimg.com/616656/adb54a56f40310c9s.jpg",
      "http://i4.bvimg.com/616656/94a13452657a0b46s.jpg",
      "http://i4.bvimg.com/616656/56d98d60ac95bf6es.jpg",
      "http://i4.bvimg.com/616656/9592592e1e3e3146s.jpg",
      "http://i4.bvimg.com/616656/69f9857b31fd7d15s.jpg",
      "http://i4.bvimg.com/616656/1f96d89c59680a70s.jpg",
      "http://i4.bvimg.com/616656/b925b538eb8faf8bs.png",
      "http://i4.bvimg.com/616656/9a7b1dded954bbb1s.jpg",
    ],
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../map/map'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  openLocation: function () {

    wx.getLocation({
      type: 'gcj02', //返回可以用于wx.openLocation的经纬度
      success: function (res) {
        var latitude = res.latitude
        var longitude = res.longitude
        wx.openLocation({
          latitude: latitude,
          longitude: longitude,
          scale: 28,
          name: "科技Moba",
          address: "时空召唤"
        })
      }
    })
  },

  callPhone:function(){
    wx.makePhoneCall({
      phoneNumber: '13418004905', //此号码并非真实电话号码，仅用于测试
      success: function () {
        console.log("拨打电话成功！")
      },
      fail: function () {
        console.log("拨打电话失败！")
      }
    })
  },

   showImg: function (event) {
    var src = event.currentTarget.dataset.src;//获取data-src
    var imgList = this.data.largeImglist;//获取data-list
    //图片预览
    wx.previewImage({
      current: src, // 当前显示图片的http链接11
      urls: imgList // 需要预览的图片http链接列表
    })
  }

})
