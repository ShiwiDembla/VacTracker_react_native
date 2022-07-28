// In App.js in a new project

import * as React from 'react';
// import {View, ActivityIndicator} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { enableLatestRenderer } from 'react-native-maps';
import { AuthProvider } from './src/context/AuthContext'


// import Login from './Screens/Login';
// import Signup from './Screens/Signup';
// import Welcome from "./Screens/Welcome";
import HomeScreen from './Screens/HomeScreen';
import Home from './Screens/Home';
import RequestVaccine from './Screens/RequestVaccine';
import CentersResults from './Screens/CentersResults';
import VaccineResults from './Screens/VaccineResults';
import BookSlot from './Screens/BookSlot';
import Submit from './Screens/Submit';
import VaccineDetails from './Screens/VaccineDetails';
import Cards from './src/components/Cards';
import DetailsCards from './src/components/DetailsCards';
import Slotbooked from './Screens/Slotbooked';
import RootStackScreen from './Screens/RootStackScreen';

// import Signup from './Screens/Signup';
// import { ActivityIndicator } from 'react-native-paper';

const Stack = createNativeStackNavigator();


function App() {
  // const [isLoading, setIsLoading] = React.useState(true);
  // const[userToken,setUserToken] = React.useState(null);

  // const authContext = React.useMemo(()=>({
  //   Login:()=>{
  //     setUserToken('abc');
  //     setIsLoading(false);
  //   },
  //   Signup:()=>{
  //     setUserToken('abc');
  //     setIsLoading(false);
  //   },
  //   Signout:()=>{
  //     setUserToken(null);
  //     setIsLoading(false);
  //   }
  // }));

  // React.useEffect(()=>{
    
  //   setTimeout(()=>{
  //     setIsLoading(false);
  //   }, 1000);
  // }, []);

  // if( isLoading) {
  //   return(
  //     <View style={{flex:1, justifyContent:'center', alignItems:"center"}}>
  //       <ActivityIndicator size="large"/>
  //     </View>
  //   )

  // }

  return (   
  
  <AuthProvider>
    <NavigationContainer>
   {/* <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="CentersResults" component={CentersResults} />
            <Stack.Screen name="VaccineResults" component={VaccineResults} />
            <Stack.Screen name="BookSlot" component={BookSlot} />
            <Stack.Screen name="Submit" component={Submit} />
            <Stack.Screen name="Slotbooked" component={Slotbooked} />
       </Stack.Navigator> */}
       
    <RootStackScreen />
    </NavigationContainer>
    </AuthProvider>

    // <AuthContext.Provider value={authContext}>
    // <NavigationContainer >
    //   {userToken != null ? (
    //         <Stack.Navigator screenOptions={{ headerShown: false }}>
    //         <Stack.Screen name="HomeScreen" component={HomeScreen} />
    //         <Stack.Screen name="Home" component={Home} />
    //         <Stack.Screen name="CentersResults" component={CentersResults} />
    //         <Stack.Screen name="VaccineResults" component={VaccineResults} />
    //         <Stack.Screen name="BookSlot" component={BookSlot} />
    //         <Stack.Screen name="Submit" component={Submit} />
    //         <Stack.Screen name="Slotbooked" component={Slotbooked} />
    //       </Stack.Navigator>
    //   ):  <RootStackScreen />}
    // </NavigationContainer>
    // </AuthContext.Provider>

    );
}

export default App;
enableLatestRenderer();