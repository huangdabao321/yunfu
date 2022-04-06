import React from "react";
import { View, Image, Text } from "@tarojs/components";
import { AtNavBar  } from "taro-ui";
// import Publish from '../../components/Publish'
// import './index.scss'

definePageConfig({
  navigationBarTitleText: "发布信息"
});

const publish = () => {
  const handleClick = () => {

  }
  return (
    <View>
      <AtNavBar
        onClickLeftIcon={handleClick}
        title="请选择发布信息类型"
        leftIconType="chevron-left"
        color="black"
      />
      {/* <Publish /> */}
      <View className="category-wrap">
        <View className="category-item">
          <View className="icon-wrap item1">
            <Image src={require("../../images/hr.png")} className="icon" />
          </View>
          <Text>招聘求职</Text>
        </View>
        <View className="category-item">
          <View className="icon-wrap item2">
            <Image src={require("../../images/house.png")} className="icon" />
          </View>
          <Text>房屋租售</Text>
        </View>
        <View className="category-item">
          <View className="icon-wrap item3">
            <Image src={require("../../images/cart.png")} className="icon" />
          </View>
          <Text>二手市场</Text>
        </View>
        <View className="category-item">
          <View className="icon-wrap item4">
            <Image src={require("../../images/service.png")} className="icon" />
          </View>
          <Text>生活服务</Text>
        </View>
      </View>
    </View>
  );
};
export default publish;
