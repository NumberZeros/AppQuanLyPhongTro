/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect, Fragment} from 'react';
import {
  Container,
  Card,
  CardItem,
  Input,
  Item,
  Label,
  Button,
  Text,
} from 'native-base';

import {get, isEmpty} from 'lodash';
import * as API from '../../../apis/home';
export default function CardMotesl(props) {
  let initState = {
    name: String,
    quantityPower: Number,
    quantityWater: Number,
    prices: Number,
    pricesOther: Number,
  };
  const [input, handleInputChange] = useState(Object);
  const [isEdit, setEdit] = useState(false);
  const handleSave = async () => {
    try {
      let res = {};
      if (isEdit) {
        res = await API.editPayment(input);
      } else {
        res = await API.createPayment(input);
      }
      navigation.push('Home', {newData: res.data});
    } catch (err) {
      console.log('errros', err);
    }
  };
  const {navigation, route} = props;
  useEffect(() => {
    const {
      name,
      quantityPower,
      quantityWater,
      prices,
      pricesOther,
      _id,
    } = route.params.data;
    if (isEmpty(get(route, 'params.data', ''))) {
      handleInputChange({...initState});
      setEdit(false);
    } else {
      handleInputChange({
        _id,
        name,
        quantityPower: JSON.stringify(quantityPower),
        quantityWater: JSON.stringify(quantityWater),
        prices: JSON.stringify(prices),
        pricesOther: JSON.stringify(pricesOther),
      });
      setEdit(true);
    }
  }, [props]);

  return (
    <Container>
      <Card>
        <Item floatingLabel style={{margin: 20, padding: 5}}>
          <Label>Tên phiếu chi</Label>
          <Input
            placeholder="name"
            value={input.name}
            onChangeText={e => handleInputChange({...input, name: e})}
          />
        </Item>
        <Item floatingLabel style={{margin: 20, padding: 5}}>
          <Label>Số điện hiện tại</Label>
          <Input
            keyboardType="number-pad"
            placeholder="Số điện hiện tại"
            value={input.quantityPower}
            onChangeText={e => handleInputChange({...input, quantityPower: e})}
          />
        </Item>
        <Item floatingLabel style={{margin: 20, padding: 5}}>
          <Label>Số nước hiện tại</Label>
          <Input
            keyboardType="number-pad"
            placeholder="Số nước hiện tại"
            value={input.quantityWater}
            onChangeText={e => handleInputChange({...input, quantityWater: e})}
          />
        </Item>
        <Item floatingLabel style={{margin: 20, padding: 5}}>
          <Label>Phí thu</Label>
          <Input
            keyboardType="number-pad"
            placeholder="Phí thu"
            value={input.prices}
            onChangeText={e => handleInputChange({...input, prices: e})}
          />
        </Item>
        <Item floatingLabel style={{margin: 20, padding: 5}}>
          <Label>Phí khác</Label>
          <Input
            placeholder="Phí khác"
            value={input.pricesOther}
            onChangeText={e => handleInputChange({...input, pricesOther: e})}
          />
        </Item>
        <CardItem style={{display: 'flex', justifyContent: 'space-around'}}>
          <Button rounded primary onPress={() => handleSave()}>
            <Text>Lưu lại</Text>
          </Button>
          <Button rounded primary onPress={() => navigation.goBack()}>
            <Text>Quay Lại</Text>
          </Button>
        </CardItem>
      </Card>
    </Container>
  );
}
