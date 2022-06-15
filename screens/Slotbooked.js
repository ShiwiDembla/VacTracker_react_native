import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Title } from 'react-native-paper'
import Header from '../src/components/Headerbar'

export default Slotbooked=()=> {
  return (
    <View style={styles.container}>
      <Header/>
      <View style={{flex:1, marginTop:30}}>
      <Title style={styles.title}>Slotbooked</Title>
      <Text style={{color: '#48A296'}}> Your slot has been booked</Text>
      </View>
    </View>
  )}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'white'
  },
  title:{
    fontWeight:'bold',
    fontSize:30,
    color: '#48A296'
  }
})