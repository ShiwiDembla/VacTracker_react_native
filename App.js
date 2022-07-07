// In App.js in a new project

import * as React from 'react';
import Login from './Screens/Login';
import Signup from './Screens/Signup';
import Welcome from "./Screens/Welcome";
import HomeScreen from './Screens/HomeScreen';
import Home from './Screens/Home';
import RequestVaccine from './Screens/RequestVaccine';
import CentersResults from './Screens/CentersResults';
import VaccineResults from './Screens/VaccineResults';
import BookSlot from './Screens/BookSlot';
import Submit from './Screens/Submit';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { enableLatestRenderer } from 'react-native-maps';
import VaccineDetails from './Screens/VaccineDetails';
import Cards from './src/components/Cards';
import DetailsCards from './src/components/DetailsCards';
import Slotbooked from './Screens/Slotbooked';

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
        <Stack.Screen name="CentersResults" component={CentersResults} />
        <Stack.Screen name="VaccineResults" component={VaccineResults} />
        <Stack.Screen name="BookSlot" component={BookSlot} />
        <Stack.Screen name="Submit" component={Submit} />
        <Stack.Screen name="Slotbooked" component={Slotbooked} />
      </Stack.Navigator>
    </NavigationContainer>
  
    // <BookSlot/>
    // <RequestVaccine/>
    // <VaccineDetails/>
    // <Submit/>
    // <Cards/>
    // <Slotbooked/>

  );
}

export default App;
enableLatestRenderer();