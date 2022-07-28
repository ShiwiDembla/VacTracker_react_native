import React from 'react';

// import { createNativeStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthContext } from '../src/context/AuthContext';


import Welcome from './Welcome'
import Login from './Login'
import Signup from './Signup'

const RootStack = createNativeStackNavigator();

const RootStackScreen= ({navigation}) => (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
        <RootStack.Screen name="Welcome" component={Welcome}/>
        <RootStack.Screen name="Login" component={Login}/>
        <RootStack.Screen name="Signup" component={Signup}/>
    </RootStack.Navigator>
);

export default RootStackScreen;