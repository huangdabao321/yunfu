import React from "react"
import { View } from '@tarojs/components'
import './index.scss'

const Tag = (props) => {
  const { color, size = 'default', circle = false } = props
  const styleObj = {
    color: color ? color : '#817F99',
    backgroundColor: color ? '#fff' : '#F1F1F7',
    border: `1px solid ${color ? color : '#F1F1F7'}`,
    borderRadius: circle ? '50%' : '4px'
  }
  return(<View className={`tag-wrapper ${size}`} style={{ ...styleObj }}>{props.children}</View>)

}
export default Tag