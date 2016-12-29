/**
* Created by wuran on 16/12/28.
* 为modal窗口提供动画效果的容器
*/
import React, { Component } from 'react';
import { View, Text, StyleSheet, Animated, BackAndroid } from "react-native";

import { Actions } from "react-native-router-flux";

import { W, H } from '../../configs/index.js'
import { LoginView } from '../index.js';
import Test from '../Test.js';

export class ModalContainer extends Component {
    constructor(props){
      super (props);
      console.log('ModalView props -> ', props);

      this.state = {
          ModalView: props.modalView,
          fillModal: props.fillModal,
          offset: new Animated.Value(H)
      };
    }

    componentDidMount() {
      BackAndroid.addEventListener('hardwareBackPress', this._invalidBackAndroid);
        /** 动画效果参数,this.state.offset: 起始值，duration: 动画执行时间；toValue: 结束值 */
        /** {transform: [{translateY: this.state.offset}]}: translateY: 定义显示的页面的在Y轴起始偏移值*/
        Animated.timing(this.state.offset, {
            duration: 1000,
            toValue: 0
        }).start();
    }

    componentWillUnmount(){
      BackAndroid.removeEventListener('hardwareBackPress', this._invalidBackAndroid);
    }

    _invalidBackAndroid(){
      return true;
    }

    _closeModal() {
        /** start() 中的函数为: 动画执行后要执行的方法 */ 
        Animated.timing(this.state.offset, {
            duration: 1000,
            toValue: H
        }).start(Actions.pop);
    }

    render(){
        let { viewName, ModalView, fillModal } = this.state;
        let s = fillModal? {} : styles.containerCenter;
        return (
            <Animated.View
              style={[styles.container, {transform: [{translateY: this.state.offset}]}]}>
              <View style={[styles.container, s, {backgroundColor:"rgba(100,100,100,0.5)"}]}>
                <ModalView closeModal={this._closeModal.bind(this)}/>
              </View>
            </Animated.View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
      position: "absolute",
      top:0,
      bottom:0,
      left:0,
      right:0
  },
  containerCenter: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});
