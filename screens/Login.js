import React from "react";
import { Button } from 'react-native-paper';
import {StyleSheet,SafeAreaView,Text,TextInput, View, Image, Icon} from 'react-native';

export default Login = () => {
  return (
    <View style={styles.container  }>
      <View style={{ flex: 1, backgroundColor: "#48A296",justifyContent:'center',alignItems:'center'}} > 
      <Image source={require('../src/assets/signin.png')} style={styles.image} /> 
        <Text style={styles.titleText}>Welcome</Text>
      </View>
      <View style={{ flex: 2.5, backgroundColor: "white", borderTopLeftRadius:30, borderTopRightRadius:50}} >


      <SafeAreaView>
      
      <TextInput
        style={styles.input}
        // onChangeText={onChangeNumber}
        // value={number}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />
    </SafeAreaView>
        

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 20,
    backgroundColor: '#48A296',
    flexDirection: "column"
  },
  ButtonStyle:{
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 55,
    width: 148,
    },
    colorstyle:{
        // color:'#48A296',
        backgroundColor: '#48A296',
        marginVertical:5,
    
    },
    colorstyle2:{
        backgroundColor:'#88C7BE',
        marginVertical:5,
    },
    image: {
      flex: 1,
      width: '100%',
      height: '100%',
      resizeMode: 'contain',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    paddingTop:50,
  },

});

