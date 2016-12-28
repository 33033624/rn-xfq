/**
* Created by wuran on 16/12/21.
* 页面容器，页面提供导航等页面基础配置
*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { lightGrey } from './configs/index.js'
import {
  View,
  StatusBar,
  StyleSheet
} from 'react-native';

import {
  Reducer,
  Router,
  Actions,
  Scene,
  Modal
} from 'react-native-router-flux';
const reducerCreate = params => {
   const defaultReducer = new Reducer(params);
   return (state, action) => {
     console.log('ACTION:', action);
     return defaultReducer(state, action);
   };
 };

 // define this based on the styles/dimensions you use
 const getSceneStyle = (/* NavigationSceneRendererProps */ props, computedProps) => {
   const style = {
     flex: 1,
     backgroundColor: '#fff',
     shadowColor: null,
     shadowOffset: null,
     shadowOpacity: null,
     shadowRadius: null,
   };
   if (computedProps.isActive) {
     style.marginTop = computedProps.hideNavBar ? 0 : 64;
     style.marginBottom = computedProps.hideTabBar ? 0 : 50;
   }
   return style;
 };

import Error from './Error';
import EchoView from './EchoView';

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
        <Router createReducer={reducerCreate} getSceneStyle={getSceneStyle}>
          <Scene key="modal" component={Modal}>
            <Scene key="root" >
              <Scene key="echo" clone component={EchoView} getTitle={(navState) => navState.key} />
            </Scene>
            <Scene key="error" component={Error} />
          </Scene>
        </Router>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: lightGrey,
  }
});

// const fields = ['test1', 'test2'];
// const validte = (assert, fields) => {
//   assert('test1', ValidateMethods.required(), 'test1!!!!');
//   assert('test2', ValidateMethods.required(), 'test2!!!!')
// }

// module.exports = RootView;
module.exports = connect()(RootView)
