/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
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
import DatePicker from 'react-native-datepicker';

import {get, isEmpty} from 'lodash';
import * as API from '../../../apis/customer';
export default function CardMotesl(props) {
  const initState = {
    name: String,
    birthDay: '',
    note: String,
  };
  const [input, handleInputChange] = useState(Object);
  const [isEdit, setEdit] = useState(false);
  const handleSave = async () => {
    try {
      let res = {};
      if (isEdit) {
        res = await API.editCustomer(input);
      } else {
        res = await API.createCustomer(input);
      }
      navigation.push('Customer', {newData: res.data});
    } catch (err) {
      console.log('errros', err);
    }
  };
  const {navigation, route} = props;
  const {name, birthDay, note, _id} = route.params.data;
  useEffect(() => {
    if (isEmpty(get(route, 'params.data', ''))) {
      handleInputChange({...initState});
      setEdit(false);
    } else {
      handleInputChange({
        _id,
        name: name,
        // birthDay: JSON.stringify(birthDay),
        note: note,
      });
      setEdit(true);
    }
  }, [props]);
  return (
    <Container>
      <Card>
        <Item floatingLabel style={{margin: 20, padding: 5}}>
          <Label>Tên Khách Hàng</Label>
          <Input
            placeholder="name"
            value={input.name}
            onChangeText={e => handleInputChange({...input, name: e})}
          />
        </Item>
        {isEdit === false && (
          <DatePicker
            style={{width: 400}}
            date={input.birthDay}
            mode="date"
            placeholder="Ngày sinh"
            format="YYYY-MM-DD"
            confirmBtnText="Lưu Lại"
            cancelBtnText="Huỷ"
            customStyles={{
              dateIcon: {
                position: 'absolute',
                left: 0,
                top: 4,
                marginLeft: 0,
              },
              dateInput: {
                marginLeft: 36,
              },
            }}
            onDateChange={e => handleInputChange({...input, birthDay: e})}
          />
        )}
        <Item floatingLabel style={{margin: 20, padding: 5}}>
          <Label>Ghi chú</Label>
          <Input
            placeholder="note"
            value={input.note}
            onChangeText={e => handleInputChange({...input, note: e})}
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
