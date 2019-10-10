import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from './state/actionCreators';

export function Counter(props) {
  const { count, increment, decrement } = props;
  return (
    <div>
      <h2>But first, a nifty counter...</h2>
      <h3>Count: {count}</h3>
      <button className= "counter-button" onClick={increment}>+</button>
      <button className= "counter-button" onClick={decrement}>-</button>
      {
        count > 0 || count < 0
        ? <p>nifty!</p>
        : <p>give it a wee go!</p>
      }
    </div>
  )
}

export default connect(
  // callback that takes state and returns it (mapStateToProps)
  state => state, // we get all slices of state through props (8)
  actionCreators, // we get all action creators through props (9)
)(Counter);