/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { View, StyleSheet } from 'react-native';
import Counter from '../components/Counter';
import MyButton from '../components/MyButton';

import * as counterActions from '../actions/counterActions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Decrement extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  onPressed() {
    const { actions } = this.props;

    actions.delayed_decrement_w_promise()
    .then(() => {
      Actions.increment();
    });
  }

  render() {
    const { state, actions } = this.props;

    return (
      <View style={styles.container}>
        <Counter count={state.count} />

        <MyButton text="Switch mode" onPress={() => {Actions.increment()}}/>
        <MyButton text="-1" onPress={() => { actions.decrement() }} />
        <MyButton text="-1 (delayed)" onPress={() => { actions.delayed_decrement()}} />
        <MyButton text="-1 (delayed) and switch mode" onPress={() => { this.onPressed() }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 65
  },
});

function mapStateToProps(state) {
  return { state: state.counter };
}
function mapActionsToProps(dispatch) {
  return { actions: bindActionCreators(counterActions, dispatch) }
}
export default connect(mapStateToProps, mapActionsToProps)(Decrement);
