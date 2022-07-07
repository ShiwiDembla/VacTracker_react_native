import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Welcome from './Welcome'
import Login from './Login'
import Signup from './Signup'

const RootStack = createStackNavigator();

const RootStackScreen= ({navigation}) => (
    <RootStack.Navigator headerMode='none'>
        <RootStackScreen.Screen name="Welcome" component={Welcome}/>
        <RootStack.Screen name="Login" component={Login}/>
        <RootStack.Screen name="Signup" component={Signup}/>
    </RootStack.Navigator>
);

export default RootStackScreen;