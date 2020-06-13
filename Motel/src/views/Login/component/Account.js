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
import {get} from 'lodash';
export default class SegmentOutsideHeaderExample extends PureComponent {
  render() {
    const {data, isLogin, actions} = this.props;
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
            <Login {...this.props} />
          </Content>
        ) : (
          <Content padder>
            <Card>
              <CardItem bordered>
                <Body>
                  <CardItem header bordered>
                    <Text>Ho Tên : </Text>
                    <Text>{get(data, 'username', '')}</Text>
                  </CardItem>
                  <CardItem header bordered>
                    <Text>Ngay sinh:</Text>
                    <Text>{get(data, 'birthday', '')}</Text>
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
            )
          </Content>
        )}
      </Container>
    );
  }
}
