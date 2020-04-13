import React, {PureComponent, Fragment} from 'react';
import {Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './src/views/Home/component/Container';
import Motel from './src/views/Motel/component/Container';
import Customer from './src/views/Customer/component/Container';
import Login from './src/views/Login/component/Container';
import 'react-native-gesture-handler';
import store from './src/redux/redux';
import {Provider} from 'react-redux';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Tab = createBottomTabNavigator();

const HomeStack = createStackNavigator();

function HomeStackScreen({navigation, props}) {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{
          headerLeft: () => (
            <Button
              onPress={() => navigation.toggleDrawer()}
              title="Menu"
              color="#000"
            />
          ),
        }}
      />
      <HomeStack.Screen name="Motel" component={Motel} />
      <HomeStack.Screen name="Customer" component={Customer} />
      <HomeStack.Screen name="Login" component={Login} />
    </HomeStack.Navigator>
  );
}

const MotelStack = createStackNavigator();

function MotelStackScreen({navigation, props}) {
  return (
    <MotelStack.Navigator>
      <MotelStack.Screen
        name="Motel"
        component={Motel}
        options={{
          headerLeft: () => (
            <Button
              onPress={() => navigation.toggleDrawer()}
              title="Menu"
              color="#000"
            />
          ),
        }}
      />
      <MotelStack.Screen name="Home" component={Home} />
      <MotelStack.Screen name="Customer" component={Customer} />
      <MotelStack.Screen name="Login" component={Login} />
    </MotelStack.Navigator>
  );
}

const CustomerStack = createStackNavigator();

function CustomerStackScreen({navigation, props}) {
  return (
    <CustomerStack.Navigator>
      <CustomerStack.Screen
        name="Customer"
        component={Customer}
        options={{
          headerLeft: () => (
            <Button
              onPress={() => navigation.toggleDrawer()}
              title="Menu"
              color="#000"
            />
          ),
        }}
      />
      <CustomerStack.Screen name="Home" component={Home} />
      <CustomerStack.Screen name="Motel" component={Motel} />
      <CustomerStack.Screen name="Login" component={Login} />
    </CustomerStack.Navigator>
  );
}

const LoginStack = createStackNavigator();

function LoginStackScreen({navigation, props}) {
  return (
    <LoginStack.Navigator>
      <LoginStack.Screen
        name="Login"
        component={Login}
        options={{
          headerLeft: () => (
            <Button
              onPress={() => navigation.toggleDrawer()}
              title="Menu"
              color="#000"
            />
          ),
        }}
      />
      <LoginStack.Screen name="Home" component={Home} />
      <LoginStack.Screen name="Motel" component={Motel} />
      <LoginStack.Screen name="Customer" component={Customer} />
    </LoginStack.Navigator>
  );
}

function AppPage({props}) {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeStackScreen} />
      <Tab.Screen name="Motel" component={MotelStackScreen} />
      <Tab.Screen name="Customer" component={CustomerStackScreen} />
      <Tab.Screen name="Login" component={LoginStackScreen} />
    </Tab.Navigator>
  );
}

const Drawer = createDrawerNavigator();

export default class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
              <Drawer.Screen name="AppPage" component={AppPage} />
            </Drawer.Navigator>
          </NavigationContainer>
        </Fragment>
      </Provider>
    );
  }
}
