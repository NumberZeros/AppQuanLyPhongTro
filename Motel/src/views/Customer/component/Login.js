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
    return (
      <Container>
        <Header />
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
            <Button onPress={() => this.props.actions.login()}>
              <Text> Login </Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}
