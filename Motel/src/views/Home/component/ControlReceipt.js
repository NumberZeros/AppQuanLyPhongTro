/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
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
import {View} from 'react-native';

import Select from 'react-native-picker-select';

import {get, isEmpty, find} from 'lodash';
import * as API from '../../../apis/home';
import {filter} from  "lodash"
export default function CardMotesl(props) {
  let initState = {
    name: String,
    quantityPower: Number,
    quantityWater: Number,
    prices: Number,
    pricesOther: Number,
    motel: Number,
  };
  const [input, handleInputChange] = useState(Object);
  const [isEdit, setEdit] = useState(false);
  const [motels, setMotelsOption] = useState(Array);
  const handleSave = async () => {
    try {
      let res = {};
      if (isEdit) {
        res = await API.editReceipt(input);
      } else {
        res = await API.createReceipt(input);
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
      motel,
      _id,
    } = route.params.data;
    setMotelsOption(route.params.motels);
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
        motel: JSON.stringify(motel),
      });
      setEdit(true);
    }
  }, [props]);

  const motelsOption = filter(
    motels.map(o => ({
      label: o.name,
      value: o._id,
    })),
    e => isEmpty(e.label) !== true,
  );

  return (
    <Container>
      <Card>
        <Item floatingLabel style={{margin: 20, padding: 5}}>
          <Label>Tên phiếu thu</Label>
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
        <View floatingLabel style={{margin: 20, padding: 5}}>
          <Label>Chọn Phòng</Label>
          <Select
            onValueChange={e => handleInputChange({...input, motel: e})}
            items={motelsOption}
          />
        </View>
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
