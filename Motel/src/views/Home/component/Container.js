import React, {useEffect} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {name} from '../reducers';
import * as action from '../actions';
import Home from './Home.js';
import {isEmpty} from 'lodash';

function Container(props) {
  const {payment, receipt, motels, actions} = props;
  useEffect(() => {
    if (isEmpty(payment)) {
      actions.fetchAllPayment();
    }
    if (isEmpty(receipt)) {
      actions.fetchAllReceipt();
    }
    if (isEmpty(motels)) {
      actions.fetchAllMotels();
    }
  });
  const {isLoading} = props;
  if (isLoading) {
    return <div className="loading" />;
  }
  return (
    <React.Fragment>
      <Home {...props} />
    </React.Fragment>
  );
}

function mapStateToProps(state) {
  return {
    ...state[name],
    isLogin: state.Login.isLogin,
  };
}
function mapDispatchToProps(dispatch) {
  const actions = {
    ...action,
  };
  return {actions: bindActionCreators(actions, dispatch)};
}
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Container);
