import React, {PureComponent} from 'react';
import {
  Container,
  Card,
  CardItem,
  Body,
  Button,
  Segment,
  Content,
  Text,
} from 'native-base';
import Login from './Login';
export default class SegmentOutsideHeaderExample extends PureComponent {
  render() {
    const {data, isLogin, actions} = this.props;
    return (
      <Container>
        <Segment>
          <Button
            first
            active={isLogin === false ? true : false}
            onPress={() => actions.handleLogin()}>
            <Text>Thông tin tài khoản</Text>
          </Button>
          <Button active={isLogin} onPress={() => actions.handleLogin()}>
            <Text>Đăng nhập</Text>
          </Button>
        </Segment>
        {isLogin ? (
          <Content padder>
            <Login {...this.props} />
          </Content>
        ) : (
          <Content padder>
            {data.map((o, index) => (
              <Card key={index}>
                <CardItem bordered>
                  <Body>
                    <CardItem header bordered>
                      <Text>Ho Tên : {o.useName}</Text>
                    </CardItem>
                    <CardItem header bordered>
                      <Text>Ngay sinh: {o.birthDay}</Text>
                    </CardItem>
                  </Body>
                </CardItem>
                <CardItem footer bordered>
                  <Button
                    rounded
                    info
                    onPress={() => {
                      actions.handleLogin();
                      actions.handleCreate();
                    }}>
                    <Text> Sửa thông tin tài khoản </Text>
                  </Button>
                </CardItem>
              </Card>
            ))}
          </Content>
        )}
      </Container>
    );
  }
}
