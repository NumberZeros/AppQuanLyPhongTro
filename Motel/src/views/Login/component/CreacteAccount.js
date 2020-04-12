import React, {PureComponent} from 'react';
import {Form, Item, Input, Label, Button, Text} from 'native-base';
import {get} from 'lodash';
export default class Login extends PureComponent {
  render() {
    const {actions, data, isCreate} = this.props;
    return (
      <Form>
        <Item fixedLabel>
          <Label>Tài khoản</Label>
          <Input
            value={get(data, 'userName', '')}
            onChangeText={e =>
              actions.handleInputChange({
                target: {
                  name: 'useName',
                  value: e,
                },
              })
            }
          />
        </Item>
        <Item fixedLabel last>
          <Label>Mật Khẩu</Label>
          <Input
            value={get(data, 'passWord', '')}
            onChangeText={e =>
              actions.handleInputChange({
                target: {
                  name: 'passWord',
                  value: e,
                },
              })
            }
          />
        </Item>
        <Item fixedLabel last>
          <Label>Ngày Sinh</Label>
          <Input
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
        <Button rounded primary onPress={() => actions.login()}>
          <Text> Đăng Nhập </Text>
        </Button>
        <Button rounded info onPress={() => actions.handleCreate()}>
          <Text> Tạo Tài Khoản </Text>
        </Button>
        {isCreate && (
          <Button rounded danger onPress={() => actions.handleCreate()}>
            <Text> Hủy Bỏ </Text>
          </Button>
        )}
      </Form>
    );
  }
}
