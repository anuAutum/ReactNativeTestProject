/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput
} from 'react-native';

export default class FlexDirectionBasics extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
  }
  render() {
    return <View style={{ flex: 1 }}>
        <TextInput style={{ backgroundColor: "powderblue" }} placeholder="Type here to translate!" onChangeText={text => this.setState(
              { text }
            )}>
          {" "}
          ABC ABC{" "}
        </TextInput>
        <Text style={{ backgroundColor: "steelblue" }}>
          {" "}
          {this.state.text.split(" ").map((word) => word && "🍕").join(" ")}
        </Text>
        <View style={{ flex: 1, backgroundColor: "powderblue" }} />
        <View style={{ flex: 2, backgroundColor: "skyblue" }} />
        <View style={{ flex: 3, backgroundColor: "steelblue" }} />
      </View>;
  }
};
//{this.state.text.split(' ').map((word) => word && '🍕').join(' ')}