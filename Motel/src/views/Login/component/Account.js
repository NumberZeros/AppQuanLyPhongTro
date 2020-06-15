import React, {useState} from 'react';
import {
  Container,
  Card,
  CardItem,
  Body,
  Button,
  Segment,
  Content,
  Text,
  Form,
  Item,
  Input,
  Label,
} from 'native-base';
import {View} from 'react-native';
import Login from './Login';
import {get} from 'lodash';
export default function SegmentOutsideHeaderExample(props) {
  const [isEdit, setEdit] = useState(false);
  const {data, isLogin, actions} = props;
  return (
    <Container>
      <Segment>
        <Button first active={isLogin}>
          <Text>Thông tin tài khoản</Text>
        </Button>
        <Button active={isLogin ? false : true}>
          <Text>Đăng nhập</Text>
        </Button>
      </Segment>
      {isLogin === false ? (
        <Content padder>
          <Login {...props} />
        </Content>
      ) : (
        <Content padder>
          {isEdit ? (
            <Form>
              <Item fixedLabel>
                <Label>Họ tên</Label>
                <Input
                  value={get(data, 'name', '')}
                  onChangeText={e =>
                    actions.handleInputChange({
                      target: {
                        name: 'name',
                        value: e,
                      },
                    })
                  }
                />
              </Item>
              <Item fixedLabel>
                <Label>Email</Label>
                <Input
                  value={get(data, 'email', '')}
                  onChangeText={e =>
                    actions.handleInputChange({
                      target: {
                        name: 'email',
                        value: e,
                      },
                    })
                  }
                />
              </Item>
              <Item fixedLabel>
                <Label>Tài khoản</Label>
                <Input
                  value={get(data, 'username', '')}
                  onChangeText={e =>
                    actions.handleInputChange({
                      target: {
                        name: 'username',
                        value: e,
                      },
                    })
                  }
                />
              </Item>
              <Item fixedLabel last>
                <Label>Sinh nhật</Label>
                <Input
                  textContentType="birthDay"
                  value={get(data, 'birthDay', '')}
                  onChangeText={e =>
                    actions.handleInputChange({
                      target: {
                        name: 'birthDay',
                        value: e,
                      },
                    })
                  }
                />
              </Item>
            </Form>
          ) : (
            <Card>
              <CardItem bordered>
                <Body>
                  <CardItem header bordered>
                    <Text>Họ Tên:</Text>
                    <Text> {get(data, 'name', 'chưa có thông tin')}</Text>
                  </CardItem>
                  <CardItem header bordered>
                    <Text>Email:</Text>
                    <Text> {get(data, 'email', 'chưa có thông tin')}</Text>
                  </CardItem>
                  <CardItem header bordered>
                    <Text>User name:</Text>
                    <Text> {get(data, 'username', 'chưa có thông tin')}</Text>
                  </CardItem>
                  <CardItem header bordered>
                    <Text>Ngày sinh:</Text>
                    <Text> {get(data, 'birthday', 'chưa có thông tin')}</Text>
                  </CardItem>
                </Body>
              </CardItem>
            </Card>
          )}
          <CardItem
            footer
            bordered
            style={{display: 'flex', justifyContent: 'center'}}>
            {isEdit ? (
              <View>
                <Button info onPress={() => setEdit(!isEdit)}>
                  <Text>Huỷ bỏ</Text>
                </Button>
                <Button
                  info
                  onPress={() => {
                    actions.editAcount({data});
                    setEdit(!isEdit);
                  }}>
                  <Text>Lưu lại</Text>
                </Button>
              </View>
            ) : (
              <Button info onPress={() => setEdit(!isEdit)}>
                <Text>Sửa thông tin tài khoản</Text>
              </Button>
            )}
          </CardItem>
        </Content>
      )}
    </Container>
  );
}
