import React, { useState } from "react";
import Taro from "@tarojs/taro";
import { View, Text, Image } from "@tarojs/components";
import "./index.scss";

const index = () => {
  const [selected, setIndex] = useState(0);
  const list = [
    {
      text: "平台首页",
      pagePath: "/pages/index/index",
      iconPath: require("../images/home-1.png"),
      selectedIconPath: require("../images/home-2.png")
    },
    {
      text: "平台简介",
      pagePath: "/pages/about/about",
      iconPath: require("../images/about-1.png"),
      selectedIconPath: require("../images/about-2.png")
    },
    {
      text: "发布信息",
      pagePath: "/pages/publish/publish",
      iconPath: require("../images/publish-1.png"),
      selectedIconPath: require("../images/publish-2.png")
    },
    {
      text: "附近信息",
      pagePath: "/pages/near/near",
      iconPath: require("../images/near-1.png"),
      selectedIconPath: require("../images/near-2.png")
    },
    {
      text: "个人中心",
      pagePath: "/pages/personal/personal",
      iconPath: require("../images/personal-1.png"),
      selectedIconPath: require("../images/personal-2.png")
    }
  ];
  const handleClick = e => {
    const data = e.currentTarget.dataset;
    const { path, index } = data;
    Taro.switchTab({ url: path });
    setIndex(index)
  };
  const safeBottom = Taro.getStorageSync("safeBottom");
  return (
    <View
      className="tabbar-wrap"
      style={{ marginBottom: safeBottom ? `${safeBottom}rpx` : 0 }}
    >
      {list.map((item, index) => {
        return (
          <View
            data-path={item.pagePath}
            data-index={index}
            key={item.pagePath}
            onClick={handleClick}
            className="tabbar-item"
          >
            <Image
              className="icon"
              src={
                selected === index
                  ? `${item.selectedIconPath}`
                  : `${item.iconPath}`
              }
            />
            <Text className={selected === index ? "selected" : ""}>
              {item.text}
            </Text>
          </View>
        );
      })}
    </View>
  );
};
export default index;
