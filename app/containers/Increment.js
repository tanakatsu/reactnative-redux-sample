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

class Increment extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  onPressed() {
    const { actions } = this.props;

    actions.delayed_increment_w_promise()
    .then(() => {
      Actions.decrement();
    });
  }

  render() {
    const { state, actions } = this.props;

    return (
      <View style={styles.container}>
        <Counter count={state.count} />

        <MyButton text="Switch mode" onPress={() => { Actions.decrement() }} />
        <MyButton text='+1' onPress={() => { actions.increment() }} />
        <MyButton text="+1 (delayed)" onPress={() => { actions.delayed_increment() }} />
        <MyButton text="+1 (delayed) and switch mode" onPress={this.onPressed.bind(this)} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 65
  }
});

function mapStateToProps(state) {
  return { state: state.counter };
}
function mapActionsToProps(dispatch) {
  return { actions: bindActionCreators(counterActions, dispatch) }
}
export default connect(mapStateToProps, mapActionsToProps)(Increment);
