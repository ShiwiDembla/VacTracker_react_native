

import * as React from 'react';

import { View, Text, Button } from 'react-native';

function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', 
      backgroundColor: '#16558F'
       }}>
        <Text>Shiwi</Text>
        <Button
        title="Go to Details"
        color= '#61B0B7'
        onPress={() => navigation.navigate('Details')}
      />
      </View>
    );
  }

  export default HomeScreen;