import React from 'react';
import {SafeAreaView, FlatList, TouchableWithoutFeedback} from 'react-native';
import {Container, ListItem, Text} from 'native-base';
import Swipeout from 'react-native-swipeout';

export default function ListItems(props) {
  const {customers, navigation} = props;

  const Item = ({item, index}) => {
    const setting = {
      autoClose: true,
      right: [
        {
          onPress: () => navigation.push('controlCustomer', {data: item}),
          text: 'Sửa',
          type: 'delete',
        },
      ],
      left: [
        {
          onPress: () => navigation.push('controlCustomer'),
          text: 'Thêm khách hàng',
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
