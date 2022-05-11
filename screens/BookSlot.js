// import React from 'react'
// import {View,Text, StyleSheet} from 'react-native'
// import { Title } from 'react-native-paper'
// import { Card } from "@paraboly/react-native-card";
// export default BookSlot=()=> {
//   return (
//    <View style={styles.container}>
//        <View style={{flex:1,backgroundColor:'#ffffff', justifyContent:'center', alignItems:'center'}}> 
//        <Title style={styles.title}>Book a Slot </Title>
//        </View>
//        <View style={styles.innerContainer}>
//        <Card
//             title="Title"
//             iconName="home"
//             iconType="Entypo"
//             topRightText="50/301"
//             bottomRightText="30 km"
//             description="Lorem ipsum dolor sit."
//             onPress={() => {}}
//             />
//        </View>
  
//    </View>
//   )
// }


// const styles=StyleSheet.create({
//     container:{
//        flex:1,
//        backgroundColor: '#ffffff',
//        justifyContent:'center',
//        flexDirection: "column",
      
//        },
//        innerContainer:{
//            flex:2.5,
//            backgroundColor:'#48A296',
//            borderTopLeftRadius:50,
//            borderTopRightRadius:50,
//        },
//        title:{
//         fontWeight: "bold",
//         color: '#48A296',
//         fontSize: 30,
//        }
// })

import React, {useState} from 'react';
import { Text, StyleSheet, View, TextInput, Button} from 'react-native';
import { Picker } from '@react-native-picker/picker';

const BookSlot = () => {
  const [currency, setCurrency] = useState('US Dollar');
  return (
    <View style={styles.container}>
      <Text style={styles.formLabel}> Demo Form </Text>
      <View>
        <TextInput placeholder="Email" style={styles.inputStyle} />
        <TextInput
          secureTextEntry={true}
          placeholder="Password"
          style={styles.inputStyle}
        />
        <Picker
          selectedValue={currency}
          onValueChange={currentCurrency => setCurrency(currentCurrency)}>
          <Picker.Item label="USD" value="US Dollars" />
          <Picker.Item label="EUR" value="Euro" />
          <Picker.Item label="NGN" value="Naira" />
        </Picker>
        <Text
          style={{
            fontSize: 30,
            color: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          Selected: {currency}
        </Text>
        {/* <Button
          title="Submit"
          color="#fff"
          onPress={() => alert('Simple Button pressed')}
        /> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#356859',
    alignItems: 'center',
    justifyContent: 'center',
  },

  formLabel: {
    fontSize: 20,
    color: '#fff',
  },
  inputStyle: {
    marginTop: 20,
    width: 300,
    height: 40,
    paddingHorizontal: 10,
    borderRadius: 50,
    backgroundColor: '#b9e4c9',
  },
  formText: {
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    fontSize: 20,
  },
  text: {
    color: '#fff',
    fontSize: 20,
  },
});

export default BookSlot;