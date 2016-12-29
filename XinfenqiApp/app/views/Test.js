
import React, { Component } from 'react'
import { View, Text, StyleSheet, Platform } from "react-native";
import { backgroundGrey } from '../configs/index.js';


export default class Test extends Component {
  render(){
    return(
      <View style={{height: 200, width: 200, backgroundColor: 'cornflowerblue', justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{color: 'black'}} onPress={this.props.closeModal}>Close</Text>
      </View>
    );
  }
}
