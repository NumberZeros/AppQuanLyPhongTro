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
export default class SegmentOutsideHeaderExample extends PureComponent {
  render() {
    const {motel, isMotel, actions} = this.props;
    return (
      <Container>
        <Segment>
          <Button
            first
            active={isMotel === false ? true : false}
            onPress={() => actions.handleMotel()}>
            <Text>Thông tin tài khoản</Text>
          </Button>
          <Button active={isMotel} onPress={() => actions.handleMotel()}>
            <Text>Đăng nhập</Text>
          </Button>
        </Segment>
        {motel.map((o, index) => (
          <Card>
            <CardItem header bordered>
              <Text>NativeBase</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                  NativeBase is a free and open source framework that enable
                  developers to build high-quality mobile apps using React
                  Native iOS and Android apps with a fusion of ES6.
                </Text>
              </Body>
            </CardItem>
            <CardItem footer bordered>
              <Text>GeekyAnts</Text>
            </CardItem>
          </Card>
        ))}
      </Container>
    );
  }
}
