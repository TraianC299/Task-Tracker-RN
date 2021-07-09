import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';import MainPage from "./app/Screens/MainPage"
import TestScreen from './app/Screens/TestScreen';
import Animation from './app/Components/Animated';

const Stack = createStackNavigator();


export default function App() {
  
  return (
    <>

<NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: '#00D870',
        },
        headerTintColor: '#fff',
        
      }}>
        <Stack.Screen name="Home" component={MainPage} />
        <Stack.Screen name="Test" component={TestScreen} />
        <Stack.Screen name="Animation" component={Animation} />
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}


