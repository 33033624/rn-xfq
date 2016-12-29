/**
* Created by wuran on 16/12/28.
* 登录页面
*/

import React, { Component } from 'react'
import { View, Text, StyleSheet, Platform } from "react-native";

import { connect } from 'react-redux';
import { Actions } from "react-native-router-flux";

import { backgroundGrey } from '../configs/index.js';

import Test from './Test.js';


class LoginView extends Component {

  constructor(props){
    super(props);
  }

  render(){
    return(
      <View style={styles.container}>
        <Text style={{color: 'black'}} onPress={() => { Actions.ModalContainer({modalView: Test, fillModal: false}) }}>Login</Text>
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
