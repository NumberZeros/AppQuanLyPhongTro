import React from 'react';
import {SafeAreaView, FlatList, TouchableWithoutFeedback} from 'react-native';
import {Container, ListItem, Text} from 'native-base';
import Swipeout from 'react-native-swipeout';

export default function ListItems(props) {
  const {contacts, navigation, customers, motels} = props;

  const Item = ({item, index}) => {
    const setting = {
      autoClose: true,
      right: [
        {
          onPress: () => navigation.push('controlContact', {data: item, customers, motels}),
          text: 'Sửa',
          type: 'delete',
        },
      ],
      left: [
        {
          onPress: () => navigation.push('controlContact',{customers, motels}),
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
          data={contacts}
          renderItem={({item, index}) => {
            return <Item item={item} index={index} />;
          }}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    </Container>
  );
}
