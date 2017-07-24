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

import SecondActivity from './secondActivity';

var BGNativeExampleModule= NativeModules.BGNativeExampleModule;
var TextInputDemo = React.createClass({
  getInitialState: function(){
    return{
      inputText: ""
    };
  },
  getContent: function(text){
    this.setState({
      inputText: text
    });
  },
  clickBtn: function(){
      BGNativeExampleModule.jumpActivity()
  },
  render: function(){
    return (
      <View style={styles.container}  >
        <TouchableOpacity style={styles.btn} onPress={this.clickBtn}>
          <Text style={styles.jump} >点击跳转</Text>
        </TouchableOpacity>
      </View>
    );
  }
});

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
