import React, {PureComponent, Fragment} from 'react';
import {View, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './src/views/HomeScreen';
import About from './src/views/AboutScreen';
import Login from './src/views/Login/component/Container';
import 'react-native-gesture-handler';
import redux from './src/redux/redux';
import {Provider} from 'react-redux';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Tab = createBottomTabNavigator();

const HomeStack = createStackNavigator();

function HomeStackScreen({navigation}) {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={Home}  options={{
          headerLeft: () => (
            <Button
              onPress={() => navigation.toggleDrawer()}
              title="Info"
              color="#black"
            />
          ),
        }}/>
      <HomeStack.Screen name="About" component={About} />
    </HomeStack.Navigator>
  );
}

const SettingsStack = createStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="About" component={About} />
      <SettingsStack.Screen name="Login" component={Login} />
    </SettingsStack.Navigator>
  );
}

function AppPage() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeStackScreen} />
      <Tab.Screen name="About" component={SettingsStackScreen} />
    </Tab.Navigator>
  );
}

const Drawer = createDrawerNavigator();

function Plugin({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

export default class App extends PureComponent {
  render() {
    return (
      <Provider store={redux.store}>
        <Fragment>
          <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
              <Drawer.Screen name="AppPage" component={AppPage} />
              <Drawer.Screen name="Plugin" component={Plugin} />
            </Drawer.Navigator>
          </NavigationContainer>
        </Fragment>
      </Provider>
    );
  }
}
