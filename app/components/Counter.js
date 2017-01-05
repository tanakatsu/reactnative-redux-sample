/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default class Counter extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.props.count}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingBottom: 10
  },
  text: {
    textAlign: 'center',
    fontSize: 48
  }
});
