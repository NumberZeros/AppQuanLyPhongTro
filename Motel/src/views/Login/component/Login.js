import React, {PureComponent} from 'react';
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
  Button,
  Text,
} from 'native-base';

export default class Login extends PureComponent {
  render() {
    console.log(JSON.stringify(this.props));
    return (
      <Container>
        <Content>
          <Form>
            <Item fixedLabel>
              <Label>Username</Label>
              <Input />
            </Item>
            <Item fixedLabel last>
              <Label>Password</Label>
              <Input />
            </Item>
            <Button rounded info onPress={() => this.props.actions.login()}>
              <Text> Đăng Nhập </Text>
            </Button>
            <Button rounded info onPress={() => this.props.actions.login()}>
              <Text> Tạo Tài Khoản </Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}
