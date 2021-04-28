import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { makeHomeRoute, makeSignInRoute, makeSignUpRoute } from './main/factories/routes';

const Stack = createStackNavigator();


export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen options={{headerShown: false}} name="SignIn" component={makeSignInRoute} />
        <Stack.Screen options={{ title: 'Cadastro' }} name="SignUp" component={makeSignUpRoute} />
        <Stack.Screen options={{headerShown: false}} name="Home" component={makeHomeRoute} />
      </Stack.Navigator>
    </NavigationContainer>


  );
}
