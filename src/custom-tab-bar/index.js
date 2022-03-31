import React from "react";
import { View } from "@tarojs/components";
import './index.scss'
import Taro from "@tarojs/taro";

const index = () => {
  const list = [
    {
      text: '平台首页',
      pagePath: '/pages/index/index',
      iconPath: '../../images/home-1.png',
      selectedIconPath: '../../images/home-2.png'
    },
    {
      text: '平台简介',
      pagePath: '/pages/about/about',
      iconPath: '../../images/about-1.png',
      selectedIconPath: '../../images/about-2.png'
    },
    {
      text: '发布信息',
      pagePath: '/pages/publish/publish',
      iconPath: '../../images/publish-1.png',
      selectedIconPath: '../../images/publish-2.png'
    },
    {
      text: '附近信息',
      pagePath: '/pages/near/near',
      iconPath: '../../images/near-1.png',
      selectedIconPath: '../../images/near-2.png'
    },
    {
      text: '个人中心',
      pagePath: '/pages/personal/personal',
      iconPath: '../../images/personal-1.png',
      selectedIconPath: '../../images/personal-2.png'
    },
  ]
  const handleClick = (e) => {
    const data = e.currentTarget.dataset
    const url = data.path
    Taro.switchTab({ url })
  }
  return (
    <View className="tabbar-wrap">
      {
        list.map(item => {
          return <View data-path={item.pagePath} key={item.pagePath} onClick={handleClick}>
          </View>
        })
      }
    </View>
  );
};
export default index;
