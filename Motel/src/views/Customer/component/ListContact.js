/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView, FlatList, TouchableWithoutFeedback} from 'react-native';
import {Container, ListItem, Text, View, Button} from 'native-base';
import Swipeout from 'react-native-swipeout';
import {get} from 'lodash';
import moment from 'moment';
import * as API from '../../../apis/customer';

export default function ListItems(props) {
  const {contacts, navigation, customers, motels, actions} = props;

  const Item = ({item, index}) => {
    const setting = {
      autoClose: true,
      right: [
        {
          onPress: () =>
            navigation.push('controlContact', {data: item, customers, motels}),
          text: 'Sửa',
          type: 'primary',
        },
      ],
      left: [
        {
          onPress: async () => {
            try {
              let res = {};
              res = await API.deleteContacts(item);
              await actions.fetchAllContacts();
              console.log(res);
            } catch (err) {
              console.log('errros', err);
            }
          },
          text: 'Xoá',
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
            <View>
              <Text>{get(item, 'name', 'Chưa có thông tin')} </Text>
            </View>
            <View>
              {item.updateAt ? (
                <Text>
                  Cập nhật ngày: {moment(item.updateAt).format('DD/MM/YYYY')}{' '}
                </Text>
              ) : (
                <Text>Chưa từng cập nhật</Text>
              )}
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
          onPress={() =>
            navigation.push('controlContact', {customers, motels})
          }>
          <Text>Thêm Hợp Đồng</Text>
        </Button>
        <FlatList
          data={contacts}
          renderItem={({item, index}) => {
            return <Item item={item} index={index} />;
          }}
          keyExtractor={item => item.id}
          onEndThreshold={0}
          onEndReached={() => actions.fetchAllContacts()}
        />
      </SafeAreaView>
    </Container>
  );
}
