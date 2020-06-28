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
import * as API from '../../../apis/motel';
import {hanldeInputChange} from '../actions';
export default function CardMotesl(props) {
  const initState = {
    name: '',
    initPower: '',
    initWater: '',
    prices: '',
    notes: '',
  };
  const [input, handleInputChange] = useState(Object);
  const [isEdit, setEdit] = useState(false);
  const handleSave = async () => {
    try {
      let res = {};
      if (isEdit) {
        res = await API.edit(input);
      } else {
        res = await API.createMotel(input);
      }
      navigation.push('Motel', {newData: res.data});
    } catch (err) {
      console.log('errros', err);
    }
  };
  const {navigation, route} = props;
  useEffect(() => {
    const {name, initPower, initWater, prices, notes, _id} = route.params.data;
    if (isEmpty(get(route, 'params.data', ''))) {
      handleInputChange({...initState});
      setEdit(false);
    } else {
      handleInputChange({
        _id,
        name,
        initPower: JSON.stringify(initPower),
        initWater: JSON.stringify(initWater),
        prices: JSON.stringify(prices),
        notes,
      });
      setEdit(true);
    }
  }, [props]);
  return (
    <Container>
      <Card>
        <Item floatingLabel style={{margin: 20, padding: 5}}>
          <Label>Tên Phòng</Label>
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
            placeholder="initPower"
            value={input.initPower}
            onChangeText={e => handleInputChange({...input, initPower: e})}
          />
        </Item>
        <Item floatingLabel style={{margin: 20, padding: 5}}>
          <Label>Số nước hiện tại</Label>
          <Input
            keyboardType="number-pad"
            placeholder="initWater"
            value={input.initWater}
            onChangeText={e => handleInputChange({...input, initWater: e})}
          />
        </Item>
        <Item floatingLabel style={{margin: 20, padding: 5}}>
          <Label>Giá Phòng</Label>
          <Input
            keyboardType="number-pad"
            placeholder="prices"
            value={input.prices}
            onChangeText={e => handleInputChange({...input, prices: e})}
          />
        </Item>
        <Item floatingLabel style={{margin: 20, padding: 5}}>
          <Label>Ghi chú</Label>
          <Input
            placeholder="notes"
            value={input.notes}
            onChangeText={e => handleInputChange({...input, notes: e})}
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
