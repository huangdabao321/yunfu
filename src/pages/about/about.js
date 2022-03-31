import React from "react";
import { View, Text } from "@tarojs/components";
import style from "./about.sass";

definePageConfig({
  navigationBarTitleText: '平台简介'
})

function Index() {
  return <View><Text>关于</Text></View>;
};
export default Index;
