import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { styleGlobal } from './styles-global';

import SplashScreen from './views/splash';
import HomePage from './views/home';
import DetailMateri from './views/detail';
import Quiz from './views/quiz';
import Search from './views/search';
import Dummy from './views/dummy';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='splash' screenOptions={{headerShown:false}}>
        <Stack.Screen name="splash" component={SplashScreen}/>
        <Stack.Screen name="home" component={HomePage}/>
        <Stack.Screen name="detail" component={DetailMateri}/>
        <Stack.Screen name="quiz" component={Quiz}/>
        <Stack.Screen name="search" component={Search}/>
        <Stack.Screen name="dummy" component={Dummy}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}