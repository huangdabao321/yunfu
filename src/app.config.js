export default {
  pages: [
    "pages/index/index",
    "pages/about/about",
    "pages/publish/publish",
    "pages/near/near",
    "pages/personal/personal"
  ],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#2295FF",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "white"
  },
  tabBar: {
    // custom: true,
    color: "#999999",
    selectedColor: "#2295ff",
    backgroundColor: "#ffffff",
    borderStyle: "white",
    list: [
      {
        text: "平台首页",
        pagePath: "pages/index/index",
        iconPath: "images/home-1.png",
        selectedIconPath: "images/home-2.png"
      },
      {
        text: "平台简介",
        pagePath: "pages/about/about",
        iconPath: "images/about-1.png",
        selectedIconPath: "images/about-2.png"
      },
      {
        text: "发布信息",
        pagePath: "pages/publish/publish",
        iconPath: "images/publish-1.png",
        selectedIconPath: "images/publish-2.png"
      },
      {
        text: "附近信息",
        pagePath: "pages/near/near",
        iconPath: "images/near-1.png",
        selectedIconPath: "images/near-2.png"
      },
      {
        text: "个人中心",
        pagePath: "pages/personal/personal",
        iconPath: "images/personal-1.png",
        selectedIconPath: "images/personal-2.png"
      }
    ]
  }
};
