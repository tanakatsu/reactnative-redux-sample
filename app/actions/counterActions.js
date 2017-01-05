import * as types from './actionTypes';

export function increment() {
  return {
    type: types.INCREMENT
  }
}

export function decrement() {
  return {
    type: types.DECREMENT
  }
}

export function delayed_increment() {
  return (dispatch, getState) => {
    setTimeout(() => {
      dispatch({
        type: types.INCREMENT
        }
      );
    }, 3000)
  }
}

export function delayed_decrement() {
  return (dispatch, getState) => {
    setTimeout(() => {
      dispatch({
        type: types.DECREMENT
        }
      )
    }, 3000)
  }
}

export function delayed_increment_w_promise() {
  return (dispatch, getState) => {
    return new Promise(function (resolve, reject) {
      setTimeout(() => {
        dispatch({
          type: types.INCREMENT
          }
        );
        resolve();
      }, 3000);
    });
  }
}

export function delayed_decrement_w_promise() {
  return (dispatch, getState) => {
    return new Promise(function (resolve, reject) {
      setTimeout(() => {
        dispatch({
          type: types.DECREMENT
          }
        );
        resolve();
      }, 3000);
    });
  }
}

