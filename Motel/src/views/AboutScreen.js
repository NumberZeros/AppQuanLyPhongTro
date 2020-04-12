import React, {PureComponent} from 'react';
import {Button, View, Text} from 'react-native';

export default class DetailsScreen extends PureComponent {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Details Screen</Text>
      </View>
    );
  }
}
