/**
 * Created by wuran on 16/12/22.
 * 基础标题栏，定义了左边view，标题文字，右边view的基础样式
 */
import React, { Component } from 'react'
import {
 View,
 StyleSheet,
 Text,
 Platform
} from 'react-native'

import { getResponsiveSize, TitleBarHeight } from '../../configs/index.js'

class TitleBar extends Component {
 constructor(props){
   super(props);
 }

 render () {
   const {left, title, right} = this.props
   return (
     <View style={styles.container}>
       <View style={styles.leftIcon}>
         {left}
       </View>
       <View style={ [styles.textContainer, this.props.isFourFont&&styles.TwotextContainer] } >
         <Text style={styles.titleText}>{title}</Text>
       </View>
       <View style={ [styles.rightIcon, this.props.isFourFont&&styles.rightFontIcon]}>
         {right}
       </View>
   </View>
   )
 }
}

const styles = StyleSheet.create({
  container : {
    backgroundColor : "white",
    height : TitleBarHeight,
    paddingTop : Platform.OS === "ios" ? 20 : 0,
    flexDirection : "row" ,
    alignItems:'center',
    borderBottomWidth:1,
    borderBottomColor: 'lightblue'
  },
  leftIcon : {
    backgroundColor : "white",
    width : 50,
    alignItems:'center',
  },
  rightIcon : {
    backgroundColor : "white",
    width : 50,
    alignItems:'center',
  },
  rightFontIcon : {
    backgroundColor : "white",
    width : 85,
    alignItems:'center',
  },
  textContainer : {
    flex : 1,
    alignItems:'center',
  },
  TwotextContainer : {
    flex : 1,
    marginLeft: 35,
    alignItems:'center',
  },
  titleText : {
    fontSize : getResponsiveSize(15),
  }
})

module.exports = TitleBar
