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

export default class Motel extends PureComponent {
  render() {
    const {motel} = this.props;
    console.log(motel);
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
            <Button onPress={() => this.props.actions.Motel()}>
              <Text> Motel </Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}
