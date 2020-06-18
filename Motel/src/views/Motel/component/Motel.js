import React, {useState} from 'react';
import {
  Container,
  Card,
  CardItem,
  Left,
  Right,
  Body,
  Button,
  Text,
  Input,
  Label,
} from 'native-base';
import {get} from 'lodash';
import {SafeAreaView, ScrollView} from 'react-native';

export default function CardMotesl(props) {
  const {motels, navigation, actions, isLogin} = props;
  const [input, setSearch] = useState({
    search: '',
  });
  if (isLogin) {
    return (
      <Container>
        <Card>
          <CardItem>
            <Input
              placeholder="search"
              value={input.search}
              onChangeText={e => setSearch({...input, search: e})}
            />
            <Button
              onPress={() => {
                actions.clear();
                navigation.push('CreateMotel');
              }}>
              <Text>thêm phòng</Text>
            </Button>
          </CardItem>
        </Card>
        <SafeAreaView>
          <ScrollView>
            {motels.map((o, index) => (
              <Card key={index}>
                <CardItem>
                  <Left>
                    <Text>Tên phòng :</Text>
                    <Text>{get(o, 'name', 'Chưa có thông tin')}</Text>
                  </Left>
                  <Right>
                    <Button
                      onPress={() => {
                        actions.clear();
                        navigation.push('CreateMotel', {data: o});
                      }}>
                      <Text>Sửa</Text>
                    </Button>
                  </Right>
                </CardItem>
                <CardItem header bordered>
                  <Text>Giá tiền:</Text>
                  <Text>{get(o, 'prices', 'Chưa có thông tin')}</Text>
                </CardItem>
                <CardItem header bordered>
                  <Text>Số nước hiện hành:</Text>
                  <Text>{get(o, 'initWater', 'Chưa có thông tin')}</Text>
                </CardItem>
                <CardItem header bordered>
                  <Text>Số điện hiện hành:</Text>
                  <Text>{get(o, 'initPower', 'Chưa có thông tin')}</Text>
                </CardItem>
                {o.notes && (
                  <CardItem bordered>
                    <Body>
                      <Text>{get(o, 'notes', 'Chưa có thông tin')}</Text>
                    </Body>
                  </CardItem>
                )}
              </Card>
            ))}
          </ScrollView>
        </SafeAreaView>
      </Container>
    );
  } else {
    return (
      <Container>
        <Card>
          <CardItem>
            <Label>Vui lòng đăng nhập để có thể thực hiện chức năng này</Label>
          </CardItem>
          <CardItem style={{justifyContent: 'center'}}>
            <Button onPress={() => navigation.navigate('Login')}>
              <Text>Đăng nhập</Text>
            </Button>
          </CardItem>
        </Card>
      </Container>
    );
  }
}
