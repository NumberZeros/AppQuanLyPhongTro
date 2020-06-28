/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView, FlatList, TouchableWithoutFeedback} from 'react-native';
import {Container, ListItem, Text, Button, View} from 'native-base';
import Swipeout from 'react-native-swipeout';
import * as API from '../../../apis/home';
import {get} from 'lodash';
export default function ListItems(props) {
  const {payment, navigation} = props;

  const Item = ({item, index}) => {
    const setting = {
      autoClose: true,
      right: [
        {
          onPress: () => navigation.push('controlPayment', {data: item}),
          text: 'Sửa',
          type: 'primary',
        },
      ],
      left: [
        {
          onPress: async () => {
            try {
              let res = {};
              res = await API.deleteCusomter(item);
              console.log(res);
            } catch (err) {
              console.log('errros', err);
            }
          },
          text: 'Xoá',
          type: 'primary',
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
            <View>
              <Text>{get(item, 'name', 'Chưa có thông tin')} </Text>
            </View>
            <View>
              <Text>
                {' '}
                Số tiền thanh toán: {get(
                  item,
                  'prices',
                  'Chưa có thông tin',
                )}{' '}
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
          onPress={() => navigation.push('controlPayment', {data: {}})}>
          <Text>Thêm Phieu Chi</Text>
        </Button>
        <FlatList
          data={payment}
          renderItem={({item, index}) => {
            return <Item item={item} index={index} />;
          }}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    </Container>
  );
}
