import React from "react"
import { View } from '@tarojs/components'

const Tag = (props) => {
  const { color, text, size = 'default' } = props
  return(<View className={`tag-wrapper ${size === 'default' ? 'normal' : size }`} style={{ color }}>{text}</View>)

}
export default Tag