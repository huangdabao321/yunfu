import React from "react";
import { useTabItemTap, useDidShow } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import style from "./about.sass";

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
  return (
    <View>
      <Text>关于</Text>
    </View>
  );
}
export default Index;
