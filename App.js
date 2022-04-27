// In App.js in a new project

import * as React from 'react';
import Login from './Screens/Login';
import Signup from './Screens/Signup';
import Welcome from "./Screens/Welcome";
import HomeScreen from './Screens/HomeScreen';
<<<<<<< HEAD
import Home from './Screens/Home';
=======

>>>>>>> 4fbd8f0143cba52a29b10bfcb7560befd67163b9
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';




const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;