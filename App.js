// In App.js in a new project

import * as React from 'react';
import {View, ActivityIndicator, Text} from 'react-native'
import { NavigationContainer, useTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { enableLatestRenderer } from 'react-native-maps';
import { AuthContext } from './src/components/Context';
// import { AuthProvider } from './src/context/AuthContext'


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


import AsyncStorage from '@react-native-async-storage/async-storage';
// import Signup from './Screens/Signup';
// import { ActivityIndicator } from 'react-native-paper';

const Stack = createNativeStackNavigator();


function App() {
  // const [isLoading, setIsLoading] = React.useState(true);
  // const[userToken,setUserToken] = React.useState(null);

  //reducer states
 const initialLoginState = {
  isLoading: true,
  email : null,
  userToken: null,
  
  }

  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN':
        return {
          ...prevState,
          email: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT':
        return {
          ...prevState,
          email: null,
          userToken: null,
          isLoading: false,
        };
      case 'REGISTER':
        return {
          ...prevState,
          email: action.id,
          userToken: action.token,
          isLoading: false,
        };
      // default:
      //   return prevState;
    }
  }

  //create login reducer

  const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);


  const authContext = React.useMemo(()=>({
    Login: async(email, password)=>{
      // setUserToken('abc');
      // setIsLoading(false);
      let userToken;
      userToken = null;
      if(email == 'admin' && password == '123'){
        // async storage 
        try{
          userToken = 'adminadmin';
          await AsyncStorage.setItem('userToken', userToken);
        }
        catch(e){
          console.log(e);
        }
        
        console.log('login user token', userToken);
        console.log(email);
        console.log(password);
      }
      else{
        console.log('cant login')
      }
      console.log('without login user token', userToken); //user token is null
    
      dispatch({type:'LOGIN',id:email,token:userToken});
    },
    Signup:()=>{
      setUserToken('abc');
      setIsLoading(false); 
    },

    // remove userToken from async storage 
    Signout: async()=>{
      // setUserToken(null);
      // setIsLoading(false);
      try{
        userToken = await AsyncStorage.removeItem('userToken');
       }
        catch(e){
          console.log(e);
        }
        //  console.log(' signout user token', userToken);
      dispatch({type:'LOGOUT'});
    }
  }), []);

  React.useEffect(()=>{
    
    setTimeout(async()=>{
      // setIsLoading(false);
      let userToken;
      userToken = null;
     // async storage
     try{
      userToken = await AsyncStorage.getItem('userToken');
     }
      catch(e){
        console.log(e);
      }
      console.log(' initial user token', userToken); //user token is null
      dispatch({type:'REGISTER',token:null});
    }, 1000);
  }, []);

  if( loginState.isLoading) {
    return(
      <View style={{flex:1, justifyContent:'center', alignItems:"center"}}>
        <ActivityIndicator size="large"/>
      </View>
    )

  }

  return (   
  
  // <AuthProvider>
  //   <NavigationContainer>
  //  <Stack.Navigator screenOptions={{ headerShown: false }}>
  //           <Stack.Screen name="HomeScreen" component={HomeScreen} />
  //           <Stack.Screen name="Home" component={Home} />
  //           <Stack.Screen name="CentersResults" component={CentersResults} />
  //           <Stack.Screen name="VaccineResults" component={VaccineResults} />
  //           <Stack.Screen name="BookSlot" component={BookSlot} />
  //           <Stack.Screen name="Submit" component={Submit} />
  //           <Stack.Screen name="Slotbooked" component={Slotbooked} />
  //      </Stack.Navigator> 
       
  //   <RootStackScreen />
  //   </NavigationContainer>
  //   </AuthProvider>

    <AuthContext.Provider value={authContext}>
    <NavigationContainer >
    <Text> {loginState.userToken} </Text> 
      {loginState.userToken != null ? (
            <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="CentersResults" component={CentersResults} />
            <Stack.Screen name="VaccineResults" component={VaccineResults} />
            <Stack.Screen name="BookSlot" component={BookSlot} />
            <Stack.Screen name="Submit" component={Submit} />
            <Stack.Screen name="Slotbooked" component={Slotbooked} />
          </Stack.Navigator>
      ):  <RootStackScreen />}
    </NavigationContainer>
    </AuthContext.Provider>

    );
}

export default App;
enableLatestRenderer();