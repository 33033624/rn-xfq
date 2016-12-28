/**
 * Created by wuran on 16/12/22.
 * 自定义标题栏，根据不同的页面返回不同的title样式
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  View,
  StyleSheet,
  Image,
  Text,
  Linking,
  Alert,
  TouchableOpacity,
  Platform,
  InteractionManager
} from 'react-native'

import { TitleBar } from '../basic/index.js'

const SERVICE_PHONE = '400-967-7727' // 客服电话

class XinTitleBar extends Component {
  constructor(){
    super();
  }

  render(){}

  /** Create View */
  _renderView(name){
    switch (name) {
      case 'home':

        break;
      default:

    }
  }
}
