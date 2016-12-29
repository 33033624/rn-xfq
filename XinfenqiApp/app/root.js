/**
* Created by wuran on 16/12/21.
* 页面容器，页面提供导航等页面基础配置
*/
import React, { Component } from 'react';
import { View, StatusBar, StyleSheet } from 'react-native';

import { connect } from 'react-redux';
import { Reducer, Actions, Router, Scene, Modal } from 'react-native-router-flux';

/** 自定义 */
import { backgroundGrey } from './configs/index.js';
import { routerReducerCreate } from './redux/reducers/index.js';
import { LoginView, ModalContainer } from './views/index.js';

class RootView extends Component {

  constructor(props){
    super(props);
    this.state={
      statusBackColor: 'transparent',
    };
  }

  render(){
    let { statusBackColor } = this.state;
    console.log('the ROOT view props -->> ', this.props);
    return(
      <View style={styles.container}>
        <StatusBar
          backgroundColor={statusBackColor} />

        <Router createReducer={routerReducerCreate} getSceneStyle={getSceneStyle}>
          <Scene key="modal" component={Modal}>
            <Scene key="root" >
              <Scene key="login" component={LoginView} getTitle={(navState) => navState.key} />
            </Scene>

            <Scene key="ModalContainer" component={ModalContainer} />
          </Scene>
        </Router>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundGrey,
  }
});

// define this based on the styles/dimensions you use
// 用于路由根据 props，computedProps 来动态改变所需样式
const getSceneStyle = (/* NavigationSceneRendererProps */ props, computedProps) => {
  const style = {
    flex: 1,
    backgroundColor: '#fff',
    shadowColor: null,
    shadowOffset: null,
    shadowOpacity: null,
    shadowRadius: null,
  };
  // if (computedProps.isActive) {
  //   style.marginTop = computedProps.hideNavBar ? 0 : 64;
  //   style.marginBottom = computedProps.hideTabBar ? 0 : 50;
  // }
  return style;
};

module.exports = connect()(RootView)
