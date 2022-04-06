import React from "react";
import { useTabItemTap, useDidShow } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import { AtNavBar, AtList, AtListItem  } from "taro-ui";
import "./about.scss";

definePageConfig({
  navigationBarTitleText: "平台简介"
});

function Index() {
  useTabItemTap(item => {
    console.log(item.index);
    console.log(item.pagePath);
    console.log(item.text);
  });
  useDidShow(() => {
    console.log("componentDidShow");
  });
  const handleClick = () => {
    console.log("back");
  };
  return (
    <View className="about">
      <AtNavBar
        onClickLeftIcon={handleClick}
        title="关于平台"
        leftIconType="chevron-left"
        color="black"
      />
      <AtList>
        <AtListItem title="特别声明" arrow="right" className="item" />
        <AtListItem title="用户协议" arrow="right" className="item" />
        <AtListItem title="隐私协议" arrow="right" className="item" />
      </AtList>
      <View className="about-content">
        <Text className="content-title">沄府信息中心简介</Text>
        <Text className="content">xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</Text>
      </View>
    </View>
  );
}
export default Index;
