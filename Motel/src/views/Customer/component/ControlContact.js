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
import {Image} from 'react-native';
// import ImgToBase64 from 'react-native-image-base64';
import ImagePicker from 'react-native-image-picker';
import Select from 'react-native-picker-select';
import {View} from 'react-native';
import {get, isEmpty, filter} from 'lodash';
import * as API from '../../../apis/customer';
export default function CardMotesl(props) {
  const initState = {
    name: '',
    linkFile: '',
    motelId: '',
    customerId: '',
  };
  const [input, handleInputChange] = useState(Object);
  const [customers, setCustomers] = useState(Array);
  const [motels, setSetMotels] = useState(Array);
  const [isEdit, setEdit] = useState(false);
  const handleSave = async () => {
    try {
      let res = {};
      if (isEdit) {
        res = await API.editContacts(input);
      } else {
        res = await API.createContacts(input);
      }
      console.log('success', res.data);
    } catch (err) {
      console.log('errros', err);
    }
  };
  const {navigation, route} = props;
  useEffect(() => {
    if (isEmpty(get(route, 'params.data', ''))) {
      handleInputChange({...initState});
      setEdit(false);
    } else {
      handleInputChange({...route.params.data, updateAt: new Date()});
      setEdit(true);
    }
    setCustomers(route.params.customers);
    setSetMotels(route.params.motels);
  }, [props]);

  const motelsOption = filter(
    motels.map(o => ({
      label: o.name,
      value: o._id,
    })),
    e => isEmpty(e.label) !== true,
  );
  // .filter(e => isEmpty(e.label) !== true);
  const customersOption = filter(
    customers.map(o => ({
      label: o.name,
      value: o._id,
    })),
    e => isEmpty(e.label) !== true,
  );
  // .filter(e => isEmpty(e.label) !== true);

  const handleImage = () => {
    const options = {
      title: 'Select Avatar',
      customButtons: [{name: 'fb', title: 'Choose Photo from Facebook'}],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, response => {
      console.log('Response = ', response);
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        handleInputChange({...input, linkFile: response.uri});
        // UploadImage(response.uri)
      }
    });
  };

  //upload file len firebase
  // const UploadImage = (uri) =>{
  //   ImgToBase64.getBase64String(uri)
  // .then( async(base64String) => {
  //   const image = await firebasesApp.storage().ref().put(base64String.data);
  //   })
  // .catch(err => console.log(err));
  // }
  return (
    <Container>
      <Card>
        {input.linkFile !== '' && (
          <Image
            source={{uri: input.linkFile}}
            style={{height: 200, flex: 1}}
          />
        )}
        <Item floatingLabel style={{margin: 20, padding: 5, marginLeft: 5}}>
          <Label>Tên tìm kiếm cho Hợp Đồng</Label>
          <Input
            placeholder="name"
            value={input.name}
            onChangeText={e => handleInputChange({...input, name: e})}
          />
        </Item>
        <View style={{margin: 20, padding: 5}}>
          <Label>Chọn Phòng</Label>
          <Select
            // value={get(
            //   find(motelsOption, o => o.value === input.motelId),
            //   'label',
            //   '',
            // )}
            onValueChange={e => handleInputChange({...input, motelId: e})}
            items={motelsOption}
          />
        </View>
        <View style={{margin: 20, padding: 5}}>
          <Label>Chọn Khach Hàng</Label>
          <Select
            // value={get(
            //   find(customersOption, o => o.value === input.motelId),
            //   'label',
            //   '',
            // )}
            onValueChange={e => handleInputChange({...input, customerId: e})}
            items={customersOption}
          />
        </View>
        <CardItem style={{display: 'flex', justifyContent: 'space-around'}}>
          <Button rounded primary onPress={() => handleSave()}>
            <Text>Lưu lại</Text>
          </Button>
          <Button rounded primary onPress={() => navigation.goBack()}>
            <Text>Quay Lại</Text>
          </Button>
          <Button rounded primary onPress={() => handleImage()}>
            <Text>Upload Image</Text>
          </Button>
        </CardItem>
      </Card>
    </Container>
  );
}
