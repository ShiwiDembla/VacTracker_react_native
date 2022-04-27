import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
<<<<<<< HEAD
import Icon from 'react-native-vector-icons/FontAwesome';
=======
>>>>>>> 4fbd8f0143cba52a29b10bfcb7560befd67163b9
import React from 'react';
import Home from './Home';
import VaccineDetails from './VaccineDetails';
import RequestVaccine from './RequestVaccine';
import TrackVaccine from './TrackVaccine';

const Tab = createMaterialBottomTabNavigator();

function HomeScreen() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#48A296"
      barStyle={{ backgroundColor: 'white' }}
    >
      <Tab.Screen
        name="Login"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="TrackVaccine"
        component={TrackVaccine}
        options={{
<<<<<<< HEAD
          tabBarLabel: 'Track',
          tabBarIcon: ({ color }) => (
            // <MaterialCommunityIcons name="location" color={color} size={26} />
            <Icon name="location-arrow"
          size={26}
          color={color} />
=======
          tabBarLabel: 'Request',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
>>>>>>> 4fbd8f0143cba52a29b10bfcb7560befd67163b9
          ),
        }}
      />
      <Tab.Screen
        name="VaccineDetails"
        component={VaccineDetails}
        options={{
          tabBarLabel: 'Details',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="RequestVaccine"
        component={RequestVaccine}
        options={{
          tabBarLabel: 'Request',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
      
    </Tab.Navigator>
  );
}

export default HomeScreen;