import React, {PureComponent} from 'react';
import {Button, View, Text} from 'react-native';

export default class HomeScreen extends PureComponent {
  render() {
    const {navigation} = this.props;
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('About')}
        />
      </View>
    );
  }
}
