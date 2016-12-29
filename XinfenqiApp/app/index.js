/**
* Created by wuran on 16/12/15.
* 程序入口，为整个应用提供基础层配置
*/
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { View, StyleSheet, AppState } from 'react-native';

import { configureStore, getStore } from './redux/store/storeConfigure.js';
import { ProgressView } from './components/custom/index.js';
import RootView from './root.js';


export default class XinfenqiApp extends Component {

  constructor(props){
    super(props);
    this.state = {
      store: null
    };
  }

  componentDidMount() {
    AppState.addEventListener('change', this._handleAppStateChange);
    // redux 的store配置完成后再刷新页面
    configureStore( () => {
      const store = getStore();
      const state = store.getState();
      this.setState({store})
    })
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this._handleAppStateChange);
  }

  _handleAppStateChange(currentAppState) {

  }

  render() {
    const {store} = this.state;
    if (!store) return this._renderView('progressView');
    return this._renderView();
  }

  /*
   * create view
   */
  _renderView(name){
    switch (name) {
      case 'progressView':
        return(
          <View style={styles.container}>
            <ProgressView />
          </View>
        );
      default:
        return(
          <Provider store={store}>
            <RootView />
          </Provider>
        );
    }
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
