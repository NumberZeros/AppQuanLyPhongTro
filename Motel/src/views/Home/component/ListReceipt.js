/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView, FlatList, TouchableWithoutFeedback} from 'react-native';
import {Container, ListItem, Text, Button, View} from 'native-base';
import Swipeout from 'react-native-swipeout';
import * as API from '../../../apis/home';
import {get} from 'lodash';
export default function ListItems(props) {
  const {receipt, navigation, motels, actions} = props;

  const Item = ({item, index}) => {
    const setting = {
      autoClose: true,
      right: [
        {
          onPress: () =>
            navigation.push('ControlReceipt', {data: item, motels}),
          text: 'Sửa',
          type: 'primary',
        },
      ],
      left: [
        {
          onPress: async () => {
            try {
              let res = {};
              res = await API.editReceipt({...item, status: true});
              actions.fetchAllReceipt();
            } catch (err) {
              console.log('errros', err);
            }
          },
          text: 'Thanh Toán',
          type: 'delete',
        },
      ],
    };
    return (
      <Swipeout {...setting}>
        <TouchableWithoutFeedback>
          <ListItem
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
            }}>
            <View style={{margin: 2}}>
              <Text>{get(item, 'name', 'Chưa có thông tin')} </Text>
            </View>
            <View style={{margin: 2}}>
              <Text>
                {' '}
                Số tiền thanh toán: {get(
                  item,
                  'prices',
                  'Chưa có thông tin',
                )}{' '}
              </Text>
            </View>
            <View style={{margin: 2}}>
              <Text>
                {' '}
                Trạng thái thanh toán:{' '}
                {item.status === true
                  ? 'Đã thanh toán '
                  : 'Chưa thanh toán'}{' '}
              </Text>
            </View>
          </ListItem>
        </TouchableWithoutFeedback>
      </Swipeout>
    );
  };

  return (
    <Container>
      <SafeAreaView style={{flex: 1, marginTop: 10}}>
        <Button
          style={{display: 'flex', justifyContent: 'center', marginBottom: 10}}
          onPress={() => navigation.push('ControlReceipt', {data: {}, motels})}>
          <Text>Thêm Phiếu Thu</Text>
        </Button>
        <FlatList
          data={receipt}
          renderItem={({item, index}) => {
            return <Item item={item} index={index} />;
          }}
          keyExtractor={item => item.id}
          onEndThreshold={0}
          onEndReached={() => actions.fetchAllReceipt()}
        />
      </SafeAreaView>
    </Container>
  );
}
