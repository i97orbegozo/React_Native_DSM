import React, { Component } from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Calendario from './Calendario';
import DetalleExcursion from './DetalleExcursionComponent';
import Home from './HomeComponent';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function CalendarioNavegador() {
  return (
    <Stack.Navigator
      initialRouteName="Calendario"
      headerMode="screen"
      screenOptions={{
        headerTintColor: '#fff',
        headerStyle: { backgroundColor: '#015afc' },
        headerTitleStyle: { color: '#fff' },
      }}
    >
      <Stack.Screen
        name="Calendario"
        component={Calendario}
        options={{
          title: 'Calendario Gaztaroa',
        }}
      />
      <Stack.Screen
        name="DetalleExcursion"
        component={DetalleExcursion}
        options={{
          title: 'Detalle Excursión',
        }}
      />
    </Stack.Navigator>
  );
}

function HomeNavegador(){
  return(
    <Stack.Navigator
      initialRouteName='Home'
      headerMode='screen'
      screenOptions={{
        headerTintColor: '#fff',
        headerStyle: { backgroundColor: '#015afc' },
        headerTitleStyle: { color: '#fff'}
      }}>
        <Stack.Screen
          name='Home'
          component={Home}
          options={{
            title: 'Campo base'
          }}
        />
    </Stack.Navigator>
  );
}

function DrawerNavegador(){
  return(
    <Drawer.Navigator
      drawerStyle={{
        backgroundColor: '#c2d3da',
      }}
      initialRouteName='Home'
    >
      <Drawer.Screen name='Home' component={HomeNavegador}/>
      <Drawer.Screen name='Calendario' component={CalendarioNavegador}/>
    </Drawer.Navigator>
  );
}

class Campobase extends Component {

  render() {
 
    return (
      <NavigationContainer>
        <View style={{flex:1, paddingTop: Platform.OS === 'android' ? 0 : Constants.statusBarHeight }}>
          <DrawerNavegador />
        </View>      
      </NavigationContainer>
    );
  }
}

export default Campobase;