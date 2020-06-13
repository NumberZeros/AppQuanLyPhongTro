import React, {PureComponent} from 'react';
import {Form, Item, Input, Label, Button, Text} from 'native-base';
import {get} from 'lodash';
export default class Login extends PureComponent {
  render() {
    const {actions, data} = this.props;
    return (
      <Form>
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
          <Label>Mật Khẩu</Label>
          <Input
            textContentType="password"
            value={get(data, 'password', '')}
            onChangeText={e =>
              actions.handleInputChange({
                target: {
                  name: 'password',
                  value: e,
                },
              })
            }
          />
        </Item>
        <Button rounded primary onPress={() => actions.login({data})}>
          <Text> Đăng Nhập </Text>
        </Button>
      </Form>
    );
  }
}
