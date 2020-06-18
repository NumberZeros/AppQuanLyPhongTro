import React, {useEffect} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {name} from '../reducers';
import Motel from './Motel';
import * as action from '../actions';
import {Spinner} from 'native-base';
import {View} from 'react-native';
import {isEmpty} from 'lodash';
function Container(props) {
  useEffect(() => {
    const {actions, motels} = props;
    if (isEmpty(motels)) {
      actions.fetchAllMotel();
    }
  });

  const {isLoading} = props;
  if (isLoading) {
    return (
      <View>
        <Spinner color="red" />
      </View>
    );
  }
  return (
    <React.Fragment>
      <Motel {...props} />
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
