/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  NativeModules//导入安卓原生模块
} from 'react-native';

import SecondActivity from './secondActivity';

var myNativeExampleModule= NativeModules.MyNativeExampleModule;//react使用android原生模块
class TextInputDemo extends React.Component{
  state = {
    inputText: ""
  }
  getContent = (text) => {
    this.setState({
      inputText: text
    });
  }
  clickBtn = () => {
      myNativeExampleModule.jumpActivity()
  }
  render(){
    return (
      <View style={styles.container}  >
        <TouchableOpacity style={styles.btn} onPress={this.clickBtn}>
          <Text style={styles.jump} >点击跳转</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
//创建样式
var styles = StyleSheet.create({
  container: {
    marginTop: 100,
    justifyContent: "center",
  },
  flex: {
    flex :1
  },
  btn: {
    marginLeft: 5,
    marginRight: 5,
    backgroundColor: "#23BEFF",
    height: 45,
    justifyContent: "center",
    alignItems: "center",
  },
  jump: {
    color: "#FFF",
    fontSize: 15,
    // fontWidth: "bold"
  }
});
AppRegistry.registerComponent('TextInputDemo', () => TextInputDemo);
AppRegistry.registerComponent('SecondActivity', () => SecondActivity);
