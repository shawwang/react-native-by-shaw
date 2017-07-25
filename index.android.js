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
var codePush = require('react-native-code-push');
var myNativeExampleModule= NativeModules.MyNativeExampleModule;//react使用android原生模块
class TextInputDemo extends React.Component{
  componentDidMount(){
    // AppState.addEventListener("change", (newState) => {
    // newState === "active" && codePush.sync();
    // });
    codePush.sync({
      updateDialog: {
       appendReleaseDescription: true,
       descriptionPrefix:'\n跟新内容：\n',
       title:'更新',
       mandatoryUpdateMessage:'',
       mandatoryContinueButtonLabel:'更新',
     },
     mandatoryInstallMode:codePush.InstallMode.IMMEDIATE
    });
  }
  state = {
    inputText: ""
  }
  getContent = (text) => {
    this.setState({
      inputText: text
    });
  }
  clickBtn = () => {
      myNativeExampleModule.jumpToThirdActivity()
  }
  render(){
    return (
      <View style={styles.container}  >
        <TouchableOpacity style={styles.btn} onPress={this.clickBtn}>
          <Text style={styles.jump} >热更新完成，点击跳转</Text>
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
