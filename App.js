// In App.js in a new project

import * as React from 'react';
import Login from './Screens/Login';
import Signup from './Screens/Signup';
import Welcome from "./Screens/Welcome";
import HomeScreen from './Screens/HomeScreen';
import Home from './Screens/Home';
import CentersResults from './Screens/CentersResults';
import VaccineResults from './Screens/VaccineResults';
import BookSlot from './Screens/BookSlot';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { enableLatestRenderer } from 'react-native-maps';





const Stack = createNativeStackNavigator();

function App() {
  return (
    // <NavigationContainer >
    //   <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
    //     <Stack.Screen name="Welcome" component={Welcome} />
    //     <Stack.Screen name="Login" component={Login} />
    //     <Stack.Screen name="Signup" component={Signup} />
    //     <Stack.Screen name="HomeScreen" component={HomeScreen} />
    //     <Stack.Screen name="Home" component={Home} />
    //     <Stack.Screen name="CentersResults" component={CentersResults} />
    //     <Stack.Screen name="VaccineResults" component={VaccineResults} />
    //     <Stack.Screen name="BookSlot" component={BookSlot} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <BookSlot/>
  );
}

export default App;
// enableLatestRenderer();