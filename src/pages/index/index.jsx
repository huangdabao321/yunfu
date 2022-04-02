import React, { useState } from "react";
import Taro from "@tarojs/taro";
import { View, Text, Swiper, SwiperItem, Image } from "@tarojs/components";
import { AtAvatar, AtTabs, AtTabsPane, AtTag } from "taro-ui";
import "./index.scss";

const index = () => {
  const [current, setCurrent] = useState(0);
  const handleTabsChange = index => {
    setCurrent(index);
  };
  return (
    <View>
      <View className="search-wrap">
        <View className="title">
          <Text>沄府信息中心</Text>
        </View>
        <View>
          <Text>阴 2-13°C 冬月初三</Text>
          <View className="at-icon at-icon-search"></View>
        </View>
      </View>
      <Swiper
        className="swiper-wrap"
        indicatorColor="#999"
        indicatorActiveColor="#333"
        circular
        indicatorDots
        autoplay
      >
        <SwiperItem>
          <View className="swiper-item">1</View>
        </SwiperItem>
        <SwiperItem>
          <View className="swiper-item">2</View>
        </SwiperItem>
        <SwiperItem>
          <View className="swiper-item">3</View>
        </SwiperItem>
      </Swiper>
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
      <AtTabs
        animated={false}
        current={current}
        tabList={[{ title: "默认" }, { title: "附近" }, { title: "最新" }]}
        onClick={handleTabsChange}
        className="tab-wrap"
      >
        <AtTabsPane current={current} index={0}>
          <View className="content">
            <View className="title">
              <AtTag size="small">招聘</AtTag>
              <AtTag size="small">推广</AtTag>
              <Text>小区停车车售租说明!</Text>
            </View>
            <View className="tip-tag">
              <AtTag>包住</AtTag>
              <AtTag>男女不限</AtTag>
              <AtTag>随时上班</AtTag>
            </View>
            <View className="msg">
              <Text>
                关于某某小区停车位售出与出租的说明， 请各位业务和租户知晓！
              </Text>
              <Image />
            </View>
            <View className="publisher">
              <AtAvatar size="small" circle text="头"/>
              <Text>天成小王子</Text>
              <Text>12月13日 23:22</Text>
              <View className='at-icon at-icon-eye'></View>
            </View>
          </View>
        </AtTabsPane>
        <AtTabsPane current={current} index={1}>
          <View style="padding: 100px 50px;background-color: #FAFBFC;text-align: center;">
            标签页二的内容
          </View>
        </AtTabsPane>
        <AtTabsPane current={current} index={2}>
          <View style="padding: 100px 50px;background-color: #FAFBFC;text-align: center;">
            标签页三的内容
          </View>
        </AtTabsPane>
      </AtTabs>
    </View>
  );
};
export default index;
