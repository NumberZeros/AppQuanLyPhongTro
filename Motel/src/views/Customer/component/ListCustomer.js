/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView, FlatList, TouchableWithoutFeedback} from 'react-native';
import {Container, ListItem, Text, Button} from 'native-base';
import Swipeout from 'react-native-swipeout';
import * as API from '../../../apis/customer';
export default function ListItems(props) {
  const {customers, navigation} = props;

  const Item = ({item, index}) => {
    const setting = {
      autoClose: true,
      right: [
        {
          onPress: () => navigation.push('controlCustomer', {data: item}),
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
          <ListItem>
            <Text>{item.name} </Text>
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
          onPress={() => navigation.push('controlCustomer')}>
          <Text>Thêm Khách hàng</Text>
        </Button>
        <FlatList
          data={customers}
          renderItem={({item, index}) => {
            return <Item item={item} index={index} />;
          }}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    </Container>
  );
}
