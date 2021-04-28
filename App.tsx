import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { makeSignInRoute, makeSignUpRoute } from './main/factories/routes';
import { Home } from './presentation/pages/home';

const Stack = createStackNavigator();


export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen name="SignIn" component={makeSignInRoute} />
        <Stack.Screen name="SignUp" component={makeSignUpRoute} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>


  );
}
