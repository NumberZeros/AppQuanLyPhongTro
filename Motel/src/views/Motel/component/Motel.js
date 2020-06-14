import React from 'react';
import {
  Container,
  Card,
  CardItem,
  Left,
  Right,
  Body,
  Button,
  Text,
} from 'native-base';
import {get} from 'lodash';
export default function CardMotesl(props) {
  const {motels} = props;
  return (
    <Container>
      {motels.map((o, index) => (
        <Card key={index}>
          <CardItem>
            <Left>
              <Text>Tên phòng :</Text>
              <Text>{get(o, 'name', 'Chưa có thông tin')}</Text>
            </Left>
            <Right>
              <Button>
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
    </Container>
  );
}
