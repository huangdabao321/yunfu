import React from "react";
import Taro from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import "./index.scss";

const index = () => {
  const navigateTo = () => {
    Taro.navigateTo({
      url: "/pages/about/about"
    });
  };
  return (
    <View>
      <Text>首页</Text>
      <Text onClick={navigateTo}>关于</Text>
    </View>
  );
};
export default index;
