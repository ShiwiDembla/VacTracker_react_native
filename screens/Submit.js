// import React, {useState} from 'react';
// import {View,Text,Image} from 'react-native';
// import DateTimePicker from '@react-native-community/datetimepicker';

// export default Submit = () => {

// const [date, setDate] = useState(new Date());

// const onChange = (event, selectedDate) => {
//  const currentDate = selectedDate || date;
//  setDate(currentDate);
// };

//  return(
//    <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'black'}}> 
//        <DateTimePicker 
//          value={date}
//          onChange={onChange}
//        />
//    </View>

//  )


import React from "react"
// import { Header } from 'react-native-elements'
import {View, Text, StyleSheet,Image} from 'react-native'
import {Button, Title} from 'react-native-paper'
 import Header from '../src/components/Headerbar';

export default Submit = ({navigation}) => {
return(
  
<View style={styles.container}>
{/* <Header
backgroundColor="#48A296"
  placement="left"
  leftComponent={{ icon: 'menu', color: '#fff' }}
  centerComponent={{ text: 'Submit Request ', style: { color: '#fff' } }}
  rightComponent={{ icon: 'home', color: '#fff' }}
/> */}

<Header/>
  <View style={{flex:1, marginTop:20}}>
    <Title style ={[styles.title, {fontSize:30}]}>Request for Vaccine! </Title>
  <Text 
  style={[styles.title, {fontSize:15}]} 
  onPress={() => navigation.navigate('HomeScreen')}
  > 
  Your request has been submitted. You will be notified through Email 
  </Text>
  <Image 
  source={require('../src/assets/request.png')}
  style={styles.Image}
  />
  </View>
</View>
)
}


const styles= StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  
  },
  Image:{
    resizeMode:"contain",
    height:200,
    width:200,
    // justifyContent:'center'
  },
  title:{
    
    fontWeight:'bold',
    color: '#48A296',
    
  }

});