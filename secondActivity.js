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
  NativeModules
} from 'react-native';
var myNativeExampleModule= NativeModules.MyNativeExampleModule;
export default class SecondActivity extends React.Component{
  state = {
    inputText: ""
  }
  getContent = (text) => {
    this.setState({
      inputText: text
    });
  }
  clickBtn = () => {
      myNativeExampleModule.testToast(this.state.inputText)
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.flex}>
          <TextInput style={
            styles.input}
            returnKeytype="search"
            placeholder="请输入内容"
            onChangeText={this.getContent}
            />
        </View>
        <TouchableOpacity style={styles.btn} onPress={this.clickBtn}>
          <Text style={styles.search} >搜索</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
var styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 45,
    marginTop: 25
  },
  flex: {
    flex :1
  },
  input: {
    height: 45,
    borderWidth: 1,
    marginLeft: 5,
    paddingLeft: 5,
    borderColor: "#CCC",
    borderRadius: 4
  },
  btn: {
    width: 55,
    marginLeft: 5,
    marginRight: 5,
    backgroundColor: "#23BEFF",
    height: 45,
    justifyContent: "center",
    alignItems: "center",
  },
  search: {
    color: "#FFF",
    fontSize: 15,
    // fontWidth: "bold"
  }
});
