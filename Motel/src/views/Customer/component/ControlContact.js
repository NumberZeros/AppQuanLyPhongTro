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
import ImgToBase64 from 'react-native-image-base64';
import ImagePicker from 'react-native-image-picker';
import {firebasesApp} from "../../../services/configFireBase"

import {get, isEmpty} from 'lodash';
import * as API from '../../../apis/motel';
import { hanldeInputChange } from '../../Motel/actions';
export default function CardMotesl(props) {
  const initState = {
    name: '',
    linkFile: '',
    note: '',
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
      handleInputChange({...route.params.data});
      setEdit(true);
    }
  }, [props]);

  const handleImage= () =>{
    const options = {
      title: 'Select Avatar',
      customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        console.log("image": response.uri)
        // UploadImage(response.uri)
      }
    });
  }

  const UploadImage = (uri) =>{
    ImgToBase64.getBase64String(uri)
  .then( async(base64String) => {
    // const file = doSomethingWith(base64String);
    // console.log(JSON.stringify(base64String))
    const image = await firebasesApp.storage().ref().put(base64String.data);
    })
  .catch(err => console.log(err));
  }
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
          <Button rounded primary onPress={() => handleImage()}>
            <Text>Upload Image</Text>
          </Button>
        </CardItem>
      </Card>
    </Container>
  );
}
