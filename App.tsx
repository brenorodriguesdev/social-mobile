import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { makeHomeRoute, makeProfileRoute, makeSignInRoute, makeSignUpRoute } from './main/factories/routes';
import { HomeProvider } from './presentation/contexts/home';

const Stack = createStackNavigator();


export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen options={{ title: 'Entrar', headerShown: false }} name="SignIn" component={makeSignInRoute} />
        <Stack.Screen options={{ title: 'Cadastro' }} name="SignUp" component={makeSignUpRoute} />
        <Stack.Screen options={{ title: 'Página Inicial', headerShown: false }} name="Home" component={makeHomeRoute} />
        <Stack.Screen options={{ title: 'Perfil' }} name="Profile" component={makeProfileRoute} />
      </Stack.Navigator>
    </NavigationContainer>


  );
}
