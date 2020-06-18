import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  TouchableWithoutFeedback,
} from 'react-native';
import {
  Container,
  Header,
  Content,
  Button,
  Icon,
  List,
  ListItem,
  Text,
} from 'native-base';
import Swipeout from 'react-native-swipeout';

export default function ListItems(props) {
  const datas = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];

  const Item = ({item, index}) => {
    const setting = {
      autoClose: true,
      onOpen: (secId, rowId, direction) => {},
      onClose: (secId, rowId, direction) => {},
      right: [
        {
          onPress: () => {
              console.log("item", item)
          },
          text: 'Delete',
          type: 'delete',
        },
      ],
      rowId: index,
      sectionId: 1,
    };
    return (
      <Swipeout {...setting}>
        <TouchableWithoutFeedback>
          <ListItem>
            <Text> {item.title} </Text>
          </ListItem>
        </TouchableWithoutFeedback>
      </Swipeout>
    );
  };

  return (
    <Container>
      <SafeAreaView style={{flex: 1, marginTop: 10}}>
        <FlatList
          data={datas}
          renderItem={({item, index}) => {
            return <Item item={item} index={index} />;
          }}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    </Container>
  );
}
