/**
* Created by wuran on 16/12/28.
* 登录页面
*/

import React, { Component } from 'react'
import { View, Text, StyleSheet, Platform } from "react-native";

import { connect } from 'react-redux';
import { Actions } from "react-native-router-flux";

import { backgroundGrey } from '../configs/index.js';
import { XButton } from '../components/index.js'

import Test from './Test.js';


class LoginView extends Component {

  constructor(props){
    super(props);
    this.state = {
      loading: false
    }

    this._onPress = this._onPress.bind(this);
  }

  _onPress(){
    this.setState({loading: true});
    // Actions.ModalContainer({modalView: Test, fillModal: false});
    setTimeout(() => {
      this.setState({loading: false})
    }, 2000);
  }

  render(){
    let { loading } = this.state;

    return(
      <View style={styles.container}>
        <XButton title='登录' loading={loading} onPress={this._onPress}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundGrey,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

module.exports = connect()(LoginView)
