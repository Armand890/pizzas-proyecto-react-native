import React from 'react';
import Animated from 'react-native-reanimated';
import { DrawerActions, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import loggin from './screens/logginScreens';
import home from './screens/homeScreens';
import detall from './screens/detalleScreens';



const Stack = createNativeStackNavigator();

const app = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="loggin" component={loggin} />
        <Stack.Screen name="home" component={home} />
        <Stack.Screen name="detalles" component={detall} />
        

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default app;