import React from "react";
import { View, Text, Image } from "@tarojs/components";
import { AtAvatar } from "taro-ui";
import Tag from "../../../components/Tag";
import styles from './index.module.scss'
import './index.scss'

const Content = props => {
  const pics = [
    "https://cdn.xinyueche.com/rc-upload-1649210879064-3",
    "https://cdn.xinyueche.com/rc-upload-1649210879064-3",
    "https://cdn.xinyueche.com/rc-upload-1649210879064-3",
    "https://cdn.xinyueche.com/rc-upload-1649210879064-3",
    "https://cdn.xinyueche.com/rc-upload-1649210879064-3",
  ]
  return (
    <View className={styles.content}>
      <View className={styles.title}>
        <Tag color="#FF6600" size="large">
          招聘
        </Tag>
        <Tag color="#2295FF" size="large">
          推广
        </Tag>
        <Text>小区停车车售租说明!</Text>
      </View>
      <View className={styles.tips}>
        <Tag>包住</Tag>
        <Tag>男女不限</Tag>
        <Tag>随时上班</Tag>
      </View>
      <View className={pics.length > 1 ? 'multi_wrap' : 'sigle_wrap'}>
        <Text className="detail">省油神车，10年8月日产骊威，1.6自动档，车况品，代步好车，价格便宜，有需要的随时联系本人，车况非常好，可以试驾，证件齐全，可以带朋友过来看车
支持带...</Text>
        <View className={pics.length > 1 ? 'multi': 'sigle'}>
          {
            pics.slice(0,4).map((item, index) => {
              if (index === 3) {
                return <View key={index} className={`${styles.pic_item} multi-mask`}>
                  <Text className="number">+{pics.length}</Text>
                  <Image src={item} className={`${styles.pic_item}`} />
                </View>
              }
              return <Image key={index} src={item} className={styles.pic_item} />
            })
          }
        </View>
      </View>
      <View className={styles.publish}>
        <View className={styles.left}>
          <AtAvatar size="small" circle text="头" className={styles.avatar} />
          <Text className={styles.nickname}>天成小王子</Text>
          <Text className={styles.publish_at}>12月13日 23:22</Text>
        </View>
        <View className={styles.left}>
          <View className={`${styles.icon} at-icon at-icon-eye`}></View>
          <Text className={styles.view_number}>5692</Text>
        </View>
      </View>
    </View>
  );
};
export default Content;
