import React, {useEffect} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {name} from '../reducers';
import * as action from '../actions';
import Customers from './Customers.js';
import {isEmpty} from 'lodash';

function Container(props) {
  const {customers, contacts, motels, actions} = props;
  useEffect(() => {
    if (isEmpty(customers)) {
      actions.fetchAllCustomers();
    }
    if (isEmpty(contacts)) {
      actions.fetchAllContacts();
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
      <Customers {...props} />
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
