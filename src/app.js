import React, { useEffect } from "react";
import Taro, { useDidShow, useDidHide } from "@tarojs/taro";
import "taro-ui/dist/style/index.scss";
import "./app.scss";

function App(props) {
  // 可以使用所有的 React Hooks
  useEffect(() => {
    Taro.getSystemInfo({
      success: res => {
        const {
          safeArea: { bottom },
          screenHeight
        } = res;
        Taro.setStorageSync("safeBottom", screenHeight - bottom);
      }
    });
  });

  // 对应 onShow
  useDidShow(() => {});

  // 对应 onHide
  useDidHide(() => {});

  return props.children;
}

export default App;
